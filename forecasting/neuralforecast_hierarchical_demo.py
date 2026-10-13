#!/usr/bin/env python3
"""Public-data example of neural and reconciled hierarchical forecasting.

Install:
    pip install datasetsforecast neuralforecast hierarchicalforecast statsforecast

This is a learning example based on Nixtla's public TourismLarge tutorial.
It does not use or reproduce any private IFF model, data, or result.
"""
from __future__ import annotations

import argparse
import logging
from pathlib import Path

import numpy as np
import pandas as pd
from datasetsforecast.hierarchical import HierarchicalData
from hierarchicalforecast.core import HierarchicalReconciliation
from hierarchicalforecast.methods import BottomUp, MinTrace
from neuralforecast import NeuralForecast
from neuralforecast.losses.pytorch import GMM, sCRPS
from neuralforecast.models import HINT, NHITS
from statsforecast import StatsForecast
from statsforecast.models import AutoARIMA


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--horizon", type=int, default=12, help="Forecast horizon in months.")
    parser.add_argument("--max-steps", type=int, default=2000, help="NHITS training steps.")
    parser.add_argument("--data-dir", type=Path, default=Path("./data"))
    parser.add_argument("--output-dir", type=Path, default=Path("./forecasting-output"))
    args = parser.parse_args()

    logging.getLogger("pytorch_lightning").setLevel(logging.ERROR)
    args.output_dir.mkdir(parents=True, exist_ok=True)

    # Public Australian Tourism hierarchy (555 monthly series).
    Y_df, S_df, tags = HierarchicalData.load(str(args.data_dir), "TourismLarge")
    Y_df["ds"] = pd.to_datetime(Y_df["ds"])
    S_df = S_df.reset_index(names="unique_id")

    # Use a chronological holdout for every series.
    test_df = Y_df.groupby("unique_id", observed=True).tail(args.horizon)
    train_df = Y_df.drop(test_df.index).copy()

    # HINT wraps a neural base model with a coherent hierarchy-aware forecast.
    levels = np.arange(0, 100, 2)
    quantiles = np.sort(
        np.concatenate(
            [[50 - level / 2, 50 + level / 2] if level else [50] for level in levels]
        )
        / 100
    )
    nhits = NHITS(
        h=args.horizon,
        input_size=24,
        loss=GMM(n_components=10, quantiles=quantiles),
        valid_loss=sCRPS(quantiles=quantiles),
        max_steps=args.max_steps,
        enable_progress_bar=False,
    )
    hint = HINT(
        h=args.horizon,
        S=S_df.drop(columns="unique_id").to_numpy(),
        model=nhits,
        reconciliation="BottomUp",
    )
    neural_forecast = NeuralForecast(models=[hint], freq="MS")
    neural_forecast.fit(df=train_df, val_size=args.horizon)
    hint_forecasts = neural_forecast.predict()
    hint_path = args.output_dir / "hint_nhits_forecasts.csv"
    hint_forecasts.to_csv(hint_path, index=False)

    # Generate an independent statistical baseline, then compare two reconcilers.
    stats_forecast = StatsForecast(models=[AutoARIMA()], freq="MS", n_jobs=-1)
    base_forecasts = stats_forecast.forecast(
        df=train_df,
        h=args.horizon,
        fitted=True,
        level=np.arange(2, 100, 2),
    )
    fitted = stats_forecast.forecast_fitted_values()
    reconciler = HierarchicalReconciliation(
        reconcilers=[
            BottomUp(),
            MinTrace(method="mint_shrink"),
        ]
    )
    reconciled = reconciler.reconcile(
        Y_hat_df=base_forecasts,
        Y_df=fitted,
        S=S_df,
        tags=tags,
        level=np.arange(2, 100, 2),
        intervals_method="bootstrap",
    )
    reconciled_path = args.output_dir / "autoarima_reconciled_forecasts.csv"
    reconciled.to_csv(reconciled_path, index=False)

    print(f"Holdout: {args.horizon} months across {Y_df['unique_id'].nunique()} series")
    print(f"HINT + NHITS output: {hint_path}")
    print(f"AutoARIMA + BottomUp/MinTrace output: {reconciled_path}")
    print("Next: evaluate accuracy by hierarchy level and horizon against the holdout.")
    print(f"Holdout rows available: {len(test_df)}")


if __name__ == "__main__":
    main()
