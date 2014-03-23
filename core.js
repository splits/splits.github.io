//colResizable - credits to Alvaro Prieto Lauroba - MIT & GPL
(function (a) {
    function h(b) {
        var c = a(this).data(q),
            d = m[c.t],
            e = d.g[c.i];
        e.ox = b.pageX;
        e.l = e[I]()[H];
        i[D](E + q, f)[D](F + q, g);
        P[z](x + "*{cursor:" + d.opt.dragCursor + K + J);
        e[B](d.opt.draggingClass);
        l = e;
        if (d.c[c.i].l)
            for (b = 0; b < d.ln; b++) c = d.c[b], c.l = j, c.w = c[u]();
        return j
    }

    function g(b) {
        i.unbind(E + q).unbind(F + q);
        a("head :last-child").remove();
        if (l) {
            l[A](l.t.opt.draggingClass);
            var f = l.t,
                g = f.opt.onResize;
            l.x && (e(f, l.i, 1), d(f), g && (b[G] = f[0], g(b)));
            f.p && O && c(f);
            l = k
        }
    }

    function f(a) {
        if (l) {
            var b = l.t,
                c = a.pageX - l.ox + l.l,
                f = b.opt.minWidth,
                g = l.i,
                h = 1.5 * b.cs + f + b.b,
                i = g == b.ln - 1 ? b.w - h : b.g[g + 1][I]()[H] - b.cs - f,
                f = g ? b.g[g - 1][I]()[H] + b.cs + f : h,
                c = s.max(f, s.min(i, c));
            l.x = c;
            l.css(H, c + p);
            if (b.opt.liveDrag && (e(b, g), d(b), c = b.opt.onDrag)) a[G] = b[0], c(a)
        }
        return j
    }

    function e(a, b, c) {
        var d = l.x - l.l,
            e = a.c[b],
            f = a.c[b + 1],
            g = e.w + d,
            d = f.w - d;
        e[u](g + p);
        f[u](d + p);
        a.cg.eq(b)[u](g + p);
        a.cg.eq(b + 1)[u](d + p);
        if (c) e.w = g, f.w = d
    }

    function d(a) {
        a.gc[u](a.w);
        for (var b = 0; b < a.ln; b++) {
            var c = a.c[b];
            a.g[b].css({
                left: c.offset().left - a.offset()[H] + c.outerWidth() + a.cs / 2 + p,
                height: a.opt.headerOnly ? a.c[0].outerHeight() : a.outerHeight()
            })
        }
    }

    function c(a, b) {
        var c, d = 0,
            e = 0,
            f = [];
        if (b)
            if (a.cg[C](u), a.opt.flush) O[a.id] = "";
            else {
                for (c = O[a.id].split(";"); e < a.ln; e++) f[y](100 * c[e] / c[a.ln] + "%"), b.eq(e).css(u, f[e]);
                for (e = 0; e < a.ln; e++) a.cg.eq(e).css(u, f[e])
            } else {
                O[a.id] = "";
                for (e in a.c) c = a.c[e][u](), O[a.id] += c + ";", d += c;
                O[a.id] += d
            }
    }

    function b(b) {
        var e = ">thead>tr>",
            f = '"></div>',
            g = ">tbody>tr:first>",
            i = ">tr:first>",
            j = "td",
            k = "th",
            l = b.find(e + k + "," + e + j);
        l.length || (l = b.find(g + k + "," + i + k + "," + g + j + "," + i + j));
        b.cg = b.find("col");
        b.ln = l.length;
        b.p && O && O[b.id] && c(b, l);
        l.each(function (c) {
            var d = a(this),
                e = a(b.gc[z](w + "CRG" + f)[0].lastChild);
            e.t = b;
            e.i = c;
            e.c = d;
            d.w = d[u]();
            b.g[y](e);
            b.c[y](d);
            d[u](d.w)[C](u);
            if (c < b.ln - 1) e.mousedown(h)[z](b.opt.gripInnerHtml)[z](w + q + '" style="cursor:' + b.opt.hoverCursor + f);
            else e[B]("CRL")[A]("CRG");
            e.data(q, {
                i: c,
                t: b[v](o)
            })
        });
        b.cg[C](u);
        d(b);
        b.find("td, th").not(l).not(N + "th, table td").each(function () {
            a(this)[C](u)
        })
    }
    var i = a(document),
        j = !1,
        k = null,
        l = k,
        m = [],
        n = 0,
        o = "id",
        p = "px",
        q = "CRZ",
        r = parseInt,
        s = Math,
        t = a.browser.msie,
        u = "width",
        v = "attr",
        w = '<div class="',
        x = "<style type='text/css'>",
        y = "push",
        z = "append",
        A = "removeClass",
        B = "addClass",
        C = "removeAttr",
        D = "bind",
        E = "mousemove.",
        F = "mouseup.",
        G = "currentTarget",
        H = "left",
        I = "position",
        J = "}</style>",
        K = "!important;",
        L = ":0px" + K,
        M = "resize",
        N = "table",
        O, P = a("head")[z](x + ".CRZ{table-layout:fixed;}.CRZ td,.CRZ th{padding-" + H + L + "padding-right" + L + "overflow:hidden}.CRC{height:0px;" + I + ":relative;}.CRG{margin-left:-5px;" + I + ":absolute;z-index:5;}.CRG .CRZ{" + I + ":absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;top:0px}.CRL{" + I + ":absolute;width:1px}.CRD{ border-left:1px dotted black" + J);
    try {
        O = sessionStorage
    } catch (Q) {}
    a(window)[D](M + "." + q, function () {
        for (a in m) {
            var a = m[a],
                b, c = 0;
            a[A](q);
            if (a.w != a[u]()) {
                a.w = a[u]();
                for (b = 0; b < a.ln; b++) c += a.c[b].w;
                for (b = 0; b < a.ln; b++) a.c[b].css(u, s.round(1e3 * a.c[b].w / c) / 10 + "%").l = 1
            }
            d(a[B](q))
        }
    });
    a.fn.extend({
        colResizable: function (c) {
            c = a.extend({
                draggingClass: "CRD",
                gripInnerHtml: "",
                liveDrag: j,
                minWidth: 15,
                headerOnly: j,
                hoverCursor: "e-" + M,
                dragCursor: "e-" + M,
                postbackSafe: j,
                flush: j,
                marginLeft: k,
                marginRight: k,
                disable: j,
                onDrag: k,
                onResize: k
            }, c);
            return this.each(function () {
                var d = c,
                    e = a(this);
                if (d.disable) {
                    if (e = e[v](o), (d = m[e]) && d.is(N)) d[A](q).gc.remove(), delete m[e]
                } else {
                    var f = e.id = e[v](o) || q + n++;
                    e.p = d.postbackSafe;
                    if (e.is(N) && !m[f]) e[B](q)[v](o, f).before(w + 'CRC"/>'), e.opt = d, e.g = [], e.c = [], e.w = e[u](), e.gc = e.prev(), d.marginLeft && e.gc.css("marginLeft", d.marginLeft), d.marginRight && e.gc.css("marginRight", d.marginRight), e.cs = r(t ? this.cellSpacing || this.currentStyle.borderSpacing : e.css("border-spacing")) || 2, e.b = r(t ? this.border || this.currentStyle.borderLeftWidth : e.css("border-" + H + "-" + u)) || 1, m[f] = e, b(e)
                }
            })
        }
    })
})(jQuery)
