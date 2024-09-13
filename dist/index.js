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
;I.h = {};
I.g = {};
I.h.i = !0;
I.l = "";
I.g.A = function(a) {
  return a.split("\\").join("/");
};
I.g.v = function(a) {
  return 0 === a.indexOf(I.l);
};
I.g.C = function(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
};
I.g.B = function(a) {
  return I.g.v(a) || I.g.C(a);
};
I.g.j = function(a) {
  return "/" === a.charAt(0) && "//" !== a.substr(0, 2);
};
I.g.H = function(a) {
  return !I.g.v(a) && !I.g.j(a);
};
I.g.F = function(a) {
  if (I.h.i && !I.g.v(a)) {
    throw a + " is not a absolute path!";
  }
  return I.g.A(a).substr(I.l.length - 1);
};
I.g.K = function(a) {
  if (I.h.i && !I.g.j(a)) {
    throw a + " is not a root relative path!";
  }
  return I.l + a.substr(1);
};
I.g.s = function(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
};
I.g.o = function(a) {
  if (I.h.i && I.g.C(a)) {
    throw a + " is not a root relative path or relative path!";
  }
  a = a.split("#")[0].split("/");
  a[a.length - 1] || (a[a.length - 1] = "index.html");
  return a.join("/");
};
I.g.G = function(a) {
  if (I.h.i && !I.g.j(a)) {
    throw a + " is not a root relative path!";
  }
  a = a.split(".json");
  a[a.length - 1] || a.pop();
  return a.join(".json");
};
I.g.I = function(a, c) {
  if (I.h.i) {
    if (!I.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (I.g.j(c) || I.g.B(c)) {
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
I.g.J = function(a, c) {
  if (I.h.i) {
    if (!I.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (I.g.j(c) || I.g.B(c)) {
      throw c + " is not a relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = I.g.s(I.g.D(I.g.o(a), I.g.o(c)));
  d && (a += d);
  return a;
};
I.g.D = function(a, c) {
  if (I.h.i) {
    if (!I.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!I.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = [], g = 0, l = !1, m;
  var q = a.split("/");
  var A = q.pop();
  if (a === c) {
    return A;
  }
  a = c.split("/");
  c = a.pop();
  var e = q.length;
  for (m = Math.max(a.length, e); g < m; ++g) {
    if (l || a[g] !== q[g]) {
      g < e && d.unshift(".."), a[g] && d.push(a[g]), l = !0;
    }
  }
  (l || A !== c) && d.push(c);
  return d.join("/");
};
I.g.L = function(a, c) {
  if (I.h.i) {
    if (!I.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!I.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = I.g.s(I.g.D(I.g.o(a), I.g.o(c)));
  d && (a += d);
  return a ? a : "./";
};
I.g.u = function(a) {
  a = a[J];
  if (I.h.i && !b(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
I.g.m = function(a) {
  a = I.g.u(a)[0];
  return !b(a) && C(a) ? a : null;
};
function K(a, c) {
  function d(m) {
    let q = G(m), A = m.length;
    for (var e; q < A; ++q) {
      var w = m[q], f;
      if (f = !("" + w === w || w === +w)) {
        if (f = b(w)) {
          a: {
            e = w;
            w = m;
            f = q;
            var r = e[0];
            const t = e[1];
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
                h = t, n = 2;
              default:
                if ("" + h === h) {
                  r = e[n];
                  e = c(h, E(r) ? r : null) ? [e, w, f] : d(e);
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
;function L(a) {
  return K(a, function(c) {
    return "slot" === c;
  });
}
;var J = 0;
function I(a, c, d, g, l, m) {
  function q(h) {
    if (h) {
      for (let n = 0; n < h.length; ++n) {
        const u = m[h[n]];
        A(u[0], u[2]);
      }
    }
  }
  function A(h, n) {
    let u = 0;
    for (const v in h) {
      "TEMPLETE" === v ? (f = f || h[v], f === h[v] && ++u) : void 0 === e[v] && (e[v] = h[v], ++u);
    }
    u && d < n && (d = n);
  }
  const e = !b(a[0]) && C(a[0]) ? a[0] : null;
  if (!e) {
    return a;
  }
  const w = d;
  let f = e.TEMPLETE;
  for (q(e.MIXINS); f;) {
    var r = l[f], t = I.g.m(r);
    f = "";
    t && (A(t, r[2]), q(t.MIXINS));
  }
  for (f = e.TEMPLETE; f;) {
    r = l[f], t = I.g.m(r), a = M(I.g.u(r), a), t ? f = t.TEMPLETE : f = "";
  }
  l = g.split("/");
  delete e.TEMPLETE;
  delete e.MIXINS;
  e.FILE_PATH = g;
  e.FILE_NAME = l.pop();
  e.FOLDER_PATH = l.join("/");
  e.URL = I.g.s(g);
  e.CREATED_AT = c;
  e.MODIFIED_AT = w;
  e.UPDATED_AT = d;
  return a;
}
function M(a, c) {
  a = JSON.parse(JSON.stringify(a));
  var d = L(a);
  if (d) {
    const g = d[1];
    d = d[2];
    let l;
    E(c[0]) && (l = c.shift());
    let m = G(c), q = c.length;
    g.splice(d, 1);
    for (d -= m; m < q; ++m) {
      g.splice(d + m, 0, c[m]);
    }
    l && a.unshift(l);
  }
  return a;
}
;I.module = {};
module.exports = I;
I.DOCUMENT_NODE = 9;
I.DOCUMENT_FRAGMENT_NODE = 11;
I.ELEMENT_NODE = 1;
I.TEXT_NODE = 3;
I.CDATA_SECTION = 4;
I.PROCESSING_INSTRUCTION = 7;
I.COMMENT_NODE = 8;
I.COND_CMT_HIDE_LOWER = 13;
I.COND_CMT_SHOW_LOWER_START = 14;
I.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
I.ELEMENT_START_TAG = 17;
I.ELEMENT_END_TAG = 18;
function N(a) {
  return K(a, function(c, d) {
    return "script" === c && d && "application/json" === d.type || !1;
  });
}
;I.gulp = function(a) {
  const c = require("plugin-error"), d = require("vinyl"), g = require("through2"), l = require("path"), m = a || {}, q = m.allPagesPath, A = m.allMixinsPath, e = m.allTempletesPath, w = I.g.A(l.resolve(m.srcRootPath || "./")) + "/", f = {}, r = {}, t = {};
  I.l = w;
  return g.obj(function(h, n, u) {
    var v = I.g.A(h.path);
    if (h.isNull()) {
      return u();
    }
    if (h.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), u();
    }
    if (".json" !== h.extname) {
      return this.push(h), u();
    }
    if (0 !== v.indexOf(w)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + v + '" is outside of srcRootPath:"' + m.l + '"')), u();
    }
    n = JSON.parse(h.contents.toString(n));
    const B = parseInt(h.stat.birthtimeMs, 10);
    h = parseInt(h.stat.ctimeMs, 10);
    v = I.g.F(v);
    if (b(n)) {
      var x = N(n);
      if (x) {
        const y = x[0];
        x[1].splice(x[2], 1);
        y && 3 === y.length && (x = eval("(" + y[2] + ");"), !b(x) && C(x) && n.unshift(x));
      }
      f[I.g.G(v)] = [n, B, h];
    } else {
      C(n) && (t[v] = [n, B, h]);
    }
    u();
  }, function(h) {
    function n(k, p) {
      return I.g.H(p) ? I.g.I(k, p) : p;
    }
    function u(k, p, D) {
      if (p) {
        for (let H = 0, O = p.length; H < O; ++H) {
          const F = n(k, p[H]);
          var z = t[F];
          p[H] = F;
          if (z && 3 === z.length) {
            z.push(!0), z = z[0], u(F, z.MIXINS, D), D || v(F, z.TEMPLETE, z);
          } else if (!z) {
            throw k + " \u304c\u8981\u6c42\u3059\u308b " + F + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    function v(k, p, D) {
      for (; p;) {
        p = n(k, p);
        const z = f[p];
        if (z) {
          if (delete f[p], r[p] = z, D.TEMPLETE = k = p, D = I.g.m(z)) {
            u(k, D.MIXINS, !!D.TEMPLETE), p = D.TEMPLETE;
          } else {
            break;
          }
        } else if (r[p]) {
          break;
        } else {
          throw k + " \u304c\u8981\u6c42\u3059\u308b " + p + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (var B in f) {
      var x = f[B];
      let k = I.g.m(x);
      k && (u(B, k.MIXINS, !!k.TEMPLETE), v(B, k.TEMPLETE, k), f[B] && x.push(!0));
    }
    for (const k in t) {
      3 === t[k].length && (I.h.i && console.log("Unused mixin found! " + k), delete t[k]);
    }
    for (var y in f) {
      B = f[y], x = I.g.u(B), 3 === B.length && L(x) && (I.h.i && console.log("Unused templete found! " + y), delete f[y]);
    }
    q && this.push(new d({base:"/", path:q, contents:Buffer.from(JSON.stringify(f))}));
    for (const k in f) {
      y = f[k], delete f[k], y = I(y[J], y[1], y[2], k, r, t), this.push(new d({base:"/", path:k + ".json", contents:Buffer.from(JSON.stringify(y))}));
    }
    A && this.push(new d({base:"/", path:A, contents:Buffer.from(JSON.stringify(t))}));
    e && this.push(new d({base:"/", path:e, contents:Buffer.from(JSON.stringify(r))}));
    h();
  });
};

