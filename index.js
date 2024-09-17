var G = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4}, aa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, ba = {xml:!0, svg:!0, math:!0}, 
ca = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, da = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, 
title:!0, plaintext:!0, xmp:!0}, H = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, 
EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, 
SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, 
TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, 
LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
H.LI = H.TD = H.DD;
H.TH = H.DT;
H.RB = H.RP = H.RT = H.P;
H.TFOOT = H.THEAD = H.TBODY;
H.RTC = H.RBC;
function ea(a, b) {
  var c = 0;
  function d() {
    c && (fa(b, f(a.substring(0, c))), a = a.substring(c), c = 0);
  }
  function f(z) {
    return z.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function e(z, y, w) {
    for (var r = 0, F = w.length, A = 3, k, p; A < F && 2 !== r;) {
      p = w.charAt(A);
      switch(r) {
        case 0:
          G[p] & 4 ? r = 1 : ">" === p && (r = 2);
          r && (k = w.substring(2, A));
          break;
        case 1:
          ">" === p && (r = 2);
      }
      ++A;
    }
    return 2 === r ? (ca[k] || n(z, y, v ? k : k.toUpperCase(), !1), A) : 0;
  }
  function n(z, y, w, r) {
    var F = 0, A = z.length;
    if (w) {
      for (F = A; 0 <= F && z[--F] !== w;) {
      }
    }
    if (0 <= F) {
      for (; F < A;) {
        ha(y, z[--A], r && !H[z[A]], !1), v && ba[z[A]] && (v = !!y.da);
      }
      z.length = F;
    } else {
      ha(y, w, !1, !0);
    }
  }
  function g(z, y, w, r) {
    function F(S, P) {
      t[S] = !0 === P ? !0 : aa[S.toLowerCase()] ? v ? f(P || S) : !0 : f(P || "");
      ++B;
    }
    function A() {
      (u = "/>" === r.substr(h, 2)) && ++h;
      return u;
    }
    for (var k = 1, p = r.length, h = 2, t = {}, B = 0, u = !1, C, E, I, M, N, K; h < p && 9 > k;) {
      C = r.charAt(h);
      switch(k) {
        case 1:
          if (G[C] & 4) {
            k = 2, E = r.substring(1, h);
          } else if (">" === C || A()) {
            k = 9, E = r.substring(1, h);
          }
          break;
        case 2:
          ">" === C || A() ? k = 9 : G[C] & 4 || (k = 3, I = h);
          break;
        case 3:
          if ("=" === C) {
            k = 5, M = r.substring(I, h);
          } else if (G[C] & 4) {
            k = 4, M = r.substring(I, h);
          } else if (">" === C || A()) {
            k = 9, F(r.substring(I, h), !0);
          }
          break;
        case 4:
          "=" === C ? k = 5 : ">" === C || A() ? (k = 9, F(M, !0)) : G[C] & 4 || (k = 3, F(M, !0), I = h);
          break;
        case 5:
          '"' === C || "'" === C ? (k = 6, N = C, I = h + 1) : G[C] & 4 || (k = 7, I = h);
          K = !1;
          break;
        case 6:
          K || C !== N || (k = 2, F(M, r.substring(I, h)));
          K = "\\" === C && !K;
          break;
        case 7:
          G[C] & 4 ? k = 2 : ">" === C && (k = 9), 7 !== k && F(M, r.substring(I, h));
      }
      ++h;
    }
    if (9 === k) {
      k = E.toUpperCase();
      v ||= !!ba[E];
      if (!v) {
        for (; y;) {
          if (H[y] && !H[y][k]) {
            n(z, w, y, !1), y = z[z.length - 1];
          } else {
            break;
          }
        }
      }
      (u = u || !!ca[k]) || (z[z.length] = v ? E : k);
      ia(w, v ? E : k, B ? t : null, u);
      return h;
    }
    return 0;
  }
  for (var l = [], v = !!b.da, x = a.length - c, q, m; a;) {
    q = l[l.length - 1];
    if (da[q]) {
      if ("PLAINTEXT" === q || "plaintext" === q) {
        fa(b, f(a)), a = "";
      } else {
        if (m = a.indexOf("</" + (v ? q : q.toLowerCase())), -1 === m && (m = a.indexOf("</" + (v ? q.toUpperCase() : q))), 0 <= m) {
          if (c = m, d(), q = e(l, b, a)) {
            a = a.substring(q);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (d(), m = a.indexOf(">"), -1 !== m) {
        ja(b, a.substring(10, m)), a = a.substring(m + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === c) {
      if (d(), m = a.indexOf("?>"), -1 !== m) {
        ka(b, f(a.substring(2, m))), a = a.substring(m + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (d(), m = a.indexOf("]]\x3e"), -1 !== m) {
        la(b, f(a.substring(9, m))), a = a.substring(m + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (d(), m = a.indexOf("--\x3e"), -1 !== m) {
        ma(b, f(a.substring(4, m))), a = a.substring(m + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === c && G[a.charAt(c + 2)] & 3) {
      if (d(), q = e(l, b, a)) {
        a = a.substring(q);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(c) && G[a.charAt(c + 1)] & 3) {
      if (d(), q = g(l, q, b, a)) {
        a = a.substring(q);
      } else {
        throw a;
      }
    } else {
      m = a.indexOf("<", c), -1 === m ? (fa(b, f(a)), a = "") : c < m ? c = m : ++c;
    }
    q = a.length - c;
    if (q === x) {
      throw a;
    }
    x = q;
  }
  d();
  n(l, b, "", !0);
}
;function na(a) {
  function b(d, f) {
    function e(q, m, z) {
      return n ? J(n, q, m, z) : new oa(!1, 0, q, m, z);
    }
    var n = f === !!f ? null : f;
    f = d[0];
    var g = d[1], l = 1, v = f;
    switch(f) {
      case 9:
      case 13:
      case 16:
        var x = e(f, g);
        c(d, x);
        break;
      case 11:
        x = e(f);
        c(d, x);
        break;
      case 3:
      case 4:
      case 8:
      case 14:
      case 18:
        x = e(f, g);
        break;
      case 15:
        x = e(f);
        break;
      case 7:
        x = [];
        l = 2;
        for (v = d.length; l < v; ++l) {
          x[l - 2] = d[l];
        }
        x = e(f, g, v ? x : null);
        break;
      case 1:
      case 17:
        v = g, l = 2;
      default:
        L(v) && (x = e(1 === l ? 1 : f, v, d[l]), c(d, x));
    }
    return x;
  }
  function c(d, f) {
    for (var e = O(d), n; e < d.length; ++e) {
      n = d[e], R(n) ? J(f, 3, n) : T(n) && b(n, f);
    }
  }
  return b(a, !1);
}
;var pa = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, qa = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, ra = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, sa = 
{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ta = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, ua = {PRE:!0, LISTING:!0, pre:!0, listing:!0};
function T(a) {
  return !(!a || a.pop !== [].pop);
}
function U(a) {
  return !(!a || "object" !== typeof a);
}
function L(a) {
  return "" + a === a;
}
function R(a) {
  return L(a) || a === +a;
}
function va(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0 ? +a : a;
}
function wa(a) {
  if (R(a)) {
    a = 3;
  } else {
    if (T(a)) {
      if (L(a[0])) {
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
function xa(a) {
  return !T(a) && U(a);
}
function ya(a, b, c, d, f) {
  var e = b[1], n = b.slice(2), g;
  "function" === typeof a ? g = n.length ? a(e, n) : a(e) : g = n.length ? a[e](n) : a[e]();
  void 0 !== g && null !== g && "" !== g && (R(g) ? c ? c.splice(d, 1, g) : (b.length = 0, b.push(3, b)) : T(g) ? 11 === g[0] ? c ? (g.shift(), g.unshift(d, 1), c.splice.apply(c, g)) : (b.length = 0, b.push.apply(b, g)) : T(g[0]) ? c ? (g.unshift(d, 1), c.splice.apply(c, g)) : (b.length = 0, b.push(11), b.push.apply(b, g)) : c ? c.splice(d, 1, g) : (b.length = 0, b.push(11, g)) : f("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return g;
}
function za(a, b, c, d, f) {
  var e;
  if (T(d) && L(d[0])) {
    var n = d[0];
    d = d.slice(1);
    "function" === typeof b ? e = d.length ? b(n, d) : b(n) : e = d.length ? b[n](d) : b[n]();
  } else {
    L(d) ? "function" === typeof b ? e = b(d) : e = b[d]() : f("Invalid InstructionAttr value! [" + c + "=" + d + "]");
  }
  return a && T(e) ? za(!0, b, c, e, f) : e;
}
function Aa(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function Ba(a, b, c) {
  a = Aa("" + a);
  var d = a.match('"'), f = a.match("'"), e = b ? "'" : '"';
  if (d && f) {
    a = b ? e + a.split("'").join("\\'") + e : e + a.split('"').join('\\"') + e;
  } else if (d) {
    a = "'" + a + "'";
  } else if (f) {
    a = b ? e + a.split("'").join("\\'") + e : e + a + e;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = e + a + e;
  }
  return a;
}
function O(a) {
  var b = a[0], c = b === +b ? 2 : 1;
  return 1 === wa(a) || 17 === b ? xa(a[c]) ? c + 1 : c : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
function Ca(a) {
  var b = O(a), c = "", d;
  if (b < a.length) {
    for (d = b; d < a.length;) {
      b = a[d];
      var f = wa(b);
      3 === f ? (c = R(b) ? c + b : c + b[1], a.splice(d, 1)) : (c && (a.splice(d, 0, va(c)), c = ""), ++d, 1 !== f && 17 !== f && 13 !== f && 16 !== f || Ca(b));
    }
    c && (a[d] = va(c));
  }
}
function Da(a, b, c, d, f, e) {
  if (!b && d) {
    if (c) {
      a = Ea(Fa(a, "\n"), "\n");
    } else {
      a = a.split("\r\n").join("\n");
      e && (a = a.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
      for (a = a.split("\t").join(" "); 0 <= a.indexOf("\n\n");) {
        a = a.split("\n\n").join("\n");
      }
      if (f) {
        var n = "\n" === a.charAt(0) && /\n[ ]*$/.test(a);
      }
      a = Ea(a, "\n");
      for (a = a.split("\n").join(" "); 0 <= a.indexOf("  ");) {
        a = a.split("  ").join(" ");
      }
      n && (a = Ea(Fa(a, " "), " "));
      a = a.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    }
  }
  return va(a);
}
function Fa(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function Ea(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function Ga(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), d = "", f = "";
  b < c ? (d = a.split(".")[1], a = a.split(".")[0], 0 < b && (f = a.split("#")[1], a = a.split("#")[0])) : c < b && (f = a.split("#")[1], a = a.split("#")[0], 0 < c && (d = a.split(".")[1], a = a.split(".")[0]));
  return [a, f, d];
}
function Ha(a, b, c) {
  b && (a += "#" + b);
  c && (a += "." + c);
  return a;
}
function Ia(a, b) {
  var c = na(b);
  V = !1;
  a(c);
  if (a = V) {
    V = !1, b.length = 0, b.push.apply(b, c.ea()), Ca(b);
  }
  return a;
}
function Ja(a, b) {
  function c(f) {
    var e = f[0], n = f[1], g = e, l = 1;
    switch(e) {
      case 9:
      case 11:
      case 13:
      case 16:
        return d(f);
      case 7:
        return !0;
      case 1:
      case 17:
        g = n, l = 2;
      default:
        if (L(g)) {
          if (e = xa(f[l])) {
            a: {
              l = f[l];
              for (var v in l) {
                if (0 === v.indexOf(b)) {
                  e = !0;
                  break a;
                }
              }
              e = !1;
            }
          }
          return e ? !0 : d(f);
        }
    }
    return !1;
  }
  function d(f) {
    for (var e = O(f), n = f.length, g; e < n; ++e) {
      if (g = f[e], T(g) && c(g)) {
        return !0;
      }
    }
    return !1;
  }
  return !c(a);
}
;function Ka(a) {
  return 1 === a.$ || 17 === a.$ || 13 === a.$ || 16 === a.$ || La(a);
}
function La(a) {
  return 9 === a.$ || 11 === a.$;
}
function Ma(a) {
  return a === Na && !a.za;
}
function oa(a, b, c, d, f) {
  if (a === !!a) {
    var e = null;
    this.aa = a;
  } else {
    e = a, this.aa = e.aa;
  }
  if (e) {
    switch(e.$) {
      case 3:
      case 8:
      case 4:
      case 7:
      case 15:
      case 18:
        throw "nodeType:" + e.$ + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (La(this)) {
      throw "nodeType:" + e.$ + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this.ha = e;
  this.$ = c;
  if (e) {
    if (e.ca || (e.ca = []), a = e.ca, 0 <= b && b < a.length) {
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
      this.ma = d;
      break;
    case 7:
      this.ya = f || null;
    case 3:
    case 4:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      this.ja = d;
  }
}
var Na = null, V = !1;
oa.prototype.ea = function() {
  if (this.aa) {
    throw "restricted mode \u3067\u306f getHTMLJSON() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = [this.$], b = this.ca, c;
  switch(this.$) {
    case 1:
      a.length = 0;
    case 17:
      a.push(this.ma);
      xa(this.la) && a.push(this.la);
      break;
    case 18:
      a[1] = this.ma;
      break;
    case 7:
      a[2] = this.ya;
    case 3:
    case 4:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      a[1] = this.ja;
  }
  if (b) {
    var d = 0;
    for (c = b.length; d < c; ++d) {
      a.push(b[d].ea());
    }
  }
  return a;
};
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
      return a.ja;
    default:
      throw "getNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Oa(a, b) {
  if (a.aa && !Ma(a)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setNodeValue() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.ja !== b && (V = !0);
      a.ja = b;
      break;
    default:
      throw "setNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Pa(a) {
  if (1 !== a.$ && 17 !== a.$ && 18 !== a.$) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.ma;
}
function X(a) {
  if (!Ka(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeLength() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca.length;
}
function Y(a, b) {
  if (!Ka(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca[b] || null;
}
oa.prototype.remove = function() {
  if (La(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa && !Ma(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e discard() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (this.aa) {
    return this.za = V = !0, null;
  }
  if (La(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa) {
    throw "restricted mode \u3067\u306f getMyIndex() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = this.ha ? this.ha.ca.indexOf(this) : -1;
  0 <= a && (this.ha.ca.splice(a, 1), this.ha = null, V = !0);
};
function J(a, b, c, d) {
  if (a.aa && (!Ma(a) || !Ka(a))) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (a.aa) {
    return a.da = a.da || [], a.da.push([b, c, d]), V = !0, null;
  }
  var f = X(a);
  if (a.aa) {
    throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  V = !0;
  return new oa(a, f, b, c, d);
}
;function Qa(a, b, c) {
  function d(h, t, B, u) {
    switch(h.$) {
      case 1:
      case 17:
        var C = {};
        u = Pa(h);
        var E = !!ua[u];
        var I = h.la, M = 0, N;
        if (I) {
          for (N in I) {
            var K = aa[N] ? 1 : I[N];
            if ("id" === N) {
              var S = K;
            } else if ("class" === N) {
              var P = K;
            } else {
              if (N.startsWith(F)) {
                var D = f(K);
                D.ia ? (K = [D.ka], x.apply(K, D.ia)) : K = D.ka;
              }
              C[N] = va(K);
              ++M;
            }
          }
        }
        u = Ha(u, S, P);
        if (E && q) {
          for (; D = n(h);) {
            if (l(W(D))) {
              Oa(D, Fa(W(D), "\n"));
              break;
            } else {
              D.remove();
            }
          }
          for (; D = g(h);) {
            if (l(W(D))) {
              Oa(D, Ea(W(D), "\n"));
              break;
            } else {
              D.remove();
            }
          }
        }
        C = M ? [u, C] : [u];
        for (D = 0; D < X(h); ++D) {
          d(Y(h, D), C, E || B, !!ta[u]);
        }
        t.push(C);
        17 !== h.$ || C.unshift(17);
        break;
      case 18:
        t.push([18, Pa(h)]);
        break;
      case 3:
        (E = Da("" + W(h), B, u, q, m, z)) && t.push(E);
        break;
      case 4:
        y && (E = W(h), t.push([4, va(E)]));
        break;
      case 7:
        E = W(h);
        D = f(E);
        C = [7, D.ka];
        D.ia && x.apply(C, D.ia);
        t.push(C);
        break;
      case 8:
        E = W(h);
        if (E.startsWith("[if") && 0 < E.indexOf("<![endif]")) {
          h = Ra(e(E, ">", "<![endif]", !0), !0);
          C = [13, e(E, "[", "]", !1)];
          for (D = 0; D < X(h); ++D) {
            d(Y(h, D), C, B, u);
          }
          (2 < C.length || r) && t.push(C);
        } else if (E.startsWith("{") && 2 < E.indexOf("};")) {
          h = Ra(E.substring(E.indexOf("};") + 2), !0);
          C = [16, e(E, "{", "};", !1)];
          for (D = 0; D < X(h); ++D) {
            d(Y(h, D), C, B, u);
          }
          (2 < C.length || r) && t.push(C);
        } else {
          E.startsWith("[if") && 0 < E.indexOf("><!") ? (t.push([14, e(E, "[", "]", !1)]), p = !0) : "<![endif]" === E && p ? (B = t[t.length - 1], r || !B || 14 !== B[0] ? t.push([15]) : B && t.pop(), p = !1) : w && t.push([8, va(E)]);
        }
        break;
      case 9:
        E = W(h);
        q && (E = E.split("\n").join(" ").split("  ").join(" "));
        C = [9, E];
        t.push(C);
        for (D = 0; D < X(h); ++D) {
          d(Y(h, D), C, !1, !1);
        }
        break;
      case 11:
        for (C = [11], t.push(C), D = 0; D < X(h); ++D) {
          d(Y(h, D), C, B, u);
        }
    }
  }
  function f(h) {
    var t = h.indexOf(A), B = Ea(Fa(-1 === t ? h : h.substr(0, t), " "), " ");
    h = -1 === t ? [] : JSON.parse("[" + h.substring(t + A.length, h.lastIndexOf(k) - 2) + "]");
    return h.length ? {ka:B, ia:h} : {ka:B};
  }
  function e(h, t, B, u) {
    t = h.indexOf(t) + t.length;
    B = u ? h.lastIndexOf(B) : h.indexOf(B, t);
    return h.substring(t, B);
  }
  function n(h) {
    for (var t = 0, B = X(h), u; t < B; ++t) {
      if (u = Y(h, t), 1 !== u.$ && 17 !== u.$ || (u = n(u)), u && 3 === u.$) {
        return u;
      }
    }
  }
  function g(h) {
    for (var t = X(h), B; t;) {
      if (B = Y(h, --t), 1 !== B.$ && 17 !== B.$ || (B = g(B)), B && 3 === B.$) {
        return B;
      }
    }
  }
  function l(h) {
    return h.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const v = [], x = v.push;
  a = Ra(a, b);
  c = c || {};
  const q = -1 === ["none", !1].indexOf(c.trimWhitespaces), m = "aggressive" === c.trimWhitespaces, z = !!c.removeNewlineBetweenFullWidthChars, y = !0 === c.keepCDATASections, w = !0 === c.keepComments, r = !0 === c.keepEmptyConditionalComment, F = c.instructionAttrPrefix || ":";
  c = c.argumentBrackets || "()";
  const A = c.substr(0, c.length / 2), k = c.substr(c.length);
  let p = !1;
  d(a, v, !1, !1);
  Ca(v[0]);
  return v[0];
}
function Ra(a, b) {
  b = new Sa(b);
  ea(a, b);
  return b.aa;
}
function Sa(a) {
  this.ca = a;
  this.$ = this.aa = new oa(!1, 0, 11);
}
function ja(a, b) {
  var c = a.aa;
  if (c.aa) {
    throw "restricted mode \u3067\u306f setNodeType() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (11 !== c.$) {
    throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
  }
  9 !== c.$ && (V = !0);
  c.$ = 9;
  Oa(a.aa, b);
}
function ia(a, b, c, d) {
  if (d) {
    a = a.$;
    if (a.aa && (!Ma(a) || !Ka(a))) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (a.aa) {
      a.da = a.da || [], a.da.push([1, b, c, void 0]);
    } else {
      d = X(a);
      if (a.aa) {
        throw "restricted mode \u3067\u306f insertElementAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      new oa(a, d, 1, b, c);
    }
    V = !0;
  } else {
    a.$ = J(a.$, 17, b, c);
  }
}
function ha(a, b, c, d) {
  if (d) {
    a.ca && J(a.$, 18, b);
  } else if (!c || !a.ca) {
    if (b === Pa(a.$)) {
      b = a.$;
      if (b.aa) {
        throw "restricted mode \u3067\u306f finalize() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      if (17 !== b.$) {
        throw "finalize() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      1 !== b.$ && (V = !0);
      b.$ = 1;
      b = a.$;
      if (La(b)) {
        throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      if (b.aa && !Ma(b)) {
        throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e getParent() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      a.$ = b.ha;
    } else {
      throw "End tag error! " + b;
    }
  }
}
function fa(a, b) {
  J(a.$, 3, b);
}
function ma(a, b) {
  J(a.$, 8, b);
}
function la(a, b) {
  J(a.$, 4, b);
}
function ka(a, b) {
  J(a.$, 7, b);
}
;function Ta(a) {
  a && (a = Ua(a), this.$ = a + ("/" === a.charAt(a.length - 1) ? "" : "/"));
}
function Va(a, b) {
  if (!a.$) {
    throw "absoluteDirectoryPathOfRoot is empty!";
  }
  return 0 === b.indexOf(a.$);
}
function Ua(a) {
  return a.split("\\").join("/");
}
function Wa(a, b, c) {
  if (Va(a, c) || "/" === c.charAt(0)) {
    b = c;
  } else {
    if ("/" !== b.charAt(0)) {
      throw b + " is not a root relative path!";
    }
    var d;
    (d = "/" === c.charAt(0)) || (d = a.$ ? Va(a, c) || Xa(c) : Xa(c));
    if (d) {
      throw c + " is not a relative path!";
    }
    a = c;
    b = b.split("/");
    b.pop();
    "" === b[0] && b.shift();
    for ("./" === a.substr(0, 2) && (a = a.substr(2)); "../" === a.substr(0, 3);) {
      a = a.substr(3), --b.length;
    }
    b = b.join("/") + "/" + a;
  }
  return b;
}
function Xa(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
}
;var Ya = !1, Za = !1, $a = !1, ab = !1;
function Z(a) {
  a = Z.oa(a);
  Ya && (a.html2json = Ya);
  Za && (a.generator = Za);
  $a && (a.json2json = $a);
  ab && (a.json2html = ab);
  return a;
}
Z.oa = function(a) {
  var b = a || {};
  a = require("path").resolve(b.srcRootPath || "./") + "/";
  const c = new Ta(a), d = b.allPagesPath && Wa(c, "/", b.allPagesPath), f = b.dynamicPagesPath && Wa(c, "/", b.dynamicPagesPath), e = Wa(c, "/", b.allMixinsPath || "all-mixins.json");
  b = Wa(c, "/", b.allTempletesPath || "all-templetes.json");
  return {ta:Ua(a), pa:d || "", wa:f || "", ua:e, va:b, sa:Z.ba.ra(b), Aa:Z.ba.ra(e), path:c};
};
Z.fa = {};
Z.ba = {};
Z.fa.ga = !0;
Z.ba.ea = function(a) {
  a = a[0];
  if (Z.fa.ga && !T(a)) {
    throw "Not html.json! " + JSON.stringify(a);
  }
  return a;
};
Z.ba.na = function(a) {
  a = Z.ba.ea(a)[0];
  return !T(a) && U(a) ? a : null;
};
Z.ba.Ba = function(a, b) {
  const c = b.split("/");
  a.FILE_NAME = c.pop();
  a.FOLDER_PATH = c.join("/");
  b = b.split("index.html");
  b[b.length - 1] || b.pop();
  b = b.join("index.html");
  a.URL = b;
};
Z.ba.ra = function(a) {
  let b = Ua(a).split(".json");
  if (Z.fa.ga && b[b.length - 1]) {
    throw a + " is not .json file path!";
  }
  b.pop();
  b = b.join(".json").split("/");
  return b.pop().split(".").pop();
};
Z.ba.xa = function(a) {
  return bb(a, function(b, c) {
    return ("SCRIPT" === b || "script" === b) && c && ("application/json" === c.type || "nice-page-builder/object" === c.type) || !1;
  });
};
Z.ba.qa = function(a, b) {
  return bb(a, function(c) {
    return "SLOT" === c || "slot" === c;
  }, b);
};
function bb(a, b, c) {
  function d(n) {
    let g = O(n), l = n.length;
    for (var v; g < l; ++g) {
      var x = n[g], q;
      if (q = T(x)) {
        a: {
          v = x;
          q = n;
          x = g;
          var m = v[0];
          const z = v[1];
          let y = m, w = 1;
          switch(m) {
            case 9:
            case 11:
            case 13:
            case 16:
              v = d(v);
              break a;
            case 1:
            case 17:
              y = z, w = 2;
            default:
              if (L(y)) {
                m = v[w];
                v = b(y, xa(m) ? m : null) ? [v, q, x] : d(v);
                break a;
              }
          }
          v = void 0;
        }
        q = v;
      }
      if (q) {
        return v;
      }
    }
  }
  let f = a[0], e;
  return !T(f) && U(f) ? (a.shift(), e = d(a), !c && (a.unshift(f), e && e[1] === a) ? [e[0], a, ++e[2]] : e) : d(a);
}
;Z.html2json = !0;
Ya = function(a, b, c) {
  a = Qa(a, b, c);
  if (b = Z.ba.xa(a)) {
    c = b[0], b[1].splice(b[2], 1), c && 3 === c.length && (b = eval("(" + c[2] + ");"), !T(b) && U(b) && a.unshift(b));
  }
  return a;
};
function cb(a) {
  const b = this, c = require("plugin-error"), d = require("vinyl"), f = {}, e = {}, n = {};
  return require("through2").obj(function(g, l, v) {
    var x = Ua(g.path);
    if (g.isNull()) {
      return v();
    }
    if (g.isStream()) {
      return this.emit("error", new c("NicePageBuilder.gulp.html2json", "Streaming not supported")), v();
    }
    if (0 !== x.indexOf(b.ta)) {
      return this.emit("error", new c("NicePageBuilder.gulp.html2json", '"' + x + '" is outside of srcRootPath:"' + b.ta + '"')), v();
    }
    const q = g.contents.toString(l);
    l = parseInt(g.stat.birthtimeMs, 10);
    const m = parseInt(g.stat.ctimeMs, 10);
    var z = b.path;
    if (!z.$) {
      throw "absoluteDirectoryPathOfRoot is empty!";
    }
    if (!Va(z, x)) {
      throw x + " is not a absolute path!";
    }
    x = Ua(x).substr(z.$.length - 1);
    switch(g.extname) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        g = Ya.call(b, q, !1, a);
        f[x] = [g, l, m];
        break;
      case ".json":
        g = JSON.parse(q);
        U(g) && (n[x] = [g, l, m]);
        break;
      default:
        this.push(g);
    }
    v();
  }, function(g) {
    function l(w, r, F, A) {
      if (r) {
        for (let p = 0, h = r.length; p < h; ++p) {
          const t = Wa(b.path, w, r[p]);
          var k = n[t];
          r[p] = t;
          if (k && 3 === k.length) {
            k.push(!0), k = k[0], A ? k.MIXINS && (Z.fa.ga && console.log('Mixin:"' + t + '" cannot have MIXINS property!'), delete k.MIXINS) : l(t, k.MIXINS, F, !0), F || v(t, k.TEMPLETE, k);
          } else if (!k) {
            throw 'Mixin:"' + t + '" required by "' + w + '" does not exist!';
          }
        }
      }
    }
    function v(w, r, F) {
      for (; r;) {
        r = Wa(b.path, w, r);
        const A = f[r];
        if (A) {
          if (delete f[r], e[r] = A, F.TEMPLETE = w = r, F = Z.ba.na(A)) {
            l(w, F.MIXINS, !!F.TEMPLETE, !1), r = F.TEMPLETE;
          } else {
            break;
          }
        } else if (e[r]) {
          break;
        } else {
          throw 'Templete:"' + r + '" required by "' + w + '" does not exist!';
        }
      }
    }
    function x(w, r) {
      w = new d({base:"/", path:w, contents:Buffer.from(JSON.stringify(r))});
      w.extname = ".json";
      y.push(w);
    }
    for (var q in f) {
      var m = f[q];
      let w = Z.ba.na(m);
      w && (l(q, w.MIXINS, !!w.TEMPLETE, !1), v(q, w.TEMPLETE, w), f[q] && m.push(!0));
    }
    for (const w in n) {
      3 === n[w].length && (Z.fa.ga && console.log("Unused mixin found! " + w), delete n[w]);
    }
    for (var z in f) {
      q = f[z], m = Z.ba.ea(q), 3 === q.length && Z.ba.qa(m, !1) && (Z.fa.ga && console.log("Unused templete found! " + z), delete f[z]);
    }
    const y = this;
    b.pa && x(b.pa, f);
    x(b.ua, n);
    x(b.va, e);
    for (const w in f) {
      z = f[w], delete f[w], q = z[0], m = q[0], m = !T(m) && U(m) ? m : {}, m.FILE_PATH = w, m.CREATED_AT = z[1], m.MODIFIED_AT = z[2], m !== q[0] && q.unshift(m), x(w + ".json", q);
    }
    g();
  });
}
;Z.generator = !0;
Za = function(a, b, c) {
  function d(x) {
    if (x) {
      for (let q = 0; q < x.length; ++q) {
        const m = c[x[q]];
        f(m[0], m[2]);
      }
    }
  }
  function f(x, q) {
    let m = 0;
    for (const z in x) {
      "TEMPLETE" === z ? (l = l || x[z], l === x[z] && ++m) : void 0 === e[z] && (e[z] = x[z], ++m);
    }
    m && g < q && (g = q);
  }
  const e = !T(a[0]) && U(a[0]) ? a[0] : null;
  if (!e) {
    return a;
  }
  const n = [];
  let g = e.MODIFIED_AT, l = e.TEMPLETE;
  d(e.MIXINS);
  for (l && (n[0] = l); l;) {
    var v = b[l];
    const x = Z.ba.na(v);
    l = "";
    x && (f(x, v[2]), d(x.MIXINS), n.push(l));
  }
  for (; n.length;) {
    v = b[n.shift()], a = db(Z.ba.ea(v), a);
  }
  delete e.TEMPLETE;
  delete e.MIXINS;
  e.UPDATED_AT = g;
  return a;
};
function db(a, b) {
  a = JSON.parse(JSON.stringify(a));
  var c = Z.ba.qa(a, !0);
  if (c) {
    const d = c[1];
    c = c[2];
    let f;
    !T(b[0]) && U(b[0]) && (f = b.shift());
    let e = O(b), n = b.length;
    d.splice(c, 1);
    for (c -= e; e < n; ++e) {
      d.splice(c + e, 0, b[e]);
    }
    f && a.unshift(f);
  }
  return a;
}
function eb() {
  const a = this, b = require("plugin-error"), c = require("vinyl"), d = {};
  let f, e;
  return require("through2").obj(function(n, g, l) {
    if (n.isNull()) {
      return l();
    }
    if (n.isStream()) {
      return this.emit("error", new b("NicePageBuilder.gulp.generator", "Streaming not supported")), l();
    }
    if (".json" !== n.extname) {
      return this.push(n), l();
    }
    g = JSON.parse(n.contents.toString(g));
    switch(n.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        return d[g[0].FILE_PATH] = g, l();
      case a.sa:
        !T(g) && U(g) && (f = g);
        break;
      case a.Aa:
        !T(g) && U(g) && (e = g);
    }
    this.push(n);
    l();
  }, function(n) {
    for (const g in d) {
      const l = Za.call(a, d[g], f, e);
      delete d[g];
      this.push(new c({base:"/", path:g + ".json", contents:Buffer.from(JSON.stringify(l))}));
    }
    n();
  });
}
;function fb(a, b, c, d, f) {
  function e(k, p, h, t, B, u) {
    var C = k[0], E = k[1], I = 1, M = C, N;
    switch(C) {
      case 9:
      case 11:
        n(k, t, B, u);
        break;
      case 3:
        E = Da("" + E, B, u, v, x, q);
        if ("" !== E) {
          p[h] = E;
        } else {
          return p.splice(h, 1), -1;
        }
        break;
      case 4:
        if (!m && p) {
          return p.splice(h, 1), -1;
        }
        break;
      case 8:
        if (!z && p) {
          return p.splice(h, 1), -1;
        }
        break;
      case 13:
        n(k, t, B, u);
        if (!y && p && 2 === k.length) {
          return p.splice(h, 1), -1;
        }
        break;
      case 15:
        k = p[h - 1];
        if (!y && k && 14 === k[0] && k) {
          return p.splice(h - 1, 2), -2;
        }
        break;
      case 16:
        n(k, t, B, u);
        if (!y && p && 2 === k.length) {
          return p.splice(h, 1), -1;
        }
        break;
      case 7:
        if (g) {
          if (k = ya(g, k, p, h, l), void 0 !== k) {
            if (null === k || "" === k) {
              return p ? p.splice(h, 1) : (a.length = 0, a.push(8, "")), -1;
            }
            if (!R(k) && T(k)) {
              return -1;
            }
          } else {
            A = !1;
          }
        } else {
          l("onInstruction is void!");
        }
        break;
      case 1:
      case 17:
        M = E, I = 2;
      default:
        if (L(M)) {
          if (1 + I <= k.length) {
            p = k[I];
            if (xa(p)) {
              h = I - 1;
              u = 0;
              var K;
              C = Ga(k[h]);
              E = C[1];
              var S = C[2];
              C = C[0];
              for (Q in p) {
                var P = Q;
                var D = p[Q];
                if (K = 0 === Q.indexOf(w)) {
                  var Q = Q.substr(w.length);
                  "className" === Q && (Q = "class");
                  g ? D = za(!1, g, Q, D, l) : l("onInstruction is void!");
                  if (void 0 !== D) {
                    if (delete p[P], T(D)) {
                      L(D[0]) ? (p[P] = D, A = !1, ++u) : l("Invalid dynamic attribute callback value! [" + P + "=" + D + "]");
                    } else if ((!aa[Q] || !1 !== D) && null !== D) {
                      if (L(D)) {
                        if ("id" === Q) {
                          E = D;
                          continue;
                        } else if ("class" === Q) {
                          P = D.split(" ");
                          for (D = P.length; D;) {
                            K = P[--D], -1 === (" " + S + " ").indexOf(" " + K + " ") && (S = (S ? " " : "") + K);
                          }
                          continue;
                        }
                      }
                      p[Q] = D;
                      ++u;
                    }
                  } else {
                    A = !1, ++u;
                  }
                } else {
                  ++u;
                }
              }
              k[h] = Ha(C, E, S);
              0 === u && k.splice(I, 1);
            }
            r || (N = r = r || ba[M] ? !0 : !1);
            I = !!ua[M];
            n(k, t, I || B, !!ta[M]);
            N && (r = !1);
          }
        } else {
          l("Not html.json! [" + k + "]");
        }
    }
    return 0;
  }
  function n(k, p, h, t) {
    var B = O(k);
    for (p.push(k); B < k.length; ++B) {
      var u = k[B];
      if (!R(u)) {
        if (T(u)) {
          if (u = e(u, k, B, p, h, t)) {
            B += u, F = !0;
          }
        } else {
          l("Invalid html.json! [" + u + "]");
        }
      }
    }
    p.pop();
  }
  var g = b || null;
  b = "function" === typeof c ? c : null;
  var l = "function" === typeof d ? d : function() {
  };
  d = f || {};
  var v = -1 !== ["normal", !0, "aggressive"].indexOf(d.trimWhitespaces), x = "aggressive" === d.trimWhitespaces, q = !!d.removeNewlineBetweenFullWidthChars, m = !1 !== d.keepCDATASections, z = !1 !== d.keepComments, y = !0 === d.keepEmptyConditionalComment, w = d.instructionAttrPrefix || ":", r = !1, F = !1, A = !0;
  if (T(a)) {
    return e(a, null, 0, [], !1, !1), F && Ca(a), b && Ia(b, a) && (A = Ja(a, w)), A;
  }
  l("Invalid html.json document!");
}
;Z.json2json = !0;
$a = function(a, b, c, d, f, e) {
  (c = !T(a[0]) && U(a[0]) ? a[0] : null) && a.shift();
  b = fb(a, b, d, f, e);
  c && a.unshift(c);
  return b;
};
function gb(a, b, c, d, f) {
  const e = this, n = e.wa, g = require("plugin-error"), l = require("through2");
  if (n) {
    var v = [], x = [];
  }
  return l.obj(function(q, m, z) {
    if (q.isNull()) {
      return z();
    }
    if (q.isStream()) {
      return this.emit("error", new g("NicePageBuilder.gulp.json2json", "Streaming not supported")), z();
    }
    if (".json" !== q.extname) {
      return this.push(q), z();
    }
    switch(q.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        var y = JSON.parse(q.contents.toString(m));
        m = y[0].FILE_PATH;
        var w = $a.call(e, y, a, b, c, d, f);
        v && (w || v.push(m));
        q.contents = Buffer.from(JSON.stringify(y));
        break;
      case e.sa:
        m = JSON.parse(q.contents.toString(m));
        for (y in m) {
          w = $a.call(e, Z.ba.ea(m[y]), a, b, c, d, f), x && !w && x.push(y);
        }
        q.contents = Buffer.from(JSON.stringify(m));
    }
    this.push(q);
    z();
  }, v ? function(q) {
    const m = new (require("vinyl"))({base:"/", path:n, contents:Buffer.from(JSON.stringify(v))});
    m.extname = ".json";
    this.push(m);
    q();
  } : null);
}
;function hb(a, b, c, d) {
  function f(y, w, r, F, A) {
    function k() {
      var I = "";
      m && (I = "</" + m + ">", m = "");
      return I;
    }
    var p = "", h = y[0], t = y[1], B = 1, u = h, C;
    switch(h) {
      case 9:
        p = "<!DOCTYPE " + t + ">" + e(y, !1, A);
        break;
      case 11:
        p = e(y, F, A);
        break;
      case 3:
        p = k() + (A ? t : Aa("" + t));
        break;
      case 4:
        L(t) || l("CDATA_SECTION Error! [" + y + "]");
        p = "<![CDATA[" + t + "]]\x3e";
        break;
      case 8:
        L(t) || l("COMMENT_NODE Error! [" + y + "]");
        p = "\x3c!--" + t + "--\x3e";
        break;
      case 13:
        L(t) || l("COND_CMT_HIDE_LOWER Error! [" + y + "]");
        p = k() + "\x3c!--[" + t + "]>" + e(y, !0, A) + "<![endif]--\x3e";
        break;
      case 16:
        L(t) || l("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + y + "]");
        p = k() + "\x3c!--{" + t + "};" + e(y, !0, A) + "--\x3e";
        break;
      case 14:
        L(t) || l("COND_CMT_SHOW_LOWER_START Error! [" + y + "]");
        p = "\x3c!--[" + t + "]>\x3c!--\x3e";
        break;
      case 15:
        p = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (g) {
          if (F = ya(g, y, w, r, l), void 0 !== F && null !== F && "" !== F) {
            if (R(F) || T(F)) {
              return -1;
            }
            l("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(y) + "] result:" + JSON.stringify(F));
          }
        } else {
          l("onInstruction is void!");
        }
        break;
      case 18:
        L(t) || l("ELEMENT_END_TAG Error! [" + y + "]");
        p = "</" + t + ">";
        break;
      case 17:
        var E = !0;
      case 1:
        u = y[1], B = 2;
      default:
        L(u) || l("Not html.json! [" + y + "]"), u = Ga(u), w = u[1], r = u[2], u = u[0], B = y[B], "P" !== m || ra[u] ? m = "" : p = k(), p += "<" + u, w && (p += " id=" + Ba(w, x, z || v)), r && (p += " class=" + Ba(r, x, z || v)), z || (C = z = z || ba[u] ? !0 : !1), xa(B) && (p += n(B)), p = (y = e(y, qa[u], A || sa[u])) ? p + (">" + y) : E ? p + ">" : p + (z ? " />" : ">"), E ? m = "" : z && !y || pa[u] && (!F || "P" !== u) ? m = ca[u] ? "" : u : (p += "</" + u + ">", m = ""), C && (z = !1);
    }
    return p;
  }
  function e(y, w, r) {
    for (var F = [], A = O(y), k = -1, p; A < y.length; ++A) {
      p = y[A], R(p) ? F[++k] = f([3, p], y, A, !1, r) : T(p) ? (p = f(p, y, A, w, r), -1 === p ? --A : F[++k] = p) : l("Invalid html.json! [" + p + "]");
    }
    return F.join("");
  }
  function n(y) {
    var w = "", r, F;
    for (r in y) {
      var A = y[r];
      (F = 0 === r.indexOf(q)) && (r = r.substr(q.length));
      "className" === r && (r = "class");
      F && (g ? A = za(!0, g, r, A, l) : l("onInstruction is void!"));
      if (!(null == A || aa[r] && !1 === A || (w += " " + r, aa[r]))) {
        if ("style" === r && U(A)) {
          F = void 0;
          var k = A, p = [], h = -1;
          for (F in k) {
            A = k[F];
            "0px" === A && (A = 0);
            for (var t = ++h, B, u = [], C = F.split(""), E = C.length; E;) {
              B = C[--E], "A" <= B && "Z" >= B && (B = "-" + B.toLowerCase()), u[E] = B;
            }
            B = u.join("");
            p[t] = B + ":" + Aa("" + A);
          }
          A = p.join(";").substr(1);
          if (!A) {
            continue;
          }
        }
        w += "=" + Ba(A, x, z || v);
      }
    }
    return w;
  }
  var g = b || null, l = "function" === typeof c ? c : function() {
  };
  b = d || {};
  var v = !0 === b.quotAlways, x = !0 === b.useSingleQuot, q = b.instructionAttrPrefix || ":", m, z = !1;
  if (T(a)) {
    return 7 === wa(a) && (a = [11, a]), f(a, null, 0, !1, !1);
  }
  l("Invalid html.json document!");
}
;Z.json2html = !0;
ab = function(a, b, c, d, f) {
  !T(a[0]) && U(a[0]) && a[0] && a.shift();
  return hb(a, b, d, f) || "";
};
function ib(a, b, c, d) {
  const f = this, e = require("plugin-error");
  return require("through2").obj(function(n, g, l) {
    if (n.isNull()) {
      return l();
    }
    if (n.isStream()) {
      return this.emit("error", new e("NicePageBuilder.gulp.json2html", "Streaming not supported")), l();
    }
    if (".json" !== n.extname) {
      return this.push(n), l();
    }
    const v = n.stem.split(".").pop();
    switch(v) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        g = JSON.parse(n.contents.toString(g));
        const x = n.path.split(".json");
        x.pop();
        n.path = x.join(".json");
        n.contents = Buffer.from(ab.call(f, g, a, b, c, d));
        n.extname = "." + v;
    }
    this.push(n);
    l();
  });
}
;Z.module = {};
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
Z.gulp = function(a) {
  a = Z.oa(a);
  Ya && (a.html2json = cb);
  Za && (a.generator = eb);
  $a && (a.json2json = gb);
  ab && (a.json2html = ib);
  return a;
};
Z.all = {};

