var G = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4}, aa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, ba = {xml:!0, svg:!0, math:!0}, 
ca = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, da = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, 
title:!0, plaintext:!0, xmp:!0}, J = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, 
EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, 
SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, 
TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, 
LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
J.LI = J.TD = J.DD;
J.TH = J.DT;
J.RB = J.RP = J.RT = J.P;
J.TFOOT = J.THEAD = J.TBODY;
J.RTC = J.RBC;
function ea(a, b) {
  var c = 0;
  function d() {
    c && (fa(b, k(a.substring(0, c))), a = a.substring(c), c = 0);
  }
  function k(v) {
    return v.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function f(v, A, w) {
    for (var q = 0, D = w.length, h = 3, l, r; h < D && 2 !== q;) {
      r = w.charAt(h);
      switch(q) {
        case 0:
          G[r] & 4 ? q = 1 : ">" === r && (q = 2);
          q && (l = w.substring(2, h));
          break;
        case 1:
          ">" === r && (q = 2);
      }
      ++h;
    }
    return 2 === q ? (ca[l] || x(v, A, C ? l : l.toUpperCase(), !1), h) : 0;
  }
  function x(v, A, w, q) {
    var D = 0, h = v.length;
    if (w) {
      for (D = h; 0 <= D && v[--D] !== w;) {
      }
    }
    if (0 <= D) {
      for (; D < h;) {
        ha(A, v[--h], q && !J[v[h]], !1), C && ba[v[h]] && (C = !!A.da);
      }
      v.length = D;
    } else {
      ha(A, w, !1, !0);
    }
  }
  function e(v, A, w, q) {
    function D(O, H) {
      m[O] = !0 === H ? !0 : aa[O.toLowerCase()] ? C ? k(H || O) : !0 : k(H || "");
      ++y;
    }
    function h() {
      (u = "/>" === q.substr(g, 2)) && ++g;
      return u;
    }
    for (var l = 1, r = q.length, g = 2, m = {}, y = 0, u = !1, B, F, I, P, M, L; g < r && 9 > l;) {
      B = q.charAt(g);
      switch(l) {
        case 1:
          if (G[B] & 4) {
            l = 2, F = q.substring(1, g);
          } else if (">" === B || h()) {
            l = 9, F = q.substring(1, g);
          }
          break;
        case 2:
          ">" === B || h() ? l = 9 : G[B] & 4 || (l = 3, I = g);
          break;
        case 3:
          if ("=" === B) {
            l = 5, P = q.substring(I, g);
          } else if (G[B] & 4) {
            l = 4, P = q.substring(I, g);
          } else if (">" === B || h()) {
            l = 9, D(q.substring(I, g), !0);
          }
          break;
        case 4:
          "=" === B ? l = 5 : ">" === B || h() ? (l = 9, D(P, !0)) : G[B] & 4 || (l = 3, D(P, !0), I = g);
          break;
        case 5:
          '"' === B || "'" === B ? (l = 6, M = B, I = g + 1) : G[B] & 4 || (l = 7, I = g);
          L = !1;
          break;
        case 6:
          L || B !== M || (l = 2, D(P, q.substring(I, g)));
          L = "\\" === B && !L;
          break;
        case 7:
          G[B] & 4 ? l = 2 : ">" === B && (l = 9), 7 !== l && D(P, q.substring(I, g));
      }
      ++g;
    }
    if (9 === l) {
      l = F.toUpperCase();
      C ||= !!ba[F];
      if (!C) {
        for (; A;) {
          if (J[A] && !J[A][l]) {
            x(v, w, A, !1), A = v[v.length - 1];
          } else {
            break;
          }
        }
      }
      (u = u || !!ca[l]) || (v[v.length] = C ? F : l);
      ia(w, C ? F : l, y ? m : null, u);
      return g;
    }
    return 0;
  }
  for (var p = [], C = !!b.da, z = a.length - c, t, n; a;) {
    t = p[p.length - 1];
    if (da[t]) {
      if ("PLAINTEXT" === t || "plaintext" === t) {
        fa(b, k(a)), a = "";
      } else {
        if (n = a.indexOf("</" + (C ? t : t.toLowerCase())), -1 === n && (n = a.indexOf("</" + (C ? t.toUpperCase() : t))), 0 <= n) {
          if (c = n, d(), t = f(p, b, a)) {
            a = a.substring(t);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (d(), n = a.indexOf(">"), -1 !== n) {
        ja(b, a.substring(10, n)), a = a.substring(n + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === c) {
      if (d(), n = a.indexOf("?>"), -1 !== n) {
        ka(b, k(a.substring(2, n))), a = a.substring(n + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (d(), n = a.indexOf("]]\x3e"), -1 !== n) {
        la(b, k(a.substring(9, n))), a = a.substring(n + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (d(), n = a.indexOf("--\x3e"), -1 !== n) {
        ma(b, k(a.substring(4, n))), a = a.substring(n + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === c && G[a.charAt(c + 2)] & 3) {
      if (d(), t = f(p, b, a)) {
        a = a.substring(t);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(c) && G[a.charAt(c + 1)] & 3) {
      if (d(), t = e(p, t, b, a)) {
        a = a.substring(t);
      } else {
        throw a;
      }
    } else {
      n = a.indexOf("<", c), -1 === n ? (fa(b, k(a)), a = "") : c < n ? c = n : ++c;
    }
    t = a.length - c;
    if (t === z) {
      throw a;
    }
    z = t;
  }
  d();
  x(p, b, "", !0);
}
;var na = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, oa = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, pa = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, qa = 
{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ra = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, sa = {PRE:!0, LISTING:!0, pre:!0, listing:!0};
function K(a) {
  return !(!a || a.pop !== [].pop);
}
function N(a) {
  return !(!a || "object" !== typeof a);
}
function Q(a) {
  return "" + a === a;
}
function R(a) {
  return Q(a) || a === +a;
}
function S(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0 ? +a : a;
}
function ta(a) {
  if (R(a)) {
    a = 3;
  } else {
    if (K(a)) {
      if (Q(a[0])) {
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
function T(a) {
  return !K(a) && N(a);
}
function ua(a, b, c, d, k) {
  var f = b[1], x = b.slice(2), e;
  "function" === typeof a ? e = x.length ? a(f, x) : a(f) : e = x.length ? a[f](x) : a[f]();
  void 0 !== e && null !== e && "" !== e && (R(e) ? c ? c.splice(d, 1, e) : (b.length = 0, b.push(3, b)) : K(e) ? 11 === e[0] ? c ? (e.shift(), e.unshift(d, 1), c.splice.apply(c, e)) : (b.length = 0, b.push.apply(b, e)) : K(e[0]) ? c ? (e.unshift(d, 1), c.splice.apply(c, e)) : (b.length = 0, b.push(11), b.push.apply(b, e)) : c ? c.splice(d, 1, e) : (b.length = 0, b.push(11, e)) : k("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return e;
}
function va(a, b, c, d, k) {
  var f;
  if (K(d) && Q(d[0])) {
    var x = d[0];
    d = d.slice(1);
    "function" === typeof b ? f = d.length ? b(x, d) : b(x) : f = d.length ? b[x](d) : b[x]();
  } else {
    Q(d) ? "function" === typeof b ? f = b(d) : f = b[d]() : k("Invalid InstructionAttr value! [" + c + "=" + d + "]");
  }
  return a && K(f) ? va(!0, b, c, f, k) : f;
}
function wa(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function xa(a, b, c) {
  a = wa("" + a);
  var d = a.match('"'), k = a.match("'"), f = b ? "'" : '"';
  if (d && k) {
    a = b ? f + a.split("'").join("\\'") + f : f + a.split('"').join('\\"') + f;
  } else if (d) {
    a = "'" + a + "'";
  } else if (k) {
    a = b ? f + a.split("'").join("\\'") + f : f + a + f;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = f + a + f;
  }
  return a;
}
function ya(a) {
  var b = a[0], c = b === +b ? 2 : 1;
  return 1 === ta(a) || 17 === b ? T(a[c]) ? c + 1 : c : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
function za(a) {
  var b = ya(a), c = "", d;
  if (b < a.length) {
    for (d = b; d < a.length;) {
      b = a[d];
      var k = ta(b);
      3 === k ? (c = R(b) ? c + b : c + b[1], a.splice(d, 1)) : (c && (a.splice(d, 0, S(c)), c = ""), ++d, 1 !== k && 17 !== k && 13 !== k && 16 !== k || za(b));
    }
    c && (a[d] = S(c));
  }
}
function Aa(a, b, c, d, k, f) {
  if (!b && d) {
    if (c) {
      a = Ba(Ca(a, "\n"), "\n");
    } else {
      a = a.split("\r\n").join("\n");
      f && (a = a.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
      for (a = a.split("\t").join(" "); 0 <= a.indexOf("\n\n");) {
        a = a.split("\n\n").join("\n");
      }
      if (k) {
        var x = "\n" === a.charAt(0) && /\n[ ]*$/.test(a);
      }
      a = Ba(a, "\n");
      for (a = a.split("\n").join(" "); 0 <= a.indexOf("  ");) {
        a = a.split("  ").join(" ");
      }
      x && (a = Ba(Ca(a, " "), " "));
      a = a.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    }
  }
  return S(a);
}
function Ca(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function Ba(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function Da(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), d = "", k = "";
  b < c ? (d = a.split(".")[1], a = a.split(".")[0], 0 < b && (k = a.split("#")[1], a = a.split("#")[0])) : c < b && (k = a.split("#")[1], a = a.split("#")[0], 0 < c && (d = a.split(".")[1], a = a.split(".")[0]));
  return [a, k, d];
}
function Ea(a, b, c) {
  b && (a += "#" + b);
  c && (a += "." + c);
  return a;
}
;function Fa(a) {
  return 1 === a.$ || 17 === a.$ || 13 === a.$ || 16 === a.$ || Ga(a);
}
function Ga(a) {
  return 9 === a.$ || 11 === a.$;
}
function Ha(a) {
  return a === Ia && !a.ua;
}
function Ja(a, b, c, d, k) {
  if (a === !!a) {
    var f = null;
    this.aa = a;
  } else {
    f = a, this.aa = f.aa;
  }
  if (f) {
    switch(f.$) {
      case 3:
      case 8:
      case 4:
      case 7:
      case 15:
      case 18:
        throw "nodeType:" + f.$ + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (Ga(this)) {
      throw "nodeType:" + f.$ + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this.fa = f;
  this.$ = c;
  if (f) {
    if (f.ca || (f.ca = []), a = f.ca, 0 <= b && b < a.length) {
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
      this.na = k || null;
    case 18:
      this.wa = d;
      break;
    case 7:
    case 3:
    case 4:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      this.oa = d;
  }
}
var Ia = null;
function U(a) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      return a.oa;
    default:
      throw "getNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Ka(a, b) {
  if (a.aa && !Ha(a)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setNodeValue() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.oa = b;
      break;
    default:
      throw "setNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function La(a) {
  return 1 === a.$ || 17 === a.$;
}
function Ma(a) {
  if (!La(a) && 18 !== a.$) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.wa;
}
function V(a) {
  if (!Fa(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeLength() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca.length;
}
function W(a, b) {
  if (!Fa(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca[b] || null;
}
Ja.prototype.remove = function() {
  if (Ga(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa && !Ha(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e discard() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (this.aa) {
    return this.ua = !0, null;
  }
  if (Ga(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa) {
    throw "restricted mode \u3067\u306f getMyIndex() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = this.fa ? this.fa.ca.indexOf(this) : -1;
  0 <= a && (this.fa.ca.splice(a, 1), this.fa = null);
};
function X(a, b, c, d) {
  if (a.aa && (!Ha(a) || !Fa(a))) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (a.aa) {
    return a.da = a.da || [], a.da.push([b, c, d]), null;
  }
  var k = V(a);
  if (a.aa) {
    throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return new Ja(a, k, b, c, d);
}
;function Na(a, b) {
  b = new Oa(b);
  ea(a, b);
  return b.aa;
}
function Oa(a) {
  this.ca = a;
  this.$ = this.aa = new Ja(!1, 0, 11);
}
function ja(a, b) {
  var c = a.aa;
  if (c.aa) {
    throw "restricted mode \u3067\u306f setNodeType() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (11 !== c.$) {
    throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
  }
  c.$ = 9;
  Ka(a.aa, b);
}
function ia(a, b, c, d) {
  if (d) {
    a = a.$;
    if (a.aa && (!Ha(a) || !Fa(a))) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (a.aa) {
      a.da = a.da || [], a.da.push([1, b, c, void 0]);
    } else {
      d = V(a);
      if (a.aa) {
        throw "restricted mode \u3067\u306f insertElementAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      new Ja(a, d, 1, b, c);
    }
  } else {
    a.$ = X(a.$, 17, b, c);
  }
}
function ha(a, b, c, d) {
  if (d) {
    a.ca && X(a.$, 18, b);
  } else if (!c || !a.ca) {
    if (b === Ma(a.$)) {
      b = a.$;
      if (b.aa) {
        throw "restricted mode \u3067\u306f finalize() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      if (17 !== b.$) {
        throw "finalize() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      b.$ = 1;
      b = a.$;
      if (Ga(b)) {
        throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      if (b.aa && !Ha(b)) {
        throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e getParent() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      a.$ = b.fa;
    } else {
      throw "End tag error! " + b;
    }
  }
}
function fa(a, b) {
  X(a.$, 3, b);
}
function ma(a, b) {
  X(a.$, 8, b);
}
function la(a, b) {
  X(a.$, 4, b);
}
function ka(a, b) {
  X(a.$, 7, b);
}
;function Pa(a, b, c) {
  function d(g, m, y, u) {
    switch(g.$) {
      case 1:
      case 17:
        var B = {};
        u = Ma(g);
        var F = !!sa[u];
        if (!La(g)) {
          throw "getAttrs() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var I = T(g.na) ? g.na : null;
        var P = 0, M;
        if (I) {
          for (M in I) {
            var L = aa[M] ? 1 : I[M];
            if ("id" === M) {
              var O = L;
            } else if ("class" === M) {
              var H = L;
            } else {
              if (M.startsWith(D)) {
                var E = k(L);
                E.ha ? (L = [E.ia], z.apply(L, E.ha)) : L = E.ia;
              }
              B[M] = S(L);
              ++P;
            }
          }
        }
        u = Ea(u, O, H);
        if (F && t) {
          for (; E = x(g);) {
            if (p(U(E))) {
              Ka(E, Ca(U(E), "\n"));
              break;
            } else {
              E.remove();
            }
          }
          for (; E = e(g);) {
            if (p(U(E))) {
              Ka(E, Ba(U(E), "\n"));
              break;
            } else {
              E.remove();
            }
          }
        }
        B = P ? [u, B] : [u];
        for (E = 0; E < V(g); ++E) {
          d(W(g, E), B, F || y, !!ra[u]);
        }
        m.push(B);
        17 !== g.$ || B.unshift(17);
        break;
      case 18:
        m.push([18, Ma(g)]);
        break;
      case 3:
        (F = Aa("" + U(g), y, u, t, n, v)) && m.push(F);
        break;
      case 4:
        A && (F = U(g), m.push([4, S(F)]));
        break;
      case 7:
        F = U(g);
        E = k(F);
        B = [7, E.ia];
        E.ha && z.apply(B, E.ha);
        m.push(B);
        break;
      case 8:
        F = U(g);
        if (F.startsWith("[if") && 0 < F.indexOf("<![endif]")) {
          g = Na(f(F, ">", "<![endif]", !0), !0);
          B = [13, f(F, "[", "]", !1)];
          for (E = 0; E < V(g); ++E) {
            d(W(g, E), B, y, u);
          }
          (2 < B.length || q) && m.push(B);
        } else if (F.startsWith("{") && 2 < F.indexOf("};")) {
          g = Na(F.substring(F.indexOf("};") + 2), !0);
          B = [16, f(F, "{", "};", !1)];
          for (E = 0; E < V(g); ++E) {
            d(W(g, E), B, y, u);
          }
          (2 < B.length || q) && m.push(B);
        } else {
          F.startsWith("[if") && 0 < F.indexOf("><!") ? (m.push([14, f(F, "[", "]", !1)]), r = !0) : "<![endif]" === F && r ? (y = m[m.length - 1], q || !y || 14 !== y[0] ? m.push([15]) : y && m.pop(), r = !1) : w && m.push([8, S(F)]);
        }
        break;
      case 9:
        F = U(g);
        t && (F = F.split("\n").join(" ").split("  ").join(" "));
        B = [9, F];
        m.push(B);
        for (E = 0; E < V(g); ++E) {
          d(W(g, E), B, !1, !1);
        }
        break;
      case 11:
        for (B = [11], m.push(B), E = 0; E < V(g); ++E) {
          d(W(g, E), B, y, u);
        }
    }
  }
  function k(g) {
    var m = g.indexOf(h), y = Ba(Ca(-1 === m ? g : g.substr(0, m), " "), " ");
    g = -1 === m ? [] : JSON.parse("[" + g.substring(m + h.length, g.lastIndexOf(l) - 2) + "]");
    return g.length ? {ia:y, ha:g} : {ia:y};
  }
  function f(g, m, y, u) {
    m = g.indexOf(m) + m.length;
    y = u ? g.lastIndexOf(y) : g.indexOf(y, m);
    return g.substring(m, y);
  }
  function x(g) {
    for (var m = 0, y = V(g), u; m < y; ++m) {
      if (u = W(g, m), La(u) && (u = x(u)), u && 3 === u.$) {
        return u;
      }
    }
  }
  function e(g) {
    for (var m = V(g), y; m;) {
      if (y = W(g, --m), La(y) && (y = e(y)), y && 3 === y.$) {
        return y;
      }
    }
  }
  function p(g) {
    return g.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const C = [], z = C.push;
  a = Na(a, b);
  c = c || {};
  const t = -1 === ["none", !1].indexOf(c.trimWhitespaces), n = "aggressive" === c.trimWhitespaces, v = !!c.removeNewlineBetweenFullWidthChars, A = !0 === c.keepCDATASections, w = !0 === c.keepComments, q = !0 === c.keepEmptyConditionalComment, D = c.instructionAttrPrefix || ":";
  c = c.argumentBrackets || "()";
  const h = c.substr(0, c.length / 2), l = c.substr(c.length);
  let r = !1;
  d(a, C, !1, !1);
  za(C[0]);
  return C[0];
}
;function Qa(a) {
  a && (a = Ra(a), this.$ = a + ("/" === a.charAt(a.length - 1) ? "" : "/"));
}
function Sa(a, b) {
  if (!a.$) {
    throw "absoluteDirectoryPathOfRoot is empty!";
  }
  return 0 === b.indexOf(a.$);
}
function Ra(a) {
  return a.split("\\").join("/");
}
function Y(a, b, c) {
  if (Sa(a, c) || "/" === c.charAt(0)) {
    b = c;
  } else {
    if ("/" !== b.charAt(0)) {
      throw b + " is not a root relative path!";
    }
    var d;
    (d = "/" === c.charAt(0)) || (d = a.$ ? Sa(a, c) || Ta(c) : Ta(c));
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
function Ta(a) {
  return "//" === a.substr(0, 2) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
}
;var Ua = !1, Va = !1, Wa = !1, Xa = !1;
function Z(a) {
  a = Z.la(a);
  Ua && (a.html2json = Ua);
  Va && (a.generator = Va);
  Wa && (a.json2json = Wa);
  Xa && (a.json2html = Xa);
  return a;
}
Z.la = function(a) {
  var b = a || {};
  a = require("path").resolve(b.srcRootPath || "./") + "/";
  const c = new Qa(a), d = b.allPagesPath && Y(c, "/", b.allPagesPath), k = b.dynamicPagesPath && Y(c, "/", b.dynamicPagesPath), f = Y(c, "/", b.allMixinsPath || "all.mixins.json");
  b = Y(c, "/", b.allTempletesPath || "all.templetes.json");
  return {qa:Ra(a), ma:d || "", ta:k || "", ra:f, sa:b, path:c};
};
Z.ea = {};
Z.ba = {};
Z.ea.ga = !0;
Z.ba.ka = function(a) {
  a = a[0];
  if (Z.ea.ga && !K(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
Z.ba.ja = function(a) {
  a = Z.ba.ka(a)[0];
  return !K(a) && N(a) ? a : null;
};
Z.ba.va = function(a) {
  return Ya(a, function(b, c) {
    return ("SCRIPT" === b || "script" === b) && c && ("application/json" === c.type || "nice-page-builder/object" === c.type) || !1;
  });
};
Z.ba.pa = function(a) {
  return Ya(a, function(b) {
    return "SLOT" === b || "slot" === b;
  });
};
function Ya(a, b) {
  function c(f) {
    let x = ya(f), e = f.length;
    for (var p; x < e; ++x) {
      var C = f[x], z;
      if (z = !R(C)) {
        if (z = K(C)) {
          a: {
            p = C;
            C = f;
            z = x;
            var t = p[0];
            const n = p[1];
            let v = t, A = 1;
            switch(t) {
              case 9:
              case 11:
              case 13:
              case 16:
                p = c(p);
                break a;
              case 1:
              case 17:
                v = n, A = 2;
              default:
                if (Q(v)) {
                  t = p[A];
                  p = b(v, T(t) ? t : null) ? [p, C, z] : c(p);
                  break a;
                }
            }
            p = void 0;
          }
          z = p;
        }
      }
      if (z) {
        return p;
      }
    }
  }
  let d = a[0], k;
  return !K(d) && N(d) ? (a.shift(), k = c(a), a.unshift(d), k && k[1] === a ? [k[0], a, ++k[2]] : k) : c(a);
}
;Z.html2json = !0;
Ua = function(a, b, c) {
  a = Pa(a, b, c);
  if (b = Z.ba.va(a)) {
    c = b[0], b[1].splice(b[2], 1), c && 3 === c.length && (b = eval("(" + c[2] + ");"), !K(b) && N(b) && a.unshift(b));
  }
  return a;
};
function Za(a) {
  const b = this, c = require("plugin-error"), d = require("vinyl"), k = {}, f = {}, x = {};
  return require("through2").obj(function(e, p, C) {
    var z = Ra(e.path);
    if (e.isNull()) {
      return C();
    }
    if (e.isStream()) {
      return this.emit("error", new c("NicePageBuilder.gulp.html2json", "Streaming not supported")), C();
    }
    if (0 !== z.indexOf(b.qa)) {
      return this.emit("error", new c("NicePageBuilder.gulp.html2json", '"' + z + '" is outside of srcRootPath:"' + b.qa + '"')), C();
    }
    const t = e.contents.toString(p);
    p = parseInt(e.stat.birthtimeMs, 10);
    const n = parseInt(e.stat.ctimeMs, 10);
    var v = b.path;
    if (!v.$) {
      throw "absoluteDirectoryPathOfRoot is empty!";
    }
    if (!Sa(v, z)) {
      throw z + " is not a absolute path!";
    }
    z = Ra(z).substr(v.$.length - 1);
    switch(e.extname) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        e = Ua.call(b, t, !1, a);
        k[z] = [e, p, n];
        break;
      case ".json":
        e = JSON.parse(t);
        N(e) && (x[z] = [e, p, n]);
        break;
      default:
        this.push(e);
    }
    C();
  }, function(e) {
    function p(w, q, D, h) {
      if (q) {
        for (let r = 0, g = q.length; r < g; ++r) {
          const m = Y(b.path, w, q[r]);
          var l = x[m];
          q[r] = m;
          if (l && 3 === l.length) {
            l.push(!0), l = l[0], h ? l.MIXINS && (Z.ea.ga && console.log('Mixin:"' + m + '" cannot have MIXINS property!'), delete l.MIXINS) : p(m, l.MIXINS, D, !0), D || C(m, l.TEMPLETE, l);
          } else if (!l) {
            throw 'Mixin:"' + m + '" required by "' + w + '" does not exist!';
          }
        }
      }
    }
    function C(w, q, D) {
      for (; q;) {
        q = Y(b.path, w, q);
        const h = k[q];
        if (h) {
          if (delete k[q], f[q] = h, D.TEMPLETE = w = q, D = Z.ba.ja(h)) {
            p(w, D.MIXINS, !!D.TEMPLETE, !1), q = D.TEMPLETE;
          } else {
            break;
          }
        } else if (f[q]) {
          break;
        } else {
          throw 'Templete:"' + q + '" required by "' + w + '" does not exist!';
        }
      }
    }
    function z(w, q) {
      w = new d({base:"/", path:w, contents:Buffer.from(JSON.stringify(q))});
      w.extname = ".json";
      A.push(w);
    }
    for (var t in k) {
      var n = k[t];
      let w = Z.ba.ja(n);
      w && (p(t, w.MIXINS, !!w.TEMPLETE, !1), C(t, w.TEMPLETE, w), k[t] && n.push(!0));
    }
    for (const w in x) {
      3 === x[w].length && (Z.ea.ga && console.log("Unused mixin found! " + w), delete x[w]);
    }
    for (var v in k) {
      t = k[v], n = Z.ba.ka(t), 3 === t.length && Z.ba.pa(n) && (Z.ea.ga && console.log("Unused templete found! " + v), delete k[v]);
    }
    const A = this;
    b.ma && z(b.ma, k);
    z(b.ra, x);
    z(b.sa, f);
    for (const w in k) {
      v = k[w], delete k[w], t = v[0], n = t[0], n = !K(n) && N(n) ? n : {}, n.FILE_PATH = w, n.CREATED_AT = v[1], n.MODIFIED_AT = v[2], n !== t[0] && t.unshift(n), z(w + ".json", t);
    }
    e();
  });
}
;Z.generator = !0;
Va = function(a, b, c) {
  function d(z) {
    if (z) {
      for (let t = 0; t < z.length; ++t) {
        const n = c[z[t]];
        k(n[0], n[2]);
      }
    }
  }
  function k(z, t) {
    let n = 0;
    for (const v in z) {
      "TEMPLETE" === v ? (e = e || z[v], e === z[v] && ++n) : void 0 === f[v] && (f[v] = z[v], ++n);
    }
    n && x < t && (x = t);
  }
  const f = !K(a[0]) && N(a[0]) ? a[0] : null;
  if (!f) {
    return a;
  }
  let x = f.MODIFIED_AT, e = f.TEMPLETE;
  for (d(f.MIXINS); e;) {
    var p = b[e], C = Z.ba.ja(p);
    e = "";
    C && (k(C, p[2]), d(C.MIXINS));
  }
  for (e = f.TEMPLETE; e;) {
    p = b[e], C = Z.ba.ja(p), a = $a(Z.ba.ka(p), a), C ? e = C.TEMPLETE : e = "";
  }
  delete f.TEMPLETE;
  delete f.MIXINS;
  f.UPDATED_AT = x;
  return a;
};
function $a(a, b) {
  a = JSON.parse(JSON.stringify(a));
  var c = Z.ba.pa(a);
  if (c) {
    const d = c[1];
    c = c[2];
    let k;
    T(b[0]) && (k = b.shift());
    let f = ya(b), x = b.length;
    d.splice(c, 1);
    for (c -= f; f < x; ++f) {
      d.splice(c + f, 0, b[f]);
    }
    k && a.unshift(k);
  }
  return a;
}
function ab() {
  const a = this, b = require("plugin-error"), c = require("vinyl"), d = {};
  let k, f;
  return require("through2").obj(function(x, e, p) {
    if (x.isNull()) {
      return p();
    }
    if (x.isStream()) {
      return this.emit("error", new b("NicePageBuilder.gulp.generator", "Streaming not supported")), p();
    }
    if (".json" !== x.extname) {
      return this.push(x), p();
    }
    e = JSON.parse(x.contents.toString(e));
    switch(x.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        return d[e[0].FILE_PATH] = e, p();
      case "templetes":
        !K(e) && N(e) && (k = e);
        break;
      case "mixins":
        !K(e) && N(e) && (f = e);
    }
    this.push(x);
    p();
  }, function(x) {
    for (const e in d) {
      const p = Va.call(a, d[e], k, f);
      delete d[e];
      this.push(new c({base:"/", path:e + ".json", contents:Buffer.from(JSON.stringify(p))}));
    }
    x();
  });
}
;function bb(a, b, c, d) {
  function k(h, l, r, g, m, y) {
    var u = h[0], B = h[1], F = 1, I = u, P;
    switch(u) {
      case 9:
        f(h, g, m, y);
        break;
      case 11:
        f(h, g, m, y);
        break;
      case 3:
        B = Aa("" + B, m, y, p, C, z);
        if ("" !== B) {
          l[r] = B;
        } else {
          return l.splice(r, 1), -1;
        }
        break;
      case 4:
        if (!t && l) {
          return l.splice(r, 1), -1;
        }
        break;
      case 8:
        if (!n && l) {
          return l.splice(r, 1), -1;
        }
        break;
      case 13:
        f(h, g, m, y);
        if (!v && l && 2 === h.length) {
          return l.splice(r, 1), -1;
        }
        break;
      case 15:
        h = l[r - 1];
        if (!v && h && 14 === h[0] && h) {
          return l.splice(r - 1, 2), -2;
        }
        break;
      case 16:
        f(h, g, m, y);
        if (!v && l && 2 === h.length) {
          return l.splice(r, 1), -1;
        }
        break;
      case 7:
        if (x) {
          if (h = ua(x, h, l, r, e), void 0 !== h) {
            if (null === h || "" === h) {
              return l ? l.splice(r, 1) : (a.length = 0, a.push(8, "")), -1;
            }
            if (!R(h) && K(h)) {
              return -1;
            }
          } else {
            D = !1;
          }
        } else {
          e("onInstruction is void!");
        }
        break;
      case 1:
      case 17:
        I = B, F = 2;
      default:
        if (Q(I)) {
          if (1 + F <= h.length) {
            l = h[F];
            if (T(l)) {
              r = F - 1;
              y = 0;
              var M;
              u = Da(h[r]);
              B = u[1];
              var L = u[2];
              u = u[0];
              for (E in l) {
                var O = E;
                var H = l[E];
                if (M = 0 === E.indexOf(A)) {
                  var E = E.substr(A.length);
                  "className" === E && (E = "class");
                  x ? H = va(!1, x, E, H, e) : e("onInstruction is void!");
                  if (void 0 !== H) {
                    if (delete l[O], K(H)) {
                      Q(H[0]) ? (l[O] = H, D = !1, ++y) : e("Invalid dynamic attribute callback value! [" + O + "=" + H + "]");
                    } else if ((!aa[E] || !1 !== H) && null !== H) {
                      if (Q(H)) {
                        if ("id" === E) {
                          B = H;
                          continue;
                        } else if ("class" === E) {
                          O = H.split(" ");
                          for (H = O.length; H;) {
                            M = O[--H], -1 === (" " + L + " ").indexOf(" " + M + " ") && (L = (L ? " " : "") + M);
                          }
                          continue;
                        }
                      }
                      l[E] = H;
                      ++y;
                    }
                  } else {
                    D = !1, ++y;
                  }
                } else {
                  ++y;
                }
              }
              h[r] = Ea(u, B, L);
              0 === y && h.splice(F, 1);
            }
            w || (P = w = w || ba[I] ? !0 : !1);
            F = !!sa[I];
            f(h, g, F || m, !!ra[I]);
            P && (w = !1);
          }
        } else {
          e("Not html.json! [" + h + "]");
        }
    }
    return 0;
  }
  function f(h, l, r, g) {
    var m = ya(h);
    for (l.push(h); m < h.length; ++m) {
      var y = h[m];
      if (!R(y)) {
        if (K(y)) {
          if (y = k(y, h, m, l, r, g)) {
            m += y, q = !0;
          }
        } else {
          e("Invalid html.json! [" + y + "]");
        }
      }
    }
    l.pop();
  }
  var x = b || null, e = "function" === typeof c ? c : function() {
  };
  b = d || {};
  var p = -1 !== ["normal", !0, "aggressive"].indexOf(b.trimWhitespaces), C = "aggressive" === b.trimWhitespaces, z = !!b.removeNewlineBetweenFullWidthChars, t = !1 !== b.keepCDATASections, n = !1 !== b.keepComments, v = !0 === b.keepEmptyConditionalComment, A = b.instructionAttrPrefix || ":", w = !1, q = !1, D = !0;
  if (K(a)) {
    return k(a, null, 0, [], !1, !1), q && za(a), D;
  }
  e("Invalid html.json document!");
}
;Z.json2json = !0;
Wa = function(a, b, c, d, k, f) {
  c = a.shift();
  b = bb(a, b, k, f);
  a.unshift(c);
  return b;
};
function cb(a, b, c, d, k) {
  const f = this, x = f.ta, e = require("plugin-error"), p = require("through2");
  if (x) {
    var C = [];
  }
  return p.obj(function(z, t, n) {
    if (z.isNull()) {
      return n();
    }
    if (z.isStream()) {
      return this.emit("error", new e("NicePageBuilder.gulp.json2json", "Streaming not supported")), n();
    }
    if (".json" !== z.extname) {
      return this.push(z), n();
    }
    const v = z.stem.split(".").pop();
    switch(v) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        t = JSON.parse(z.contents.toString(t));
        const A = t[0].FILE_PATH, w = Wa.call(f, t, a, b, c, d, k);
        C && !w && C.push(A);
        z.path = A;
        z.contents = Buffer.from(JSON.stringify(t));
        z.extname = "." + v;
    }
    this.push(z);
    n();
  }, C ? function(z) {
    const t = new (require("vinyl"))({base:"/", path:x, contents:Buffer.from(JSON.stringify(C))});
    t.extname = ".json";
    this.push(t);
    z();
  } : null);
}
;function db(a, b, c, d) {
  function k(A, w, q, D, h) {
    function l() {
      var I = "";
      n && (I = "</" + n + ">", n = "");
      return I;
    }
    var r = "", g = A[0], m = A[1], y = 1, u = g, B;
    switch(g) {
      case 9:
        r = "<!DOCTYPE " + m + ">" + f(A, !1, h);
        break;
      case 11:
        r = f(A, D, h);
        break;
      case 3:
        r = l() + (h ? m : wa("" + m));
        break;
      case 4:
        Q(m) || p("CDATA_SECTION Error! [" + A + "]");
        r = "<![CDATA[" + m + "]]\x3e";
        break;
      case 8:
        Q(m) || p("COMMENT_NODE Error! [" + A + "]");
        r = "\x3c!--" + m + "--\x3e";
        break;
      case 13:
        Q(m) || p("COND_CMT_HIDE_LOWER Error! [" + A + "]");
        r = l() + "\x3c!--[" + m + "]>" + f(A, !0, h) + "<![endif]--\x3e";
        break;
      case 16:
        Q(m) || p("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + A + "]");
        r = l() + "\x3c!--{" + m + "};" + f(A, !0, h) + "--\x3e";
        break;
      case 14:
        Q(m) || p("COND_CMT_SHOW_LOWER_START Error! [" + A + "]");
        r = "\x3c!--[" + m + "]>\x3c!--\x3e";
        break;
      case 15:
        r = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (e) {
          if (D = ua(e, A, w, q, p), void 0 !== D && null !== D && "" !== D) {
            if (R(D) || K(D)) {
              return -1;
            }
            p("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(A) + "] result:" + JSON.stringify(D));
          }
        } else {
          p("onInstruction is void!");
        }
        break;
      case 18:
        Q(m) || p("ELEMENT_END_TAG Error! [" + A + "]");
        r = "</" + m + ">";
        break;
      case 17:
        var F = !0;
      case 1:
        u = A[1], y = 2;
      default:
        Q(u) || p("Not html.json! [" + A + "]"), u = Da(u), w = u[1], q = u[2], u = u[0], y = A[y], "P" !== n || pa[u] ? n = "" : r = l(), r += "<" + u, w && (r += " id=" + xa(w, z, v || C)), q && (r += " class=" + xa(q, z, v || C)), v || (B = v = v || ba[u] ? !0 : !1), T(y) && (r += x(y)), r = (A = f(A, oa[u], h || qa[u])) ? r + (">" + A) : F ? r + ">" : r + (v ? " />" : ">"), F ? n = "" : v && !A || na[u] && (!D || "P" !== u) ? n = ca[u] ? "" : u : (r += "</" + u + ">", n = ""), B && (v = !1);
    }
    return r;
  }
  function f(A, w, q) {
    for (var D = [], h = ya(A), l = -1, r; h < A.length; ++h) {
      r = A[h], R(r) ? D[++l] = k([3, r], A, h, !1, q) : K(r) ? (r = k(r, A, h, w, q), -1 === r ? --h : D[++l] = r) : p("Invalid html.json! [" + r + "]");
    }
    return D.join("");
  }
  function x(A) {
    var w = "", q, D;
    for (q in A) {
      var h = A[q];
      (D = 0 === q.indexOf(t)) && (q = q.substr(t.length));
      "className" === q && (q = "class");
      D && (e ? h = va(!0, e, q, h, p) : p("onInstruction is void!"));
      if (!(null == h || aa[q] && !1 === h || (w += " " + q, aa[q]))) {
        if ("style" === q && N(h)) {
          D = void 0;
          var l = h, r = "";
          for (D in l) {
            h = l[D];
            "0px" === h && (h = 0);
            for (var g, m = [], y = D.split(""), u = y.length; u;) {
              g = y[--u], "A" <= g && "Z" >= g && (g = "-" + g.toLowerCase()), m[u] = g;
            }
            g = m.join("");
            r += ";" + g + ":" + wa("" + h);
          }
          h = r.substr(1);
          if (!h) {
            continue;
          }
        }
        w += "=" + xa(h, z, v || C);
      }
    }
    return w;
  }
  var e = b || null, p = "function" === typeof c ? c : function() {
  };
  b = d || {};
  var C = !0 === b.quotAlways, z = !0 === b.useSingleQuot, t = b.instructionAttrPrefix || ":", n, v = !1;
  if (K(a)) {
    return 7 === ta(a) && (a = [11, a]), k(a, null, 0, !1, !1);
  }
  p("Invalid html.json document!");
}
;Z.json2html = !0;
Xa = function(a, b, c, d, k) {
  a.shift();
  return db(a, b, d, k) || "";
};
function eb(a, b, c, d, k) {
  const f = this, x = require("plugin-error");
  return require("through2").obj(function(e, p, C) {
    if (e.isNull()) {
      return C();
    }
    if (e.isStream()) {
      return this.emit("error", new x("NicePageBuilder.gulp.json2html", "Streaming not supported")), C();
    }
    if (".json" !== e.extname) {
      return this.push(e), C();
    }
    const z = e.stem.split(".").pop();
    switch(z) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        p = JSON.parse(e.contents.toString(p)), e.path = p[0].FILE_PATH, e.contents = Buffer.from(Xa.call(f, p, b, c, d, k)), e.extname = "." + z;
    }
    this.push(e);
    C();
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
  a = Z.la(a);
  Ua && (a.html2json = Za);
  Va && (a.generator = ab);
  Wa && (a.json2json = cb);
  Xa && (a.json2html = eb);
  return a;
};
Z.all = {};

