var A = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
A.LI = A.TD = A.DD;
A.TH = A.DT;
A.RB = A.RP = A.RT = A.P;
A.TFOOT = A.THEAD = A.TBODY;
A.RTC = A.RBC;
function aa(a, b) {
  var c = 0;
  function e() {
    c && (ba(b, k(a.substring(0, c))), a = a.substring(c), c = 0);
  }
  function k(n) {
    return n.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function d(n, G, t) {
    for (var r = 1, g = t.length, p = 3, h, F; p < g && 3 !== r;) {
      F = t.charAt(p);
      switch(r) {
        case 1:
          I[F] & 4 ? r = 2 : ">" === F && (r = 3);
          1 !== r && (h = t.substring(2, p));
          break;
        case 2:
          ">" === F && (r = 3);
      }
      ++p;
    }
    return 3 === r ? (w(n, G, y ? h : h.toUpperCase(), !1), p) : 0;
  }
  function w(n, G, t, r) {
    var g = 0, p = n.length;
    if (t) {
      for (g = p; 0 <= g && n[--g] !== t;) {
      }
    }
    if (0 <= g) {
      for (; g < p;) {
        ca(G, n[--p], r && !A[n[p]], !1), y && da[n[p]] && (y = !!G.da);
      }
      n.length = g;
    } else {
      ca(G, t, !1, !0);
    }
  }
  function l(n, G, t, r) {
    function g(J, Y) {
      q[J] = !0 === Y ? !0 : ea[J.toLowerCase()] ? y ? k(Y || J) : !0 : k(Y || "");
      ++u;
    }
    function p() {
      (D = "/>" === r.substr(f, 2)) && ++f;
      return D;
    }
    for (var h = 1, F = r.length, f = 2, q = {}, u = 0, D = !1, x, B, K, N, M, H; f < F && 9 > h;) {
      x = r.charAt(f);
      switch(h) {
        case 1:
          if (I[x] & 4) {
            h = 2, B = r.substring(1, f);
          } else if (">" === x || p()) {
            h = 9, B = r.substring(1, f);
          }
          break;
        case 2:
          ">" === x || p() ? h = 9 : I[x] & 4 || (h = 3, K = f);
          break;
        case 3:
          if ("=" === x) {
            h = 5, N = r.substring(K, f);
          } else if (I[x] & 4) {
            h = 4, N = r.substring(K, f);
          } else if (">" === x || p()) {
            h = 9, g(r.substring(K, f), !0);
          }
          break;
        case 4:
          "=" === x ? h = 5 : ">" === x || p() ? (h = 9, g(N, !0)) : I[x] & 4 || (h = 3, g(N, !0), K = f);
          break;
        case 5:
          '"' === x || "'" === x ? (h = 6, M = x, K = f + 1) : I[x] & 4 || (h = 7, K = f);
          H = !1;
          break;
        case 6:
          H || x !== M || (h = 2, g(N, r.substring(K, f)));
          H = "\\" === x && !H;
          break;
        case 7:
          I[x] & 4 ? h = 2 : ">" === x ? h = 9 : !fa[N] && p() && (h = 9), 7 !== h && g(N, r.substring(K, f));
      }
      ++f;
    }
    if (9 === h) {
      h = B.toUpperCase();
      y ||= !!da[B];
      if (!y) {
        for (; G;) {
          if (A[G] && !A[G][h]) {
            w(n, t, G, !1), G = n[n.length - 1];
          } else {
            break;
          }
        }
      }
      (D = D || !!ha[h]) || (n[n.length] = y ? B : h);
      ia(t, y ? B : h, u ? q : null, D);
      return f;
    }
    return 0;
  }
  for (var v = [], y = !!b.da, C = a.length - c, m, z; a;) {
    (m = z = v[v.length - 1]) && y && (z = m.toUpperCase());
    if (ja[z]) {
      if ("PLAINTEXT" === z) {
        ba(b, k(a)), a = "";
      } else {
        if (m = a.toUpperCase().indexOf("</" + z), 0 <= m) {
          if (c = m, e(), m = d(v, b, a)) {
            a = a.substring(m);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (e(), m = a.indexOf(">"), -1 !== m) {
        ka(b, a.substring(10, m)), a = a.substring(m + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === c) {
      if (e(), m = a.indexOf("?>"), -1 !== m) {
        la(b, k(a.substring(2, m))), a = a.substring(m + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (e(), m = a.indexOf("]]\x3e"), -1 !== m) {
        ma(b, k(a.substring(9, m))), a = a.substring(m + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (e(), m = a.indexOf("--\x3e"), -1 !== m) {
        na(b, k(a.substring(4, m))), a = a.substring(m + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === c && I[a.charAt(c + 2)] & 3) {
      if (e(), m = d(v, b, a)) {
        a = a.substring(m);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(c) && I[a.charAt(c + 1)] & 3) {
      if (e(), m = l(v, m, b, a)) {
        a = a.substring(m);
      } else {
        throw a;
      }
    } else {
      m = a.indexOf("<", c), -1 === m ? (ba(b, k(a)), a = "") : c < m ? c = m : ++c;
    }
    m = a.length - c;
    if (m === C) {
      throw a;
    }
    C = m;
  }
  e();
  w(v, b, "", !0);
}
var da = {xml:!0, svg:!0, math:!0}, ha = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, wa:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ja = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, fa = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, ea = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, I = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var oa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, pa = {link:!0, kb:!0, Da:!0, ta:!0, ab:!0, input:!0, xa:!0, base:!0, Fa:!0, Na:!0, eb:!0, qb:!0, track:!0, Hb:!0, Ha:!0, Aa:!0, frame:!0, cb:!0, Ba:!0}, qa = {$a:!0, head:!0, body:!0, p:!0, Ma:!0, Ia:!0, gb:!0, pb:!0, zb:!0, Eb:!0, Cb:!0, Ab:!0, Db:!0, Fb:!0, tb:!0, ub:!0, vb:!0, wb:!0, xb:!0, ob:!0, caption:!0, Ga:!0}, ra = {a:!0, audio:!0, 
Ja:!0, bb:!0, map:!0, ua:!0, video:!0}, sa = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, ta = {address:!0, ya:!0, za:!0, Ca:!0, canvas:!0, details:!0, Ka:!0, La:!0, Oa:!0, Pa:!0, Qa:!0, Ra:!0, form:!0, Sa:!0, Ta:!0, Ua:!0, Va:!0, Wa:!0, Xa:!0, Ya:!0, Za:!0, ta:!0, fb:!0, hb:!0, jb:!0, lb:!0, ua:!0, nb:!0, p:!0, sb:!0, yb:!0, Gb:!0, Ea:!0, dir:!0, mb:!0, ib:!0}, ua = {va:!0, style:!0, rb:!0, Ib:!0}, va = {va:!0, style:!0, Bb:!0};
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
function xa(a, b, c, e, k) {
  var d = b[1], w = b.slice(2);
  a = w.length ? a(d, w) : a(d);
  void 0 !== a && null !== a && "" !== a && (Q(a) ? c ? c.splice(e, 1, a) : (b.length = 0, b.push(3, b)) : L(a) ? 11 === a[0] ? c ? (a.shift(), a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : L(a[0]) ? c ? (a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(e, 1, a) : (b.length = 0, b.push(11, a)) : k("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return a;
}
function ya(a, b, c, e, k) {
  if (L(e) && P(e[0])) {
    var d = e[0];
    e = e.slice(1);
    d = e.length ? b(d, e) : b(d);
  } else {
    P(e) ? d = b(e) : k("Invalid InstructionAttr value! [" + c + "=" + e + "]");
  }
  return a && L(d) ? ya(!0, b, c, d, k) : d;
}
function za(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function Aa(a, b, c) {
  a = za("" + a);
  var e = a.match('"'), k = a.match("'"), d = b ? "'" : '"';
  if (e && k) {
    a = b ? d + a.split("'").join("\\'") + d : d + a.split('"').join('\\"') + d;
  } else if (e) {
    a = "'" + a + "'";
  } else if (k) {
    a = b ? d + a.split("'").join("\\'") + d : d + a + d;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = d + a + d;
  }
  return a;
}
function T(a) {
  var b = a[0], c = b === +b ? 2 : 1;
  return 1 === wa(a) || 17 === b ? S(a[c]) ? c + 1 : c : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
function Ba(a) {
  var b = T(a), c = "", e;
  if (b < a.length) {
    for (e = b; e < a.length;) {
      b = a[e];
      var k = wa(b);
      3 === k ? (c = Q(b) ? c + b : c + b[1], a.splice(e, 1)) : (c && (a.splice(e, 0, R(c)), c = ""), ++e, 1 !== k && 17 !== k && 13 !== k && 16 !== k || Ba(b));
    }
    c && (a[e] = R(c));
  }
}
function Ca(a, b, c, e, k, d) {
  if (!b && e) {
    if (c) {
      a = Da(Ea(a, "\n"), "\n");
    } else {
      a = a.split("\r\n").join("\n");
      d && (a = a.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
      for (a = a.split("\t").join(" "); 0 <= a.indexOf("\n\n");) {
        a = a.split("\n\n").join("\n");
      }
      if (k) {
        var w = "\n" === a.charAt(0) && /\n[ ]*$/.test(a);
      }
      a = Da(a, "\n");
      for (a = a.split("\n").join(" "); 0 <= a.indexOf("  ");) {
        a = a.split("  ").join(" ");
      }
      w && (a = Da(Ea(a, " "), " "));
      a = a.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    }
  }
  return R(a);
}
function Ea(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function Da(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function Fa(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), e = "", k = "";
  b < c ? (e = a.split(".")[1], a = a.split(".")[0], 0 < b && (k = a.split("#")[1], a = a.split("#")[0])) : c < b && (k = a.split("#")[1], a = a.split("#")[0], 0 < c && (e = a.split(".")[1], a = a.split(".")[0]));
  return [a, k, e];
}
function Ga(a, b, c) {
  b && (a += "#" + b);
  c && (a += "." + c);
  return a;
}
;function Ha(a) {
  return 1 === a.$ || 17 === a.$ || 13 === a.$ || 16 === a.$ || Ia(a);
}
function Ia(a) {
  return 9 === a.$ || 11 === a.$;
}
function Ja(a, b, c, e, k) {
  if (a === !!a) {
    var d = null;
    this.aa = a;
  } else {
    d = a, this.aa = d.aa;
  }
  if (d) {
    switch(d.$) {
      case 3:
      case 8:
      case 4:
      case 7:
      case 15:
      case 18:
        throw "nodeType:" + d.$ + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (Ia(this)) {
      throw "nodeType:" + d.$ + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this.da = d;
  this.$ = c;
  if (d) {
    if (d.ca || (d.ca = []), a = d.ca, 0 <= b && b < a.length) {
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
      this.la = k || null;
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
      return a.ma;
    default:
      throw "getNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function Ka(a, b) {
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
function La(a) {
  return 1 === a.$ || 17 === a.$;
}
function Ma(a) {
  if (!La(a) && 18 !== a.$) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.ra;
}
function V(a) {
  if (!Ha(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeLength() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca.length;
}
function W(a, b) {
  if (!Ha(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (a.aa) {
    throw "restricted mode \u3067\u306f getChildNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return a.ca && a.ca[b] || null;
}
Ja.prototype.remove = function() {
  if (Ia(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa && null !== this) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e discard() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (Ia(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (this.aa) {
    throw "restricted mode \u3067\u306f getMyIndex() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = this.da ? this.da.ca.indexOf(this) : -1;
  0 <= a && (this.da.ca.splice(a, 1), this.da = null);
};
function X(a, b, c, e) {
  if (a.aa && (null !== a || !Ha(a))) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (a.aa) {
    a = null;
  } else {
    var k = V(a);
    if (a.aa) {
      throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    a = new Ja(a, k, b, c, e);
  }
  return a;
}
;function Na(a, b) {
  b = new Oa(b);
  aa(a, b);
  return b.aa;
}
function Oa(a) {
  this.ca = a;
  this.$ = this.aa = new Ja(!1, 0, 11);
}
function ka(a, b) {
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
function ia(a, b, c, e) {
  if (e) {
    a = a.$;
    if (a.aa && (null !== a || !Ha(a))) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (!a.aa) {
      e = V(a);
      if (a.aa) {
        throw "restricted mode \u3067\u306f insertElementAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      new Ja(a, e, 1, b, c);
    }
  } else {
    a.$ = X(a.$, 17, b, c);
  }
}
function ca(a, b, c, e) {
  if (e) {
    a.ca && X(a.$, 18, b);
  } else if (!c || !a.ca) {
    if (b === Ma(a.$)) {
      b = a.$;
      if (b.aa) {
        throw "restricted mode \u3067\u306f finalize() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
      }
      if (17 !== b.$) {
        throw "close() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
      b.$ = 1;
      b = a.$;
      if (Ia(b)) {
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
function ba(a, b) {
  X(a.$, 3, b);
}
function na(a, b) {
  X(a.$, 8, b);
}
function ma(a, b) {
  X(a.$, 4, b);
}
function la(a, b) {
  X(a.$, 7, b);
}
;function Pa(a, b, c) {
  function e(f, q, u, D) {
    switch(f.$) {
      case 1:
      case 17:
        var x = {};
        D = Ma(f).toLowerCase();
        var B = "pre" === D;
        if (!La(f)) {
          throw "getAttrs() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var K = S(f.la) ? f.la : null;
        var N = 0, M;
        if (K) {
          for (M in K) {
            var H = oa[M] ? 1 : K[M];
            if ("id" === M) {
              var J = H;
            } else if ("class" === M) {
              var Y = H;
            } else {
              if (M.startsWith(g)) {
                var E = k(H);
                E.fa ? (H = [E.name], C.apply(H, E.fa)) : H = E.name;
              }
              x[M] = R(H);
              ++N;
            }
          }
        }
        D = Ga(D, J, Y);
        if (B && m) {
          for (; E = w(f);) {
            if (v(U(E))) {
              Ka(E, Ea(U(E), "\n"));
              break;
            } else {
              E.remove();
            }
          }
          for (; E = l(f);) {
            if (v(U(E))) {
              Ka(E, Da(U(E), "\n"));
              break;
            } else {
              E.remove();
            }
          }
        }
        x = N ? [D, x] : [D];
        for (E = 0; E < V(f); ++E) {
          e(W(f, E), x, B || u, !!va[D]);
        }
        q.push(x);
        17 !== f.$ || x.unshift(17);
        break;
      case 18:
        q.push([18, Ma(f).toLowerCase()]);
        break;
      case 3:
        (B = Ca("" + U(f), u, D, m, z, n)) && q.push(B);
        break;
      case 4:
        B = U(f);
        G && q.push([4, R(B)]);
        break;
      case 7:
        B = U(f);
        E = k(B);
        x = [7, E.name];
        E.fa && C.apply(x, E.fa);
        q.push(x);
        break;
      case 8:
        B = U(f);
        if (B.startsWith("[if") && 0 < B.indexOf("<![endif]")) {
          f = Na(d(B, ">", "<![endif]", !0), !0);
          x = [13, d(B, "[", "]", !1)];
          for (E = 0; E < V(f); ++E) {
            e(W(f, E), x, u, D);
          }
          (2 < x.length || r) && q.push(x);
        } else if (B.startsWith("{") && 2 < B.indexOf("};")) {
          f = Na(B.substring(B.indexOf("};") + 2), !0);
          x = [16, d(B, "{", "};", !1)];
          for (E = 0; E < V(f); ++E) {
            e(W(f, E), x, u, D);
          }
          (2 < x.length || r) && q.push(x);
        } else {
          B.startsWith("[if") && 0 < B.indexOf("><!") ? (q.push([14, d(B, "[", "]", !1)]), F = !0) : "<![endif]" === B && F ? (u = q[q.length - 1], r || !u || 14 !== u[0] ? q.push([15]) : u && q.pop(), F = !1) : t && q.push([8, R(B)]);
        }
        break;
      case 9:
        B = U(f);
        m && (B = B.split("\n").join(" ").split("  ").join(" "));
        x = [9, B];
        q.push(x);
        for (E = 0; E < V(f); ++E) {
          e(W(f, E), x, !1, !1);
        }
        break;
      case 11:
        for (x = [11], q.push(x), E = 0; E < V(f); ++E) {
          e(W(f, E), x, u, D);
        }
    }
  }
  function k(f) {
    var q = f.indexOf(p), u = Da(Ea(-1 === q ? f : f.substr(0, q), " "), " ");
    f = -1 === q ? [] : JSON.parse("[" + f.substring(q + p.length, f.lastIndexOf(h) - 2) + "]");
    return f.length ? {name:u, fa:f} : {name:u};
  }
  function d(f, q, u, D) {
    q = f.indexOf(q) + q.length;
    u = D ? f.lastIndexOf(u) : f.indexOf(u, q);
    return f.substring(q, u);
  }
  function w(f) {
    for (var q = 0, u = V(f), D; q < u; ++q) {
      if (D = W(f, q), La(D) && (D = w(D)), D && 3 === D.$) {
        return D;
      }
    }
  }
  function l(f) {
    for (var q = V(f), u; q;) {
      if (u = W(f, --q), La(u) && (u = l(u)), u && 3 === u.$) {
        return u;
      }
    }
  }
  function v(f) {
    return f.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const y = [], C = y.push;
  a = Na(a, b);
  c = c || {};
  const m = -1 === ["none", !1].indexOf(c.trimWhitespaces), z = "aggressive" === c.trimWhitespaces, n = !!c.removeNewlineBetweenFullWidthChars, G = !0 === c.keepCDATASections, t = !0 === c.keepComments, r = !0 === c.keepEmptyConditionalComment, g = c.instructionAttrPrefix || ":";
  c = c.argumentBrackets || "()";
  const p = c.substr(0, c.length / 2), h = c.substr(c.length);
  let F = !1;
  e(a, y, !1, !1);
  Ba(y[0]);
  return y[0];
}
;function Qa(a) {
  a && (a = Ra(a), this.$ = a + ("/" === a.charAt(a.length - 1) ? "" : "/"));
}
function Ra(a) {
  return a.split("\\").join("/");
}
function Sa(a, b) {
  if (!a.$) {
    throw "absoluteDirectoryPathOfRoot is empty!";
  }
  return 0 === b.indexOf(a.$);
}
function Ta(a, b, c) {
  if (Sa(a, c) || "/" === c.charAt(0) && !Ua(c)) {
    a = c;
  } else {
    if ("/" !== b.charAt(0) || Ua(b)) {
      throw b + " is not a root relative path!";
    }
    var e;
    (e = "/" === c.charAt(0) && !Ua(c)) || (e = c, e = a.$ ? Sa(a, e) || Va(e) : Va(e));
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
function Va(a) {
  return Ua(a) || "http://" === a.substr(0, 7) || "https://" === a.substr(0, 8);
}
function Ua(a) {
  return "//" === a.substr(0, 2);
}
;var Wa = !1, Xa = !1, Ya = !1, Za = !1;
function Z(a) {
  a = Z.ja(a);
  Wa && (a.html2json = Wa);
  Xa && (a.generator = Xa);
  Ya && (a.json2json = Ya);
  Za && (a.json2html = Za);
  return a;
}
Z.ja = function(a) {
  var b = a || {};
  a = require("path").resolve(b.srcRootPath || "./") + "/";
  const c = new Qa(a), e = b.allPagesPath && Ta(c, "/", b.allPagesPath), k = Ta(c, "/", b.allMixinsPath || "all.mixins.json");
  b = Ta(c, "/", b.allTempletesPath || "all.templetes.json");
  return {oa:Ra(a), ka:e || "", pa:k, qa:b, path:c};
};
Z.ea = {};
Z.ba = {};
Z.ea.ha = !0;
Z.ba.ia = function(a) {
  a = a[0];
  if (Z.ea.ha && !L(a)) {
    throw "NOT_HTML_JSON_ERROR!";
  }
  return a;
};
Z.ba.ga = function(a) {
  a = Z.ba.ia(a)[0];
  return !L(a) && O(a) ? a : null;
};
Z.ba.sa = function(a) {
  return $a(a, function(b, c) {
    return "script" === b && c && "application/json" === c.type || !1;
  });
};
Z.ba.na = function(a) {
  return $a(a, function(b) {
    return "slot" === b;
  });
};
function $a(a, b) {
  function c(d) {
    let w = T(d), l = d.length;
    for (var v; w < l; ++w) {
      var y = d[w], C;
      if (C = !Q(y)) {
        if (C = L(y)) {
          a: {
            v = y;
            y = d;
            C = w;
            var m = v[0];
            const z = v[1];
            let n = m, G = 1;
            switch(m) {
              case 9:
              case 11:
              case 13:
              case 16:
                v = c(v);
                break a;
              case 1:
              case 17:
                n = z, G = 2;
              default:
                if (P(n)) {
                  m = v[G];
                  v = b(n, S(m) ? m : null) ? [v, y, C] : c(v);
                  break a;
                }
            }
            v = void 0;
          }
          C = v;
        }
      }
      if (C) {
        return v;
      }
    }
  }
  let e = a[0], k;
  return !L(e) && O(e) ? (a.shift(), k = c(a), a.unshift(e), k && k[1] === a ? [k[0], a, ++k[2]] : k) : c(a);
}
;Z.html2json = !0;
Wa = function(a, b, c) {
  a = Pa(a, b, c);
  if (b = Z.ba.sa(a)) {
    c = b[0], b[1].splice(b[2], 1), c && 3 === c.length && (b = eval("(" + c[2] + ");"), !L(b) && O(b) && a.unshift(b));
  }
  return a;
};
function ab(a) {
  const b = this, c = require("plugin-error"), e = require("vinyl"), k = {}, d = {}, w = {};
  return require("through2").obj(function(l, v, y) {
    var C = Ra(l.path);
    if (l.isNull()) {
      return y();
    }
    if (l.isStream()) {
      return this.emit("error", new c("gulp-nice-page-builder", "Streaming not supported")), y();
    }
    if (0 !== C.indexOf(b.oa)) {
      return this.emit("error", new c("gulp-nice-page-builder", '"' + C + '" is outside of srcRootPath:"' + b.oa + '"')), y();
    }
    const m = l.contents.toString(v);
    v = parseInt(l.stat.birthtimeMs, 10);
    const z = parseInt(l.stat.ctimeMs, 10);
    var n = b.path;
    if (!n.$) {
      throw "absoluteDirectoryPathOfRoot is empty!";
    }
    if (!Sa(n, C)) {
      throw C + " is not a absolute path!";
    }
    C = Ra(C).substr(n.$.length - 1);
    switch(l.extname) {
      case ".html":
      case ".htm":
      case ".xhtml":
      case ".php":
        l = Wa.call(b, m, !1, a);
        k[C] = [l, v, z];
        break;
      case ".json":
        l = JSON.parse(m);
        O(l) && (w[C] = [l, v, z]);
        break;
      default:
        this.push(l);
    }
    y();
  }, function(l) {
    function v(t, r, g, p) {
      if (r) {
        for (let F = 0, f = r.length; F < f; ++F) {
          const q = Ta(b.path, t, r[F]);
          var h = w[q];
          r[F] = q;
          if (h && 3 === h.length) {
            h.push(!0), h = h[0], p ? h.MIXINS && (console.log('Mixin:"' + q + '" cannot have MIXINS property!'), delete h.MIXINS) : v(q, h.MIXINS, g, !0), g || y(q, h.TEMPLETE, h);
          } else if (!h) {
            throw 'Mixin:"' + q + '" required by "' + t + '" does not exist!';
          }
        }
      }
    }
    function y(t, r, g) {
      for (; r;) {
        r = Ta(b.path, t, r);
        const p = k[r];
        if (p) {
          if (delete k[r], d[r] = p, g.TEMPLETE = t = r, g = Z.ba.ga(p)) {
            v(t, g.MIXINS, !!g.TEMPLETE, !1), r = g.TEMPLETE;
          } else {
            break;
          }
        } else if (d[r]) {
          break;
        } else {
          throw 'Templete:"' + r + '" required by "' + t + '" does not exist!';
        }
      }
    }
    function C(t, r) {
      t = new e({base:"/", path:t, contents:Buffer.from(JSON.stringify(r))});
      t.extname = ".json";
      G.push(t);
    }
    for (var m in k) {
      var z = k[m];
      let t = Z.ba.ga(z);
      t && (v(m, t.MIXINS, !!t.TEMPLETE, !1), y(m, t.TEMPLETE, t), k[m] && z.push(!0));
    }
    for (const t in w) {
      3 === w[t].length && (Z.ea.ha && console.log("Unused mixin found! " + t), delete w[t]);
    }
    for (var n in k) {
      m = k[n], z = Z.ba.ia(m), 3 === m.length && Z.ba.na(z) && (Z.ea.ha && console.log("Unused templete found! " + n), delete k[n]);
    }
    const G = this;
    b.ka && C(b.ka, k);
    C(b.pa, w);
    C(b.qa, d);
    for (const t in k) {
      n = k[t], delete k[t], m = n[0], z = m[0], z = !L(z) && O(z) ? z : {}, z.FILE_PATH = t, z.CREATED_AT = n[1], z.MODIFIED_AT = n[2], z !== m[0] && m.unshift(z), C(t + ".json", m);
    }
    l();
  });
}
;Z.generator = !0;
Xa = function(a, b, c) {
  function e(C) {
    if (C) {
      for (let m = 0; m < C.length; ++m) {
        const z = c[C[m]];
        k(z[0], z[2]);
      }
    }
  }
  function k(C, m) {
    let z = 0;
    for (const n in C) {
      "TEMPLETE" === n ? (l = l || C[n], l === C[n] && ++z) : void 0 === d[n] && (d[n] = C[n], ++z);
    }
    z && w < m && (w = m);
  }
  const d = !L(a[0]) && O(a[0]) ? a[0] : null;
  if (!d) {
    return a;
  }
  let w = d.MODIFIED_AT, l = d.TEMPLETE;
  for (e(d.MIXINS); l;) {
    var v = b[l], y = Z.ba.ga(v);
    l = "";
    y && (k(y, v[2]), e(y.MIXINS));
  }
  for (l = d.TEMPLETE; l;) {
    v = b[l], y = Z.ba.ga(v), a = bb(Z.ba.ia(v), a), y ? l = y.TEMPLETE : l = "";
  }
  delete d.TEMPLETE;
  delete d.MIXINS;
  d.UPDATED_AT = w;
  return a;
};
function bb(a, b) {
  a = JSON.parse(JSON.stringify(a));
  var c = Z.ba.na(a);
  if (c) {
    const e = c[1];
    c = c[2];
    let k;
    S(b[0]) && (k = b.shift());
    let d = T(b), w = b.length;
    e.splice(c, 1);
    for (c -= d; d < w; ++d) {
      e.splice(c + d, 0, b[d]);
    }
    k && a.unshift(k);
  }
  return a;
}
function cb() {
  const a = this, b = require("plugin-error"), c = require("vinyl"), e = {};
  let k, d;
  return require("through2").obj(function(w, l, v) {
    if (w.isNull()) {
      return v();
    }
    if (w.isStream()) {
      return this.emit("error", new b("NicePageBuilder.generator.gulp", "Streaming not supported")), v();
    }
    if (".json" !== w.extname) {
      return this.push(w), v();
    }
    l = JSON.parse(w.contents.toString(l));
    switch(w.stem.split(".").pop()) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        return e[l[0].FILE_PATH] = l, v();
      case "templetes":
        !L(l) && O(l) && (k = l);
        break;
      case "mixins":
        !L(l) && O(l) && (d = l);
    }
    this.push(w);
    v();
  }, function(w) {
    for (const l in e) {
      const v = Xa.call(a, e[l], k, d);
      delete e[l];
      this.push(new c({base:"/", path:l + ".json", contents:Buffer.from(JSON.stringify(v))}));
    }
    w();
  });
}
;function db(a, b, c, e) {
  function k(g, p, h, F, f, q) {
    var u = g[0], D = g[1], x = 1, B = u;
    switch(u) {
      case 9:
        d(g, F, f, q);
        break;
      case 11:
        d(g, F, f, q);
        break;
      case 3:
        D = Ca("" + D, f, q, v, y, C);
        if ("" !== D) {
          p[h] = D;
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
        d(g, F, f, q);
        if (!n && p && 2 === g.length) {
          return p.splice(h, 1), -1;
        }
        break;
      case 15:
        g = p[h - 1];
        if (!n && g && 14 === g[0] && g) {
          return p.splice(h - 1, 2), -2;
        }
        break;
      case 16:
        d(g, F, f, q);
        if (!n && p && 2 === g.length) {
          return p.splice(h, 1), -1;
        }
        break;
      case 7:
        g = xa(w, g, p, h, l);
        if (void 0 !== g) {
          if (null === g || "" === g) {
            return p ? p.splice(h, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!Q(g) && L(g)) {
            return -1;
          }
        } else {
          r = !1;
        }
        break;
      case 1:
      case 17:
        B = D, x = 2;
      default:
        if (P(B)) {
          if (1 + x <= g.length) {
            p = g[x];
            if (S(p)) {
              h = x - 1;
              q = 0;
              var K;
              u = Fa(g[h]);
              D = u[1];
              var N = u[2];
              u = u[0];
              for (J in p) {
                var M = J;
                var H = p[J];
                if (K = 0 === J.indexOf(G)) {
                  var J = J.substr(G.length);
                  "className" === J && (J = "class");
                  H = ya(!1, w, J, H, l);
                  if (void 0 !== H) {
                    if (delete p[M], L(H)) {
                      P(H[0]) ? (p[M] = H, r = !1, ++q) : l("Invalid dynamic attribute callback value! [" + M + "=" + H + "]");
                    } else if ((!oa[J] || !1 !== H) && null !== H) {
                      if (P(H)) {
                        if ("id" === J) {
                          D = H;
                          continue;
                        } else if ("class" === J) {
                          M = H.split(" ");
                          for (H = M.length; H;) {
                            K = M[--H], -1 === (" " + N + " ").indexOf(" " + K + " ") && (N = (N ? " " : "") + K);
                          }
                          continue;
                        }
                      }
                      p[J] = H;
                      ++q;
                    }
                  } else {
                    r = !1, ++q;
                  }
                } else {
                  ++q;
                }
              }
              g[h] = Ga(u, D, N);
              0 === q && g.splice(x, 1);
            }
            d(g, F, "p" === B || f, !!va[B]);
          }
        } else {
          l("Not html.json! [" + g + "]");
        }
    }
    return 0;
  }
  function d(g, p, h, F) {
    var f = T(g);
    for (p.push(g); f < g.length; ++f) {
      var q = g[f];
      if (!Q(q)) {
        if (L(q)) {
          if (q = k(q, g, f, p, h, F)) {
            f += q, t = !0;
          }
        } else {
          l("Invalid html.json! [" + q + "]");
        }
      }
    }
    p.pop();
  }
  var w = "function" === typeof b ? b : function() {
  }, l = "function" === typeof e ? e : function() {
  };
  b = O(b) ? b : O(c) ? c : O(e) ? e : {};
  var v = -1 !== ["normal", !0, "aggressive"].indexOf(b.trimWhitespaces), y = "aggressive" === b.trimWhitespaces, C = !!b.removeNewlineBetweenFullWidthChars, m = !1 !== b.keepCDATASections, z = !1 !== b.keepComments, n = !0 === b.keepEmptyConditionalComment, G = b.instructionAttrPrefix || ":", t = !1, r = !0;
  if (L(a)) {
    return k(a, null, 0, [], !1, !1), t && Ba(a), r;
  }
  l("Invalid html.json document!");
}
;Z.json2json = !0;
Ya = function(a, b, c, e) {
  const k = a.shift();
  b = db(a, b, c, e);
  a.unshift(k);
  return b;
};
function eb(a, b, c) {
  const e = this, k = require("plugin-error");
  return require("through2").obj(function(d, w, l) {
    if (d.isNull()) {
      return l();
    }
    if (d.isStream()) {
      return this.emit("error", new k("NicePageBuilder.json2json.gulp", "Streaming not supported")), l();
    }
    if (".json" !== d.extname) {
      return this.push(d), l();
    }
    const v = d.stem.split(".").pop();
    switch(v) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        w = JSON.parse(d.contents.toString(w));
        const y = w[0];
        Ya.call(e, w, a, b, c);
        d.path = y.FILE_PATH;
        d.contents = Buffer.from(JSON.stringify(w));
        d.extname = "." + v;
    }
    this.push(d);
    l();
  });
}
;function fb(a, b, c, e) {
  function k(n, G, t, r, g) {
    function p() {
      var B = "";
      m && (B = "</" + m + ">", m = "");
      return B;
    }
    var h = "", F = n[0], f = n[1], q = 1, u = F, D;
    switch(F) {
      case 9:
        h = "<!DOCTYPE " + f + ">" + d(n, r, g);
        break;
      case 11:
        h = d(n, r, g);
        break;
      case 3:
        h = p() + (g ? f : za("" + f));
        break;
      case 4:
        P(f) || l("CDATA_SECTION Error! [" + n + "]");
        h = "<![CDATA[" + f + "]]\x3e";
        break;
      case 8:
        P(f) || l("COMMENT_NODE Error! [" + n + "]");
        h = "\x3c!--" + f + "--\x3e";
        break;
      case 13:
        P(f) || l("COND_CMT_HIDE_LOWER Error! [" + n + "]");
        h = p() + "\x3c!--[" + f + "]>" + d(n, !0, g) + "<![endif]--\x3e";
        break;
      case 16:
        P(f) || l("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + n + "]");
        h = p() + "\x3c!--{" + f + "};" + d(n, !0, g) + "--\x3e";
        break;
      case 14:
        P(f) || l("COND_CMT_SHOW_LOWER_START Error! [" + n + "]");
        h = "\x3c!--[" + f + "]>\x3c!--\x3e";
        break;
      case 15:
        h = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        r = xa(b, n, G, t, l);
        if (void 0 !== r && null !== r && "" !== r) {
          if (Q(r) || L(r)) {
            return -1;
          }
          l("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(n) + "] result:" + JSON.stringify(r));
        }
        break;
      case 18:
        P(f) || l("ELEMENT_END_TAG Error! [" + n + "]");
        h = "</" + f + ">";
        break;
      case 17:
        var x = !0;
      case 1:
        u = n[1], q = 2;
      default:
        P(u) || l("Not html.json! [" + n + "]"), u = Fa(u), G = u[1], t = u[2], u = u[0], "p" !== m || ta[u] ? m = "" : h = p(), h += "<" + u, G && (h += " id=" + Aa(G, y, v)), t && (h += " class=" + Aa(t, y, v)), z || (D = z = z || sa[u] ? !0 : !1), q = n[q], S(q) && (h += " " + w(q)), h = (n = d(n, r || ra[u], g || ua[u])) ? h + (">" + n) : x ? h + ">" : h + (z ? "/>" : ">"), x ? m = "" : z && !n || qa[u] && !r ? m = pa[u] ? "" : u : (h += "</" + u + ">", m = ""), D && (z = !1);
    }
    return h;
  }
  function d(n, G, t) {
    for (var r = "", g = T(n), p; g < n.length; ++g) {
      p = n[g], Q(p) ? r += k([3, p], null, 0, G, t) : L(p) ? (p = k(p, n, g, G, t), -1 === p ? --g : r += p) : l("Invalid html.json! [" + p + "]");
    }
    return r;
  }
  function w(n) {
    var G = "", t, r;
    for (t in n) {
      var g = n[t];
      (r = 0 === t.indexOf(C)) && (t = t.substr(C.length));
      "className" === t && (t = "class");
      r && (g = ya(!0, b, t, g, l));
      if (!(null == g || oa[t] && !1 === g || (G += " " + t, oa[t]))) {
        if ("style" === t && O(g)) {
          r = void 0;
          var p = g, h = "";
          for (r in p) {
            g = p[r];
            "0px" === g && (g = 0);
            for (var F, f = [], q = r.split(""), u = q.length; u;) {
              F = q[--u], "A" <= F && "Z" >= F && (F = "-" + F.toLowerCase()), f[u] = F;
            }
            F = f.join("");
            h += ";" + F + ":" + za("" + g);
          }
          g = h.substr(1);
          if (!g) {
            continue;
          }
        }
        G += "=" + Aa(g, y, v);
      }
    }
    return G.substr(1);
  }
  var l = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : e || {};
  var v = !0 === c.quotAlways, y = !0 === c.useSingleQuot, C = c.instructionAttrPrefix || ":", m, z = !1;
  if (L(a)) {
    return 7 === wa(a) && (a = [11, a]), k(a, null, 0, !1, !1);
  }
  l("Invalid html.json document!");
}
;Z.json2html = !0;
Za = function(a, b, c, e) {
  a.shift();
  return fb(a, b, c, e) || "";
};
function gb(a, b, c) {
  const e = this, k = require("plugin-error");
  return require("through2").obj(function(d, w, l) {
    if (d.isNull()) {
      return l();
    }
    if (d.isStream()) {
      return this.emit("error", new k("NicePageBuilder.json2html.gulp", "Streaming not supported")), l();
    }
    if (".json" !== d.extname) {
      return this.push(d), l();
    }
    const v = d.stem.split(".").pop();
    switch(v) {
      case "html":
      case "htm":
      case "xhtml":
      case "php":
        w = JSON.parse(d.contents.toString(w)), d.path = w[0].FILE_PATH, d.contents = Buffer.from(Za.call(e, w, a, b, c)), d.extname = "." + v;
    }
    this.push(d);
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
  a = Z.ja(a);
  Wa && (a.html2json = ab);
  Xa && (a.generator = cb);
  Ya && (a.json2json = eb);
  Za && (a.json2html = gb);
  return a;
};
Z.all = {};

