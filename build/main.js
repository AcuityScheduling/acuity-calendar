var acuityCalendar = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 28))
  );
})([
  function(e, t, n) {
    e.exports = n(10)();
  },
  function(e, t) {
    e.exports = react;
  },
  function(e, t) {
    e.exports = moment;
  },
  function(e, t, n) {
    (function(t) {
      var n = 'Expected a function',
        r = '__lodash_hash_undefined__',
        a = 1 / 0,
        o = '[object Function]',
        i = '[object GeneratorFunction]',
        c = '[object Symbol]',
        u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        l = /^\w*$/,
        s = /^\./,
        d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        f = /\\(\\)?/g,
        p = /^\[object .+?Constructor\]$/,
        g = 'object' == typeof t && t && t.Object === Object && t,
        m = 'object' == typeof self && self && self.Object === Object && self,
        v = g || m || Function('return this')();
      var h,
        y = Array.prototype,
        b = Function.prototype,
        _ = Object.prototype,
        E = v['__core-js_shared__'],
        S = (h = /[^.]+$/.exec((E && E.keys && E.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + h
          : '',
        w = b.toString,
        x = _.hasOwnProperty,
        D = _.toString,
        O = RegExp(
          '^' +
            w
              .call(x)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        M = v.Symbol,
        j = y.splice,
        C = Y(v, 'Map'),
        R = Y(Object, 'create'),
        T = M ? M.prototype : void 0,
        k = T ? T.toString : void 0;
      function P(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function H(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function N(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function I(e, t) {
        for (var n, r, a = e.length; a--; )
          if ((n = e[a][0]) === (r = t) || (n != n && r != r)) return a;
        return -1;
      }
      function W(e, t) {
        for (
          var n,
            r = 0,
            a = (t = (function(e, t) {
              if (G(e)) return !1;
              var n = typeof e;
              if (
                'number' == n ||
                'symbol' == n ||
                'boolean' == n ||
                null == e ||
                F(e)
              )
                return !0;
              return l.test(e) || !u.test(e) || (null != t && (e in Object(t)));
            })(t, e)
              ? [t]
              : G((n = t))
              ? n
              : q(n)).length;
          null != e && r < a;

        )
          e = e[B(t[r++])];
        return r && r == a ? e : void 0;
      }
      function z(e) {
        return (
          !(!U(e) || ((t = e), S && S in t)) &&
          ((function(e) {
            var t = U(e) ? D.call(e) : '';
            return t == o || t == i;
          })(e) ||
          (function(e) {
            var t = !1;
            if (null != e && 'function' != typeof e.toString)
              try {
                t = !!(e + '');
              } catch (e) {}
            return t;
          })(e)
            ? O
            : p
          ).test(
            (function(e) {
              if (null != e) {
                try {
                  return w.call(e);
                } catch (e) {}
                try {
                  return e + '';
                } catch (e) {}
              }
              return '';
            })(e)
          )
        );
        var t;
      }
      function A(e, t) {
        var n,
          r,
          a = e.__data__;
        return ('string' == (r = typeof (n = t)) ||
        'number' == r ||
        'symbol' == r ||
        'boolean' == r
        ? '__proto__' !== n
        : null === n)
          ? a['string' == typeof t ? 'string' : 'hash']
          : a.map;
      }
      function Y(e, t) {
        var n = (function(e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return z(n) ? n : void 0;
      }
      (P.prototype.clear = function() {
        this.__data__ = R ? R(null) : {};
      }),
        (P.prototype.delete = function(e) {
          return this.has(e) && delete this.__data__[e];
        }),
        (P.prototype.get = function(e) {
          var t = this.__data__;
          if (R) {
            var n = t[e];
            return n === r ? void 0 : n;
          }
          return x.call(t, e) ? t[e] : void 0;
        }),
        (P.prototype.has = function(e) {
          var t = this.__data__;
          return R ? void 0 !== t[e] : x.call(t, e);
        }),
        (P.prototype.set = function(e, t) {
          return (this.__data__[e] = R && void 0 === t ? r : t), this;
        }),
        (H.prototype.clear = function() {
          this.__data__ = [];
        }),
        (H.prototype.delete = function(e) {
          var t = this.__data__,
            n = I(t, e);
          return !(n < 0 || (n == t.length - 1 ? t.pop() : j.call(t, n, 1), 0));
        }),
        (H.prototype.get = function(e) {
          var t = this.__data__,
            n = I(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (H.prototype.has = function(e) {
          return I(this.__data__, e) > -1;
        }),
        (H.prototype.set = function(e, t) {
          var n = this.__data__,
            r = I(n, e);
          return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
        }),
        (N.prototype.clear = function() {
          this.__data__ = {
            hash: new P(),
            map: new (C || H)(),
            string: new P(),
          };
        }),
        (N.prototype.delete = function(e) {
          return A(this, e).delete(e);
        }),
        (N.prototype.get = function(e) {
          return A(this, e).get(e);
        }),
        (N.prototype.has = function(e) {
          return A(this, e).has(e);
        }),
        (N.prototype.set = function(e, t) {
          return A(this, e).set(e, t), this;
        });
      var q = L(function(e) {
        var t;
        e =
          null == (t = e)
            ? ''
            : (function(e) {
                if ('string' == typeof e) return e;
                if (F(e)) return k ? k.call(e) : '';
                var t = e + '';
                return '0' == t && 1 / e == -a ? '-0' : t;
              })(t);
        var n = [];
        return (
          s.test(e) && n.push(''),
          e.replace(d, function(e, t, r, a) {
            n.push(r ? a.replace(f, '$1') : t || e);
          }),
          n
        );
      });
      function B(e) {
        if ('string' == typeof e || F(e)) return e;
        var t = e + '';
        return '0' == t && 1 / e == -a ? '-0' : t;
      }
      function L(e, t) {
        if ('function' != typeof e || (t && 'function' != typeof t))
          throw new TypeError(n);
        var r = function() {
          var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(a)) return o.get(a);
          var i = e.apply(this, n);
          return (r.cache = o.set(a, i)), i;
        };
        return (r.cache = new (L.Cache || N)()), r;
      }
      L.Cache = N;
      var G = Array.isArray;
      function U(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function F(e) {
        return (
          'symbol' == typeof e ||
          ((function(e) {
            return !!e && 'object' == typeof e;
          })(e) &&
            D.call(e) == c)
        );
      }
      e.exports = function(e, t, n) {
        var r = null == e ? void 0 : W(e, t);
        return void 0 === r ? n : r;
      };
    }.call(this, n(8)));
  },
  function(e, t) {
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || '',
                r = e[3];
              if (!r) return n;
              if (t && 'function' == typeof btoa) {
                var a = ((i = r),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                    ' */'),
                  o = r.sources.map(function(e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                  });
                return [n]
                  .concat(o)
                  .concat([a])
                  .join('\n');
              }
              var i;
              return [n].join('\n');
            })(t, e);
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
          }).join('');
        }),
        (t.i = function(e, n) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var r = {}, a = 0; a < this.length; a++) {
            var o = this[a][0];
            'number' == typeof o && (r[o] = !0);
          }
          for (a = 0; a < e.length; a++) {
            var i = e[a];
            ('number' == typeof i[0] && r[i[0]]) ||
              (n && !i[2]
                ? (i[2] = n)
                : n && (i[2] = '(' + i[2] + ') and (' + n + ')'),
              t.push(i));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    var r,
      a,
      o = {},
      i = ((r = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === a && (a = r.apply(this, arguments)), a;
      }),
      c = (function(e) {
        var t = {};
        return function(e) {
          if ('function' == typeof e) return e();
          if (void 0 === t[e]) {
            var n = function(e) {
              return document.querySelector(e);
            }.call(this, e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })(),
      u = null,
      l = 0,
      s = [],
      d = n(15);
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = o[r.id];
        if (a) {
          a.refs++;
          for (var i = 0; i < a.parts.length; i++) a.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) a.parts.push(y(r.parts[i], t));
        } else {
          var c = [];
          for (i = 0; i < r.parts.length; i++) c.push(y(r.parts[i], t));
          o[r.id] = { id: r.id, refs: 1, parts: c };
        }
      }
    }
    function p(e, t) {
      for (var n = [], r = {}, a = 0; a < e.length; a++) {
        var o = e[a],
          i = t.base ? o[0] + t.base : o[0],
          c = { css: o[1], media: o[2], sourceMap: o[3] };
        r[i] ? r[i].parts.push(c) : n.push((r[i] = { id: i, parts: [c] }));
      }
      return n;
    }
    function g(e, t) {
      var n = c(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = s[s.length - 1];
      if ('top' === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          s.push(t);
      else if ('bottom' === e.insertAt) n.appendChild(t);
      else {
        if ('object' != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var a = c(e.insertInto + ' ' + e.insertAt.before);
        n.insertBefore(t, a);
      }
    }
    function m(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = s.indexOf(e);
      t >= 0 && s.splice(t, 1);
    }
    function v(e) {
      var t = document.createElement('style');
      return (e.attrs.type = 'text/css'), h(t, e.attrs), g(e, t), t;
    }
    function h(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function y(e, t) {
      var n, r, a, o;
      if (t.transform && e.css) {
        if (!(o = t.transform(e.css))) return function() {};
        e.css = o;
      }
      if (t.singleton) {
        var i = l++;
        (n = u || (u = v(t))),
          (r = E.bind(null, n, i, !1)),
          (a = E.bind(null, n, i, !0));
      } else
        e.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement('link');
              return (
                (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                h(t, e.attrs),
                g(e, t),
                t
              );
            })(t)),
            (r = function(e, t, n) {
              var r = n.css,
                a = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && a;
              (t.convertToAbsoluteUrls || o) && (r = d(r));
              a &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                  ' */');
              var i = new Blob([r], { type: 'text/css' }),
                c = e.href;
              (e.href = URL.createObjectURL(i)), c && URL.revokeObjectURL(c);
            }.bind(null, n, t)),
            (a = function() {
              m(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = v(t)),
            (r = function(e, t) {
              var n = t.css,
                r = t.media;
              r && e.setAttribute('media', r);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (a = function() {
              m(n);
            }));
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else a();
        }
      );
    }
    e.exports = function(e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        );
      ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = i()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom');
      var n = p(e, t);
      return (
        f(n, t),
        function(e) {
          for (var r = [], a = 0; a < n.length; a++) {
            var i = n[a];
            (c = o[i.id]).refs--, r.push(c);
          }
          e && f(p(e, t), t);
          for (a = 0; a < r.length; a++) {
            var c;
            if (0 === (c = r[a]).refs) {
              for (var u = 0; u < c.parts.length; u++) c.parts[u]();
              delete o[c.id];
            }
          }
        }
      );
    };
    var b,
      _ = ((b = []),
      function(e, t) {
        return (b[e] = t), b.filter(Boolean).join('\n');
      });
    function E(e, t, n, r) {
      var a = n ? '' : r.css;
      if (e.styleSheet) e.styleSheet.cssText = _(t, a);
      else {
        var o = document.createTextNode(a),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
      }
    }
  },
  function(e, t, n) {
    (function(t) {
      var n = 'Expected a function',
        r = NaN,
        a = '[object Symbol]',
        o = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        l = parseInt,
        s = 'object' == typeof t && t && t.Object === Object && t,
        d = 'object' == typeof self && self && self.Object === Object && self,
        f = s || d || Function('return this')(),
        p = Object.prototype.toString,
        g = Math.max,
        m = Math.min,
        v = function() {
          return f.Date.now();
        };
      function h(e, t, r) {
        var a,
          o,
          i,
          c,
          u,
          l,
          s = 0,
          d = !1,
          f = !1,
          p = !0;
        if ('function' != typeof e) throw new TypeError(n);
        function h(t) {
          var n = a,
            r = o;
          return (a = o = void 0), (s = t), (c = e.apply(r, n));
        }
        function _(e) {
          var n = e - l;
          return void 0 === l || n >= t || n < 0 || (f && e - s >= i);
        }
        function E() {
          var e = v();
          if (_(e)) return S(e);
          u = setTimeout(
            E,
            (function(e) {
              var n = t - (e - l);
              return f ? m(n, i - (e - s)) : n;
            })(e)
          );
        }
        function S(e) {
          return (u = void 0), p && a ? h(e) : ((a = o = void 0), c);
        }
        function w() {
          var e = v(),
            n = _(e);
          if (((a = arguments), (o = this), (l = e), n)) {
            if (void 0 === u)
              return (function(e) {
                return (s = e), (u = setTimeout(E, t)), d ? h(e) : c;
              })(l);
            if (f) return (u = setTimeout(E, t)), h(l);
          }
          return void 0 === u && (u = setTimeout(E, t)), c;
        }
        return (
          (t = b(t) || 0),
          y(r) &&
            ((d = !!r.leading),
            (i = (f = 'maxWait' in r) ? g(b(r.maxWait) || 0, t) : i),
            (p = 'trailing' in r ? !!r.trailing : p)),
          (w.cancel = function() {
            void 0 !== u && clearTimeout(u), (s = 0), (a = l = o = u = void 0);
          }),
          (w.flush = function() {
            return void 0 === u ? c : S(v());
          }),
          w
        );
      }
      function y(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function b(e) {
        if ('number' == typeof e) return e;
        if (
          (function(e) {
            return (
              'symbol' == typeof e ||
              ((function(e) {
                return !!e && 'object' == typeof e;
              })(e) &&
                p.call(e) == a)
            );
          })(e)
        )
          return r;
        if (y(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = y(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, '');
        var n = c.test(e);
        return n || u.test(e) ? l(e.slice(2), n ? 2 : 8) : i.test(e) ? r : +e;
      }
      e.exports = function(e, t, r) {
        var a = !0,
          o = !0;
        if ('function' != typeof e) throw new TypeError(n);
        return (
          y(r) &&
            ((a = 'leading' in r ? !!r.leading : a),
            (o = 'trailing' in r ? !!r.trailing : o)),
          h(e, t, { leading: a, maxWait: t, trailing: o })
        );
      };
    }.call(this, n(8)));
  },
  function(e, t, n) {
    e.exports = (function(e, t) {
      'use strict';
      function n(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      function r(e) {
        return function() {
          return e;
        };
      }
      (e = e && e.hasOwnProperty('default') ? e.default : e),
        (t = t && t.hasOwnProperty('default') ? t.default : t);
      var a = function() {};
      (a.thatReturns = r),
        (a.thatReturnsFalse = r(!1)),
        (a.thatReturnsTrue = r(!0)),
        (a.thatReturnsNull = r(null)),
        (a.thatReturnsThis = function() {
          return this;
        }),
        (a.thatReturnsArgument = function(e) {
          return e;
        });
      var o = a,
        i = function(e) {};
      i = function(e) {
        if (void 0 === e)
          throw new Error('invariant requires an error message argument');
      };
      var c = function(e, t, n, r, a, o, c, u) {
          if ((i(t), !e)) {
            var l;
            if (void 0 === t)
              l = new Error(
                'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
              );
            else {
              var s = [n, r, a, o, c, u],
                d = 0;
              (l = new Error(
                t.replace(/%s/g, function() {
                  return s[d++];
                })
              )).name = 'Invariant Violation';
            }
            throw ((l.framesToPop = 1), l);
          }
        },
        u = function(e, t) {
          if (void 0 === t)
            throw new Error(
              '`warning(condition, format, ...args)` requires a warning message argument'
            );
          if (0 !== t.indexOf('Failed Composite propType: ') && !e) {
            for (
              var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2;
              a < n;
              a++
            )
              r[a - 2] = arguments[a];
            (function(e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              var a = 0,
                o =
                  'Warning: ' +
                  e.replace(/%s/g, function() {
                    return n[a++];
                  });
              'undefined' != typeof console && console.error(o);
              try {
                throw new Error(o);
              } catch (e) {}
            }.apply(void 0, [t].concat(r)));
          }
        },
        l = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (function() {
          try {
            if (!Object.assign) return !1;
            var e = new String('abc');
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t['_' + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(t).map(function(e) {
              return t[e];
            });
            if ('0123456789' !== r.join('')) return !1;
            var a = {};
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function(e) {
                a[e] = e;
              }),
              'abcdefghijklmnopqrst' ===
                Object.keys(Object.assign({}, a)).join('')
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function(e, t) {
              for (
                var n,
                  r,
                  a = (function(e) {
                    if (null == e)
                      throw new TypeError(
                        'Object.assign cannot be called with null or undefined'
                      );
                    return Object(e);
                  })(e),
                  o = 1;
                o < arguments.length;
                o++
              ) {
                for (var i in (n = Object(arguments[o])))
                  s.call(n, i) && (a[i] = n[i]);
                if (l) {
                  r = l(n);
                  for (var c = 0; c < r.length; c++)
                    d.call(n, r[c]) && (a[r[c]] = n[r[c]]);
                }
              }
              return a;
            },
        p = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
        g = c,
        m = u,
        v = p,
        h = {},
        y = function(e, t, n, r, a) {
          for (var o in e)
            if (e.hasOwnProperty(o)) {
              var i;
              try {
                g(
                  'function' == typeof e[o],
                  '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
                  r || 'React class',
                  n,
                  o,
                  typeof e[o]
                ),
                  (i = e[o](t, o, r, n, null, v));
              } catch (e) {
                i = e;
              }
              if (
                (m(
                  !i || i instanceof Error,
                  '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                  r || 'React class',
                  n,
                  o,
                  typeof i
                ),
                i instanceof Error && !(i.message in h))
              ) {
                h[i.message] = !0;
                var c = a ? a() : '';
                m(!1, 'Failed %s type: %s%s', n, i.message, null != c ? c : '');
              }
            }
        },
        b = function(e, t) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            r = '@@iterator',
            a = '<<anonymous>>',
            i = {
              array: d('array'),
              bool: d('boolean'),
              func: d('function'),
              number: d('number'),
              object: d('object'),
              string: d('string'),
              symbol: d('symbol'),
              any: s(o.thatReturnsNull),
              arrayOf: function(e) {
                return s(function(t, n, r, a, o) {
                  if ('function' != typeof e)
                    return new l(
                      'Property `' +
                        o +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside arrayOf.'
                    );
                  var i = t[n];
                  if (!Array.isArray(i)) {
                    var c = m(i);
                    return new l(
                      'Invalid ' +
                        a +
                        ' `' +
                        o +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        r +
                        '`, expected an array.'
                    );
                  }
                  for (var u = 0; u < i.length; u++) {
                    var s = e(i, u, r, a, o + '[' + u + ']', p);
                    if (s instanceof Error) return s;
                  }
                  return null;
                });
              },
              element: s(function(t, n, r, a, o) {
                var i = t[n];
                if (!e(i)) {
                  var c = m(i);
                  return new l(
                    'Invalid ' +
                      a +
                      ' `' +
                      o +
                      '` of type `' +
                      c +
                      '` supplied to `' +
                      r +
                      '`, expected a single ReactElement.'
                  );
                }
                return null;
              }),
              instanceOf: function(e) {
                return s(function(t, n, r, o, i) {
                  if (!(t[n] instanceof e)) {
                    var c = e.name || a,
                      u =
                        (s = t[n]).constructor && s.constructor.name
                          ? s.constructor.name
                          : a;
                    return new l(
                      'Invalid ' +
                        o +
                        ' `' +
                        i +
                        '` of type `' +
                        u +
                        '` supplied to `' +
                        r +
                        '`, expected instance of `' +
                        c +
                        '`.'
                    );
                  }
                  var s;
                  return null;
                });
              },
              node: s(function(e, t, n, r, a) {
                return g(e[t])
                  ? null
                  : new l(
                      'Invalid ' +
                        r +
                        ' `' +
                        a +
                        '` supplied to `' +
                        n +
                        '`, expected a ReactNode.'
                    );
              }),
              objectOf: function(e) {
                return s(function(t, n, r, a, o) {
                  if ('function' != typeof e)
                    return new l(
                      'Property `' +
                        o +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside objectOf.'
                    );
                  var i = t[n],
                    c = m(i);
                  if ('object' !== c)
                    return new l(
                      'Invalid ' +
                        a +
                        ' `' +
                        o +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        r +
                        '`, expected an object.'
                    );
                  for (var u in i)
                    if (i.hasOwnProperty(u)) {
                      var s = e(i, u, r, a, o + '.' + u, p);
                      if (s instanceof Error) return s;
                    }
                  return null;
                });
              },
              oneOf: function(e) {
                return Array.isArray(e)
                  ? s(function(t, n, r, a, o) {
                      for (var i = t[n], c = 0; c < e.length; c++)
                        if (
                          ((u = i),
                          (s = e[c]),
                          u === s
                            ? 0 !== u || 1 / u == 1 / s
                            : u != u && s != s)
                        )
                          return null;
                      var u,
                        s,
                        d = JSON.stringify(e);
                      return new l(
                        'Invalid ' +
                          a +
                          ' `' +
                          o +
                          '` of value `' +
                          i +
                          '` supplied to `' +
                          r +
                          '`, expected one of ' +
                          d +
                          '.'
                      );
                    })
                  : (u(
                      !1,
                      'Invalid argument supplied to oneOf, expected an instance of array.'
                    ),
                    o.thatReturnsNull);
              },
              oneOfType: function(e) {
                if (!Array.isArray(e))
                  return (
                    u(
                      !1,
                      'Invalid argument supplied to oneOfType, expected an instance of array.'
                    ),
                    o.thatReturnsNull
                  );
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  if ('function' != typeof n)
                    return (
                      u(
                        !1,
                        'Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.',
                        h(n),
                        t
                      ),
                      o.thatReturnsNull
                    );
                }
                return s(function(t, n, r, a, o) {
                  for (var i = 0; i < e.length; i++) {
                    var c = e[i];
                    if (null == c(t, n, r, a, o, p)) return null;
                  }
                  return new l(
                    'Invalid ' + a + ' `' + o + '` supplied to `' + r + '`.'
                  );
                });
              },
              shape: function(e) {
                return s(function(t, n, r, a, o) {
                  var i = t[n],
                    c = m(i);
                  if ('object' !== c)
                    return new l(
                      'Invalid ' +
                        a +
                        ' `' +
                        o +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  for (var u in e) {
                    var s = e[u];
                    if (s) {
                      var d = s(i, u, r, a, o + '.' + u, p);
                      if (d) return d;
                    }
                  }
                  return null;
                });
              },
              exact: function(e) {
                return s(function(t, n, r, a, o) {
                  var i = t[n],
                    c = m(i);
                  if ('object' !== c)
                    return new l(
                      'Invalid ' +
                        a +
                        ' `' +
                        o +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  var u = f({}, t[n], e);
                  for (var s in u) {
                    var d = e[s];
                    if (!d)
                      return new l(
                        'Invalid ' +
                          a +
                          ' `' +
                          o +
                          '` key `' +
                          s +
                          '` supplied to `' +
                          r +
                          '`.\nBad object: ' +
                          JSON.stringify(t[n], null, '  ') +
                          '\nValid keys: ' +
                          JSON.stringify(Object.keys(e), null, '  ')
                      );
                    var g = d(i, s, r, a, o + '.' + s, p);
                    if (g) return g;
                  }
                  return null;
                });
              },
            };
          function l(e) {
            (this.message = e), (this.stack = '');
          }
          function s(e) {
            var n = {},
              r = 0;
            function o(o, i, s, d, f, g, m) {
              if (((d = d || a), (g = g || s), m !== p))
                if (t)
                  c(
                    !1,
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                else if ('undefined' != typeof console) {
                  var v = d + ':' + s;
                  !n[v] &&
                    r < 3 &&
                    (u(
                      !1,
                      'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                      g,
                      d
                    ),
                    (n[v] = !0),
                    r++);
                }
              return null == i[s]
                ? o
                  ? null === i[s]
                    ? new l(
                        'The ' +
                          f +
                          ' `' +
                          g +
                          '` is marked as required in `' +
                          d +
                          '`, but its value is `null`.'
                      )
                    : new l(
                        'The ' +
                          f +
                          ' `' +
                          g +
                          '` is marked as required in `' +
                          d +
                          '`, but its value is `undefined`.'
                      )
                  : null
                : e(i, s, d, f, g);
            }
            var i = o.bind(null, !1);
            return (i.isRequired = o.bind(null, !0)), i;
          }
          function d(e) {
            return s(function(t, n, r, a, o, i) {
              var c = t[n];
              if (m(c) !== e) {
                var u = v(c);
                return new l(
                  'Invalid ' +
                    a +
                    ' `' +
                    o +
                    '` of type `' +
                    u +
                    '` supplied to `' +
                    r +
                    '`, expected `' +
                    e +
                    '`.'
                );
              }
              return null;
            });
          }
          function g(t) {
            switch (typeof t) {
              case 'number':
              case 'string':
              case 'undefined':
                return !0;
              case 'boolean':
                return !t;
              case 'object':
                if (Array.isArray(t)) return t.every(g);
                if (null === t || e(t)) return !0;
                var a = (function(e) {
                  var t = e && ((n && e[n]) || e[r]);
                  if ('function' == typeof t) return t;
                })(t);
                if (!a) return !1;
                var o,
                  i = a.call(t);
                if (a !== t.entries) {
                  for (; !(o = i.next()).done; ) if (!g(o.value)) return !1;
                } else
                  for (; !(o = i.next()).done; ) {
                    var c = o.value;
                    if (c && !g(c[1])) return !1;
                  }
                return !0;
              default:
                return !1;
            }
          }
          function m(e) {
            var t = typeof e;
            return Array.isArray(e)
              ? 'array'
              : e instanceof RegExp
              ? 'object'
              : (function(e, t) {
                  return (
                    'symbol' === e ||
                    ('Symbol' === t['@@toStringTag'] ||
                      ('function' == typeof Symbol && t instanceof Symbol))
                  );
                })(t, e)
              ? 'symbol'
              : t;
          }
          function v(e) {
            if (null == e) return '' + e;
            var t = m(e);
            if ('object' === t) {
              if (e instanceof Date) return 'date';
              if (e instanceof RegExp) return 'regexp';
            }
            return t;
          }
          function h(e) {
            var t = v(e);
            switch (t) {
              case 'array':
              case 'object':
                return 'an ' + t;
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + t;
              default:
                return t;
            }
          }
          return (
            (l.prototype = Error.prototype),
            (i.checkPropTypes = y),
            (i.PropTypes = i),
            i
          );
        },
        _ = n(function(e) {
          var t =
            ('function' == typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          e.exports = b(function(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === t;
          }, !0);
        }),
        E = n(function(e) {
          /*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
          !(function() {
            var t = {}.hasOwnProperty;
            function n() {
              for (var e = [], r = 0; r < arguments.length; r++) {
                var a = arguments[r];
                if (a) {
                  var o = typeof a;
                  if ('string' === o || 'number' === o) e.push(a);
                  else if (Array.isArray(a)) e.push(n.apply(null, a));
                  else if ('object' === o)
                    for (var i in a) t.call(a, i) && a[i] && e.push(i);
                }
              }
              return e.join(' ');
            }
            e.exports ? (e.exports = n) : (window.classNames = n);
          })();
        });
      function S(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (t.apply(t, [e[n], n, e])) return e[n];
      }
      function w(e) {
        return (
          'function' == typeof e ||
          '[object Function]' === Object.prototype.toString.call(e)
        );
      }
      function x(e) {
        return 'number' == typeof e && !isNaN(e);
      }
      function D(e) {
        return parseInt(e, 10);
      }
      function O(e, t, n) {
        if (e[t])
          return new Error(
            'Invalid prop ' +
              t +
              ' passed to ' +
              n +
              ' - do not set this, set it on the child.'
          );
      }
      var M = ['Moz', 'Webkit', 'O', 'ms'];
      function j(e, t) {
        return t
          ? '' +
              t +
              (function(e) {
                for (var t = '', n = !0, r = 0; r < e.length; r++)
                  n
                    ? ((t += e[r].toUpperCase()), (n = !1))
                    : '-' === e[r]
                    ? (n = !0)
                    : (t += e[r]);
                return t;
              })(e)
          : e;
      }
      var C = (function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'transform';
          if ('undefined' == typeof window || void 0 === window.document)
            return '';
          var t = window.document.documentElement.style;
          if (e in t) return '';
          for (var n = 0; n < M.length; n++) if (j(e, M[n]) in t) return M[n];
          return '';
        })(),
        R = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        },
        T = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        k = function(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        },
        P =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        H = function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        },
        N = function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        },
        I = function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var n = [],
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  !r && c.return && c.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        },
        W = '';
      function z(e, t) {
        return (
          W ||
            (W = S(
              [
                'matches',
                'webkitMatchesSelector',
                'mozMatchesSelector',
                'msMatchesSelector',
                'oMatchesSelector',
              ],
              function(t) {
                return w(e[t]);
              }
            )),
          !!w(e[W]) && e[W](t)
        );
      }
      function A(e, t, n) {
        var r = e;
        do {
          if (z(r, t)) return !0;
          if (r === n) return !1;
          r = r.parentNode;
        } while (r);
        return !1;
      }
      function Y(e, t, n) {
        e &&
          (e.attachEvent
            ? e.attachEvent('on' + t, n)
            : e.addEventListener
            ? e.addEventListener(t, n, !0)
            : (e['on' + t] = n));
      }
      function q(e, t, n) {
        e &&
          (e.detachEvent
            ? e.detachEvent('on' + t, n)
            : e.removeEventListener
            ? e.removeEventListener(t, n, !0)
            : (e['on' + t] = null));
      }
      function B(e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t += D(n.borderTopWidth)), (t += D(n.borderBottomWidth));
      }
      function L(e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t += D(n.borderLeftWidth)), (t += D(n.borderRightWidth));
      }
      function G(e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t -= D(n.paddingTop)), (t -= D(n.paddingBottom));
      }
      function U(e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t -= D(n.paddingLeft)), (t -= D(n.paddingRight));
      }
      function F(e) {
        if (e) {
          var t,
            n,
            r = e.getElementById('react-draggable-style-el');
          r ||
            (((r = e.createElement('style')).type = 'text/css'),
            (r.id = 'react-draggable-style-el'),
            (r.innerHTML =
              '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n'),
            (r.innerHTML +=
              '.react-draggable-transparent-selection *::selection {background: transparent;}\n'),
            e.getElementsByTagName('head')[0].appendChild(r)),
            e.body &&
              ((t = e.body),
              (n = 'react-draggable-transparent-selection'),
              t.classList
                ? t.classList.add(n)
                : t.className.match(new RegExp('(?:^|\\s)' + n + '(?!\\S)')) ||
                  (t.className += ' ' + n));
        }
      }
      function X(e) {
        try {
          e &&
            e.body &&
            ((t = e.body),
            (n = 'react-draggable-transparent-selection'),
            t.classList
              ? t.classList.remove(n)
              : (t.className = t.className.replace(
                  new RegExp('(?:^|\\s)' + n + '(?!\\S)', 'g'),
                  ''
                ))),
            e.selection
              ? e.selection.empty()
              : window.getSelection().removeAllRanges();
        } catch (e) {}
        var t, n;
      }
      function $() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return P({ touchAction: 'none' }, e);
      }
      function V(e) {
        return 'both' === e.props.axis || 'x' === e.props.axis;
      }
      function J(e) {
        return 'both' === e.props.axis || 'y' === e.props.axis;
      }
      function K(e, t, n) {
        var r =
          'number' == typeof t
            ? (function(e, t) {
                return (
                  (e.targetTouches &&
                    S(e.targetTouches, function(e) {
                      return t === e.identifier;
                    })) ||
                  (e.changedTouches &&
                    S(e.changedTouches, function(e) {
                      return t === e.identifier;
                    }))
                );
              })(e, t)
            : null;
        if ('number' == typeof t && !r) return null;
        var a = ee(n),
          o = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
        return (function(e, t) {
          var n =
              t === t.ownerDocument.body
                ? { left: 0, top: 0 }
                : t.getBoundingClientRect(),
            r = e.clientX + t.scrollLeft - n.left,
            a = e.clientY + t.scrollTop - n.top;
          return { x: r, y: a };
        })(r || e, o);
      }
      function Q(e, t, n) {
        var r = e.state,
          a = !x(r.lastX),
          o = ee(e);
        return a
          ? { node: o, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
          : {
              node: o,
              deltaX: t - r.lastX,
              deltaY: n - r.lastY,
              lastX: r.lastX,
              lastY: r.lastY,
              x: t,
              y: n,
            };
      }
      function Z(e, t) {
        var n = e.props.scale;
        return {
          node: t.node,
          x: e.state.x + t.deltaX / n,
          y: e.state.y + t.deltaY / n,
          deltaX: t.deltaX / n,
          deltaY: t.deltaY / n,
          lastX: e.state.x,
          lastY: e.state.y,
        };
      }
      function ee(t) {
        var n = e.findDOMNode(t);
        if (!n) throw new Error('<DraggableCore>: Unmounted during event!');
        return n;
      }
      var te = {
          touch: { start: 'touchstart', move: 'touchmove', stop: 'touchend' },
          mouse: { start: 'mousedown', move: 'mousemove', stop: 'mouseup' },
        },
        ne = te.mouse,
        re = (function(n) {
          function r() {
            var t, n, a;
            R(this, r);
            for (var o = arguments.length, i = Array(o), c = 0; c < o; c++)
              i[c] = arguments[c];
            return (
              (a = N(
                this,
                (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                  t,
                  [this].concat(i)
                )
              )),
              (n = a),
              (a.state = {
                dragging: !1,
                lastX: NaN,
                lastY: NaN,
                touchIdentifier: null,
              }),
              (a.handleDragStart = function(t) {
                if (
                  (a.props.onMouseDown(t),
                  !a.props.allowAnyClick &&
                    'number' == typeof t.button &&
                    0 !== t.button)
                )
                  return !1;
                var n = e.findDOMNode(a);
                if (!n || !n.ownerDocument || !n.ownerDocument.body)
                  throw new Error('<DraggableCore> not mounted on DragStart!');
                var r = n.ownerDocument;
                if (
                  !(
                    a.props.disabled ||
                    !(t.target instanceof r.defaultView.Node) ||
                    (a.props.handle && !A(t.target, a.props.handle, n)) ||
                    (a.props.cancel && A(t.target, a.props.cancel, n))
                  )
                ) {
                  var o = (function(e) {
                    return e.targetTouches && e.targetTouches[0]
                      ? e.targetTouches[0].identifier
                      : e.changedTouches && e.changedTouches[0]
                      ? e.changedTouches[0].identifier
                      : void 0;
                  })(t);
                  a.setState({ touchIdentifier: o });
                  var i = K(t, o, a);
                  if (null != i) {
                    var c = i.x,
                      u = i.y,
                      l = Q(a, c, u);
                    a.props.onStart;
                    var s = a.props.onStart(t, l);
                    !1 !== s &&
                      (a.props.enableUserSelectHack && F(r),
                      a.setState({ dragging: !0, lastX: c, lastY: u }),
                      Y(r, ne.move, a.handleDrag),
                      Y(r, ne.stop, a.handleDragStop));
                  }
                }
              }),
              (a.handleDrag = function(e) {
                'touchmove' === e.type && e.preventDefault();
                var t = K(e, a.state.touchIdentifier, a);
                if (null != t) {
                  var n = t.x,
                    r = t.y;
                  if (Array.isArray(a.props.grid)) {
                    var o = n - a.state.lastX,
                      i = r - a.state.lastY,
                      c = (function(e, t, n) {
                        var r = Math.round(t / e[0]) * e[0],
                          a = Math.round(n / e[1]) * e[1];
                        return [r, a];
                      })(a.props.grid, o, i),
                      u = I(c, 2);
                    if (((o = u[0]), (i = u[1]), !o && !i)) return;
                    (n = a.state.lastX + o), (r = a.state.lastY + i);
                  }
                  var l = Q(a, n, r),
                    s = a.props.onDrag(e, l);
                  if (!1 !== s) a.setState({ lastX: n, lastY: r });
                  else
                    try {
                      a.handleDragStop(new MouseEvent('mouseup'));
                    } catch (e) {
                      var d = document.createEvent('MouseEvents');
                      d.initMouseEvent(
                        'mouseup',
                        !0,
                        !0,
                        window,
                        0,
                        0,
                        0,
                        0,
                        0,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        a.handleDragStop(d);
                    }
                }
              }),
              (a.handleDragStop = function(t) {
                if (a.state.dragging) {
                  var n = K(t, a.state.touchIdentifier, a);
                  if (null != n) {
                    var r = n.x,
                      o = n.y,
                      i = Q(a, r, o),
                      c = e.findDOMNode(a);
                    c && a.props.enableUserSelectHack && X(c.ownerDocument),
                      a.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                      a.props.onStop(t, i),
                      c &&
                        (q(c.ownerDocument, ne.move, a.handleDrag),
                        q(c.ownerDocument, ne.stop, a.handleDragStop));
                  }
                }
              }),
              (a.onMouseDown = function(e) {
                return (ne = te.mouse), a.handleDragStart(e);
              }),
              (a.onMouseUp = function(e) {
                return (ne = te.mouse), a.handleDragStop(e);
              }),
              (a.onTouchStart = function(e) {
                return (ne = te.touch), a.handleDragStart(e);
              }),
              (a.onTouchEnd = function(e) {
                return (ne = te.touch), a.handleDragStop(e);
              }),
              N(a, n)
            );
          }
          return (
            H(r, n),
            T(r, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  var t = e.findDOMNode(this);
                  if (t) {
                    var n = t.ownerDocument;
                    q(n, te.mouse.move, this.handleDrag),
                      q(n, te.touch.move, this.handleDrag),
                      q(n, te.mouse.stop, this.handleDragStop),
                      q(n, te.touch.stop, this.handleDragStop),
                      this.props.enableUserSelectHack && X(n);
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  return t.cloneElement(t.Children.only(this.props.children), {
                    style: $(this.props.children.props.style),
                    onMouseDown: this.onMouseDown,
                    onTouchStart: this.onTouchStart,
                    onMouseUp: this.onMouseUp,
                    onTouchEnd: this.onTouchEnd,
                  });
                },
              },
            ]),
            r
          );
        })(t.Component);
      (re.displayName = 'DraggableCore'),
        (re.propTypes = {
          allowAnyClick: _.bool,
          disabled: _.bool,
          enableUserSelectHack: _.bool,
          offsetParent: function(e, t) {
            if (e[t] && 1 !== e[t].nodeType)
              throw new Error("Draggable's offsetParent must be a DOM Node.");
          },
          grid: _.arrayOf(_.number),
          scale: _.number,
          handle: _.string,
          cancel: _.string,
          onStart: _.func,
          onDrag: _.func,
          onStop: _.func,
          onMouseDown: _.func,
          className: O,
          style: O,
          transform: O,
        }),
        (re.defaultProps = {
          allowAnyClick: !1,
          cancel: null,
          disabled: !1,
          enableUserSelectHack: !0,
          offsetParent: null,
          handle: null,
          grid: null,
          transform: null,
          onStart: function() {},
          onDrag: function() {},
          onStop: function() {},
          onMouseDown: function() {},
        });
      var ae = (function(n) {
        function r(e) {
          R(this, r);
          var t = N(
            this,
            (r.__proto__ || Object.getPrototypeOf(r)).call(this, e)
          );
          return (
            (t.onDragStart = function(e, n) {
              var r = t.props.onStart(e, Z(t, n));
              if (!1 === r) return !1;
              t.setState({ dragging: !0, dragged: !0 });
            }),
            (t.onDrag = function(e, n) {
              if (!t.state.dragging) return !1;
              var r = Z(t, n),
                a = { x: r.x, y: r.y };
              if (t.props.bounds) {
                var o = a.x,
                  i = a.y;
                (a.x += t.state.slackX), (a.y += t.state.slackY);
                var c = (function(e, t, n) {
                    if (!e.props.bounds) return [t, n];
                    var r = e.props.bounds;
                    r =
                      'string' == typeof r
                        ? r
                        : (function(e) {
                            return {
                              left: e.left,
                              top: e.top,
                              right: e.right,
                              bottom: e.bottom,
                            };
                          })(r);
                    var a = ee(e);
                    if ('string' == typeof r) {
                      var o = a.ownerDocument,
                        i = o.defaultView,
                        c = void 0;
                      if (
                        !(
                          (c =
                            'parent' === r
                              ? a.parentNode
                              : o.querySelector(r)) instanceof i.HTMLElement
                        )
                      )
                        throw new Error(
                          'Bounds selector "' +
                            r +
                            '" could not find an element.'
                        );
                      var u = i.getComputedStyle(a),
                        l = i.getComputedStyle(c);
                      r = {
                        left:
                          -a.offsetLeft + D(l.paddingLeft) + D(u.marginLeft),
                        top: -a.offsetTop + D(l.paddingTop) + D(u.marginTop),
                        right:
                          U(c) -
                          L(a) -
                          a.offsetLeft +
                          D(l.paddingRight) -
                          D(u.marginRight),
                        bottom:
                          G(c) -
                          B(a) -
                          a.offsetTop +
                          D(l.paddingBottom) -
                          D(u.marginBottom),
                      };
                    }
                    return (
                      x(r.right) && (t = Math.min(t, r.right)),
                      x(r.bottom) && (n = Math.min(n, r.bottom)),
                      x(r.left) && (t = Math.max(t, r.left)),
                      x(r.top) && (n = Math.max(n, r.top)),
                      [t, n]
                    );
                  })(t, a.x, a.y),
                  u = I(c, 2),
                  l = u[0],
                  s = u[1];
                (a.x = l),
                  (a.y = s),
                  (a.slackX = t.state.slackX + (o - a.x)),
                  (a.slackY = t.state.slackY + (i - a.y)),
                  (r.x = a.x),
                  (r.y = a.y),
                  (r.deltaX = a.x - t.state.x),
                  (r.deltaY = a.y - t.state.y);
              }
              var d = t.props.onDrag(e, r);
              if (!1 === d) return !1;
              t.setState(a);
            }),
            (t.onDragStop = function(e, n) {
              if (!t.state.dragging) return !1;
              var r = t.props.onStop(e, Z(t, n));
              if (!1 === r) return !1;
              var a = { dragging: !1, slackX: 0, slackY: 0 },
                o = Boolean(t.props.position);
              if (o) {
                var i = t.props.position,
                  c = i.x,
                  u = i.y;
                (a.x = c), (a.y = u);
              }
              t.setState(a);
            }),
            (t.state = {
              dragging: !1,
              dragged: !1,
              x: e.position ? e.position.x : e.defaultPosition.x,
              y: e.position ? e.position.y : e.defaultPosition.y,
              slackX: 0,
              slackY: 0,
              isElementSVG: !1,
            }),
            t
          );
        }
        return (
          H(r, n),
          T(r, [
            {
              key: 'componentWillMount',
              value: function() {
                !this.props.position ||
                  this.props.onDrag ||
                  this.props.onStop ||
                  console.warn(
                    'A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.'
                  );
              },
            },
            {
              key: 'componentDidMount',
              value: function() {
                void 0 !== window.SVGElement &&
                  e.findDOMNode(this) instanceof window.SVGElement &&
                  this.setState({ isElementSVG: !0 });
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function(e) {
                !e.position ||
                  (this.props.position &&
                    e.position.x === this.props.position.x &&
                    e.position.y === this.props.position.y) ||
                  this.setState({ x: e.position.x, y: e.position.y });
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.setState({ dragging: !1 });
              },
            },
            {
              key: 'render',
              value: function() {
                var e,
                  n,
                  r,
                  a,
                  o = {},
                  i = null,
                  c = Boolean(this.props.position),
                  u = !c || this.state.dragging,
                  l = this.props.position || this.props.defaultPosition,
                  s = {
                    x: V(this) && u ? this.state.x : l.x,
                    y: J(this) && u ? this.state.y : l.y,
                  };
                this.state.isElementSVG
                  ? ((r = (n = s).x),
                    (a = n.y),
                    (i = 'translate(' + r + ',' + a + ')'))
                  : (o = (function(e) {
                      var t = e.x,
                        n = e.y;
                      return k(
                        {},
                        j('transform', C),
                        'translate(' + t + 'px,' + n + 'px)'
                      );
                    })(s));
                var d = this.props,
                  f = d.defaultClassName,
                  p = d.defaultClassNameDragging,
                  g = d.defaultClassNameDragged,
                  m = t.Children.only(this.props.children),
                  v = E(
                    m.props.className || '',
                    f,
                    (k((e = {}), p, this.state.dragging),
                    k(e, g, this.state.dragged),
                    e)
                  );
                return t.createElement(
                  re,
                  P({}, this.props, {
                    onStart: this.onDragStart,
                    onDrag: this.onDrag,
                    onStop: this.onDragStop,
                  }),
                  t.cloneElement(m, {
                    className: v,
                    style: P({}, m.props.style, o),
                    transform: i,
                  })
                );
              },
            },
          ]),
          r
        );
      })(t.Component);
      return (
        (ae.displayName = 'Draggable'),
        (ae.propTypes = P({}, re.propTypes, {
          axis: _.oneOf(['both', 'x', 'y', 'none']),
          bounds: _.oneOfType([
            _.shape({
              left: _.number,
              right: _.number,
              top: _.number,
              bottom: _.number,
            }),
            _.string,
            _.oneOf([!1]),
          ]),
          defaultClassName: _.string,
          defaultClassNameDragging: _.string,
          defaultClassNameDragged: _.string,
          defaultPosition: _.shape({ x: _.number, y: _.number }),
          position: _.shape({ x: _.number, y: _.number }),
          className: O,
          style: O,
          transform: O,
        })),
        (ae.defaultProps = P({}, re.defaultProps, {
          axis: 'both',
          bounds: !1,
          defaultClassName: 'react-draggable',
          defaultClassNameDragging: 'react-draggable-dragging',
          defaultClassNameDragged: 'react-draggable-dragged',
          defaultPosition: { x: 0, y: 0 },
          position: null,
          scale: 1,
        })),
        (ae.default = ae),
        (ae.DraggableCore = re),
        ae
      );
    })(n(12), n(1));
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    'use strict';
    var r = Array.isArray,
      a = Object.keys,
      o = Object.prototype.hasOwnProperty,
      i = 'undefined' != typeof Element;
    e.exports = function(e, t) {
      try {
        return (function e(t, n) {
          if (t === n) return !0;
          if (t && n && 'object' == typeof t && 'object' == typeof n) {
            var c,
              u,
              l,
              s = r(t),
              d = r(n);
            if (s && d) {
              if ((u = t.length) != n.length) return !1;
              for (c = u; 0 != c--; ) if (!e(t[c], n[c])) return !1;
              return !0;
            }
            if (s != d) return !1;
            var f = t instanceof Date,
              p = n instanceof Date;
            if (f != p) return !1;
            if (f && p) return t.getTime() == n.getTime();
            var g = t instanceof RegExp,
              m = n instanceof RegExp;
            if (g != m) return !1;
            if (g && m) return t.toString() == n.toString();
            var v = a(t);
            if ((u = v.length) !== a(n).length) return !1;
            for (c = u; 0 != c--; ) if (!o.call(n, v[c])) return !1;
            if (i && t instanceof Element && n instanceof Element)
              return t === n;
            for (c = u; 0 != c--; )
              if (!(('_owner' === (l = v[c]) && t.$$typeof) || e(t[l], n[l])))
                return !1;
            return !0;
          }
          return t != t && n != n;
        })(e, t);
      } catch (e) {
        if (
          (e.message && e.message.match(/stack|recursion/i)) ||
          -2146828260 === e.number
        )
          return (
            console.warn(
              'Warning: react-fast-compare does not handle circular references.',
              e.name,
              e.message
            ),
            !1
          );
        throw e;
      }
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(11);
    function a() {}
    e.exports = function() {
      function e(e, t, n, a, o, i) {
        if (i !== r) {
          var c = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((c.name = 'Invariant Violation'), c);
        }
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
      };
      return (n.checkPropTypes = a), (n.PropTypes = n), n;
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t) {
    e.exports = react - dom;
  },
  function(e, t, n) {
    var r = n(14);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      '.acuity-calendar__day-grid__event {\n  font-size: 12px;\n  cursor: pointer; }\n\n.acuity-calendar__day-grid__event-details {\n  height: 20px;\n  padding-left: 10px; }\n\n.acuity-calendar__day-grid__event-time {\n  color: #777;\n  margin-right: 8px; }\n\n.acuity-calendar__day-grid__event-title {\n  white-space: nowrap;\n  overflow: hidden; }\n\n.acuity-calendar__day-grid__event-details {\n  display: flex;\n  overflow: hidden; }\n',
      '',
    ]);
  },
  function(e, t) {
    e.exports = function(e) {
      var t = 'undefined' != typeof window && window.location;
      if (!t) throw new Error('fixUrls requires window.location');
      if (!e || 'string' != typeof e) return e;
      var n = t.protocol + '//' + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, '/');
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var a,
            o = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? e
            : ((a =
                0 === o.indexOf('//')
                  ? o
                  : 0 === o.indexOf('/')
                  ? n + o
                  : r + o.replace(/^\.\//, '')),
              'url(' + JSON.stringify(a) + ')');
        }
      );
    };
  },
  function(e, t, n) {
    var r = n(17);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      ".acuity-calendar__day-grid {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .acuity-calendar__day-grid__days {\n    overflow: hidden;\n    margin: 0;\n    border: 1px solid #e7e7e7;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 0; }\n  .acuity-calendar__day-grid__header {\n    display: flex;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__column-header {\n    flex: 1 1 0;\n    text-align: center;\n    border-top: 1px solid #e7e7e7;\n    border-right: 1px solid #e7e7e7;\n    text-transform: uppercase;\n    padding: 10px;\n    font-weight: 600; }\n  .acuity-calendar__day-grid__date-wrapper {\n    position: absolute;\n    z-index: 4;\n    font-size: 14px;\n    color: #2c2929;\n    cursor: pointer;\n    right: 5px;\n    top: 5px;\n    padding: 3px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__day-grid__date-wrapper:hover {\n      background: #e7e7e7; }\n  .acuity-calendar__day-grid__date {\n    line-height: 1em;\n    margin: 0 auto; }\n    .acuity-calendar__day-grid__date--not-in-range {\n      color: #a9a5a5; }\n  .acuity-calendar__day-grid__row {\n    position: relative;\n    display: flex;\n    flex: 1 1 0;\n    width: 100%; }\n    .acuity-calendar__day-grid__row:not(:last-child) {\n      border-bottom: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__cell {\n    position: relative;\n    flex: 1 1;\n    /* Some width needs to be set. Not a fan of doing this, but I've spent too long on it\n           come up with an obvious easy fix. My brain is too fried today.\n           If you take this out, make SURE you're testing with events in the month view that get \n           cut off for being too long. They make their cells 1 pixel too wide without this\n           This could be set to anything as long as it is less than the actual width of 14.29%\n        */\n    width: 0; }\n    .acuity-calendar__day-grid__cell:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__day-grid__cell--not-in-range {\n      background: #fbf9f9; }\n  .acuity-calendar__day-grid__event-wrapper {\n    margin-top: 35px; }\n  .acuity-calendar__day-grid__more-events {\n    cursor: pointer;\n    text-align: center;\n    font-weight: 600;\n    height: 20px;\n    font-size: 12px; }\n",
      '',
    ]);
  },
  function(e, t, n) {
    var r = n(19);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      ".acuity-calendar__time-grid {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-right: 1px solid #e7e7e7;\n  /* ------ Header START ------ */\n  /* ------ Header END ------ */\n  /* ------ Grid START ------ */\n  /* ------ Grid END ------ */ }\n  .acuity-calendar__time-grid__header-wrapper {\n    display: flex;\n    border-top: 1px solid #e7e7e7;\n    position: relative; }\n  .acuity-calendar__time-grid__corner {\n    position: relative;\n    z-index: 5;\n    background: white;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__corner h2 {\n    margin: 0;\n    background: white; }\n  .acuity-calendar__time-grid__header {\n    display: flex;\n    width: 100%;\n    background: white;\n    z-index: 4;\n    text-align: center; }\n  .acuity-calendar__time-grid__header-column {\n    font-size: 12px;\n    flex: 1;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__time-grid__header-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__time-grid__header-column h2 {\n      font-size: 16px;\n      color: #444;\n      font-weight: 400;\n      padding: 25px 0; }\n  .acuity-calendar__time-grid__header-column-container {\n    margin: 0 auto; }\n  .acuity-calendar__time-grid__scroll-gutter {\n    height: 100%;\n    background: white;\n    position: absolute;\n    z-index: 5;\n    right: -2px;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__scroll-gutter-connector {\n    width: 100%;\n    background: white;\n    height: 1px;\n    bottom: -1px;\n    position: absolute; }\n  .acuity-calendar__time-grid__grid-wrapper {\n    position: relative;\n    width: 100%;\n    display: flex;\n    overflow: auto;\n    position: relative;\n    border: 1px solid #e7e7e7;\n    background: #f3f3f3; }\n  .acuity-calendar__time-grid__step-lines {\n    width: 100%;\n    position: absolute;\n    top: -1px; }\n  .acuity-calendar__time-grid__step-line:after {\n    width: 100%;\n    content: '';\n    border-bottom: 1px solid #e7e7e7;\n    position: absolute;\n    pointer-events: none;\n    z-index: 2; }\n  .acuity-calendar__time-grid__step-line-minor:after {\n    border-bottom: 1px dashed #e7e7e7; }\n  .acuity-calendar__time-grid__time-gutter {\n    background: white;\n    position: relative;\n    flex: 1 0 50px;\n    text-align: center;\n    border-right: 1px solid #e7e7e7;\n    z-index: 5;\n    text-align: right; }\n  .acuity-calendar__time-grid__time-label {\n    font-size: 10px;\n    color: #444;\n    transform: translateY(-8px);\n    display: block;\n    margin-right: 4px; }\n  .acuity-calendar__time-grid__time-label-0 {\n    display: none; }\n  .acuity-calendar__time-grid__grid {\n    display: flex;\n    width: 100%; }\n  .acuity-calendar__time-grid__grid-column {\n    text-align: center;\n    position: relative;\n    flex: 1; }\n    .acuity-calendar__time-grid__grid-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__step-detail-wrapper {\n    position: absolute;\n    width: 100%; }\n  .acuity-calendar__time-grid__today {\n    background: #edf8f2; }\n  .acuity-calendar__time-grid__select-slot-indicator {\n    border-bottom: 2px dashed #c1c1c1;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    z-index: 4; }\n  .acuity-calendar__time-grid__select-slot-indicator-time {\n    position: absolute;\n    top: -20px;\n    font-size: 14px;\n    left: 0;\n    right: 0; }\n  .acuity-calendar__time-grid__select-range {\n    position: absolute;\n    width: 99%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 4;\n    border-radius: 4px;\n    color: white;\n    user-select: none; }\n  .acuity-calendar__time-grid__current-time-indicator {\n    width: 100%;\n    position: absolute;\n    z-index: 6; }\n    .acuity-calendar__time-grid__current-time-indicator__line {\n      height: 1px;\n      background: #af5b55;\n      opacity: 0.4; }\n    .acuity-calendar__time-grid__current-time-indicator__line-today {\n      height: 1px;\n      background: #af5b55; }\n    .acuity-calendar__time-grid__current-time-indicator__time {\n      position: absolute;\n      transform: translate(-115%, -7px);\n      color: #c9484d;\n      background: #fff;\n      box-shadow: -3px 0px 8px 5px #fff;\n      font-size: 10px; }\n",
      '',
    ]);
  },
  function(e, t, n) {
    var r = n(21);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      '.acuity-calendar__time-grid__event-wrapper {\n  position: absolute; }\n\n.acuity-calendar__time-grid__event-details-wrapper {\n  padding: 7.5px 10px 0;\n  text-align: left; }\n\n.acuity-calendar__time-grid__event {\n  background: #26ada0;\n  z-index: 3;\n  position: relative;\n  color: #fff;\n  border-radius: 2px;\n  font-size: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__event-padding {\n  background: #3dbe8b;\n  z-index: 2;\n  position: relative;\n  opacity: 0.25;\n  pointer-events: none;\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, rgba(17, 17, 17, 0.2) 25%, rgba(17, 17, 17, 0.2) 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, rgba(17, 17, 17, 0.2) 75%);\n  background-size: 8px 8px; }\n\n.acuity-calendar__time-grid__event-handle {\n  position: absolute;\n  height: 10px;\n  width: 100%;\n  left: 0;\n  cursor: ns-resize;\n  z-index: 4; }\n\n.acuity-calendar__time-grid__event-handle-top {\n  top: 0; }\n\n.acuity-calendar__time-grid__event-handle-center {\n  position: absolute;\n  width: 100%; }\n\n.acuity-calendar__time-grid__event-handle-bottom {\n  bottom: 0; }\n\n.acuity-calendar__time-grid__dragging-event {\n  z-index: 4;\n  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__dragging-placeholder-event .acuity-calendar__time-grid__event {\n  opacity: 0.5; }\n\n.acuity-calendar__time-grid__event-title {\n  display: block;\n  margin-bottom: 7.5px; }\n',
      '',
    ]);
  },
  function(e, t, n) {
    var r = n(23);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      '.acuity-calendar__date-list {\n  width: 100%;\n  height: 250px; }\n  .acuity-calendar__date-list .acuity-calendar__day-grid__column-header {\n    font-size: 12px;\n    font-weight: normal; }\n  .acuity-calendar__date-list .acuity-calendar__day-grid__date {\n    display: none; }\n',
      '',
    ]);
  },
  function(e, t, n) {
    var r = n(25);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      '.acuity-calendar__datepicker {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column; }\n  .acuity-calendar__datepicker .acuity-calendar__day-grid {\n    width: 100%;\n    height: 100%; }\n    .acuity-calendar__datepicker .acuity-calendar__day-grid__cell, .acuity-calendar__datepicker .acuity-calendar__day-grid__date-wrapper {\n      cursor: pointer; }\n    .acuity-calendar__datepicker .acuity-calendar__day-grid__cell:hover {\n      background: #f8f8f8; }\n  .acuity-calendar__datepicker__toolbar {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px; }\n  .acuity-calendar__datepicker__nav-button {\n    border: 0;\n    background: none;\n    font-size: 14px;\n    cursor: pointer; }\n',
      '',
    ]);
  },
  function(e, t, n) {
    var r = n(27);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      '.acuity-calendar__day-list {\n  width: 100%;\n  height: 250px; }\n  .acuity-calendar__day-list .acuity-calendar__day-grid__column-header {\n    font-size: 12px;\n    font-weight: normal; }\n  .acuity-calendar__day-list .acuity-calendar__day-grid__date {\n    display: none; }\n',
      '',
    ]);
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(1),
      a = n.n(r),
      o = n(0),
      i = n.n(o),
      c = n(2),
      u = n.n(c),
      l = n(3),
      s = n.n(l),
      d = n(6),
      f = n.n(d);
    let p = null;
    let g = null;
    function m(e, t = {}) {
      let n = document.createElement(e);
      return (
        Object.keys(t).forEach(e => {
          n[e] = t[e];
        }),
        n
      );
    }
    function v(e, t, n) {
      return (window.getComputedStyle(e, n || null) || { display: 'none' })[t];
    }
    function h(e) {
      if (!document.documentElement.contains(e))
        return { detached: !0, rendered: !1 };
      let t = e;
      for (; t !== document; ) {
        if ('none' === v(t, 'display')) return { detached: !1, rendered: !1 };
        t = t.parentNode;
      }
      return { detached: !1, rendered: !0 };
    }
    var y =
      '.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}';
    let b = 0,
      _ = null;
    function E(e, t) {
      if (
        (e.__resize_mutation_handler__ ||
          (e.__resize_mutation_handler__ = function() {
            let { rendered: e, detached: t } = h(this);
            e !== this.__resize_rendered__ &&
              (!t &&
                this.__resize_triggers__ &&
                (D(this), this.addEventListener('scroll', w, !0)),
              (this.__resize_rendered__ = e),
              x(this));
          }.bind(e)),
        !e.__resize_listeners__)
      )
        if (((e.__resize_listeners__ = []), window.ResizeObserver)) {
          let { offsetWidth: t, offsetHeight: n } = e,
            r = new ResizeObserver(() => {
              (e.__resize_observer_triggered__ ||
                ((e.__resize_observer_triggered__ = !0),
                e.offsetWidth !== t || e.offsetHeight !== n)) &&
                x(e);
            }),
            { detached: a, rendered: o } = h(e);
          (e.__resize_observer_triggered__ = !1 === a && !1 === o),
            (e.__resize_observer__ = r),
            r.observe(e);
        } else if (e.attachEvent && e.addEventListener)
          (e.__resize_legacy_resize_handler__ = function() {
            x(e);
          }),
            e.attachEvent('onresize', e.__resize_legacy_resize_handler__),
            document.addEventListener(
              'DOMSubtreeModified',
              e.__resize_mutation_handler__
            );
        else if (
          (b ||
            (_ = (function(e) {
              var t = document.createElement('style');
              return (
                (t.type = 'text/css'),
                t.styleSheet
                  ? (t.styleSheet.cssText = e)
                  : t.appendChild(document.createTextNode(e)),
                (document.querySelector('head') || document.body).appendChild(
                  t
                ),
                t
              );
            })(y)),
          (function(e) {
            let t = v(e, 'position');
            (t && 'static' !== t) || (e.style.position = 'relative');
            (e.__resize_old_position__ = t), (e.__resize_last__ = {});
            let n = m('div', { className: 'resize-triggers' }),
              r = m('div', { className: 'resize-expand-trigger' }),
              a = m('div'),
              o = m('div', { className: 'resize-contract-trigger' });
            r.appendChild(a),
              n.appendChild(r),
              n.appendChild(o),
              e.appendChild(n),
              (e.__resize_triggers__ = {
                triggers: n,
                expand: r,
                expandChild: a,
                contract: o,
              }),
              D(e),
              e.addEventListener('scroll', w, !0),
              (e.__resize_last__ = {
                width: e.offsetWidth,
                height: e.offsetHeight,
              });
          })(e),
          (e.__resize_rendered__ = h(e).rendered),
          window.MutationObserver)
        ) {
          let t = new MutationObserver(e.__resize_mutation_handler__);
          t.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }),
            (e.__resize_mutation_observer__ = t);
        }
      e.__resize_listeners__.push(t), b++;
    }
    function S(e, t) {
      let n = e.__resize_listeners__;
      if (n) {
        if ((t && n.splice(n.indexOf(t), 1), !n.length || !t)) {
          if (e.detachEvent && e.removeEventListener)
            return (
              e.detachEvent('onresize', e.__resize_legacy_resize_handler__),
              void document.removeEventListener(
                'DOMSubtreeModified',
                e.__resize_mutation_handler__
              )
            );
          e.__resize_observer__
            ? (e.__resize_observer__.unobserve(e),
              e.__resize_observer__.disconnect(),
              (e.__resize_observer__ = null))
            : (e.__resize_mutation_observer__ &&
                (e.__resize_mutation_observer__.disconnect(),
                (e.__resize_mutation_observer__ = null)),
              e.removeEventListener('scroll', w),
              e.removeChild(e.__resize_triggers__.triggers),
              (e.__resize_triggers__ = null)),
            (e.__resize_listeners__ = null);
        }
        !--b && _ && _.parentNode.removeChild(_);
      }
    }
    function w() {
      var e, t;
      D(this),
        this.__resize_raf__ &&
          ((e = this.__resize_raf__),
          g ||
            (g = (
              window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              function(e) {
                clearTimeout(e);
              }
            ).bind(window)),
          g(e)),
        (this.__resize_raf__ = ((t = () => {
          let e = (function(e) {
            let { width: t, height: n } = e.__resize_last__,
              { offsetWidth: r, offsetHeight: a } = e;
            return r !== t || a !== n ? { width: r, height: a } : null;
          })(this);
          e && ((this.__resize_last__ = e), x(this));
        }),
        p ||
          (p = (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(e) {
              return setTimeout(e, 16);
            }
          ).bind(window)),
        p(t)));
    }
    function x(e) {
      e &&
        e.__resize_listeners__ &&
        e.__resize_listeners__.forEach(t => {
          t.call(e);
        });
    }
    function D(e) {
      let { expand: t, expandChild: n, contract: r } = e.__resize_triggers__,
        { scrollWidth: a, scrollHeight: o } = r,
        {
          offsetWidth: i,
          offsetHeight: c,
          scrollWidth: u,
          scrollHeight: l,
        } = t;
      (r.scrollLeft = a),
        (r.scrollTop = o),
        (n.style.width = i + 1 + 'px'),
        (n.style.height = c + 1 + 'px'),
        (t.scrollLeft = u),
        (t.scrollTop = l);
    }
    function O(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var M = function() {
      var e = Object(r.useRef)(null),
        t = Object(r.useRef)(null),
        n = Object(r.useRef)(null),
        a = Object(r.useRef)(null),
        o = O(Object(r.useState)(0), 2),
        i = o[0],
        c = o[1],
        u = O(Object(r.useState)(0), 2),
        l = u[0],
        d = u[1],
        p = O(Object(r.useState)(0), 2),
        g = p[0],
        m = p[1],
        v = O(Object(r.useState)(0), 2),
        h = v[0],
        y = v[1],
        b = O(Object(r.useState)(0), 2),
        _ = b[0],
        w = b[1];
      if (t.current) {
        var x = t.current.offsetHeight;
        x !== g && m(x);
      }
      var D = f()(function() {
        c(s()(e, 'current.offsetHeight', 0)),
          d(s()(e, 'current.offsetWidth', 0));
      }, 300);
      return (
        Object(r.useEffect)(function() {
          return (
            e.current &&
              (c(e.current.offsetHeight),
              d(a.current.offsetWidth),
              E(e.current, D)),
            function() {
              if (e.current) return S(e.current, D);
            }
          );
        }),
        Object(r.useEffect)(
          function() {
            g > 0 && w(Math.floor((i - h) / g) - 1);
          },
          [i]
        ),
        Object(r.useEffect)(
          function() {
            var e = s()(n, 'current.offsetTop', 0);
            y(e);
          },
          [s()(n, 'current.offsetTop', 0)]
        ),
        {
          rowRef: e,
          eventRef: t,
          eventHeight: g,
          eventWrapperRef: n,
          eventWrapperMargin: h,
          cellRef: a,
          cellDimensions: { width: l, height: i },
          totalEventsToShow: _,
        }
      );
    };
    function j(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            '[object Arguments]' === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance'
          );
        })()
      );
    }
    var C = function(e) {
        for (
          var t = e.firstDate,
            n = e.lastDate,
            r = e.totalColumns,
            a = void 0 === r ? 7 : r,
            o = e.allowPartialRows,
            i = void 0 !== o && o,
            c = e.getExcludedDates,
            u =
              void 0 === c
                ? function() {
                    return !1;
                  }
                : c,
            l = e.getIsInRange,
            s =
              void 0 === l
                ? function() {
                    return !0;
                  }
                : l,
            d = n.diff(t, 'days'),
            f = [],
            p = 0,
            g = 0,
            m = 0;
          m <= d;
          m += 1
        ) {
          f[p] || (f[p] = []);
          var v = t.clone().add(m, 'days');
          u(v) ||
            ((f[p] = [].concat(j(f[p]), [{ date: v, isInRange: s(v) }])),
            g + 1 === a ? ((p += 1), (g = 0)) : (g += 1));
        }
        return (
          i || (f[f.length - 1].length < a && (f.length = f.length - 1)), f
        );
      },
      R = function(e) {
        return e.sort(function(e, t) {
          return e.start.isAfter(t.start)
            ? 1
            : e.start.isBefore(t.start)
            ? -1
            : 0;
        });
      };
    function T(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            '[object Arguments]' === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance'
          );
        })()
      );
    }
    function k(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function(t) {
            P(e, t, n[t]);
          });
      }
      return e;
    }
    function P(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var H = function(e) {
        var t = 1;
        return e.reduce(function(n, r, a) {
          var o = N({
              event: r,
              lastEvent: 0 !== a ? e[a - 1] : null,
              currentColumn: t,
            }),
            i = s()(n, o, []);
          return (
            (n = k({}, n, P({}, o, [].concat(T(i), [r])))),
            o !== t && (t = o),
            n
          );
        }, {});
      },
      N = function(e) {
        var t = e.event,
          n = e.lastEvent,
          r = e.currentColumn;
        return n && t.start.isSame(n.start, 'day') && t.start.isBefore(n.end)
          ? r + 1
          : 1;
      },
      I = function(e) {
        var t = Object.assign({}, e);
        return Object.keys(e).reduce(function(e, n) {
          return k({}, e, P({}, n, H(t[n])));
        }, {});
      },
      W = function() {
        if ('undefined' == typeof window || !window.document) return 15;
        var e = document.createElement('div');
        (e.style.overflowY = 'scroll'), document.body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), t;
      },
      z = { 5: 22, 10: 27, 15: 31, 20: 34, 30: 42, 60: 65 },
      A = function(e) {
        return 60 * e.get('hour') + e.get('minute');
      },
      Y = function(e) {
        var t = e.stepMinutes,
          n = e.date,
          r = (e.stepHeight || z[t]) / t;
        return A(n) * r + 1 * n.hour();
      },
      q = function(e) {
        return e.isSame(u()(), 'day') ? ' '.concat(Ee('time-grid__today')) : '';
      },
      B = function(e) {
        var t = e.stepMinutes,
          n = e.selectMinutes,
          r = e.columnDate,
          a = e.stepHeight;
        return function(e) {
          var o = e.currentTarget.getBoundingClientRect(),
            i = (e.clientY - o.top) / ((a || z[t]) / t),
            c = r
              .clone()
              .startOf('day')
              .add(i, 'minutes'),
            u = Math.round(c.clone().minute() / n) * n;
          return c
            .clone()
            .minute(u)
            .second(0);
        };
      },
      L = function(e) {
        var t = e.start,
          n = e.end,
          r = ':'.concat(t.format('mm'));
        ':00' === r && (r = '');
        var a = '';
        t.format('a') !== n.format('a') && (a = t.format('a'));
        var o = ''
            .concat(t.format('h'))
            .concat(r)
            .concat(a),
          i = ':'.concat(n.format('mm'));
        ':00' === i && (i = '');
        var c = ''
          .concat(n.format('h'))
          .concat(i)
          .concat(n.format('a'));
        return ''.concat(o, ' - ').concat(c);
      };
    function G(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var U = 0,
      F = !1,
      X = function(e) {
        return function(t) {
          (U = t.target.scrollLeft), $(e);
        };
      },
      $ = function(e) {
        var t, n, r, a, o;
        F ||
          requestAnimationFrame(
            ((n = (t = e).headerRef),
            (r = t.timeGutterRef),
            t.cornerRef,
            (a = t.timeIndicatorRef),
            t.stepLinesRef,
            t.wrapperRef,
            (o = t.timeIndicatorWidth),
            function() {
              (F = !1),
                (n.current.style.transform = 'translateX(-'.concat(U, 'px)')),
                (r.current.style.transform = 'translateX('.concat(U, 'px)')),
                (a.current.style.transform = 'translateX('.concat(U, 'px)')),
                o && (a.current.style.width = ''.concat(o - U, 'px'));
            })
          ),
          (F = !0);
      },
      V = function(e) {
        var t = Object(r.useRef)(null),
          n = Object(r.useRef)(null),
          a = Object(r.useRef)(null),
          o = Object(r.useRef)(null),
          i = Object(r.useRef)(null),
          c = Object(r.useRef)(null),
          u = G(Object(r.useState)(0), 2),
          l = u[0],
          d = u[1],
          p = X({
            wrapperRef: t,
            headerRef: a,
            timeGutterRef: n,
            cornerRef: o,
            timeIndicatorRef: i,
            stepLinesRef: c,
            timeIndicatorWidth: e,
          });
        i.current &&
          t.current &&
          c.current &&
          n.current &&
          ((i.current.style.width = ''.concat(e, 'px')),
          (c.current.style.left = ''.concat(n.current.offsetWidth, 'px')),
          (c.current.style.width = ''.concat(e, 'px')));
        var g = f()(function() {
          d(s()(t, 'current.clientWidth'));
        }, 300);
        return (
          Object(r.useEffect)(function() {
            return (
              l || d(s()(t, 'current.clientWidth')),
              t.current && E(t.current, g),
              function() {
                return S(t.current, g);
              }
            );
          }),
          Object(r.useEffect)(function() {
            return (
              t.current.addEventListener('scroll', p, !1),
              function() {
                t.current.removeEventListener('scroll', p, !1);
              }
            );
          }),
          {
            wrapperRef: t,
            timeGutterRef: n,
            headerRef: a,
            cornerRef: o,
            timeIndicatorRef: i,
            stepLinesRef: c,
          }
        );
      },
      J = n(9),
      K = n.n(J);
    function Q(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var Z = function(e) {
        var t = Object(r.useRef)(new Map()).current,
          n = Object(r.useRef)(null),
          a = Q(Object(r.useState)([]), 2),
          o = a[0],
          i = a[1],
          c = function() {
            var e = [];
            return (
              t.forEach(function(t, n) {
                e.push(t.offsetWidth);
              }),
              e
            );
          },
          u = function() {
            K()(c(), o) || i(c());
          },
          l = f()(function() {
            u();
          }, 300);
        Object(r.useEffect)(function() {
          return (
            n.current && E(n.current, l),
            u(),
            function() {
              S(n.current, l);
            }
          );
        });
        return {
          TimeGridRef: n,
          elementWidths: o,
          assignRef: function(e) {
            return function(n) {
              return null === n ? t.delete() : t.set(e, n);
            };
          },
        };
      },
      ee = function(e) {
        var t = e.pixelsMoved,
          n = e.selectMinutes,
          r = e.selectMinutesHeight;
        if (0 === t) return 0;
        var a = (t / r) * n;
        return Math.round(a / n) * n;
      },
      te = function(e) {
        var t = e.originalStart,
          n = (e.originalEnd, e.minutesMoved);
        return t
          .clone()
          .add(n, 'minutes')
          .isSame(t.clone().subtract(1, 'days'), 'days');
      },
      ne = function(e) {
        var t = e.originalStart,
          n = e.originalEnd,
          r = e.minutesMoved;
        return n
          .clone()
          .add(r, 'minutes')
          .isSame(t.clone().add(1, 'days'), 'days');
      },
      re = function(e) {
        var t = e.pixelsMoved,
          n = e.originalStart,
          r = e.originalEnd,
          a = e.selectMinutes,
          o = e.selectMinutesHeight,
          i = ee({ pixelsMoved: t, selectMinutes: a, selectMinutesHeight: o });
        return (
          te({ originalStart: n, originalEnd: r, minutesMoved: i }) &&
            (i = -1 * n.clone().diff(n.clone().startOf('day'), 'minutes')),
          ne({ originalStart: n, originalEnd: r, minutesMoved: i }) &&
            (i = n
              .clone()
              .endOf('day')
              .add(1, 'minutes')
              .diff(r, 'minutes')),
          i
        );
      },
      ae = function(e) {
        var t = e.pixelsMoved,
          n = e.selectMinutes,
          r = e.originalStart,
          a = e.originalEnd,
          o = e.selectMinutesHeight;
        return t
          ? o *
              (re({
                originalStart: r,
                originalEnd: a,
                pixelsMoved: t,
                selectMinutes: n,
                selectMinutesHeight: o,
              }) /
                n)
          : 0;
      },
      oe = function(e) {
        var t = e.stepMinutes,
          n = e.selectMinutes;
        return (e.stepHeight || z[t]) / (t / n) + 1 / (60 / n);
      };
    function ie(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function(t) {
            ce(e, t, n[t]);
          });
      }
      return e;
    }
    function ce(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var ue = function(e) {
      var t = e.event,
        n = e.deltaPosition,
        r = e.selectMinutesHeight,
        a = e.selectMinutes,
        o = e.isDurationOnly,
        i = void 0 !== o && o,
        c = t.start.clone(),
        u = t.end.clone(),
        l = re({
          originalStart: t.start,
          originalEnd: t.end,
          pixelsMoved: n.y,
          selectMinutes: a,
          selectMinutesHeight: r,
        });
      if (0 === l) {
        var s = {};
        return (
          t.paddingTopStart && (s.paddingTopStart = t.paddingTopStart),
          t.paddingBottomEnd && (s.paddingBottomEnd = t.paddingBottomEnd),
          ie({ start: c, end: u }, s)
        );
      }
      i || c.add(l, 'minutes'), u.add(l, 'minutes');
      var d = {};
      return (
        i ||
          (t.paddingTopStart &&
            (d.paddingTopStart = t.paddingTopStart.clone().add(l, 'minutes'))),
        t.paddingBottomEnd &&
          (d.paddingBottomEnd = t.paddingBottomEnd.clone().add(l, 'minutes')),
        ie({ start: c, end: u }, d)
      );
    };
    function le(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var se = function(e) {
      var t = e.isSelectable,
        n = e.stepMinutes,
        a = e.selectMinutes,
        o = e.columnDate,
        i = e.stepHeight,
        c = le(Object(r.useState)(!1), 2),
        u = c[0],
        l = c[1],
        s = le(Object(r.useState)(0), 2),
        d = s[0],
        f = s[1],
        p = le(Object(r.useState)(0), 2),
        g = p[0],
        m = p[1],
        v = le(Object(r.useState)(0), 2),
        h = v[0],
        y = v[1],
        b = le(Object(r.useState)(0), 2),
        _ = b[0],
        E = b[1],
        S = le(Object(r.useState)(0), 2),
        w = S[0],
        x = S[1],
        D = le(Object(r.useState)(null), 2),
        O = D[0],
        M = D[1],
        j = le(Object(r.useState)(0), 2),
        C = j[0],
        R = j[1],
        T = oe({ stepMinutes: n, selectMinutes: a });
      return {
        selectRangeHandlers: {
          onMouseUp: function(e) {
            E(0), l(!1);
          },
          onMouseDown: function(e) {
            if (!t) return !1;
            l(!0), f(e.clientY);
            var r = e.currentTarget.getBoundingClientRect(),
              c = (e.clientY - r.top) / T,
              u = Math.round(c) * T;
            E(u), R(u);
            var s = B({
              stepHeight: i,
              stepMinutes: n,
              selectMinutes: a,
              columnDate: o,
            })(e);
            M(s);
          },
          onMouseMove: function(e) {
            if (!t || !u) return !1;
            if (e.clientY !== d) {
              var n = e.clientY - d,
                r = Math.abs(
                  ae({
                    originalStart: O,
                    originalEnd: O,
                    pixelsMoved: Math.abs(n),
                    selectMinutes: a,
                    selectMinutesHeight: T,
                  })
                ),
                o = re({
                  originalStart: O,
                  originalEnd: O,
                  pixelsMoved: n,
                  selectMinutes: a,
                  selectMinutesHeight: T,
                }),
                i = {};
              e.clientY < d
                ? (E(C - r),
                  (i.start = O.clone().add(o, 'minutes')),
                  (i.end = O))
                : ((i.start = O), (i.end = O.clone().add(o, 'minutes'))),
                x(i),
                y(r),
                m(e.clientY);
            }
          },
          onContextMenu: function(e) {
            l(!1);
          },
        },
        isSelectRangeFinished: Math.abs(g) > T / 2,
        resetSelectRangeDrag: function() {
          l(!1), m(0), f(0), y(0);
        },
        selectRangeHeight: h,
        selectRangeTop: _,
        selectRange: w,
      };
    };
    function de(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            '[object Arguments]' === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance'
          );
        })()
      );
    }
    function fe(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var pe = function(e) {
        return e.reduce(function(e, t) {
          var n = {};
          t.paddingTopStart &&
            (n.paddingTopStart = u()(t.paddingTopStart).seconds(0)),
            t.paddingBottomEnd &&
              (n.paddingBottomEnd = u()(t.paddingBottomEnd).seconds(0));
          var r = Object.assign(
              {},
              t,
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                      })
                    )),
                    r.forEach(function(t) {
                      fe(e, t, n[t]);
                    });
                }
                return e;
              })(
                { start: u()(t.start).seconds(0), end: u()(t.end).seconds(0) },
                n
              )
            ),
            a = Math.abs(
              r.start
                .clone()
                .startOf('day')
                .diff(r.end.clone().subtract(1, 'seconds'), 'days')
            );
          if (((e = [].concat(de(e), [r])), 0 === a)) return e;
          for (var o = 1; o <= a; o += 1) {
            var i = Object.assign({}, r);
            (i.start = r.start
              .clone()
              .add(o, 'days')
              .startOf('day')),
              r.end.isSame(i.start, 'day')
                ? (i.end = r.end)
                : (i.end = i.start.clone().endOf('day')),
              (e = [].concat(de(e), [i]));
          }
          return e;
        }, []);
      },
      ge = function(e) {
        var t = e.event,
          n = e.stepMinutes,
          r = e.stepHeight,
          a = (r || z[n]) / n,
          o = 60 * a * 24,
          i = t.end.clone().diff(t.start, 'minutes'),
          c = (i / 60) * 1,
          u = Y({ stepMinutes: n, date: t.start, stepHeight: r }),
          l = o - u + 24,
          s = i * a + c;
        s > l && (s = l);
        var d = me({ event: t, pixelsPerMinute: a }),
          f = {
            height: s,
            top: u,
            paddingTopHeight: d.topHeight,
            paddingBottomHeight: d.bottomHeight,
          };
        return Object.assign(t, f);
      },
      me = function(e) {
        var t = e.event,
          n = e.pixelsPerMinute,
          r = 0;
        if (t.paddingTopStart) {
          var a = t.paddingTopStart.clone().diff(t.start, 'minutes'),
            o = (a / 60) * 1;
          r = Math.abs(a * n + o);
        }
        var i = 0;
        if (t.paddingBottomEnd) {
          var c = t.paddingBottomEnd.clone().diff(t.end, 'minutes'),
            u = (c / 60) * 1;
          i = Math.abs(c * n + u);
        }
        return { topHeight: r, bottomHeight: i };
      },
      ve = function(e) {
        var t = e.eventsKeyed,
          n = e.event,
          r = Object.assign({}, t),
          a = n.start.format('YYYY-MM-DD'),
          o = s()(t, ''.concat(n.group_id, '.').concat(a), []);
        o.push(n);
        var i = s()(t, ''.concat(n.group_id), {});
        return (i[a] = o), (r[n.group_id] = i), r;
      },
      he = function(e) {
        var t = e.events,
          n = e.stepMinutes,
          r = void 0 !== n && n,
          a = e.stepHeight,
          o = void 0 !== a && a,
          i = pe(t);
        return R(i).reduce(function(e, t, n) {
          if (!r) return ve({ eventsKeyed: e, event: t });
          var a = ge({ event: t, stepMinutes: r, stepHeight: o });
          return ve({ eventsKeyed: e, event: a });
        }, {});
      };
    function ye(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            '[object Arguments]' === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance'
          );
        })()
      );
    }
    var be = function(e) {
        var t = e.mungedEvents,
          n = e.visibleEventGroups,
          r = Object.assign({}, t);
        return (
          n &&
            Object.keys(r).forEach(function(e) {
              n.includes(Number(e)) || delete r[e];
            }),
          Object.keys(r).reduce(function(e, t) {
            return (
              Object.keys(r[t]).forEach(function(n) {
                e[n] = R([].concat(ye(s()(e, n, [])), ye(r[t][n])));
              }),
              e
            );
          }, {})
        );
      },
      _e = { month: 'month', week: 'week', groups: 'groups' },
      Ee = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.reduce(function(e, t) {
          return t
            ? '' !== e
              ? ''
                  .concat(e, ' ')
                  .concat('acuity-calendar', '__')
                  .concat(t)
              : ''.concat('acuity-calendar', '__').concat(t)
            : e;
        }, '');
      };
    function Se(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var we = function(e) {
        var t = (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function(t) {
                Se(e, t, n[t]);
              });
          }
          return e;
        })({}, e);
        return (
          delete t.height,
          delete t.top,
          delete t.paddingTopHeight,
          delete t.paddingBottomHeight,
          (t.start = new Date(e.start)),
          (t.end = new Date(e.end)),
          t.paddingTopStart &&
            (t.paddingTopStart = new Date(e.paddingTopStart)),
          t.paddingBottomEnd &&
            (t.paddingBottomEnd = new Date(e.paddingBottomEnd)),
          t
        );
      },
      xe = function(e) {
        var t = e.events,
          n = e.stepMinutes,
          a = e.stepHeight,
          o = e.visibleEventGroups,
          i = e.stepDetails,
          c = Object(r.useMemo)(
            function() {
              return he({ events: t, stepMinutes: n, stepHeight: a });
            },
            [t, n]
          ),
          u = Object(r.useMemo)(
            function() {
              return be({ mungedEvents: c, visibleEventGroups: o });
            },
            [c, o]
          );
        if (!i) return { mungedEvents: c, eventsWithSelectedEventGroups: u };
        var l = Object(r.useMemo)(
            function() {
              return he({ events: i, stepMinutes: n, stepHeight: a });
            },
            [i, n]
          ),
          s = Object(r.useMemo)(
            function() {
              return be({ mungedEvents: l, visibleEventGroups: o });
            },
            [l, o]
          );
        return {
          mungedEvents: c,
          eventsWithSelectedEventGroups: u,
          mungedStepDetails: l,
          mungedStepDetailsGroups: s,
        };
      },
      De = n(7);
    function Oe(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var Me,
      je = i.a.oneOfType([
        i.a.instanceOf(Date),
        i.a.instanceOf(u.a),
        i.a.string,
      ]),
      Ce = i.a.oneOf([0, 1, 2, 3, 4, 5, 6]),
      Re = i.a.instanceOf(u.a),
      Te = i.a.oneOf(Object.keys(_e)),
      ke = i.a.shape({
        id: i.a.oneOfType([i.a.number, i.a.string]).isRequired,
        group_id: i.a.oneOfType([i.a.number, i.a.string]),
        title: i.a.string,
        start: je.isRequired,
        end: je.isRequired,
      }),
      Pe = i.a.shape({
        id: i.a.oneOfType([i.a.number, i.a.string]).isRequired,
        group_id: i.a.oneOfType([i.a.number, i.a.string]),
        start: je.isRequired,
        end: je.isRequired,
      }),
      He = i.a.oneOf([5, 10, 15, 20, 30, 60]),
      Ne = (i.a.shape({ id: i.a.number, name: i.a.string }),
      i.a.shape({
        current: i.a.instanceOf(
          'undefined' == typeof Element ? function() {} : Element
        ),
      })),
      Ie = i.a.arrayOf(i.a.number),
      We = (i.a.shape(
        ((Me = i.a.func),
        Object.keys(_e).reduce(function(e, t) {
          return (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              'function' == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function(t) {
                  Oe(e, t, n[t]);
                });
            }
            return e;
          })({}, e, Oe({}, t, Me));
        }, {}))
      ),
      i.a.oneOf(Object.values({ day: 'day', time: 'time' })),
      i.a.oneOfType([
        i.a.arrayOf(
          i.a.arrayOf(
            i.a.shape({ isInRange: i.a.bool.isRequired, date: je.isRequired })
          )
        ),
        i.a.shape({
          firstDate: je.isRequired,
          lastDate: je.isRequired,
          totalColumns: i.a.number,
          allowPartialRows: i.a.bool,
          getExcludedDates: i.a.func,
          getIsInRange: i.a.func,
        }),
      ]));
    function ze(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    function Ae(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function(t) {
            Ye(e, t, n[t]);
          });
      }
      return e;
    }
    function Ye(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var qe = function(e, t) {
        switch (t.type) {
          case 'moveUp':
            return Ae({}, e, {
              rowMoves: e.rowMoves - 1,
              vertChange: e.vertChange - t.vertChange,
            });
          case 'moveRight':
            return Ae({}, e, {
              columnMoves: e.columnMoves + 1,
              horizChange: e.horizChange + t.horizChange,
            });
          case 'moveDown':
            return Ae({}, e, {
              rowMoves: e.rowMoves + 1,
              vertChange: e.vertChange + t.vertChange,
            });
          case 'moveLeft':
            return Ae({}, e, {
              columnMoves: e.columnMoves - 1,
              horizChange: e.horizChange - t.horizChange,
            });
          case 'startDragging':
            var n = e.vertChange;
            return Ae({}, e, {
              isDragging: !0,
              position: t.position,
              vertChange: 0 === n ? t.initialVertChange : n,
            });
          case 'stopDragging':
            return Ae({}, e, {
              isDragging: !1,
              wasDragged: !0,
              position: { x: 0, y: 0 },
              vertChange: 0,
              horizChange: 0,
              rowMoves: 0,
              columnMoves: 0,
            });
          default:
            throw new Error('Dispatch action not recognized');
        }
      },
      Be = {
        rowMoves: 0,
        columnMoves: 0,
        isDragging: !1,
        wasDragged: !1,
        position: { x: 0, y: 0 },
        vertChange: 0,
        horizChange: 0,
      },
      Le = function(e) {
        var t = e.children,
          n = e.cellDimensions,
          o = e.event,
          i = e.topEventOffset,
          c = e.onDrag,
          u = e.onDragEnd,
          l = e.columnMovesPerRowChange,
          s = ze(Object(r.useReducer)(qe, Be), 2),
          d = s[0],
          f = s[1],
          p = n.width,
          g = n.height,
          m = d.position,
          v = m.x,
          h = m.y,
          y = d.columnMoves,
          b = d.rowMoves,
          _ = d.isDragging,
          E = d.vertChange,
          S = d.horizChange;
        h < g * b && f({ type: 'moveUp', vertChange: g }),
          v > p * (y + 1) && f({ type: 'moveRight', horizChange: p + 1 * y }),
          h > g * (b + 1) && f({ type: 'moveDown', vertChange: g }),
          v < p * y && f({ type: 'moveLeft', horizChange: p + 1 });
        var w = (function(e) {
          var t = e.event,
            n = e.columnMoves + e.rowMoves * e.columnMovesPerRowChange,
            r = t.start.clone().add(n, 'days'),
            a = t.end.clone().add(n, 'days'),
            o = {};
          return (
            t.paddingTopStart &&
              (o.paddingTopStart = t.paddingTopStart.clone().add(n, 'days')),
            t.paddingBottomEnd &&
              (o.paddingBottomEnd = t.paddingBottomEnd.clone().add(n, 'days')),
            Ae({}, t, { start: r, end: a }, o)
          );
        })({
          event: o,
          columnMoves: y,
          rowMoves: b,
          columnMovesPerRowChange: l,
        });
        return a.a.createElement(
          De.DraggableCore,
          {
            onDrag: function(e, t) {
              f({
                type: 'startDragging',
                position: { x: t.x, y: t.y },
                initialVertChange: i,
              }),
                c(e, t);
            },
            onStop: function(e, t) {
              if (!_) return !1;
              u({ e: e, event: we(w) }),
                setTimeout(function() {
                  return f({ type: 'stopDragging' });
                });
            },
          },
          t({ draggedEvent: w, vertChange: E, horizChange: S })
        );
      };
    (Le.defaultProps = {
      onDrag: function() {
        return null;
      },
      onDragEnd: function() {
        return null;
      },
    }),
      (Le.propTypes = {
        cellDimensions: i.a.shape({
          width: i.a.number.isRequired,
          height: i.a.number.isRequired,
        }).isRequired,
        children: i.a.func.isRequired,
        columnMovesPerRowChange: i.a.number.isRequired,
        event: ke.isRequired,
        onDrag: i.a.func,
        onDragEnd: i.a.func,
        topEventOffset: i.a.number.isRequired,
      });
    var Ge = Le;
    function Ue() {
      return (Ue =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Fe(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var Xe = function(e) {
        var t = e.className,
          n = e.eventClass;
        return t ? ''.concat(n, ' ').concat(t) : n;
      },
      $e = a.a.forwardRef(function(e, t) {
        var n = e.className,
          r = e.eventClass,
          o = e.event,
          i = e.isSelectable,
          c = e.onSelect,
          u = e.children,
          l = Fe(e, [
            'className',
            'eventClass',
            'event',
            'isSelectable',
            'onSelect',
            'children',
          ]);
        return a.a.createElement(
          'div',
          Ue({}, l, {
            className: Xe({ className: n, eventClass: r }),
            role: 'button',
            ref: t,
            onClick: function(e) {
              if ((e.stopPropagation(), !i)) return !1;
              c({ e: e, event: we(o) });
            },
          }),
          u
        );
      });
    ($e.displayName = 'EventWrapper'),
      ($e.defaultProps = {
        className: '',
        isSelectable: !0,
        onSelect: function() {
          return null;
        },
        eventClass: Ee('time-grid__event'),
      }),
      ($e.propTypes = {
        children: i.a.node.isRequired,
        className: i.a.string,
        event: i.a.object.isRequired,
        eventClass: i.a.string,
        isSelectable: i.a.bool,
        onSelect: i.a.func,
      });
    var Ve = $e;
    n(13);
    function Je() {
      return (Je =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Ke(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var Qe = a.a.forwardRef(function(e, t) {
      var n,
        r,
        o = e.event,
        i = e.onSelect,
        c = e.children,
        u = Ke(e, ['event', 'onSelect', 'children']);
      return a.a.createElement(
        Ve,
        Je(
          { event: o, onSelect: i, eventClass: Ee('day-grid__event'), ref: t },
          u
        ),
        c
          ? c(o)
          : a.a.createElement(
              'div',
              { className: Ee('day-grid__event-details') },
              a.a.createElement(
                'div',
                { className: Ee('day-grid__event-time') },
                ((n = o.start),
                ':00' === (r = ':'.concat(n.format('mm'))) && (r = ''),
                ''
                  .concat(n.format('h'))
                  .concat(r)
                  .concat(n.format('a')))
              ),
              a.a.createElement(
                'div',
                { className: Ee('day-grid__event-title') },
                o.title
              )
            )
      );
    });
    (Qe.defaultProps = {
      onSelect: function() {
        return null;
      },
      children: null,
    }),
      (Qe.propTypes = {
        children: i.a.func,
        event: ke.isRequired,
        onSelect: i.a.func,
      });
    var Ze = Qe,
      et = a.a.forwardRef(function(e, t) {
        var n = e.events,
          o = e.eventHeight,
          i = e.cellDimensions,
          c = e.dayDetails,
          u = e.onDragEnd,
          l = e.onSelectSlot,
          s = e.onSelectMonthDate,
          d = e.renderCell,
          f = e.renderEvent,
          p = e.eventRef,
          g = e.eventWrapperRef,
          m = e.onSelectEvent,
          v = e.onSelectMoreEvents,
          h = e.totalEventsToShow,
          y = e.totalColumns;
        return a.a.createElement(
          'div',
          {
            className: Ee(
              'day-grid__cell',
              !c.isInRange && 'day-grid__cell--not-in-range'
            ),
            role: 'button',
            ref: t,
            onClick: function(e) {
              return l({
                e: e,
                date: new Date(c.date),
                isInRange: c.isInRange,
              });
            },
          },
          a.a.createElement(
            'div',
            {
              className: Ee('day-grid__date-wrapper'),
              onClick: function(e) {
                s &&
                  (e.stopPropagation(),
                  s({ e: e, date: new Date(c.date), isInrange: c.isInRange }));
              },
            },
            a.a.createElement(
              'div',
              {
                className: Ee(
                  'day-grid__date',
                  !c.isInRange && 'day-grid__date--not-in-range'
                ),
              },
              c.date.date()
            )
          ),
          d
            ? d({
                date: new Date(c.date.startOf('day')),
                isInRange: c.isInRange,
                events: n,
              })
            : a.a.createElement(
                'div',
                {
                  className: Ee('day-grid__event-wrapper'),
                  ref: g,
                  style: { opacity: h ? 1 : 0 },
                },
                n.length > 0 &&
                  c.isInRange &&
                  a.a.createElement(
                    r.Fragment,
                    null,
                    (function(e) {
                      var t = 0;
                      return e.map(function(e) {
                        return (
                          (t += 1),
                          !h || h >= t
                            ? a.a.createElement(
                                Ge,
                                {
                                  cellDimensions: i,
                                  event: e,
                                  topEventOffset: (t - 1) * o * -1,
                                  key: e.id,
                                  columnMovesPerRowChange: y,
                                  onDragEnd: u,
                                },
                                function(e) {
                                  var t = e.draggedEvent,
                                    n = e.vertChange,
                                    r = e.horizChange;
                                  return a.a.createElement(
                                    Ze,
                                    {
                                      event: t,
                                      onSelect: m,
                                      ref: p,
                                      style: {
                                        transform: 'translate('
                                          .concat(r, 'px, ')
                                          .concat(n, 'px)'),
                                      },
                                    },
                                    f
                                  );
                                }
                              )
                            : null
                        );
                      });
                    })(n),
                    h < n.length &&
                      h > 0 &&
                      a.a.createElement(
                        'div',
                        {
                          className: Ee('day-grid__more-events'),
                          onClick: function(e) {
                            var t;
                            e.stopPropagation(),
                              v({
                                e: e,
                                events: n.map(function(e) {
                                  return we(e);
                                }),
                                eventsMore: ((t = n.length - h),
                                n.filter(function(e, r) {
                                  return r >= n.length - t;
                                })).map(function(e) {
                                  return we(e);
                                }),
                                date: new Date(c.date),
                              });
                          },
                        },
                        n.length - h,
                        ' more'
                      )
                  )
              )
        );
      });
    (et.displayName = 'DayCell'),
      (et.defaultProps = {
        events: [],
        onDragEnd: function() {
          return null;
        },
        onSelectSlot: function() {
          return null;
        },
        onSelectMonthDate: null,
        onSelectEvent: function() {
          return null;
        },
        renderCell: null,
        renderEvent: null,
        onSelectMoreEvents: function() {
          return null;
        },
      }),
      (et.propTypes = {
        cellDimensions: i.a.shape({
          width: i.a.number.isRequired,
          height: i.a.number.isRequired,
        }).isRequired,
        dayDetails: i.a.shape({
          date: Re.isRequired,
          isInRange: i.a.bool.isRequired,
        }).isRequired,
        eventHeight: i.a.number.isRequired,
        eventRef: Ne.isRequired,
        eventWrapperRef: Ne.isRequired,
        events: i.a.arrayOf(ke),
        onDragEnd: i.a.func,
        onSelectEvent: i.a.func,
        onSelectMonthDate: i.a.func,
        onSelectMoreEvents: i.a.func,
        onSelectSlot: i.a.func,
        renderCell: i.a.func,
        renderEvent: i.a.func,
        totalColumns: i.a.number.isRequired,
        totalEventsToShow: i.a.number.isRequired,
      });
    var tt = et,
      nt = (n(16),
      function(e) {
        var t = e.events,
          n = e.grid,
          r = e.renderCell,
          o = e.renderHeader,
          i = e.onDragEnd,
          c = e.onSelectSlot,
          u = e.onSelectDate,
          l = e.onSelectMoreEvents,
          d = e.onSelectEvent,
          f = xe({ events: t }).eventsWithSelectedEventGroups,
          p = M(),
          g = p.rowRef,
          m = p.eventRef,
          v = p.cellRef,
          h = p.eventWrapperRef,
          y = p.eventHeight,
          b = p.totalEventsToShow,
          _ = p.cellDimensions,
          E = n;
        Array.isArray(E) || (E = C(n));
        var S = 0,
          w = 0;
        return a.a.createElement(
          'div',
          { className: Ee('day-grid') },
          a.a.createElement(
            'div',
            { className: Ee('day-grid__header') },
            s()(E, 0, []).map(function(e) {
              var t = e.date.format('dddd');
              return a.a.createElement(
                'div',
                { className: Ee('day-grid__column-header'), key: t },
                o ? o({ date: e.date }) : t
              );
            })
          ),
          a.a.createElement(
            'div',
            { className: Ee('day-grid__days') },
            E
              ? E.map(function(e) {
                  w += 1;
                  var t = e.length;
                  return a.a.createElement(
                    'div',
                    {
                      className: Ee('day-grid__row'),
                      ref: g,
                      key: 'monthColumn'.concat(w),
                    },
                    e.map(function(e) {
                      S += 1;
                      var n = s()(f, e.date.format('YYYY-MM-DD'), []);
                      return a.a.createElement(tt, {
                        totalColumns: t,
                        events: n,
                        ref: v,
                        eventHeight: y,
                        cellDimensions: _,
                        key: 'dayCells'.concat(S),
                        dayDetails: e,
                        renderCell: r,
                        onDragEnd: i,
                        onSelectSlot: c,
                        onSelectDate: u,
                        onSelectMoreEvents: l,
                        totalEventsToShow: b,
                        eventRef: m,
                        eventWrapperRef: h,
                        onSelectEvent: d,
                      });
                    })
                  );
                })
              : null
          )
        );
      });
    (nt.defaultProps = {
      events: [],
      renderCell: null,
      renderHeader: null,
      onDragEnd: function() {
        return null;
      },
      onSelectDate: function() {
        return null;
      },
      onSelectEvent: function() {
        return null;
      },
      onSelectMoreEvents: function() {
        return null;
      },
      onSelectSlot: function() {
        return null;
      },
    }),
      (nt.propTypes = {
        events: i.a.arrayOf(ke),
        grid: We.isRequired,
        onDragEnd: i.a.func,
        onSelectDate: i.a.func,
        onSelectEvent: i.a.func,
        onSelectMoreEvents: i.a.func,
        onSelectSlot: i.a.func,
        renderCell: i.a.func,
        renderHeader: i.a.func,
      });
    var rt = nt,
      at = new Date(),
      ot = _e.week;
    function it(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var ct = function(e) {
        var t = e.totalDates,
          n = e.forceSixWeeks;
        return t > 35 || n ? 42 : 35;
      },
      ut = function(e) {
        var t = e.date,
          n = e.day,
          r = e.isInRange,
          a = e.type,
          o = { day: n, isInRange: r },
          i = null;
        return (
          'last' === a &&
            (i = t
              .clone()
              .subtract(1, 'months')
              .date(n)),
          'current' === a && (i = t.clone().date(n)),
          'next' === a &&
            (i = t
              .clone()
              .add(1, 'months')
              .date(n)),
          (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              'function' == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function(t) {
                  it(e, t, n[t]);
                });
            }
            return e;
          })({}, o, { date: i })
        );
      },
      lt = function(e) {
        for (
          var t = e.date,
            n = e.firstDay,
            r = e.forceSixWeeks,
            a = st({ date: t, firstDay: n }),
            o = ft(t),
            i = a.length + o.length,
            c = ct({ totalDates: i, forceSixWeeks: r }),
            u = pt({ totalDates: i, forceSixWeeks: r }),
            l = [].concat(a, o, u),
            s = [],
            d = 0;
          d < c;
          d += 7
        )
          s.push(l.slice(d, d + 7));
        return s;
      },
      st = function(e) {
        for (
          var t = e.date,
            n = e.firstDay,
            r = dt({
              firstDateDay: t
                .clone()
                .startOf('month')
                .day(),
              firstDay: n,
            }),
            a = t
              .clone()
              .subtract(1, 'months')
              .endOf('month')
              .date(),
            o = [],
            i = a - r + 1;
          i <= a;
          i += 1
        )
          o.push(i);
        return o;
      },
      dt = function(e) {
        for (
          var t = e.firstDateDay, n = e.firstDay, r = 0, a = n;
          a < n + 7;
          a += 1
        ) {
          if (a === t || (a > 6 && a === t + 7)) return r;
          r += 1;
        }
        return r;
      },
      ft = function(e) {
        for (var t = e.daysInMonth(), n = [], r = 1; r <= t; r += 1) n.push(r);
        return n;
      },
      pt = function(e) {
        for (
          var t = e.totalDates,
            n = e.forceSixWeeks,
            r = ct({ totalDates: t, forceSixWeeks: n }) - t,
            a = [],
            o = 1;
          o <= r;
          o += 1
        )
          a.push(o);
        return a;
      },
      gt = function(e) {
        var t = e.date,
          n = e.firstDay,
          r = void 0 === n ? 0 : n,
          a = e.forceSixWeeks,
          o = lt({ date: t, firstDay: r, forceSixWeeks: void 0 !== a && a }),
          i = t
            .clone()
            .subtract(1, 'months')
            .endOf('month')
            .date(),
          c = t
            .clone()
            .endOf('month')
            .date(),
          u = 1 !== o[0][0],
          l = 1 === o[0][0],
          s = !1;
        return o.map(function(e) {
          return e.map(function(e) {
            return u
              ? (e === i && ((u = !1), (l = !0)),
                ut({ date: t, day: e, isInRange: !1, type: 'last' }))
              : l
              ? (e === c && ((l = !1), (s = !0)),
                ut({ date: t, day: e, isInRange: !0, type: 'current' }))
              : s
              ? ut({ date: t, day: e, isInRange: !1, type: 'next' })
              : null;
          });
        });
      },
      mt = function(e) {
        var t = e.events,
          n = e.firstDay,
          r = e.forceSixWeeks,
          o = e.selectedDate,
          i = e.onDragEnd,
          c = e.onSelectMore,
          l = e.onSelectDate,
          s = e.onSelectSlot,
          d = e.onSelectEvent,
          f = e.visibleEventGroups,
          p = e.renderHeader,
          g = e.renderCell,
          m = e.renderEvent,
          v = gt({ date: u()(o), firstDay: n, forceSixWeeks: r });
        return a.a.createElement(rt, {
          grid: v,
          events: t,
          onDragEnd: i,
          onSelectMoreEvents: c,
          onSelectMonthDate: l,
          onSelectEvent: d,
          onSelectSlot: s,
          visibleEventGroups: f,
          renderEvent: m,
          renderHeader: p,
          renderCell: g,
        });
      };
    (mt.defaultProps = {
      events: [],
      forceSixWeeks: !1,
      firstDay: 0,
      selectedDate: at,
      onDragEnd: function() {
        return null;
      },
      onSelectDate: function() {
        return null;
      },
      onSelectMore: function() {
        return null;
      },
      onSelectEvent: function() {
        return null;
      },
      onSelectSlot: function() {
        return null;
      },
      visibleEventGroups: null,
      renderCell: null,
      renderEvent: null,
      renderHeader: null,
    }),
      (mt.propTypes = {
        events: i.a.arrayOf(ke),
        firstDay: Ce,
        forceSixWeeks: i.a.bool,
        onDragEnd: i.a.func,
        onSelectDate: i.a.func,
        onSelectEvent: i.a.func,
        onSelectMore: i.a.func,
        onSelectSlot: i.a.func,
        renderCell: i.a.func,
        renderEvent: i.a.func,
        renderHeader: i.a.func,
        selectedDate: je,
        visibleEventGroups: i.a.arrayOf(i.a.number),
      });
    var vt = mt;
    n(18);
    function ht(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var yt = a.a.forwardRef(function(e, t) {
      e.selectedDate, e.firstDay;
      var n = e.stepMinutes,
        o = e.stepHeight,
        i = (e.selectMinutes, e.onCurrentTimeChange),
        c = e.renderHeader,
        l = e.renderColumns,
        s = e.renderCorner,
        d = e.totalWidth,
        f = ht(Object(r.useState)(u()()), 2),
        p = f[0],
        g = f[1],
        m = ht(Object(r.useState)(15), 2),
        v = m[0],
        h = m[1];
      Object(r.useEffect)(function() {
        var e = setTimeout(function() {
          var e = u()();
          g(e), i(new Date(e.format('YYYY-MM-DD HH:mm:ss')));
        }, 6e4);
        return function() {
          clearTimeout(e);
        };
      });
      var y = V(d),
        b = y.wrapperRef,
        _ = y.timeGutterRef,
        E = y.headerRef,
        S = y.cornerRef,
        w = y.timeIndicatorRef,
        x = y.stepLinesRef,
        D = 50;
      _.current && (D = _.current.offsetWidth - 1);
      var O = 60 / n;
      Object(r.useEffect)(
        function() {
          0 === v && h(W());
        },
        [v]
      );
      var M = Ee('time-grid__current-time-indicator'),
        j = Object(r.useMemo)(
          function() {
            return (o || z[n]) * O * 24 + (1 * O * 24 - 25);
          },
          [n]
        );
      return a.a.createElement(
        'div',
        { className: Ee('time-grid'), ref: t },
        a.a.createElement(
          'div',
          { className: Ee('time-grid__header-wrapper') },
          a.a.createElement(
            'div',
            {
              className: Ee('time-grid__corner'),
              style: { flex: '1 0 '.concat(D, 'px') },
              ref: S,
            },
            s({ currentTime: p })
          ),
          a.a.createElement(
            'div',
            {
              className: Ee('time-grid__header'),
              style: { marginRight: v - 1 },
              ref: E,
            },
            c()
          ),
          a.a.createElement(
            'div',
            {
              className: Ee('time-grid__scroll-gutter'),
              style: { width: v - 1 },
            },
            a.a.createElement('div', {
              className: Ee('time-grid__scroll-gutter-connector'),
            })
          )
        ),
        a.a.createElement(
          'div',
          { className: Ee('time-grid__grid-wrapper'), ref: b },
          a.a.createElement(
            'div',
            { className: Ee('time-grid__step-lines'), ref: x },
            (function() {
              for (
                var e = ''.concat((o || z[n]) + 1 / O, 'px'), t = [], r = 0;
                r < 24 * O;
                r += 1
              ) {
                var i = r % O;
                t.push(
                  a.a.createElement('div', {
                    className: Ee(
                      'time-grid__step-line',
                      i && 'time-grid__step-line-minor'
                    ),
                    key: 'timeBlock'.concat(r),
                    style: { height: e },
                    role: 'button',
                  })
                );
              }
              return t;
            })()
          ),
          a.a.createElement(
            'div',
            {
              className: Ee('time-grid__time-gutter'),
              ref: _,
              style: { height: j },
            },
            (function() {
              for (var e = O * (o || z[n]), t = [], r = 0; r < 24; r += 1)
                t.push(
                  a.a.createElement(
                    'div',
                    {
                      className: Ee('time-grid__time-label-wrapper'),
                      key: 'dayTime'.concat(r),
                      style: { height: ''.concat(e + 1, 'px') },
                    },
                    a.a.createElement(
                      'span',
                      {
                        className: Ee(
                          'time-grid__time-label',
                          'time-grid__time-label-'.concat(r)
                        ),
                      },
                      u()()
                        .hour(r)
                        .format('ha')
                    )
                  )
                );
              return t;
            })()
          ),
          a.a.createElement(
            'div',
            { className: Ee('time-grid__grid') },
            a.a.createElement(
              'div',
              {
                className: M,
                style: {
                  top: ''.concat(
                    Y({ stepMinutes: n, date: p, stepHeight: o }),
                    'px'
                  ),
                },
                ref: w,
              },
              a.a.createElement(
                'span',
                { className: ''.concat(M, '__time') },
                u()().format('h:mma')
              ),
              a.a.createElement('div', { className: ''.concat(M, '__line') })
            ),
            l({ currentTime: p, totalGridHeight: j })
          )
        )
      );
    });
    (yt.displayName = 'TimeGrid'),
      (yt.defaultProps = {
        renderCorner: function() {
          return null;
        },
        selectedDate: at,
        firstDay: 0,
        selectMinutes: 15,
        stepMinutes: 30,
        stepHeight: null,
        onCurrentTimeChange: function() {
          return null;
        },
      }),
      (yt.propTypes = {
        firstDay: Ce,
        onCurrentTimeChange: i.a.func,
        renderColumns: i.a.func.isRequired,
        renderCorner: i.a.func,
        renderHeader: i.a.func.isRequired,
        selectMinutes: He,
        selectedDate: je,
        stepHeight: i.a.number,
        stepMinutes: He,
        totalWidth: i.a.number.isRequired,
      });
    var bt = yt;
    n(20);
    function _t() {
      return (_t =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Et(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    function St(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var wt = Ee('time-grid__event-handle-center'),
      xt = Ee('time-grid__event-handle'),
      Dt = function(e) {
        var t = e.children,
          n = (e.className, e.event),
          o = e.isSelectable,
          i = e.onSelect,
          c = St(e, [
            'children',
            'className',
            'event',
            'isSelectable',
            'onSelect',
          ]),
          u = Object(r.useRef)(null),
          l = Object(r.useRef)(null),
          s = Et(Object(r.useState)(0), 2),
          d = s[0],
          f = s[1];
        return (
          Object(r.useEffect)(function() {
            if (null !== u.current && null !== l.current) {
              var e = u.current.clientHeight,
                t = l.current.clientHeight,
                n = ''.concat(e - t, 'px');
              d !== n && f(n);
            }
          }),
          a.a.createElement(
            Ve,
            _t({ ref: u, event: n, onSelect: i, isSelectable: o }, c),
            a.a.createElement('div', { className: wt, style: { height: d } }),
            t
              ? t(n)
              : a.a.createElement(
                  'div',
                  { className: Ee('time-grid__event-details-wrapper') },
                  a.a.createElement(
                    'span',
                    { className: Ee('time-grid__event-title') },
                    n.title
                  ),
                  a.a.createElement(
                    'span',
                    { className: Ee('time-grid__event-time') },
                    L(n)
                  )
                ),
            a.a.createElement('div', {
              className: ''
                .concat(xt, ' ')
                .concat(Ee('time-grid__event-handle-bottom')),
              ref: l,
            })
          )
        );
      };
    (Dt.defaultProps = { children: null, className: null, isSelectable: !0 }),
      (Dt.propTypes = {
        children: i.a.func,
        className: i.a.string,
        event: ke.isRequired,
        isSelectable: i.a.bool,
        onSelect: i.a.func.isRequired,
      });
    var Ot = Dt;
    function Mt(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var jt = function(e) {
        var t = e.isDragging,
          n = e.wasDragged;
        return Ee(
          'time-grid__draggable-event',
          t && 'time-grid__dragging-event',
          n && 'time-grid__dragged-event'
        );
      },
      Ct = function(e) {
        var t = e.event,
          n = e.stepMinutes,
          o = e.selectMinutes,
          i = e.columnWidths,
          c = e.columnIndex,
          u = e.onDrag,
          l = e.onDragEnd,
          s = e.children,
          d = e.stepHeight,
          f = e.getUpdatedDraggedEvent,
          p = Mt(Object(r.useState)({ x: 0, y: 0 }), 2),
          g = p[0],
          m = p[1],
          v = Mt(Object(r.useState)(0), 2),
          h = v[0],
          y = v[1],
          b = Mt(Object(r.useState)(0), 2),
          _ = b[0],
          E = b[1],
          S = Mt(Object(r.useState)(i[c]), 2),
          w = S[0],
          x = S[1],
          D = Mt(Object(r.useState)(!1), 2),
          O = D[0],
          M = D[1],
          j = Mt(Object(r.useState)(!1), 2),
          C = j[0],
          R = j[1],
          T = Mt(Object(r.useState)(c), 2),
          k = T[0],
          P = T[1],
          H = oe({ stepHeight: d, stepMinutes: n, selectMinutes: o }),
          N = ae({
            originalStart: t.start,
            originalEnd: t.end,
            pixelsMoved: g.y,
            selectMinutes: o,
            selectMinutesHeight: H,
          }),
          I = k - c,
          W = function(e) {
            var t = e.direction,
              n = e.left;
            E(n), x(i[k + t]), P(k + t);
          },
          z = Object.assign({}, t),
          A = ue({
            event: t,
            deltaPosition: g,
            selectMinutesHeight: H,
            selectMinutes: o,
          });
        return (
          (z.start = A.start),
          (z.end = A.end),
          void 0 !== t.paddingTopStart &&
            (z.paddingTopStart = A.paddingTopStart),
          void 0 !== t.paddingBottomEnd &&
            (z.paddingBottomEnd = A.paddingBottomEnd),
          ((z = f({
            event: z,
            start: A.start,
            end: A.end,
            columnMoves: I,
          })).top = t.top + N),
          (function() {
            w !== i[k] && x(i[k]);
            var e = (function(e) {
              for (
                var t = e.columnMoves,
                  n = e.columnWidths,
                  r = e.columnIndex,
                  a = 0,
                  o = 1;
                o <= Math.abs(t);
                o += 1
              )
                t < 0 && (a += -1 * n[r - o]), t > 0 && (a += n[r + o - 1]);
              return a;
            })({ columnMoves: I, columnWidths: i, columnIndex: c });
            e !== _ && E(e);
            var t = e + w;
            h < e && 0 !== k && W({ direction: -1, left: e }),
              h > t && k !== i.length - 1 && W({ direction: 1, left: e });
          })(),
          a.a.createElement(
            r.Fragment,
            null,
            a.a.createElement(
              De.DraggableCore,
              {
                onDrag: function(e, t) {
                  var n = g.x,
                    r = g.y;
                  m({ x: n + t.deltaX, y: r + t.deltaY }),
                    y(t.x),
                    M(!0),
                    u(e, t);
                },
                handle: '.'.concat(wt),
                onStop: function(e, t) {
                  if (!O) return !1;
                  m({ x: 0, y: 0 }),
                    setTimeout(function() {
                      return M(!1);
                    }),
                    R(!0),
                    l({ e: e, event: we(z) });
                },
              },
              s({
                draggedEvent: z,
                leftChange: _,
                currentColumnWidth: w,
                isDragging: O,
                wasDragged: C,
                isDndPlaceholder: !1,
                dndClassName: jt({ isDragging: O, wasDragged: C }),
              })
            ),
            O &&
              a.a.createElement(
                'div',
                { className: Ee('time-grid__dragging-placeholder-event') },
                s({
                  draggedEvent: t,
                  isDragging: O,
                  topChange: 0,
                  isDndPlaceholder: !0,
                })
              )
          )
        );
      };
    (Ct.defaultProps = {
      isDraggable: !0,
      getUpdatedDraggedEvent: function() {
        return null;
      },
      onDrag: function() {
        return null;
      },
      stepHeight: null,
      selectMinutes: 15,
      stepMinutes: 30,
    }),
      (Ct.propTypes = {
        children: i.a.func.isRequired,
        columnIndex: i.a.number.isRequired,
        columnWidths: Ie.isRequired,
        event: ke.isRequired,
        getUpdatedDraggedEvent: i.a.func,
        isDraggable: i.a.bool,
        onDrag: i.a.func,
        onDragEnd: i.a.func.isRequired,
        selectMinutes: He,
        stepHeight: i.a.number,
        stepMinutes: He,
      });
    var Rt = Ct;
    function Tt(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var kt = function(e) {
      var t = e.children,
        n = e.event,
        o = e.onExtend,
        i = e.onExtendEnd,
        c = e.selectMinutes,
        u = e.stepMinutes,
        l = e.stepHeight,
        s = Tt(Object(r.useState)(!1), 2),
        d = s[0],
        f = s[1],
        p = Tt(Object(r.useState)({ x: 0, y: 0 }), 2),
        g = p[0],
        m = p[1],
        v = Object(r.useMemo)(
          function() {
            return oe({ stepMinutes: u, selectMinutes: c, stepHeight: l });
          },
          [u, c]
        ),
        h = ue({
          event: n,
          deltaPosition: g,
          selectMinutesHeight: v,
          selectMinutes: c,
          isDurationOnly: !0,
        }),
        y = ae({
          pixelsMoved: g.y,
          selectMinutes: c,
          originalStart: n.start,
          originalEnd: n.end,
          selectMinutesHeight: v,
        }),
        b = Object.assign({}, n);
      return (
        (b.start = h.start),
        (b.end = h.end),
        (b.height = n.height + y),
        void 0 !== h.paddingTopStart && (b.paddingTopStart = h.paddingTopStart),
        void 0 !== h.paddingBottomEnd &&
          (b.paddingBottomEnd = h.paddingBottomEnd),
        a.a.createElement(
          De.DraggableCore,
          {
            handle: '.'.concat(xt),
            onDrag: function(e, t) {
              var n = g.x,
                r = g.y;
              m({ x: n + t.deltaX, y: r + t.deltaY }), o(we(b)), f(!0);
            },
            onStop: function(e, t) {
              if (!d) return !1;
              m({ x: 0, y: 0 }),
                setTimeout(function() {
                  return f(!1);
                }),
                i({ e: e, ui: t, event: b });
            },
          },
          a.a.createElement(
            'span',
            null,
            t({ isExtending: d, extendedEvent: b })
          )
        )
      );
    };
    (kt.defaultProps = {
      onExtend: function() {
        return null;
      },
      selectMinutes: 15,
      stepMinutes: 30,
      stepHeight: null,
    }),
      (kt.propTypes = {
        children: i.a.func.isRequired,
        event: ke.isRequired,
        onExtend: i.a.func,
        onExtendEnd: i.a.func.isRequired,
        selectMinutes: He,
        stepHeight: i.a.number,
        stepMinutes: He,
      });
    var Pt = kt;
    function Ht() {
      return (Ht =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Nt(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var It = a.a.forwardRef(function(e, t) {
      var n = e.columnId,
        o = e.columnIndex,
        i = e.columnWidths,
        c = e.currentTime,
        l = e.date,
        d = e.events,
        f = e.gridHeight,
        p = e.stepMinutes,
        g = e.onDragEnd,
        m = e.onExtendEnd,
        v = e.onSelectEvent,
        h = e.onSelectSlot,
        y = e.onSelectRangeEnd,
        b = e.selectMinutes,
        _ = e.stepDetails,
        E = e.renderEvent,
        S = e.getUpdatedDraggedEvent,
        w = e.minWidth,
        x = e.minWidthEmpty,
        D = e.renderStepDetail,
        O = e.renderSelectSlotIndicator,
        M = e.renderSelectRange,
        j = e.renderEventPaddingTop,
        C = e.renderEventPaddingBottom,
        R = e.stepHeight,
        T = Nt(Object(r.useState)(!0), 2),
        k = T[0],
        P = T[1],
        H = Nt(Object(r.useState)(null), 2),
        N = H[0],
        I = H[1],
        W = se({
          isSelectable: k,
          stepMinutes: p,
          selectMinutes: b,
          columnDate: l,
          stepHeight: R,
        }),
        z = W.selectRangeHandlers,
        A = W.isSelectRangeFinished,
        G = W.resetSelectRangeDrag,
        U = W.selectRangeHeight,
        F = W.selectRangeTop,
        X = W.selectRange,
        $ = Object.keys(d).length,
        V = 100 / $ - 1,
        J = Ee('time-grid__current-time-indicator');
      return a.a.createElement(
        'div',
        Ht(
          {
            className: ''.concat(Ee('time-grid__grid-column')).concat(q(l)),
            key: 'weekView'.concat(l.day()),
            style: { height: f, minWidth: $ * w || x },
            onClick: function(e) {
              if (A)
                return (
                  G(),
                  y({
                    e: e,
                    start: new Date(X.start),
                    end: new Date(X.end),
                    column: n,
                  }),
                  !1
                );
              if (!k) return !1;
              var t = B({
                stepHeight: R,
                stepMinutes: p,
                selectMinutes: b,
                columnDate: l,
              })(e);
              I(t),
                h({ e: e, date: new Date(t), column: n }),
                setTimeout(function() {
                  return I(null);
                }, 300),
                G();
            },
          },
          z,
          { ref: t }
        ),
        l.isSame(u()(), 'day') &&
          c &&
          a.a.createElement(
            'div',
            {
              className: J,
              style: {
                top: ''.concat(
                  Y({ stepMinutes: p, date: c, stepHeight: R }),
                  'px'
                ),
              },
            },
            a.a.createElement('div', {
              className: ''.concat(J, '__line-today'),
            })
          ),
        N &&
          a.a.createElement(
            'div',
            {
              className: Ee('time-grid__select-slot-indicator'),
              style: { top: ''.concat(Y({ stepMinutes: p, date: N }), 'px') },
            },
            O
              ? O({
                  time: new Date(N.format('YYYY-MM-DD HH:mm:ss')),
                  column: n,
                })
              : a.a.createElement(
                  'div',
                  { className: Ee('time-grid__select-slot-indicator-time') },
                  N.format('h:mma')
                )
          ),
        0 !== U &&
          k &&
          a.a.createElement(
            'div',
            {
              className: Ee('time-grid__select-range'),
              style: { height: U, top: F },
            },
            M ? M({ start: new Date(X.start), end: new Date(X.end) }) : L(X)
          ),
        Object.keys(d).map(function(e) {
          return s()(d, e, []).map(function(t) {
            return a.a.createElement(
              Pt,
              {
                key: t.id,
                event: t,
                stepHeight: R,
                stepMinutes: p,
                selectMinutes: b,
                onExtend: function() {
                  G(), P(!1);
                },
                onExtendEnd: function(e) {
                  setTimeout(function() {
                    return P(!0);
                  }),
                    m(e);
                },
              },
              function(n) {
                var r = n.isExtending,
                  c = n.extendedEvent;
                n.heightChange;
                return a.a.createElement(
                  Rt,
                  {
                    event: c,
                    columnIndex: o,
                    columnWidths: i,
                    stepHeight: R,
                    stepMinutes: p,
                    selectMinutes: b,
                    onDrag: function() {
                      G(), P(!1);
                    },
                    onDragEnd: function(e) {
                      g(e),
                        setTimeout(function() {
                          return P(!0);
                        });
                    },
                    getUpdatedDraggedEvent: S,
                  },
                  function(n) {
                    var o = n.draggedEvent,
                      i = n.isDragging,
                      c = n.leftChange,
                      u = n.currentColumnWidth,
                      l = n.isDndPlaceholder,
                      s = n.dndClassName,
                      d = !l && (i || r);
                    return a.a.createElement(
                      'div',
                      {
                        className: ''
                          .concat(s, ' ')
                          .concat(Ee('time-grid__event-wrapper')),
                        style: {
                          top: o.top - t.paddingTopHeight,
                          width: d ? ''.concat(u, 'px') : ''.concat(V, '%'),
                          left: d
                            ? ''.concat(c, 'px')
                            : ''.concat(V * (e - 1), '%'),
                        },
                      },
                      t.paddingTopStart &&
                        !l &&
                        a.a.createElement(
                          'div',
                          {
                            className: Ee(
                              'time-grid__event-padding',
                              'time-grid__event-padding-top'
                            ),
                            style: { height: t.paddingTopHeight },
                          },
                          j(t)
                        ),
                      a.a.createElement(
                        Ot,
                        {
                          event: o,
                          style: { height: ''.concat(o.height, 'px') },
                          onSelect: v,
                          isSelectable: !i && !r,
                        },
                        E
                      ),
                      t.paddingBottomEnd &&
                        !l &&
                        a.a.createElement(
                          'div',
                          {
                            className: Ee(
                              'time-grid__event-padding',
                              'time-grid__event-padding-bottom'
                            ),
                            style: { height: t.paddingBottomHeight },
                          },
                          C(t)
                        )
                    );
                  }
                );
              }
            );
          });
        }),
        _.map(function(e) {
          return a.a.createElement(
            'div',
            {
              key: e.id,
              className: Ee('time-grid__step-detail-wrapper'),
              style: {
                top: ''.concat(e.top, 'px'),
                height: ''.concat(e.height, 'px'),
              },
            },
            D(e)
          );
        })
      );
    });
    (It.displayName = 'Column'),
      (It.defaultProps = {
        renderEvent: null,
        onExtendEnd: function() {
          return null;
        },
        onDragEnd: function() {
          return null;
        },
        stepMinutes: 30,
        events: {},
        date: u()(),
        onSelectEvent: function() {
          return null;
        },
        onSelectSlot: function() {
          return null;
        },
        selectMinutes: 15,
        currentTime: null,
        stepDetails: [],
        getUpdatedDraggedEvent: function() {
          return null;
        },
        minWidth: 190,
        minWidthEmpty: 100,
        renderStepDetail: function() {
          return null;
        },
        renderSelectSlotIndicator: null,
        onSelectRangeEnd: function() {
          return null;
        },
        renderSelectRange: null,
        renderEventPaddingTop: function() {
          return null;
        },
        renderEventPaddingBottom: function() {
          return null;
        },
        stepHeight: null,
      }),
      (It.propTypes = {
        columnId: i.a.oneOfType([i.a.instanceOf(Date), i.a.number]).isRequired,
        columnIndex: i.a.number.isRequired,
        columnWidths: Ie.isRequired,
        currentTime: Re,
        date: Re,
        events: i.a.object,
        getUpdatedDraggedEvent: i.a.func,
        gridHeight: i.a.number.isRequired,
        minWidth: i.a.number,
        minWidthEmpty: i.a.number,
        onDragEnd: i.a.func,
        onExtendEnd: i.a.func,
        onSelectEvent: i.a.func,
        onSelectRangeEnd: i.a.func,
        onSelectSlot: i.a.func,
        renderEvent: i.a.func,
        renderEventPaddingBottom: i.a.func,
        renderEventPaddingTop: i.a.func,
        renderSelectRange: i.a.func,
        renderSelectSlotIndicator: i.a.func,
        renderStepDetail: i.a.func,
        selectMinutes: He,
        stepDetails: i.a.array,
        stepHeight: i.a.number,
        stepMinutes: He,
      });
    var Wt = It,
      zt = function(e) {
        var t = e.children,
          n = e.totalEventColumns,
          r = (e.totalColumns, e.date),
          o = e.minWidth,
          i = e.minWidthEmpty;
        return a.a.createElement(
          'div',
          {
            className: ''.concat(Ee('time-grid__header-column')).concat(q(r)),
            style: { minWidth: ''.concat(n * o || i, 'px') },
          },
          a.a.createElement(
            'div',
            { className: ''.concat(Ee('time-grid__header-column-container')) },
            t
          )
        );
      };
    (zt.defaultProps = { minWidth: 190, minWidthEmpty: 100 }),
      (zt.propTypes = {
        children: i.a.node.isRequired,
        date: Re.isRequired,
        minWidth: i.a.number,
        minWidthEmpty: i.a.number,
        totalColumns: i.a.number.isRequired,
        totalEventColumns: i.a.number.isRequired,
      });
    var At = zt;
    function Yt(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var qt = function(e) {
        var t = e.events,
          n = e.groupId,
          r = e.selectedDate;
        return s()(t, ''.concat(n, '.').concat(r.format('YYYY-MM-DD')), !1);
      },
      Bt = function(e) {
        var t = e.selectedDate,
          n = e.visibleEventGroups,
          r = e.renderHeader,
          o = e.firstDay,
          i = e.stepMinutes,
          c = e.minWidthColumn,
          u = e.minWidthColumnEmpty,
          l = e.onDragEnd,
          s = e.onExtendEnd,
          d = e.onCurrentTimeChange,
          f = e.onSelectEvent,
          p = e.onSelectSlot,
          g = e.onSelectRangeEnd,
          m = e.selectMinutes,
          v = e.stepDetails,
          h = e.events,
          y = e.renderEvent,
          b = e.renderCorner,
          _ = e.renderStepDetail,
          E = e.renderSelectSlotIndicator,
          S = e.renderSelectRange,
          w = e.renderEventPaddingTop,
          x = e.renderEventPaddingBottom,
          D = e.stepHeight,
          O = Z(),
          M = O.TimeGridRef,
          j = O.assignRef,
          C = O.elementWidths,
          R = xe({
            events: h,
            stepMinutes: i,
            stepHeight: D,
            stepDetails: v,
            visibleEventGroups: n,
          }),
          T = R.mungedEvents,
          N = R.mungedStepDetails,
          I = (function(e) {
            var t = Object.assign({}, e);
            return Object.keys(t).reduce(function(e, n) {
              return (
                Object.keys(t[n]).forEach(function(r) {
                  e = k({}, e, P({}, n, k({}, e[n], P({}, r, H(t[n][r])))));
                }),
                e
              );
            }, {});
          })(T),
          W = n;
        return (
          n ||
            (W = Object.keys(I).map(function(e) {
              return Number(e);
            })),
          a.a.createElement(bt, {
            ref: M,
            selectedDate: t,
            firstDay: o,
            totalWidth: C.reduce(function(e, t) {
              return e + t;
            }, 0),
            onCurrentTimeChange: d,
            stepMinutes: i,
            selectMinutes: m,
            stepHeight: D,
            renderCorner: b,
            renderHeader: function() {
              var e = W.length;
              return W.map(function(n) {
                var o = qt({ events: I, groupId: n, selectedDate: t }),
                  i = Object.keys(o).length;
                return a.a.createElement(
                  At,
                  {
                    key: 'calendarHeader'.concat(n),
                    totalEventColumns: i,
                    totalColumns: e,
                    date: t,
                    minWidth: c,
                    minWidthEmpty: u,
                  },
                  a.a.createElement(
                    'h2',
                    null,
                    r && r({ groupId: n, events: o })
                  )
                );
              });
            },
            renderColumns: function(e) {
              var n = e.currentTime,
                r = e.totalGridHeight,
                o = function(e) {
                  var t = e.columnMoves,
                    n = e.columnIndex;
                  return W[n + t];
                };
              return W.map(function(e, c) {
                var u = qt({ events: I, groupId: e, selectedDate: t }) || {},
                  d = qt({ events: N, groupId: e, selectedDate: t }) || [];
                return a.a.createElement(Wt, {
                  ref: j(e),
                  key: 'groupColumn'.concat(e),
                  events: u,
                  stepDetails: d,
                  gridHeight: r,
                  stepHeight: D,
                  date: t,
                  columnId: e,
                  columnWidths: C,
                  columnIndex: c,
                  onDragEnd: l,
                  onExtendEnd: s,
                  onSelectEvent: f,
                  onSelectRangeEnd: g,
                  onSelectSlot: p,
                  stepMinutes: i,
                  selectMinutes: m,
                  currentTime: n,
                  renderEvent: y,
                  renderStepDetail: _,
                  renderSelectSlotIndicator: E,
                  renderSelectRange: S,
                  renderEventPaddingTop: w,
                  renderEventPaddingBottom: x,
                  getUpdatedDraggedEvent: function(e) {
                    var t = e.event,
                      n = e.columnMoves;
                    return (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(
                                n,
                                e
                              ).enumerable;
                            })
                          )),
                          r.forEach(function(t) {
                            Yt(e, t, n[t]);
                          });
                      }
                      return e;
                    })({}, t, {
                      group_id: o({ columnMoves: n, columnIndex: c }),
                    });
                  },
                });
              });
            },
          })
        );
      };
    (Bt.defaultProps = {
      events: [],
      renderCorner: function() {
        return null;
      },
      renderEvent: null,
      selectedDate: u()(),
      onExtendEnd: function() {
        return null;
      },
      onCurrentTimeChange: function() {
        return null;
      },
      onDragEnd: function() {
        return null;
      },
      onSelectRangeEnd: function() {
        return null;
      },
      minWidthColumn: 190,
      minWidthColumnEmpty: 100,
      renderStepDetail: function() {
        return null;
      },
      renderSelectSlotIndicator: null,
      renderSelectRange: null,
      renderEventPaddingTop: function() {
        return null;
      },
      renderEventPaddingBottom: function() {
        return null;
      },
      stepHeight: null,
      stepMinutes: 30,
      selectMinutes: 15,
      stepDetails: null,
      firstDay: 0,
      visibleEventGroups: null,
    }),
      (Bt.propTypes = {
        events: i.a.arrayOf(ke),
        firstDay: Ce,
        minWidthColumn: i.a.number,
        minWidthColumnEmpty: i.a.number,
        onCurrentTimeChange: i.a.func,
        onDragEnd: i.a.func,
        onExtendEnd: i.a.func,
        onSelectEvent: i.a.func.isRequired,
        onSelectRangeEnd: i.a.func,
        onSelectSlot: i.a.func.isRequired,
        renderCorner: i.a.func,
        renderEvent: i.a.func,
        renderEventPaddingBottom: i.a.func,
        renderEventPaddingTop: i.a.func,
        renderHeader: i.a.func.isRequired,
        renderSelectRange: i.a.func,
        renderSelectSlotIndicator: i.a.func,
        renderStepDetail: i.a.func,
        selectMinutes: He,
        selectedDate: Re,
        stepDetails: i.a.arrayOf(Pe),
        stepHeight: i.a.number,
        stepMinutes: He,
        visibleEventGroups: i.a.arrayOf(i.a.number),
      });
    var Lt = Bt,
      Gt = function(e) {
        var t = e.firstDay,
          n = e.date,
          r = (function(e) {
            e.firstDay;
            for (
              var t = [], n = e.date.clone().subtract(6, 'days'), r = 0;
              r < 13;
              r += 1
            )
              t.push(n.clone().add(r, 'days'));
            return t;
          })({ firstDay: t, date: n }),
          a = (function(e) {
            var t = e.firstDay,
              n = e.dateDay;
            if (t === n) return 6;
            var r = t - (n + 7);
            return n > t && (r = -1 * (n - t)), 6 + r;
          })({ firstDay: t, dateDay: n.day(), possibleDays: r });
        return r.slice(a, a + 7);
      };
    function Ut(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var Ft = function(e) {
      var t = e.events,
        n = e.selectedDate,
        o = e.firstDay,
        i = e.minWidthColumn,
        c = e.minWidthColumnEmpty,
        l = e.stepMinutes,
        d = e.onDragEnd,
        f = e.onExtendEnd,
        p = e.onSelectEvent,
        g = e.onSelectSlot,
        m = e.onCurrentTimeChange,
        v = e.onSelectRangeEnd,
        h = e.selectMinutes,
        y = e.renderEvent,
        b = e.stepDetails,
        _ = e.renderCorner,
        E = e.renderStepDetail,
        S = e.renderSelectSlotIndicator,
        w = e.renderSelectRange,
        x = e.renderEventPaddingTop,
        D = e.renderEventPaddingBottom,
        O = e.renderHeader,
        M = e.stepHeight,
        j = e.visibleEventGroups,
        C = Gt({ date: u()(n), firstDay: o }),
        R = Z(),
        T = R.TimeGridRef,
        k = R.assignRef,
        P = R.elementWidths,
        H = xe({
          events: t,
          stepMinutes: l,
          stepHeight: M,
          stepDetails: b,
          visibleEventGroups: j,
        }),
        N = H.eventsWithSelectedEventGroups,
        W = H.mungedStepDetailsGroups,
        z = Object(r.useMemo)(
          function() {
            return I(N);
          },
          [N]
        );
      return a.a.createElement(bt, {
        ref: T,
        selectedDate: n,
        totalWidth: P.reduce(function(e, t) {
          return e + t;
        }, 0),
        firstDay: o,
        stepMinutes: l,
        onSelectEvent: p,
        onSelectSlot: g,
        onCurrentTimeChange: m,
        selectMinutes: h,
        stepHeight: M,
        renderCorner: _,
        renderHeader: function() {
          return C.map(function(e) {
            var n = Object.keys(s()(z, e.format('YYYY-MM-DD'), {})).length;
            return a.a.createElement(
              At,
              {
                key: 'dayHeader'.concat(e.date()),
                totalEventColumns: n,
                totalColumns: C.length,
                date: e,
                minWidth: i,
                minWidthEmpty: c,
              },
              O
                ? O({ data: e, events: t })
                : a.a.createElement(
                    'h2',
                    null,
                    e.format('dddd'),
                    a.a.createElement('br', null),
                    e.format('MMM, D')
                  )
            );
          });
        },
        renderColumns: function(e) {
          var t = e.currentTime,
            n = e.totalGridHeight;
          return C.map(function(e, r) {
            var o = s()(W, e.format('YYYY-MM-DD'), []),
              u = s()(z, e.format('YYYY-MM-DD'), {}),
              m = new Date(e.startOf('day').format('YYYY-MM-DD HH:mm:ss'));
            return a.a.createElement(Wt, {
              ref: k(e.day()),
              key: 'weekColumn'.concat(e.day()),
              events: u,
              stepDetails: o,
              date: e,
              columnId: m,
              columnWidths: P,
              columnIndex: r,
              minWidth: i,
              minWidthEmpty: c,
              onDragEnd: d,
              onExtendEnd: f,
              onSelectEvent: p,
              onSelectSlot: g,
              onSelectRangeEnd: v,
              renderSelectRange: w,
              stepMinutes: l,
              selectMinutes: h,
              stepHeight: M,
              gridHeight: n,
              currentTime: t,
              renderEvent: y,
              renderEventPaddingTop: x,
              renderEventPaddingBottom: D,
              getUpdatedDraggedEvent: function(e) {
                var t = e.event,
                  n = e.columnMoves,
                  r = e.start,
                  a = e.end,
                  o = {};
                return (
                  void 0 !== t.paddingTopStart &&
                    (o.paddingTopStart = t.paddingTopStart
                      .clone()
                      .add(n, 'days')),
                  void 0 !== t.paddingBottomEnd &&
                    (o.paddingBottomEnd = t.paddingBottomEnd
                      .clone()
                      .add(n, 'days')),
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(
                              n,
                              e
                            ).enumerable;
                          })
                        )),
                        r.forEach(function(t) {
                          Ut(e, t, n[t]);
                        });
                    }
                    return e;
                  })(
                    {},
                    t,
                    {
                      start: r.clone().add(n, 'days'),
                      end: a.clone().add(n, 'days'),
                    },
                    o
                  )
                );
              },
              renderStepDetail: E,
              renderSelectSlotIndicator: S,
            });
          });
        },
      });
    };
    (Ft.defaultProps = {
      events: [],
      renderEvent: null,
      renderCorner: function() {
        return null;
      },
      stepDetails: null,
      onExtendEnd: function() {
        return null;
      },
      onCurrentTimeChange: function() {
        return null;
      },
      onDragEnd: function() {
        return null;
      },
      onSelectRangeEnd: function() {
        return null;
      },
      minWidthColumn: 190,
      minWidthColumnEmpty: 100,
      renderStepDetail: function() {
        return null;
      },
      renderSelectSlotIndicator: null,
      renderSelectRange: null,
      renderEventPaddingTop: function() {
        return null;
      },
      renderEventPaddingBottom: function() {
        return null;
      },
      renderHeader: null,
      stepHeight: null,
      stepMinutes: 30,
      selectedDate: at,
      selectMinutes: 15,
      firstDay: 0,
      visibleEventGroups: null,
    }),
      (Ft.propTypes = {
        events: i.a.arrayOf(ke),
        firstDay: Ce,
        minWidthColumn: i.a.number,
        minWidthColumnEmpty: i.a.number,
        onCurrentTimeChange: i.a.func,
        onDragEnd: i.a.func,
        onExtendEnd: i.a.func,
        onSelectEvent: i.a.func.isRequired,
        onSelectRangeEnd: i.a.func,
        onSelectSlot: i.a.func.isRequired,
        renderCorner: i.a.func,
        renderEvent: i.a.func,
        renderEventPaddingBottom: i.a.func,
        renderEventPaddingTop: i.a.func,
        renderHeader: i.a.func,
        renderSelectRange: i.a.func,
        renderSelectSlotIndicator: i.a.func,
        renderStepDetail: i.a.func,
        selectMinutes: He,
        selectedDate: je,
        stepDetails: i.a.arrayOf(Pe),
        stepHeight: i.a.number,
        stepMinutes: He,
        visibleEventGroups: i.a.arrayOf(i.a.number),
      });
    var Xt = Ft;
    function $t(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Vt() {
      return (Vt =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Jt = function(e) {
      var t,
        n = e.events,
        r = e.firstDay,
        o = e.forceSixWeeks,
        i = e.minWidthColumn,
        c = e.minWidthColumnEmpty,
        l = e.onDragEnd,
        s = e.onExtendEnd,
        d = e.onSelectMore,
        f = e.onSelectDate,
        p = e.onSelectEvent,
        g = e.onSelectRangeEnd,
        m = e.onCurrentTimeChange,
        v = e.onSelectSlot,
        h = e.renderCell,
        y = (e.renderEvent, e.renderCorner),
        b = e.renderEventPaddingBottom,
        _ = e.renderEventPaddingTop,
        E = e.renderGroupsHeader,
        S = e.renderMonthHeader,
        w = e.renderSelectRange,
        x = e.renderSelectSlotIndicator,
        D = e.renderStepDetail,
        O = e.renderWeekHeader,
        M = e.renderDayGridEvent,
        j = e.renderTimeGridEvent,
        C = e.selectedDate,
        R = e.selectMinutes,
        T = e.stepDetails,
        k = e.stepHeight,
        P = e.stepMinutes,
        H = e.view,
        N = e.visibleEventGroups,
        I = _e.month,
        W = _e.week,
        z = _e.groups,
        A = {
          onDragEnd: l,
          onSelectEvent: p,
          onSelectSlot: v,
          events: n,
          selectedDate: u()(C),
          firstDay: r,
          visibleEventGroups: N,
        },
        Y = {
          onSelectMore: d,
          onSelectDate: f,
          forceSixWeeks: o,
          renderCell: h,
          renderEvent: M,
        },
        q = {
          onExtendEnd: s,
          onCurrentTimeChange: m,
          onSelectRangeEnd: g,
          stepDetails: T,
          minWidthColumn: i,
          minWidthColumnEmpty: c,
          renderCorner: y,
          renderEventPaddingBottom: b,
          renderEventPaddingTop: _,
          renderSelectRange: w,
          renderStepDetail: D,
          selectMinutes: R,
          stepHeight: k,
          stepMinutes: P,
          renderSelectSlotIndicator: x,
          renderEvent: j,
        };
      return ($t(
        (t = {}),
        I,
        a.a.createElement(vt, Vt({ renderHeader: S }, Y, A))
      ),
      $t(t, W, a.a.createElement(Xt, Vt({ renderHeader: O }, q, A))),
      $t(t, z, a.a.createElement(Lt, Vt({ renderHeader: E }, q, A))),
      t)[H];
    };
    (Jt.defaultProps = {
      events: [],
      firstDay: 0,
      forceSixWeeks: !1,
      minWidthColumn: 190,
      minWidthColumnEmpty: 100,
      onCurrentTimeChange: function() {
        return null;
      },
      onDragEnd: function() {
        return null;
      },
      onExtendEnd: function() {
        return null;
      },
      onSelectDate: function() {
        return null;
      },
      onSelectEvent: function() {
        return null;
      },
      onSelectMore: function() {
        return null;
      },
      onSelectRangeEnd: function() {
        return null;
      },
      onSelectSlot: function() {
        return null;
      },
      renderCell: null,
      renderCorner: function() {
        return null;
      },
      renderDayGridEvent: null,
      renderEventPaddingBottom: function() {
        return null;
      },
      renderEventPaddingTop: function() {
        return null;
      },
      renderGroupsHeader: null,
      renderMonthHeader: null,
      renderSelectRange: null,
      renderSelectSlotIndicator: null,
      renderStepDetail: function() {
        return null;
      },
      renderTimeGridEvent: null,
      renderWeekHeader: null,
      selectMinutes: 15,
      selectedDate: at,
      stepDetails: null,
      stepHeight: null,
      stepMinutes: 30,
      view: ot,
      visibleEventGroups: null,
    }),
      (Jt.propTypes = {
        events: i.a.arrayOf(ke),
        firstDay: Ce,
        forceSixWeeks: i.a.bool,
        minWidthColumn: i.a.number,
        minWidthColumnEmpty: i.a.number,
        onCurrentTimeChange: i.a.func,
        onDragEnd: i.a.func,
        onExtendEnd: i.a.func,
        onSelectDate: i.a.func,
        onSelectEvent: i.a.func,
        onSelectMore: i.a.func,
        onSelectRangeEnd: i.a.func,
        onSelectSlot: i.a.func,
        renderCell: i.a.func,
        renderCorner: i.a.func,
        renderDayGridEvent: i.a.func,
        renderEvent: i.a.func,
        renderEventPaddingBottom: i.a.func,
        renderEventPaddingTop: i.a.func,
        renderGroupsHeader: i.a.func,
        renderMonthHeader: i.a.func,
        renderSelectRange: i.a.func,
        renderSelectSlotIndicator: i.a.func,
        renderStepDetail: i.a.func,
        renderTimeGridEvent: i.a.func,
        renderWeekHeader: i.a.func,
        selectMinutes: He,
        selectedDate: je,
        stepDetails: i.a.arrayOf(Pe),
        stepHeight: i.a.number,
        stepMinutes: He,
        view: Te,
        visibleEventGroups: i.a.arrayOf(i.a.number),
      });
    var Kt = Jt;
    function Qt(e) {
      return (Qt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    var Zt = (function() {
        var e = function(e, t, n) {
            var r,
              a = e[t];
            return null == a || 'object' !== Qt(a)
              ? new TypeError(
                  'Invalid '
                    .concat(t, ' prop: ')
                    .concat(a, ' for ')
                    .concat(t, ' in ')
                    .concat(n)
                )
              : ((r = a),
                Object.keys(r).some(function(e) {
                  return !u()(new Date(e)).isValid() || 'number' != typeof r[e];
                })
                  ? new TypeError(
                      'Invalid '
                        .concat(t, ' prop: ')
                        .concat(
                          a,
                          " must have a date for \n        each key and a number for each value. e.g. {'2019-02-12': 5, '2019-02-13': 6}"
                        )
                    )
                  : null);
          },
          t = function(t, n, r) {
            return null == t[n] ? null : e(t, n, r);
          };
        return (t.isRequired = e), t;
      })(),
      en = '.'.concat('acuity-calendar'),
      tn = '.'.concat('acuity-calendar', '__day-grid'),
      nn = '\n    '
        .concat(en, '__heatmap-header {\n        font-size: 14px;\n    }\n    ')
        .concat(
          en,
          '__heatmap__cell {\n        background: #26ada0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    '
        )
        .concat(
          tn,
          ' {\n        height: 250px;\n        width: 250px;\n    }\n    '
        )
        .concat(
          tn,
          '__date-wrapper:hover {\n        background: none;\n    }\n    '
        )
        .concat(
          tn,
          '__date-wrapper {\n        position: relative;\n        cursor: default;\n        top: auto;\n        right: auto;\n        margin: 0 auto;\n    }\n    '
        )
        .concat(
          tn,
          '__column-header {\n        text-transform: none;\n        padding: 5px;\n    }\n    '
        )
        .concat(
          tn,
          '__cell {\n        position: relative;\n        display: flex;\n        align-items: center;\n    }\n    '
        )
        .concat(
          tn,
          '__date {\n        text-align: center;\n        position: relative;\n        z-index: 10;\n    }\n'
        );
    function rn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function(t) {
            an(e, t, n[t]);
          });
      }
      return e;
    }
    function an(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var on = function(e) {
      var t = e.counts,
        n = e.firstDay,
        o = e.forceSixWeeks,
        i = e.onSelectCell,
        c = e.renderCell,
        l = e.renderHeader,
        d = e.selectedDate,
        f = Math.max.apply(Math, Object.values(t)),
        p = Object.keys(t).length,
        g = function(e) {
          var n = u()(e).format('YYYY-MM-DD'),
            r = s()(t, n, 0);
          return {
            count: r,
            weight: p > 0 ? Math.round((r / f) * 100) / 100 : 0,
          };
        };
      return a.a.createElement(
        r.Fragment,
        null,
        a.a.createElement('style', null, nn),
        a.a.createElement(vt, {
          forceSixWeeks: o,
          firstDay: n,
          onSelectSlot: function(e) {
            var t = g(e.date),
              n = t.weight,
              r = t.count;
            i(rn({}, e, { weight: n, count: r }));
          },
          renderHeader: l,
          renderCell: function(e) {
            var t = g(e.date),
              n = t.weight,
              o = t.count;
            return a.a.createElement(
              r.Fragment,
              null,
              c
                ? c(rn({}, e, { weight: n, count: o }))
                : a.a.createElement('div', {
                    className: Ee('heatmap__cell'),
                    style: { opacity: n },
                  })
            );
          },
          selectedDate: d,
        })
      );
    };
    (on.defaultProps = {
      counts: {},
      firstDay: 0,
      forceSixWeeks: !0,
      onSelectCell: function() {
        return null;
      },
      renderCell: null,
      renderHeader: function(e) {
        var t = e.date;
        return a.a.createElement(
          'span',
          { className: Ee('heatmap-header') },
          t.format('dd')
        );
      },
      selectedDate: new Date(),
    }),
      (on.propTypes = {
        counts: Zt,
        firstDay: Ce,
        forceSixWeeks: i.a.bool,
        onSelectCell: i.a.func,
        renderCell: i.a.func,
        renderHeader: i.a.func,
        selectedDate: je,
      });
    var cn = on;
    n(22);
    function un() {
      return (un =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function ln(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var sn = function(e) {
      var t = e.firstDate,
        n = e.getExcludedDates,
        r = e.lastDate,
        o = e.renderCell,
        i = e.renderHeader,
        c = e.totalDays,
        l = ln(e, [
          'firstDate',
          'getExcludedDates',
          'lastDate',
          'renderCell',
          'renderHeader',
          'totalDays',
        ]),
        s = { firstDate: t, lastDate: r, totalColumns: c, getExcludedDates: n };
      return a.a.createElement(
        'div',
        { className: Ee('date-list') },
        a.a.createElement(
          rt,
          un(
            {
              grid: s,
              renderHeader: function(e) {
                var t = e.date;
                return i
                  ? i({ date: t })
                  : t.isSame(u()(), 'day')
                  ? ''.concat(t.format('D'), ' Today')
                  : t.format('D dddd');
              },
              renderCell: o,
            },
            l
          )
        )
      );
    };
    (sn.defaultProps = {
      firstDate: u()(),
      lastDate: u()().add(7, 'days'),
      getExcludedDates: function() {
        return !1;
      },
      renderCell: null,
      renderHeader: null,
      totalDays: 7,
    }),
      (sn.propTypes = {
        firstDate: je,
        getExcludedDates: i.a.func,
        lastDate: je,
        renderCell: i.a.func,
        renderHeader: i.a.func,
        totalDays: i.a.number,
      });
    var dn = sn;
    n(24);
    function fn(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    var pn = function(e) {
      var t = e.counts,
        n = e.firstDay,
        o = e.onClickNext,
        i = e.onClickPrev,
        c = e.onSelectCell,
        l = e.renderCell,
        s = e.renderCurrentMonth,
        d = e.renderDayHeader,
        f = e.renderNext,
        p = e.renderPrev,
        g = e.selectedDate,
        m = fn(Object(r.useState)(u()(g)), 2),
        v = m[0],
        h = m[1];
      return a.a.createElement(
        'div',
        { className: Ee('datepicker') },
        a.a.createElement(
          'div',
          { className: Ee('datepicker__toolbar') },
          a.a.createElement(
            'button',
            {
              tabIndex: 0,
              onClick: function(e) {
                var t = v.clone().subtract(1, 'months');
                h(t), o({ e: e, date: t });
              },
              type: 'button',
              className: Ee('datepicker__prev', 'datepicker__nav-button'),
            },
            p ? p() : a.a.createElement(r.Fragment, null, '«')
          ),
          a.a.createElement(
            'div',
            { className: Ee('datepicker__date') },
            s ? s({ date: v, setDate: h }) : v.format('MMMM, YYYY')
          ),
          a.a.createElement(
            'button',
            {
              tabIndex: 0,
              onClick: function(e) {
                var t = v.clone().add(1, 'months');
                h(t), i({ e: e, date: t });
              },
              type: 'button',
              className: Ee('datepicker__next', 'datepicker__nav-button'),
            },
            f ? f() : a.a.createElement(r.Fragment, null, '»')
          )
        ),
        a.a.createElement(cn, {
          counts: t,
          firstDay: n,
          onSelectCell: c,
          renderCell: l,
          renderHeader: d,
          selectedDate: v,
        })
      );
    };
    (pn.defaultProps = {
      counts: {},
      firstDay: 0,
      onClickNext: function() {
        return null;
      },
      onClickPrev: function() {
        return null;
      },
      onSelectCell: function() {
        return null;
      },
      renderCurrentMonth: null,
      renderCell: null,
      renderDayHeader: function(e) {
        var t = e.date;
        return a.a.createElement(
          'span',
          { className: Ee('heatmap-header') },
          t.format('dd')
        );
      },
      renderNext: null,
      renderPrev: null,
      selectedDate: new Date(),
    }),
      (pn.propTypes = {
        counts: Zt,
        firstDay: Ce,
        onClickNext: i.a.func,
        onClickPrev: i.a.func,
        onSelectCell: i.a.func,
        renderCell: i.a.func,
        renderCurrentMonth: i.a.func,
        renderDayHeader: i.a.func,
        renderNext: i.a.func,
        renderPrev: i.a.func,
        selectedDate: je,
      });
    var gn = pn;
    n(26);
    function mn() {
      return (mn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function vn(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var hn = function(e) {
      var t = e.renderCell,
        n = e.renderHeader,
        r = e.firstDay,
        o = e.totalDays,
        i = vn(e, ['renderCell', 'renderHeader', 'firstDay', 'totalDays']),
        c = {
          firstDate: u()().day(r),
          lastDate: u()()
            .day(r)
            .add(7, 'days'),
          totalColumns: o,
        },
        l = function(e) {
          return {
            full: e.format('dddd'),
            small: e.format('ddd'),
            min: e.format('dd'),
            int: Number(e.format('d')),
          };
        };
      return a.a.createElement(
        'div',
        { className: Ee('day-list') },
        a.a.createElement(
          rt,
          mn(
            {
              grid: c,
              renderHeader: function(e) {
                var t = e.date;
                return n ? n(l(u()(t))) : t.format('dddd');
              },
              renderCell: function(e) {
                var n = e.date;
                return t ? t(l(u()(n))) : null;
              },
            },
            i
          )
        )
      );
    };
    (hn.defaultProps = {
      renderCell: function() {
        return null;
      },
      renderHeader: null,
      firstDay: 0,
      totalDays: 7,
    }),
      (hn.propTypes = {
        firstDay: Ce,
        renderCell: i.a.func,
        renderHeader: i.a.func,
        totalDays: i.a.number,
      });
    var yn = hn;
    n.d(t, 'CalendarGroups', function() {
      return Lt;
    }),
      n.d(t, 'CalendarMonth', function() {
        return vt;
      }),
      n.d(t, 'CalendarMonthHeatmap', function() {
        return cn;
      }),
      n.d(t, 'CalendarWeek', function() {
        return Xt;
      }),
      n.d(t, 'DateList', function() {
        return dn;
      }),
      n.d(t, 'DayList', function() {
        return yn;
      }),
      n.d(t, 'Datepicker', function() {
        return gn;
      }),
      n.d(t, 'DayGrid', function() {
        return rt;
      }),
      n.d(t, 'TimeGrid', function() {
        return bt;
      });
    t.default = Kt;
  },
]);
