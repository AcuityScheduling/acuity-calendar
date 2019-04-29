!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('prop-types'),
        require('react'),
        require('moment'),
        require('react-dom')
      ))
    : 'function' == typeof define && define.amd
    ? define(['prop-types', 'react', 'moment', 'react-dom'], t)
    : 'object' == typeof exports
    ? (exports['acuity-calendar'] = t(
        require('prop-types'),
        require('react'),
        require('moment'),
        require('react-dom')
      ))
    : (e['acuity-calendar'] = t(e.PropTypes, e.React, e.moment, e.ReactDOM));
})(window, function(e, t, n, r) {
  return (function(e) {
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
      n((n.s = 24))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t) {
      e.exports = n;
    },
    function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          r = '__lodash_hash_undefined__',
          a = 1 / 0,
          o = '[object Function]',
          i = '[object GeneratorFunction]',
          u = '[object Symbol]',
          c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          l = /^\w*$/,
          s = /^\./,
          d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          f = /\\(\\)?/g,
          p = /^\[object .+?Constructor\]$/,
          g = 'object' == typeof t && t && t.Object === Object && t,
          v = 'object' == typeof self && self && self.Object === Object && self,
          m = g || v || Function('return this')();
        var h,
          y = Array.prototype,
          b = Function.prototype,
          _ = Object.prototype,
          E = m['__core-js_shared__'],
          w = (h = /[^.]+$/.exec((E && E.keys && E.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + h
            : '',
          D = b.toString,
          S = _.hasOwnProperty,
          O = _.toString,
          x = RegExp(
            '^' +
              D.call(S)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          j = m.Symbol,
          M = y.splice,
          R = Y(m, 'Map'),
          C = Y(Object, 'create'),
          T = j ? j.prototype : void 0,
          P = T ? T.toString : void 0;
        function k(e) {
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
                if (L(e)) return !1;
                var n = typeof e;
                if (
                  'number' == n ||
                  'symbol' == n ||
                  'boolean' == n ||
                  null == e ||
                  U(e)
                )
                  return !0;
                return (
                  l.test(e) || !c.test(e) || (null != t && (e in Object(t)))
                );
              })(t, e)
                ? [t]
                : L((n = t))
                ? n
                : q(n)).length;
            null != e && r < a;

          )
            e = e[G(t[r++])];
          return r && r == a ? e : void 0;
        }
        function A(e) {
          return (
            !(!F(e) || ((t = e), w && w in t)) &&
            ((function(e) {
              var t = F(e) ? O.call(e) : '';
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
              ? x
              : p
            ).test(
              (function(e) {
                if (null != e) {
                  try {
                    return D.call(e);
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
        function z(e, t) {
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
          return A(n) ? n : void 0;
        }
        (k.prototype.clear = function() {
          this.__data__ = C ? C(null) : {};
        }),
          (k.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (k.prototype.get = function(e) {
            var t = this.__data__;
            if (C) {
              var n = t[e];
              return n === r ? void 0 : n;
            }
            return S.call(t, e) ? t[e] : void 0;
          }),
          (k.prototype.has = function(e) {
            var t = this.__data__;
            return C ? void 0 !== t[e] : S.call(t, e);
          }),
          (k.prototype.set = function(e, t) {
            return (this.__data__[e] = C && void 0 === t ? r : t), this;
          }),
          (H.prototype.clear = function() {
            this.__data__ = [];
          }),
          (H.prototype.delete = function(e) {
            var t = this.__data__,
              n = I(t, e);
            return !(
              n < 0 || (n == t.length - 1 ? t.pop() : M.call(t, n, 1), 0)
            );
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
              hash: new k(),
              map: new (R || H)(),
              string: new k(),
            };
          }),
          (N.prototype.delete = function(e) {
            return z(this, e).delete(e);
          }),
          (N.prototype.get = function(e) {
            return z(this, e).get(e);
          }),
          (N.prototype.has = function(e) {
            return z(this, e).has(e);
          }),
          (N.prototype.set = function(e, t) {
            return z(this, e).set(e, t), this;
          });
        var q = B(function(e) {
          var t;
          e =
            null == (t = e)
              ? ''
              : (function(e) {
                  if ('string' == typeof e) return e;
                  if (U(e)) return P ? P.call(e) : '';
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
        function G(e) {
          if ('string' == typeof e || U(e)) return e;
          var t = e + '';
          return '0' == t && 1 / e == -a ? '-0' : t;
        }
        function B(e, t) {
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
          return (r.cache = new (B.Cache || N)()), r;
        }
        B.Cache = N;
        var L = Array.isArray;
        function F(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function U(e) {
          return (
            'symbol' == typeof e ||
            ((function(e) {
              return !!e && 'object' == typeof e;
            })(e) &&
              O.call(e) == u)
          );
        }
        e.exports = function(e, t, n) {
          var r = null == e ? void 0 : W(e, t);
          return void 0 === r ? n : r;
        };
      }.call(this, n(8)));
    },
    function(e, t, n) {
      'use strict';
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
              null != o && (r[o] = !0);
            }
            for (a = 0; a < e.length; a++) {
              var i = e[a];
              (null != i[0] && r[i[0]]) ||
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
        u = (function(e) {
          var t = {};
          return function(e, n) {
            if ('function' == typeof e) return e();
            if (void 0 === t[e]) {
              var r = function(e, t) {
                return t ? t.querySelector(e) : document.querySelector(e);
              }.call(this, e, n);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          };
        })(),
        c = null,
        l = 0,
        s = [],
        d = n(13);
      function f(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = o[r.id];
          if (a) {
            a.refs++;
            for (var i = 0; i < a.parts.length; i++) a.parts[i](r.parts[i]);
            for (; i < r.parts.length; i++) a.parts.push(y(r.parts[i], t));
          } else {
            var u = [];
            for (i = 0; i < r.parts.length; i++) u.push(y(r.parts[i], t));
            o[r.id] = { id: r.id, refs: 1, parts: u };
          }
        }
      }
      function p(e, t) {
        for (var n = [], r = {}, a = 0; a < e.length; a++) {
          var o = e[a],
            i = t.base ? o[0] + t.base : o[0],
            u = { css: o[1], media: o[2], sourceMap: o[3] };
          r[i] ? r[i].parts.push(u) : n.push((r[i] = { id: i, parts: [u] }));
        }
        return n;
      }
      function g(e, t) {
        var n = u(e.insertInto);
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
          var a = u(e.insertAt.before, n);
          n.insertBefore(t, a);
        }
      }
      function v(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = s.indexOf(e);
        t >= 0 && s.splice(t, 1);
      }
      function m(e) {
        var t = document.createElement('style');
        if (
          (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
          void 0 === e.attrs.nonce)
        ) {
          var r = (function() {
            0;
            return n.nc;
          })();
          r && (e.attrs.nonce = r);
        }
        return h(t, e.attrs), g(e, t), t;
      }
      function h(e, t) {
        Object.keys(t).forEach(function(n) {
          e.setAttribute(n, t[n]);
        });
      }
      function y(e, t) {
        var n, r, a, o;
        if (t.transform && e.css) {
          if (
            !(o =
              'function' == typeof t.transform
                ? t.transform(e.css)
                : t.transform.default(e.css))
          )
            return function() {};
          e.css = o;
        }
        if (t.singleton) {
          var i = l++;
          (n = c || (c = m(t))),
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
                  void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
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
                  u = e.href;
                (e.href = URL.createObjectURL(i)), u && URL.revokeObjectURL(u);
              }.bind(null, n, t)),
              (a = function() {
                v(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = m(t)),
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
                v(n);
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
              (u = o[i.id]).refs--, r.push(u);
            }
            e && f(p(e, t), t);
            for (a = 0; a < r.length; a++) {
              var u;
              if (0 === (u = r[a]).refs) {
                for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                delete o[u.id];
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
          u = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          l = parseInt,
          s = 'object' == typeof t && t && t.Object === Object && t,
          d = 'object' == typeof self && self && self.Object === Object && self,
          f = s || d || Function('return this')(),
          p = Object.prototype.toString,
          g = Math.max,
          v = Math.min,
          m = function() {
            return f.Date.now();
          };
        function h(e, t, r) {
          var a,
            o,
            i,
            u,
            c,
            l,
            s = 0,
            d = !1,
            f = !1,
            p = !0;
          if ('function' != typeof e) throw new TypeError(n);
          function h(t) {
            var n = a,
              r = o;
            return (a = o = void 0), (s = t), (u = e.apply(r, n));
          }
          function _(e) {
            var n = e - l;
            return void 0 === l || n >= t || n < 0 || (f && e - s >= i);
          }
          function E() {
            var e = m();
            if (_(e)) return w(e);
            c = setTimeout(
              E,
              (function(e) {
                var n = t - (e - l);
                return f ? v(n, i - (e - s)) : n;
              })(e)
            );
          }
          function w(e) {
            return (c = void 0), p && a ? h(e) : ((a = o = void 0), u);
          }
          function D() {
            var e = m(),
              n = _(e);
            if (((a = arguments), (o = this), (l = e), n)) {
              if (void 0 === c)
                return (function(e) {
                  return (s = e), (c = setTimeout(E, t)), d ? h(e) : u;
                })(l);
              if (f) return (c = setTimeout(E, t)), h(l);
            }
            return void 0 === c && (c = setTimeout(E, t)), u;
          }
          return (
            (t = b(t) || 0),
            y(r) &&
              ((d = !!r.leading),
              (i = (f = 'maxWait' in r) ? g(b(r.maxWait) || 0, t) : i),
              (p = 'trailing' in r ? !!r.trailing : p)),
            (D.cancel = function() {
              void 0 !== c && clearTimeout(c),
                (s = 0),
                (a = l = o = c = void 0);
            }),
            (D.flush = function() {
              return void 0 === c ? u : w(m());
            }),
            D
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
          var n = u.test(e);
          return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : i.test(e) ? r : +e;
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
        var u = function(e, t, n, r, a, o, u, c) {
            if ((i(t), !e)) {
              var l;
              if (void 0 === t)
                l = new Error(
                  'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                );
              else {
                var s = [n, r, a, o, u, c],
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
          c = function(e, t) {
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
                    for (var u = 0; u < r.length; u++)
                      d.call(n, r[u]) && (a[r[u]] = n[r[u]]);
                  }
                }
                return a;
              },
          p = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
          g = u,
          v = c,
          m = p,
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
                    (i = e[o](t, o, r, n, null, m));
                } catch (e) {
                  i = e;
                }
                if (
                  (v(
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
                  var u = a ? a() : '';
                  v(
                    !1,
                    'Failed %s type: %s%s',
                    n,
                    i.message,
                    null != u ? u : ''
                  );
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
                      var u = v(i);
                      return new l(
                        'Invalid ' +
                          a +
                          ' `' +
                          o +
                          '` of type `' +
                          u +
                          '` supplied to `' +
                          r +
                          '`, expected an array.'
                      );
                    }
                    for (var c = 0; c < i.length; c++) {
                      var s = e(i, c, r, a, o + '[' + c + ']', p);
                      if (s instanceof Error) return s;
                    }
                    return null;
                  });
                },
                element: s(function(t, n, r, a, o) {
                  var i = t[n];
                  if (!e(i)) {
                    var u = v(i);
                    return new l(
                      'Invalid ' +
                        a +
                        ' `' +
                        o +
                        '` of type `' +
                        u +
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
                      var u = e.name || a,
                        c =
                          (s = t[n]).constructor && s.constructor.name
                            ? s.constructor.name
                            : a;
                      return new l(
                        'Invalid ' +
                          o +
                          ' `' +
                          i +
                          '` of type `' +
                          c +
                          '` supplied to `' +
                          r +
                          '`, expected instance of `' +
                          u +
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
                      u = v(i);
                    if ('object' !== u)
                      return new l(
                        'Invalid ' +
                          a +
                          ' `' +
                          o +
                          '` of type `' +
                          u +
                          '` supplied to `' +
                          r +
                          '`, expected an object.'
                      );
                    for (var c in i)
                      if (i.hasOwnProperty(c)) {
                        var s = e(i, c, r, a, o + '.' + c, p);
                        if (s instanceof Error) return s;
                      }
                    return null;
                  });
                },
                oneOf: function(e) {
                  return Array.isArray(e)
                    ? s(function(t, n, r, a, o) {
                        for (var i = t[n], u = 0; u < e.length; u++)
                          if (
                            ((c = i),
                            (s = e[u]),
                            c === s
                              ? 0 !== c || 1 / c == 1 / s
                              : c != c && s != s)
                          )
                            return null;
                        var c,
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
                    : (c(
                        !1,
                        'Invalid argument supplied to oneOf, expected an instance of array.'
                      ),
                      o.thatReturnsNull);
                },
                oneOfType: function(e) {
                  if (!Array.isArray(e))
                    return (
                      c(
                        !1,
                        'Invalid argument supplied to oneOfType, expected an instance of array.'
                      ),
                      o.thatReturnsNull
                    );
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ('function' != typeof n)
                      return (
                        c(
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
                      var u = e[i];
                      if (null == u(t, n, r, a, o, p)) return null;
                    }
                    return new l(
                      'Invalid ' + a + ' `' + o + '` supplied to `' + r + '`.'
                    );
                  });
                },
                shape: function(e) {
                  return s(function(t, n, r, a, o) {
                    var i = t[n],
                      u = v(i);
                    if ('object' !== u)
                      return new l(
                        'Invalid ' +
                          a +
                          ' `' +
                          o +
                          '` of type `' +
                          u +
                          '` supplied to `' +
                          r +
                          '`, expected `object`.'
                      );
                    for (var c in e) {
                      var s = e[c];
                      if (s) {
                        var d = s(i, c, r, a, o + '.' + c, p);
                        if (d) return d;
                      }
                    }
                    return null;
                  });
                },
                exact: function(e) {
                  return s(function(t, n, r, a, o) {
                    var i = t[n],
                      u = v(i);
                    if ('object' !== u)
                      return new l(
                        'Invalid ' +
                          a +
                          ' `' +
                          o +
                          '` of type `' +
                          u +
                          '` supplied to `' +
                          r +
                          '`, expected `object`.'
                      );
                    var c = f({}, t[n], e);
                    for (var s in c) {
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
              function o(o, i, s, d, f, g, v) {
                if (((d = d || a), (g = g || s), v !== p))
                  if (t)
                    u(
                      !1,
                      'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                    );
                  else if ('undefined' != typeof console) {
                    var m = d + ':' + s;
                    !n[m] &&
                      r < 3 &&
                      (c(
                        !1,
                        'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                        g,
                        d
                      ),
                      (n[m] = !0),
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
                var u = t[n];
                if (v(u) !== e) {
                  var c = m(u);
                  return new l(
                    'Invalid ' +
                      a +
                      ' `' +
                      o +
                      '` of type `' +
                      c +
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
                      var u = o.value;
                      if (u && !g(u[1])) return !1;
                    }
                  return !0;
                default:
                  return !1;
              }
            }
            function v(e) {
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
            function m(e) {
              if (null == e) return '' + e;
              var t = v(e);
              if ('object' === t) {
                if (e instanceof Date) return 'date';
                if (e instanceof RegExp) return 'regexp';
              }
              return t;
            }
            function h(e) {
              var t = m(e);
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
        function w(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (t.apply(t, [e[n], n, e])) return e[n];
        }
        function D(e) {
          return (
            'function' == typeof e ||
            '[object Function]' === Object.prototype.toString.call(e)
          );
        }
        function S(e) {
          return 'number' == typeof e && !isNaN(e);
        }
        function O(e) {
          return parseInt(e, 10);
        }
        function x(e, t, n) {
          if (e[t])
            return new Error(
              'Invalid prop ' +
                t +
                ' passed to ' +
                n +
                ' - do not set this, set it on the child.'
            );
        }
        var j = ['Moz', 'Webkit', 'O', 'ms'];
        function M(e, t) {
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
        var R = (function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'transform';
            if ('undefined' == typeof window || void 0 === window.document)
              return '';
            var t = window.document.documentElement.style;
            if (e in t) return '';
            for (var n = 0; n < j.length; n++) if (M(e, j[n]) in t) return j[n];
            return '';
          })(),
          C = function(e, t) {
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
          P = function(e, t, n) {
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
          k =
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
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
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
                    var i, u = e[Symbol.iterator]();
                    !(r = (i = u.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    !r && u.return && u.return();
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
        function A(e, t) {
          return (
            W ||
              (W = w(
                [
                  'matches',
                  'webkitMatchesSelector',
                  'mozMatchesSelector',
                  'msMatchesSelector',
                  'oMatchesSelector',
                ],
                function(t) {
                  return D(e[t]);
                }
              )),
            !!D(e[W]) && e[W](t)
          );
        }
        function z(e, t, n) {
          var r = e;
          do {
            if (A(r, t)) return !0;
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
        function G(e) {
          var t = e.clientHeight,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t += O(n.borderTopWidth)), (t += O(n.borderBottomWidth));
        }
        function B(e) {
          var t = e.clientWidth,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t += O(n.borderLeftWidth)), (t += O(n.borderRightWidth));
        }
        function L(e) {
          var t = e.clientHeight,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t -= O(n.paddingTop)), (t -= O(n.paddingBottom));
        }
        function F(e) {
          var t = e.clientWidth,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t -= O(n.paddingLeft)), (t -= O(n.paddingRight));
        }
        function U(e) {
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
                  : t.className.match(
                      new RegExp('(?:^|\\s)' + n + '(?!\\S)')
                    ) || (t.className += ' ' + n));
          }
        }
        function V(e) {
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
        function X() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return k({ touchAction: 'none' }, e);
        }
        function $(e) {
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
                      w(e.targetTouches, function(e) {
                        return t === e.identifier;
                      })) ||
                    (e.changedTouches &&
                      w(e.changedTouches, function(e) {
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
            a = !S(r.lastX),
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
              C(this, r);
              for (var o = arguments.length, i = Array(o), u = 0; u < o; u++)
                i[u] = arguments[u];
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
                    throw new Error(
                      '<DraggableCore> not mounted on DragStart!'
                    );
                  var r = n.ownerDocument;
                  if (
                    !(
                      a.props.disabled ||
                      !(t.target instanceof r.defaultView.Node) ||
                      (a.props.handle && !z(t.target, a.props.handle, n)) ||
                      (a.props.cancel && z(t.target, a.props.cancel, n))
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
                      var u = i.x,
                        c = i.y,
                        l = Q(a, u, c);
                      a.props.onStart;
                      var s = a.props.onStart(t, l);
                      !1 !== s &&
                        (a.props.enableUserSelectHack && U(r),
                        a.setState({ dragging: !0, lastX: u, lastY: c }),
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
                        u = (function(e, t, n) {
                          var r = Math.round(t / e[0]) * e[0],
                            a = Math.round(n / e[1]) * e[1];
                          return [r, a];
                        })(a.props.grid, o, i),
                        c = I(u, 2);
                      if (((o = c[0]), (i = c[1]), !o && !i)) return;
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
                        u = e.findDOMNode(a);
                      u && a.props.enableUserSelectHack && V(u.ownerDocument),
                        a.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                        a.props.onStop(t, i),
                        u &&
                          (q(u.ownerDocument, ne.move, a.handleDrag),
                          q(u.ownerDocument, ne.stop, a.handleDragStop));
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
                        this.props.enableUserSelectHack && V(n);
                    }
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    return t.cloneElement(
                      t.Children.only(this.props.children),
                      {
                        style: X(this.props.children.props.style),
                        onMouseDown: this.onMouseDown,
                        onTouchStart: this.onTouchStart,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd,
                      }
                    );
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
            className: x,
            style: x,
            transform: x,
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
            C(this, r);
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
                  var u = (function(e, t, n) {
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
                          u = void 0;
                        if (
                          !(
                            (u =
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
                        var c = i.getComputedStyle(a),
                          l = i.getComputedStyle(u);
                        r = {
                          left:
                            -a.offsetLeft + O(l.paddingLeft) + O(c.marginLeft),
                          top: -a.offsetTop + O(l.paddingTop) + O(c.marginTop),
                          right:
                            F(u) -
                            B(a) -
                            a.offsetLeft +
                            O(l.paddingRight) -
                            O(c.marginRight),
                          bottom:
                            L(u) -
                            G(a) -
                            a.offsetTop +
                            O(l.paddingBottom) -
                            O(c.marginBottom),
                        };
                      }
                      return (
                        S(r.right) && (t = Math.min(t, r.right)),
                        S(r.bottom) && (n = Math.min(n, r.bottom)),
                        S(r.left) && (t = Math.max(t, r.left)),
                        S(r.top) && (n = Math.max(n, r.top)),
                        [t, n]
                      );
                    })(t, a.x, a.y),
                    c = I(u, 2),
                    l = c[0],
                    s = c[1];
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
                    u = i.x,
                    c = i.y;
                  (a.x = u), (a.y = c);
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
                    u = Boolean(this.props.position),
                    c = !u || this.state.dragging,
                    l = this.props.position || this.props.defaultPosition,
                    s = {
                      x: $(this) && c ? this.state.x : l.x,
                      y: J(this) && c ? this.state.y : l.y,
                    };
                  this.state.isElementSVG
                    ? ((r = (n = s).x),
                      (a = n.y),
                      (i = 'translate(' + r + ',' + a + ')'))
                    : (o = (function(e) {
                        var t = e.x,
                          n = e.y;
                        return P(
                          {},
                          M('transform', R),
                          'translate(' + t + 'px,' + n + 'px)'
                        );
                      })(s));
                  var d = this.props,
                    f = d.defaultClassName,
                    p = d.defaultClassNameDragging,
                    g = d.defaultClassNameDragged,
                    v = t.Children.only(this.props.children),
                    m = E(
                      v.props.className || '',
                      f,
                      (P((e = {}), p, this.state.dragging),
                      P(e, g, this.state.dragged),
                      e)
                    );
                  return t.createElement(
                    re,
                    k({}, this.props, {
                      onStart: this.onDragStart,
                      onDrag: this.onDrag,
                      onStop: this.onDragStop,
                    }),
                    t.cloneElement(v, {
                      className: m,
                      style: k({}, v.props.style, o),
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
          (ae.propTypes = k({}, re.propTypes, {
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
            className: x,
            style: x,
            transform: x,
          })),
          (ae.defaultProps = k({}, re.defaultProps, {
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
      })(n(10), n(1));
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
              var u,
                c,
                l,
                s = r(t),
                d = r(n);
              if (s && d) {
                if ((c = t.length) != n.length) return !1;
                for (u = c; 0 != u--; ) if (!e(t[u], n[u])) return !1;
                return !0;
              }
              if (s != d) return !1;
              var f = t instanceof Date,
                p = n instanceof Date;
              if (f != p) return !1;
              if (f && p) return t.getTime() == n.getTime();
              var g = t instanceof RegExp,
                v = n instanceof RegExp;
              if (g != v) return !1;
              if (g && v) return t.toString() == n.toString();
              var m = a(t);
              if ((c = m.length) !== a(n).length) return !1;
              for (u = c; 0 != u--; ) if (!o.call(n, m[u])) return !1;
              if (i && t instanceof Element && n instanceof Element)
                return t === n;
              for (u = c; 0 != u--; )
                if (!(('_owner' === (l = m[u]) && t.$$typeof) || e(t[l], n[l])))
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
    function(e, t) {
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(12);
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
      var r = n(15);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var a = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, a);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      (e.exports = n(4)(!1)).push([
        e.i,
        ".acuity-calendar__day-grid {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .acuity-calendar__day-grid__days {\n    overflow: hidden;\n    margin: 0;\n    border: 1px solid #e7e7e7;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 0; }\n  .acuity-calendar__day-grid__header {\n    display: flex;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__column-header {\n    flex: 1 1 0;\n    text-align: center;\n    border-top: 1px solid #e7e7e7;\n    border-right: 1px solid #e7e7e7;\n    text-transform: uppercase;\n    padding: 10px;\n    font-weight: 600;\n    overflow: hidden; }\n  .acuity-calendar__day-grid__date-wrapper {\n    position: absolute;\n    z-index: 4;\n    font-size: 14px;\n    color: #2c2929;\n    cursor: pointer;\n    right: 5px;\n    top: 5px;\n    padding: 3px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__day-grid__date-wrapper:hover {\n      background: #e7e7e7; }\n  .acuity-calendar__day-grid__date {\n    line-height: 1em;\n    margin: 0 auto; }\n    .acuity-calendar__day-grid__date--not-in-range {\n      color: #a9a5a5; }\n  .acuity-calendar__day-grid__row {\n    position: relative;\n    display: flex;\n    flex: 1 1 0;\n    width: 100%; }\n    .acuity-calendar__day-grid__row:not(:last-child) {\n      border-bottom: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__cell {\n    position: relative;\n    flex: 1 1;\n    /* Some width needs to be set. Not a fan of doing this, but I've spent too long on it\n           come up with an obvious easy fix. My brain is too fried today.\n           If you take this out, make SURE you're testing with events in the month view that get \n           cut off for being too long. They make their cells 1 pixel too wide without this\n           This could be set to anything as long as it is less than the actual width of 14.29%\n        */\n    width: 0; }\n    .acuity-calendar__day-grid__cell:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__day-grid__cell--not-in-range {\n      background: #fbf9f9; }\n  .acuity-calendar__day-grid__event-wrapper {\n    margin-top: 35px; }\n  .acuity-calendar__day-grid__more-events {\n    cursor: pointer;\n    text-align: center;\n    font-weight: 600;\n    height: 20px;\n    font-size: 12px; }\n",
        '',
      ]);
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
        ".acuity-calendar__time-grid {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-right: 1px solid #e7e7e7;\n  /* ------ Header START ------ */\n  /* ------ Header END ------ */\n  /* ------ Grid START ------ */\n  /* ------ Grid END ------ */ }\n  .acuity-calendar__time-grid__header-wrapper {\n    display: flex;\n    border-top: 1px solid #e7e7e7;\n    position: relative; }\n  .acuity-calendar__time-grid__corner {\n    position: relative;\n    z-index: 5;\n    background: white;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__corner h2 {\n    margin: 0;\n    background: white; }\n  .acuity-calendar__time-grid__header {\n    display: flex;\n    width: 100%;\n    background: white;\n    z-index: 4;\n    text-align: center; }\n  .acuity-calendar__time-grid__header-column {\n    font-size: 12px;\n    flex: 1;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__time-grid__header-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__time-grid__header-column h2 {\n      font-size: 12px;\n      color: #444;\n      font-weight: 400;\n      padding: 25px 0; }\n  .acuity-calendar__time-grid__header-column-container {\n    margin: 0 auto; }\n  .acuity-calendar__time-grid__scroll-gutter {\n    height: 100%;\n    background: white;\n    position: absolute;\n    z-index: 5;\n    right: -2px;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__scroll-gutter-connector {\n    width: 100%;\n    background: white;\n    height: 1px;\n    bottom: -1px;\n    position: absolute; }\n  .acuity-calendar__time-grid__grid-wrapper {\n    position: relative;\n    width: 100%;\n    display: flex;\n    overflow: auto;\n    position: relative;\n    border: 1px solid #e7e7e7;\n    background: #f3f3f3; }\n  .acuity-calendar__time-grid__step-lines {\n    width: 100%;\n    position: absolute;\n    top: -1px; }\n  .acuity-calendar__time-grid__step-line:after {\n    width: 100%;\n    content: '';\n    border-bottom: 1px solid #e7e7e7;\n    position: absolute;\n    pointer-events: none;\n    z-index: 2; }\n  .acuity-calendar__time-grid__step-line-minor:after {\n    border-bottom: 1px dashed #e7e7e7; }\n  .acuity-calendar__time-grid__time-gutter {\n    background: white;\n    position: relative;\n    flex: 1 0 50px;\n    text-align: center;\n    border-right: 1px solid #e7e7e7;\n    z-index: 5;\n    text-align: right; }\n  .acuity-calendar__time-grid__time-label {\n    font-size: 10px;\n    color: #444;\n    transform: translateY(-8px);\n    display: block;\n    margin-right: 4px; }\n  .acuity-calendar__time-grid__time-label-0 {\n    display: none; }\n  .acuity-calendar__time-grid__grid {\n    display: flex;\n    width: 100%; }\n  .acuity-calendar__time-grid__grid-column {\n    text-align: center;\n    position: relative;\n    flex: 1; }\n    .acuity-calendar__time-grid__grid-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__step-detail-wrapper {\n    position: absolute;\n    width: 100%; }\n  .acuity-calendar__time-grid__today {\n    background: #edf8f2; }\n  .acuity-calendar__time-grid__select-slot-indicator {\n    border-bottom: 2px dashed #c1c1c1;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    z-index: 4; }\n  .acuity-calendar__time-grid__select-slot-indicator-time {\n    position: absolute;\n    top: -20px;\n    font-size: 14px;\n    left: 0;\n    right: 0; }\n  .acuity-calendar__time-grid__select-range {\n    position: absolute;\n    width: 99%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 4;\n    border-radius: 4px;\n    color: white;\n    user-select: none; }\n  .acuity-calendar__time-grid__current-time-indicator {\n    width: 100%;\n    position: absolute;\n    z-index: 6; }\n    .acuity-calendar__time-grid__current-time-indicator__line {\n      height: 1px;\n      background: #af5b55;\n      opacity: 0.4; }\n    .acuity-calendar__time-grid__current-time-indicator__line-today {\n      height: 1px;\n      background: #af5b55; }\n    .acuity-calendar__time-grid__current-time-indicator__time {\n      position: absolute;\n      transform: translate(-115%, -7px);\n      color: #c9484d;\n      background: #fff;\n      box-shadow: -3px 0px 8px 5px #fff;\n      font-size: 10px; }\n",
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
        '.acuity-calendar__time-grid__event-wrapper {\n  position: absolute; }\n\n.acuity-calendar__time-grid__event-details-wrapper {\n  padding: 7.5px 10px 0;\n  text-align: left; }\n\n.acuity-calendar__time-grid__event {\n  background: #26ada0;\n  z-index: 3;\n  position: relative;\n  color: #fff;\n  border-radius: 2px;\n  font-size: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__event-padding {\n  background: #3dbe8b;\n  z-index: 2;\n  position: relative;\n  opacity: 0.25;\n  pointer-events: none;\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, rgba(17, 17, 17, 0.2) 25%, rgba(17, 17, 17, 0.2) 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, rgba(17, 17, 17, 0.2) 75%);\n  background-size: 8px 8px; }\n\n.acuity-calendar__time-grid__event-handle {\n  position: absolute;\n  height: 10px;\n  width: 100%;\n  left: 0;\n  cursor: ns-resize;\n  z-index: 4; }\n\n.acuity-calendar__time-grid__event-handle-top {\n  top: 0; }\n\n.acuity-calendar__time-grid__event-handle-center {\n  position: absolute;\n  width: 100%; }\n\n.acuity-calendar__time-grid__event-handle-bottom {\n  bottom: 0; }\n\n.acuity-calendar__time-grid__dragging-event {\n  z-index: 4;\n  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__dragging-placeholder-event .acuity-calendar__time-grid__event {\n  opacity: 0.5; }\n\n.acuity-calendar__time-grid__event-title {\n  display: block;\n  margin-bottom: 7.5px; }\n',
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
        '.acuity-calendar__toolbar {\n  margin: 30px 0;\n  display: flex;\n  align-items: center;\n  height: 33px; }\n  .acuity-calendar__toolbar__views {\n    margin-right: 20px; }\n  .acuity-calendar__toolbar button {\n    border: 1px solid #e7e7e7;\n    padding: 3px 10px;\n    margin-right: 4px;\n    font-size: 16px;\n    border-radius: 4px;\n    cursor: pointer; }\n  .acuity-calendar__toolbar button:hover {\n    background: #2c2929;\n    border: 1px solid #2c2929;\n    color: #fff; }\n  .acuity-calendar__toolbar__title {\n    font-size: 28px;\n    margin: 0;\n    margin-left: 20px; }\n',
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
        u = n(3),
        c = n.n(u),
        l = n(2),
        s = n.n(l),
        d = n(6),
        f = n.n(d);
      let p = null;
      let g = null;
      function v(e, t = {}) {
        let n = document.createElement(e);
        return (
          Object.keys(t).forEach(e => {
            n[e] = t[e];
          }),
          n
        );
      }
      function m(e, t, n) {
        return (window.getComputedStyle(e, n || null) || { display: 'none' })[
          t
        ];
      }
      function h(e) {
        if (!document.documentElement.contains(e))
          return { detached: !0, rendered: !1 };
        let t = e;
        for (; t !== document; ) {
          if ('none' === m(t, 'display')) return { detached: !1, rendered: !1 };
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
                  (O(this), this.addEventListener('scroll', D, !0)),
                (this.__resize_rendered__ = e),
                S(this));
            }.bind(e)),
          !e.__resize_listeners__)
        )
          if (((e.__resize_listeners__ = []), window.ResizeObserver)) {
            let { offsetWidth: t, offsetHeight: n } = e,
              r = new ResizeObserver(() => {
                (e.__resize_observer_triggered__ ||
                  ((e.__resize_observer_triggered__ = !0),
                  e.offsetWidth !== t || e.offsetHeight !== n)) &&
                  S(e);
              }),
              { detached: a, rendered: o } = h(e);
            (e.__resize_observer_triggered__ = !1 === a && !1 === o),
              (e.__resize_observer__ = r),
              r.observe(e);
          } else if (e.attachEvent && e.addEventListener)
            (e.__resize_legacy_resize_handler__ = function() {
              S(e);
            }),
              e.attachEvent('onresize', e.__resize_legacy_resize_handler__),
              document.addEventListener(
                'DOMSubtreeModified',
                e.__resize_mutation_handler__
              );
          else if (
            (b ||
              ((n = y),
              ((r = document.createElement('style')).type = 'text/css'),
              r.styleSheet
                ? (r.styleSheet.cssText = n)
                : r.appendChild(document.createTextNode(n)),
              (document.querySelector('head') || document.body).appendChild(r),
              (_ = r)),
            (function(e) {
              let t = m(e, 'position');
              (t && 'static' !== t) || (e.style.position = 'relative');
              (e.__resize_old_position__ = t), (e.__resize_last__ = {});
              let n = v('div', { className: 'resize-triggers' }),
                r = v('div', { className: 'resize-expand-trigger' }),
                a = v('div'),
                o = v('div', { className: 'resize-contract-trigger' });
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
                O(e),
                e.addEventListener('scroll', D, !0),
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
        var n, r;
        e.__resize_listeners__.push(t), b++;
      }
      function w(e, t) {
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
                e.removeEventListener('scroll', D),
                e.removeChild(e.__resize_triggers__.triggers),
                (e.__resize_triggers__ = null)),
              (e.__resize_listeners__ = null);
          }
          !--b && _ && _.parentNode.removeChild(_);
        }
      }
      function D() {
        var e, t;
        O(this),
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
            e && ((this.__resize_last__ = e), S(this));
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
      function S(e) {
        e &&
          e.__resize_listeners__ &&
          e.__resize_listeners__.forEach(t => {
            t.call(e);
          });
      }
      function O(e) {
        let { expand: t, expandChild: n, contract: r } = e.__resize_triggers__,
          { scrollWidth: a, scrollHeight: o } = r,
          {
            offsetWidth: i,
            offsetHeight: u,
            scrollWidth: c,
            scrollHeight: l,
          } = t;
        (r.scrollLeft = a),
          (r.scrollTop = o),
          (n.style.width = i + 1 + 'px'),
          (n.style.height = u + 1 + 'px'),
          (t.scrollLeft = c),
          (t.scrollTop = l);
      }
      function x(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var j = function() {
        var e = Object(r.useRef)(null),
          t = Object(r.useRef)(null),
          n = Object(r.useRef)(null),
          a = Object(r.useRef)(null),
          o = x(Object(r.useState)(0), 2),
          i = o[0],
          u = o[1],
          l = x(Object(r.useState)(0), 2),
          s = l[0],
          d = l[1],
          p = x(Object(r.useState)(0), 2),
          g = p[0],
          v = p[1],
          m = x(Object(r.useState)(0), 2),
          h = m[0],
          y = m[1],
          b = x(Object(r.useState)(0), 2),
          _ = b[0],
          D = b[1];
        Object(r.useEffect)(function() {
          if (t.current) {
            var e = t.current.offsetHeight;
            e !== g && v(e);
          }
        });
        var S = f()(function() {
          u(c()(e, 'current.offsetHeight', 0)),
            d(c()(e, 'current.offsetWidth', 0));
        }, 300);
        return (
          Object(r.useEffect)(function() {
            return (
              e.current &&
                (u(e.current.offsetHeight),
                d(a.current.offsetWidth),
                E(e.current, S)),
              function() {
                if (e.current) return w(e.current, S);
              }
            );
          }),
          Object(r.useEffect)(
            function() {
              g > 0 && D(Math.floor((i - h) / g) - 1);
            },
            [i, g]
          ),
          Object(r.useEffect)(
            function() {
              var e = c()(n, 'current.offsetTop', 0);
              y(e);
            },
            [c()(n, 'current.offsetTop', 0)]
          ),
          {
            rowRef: e,
            eventRef: t,
            eventHeight: g,
            eventWrapperRef: n,
            eventWrapperMargin: h,
            cellRef: a,
            cellDimensions: { width: s, height: i },
            totalEventsToShow: _,
          }
        );
      };
      function M(e) {
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
      var R = function(e) {
          for (
            var t = e.firstDate,
              n = e.lastDate,
              r = e.totalColumns,
              a = void 0 === r ? 7 : r,
              o = e.allowPartialRows,
              i = void 0 !== o && o,
              u = e.getExcludedDates,
              c =
                void 0 === u
                  ? function() {
                      return !1;
                    }
                  : u,
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
              v = 0;
            v <= d;
            v += 1
          ) {
            f[p] || (f[p] = []);
            var m = t.clone().add(v, 'days');
            c(m) ||
              ((f[p] = [].concat(M(f[p]), [{ date: m, isInRange: s(m) }])),
              g + 1 === a ? ((p += 1), (g = 0)) : (g += 1));
          }
          return (
            i || (f[f.length - 1].length < a && (f.length = f.length - 1)), f
          );
        },
        C = function(e) {
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
      function P(e) {
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
              k(e, t, n[t]);
            });
        }
        return e;
      }
      function k(e, t, n) {
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
          var t = Object.keys(e)[0];
          return !Array.isArray(e[t]);
        },
        N = function(e) {
          var t = Object.assign({}, e);
          return (function(e) {
            var t = Object.keys(e)[0];
            if (!Array.isArray(e[t])) {
              var n = Object.keys(e[t])[0];
              if (Array.isArray(e[t][n])) return !1;
            }
            return !0;
          })(e)
            ? Object.keys(t).reduce(function(e, n) {
                return (
                  Object.keys(t[n]).forEach(function(r) {
                    Object.keys(t[n][r]).forEach(function(a) {
                      e = P(
                        {},
                        e,
                        k(
                          {},
                          n,
                          P(
                            {},
                            c()(e, n, {}),
                            k(
                              {},
                              r,
                              P(
                                {},
                                c()(e, ''.concat(n, '.').concat(r), {}),
                                k({}, a, I(t[n][r][a]))
                              )
                            )
                          )
                        )
                      );
                    });
                  }),
                  e
                );
              }, {})
            : Object.keys(t).reduce(function(e, n) {
                return (
                  Object.keys(t[n]).forEach(function(r) {
                    e = P({}, e, k({}, n, P({}, e[n], k({}, r, I(t[n][r])))));
                  }),
                  e
                );
              }, {});
        },
        I = function(e) {
          var t = 1;
          return e.reduce(function(n, r, a) {
            var o = W({
                event: r,
                lastEvent: 0 !== a ? e[a - 1] : null,
                currentColumn: t,
              }),
              i = c()(n, o, []);
            return (
              (n = P({}, n, k({}, o, [].concat(T(i), [r])))),
              o !== t && (t = o),
              n
            );
          }, {});
        },
        W = function(e) {
          var t = e.event,
            n = e.lastEvent,
            r = e.currentColumn;
          return n && t.start.isSame(n.start, 'day') && t.start.isBefore(n.end)
            ? r + 1
            : 1;
        },
        A = function(e) {
          var t = Object.assign({}, e);
          return H(e)
            ? Object.keys(e).reduce(function(n, r) {
                var a = Object.keys(e[r]).reduce(function(e, n) {
                  return P({}, e, k({}, n, I(t[r][n])));
                }, {});
                return P({}, n, k({}, r, a));
              }, {})
            : Object.keys(e).reduce(function(e, n) {
                return P({}, e, k({}, n, I(t[n])));
              }, {});
        },
        z = function() {
          if ('undefined' == typeof window || !window.document) return 15;
          var e = document.createElement('div');
          (e.style.overflowY = 'scroll'), document.body.append(e);
          var t = e.offsetWidth - e.clientWidth;
          return document.body.removeChild(e), t;
        },
        Y = { month: 'month', week: 'week', groups: 'groups' },
        q = function() {
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
        },
        G = { 5: 22, 10: 27, 15: 31, 20: 34, 30: 42, 60: 65 },
        B = q('time-grid__event-handle-center'),
        L = q('time-grid__event-handle'),
        F = function(e) {
          return 60 * e.get('hour') + e.get('minute');
        },
        U = function(e) {
          var t = e.stepMinutes,
            n = e.date,
            r = (e.stepHeight || G[t]) / t;
          return F(n) * r + 1 * n.hour();
        },
        V = function(e) {
          return e.isSame(s()(), 'day')
            ? ' '.concat(q('time-grid__today'))
            : '';
        },
        X = function(e) {
          var t = e.stepMinutes,
            n = e.selectMinutes,
            r = e.columnDate,
            a = e.stepHeight;
          return function(e) {
            var o = e.currentTarget.getBoundingClientRect(),
              i = (e.clientY - o.top) / ((a || G[t]) / t),
              u = r
                .clone()
                .startOf('day')
                .add(i, 'minutes'),
              c = Math.round(u.clone().minute() / n) * n;
            return u
              .clone()
              .minute(c)
              .second(0);
          };
        },
        $ = function(e) {
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
          var u = ''
            .concat(n.format('h'))
            .concat(i)
            .concat(n.format('a'));
          return ''.concat(o, ' - ').concat(u);
        },
        J = function(e) {
          var t = e.mungedEvents,
            n = e.selectedDate,
            r = (function(e) {
              var t = e.mungedEvents,
                n = e.selectedDate,
                r = e.hasGroups,
                a = Object.keys(t).reduce(function(e, a) {
                  var o = t[a];
                  if (r) o = t[a][n.format('YYYY-MM-DD')];
                  else if (a !== n.format('YYYY-MM-DD')) return e;
                  if (o) {
                    var i = o.reduce(function(e, t) {
                      return !1 === e ? t : t.top < e.top ? t : e;
                    }, !1);
                    if (null === e || e.top > i.top) return i;
                  }
                  return e;
                }, null);
              return c()(a, 'start', null);
            })({ mungedEvents: t, selectedDate: n, hasGroups: e.hasGroups }),
            a = n.clone().set({ hour: 8, minute: 30 });
          if (!r) return a;
          var o = r.clone().subtract(60, 'minutes');
          return o.isSame(r, 'day')
            ? o
            : r.clone().set({ hour: 0, minutes: 0, seconds: 0 });
        };
      function K(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var Q = 0,
        Z = !1,
        ee = function(e) {
          return function(t) {
            (Q = t.target.scrollLeft), te(e);
          };
        },
        te = function(e) {
          var t, n, r, a, o;
          Z ||
            requestAnimationFrame(
              ((n = (t = e).headerRef),
              (r = t.timeGutterRef),
              t.cornerRef,
              (a = t.timeIndicatorRef),
              t.stepLinesRef,
              t.wrapperRef,
              (o = t.timeIndicatorWidth),
              function() {
                (Z = !1),
                  (n.current.style.transform = 'translateX(-'.concat(Q, 'px)')),
                  (r.current.style.transform = 'translateX('.concat(Q, 'px)')),
                  (a.current.style.transform = 'translateX('.concat(Q, 'px)')),
                  o && (a.current.style.width = ''.concat(o - Q, 'px'));
              })
            ),
            (Z = !0);
        },
        ne = function(e) {
          var t = Object(r.useRef)(null),
            n = Object(r.useRef)(null),
            a = Object(r.useRef)(null),
            o = Object(r.useRef)(null),
            i = Object(r.useRef)(null),
            u = Object(r.useRef)(null),
            l = K(Object(r.useState)(0), 2),
            s = l[0],
            d = l[1],
            p = ee({
              wrapperRef: t,
              headerRef: a,
              timeGutterRef: n,
              cornerRef: o,
              timeIndicatorRef: i,
              stepLinesRef: u,
              timeIndicatorWidth: e,
            });
          i.current &&
            t.current &&
            u.current &&
            n.current &&
            ((i.current.style.width = ''.concat(e, 'px')),
            (u.current.style.left = ''.concat(n.current.offsetWidth, 'px')),
            (u.current.style.width = ''.concat(e, 'px')));
          var g = f()(function() {
            d(c()(t, 'current.clientWidth'));
          }, 300);
          return (
            Object(r.useEffect)(function() {
              return (
                s || d(c()(t, 'current.clientWidth')),
                t.current && E(t.current, g),
                function() {
                  return w(t.current, g);
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
              stepLinesRef: u,
            }
          );
        },
        re = n(9),
        ae = n.n(re);
      function oe(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var ie = function(e) {
          var t = Object(r.useRef)(new Map()).current,
            n = Object(r.useRef)(null),
            a = oe(Object(r.useState)([]), 2),
            o = a[0],
            i = a[1],
            u = function() {
              var e = [];
              return (
                t.forEach(function(t, n) {
                  e.push(t.offsetWidth);
                }),
                e
              );
            },
            c = function() {
              ae()(u(), o) || i(u());
            },
            l = f()(function() {
              c();
            }, 300);
          Object(r.useEffect)(function() {
            return (
              n.current && E(n.current, l),
              c(),
              function() {
                w(n.current, l);
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
        ue = function(e) {
          var t = e.pixelsMoved,
            n = e.selectMinutes,
            r = e.selectMinutesHeight;
          if (0 === t) return 0;
          var a = (t / r) * n;
          return Math.round(a / n) * n;
        },
        ce = function(e) {
          var t = e.originalStart,
            n = (e.originalEnd, e.minutesMoved);
          return t
            .clone()
            .add(n, 'minutes')
            .isSame(t.clone().subtract(1, 'days'), 'days');
        },
        le = function(e) {
          var t = e.originalStart,
            n = e.originalEnd,
            r = e.minutesMoved;
          return n
            .clone()
            .add(r, 'minutes')
            .isSame(t.clone().add(1, 'days'), 'days');
        },
        se = function(e) {
          var t = e.pixelsMoved,
            n = e.originalStart,
            r = e.originalEnd,
            a = e.selectMinutes,
            o = e.selectMinutesHeight,
            i = ue({
              pixelsMoved: t,
              selectMinutes: a,
              selectMinutesHeight: o,
            });
          return (
            ce({ originalStart: n, originalEnd: r, minutesMoved: i }) &&
              (i = -1 * n.clone().diff(n.clone().startOf('day'), 'minutes')),
            le({ originalStart: n, originalEnd: r, minutesMoved: i }) &&
              (i = n
                .clone()
                .endOf('day')
                .add(1, 'minutes')
                .diff(r, 'minutes')),
            i
          );
        },
        de = function(e) {
          var t = e.pixelsMoved,
            n = e.selectMinutes,
            r = e.originalStart,
            a = e.originalEnd,
            o = e.selectMinutesHeight;
          return t
            ? o *
                (se({
                  originalStart: r,
                  originalEnd: a,
                  pixelsMoved: t,
                  selectMinutes: n,
                  selectMinutesHeight: o,
                }) /
                  n)
            : 0;
        },
        fe = function(e) {
          var t = e.stepMinutes,
            n = e.selectMinutes;
          return (e.stepHeight || G[t]) / (t / n) + 1 / (60 / n);
        };
      function pe(e) {
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
              ge(e, t, n[t]);
            });
        }
        return e;
      }
      function ge(e, t, n) {
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
      var ve = function(e) {
        var t = e.event,
          n = e.deltaPosition,
          r = e.selectMinutesHeight,
          a = e.selectMinutes,
          o = e.isDurationOnly,
          i = void 0 !== o && o,
          u = t.start.clone(),
          c = t.end.clone(),
          l = se({
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
            pe({ start: u, end: c }, s)
          );
        }
        i || u.add(l, 'minutes'), c.add(l, 'minutes');
        var d = {};
        return (
          i ||
            (t.paddingTopStart &&
              (d.paddingTopStart = t.paddingTopStart
                .clone()
                .add(l, 'minutes'))),
          t.paddingBottomEnd &&
            (d.paddingBottomEnd = t.paddingBottomEnd.clone().add(l, 'minutes')),
          pe({ start: u, end: c }, d)
        );
      };
      function me(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var he = function(e) {
        var t = e.isSelectable,
          n = e.stepMinutes,
          a = e.selectMinutes,
          o = e.columnDate,
          i = e.stepHeight,
          u = me(Object(r.useState)(!1), 2),
          c = u[0],
          l = u[1],
          s = me(Object(r.useState)(0), 2),
          d = s[0],
          f = s[1],
          p = me(Object(r.useState)(0), 2),
          g = p[0],
          v = p[1],
          m = me(Object(r.useState)(0), 2),
          h = m[0],
          y = m[1],
          b = me(Object(r.useState)(0), 2),
          _ = b[0],
          E = b[1],
          w = me(Object(r.useState)(0), 2),
          D = w[0],
          S = w[1],
          O = me(Object(r.useState)(null), 2),
          x = O[0],
          j = O[1],
          M = me(Object(r.useState)(0), 2),
          R = M[0],
          C = M[1],
          T = fe({ stepMinutes: n, selectMinutes: a });
        return {
          selectRangeHandlers: {
            onMouseUp: function(e) {
              E(0), l(!1);
            },
            onMouseDown: function(e) {
              if (
                e.target.className.split(' ').includes(B) ||
                e.target.className.split(' ').includes(L) ||
                !t
              )
                return !1;
              l(!0), f(e.clientY);
              var r = e.currentTarget.getBoundingClientRect(),
                u = (e.clientY - r.top) / T,
                c = Math.round(u) * T;
              E(c), C(c);
              var s = X({
                stepHeight: i,
                stepMinutes: n,
                selectMinutes: a,
                columnDate: o,
              })(e);
              j(s);
            },
            onMouseMove: function(e) {
              if (!t || !c) return !1;
              if (e.clientY !== d) {
                var n = e.clientY - d,
                  r = Math.abs(
                    de({
                      originalStart: x,
                      originalEnd: x,
                      pixelsMoved: Math.abs(n),
                      selectMinutes: a,
                      selectMinutesHeight: T,
                    })
                  ),
                  o = se({
                    originalStart: x,
                    originalEnd: x,
                    pixelsMoved: n,
                    selectMinutes: a,
                    selectMinutesHeight: T,
                  }),
                  i = {};
                e.clientY < d
                  ? (E(R - r),
                    (i.start = x.clone().add(o, 'minutes')),
                    (i.end = x))
                  : ((i.start = x), (i.end = x.clone().add(o, 'minutes'))),
                  S(i),
                  y(r),
                  v(e.clientY);
              }
            },
            onContextMenu: function(e) {
              l(!1);
            },
          },
          isSelectRangeFinished: Math.abs(g) > T / 2,
          resetSelectRangeDrag: function() {
            l(!1), v(0), f(0), y(0);
          },
          selectRangeHeight: h,
          selectRangeTop: _,
          selectRange: D,
        };
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
      function be(e, t, n) {
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
      var _e = function(e) {
          return e.reduce(function(e, t) {
            var n = {};
            t.paddingTopStart &&
              (n.paddingTopStart = s()(t.paddingTopStart).seconds(0)),
              t.paddingBottomEnd &&
                (n.paddingBottomEnd = s()(t.paddingBottomEnd).seconds(0));
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
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })
                      )),
                      r.forEach(function(t) {
                        be(e, t, n[t]);
                      });
                  }
                  return e;
                })(
                  {
                    start: s()(t.start).seconds(0),
                    end: s()(t.end).seconds(0),
                  },
                  n
                )
              ),
              a = Math.abs(
                r.start
                  .clone()
                  .startOf('day')
                  .diff(r.end.clone().subtract(1, 'seconds'), 'days')
              );
            if (((e = [].concat(ye(e), [r])), 0 === a)) return e;
            for (var o = 1; o <= a; o += 1) {
              var i = Object.assign({}, r);
              (i.start = r.start
                .clone()
                .add(o, 'days')
                .startOf('day')),
                r.end.isSame(i.start, 'day')
                  ? (i.end = r.end)
                  : (i.end = i.start.clone().endOf('day')),
                (e = [].concat(ye(e), [i]));
            }
            return e;
          }, []);
        },
        Ee = function(e) {
          var t = e.event,
            n = e.stepMinutes,
            r = e.stepHeight,
            a = (r || G[n]) / n,
            o = 60 * a * 24,
            i = t.end.clone().diff(t.start, 'minutes'),
            u = (i / 60) * 1,
            c = U({ stepMinutes: n, date: t.start, stepHeight: r }),
            l = o - c + 24,
            s = i * a + u;
          s > l && (s = l);
          var d = we({ event: t, pixelsPerMinute: a }),
            f = {
              height: s,
              top: c,
              paddingTopHeight: d.topHeight,
              paddingBottomHeight: d.bottomHeight,
            };
          return Object.assign(t, f);
        },
        we = function(e) {
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
            var u = t.paddingBottomEnd.clone().diff(t.end, 'minutes'),
              c = (u / 60) * 1;
            i = Math.abs(u * n + c);
          }
          return { topHeight: r, bottomHeight: i };
        },
        De = function(e) {
          var t = e.eventsKeyed,
            n = e.event,
            r = e.withColumns,
            a = Object.assign({}, t),
            o = n.start.format('YYYY-MM-DD'),
            i = c()(n, 'column_id', !1),
            u = c()(t, ''.concat(n.group_id, '.').concat(o), []);
          i &&
            r &&
            (u = c()(
              t,
              ''
                .concat(n.group_id, '.')
                .concat(i, '.')
                .concat(o),
              []
            )),
            u.push(n);
          var l = c()(t, ''.concat(n.group_id), {});
          return (
            i && r ? (c()(l, i, !1) || (l[i] = {}), (l[i][o] = u)) : (l[o] = u),
            (a[n.group_id] = l),
            a
          );
        },
        Se = function(e) {
          var t = e.events,
            n = e.stepMinutes,
            r = void 0 !== n && n,
            a = e.stepHeight,
            o = void 0 !== a && a,
            i = e.withColumns,
            u = void 0 === i || i,
            c = _e(t);
          return C(c).reduce(function(e, t, n) {
            if (!r) return De({ eventsKeyed: e, event: t });
            var a = Ee({ event: t, stepMinutes: r, stepHeight: o });
            return De({ eventsKeyed: e, event: a, withColumns: u });
          }, {});
        };
      function Oe(e) {
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
      var xe = function(e) {
          if (0 === Object.keys(e).length) return !1;
          var t = Object.keys(e)[0],
            n = Object.keys(e[t])[0];
          return !Array.isArray(e[t][n]);
        },
        je = function(e) {
          var t = e.mungedEvents,
            n = e.visibleEventGroups,
            r = Object.assign({}, t);
          n &&
            Object.keys(r).forEach(function(e) {
              n.includes(Number(e)) || delete r[e];
            });
          var a = xe(t);
          return Object.keys(r).reduce(function(e, t) {
            return (
              a
                ? Object.keys(r[t]).forEach(function(n) {
                    Object.keys(r[t][n]).forEach(function(a) {
                      c()(e, n, !1) || (e[n] = {}),
                        (e[n][a] = C(
                          [].concat(
                            Oe(c()(e, ''.concat(n, '.').concat(a), [])),
                            Oe(r[t][n][a])
                          )
                        ));
                    });
                  })
                : Object.keys(r[t]).forEach(function(n) {
                    e[n] = C([].concat(Oe(c()(e, n, [])), Oe(r[t][n])));
                  }),
              e
            );
          }, {});
        };
      function Me(e, t, n) {
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
      var Re = function(e) {
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
                  Me(e, t, n[t]);
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
        Ce = function(e) {
          var t = e.events,
            n = e.stepMinutes,
            a = e.stepHeight,
            o = e.visibleEventGroups,
            i = e.stepDetails,
            u = e.withColumns,
            c = void 0 === u || u,
            l = Object(r.useMemo)(
              function() {
                return Se({
                  events: t,
                  stepMinutes: n,
                  stepHeight: a,
                  withColumns: c,
                });
              },
              [t, n]
            ),
            s = Object(r.useMemo)(
              function() {
                return je({ mungedEvents: l, visibleEventGroups: o });
              },
              [l, o]
            );
          if (!i) return { mungedEvents: l, eventsWithSelectedEventGroups: s };
          var d = Object(r.useMemo)(
              function() {
                return Se({ events: i, stepMinutes: n, stepHeight: a });
              },
              [i, n]
            ),
            f = Object(r.useMemo)(
              function() {
                return je({ mungedEvents: d, visibleEventGroups: o });
              },
              [d, o]
            );
          return {
            mungedEvents: l,
            eventsWithSelectedEventGroups: s,
            mungedStepDetails: d,
            mungedStepDetailsGroups: f,
          };
        },
        Te = n(7);
      function Pe(e, t, n) {
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
      var ke,
        He = i.a.oneOfType([
          i.a.instanceOf(Date),
          i.a.instanceOf(s.a),
          i.a.string,
        ]),
        Ne = i.a.oneOf([0, 1, 2, 3, 4, 5, 6]),
        Ie = i.a.instanceOf(s.a),
        We = i.a.string,
        Ae = i.a.shape({
          id: i.a.oneOfType([i.a.number, i.a.string]).isRequired,
          group_id: i.a.oneOfType([i.a.number, i.a.string]),
          title: i.a.string,
          start: He.isRequired,
          end: He.isRequired,
        }),
        ze = i.a.shape({
          id: i.a.oneOfType([i.a.number, i.a.string]).isRequired,
          group_id: i.a.oneOfType([i.a.number, i.a.string]),
          start: He.isRequired,
          end: He.isRequired,
        }),
        Ye = i.a.oneOf([5, 10, 15, 20, 30, 60]),
        qe = (i.a.shape({ id: i.a.number, name: i.a.string }),
        i.a.shape({
          current: i.a.instanceOf(
            'undefined' == typeof Element ? function() {} : Element
          ),
        })),
        Ge = i.a.arrayOf(i.a.number),
        Be = i.a.arrayOf(
          i.a.oneOfType([
            i.a.string,
            i.a.shape({
              view: i.a.string.isRequired,
              grid: i.a.oneOf(['time', 'day']),
              render: i.a.func,
              displayName: i.a.string,
            }),
          ])
        ),
        Le = (i.a.shape(
          ((ke = i.a.func),
          Object.keys(Y).reduce(function(e, t) {
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
                    Pe(e, t, n[t]);
                  });
              }
              return e;
            })({}, e, Pe({}, t, ke));
          }, {}))
        ),
        i.a.oneOf(Object.values({ day: 'day', time: 'time' })),
        i.a.oneOfType([
          i.a.arrayOf(
            i.a.arrayOf(
              i.a.shape({ isInRange: i.a.bool.isRequired, date: He.isRequired })
            )
          ),
          i.a.shape({
            firstDate: He.isRequired,
            lastDate: He.isRequired,
            totalColumns: i.a.number,
            allowPartialRows: i.a.bool,
            getExcludedDates: i.a.func,
            getIsInRange: i.a.func,
          }),
        ])),
        Fe = i.a.shape({ start: He.isRequired, end: He.isRequired }),
        Ue = i.a.oneOfType([He, i.a.oneOf(['firstEvent'])]),
        Ve = i.a.shape({ id: i.a.number.isRequired, title: i.a.string });
      function Xe(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      function $e(e) {
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
              Je(e, t, n[t]);
            });
        }
        return e;
      }
      function Je(e, t, n) {
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
      var Ke = function(e, t) {
          switch (t.type) {
            case 'moveUp':
              return $e({}, e, {
                rowMoves: e.rowMoves - 1,
                vertChange: e.vertChange - t.vertChange,
              });
            case 'moveRight':
              return $e({}, e, {
                columnMoves: e.columnMoves + 1,
                horizChange: e.horizChange + t.horizChange,
              });
            case 'moveDown':
              return $e({}, e, {
                rowMoves: e.rowMoves + 1,
                vertChange: e.vertChange + t.vertChange,
              });
            case 'moveLeft':
              return $e({}, e, {
                columnMoves: e.columnMoves - 1,
                horizChange: e.horizChange - t.horizChange,
              });
            case 'startDragging':
              var n = e.vertChange;
              return $e({}, e, {
                isDragging: !0,
                position: t.position,
                vertChange: 0 === n ? t.initialVertChange : n,
              });
            case 'stopDragging':
              return $e({}, e, {
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
        Qe = {
          rowMoves: 0,
          columnMoves: 0,
          isDragging: !1,
          wasDragged: !1,
          position: { x: 0, y: 0 },
          vertChange: 0,
          horizChange: 0,
        },
        Ze = function(e) {
          var t = e.children,
            n = e.cellDimensions,
            o = e.isDraggable,
            i = e.event,
            u = e.topEventOffset,
            c = e.onDrag,
            l = e.onDragEnd,
            s = e.columnMovesPerRowChange,
            d = Xe(Object(r.useReducer)(Ke, Qe), 2),
            f = d[0],
            p = d[1],
            g = n.width,
            v = n.height,
            m = f.position,
            h = m.x,
            y = m.y,
            b = f.columnMoves,
            _ = f.rowMoves,
            E = f.isDragging,
            w = f.vertChange,
            D = f.horizChange;
          y < v * _ && p({ type: 'moveUp', vertChange: v }),
            h > g * (b + 1) && p({ type: 'moveRight', horizChange: g + 1 * b }),
            y > v * (_ + 1) && p({ type: 'moveDown', vertChange: v }),
            h < g * b && p({ type: 'moveLeft', horizChange: g + 1 });
          var S = (function(e) {
            var t = e.event,
              n = e.columnMoves + e.rowMoves * e.columnMovesPerRowChange,
              r = t.start.clone().add(n, 'days'),
              a = t.end.clone().add(n, 'days'),
              o = {};
            return (
              t.paddingTopStart &&
                (o.paddingTopStart = t.paddingTopStart.clone().add(n, 'days')),
              t.paddingBottomEnd &&
                (o.paddingBottomEnd = t.paddingBottomEnd
                  .clone()
                  .add(n, 'days')),
              $e({}, t, { start: r, end: a }, o)
            );
          })({
            event: i,
            columnMoves: b,
            rowMoves: _,
            columnMovesPerRowChange: s,
          });
          return a.a.createElement(
            Te.DraggableCore,
            {
              onDrag: function(e, t) {
                if (!o({ event: i })) return !1;
                p({
                  type: 'startDragging',
                  position: { x: t.x, y: t.y },
                  initialVertChange: u,
                }),
                  c(e, t);
              },
              onStop: function(e, t) {
                if (!E) return !1;
                l({ e: e, event: Re(S) }),
                  setTimeout(function() {
                    return p({ type: 'stopDragging' });
                  });
              },
            },
            t({ draggedEvent: S, vertChange: w, horizChange: D })
          );
        };
      (Ze.defaultProps = {
        isDraggable: function() {
          return !0;
        },
        onDrag: function() {
          return null;
        },
        onDragEnd: function() {
          return null;
        },
      }),
        (Ze.propTypes = {
          cellDimensions: i.a.shape({
            width: i.a.number.isRequired,
            height: i.a.number.isRequired,
          }).isRequired,
          children: i.a.func.isRequired,
          columnMovesPerRowChange: i.a.number.isRequired,
          event: Ae.isRequired,
          isDraggable: i.a.func,
          onDrag: i.a.func,
          onDragEnd: i.a.func,
          topEventOffset: i.a.number.isRequired,
        });
      var et = Ze;
      function tt() {
        return (tt =
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
      function nt(e, t) {
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
      var rt = function(e) {
          var t = e.className,
            n = e.eventClass;
          return t ? ''.concat(n, ' ').concat(t) : n;
        },
        at = a.a.forwardRef(function(e, t) {
          var n = e.className,
            r = e.eventClass,
            o = e.event,
            i = e.isSelectable,
            u = e.onSelect,
            c = e.children,
            l = nt(e, [
              'className',
              'eventClass',
              'event',
              'isSelectable',
              'onSelect',
              'children',
            ]);
          return a.a.createElement(
            'div',
            tt({}, l, {
              className: rt({ className: n, eventClass: r }),
              role: 'button',
              ref: t,
              onClick: function(e) {
                if ((e.stopPropagation(), !i)) return !1;
                u({ e: e, event: Re(o) });
              },
            }),
            c
          );
        });
      (at.displayName = 'EventWrapper'),
        (at.defaultProps = {
          className: '',
          isSelectable: !0,
          onSelect: function() {
            return null;
          },
          eventClass: q('time-grid__event'),
        }),
        (at.propTypes = {
          children: i.a.node.isRequired,
          className: i.a.string,
          event: i.a.object.isRequired,
          eventClass: i.a.string,
          isSelectable: i.a.bool,
          onSelect: i.a.func,
        });
      var ot = at;
      n(11);
      function it() {
        return (it =
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
      function ut(e, t) {
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
      var ct = a.a.forwardRef(function(e, t) {
        var n,
          r,
          o = e.event,
          i = e.onSelect,
          u = e.children,
          c = ut(e, ['event', 'onSelect', 'children']);
        return a.a.createElement(
          ot,
          it(
            { event: o, onSelect: i, eventClass: q('day-grid__event'), ref: t },
            c
          ),
          u
            ? u(o)
            : a.a.createElement(
                'div',
                { className: q('day-grid__event-details') },
                a.a.createElement(
                  'div',
                  { className: q('day-grid__event-time') },
                  ((n = o.start),
                  ':00' === (r = ':'.concat(n.format('mm'))) && (r = ''),
                  ''
                    .concat(n.format('h'))
                    .concat(r)
                    .concat(n.format('a')))
                ),
                a.a.createElement(
                  'div',
                  { className: q('day-grid__event-title') },
                  o.title
                )
              )
        );
      });
      (ct.defaultProps = {
        onSelect: function() {
          return null;
        },
        children: null,
      }),
        (ct.propTypes = {
          children: i.a.func,
          event: Ae.isRequired,
          onSelect: i.a.func,
        });
      var lt = ct,
        st = a.a.forwardRef(function(e, t) {
          var n = e.events,
            o = e.eventHeight,
            i = e.cellDimensions,
            u = e.dayDetails,
            c = e.isEventDraggable,
            l = e.onDragEnd,
            s = e.onSelectSlot,
            d = e.onSelectDate,
            f = e.renderCell,
            p = e.renderEvent,
            g = e.eventRef,
            v = e.eventWrapperRef,
            m = e.onSelectEvent,
            h = e.onSelectMoreEvents,
            y = e.totalEventsToShow,
            b = e.totalColumns;
          return a.a.createElement(
            'div',
            {
              className: q(
                'day-grid__cell',
                !u.isInRange && 'day-grid__cell--not-in-range',
                n.length > 0 && 'day-grid__cell--has-events'
              ),
              role: 'button',
              ref: t,
              onClick: function(e) {
                return s({
                  e: e,
                  date: new Date(u.date),
                  isInRange: u.isInRange,
                });
              },
            },
            a.a.createElement(
              'div',
              {
                className: q('day-grid__date-wrapper'),
                onClick: function(e) {
                  d &&
                    (e.stopPropagation(),
                    d({
                      e: e,
                      date: new Date(u.date),
                      isInrange: u.isInRange,
                    }));
                },
              },
              a.a.createElement(
                'div',
                {
                  className: q(
                    'day-grid__date',
                    !u.isInRange && 'day-grid__date--not-in-range'
                  ),
                },
                u.date.date()
              )
            ),
            f
              ? f({
                  date: new Date(u.date.startOf('day')),
                  isInRange: u.isInRange,
                  events: n,
                })
              : a.a.createElement(
                  'div',
                  {
                    className: q('day-grid__event-wrapper'),
                    ref: v,
                    style: { opacity: y ? 1 : 0 },
                  },
                  n.length > 0 &&
                    u.isInRange &&
                    a.a.createElement(
                      r.Fragment,
                      null,
                      (function(e) {
                        var t = 0;
                        return e.map(function(e) {
                          return (
                            (t += 1),
                            !y || y >= t
                              ? a.a.createElement(
                                  et,
                                  {
                                    cellDimensions: i,
                                    event: e,
                                    topEventOffset: (t - 1) * o * -1,
                                    key: e.id,
                                    columnMovesPerRowChange: b,
                                    onDragEnd: l,
                                    isDraggable: c,
                                  },
                                  function(e) {
                                    var t = e.draggedEvent,
                                      n = e.vertChange,
                                      r = e.horizChange;
                                    return a.a.createElement(
                                      lt,
                                      {
                                        event: t,
                                        onSelect: m,
                                        ref: g,
                                        style: {
                                          transform: 'translate('
                                            .concat(r, 'px, ')
                                            .concat(n, 'px)'),
                                        },
                                      },
                                      p
                                    );
                                  }
                                )
                              : null
                          );
                        });
                      })(n),
                      y < n.length &&
                        y > 0 &&
                        a.a.createElement(
                          'div',
                          {
                            className: q('day-grid__more-events'),
                            onClick: function(e) {
                              var t;
                              e.stopPropagation(),
                                h({
                                  e: e,
                                  events: n.map(function(e) {
                                    return Re(e);
                                  }),
                                  eventsMore: ((t = n.length - y),
                                  n.filter(function(e, r) {
                                    return r >= n.length - t;
                                  })).map(function(e) {
                                    return Re(e);
                                  }),
                                  date: new Date(u.date),
                                });
                            },
                          },
                          n.length - y,
                          ' more'
                        )
                    )
                )
          );
        });
      (st.displayName = 'DayCell'),
        (st.defaultProps = {
          events: [],
          isEventDraggable: function() {
            return !0;
          },
          onDragEnd: function() {
            return null;
          },
          onSelectSlot: function() {
            return null;
          },
          onSelectDate: null,
          onSelectEvent: function() {
            return null;
          },
          renderCell: null,
          renderEvent: null,
          onSelectMoreEvents: function() {
            return null;
          },
        }),
        (st.propTypes = {
          cellDimensions: i.a.shape({
            width: i.a.number.isRequired,
            height: i.a.number.isRequired,
          }).isRequired,
          dayDetails: i.a.shape({
            date: Ie.isRequired,
            isInRange: i.a.bool.isRequired,
          }).isRequired,
          eventHeight: i.a.number.isRequired,
          eventRef: qe.isRequired,
          eventWrapperRef: qe.isRequired,
          events: i.a.arrayOf(Ae),
          isEventDraggable: i.a.func,
          onDragEnd: i.a.func,
          onSelectDate: i.a.func,
          onSelectEvent: i.a.func,
          onSelectMoreEvents: i.a.func,
          onSelectSlot: i.a.func,
          renderCell: i.a.func,
          renderEvent: i.a.func,
          totalColumns: i.a.number.isRequired,
          totalEventsToShow: i.a.number.isRequired,
        });
      var dt = st,
        ft = (n(14),
        function(e) {
          var t = e.events,
            n = e.isEventDraggable,
            r = e.grid,
            o = e.renderCell,
            i = e.renderHeader,
            u = e.onDragEnd,
            l = e.onSelectSlot,
            s = e.onSelectDate,
            d = e.onSelectMoreEvents,
            f = e.onSelectEvent,
            p = e.visibleEventGroups,
            g = Ce({ events: t, visibleEventGroups: p, withColumns: !1 })
              .eventsWithSelectedEventGroups,
            v = j(),
            m = v.rowRef,
            h = v.eventRef,
            y = v.cellRef,
            b = v.eventWrapperRef,
            _ = v.eventHeight,
            E = v.totalEventsToShow,
            w = v.cellDimensions,
            D = r;
          Array.isArray(D) || (D = R(r));
          var S = 0,
            O = 0;
          return a.a.createElement(
            'div',
            { className: q('day-grid') },
            a.a.createElement(
              'div',
              { className: q('day-grid__header') },
              c()(D, 0, []).map(function(e) {
                var t = e.date.format('dddd');
                return a.a.createElement(
                  'div',
                  { className: q('day-grid__column-header'), key: t },
                  i ? i({ date: e.date }) : t
                );
              })
            ),
            a.a.createElement(
              'div',
              { className: q('day-grid__days') },
              D
                ? D.map(function(e) {
                    O += 1;
                    var t = e.length;
                    return a.a.createElement(
                      'div',
                      {
                        className: q('day-grid__row'),
                        ref: m,
                        key: 'monthColumn'.concat(O),
                      },
                      e.map(function(e) {
                        S += 1;
                        var r = c()(g, e.date.format('YYYY-MM-DD'), []);
                        return a.a.createElement(dt, {
                          isEventDraggable: n,
                          totalColumns: t,
                          events: r,
                          ref: y,
                          eventHeight: _,
                          cellDimensions: w,
                          key: 'dayCells'.concat(S),
                          dayDetails: e,
                          renderCell: o,
                          onDragEnd: u,
                          onSelectSlot: l,
                          onSelectDate: s,
                          onSelectMoreEvents: d,
                          totalEventsToShow: E,
                          eventRef: h,
                          eventWrapperRef: b,
                          onSelectEvent: f,
                        });
                      })
                    );
                  })
                : null
            )
          );
        });
      (ft.defaultProps = {
        events: [],
        isEventDraggable: function() {
          return !0;
        },
        renderCell: null,
        renderHeader: null,
        onDragEnd: function() {
          return null;
        },
        onSelectDate: null,
        onSelectEvent: function() {
          return null;
        },
        onSelectMoreEvents: function() {
          return null;
        },
        onSelectSlot: function() {
          return null;
        },
        visibleEventGroups: null,
      }),
        (ft.propTypes = {
          events: i.a.arrayOf(Ae),
          grid: Le.isRequired,
          isEventDraggable: i.a.func,
          onDragEnd: i.a.func,
          onSelectDate: i.a.func,
          onSelectEvent: i.a.func,
          onSelectMoreEvents: i.a.func,
          onSelectSlot: i.a.func,
          renderCell: i.a.func,
          renderHeader: i.a.func,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var pt = ft,
        gt = new Date();
      function vt(e, t, n) {
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
      var mt = function(e) {
          var t = e.totalDates,
            n = e.forceSixWeeks;
          return t > 35 || n ? 42 : 35;
        },
        ht = function(e) {
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
                    vt(e, t, n[t]);
                  });
              }
              return e;
            })({}, o, { date: i })
          );
        },
        yt = function(e) {
          for (
            var t = e.date,
              n = e.firstDay,
              r = e.forceSixWeeks,
              a = bt({ date: t, firstDay: n }),
              o = Et(t),
              i = a.length + o.length,
              u = mt({ totalDates: i, forceSixWeeks: r }),
              c = wt({ totalDates: i, forceSixWeeks: r }),
              l = [].concat(a, o, c),
              s = [],
              d = 0;
            d < u;
            d += 7
          )
            s.push(l.slice(d, d + 7));
          return s;
        },
        bt = function(e) {
          for (
            var t = e.date,
              n = e.firstDay,
              r = _t({
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
        _t = function(e) {
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
        Et = function(e) {
          for (var t = e.daysInMonth(), n = [], r = 1; r <= t; r += 1)
            n.push(r);
          return n;
        },
        wt = function(e) {
          for (
            var t = e.totalDates,
              n = e.forceSixWeeks,
              r = mt({ totalDates: t, forceSixWeeks: n }) - t,
              a = [],
              o = 1;
            o <= r;
            o += 1
          )
            a.push(o);
          return a;
        },
        Dt = function(e) {
          var t = e.date,
            n = e.firstDay,
            r = void 0 === n ? 0 : n,
            a = e.forceSixWeeks,
            o = yt({ date: t, firstDay: r, forceSixWeeks: void 0 !== a && a }),
            i = t
              .clone()
              .subtract(1, 'months')
              .endOf('month')
              .date(),
            u = t
              .clone()
              .endOf('month')
              .date(),
            c = 1 !== o[0][0],
            l = 1 === o[0][0],
            s = !1;
          return o.map(function(e) {
            return e.map(function(e) {
              return c
                ? (e === i && ((c = !1), (l = !0)),
                  ht({ date: t, day: e, isInRange: !1, type: 'last' }))
                : l
                ? (e === u && ((l = !1), (s = !0)),
                  ht({ date: t, day: e, isInRange: !0, type: 'current' }))
                : s
                ? ht({ date: t, day: e, isInRange: !1, type: 'next' })
                : null;
            });
          });
        },
        St = function(e) {
          var t = e.events,
            n = e.firstDay,
            r = e.forceSixWeeks,
            o = e.isEventDraggable,
            i = e.selectedDate,
            u = e.onDragEnd,
            c = e.onSelectMore,
            l = e.onSelectDate,
            d = e.onSelectSlot,
            f = e.onSelectEvent,
            p = e.visibleEventGroups,
            g = e.renderHeader,
            v = e.renderCell,
            m = e.renderEvent,
            h = Dt({ date: s()(i), firstDay: n, forceSixWeeks: r });
          return a.a.createElement(pt, {
            isEventDraggable: o,
            grid: h,
            events: t,
            onDragEnd: u,
            onSelectMoreEvents: c,
            onSelectDate: l,
            onSelectEvent: f,
            onSelectSlot: d,
            visibleEventGroups: p,
            renderEvent: m,
            renderHeader: g,
            renderCell: v,
          });
        };
      (St.defaultProps = {
        events: [],
        isEventDraggable: function() {
          return !0;
        },
        forceSixWeeks: !1,
        firstDay: 0,
        selectedDate: gt,
        onDragEnd: function() {
          return null;
        },
        onSelectDate: null,
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
        (St.propTypes = {
          events: i.a.arrayOf(Ae),
          firstDay: Ne,
          forceSixWeeks: i.a.bool,
          isEventDraggable: i.a.func,
          onDragEnd: i.a.func,
          onSelectDate: i.a.func,
          onSelectEvent: i.a.func,
          onSelectMore: i.a.func,
          onSelectSlot: i.a.func,
          renderCell: i.a.func,
          renderEvent: i.a.func,
          renderHeader: i.a.func,
          selectedDate: He,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var Ot = St;
      n(16);
      function xt(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var jt = a.a.forwardRef(function(e, t) {
        var n = e.selectedDate,
          o = (e.firstDay, e.stepMinutes),
          i = e.stepHeight,
          u = (e.selectMinutes, e.onCurrentTimeChange),
          c = e.renderHeader,
          l = e.renderColumns,
          d = e.renderCorner,
          f = e.totalWidth,
          p = e.scrollToTime,
          g = xt(Object(r.useState)(s()()), 2),
          v = g[0],
          m = g[1],
          h = xt(Object(r.useState)(15), 2),
          y = h[0],
          b = h[1];
        Object(r.useEffect)(function() {
          var e = setTimeout(function() {
            var e = s()();
            m(e), u(new Date(e.format('YYYY-MM-DD HH:mm:ss')));
          }, 6e4);
          return function() {
            clearTimeout(e);
          };
        });
        var _ = ne(f),
          E = _.wrapperRef,
          w = _.timeGutterRef,
          D = _.headerRef,
          S = _.cornerRef,
          O = _.timeIndicatorRef,
          x = _.stepLinesRef,
          j = 60 / o,
          M = Object(r.useMemo)(
            function() {
              return (i || G[o]) * j * 24 + (1 * j * 24 - 25);
            },
            [o]
          );
        Object(r.useEffect)(
          function() {
            if (p) {
              var e = U({ stepMinutes: o, date: s()(p), stepHeight: i });
              E.current.scrollTop = e;
            }
          },
          [s()(n).format(), o, i]
        );
        var R = 50;
        w.current && (R = w.current.offsetWidth - 1),
          Object(r.useEffect)(
            function() {
              0 === y && b(z());
            },
            [y]
          );
        var C = q('time-grid__current-time-indicator');
        return a.a.createElement(
          'div',
          { className: q('time-grid'), ref: t },
          a.a.createElement(
            'div',
            { className: q('time-grid__header-wrapper') },
            a.a.createElement(
              'div',
              {
                className: q('time-grid__corner'),
                style: { flex: '1 0 '.concat(R, 'px') },
                ref: S,
              },
              d({ currentTime: new Date(v) })
            ),
            a.a.createElement(
              'div',
              {
                className: q('time-grid__header'),
                style: { marginRight: y - 1 },
                ref: D,
              },
              c()
            ),
            a.a.createElement(
              'div',
              {
                className: q('time-grid__scroll-gutter'),
                style: { width: y - 1 },
              },
              a.a.createElement('div', {
                className: q('time-grid__scroll-gutter-connector'),
              })
            )
          ),
          a.a.createElement(
            'div',
            { className: q('time-grid__grid-wrapper'), ref: E },
            a.a.createElement(
              'div',
              { className: q('time-grid__step-lines'), ref: x },
              (function() {
                for (
                  var e = ''.concat((i || G[o]) + 1 / j, 'px'), t = [], n = 0;
                  n < 24 * j;
                  n += 1
                ) {
                  var r = n % j;
                  t.push(
                    a.a.createElement('div', {
                      className: q(
                        'time-grid__step-line',
                        r && 'time-grid__step-line-minor'
                      ),
                      key: 'timeBlock'.concat(n),
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
                className: q('time-grid__time-gutter'),
                ref: w,
                style: { height: M },
              },
              (function() {
                for (var e = j * (i || G[o]), t = [], n = 0; n < 24; n += 1)
                  t.push(
                    a.a.createElement(
                      'div',
                      {
                        className: q('time-grid__time-label-wrapper'),
                        key: 'dayTime'.concat(n),
                        style: { height: ''.concat(e + 1, 'px') },
                      },
                      a.a.createElement(
                        'span',
                        {
                          className: q(
                            'time-grid__time-label',
                            'time-grid__time-label-'.concat(n)
                          ),
                        },
                        s()()
                          .hour(n)
                          .format('ha')
                      )
                    )
                  );
                return t;
              })()
            ),
            a.a.createElement(
              'div',
              { className: q('time-grid__grid') },
              a.a.createElement(
                'div',
                {
                  className: C,
                  style: {
                    top: ''.concat(
                      U({ stepMinutes: o, date: v, stepHeight: i }),
                      'px'
                    ),
                  },
                  ref: O,
                },
                a.a.createElement(
                  'span',
                  { className: ''.concat(C, '__time') },
                  s()().format('h:mma')
                ),
                a.a.createElement('div', { className: ''.concat(C, '__line') })
              ),
              l({ currentTime: v, totalGridHeight: M })
            )
          )
        );
      });
      (jt.displayName = 'TimeGrid'),
        (jt.defaultProps = {
          renderCorner: function() {
            return null;
          },
          selectedDate: gt,
          firstDay: 0,
          scrollToTime: null,
          selectMinutes: 15,
          stepMinutes: 30,
          stepHeight: null,
          onCurrentTimeChange: function() {
            return null;
          },
        }),
        (jt.propTypes = {
          firstDay: Ne,
          onCurrentTimeChange: i.a.func,
          renderColumns: i.a.func.isRequired,
          renderCorner: i.a.func,
          renderHeader: i.a.func.isRequired,
          scrollToTime: He,
          selectMinutes: Ye,
          selectedDate: He,
          stepHeight: i.a.number,
          stepMinutes: Ye,
          totalWidth: i.a.number.isRequired,
        });
      var Mt = jt;
      n(18);
      function Rt() {
        return (Rt =
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
      function Ct(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      function Tt(e, t) {
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
      var Pt = function(e) {
        var t = e.children,
          n = (e.className, e.event),
          o = e.isSelectable,
          i = e.onSelect,
          u = e.isExtendable,
          c = Tt(e, [
            'children',
            'className',
            'event',
            'isSelectable',
            'onSelect',
            'isExtendable',
          ]),
          l = Object(r.useRef)(null),
          s = Object(r.useRef)(null),
          d = Ct(Object(r.useState)(0), 2),
          f = d[0],
          p = d[1];
        return (
          Object(r.useEffect)(function() {
            if (null !== l.current && null !== s.current) {
              var e = l.current.clientHeight,
                t = s.current.clientHeight,
                n = ''.concat(e - t, 'px');
              f !== n && p(n);
            }
          }),
          a.a.createElement(
            ot,
            Rt({ ref: l, event: n, onSelect: i, isSelectable: o }, c),
            a.a.createElement('div', { className: B, style: { height: f } }),
            t
              ? t(n)
              : a.a.createElement(
                  'div',
                  { className: q('time-grid__event-details-wrapper') },
                  a.a.createElement(
                    'span',
                    { className: q('time-grid__event-title') },
                    n.title
                  ),
                  a.a.createElement(
                    'span',
                    { className: q('time-grid__event-time') },
                    $(n)
                  )
                ),
            a.a.createElement('div', {
              className: ''
                .concat(L, ' ')
                .concat(u({ event: n }) && q('time-grid__event-handle-bottom')),
              ref: s,
            })
          )
        );
      };
      (Pt.defaultProps = {
        children: null,
        className: null,
        isSelectable: !0,
        isExtendable: function() {
          return !0;
        },
      }),
        (Pt.propTypes = {
          children: i.a.func,
          className: i.a.string,
          event: Ae.isRequired,
          isExtendable: i.a.func,
          isSelectable: i.a.bool,
          onSelect: i.a.func.isRequired,
        });
      var kt = Pt;
      function Ht(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var Nt = function(e) {
          var t = e.isDragging,
            n = e.wasDragged;
          return q(
            'time-grid__draggable-event',
            t && 'time-grid__dragging-event',
            n && 'time-grid__dragged-event'
          );
        },
        It = function(e) {
          var t = e.event,
            n = e.stepMinutes,
            o = e.selectMinutes,
            i = e.columnWidths,
            u = e.columnIndex,
            c = e.isDraggable,
            l = e.onDrag,
            s = e.onDragEnd,
            d = e.children,
            f = e.stepHeight,
            p = e.getUpdatedDraggedEvent,
            g = Ht(Object(r.useState)({ x: 0, y: 0 }), 2),
            v = g[0],
            m = g[1],
            h = Ht(Object(r.useState)(0), 2),
            y = h[0],
            b = h[1],
            _ = Ht(Object(r.useState)(0), 2),
            E = _[0],
            w = _[1],
            D = Ht(Object(r.useState)(i[u]), 2),
            S = D[0],
            O = D[1],
            x = Ht(Object(r.useState)(!1), 2),
            j = x[0],
            M = x[1],
            R = Ht(Object(r.useState)(!1), 2),
            C = R[0],
            T = R[1],
            P = Ht(Object(r.useState)(u), 2),
            k = P[0],
            H = P[1],
            N = fe({ stepHeight: f, stepMinutes: n, selectMinutes: o }),
            I = de({
              originalStart: t.start,
              originalEnd: t.end,
              pixelsMoved: v.y,
              selectMinutes: o,
              selectMinutesHeight: N,
            }),
            W = k - u,
            A = function(e) {
              var t = e.direction,
                n = e.left;
              w(n), O(i[k + t]), H(k + t);
            },
            z = Object.assign({}, t),
            Y = ve({
              event: t,
              deltaPosition: v,
              selectMinutesHeight: N,
              selectMinutes: o,
            });
          return (
            (z.start = Y.start),
            (z.end = Y.end),
            void 0 !== t.paddingTopStart &&
              (z.paddingTopStart = Y.paddingTopStart),
            void 0 !== t.paddingBottomEnd &&
              (z.paddingBottomEnd = Y.paddingBottomEnd),
            ((z = p({
              event: z,
              start: Y.start,
              end: Y.end,
              columnMoves: W,
            })).top = t.top + I),
            (function() {
              S !== i[k] && O(i[k]);
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
              })({ columnMoves: W, columnWidths: i, columnIndex: u });
              e !== E && w(e);
              var t = e + S;
              y < e && 0 !== k && A({ direction: -1, left: e }),
                y > t && k !== i.length - 1 && A({ direction: 1, left: e });
            })(),
            a.a.createElement(
              r.Fragment,
              null,
              a.a.createElement(
                Te.DraggableCore,
                {
                  onDrag: function(e, n) {
                    if (!c({ event: t })) return !1;
                    var r = v.x,
                      a = v.y;
                    m({ x: r + n.deltaX, y: a + n.deltaY }),
                      b(n.x),
                      M(!0),
                      l(e, n);
                  },
                  handle: '.'.concat(B),
                  onStop: function(e, t) {
                    if (!j) return !1;
                    m({ x: 0, y: 0 }),
                      setTimeout(function() {
                        return M(!1);
                      }),
                      T(!0),
                      s({ e: e, event: Re(z) });
                  },
                },
                d({
                  draggedEvent: z,
                  leftChange: E,
                  currentColumnWidth: S,
                  isDragging: j,
                  wasDragged: C,
                  isDndPlaceholder: !1,
                  dndClassName: Nt({ isDragging: j, wasDragged: C }),
                })
              ),
              j &&
                a.a.createElement(
                  'div',
                  { className: q('time-grid__dragging-placeholder-event') },
                  d({
                    draggedEvent: t,
                    isDragging: j,
                    topChange: 0,
                    isDndPlaceholder: !0,
                  })
                )
            )
          );
        };
      (It.defaultProps = {
        isDraggable: function() {
          return !0;
        },
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
        (It.propTypes = {
          children: i.a.func.isRequired,
          columnIndex: i.a.number.isRequired,
          columnWidths: Ge.isRequired,
          event: Ae.isRequired,
          getUpdatedDraggedEvent: i.a.func,
          isDraggable: i.a.func,
          onDrag: i.a.func,
          onDragEnd: i.a.func.isRequired,
          selectMinutes: Ye,
          stepHeight: i.a.number,
          stepMinutes: Ye,
        });
      var Wt = It;
      function At(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var zt = function(e) {
        var t = e.children,
          n = e.event,
          o = e.isExtendable,
          i = e.onExtend,
          u = e.onExtendEnd,
          c = e.selectMinutes,
          l = e.stepMinutes,
          s = e.stepHeight,
          d = At(Object(r.useState)(!1), 2),
          f = d[0],
          p = d[1],
          g = At(Object(r.useState)({ x: 0, y: 0 }), 2),
          v = g[0],
          m = g[1],
          h = Object(r.useMemo)(
            function() {
              return fe({ stepMinutes: l, selectMinutes: c, stepHeight: s });
            },
            [l, c]
          ),
          y = ve({
            event: n,
            deltaPosition: v,
            selectMinutesHeight: h,
            selectMinutes: c,
            isDurationOnly: !0,
          }),
          b = de({
            pixelsMoved: v.y,
            selectMinutes: c,
            originalStart: n.start,
            originalEnd: n.end,
            selectMinutesHeight: h,
          }),
          _ = Object.assign({}, n);
        return (
          (_.start = y.start),
          (_.end = y.end),
          (_.height = n.height + b),
          void 0 !== y.paddingTopStart &&
            (_.paddingTopStart = y.paddingTopStart),
          void 0 !== y.paddingBottomEnd &&
            (_.paddingBottomEnd = y.paddingBottomEnd),
          a.a.createElement(
            Te.DraggableCore,
            {
              handle: '.'.concat(L),
              onDrag: function(e, t) {
                if (!o({ event: n })) return !1;
                var r = v.x,
                  a = v.y;
                m({ x: r + t.deltaX, y: a + t.deltaY }), i(Re(_)), p(!0);
              },
              onStop: function(e, t) {
                if (!f) return !1;
                m({ x: 0, y: 0 }),
                  setTimeout(function() {
                    return p(!1);
                  }),
                  u({ e: e, ui: t, event: _ });
              },
            },
            a.a.createElement(
              'span',
              null,
              t({ isExtending: f, extendedEvent: _ })
            )
          )
        );
      };
      (zt.defaultProps = {
        onExtend: function() {
          return null;
        },
        isExtendable: function() {
          return !0;
        },
        selectMinutes: 15,
        stepMinutes: 30,
        stepHeight: null,
      }),
        (zt.propTypes = {
          children: i.a.func.isRequired,
          event: Ae.isRequired,
          isExtendable: i.a.func,
          onExtend: i.a.func,
          onExtendEnd: i.a.func.isRequired,
          selectMinutes: Ye,
          stepHeight: i.a.number,
          stepMinutes: Ye,
        });
      var Yt = zt;
      function qt() {
        return (qt =
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
      function Gt(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var Bt = a.a.forwardRef(function(e, t) {
        var n = e.columnId,
          o = e.columnIndex,
          i = e.columnWidths,
          u = e.currentTime,
          l = e.date,
          d = e.events,
          f = e.isEventDraggable,
          p = e.isEventExtendable,
          g = e.gridHeight,
          v = e.stepMinutes,
          m = e.onDragEnd,
          h = e.onExtendEnd,
          y = e.onSelectEvent,
          b = e.onSelectSlot,
          _ = e.onSelectRangeEnd,
          E = e.selectMinutes,
          w = e.stepDetails,
          D = e.renderEvent,
          S = e.getUpdatedDraggedEvent,
          O = e.minWidth,
          x = e.minWidthEmpty,
          j = e.renderStepDetail,
          M = e.renderSelectSlotIndicator,
          R = e.renderSelectRange,
          C = e.renderEventPaddingTop,
          T = e.renderEventPaddingBottom,
          P = e.stepHeight,
          k = Gt(Object(r.useState)(!0), 2),
          H = k[0],
          N = k[1],
          I = Gt(Object(r.useState)(null), 2),
          W = I[0],
          A = I[1],
          z = s()(l),
          Y = he({
            isSelectable: H,
            stepMinutes: v,
            selectMinutes: E,
            columnDate: z,
            stepHeight: P,
          }),
          G = Y.selectRangeHandlers,
          B = Y.isSelectRangeFinished,
          L = Y.resetSelectRangeDrag,
          F = Y.selectRangeHeight,
          J = Y.selectRangeTop,
          K = Y.selectRange,
          Q = Object.keys(d).length,
          Z = 100 / Q - 1,
          ee = q('time-grid__current-time-indicator');
        return a.a.createElement(
          'div',
          qt(
            {
              className: ''.concat(q('time-grid__grid-column')).concat(V(z)),
              key: 'weekView'.concat(z.day()),
              style: { height: g, minWidth: Q * O || x },
              onClick: function(e) {
                if (B)
                  return (
                    L(),
                    _({
                      e: e,
                      start: new Date(K.start),
                      end: new Date(K.end),
                      column: n,
                    }),
                    !1
                  );
                if (!H) return !1;
                var t = X({
                  stepHeight: P,
                  stepMinutes: v,
                  selectMinutes: E,
                  columnDate: z,
                })(e);
                A(t),
                  b({ e: e, date: new Date(t), column: n }),
                  setTimeout(function() {
                    return A(null);
                  }, 300),
                  L();
              },
            },
            G,
            { ref: t }
          ),
          z.isSame(s()(), 'day') &&
            u &&
            a.a.createElement(
              'div',
              {
                className: ee,
                style: {
                  top: ''.concat(
                    U({ stepMinutes: v, date: u, stepHeight: P }),
                    'px'
                  ),
                },
              },
              a.a.createElement('div', {
                className: ''.concat(ee, '__line-today'),
              })
            ),
          W &&
            a.a.createElement(
              'div',
              {
                className: q('time-grid__select-slot-indicator'),
                style: { top: ''.concat(U({ stepMinutes: v, date: W }), 'px') },
              },
              M
                ? M({
                    time: new Date(W.format('YYYY-MM-DD HH:mm:ss')),
                    column: n,
                  })
                : a.a.createElement(
                    'div',
                    { className: q('time-grid__select-slot-indicator-time') },
                    W.format('h:mma')
                  )
            ),
          0 !== F &&
            H &&
            a.a.createElement(
              'div',
              {
                className: q('time-grid__select-range'),
                style: { height: F, top: J },
              },
              R ? R({ start: new Date(K.start), end: new Date(K.end) }) : $(K)
            ),
          Object.keys(d).map(function(e) {
            return c()(d, e, []).map(function(t) {
              return a.a.createElement(
                Yt,
                {
                  key: t.id,
                  event: t,
                  stepHeight: P,
                  stepMinutes: v,
                  selectMinutes: E,
                  isExtendable: p,
                  onExtend: function() {
                    L(), N(!1);
                  },
                  onExtendEnd: function(e) {
                    setTimeout(function() {
                      return N(!0);
                    }),
                      h(e);
                  },
                },
                function(n) {
                  var r = n.isExtending,
                    u = n.extendedEvent;
                  n.heightChange;
                  return a.a.createElement(
                    Wt,
                    {
                      event: u,
                      isDraggable: f,
                      columnIndex: o,
                      columnWidths: i,
                      stepHeight: P,
                      stepMinutes: v,
                      selectMinutes: E,
                      onDrag: function() {
                        L(), N(!1);
                      },
                      onDragEnd: function(e) {
                        m(e),
                          setTimeout(function() {
                            return N(!0);
                          });
                      },
                      getUpdatedDraggedEvent: S,
                    },
                    function(n) {
                      var o = n.draggedEvent,
                        i = n.isDragging,
                        u = n.leftChange,
                        c = n.currentColumnWidth,
                        l = n.isDndPlaceholder,
                        s = n.dndClassName,
                        d = !l && (i || r);
                      return a.a.createElement(
                        'div',
                        {
                          className: ''
                            .concat(s, ' ')
                            .concat(q('time-grid__event-wrapper')),
                          style: {
                            top: o.top - t.paddingTopHeight,
                            width: d ? ''.concat(c, 'px') : ''.concat(Z, '%'),
                            left: d
                              ? ''.concat(u, 'px')
                              : ''.concat(Z * (e - 1), '%'),
                          },
                        },
                        t.paddingTopStart &&
                          !l &&
                          a.a.createElement(
                            'div',
                            {
                              className: q(
                                'time-grid__event-padding',
                                'time-grid__event-padding-top'
                              ),
                              style: { height: t.paddingTopHeight },
                            },
                            C(t)
                          ),
                        a.a.createElement(
                          kt,
                          {
                            isExtendable: p,
                            event: o,
                            style: { height: ''.concat(o.height, 'px') },
                            onSelect: y,
                            isSelectable: !i && !r,
                          },
                          D
                        ),
                        t.paddingBottomEnd &&
                          !l &&
                          a.a.createElement(
                            'div',
                            {
                              className: q(
                                'time-grid__event-padding',
                                'time-grid__event-padding-bottom'
                              ),
                              style: { height: t.paddingBottomHeight },
                            },
                            T(t)
                          )
                      );
                    }
                  );
                }
              );
            });
          }),
          w.map(function(e) {
            return a.a.createElement(
              'div',
              {
                key: e.id,
                className: q('time-grid__step-detail-wrapper'),
                style: {
                  top: ''.concat(e.top, 'px'),
                  height: ''.concat(e.height, 'px'),
                },
              },
              j(e)
            );
          })
        );
      });
      (Bt.displayName = 'Column'),
        (Bt.defaultProps = {
          isEventDraggable: function() {
            return !0;
          },
          isEventExtendable: function() {
            return !0;
          },
          renderEvent: null,
          onExtendEnd: function() {
            return null;
          },
          onDragEnd: function() {
            return null;
          },
          stepMinutes: 30,
          events: {},
          date: new Date(),
          onSelectEvent: function() {
            return null;
          },
          onSelectSlot: function() {
            return null;
          },
          selectMinutes: 15,
          currentTime: null,
          stepDetails: [],
          getUpdatedDraggedEvent: function(e) {
            return e.event;
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
        (Bt.propTypes = {
          columnId: i.a.oneOfType([
            i.a.instanceOf(Date),
            i.a.number,
            i.a.string,
          ]).isRequired,
          columnIndex: i.a.number.isRequired,
          columnWidths: Ge.isRequired,
          currentTime: Ie,
          date: i.a.oneOfType([i.a.string, i.a.instanceOf(Date)]),
          events: i.a.object,
          getUpdatedDraggedEvent: i.a.func,
          gridHeight: i.a.number.isRequired,
          isEventDraggable: i.a.func,
          isEventExtendable: i.a.func,
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
          selectMinutes: Ye,
          stepDetails: i.a.array,
          stepHeight: i.a.number,
          stepMinutes: Ye,
        });
      var Lt = Bt,
        Ft = function(e) {
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
        },
        Ut = function(e) {
          var t = e.children,
            n = e.totalEventColumns,
            r = e.date,
            o = e.minWidth,
            i = e.minWidthEmpty,
            u = e.type,
            c = s()(r);
          return a.a.createElement(
            'div',
            {
              className: ''.concat(q('time-grid__header-column')).concat(V(c)),
              style: { minWidth: ''.concat(n * o || i, 'px') },
            },
            a.a.createElement(
              'div',
              {
                className: ''.concat(
                  q(
                    'time-grid__header-column-container',
                    'time-grid__header-column-'.concat(u)
                  )
                ),
              },
              t
            )
          );
        };
      (Ut.defaultProps = { minWidth: 190, minWidthEmpty: 100 }),
        (Ut.propTypes = {
          children: i.a.node.isRequired,
          date: i.a.oneOfType([i.a.string, i.a.instanceOf(Date)]).isRequired,
          minWidth: i.a.number,
          minWidthEmpty: i.a.number,
          totalEventColumns: i.a.number.isRequired,
          type: i.a.oneOf([Y.week, Y.groups]).isRequired,
        });
      var Vt = Ut;
      function Xt() {
        return (Xt =
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
      function $t(e, t) {
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
      var Jt = function(e) {
        var t = e.events,
          n = e.selectedDate,
          o = e.firstDay,
          i = e.isEventDraggable,
          u = e.isEventExtendable,
          c = e.minWidthColumn,
          l = e.minWidthColumnEmpty,
          d = e.stepMinutes,
          f = e.onDragEnd,
          p = e.onExtendEnd,
          g = e.onSelectEvent,
          v = e.onSelectSlot,
          m = e.onCurrentTimeChange,
          h = e.onSelectRangeEnd,
          y = e.selectMinutes,
          b = e.renderEvent,
          _ = e.stepDetails,
          E = e.renderCorner,
          w = e.renderStepDetail,
          D = e.renderSelectSlotIndicator,
          S = e.renderSelectRange,
          O = e.renderEventPaddingTop,
          x = e.renderEventPaddingBottom,
          j = e.renderHeaders,
          M = e.renderColumns,
          R = e.stepHeight,
          C = e.scrollToTime,
          T = e.visibleEventGroups,
          P = e.withColumns,
          k = Ft({ date: s()(n), firstDay: o });
        k = k.map(function(e) {
          return new Date(e);
        });
        var H = ie(),
          I = H.TimeGridRef,
          W = H.assignRef,
          z = H.elementWidths,
          Y = Ce({
            events: t,
            stepMinutes: d,
            stepHeight: R,
            stepDetails: _,
            visibleEventGroups: T,
            withColumns: P,
          }),
          q = Y.eventsWithSelectedEventGroups,
          G = Y.mungedStepDetailsGroups,
          B = Y.mungedEvents,
          L = Y.mungedStepDetails,
          F = Object(r.useMemo)(
            function() {
              return A(q);
            },
            [q]
          ),
          U = N(B);
        return a.a.createElement(Mt, {
          ref: I,
          selectedDate: n,
          totalWidth: z.reduce(function(e, t) {
            return e + t;
          }, 0),
          firstDay: o,
          stepMinutes: d,
          onSelectEvent: g,
          onSelectSlot: v,
          onCurrentTimeChange: m,
          selectMinutes: y,
          stepHeight: R,
          scrollToTime:
            'firstEvent' === C
              ? J({ mungedEvents: q, selectedDate: s()(n), hasGroups: !1 })
              : C,
          renderCorner: E,
          renderHeader: function() {
            return j({
              ColumnComponent: function(e) {
                var t = e.totalEventColumns,
                  n = void 0 === t ? null : t,
                  r = e.date,
                  o = e.columnClass,
                  i = $t(e, ['totalEventColumns', 'date', 'columnClass']),
                  u = s()(new Date(r)).format('YYYY-MM-DD'),
                  d = n;
                return (
                  null === n && (d = F[u] ? Object.keys(F[u]).length : 0),
                  a.a.createElement(
                    Vt,
                    Xt(
                      {
                        totalEventColumns: d,
                        date: r,
                        type: o,
                        minWidth: c,
                        minWidthEmpty: l,
                      },
                      i
                    )
                  )
                );
              },
              week: k,
              events: F,
              eventsWithGroups: U,
              stepDetails: G,
              stepDetailsWithGroups: L,
            });
          },
          renderColumns: function(e) {
            var t = e.currentTime,
              n = e.totalGridHeight;
            return M({
              ColumnComponent: function(e) {
                var r = e.date,
                  o = e.columnKey,
                  s = e.columnIndex,
                  m = e.columnId,
                  _ = e.eventsForColumn,
                  E = e.getUpdatedDraggedEvent,
                  j = e.stepDetailsForColumn;
                return a.a.createElement(Lt, {
                  ref: W(o),
                  key: 'weekColumn'.concat(o),
                  events: _,
                  stepDetails: j,
                  date: r,
                  columnId: m,
                  columnWidths: z,
                  columnIndex: s,
                  isEventDraggable: i,
                  isEventExtendable: u,
                  minWidth: c,
                  minWidthEmpty: l,
                  onDragEnd: f,
                  onExtendEnd: p,
                  onSelectEvent: g,
                  onSelectSlot: v,
                  onSelectRangeEnd: h,
                  renderSelectRange: S,
                  stepMinutes: d,
                  selectMinutes: y,
                  stepHeight: R,
                  gridHeight: n,
                  currentTime: t,
                  renderEvent: b,
                  renderEventPaddingTop: O,
                  renderEventPaddingBottom: x,
                  getUpdatedDraggedEvent: E,
                  renderStepDetail: w,
                  renderSelectSlotIndicator: D,
                });
              },
              week: k,
              events: F,
              eventsWithGroups: U,
              stepDetails: G,
              stepDetailsWithGroups: L,
            });
          },
        });
      };
      (Jt.defaultProps = {
        events: [],
        isEventDraggable: function() {
          return !0;
        },
        isEventExtendable: function() {
          return !0;
        },
        renderEvent: null,
        render: function() {
          return null;
        },
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
        onSelectEvent: function() {
          return null;
        },
        onSelectSlot: function() {
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
        selectedDate: gt,
        selectMinutes: 15,
        scrollToTime: 'firstEvent',
        firstDay: 0,
        visibleEventGroups: null,
        withColumns: !0,
      }),
        (Jt.propTypes = {
          events: i.a.arrayOf(Ae),
          firstDay: Ne,
          isEventDraggable: i.a.func,
          isEventExtendable: i.a.func,
          minWidthColumn: i.a.number,
          minWidthColumnEmpty: i.a.number,
          onCurrentTimeChange: i.a.func,
          onDragEnd: i.a.func,
          onExtendEnd: i.a.func,
          onSelectEvent: i.a.func,
          onSelectRangeEnd: i.a.func,
          onSelectSlot: i.a.func,
          renderColumns: i.a.func.isRequired,
          renderCorner: i.a.func,
          renderEvent: i.a.func,
          renderEventPaddingBottom: i.a.func,
          renderEventPaddingTop: i.a.func,
          renderHeaders: i.a.func.isRequired,
          renderSelectRange: i.a.func,
          renderSelectSlotIndicator: i.a.func,
          renderStepDetail: i.a.func,
          scrollToTime: Ue,
          selectMinutes: Ye,
          selectedDate: He,
          stepDetails: i.a.arrayOf(ze),
          stepHeight: i.a.number,
          stepMinutes: Ye,
          visibleEventGroups: i.a.arrayOf(i.a.number),
          withColumns: i.a.bool,
        });
      var Kt = Jt;
      function Qt() {
        return (Qt =
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
      function Zt(e, t, n) {
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
      function en(e, t) {
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
      var tn = function(e) {
          var t = e.events,
            n = e.groupId,
            r = e.selectedDate;
          return c()(t, ''.concat(n, '.').concat(r.format('YYYY-MM-DD')), !1);
        },
        nn = function(e) {
          var t = e.eventGroups,
            n = e.visibleEventGroups,
            r = e.renderHeader,
            o = e.selectedDate,
            i = en(e, [
              'eventGroups',
              'visibleEventGroups',
              'renderHeader',
              'selectedDate',
            ]);
          return a.a.createElement(
            Kt,
            Qt({ selectedDate: o, visibleEventGroups: n, withColumns: !1 }, i, {
              renderHeaders: function(e) {
                var i = e.ColumnComponent,
                  u = e.eventsWithGroups;
                return t.map(function(e) {
                  if (n && !n.includes(e.id)) return !1;
                  var t = tn({ events: u, groupId: e.id, selectedDate: o }),
                    c = Object.keys(t).length;
                  return a.a.createElement(
                    i,
                    {
                      totalEventColumns: c,
                      key: 'dayHeader'.concat(e.id),
                      date: o,
                      columnClass: Y.groups,
                    },
                    a.a.createElement(
                      'h2',
                      null,
                      r ? r({ group: e, events: t }) : e.title
                    )
                  );
                });
              },
              renderColumns: function(e) {
                var r = e.ColumnComponent,
                  i = e.eventsWithGroups,
                  u = e.stepDetailsWithGroups;
                return t.map(function(e, c) {
                  if (n && !n.includes(e.id)) return null;
                  var l =
                      tn({ events: i, groupId: e.id, selectedDate: o }) || {},
                    s = tn({ events: u, groupId: e.id, selectedDate: o }) || [];
                  return a.a.createElement(r, {
                    date: o,
                    key: 'groupColumn'.concat(c),
                    columnKey: 'groupColumn'.concat(c),
                    columnIndex: c,
                    columnId: e.id,
                    eventsForColumn: l,
                    stepDetailsForColumn: s,
                    getUpdatedDraggedEvent: function(e) {
                      var n = e.event,
                        r = e.columnMoves;
                      return (function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                          'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function(
                                e
                              ) {
                                return Object.getOwnPropertyDescriptor(n, e)
                                  .enumerable;
                              })
                            )),
                            r.forEach(function(t) {
                              Zt(e, t, n[t]);
                            });
                        }
                        return e;
                      })({}, n, { group_id: t[c + r].id });
                    },
                  });
                });
              },
            })
          );
        };
      (nn.defaultProps = {
        selectedDate: s()(),
        renderHeader: null,
        visibleEventGroups: null,
      }),
        (nn.propTypes = {
          eventGroups: i.a.arrayOf(Ve).isRequired,
          renderHeader: i.a.func,
          selectedDate: Ie,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var rn = nn;
      function an() {
        return (an =
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
      function on(e, t, n) {
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
      function un(e, t) {
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
      var cn = function(e) {
        var t = e.renderHeader,
          n = un(e, ['renderHeader']);
        return a.a.createElement(
          Kt,
          an({ withColumns: !1 }, n, {
            renderHeaders: function(e) {
              var n = e.week,
                r = e.ColumnComponent,
                o = e.events;
              return n.map(function(e) {
                var n = s()(e);
                return a.a.createElement(
                  r,
                  {
                    key: 'dayHeader'.concat(n.date()),
                    date: n,
                    columnClass: Y.week,
                  },
                  t
                    ? t({ date: e, events: o })
                    : a.a.createElement(
                        'h2',
                        null,
                        n.format('dddd'),
                        ', ',
                        n.format('MMM D')
                      )
                );
              });
            },
            renderColumns: function(e) {
              var t = e.ColumnComponent,
                n = e.week,
                r = e.events,
                o = e.stepDetails;
              return n.map(function(e, n) {
                var i = s()(e),
                  u = c()(o, i.format('YYYY-MM-DD'), []),
                  l = c()(r, i.format('YYYY-MM-DD'), {}),
                  d = new Date(i.startOf('day').format('YYYY-MM-DD HH:mm:ss'));
                return a.a.createElement(t, {
                  key: 'weekColumn'.concat(i.day()),
                  date: i.format(),
                  columnKey: 'weekColumn'.concat(i.day()),
                  events: l,
                  columnIndex: n,
                  columnId: d,
                  eventsForColumn: l,
                  stepDetailsForColumn: u,
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
                              Object.getOwnPropertySymbols(n).filter(function(
                                e
                              ) {
                                return Object.getOwnPropertyDescriptor(n, e)
                                  .enumerable;
                              })
                            )),
                            r.forEach(function(t) {
                              on(e, t, n[t]);
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
                });
              });
            },
          })
        );
      };
      (cn.defaultProps = { renderHeader: null }),
        (cn.propTypes = { renderHeader: i.a.func });
      var ln = cn;
      n(20);
      function sn(e, t, n) {
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
      var dn = function(e) {
        var t,
          n = e.view,
          r = e.direction,
          a = e.currentDate,
          o = Y.week,
          i = Y.groups,
          u = function(e) {
            return a.clone().add(r, e);
          };
        return (sn((t = {}), Y.month, u('months')),
        sn(t, o, u('weeks')),
        sn(t, i, u('days')),
        t)[n];
      };
      function fn(e, t, n) {
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
      var pn = Y.month,
        gn = Y.week,
        vn = Y.groups,
        mn = function(e) {
          var t,
            n = e.date,
            r = e.view,
            a = e.firstDay,
            o = Ft({ firstDay: a, date: n });
          return (fn((t = {}), pn, n.format('MMMM YYYY')),
          fn(t, gn, 'Week of '.concat(o[0].format('MMMM D, YYYY'))),
          fn(t, vn, n.format('dddd, MMMM D, YYYY')),
          t)[r];
        };
      function hn(e, t, n) {
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
      var yn = Y.groups,
        bn = Y.week,
        _n = Y.month,
        En = function(e) {
          var t,
            n = e.view,
            r = e.selectedDate,
            a = e.firstDay;
          return (hn((t = {}), _n, function() {
            return {
              start: r.clone().startOf('month'),
              end: r.clone().endOf('month'),
            };
          }),
          hn(t, bn, function() {
            var e = Ft({ firstDay: a, date: r });
            return {
              start: e[0].clone().startOf('day'),
              end: e[0]
                .clone()
                .add(6, 'days')
                .endOf('day'),
            };
          }),
          hn(t, yn, function() {
            return {
              start: r.clone().startOf('day'),
              end: r.clone().endOf('day'),
            };
          }),
          t)[n]();
        },
        wn = function(e) {
          var t = e.events,
            n = e.view,
            r = e.selectedDate,
            a = e.firstDay,
            o = En({ view: n, selectedDate: r, firstDay: a }),
            i = o.start,
            u = o.end;
          return t.filter(function(e) {
            return s()(e.start).isBetween(i, u, 'minutes', '[]');
          });
        };
      function Dn(e) {
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
              Sn(e, t, n[t]);
            });
        }
        return e;
      }
      function Sn(e, t, n) {
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
      function On(e, t) {
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
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      var xn = function(e) {
          var t = e.cursorDate,
            n = e.fullRange,
            r = e.monthPadding,
            a = e.setFullRange,
            o = s()(new Date(t)),
            i = n.start,
            u = n.end,
            c = jn({
              selectedDate: o,
              startDate: s()(new Date(i)),
              endDate: s()(new Date(u)),
              monthPadding: r,
            });
          if (!!c.fullRange)
            return (
              a({
                start: new Date(c.fullRange.start),
                end: new Date(c.fullRange.end),
              }),
              Dn(
                { shouldFetchMore: !0 },
                {
                  fetchMoreRange: {
                    start: new Date(c.fetchMoreRange.start),
                    end: new Date(c.fetchMoreRange.end),
                  },
                  fullRange: {
                    start: new Date(c.fullRange.start),
                    end: new Date(c.fullRange.end),
                  },
                }
              )
            );
          if (Pn({ selectedDate: o, startDate: i, endDate: u })) {
            var l = kn({ selectedDate: o, monthPadding: r });
            return (
              a({ start: new Date(l.start), end: new Date(l.end) }),
              Dn(
                { isOutsideRange: !0 },
                {
                  fetchMoreRange: { start: null, end: null },
                  fullRange: { start: new Date(l.start), end: new Date(l.end) },
                }
              )
            );
          }
          return {
            shouldFetchMore: !1,
            isOutsideRange: !1,
            fullRange: { start: new Date(n.start), end: new Date(n.end) },
            fetchMoreRange: { start: null, end: null },
          };
        },
        jn = function(e) {
          var t = e.selectedDate,
            n = e.startDate,
            r = e.endDate,
            a = e.monthPadding,
            o = { fetchMoreRange: !1, fullRange: !1 };
          return (
            Mn({ selectedDate: t, startDate: n, monthPadding: a }) &&
              (o = Rn({ startDate: n, endDate: r, monthPadding: a })),
            Cn({ selectedDate: t, endDate: r, monthPadding: a }) &&
              (o = Tn({ startDate: n, endDate: r, monthPadding: a })),
            o
          );
        },
        Mn = function(e) {
          var t = e.selectedDate,
            n = e.startDate,
            r = e.monthPadding;
          return t.isBefore(n.clone().add(r, 'months')) && t.isAfter(n);
        },
        Rn = function(e) {
          var t = e.startDate,
            n = e.endDate,
            r = e.monthPadding,
            a = {
              start: t
                .clone()
                .subtract(r, 'months')
                .subtract(1, 'milliseconds'),
              end: t,
            },
            o = !1;
          return (
            a && (o = { start: a.start, end: n }),
            { fetchMoreRange: a, fullRange: o }
          );
        },
        Cn = function(e) {
          var t = e.selectedDate,
            n = e.endDate,
            r = e.monthPadding;
          return t.isAfter(n.clone().subtract(r, 'months')) && t.isBefore(n);
        },
        Tn = function(e) {
          var t = e.startDate,
            n = e.endDate,
            r = e.monthPadding,
            a = {
              start: n,
              end: n
                .clone()
                .startOf('month')
                .add(r, 'months')
                .add(1, 'milliseconds')
                .endOf('month'),
            },
            o = !1;
          return (
            a && (o = { start: t, end: a.end }),
            { fetchMoreRange: a, fullRange: o }
          );
        },
        Pn = function(e) {
          var t = e.selectedDate,
            n = e.startDate,
            r = e.endDate;
          return t.isBefore(n) || t.isAfter(r);
        },
        kn = function(e) {
          var t = e.selectedDate,
            n = e.monthPadding;
          return {
            start: t
              .clone()
              .subtract(n, 'months')
              .startOf('month'),
            end: t
              .clone()
              .add(n, 'months')
              .endOf('month'),
          };
        },
        Hn = function(e) {
          var t = e.cursorDate,
            n = e.monthPadding,
            a = void 0 === n ? 1 : n,
            o = e.currentFullRange,
            i = void 0 === o ? null : o,
            u = i || {
              start: s()()
                .subtract(a, 'months')
                .startOf('month'),
              end: s()()
                .add(a, 'months')
                .endOf('month'),
            },
            c = On(Object(r.useState)(u), 2),
            l = c[0],
            d = c[1];
          return xn({
            cursorDate: t,
            fullRange: l,
            monthPadding: a,
            setFullRange: d,
          });
        },
        Nn = function(e) {
          var t = e.children,
            n = e.firstDay,
            o = e.fetchEventInitialFullRange,
            i = e.fetchEventPadding,
            u = e.onNavigate,
            c = e.onFetchEvents,
            l = e.onViewChange,
            d = e.selectedDate,
            f = e.events,
            p = e.currentView,
            g = e.views,
            v = Hn({ cursorDate: d, monthPadding: i, currentFullRange: o }),
            m = v.fetchMoreRange,
            h = v.fullRange,
            y = v.shouldFetchMore,
            b = v.isOutsideRange;
          Object(r.useEffect)(function() {
            c({ fetchMoreRange: m, fullRange: h, initialFetch: !0 });
          }, []),
            (y || b) &&
              c({ fetchMoreRange: m, fullRange: h, outsideRange: !!b });
          var _ = function(e) {
              u(e);
            },
            E = mn({ date: s()(d), view: p, firstDay: n }),
            w = function() {
              var e = new Date(
                dn({ view: p, direction: 1, currentDate: s()(d) })
              );
              _(e);
            },
            D = function() {
              var e = new Date(
                dn({ view: p, direction: -1, currentDate: s()(d) })
              );
              _(e);
            },
            S = function() {
              _(new Date());
            };
          return t
            ? t({
                onNext: w,
                onPrev: D,
                onToday: S,
                title: E,
                eventsForView: wn({
                  events: f,
                  view: p,
                  selectedDate: s()(d),
                  firstDay: n,
                }),
              })
            : a.a.createElement(
                'div',
                { className: q('toolbar') },
                a.a.createElement(
                  'div',
                  { className: q('toolbar__views') },
                  g.map(function(e) {
                    return a.a.createElement(
                      'button',
                      {
                        key: e,
                        type: 'button',
                        onClick: function() {
                          return l('string' == typeof e ? e : e.view);
                        },
                      },
                      (function(e) {
                        var t = function(e) {
                          return ''
                            .concat(e.charAt(0).toUpperCase())
                            .concat(e.slice(1));
                        };
                        return void 0 !== e.displayName
                          ? e.displayName
                          : 'string' == typeof e
                          ? t(e)
                          : void 0 === e.displayName && void 0 !== e.view
                          ? t(e.view)
                          : void 0;
                      })(e)
                    );
                  })
                ),
                a.a.createElement(
                  'div',
                  { className: q('toolbar__navigate') },
                  a.a.createElement(
                    'button',
                    { type: 'button', onClick: S },
                    'Today'
                  ),
                  a.a.createElement(
                    'button',
                    { type: 'button', onClick: D },
                    'Back'
                  ),
                  a.a.createElement(
                    'button',
                    { type: 'button', onClick: w },
                    'Next'
                  )
                ),
                a.a.createElement('h1', { className: q('toolbar__title') }, E)
              );
        };
      (Nn.defaultProps = {
        children: null,
        events: [],
        firstDay: 0,
        fetchEventInitialFullRange: null,
        fetchEventPadding: 1,
        onFetchEvents: function() {
          return null;
        },
        views: Object.values(Y),
      }),
        (Nn.propTypes = {
          children: i.a.func,
          currentView: We.isRequired,
          events: i.a.arrayOf(Ae),
          fetchEventInitialFullRange: Fe,
          fetchEventPadding: i.a.number,
          firstDay: Ne,
          onFetchEvents: i.a.func,
          onNavigate: i.a.func.isRequired,
          onViewChange: i.a.func.isRequired,
          selectedDate: He.isRequired,
          views: Be,
        });
      var In = Nn;
      function Wn(e) {
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
              An(e, t, n[t]);
            });
        }
        return e;
      }
      function An(e, t, n) {
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
      function zn() {
        return (zn =
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
      var Yn = function(e) {
        var t,
          n,
          r,
          o = e.events,
          i = e.eventGroups,
          u = (e.fetchEventPadding, e.fetchEventInitialFullRange),
          l = e.firstDay,
          d = e.forceSixWeeks,
          f = e.isEventDraggable,
          p = e.isEventExtendable,
          g = e.minWidthColumn,
          v = e.minWidthColumnEmpty,
          m = e.onDragEnd,
          h = e.onExtendEnd,
          y = e.onFetchEvents,
          b = e.onNavigate,
          _ = e.onSelectMore,
          E = e.onSelectDate,
          w = e.onSelectEvent,
          D = e.onSelectRangeEnd,
          S = e.onCurrentTimeChange,
          O = e.onSelectSlot,
          x = e.onViewChange,
          j = e.renderCell,
          M = (e.renderEvent, e.renderCorner),
          R = e.renderEventPaddingBottom,
          C = e.renderEventPaddingTop,
          T = e.renderGroupsHeader,
          P = e.renderMonthHeader,
          k = e.renderSelectRange,
          H = e.renderSelectSlotIndicator,
          N = e.renderStepDetail,
          I = e.renderWeekHeader,
          W = e.renderDayGridEvent,
          A = e.renderTimeGridEvent,
          z = e.renderToolbar,
          q = e.scrollToTime,
          G = e.selectedDate,
          B = e.selectMinutes,
          L = e.stepDetails,
          F = e.stepHeight,
          U = e.stepMinutes,
          V = e.style,
          X = e.currentView,
          $ = e.views,
          J = e.visibleEventGroups,
          K = Y.month,
          Q = Y.week,
          Z = Y.groups,
          ee = {
            isEventDraggable: f,
            onDragEnd: m,
            onSelectEvent: w,
            onSelectSlot: O,
            events: o,
            selectedDate: s()(G),
            firstDay: l,
            visibleEventGroups: J,
          },
          te = {
            onSelectMore: _,
            onSelectDate: E,
            forceSixWeeks: d,
            renderCell: j,
            renderEvent: W,
          },
          ne = {
            isEventExtendable: p,
            onExtendEnd: h,
            onCurrentTimeChange: S,
            onSelectRangeEnd: D,
            stepDetails: L,
            minWidthColumn: g,
            minWidthColumnEmpty: v,
            renderCorner: M,
            renderEventPaddingBottom: R,
            renderEventPaddingTop: C,
            renderSelectRange: k,
            renderStepDetail: N,
            selectMinutes: B,
            stepHeight: F,
            stepMinutes: U,
            renderSelectSlotIndicator: H,
            renderEvent: A,
            scrollToTime: q,
            withGroups: !1,
          },
          re = (An(
            (t = {}),
            K,
            a.a.createElement(Ot, zn({ renderHeader: P }, te, ee))
          ),
          An(t, Q, a.a.createElement(ln, zn({ renderHeader: I }, ne, ee))),
          An(
            t,
            Z,
            a.a.createElement(
              rn,
              zn({ renderHeader: T, eventGroups: i }, ne, ee)
            )
          ),
          t);
        return a.a.createElement(
          'div',
          { className: 'acuity-calendar', style: V },
          a.a.createElement(
            In,
            {
              events: o,
              fetchEventInitialFullRange: u,
              firstDay: l,
              onNavigate: b,
              onViewChange: x,
              onFetchEvents: y,
              selectedDate: G,
              currentView: X,
              views: $,
            },
            z
          ),
          ((n = function(e) {
            return 'string' == typeof e || e instanceof String;
          }),
          void 0 ===
          (r = $.find(function(e) {
            return !(!n(e) || e !== X) || e.view === X;
          }))
            ? (console.error(
                'You have supplied a view that is not in the "views" prop.'
              ),
              null)
            : Object.values(Y).includes(n(r) ? r : r.view) &&
              !c()(r, 'render', !1)
            ? re[X]
            : 'time' === r.grid
            ? r.render(Wn({}, ne, ee))
            : 'day' === r.grid
            ? r.render(Wn({}, te, ee))
            : null)
        );
      };
      (Yn.defaultProps = {
        events: [],
        eventGroups: [],
        fetchEventInitialFullRange: null,
        fetchEventPadding: 1,
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
        onFetchEvents: function() {
          return null;
        },
        onNavigate: function() {
          return null;
        },
        onSelectDate: null,
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
        onViewChange: function() {
          return null;
        },
        renderCell: null,
        renderCorner: function() {
          return null;
        },
        renderDayGridEvent: null,
        renderEvent: null,
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
        renderToolbar: null,
        renderWeekHeader: null,
        selectMinutes: 15,
        selectedDate: gt,
        stepDetails: null,
        stepHeight: null,
        stepMinutes: 30,
        style: {},
        scrollToTime: 'firstEvent',
        views: Object.values(Y),
        visibleEventGroups: null,
        isEventDraggable: function() {
          return !0;
        },
        isEventExtendable: function() {
          return !0;
        },
      }),
        (Yn.propTypes = {
          currentView: We.isRequired,
          eventGroups: i.a.arrayOf(Ve),
          events: i.a.arrayOf(Ae),
          fetchEventInitialFullRange: Fe,
          fetchEventPadding: i.a.number,
          firstDay: Ne,
          forceSixWeeks: i.a.bool,
          isEventDraggable: i.a.func,
          isEventExtendable: i.a.func,
          minWidthColumn: i.a.number,
          minWidthColumnEmpty: i.a.number,
          onCurrentTimeChange: i.a.func,
          onDragEnd: i.a.func,
          onExtendEnd: i.a.func,
          onFetchEvents: i.a.func,
          onNavigate: i.a.func,
          onSelectDate: i.a.func,
          onSelectEvent: i.a.func,
          onSelectMore: i.a.func,
          onSelectRangeEnd: i.a.func,
          onSelectSlot: i.a.func,
          onViewChange: i.a.func,
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
          renderToolbar: i.a.func,
          renderWeekHeader: i.a.func,
          scrollToTime: Ue,
          selectMinutes: Ye,
          selectedDate: He,
          stepDetails: i.a.arrayOf(ze),
          stepHeight: i.a.number,
          stepMinutes: Ye,
          style: i.a.object,
          views: Be,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var qn = Yn;
      function Gn(e) {
        return (Gn =
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
      var Bn = (function() {
          var e = function(e, t, n) {
              var r,
                a = e[t];
              return null == a || 'object' !== Gn(a)
                ? new TypeError(
                    'Invalid '
                      .concat(t, ' prop: ')
                      .concat(a, ' for ')
                      .concat(t, ' in ')
                      .concat(n)
                  )
                : ((r = a),
                  Object.keys(r).some(function(e) {
                    return (
                      !s()(new Date(e)).isValid() || 'number' != typeof r[e]
                    );
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
        Ln = '.'.concat('acuity-calendar'),
        Fn = '.'.concat('acuity-calendar', '__day-grid'),
        Un = '\n    '
          .concat(
            Ln,
            '__heatmap-header {\n        font-size: 14px;\n    }\n    '
          )
          .concat(
            Ln,
            '__heatmap__cell {\n        background: #26ada0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    '
          )
          .concat(
            Fn,
            ' {\n        height: 250px;\n        width: 250px;\n    }\n    '
          )
          .concat(
            Fn,
            '__date-wrapper:hover {\n        background: none;\n    }\n    '
          )
          .concat(
            Fn,
            '__date-wrapper {\n        position: relative;\n        cursor: default;\n        top: auto;\n        right: auto;\n        margin: 0 auto;\n    }\n    '
          )
          .concat(
            Fn,
            '__column-header {\n        text-transform: none;\n        padding: 5px;\n    }\n    '
          )
          .concat(
            Fn,
            '__cell {\n        position: relative;\n        display: flex;\n        align-items: center;\n    }\n    '
          )
          .concat(
            Fn,
            '__date {\n        text-align: center;\n        position: relative;\n        z-index: 10;\n    }\n'
          );
      function Vn(e) {
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
              Xn(e, t, n[t]);
            });
        }
        return e;
      }
      function Xn(e, t, n) {
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
      var $n = function(e) {
        var t = e.counts,
          n = e.firstDay,
          o = e.forceSixWeeks,
          i = e.onSelectCell,
          u = e.renderCell,
          l = e.renderHeader,
          d = e.selectedDate,
          f = Math.max.apply(Math, Object.values(t)),
          p = Object.keys(t).length,
          g = function(e) {
            var n = s()(e).format('YYYY-MM-DD'),
              r = c()(t, n, 0);
            return {
              count: r,
              weight: p > 0 ? Math.round((r / f) * 100) / 100 : 0,
            };
          };
        return a.a.createElement(
          r.Fragment,
          null,
          a.a.createElement('style', null, Un),
          a.a.createElement(Ot, {
            forceSixWeeks: o,
            firstDay: n,
            onSelectSlot: function(e) {
              var t = g(e.date),
                n = t.weight,
                r = t.count;
              i(Vn({}, e, { weight: n, count: r }));
            },
            renderHeader: l,
            renderCell: function(e) {
              var t = g(e.date),
                n = t.weight,
                o = t.count;
              return a.a.createElement(
                r.Fragment,
                null,
                u
                  ? u(Vn({}, e, { weight: n, count: o }))
                  : a.a.createElement('div', {
                      className: q('heatmap__cell'),
                      style: { opacity: n },
                    })
              );
            },
            selectedDate: d,
          })
        );
      };
      ($n.defaultProps = {
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
            { className: q('heatmap-header') },
            t.format('dd')
          );
        },
        selectedDate: new Date(),
      }),
        ($n.propTypes = {
          counts: Bn,
          firstDay: Ne,
          forceSixWeeks: i.a.bool,
          onSelectCell: i.a.func,
          renderCell: i.a.func,
          renderHeader: i.a.func,
          selectedDate: He,
        });
      var Jn = $n;
      n(22);
      function Kn() {
        return (Kn =
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
      function Qn(e, t) {
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
      var Zn = function(e) {
        var t = e.renderCell,
          n = e.renderHeader,
          r = e.firstDay,
          o = e.totalDays,
          i = Qn(e, ['renderCell', 'renderHeader', 'firstDay', 'totalDays']),
          u = {
            firstDate: s()().day(r),
            lastDate: s()()
              .day(r)
              .add(7, 'days'),
            totalColumns: o,
          },
          c = function(e) {
            return {
              full: e.format('dddd'),
              small: e.format('ddd'),
              min: e.format('dd'),
              int: Number(e.format('d')),
            };
          };
        return a.a.createElement(
          'div',
          { className: q('day-list') },
          a.a.createElement(
            pt,
            Kn(
              {
                grid: u,
                renderHeader: function(e) {
                  var t = e.date;
                  return n ? n(c(s()(t))) : t.format('dddd');
                },
                renderCell: function(e) {
                  var n = e.date;
                  return t ? t(c(s()(n))) : null;
                },
              },
              i
            )
          )
        );
      };
      (Zn.defaultProps = {
        renderCell: function() {
          return null;
        },
        renderHeader: null,
        firstDay: 0,
        totalDays: 7,
      }),
        (Zn.propTypes = {
          firstDay: Ne,
          renderCell: i.a.func,
          renderHeader: i.a.func,
          totalDays: i.a.number,
        });
      var er = Zn;
      n.d(t, 'CalendarGroups', function() {
        return rn;
      }),
        n.d(t, 'CalendarMonth', function() {
          return Ot;
        }),
        n.d(t, 'CalendarMonthHeatmap', function() {
          return Jn;
        }),
        n.d(t, 'CalendarWeek', function() {
          return ln;
        }),
        n.d(t, 'DayList', function() {
          return er;
        }),
        n.d(t, 'DayGrid', function() {
          return pt;
        }),
        n.d(t, 'TimeGrid', function() {
          return Kt;
        }),
        n.d(t, 'Toolbar', function() {
          return In;
        });
      t.default = qn;
    },
  ]);
});
//# sourceMappingURL=main.js.map
