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
  var c = a[0], d = c === +c ? 2 : 1;
  if ("" + a === a || a === +a) {
    var g = 3;
  } else {
    y(a) ? (g = a[0], "" + g === g ? g = 1 : (g = a[0], g = g === +g ? a[0] : -1)) : g = -1;
  }
  return 1 === g || 17 === c ? A(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
;function D(a) {
  function c(q) {
    let f = C(q), h = q.length;
    for (var b; f < h; ++f) {
      var k = q[f], l;
      if (l = !("" + k === k || k === +k)) {
        if (l = y(k)) {
          a: {
            b = k;
            k = q;
            l = f;
            const e = b[0], m = b[1];
            let n = e;
            switch(e) {
              case 9:
              case 11:
              case 13:
              case 16:
                b = c(b);
                break a;
              case 1:
              case 17:
                n = m;
              default:
                if ("" + n === n) {
                  b = "slot" === n ? [b, k, l] : c(b);
                  break a;
                }
            }
            b = void 0;
          }
          l = b;
        }
      }
      if (l) {
        return b;
      }
    }
  }
  let d, g;
  return A(a[0]) ? (d = a.shift(), g = c(a), a.unshift(d), g && g[1] === a ? [g[0], a, ++g[2]] : g) : c(a);
}
;function E(a, c) {
  a = JSON.parse(JSON.stringify(a));
  var d = D(a);
  if (d) {
    const g = d[1];
    d = d[2];
    let q;
    A(c[0]) && (q = c.shift());
    let f = C(c), h = c.length;
    g.splice(d, 1);
    for (d -= f; f < h; ++f) {
      g.splice(d + f, 0, c[f]);
    }
    q && a.unshift(q);
  }
  return a;
}
;var F = "";
function G(a) {
  if (0 !== a.indexOf(F)) {
    throw a + " is not a absolute path!";
  }
  return a.split("\\").join("/").substr(F.length - 1);
}
function H(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
}
function I(a, c) {
  if ("/" !== a.charAt(0) || "//" === a.substr(0, 2)) {
    throw a + " is not a root relative path!";
  }
  var d;
  (d = "/" === c.charAt(0) && "//" !== c.substr(0, 2)) || (d = c, d = 0 === d.indexOf(F) || "//" === d.substr(0, 2) || "http://" === d.substr(0, 7) || "https://" === d.substr(0, 8));
  if (d) {
    throw c + " is not a relative path!";
  }
  a = a.split("/");
  for ("" === a[0] && a.shift(); "../" === c.substr(0, 3);) {
    c = c.substr(3), --a.length;
  }
  return (a.length ? a.join("/") + "/" : "") + c;
}
;function J(a, c, d, g) {
  function q(l) {
    if (l) {
      for (let e = 0; e < l.length; ++e) {
        const m = g[l[e]];
        f(m[0], m[3]);
      }
    }
  }
  function f(l, e) {
    for (const m in l) {
      void 0 === h[m] && (h[m] = l[m]);
    }
    a[3] < e && (a[3] = e);
  }
  const h = a[0][0];
  if (!h) {
    return a[0];
  }
  var b = h.g;
  for (q(h.h); b;) {
    var k = d[b];
    (b = k[0][0]) ? (f(b, k[3]), q(b.h), b = b.g) : b = "";
  }
  k = a[0];
  for (b = h.g; b;) {
    const l = d[b], e = l[0][0];
    k = E(l[0], k);
    e ? b = e.g : b = "";
  }
  d = c.split("/");
  h.l = c;
  h.j = d.pop();
  h.m = d.join("/");
  h.URL = H(c);
  h.i = a[1];
  h.o = a[2];
  h.s = a[3];
  return k;
}
;function K(a) {
  function c(d) {
    let g = C(d), q = d.length;
    for (var f; g < q; ++g) {
      var h = d[g], b;
      if (b = !("" + h === h || h === +h)) {
        if (b = y(h)) {
          a: {
            f = h;
            h = d;
            b = g;
            var k = f[0];
            const l = f[1];
            let e = k, m = 1;
            switch(k) {
              case 9:
              case 11:
              case 13:
              case 16:
                f = c(f);
                break a;
              case 1:
              case 17:
                e = l, m = 2;
              default:
                if ("" + e === e) {
                  if ("script" === e) {
                    if (k = f[m], A(k) && "application/json" === k.type) {
                      f = [f, h, b];
                      break a;
                    }
                  } else {
                    f = c(f);
                    break a;
                  }
                }
            }
            f = void 0;
          }
          b = f;
        }
      }
      if (b) {
        return f;
      }
    }
  }
  return c(a);
}
;module.exports = function(a) {
  const c = require("plugin-error"), d = require("vinyl"), g = require("through2"), q = require("path"), f = a || {}, h = q.resolve(f.srcRootPath || "./").split("\\").join("/") + "/", b = {}, k = {}, l = {};
  F = h;
  return g.obj(function(e, m, n) {
    if (e.isNull()) {
      return n();
    }
    if (e.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), n();
    }
    if (".json" !== e.extname) {
      return this.push(e), n();
    }
    if (0 !== e.path.indexOf(h)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + e.path + '" is outside of srcRootPath:"' + f.u + '"')), n();
    }
    m = JSON.parse(e.contents.toString(m));
    const w = parseInt(e.stat.birthtimeMs, 10), t = parseInt(e.stat.ctimeMs, 10);
    e = G(e.path);
    if (y(m)) {
      var p = K(m);
      if (p) {
        const r = p[0];
        p[1].splice(p[2], 1);
        r && 3 === r.length && (p = eval("(" + r[2] + ");"), !y(p) && z(p) && m.unshift(p));
      }
      b[e] = [m, w, t, t];
    } else {
      z(m) && (l[e] = [m, w, t, t]);
    }
    n();
  }, function(e) {
    function m(p, r) {
      if (p) {
        for (let u = 0, v = p.length; u < v; ++u) {
          const x = I(r, p[u]), B = l[x];
          p[u] = x;
          if (B && 3 === B.length) {
            B.push(!0);
          } else if (!B) {
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
      for (m(r.h, n); u;) {
        const v = I(n, u), x = b[v];
        r.g = v;
        if (x) {
          delete b[v], k[v] = x, p.push(!0), n = v, (r = x[0][0]) ? (u = r.g, m(r.h, n)) : u = "";
        } else if (!k[v]) {
          throw n + " \u304c\u8981\u6c42\u3059\u308b " + v + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (var w in l) {
      (n = l[w]) && 4 !== n.length && delete b[w];
    }
    for (var t in b) {
      w = b[t], n = w[0], 3 === w.length && -1 !== JSON.stringify(n).indexOf('"slot"') && D(n) && delete b[t];
    }
    for (const p in b) {
      t = J(b[p], p, k, l), this.push(new d({base:"/", path:p, contents:Buffer.from(JSON.stringify(t))})), delete b[p];
    }
    e();
  });
};

