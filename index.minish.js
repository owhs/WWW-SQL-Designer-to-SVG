((_NS = "http://www.w3.org/2000/svg") => {

    var _round = x => +(+x).toFixed(1),
        E = dn=>document.createElementNS(_NS, dn),
        A = (el,att,v)=>el.setAttribute(att,v),
        svg = document.querySelector("#area>svg").cloneNode(1),
        style = E("style");

    A(svg,"xmlns", _NS);
    A(svg,"font-family", "verdana, sans-serif");
    A(svg,"font-size", "12");

    style.innerHTML = "text{cursor:default}.b{font-weight:bold}g>rect:first-child{fill:#f4f4f4}";
    svg.prepend(style);


    document.querySelectorAll("#area>.table").forEach(el => {
        var g = E("g"),
            rect = E("rect"),
            ELL = _round(el.offsetLeft),
            ELT = _round(el.offsetTop),
            ELW = _round(el.offsetWidth);

        A(rect,"x", ELL);
        A(rect,"y", ELT);
        A(rect,"width", ELW);
        A(rect,"height", _round(el.offsetHeight));

        g.append(rect);

        [...el.querySelectorAll("tr")].forEach((t, i) => {
            var rg = E("g"),
                text = E("text"),
                v = t.innerText.trim(),
                r = E("rect"),
                r2 = E("rect"),
                TT = t.offsetTop,
                TH = t.offsetHeight;

            A(r,"x", _round(ELL + ELW - 10));
            A(r,"y", _round(ELT + TT));
            A(r,"width", 4);
            A(r,"height", _round(TH));

            A(r2,"width", 8);
            A(r2,"height", 8);
            A(r2,"fill", "#7db2dd");

            if (t.querySelector(".primary,.key")) text.classList.add("b");


            text.innerHTML = v;

            rg.append(text);
            g.append(rg);

            if (i === 0) {
                var title = t.querySelector("td").title;
                if (title) {
                    A(r2,"x", _round(ELL + ELW - 8));
                    A(r2,"y", _round(ELT + TT));

                    var tt = E("title");
                    tt.innerHTML = title;
                    rg.append(r2);
                    rg.append(tt);
                }

                A(text,"x", _round(ELL + (ELW / 2) - (+(v.length * 6.2) / 2)));
                A(text,"y", _round(ELT + TT + 18));
            } else {
                var color = t.parentElement.style.borderColor.slice(4, -1).split(", ").map(x => (x ? +x : "").toString(16)).join(""),
                    title = t.parentElement.title;
                if (color) {
                    A(r,"fill", "#" + color);
                    rg.append(r)
                }
                if (title) {
                    A(r2,"x", _round(ELL + ELW - 16));
                    A(r2,"y", _round(ELT + TT + ((TH - 8) / 2)));
                    var tt = E("title");
                    tt.innerHTML = title;
                    rg.append(r2);
                    rg.append(tt);
                }
                A(text,"x", _round(ELL + t.offsetLeft + 10));
                A(text,"y", _round(ELT + TT + 15));
            }

        });
        svg.append(g);
    });

    var url = URL.createObjectURL(new Blob([svg.outerHTML], {
        type: "image/svg+xml"
    }));
    window.open(url);
    URL.revokeObjectURL(url)
    //svg.outerHTML
})()
