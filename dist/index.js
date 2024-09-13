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
  function l(e) {
    let d = B(e), b = e.length;
    for (; d < b; ++d) {
      const g = e[d];
      if ("" + g !== g && g !== +g && y(g) && k(g, e, d)) {
        return !0;
      }
    }
    return !1;
  }
  function k(e, d, b) {
    var g = e[0];
    const m = e[1];
    let c = g;
    switch(g) {
      case 9:
      case 11:
      case 13:
      case 16:
        return l(e);
      case 1:
      case 17:
        c = m;
      default:
        if ("" + c === c) {
          if ("slot" === c) {
            e = B(f);
            g = f.length;
            d.splice(b, 1);
            for (b -= e; e < g; ++e) {
              d.splice(b + 1, 0, f[e]);
            }
            return !0;
          }
          return l(e);
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
        e(h[0], h[3]);
      }
    }
  }
  function e(m, c) {
    for (const h in m) {
      void 0 === d[h] && (d[h] = m[h]);
    }
    a[3] < c && (a[3] = c);
  }
  const d = a[0][0];
  if (!d) {
    return a[0];
  }
  var b = d.g;
  for (q(d.h); b;) {
    var g = l[b];
    (b = g[0][0]) ? (e(b, g[3]), q(b.h), b = b.g) : b = "";
  }
  g = a[0];
  for (b = d.g; b;) {
    const m = l[b], c = m[0][0];
    g = C(m[0], g);
    c ? b = c.g : b = "";
  }
  l = f.split("/");
  d.l = f;
  d.j = l.pop();
  d.m = l.join("/");
  d.URL = E(f);
  d.i = a[1];
  d.o = a[2];
  d.s = a[3];
  return g;
}
;function H(a) {
  function f(l) {
    let k = B(l), q = l.length;
    for (var e; k < q; ++k) {
      var d = l[k], b;
      if (b = !("" + d === d || d === +d)) {
        if (b = y(d)) {
          a: {
            e = d;
            d = l;
            b = k;
            var g = e[0];
            const m = e[1];
            let c = g, h = 1;
            switch(g) {
              case 9:
              case 11:
              case 13:
              case 16:
                e = f(e);
                break a;
              case 1:
              case 17:
                c = m, h = 2;
              default:
                if ("" + c === c) {
                  if ("script" === c) {
                    if (g = e[h], z(g) && "application/json" === g.type) {
                      d.splice(b, 1);
                      break a;
                    }
                  } else {
                    e = f(e);
                    break a;
                  }
                }
            }
            e = void 0;
          }
          b = e;
        }
      }
      if (b) {
        return e;
      }
    }
  }
  return f(a);
}
;module.exports = function(a) {
  const f = require("plugin-error"), l = require("vinyl"), k = require("through2"), q = require("path"), e = a || {}, d = q.resolve(e.srcRootPath || "./").split("\\").join("/") + "/", b = {}, g = {}, m = {};
  D = d;
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
    if (0 !== c.path.indexOf(d)) {
      return this.emit("error", new f("gulp-nice-page-builder", '"' + c.path + '" is outside of srcRootPath:"' + e.u + '"')), n();
    }
    h = JSON.parse(c.contents.toString(h));
    const w = parseInt(c.stat.birthtimeMs, 10), t = parseInt(c.stat.ctimeMs, 10);
    c = c.path.split("\\").join("/").substr(D.length - 1);
    if (y(h)) {
      const p = H(h);
      p && h.unshift(eval("(" + p[2] + ");"));
      b[c] = [h, w, t, t];
    } else {
      h && "object" === typeof h && (m[c] = [h, w, t, t]);
    }
    n();
  }, function(c) {
    function h(p, r) {
      if (p) {
        for (let u = 0, v = p.length; u < v; ++u) {
          const x = F(r, p[u]), A = m[x];
          p[u] = x;
          if (A && 3 === A.length) {
            A.push(!0);
          } else if (!A) {
            throw r + " \u304c\u8981\u6c42\u3059\u308b " + x + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    for (var n in b) {
      const p = b[n];
      let r = p[0][0];
      if (!r) {
        continue;
      }
      let u = r.g;
      for (h(r.h, n); u;) {
        const v = F(n, u), x = b[v];
        r.g = v;
        if (x) {
          delete b[v], g[v] = x, p.push(!0), n = v, (r = x[0][0]) ? (u = r.g, h(r.h, n)) : u = "";
        } else if (!g[v]) {
          throw n + " \u304c\u8981\u6c42\u3059\u308b " + v + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (var w in m) {
      (n = m[w]) && 4 !== n.length && delete b[w];
    }
    for (var t in b) {
      w = b[t], n = w[0], 3 === w.length && -1 !== JSON.stringify(n).indexOf('"slot"') && delete b[t];
    }
    for (const p in b) {
      t = G(b[p], p, g, m), this.push(new l({base:"/", path:p, contents:Buffer.from(JSON.stringify(t))})), delete b[p];
    }
    c();
  });
};

