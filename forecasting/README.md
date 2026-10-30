# Hierarchical Forecasting Field Note

**Live route:** https://nandolab.github.io/forecasting/

**Portfolio:** https://nandolab.github.io/

This route explains the coherence problem in hierarchical forecasting and includes a browser-side reconciliation illustration with invented values.

## Scope and provenance

Fernando Barbosa led a three-person project team delivering a daily hierarchical forecasting tool for the global Cellulosics business at IFF. His work included forecasting architecture, cloud implementation and project infrastructure.

This public route does not contain IFF data, code, model details, forecast accuracy, or production design. The interactive values and hierarchy labels are synthetic. The browser demo does not train NeuralForecast and does not claim improved accuracy.

## Demonstration

The small hierarchy has one global total, two groups, and four bottom-level series. The methods show:

- Independent base forecasts (may be incoherent).
- Bottom-up (preserves leaves and sums upward).
- Top-down with synthetic shares.
- OLS projection with identity error weights, a special case in the MinT family.

MinT in practice uses forecast-error covariance information. This interactive OLS calculation is deliberately not presented as covariance-estimated MinT or as the output of Nixtla's package.

## Nixtla workflow

The page includes a Python sketch aligned to Nixtla's documented APIs for NeuralForecast, HINT, BottomUp, MinTrace and HierarchicalReconciliation. Dataset preparation, fitted residuals and library version pinning are omitted. Use temporal validation and compare point/probabilistic accuracy across levels and horizons; coherence alone does not guarantee better forecasts.

## Files

- index.html — route content and demo markup.
- neuralforecast_hierarchical_demo.py — starter experiment using Nixtla's public TourismLarge dataset and reconciler examples.
- ../assets/css/style.scss — shared GitHub Pages Minimal theme styling.
- ../assets/js/forecasting.js — synthetic reconciliation calculations and interaction.

Run the starter script with the packages listed at its top. It downloads public Tourism data and writes separate base and reconciled forecast CSVs; it contains no IFF data.

## References

- [Nixtla: Hierarchical Forecast tutorial](https://nixtlaverse.nixtla.io/neuralforecast/docs/tutorials/hierarchical_forecasting.html)
- [Nixtla: NeuralForecast introduction](https://nixtlaverse.nixtla.io/neuralforecast/docs/getting-started/introduction.html)
- [Nixtla: HierarchicalForecast library](https://github.com/Nixtla/hierarchicalforecast)
- Wickramasuriya, Athanasopoulos & Hyndman (2019), [Optimal forecast reconciliation through trace minimization](https://doi.org/10.1080/01621459.2018.1448825)
