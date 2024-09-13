function b(a) {
  return !(!a || a.pop !== [].pop);
}
function x(a) {
  return !(!a || "object" !== typeof a);
}
function y(a) {
  return !b(a) && x(a);
}
function A(a) {
  var c = a[0], d = c === +c ? 2 : 1;
  if ("" + a === a || a === +a) {
    var g = 3;
  } else {
    b(a) ? (g = a[0], "" + g === g ? g = 1 : (g = a[0], g = g === +g ? a[0] : -1)) : g = -1;
  }
  return 1 === g || 17 === c ? y(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
;D.h = {};
D.g = {};
D.h.i = !0;
D.m = "";
D.g.F = function(a) {
  return a.split("\\").join("/");
};
D.g.B = function(a) {
  return 0 === a.indexOf(D.m);
};
D.g.D = function(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
};
D.g.C = function(a) {
  return D.g.B(a) || D.g.D(a);
};
D.g.j = function(a) {
  return "/" === a.charAt(0) && "//" !== a.substr(0, 2);
};
D.g.I = function(a) {
  if (D.h.i && !D.g.B(a)) {
    throw a + " is not a absolute path!";
  }
  return D.g.F(a).substr(D.m.length - 1);
};
D.g.R = function(a) {
  if (D.h.i && !D.g.j(a)) {
    throw a + " is not a root relative path!";
  }
  return D.m + a.substr(1);
};
D.g.v = function(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
};
D.g.s = function(a) {
  if (D.h.i && D.g.D(a)) {
    throw a + " is not a root relative path or relative path!";
  }
  a = a.split("#")[0].split("/");
  a[a.length - 1] || (a[a.length - 1] = "index.html");
  return a.join("/");
};
D.g.G = function(a, c) {
  if (D.h.i) {
    if (!D.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (D.g.j(c) || D.g.C(c)) {
      throw c + " is not a relative path!";
    }
  }
  a = a.split("/");
  for ("" === a[0] && a.shift(); "../" === c.substr(0, 3);) {
    c = c.substr(3), --a.length;
  }
  return (a.length ? a.join("/") + "/" : "") + c;
};
D.g.P = function(a, c) {
  if (D.h.i) {
    if (!D.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (D.g.j(c) || D.g.C(c)) {
      throw c + " is not a relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = D.g.v(D.g.H(D.g.s(a), D.g.s(c)));
  d && (a += d);
  return a;
};
D.g.H = function(a, c) {
  if (D.h.i) {
    if (!D.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!D.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = [], g = 0, m = !1, r;
  var u = a.split("/");
  var q = u.pop();
  if (a === c) {
    return q;
  }
  a = c.split("/");
  c = a.pop();
  var f = u.length;
  for (r = Math.max(a.length, f); g < r; ++g) {
    if (m || a[g] !== u[g]) {
      g < f && d.unshift(".."), a[g] && d.push(a[g]), m = !0;
    }
  }
  (m || q !== c) && d.push(c);
  return d.join("/");
};
D.g.S = function(a, c) {
  if (D.h.i) {
    if (!D.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!D.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = D.g.v(D.g.H(D.g.s(a), D.g.s(c)));
  d && (a += d);
  return a ? a : "./";
};
D.g.A = function(a) {
  a = a[E];
  if (D.h.i && !b(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
D.g.o = function(a) {
  a = D.g.A(a)[0];
  return !b(a) && x(a) ? a : null;
};
function F(a, c) {
  function d(r) {
    let u = A(r), q = r.length;
    for (var f; u < q; ++u) {
      var t = r[u], e;
      if (e = !("" + t === t || t === +t)) {
        if (e = b(t)) {
          a: {
            f = t;
            t = r;
            e = u;
            var l = f[0];
            const k = f[1];
            let p = l, n = 1;
            switch(l) {
              case 9:
              case 11:
              case 13:
              case 16:
                f = d(f);
                break a;
              case 1:
              case 17:
                p = k, n = 2;
              default:
                if ("" + p === p) {
                  l = f[n];
                  f = c(p, y(l) ? l : null) ? [f, t, e] : d(f);
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
  let g, m;
  return y(a[0]) ? (g = a.shift(), m = d(a), a.unshift(g), m && m[1] === a ? [m[0], a, ++m[2]] : m) : d(a);
}
;function G(a) {
  return F(a, function(c) {
    return "slot" === c;
  });
}
;var E = 0;
function D(a, c, d, g, m, r) {
  function u(k) {
    if (k) {
      for (let p = 0; p < k.length; ++p) {
        const n = r[k[p]];
        q(n[0], n[2]);
      }
    }
  }
  function q(k, p) {
    for (const n in k) {
      void 0 === f[n] && (f[n] = k[n]);
    }
    d < p && (d = p);
  }
  const f = !b(a[0]) && x(a[0]) ? a[0] : null;
  if (!f) {
    return a;
  }
  const t = d;
  u(f.u);
  for (var e = f.l; e;) {
    e = m[e];
    var l = D.g.o(e);
    l ? (q(l, e[2]), u(l.u), e = l.l) : e = "";
  }
  for (e = f.l; e;) {
    l = m[e];
    const k = D.g.o(l);
    a = H(D.g.A(l), a);
    k ? e = k.l : e = "";
  }
  m = g.split("/");
  f.L = g;
  f.K = m.pop();
  f.M = m.join("/");
  f.URL = D.g.v(g);
  f.J = c;
  f.N = t;
  f.O = d;
  return a;
}
function H(a, c) {
  a = JSON.parse(JSON.stringify(a));
  var d = G(a);
  if (d) {
    const g = d[1];
    d = d[2];
    let m;
    y(c[0]) && (m = c.shift());
    let r = A(c), u = c.length;
    g.splice(d, 1);
    for (d -= r; r < u; ++r) {
      g.splice(d + r, 0, c[r]);
    }
    m && a.unshift(m);
  }
  return a;
}
;D.module = {};
module.exports = D;
D.DOCUMENT_NODE = 9;
D.DOCUMENT_FRAGMENT_NODE = 11;
D.ELEMENT_NODE = 1;
D.TEXT_NODE = 3;
D.CDATA_SECTION = 4;
D.PROCESSING_INSTRUCTION = 7;
D.COMMENT_NODE = 8;
D.COND_CMT_HIDE_LOWER = 13;
D.COND_CMT_SHOW_LOWER_START = 14;
D.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
D.ELEMENT_START_TAG = 17;
D.ELEMENT_END_TAG = 18;
function I(a) {
  return F(a, function(c, d) {
    return "script" === c && d && "application/json" === d.type || !1;
  });
}
;D.gulp = function(a) {
  const c = require("plugin-error"), d = require("vinyl"), g = require("through2"), m = require("path"), r = a || {}, u = D.g.F(m.resolve(r.srcRootPath || "./")) + "/", q = {}, f = {}, t = {};
  D.m = u;
  return g.obj(function(e, l, k) {
    if (e.isNull()) {
      return k();
    }
    if (e.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), k();
    }
    if (".json" !== e.extname) {
      return this.push(e), k();
    }
    if (0 !== e.path.indexOf(u)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + e.path + '" is outside of srcRootPath:"' + r.m + '"')), k();
    }
    l = JSON.parse(e.contents.toString(l));
    const p = parseInt(e.stat.birthtimeMs, 10), n = parseInt(e.stat.ctimeMs, 10);
    e = D.g.I(e.path);
    if (b(l)) {
      var h = I(l);
      if (h) {
        const w = h[0];
        h[1].splice(h[2], 1);
        w && 3 === w.length && (h = eval("(" + w[2] + ");"), !b(h) && x(h) && l.unshift(h));
      }
      q[e] = [l, p, n];
    } else {
      x(l) && (t[e] = [l, p, n]);
    }
    k();
  }, function(e) {
    function l(h, w) {
      if (h) {
        for (let v = 0, z = h.length; v < z; ++v) {
          const C = D.g.G(w, h[v]), B = t[C];
          h[v] = C;
          if (B && 3 === B.length) {
            B.push(!0);
          } else if (!B) {
            throw w + " \u304c\u8981\u6c42\u3059\u308b " + C + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    for (var k in q) {
      var p = q[k];
      let h = D.g.o(p);
      if (!h) {
        continue;
      }
      l(h.u, k);
      let w = h.l;
      for (; w;) {
        const v = D.g.G(k, w), z = q[v];
        if (z) {
          delete q[v], h.l = v, f[v] = z, 3 === p.length && p.push(!0), k = v, (h = D.g.o(z)) ? (l(h.u, k), w = h.l) : w = "";
        } else if (!f[v]) {
          throw k + " \u304c\u8981\u6c42\u3059\u308b " + v + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (const h in t) {
      3 === t[h].length && (D.h.i && console.log("Unused mixin found! " + h), delete t[h]);
    }
    for (var n in q) {
      k = q[n], p = D.g.A(k), 3 === k.length && G(p) && (D.h.i && console.log("Unused templete found! " + n), delete q[n]);
    }
    for (const h in q) {
      n = q[h], delete q[h], n = D(n[E], n[1], n[2], h, f, t), this.push(new d({base:"/", path:h, contents:Buffer.from(JSON.stringify(n))}));
    }
    e();
  });
};

