(function(){
  "use strict";
  const base=[118,72,58,44,31,33,29];
  const labels=[["Global total","01"],["Group A","02"],["Group B","02"],["A · Series 1","03"],["A · Series 2","03"],["B · Series 1","03"],["B · Series 2","03"]];
  const method=document.getElementById("method");
  const tbody=document.getElementById("forecast-rows");
  const valueEl=document.getElementById("coherence-value");
  const detailEl=document.getElementById("coherence-detail");
  const noteEl=document.getElementById("method-note");
  const barEl=document.getElementById("coherence-bar");
  if(!method||!tbody)return;
  const notes={
    base:"Base forecasts are produced independently; parent and child values may not add up.",
    bottom:"Bottom-up preserves each leaf forecast, then sums components to every parent.",
    top:"Top-down preserves the synthetic global forecast and allocates it using invented historical shares.",
    ols:"OLS projects all seven base values onto the coherent space, treating base errors as equally weighted and uncorrelated."
  };
  function bottomUp(){
    const a=base[3]+base[4],b=base[5]+base[6];
    return [a+b,a,b,base[3],base[4],base[5],base[6]];
  }
  function topDown(){
    const total=base[0],shareA=base[1]/(base[1]+base[2]),a=total*shareA,b=total-a;
    const a1=a*base[3]/(base[3]+base[4]),b1=b*base[5]/(base[5]+base[6]);
    return [total,a,b,a1,a-a1,b1,b-b1];
  }
  function olsIdentity(){
    // S rows: total, group A, group B, and four leaves.
    const z=[base[0]+base[1]+base[3],base[0]+base[1]+base[4],base[0]+base[2]+base[5],base[0]+base[2]+base[6]];
    const totalZ=z.reduce((sum,x)=>sum+x,0);
    const leaves=z.map(x=>0.5*x-totalZ/12);
    return [leaves.reduce((sum,x)=>sum+x,0),leaves[0]+leaves[1],leaves[2]+leaves[3],...leaves];
  }
  function selected(){
    if(method.value==="bottom")return bottomUp();
    if(method.value==="top")return topDown();
    if(method.value==="ols")return olsIdentity();
    return base.slice();
  }
  function fmt(x){return Number(x).toFixed(1);}
  function render(){
    const vals=selected();
    const max=Math.max.apply(null,base.concat(vals));
    tbody.innerHTML="";
    labels.forEach(function(item,i){
      const row=document.createElement("tr");
      const bar=Math.max(0,Math.min(100,vals[i]/max*100));
      row.innerHTML="<th scope=\"row\"><span class=\"level-code\">"+item[1]+"</span>"+item[0]+"</th>"+
        "<td>"+fmt(base[i])+"</td><td class=\"reconciled-value\">"+fmt(vals[i])+"</td>"+
        "<td><span class=\"bar-track\"><i style=\"width:"+bar+"%\"></i></span></td>";
      tbody.appendChild(row);
    });
    const diffs=[Math.abs(vals[0]-vals[1]-vals[2]),Math.abs(vals[1]-vals[3]-vals[4]),Math.abs(vals[2]-vals[5]-vals[6])];
    const maxGap=Math.max.apply(null,diffs);
    valueEl.textContent=fmt(maxGap)+" units";
    barEl.style.width=Math.min(100,maxGap/20*100)+"%";
    detailEl.textContent=maxGap<0.05
      ?"Every parent equals the sum of its children in this synthetic example."
      :"Global gap "+fmt(diffs[0])+" · Group A gap "+fmt(diffs[1])+" · Group B gap "+fmt(diffs[2])+".";
    noteEl.textContent=notes[method.value];
  }
  method.addEventListener("change",render);
  render();
})();