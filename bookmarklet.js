javascript:((a="http://www.w3.org/2000/svg")=>{var b=a=>+(+a).toFixed(1),c=b=>document.createElementNS(a,b),d=(a,b,c)=>a.setAttribute(b,c),e=document.querySelector("#area>svg").cloneNode(1),f=c("style");d(e,"xmlns",a),d(e,"font-family","verdana, sans-serif"),d(e,"font-size","12"),f.innerHTML="text{cursor:default}.b{font-weight:bold}g>rect:first-child{fill:#f4f4f4}",e.prepend(f),document.querySelectorAll("#area>.table").forEach(a=>{var f=c("g"),g=c("rect"),h=b(a.offsetLeft),j=b(a.offsetTop),k=b(a.offsetWidth);d(g,"x",h),d(g,"y",j),d(g,"width",k),d(g,"height",b(a.offsetHeight)),f.append(g),[...a.querySelectorAll("tr")].forEach((a,e)=>{var g=c("g"),i=c("text"),l=a.innerText.trim(),m=c("rect"),n=c("rect"),o=a.offsetTop,p=a.offsetHeight;if(d(m,"x",b(h+k-10)),d(m,"y",b(j+o)),d(m,"width",4),d(m,"height",b(p)),d(n,"width",8),d(n,"height",8),d(n,"fill","#7db2dd"),a.querySelector(".primary,.key")&&i.classList.add("b"),i.innerHTML=l,g.append(i),f.append(g),0===e){var q=a.querySelector("td").title;if(q){d(n,"x",b(h+k-8)),d(n,"y",b(j+o));var r=c("title");r.innerHTML=q,g.append(n),g.append(r)}d(i,"x",b(h+k/2-+(6.2*l.length)/2)),d(i,"y",b(j+o+18))}else{var s=a.parentElement.style.borderColor.slice(4,-1).split(", ").map(a=>(a?+a:"").toString(16)).join(""),q=a.parentElement.title;if(s&&(d(m,"fill","#"+s),g.append(m)),q){d(n,"x",b(h+k-16)),d(n,"y",b(j+o+(p-8)/2));var r=c("title");r.innerHTML=q,g.append(n),g.append(r)}d(i,"x",b(h+a.offsetLeft+10)),d(i,"y",b(j+o+15))}}),e.append(f)});var g=URL.createObjectURL(new Blob([e.outerHTML],{type:"image/svg+xml"}));window.open(g),URL.revokeObjectURL(g)})();
