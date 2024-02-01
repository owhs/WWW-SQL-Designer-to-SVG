console.clear();

var _NS = "http://www.w3.org/2000/svg",
    _round =x=>+(+x).toFixed(1);


var svg = document.querySelector("#area>svg").cloneNode(1),
    style = document.createElementNS(_NS, "style");

svg.setAttribute("xmlns",_NS);
svg.setAttribute("font-family","verdana, sans-serif");
svg.setAttribute("font-size","12");

style.innerHTML = "text{cursor:default}.b{font-weight:bold}g>rect:first-child{fill:#f4f4f4}";
svg.prepend(style);


document.querySelectorAll("#area>.table").forEach(el=>{
    var g = document.createElementNS(_NS, "g"),
        rect = document.createElementNS(_NS, "rect");
    
    rect.setAttribute("x",_round(el.offsetLeft));
    rect.setAttribute("y",_round(el.offsetTop));
    rect.setAttribute("width",_round(el.offsetWidth));
    rect.setAttribute("height",_round(el.offsetHeight));
    
    g.append(rect);

    [...el.querySelectorAll("tr")].forEach((t,i)=>{
        var rg = document.createElementNS(_NS, "g"),
            text = document.createElementNS(_NS, "text"),
            v = t.innerText.trim(),
            r = document.createElementNS(_NS, "rect"),
            r2 = document.createElementNS(_NS, "rect");
        
        r.setAttribute("x",_round(el.offsetLeft+el.offsetWidth-10));
        r.setAttribute("y",_round(el.offsetTop+t.offsetTop));
        r.setAttribute("width",4);
        r.setAttribute("height",_round(t.offsetHeight));
        
        r2.setAttribute("width",8);
        r2.setAttribute("height",8);
        r2.setAttribute("fill","#7db2dd");
        
        if (t.querySelector(".primary,.key")) text.classList.add("b");

        
        text.innerHTML=v;
        
        rg.append(text);
        g.append(rg);
        
        if (i===0){
            var title = t.querySelector("td").title;
            if (title){
                r2.setAttribute("x",_round(el.offsetLeft+el.offsetWidth-8));
                r2.setAttribute("y",_round(el.offsetTop+t.offsetTop));
                
                var tt = document.createElementNS(_NS, "title");
                tt.innerHTML=title;
                rg.append(r2);
                rg.append(tt);
            }
            
            text.setAttribute("x",_round(el.offsetLeft+(el.offsetWidth/2)-(+(v.length*6.2)/2)));
            text.setAttribute("y",_round(el.offsetTop+t.offsetTop+18));
        } else {
            var color = t.parentElement.style.borderColor.slice(4,-1).split(", ").map(x=>(x ? +x : "").toString(16)).join(""), title = t.parentElement.title;
            if (color) {
                r.setAttribute("fill","#"+color);
                rg.append(r)
            }
            if (title) {
                r2.setAttribute("x",_round(el.offsetLeft+el.offsetWidth-16));
                r2.setAttribute("y",_round(el.offsetTop+t.offsetTop+ ((t.offsetHeight-8)/2) ));
                var tt = document.createElementNS(_NS, "title");
                tt.innerHTML=title;
                rg.append(r2);
                rg.append(tt);
            }
            text.setAttribute("x",_round(el.offsetLeft+t.offsetLeft+10));
            text.setAttribute("y",_round(el.offsetTop+t.offsetTop+15));
        }
        
    });
    svg.append(g);
});

var url=URL.createObjectURL(new Blob([svg.outerHTML],{type:"image/svg+xml"}));
window.open(url);
URL.revokeObjectURL(url)
//svg.outerHTML
