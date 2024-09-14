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
    c && (ba(b, n(a.substring(0, c))), a = a.substring(c), c = 0);
  }
  function n(p) {
    return p.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function f(p, x, y) {
    for (var q = 1, r = y.length, u = 3, k, E; u < r && 3 !== q;) {
      E = y.charAt(u);
      switch(q) {
        case 1:
          J[E] & 4 ? q = 2 : ">" === E && (q = 3);
          1 !== q && (k = y.substring(2, u));
          break;
        case 2:
          ">" === E && (q = 3);
      }
      ++u;
    }
    return 3 === q ? (v(p, x, C ? k : k.toUpperCase(), !1), u) : 0;
  }
  function v(p, x, y, q) {
    var r = 0, u = p.length;
    if (y) {
      for (r = u; 0 <= r && p[--r] !== y;) {
      }
    }
    if (0 <= r) {
      for (; r < u;) {
        ca(x, p[--u], q && !e[p[u]], !1), C && da[p[u]] && (C = !!x.ga);
      }
      p.length = r;
    } else {
      ca(x, y, !1, !0);
    }
  }
  function w(p, x, y, q) {
    function r(B, G) {
      l[B] = !0 === G ? !0 : ea[B.toLowerCase()] ? C ? n(G || B) : !0 : n(G || "");
      ++m;
    }
    function u() {
      (z = "/>" === q.substr(d, 2)) && ++d;
      return z;
    }
    for (var k = 1, E = q.length, d = 2, l = {}, m = 0, z = !1, D, t, I, M, K, N; d < E && 9 > k;) {
      D = q.charAt(d);
      switch(k) {
        case 1:
          if (J[D] & 4) {
            k = 2, t = q.substring(1, d);
          } else if (">" === D || u()) {
            k = 9, t = q.substring(1, d);
          }
          break;
        case 2:
          ">" === D || u() ? k = 9 : J[D] & 4 || (k = 3, I = d);
          break;
        case 3:
          if ("=" === D) {
            k = 5, M = q.substring(I, d);
          } else if (J[D] & 4) {
            k = 4, M = q.substring(I, d);
          } else if (">" === D || u()) {
            k = 9, r(q.substring(I, d), !0);
          }
          break;
        case 4:
          "=" === D ? k = 5 : ">" === D || u() ? (k = 9, r(M, !0)) : J[D] & 4 || (k = 3, r(M, !0), I = d);
          break;
        case 5:
          '"' === D || "'" === D ? (k = 6, K = D, I = d + 1) : J[D] & 4 || (k = 7, I = d);
          N = !1;
          break;
        case 6:
          N || D !== K || (k = 2, r(M, q.substring(I, d)));
          N = "\\" === D && !N;
          break;
        case 7:
          J[D] & 4 ? k = 2 : ">" === D ? k = 9 : !fa[M] && u() && (k = 9), 7 !== k && r(M, q.substring(I, d));
      }
      ++d;
    }
    if (9 === k) {
      k = t.toUpperCase();
      C ||= !!da[t];
      if (!C) {
        for (; x;) {
          if (e[x] && !e[x][k]) {
            v(p, y, x, !1), x = p[p.length - 1];
          } else {
            break;
          }
        }
      }
      (z = z || !!ha[k]) || (p[p.length] = C ? t : k);
      ia(y, C ? t : k, m ? l : null, z);
      return d;
    }
    return 0;
  }
  for (var A = [], C = !!b.ga, H = a.length - c, h, F; a;) {
    (h = F = A[A.length - 1]) && C && (F = h.toUpperCase());
    if (ja[F]) {
      if ("PLAINTEXT" === F) {
        ba(b, n(a)), a = "";
      } else {
        if (h = a.toUpperCase().indexOf("</" + F), 0 <= h) {
          if (c = h, g(), h = f(A, b, a)) {
            a = a.substring(h);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (g(), h = a.indexOf(">"), -1 !== h) {
        ka(b, a.substring(10, h)), a = a.substring(h + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === c) {
      if (g(), h = a.indexOf("?>"), -1 !== h) {
        la(b, n(a.substring(2, h))), a = a.substring(h + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (g(), h = a.indexOf("]]\x3e"), -1 !== h) {
        ma(b, n(a.substring(9, h))), a = a.substring(h + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (g(), h = a.indexOf("--\x3e"), -1 !== h) {
        na(b, n(a.substring(4, h))), a = a.substring(h + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === c && J[a.charAt(c + 2)] & 3) {
      if (g(), h = f(A, b, a)) {
        a = a.substring(h);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(c) && J[a.charAt(c + 1)] & 3) {
      if (g(), h = w(A, h, b, a)) {
        a = a.substring(h);
      } else {
        throw a;
      }
    } else {
      h = a.indexOf("<", c), -1 === h ? (ba(b, n(a)), a = "") : c < h ? c = h : ++c;
    }
    h = a.length - c;
    if (h === H) {
      throw a;
    }
    H = h;
  }
  g();
  v(A, b, "", !0);
}
var da = {xml:!0, svg:!0, math:!0}, ha = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, Ba:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ja = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, fa = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, ea = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, J = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var oa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, pa = {link:!0, qb:!0, Ia:!0, wa:!0, hb:!0, input:!0, Ca:!0, base:!0, Ka:!0, Sa:!0, kb:!0, wb:!0, track:!0, Qb:!0, Ma:!0, Fa:!0, frame:!0, jb:!0, Ga:!0}, qa = {fb:!0, head:!0, body:!0, p:!0, Ra:!0, Na:!0, mb:!0, vb:!0, Ib:!0, Nb:!0, Lb:!0, Jb:!0, Mb:!0, Ob:!0, zb:!0, Ab:!0, Eb:!0, Fb:!0, Gb:!0, ub:!0, caption:!0, La:!0}, ra = {a:!0, audio:!0, 
Oa:!0, ib:!0, map:!0, ya:!0, video:!0}, sa = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, ta = {address:!0, Da:!0, Ea:!0, Ha:!0, canvas:!0, details:!0, Pa:!0, Qa:!0, Ta:!0, Ua:!0, Va:!0, Wa:!0, form:!0, Xa:!0, Ya:!0, Za:!0, $a:!0, ab:!0, bb:!0, cb:!0, eb:!0, wa:!0, lb:!0, nb:!0, pb:!0, rb:!0, ya:!0, tb:!0, p:!0, yb:!0, Hb:!0, Pb:!0, Ja:!0, dir:!0, sb:!0, ob:!0}, ua = {Aa:!0, style:!0, xb:!0, Rb:!0}, va = {Aa:!0, style:!0, Kb:!0};
function L(a) {
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
    if (L(a)) {
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
  return !L(a) && O(a);
}
function xa(a, b, c, g, n) {
  var f = b[1], v = b.slice(2);
  a = v.length ? a(f, v) : a(f);
  void 0 !== a && null !== a && "" !== a && (Q(a) ? c ? c.splice(g, 1, a) : (b.length = 0, b.push(3, b)) : L(a) ? 11 === a[0] ? c ? (a.shift(), a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : L(a[0]) ? c ? (a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(g, 1, a) : (b.length = 0, b.push(11, a)) : n("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return a;
}
function ya(a, b, c, g) {
  if (L(c) && P(c[0])) {
    var n = c[0];
    c = c.slice(1);
    n = c.length ? a(n, c) : a(n);
  } else {
    P(c) ? n = a(c) : g("Invalid InstructionAttr value! [" + b + "=" + c + "]");
  }
  return L(n) ? ya(a, b, n, g) : n;
}
function za(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function Aa(a, b, c) {
  a = za("" + a);
  var g = a.match('"'), n = a.match("'"), f = b ? "'" : '"';
  if (g && n) {
    a = b ? f + a.split("'").join("\\'") + f : f + a.split('"').join('\\"') + f;
  } else if (g) {
    a = "'" + a + "'";
  } else if (n) {
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
      var n = wa(b);
      3 === n ? (c = Q(b) ? c + b : c + b[1], a.splice(g, 1)) : (c && (a.splice(g, 0, R(c)), c = ""), ++g, 1 !== n && 17 !== n && 13 !== n && 16 !== n || Ca(b));
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
  var b = a.indexOf("#"), c = a.indexOf("."), g = "", n = "";
  b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (n = a.split("#")[1], a = a.split("#")[0])) : c < b && (n = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
  return [a, n, g];
}
;function Fa(a) {
  return 1 === a.aa || 17 === a.aa || 13 === a.aa || 16 === a.aa || Ga(a);
}
function Ga(a) {
  return 9 === a.aa || 11 === a.aa;
}
function Ha(a, b, c, g, n) {
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
      this.oa = n || null;
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
      this.pa = g;
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
      return a.pa;
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
      a.pa = b;
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
    var n = W(a);
    if (a.ba) {
      throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    a = new Ha(a, n, b, c, g);
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
  function g(d, l, m, z) {
    switch(d.aa) {
      case 1:
      case 17:
        var D = {};
        var t = Ka(d).toLowerCase();
        z = "pre" === t;
        if (!Ja(d)) {
          throw "getAttrs() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var I = S(d.oa) ? d.oa : null;
        var M = 0, K;
        if (I) {
          for (K in I) {
            var N = oa[K] ? 1 : I[K];
            if ("id" === K) {
              var B = N;
            } else if ("class" === K) {
              var G = N;
            } else {
              if (K.startsWith(r)) {
                var T = n(N);
                T.ia ? (N = [T.name], H.apply(N, T.ia)) : N = T.name;
              }
              D[K] = R(N);
              ++M;
            }
          }
        }
        B && (t += "#" + B);
        G && (t += "." + G);
        if (z && h) {
          for (; B = v(d);) {
            if (A(V(B))) {
              Ia(B, Da(V(B), "\n"));
              break;
            } else {
              B.remove();
            }
          }
          for (; B = w(d);) {
            if (A(V(B))) {
              Ia(B, U(V(B), "\n"));
              break;
            } else {
              B.remove();
            }
          }
        }
        B = M ? [t, D] : [t];
        for (G = 0; G < W(d); ++G) {
          g(X(d, G), B, z || m, !!va[t]);
        }
        l.push(B);
        17 !== d.aa || B.unshift(17);
        break;
      case 18:
        l.push([18, Ka(d).toLowerCase()]);
        break;
      case 3:
        d = "" + V(d);
        if (!m && h) {
          if (z) {
            d = U(Da(d, "\n"), "\n");
          } else {
            d = d.split("\r\n").join("\n");
            p && (d = d.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (d = d.split("\t").join(" "); 0 <= d.indexOf("\n\n");) {
              d = d.split("\n\n").join("\n");
            }
            F && (t = "\n" === d.charAt(0) && /\n[ ]*$/.test(d));
            d = U(d, "\n");
            for (d = d.split("\n").join(" "); 0 <= d.indexOf("  ");) {
              d = d.split("  ").join(" ");
            }
            t && (d = U(Da(d, " "), " "));
            d = d.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        (t = R(d)) && l.push(t);
        break;
      case 4:
        t = V(d);
        x && l.push([4, R(t)]);
        break;
      case 7:
        t = V(d);
        T = n(t);
        B = [7, T.name];
        T.ia && H.apply(B, T.ia);
        l.push(B);
        break;
      case 8:
        t = V(d);
        if (t.startsWith("[if") && 0 < t.indexOf("<![endif]")) {
          d = La(f(t, ">", "<![endif]", !0), !0);
          B = [13, f(t, "[", "]", !1)];
          for (G = 0; G < W(d); ++G) {
            g(X(d, G), B, m, z);
          }
          (2 < B.length || q) && l.push(B);
        } else if (t.startsWith("{") && 2 < t.indexOf("};")) {
          d = La(t.substring(t.indexOf("};") + 2), !0);
          B = [16, f(t, "{", "};", !1)];
          for (G = 0; G < W(d); ++G) {
            g(X(d, G), B, m, z);
          }
          (2 < B.length || q) && l.push(B);
        } else {
          t.startsWith("[if") && 0 < t.indexOf("><!") ? (l.push([14, f(t, "[", "]", !1)]), E = !0) : "<![endif]" === t && E ? (m = l[l.length - 1], q || !m || 14 !== m[0] ? l.push([15]) : m && l.pop(), E = !1) : y && l.push([8, R(t)]);
        }
        break;
      case 9:
        t = V(d);
        h && (t = t.split("\n").join(" ").split("  ").join(" "));
        B = [9, t];
        l.push(B);
        for (G = 0; G < W(d); ++G) {
          g(X(d, G), B, !1, !1);
        }
        break;
      case 11:
        for (B = [11], l.push(B), G = 0; G < W(d); ++G) {
          g(X(d, G), B, m, z);
        }
    }
  }
  function n(d) {
    var l = d.indexOf(u), m = U(Da(-1 === l ? d : d.substr(0, l), " "), " ");
    d = -1 === l ? [] : JSON.parse("[" + d.substring(l + u.length, d.lastIndexOf(k) - 2) + "]");
    return d.length ? {name:m, ia:d} : {name:m};
  }
  function f(d, l, m, z) {
    l = d.indexOf(l) + l.length;
    m = z ? d.lastIndexOf(m) : d.indexOf(m, l);
    return d.substring(l, m);
  }
  function v(d) {
    for (var l = 0, m = W(d), z; l < m; ++l) {
      if (z = X(d, l), Ja(z) && (z = v(z)), z && 3 === z.aa) {
        return z;
      }
    }
  }
  function w(d) {
    for (var l = W(d), m; l;) {
      if (m = X(d, --l), Ja(m) && (m = w(m)), m && 3 === m.aa) {
        return m;
      }
    }
  }
  function A(d) {
    return d.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const C = [], H = C.push;
  a = La(a, b);
  c = c || {};
  const h = -1 === ["none", !1].indexOf(c.trimWhitespaces), F = "aggressive" === c.trimWhitespaces, p = !!c.removeNewlineBetweenFullWidthChars, x = !0 === c.keepCDATASections, y = !0 === c.keepComments, q = !0 === c.keepEmptyConditionalComment, r = c.instructionAttrPrefix || ":";
  c = c.argumentBrackets || "()";
  const u = c.substr(0, c.length / 2), k = c.substr(c.length);
  let E = !1;
  g(a, C, !1, !1);
  Ca(C[0]);
  return C[0];
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
Z.$.na = function(a) {
  return a.split("\\").join("/");
};
Z.$.ma = function(a) {
  return 0 === a.indexOf(Z.ha);
};
Z.$.sa = function(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
};
Z.$.ra = function(a) {
  return Z.$.ma(a) || Z.$.sa(a);
};
Z.$.fa = function(a) {
  return "/" === a.charAt(0) && "//" !== a.substr(0, 2);
};
Z.$.xa = function(a) {
  return !Z.$.ma(a) && !Z.$.fa(a);
};
Z.$.ua = function(a) {
  if (Z.ca.da && !Z.$.ma(a)) {
    throw a + " is not a absolute path!";
  }
  return Z.$.na(a).substr(Z.ha.length - 1);
};
Z.$.Cb = function(a) {
  if (Z.ca.da && !Z.$.fa(a)) {
    throw a + " is not a root relative path!";
  }
  return Z.ha + a.substr(1);
};
Z.$.qa = function(a) {
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
  a = Z.$.qa(Z.$.ta(Z.$.ka(a), Z.$.ka(b)));
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
  var c = [], g = 0, n = !1, f;
  var v = a.split("/");
  var w = v.pop();
  if (a === b) {
    return w;
  }
  a = b.split("/");
  b = a.pop();
  var A = v.length;
  for (f = Math.max(a.length, A); g < f; ++g) {
    if (n || a[g] !== v[g]) {
      g < A && c.unshift(".."), a[g] && c.push(a[g]), n = !0;
    }
  }
  (n || w !== b) && c.push(b);
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
  a = Z.$.qa(Z.$.ta(Z.$.ka(a), Z.$.ka(b)));
  c && (a += c);
  return a ? a : "./";
};
Z.$.la = function(a) {
  a = a[0];
  if (Z.ca.da && !L(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
Z.$.ja = function(a) {
  a = Z.$.la(a)[0];
  return !L(a) && O(a) ? a : null;
};
function Oa(a, b) {
  function c(f) {
    let v = Ba(f), w = f.length;
    for (var A; v < w; ++v) {
      var C = f[v], H;
      if (H = !Q(C)) {
        if (H = L(C)) {
          a: {
            A = C;
            C = f;
            H = v;
            var h = A[0];
            const F = A[1];
            let p = h, x = 1;
            switch(h) {
              case 9:
              case 11:
              case 13:
              case 16:
                A = c(A);
                break a;
              case 1:
              case 17:
                p = F, x = 2;
              default:
                if (P(p)) {
                  h = A[x];
                  A = b(p, S(h) ? h : null) ? [A, C, H] : c(A);
                  break a;
                }
            }
            A = void 0;
          }
          H = A;
        }
      }
      if (H) {
        return A;
      }
    }
  }
  let g, n;
  return S(a[0]) ? (g = a.shift(), n = c(a), a.unshift(g), n && n[1] === a ? [n[0], a, ++n[2]] : n) : c(a);
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
    c = b[0], b[1].splice(b[2], 1), c && 3 === c.length && (b = eval("(" + c[2] + ");"), !L(b) && O(b) && a.unshift(b));
  }
  return a;
};
Z.html2json.gulp = function(a) {
  function b(x, y) {
    return Z.$.xa(y) ? Z.$.za(x, y) : y;
  }
  const c = require("plugin-error"), g = require("vinyl"), n = require("through2"), f = require("path"), v = a || {}, w = Z.$.na(f.resolve(v.srcRootPath || "./")) + "/";
  Z.ha = w;
  const A = v.allPagesPath && b("/", v.allPagesPath), C = b("/", v.allMixinsPath || "all.mixins.json"), H = b("/", v.allTempletesPath || "all.templetes.json"), h = {}, F = {}, p = {};
  return n.obj(function(x, y, q) {
    var r = Z.$.na(x.path);
    if (x.isNull()) {
      return q();
    }
    if (x.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), q();
    }
    if (0 !== r.indexOf(w)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + r + '" is outside of srcRootPath:"' + v.ha + '"')), q();
    }
    const u = x.contents.toString(y);
    y = parseInt(x.stat.birthtimeMs, 10);
    const k = parseInt(x.stat.ctimeMs, 10);
    r = Z.$.ua(r);
    switch(x.extname) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        x = Z.html2json(u, !1, v);
        h[r] = [x, y, k];
        break;
      case ".json":
        x = JSON.parse(u);
        O(x) && (p[r] = [x, y, k]);
        break;
      default:
        this.push(x);
    }
    q();
  }, function(x) {
    function y(l, m, z, D) {
      if (m) {
        for (let I = 0, M = m.length; I < M; ++I) {
          const K = b(l, m[I]);
          var t = p[K];
          m[I] = K;
          if (t && 3 === t.length) {
            t.push(!0), t = t[0], D ? t.MIXINS && (console.log('Mixin:"' + K + '" cannot have MIXINS property!'), delete t.MIXINS) : y(K, t.MIXINS, z, !0), z || q(K, t.TEMPLETE, t);
          } else if (!t) {
            throw 'Mixin:"' + K + '" required by "' + l + '" does not exist!';
          }
        }
      }
    }
    function q(l, m, z) {
      for (; m;) {
        m = b(l, m);
        const D = h[m];
        if (D) {
          if (delete h[m], F[m] = D, z.TEMPLETE = l = m, z = Z.$.ja(D)) {
            y(l, z.MIXINS, !!z.TEMPLETE, !1), m = z.TEMPLETE;
          } else {
            break;
          }
        } else if (F[m]) {
          break;
        } else {
          throw 'Templete:"' + m + '" required by "' + l + '" does not exist!';
        }
      }
    }
    function r(l, m) {
      const z = l.split("/");
      z.pop();
      l = new g({base:z.join("/") || "/", path:l, contents:Buffer.from(JSON.stringify(m))});
      l.extname = ".json";
      d.push(l);
    }
    for (var u in h) {
      var k = h[u];
      let l = Z.$.ja(k);
      l && (y(u, l.MIXINS, !!l.TEMPLETE, !1), q(u, l.TEMPLETE, l), h[u] && k.push(!0));
    }
    for (const l in p) {
      3 === p[l].length && (Z.ca.da && console.log("Unused mixin found! " + l), delete p[l]);
    }
    for (var E in h) {
      u = h[E], k = Z.$.la(u), 3 === u.length && Qa(k) && (Z.ca.da && console.log("Unused templete found! " + E), delete h[E]);
    }
    const d = this;
    A && r(A, h);
    r(C, p);
    r(H, F);
    for (const l in h) {
      E = h[l], delete h[l], u = E[0], k = u[0], k = !L(k) && O(k) ? k : {}, k.FILE_PATH = l, k.CREATED_AT = E[1], k.MODIFIED_AT = E[2], k !== u[0] && u.unshift(k), r(l + ".json", u);
    }
    x();
  });
};
Z.generator = function(a, b, c) {
  function g(H) {
    if (H) {
      for (let h = 0; h < H.length; ++h) {
        const F = c[H[h]];
        n(F[0], F[2]);
      }
    }
  }
  function n(H, h) {
    let F = 0;
    for (const p in H) {
      "TEMPLETE" === p ? (w = w || H[p], w === H[p] && ++F) : void 0 === f[p] && (f[p] = H[p], ++F);
    }
    F && v < h && (v = h);
  }
  const f = !L(a[0]) && O(a[0]) ? a[0] : null;
  if (!f) {
    return a;
  }
  let v = f.MODIFIED_AT, w = f.TEMPLETE;
  for (g(f.MIXINS); w;) {
    var A = b[w], C = Z.$.ja(A);
    w = "";
    C && (n(C, A[2]), g(C.MIXINS));
  }
  for (w = f.TEMPLETE; w;) {
    A = b[w], C = Z.$.ja(A), a = Ra(Z.$.la(A), a), C ? w = C.TEMPLETE : w = "";
  }
  delete f.TEMPLETE;
  delete f.MIXINS;
  f.UPDATED_AT = v;
  return a;
};
function Ra(a, b) {
  a = JSON.parse(JSON.stringify(a));
  var c = Qa(a);
  if (c) {
    const g = c[1];
    c = c[2];
    let n;
    S(b[0]) && (n = b.shift());
    let f = Ba(b), v = b.length;
    g.splice(c, 1);
    for (c -= f; f < v; ++f) {
      g.splice(c + f, 0, b[f]);
    }
    n && a.unshift(n);
  }
  return a;
}
Z.generator.gulp = function() {
  const a = require("plugin-error"), b = require("vinyl"), c = {};
  let g, n;
  return require("through2").obj(function(f, v, w) {
    if (f.isNull()) {
      return w();
    }
    if (f.isStream()) {
      return this.emit("error", new a("NicePageBuilder.generator.gulp", "Streaming not supported")), w();
    }
    if (".json" !== f.extname) {
      return this.push(f), w();
    }
    v = JSON.parse(f.contents.toString(v));
    switch(f.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        return c[v[0].FILE_PATH] = v, w();
      case "templetes":
        !L(v) && O(v) && (g = v);
        break;
      case "mixins":
        !L(v) && O(v) && (n = v);
    }
    this.push(f);
    w();
  }, function(f) {
    for (const v in c) {
      const w = Z.generator(c[v], g, n);
      delete c[v];
      this.push(new b({base:"/", path:v + ".json", contents:Buffer.from(JSON.stringify(w))}));
    }
    f();
  });
};
function Sa(a, b, c, g) {
  function n(p, x, y, q, r) {
    function u() {
      var t = "";
      h && (t = "</" + h + ">", h = "");
      return t;
    }
    var k = "", E = p[0], d = p[1], l = 1, m = E, z;
    switch(E) {
      case 9:
        k = "<!DOCTYPE " + d + ">" + f(p, q, r);
        break;
      case 11:
        k = f(p, q, r);
        break;
      case 3:
        k = u() + (r ? d : za("" + d));
        break;
      case 4:
        P(d) || w("CDATA_SECTION Error! [" + p + "]");
        k = "<![CDATA[" + d + "]]\x3e";
        break;
      case 8:
        P(d) || w("COMMENT_NODE Error! [" + p + "]");
        k = "\x3c!--" + d + "--\x3e";
        break;
      case 13:
        P(d) || w("COND_CMT_HIDE_LOWER Error! [" + p + "]");
        k = u() + "\x3c!--[" + d + "]>" + f(p, !0, r) + "<![endif]--\x3e";
        break;
      case 16:
        P(d) || w("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + p + "]");
        k = u() + "\x3c!--{" + d + "};" + f(p, !0, r) + "--\x3e";
        break;
      case 14:
        P(d) || w("COND_CMT_SHOW_LOWER_START Error! [" + p + "]");
        k = "\x3c!--[" + d + "]>\x3c!--\x3e";
        break;
      case 15:
        k = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        q = xa(b, p, x, y, w);
        if (void 0 !== q && null !== q && "" !== q) {
          if (Q(q) || L(q)) {
            return -1;
          }
          w("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(p) + "] result:" + JSON.stringify(q));
        }
        break;
      case 18:
        P(d) || w("ELEMENT_END_TAG Error! [" + p + "]");
        k = "</" + d + ">";
        break;
      case 17:
        var D = !0;
      case 1:
        m = p[1], l = 2;
      default:
        P(m) || w("Not html.json! [" + p + "]"), m = Ea(m), x = m[1], y = m[2], m = m[0], "p" !== h || ta[m] ? h = "" : k = u(), k += "<" + m, x && (k += " id=" + Aa(x, C, A)), y && (k += " class=" + Aa(y, C, A)), F || (z = F = F || sa[m] ? !0 : !1), l = p[l], S(l) && (k += " " + v(l)), k = (p = f(p, q || ra[m], r || ua[m])) ? k + (">" + p) : D ? k + ">" : k + (F ? "/>" : ">"), D ? h = "" : F && !p || qa[m] && !q ? h = pa[m] ? "" : m : (k += "</" + m + ">", h = ""), z && (F = !1);
    }
    return k;
  }
  function f(p, x, y) {
    for (var q = "", r = Ba(p), u; r < p.length; ++r) {
      u = p[r], Q(u) ? q += n([3, u], null, 0, x, y) : L(u) ? (u = n(u, p, r, x, y), -1 === u ? --r : q += u) : w("Invalid html.json! [" + u + "]");
    }
    return q;
  }
  function v(p) {
    var x = "", y, q;
    for (y in p) {
      var r = p[y];
      (q = 0 === y.indexOf(H)) && (y = y.substr(H.length));
      "className" === y && (y = "class");
      q && (r = ya(b, y, r, w));
      if (!(null == r || oa[y] && !1 === r || (x += " " + y, oa[y]))) {
        if ("style" === y && O(r)) {
          q = void 0;
          var u = r, k = "";
          for (q in u) {
            r = u[q];
            "0px" === r && (r = 0);
            for (var E, d = [], l = q.split(""), m = l.length; m;) {
              E = l[--m], "A" <= E && "Z" >= E && (E = "-" + E.toLowerCase()), d[m] = E;
            }
            E = d.join("");
            k += ";" + E + ":" + za("" + r);
          }
          r = k.substr(1);
          if (!r) {
            continue;
          }
        }
        x += "=" + Aa(r, C, A);
      }
    }
    return x.substr(1);
  }
  var w = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : g || {};
  var A = !0 === c.quotAlways, C = !0 === c.useSingleQuot, H = c.instructionAttrPrefix || ":", h, F = !1;
  if (L(a)) {
    return 7 === wa(a) && (a = [11, a]), n(a, null, 0, !1, !1);
  }
  w("Invalid html.json document!");
}
;Z.json2html = function(a, b, c, g) {
  a.shift();
  return Sa(a, b, c, g);
};
Z.json2html.gulp = function(a, b, c) {
  const g = require("plugin-error"), n = require("vinyl");
  return require("through2").obj(function(f, v, w) {
    if (f.isNull()) {
      return w();
    }
    if (f.isStream()) {
      return this.emit("error", new g("NicePageBuilder.json2html.gulp", "Streaming not supported")), w();
    }
    if (".json" !== f.extname) {
      return this.push(f), w();
    }
    switch(f.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        f = JSON.parse(f.contents.toString(v));
        this.push(new n({base:"/", path:f[0].FILE_PATH, contents:Buffer.from(Z.json2html(f, a, b, c))}));
        break;
      default:
        this.push(f);
    }
    w();
  });
};
Z.all = {};

