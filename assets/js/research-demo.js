(() => {
const root=document.querySelector('.budget-demo');if(!root)return;
const lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem('portfolio-lang')||'en';
const strings={
en:['Claim','of','Remaining budget','Approve','Reject','Restart','Sequence complete. Restart to explore a different set of decisions.','This claim exceeds the remaining budget. You can reject it or restart.','Approved','Rejected','Illustrative units'],
pt:['Sinistro','de','Orçamento restante','Aprovar','Rejeitar','Reiniciar','Sequência concluída. Reinicie para explorar outras decisões.','Este sinistro excede o orçamento restante. Você pode rejeitá-lo ou reiniciar.','Aprovado','Rejeitado','Unidades ilustrativas'],
es:['Siniestro','de','Presupuesto restante','Aprobar','Rechazar','Reiniciar','Secuencia completada. Reinicie para explorar otras decisiones.','Este siniestro excede el presupuesto restante. Puede rechazarlo o reiniciar.','Aprobado','Rechazado','Unidades ilustrativas']
}[lang]||null;const t=strings||['Claim','of','Remaining budget','Approve','Reject','Restart','Sequence complete. Restart to explore a different set of decisions.','This claim exceeds the remaining budget. You can reject it or restart.','Approved','Rejected','Illustrative units'];
const values=[24,38,17,45,12,29];let step=0,budget=100;
const el=id=>document.getElementById('demo-'+id);
function render(){const done=step===values.length;el('step').textContent=done?t[6]:t[0]+' '+(step+1)+' '+t[1]+' '+values.length;el('claim').textContent=done?'—':values[step]+' · '+t[10];el('budget').textContent=t[2]+': '+budget+' / 100';el('progress').value=budget;el('progress').setAttribute('aria-label',t[2]);el('approve').disabled=done||values[step]>budget;el('reject').disabled=done;el('status').textContent=done?t[6]:values[step]>budget?t[7]:'';}
function choose(approve){if(step>=values.length||(approve&&values[step]>budget))return;const v=values[step];if(approve)budget-=v;const li=document.createElement('li');li.textContent=t[0]+' '+(step+1)+' · '+v+' · '+t[approve?8:9];el('history').append(li);step++;render();}
el('approve').textContent=t[3];el('reject').textContent=t[4];el('reset').textContent=t[5];
el('approve').onclick=()=>choose(true);el('reject').onclick=()=>choose(false);el('reset').onclick=()=>{step=0;budget=100;el('history').replaceChildren();render();};render();
})();