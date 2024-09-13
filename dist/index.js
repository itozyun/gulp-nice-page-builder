function b(a) {
  return !(!a || a.pop !== [].pop);
}
function C(a) {
  return !(!a || "object" !== typeof a);
}
function E(a) {
  return !b(a) && C(a);
}
function G(a) {
  var c = a[0], d = c === +c ? 2 : 1;
  if ("" + a === a || a === +a) {
    var g = 3;
  } else {
    b(a) ? (g = a[0], "" + g === g ? g = 1 : (g = a[0], g = g === +g ? a[0] : -1)) : g = -1;
  }
  return 1 === g || 17 === c ? E(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
;H.h = {};
H.g = {};
H.h.i = !0;
H.l = "";
H.g.A = function(a) {
  return a.split("\\").join("/");
};
H.g.v = function(a) {
  return 0 === a.indexOf(H.l);
};
H.g.C = function(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
};
H.g.B = function(a) {
  return H.g.v(a) || H.g.C(a);
};
H.g.j = function(a) {
  return "/" === a.charAt(0) && "//" !== a.substr(0, 2);
};
H.g.H = function(a) {
  return !H.g.v(a) && !H.g.j(a);
};
H.g.F = function(a) {
  if (H.h.i && !H.g.v(a)) {
    throw a + " is not a absolute path!";
  }
  return H.g.A(a).substr(H.l.length - 1);
};
H.g.K = function(a) {
  if (H.h.i && !H.g.j(a)) {
    throw a + " is not a root relative path!";
  }
  return H.l + a.substr(1);
};
H.g.s = function(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
};
H.g.o = function(a) {
  if (H.h.i && H.g.C(a)) {
    throw a + " is not a root relative path or relative path!";
  }
  a = a.split("#")[0].split("/");
  a[a.length - 1] || (a[a.length - 1] = "index.html");
  return a.join("/");
};
H.g.G = function(a) {
  if (H.h.i && !H.g.j(a)) {
    throw a + " is not a root relative path!";
  }
  a = a.split(".json");
  a[a.length - 1] || a.pop();
  return a.join(".json");
};
H.g.I = function(a, c) {
  if (H.h.i) {
    if (!H.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (H.g.j(c) || H.g.B(c)) {
      throw c + " is not a relative path!";
    }
  }
  a = a.split("/");
  a.pop();
  "" === a[0] && a.shift();
  for ("./" === c.substr(0, 2) && (c = c.substr(2)); "../" === c.substr(0, 3);) {
    c = c.substr(3), --a.length;
  }
  return a.join("/") + "/" + c;
};
H.g.J = function(a, c) {
  if (H.h.i) {
    if (!H.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (H.g.j(c) || H.g.B(c)) {
      throw c + " is not a relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = H.g.s(H.g.D(H.g.o(a), H.g.o(c)));
  d && (a += d);
  return a;
};
H.g.D = function(a, c) {
  if (H.h.i) {
    if (!H.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!H.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = [], g = 0, l = !1, m;
  var t = a.split("/");
  var y = t.pop();
  if (a === c) {
    return y;
  }
  a = c.split("/");
  c = a.pop();
  var e = t.length;
  for (m = Math.max(a.length, e); g < m; ++g) {
    if (l || a[g] !== t[g]) {
      g < e && d.unshift(".."), a[g] && d.push(a[g]), l = !0;
    }
  }
  (l || y !== c) && d.push(c);
  return d.join("/");
};
H.g.L = function(a, c) {
  if (H.h.i) {
    if (!H.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!H.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = H.g.s(H.g.D(H.g.o(a), H.g.o(c)));
  d && (a += d);
  return a ? a : "./";
};
H.g.u = function(a) {
  a = a[I];
  if (H.h.i && !b(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
H.g.m = function(a) {
  a = H.g.u(a)[0];
  return !b(a) && C(a) ? a : null;
};
function J(a, c) {
  function d(m) {
    let t = G(m), y = m.length;
    for (var e; t < y; ++t) {
      var v = m[t], f;
      if (f = !("" + v === v || v === +v)) {
        if (f = b(v)) {
          a: {
            e = v;
            v = m;
            f = t;
            var r = e[0];
            const p = e[1];
            let h = r, n = 1;
            switch(r) {
              case 9:
              case 11:
              case 13:
              case 16:
                e = d(e);
                break a;
              case 1:
              case 17:
                h = p, n = 2;
              default:
                if ("" + h === h) {
                  r = e[n];
                  e = c(h, E(r) ? r : null) ? [e, v, f] : d(e);
                  break a;
                }
            }
            e = void 0;
          }
          f = e;
        }
      }
      if (f) {
        return e;
      }
    }
  }
  let g, l;
  return E(a[0]) ? (g = a.shift(), l = d(a), a.unshift(g), l && l[1] === a ? [l[0], a, ++l[2]] : l) : d(a);
}
;function K(a) {
  return J(a, function(c) {
    return "slot" === c;
  });
}
;var I = 0;
function H(a, c, d, g, l, m) {
  function t(p) {
    if (p) {
      for (let h = 0; h < p.length; ++h) {
        const n = m[p[h]];
        y(n[0], n[2]);
      }
    }
  }
  function y(p, h) {
    for (const n in p) {
      void 0 === e[n] && (e[n] = p[n]);
    }
    d < h && (d = h);
  }
  const e = !b(a[0]) && C(a[0]) ? a[0] : null;
  if (!e) {
    return a;
  }
  const v = d;
  t(e.MIXINS);
  for (var f = e.TEMPLETE; f;) {
    f = l[f];
    var r = H.g.m(f);
    r ? (y(r, f[2]), t(r.MIXINS), f = r.TEMPLETE) : f = "";
  }
  for (f = e.TEMPLETE; f;) {
    r = l[f];
    const p = H.g.m(r);
    a = L(H.g.u(r), a);
    p ? f = p.TEMPLETE : f = "";
  }
  l = g.split("/");
  delete e.TEMPLETE;
  delete e.MIXINS;
  e.FILE_PATH = g;
  e.FILE_NAME = l.pop();
  e.FOLDER_PATH = l.join("/");
  e.URL = H.g.s(g);
  e.CREATED_AT = c;
  e.MODIFIED_AT = v;
  e.UPDATED_AT = d;
  return a;
}
function L(a, c) {
  a = JSON.parse(JSON.stringify(a));
  var d = K(a);
  if (d) {
    const g = d[1];
    d = d[2];
    let l;
    E(c[0]) && (l = c.shift());
    let m = G(c), t = c.length;
    g.splice(d, 1);
    for (d -= m; m < t; ++m) {
      g.splice(d + m, 0, c[m]);
    }
    l && a.unshift(l);
  }
  return a;
}
;H.module = {};
module.exports = H;
H.DOCUMENT_NODE = 9;
H.DOCUMENT_FRAGMENT_NODE = 11;
H.ELEMENT_NODE = 1;
H.TEXT_NODE = 3;
H.CDATA_SECTION = 4;
H.PROCESSING_INSTRUCTION = 7;
H.COMMENT_NODE = 8;
H.COND_CMT_HIDE_LOWER = 13;
H.COND_CMT_SHOW_LOWER_START = 14;
H.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
H.ELEMENT_START_TAG = 17;
H.ELEMENT_END_TAG = 18;
function M(a) {
  return J(a, function(c, d) {
    return "script" === c && d && "application/json" === d.type || !1;
  });
}
;H.gulp = function(a) {
  const c = require("plugin-error"), d = require("vinyl"), g = require("through2"), l = require("path"), m = a || {}, t = m.allPagesPath, y = m.allMixinPath, e = m.allTempletePath, v = H.g.A(l.resolve(m.srcRootPath || "./")) + "/", f = {}, r = {}, p = {};
  H.l = v;
  return g.obj(function(h, n, A) {
    var B = H.g.A(h.path);
    if (h.isNull()) {
      return A();
    }
    if (h.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), A();
    }
    if (".json" !== h.extname) {
      return this.push(h), A();
    }
    if (0 !== B.indexOf(v)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + B + '" is outside of srcRootPath:"' + m.l + '"')), A();
    }
    n = JSON.parse(h.contents.toString(n));
    const z = parseInt(h.stat.birthtimeMs, 10);
    h = parseInt(h.stat.ctimeMs, 10);
    B = H.g.F(B);
    if (b(n)) {
      var w = M(n);
      if (w) {
        const x = w[0];
        w[1].splice(w[2], 1);
        x && 3 === x.length && (w = eval("(" + x[2] + ");"), !b(w) && C(w) && n.unshift(w));
      }
      f[H.g.G(B)] = [n, z, h];
    } else {
      C(n) && (p[B] = [n, z, h]);
    }
    A();
  }, function(h) {
    function n(k, q) {
      return H.g.H(q) ? H.g.I(k, q) : q;
    }
    function A(k, q) {
      if (q) {
        for (let D = 0, N = q.length; D < N; ++D) {
          const F = n(k, q[D]);
          var u = p[F];
          q[D] = F;
          if (u && 3 === u.length) {
            u.push(!0), u = u[0], A(F, u.MIXINS), B(F, u.TEMPLETE, u);
          } else if (!u) {
            throw k + " \u304c\u8981\u6c42\u3059\u308b " + F + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    function B(k, q, u) {
      for (; q;) {
        q = n(k, q);
        const D = f[q];
        if (D) {
          if (delete f[q], r[q] = D, u.TEMPLETE = k = q, u = H.g.m(D)) {
            A(k, u.MIXINS), q = u.TEMPLETE;
          } else {
            break;
          }
        } else if (r[q]) {
          break;
        } else {
          throw k + " \u304c\u8981\u6c42\u3059\u308b " + q + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (var z in f) {
      var w = f[z];
      let k = H.g.m(w);
      k && (A(z, k.MIXINS), B(z, k.TEMPLETE, k), f[z] && w.push(!0));
    }
    for (const k in p) {
      3 === p[k].length && (H.h.i && console.log("Unused mixin found! " + k), delete p[k]);
    }
    for (var x in f) {
      z = f[x], w = H.g.u(z), 3 === z.length && K(w) && (H.h.i && console.log("Unused templete found! " + x), delete f[x]);
    }
    t && this.push(new d({base:"/", path:t, contents:Buffer.from(JSON.stringify(f))}));
    for (const k in f) {
      x = f[k], delete f[k], x = H(x[I], x[1], x[2], k, r, p), this.push(new d({base:"/", path:k + ".json", contents:Buffer.from(JSON.stringify(x))}));
    }
    y && this.push(new d({base:"/", path:y, contents:Buffer.from(JSON.stringify(p))}));
    e && this.push(new d({base:"/", path:e, contents:Buffer.from(JSON.stringify(r))}));
    h();
  });
};

