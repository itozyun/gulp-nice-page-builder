function aa(a) {
  a && (a = ba(a), this.$ = a + ("/" === a.charAt(a.length - 1) ? "" : "/"));
}
function ba(a) {
  return a.split("\\").join("/");
}
function ca(a, b) {
  if (!a.$) {
    throw "absoluteDirectoryPathOfRoot is empty!";
  }
  return 0 === b.indexOf(a.$);
}
function y(a, b, c) {
  if (ca(a, c) || "/" === c.charAt(0) && !da(c)) {
    a = c;
  } else {
    if ("/" !== b.charAt(0) || da(b)) {
      throw b + " is not a root relative path!";
    }
    var e;
    (e = "/" === c.charAt(0) && !da(c)) || (e = c, e = a.$ ? ca(a, e) || ea(e) : ea(e));
    if (e) {
      throw c + " is not a relative path!";
    }
    a = b.split("/");
    a.pop();
    "" === a[0] && a.shift();
    for ("./" === c.substr(0, 2) && (c = c.substr(2)); "../" === c.substr(0, 3);) {
      c = c.substr(3), --a.length;
    }
    a = a.join("/") + "/" + c;
  }
  return a;
}
function ea(a) {
  return da(a) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
}
function da(a) {
  return "//" === a.substr(0, 2);
}
;var I = !1, fa = !1, ha = !1;
function J(a) {
  a = J.ja(a);
  I && (a.html2json = I);
  fa && (a.generator = fa);
  ha && (a.json2html = ha);
  return a;
}
J.ja = function(a) {
  var b = a || {};
  a = require("path").resolve(b.srcRootPath || "./") + "/";
  const c = new aa(a), e = b.allPagesPath && y(c, "/", b.allPagesPath), f = y(c, "/", b.allMixinsPath || "all.mixins.json");
  b = y(c, "/", b.allTempletesPath || "all.templetes.json");
  return {oa:ba(a), ka:e || "", pa:f, qa:b, path:c};
};
J.module = {};
module.exports = J;
J.DOCUMENT_NODE = 9;
J.DOCUMENT_FRAGMENT_NODE = 11;
J.ELEMENT_NODE = 1;
J.TEXT_NODE = 3;
J.CDATA_SECTION = 4;
J.PROCESSING_INSTRUCTION = 7;
J.COMMENT_NODE = 8;
J.COND_CMT_HIDE_LOWER = 13;
J.COND_CMT_SHOW_LOWER_START = 14;
J.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
J.ELEMENT_START_TAG = 17;
J.ELEMENT_END_TAG = 18;
J.gulp = function(a) {
  a = J.ja(a);
  I && (a.html2json = ia);
  fa && (a.generator = ja);
  ha && (a.json2html = ka);
  return a;
};
var M = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
M.LI = M.TD = M.DD;
M.TH = M.DT;
M.RB = M.RP = M.RT = M.P;
M.TFOOT = M.THEAD = M.TBODY;
M.RTC = M.RBC;
function la(a, b) {
  var c = 0;
  function e() {
    c && (ma(b, f(a.substring(0, c))), a = a.substring(c), c = 0);
  }
  function f(h) {
    return h.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function k(h, D, p) {
    for (var m = 1, q = p.length, w = 3, l, E; w < q && 3 !== m;) {
      E = p.charAt(w);
      switch(m) {
        case 1:
          P[E] & 4 ? m = 2 : ">" === E && (m = 3);
          1 !== m && (l = p.substring(2, w));
          break;
        case 2:
          ">" === E && (m = 3);
      }
      ++w;
    }
    return 3 === m ? (v(h, D, A ? l : l.toUpperCase(), !1), w) : 0;
  }
  function v(h, D, p, m) {
    var q = 0, w = h.length;
    if (p) {
      for (q = w; 0 <= q && h[--q] !== p;) {
      }
    }
    if (0 <= q) {
      for (; q < w;) {
        na(D, h[--w], m && !M[h[w]], !1), A && oa[h[w]] && (A = !!D.da);
      }
      h.length = q;
    } else {
      na(D, p, !1, !0);
    }
  }
  function n(h, D, p, m) {
    function q(C, F) {
      t[C] = !0 === F ? !0 : pa[C.toLowerCase()] ? A ? f(F || C) : !0 : f(F || "");
      ++u;
    }
    function w() {
      (G = "/>" === m.substr(d, 2)) && ++d;
      return G;
    }
    for (var l = 1, E = m.length, d = 2, t = {}, u = 0, G = !1, H, x, K, N, O, L; d < E && 9 > l;) {
      H = m.charAt(d);
      switch(l) {
        case 1:
          if (P[H] & 4) {
            l = 2, x = m.substring(1, d);
          } else if (">" === H || w()) {
            l = 9, x = m.substring(1, d);
          }
          break;
        case 2:
          ">" === H || w() ? l = 9 : P[H] & 4 || (l = 3, K = d);
          break;
        case 3:
          if ("=" === H) {
            l = 5, N = m.substring(K, d);
          } else if (P[H] & 4) {
            l = 4, N = m.substring(K, d);
          } else if (">" === H || w()) {
            l = 9, q(m.substring(K, d), !0);
          }
          break;
        case 4:
          "=" === H ? l = 5 : ">" === H || w() ? (l = 9, q(N, !0)) : P[H] & 4 || (l = 3, q(N, !0), K = d);
          break;
        case 5:
          '"' === H || "'" === H ? (l = 6, O = H, K = d + 1) : P[H] & 4 || (l = 7, K = d);
          L = !1;
          break;
        case 6:
          L || H !== O || (l = 2, q(N, m.substring(K, d)));
          L = "\\" === H && !L;
          break;
        case 7:
          P[H] & 4 ? l = 2 : ">" === H ? l = 9 : !qa[N] && w() && (l = 9), 7 !== l && q(N, m.substring(K, d));
      }
      ++d;
    }
    if (9 === l) {
      l = x.toUpperCase();
      A ||= !!oa[x];
      if (!A) {
        for (; D;) {
          if (M[D] && !M[D][l]) {
            v(h, p, D, !1), D = h[h.length - 1];
          } else {
            break;
          }
        }
      }
      (G = G || !!ra[l]) || (h[h.length] = A ? x : l);
      sa(p, A ? x : l, u ? t : null, G);
      return d;
    }
    return 0;
  }
  for (var r = [], A = !!b.da, B = a.length - c, g, z; a;) {
    (g = z = r[r.length - 1]) && A && (z = g.toUpperCase());
    if (ta[z]) {
      if ("PLAINTEXT" === z) {
        ma(b, f(a)), a = "";
      } else {
        if (g = a.toUpperCase().indexOf("</" + z), 0 <= g) {
          if (c = g, e(), g = k(r, b, a)) {
            a = a.substring(g);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (e(), g = a.indexOf(">"), -1 !== g) {
        ua(b, a.substring(10, g)), a = a.substring(g + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === c) {
      if (e(), g = a.indexOf("?>"), -1 !== g) {
        va(b, f(a.substring(2, g))), a = a.substring(g + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (e(), g = a.indexOf("]]\x3e"), -1 !== g) {
        wa(b, f(a.substring(9, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (e(), g = a.indexOf("--\x3e"), -1 !== g) {
        xa(b, f(a.substring(4, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === c && P[a.charAt(c + 2)] & 3) {
      if (e(), g = k(r, b, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(c) && P[a.charAt(c + 1)] & 3) {
      if (e(), g = n(r, g, b, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else {
      g = a.indexOf("<", c), -1 === g ? (ma(b, f(a)), a = "") : c < g ? c = g : ++c;
    }
    g = a.length - c;
    if (g === B) {
      throw a;
    }
    B = g;
  }
  e();
  v(r, b, "", !0);
}
var oa = {xml:!0, svg:!0, math:!0}, ra = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, wa:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ta = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, qa = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, pa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, P = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var ya = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, za = {link:!0, kb:!0, Da:!0, ta:!0, ab:!0, input:!0, xa:!0, base:!0, Fa:!0, Na:!0, eb:!0, qb:!0, track:!0, Hb:!0, Ha:!0, Aa:!0, frame:!0, cb:!0, Ba:!0}, Aa = {$a:!0, head:!0, body:!0, p:!0, Ma:!0, Ia:!0, gb:!0, pb:!0, zb:!0, Eb:!0, Cb:!0, Ab:!0, Db:!0, Fb:!0, tb:!0, ub:!0, vb:!0, wb:!0, xb:!0, ob:!0, caption:!0, Ga:!0}, Ba = {a:!0, audio:!0, 
Ja:!0, bb:!0, map:!0, ua:!0, video:!0}, Ca = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, Da = {address:!0, ya:!0, za:!0, Ca:!0, canvas:!0, details:!0, Ka:!0, La:!0, Oa:!0, Pa:!0, Qa:!0, Ra:!0, form:!0, Sa:!0, Ta:!0, Ua:!0, Va:!0, Wa:!0, Xa:!0, Ya:!0, Za:!0, ta:!0, fb:!0, hb:!0, jb:!0, lb:!0, ua:!0, nb:!0, p:!0, sb:!0, yb:!0, Gb:!0, Ea:!0, dir:!0, mb:!0, ib:!0}, Ea = {va:!0, style:!0, rb:!0, Ib:!0}, Fa = {va:!0, style:!0, Bb:!0};
function Q(a) {
  return !(!a || a.pop !== [].pop);
}
function R(a) {
  return !(!a || "object" !== typeof a);
}
function S(a) {
  return "" + a === a;
}
function U(a) {
  return S(a) || a === +a;
}
function V(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0 ? +a : a;
}
function Ga(a) {
  if (U(a)) {
    a = 3;
  } else {
    if (Q(a)) {
      if (S(a[0])) {
        a = 1;
      } else {
        var b = a[0];
        a = b === +b ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function Ha(a) {
  return !Q(a) && R(a);
}
function Ia(a, b, c, e, f) {
  var k = b[1], v = b.slice(2);
  a = v.length ? a(k, v) : a(k);
  void 0 !== a && null !== a && "" !== a && (U(a) ? c ? c.splice(e, 1, a) : (b.length = 0, b.push(3, b)) : Q(a) ? 11 === a[0] ? c ? (a.shift(), a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : Q(a[0]) ? c ? (a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(e, 1, a) : (b.length = 0, b.push(11, a)) : f("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return a;
}
function Ja(a, b, c, e) {
  if (Q(c) && S(c[0])) {
    var f = c[0];
    c = c.slice(1);
    f = c.length ? a(f, c) : a(f);
  } else {
    S(c) ? f = a(c) : e("Invalid InstructionAttr value! [" + b + "=" + c + "]");
  }
  return Q(f) ? Ja(a, b, f, e) : f;
}
function Ka(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function La(a, b, c) {
  a = Ka("" + a);
  var e = a.match('"'), f = a.match("'"), k = b ? "'" : '"';
  if (e && f) {
    a = b ? k + a.split("'").join("\\'") + k : k + a.split('"').join('\\"') + k;
  } else if (e) {
    a = "'" + a + "'";
  } else if (f) {
    a = b ? k + a.split("'").join("\\'") + k : k + a + k;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = k + a + k;
  }
  return a;
}
function Ma(a) {
  var b = a[0], c = b === +b ? 2 : 1;
  return 1 === Ga(a) || 17 === b ? Ha(a[c]) ? c + 1 : c : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
function Na(a) {
  var b = Ma(a), c = "", e;
  if (b < a.length) {
    for (e = b; e < a.length;) {
      b = a[e];
      var f = Ga(b);
      3 === f ? (c = U(b) ? c + b : c + b[1], a.splice(e, 1)) : (c && (a.splice(e, 0, V(c)), c = ""), ++e, 1 !== f && 17 !== f && 13 !== f && 16 !== f || Na(b));
    }
    c && (a[e] = V(c));
  }
}
function Oa(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function Pa(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function Qa(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), e = "", f = "";
  b < c ? (e = a.split(".")[1], a = a.split(".")[0], 0 < b && (f = a.split("#")[1], a = a.split("#")[0])) : c < b && (f = a.split("#")[1], a = a.split("#")[0], 0 < c && (e = a.split(".")[1], a = a.split(".")[0]));
  return [a, f, e];
}
;function Ra(a) {
  return 1 === a.$ || 17 === a.$ || 13 === a.$ || 16 === a.$ || Sa(a);
}
function Sa(a) {
  return 9 === a.$ || 11 === a.$;
}
function Ta(a, b, c, e, f) {
  if (a === !!a) {
    var k = null;
    this.aa = a;
  } else {
    k = a, this.aa = k.aa;
  }
  if (k) {
    switch(k.$) {
      case 3:
      case 8:
      case 4:
      case 7:
      case 15:
      case 18:
        throw "nodeType:" + k.$ + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (Sa(this)) {
      throw "nodeType:" + k.$ + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this.da = k;
  this.$ = c;
  if (k) {
    if (k.ca || (k.ca = []), a = k.ca, 0 <= b && b < a.length) {
      if (1 <= b && 17 === a[b - 1].$) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.splice(b, 0, this);
    } else {
      if (a.length && 17 === a[a.length - 1].$) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.push(this);
    }
  }
  switch(c) {
    case 1:
    case 17:
      this.la = f || null;
    case 18:
      this.ra = e;
      break;
    case 7:
    case 3:
    case 4:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      this.ma = e;
  }
}
function W(a) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      return a.ma;
    default:
      throw "getNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Ua(a, b) {
  if (a.aa && null !== a) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setNodeValue() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.ma = b;
      break;
    default:
      throw "setNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Va(a) {
  return 1 === a.$ || 17 === a.$;
}
function Wa(a) {
  if (!Va(a) && 18 !== a.$) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.ra;
}
function X(a) {
  if (!Ra(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeLength() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca.length;
}
function Y(a, b) {
  if (!Ra(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca[b] || null;
}
Ta.prototype.remove = function() {
  if (Sa(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa && null !== this) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e discard() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (Sa(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa) {
    throw "restricted mode \u3067\u306f getMyIndex() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = this.da ? this.da.ca.indexOf(this) : -1;
  0 <= a && (this.da.ca.splice(a, 1), this.da = null);
};
function Z(a, b, c, e) {
  if (a.aa && (null !== a || !Ra(a))) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (a.aa) {
    a = null;
  } else {
    var f = X(a);
    if (a.aa) {
      throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    a = new Ta(a, f, b, c, e);
  }
  return a;
}
;function Xa(a, b) {
  b = new Ya(b);
  la(a, b);
  return b.aa;
}
function Ya(a) {
  this.ca = a;
  this.$ = this.aa = new Ta(!1, 0, 11);
}
function ua(a, b) {
  var c = a.aa;
  if (c.aa) {
    throw "restricted mode \u3067\u306f setNodeType() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (11 !== c.$) {
    throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
  }
  c.$ = 9;
  Ua(a.aa, b);
}
function sa(a, b, c, e) {
  if (e) {
    a = a.$;
    if (a.aa && (null !== a || !Ra(a))) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (!a.aa) {
      e = X(a);
      if (a.aa) {
        throw "restricted mode \u3067\u306f insertElementAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      new Ta(a, e, 1, b, c);
    }
  } else {
    a.$ = Z(a.$, 17, b, c);
  }
}
function na(a, b, c, e) {
  if (e) {
    a.ca && Z(a.$, 18, b);
  } else if (!c || !a.ca) {
    if (b === Wa(a.$)) {
      b = a.$;
      if (b.aa) {
        throw "restricted mode \u3067\u306f finalize() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      if (17 !== b.$) {
        throw "close() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      b.$ = 1;
      b = a.$;
      if (Sa(b)) {
        throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      if (b.aa && null !== b) {
        throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e getParent() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      a.$ = b.da;
    } else {
      throw "End tag error! " + b;
    }
  }
}
function ma(a, b) {
  Z(a.$, 3, b);
}
function xa(a, b) {
  Z(a.$, 8, b);
}
function wa(a, b) {
  Z(a.$, 4, b);
}
function va(a, b) {
  Z(a.$, 7, b);
}
;function Za(a, b, c) {
  function e(d, t, u, G) {
    switch(d.$) {
      case 1:
      case 17:
        var H = {};
        var x = Wa(d).toLowerCase();
        G = "pre" === x;
        if (!Va(d)) {
          throw "getAttrs() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var K = Ha(d.la) ? d.la : null;
        var N = 0, O;
        if (K) {
          for (O in K) {
            var L = ya[O] ? 1 : K[O];
            if ("id" === O) {
              var C = L;
            } else if ("class" === O) {
              var F = L;
            } else {
              if (O.startsWith(q)) {
                var T = f(L);
                T.fa ? (L = [T.name], B.apply(L, T.fa)) : L = T.name;
              }
              H[O] = V(L);
              ++N;
            }
          }
        }
        C && (x += "#" + C);
        F && (x += "." + F);
        if (G && g) {
          for (; C = v(d);) {
            if (r(W(C))) {
              Ua(C, Oa(W(C), "\n"));
              break;
            } else {
              C.remove();
            }
          }
          for (; C = n(d);) {
            if (r(W(C))) {
              Ua(C, Pa(W(C), "\n"));
              break;
            } else {
              C.remove();
            }
          }
        }
        C = N ? [x, H] : [x];
        for (F = 0; F < X(d); ++F) {
          e(Y(d, F), C, G || u, !!Fa[x]);
        }
        t.push(C);
        17 !== d.$ || C.unshift(17);
        break;
      case 18:
        t.push([18, Wa(d).toLowerCase()]);
        break;
      case 3:
        d = "" + W(d);
        if (!u && g) {
          if (G) {
            d = Pa(Oa(d, "\n"), "\n");
          } else {
            d = d.split("\r\n").join("\n");
            h && (d = d.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (d = d.split("\t").join(" "); 0 <= d.indexOf("\n\n");) {
              d = d.split("\n\n").join("\n");
            }
            z && (x = "\n" === d.charAt(0) && /\n[ ]*$/.test(d));
            d = Pa(d, "\n");
            for (d = d.split("\n").join(" "); 0 <= d.indexOf("  ");) {
              d = d.split("  ").join(" ");
            }
            x && (d = Pa(Oa(d, " "), " "));
            d = d.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        (x = V(d)) && t.push(x);
        break;
      case 4:
        x = W(d);
        D && t.push([4, V(x)]);
        break;
      case 7:
        x = W(d);
        T = f(x);
        C = [7, T.name];
        T.fa && B.apply(C, T.fa);
        t.push(C);
        break;
      case 8:
        x = W(d);
        if (x.startsWith("[if") && 0 < x.indexOf("<![endif]")) {
          d = Xa(k(x, ">", "<![endif]", !0), !0);
          C = [13, k(x, "[", "]", !1)];
          for (F = 0; F < X(d); ++F) {
            e(Y(d, F), C, u, G);
          }
          (2 < C.length || m) && t.push(C);
        } else if (x.startsWith("{") && 2 < x.indexOf("};")) {
          d = Xa(x.substring(x.indexOf("};") + 2), !0);
          C = [16, k(x, "{", "};", !1)];
          for (F = 0; F < X(d); ++F) {
            e(Y(d, F), C, u, G);
          }
          (2 < C.length || m) && t.push(C);
        } else {
          x.startsWith("[if") && 0 < x.indexOf("><!") ? (t.push([14, k(x, "[", "]", !1)]), E = !0) : "<![endif]" === x && E ? (u = t[t.length - 1], m || !u || 14 !== u[0] ? t.push([15]) : u && t.pop(), E = !1) : p && t.push([8, V(x)]);
        }
        break;
      case 9:
        x = W(d);
        g && (x = x.split("\n").join(" ").split("  ").join(" "));
        C = [9, x];
        t.push(C);
        for (F = 0; F < X(d); ++F) {
          e(Y(d, F), C, !1, !1);
        }
        break;
      case 11:
        for (C = [11], t.push(C), F = 0; F < X(d); ++F) {
          e(Y(d, F), C, u, G);
        }
    }
  }
  function f(d) {
    var t = d.indexOf(w), u = Pa(Oa(-1 === t ? d : d.substr(0, t), " "), " ");
    d = -1 === t ? [] : JSON.parse("[" + d.substring(t + w.length, d.lastIndexOf(l) - 2) + "]");
    return d.length ? {name:u, fa:d} : {name:u};
  }
  function k(d, t, u, G) {
    t = d.indexOf(t) + t.length;
    u = G ? d.lastIndexOf(u) : d.indexOf(u, t);
    return d.substring(t, u);
  }
  function v(d) {
    for (var t = 0, u = X(d), G; t < u; ++t) {
      if (G = Y(d, t), Va(G) && (G = v(G)), G && 3 === G.$) {
        return G;
      }
    }
  }
  function n(d) {
    for (var t = X(d), u; t;) {
      if (u = Y(d, --t), Va(u) && (u = n(u)), u && 3 === u.$) {
        return u;
      }
    }
  }
  function r(d) {
    return d.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const A = [], B = A.push;
  a = Xa(a, b);
  c = c || {};
  const g = -1 === ["none", !1].indexOf(c.trimWhitespaces), z = "aggressive" === c.trimWhitespaces, h = !!c.removeNewlineBetweenFullWidthChars, D = !0 === c.keepCDATASections, p = !0 === c.keepComments, m = !0 === c.keepEmptyConditionalComment, q = c.instructionAttrPrefix || ":";
  c = c.argumentBrackets || "()";
  const w = c.substr(0, c.length / 2), l = c.substr(c.length);
  let E = !1;
  e(a, A, !1, !1);
  Na(A[0]);
  return A[0];
}
;J.ea = {};
J.ba = {};
J.ea.ha = !0;
J.ba.ia = function(a) {
  a = a[0];
  if (J.ea.ha && !Q(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
J.ba.ga = function(a) {
  a = J.ba.ia(a)[0];
  return !Q(a) && R(a) ? a : null;
};
J.ba.sa = function(a) {
  return $a(a, function(b, c) {
    return "script" === b && c && "application/json" === c.type || !1;
  });
};
J.ba.na = function(a) {
  return $a(a, function(b) {
    return "slot" === b;
  });
};
function $a(a, b) {
  function c(k) {
    let v = Ma(k), n = k.length;
    for (var r; v < n; ++v) {
      var A = k[v], B;
      if (B = !U(A)) {
        if (B = Q(A)) {
          a: {
            r = A;
            A = k;
            B = v;
            var g = r[0];
            const z = r[1];
            let h = g, D = 1;
            switch(g) {
              case 9:
              case 11:
              case 13:
              case 16:
                r = c(r);
                break a;
              case 1:
              case 17:
                h = z, D = 2;
              default:
                if (S(h)) {
                  g = r[D];
                  r = b(h, Ha(g) ? g : null) ? [r, A, B] : c(r);
                  break a;
                }
            }
            r = void 0;
          }
          B = r;
        }
      }
      if (B) {
        return r;
      }
    }
  }
  let e = a[0], f;
  return !Q(e) && R(e) ? (a.shift(), f = c(a), a.unshift(e), f && f[1] === a ? [f[0], a, ++f[2]] : f) : c(a);
}
;J.html2json = !0;
I = function(a, b, c) {
  a = Za(a, b, c);
  if (b = J.ba.sa(a)) {
    c = b[0], b[1].splice(b[2], 1), c && 3 === c.length && (b = eval("(" + c[2] + ");"), !Q(b) && R(b) && a.unshift(b));
  }
  return a;
};
function ia(a) {
  const b = this, c = require("plugin-error"), e = require("vinyl"), f = {}, k = {}, v = {};
  return require("through2").obj(function(n, r, A) {
    var B = ba(n.path);
    if (n.isNull()) {
      return A();
    }
    if (n.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), A();
    }
    if (0 !== B.indexOf(b.oa)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + B + '" is outside of srcRootPath:"' + b.oa + '"')), A();
    }
    const g = n.contents.toString(r);
    r = parseInt(n.stat.birthtimeMs, 10);
    const z = parseInt(n.stat.ctimeMs, 10);
    var h = b.path;
    if (!h.$) {
      throw "absoluteDirectoryPathOfRoot is empty!";
    }
    if (!ca(h, B)) {
      throw B + " is not a absolute path!";
    }
    B = ba(B).substr(h.$.length - 1);
    switch(n.extname) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        n = I.call(b, g, !1, a);
        f[B] = [n, r, z];
        break;
      case ".json":
        n = JSON.parse(g);
        R(n) && (v[B] = [n, r, z]);
        break;
      default:
        this.push(n);
    }
    A();
  }, function(n) {
    function r(p, m, q, w) {
      if (m) {
        for (let E = 0, d = m.length; E < d; ++E) {
          const t = y(b.path, p, m[E]);
          var l = v[t];
          m[E] = t;
          if (l && 3 === l.length) {
            l.push(!0), l = l[0], w ? l.MIXINS && (console.log('Mixin:"' + t + '" cannot have MIXINS property!'), delete l.MIXINS) : r(t, l.MIXINS, q, !0), q || A(t, l.TEMPLETE, l);
          } else if (!l) {
            throw 'Mixin:"' + t + '" required by "' + p + '" does not exist!';
          }
        }
      }
    }
    function A(p, m, q) {
      for (; m;) {
        m = y(b.path, p, m);
        const w = f[m];
        if (w) {
          if (delete f[m], k[m] = w, q.TEMPLETE = p = m, q = J.ba.ga(w)) {
            r(p, q.MIXINS, !!q.TEMPLETE, !1), m = q.TEMPLETE;
          } else {
            break;
          }
        } else if (k[m]) {
          break;
        } else {
          throw 'Templete:"' + m + '" required by "' + p + '" does not exist!';
        }
      }
    }
    function B(p, m) {
      const q = p.split("/");
      q.pop();
      p = new e({base:q.join("/") || "/", path:p, contents:Buffer.from(JSON.stringify(m))});
      p.extname = ".json";
      D.push(p);
    }
    for (var g in f) {
      var z = f[g];
      let p = J.ba.ga(z);
      p && (r(g, p.MIXINS, !!p.TEMPLETE, !1), A(g, p.TEMPLETE, p), f[g] && z.push(!0));
    }
    for (const p in v) {
      3 === v[p].length && (J.ea.ha && console.log("Unused mixin found! " + p), delete v[p]);
    }
    for (var h in f) {
      g = f[h], z = J.ba.ia(g), 3 === g.length && J.ba.na(z) && (J.ea.ha && console.log("Unused templete found! " + h), delete f[h]);
    }
    const D = this;
    b.ka && B(b.ka, f);
    B(b.pa, v);
    B(b.qa, k);
    for (const p in f) {
      h = f[p], delete f[p], g = h[0], z = g[0], z = !Q(z) && R(z) ? z : {}, z.FILE_PATH = p, z.CREATED_AT = h[1], z.MODIFIED_AT = h[2], z !== g[0] && g.unshift(z), B(p + ".json", g);
    }
    n();
  });
}
;J.generator = !0;
fa = function(a, b, c) {
  function e(B) {
    if (B) {
      for (let g = 0; g < B.length; ++g) {
        const z = c[B[g]];
        f(z[0], z[2]);
      }
    }
  }
  function f(B, g) {
    let z = 0;
    for (const h in B) {
      "TEMPLETE" === h ? (n = n || B[h], n === B[h] && ++z) : void 0 === k[h] && (k[h] = B[h], ++z);
    }
    z && v < g && (v = g);
  }
  const k = !Q(a[0]) && R(a[0]) ? a[0] : null;
  if (!k) {
    return a;
  }
  let v = k.MODIFIED_AT, n = k.TEMPLETE;
  for (e(k.MIXINS); n;) {
    var r = b[n], A = J.ba.ga(r);
    n = "";
    A && (f(A, r[2]), e(A.MIXINS));
  }
  for (n = k.TEMPLETE; n;) {
    r = b[n], A = J.ba.ga(r), a = ab(J.ba.ia(r), a), A ? n = A.TEMPLETE : n = "";
  }
  delete k.TEMPLETE;
  delete k.MIXINS;
  k.UPDATED_AT = v;
  return a;
};
function ab(a, b) {
  a = JSON.parse(JSON.stringify(a));
  var c = J.ba.na(a);
  if (c) {
    const e = c[1];
    c = c[2];
    let f;
    Ha(b[0]) && (f = b.shift());
    let k = Ma(b), v = b.length;
    e.splice(c, 1);
    for (c -= k; k < v; ++k) {
      e.splice(c + k, 0, b[k]);
    }
    f && a.unshift(f);
  }
  return a;
}
function ja() {
  const a = this, b = require("plugin-error"), c = require("vinyl"), e = {};
  let f, k;
  return require("through2").obj(function(v, n, r) {
    if (v.isNull()) {
      return r();
    }
    if (v.isStream()) {
      return this.emit("error", new b("NicePageBuilder.generator.gulp", "Streaming not supported")), r();
    }
    if (".json" !== v.extname) {
      return this.push(v), r();
    }
    n = JSON.parse(v.contents.toString(n));
    switch(v.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        return e[n[0].FILE_PATH] = n, r();
      case "templetes":
        !Q(n) && R(n) && (f = n);
        break;
      case "mixins":
        !Q(n) && R(n) && (k = n);
    }
    this.push(v);
    r();
  }, function(v) {
    for (const n in e) {
      const r = fa.call(a, e[n], f, k);
      delete e[n];
      this.push(new c({base:"/", path:n + ".json", contents:Buffer.from(JSON.stringify(r))}));
    }
    v();
  });
}
;function bb(a, b, c, e) {
  function f(h, D, p, m, q) {
    function w() {
      var x = "";
      g && (x = "</" + g + ">", g = "");
      return x;
    }
    var l = "", E = h[0], d = h[1], t = 1, u = E, G;
    switch(E) {
      case 9:
        l = "<!DOCTYPE " + d + ">" + k(h, m, q);
        break;
      case 11:
        l = k(h, m, q);
        break;
      case 3:
        l = w() + (q ? d : Ka("" + d));
        break;
      case 4:
        S(d) || n("CDATA_SECTION Error! [" + h + "]");
        l = "<![CDATA[" + d + "]]\x3e";
        break;
      case 8:
        S(d) || n("COMMENT_NODE Error! [" + h + "]");
        l = "\x3c!--" + d + "--\x3e";
        break;
      case 13:
        S(d) || n("COND_CMT_HIDE_LOWER Error! [" + h + "]");
        l = w() + "\x3c!--[" + d + "]>" + k(h, !0, q) + "<![endif]--\x3e";
        break;
      case 16:
        S(d) || n("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + h + "]");
        l = w() + "\x3c!--{" + d + "};" + k(h, !0, q) + "--\x3e";
        break;
      case 14:
        S(d) || n("COND_CMT_SHOW_LOWER_START Error! [" + h + "]");
        l = "\x3c!--[" + d + "]>\x3c!--\x3e";
        break;
      case 15:
        l = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        m = Ia(b, h, D, p, n);
        if (void 0 !== m && null !== m && "" !== m) {
          if (U(m) || Q(m)) {
            return -1;
          }
          n("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(h) + "] result:" + JSON.stringify(m));
        }
        break;
      case 18:
        S(d) || n("ELEMENT_END_TAG Error! [" + h + "]");
        l = "</" + d + ">";
        break;
      case 17:
        var H = !0;
      case 1:
        u = h[1], t = 2;
      default:
        S(u) || n("Not html.json! [" + h + "]"), u = Qa(u), D = u[1], p = u[2], u = u[0], "p" !== g || Da[u] ? g = "" : l = w(), l += "<" + u, D && (l += " id=" + La(D, A, r)), p && (l += " class=" + La(p, A, r)), z || (G = z = z || Ca[u] ? !0 : !1), t = h[t], Ha(t) && (l += " " + v(t)), l = (h = k(h, m || Ba[u], q || Ea[u])) ? l + (">" + h) : H ? l + ">" : l + (z ? "/>" : ">"), H ? g = "" : z && !h || Aa[u] && !m ? g = za[u] ? "" : u : (l += "</" + u + ">", g = ""), G && (z = !1);
    }
    return l;
  }
  function k(h, D, p) {
    for (var m = "", q = Ma(h), w; q < h.length; ++q) {
      w = h[q], U(w) ? m += f([3, w], null, 0, D, p) : Q(w) ? (w = f(w, h, q, D, p), -1 === w ? --q : m += w) : n("Invalid html.json! [" + w + "]");
    }
    return m;
  }
  function v(h) {
    var D = "", p, m;
    for (p in h) {
      var q = h[p];
      (m = 0 === p.indexOf(B)) && (p = p.substr(B.length));
      "className" === p && (p = "class");
      m && (q = Ja(b, p, q, n));
      if (!(null == q || ya[p] && !1 === q || (D += " " + p, ya[p]))) {
        if ("style" === p && R(q)) {
          m = void 0;
          var w = q, l = "";
          for (m in w) {
            q = w[m];
            "0px" === q && (q = 0);
            for (var E, d = [], t = m.split(""), u = t.length; u;) {
              E = t[--u], "A" <= E && "Z" >= E && (E = "-" + E.toLowerCase()), d[u] = E;
            }
            E = d.join("");
            l += ";" + E + ":" + Ka("" + q);
          }
          q = l.substr(1);
          if (!q) {
            continue;
          }
        }
        D += "=" + La(q, A, r);
      }
    }
    return D.substr(1);
  }
  var n = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : e || {};
  var r = !0 === c.quotAlways, A = !0 === c.useSingleQuot, B = c.instructionAttrPrefix || ":", g, z = !1;
  if (Q(a)) {
    return 7 === Ga(a) && (a = [11, a]), f(a, null, 0, !1, !1);
  }
  n("Invalid html.json document!");
}
;J.json2html = !0;
ha = function(a, b, c, e) {
  a.shift();
  return bb(a, b, c, e) || "";
};
function ka(a, b, c) {
  const e = this, f = require("plugin-error"), k = require("vinyl");
  return require("through2").obj(function(v, n, r) {
    if (v.isNull()) {
      return r();
    }
    if (v.isStream()) {
      return this.emit("error", new f("NicePageBuilder.json2html.gulp", "Streaming not supported")), r();
    }
    if (".json" !== v.extname) {
      return this.push(v), r();
    }
    switch(v.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        v = JSON.parse(v.contents.toString(n));
        this.push(new k({base:"/", path:v[0].FILE_PATH, contents:Buffer.from(ha.call(e, v, a, b, c))}));
        break;
      default:
        this.push(v);
    }
    r();
  });
}
;J.all = {};

