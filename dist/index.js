function b(a) {
  return !(!a || a.pop !== [].pop);
}
function y(a) {
  return !(!a || "object" !== typeof a);
}
function A(a) {
  return !b(a) && y(a);
}
function C(a) {
  var c = a[0], d = c === +c ? 2 : 1;
  if ("" + a === a || a === +a) {
    var f = 3;
  } else {
    b(a) ? (f = a[0], "" + f === f ? f = 1 : (f = a[0], f = f === +f ? a[0] : -1)) : f = -1;
  }
  return 1 === f || 17 === c ? A(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
;F.h = {};
F.g = {};
F.h.i = !0;
F.l = "";
F.g.C = function(a) {
  return a.split("\\").join("/");
};
F.g.v = function(a) {
  return 0 === a.indexOf(F.l);
};
F.g.B = function(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
};
F.g.A = function(a) {
  return F.g.v(a) || F.g.B(a);
};
F.g.j = function(a) {
  return "/" === a.charAt(0) && "//" !== a.substr(0, 2);
};
F.g.G = function(a) {
  if (F.h.i && !F.g.v(a)) {
    throw a + " is not a absolute path!";
  }
  return F.g.C(a).substr(F.l.length - 1);
};
F.g.I = function(a) {
  if (F.h.i && !F.g.j(a)) {
    throw a + " is not a root relative path!";
  }
  return F.l + a.substr(1);
};
F.g.s = function(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
};
F.g.o = function(a) {
  if (F.h.i && F.g.B(a)) {
    throw a + " is not a root relative path or relative path!";
  }
  a = a.split("#")[0].split("/");
  a[a.length - 1] || (a[a.length - 1] = "index.html");
  return a.join("/");
};
F.g.D = function(a, c) {
  if (F.h.i) {
    if (!F.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (F.g.j(c) || F.g.A(c)) {
      throw c + " is not a relative path!";
    }
  }
  a = a.split("/");
  for ("" === a[0] && a.shift(); "../" === c.substr(0, 3);) {
    c = c.substr(3), --a.length;
  }
  return (a.length ? a.join("/") + "/" : "") + c;
};
F.g.H = function(a, c) {
  if (F.h.i) {
    if (!F.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (F.g.j(c) || F.g.A(c)) {
      throw c + " is not a relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = F.g.s(F.g.F(F.g.o(a), F.g.o(c)));
  d && (a += d);
  return a;
};
F.g.F = function(a, c) {
  if (F.h.i) {
    if (!F.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!F.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = [], f = 0, n = !1, r;
  var t = a.split("/");
  var x = t.pop();
  if (a === c) {
    return x;
  }
  a = c.split("/");
  c = a.pop();
  var e = t.length;
  for (r = Math.max(a.length, e); f < r; ++f) {
    if (n || a[f] !== t[f]) {
      f < e && d.unshift(".."), a[f] && d.push(a[f]), n = !0;
    }
  }
  (n || x !== c) && d.push(c);
  return d.join("/");
};
F.g.J = function(a, c) {
  if (F.h.i) {
    if (!F.g.j(a)) {
      throw a + " is not a root relative path!";
    }
    if (!F.g.j(c)) {
      throw c + " is not a root relative path!";
    }
  }
  var d = c.substr(c.indexOf("#"));
  a = F.g.s(F.g.F(F.g.o(a), F.g.o(c)));
  d && (a += d);
  return a ? a : "./";
};
F.g.u = function(a) {
  a = a[G];
  if (F.h.i && !b(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
F.g.m = function(a) {
  a = F.g.u(a)[0];
  return !b(a) && y(a) ? a : null;
};
function H(a, c) {
  function d(r) {
    let t = C(r), x = r.length;
    for (var e; t < x; ++t) {
      var p = r[t], l;
      if (l = !("" + p === p || p === +p)) {
        if (l = b(p)) {
          a: {
            e = p;
            p = r;
            l = t;
            var q = e[0];
            const h = e[1];
            let m = q, k = 1;
            switch(q) {
              case 9:
              case 11:
              case 13:
              case 16:
                e = d(e);
                break a;
              case 1:
              case 17:
                m = h, k = 2;
              default:
                if ("" + m === m) {
                  q = e[k];
                  e = c(m, A(q) ? q : null) ? [e, p, l] : d(e);
                  break a;
                }
            }
            e = void 0;
          }
          l = e;
        }
      }
      if (l) {
        return e;
      }
    }
  }
  let f, n;
  return A(a[0]) ? (f = a.shift(), n = d(a), a.unshift(f), n && n[1] === a ? [n[0], a, ++n[2]] : n) : d(a);
}
;function I(a) {
  return H(a, function(c) {
    return "slot" === c;
  });
}
;var G = 0;
function F(a, c, d, f, n, r) {
  function t(h) {
    if (h) {
      for (let m = 0; m < h.length; ++m) {
        const k = r[h[m]];
        x(k[0], k[2]);
      }
    }
  }
  function x(h, m) {
    for (const k in h) {
      void 0 === e[k] && (e[k] = h[k]);
    }
    d < m && (d = m);
  }
  const e = !b(a[0]) && y(a[0]) ? a[0] : null;
  if (!e) {
    return a;
  }
  const p = d;
  t(e.MIXINS);
  for (var l = e.TEMPLETE; l;) {
    l = n[l];
    var q = F.g.m(l);
    q ? (x(q, l[2]), t(q.MIXINS), l = q.TEMPLETE) : l = "";
  }
  for (l = e.TEMPLETE; l;) {
    q = n[l];
    const h = F.g.m(q);
    a = J(F.g.u(q), a);
    h ? l = h.TEMPLETE : l = "";
  }
  n = f.split("/");
  e.FILE_PATH = f;
  e.FILE_NAME = n.pop();
  e.FOLDER_PATH = n.join("/");
  e.URL = F.g.s(f);
  e.CREATED_AT = c;
  e.MODIFIED_AT = p;
  e.UPDATED_AT = d;
  return a;
}
function J(a, c) {
  a = JSON.parse(JSON.stringify(a));
  var d = I(a);
  if (d) {
    const f = d[1];
    d = d[2];
    let n;
    A(c[0]) && (n = c.shift());
    let r = C(c), t = c.length;
    f.splice(d, 1);
    for (d -= r; r < t; ++r) {
      f.splice(d + r, 0, c[r]);
    }
    n && a.unshift(n);
  }
  return a;
}
;F.module = {};
module.exports = F;
F.DOCUMENT_NODE = 9;
F.DOCUMENT_FRAGMENT_NODE = 11;
F.ELEMENT_NODE = 1;
F.TEXT_NODE = 3;
F.CDATA_SECTION = 4;
F.PROCESSING_INSTRUCTION = 7;
F.COMMENT_NODE = 8;
F.COND_CMT_HIDE_LOWER = 13;
F.COND_CMT_SHOW_LOWER_START = 14;
F.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
F.ELEMENT_START_TAG = 17;
F.ELEMENT_END_TAG = 18;
function K(a) {
  return H(a, function(c, d) {
    return "script" === c && d && "application/json" === d.type || !1;
  });
}
;F.gulp = function(a) {
  const c = require("plugin-error"), d = require("vinyl"), f = require("through2"), n = require("path"), r = a || {}, t = r.allMixinPath, x = r.allTempletePath, e = F.g.C(n.resolve(r.srcRootPath || "./")) + "/", p = {}, l = {}, q = {};
  F.l = e;
  return f.obj(function(h, m, k) {
    if (h.isNull()) {
      return k();
    }
    if (h.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), k();
    }
    if (".json" !== h.extname) {
      return this.push(h), k();
    }
    if (0 !== h.path.indexOf(e)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + h.path + '" is outside of srcRootPath:"' + r.l + '"')), k();
    }
    m = JSON.parse(h.contents.toString(m));
    const z = parseInt(h.stat.birthtimeMs, 10), u = parseInt(h.stat.ctimeMs, 10);
    h = F.g.G(h.path);
    if (b(m)) {
      var g = K(m);
      if (g) {
        const w = g[0];
        g[1].splice(g[2], 1);
        w && 3 === w.length && (g = eval("(" + w[2] + ");"), !b(g) && y(g) && m.unshift(g));
      }
      p[h] = [m, z, u];
    } else {
      y(m) && (q[h] = [m, z, u]);
    }
    k();
  }, function(h) {
    function m(g, w) {
      if (g) {
        for (let v = 0, B = g.length; v < B; ++v) {
          const E = F.g.D(w, g[v]), D = q[E];
          g[v] = E;
          if (D && 3 === D.length) {
            D.push(!0);
          } else if (!D) {
            throw w + " \u304c\u8981\u6c42\u3059\u308b " + E + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    for (var k in p) {
      var z = p[k];
      let g = F.g.m(z);
      if (!g) {
        continue;
      }
      m(g.MIXINS, k);
      let w = g.TEMPLETE;
      for (; w;) {
        const v = F.g.D(k, w), B = p[v];
        if (B) {
          delete p[v], g.TEMPLETE = v, l[v] = B, 3 === z.length && z.push(!0), k = v, (g = F.g.m(B)) ? (m(g.MIXINS, k), w = g.TEMPLETE) : w = "";
        } else if (!l[v]) {
          throw k + " \u304c\u8981\u6c42\u3059\u308b " + v + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    for (const g in q) {
      3 === q[g].length && (F.h.i && console.log("Unused mixin found! " + g), delete q[g]);
    }
    for (var u in p) {
      k = p[u], z = F.g.u(k), 3 === k.length && I(z) && (F.h.i && console.log("Unused templete found! " + u), delete p[u]);
    }
    for (const g in p) {
      u = p[g], delete p[g], u = F(u[G], u[1], u[2], g, l, q), this.push(new d({base:"/", path:g, contents:Buffer.from(JSON.stringify(u))}));
    }
    t && this.push(new d({base:"/", path:t, contents:Buffer.from(JSON.stringify(q))}));
    x && this.push(new d({base:"/", path:x, contents:Buffer.from(JSON.stringify(l))}));
    h();
  });
};

