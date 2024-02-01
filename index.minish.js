((D=document,_NS = "http://www.w3.org/2000/svg",S="style",R="rect",s="slice",f="fill",W="width",H="height",L="left",
q="querySelector",Q="querySelectorAll",F="forEach",T="title",I="innerHTML",C="cloneNode",X="removeAttribute") => {

    var _round = x => +(+x).toFixed(1),
        E = dn=>D.createElementNS(_NS, dn),
        A = (el,att,v,R)=>el.setAttribute(att,R ? _round(v) : v),
        O = (el,o)=>el["offset"+o[0].toUpperCase()+o[s](1)],
        AP = (el,w)=>el.append(w),
        svg = D[q]("#area>svg")[C](1),
        style = E(S);

    A(svg,"xmlns", _NS);
    A(svg,"font-family", "verdana, sans-serif");
    A(svg,"font-size", "12");

    style[I] = "text{cursor:default}.b{font-weight:bold}g>rect:first-child{fill:#f4f4f4}";
    svg.prepend(style);


    D[Q]("#area>.table")[F](el => {
        var g = E("g"),
            rect = E(R),
            ELL = O(el,L),
            ELT = O(el,"top"),
            ELW = O(el,W);

        
        A(rect,"x", ELL, 1);
        A(rect,"y", ELT, 1);
        A(rect,W, ELW, 1);
        A(rect,H, O(el,H), 1);


        AP(g,rect);

        [...el[Q]("tr")][F]((t, i) => {
            var rg = E("g"),
                text = E("text"),
                v = t.innerText.trim(),
                r = E(R),
                r2 = E(R),
                TT = O(t,"top"),
                TH = O(t,H);

            A(r,"x", (ELL + ELW - 10), 1);
            A(r,"y", (ELT + TT), 1);
            A(r,W, 4);
            A(r,H, TH, 1);

            A(r2,W,8);
            A(r2,H,8);
            A(r2,f, "#7db2dd");

            if (t[q](".primary,.key")) text.classList.add("b");


            text[I] = v;

            AP(rg,text);
            AP(g,rg);
            var title;

            if (i === 0) {
                title = t[q]("td")[T];
                if (title) {
                    A(r2,"x", (ELL + ELW - 8), 1);
                    A(r2,"y", (ELT + TT), 1);
                }

                A(text,"x", (ELL + (ELW / 2) - (+(v.length * 6.2) / 2)), 1);
                A(text,"y", (ELT + TT + 18), 1);
            } else {
                var p = t.parentElement,color = p[S].borderColor[s](4, -1).split(", ").map(x => (x ? +x : "").toString(16)).join("");
                title = p[T];
                if (color) {
                    A(r,f, "#" + color);
                    AP(rg,r)
                }
                if (title) {
                    A(r2,"x", (ELL + ELW - 16), 1);
                    A(r2,"y", (ELT + TT + ((TH - 8) / 2)), 1);
                }
                A(text,"x", (ELL + O(t,L) + 10), 1);
                A(text,"y", (ELT + TT + 15), 1);
            }
            if (title) {
                var tt = E(T);
                tt[I] = title;
                AP(rg,r2);
                AP(rg,tt);
            }

        });
        AP(svg,g);
    });


    var outp = D.createElement("iframe");
    A(outp,"style", "position:fixed;opacity:0;width:0px;height:0px;overflow:hidden;inset:0;border:0");
    AP(D.body,outp), padding = 20;
    var _D = outp.contentWindow.document;
    AP(_D.body,svg[C](1));

    var box = _D[q]("svg").getBBox();
    if (box) {
        svg[X](W);
        svg[X](H);
        A(svg,"viewBox",[box.x - padding, box.y - padding, box[W] + (padding*2), box[H] + (padding*2)].join(" "));
    }
    outp.remove();

    var url = URL.createObjectURL(new Blob([svg.outerHTML], {
        type: "image/svg+xml"
    }));
    window.open(url);
    URL.revokeObjectURL(url)
    //svg.outerHTML
})()
