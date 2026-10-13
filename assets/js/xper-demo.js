/* Educational reconstruction of an experiment workflow. All records are synthetic. */
(()=>{
'use strict';
const root=document.getElementById('xper-demo');if(!root)return;
const lang=new URLSearchParams(location.search).get('lang')||'en';
const L=lang==='pt'?1:lang==='es'?2:0;
const t=(en,pt,es)=>[en,pt,es][L];
const S={
dataset:t('Dataset','Base de dados','Datos'),
a:t('Product A · synthetic','Produto A · sintético','Producto A · sintético'),
b:t('Product B · synthetic','Produto B · sintético','Producto B · sintético'),
clean:t('Missing-data treatment','Tratamento de dados ausentes','Tratamiento de datos faltantes'),
impute:t('Impute training-set means','Imputar médias do treino','Imputar medias del entrenamiento'),
drop:t('Remove incomplete rows','Remover linhas incompletas','Eliminar filas incompletas'),
feature:t('Add utilization × debt interaction','Adicionar interação utilização × dívida','Añadir interacción utilización × deuda'),
trials:t('Regularization trials','Tentativas de regularização','Ensayos de regularización'),
run:t('Run experiment','Executar experimento','Ejecutar experimento'),
reset:t('Clear run history','Limpar histórico','Limpiar historial'),
empty:t('Choose a dataset and run your first experiment. Each run records its configuration, fitted model and validation results.','Escolha uma base e execute o primeiro experimento. Cada execução registra a configuração, o modelo ajustado e os resultados de validação.','Elija datos y ejecute el primer experimento. Cada ejecución registra la configuración, el modelo ajustado y las validaciones.'),
synthetic:t('600 invented records per product. A small logistic-regression model is fitted in your browser; no original Xper code, MLflow server or customer data is used.','600 registros inventados por produto. Uma pequena regressão logística é ajustada no navegador; não são usados código original do Xper, servidor MLflow ou dados de clientes.','600 registros inventados por producto. Una pequeña regresión logística se ajusta en el navegador; no se utiliza código original de Xper, servidor MLflow ni datos de clientes.'),
preview:t('Inspect the input sample','Inspecione a amostra de entrada','Inspeccione la muestra de entrada'),
id:t('Record','Registro','Registro'),u:t('Utilization','Utilização','Utilización'),d:t('Debt ratio','Índice de dívida','Índice de deuda'),p:t('Payment signal','Sinal de pagamento','Señal de pago'),
y:t('Synthetic default label','Rótulo sintético de inadimplência','Etiqueta sintética de impago'),
history:t('Experiment history','Histórico de experimentos','Historial de experimentos'),
review:t('Review','Inspecionar','Inspeccionar'),
export:t('Download run artifact (JSON)','Baixar artefato da execução (JSON)','Descargar artefacto (JSON)'),
auc:t('Holdout AUC','AUC no teste','AUC en prueba'),
brier:t('Validation Brier ↓','Brier de validação ↓','Brier de validación ↓'),
chart:t('Validation loss during fitting','Perda de validação durante o ajuste','Pérdida de validación durante el ajuste'),
chartNote:t('Log loss by training epoch. Lower is better; the scale is shared across saved runs.','Log loss por época de treino. Menor é melhor; a escala é compartilhada entre execuções salvas.','Log loss por época de entrenamiento. Menor es mejor; la escala se comparte entre ejecuciones guardadas.'),
pending:t('Configuration changed. Run again to record a new experiment.','Configuração alterada. Execute novamente para registrar um novo experimento.','Configuración modificada. Ejecute de nuevo para registrar otro experimento.')
};
root.innerHTML='<p class="lab-notice">'+S.synthetic+'</p><div class="lab-config"><label>'+S.dataset+'<select id="lab-data"><option value="a">'+S.a+'</option><option value="b">'+S.b+'</option></select></label><label>'+S.clean+'<select id="lab-clean"><option value="impute">'+S.impute+'</option><option value="drop">'+S.drop+'</option></select></label><label>'+S.trials+'<select id="lab-trials"><option value="3">3</option><option value="6">6</option></select></label><label class="lab-check"><input type="checkbox" id="lab-feature" checked>'+S.feature+'</label></div><div id="lab-data-info"></div><details class="lab-input"><summary>'+S.preview+'</summary><div class="lab-table-scroll"><table><thead><tr>'+[S.id,S.u,S.d,S.p,S.y].map(s=>'<th scope="col">'+s+'</th>').join('')+'</tr></thead><tbody id="lab-sample"></tbody></table></div></details><div class="lab-actions"><button class="primary" id="lab-run">'+S.run+'</button><button id="lab-reset">'+S.reset+'</button></div><p id="lab-status" role="status">'+S.empty+'</p><section id="lab-results" hidden><h3>'+S.history+'</h3><div class="lab-table-scroll"><table><thead><tr>'+['Run',S.dataset,'λ',S.brier,S.auc,''].map(s=>'<th scope="col">'+s+'</th>').join('')+'</tr></thead><tbody id="lab-history"></tbody></table></div><div id="lab-report"></div></section>';
const q=s=>root.querySelector(s);let history=[],chosen=null;
function dataset(key){let seed=key==='a'?714:1901;const rnd=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};return Array.from({length:600},(_,i)=>{const u=rnd(),d=rnd(),p=rnd();const z=-1.6+2*(u-.5)+2.4*(d-.5)-2*(p-.5)+4*(u-.5)*(d-.5)+(key==='b'?.35:0);const y=+(rnd()<1/(1+Math.exp(-z)));return {id:i+1,u:i%19===0?null:u,d,p,y};});}
function input(){const rows=dataset(q('#lab-data').value);const missing=rows.filter(r=>r.u===null).length;q('#lab-data-info').textContent=t('600 rows · ','600 linhas · ','600 filas · ')+missing+t(' missing utilization values · 70 / 15 / 15 split by record order',' valores ausentes de utilização · divisão por ordem dos registros 70 / 15 / 15',' valores faltantes de utilización · división por orden de registros 70 / 15 / 15');q('#lab-sample').innerHTML=rows.slice(0,6).map(r=>'<tr>'+[r.id,...[r.u,r.d,r.p].map(v=>v===null?'—':v.toFixed(2)),r.y].map(v=>'<td>'+v+'</td>').join('')+'</tr>').join('');}
const sigmoid=z=>1/(1+Math.exp(-Math.max(-30,Math.min(30,z))));
const predict=(w,r)=>sigmoid(w.reduce((s,v,j)=>s+v*r.x[j],0));
function loss(w,rows){return rows.reduce((s,r)=>{const p=predict(w,r);return s-r.y*Math.log(p)-(1-r.y)*Math.log(1-p);},0)/rows.length;}
function fit(rows,valid,lambda){const w=Array(rows[0].x.length).fill(0),trace=[];for(let epoch=0;epoch<120;epoch++){const g=w.map(()=>0);for(const r of rows){const e=predict(w,r)-r.y;r.x.forEach((v,j)=>g[j]+=e*v);}w.forEach((_,j)=>w[j]-=.3*(g[j]/rows.length+(j?lambda*w[j]:0)));if(epoch%6===0||epoch===119)trace.push([epoch+1,loss(w,valid)]);}return {w,trace};}
function metrics(w,rows){const predictions=rows.map(r=>({p:predict(w,r),y:r.y})).sort((a,b)=>a.p-b.p);const pos=predictions.filter(r=>r.y).length,neg=rows.length-pos;let sum=0;for(let i=0;i<predictions.length;){let j=i+1;while(j<predictions.length&&predictions[j].p===predictions[i].p)j++;for(let k=i;k<j;k++)if(predictions[k].y)sum+=(i+1+j)/2;i=j;}return {auc:pos&&neg?(sum-pos*(pos+1)/2)/(pos*neg):null,brier:predictions.reduce((s,r)=>s+(r.p-r.y)**2,0)/rows.length};}
function run(){
const key=q('#lab-data').value,clean=q('#lab-clean').value,feature=q('#lab-feature').checked,count=+q('#lab-trials').value,raw=dataset(key);
const parts=[raw.slice(0,420),raw.slice(420,510),raw.slice(510)];
const available=parts[0].filter(r=>r.u!==null),mean=available.reduce((s,r)=>s+r.u,0)/available.length;
const prep=rows=>rows.filter(r=>clean!=='drop'||r.u!==null).map(r=>{const u=r.u===null?mean:r.u;return {x:[1,2*(u-.5),2*(r.d-.5),2*(r.p-.5),...(feature?[4*(u-.5)*(r.d-.5)]:[])],y:r.y};});
const [train,valid,test]=parts.map(prep),lambdas=[0,.01,.1,.001,.03,.3].slice(0,count);
const trials=lambdas.map(lambda=>{const model=fit(train,valid,lambda);return {...model,lambda,validation:metrics(model.w,valid)};}).sort((a,b)=>a.validation.brier-b.validation.brier);
const best=trials[0];const result={id:'XP-'+String(history.length+1).padStart(3,'0'),synthetic:true,dataset:key,cleaning:clean,engineeredInteraction:feature,trialCount:count,split:{train:train.length,validation:valid.length,test:test.length},selection:'minimum validation Brier score',lambda:best.lambda,weights:best.w,trace:best.trace,validation:best.validation,holdout:metrics(best.w,test),trials:trials.map(r=>({lambda:r.lambda,validation:r.validation}))};
history.push(result);chosen=result;q('#lab-results').hidden=false;q('#lab-status').textContent=t('Experiment recorded. Select a run to inspect its validation and configuration.','Experimento registrado. Selecione uma execução para inspecionar a validação e a configuração.','Experimento registrado. Seleccione una ejecución para inspeccionar su validación y configuración.');render();
}
function render(){
q('#lab-history').innerHTML=history.map(r=>'<tr'+(r===chosen?' class="selected"':'')+'><th scope="row">'+r.id+'</th><td>'+r.dataset.toUpperCase()+'</td><td>'+r.lambda+'</td><td>'+r.validation.brier.toFixed(3)+'</td><td>'+(r.holdout.auc?.toFixed(3)||'—')+'</td><td><button data-run="'+r.id+'" aria-pressed="'+(r===chosen)+'">'+S.review+'</button></td></tr>').join('');
q('#lab-history').querySelectorAll('button').forEach(b=>b.onclick=()=>{chosen=history.find(r=>r.id===b.dataset.run);render();});
const r=chosen;const top=Math.max(0.8,...history.flatMap(h=>h.trace.map(p=>p[1])));
const path=r.trace.map(([e,l],i)=>(i?'L':'M')+(45+e/120*490).toFixed(1)+' '+(195-l/top*155).toFixed(1)).join(' ');
q('#lab-report').innerHTML='<h4>'+r.id+' · '+S.chart+'</h4><svg viewBox="0 0 560 235" role="img" aria-label="'+S.chart+'"><path d="M45 30V195H540" fill="none" stroke="#bdc8d6"/><text x="8" y="42">'+top.toFixed(1)+'</text><text x="22" y="199">0</text><text x="45" y="221">1</text><text x="510" y="221">120</text><path d="'+path+'" fill="none" stroke="#184778" stroke-width="3"/></svg><p class="context">'+S.chartNote+'</p><dl class="lab-report-grid"><div><dt>'+t('Rows: train / validation / test','Linhas: treino / validação / teste','Filas: entrenamiento / validación / prueba')+'</dt><dd>'+r.split.train+' / '+r.split.validation+' / '+r.split.test+'</dd></div><div><dt>'+t('Model & selected parameter','Modelo e parâmetro selecionado','Modelo y parámetro seleccionado')+'</dt><dd>'+t('Logistic regression','Regressão logística','Regresión logística')+' · λ = '+r.lambda+'</dd></div><div><dt>'+S.clean+'</dt><dd>'+(r.cleaning==='impute'?S.impute:S.drop)+'</dd></div><div><dt>'+t('Interaction feature','Atributo de interação','Variable de interacción')+'</dt><dd>'+(r.engineeredInteraction?t('Included','Incluído','Incluida'):t('Excluded','Excluído','Excluida'))+'</dd></div></dl><p class="context">'+t('Tuning selects the lowest validation Brier score. The last 15% of records are held out of fitting and tuning. AUC measures ranking; Brier measures probability error. These synthetic metrics do not estimate historical business impact.','O ajuste seleciona o menor Brier de validação. Os últimos 15% dos registros ficam fora do treino e da seleção. AUC mede ordenação; Brier mede erro de probabilidade. Estas métricas sintéticas não estimam o impacto histórico no negócio.','El ajuste selecciona el menor Brier de validación. El último 15% queda fuera del entrenamiento y la selección. AUC mide ordenación; Brier mide error de probabilidad. Estas métricas sintéticas no estiman el impacto histórico.')+'</p><button id="lab-export">'+S.export+'</button>';
q('#lab-export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(r,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=r.id+'-synthetic.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
}
q('#lab-run').onclick=run;q('#lab-reset').onclick=()=>{history=[];chosen=null;q('#lab-results').hidden=true;q('#lab-history').innerHTML='';q('#lab-report').innerHTML='';q('#lab-status').textContent=S.empty;};
root.querySelectorAll('select,input').forEach(el=>el.onchange=()=>{input();q('#lab-status').textContent=S.pending;});input();
})();