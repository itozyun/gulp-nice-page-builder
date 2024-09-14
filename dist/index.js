function aa(a) {
  a && (a = ba(a), this.$ = a + ("/" === a.charAt(a.length - 1) ? "" : "/"));
}
function ba(a) {
  return a.split("\\").join("/");
}
function x(a, b, c) {
  if (0 === c.indexOf(a.$) || "/" === c.charAt(0) && "//" !== c.substr(0, 2)) {
    b = c;
  } else {
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
;var ca = !1, da = !1, ea = !1;
function I(a) {
  a = I.ja(a);
  ca && (a.html2json = ca);
  da && (a.generator = da);
  ea && (a.json2html = ea);
  return a;
}
I.ja = function(a) {
  var b = a || {};
  a = require("path").resolve(b.srcRootPath || "./") + "/";
  console.log(11, a);
  const c = new aa(a);
  console.log(c.$);
  const g = b.allPagesPath && x(c, "/", b.allPagesPath), e = x(c, "/", b.allMixinsPath || "all.mixins.json");
  b = x(c, "/", b.allTempletesPath || "all.templetes.json");
  return {oa:ba(a), ka:g || "", pa:e, qa:b, path:c};
};
I.module = {};
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
I.gulp = function(a) {
  a = I.ja(a);
  ca && (a.html2json = fa);
  da && (a.generator = ha);
  ea && (a.json2html = ia);
  return a;
};
var J = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
J.LI = J.TD = J.DD;
J.TH = J.DT;
J.RB = J.RP = J.RT = J.P;
J.TFOOT = J.THEAD = J.TBODY;
J.RTC = J.RBC;
function ja(a, b) {
  var c = 0;
  function g() {
    c && (ka(b, e(a.substring(0, c))), a = a.substring(c), c = 0);
  }
  function e(k) {
    return k.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function h(k, D, p) {
    for (var m = 1, q = p.length, w = 3, l, E; w < q && 3 !== m;) {
      E = p.charAt(w);
      switch(m) {
        case 1:
          M[E] & 4 ? m = 2 : ">" === E && (m = 3);
          1 !== m && (l = p.substring(2, w));
          break;
        case 2:
          ">" === E && (m = 3);
      }
      ++w;
    }
    return 3 === m ? (v(k, D, A ? l : l.toUpperCase(), !1), w) : 0;
  }
  function v(k, D, p, m) {
    var q = 0, w = k.length;
    if (p) {
      for (q = w; 0 <= q && k[--q] !== p;) {
      }
    }
    if (0 <= q) {
      for (; q < w;) {
        la(D, k[--w], m && !J[k[w]], !1), A && ma[k[w]] && (A = !!D.da);
      }
      k.length = q;
    } else {
      la(D, p, !1, !0);
    }
  }
  function n(k, D, p, m) {
    function q(B, F) {
      t[B] = !0 === F ? !0 : na[B.toLowerCase()] ? A ? e(F || B) : !0 : e(F || "");
      ++u;
    }
    function w() {
      (G = "/>" === m.substr(d, 2)) && ++d;
      return G;
    }
    for (var l = 1, E = m.length, d = 2, t = {}, u = 0, G = !1, H, y, K, N, O, L; d < E && 9 > l;) {
      H = m.charAt(d);
      switch(l) {
        case 1:
          if (M[H] & 4) {
            l = 2, y = m.substring(1, d);
          } else if (">" === H || w()) {
            l = 9, y = m.substring(1, d);
          }
          break;
        case 2:
          ">" === H || w() ? l = 9 : M[H] & 4 || (l = 3, K = d);
          break;
        case 3:
          if ("=" === H) {
            l = 5, N = m.substring(K, d);
          } else if (M[H] & 4) {
            l = 4, N = m.substring(K, d);
          } else if (">" === H || w()) {
            l = 9, q(m.substring(K, d), !0);
          }
          break;
        case 4:
          "=" === H ? l = 5 : ">" === H || w() ? (l = 9, q(N, !0)) : M[H] & 4 || (l = 3, q(N, !0), K = d);
          break;
        case 5:
          '"' === H || "'" === H ? (l = 6, O = H, K = d + 1) : M[H] & 4 || (l = 7, K = d);
          L = !1;
          break;
        case 6:
          L || H !== O || (l = 2, q(N, m.substring(K, d)));
          L = "\\" === H && !L;
          break;
        case 7:
          M[H] & 4 ? l = 2 : ">" === H ? l = 9 : !oa[N] && w() && (l = 9), 7 !== l && q(N, m.substring(K, d));
      }
      ++d;
    }
    if (9 === l) {
      l = y.toUpperCase();
      A ||= !!ma[y];
      if (!A) {
        for (; D;) {
          if (J[D] && !J[D][l]) {
            v(k, p, D, !1), D = k[k.length - 1];
          } else {
            break;
          }
        }
      }
      (G = G || !!pa[l]) || (k[k.length] = A ? y : l);
      qa(p, A ? y : l, u ? t : null, G);
      return d;
    }
    return 0;
  }
  for (var r = [], A = !!b.da, C = a.length - c, f, z; a;) {
    (f = z = r[r.length - 1]) && A && (z = f.toUpperCase());
    if (ra[z]) {
      if ("PLAINTEXT" === z) {
        ka(b, e(a)), a = "";
      } else {
        if (f = a.toUpperCase().indexOf("</" + z), 0 <= f) {
          if (c = f, g(), f = h(r, b, a)) {
            a = a.substring(f);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (g(), f = a.indexOf(">"), -1 !== f) {
        sa(b, a.substring(10, f)), a = a.substring(f + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === c) {
      if (g(), f = a.indexOf("?>"), -1 !== f) {
        ta(b, e(a.substring(2, f))), a = a.substring(f + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (g(), f = a.indexOf("]]\x3e"), -1 !== f) {
        ua(b, e(a.substring(9, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (g(), f = a.indexOf("--\x3e"), -1 !== f) {
        va(b, e(a.substring(4, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === c && M[a.charAt(c + 2)] & 3) {
      if (g(), f = h(r, b, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(c) && M[a.charAt(c + 1)] & 3) {
      if (g(), f = n(r, f, b, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else {
      f = a.indexOf("<", c), -1 === f ? (ka(b, e(a)), a = "") : c < f ? c = f : ++c;
    }
    f = a.length - c;
    if (f === C) {
      throw a;
    }
    C = f;
  }
  g();
  v(r, b, "", !0);
}
var ma = {xml:!0, svg:!0, math:!0}, pa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, wa:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ra = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, oa = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, na = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, M = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var wa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, xa = {link:!0, kb:!0, Da:!0, ta:!0, ab:!0, input:!0, xa:!0, base:!0, Fa:!0, Na:!0, eb:!0, qb:!0, track:!0, Hb:!0, Ha:!0, Aa:!0, frame:!0, cb:!0, Ba:!0}, ya = {$a:!0, head:!0, body:!0, p:!0, Ma:!0, Ia:!0, gb:!0, pb:!0, zb:!0, Eb:!0, Cb:!0, Ab:!0, Db:!0, Fb:!0, tb:!0, ub:!0, vb:!0, wb:!0, xb:!0, ob:!0, caption:!0, Ga:!0}, za = {a:!0, audio:!0, 
Ja:!0, bb:!0, map:!0, ua:!0, video:!0}, Aa = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, Ba = {address:!0, ya:!0, za:!0, Ca:!0, canvas:!0, details:!0, Ka:!0, La:!0, Oa:!0, Pa:!0, Qa:!0, Ra:!0, form:!0, Sa:!0, Ta:!0, Ua:!0, Va:!0, Wa:!0, Xa:!0, Ya:!0, Za:!0, ta:!0, fb:!0, hb:!0, jb:!0, lb:!0, ua:!0, nb:!0, p:!0, sb:!0, yb:!0, Gb:!0, Ea:!0, dir:!0, mb:!0, ib:!0}, Ca = {va:!0, style:!0, rb:!0, Ib:!0}, Da = {va:!0, style:!0, Bb:!0};
function P(a) {
  return !(!a || a.pop !== [].pop);
}
function Q(a) {
  return !(!a || "object" !== typeof a);
}
function R(a) {
  return "" + a === a;
}
function S(a) {
  return R(a) || a === +a;
}
function U(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0 ? +a : a;
}
function Ea(a) {
  if (S(a)) {
    a = 3;
  } else {
    if (P(a)) {
      if (R(a[0])) {
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
function V(a) {
  return !P(a) && Q(a);
}
function Fa(a, b, c, g, e) {
  var h = b[1], v = b.slice(2);
  a = v.length ? a(h, v) : a(h);
  void 0 !== a && null !== a && "" !== a && (S(a) ? c ? c.splice(g, 1, a) : (b.length = 0, b.push(3, b)) : P(a) ? 11 === a[0] ? c ? (a.shift(), a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : P(a[0]) ? c ? (a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(g, 1, a) : (b.length = 0, b.push(11, a)) : e("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return a;
}
function Ga(a, b, c, g) {
  if (P(c) && R(c[0])) {
    var e = c[0];
    c = c.slice(1);
    e = c.length ? a(e, c) : a(e);
  } else {
    R(c) ? e = a(c) : g("Invalid InstructionAttr value! [" + b + "=" + c + "]");
  }
  return P(e) ? Ga(a, b, e, g) : e;
}
function Ha(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function Ia(a, b, c) {
  a = Ha("" + a);
  var g = a.match('"'), e = a.match("'"), h = b ? "'" : '"';
  if (g && e) {
    a = b ? h + a.split("'").join("\\'") + h : h + a.split('"').join('\\"') + h;
  } else if (g) {
    a = "'" + a + "'";
  } else if (e) {
    a = b ? h + a.split("'").join("\\'") + h : h + a + h;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = h + a + h;
  }
  return a;
}
function Ja(a) {
  var b = a[0], c = b === +b ? 2 : 1;
  return 1 === Ea(a) || 17 === b ? V(a[c]) ? c + 1 : c : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
function Ka(a) {
  var b = Ja(a), c = "", g;
  if (b < a.length) {
    for (g = b; g < a.length;) {
      b = a[g];
      var e = Ea(b);
      3 === e ? (c = S(b) ? c + b : c + b[1], a.splice(g, 1)) : (c && (a.splice(g, 0, U(c)), c = ""), ++g, 1 !== e && 17 !== e && 13 !== e && 16 !== e || Ka(b));
    }
    c && (a[g] = U(c));
  }
}
function La(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function Ma(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function Na(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), g = "", e = "";
  b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (e = a.split("#")[1], a = a.split("#")[0])) : c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
  return [a, e, g];
}
;function Oa(a) {
  return 1 === a.$ || 17 === a.$ || 13 === a.$ || 16 === a.$ || Pa(a);
}
function Pa(a) {
  return 9 === a.$ || 11 === a.$;
}
function Qa(a, b, c, g, e) {
  if (a === !!a) {
    var h = null;
    this.aa = a;
  } else {
    h = a, this.aa = h.aa;
  }
  if (h) {
    switch(h.$) {
      case 3:
      case 8:
      case 4:
      case 7:
      case 15:
      case 18:
        throw "nodeType:" + h.$ + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (Pa(this)) {
      throw "nodeType:" + h.$ + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this.da = h;
  this.$ = c;
  if (h) {
    if (h.ca || (h.ca = []), a = h.ca, 0 <= b && b < a.length) {
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
      this.la = e || null;
    case 18:
      this.ra = g;
      break;
    case 7:
    case 3:
    case 4:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      this.ma = g;
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
function Ra(a, b) {
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
function Sa(a) {
  return 1 === a.$ || 17 === a.$;
}
function Ta(a) {
  if (!Sa(a) && 18 !== a.$) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.ra;
}
function X(a) {
  if (!Oa(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeLength() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca.length;
}
function Y(a, b) {
  if (!Oa(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca[b] || null;
}
Qa.prototype.remove = function() {
  if (Pa(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa && null !== this) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e discard() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (Pa(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa) {
    throw "restricted mode \u3067\u306f getMyIndex() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = this.da ? this.da.ca.indexOf(this) : -1;
  0 <= a && (this.da.ca.splice(a, 1), this.da = null);
};
function Z(a, b, c, g) {
  if (a.aa && (null !== a || !Oa(a))) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (a.aa) {
    a = null;
  } else {
    var e = X(a);
    if (a.aa) {
      throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    a = new Qa(a, e, b, c, g);
  }
  return a;
}
;function Ua(a, b) {
  b = new Va(b);
  ja(a, b);
  return b.aa;
}
function Va(a) {
  this.ca = a;
  this.$ = this.aa = new Qa(!1, 0, 11);
}
function sa(a, b) {
  var c = a.aa;
  if (c.aa) {
    throw "restricted mode \u3067\u306f setNodeType() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (11 !== c.$) {
    throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
  }
  c.$ = 9;
  Ra(a.aa, b);
}
function qa(a, b, c, g) {
  if (g) {
    a = a.$;
    if (a.aa && (null !== a || !Oa(a))) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (!a.aa) {
      g = X(a);
      if (a.aa) {
        throw "restricted mode \u3067\u306f insertElementAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      new Qa(a, g, 1, b, c);
    }
  } else {
    a.$ = Z(a.$, 17, b, c);
  }
}
function la(a, b, c, g) {
  if (g) {
    a.ca && Z(a.$, 18, b);
  } else if (!c || !a.ca) {
    if (b === Ta(a.$)) {
      b = a.$;
      if (b.aa) {
        throw "restricted mode \u3067\u306f finalize() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      if (17 !== b.$) {
        throw "close() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      b.$ = 1;
      b = a.$;
      if (Pa(b)) {
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
function ka(a, b) {
  Z(a.$, 3, b);
}
function va(a, b) {
  Z(a.$, 8, b);
}
function ua(a, b) {
  Z(a.$, 4, b);
}
function ta(a, b) {
  Z(a.$, 7, b);
}
;function Wa(a, b, c) {
  function g(d, t, u, G) {
    switch(d.$) {
      case 1:
      case 17:
        var H = {};
        var y = Ta(d).toLowerCase();
        G = "pre" === y;
        if (!Sa(d)) {
          throw "getAttrs() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var K = V(d.la) ? d.la : null;
        var N = 0, O;
        if (K) {
          for (O in K) {
            var L = wa[O] ? 1 : K[O];
            if ("id" === O) {
              var B = L;
            } else if ("class" === O) {
              var F = L;
            } else {
              if (O.startsWith(q)) {
                var T = e(L);
                T.fa ? (L = [T.name], C.apply(L, T.fa)) : L = T.name;
              }
              H[O] = U(L);
              ++N;
            }
          }
        }
        B && (y += "#" + B);
        F && (y += "." + F);
        if (G && f) {
          for (; B = v(d);) {
            if (r(W(B))) {
              Ra(B, La(W(B), "\n"));
              break;
            } else {
              B.remove();
            }
          }
          for (; B = n(d);) {
            if (r(W(B))) {
              Ra(B, Ma(W(B), "\n"));
              break;
            } else {
              B.remove();
            }
          }
        }
        B = N ? [y, H] : [y];
        for (F = 0; F < X(d); ++F) {
          g(Y(d, F), B, G || u, !!Da[y]);
        }
        t.push(B);
        17 !== d.$ || B.unshift(17);
        break;
      case 18:
        t.push([18, Ta(d).toLowerCase()]);
        break;
      case 3:
        d = "" + W(d);
        if (!u && f) {
          if (G) {
            d = Ma(La(d, "\n"), "\n");
          } else {
            d = d.split("\r\n").join("\n");
            k && (d = d.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (d = d.split("\t").join(" "); 0 <= d.indexOf("\n\n");) {
              d = d.split("\n\n").join("\n");
            }
            z && (y = "\n" === d.charAt(0) && /\n[ ]*$/.test(d));
            d = Ma(d, "\n");
            for (d = d.split("\n").join(" "); 0 <= d.indexOf("  ");) {
              d = d.split("  ").join(" ");
            }
            y && (d = Ma(La(d, " "), " "));
            d = d.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        (y = U(d)) && t.push(y);
        break;
      case 4:
        y = W(d);
        D && t.push([4, U(y)]);
        break;
      case 7:
        y = W(d);
        T = e(y);
        B = [7, T.name];
        T.fa && C.apply(B, T.fa);
        t.push(B);
        break;
      case 8:
        y = W(d);
        if (y.startsWith("[if") && 0 < y.indexOf("<![endif]")) {
          d = Ua(h(y, ">", "<![endif]", !0), !0);
          B = [13, h(y, "[", "]", !1)];
          for (F = 0; F < X(d); ++F) {
            g(Y(d, F), B, u, G);
          }
          (2 < B.length || m) && t.push(B);
        } else if (y.startsWith("{") && 2 < y.indexOf("};")) {
          d = Ua(y.substring(y.indexOf("};") + 2), !0);
          B = [16, h(y, "{", "};", !1)];
          for (F = 0; F < X(d); ++F) {
            g(Y(d, F), B, u, G);
          }
          (2 < B.length || m) && t.push(B);
        } else {
          y.startsWith("[if") && 0 < y.indexOf("><!") ? (t.push([14, h(y, "[", "]", !1)]), E = !0) : "<![endif]" === y && E ? (u = t[t.length - 1], m || !u || 14 !== u[0] ? t.push([15]) : u && t.pop(), E = !1) : p && t.push([8, U(y)]);
        }
        break;
      case 9:
        y = W(d);
        f && (y = y.split("\n").join(" ").split("  ").join(" "));
        B = [9, y];
        t.push(B);
        for (F = 0; F < X(d); ++F) {
          g(Y(d, F), B, !1, !1);
        }
        break;
      case 11:
        for (B = [11], t.push(B), F = 0; F < X(d); ++F) {
          g(Y(d, F), B, u, G);
        }
    }
  }
  function e(d) {
    var t = d.indexOf(w), u = Ma(La(-1 === t ? d : d.substr(0, t), " "), " ");
    d = -1 === t ? [] : JSON.parse("[" + d.substring(t + w.length, d.lastIndexOf(l) - 2) + "]");
    return d.length ? {name:u, fa:d} : {name:u};
  }
  function h(d, t, u, G) {
    t = d.indexOf(t) + t.length;
    u = G ? d.lastIndexOf(u) : d.indexOf(u, t);
    return d.substring(t, u);
  }
  function v(d) {
    for (var t = 0, u = X(d), G; t < u; ++t) {
      if (G = Y(d, t), Sa(G) && (G = v(G)), G && 3 === G.$) {
        return G;
      }
    }
  }
  function n(d) {
    for (var t = X(d), u; t;) {
      if (u = Y(d, --t), Sa(u) && (u = n(u)), u && 3 === u.$) {
        return u;
      }
    }
  }
  function r(d) {
    return d.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const A = [], C = A.push;
  a = Ua(a, b);
  c = c || {};
  const f = -1 === ["none", !1].indexOf(c.trimWhitespaces), z = "aggressive" === c.trimWhitespaces, k = !!c.removeNewlineBetweenFullWidthChars, D = !0 === c.keepCDATASections, p = !0 === c.keepComments, m = !0 === c.keepEmptyConditionalComment, q = c.instructionAttrPrefix || ":";
  c = c.argumentBrackets || "()";
  const w = c.substr(0, c.length / 2), l = c.substr(c.length);
  let E = !1;
  g(a, A, !1, !1);
  Ka(A[0]);
  return A[0];
}
;I.ea = {};
I.ba = {};
I.ea.ha = !0;
I.ba.ia = function(a) {
  a = a[0];
  if (I.ea.ha && !P(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
I.ba.ga = function(a) {
  a = I.ba.ia(a)[0];
  return !P(a) && Q(a) ? a : null;
};
I.ba.sa = function(a) {
  return Xa(a, function(b, c) {
    return "script" === b && c && "application/json" === c.type || !1;
  });
};
I.ba.na = function(a) {
  return Xa(a, function(b) {
    return "slot" === b;
  });
};
function Xa(a, b) {
  function c(h) {
    let v = Ja(h), n = h.length;
    for (var r; v < n; ++v) {
      var A = h[v], C;
      if (C = !S(A)) {
        if (C = P(A)) {
          a: {
            r = A;
            A = h;
            C = v;
            var f = r[0];
            const z = r[1];
            let k = f, D = 1;
            switch(f) {
              case 9:
              case 11:
              case 13:
              case 16:
                r = c(r);
                break a;
              case 1:
              case 17:
                k = z, D = 2;
              default:
                if (R(k)) {
                  f = r[D];
                  r = b(k, V(f) ? f : null) ? [r, A, C] : c(r);
                  break a;
                }
            }
            r = void 0;
          }
          C = r;
        }
      }
      if (C) {
        return r;
      }
    }
  }
  let g, e;
  return V(a[0]) ? (g = a.shift(), e = c(a), a.unshift(g), e && e[1] === a ? [e[0], a, ++e[2]] : e) : c(a);
}
;I.html2json = {};
I.json2html = !0;
ca = function(a, b, c) {
  a = Wa(a, b, c);
  if (b = I.ba.sa(a)) {
    c = b[0], b[1].splice(b[2], 1), c && 3 === c.length && (b = eval("(" + c[2] + ");"), !P(b) && Q(b) && a.unshift(b));
  }
  return a;
};
function fa(a) {
  const b = this, c = require("plugin-error"), g = require("vinyl"), e = {}, h = {}, v = {};
  return require("through2").obj(function(n, r, A) {
    var C = ba(n.path);
    if (n.isNull()) {
      return A();
    }
    if (n.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), A();
    }
    if (0 !== C.indexOf(b.oa)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + C + '" is outside of srcRootPath:"' + b.oa + '"')), A();
    }
    const f = n.contents.toString(r);
    r = parseInt(n.stat.birthtimeMs, 10);
    const z = parseInt(n.stat.ctimeMs, 10);
    var k = b.path;
    C = ba(C).substr(k.$.length - 1);
    console.log(b.path.$, C);
    switch(n.extname) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        n = ca.call(b, f, !1, a);
        e[C] = [n, r, z];
        break;
      case ".json":
        n = JSON.parse(f);
        Q(n) && (v[C] = [n, r, z]);
        break;
      default:
        this.push(n);
    }
    A();
  }, function(n) {
    function r(p, m, q, w) {
      if (m) {
        for (let E = 0, d = m.length; E < d; ++E) {
          const t = x(b.path, p, m[E]);
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
        m = x(b.path, p, m);
        const w = e[m];
        if (w) {
          if (delete e[m], h[m] = w, q.TEMPLETE = p = m, q = I.ba.ga(w)) {
            r(p, q.MIXINS, !!q.TEMPLETE, !1), m = q.TEMPLETE;
          } else {
            break;
          }
        } else if (h[m]) {
          break;
        } else {
          throw 'Templete:"' + m + '" required by "' + p + '" does not exist!';
        }
      }
    }
    function C(p, m) {
      const q = p.split("/");
      q.pop();
      p = new g({base:q.join("/") || "/", path:p, contents:Buffer.from(JSON.stringify(m))});
      p.extname = ".json";
      D.push(p);
    }
    for (var f in e) {
      var z = e[f];
      let p = I.ba.ga(z);
      p && (r(f, p.MIXINS, !!p.TEMPLETE, !1), A(f, p.TEMPLETE, p), e[f] && z.push(!0));
    }
    for (const p in v) {
      3 === v[p].length && (I.ea.ha && console.log("Unused mixin found! " + p), delete v[p]);
    }
    for (var k in e) {
      f = e[k], z = I.ba.ia(f), 3 === f.length && I.ba.na(z) && (I.ea.ha && console.log("Unused templete found! " + k), delete e[k]);
    }
    const D = this;
    b.ka && C(b.ka, e);
    C(b.pa, v);
    C(b.qa, h);
    for (const p in e) {
      k = e[p], delete e[p], f = k[0], z = f[0], z = !P(z) && Q(z) ? z : {}, z.FILE_PATH = p, z.CREATED_AT = k[1], z.MODIFIED_AT = k[2], z !== f[0] && f.unshift(z), C(p + ".json", f);
    }
    n();
  });
}
;I.generator = !0;
da = function(a, b, c) {
  function g(C) {
    if (C) {
      for (let f = 0; f < C.length; ++f) {
        const z = c[C[f]];
        e(z[0], z[2]);
      }
    }
  }
  function e(C, f) {
    let z = 0;
    for (const k in C) {
      "TEMPLETE" === k ? (n = n || C[k], n === C[k] && ++z) : void 0 === h[k] && (h[k] = C[k], ++z);
    }
    z && v < f && (v = f);
  }
  const h = !P(a[0]) && Q(a[0]) ? a[0] : null;
  if (!h) {
    return a;
  }
  let v = h.MODIFIED_AT, n = h.TEMPLETE;
  for (g(h.MIXINS); n;) {
    var r = b[n], A = I.ba.ga(r);
    n = "";
    A && (e(A, r[2]), g(A.MIXINS));
  }
  for (n = h.TEMPLETE; n;) {
    r = b[n], A = I.ba.ga(r), a = Ya(I.ba.ia(r), a), A ? n = A.TEMPLETE : n = "";
  }
  delete h.TEMPLETE;
  delete h.MIXINS;
  h.UPDATED_AT = v;
  return a;
};
function Ya(a, b) {
  a = JSON.parse(JSON.stringify(a));
  var c = I.ba.na(a);
  if (c) {
    const g = c[1];
    c = c[2];
    let e;
    V(b[0]) && (e = b.shift());
    let h = Ja(b), v = b.length;
    g.splice(c, 1);
    for (c -= h; h < v; ++h) {
      g.splice(c + h, 0, b[h]);
    }
    e && a.unshift(e);
  }
  return a;
}
function ha() {
  const a = this, b = require("plugin-error"), c = require("vinyl"), g = {};
  let e, h;
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
        return g[n[0].FILE_PATH] = n, r();
      case "templetes":
        !P(n) && Q(n) && (e = n);
        break;
      case "mixins":
        !P(n) && Q(n) && (h = n);
    }
    this.push(v);
    r();
  }, function(v) {
    for (const n in g) {
      const r = da.call(a, g[n], e, h);
      delete g[n];
      this.push(new c({base:"/", path:n + ".json", contents:Buffer.from(JSON.stringify(r))}));
    }
    v();
  });
}
;function Za(a, b, c, g) {
  function e(k, D, p, m, q) {
    function w() {
      var y = "";
      f && (y = "</" + f + ">", f = "");
      return y;
    }
    var l = "", E = k[0], d = k[1], t = 1, u = E, G;
    switch(E) {
      case 9:
        l = "<!DOCTYPE " + d + ">" + h(k, m, q);
        break;
      case 11:
        l = h(k, m, q);
        break;
      case 3:
        l = w() + (q ? d : Ha("" + d));
        break;
      case 4:
        R(d) || n("CDATA_SECTION Error! [" + k + "]");
        l = "<![CDATA[" + d + "]]\x3e";
        break;
      case 8:
        R(d) || n("COMMENT_NODE Error! [" + k + "]");
        l = "\x3c!--" + d + "--\x3e";
        break;
      case 13:
        R(d) || n("COND_CMT_HIDE_LOWER Error! [" + k + "]");
        l = w() + "\x3c!--[" + d + "]>" + h(k, !0, q) + "<![endif]--\x3e";
        break;
      case 16:
        R(d) || n("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + k + "]");
        l = w() + "\x3c!--{" + d + "};" + h(k, !0, q) + "--\x3e";
        break;
      case 14:
        R(d) || n("COND_CMT_SHOW_LOWER_START Error! [" + k + "]");
        l = "\x3c!--[" + d + "]>\x3c!--\x3e";
        break;
      case 15:
        l = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        m = Fa(b, k, D, p, n);
        if (void 0 !== m && null !== m && "" !== m) {
          if (S(m) || P(m)) {
            return -1;
          }
          n("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(k) + "] result:" + JSON.stringify(m));
        }
        break;
      case 18:
        R(d) || n("ELEMENT_END_TAG Error! [" + k + "]");
        l = "</" + d + ">";
        break;
      case 17:
        var H = !0;
      case 1:
        u = k[1], t = 2;
      default:
        R(u) || n("Not html.json! [" + k + "]"), u = Na(u), D = u[1], p = u[2], u = u[0], "p" !== f || Ba[u] ? f = "" : l = w(), l += "<" + u, D && (l += " id=" + Ia(D, A, r)), p && (l += " class=" + Ia(p, A, r)), z || (G = z = z || Aa[u] ? !0 : !1), t = k[t], V(t) && (l += " " + v(t)), l = (k = h(k, m || za[u], q || Ca[u])) ? l + (">" + k) : H ? l + ">" : l + (z ? "/>" : ">"), H ? f = "" : z && !k || ya[u] && !m ? f = xa[u] ? "" : u : (l += "</" + u + ">", f = ""), G && (z = !1);
    }
    return l;
  }
  function h(k, D, p) {
    for (var m = "", q = Ja(k), w; q < k.length; ++q) {
      w = k[q], S(w) ? m += e([3, w], null, 0, D, p) : P(w) ? (w = e(w, k, q, D, p), -1 === w ? --q : m += w) : n("Invalid html.json! [" + w + "]");
    }
    return m;
  }
  function v(k) {
    var D = "", p, m;
    for (p in k) {
      var q = k[p];
      (m = 0 === p.indexOf(C)) && (p = p.substr(C.length));
      "className" === p && (p = "class");
      m && (q = Ga(b, p, q, n));
      if (!(null == q || wa[p] && !1 === q || (D += " " + p, wa[p]))) {
        if ("style" === p && Q(q)) {
          m = void 0;
          var w = q, l = "";
          for (m in w) {
            q = w[m];
            "0px" === q && (q = 0);
            for (var E, d = [], t = m.split(""), u = t.length; u;) {
              E = t[--u], "A" <= E && "Z" >= E && (E = "-" + E.toLowerCase()), d[u] = E;
            }
            E = d.join("");
            l += ";" + E + ":" + Ha("" + q);
          }
          q = l.substr(1);
          if (!q) {
            continue;
          }
        }
        D += "=" + Ia(q, A, r);
      }
    }
    return D.substr(1);
  }
  var n = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : g || {};
  var r = !0 === c.quotAlways, A = !0 === c.useSingleQuot, C = c.instructionAttrPrefix || ":", f, z = !1;
  if (P(a)) {
    return 7 === Ea(a) && (a = [11, a]), e(a, null, 0, !1, !1);
  }
  n("Invalid html.json document!");
}
;I.json2html = !0;
ea = function(a, b, c, g) {
  a.shift();
  return Za(a, b, c, g) || "";
};
function ia(a, b, c) {
  const g = this, e = require("plugin-error"), h = require("vinyl");
  return require("through2").obj(function(v, n, r) {
    if (v.isNull()) {
      return r();
    }
    if (v.isStream()) {
      return this.emit("error", new e("NicePageBuilder.json2html.gulp", "Streaming not supported")), r();
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
        this.push(new h({base:"/", path:v[0].FILE_PATH, contents:Buffer.from(ea.call(g, v, a, b, c))}));
        break;
      default:
        this.push(v);
    }
    r();
  });
}
;I.all = {};

