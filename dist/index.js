function b(a) {
  return !(!a || a.pop !== [].pop);
}
function y(a) {
  return !(!a || "object" !== typeof a);
}
function A(a) {
  return !b(a) && y(a);
}
function B(a) {
  var c = a[0], d = c === +c ? 2 : 1;
  if ("" + a === a || a === +a) {
    var g = 3;
  } else {
    b(a) ? (g = a[0], "" + g === g ? g = 1 : (g = a[0], g = g === +g ? a[0] : -1)) : g = -1;
  }
  return 1 === g || 17 === c ? A(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
;function D(a, c) {
  function d(r) {
    let t = B(r), p = r.length;
    for (var f; t < p; ++t) {
      var u = r[t], e;
      if (e = !("" + u === u || u === +u)) {
        if (e = b(u)) {
          a: {
            f = u;
            u = r;
            e = t;
            var k = f[0];
            const h = f[1];
            let q = k, m = 1;
            switch(k) {
              case 9:
              case 11:
              case 13:
              case 16:
                f = d(f);
                break a;
              case 1:
              case 17:
                q = h, m = 2;
              default:
                if ("" + q === q) {
                  k = f[m];
                  f = c(q, A(k) ? k : null) ? [f, u, e] : d(f);
                  break a;
                }
            }
            f = void 0;
          }
          e = f;
        }
      }
      if (e) {
        return f;
      }
    }
  }
  let g, l;
  return A(a[0]) ? (g = a.shift(), l = d(a), a.unshift(g), l && l[1] === a ? [l[0], a, ++l[2]] : l) : d(a);
}
;function E(a) {
  return D(a, function(c) {
    return "slot" === c;
  });
}
;function F(a, c) {
  a = JSON.parse(JSON.stringify(a));
  var d = E(a);
  if (d) {
    const g = d[1];
    d = d[2];
    let l;
    A(c[0]) && (l = c.shift());
    let r = B(c), t = c.length;
    g.splice(d, 1);
    for (d -= r; r < t; ++r) {
      g.splice(d + r, 0, c[r]);
    }
    l && a.unshift(l);
  }
  return a;
}
;G.h = {};
G.g = {};
G.h.j = !0;
G.m = "";
G.g.F = function(a) {
  return a.split("\\").join("/");
};
G.g.B = function(a) {
  return 0 === a.indexOf(G.m);
};
G.g.D = function(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
};
G.g.C = function(a) {
  return G.g.B(a) || G.g.D(a);
};
G.g.i = function(a) {
  return "/" === a.charAt(0) && "//" !== a.substr(0, 2);
};
G.g.I = function(a) {
  if (G.h.j && !G.g.B(a)) {
    throw a + " is not a absolute path!";
  }
  return G.g.F(a).substr(G.m.length - 1);
};
G.g.R = function(a) {
  if (G.h.j && !G.g.i(a)) {
    throw a + " is not a root relative path!";
  }
  return G.m + a.substr(1);
};
G.g.v = function(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
};
G.g.s = function(a) {
  if (G.h.j && G.g.D(a)) {
    throw a + " is not a root relative path or relative path!";
  }
  a = a.split("#")[0].split("/");
  a[a.length - 1] || (a[a.length - 1] = "index.html");
  return a.join("/");
};
G.g.G = function(a, c) {
  if (G.h.j) {
    if (!G.g.i(a)) {
      throw a + " is not a root relative path!";
    }
    if (G.g.i(c) || G.g.C(c)) {
      throw c + " is not a relative path!";
    }
  }
  a = a.split("/");
  for ("" === a[0] && a.shift(); "../" === c.substr(0, 3);) {
    c = c.substr(3), --a.length;
  }
  return (a.length ? a.join("/") + "/" : "") + c;
};
G.g.P = function(a, c) {
  if (G.h.j) {
    if (!G.g.i(a)) {
      throw a + " is not a root relative path!";
    }
    if (G.g.i(c) || G.g.C(c)) {
      throw c + " is not a relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = G.g.v(G.g.H(G.g.s(a), G.g.s(c)));
  d && (a += d);
  return a;
};
G.g.H = function(a, c) {
  if (G.h.j) {
    if (!G.g.i(a)) {
      throw a + " is not a root relative path!";
    }
    if (!G.g.i(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = [], g = 0, l = !1, r;
  var t = a.split("/");
  var p = t.pop();
  if (a === c) {
    return p;
  }
  a = c.split("/");
  c = a.pop();
  var f = t.length;
  for (r = Math.max(a.length, f); g < r; ++g) {
    if (l || a[g] !== t[g]) {
      g < f && d.unshift(".."), a[g] && d.push(a[g]), l = !0;
    }
  }
  (l || p !== c) && d.push(c);
  return d.join("/");
};
G.g.S = function(a, c) {
  if (G.h.j) {
    if (!G.g.i(a)) {
      throw a + " is not a root relative path!";
    }
    if (!G.g.i(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = G.g.v(G.g.H(G.g.s(a), G.g.s(c)));
  d && (a += d);
  return a ? a : "./";
};
G.g.A = function(a) {
  a = a[H];
  if (G.h.j && !b(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
G.g.o = function(a) {
  a = G.g.A(a)[0];
  return !b(a) && y(a) ? a : null;
};
var H = 0;
function G(a, c, d, g, l, r) {
  function t(h) {
    if (h) {
      for (let q = 0; q < h.length; ++q) {
        const m = r[h[q]];
        p(m[0], m[2]);
      }
    }
  }
  function p(h, q) {
    for (const m in h) {
      void 0 === f[m] && (f[m] = h[m]);
    }
    d < q && (d = q);
  }
  const f = !b(a[0]) && y(a[0]) ? a[0] : null;
  if (!f) {
    return a;
  }
  const u = d;
  var e = f.l;
  for (t(f.u); e;) {
    e = l[e];
    var k = G.g.o(e);
    k ? (p(k, e[2]), t(k.u), e = k.l) : e = "";
  }
  for (e = f.l; e;) {
    k = l[e];
    const h = G.g.o(k);
    a = F(G.g.A(k), a);
    h ? e = h.l : e = "";
  }
  l = g.split("/");
  f.L = g;
  f.K = l.pop();
  f.M = l.join("/");
  f.URL = G.g.v(g);
  f.J = c;
  f.N = u;
  f.O = d;
  return a;
}
;G.module = {};
module.exports = G;
G.DOCUMENT_NODE = 9;
G.DOCUMENT_FRAGMENT_NODE = 11;
G.ELEMENT_NODE = 1;
G.TEXT_NODE = 3;
G.CDATA_SECTION = 4;
G.PROCESSING_INSTRUCTION = 7;
G.COMMENT_NODE = 8;
G.COND_CMT_HIDE_LOWER = 13;
G.COND_CMT_SHOW_LOWER_START = 14;
G.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
G.ELEMENT_START_TAG = 17;
G.ELEMENT_END_TAG = 18;
function I(a) {
  return D(a, function(c, d) {
    return "script" === c && d && "application/json" === d.type || !1;
  });
}
;G.gulp = function(a) {
  const c = require("plugin-error"), d = require("vinyl"), g = require("through2"), l = require("path"), r = a || {}, t = G.g.F(l.resolve(r.srcRootPath || "./")) + "/", p = {}, f = {}, u = {};
  G.m = t;
  return g.obj(function(e, k, h) {
    if (e.isNull()) {
      return h();
    }
    if (e.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), h();
    }
    if (".json" !== e.extname) {
      return this.push(e), h();
    }
    if (0 !== e.path.indexOf(t)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + e.path + '" is outside of srcRootPath:"' + r.m + '"')), h();
    }
    k = JSON.parse(e.contents.toString(k));
    const q = parseInt(e.stat.birthtimeMs, 10), m = parseInt(e.stat.ctimeMs, 10);
    e = G.g.I(e.path);
    if (b(k)) {
      var n = I(k);
      if (n) {
        const v = n[0];
        n[1].splice(n[2], 1);
        v && 3 === v.length && (n = eval("(" + v[2] + ");"), !b(n) && y(n) && k.unshift(n));
      }
      p[e] = [k, q, m];
    } else {
      y(k) && (u[e] = [k, q, m]);
    }
    h();
  }, function(e) {
    function k(n, v) {
      if (n) {
        for (let w = 0, x = n.length; w < x; ++w) {
          const z = G.g.G(v, n[w]), C = u[z];
          n[w] = z;
          if (C && 3 === C.length) {
            C.push(!0);
          } else if (!C) {
            throw v + " \u304c\u8981\u6c42\u3059\u308b " + z + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    for (var h in p) {
      const n = p[h];
      let v = G.g.o(n);
      if (!v) {
        continue;
      }
      let w = v.l;
      for (k(v.u, h); w;) {
        const x = G.g.G(h, w), z = p[x];
        v.l = x;
        if (z) {
          delete p[x], f[x] = z, n.push(!0), h = x, (v = G.g.o(z)) ? (w = v.l, k(v.u, h)) : w = "";
        } else if (!f[x]) {
          throw h + " \u304c\u8981\u6c42\u3059\u308b " + x + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (var q in u) {
      (h = u[q]) && 3 === h.length && delete p[q];
    }
    for (var m in p) {
      q = p[m], h = G.g.A(q), 3 === q.length && -1 !== JSON.stringify(h).indexOf('"slot"') && E(h) && delete p[m];
    }
    for (const n in p) {
      m = p[n], delete p[n], m = G(m[H], m[1], m[2], n, f, u), this.push(new d({base:"/", path:n, contents:Buffer.from(JSON.stringify(m))}));
    }
    e();
  });
};

