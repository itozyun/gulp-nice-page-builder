function y(a) {
  return !(!a || a.pop !== [].pop);
}
function z(a) {
  return !y(a) && !(!a || "object" !== typeof a);
}
function B(a) {
  var f = a[0], l = f === +f ? 2 : 1;
  if ("" + a === a || a === +a) {
    var k = 3;
  } else {
    y(a) ? (k = a[0], "" + k === k ? k = 1 : (k = a[0], k = k === +k ? a[0] : -1)) : k = -1;
  }
  return 1 === k || 17 === f ? z(a[l]) ? l + 1 : l : 11 === f ? 1 : 9 === f || 13 === f || 16 === f ? 2 : Infinity;
}
;function C(a, f) {
  function l(d) {
    let e = B(d), b = d.length;
    for (; e < b; ++e) {
      const g = d[e];
      if ("" + g !== g && g !== +g && y(g) && k(g, d, e)) {
        return !0;
      }
    }
    return !1;
  }
  function k(d, e, b) {
    var g = d[0];
    const m = d[1];
    let c = g;
    switch(g) {
      case 9:
      case 11:
      case 13:
      case 16:
        return l(d);
      case 1:
      case 17:
        c = m;
      default:
        if ("" + c === c) {
          if ("slot" === c) {
            d = B(f);
            g = f.length;
            e.splice(b, 1);
            for (b -= d; d < g; ++d) {
              e.splice(b + 1, 0, f[d]);
            }
            return !0;
          }
          return l(d);
        }
    }
    return !1;
  }
  let q;
  a = JSON.parse(JSON.stringify(a));
  z(a[0]) && (q = a.shift());
  z(f[0]) && (q = f.shift());
  l(a);
  q && a.unshift(q);
  return a;
}
;var D = "";
function E(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
}
function F(a, f) {
  a = a.split("/");
  for ("" === a[0] && a.shift(); "../" === f.substr(0, 3);) {
    f = f.substr(3), --a.length;
  }
  return (a.length ? a.join("/") + "/" : "") + f;
}
;function G(a, f, l, k) {
  function q(m) {
    if (m) {
      for (let c = 0; c < m.length; ++c) {
        const h = k[m[c]];
        d(h[0], h[3]);
      }
    }
  }
  function d(m, c) {
    for (const h in m) {
      void 0 === e[h] && (e[h] = m[h]);
    }
    a[3] < c && (a[3] = c);
  }
  const e = a[0][0];
  var b = e.g;
  for (q(e.h); b;) {
    var g = l[b];
    (b = g[0][0]) ? (d(b, g[3]), q(b.h), b = b.g) : b = "";
  }
  g = a[0];
  for (b = e.g; b;) {
    const m = l[b], c = m[0][0];
    g = C(m[0], g);
    c ? b = c.g : b = "";
  }
  l = f.split("/");
  e.l = f;
  e.j = l.pop();
  e.m = l.join("/");
  e.URL = E(f);
  e.i = a[1];
  e.o = a[2];
  e.s = a[3];
  return g;
}
;function H(a) {
  function f(l) {
    let k = B(l), q = l.length;
    for (var d; k < q; ++k) {
      var e = l[k], b;
      if (b = !("" + e === e || e === +e)) {
        if (b = y(e)) {
          a: {
            d = e;
            e = l;
            b = k;
            var g = d[0];
            const m = d[1];
            let c = g, h = 1;
            switch(g) {
              case 9:
              case 11:
              case 13:
              case 16:
                d = f(d);
                break a;
              case 1:
              case 17:
                c = m, h = 2;
              default:
                if ("" + c === c) {
                  if ("script" === c) {
                    if (g = d[h], z(g) && "application/json" === g.type) {
                      e.splice(b, 1);
                      break a;
                    }
                  } else {
                    d = f(d);
                    break a;
                  }
                }
            }
            d = void 0;
          }
          b = d;
        }
      }
      if (b) {
        return d;
      }
    }
  }
  return f(a);
}
;module.exports = function(a) {
  const f = require("plugin-error"), l = require("vinyl"), k = require("through2"), q = require("path"), d = a || {}, e = q.resolve(d.srcRootPath || "./").split("\\").join("/") + "/", b = {}, g = {}, m = {};
  D = e;
  return k.obj(function(c, h, n) {
    if (c.isNull()) {
      return n();
    }
    if (c.isStream()) {
      return this.emit("error", new f("gulp-nice-page-builder", "Streaming not supported")), n();
    }
    if (".json" !== c.extname) {
      return this.push(c), n();
    }
    if (0 !== c.path.indexOf(e)) {
      return this.emit("error", new f("gulp-nice-page-builder", '"' + c.path + '" is outside of srcRootPath:"' + d.u + '"')), n();
    }
    h = JSON.parse(c.contents.toString(h));
    const v = parseInt(c.stat.birthtimeMs, 10), r = parseInt(c.stat.ctimeMs, 10);
    c = c.path.split("\\").join("/").substr(D.length - 1);
    if (y(h)) {
      const p = H(h);
      p && h.unshift(eval("(" + p[2] + ");"));
      b[c] = [h, v, r, r];
    } else {
      h && "object" === typeof h && (m[c] = [h, v, r, r]);
    }
    n();
  }, function(c) {
    function h(p, t) {
      if (p) {
        for (let w = 0, u = p.length; w < u; ++w) {
          const x = F(p[w], t), A = m[x];
          p[w] = x;
          if (A && 3 === A.length) {
            A.push(!0);
          } else if (!A) {
            throw t + " \u304c\u8981\u6c42\u3059\u308b " + x + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    for (var n in b) {
      const p = b[n];
      let t = p[0][0], w = t.g;
      for (h(t.h, n); w;) {
        const u = F(w, n), x = b[u];
        t.g = u;
        if (x) {
          delete b[u], g[u] = x, p.push(!0), n = u, w = (t = x[0][0]) ? t.g : "", h(t.h, n);
        } else if (!g[u]) {
          throw n + " \u304c\u8981\u6c42\u3059\u308b " + u + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (var v in m) {
      (n = m[v]) && 4 !== n.length && delete b[v];
    }
    for (var r in b) {
      v = b[r], n = v[0], 3 === v.length && -1 !== JSON.stringify(n).indexOf('"slot"') && delete b[r];
    }
    for (const p in b) {
      r = G(b[p], p, g, m), this.push(new l({base:"/", path:p, contents:Buffer.from(JSON.stringify(r))})), delete b[p];
    }
    c();
  });
};

