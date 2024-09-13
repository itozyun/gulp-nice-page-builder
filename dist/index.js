var e = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
e.LI = e.TD = e.DD;
e.TH = e.DT;
e.RB = e.RP = e.RT = e.P;
e.TFOOT = e.THEAD = e.TBODY;
e.RTC = e.RBC;
function aa(a, b) {
  var c = 0;
  function g() {
    c && (ba(b, l(a.substring(0, c))), a = a.substring(c), c = 0);
  }
  function l(h) {
    return h.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function f(h, D, y) {
    for (var p = 1, t = y.length, r = 3, n, z; r < t && 3 !== p;) {
      z = y.charAt(r);
      switch(p) {
        case 1:
          J[z] & 4 ? p = 2 : ">" === z && (p = 3);
          1 !== p && (n = y.substring(2, r));
          break;
        case 2:
          ">" === z && (p = 3);
      }
      ++r;
    }
    return 3 === p ? (x(h, D, E ? n : n.toUpperCase(), !1), r) : 0;
  }
  function x(h, D, y, p) {
    var t = 0, r = h.length;
    if (y) {
      for (t = r; 0 <= t && h[--t] !== y;) {
      }
    }
    if (0 <= t) {
      for (; t < r;) {
        ca(D, h[--r], p && !e[h[r]], !1), E && da[h[r]] && (E = !!D.ga);
      }
      h.length = t;
    } else {
      ca(D, y, !1, !0);
    }
  }
  function u(h, D, y, p) {
    function t(C, H) {
      w[C] = !0 === H ? !0 : ea[C.toLowerCase()] ? E ? l(H || C) : !0 : l(H || "");
      ++k;
    }
    function r() {
      (v = "/>" === p.substr(d, 2)) && ++d;
      return v;
    }
    for (var n = 1, z = p.length, d = 2, w = {}, k = 0, v = !1, F, q, I, M, L, N; d < z && 9 > n;) {
      F = p.charAt(d);
      switch(n) {
        case 1:
          if (J[F] & 4) {
            n = 2, q = p.substring(1, d);
          } else if (">" === F || r()) {
            n = 9, q = p.substring(1, d);
          }
          break;
        case 2:
          ">" === F || r() ? n = 9 : J[F] & 4 || (n = 3, I = d);
          break;
        case 3:
          if ("=" === F) {
            n = 5, M = p.substring(I, d);
          } else if (J[F] & 4) {
            n = 4, M = p.substring(I, d);
          } else if (">" === F || r()) {
            n = 9, t(p.substring(I, d), !0);
          }
          break;
        case 4:
          "=" === F ? n = 5 : ">" === F || r() ? (n = 9, t(M, !0)) : J[F] & 4 || (n = 3, t(M, !0), I = d);
          break;
        case 5:
          '"' === F || "'" === F ? (n = 6, L = F, I = d + 1) : J[F] & 4 || (n = 7, I = d);
          N = !1;
          break;
        case 6:
          N || F !== L || (n = 2, t(M, p.substring(I, d)));
          N = "\\" === F && !N;
          break;
        case 7:
          J[F] & 4 ? n = 2 : ">" === F ? n = 9 : !fa[M] && r() && (n = 9), 7 !== n && t(M, p.substring(I, d));
      }
      ++d;
    }
    if (9 === n) {
      n = q.toUpperCase();
      E ||= !!da[q];
      if (!E) {
        for (; D;) {
          if (e[D] && !e[D][n]) {
            x(h, y, D, !1), D = h[h.length - 1];
          } else {
            break;
          }
        }
      }
      (v = v || !!ha[n]) || (h[h.length] = E ? q : n);
      ia(y, E ? q : n, k ? w : null, v);
      return d;
    }
    return 0;
  }
  for (var A = [], E = !!b.ga, B = a.length - c, m, G; a;) {
    (m = G = A[A.length - 1]) && E && (G = m.toUpperCase());
    if (ja[G]) {
      if ("PLAINTEXT" === G) {
        ba(b, l(a)), a = "";
      } else {
        if (m = a.toUpperCase().indexOf("</" + G), 0 <= m) {
          if (c = m, g(), m = f(A, b, a)) {
            a = a.substring(m);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (g(), m = a.indexOf(">"), -1 !== m) {
        ka(b, a.substring(10, m)), a = a.substring(m + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === c) {
      if (g(), m = a.indexOf("?>"), -1 !== m) {
        la(b, l(a.substring(2, m))), a = a.substring(m + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (g(), m = a.indexOf("]]\x3e"), -1 !== m) {
        ma(b, l(a.substring(9, m))), a = a.substring(m + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (g(), m = a.indexOf("--\x3e"), -1 !== m) {
        na(b, l(a.substring(4, m))), a = a.substring(m + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === c && J[a.charAt(c + 2)] & 3) {
      if (g(), m = f(A, b, a)) {
        a = a.substring(m);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(c) && J[a.charAt(c + 1)] & 3) {
      if (g(), m = u(A, m, b, a)) {
        a = a.substring(m);
      } else {
        throw a;
      }
    } else {
      m = a.indexOf("<", c), -1 === m ? (ba(b, l(a)), a = "") : c < m ? c = m : ++c;
    }
    m = a.length - c;
    if (m === B) {
      throw a;
    }
    B = m;
  }
  g();
  x(A, b, "", !0);
}
var da = {xml:!0, svg:!0, math:!0}, ha = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, Ba:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ja = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, fa = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, ea = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, J = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var oa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, pa = {link:!0, qb:!0, Ia:!0, wa:!0, hb:!0, input:!0, Ca:!0, base:!0, Ka:!0, Sa:!0, kb:!0, wb:!0, track:!0, Qb:!0, Ma:!0, Fa:!0, frame:!0, jb:!0, Ga:!0}, qa = {fb:!0, head:!0, body:!0, p:!0, Ra:!0, Na:!0, mb:!0, vb:!0, Ib:!0, Nb:!0, Lb:!0, Jb:!0, Mb:!0, Ob:!0, zb:!0, Ab:!0, Eb:!0, Fb:!0, Gb:!0, ub:!0, caption:!0, La:!0}, ra = {a:!0, audio:!0, 
Oa:!0, ib:!0, map:!0, ya:!0, video:!0}, sa = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, ta = {address:!0, Da:!0, Ea:!0, Ha:!0, canvas:!0, details:!0, Pa:!0, Qa:!0, Ta:!0, Ua:!0, Va:!0, Wa:!0, form:!0, Xa:!0, Ya:!0, Za:!0, $a:!0, ab:!0, bb:!0, cb:!0, eb:!0, wa:!0, lb:!0, nb:!0, pb:!0, rb:!0, ya:!0, tb:!0, p:!0, yb:!0, Hb:!0, Pb:!0, Ja:!0, dir:!0, sb:!0, ob:!0}, ua = {Aa:!0, style:!0, xb:!0, Rb:!0}, va = {Aa:!0, style:!0, Kb:!0};
function K(a) {
  return !(!a || a.pop !== [].pop);
}
function O(a) {
  return !(!a || "object" !== typeof a);
}
function P(a) {
  return "" + a === a;
}
function Q(a) {
  return P(a) || a === +a;
}
function R(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0 ? +a : a;
}
function wa(a) {
  if (Q(a)) {
    a = 3;
  } else {
    if (K(a)) {
      if (P(a[0])) {
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
function S(a) {
  return !K(a) && O(a);
}
function xa(a, b, c, g, l) {
  var f = b[1], x = b.slice(2);
  a = x.length ? a(f, x) : a(f);
  void 0 !== a && null !== a && "" !== a && (Q(a) ? c ? c.splice(g, 1, a) : (b.length = 0, b.push(3, b)) : K(a) ? 11 === a[0] ? c ? (a.shift(), a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : K(a[0]) ? c ? (a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(g, 1, a) : (b.length = 0, b.push(11, a)) : l("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return a;
}
function ya(a, b, c, g) {
  if (K(c) && P(c[0])) {
    var l = c[0];
    c = c.slice(1);
    l = c.length ? a(l, c) : a(l);
  } else {
    P(c) ? l = a(c) : g("Invalid InstructionAttr value! [" + b + "=" + c + "]");
  }
  return K(l) ? ya(a, b, l, g) : l;
}
function za(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function Aa(a, b, c) {
  a = za("" + a);
  var g = a.match('"'), l = a.match("'"), f = b ? "'" : '"';
  if (g && l) {
    a = b ? f + a.split("'").join("\\'") + f : f + a.split('"').join('\\"') + f;
  } else if (g) {
    a = "'" + a + "'";
  } else if (l) {
    a = b ? f + a.split("'").join("\\'") + f : f + a + f;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = f + a + f;
  }
  return a;
}
function Ba(a) {
  var b = a[0], c = b === +b ? 2 : 1;
  return 1 === wa(a) || 17 === b ? S(a[c]) ? c + 1 : c : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
function Ca(a) {
  var b = Ba(a), c = "", g;
  if (b < a.length) {
    for (g = b; g < a.length;) {
      b = a[g];
      var l = wa(b);
      3 === l ? (c = Q(b) ? c + b : c + b[1], a.splice(g, 1)) : (c && (a.splice(g, 0, R(c)), c = ""), ++g, 1 !== l && 17 !== l && 13 !== l && 16 !== l || Ca(b));
    }
    c && (a[g] = R(c));
  }
}
function Da(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function U(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function Ea(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), g = "", l = "";
  b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (l = a.split("#")[1], a = a.split("#")[0])) : c < b && (l = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
  return [a, l, g];
}
;function Fa(a) {
  return 1 === a.aa || 17 === a.aa || 13 === a.aa || 16 === a.aa || Ga(a);
}
function Ga(a) {
  return 9 === a.aa || 11 === a.aa;
}
function Ha(a, b, c, g, l) {
  if (a === !!a) {
    var f = null;
    this.ba = a;
  } else {
    f = a, this.ba = f.ba;
  }
  if (f) {
    switch(f.aa) {
      case 3:
      case 8:
      case 4:
      case 7:
      case 15:
      case 18:
        throw "nodeType:" + f.aa + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (Ga(this)) {
      throw "nodeType:" + f.aa + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this.ga = f;
  this.aa = c;
  if (f) {
    if (f.ea || (f.ea = []), a = f.ea, 0 <= b && b < a.length) {
      if (1 <= b && 17 === a[b - 1].aa) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.splice(b, 0, this);
    } else {
      if (a.length && 17 === a[a.length - 1].aa) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.push(this);
    }
  }
  switch(c) {
    case 1:
    case 17:
      this.pa = l || null;
    case 18:
      this.va = g;
      break;
    case 7:
    case 3:
    case 4:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      this.qa = g;
  }
}
function V(a) {
  switch(a.aa) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      return a.qa;
    default:
      throw "getNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Ia(a, b) {
  if (a.ba && null !== a) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setNodeValue() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  switch(a.aa) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.qa = b;
      break;
    default:
      throw "setNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Ja(a) {
  return 1 === a.aa || 17 === a.aa;
}
function Ka(a) {
  if (!Ja(a) && 18 !== a.aa) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.va;
}
function W(a) {
  if (!Fa(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.ba) {
    throw "restricted mode \u3067\u306f getChildNodeLength() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ea && a.ea.length;
}
function X(a, b) {
  if (!Fa(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.ba) {
    throw "restricted mode \u3067\u306f getChildNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ea && a.ea[b] || null;
}
Ha.prototype.remove = function() {
  if (Ga(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.ba && null !== this) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e discard() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (Ga(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.ba) {
    throw "restricted mode \u3067\u306f getMyIndex() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = this.ga ? this.ga.ea.indexOf(this) : -1;
  0 <= a && (this.ga.ea.splice(a, 1), this.ga = null);
};
function Y(a, b, c, g) {
  if (a.ba && (null !== a || !Fa(a))) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (a.ba) {
    a = null;
  } else {
    var l = W(a);
    if (a.ba) {
      throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    a = new Ha(a, l, b, c, g);
  }
  return a;
}
;function La(a, b) {
  b = new Ma(b);
  aa(a, b);
  return b.ba;
}
function Ma(a) {
  this.ea = a;
  this.aa = this.ba = new Ha(!1, 0, 11);
}
function ka(a, b) {
  var c = a.ba;
  if (c.ba) {
    throw "restricted mode \u3067\u306f setNodeType() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (11 !== c.aa) {
    throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
  }
  c.aa = 9;
  Ia(a.ba, b);
}
function ia(a, b, c, g) {
  if (g) {
    a = a.aa;
    if (a.ba && (null !== a || !Fa(a))) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (!a.ba) {
      g = W(a);
      if (a.ba) {
        throw "restricted mode \u3067\u306f insertElementAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      new Ha(a, g, 1, b, c);
    }
  } else {
    a.aa = Y(a.aa, 17, b, c);
  }
}
function ca(a, b, c, g) {
  if (g) {
    a.ea && Y(a.aa, 18, b);
  } else if (!c || !a.ea) {
    if (b === Ka(a.aa)) {
      b = a.aa;
      if (b.ba) {
        throw "restricted mode \u3067\u306f finalize() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      if (17 !== b.aa) {
        throw "close() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      b.aa = 1;
      b = a.aa;
      if (Ga(b)) {
        throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      if (b.ba && null !== b) {
        throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e getParent() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      a.aa = b.ga;
    } else {
      throw "End tag error! " + b;
    }
  }
}
function ba(a, b) {
  Y(a.aa, 3, b);
}
function na(a, b) {
  Y(a.aa, 8, b);
}
function ma(a, b) {
  Y(a.aa, 4, b);
}
function la(a, b) {
  Y(a.aa, 7, b);
}
;function Na(a, b, c) {
  function g(d, w, k, v) {
    switch(d.aa) {
      case 1:
      case 17:
        var F = {};
        var q = Ka(d).toLowerCase();
        v = "pre" === q;
        if (!Ja(d)) {
          throw "getAttrs() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var I = S(d.pa) ? d.pa : null;
        var M = 0, L;
        if (I) {
          for (L in I) {
            var N = oa[L] ? 1 : I[L];
            if ("id" === L) {
              var C = N;
            } else if ("class" === L) {
              var H = N;
            } else {
              if (L.startsWith(t)) {
                var T = l(N);
                T.ia ? (N = [T.name], B.apply(N, T.ia)) : N = T.name;
              }
              F[L] = R(N);
              ++M;
            }
          }
        }
        C && (q += "#" + C);
        H && (q += "." + H);
        if (v && m) {
          for (; C = x(d);) {
            if (A(V(C))) {
              Ia(C, Da(V(C), "\n"));
              break;
            } else {
              C.remove();
            }
          }
          for (; C = u(d);) {
            if (A(V(C))) {
              Ia(C, U(V(C), "\n"));
              break;
            } else {
              C.remove();
            }
          }
        }
        C = M ? [q, F] : [q];
        for (H = 0; H < W(d); ++H) {
          g(X(d, H), C, v || k, !!va[q]);
        }
        w.push(C);
        17 !== d.aa || C.unshift(17);
        break;
      case 18:
        w.push([18, Ka(d).toLowerCase()]);
        break;
      case 3:
        d = "" + V(d);
        if (!k && m) {
          if (v) {
            d = U(Da(d, "\n"), "\n");
          } else {
            d = d.split("\r\n").join("\n");
            h && (d = d.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (d = d.split("\t").join(" "); 0 <= d.indexOf("\n\n");) {
              d = d.split("\n\n").join("\n");
            }
            G && (q = "\n" === d.charAt(0) && /\n[ ]*$/.test(d));
            d = U(d, "\n");
            for (d = d.split("\n").join(" "); 0 <= d.indexOf("  ");) {
              d = d.split("  ").join(" ");
            }
            q && (d = U(Da(d, " "), " "));
            d = d.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        (q = R(d)) && w.push(q);
        break;
      case 4:
        q = V(d);
        D && w.push([4, R(q)]);
        break;
      case 7:
        q = V(d);
        T = l(q);
        C = [7, T.name];
        T.ia && B.apply(C, T.ia);
        w.push(C);
        break;
      case 8:
        q = V(d);
        if (q.startsWith("[if") && 0 < q.indexOf("<![endif]")) {
          d = La(f(q, ">", "<![endif]", !0), !0);
          C = [13, f(q, "[", "]", !1)];
          for (H = 0; H < W(d); ++H) {
            g(X(d, H), C, k, v);
          }
          (2 < C.length || p) && w.push(C);
        } else if (q.startsWith("{") && 2 < q.indexOf("};")) {
          d = La(q.substring(q.indexOf("};") + 2), !0);
          C = [16, f(q, "{", "};", !1)];
          for (H = 0; H < W(d); ++H) {
            g(X(d, H), C, k, v);
          }
          (2 < C.length || p) && w.push(C);
        } else {
          q.startsWith("[if") && 0 < q.indexOf("><!") ? (w.push([14, f(q, "[", "]", !1)]), z = !0) : "<![endif]" === q && z ? (k = w[w.length - 1], p || !k || 14 !== k[0] ? w.push([15]) : k && w.pop(), z = !1) : y && w.push([8, R(q)]);
        }
        break;
      case 9:
        q = V(d);
        m && (q = q.split("\n").join(" ").split("  ").join(" "));
        C = [9, q];
        w.push(C);
        for (H = 0; H < W(d); ++H) {
          g(X(d, H), C, !1, !1);
        }
        break;
      case 11:
        for (C = [11], w.push(C), H = 0; H < W(d); ++H) {
          g(X(d, H), C, k, v);
        }
    }
  }
  function l(d) {
    var w = d.indexOf(r), k = U(Da(-1 === w ? d : d.substr(0, w), " "), " ");
    d = -1 === w ? [] : JSON.parse("[" + d.substring(w + r.length, d.lastIndexOf(n) - 2) + "]");
    return d.length ? {name:k, ia:d} : {name:k};
  }
  function f(d, w, k, v) {
    w = d.indexOf(w) + w.length;
    k = v ? d.lastIndexOf(k) : d.indexOf(k, w);
    return d.substring(w, k);
  }
  function x(d) {
    for (var w = 0, k = W(d), v; w < k; ++w) {
      if (v = X(d, w), Ja(v) && (v = x(v)), v && 3 === v.aa) {
        return v;
      }
    }
  }
  function u(d) {
    for (var w = W(d), k; w;) {
      if (k = X(d, --w), Ja(k) && (k = u(k)), k && 3 === k.aa) {
        return k;
      }
    }
  }
  function A(d) {
    return d.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const E = [], B = E.push;
  a = La(a, b);
  c = c || {};
  const m = -1 === ["none", !1].indexOf(c.trimWhitespaces), G = "aggressive" === c.trimWhitespaces, h = !!c.removeNewlineBetweenFullWidthChars, D = !0 === c.keepCDATASections, y = !0 === c.keepComments, p = !0 === c.keepEmptyConditionalComment, t = c.instructionAttrPrefix || ":";
  c = c.argumentBrackets || "()";
  const r = c.substr(0, c.length / 2), n = c.substr(c.length);
  let z = !1;
  g(a, E, !1, !1);
  Ca(E[0]);
  return E[0];
}
;var Z = {};
Z.module = {};
module.exports = Z;
Z.DOCUMENT_NODE = 9;
Z.DOCUMENT_FRAGMENT_NODE = 11;
Z.ELEMENT_NODE = 1;
Z.TEXT_NODE = 3;
Z.CDATA_SECTION = 4;
Z.PROCESSING_INSTRUCTION = 7;
Z.COMMENT_NODE = 8;
Z.COND_CMT_HIDE_LOWER = 13;
Z.COND_CMT_SHOW_LOWER_START = 14;
Z.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
Z.ELEMENT_START_TAG = 17;
Z.ELEMENT_END_TAG = 18;
Z.ca = {};
Z.$ = {};
Z.ca.da = !0;
Z.ha = "";
Z.$.oa = function(a) {
  return a.split("\\").join("/");
};
Z.$.na = function(a) {
  return 0 === a.indexOf(Z.ha);
};
Z.$.sa = function(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
};
Z.$.ra = function(a) {
  return Z.$.na(a) || Z.$.sa(a);
};
Z.$.fa = function(a) {
  return "/" === a.charAt(0) && "//" !== a.substr(0, 2);
};
Z.$.xa = function(a) {
  return !Z.$.na(a) && !Z.$.fa(a);
};
Z.$.ua = function(a) {
  if (Z.ca.da && !Z.$.na(a)) {
    throw a + " is not a absolute path!";
  }
  return Z.$.oa(a).substr(Z.ha.length - 1);
};
Z.$.Cb = function(a) {
  if (Z.ca.da && !Z.$.fa(a)) {
    throw a + " is not a root relative path!";
  }
  return Z.ha + a.substr(1);
};
Z.$.la = function(a) {
  a = a.split("index.html");
  a[a.length - 1] || a.pop();
  return a.join("index.html");
};
Z.$.ka = function(a) {
  if (Z.ca.da && Z.$.sa(a)) {
    throw a + " is not a root relative path or relative path!";
  }
  a = a.split("#")[0].split("/");
  a[a.length - 1] || (a[a.length - 1] = "index.html");
  return a.join("/");
};
Z.$.gb = function(a) {
  if (Z.ca.da && !Z.$.fa(a)) {
    throw a + " is not a root relative path!";
  }
  a = a.split(".json");
  a[a.length - 1] || a.pop();
  return a.join(".json");
};
Z.$.za = function(a, b) {
  if (Z.ca.da) {
    if (!Z.$.fa(a)) {
      throw a + " is not a root relative path!";
    }
    if (Z.$.fa(b) || Z.$.ra(b)) {
      throw b + " is not a relative path!";
    }
  }
  a = a.split("/");
  a.pop();
  "" === a[0] && a.shift();
  for ("./" === b.substr(0, 2) && (b = b.substr(2)); "../" === b.substr(0, 3);) {
    b = b.substr(3), --a.length;
  }
  return a.join("/") + "/" + b;
};
Z.$.Bb = function(a, b) {
  if (Z.ca.da) {
    if (!Z.$.fa(a)) {
      throw a + " is not a root relative path!";
    }
    if (Z.$.fa(b) || Z.$.ra(b)) {
      throw b + " is not a relative path!";
    }
  }
  var c = b.substr(b.indexOf("#"));
  a = Z.$.la(Z.$.ta(Z.$.ka(a), Z.$.ka(b)));
  c && (a += c);
  return a;
};
Z.$.ta = function(a, b) {
  if (Z.ca.da) {
    if (!Z.$.fa(a)) {
      throw a + " is not a root relative path!";
    }
    if (!Z.$.fa(b)) {
      throw b + " is not a root relative path!";
    }
  }
  var c = [], g = 0, l = !1, f;
  var x = a.split("/");
  var u = x.pop();
  if (a === b) {
    return u;
  }
  a = b.split("/");
  b = a.pop();
  var A = x.length;
  for (f = Math.max(a.length, A); g < f; ++g) {
    if (l || a[g] !== x[g]) {
      g < A && c.unshift(".."), a[g] && c.push(a[g]), l = !0;
    }
  }
  (l || u !== b) && c.push(b);
  return c.join("/");
};
Z.$.Db = function(a, b) {
  if (Z.ca.da) {
    if (!Z.$.fa(a)) {
      throw a + " is not a root relative path!";
    }
    if (!Z.$.fa(b)) {
      throw b + " is not a root relative path!";
    }
  }
  var c = b.substr(b.indexOf("#"));
  a = Z.$.la(Z.$.ta(Z.$.ka(a), Z.$.ka(b)));
  c && (a += c);
  return a ? a : "./";
};
Z.$.ma = function(a) {
  a = a[0];
  if (Z.ca.da && !K(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
Z.$.ja = function(a) {
  a = Z.$.ma(a)[0];
  return !K(a) && O(a) ? a : null;
};
function Oa(a, b) {
  function c(f) {
    let x = Ba(f), u = f.length;
    for (var A; x < u; ++x) {
      var E = f[x], B;
      if (B = !Q(E)) {
        if (B = K(E)) {
          a: {
            A = E;
            E = f;
            B = x;
            var m = A[0];
            const G = A[1];
            let h = m, D = 1;
            switch(m) {
              case 9:
              case 11:
              case 13:
              case 16:
                A = c(A);
                break a;
              case 1:
              case 17:
                h = G, D = 2;
              default:
                if (P(h)) {
                  m = A[D];
                  A = b(h, S(m) ? m : null) ? [A, E, B] : c(A);
                  break a;
                }
            }
            A = void 0;
          }
          B = A;
        }
      }
      if (B) {
        return A;
      }
    }
  }
  let g, l;
  return S(a[0]) ? (g = a.shift(), l = c(a), a.unshift(g), l && l[1] === a ? [l[0], a, ++l[2]] : l) : c(a);
}
;function Pa(a) {
  return Oa(a, function(b, c) {
    return "script" === b && c && "application/json" === c.type || !1;
  });
}
;function Qa(a) {
  return Oa(a, function(b) {
    return "slot" === b;
  });
}
;Z.html2json = function(a, b, c) {
  a = Na(a, b, c);
  if (b = Pa(a)) {
    c = b[0], b[1].splice(b[2], 1), c && 3 === c.length && (b = eval("(" + c[2] + ");"), !K(b) && O(b) && a.unshift(b));
  }
  return a;
};
Z.html2json.gulp = function(a) {
  const b = require("plugin-error"), c = require("vinyl"), g = require("through2"), l = require("path"), f = a || {}, x = f.allPagesPath, u = f.allMixinsPath || "/all.mixins.json", A = f.allTempletesPath || "/all.templetes.json", E = Z.$.oa(l.resolve(f.srcRootPath || "./")) + "/", B = {}, m = {}, G = {};
  Z.ha = E;
  return g.obj(function(h, D, y) {
    var p = Z.$.oa(h.path);
    if (h.isNull()) {
      return y();
    }
    if (h.isStream()) {
      return this.emit("error", new b("gulp-nice-page-builder", "Streaming not supported")), y();
    }
    if (".json" !== h.extname) {
      return this.push(h), y();
    }
    if (0 !== p.indexOf(E)) {
      return this.emit("error", new b("gulp-nice-page-builder", '"' + p + '" is outside of srcRootPath:"' + f.ha + '"')), y();
    }
    const t = h.contents.toString(D);
    D = parseInt(h.stat.birthtimeMs, 10);
    const r = parseInt(h.stat.ctimeMs, 10);
    p = Z.$.ua(p);
    switch(h.extname) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        h = Z.html2json(t, !1, f);
        B[p] = [h, D, r];
        break;
      case ".json":
        h = JSON.parse(t);
        O(h) && (G[p] = [h, D, r]);
        break;
      default:
        this.push(h);
    }
    y();
  }, function(h) {
    function D(k, v) {
      return Z.$.xa(v) ? Z.$.za(k, v) : v;
    }
    function y(k, v, F) {
      if (v) {
        for (let I = 0, M = v.length; I < M; ++I) {
          const L = D(k, v[I]);
          var q = G[L];
          v[I] = L;
          if (q && 3 === q.length) {
            q.push(!0), q = q[0], y(L, q.MIXINS, F), F || p(L, q.TEMPLETE, q);
          } else if (!q) {
            throw k + " \u304c\u8981\u6c42\u3059\u308b " + L + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
          }
        }
      }
    }
    function p(k, v, F) {
      for (; v;) {
        v = D(k, v);
        const q = B[v];
        if (q) {
          if (delete B[v], m[v] = q, F.TEMPLETE = k = v, F = Z.$.ja(q)) {
            y(k, F.MIXINS, !!F.TEMPLETE), v = F.TEMPLETE;
          } else {
            break;
          }
        } else if (m[v]) {
          break;
        } else {
          throw k + " \u304c\u8981\u6c42\u3059\u308b " + v + " \u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u305b\u3093!";
        }
      }
    }
    function t(k, v) {
      w.push(new c({base:"/", path:k + ".json", contents:Buffer.from(JSON.stringify(v))}));
    }
    for (var r in B) {
      var n = B[r], z = Z.$.ja(n);
      z && (y(r, z.MIXINS, !!z.TEMPLETE), p(r, z.TEMPLETE, z), B[r] && n.push(!0));
    }
    for (const k in G) {
      3 === G[k].length && (Z.ca.da && console.log("Unused mixin found! " + k), delete G[k]);
    }
    for (var d in B) {
      r = B[d], n = Z.$.ma(r), 3 === r.length && Qa(n) && (Z.ca.da && console.log("Unused templete found! " + d), delete B[d]);
    }
    const w = this;
    x && t(x, B);
    u && t(u, G);
    A && t(A, m);
    for (const k in B) {
      d = B[k], delete B[k], r = d[0], n = k.split("/"), z = r[0], z = !K(z) && O(z) ? z : {}, z.FILE_PATH = k, z.FILE_NAME = n.pop(), z.FOLDER_PATH = n.join("/"), z.URL = Z.$.la(k), z.CREATED_AT = d[1], z.MODIFIED_AT = d[2], z !== r[0] && r.unshift(z), t(k + ".json", r);
    }
    h();
  });
};
Z.generator = function(a, b, c) {
  function g(B) {
    if (B) {
      for (let m = 0; m < B.length; ++m) {
        const G = c[B[m]];
        l(G[0], G[2]);
      }
    }
  }
  function l(B, m) {
    let G = 0;
    for (const h in B) {
      "TEMPLETE" === h ? (u = u || B[h], u === B[h] && ++G) : void 0 === f[h] && (f[h] = B[h], ++G);
    }
    G && x < m && (x = m);
  }
  const f = !K(a[0]) && O(a[0]) ? a[0] : null;
  if (!f) {
    return a;
  }
  let x = f.MODIFIED_AT, u = f.TEMPLETE;
  for (g(f.MIXINS); u;) {
    var A = b[u], E = Z.$.ja(A);
    u = "";
    E && (l(E, A[2]), g(E.MIXINS));
  }
  for (u = f.TEMPLETE; u;) {
    A = b[u], E = Z.$.ja(A), a = Ra(Z.$.ma(A), a), E ? u = E.TEMPLETE : u = "";
  }
  delete f.TEMPLETE;
  delete f.MIXINS;
  f.UPDATED_AT = x;
  return a;
};
function Ra(a, b) {
  a = JSON.parse(JSON.stringify(a));
  var c = Qa(a);
  if (c) {
    const g = c[1];
    c = c[2];
    let l;
    S(b[0]) && (l = b.shift());
    let f = Ba(b), x = b.length;
    g.splice(c, 1);
    for (c -= f; f < x; ++f) {
      g.splice(c + f, 0, b[f]);
    }
    l && a.unshift(l);
  }
  return a;
}
Z.generator.gulp = function() {
  const a = require("plugin-error"), b = require("vinyl"), c = {};
  let g, l;
  return require("through2").obj(function(f, x, u) {
    if (f.isNull()) {
      return u();
    }
    if (f.isStream()) {
      return this.emit("error", new a("NicePageBuilder.generator.gulp", "Streaming not supported")), u();
    }
    if (".json" !== f.extname) {
      return this.push(f), u();
    }
    x = JSON.parse(f.contents.toString(x));
    switch(f.stem.split("/").pop()) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        c[x[0].FILE_PATH] = x;
        break;
      case ".templete":
        !K(x) && O(x) && (g = x);
        break;
      case ".mixin":
        !K(x) && O(x) && (l = x);
        break;
      default:
        this.push(f);
    }
    u();
  }, function(f) {
    for (const x in c) {
      const u = Z.generator(c[x], g, l);
      delete c[x];
      this.push(new b({base:"/", path:x + ".json", contents:Buffer.from(JSON.stringify(u))}));
    }
    f();
  });
};
function Sa(a, b, c, g) {
  function l(h, D, y, p, t) {
    function r() {
      var q = "";
      m && (q = "</" + m + ">", m = "");
      return q;
    }
    var n = "", z = h[0], d = h[1], w = 1, k = z, v;
    switch(z) {
      case 9:
        n = "<!DOCTYPE " + d + ">" + f(h, p, t);
        break;
      case 11:
        n = f(h, p, t);
        break;
      case 3:
        n = r() + (t ? d : za("" + d));
        break;
      case 4:
        P(d) || u("CDATA_SECTION Error! [" + h + "]");
        n = "<![CDATA[" + d + "]]\x3e";
        break;
      case 8:
        P(d) || u("COMMENT_NODE Error! [" + h + "]");
        n = "\x3c!--" + d + "--\x3e";
        break;
      case 13:
        P(d) || u("COND_CMT_HIDE_LOWER Error! [" + h + "]");
        n = r() + "\x3c!--[" + d + "]>" + f(h, !0, t) + "<![endif]--\x3e";
        break;
      case 16:
        P(d) || u("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + h + "]");
        n = r() + "\x3c!--{" + d + "};" + f(h, !0, t) + "--\x3e";
        break;
      case 14:
        P(d) || u("COND_CMT_SHOW_LOWER_START Error! [" + h + "]");
        n = "\x3c!--[" + d + "]>\x3c!--\x3e";
        break;
      case 15:
        n = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        p = xa(b, h, D, y, u);
        if (void 0 !== p && null !== p && "" !== p) {
          if (Q(p) || K(p)) {
            return -1;
          }
          u("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(h) + "] result:" + JSON.stringify(p));
        }
        break;
      case 18:
        P(d) || u("ELEMENT_END_TAG Error! [" + h + "]");
        n = "</" + d + ">";
        break;
      case 17:
        var F = !0;
      case 1:
        k = h[1], w = 2;
      default:
        P(k) || u("Not html.json! [" + h + "]"), k = Ea(k), D = k[1], y = k[2], k = k[0], "p" !== m || ta[k] ? m = "" : n = r(), n += "<" + k, D && (n += " id=" + Aa(D, E, A)), y && (n += " class=" + Aa(y, E, A)), G || (v = G = G || sa[k] ? !0 : !1), w = h[w], S(w) && (n += " " + x(w)), n = (h = f(h, p || ra[k], t || ua[k])) ? n + (">" + h) : F ? n + ">" : n + (G ? "/>" : ">"), F ? m = "" : G && !h || qa[k] && !p ? m = pa[k] ? "" : k : (n += "</" + k + ">", m = ""), v && (G = !1);
    }
    return n;
  }
  function f(h, D, y) {
    for (var p = "", t = Ba(h), r; t < h.length; ++t) {
      r = h[t], Q(r) ? p += l([3, r], null, 0, D, y) : K(r) ? (r = l(r, h, t, D, y), -1 === r ? --t : p += r) : u("Invalid html.json! [" + r + "]");
    }
    return p;
  }
  function x(h) {
    var D = "", y, p;
    for (y in h) {
      var t = h[y];
      (p = 0 === y.indexOf(B)) && (y = y.substr(B.length));
      "className" === y && (y = "class");
      p && (t = ya(b, y, t, u));
      if (!(null == t || oa[y] && !1 === t || (D += " " + y, oa[y]))) {
        if ("style" === y && O(t)) {
          p = void 0;
          var r = t, n = "";
          for (p in r) {
            t = r[p];
            "0px" === t && (t = 0);
            for (var z, d = [], w = p.split(""), k = w.length; k;) {
              z = w[--k], "A" <= z && "Z" >= z && (z = "-" + z.toLowerCase()), d[k] = z;
            }
            z = d.join("");
            n += ";" + z + ":" + za("" + t);
          }
          t = n.substr(1);
          if (!t) {
            continue;
          }
        }
        D += "=" + Aa(t, E, A);
      }
    }
    return D.substr(1);
  }
  var u = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : g || {};
  var A = !0 === c.quotAlways, E = !0 === c.useSingleQuot, B = c.instructionAttrPrefix || ":", m, G = !1;
  if (K(a)) {
    return 7 === wa(a) && (a = [11, a]), l(a, null, 0, !1, !1);
  }
  u("Invalid html.json document!");
}
;Z.json2html = function(a, b, c, g) {
  a.shift();
  return Sa(a, b, c, g);
};
Z.json2html.gulp = function(a, b, c) {
  const g = require("plugin-error"), l = require("vinyl");
  return require("through2").obj(function(f, x, u) {
    if (f.isNull()) {
      return u();
    }
    if (f.isStream()) {
      return this.emit("error", new g("NicePageBuilder.json2html.gulp", "Streaming not supported")), u();
    }
    if (".json" !== f.extname) {
      return this.push(f), u();
    }
    switch(f.stem.split("/").pop()) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        f = JSON.parse(f.contents.toString(x));
        this.push(new l({base:"/", path:f[0].FILE_PATH, contents:Z.json2html(f, a, b, c)}));
        break;
      default:
        this.push(f);
    }
    u();
  });
};
Z.all = {};

