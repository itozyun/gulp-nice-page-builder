function y(a) {
  return !(!a || a.pop !== [].pop);
}
function z(a) {
  return !(!a || "object" !== typeof a);
}
function A(a) {
  return !y(a) && z(a);
}
function C(a) {
  var c = a[0], b = c === +c ? 2 : 1;
  if ("" + a === a || a === +a) {
    var m = 3;
  } else {
    y(a) ? (m = a[0], "" + m === m ? m = 1 : (m = a[0], m = m === +m ? a[0] : -1)) : m = -1;
  }
  return 1 === m || 17 === c ? A(a[b]) ? b + 1 : b : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
;function D(a, c) {
  function b(p) {
    let h = C(p), e = p.length;
    for (var k; h < e; ++h) {
      var f = p[h], d;
      if (d = !("" + f === f || f === +f)) {
        if (d = y(f)) {
          a: {
            k = f;
            f = p;
            d = h;
            var g = k[0];
            const n = k[1];
            let t = g, u = 1;
            switch(g) {
              case 9:
              case 11:
              case 13:
              case 16:
                k = b(k);
                break a;
              case 1:
              case 17:
                t = n, u = 2;
              default:
                if ("" + t === t) {
                  g = k[u];
                  k = c(t, A(g) ? g : null) ? [k, f, d] : b(k);
                  break a;
                }
            }
            k = void 0;
          }
          d = k;
        }
      }
      if (d) {
        return k;
      }
    }
  }
  let m, q;
  return A(a[0]) ? (m = a.shift(), q = b(a), a.unshift(m), q && q[1] === a ? [q[0], a, ++q[2]] : q) : b(a);
}
;function E(a) {
  return D(a, function(c) {
    return "slot" === c;
  });
}
;function F(a, c) {
  a = JSON.parse(JSON.stringify(a));
  var b = E(a);
  if (b) {
    const m = b[1];
    b = b[2];
    let q;
    A(c[0]) && (q = c.shift());
    let p = C(c), h = c.length;
    m.splice(b, 1);
    for (b -= p; p < h; ++p) {
      m.splice(b + p, 0, c[p]);
    }
    q && a.unshift(q);
  }
  return a;
}
;var G = "";
function H(a) {
  if (0 !== a.indexOf(G)) {
    throw a + " is not a absolute path!";
  }
  return a.split("\\").join("/").substr(G.length - 1);
}
function I(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
}
function J(a, c) {
  if ("/" !== a.charAt(0) || "//" === a.substr(0, 2)) {
    throw a + " is not a root relative path!";
  }
  var b;
  (b = "/" === c.charAt(0) && "//" !== c.substr(0, 2)) || (b = c, b = 0 === b.indexOf(G) || "//" === b.substr(0, 2) || "http://" === b.substr(0, 7) || "https://" === b.substr(0, 8));
  if (b) {
    throw c + " is not a relative path!";
  }
  a = a.split("/");
  for ("" === a[0] && a.shift(); "../" === c.substr(0, 3);) {
    c = c.substr(3), --a.length;
  }
  return (a.length ? a.join("/") + "/" : "") + c;
}
;function K(a, c, b, m) {
  function q(f) {
    if (f) {
      for (let d = 0; d < f.length; ++d) {
        const g = m[f[d]];
        p(g[0], g[3]);
      }
    }
  }
  function p(f, d) {
    for (const g in f) {
      void 0 === h[g] && (h[g] = f[g]);
    }
    a[3] < d && (a[3] = d);
  }
  const h = a[0][0];
  if (!h) {
    return a[0];
  }
  var e = h.g;
  for (q(h.h); e;) {
    var k = b[e];
    (e = k[0][0]) ? (p(e, k[3]), q(e.h), e = e.g) : e = "";
  }
  k = a[0];
  for (e = h.g; e;) {
    const f = b[e], d = f[0][0];
    k = F(f[0], k);
    d ? e = d.g : e = "";
  }
  b = c.split("/");
  h.l = c;
  h.j = b.pop();
  h.m = b.join("/");
  h.URL = I(c);
  h.i = a[1];
  h.o = a[2];
  h.s = a[3];
  return k;
}
;function L(a) {
  return D(a, function(c, b) {
    return "script" === c && b && "application/json" === b.type || !1;
  });
}
;module.exports = function(a) {
  const c = require("plugin-error"), b = require("vinyl"), m = require("through2"), q = require("path"), p = a || {}, h = q.resolve(p.srcRootPath || "./").split("\\").join("/") + "/", e = {}, k = {}, f = {};
  G = h;
  return m.obj(function(d, g, n) {
    if (d.isNull()) {
      return n();
    }
    if (d.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), n();
    }
    if (".json" !== d.extname) {
      return this.push(d), n();
    }
    if (0 !== d.path.indexOf(h)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + d.path + '" is outside of srcRootPath:"' + p.u + '"')), n();
    }
    g = JSON.parse(d.contents.toString(g));
    const t = parseInt(d.stat.birthtimeMs, 10), u = parseInt(d.stat.ctimeMs, 10);
    d = H(d.path);
    if (y(g)) {
      var l = L(g);
      if (l) {
        const r = l[0];
        l[1].splice(l[2], 1);
        r && 3 === r.length && (l = eval("(" + r[2] + ");"), !y(l) && z(l) && g.unshift(l));
      }
      e[d] = [g, t, u, u];
    } else {
      z(g) && (f[d] = [g, t, u, u]);
    }
    n();
  }, function(d) {
    function g(l, r) {
      if (l) {
        for (let v = 0, w = l.length; v < w; ++v) {
          const x = J(r, l[v]), B = f[x];
          l[v] = x;
          if (B && 3 === B.length) {
            B.push(!0);
          } else if (!B) {
            throw r + " \u304c\u8981\u6c42\u3059\u308b " + x + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    for (var n in e) {
      const l = e[n];
      let r = l[0][0];
      if (!r) {
        continue;
      }
      let v = r.g;
      for (g(r.h, n); v;) {
        const w = J(n, v), x = e[w];
        r.g = w;
        if (x) {
          delete e[w], k[w] = x, l.push(!0), n = w, (r = x[0][0]) ? (v = r.g, g(r.h, n)) : v = "";
        } else if (!k[w]) {
          throw n + " \u304c\u8981\u6c42\u3059\u308b " + w + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (var t in f) {
      (n = f[t]) && 4 !== n.length && delete e[t];
    }
    for (var u in e) {
      t = e[u], n = t[0], 3 === t.length && -1 !== JSON.stringify(n).indexOf('"slot"') && E(n) && delete e[u];
    }
    for (const l in e) {
      u = K(e[l], l, k, f), this.push(new b({base:"/", path:l, contents:Buffer.from(JSON.stringify(u))})), delete e[l];
    }
    d();
  });
};

