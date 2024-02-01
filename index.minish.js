((D=document,_NS = "http://www.w3.org/2000/svg",W="width",H="height",L="left",q="querySelector",Q="querySelectorAll") => {

    var _round = x => +(+x).toFixed(1),
        E = dn=>D.createElementNS(_NS, dn),
        A = (el,att,v,R)=>el.setAttribute(att,R ? _round(v) : v),
        O = (el,o)=>el["offset"+o[0].toUpperCase()+o.slice(1)],
        AP = (el,w)=>el.append(w),
        svg = D[q]("#area>svg").cloneNode(1),
        style = E("style");

    A(svg,"xmlns", _NS);
    A(svg,"font-family", "verdana, sans-serif");
    A(svg,"font-size", "12");

    style.innerHTML = "text{cursor:default}.b{font-weight:bold}g>rect:first-child{fill:#f4f4f4}";
    svg.prepend(style);


    D[Q]("#area>.table").forEach(el => {
        var g = E("g"),
            rect = E("rect"),
            ELL = O(el,"left"),
            ELT = O(el,"top"),
            ELW = O(el,W);

        
        A(rect,"x", ELL, 1);
        A(rect,"y", ELT, 1);
        A(rect,W, ELW, 1);
        A(rect,H, O(el,H), 1);


        AP(g,rect);

        [...el[Q]("tr")].forEach((t, i) => {
            var rg = E("g"),
                text = E("text"),
                v = t.innerText.trim(),
                r = E("rect"),
                r2 = E("rect"),
                TT = O(t,"top"),
                TH = O(t,H);

            A(r,"x", (ELL + ELW - 10), 1);
            A(r,"y", (ELT + TT), 1);
            A(r,W, 4);
            A(r,H, TH, 1);

            A(r2,W,8);
            A(r2,H,8);
            A(r2,"fill", "#7db2dd");

            if (t[q](".primary,.key")) text.classList.add("b");


            text.innerHTML = v;

            AP(rg,text);
            AP(g,rg);
            var title;

            if (i === 0) {
                title = t[q]("td").title;
                if (title) {
                    A(r2,"x", (ELL + ELW - 8), 1);
                    A(r2,"y", (ELT + TT), 1);
                }

                A(text,"x", (ELL + (ELW / 2) - (+(v.length * 6.2) / 2)), 1);
                A(text,"y", (ELT + TT + 18), 1);
            } else {
                var p = t.parentElement,color = p.style.borderColor.slice(4, -1).split(", ").map(x => (x ? +x : "").toString(16)).join("");
                title = p.title;
                if (color) {
                    A(r,"fill", "#" + color);
                    AP(rg,r)
                }
                if (title) {
                    A(r2,"x", (ELL + ELW - 16), 1);
                    A(r2,"y", (ELT + TT + ((TH - 8) / 2)), 1);
                }
                A(text,"x", (ELL + O(t,"left") + 10), 1);
                A(text,"y", (ELT + TT + 15), 1);
            }
            if (title) {
                var tt = E("title");
                tt.innerHTML = title;
                AP(rg,r2);
                AP(rg,tt);
            }

        });
        AP(svg,g);
    });

    var url = URL.createObjectURL(new Blob([svg.outerHTML], {
        type: "image/svg+xml"
    }));
    window.open(url);
    URL.revokeObjectURL(url)
    //svg.outerHTML
})()
