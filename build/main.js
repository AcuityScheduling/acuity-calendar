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
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' !== typeof e)
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
    n((n.s = 22))
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
        i = '[object Function]',
        o = '[object GeneratorFunction]',
        s = '[object Symbol]',
        u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        c = /^\w*$/,
        l = /^\./,
        d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        f = /\\(\\)?/g,
        p = /^\[object .+?Constructor\]$/,
        g = 'object' === typeof t && t && t.Object === Object && t,
        m = 'object' === typeof self && self && self.Object === Object && self,
        h = g || m || Function('return this')();
      var v,
        y = Array.prototype,
        b = Function.prototype,
        _ = Object.prototype,
        w = h['__core-js_shared__'],
        E = (v = /[^.]+$/.exec((w && w.keys && w.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + v
          : '',
        S = b.toString,
        x = _.hasOwnProperty,
        O = _.toString,
        D = RegExp(
          '^' +
            S.call(x)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        j = h.Symbol,
        M = y.splice,
        R = q(h, 'Map'),
        T = q(Object, 'create'),
        C = j ? j.prototype : void 0,
        P = C ? C.toString : void 0;
      function N(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
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
      function I(e, t) {
        for (var n, r, a = e.length; a--; )
          if ((n = e[a][0]) === (r = t) || (n != n && r != r)) return a;
        return -1;
      }
      function z(e, t) {
        for (
          var n,
            r = 0,
            a = (t = (function(e, t) {
              if (U(e)) return !1;
              var n = typeof e;
              if (
                'number' == n ||
                'symbol' == n ||
                'boolean' == n ||
                null == e ||
                X(e)
              )
                return !0;
              return c.test(e) || !u.test(e) || (null != t && (e in Object(t)));
            })(t, e)
              ? [t]
              : U((n = t))
              ? n
              : B(n)).length;
          null != e && r < a;

        )
          e = e[L(t[r++])];
        return r && r == a ? e : void 0;
      }
      function A(e) {
        return (
          !(!G(e) || ((t = e), E && E in t)) &&
          ((function(e) {
            var t = G(e) ? O.call(e) : '';
            return t == i || t == o;
          })(e) ||
          (function(e) {
            var t = !1;
            if (null != e && 'function' !== typeof e.toString)
              try {
                t = !!(e + '');
              } catch (e) {}
            return t;
          })(e)
            ? D
            : p
          ).test(
            (function(e) {
              if (null != e) {
                try {
                  return S.call(e);
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
      function W(e, t) {
        var n,
          r,
          a = e.__data__;
        return ('string' == (r = typeof (n = t)) ||
        'number' == r ||
        'symbol' == r ||
        'boolean' == r
        ? '__proto__' !== n
        : null === n)
          ? a['string' === typeof t ? 'string' : 'hash']
          : a.map;
      }
      function q(e, t) {
        var n = (function(e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return A(n) ? n : void 0;
      }
      (N.prototype.clear = function() {
        this.__data__ = T ? T(null) : {};
      }),
        (N.prototype.delete = function(e) {
          return this.has(e) && delete this.__data__[e];
        }),
        (N.prototype.get = function(e) {
          var t = this.__data__;
          if (T) {
            var n = t[e];
            return n === r ? void 0 : n;
          }
          return x.call(t, e) ? t[e] : void 0;
        }),
        (N.prototype.has = function(e) {
          var t = this.__data__;
          return T ? void 0 !== t[e] : x.call(t, e);
        }),
        (N.prototype.set = function(e, t) {
          return (this.__data__[e] = T && void 0 === t ? r : t), this;
        }),
        (k.prototype.clear = function() {
          this.__data__ = [];
        }),
        (k.prototype.delete = function(e) {
          var t = this.__data__,
            n = I(t, e);
          return !(n < 0 || (n == t.length - 1 ? t.pop() : M.call(t, n, 1), 0));
        }),
        (k.prototype.get = function(e) {
          var t = this.__data__,
            n = I(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (k.prototype.has = function(e) {
          return I(this.__data__, e) > -1;
        }),
        (k.prototype.set = function(e, t) {
          var n = this.__data__,
            r = I(n, e);
          return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
        }),
        (H.prototype.clear = function() {
          this.__data__ = {
            hash: new N(),
            map: new (R || k)(),
            string: new N(),
          };
        }),
        (H.prototype.delete = function(e) {
          return W(this, e).delete(e);
        }),
        (H.prototype.get = function(e) {
          return W(this, e).get(e);
        }),
        (H.prototype.has = function(e) {
          return W(this, e).has(e);
        }),
        (H.prototype.set = function(e, t) {
          return W(this, e).set(e, t), this;
        });
      var B = Y(function(e) {
        var t;
        e =
          null == (t = e)
            ? ''
            : (function(e) {
                if ('string' === typeof e) return e;
                if (X(e)) return P ? P.call(e) : '';
                var t = e + '';
                return '0' == t && 1 / e == -a ? '-0' : t;
              })(t);
        var n = [];
        return (
          l.test(e) && n.push(''),
          e.replace(d, function(e, t, r, a) {
            n.push(r ? a.replace(f, '$1') : t || e);
          }),
          n
        );
      });
      function L(e) {
        if ('string' === typeof e || X(e)) return e;
        var t = e + '';
        return '0' == t && 1 / e == -a ? '-0' : t;
      }
      function Y(e, t) {
        if ('function' !== typeof e || (t && 'function' !== typeof t))
          throw new TypeError(n);
        var r = function() {
          var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            i = r.cache;
          if (i.has(a)) return i.get(a);
          var o = e.apply(this, n);
          return (r.cache = i.set(a, o)), o;
        };
        return (r.cache = new (Y.Cache || H)()), r;
      }
      Y.Cache = H;
      var U = Array.isArray;
      function G(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function X(e) {
        return (
          'symbol' === typeof e ||
          ((function(e) {
            return !!e && 'object' === typeof e;
          })(e) &&
            O.call(e) == s)
        );
      }
      e.exports = function(e, t, n) {
        var r = null == e ? void 0 : z(e, t);
        return void 0 === r ? n : r;
      };
    }.call(this, n(8)));
  },
  function(e, t, n) {
    (function(t) {
      var n = 'Expected a function',
        r = NaN,
        a = '[object Symbol]',
        i = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt,
        l = 'object' === typeof t && t && t.Object === Object && t,
        d = 'object' === typeof self && self && self.Object === Object && self,
        f = l || d || Function('return this')(),
        p = Object.prototype.toString,
        g = Math.max,
        m = Math.min,
        h = function() {
          return f.Date.now();
        };
      function v(e, t, r) {
        var a,
          i,
          o,
          s,
          u,
          c,
          l = 0,
          d = !1,
          f = !1,
          p = !0;
        if ('function' !== typeof e) throw new TypeError(n);
        function v(t) {
          var n = a,
            r = i;
          return (a = i = void 0), (l = t), (s = e.apply(r, n));
        }
        function _(e) {
          var n = e - c;
          return void 0 === c || n >= t || n < 0 || (f && e - l >= o);
        }
        function w() {
          var e = h();
          if (_(e)) return E(e);
          u = setTimeout(
            w,
            (function(e) {
              var n = t - (e - c);
              return f ? m(n, o - (e - l)) : n;
            })(e)
          );
        }
        function E(e) {
          return (u = void 0), p && a ? v(e) : ((a = i = void 0), s);
        }
        function S() {
          var e = h(),
            n = _(e);
          if (((a = arguments), (i = this), (c = e), n)) {
            if (void 0 === u)
              return (function(e) {
                return (l = e), (u = setTimeout(w, t)), d ? v(e) : s;
              })(c);
            if (f) return (u = setTimeout(w, t)), v(c);
          }
          return void 0 === u && (u = setTimeout(w, t)), s;
        }
        return (
          (t = b(t) || 0),
          y(r) &&
            ((d = !!r.leading),
            (o = (f = 'maxWait' in r) ? g(b(r.maxWait) || 0, t) : o),
            (p = 'trailing' in r ? !!r.trailing : p)),
          (S.cancel = function() {
            void 0 !== u && clearTimeout(u), (l = 0), (a = c = i = u = void 0);
          }),
          (S.flush = function() {
            return void 0 === u ? s : E(h());
          }),
          S
        );
      }
      function y(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function b(e) {
        if ('number' === typeof e) return e;
        if (
          (function(e) {
            return (
              'symbol' === typeof e ||
              ((function(e) {
                return !!e && 'object' === typeof e;
              })(e) &&
                p.call(e) == a)
            );
          })(e)
        )
          return r;
        if (y(e)) {
          var t = 'function' === typeof e.valueOf ? e.valueOf() : e;
          e = y(t) ? t + '' : t;
        }
        if ('string' !== typeof e) return 0 === e ? e : +e;
        e = e.replace(i, '');
        var n = s.test(e);
        return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? r : +e;
      }
      e.exports = function(e, t, r) {
        var a = !0,
          i = !0;
        if ('function' !== typeof e) throw new TypeError(n);
        return (
          y(r) &&
            ((a = 'leading' in r ? !!r.leading : a),
            (i = 'trailing' in r ? !!r.trailing : i)),
          v(e, t, { leading: a, maxWait: t, trailing: i })
        );
      };
    }.call(this, n(8)));
  },
  function(e, t, n) {
    e.exports = (function(e, t) {
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
      var i = a,
        o = function(e) {};
      o = function(e) {
        if (void 0 === e)
          throw new Error('invariant requires an error message argument');
      };
      var s = function(e, t, n, r, a, i, s, u) {
          if ((o(t), !e)) {
            var c;
            if (void 0 === t)
              c = new Error(
                'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
              );
            else {
              var l = [n, r, a, i, s, u],
                d = 0;
              (c = new Error(
                t.replace(/%s/g, function() {
                  return l[d++];
                })
              )).name = 'Invariant Violation';
            }
            throw ((c.framesToPop = 1), c);
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
                i =
                  'Warning: ' +
                  e.replace(/%s/g, function() {
                    return n[a++];
                  });
              'undefined' !== typeof console && console.error(i);
              try {
                throw new Error(i);
              } catch (e) {}
            }.apply(void 0, [t].concat(r)));
          }
        },
        c = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
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
                  i = 1;
                i < arguments.length;
                i++
              ) {
                for (var o in (n = Object(arguments[i])))
                  l.call(n, o) && (a[o] = n[o]);
                if (c) {
                  r = c(n);
                  for (var s = 0; s < r.length; s++)
                    d.call(n, r[s]) && (a[r[s]] = n[r[s]]);
                }
              }
              return a;
            },
        p = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
        g = s,
        m = u,
        h = p,
        v = {},
        y = function(e, t, n, r, a) {
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              var o;
              try {
                g(
                  'function' === typeof e[i],
                  '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
                  r || 'React class',
                  n,
                  i,
                  typeof e[i]
                ),
                  (o = e[i](t, i, r, n, null, h));
              } catch (e) {
                o = e;
              }
              if (
                (m(
                  !o || o instanceof Error,
                  '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                  r || 'React class',
                  n,
                  i,
                  typeof o
                ),
                o instanceof Error && !(o.message in v))
              ) {
                v[o.message] = !0;
                var s = a ? a() : '';
                m(!1, 'Failed %s type: %s%s', n, o.message, null != s ? s : '');
              }
            }
        },
        b = function(e, t) {
          var n = 'function' === typeof Symbol && Symbol.iterator,
            r = '@@iterator',
            a = '<<anonymous>>',
            o = {
              array: d('array'),
              bool: d('boolean'),
              func: d('function'),
              number: d('number'),
              object: d('object'),
              string: d('string'),
              symbol: d('symbol'),
              any: l(i.thatReturnsNull),
              arrayOf: function(e) {
                return l(function(t, n, r, a, i) {
                  if ('function' !== typeof e)
                    return new c(
                      'Property `' +
                        i +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside arrayOf.'
                    );
                  var o = t[n];
                  if (!Array.isArray(o)) {
                    var s = m(o);
                    return new c(
                      'Invalid ' +
                        a +
                        ' `' +
                        i +
                        '` of type `' +
                        s +
                        '` supplied to `' +
                        r +
                        '`, expected an array.'
                    );
                  }
                  for (var u = 0; u < o.length; u++) {
                    var l = e(o, u, r, a, i + '[' + u + ']', p);
                    if (l instanceof Error) return l;
                  }
                  return null;
                });
              },
              element: l(function(t, n, r, a, i) {
                var o = t[n];
                if (!e(o)) {
                  var s = m(o);
                  return new c(
                    'Invalid ' +
                      a +
                      ' `' +
                      i +
                      '` of type `' +
                      s +
                      '` supplied to `' +
                      r +
                      '`, expected a single ReactElement.'
                  );
                }
                return null;
              }),
              instanceOf: function(e) {
                return l(function(t, n, r, i, o) {
                  if (!(t[n] instanceof e)) {
                    var s = e.name || a,
                      u =
                        (l = t[n]).constructor && l.constructor.name
                          ? l.constructor.name
                          : a;
                    return new c(
                      'Invalid ' +
                        i +
                        ' `' +
                        o +
                        '` of type `' +
                        u +
                        '` supplied to `' +
                        r +
                        '`, expected instance of `' +
                        s +
                        '`.'
                    );
                  }
                  var l;
                  return null;
                });
              },
              node: l(function(e, t, n, r, a) {
                return g(e[t])
                  ? null
                  : new c(
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
                return l(function(t, n, r, a, i) {
                  if ('function' !== typeof e)
                    return new c(
                      'Property `' +
                        i +
                        '` of component `' +
                        r +
                        '` has invalid PropType notation inside objectOf.'
                    );
                  var o = t[n],
                    s = m(o);
                  if ('object' !== s)
                    return new c(
                      'Invalid ' +
                        a +
                        ' `' +
                        i +
                        '` of type `' +
                        s +
                        '` supplied to `' +
                        r +
                        '`, expected an object.'
                    );
                  for (var u in o)
                    if (o.hasOwnProperty(u)) {
                      var l = e(o, u, r, a, i + '.' + u, p);
                      if (l instanceof Error) return l;
                    }
                  return null;
                });
              },
              oneOf: function(e) {
                return Array.isArray(e)
                  ? l(function(t, n, r, a, i) {
                      for (var o = t[n], s = 0; s < e.length; s++)
                        if (
                          ((u = o),
                          (l = e[s]),
                          u === l
                            ? 0 !== u || 1 / u == 1 / l
                            : u != u && l != l)
                        )
                          return null;
                      var u,
                        l,
                        d = JSON.stringify(e);
                      return new c(
                        'Invalid ' +
                          a +
                          ' `' +
                          i +
                          '` of value `' +
                          o +
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
                    i.thatReturnsNull);
              },
              oneOfType: function(e) {
                if (!Array.isArray(e))
                  return (
                    u(
                      !1,
                      'Invalid argument supplied to oneOfType, expected an instance of array.'
                    ),
                    i.thatReturnsNull
                  );
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  if ('function' !== typeof n)
                    return (
                      u(
                        !1,
                        'Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.',
                        v(n),
                        t
                      ),
                      i.thatReturnsNull
                    );
                }
                return l(function(t, n, r, a, i) {
                  for (var o = 0; o < e.length; o++) {
                    var s = e[o];
                    if (null == s(t, n, r, a, i, p)) return null;
                  }
                  return new c(
                    'Invalid ' + a + ' `' + i + '` supplied to `' + r + '`.'
                  );
                });
              },
              shape: function(e) {
                return l(function(t, n, r, a, i) {
                  var o = t[n],
                    s = m(o);
                  if ('object' !== s)
                    return new c(
                      'Invalid ' +
                        a +
                        ' `' +
                        i +
                        '` of type `' +
                        s +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  for (var u in e) {
                    var l = e[u];
                    if (l) {
                      var d = l(o, u, r, a, i + '.' + u, p);
                      if (d) return d;
                    }
                  }
                  return null;
                });
              },
              exact: function(e) {
                return l(function(t, n, r, a, i) {
                  var o = t[n],
                    s = m(o);
                  if ('object' !== s)
                    return new c(
                      'Invalid ' +
                        a +
                        ' `' +
                        i +
                        '` of type `' +
                        s +
                        '` supplied to `' +
                        r +
                        '`, expected `object`.'
                    );
                  var u = f({}, t[n], e);
                  for (var l in u) {
                    var d = e[l];
                    if (!d)
                      return new c(
                        'Invalid ' +
                          a +
                          ' `' +
                          i +
                          '` key `' +
                          l +
                          '` supplied to `' +
                          r +
                          '`.\nBad object: ' +
                          JSON.stringify(t[n], null, '  ') +
                          '\nValid keys: ' +
                          JSON.stringify(Object.keys(e), null, '  ')
                      );
                    var g = d(o, l, r, a, i + '.' + l, p);
                    if (g) return g;
                  }
                  return null;
                });
              },
            };
          function c(e) {
            (this.message = e), (this.stack = '');
          }
          function l(e) {
            var n = {},
              r = 0;
            function i(i, o, l, d, f, g, m) {
              if (((d = d || a), (g = g || l), m !== p))
                if (t)
                  s(
                    !1,
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                else if ('undefined' !== typeof console) {
                  var h = d + ':' + l;
                  !n[h] &&
                    r < 3 &&
                    (u(
                      !1,
                      'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                      g,
                      d
                    ),
                    (n[h] = !0),
                    r++);
                }
              return null == o[l]
                ? i
                  ? null === o[l]
                    ? new c(
                        'The ' +
                          f +
                          ' `' +
                          g +
                          '` is marked as required in `' +
                          d +
                          '`, but its value is `null`.'
                      )
                    : new c(
                        'The ' +
                          f +
                          ' `' +
                          g +
                          '` is marked as required in `' +
                          d +
                          '`, but its value is `undefined`.'
                      )
                  : null
                : e(o, l, d, f, g);
            }
            var o = i.bind(null, !1);
            return (o.isRequired = i.bind(null, !0)), o;
          }
          function d(e) {
            return l(function(t, n, r, a, i, o) {
              var s = t[n];
              if (m(s) !== e) {
                var u = h(s);
                return new c(
                  'Invalid ' +
                    a +
                    ' `' +
                    i +
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
                  if ('function' === typeof t) return t;
                })(t);
                if (!a) return !1;
                var i,
                  o = a.call(t);
                if (a !== t.entries) {
                  for (; !(i = o.next()).done; ) if (!g(i.value)) return !1;
                } else
                  for (; !(i = o.next()).done; ) {
                    var s = i.value;
                    if (s && !g(s[1])) return !1;
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
                      ('function' === typeof Symbol && t instanceof Symbol))
                  );
                })(t, e)
              ? 'symbol'
              : t;
          }
          function h(e) {
            if (null == e) return '' + e;
            var t = m(e);
            if ('object' === t) {
              if (e instanceof Date) return 'date';
              if (e instanceof RegExp) return 'regexp';
            }
            return t;
          }
          function v(e) {
            var t = h(e);
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
            (c.prototype = Error.prototype),
            (o.checkPropTypes = y),
            (o.PropTypes = o),
            o
          );
        },
        _ = n(function(e) {
          var t =
            ('function' === typeof Symbol &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            60103;
          e.exports = b(function(e) {
            return 'object' === typeof e && null !== e && e.$$typeof === t;
          }, !0);
        }),
        w = n(function(e) {
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
                  var i = typeof a;
                  if ('string' === i || 'number' === i) e.push(a);
                  else if (Array.isArray(a)) e.push(n.apply(null, a));
                  else if ('object' === i)
                    for (var o in a) t.call(a, o) && a[o] && e.push(o);
                }
              }
              return e.join(' ');
            }
            e.exports ? (e.exports = n) : (window.classNames = n);
          })();
        });
      function E(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (t.apply(t, [e[n], n, e])) return e[n];
      }
      function S(e) {
        return (
          'function' === typeof e ||
          '[object Function]' === Object.prototype.toString.call(e)
        );
      }
      function x(e) {
        return 'number' === typeof e && !isNaN(e);
      }
      function O(e) {
        return parseInt(e, 10);
      }
      function D(e, t, n) {
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
          if ('undefined' === typeof window || void 0 === window.document)
            return '';
          var t = window.document.documentElement.style;
          if (e in t) return '';
          for (var n = 0; n < j.length; n++) if (M(e, j[n]) in t) return j[n];
          return '';
        })(),
        T = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        },
        C = (function() {
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
        N =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        k = function(e, t) {
          if ('function' !== typeof t && null !== t)
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
        H = function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ('object' !== typeof t && 'function' !== typeof t)
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
                i = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(r = (o = s.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  !r && s.return && s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        },
        z = '';
      function A(e, t) {
        return (
          z ||
            (z = E(
              [
                'matches',
                'webkitMatchesSelector',
                'mozMatchesSelector',
                'msMatchesSelector',
                'oMatchesSelector',
              ],
              function(t) {
                return S(e[t]);
              }
            )),
          !!S(e[z]) && e[z](t)
        );
      }
      function W(e, t, n) {
        var r = e;
        do {
          if (A(r, t)) return !0;
          if (r === n) return !1;
          r = r.parentNode;
        } while (r);
        return !1;
      }
      function q(e, t, n) {
        e &&
          (e.attachEvent
            ? e.attachEvent('on' + t, n)
            : e.addEventListener
            ? e.addEventListener(t, n, !0)
            : (e['on' + t] = n));
      }
      function B(e, t, n) {
        e &&
          (e.detachEvent
            ? e.detachEvent('on' + t, n)
            : e.removeEventListener
            ? e.removeEventListener(t, n, !0)
            : (e['on' + t] = null));
      }
      function L(e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t += O(n.borderTopWidth)), (t += O(n.borderBottomWidth));
      }
      function Y(e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t += O(n.borderLeftWidth)), (t += O(n.borderRightWidth));
      }
      function U(e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t -= O(n.paddingTop)), (t -= O(n.paddingBottom));
      }
      function G(e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t -= O(n.paddingLeft)), (t -= O(n.paddingRight));
      }
      function X(e) {
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
      function F(e) {
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
        return N({ touchAction: 'none' }, e);
      }
      function V(e) {
        return 'both' === e.props.axis || 'x' === e.props.axis;
      }
      function J(e) {
        return 'both' === e.props.axis || 'y' === e.props.axis;
      }
      function K(e, t, n) {
        var r =
          'number' === typeof t
            ? (function(e, t) {
                return (
                  (e.targetTouches &&
                    E(e.targetTouches, function(e) {
                      return t === e.identifier;
                    })) ||
                  (e.changedTouches &&
                    E(e.changedTouches, function(e) {
                      return t === e.identifier;
                    }))
                );
              })(e, t)
            : null;
        if ('number' === typeof t && !r) return null;
        var a = ee(n),
          i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
        return (function(e, t) {
          var n =
              t === t.ownerDocument.body
                ? { left: 0, top: 0 }
                : t.getBoundingClientRect(),
            r = e.clientX + t.scrollLeft - n.left,
            a = e.clientY + t.scrollTop - n.top;
          return { x: r, y: a };
        })(r || e, i);
      }
      function Q(e, t, n) {
        var r = e.state,
          a = !x(r.lastX),
          i = ee(e);
        return a
          ? { node: i, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
          : {
              node: i,
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
            T(this, r);
            for (var i = arguments.length, o = Array(i), s = 0; s < i; s++)
              o[s] = arguments[s];
            return (
              (a = H(
                this,
                (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                  t,
                  [this].concat(o)
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
                    'number' === typeof t.button &&
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
                    (a.props.handle && !W(t.target, a.props.handle, n)) ||
                    (a.props.cancel && W(t.target, a.props.cancel, n))
                  )
                ) {
                  var i = (function(e) {
                    return e.targetTouches && e.targetTouches[0]
                      ? e.targetTouches[0].identifier
                      : e.changedTouches && e.changedTouches[0]
                      ? e.changedTouches[0].identifier
                      : void 0;
                  })(t);
                  a.setState({ touchIdentifier: i });
                  var o = K(t, i, a);
                  if (null != o) {
                    var s = o.x,
                      u = o.y,
                      c = Q(a, s, u);
                    a.props.onStart;
                    var l = a.props.onStart(t, c);
                    !1 !== l &&
                      (a.props.enableUserSelectHack && X(r),
                      a.setState({ dragging: !0, lastX: s, lastY: u }),
                      q(r, ne.move, a.handleDrag),
                      q(r, ne.stop, a.handleDragStop));
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
                    var i = n - a.state.lastX,
                      o = r - a.state.lastY,
                      s = (function(e, t, n) {
                        var r = Math.round(t / e[0]) * e[0],
                          a = Math.round(n / e[1]) * e[1];
                        return [r, a];
                      })(a.props.grid, i, o),
                      u = I(s, 2);
                    if (((i = u[0]), (o = u[1]), !i && !o)) return;
                    (n = a.state.lastX + i), (r = a.state.lastY + o);
                  }
                  var c = Q(a, n, r),
                    l = a.props.onDrag(e, c);
                  if (!1 !== l) a.setState({ lastX: n, lastY: r });
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
                      i = n.y,
                      o = Q(a, r, i),
                      s = e.findDOMNode(a);
                    s && a.props.enableUserSelectHack && F(s.ownerDocument),
                      a.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                      a.props.onStop(t, o),
                      s &&
                        (B(s.ownerDocument, ne.move, a.handleDrag),
                        B(s.ownerDocument, ne.stop, a.handleDragStop));
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
              H(a, n)
            );
          }
          return (
            k(r, n),
            C(r, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  var t = e.findDOMNode(this);
                  if (t) {
                    var n = t.ownerDocument;
                    B(n, te.mouse.move, this.handleDrag),
                      B(n, te.touch.move, this.handleDrag),
                      B(n, te.mouse.stop, this.handleDragStop),
                      B(n, te.touch.stop, this.handleDragStop),
                      this.props.enableUserSelectHack && F(n);
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
          cancel: _.string,
          className: D,
          disabled: _.bool,
          enableUserSelectHack: _.bool,
          grid: _.arrayOf(_.number),
          handle: _.string,
          offsetParent: function(e, t) {
            if (e[t] && 1 !== e[t].nodeType)
              throw new Error("Draggable's offsetParent must be a DOM Node.");
          },
          onDrag: _.func,
          onMouseDown: _.func,
          onStart: _.func,
          onStop: _.func,
          scale: _.number,
          style: D,
          transform: D,
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
          T(this, r);
          var t = H(
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
                var i = a.x,
                  o = a.y;
                (a.x += t.state.slackX), (a.y += t.state.slackY);
                var s = (function(e, t, n) {
                    if (!e.props.bounds) return [t, n];
                    var r = e.props.bounds;
                    r =
                      'string' === typeof r
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
                    if ('string' === typeof r) {
                      var i = a.ownerDocument,
                        o = i.defaultView,
                        s = void 0;
                      if (
                        !(
                          (s =
                            'parent' === r
                              ? a.parentNode
                              : i.querySelector(r)) instanceof o.HTMLElement
                        )
                      )
                        throw new Error(
                          'Bounds selector "' +
                            r +
                            '" could not find an element.'
                        );
                      var u = o.getComputedStyle(a),
                        c = o.getComputedStyle(s);
                      r = {
                        left:
                          -a.offsetLeft + O(c.paddingLeft) + O(u.marginLeft),
                        top: -a.offsetTop + O(c.paddingTop) + O(u.marginTop),
                        right:
                          G(s) -
                          Y(a) -
                          a.offsetLeft +
                          O(c.paddingRight) -
                          O(u.marginRight),
                        bottom:
                          U(s) -
                          L(a) -
                          a.offsetTop +
                          O(c.paddingBottom) -
                          O(u.marginBottom),
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
                  u = I(s, 2),
                  c = u[0],
                  l = u[1];
                (a.x = c),
                  (a.y = l),
                  (a.slackX = t.state.slackX + (i - a.x)),
                  (a.slackY = t.state.slackY + (o - a.y)),
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
                i = Boolean(t.props.position);
              if (i) {
                var o = t.props.position,
                  s = o.x,
                  u = o.y;
                (a.x = s), (a.y = u);
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
          k(r, n),
          C(r, [
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
                  i = {},
                  o = null,
                  s = Boolean(this.props.position),
                  u = !s || this.state.dragging,
                  c = this.props.position || this.props.defaultPosition,
                  l = {
                    x: V(this) && u ? this.state.x : c.x,
                    y: J(this) && u ? this.state.y : c.y,
                  };
                this.state.isElementSVG
                  ? ((r = (n = l).x),
                    (a = n.y),
                    (o = 'translate(' + r + ',' + a + ')'))
                  : (i = (function(e) {
                      var t = e.x,
                        n = e.y;
                      return P(
                        {},
                        M('transform', R),
                        'translate(' + t + 'px,' + n + 'px)'
                      );
                    })(l));
                var d = this.props,
                  f = d.defaultClassName,
                  p = d.defaultClassNameDragging,
                  g = d.defaultClassNameDragged,
                  m = t.Children.only(this.props.children),
                  h = w(
                    m.props.className || '',
                    f,
                    (P((e = {}), p, this.state.dragging),
                    P(e, g, this.state.dragged),
                    e)
                  );
                return t.createElement(
                  re,
                  N({}, this.props, {
                    onStart: this.onDragStart,
                    onDrag: this.onDrag,
                    onStop: this.onDragStop,
                  }),
                  t.cloneElement(m, {
                    className: h,
                    style: N({}, m.props.style, i),
                    transform: o,
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
        (ae.propTypes = N({}, re.propTypes, {
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
          className: D,
          style: D,
          transform: D,
        })),
        (ae.defaultProps = N({}, re.defaultProps, {
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
    })(n(17), n(1));
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
              if (t && 'function' === typeof btoa) {
                var a = ((o = r),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                    ' */'),
                  i = r.sources.map(function(e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                  });
                return [n]
                  .concat(i)
                  .concat([a])
                  .join('\n');
              }
              var o;
              return [n].join('\n');
            })(t, e);
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
          }).join('');
        }),
        (t.i = function(e, n) {
          'string' === typeof e && (e = [[null, e, '']]);
          for (var r = {}, a = 0; a < this.length; a++) {
            var i = this[a][0];
            'number' === typeof i && (r[i] = !0);
          }
          for (a = 0; a < e.length; a++) {
            var o = e[a];
            ('number' === typeof o[0] && r[o[0]]) ||
              (n && !o[2]
                ? (o[2] = n)
                : n && (o[2] = '(' + o[2] + ') and (' + n + ')'),
              t.push(o));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    var r,
      a,
      i = {},
      o = ((r = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === a && (a = r.apply(this, arguments)), a;
      }),
      s = (function(e) {
        var t = {};
        return function(e) {
          if ('function' === typeof e) return e();
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
      c = 0,
      l = [],
      d = n(14);
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = i[r.id];
        if (a) {
          a.refs++;
          for (var o = 0; o < a.parts.length; o++) a.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++) a.parts.push(y(r.parts[o], t));
        } else {
          var s = [];
          for (o = 0; o < r.parts.length; o++) s.push(y(r.parts[o], t));
          i[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function p(e, t) {
      for (var n = [], r = {}, a = 0; a < e.length; a++) {
        var i = e[a],
          o = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };
        r[o] ? r[o].parts.push(s) : n.push((r[o] = { id: o, parts: [s] }));
      }
      return n;
    }
    function g(e, t) {
      var n = s(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = l[l.length - 1];
      if ('top' === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          l.push(t);
      else if ('bottom' === e.insertAt) n.appendChild(t);
      else {
        if ('object' !== typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var a = s(e.insertInto + ' ' + e.insertAt.before);
        n.insertBefore(t, a);
      }
    }
    function m(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = l.indexOf(e);
      t >= 0 && l.splice(t, 1);
    }
    function h(e) {
      var t = document.createElement('style');
      return (e.attrs.type = 'text/css'), v(t, e.attrs), g(e, t), t;
    }
    function v(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function y(e, t) {
      var n, r, a, i;
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function() {};
        e.css = i;
      }
      if (t.singleton) {
        var o = c++;
        (n = u || (u = h(t))),
          (r = w.bind(null, n, o, !1)),
          (a = w.bind(null, n, o, !0));
      } else
        e.sourceMap &&
        'function' === typeof URL &&
        'function' === typeof URL.createObjectURL &&
        'function' === typeof URL.revokeObjectURL &&
        'function' === typeof Blob &&
        'function' === typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement('link');
              return (
                (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                v(t, e.attrs),
                g(e, t),
                t
              );
            })(t)),
            (r = function(e, t, n) {
              var r = n.css,
                a = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && a;
              (t.convertToAbsoluteUrls || i) && (r = d(r));
              a &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                  ' */');
              var o = new Blob([r], { type: 'text/css' }),
                s = e.href;
              (e.href = URL.createObjectURL(o)), s && URL.revokeObjectURL(s);
            }.bind(null, n, t)),
            (a = function() {
              m(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = h(t)),
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
      if ('undefined' !== typeof DEBUG && DEBUG && 'object' !== typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        );
      ((t = t || {}).attrs = 'object' === typeof t.attrs ? t.attrs : {}),
        t.singleton || 'boolean' === typeof t.singleton || (t.singleton = o()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom');
      var n = p(e, t);
      return (
        f(n, t),
        function(e) {
          for (var r = [], a = 0; a < n.length; a++) {
            var o = n[a];
            (s = i[o.id]).refs--, r.push(s);
          }
          e && f(p(e, t), t);
          for (a = 0; a < r.length; a++) {
            var s;
            if (0 === (s = r[a]).refs) {
              for (var u = 0; u < s.parts.length; u++) s.parts[u]();
              delete i[s.id];
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
    function w(e, t, n, r) {
      var a = n ? '' : r.css;
      if (e.styleSheet) e.styleSheet.cssText = _(t, a);
      else {
        var i = document.createTextNode(a),
          o = e.childNodes;
        o[t] && e.removeChild(o[t]),
          o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
      }
    }
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' === typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    var r = Array.isArray,
      a = Object.keys,
      i = Object.prototype.hasOwnProperty,
      o = 'undefined' !== typeof Element;
    e.exports = function(e, t) {
      try {
        return (function e(t, n) {
          if (t === n) return !0;
          if (t && n && 'object' === typeof t && 'object' === typeof n) {
            var s,
              u,
              c,
              l = r(t),
              d = r(n);
            if (l && d) {
              if ((u = t.length) != n.length) return !1;
              for (s = u; 0 != s--; ) if (!e(t[s], n[s])) return !1;
              return !0;
            }
            if (l != d) return !1;
            var f = t instanceof Date,
              p = n instanceof Date;
            if (f != p) return !1;
            if (f && p) return t.getTime() == n.getTime();
            var g = t instanceof RegExp,
              m = n instanceof RegExp;
            if (g != m) return !1;
            if (g && m) return t.toString() == n.toString();
            var h = a(t);
            if ((u = h.length) !== a(n).length) return !1;
            for (s = u; 0 != s--; ) if (!i.call(n, h[s])) return !1;
            if (o && t instanceof Element && n instanceof Element)
              return t === n;
            for (s = u; 0 != s--; )
              if (!(('_owner' === (c = h[s]) && t.$$typeof) || e(t[c], n[c])))
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
    var r = n(11);
    function a() {}
    e.exports = function() {
      function e(e, t, n, a, i, o) {
        if (o !== r) {
          var s = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((s.name = 'Invariant Violation'), s);
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
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t, n) {
    var r = n(13);
    'string' === typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(7)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(6)(!1)).push([
      e.i,
      ".acuity-calendar__time-grid {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-right: 1px solid #e7e7e7;\n  /* ------ Header START ------ */\n  /* ------ Header END ------ */\n  /* ------ Grid START ------ */\n  /* ------ Grid END ------ */ }\n  .acuity-calendar__time-grid__header-wrapper {\n    display: flex;\n    border-top: 1px solid #e7e7e7;\n    position: relative; }\n  .acuity-calendar__time-grid__corner {\n    position: relative;\n    z-index: 5;\n    background: white;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__corner h2 {\n    margin: 0;\n    background: white; }\n  .acuity-calendar__time-grid__header {\n    display: flex;\n    width: 100%;\n    background: white;\n    z-index: 4;\n    text-align: center; }\n  .acuity-calendar__time-grid__header-column {\n    font-size: 12px;\n    flex: 1;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__time-grid__header-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__time-grid__header-column h2 {\n      font-size: 16px;\n      color: #444;\n      font-weight: 400;\n      padding: 25px 0; }\n  .acuity-calendar__time-grid__header-column-container {\n    margin: 0 auto; }\n  .acuity-calendar__time-grid__scroll-gutter {\n    height: 100%;\n    background: white;\n    position: absolute;\n    z-index: 5;\n    right: -2px;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__scroll-gutter-connector {\n    width: 100%;\n    background: white;\n    height: 1px;\n    bottom: -1px;\n    position: absolute; }\n  .acuity-calendar__time-grid__grid-wrapper {\n    position: relative;\n    width: 100%;\n    display: flex;\n    overflow: auto;\n    position: relative;\n    border: 1px solid #e7e7e7;\n    background: #f3f3f3; }\n  .acuity-calendar__time-grid__step-lines {\n    width: 100%;\n    position: absolute;\n    top: -1px; }\n  .acuity-calendar__time-grid__step-line:after {\n    width: 100%;\n    content: '';\n    border-bottom: 1px solid #e7e7e7;\n    position: absolute;\n    pointer-events: none;\n    z-index: 2; }\n  .acuity-calendar__time-grid__step-line-minor:after {\n    border-bottom: 1px dashed #e7e7e7; }\n  .acuity-calendar__time-grid__time-gutter {\n    background: white;\n    position: relative;\n    flex: 1 0 50px;\n    text-align: center;\n    border-right: 1px solid #e7e7e7;\n    z-index: 5;\n    text-align: right; }\n  .acuity-calendar__time-grid__time-label {\n    font-size: 10px;\n    color: #444;\n    transform: translateY(-8px);\n    display: block;\n    margin-right: 4px; }\n  .acuity-calendar__time-grid__time-label-0 {\n    display: none; }\n  .acuity-calendar__time-grid__grid {\n    display: flex;\n    width: 100%; }\n  .acuity-calendar__time-grid__grid-column {\n    text-align: center;\n    position: relative;\n    flex: 1; }\n    .acuity-calendar__time-grid__grid-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__step-detail-wrapper {\n    position: absolute;\n    width: 100%; }\n  .acuity-calendar__time-grid__today {\n    background: #edf8f2; }\n  .acuity-calendar__time-grid__select-slot-indicator {\n    border-bottom: 2px dashed #c1c1c1;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    z-index: 4; }\n  .acuity-calendar__time-grid__select-slot-indicator-time {\n    position: absolute;\n    top: -20px;\n    font-size: 14px;\n    left: 0;\n    right: 0; }\n  .acuity-calendar__time-grid__select-range {\n    position: absolute;\n    width: 99%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 4;\n    border-radius: 4px;\n    color: white;\n    user-select: none; }\n  .acuity-calendar__time-grid__current-time-indicator {\n    width: 100%;\n    position: absolute;\n    z-index: 6; }\n    .acuity-calendar__time-grid__current-time-indicator__line {\n      height: 1px;\n      background: #af5b55;\n      opacity: 0.4; }\n    .acuity-calendar__time-grid__current-time-indicator__line-today {\n      height: 1px;\n      background: #af5b55; }\n    .acuity-calendar__time-grid__current-time-indicator__time {\n      position: absolute;\n      transform: translate(-115%, -7px);\n      color: #c9484d;\n      background: #fff;\n      box-shadow: -3px 0px 8px 5px #fff;\n      font-size: 10px; }\n",
      '',
    ]);
  },
  function(e, t) {
    e.exports = function(e) {
      var t = 'undefined' !== typeof window && window.location;
      if (!t) throw new Error('fixUrls requires window.location');
      if (!e || 'string' !== typeof e) return e;
      var n = t.protocol + '//' + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, '/');
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var a,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? e
            : ((a =
                0 === i.indexOf('//')
                  ? i
                  : 0 === i.indexOf('/')
                  ? n + i
                  : r + i.replace(/^\.\//, '')),
              'url(' + JSON.stringify(a) + ')');
        }
      );
    };
  },
  function(e, t, n) {
    var r = n(16);
    'string' === typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(7)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(6)(!1)).push([
      e.i,
      '.acuity-calendar__time-grid__event-wrapper {\n  position: absolute; }\n\n.acuity-calendar__time-grid__event-details-wrapper {\n  padding: 7.5px 10px 0;\n  text-align: left; }\n\n.acuity-calendar__time-grid__event {\n  background: #26ada0;\n  z-index: 3;\n  position: relative;\n  color: #fff;\n  border-radius: 2px;\n  font-size: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__event-padding {\n  background: #3dbe8b;\n  z-index: 2;\n  position: relative;\n  opacity: 0.25;\n  pointer-events: none;\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, rgba(17, 17, 17, 0.2) 25%, rgba(17, 17, 17, 0.2) 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, rgba(17, 17, 17, 0.2) 75%);\n  background-size: 8px 8px; }\n\n.acuity-calendar__time-grid__event-handle {\n  position: absolute;\n  height: 10px;\n  width: 100%;\n  left: 0;\n  cursor: ns-resize;\n  z-index: 4; }\n\n.acuity-calendar__time-grid__event-handle-top {\n  top: 0; }\n\n.acuity-calendar__time-grid__event-handle-center {\n  position: absolute;\n  width: 100%; }\n\n.acuity-calendar__time-grid__event-handle-bottom {\n  bottom: 0; }\n\n.acuity-calendar__time-grid__dragging-event {\n  z-index: 4;\n  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__dragging-placeholder-event .acuity-calendar__time-grid__event {\n  opacity: 0.5; }\n\n.acuity-calendar__time-grid__event-title {\n  display: block;\n  margin-bottom: 7.5px; }\n',
      '',
    ]);
  },
  function(e, t) {
    e.exports = react - dom;
  },
  function(e, t, n) {
    var r = n(19);
    'string' === typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(7)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(6)(!1)).push([
      e.i,
      '.acuity-calendar__day-grid__event {\n  font-size: 12px;\n  cursor: pointer; }\n\n.acuity-calendar__day-grid__event-details {\n  height: 20px;\n  padding-left: 10px; }\n\n.acuity-calendar__day-grid__event-time {\n  color: #777;\n  margin-right: 8px; }\n\n.acuity-calendar__day-grid__event-title {\n  white-space: nowrap;\n  overflow: hidden; }\n\n.acuity-calendar__day-grid__event-details {\n  display: flex;\n  overflow: hidden; }\n',
      '',
    ]);
  },
  function(e, t, n) {
    var r = n(21);
    'string' === typeof r && (r = [[e.i, r, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(7)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (e.exports = n(6)(!1)).push([
      e.i,
      ".acuity-calendar__day-grid {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .acuity-calendar__day-grid__days {\n    overflow: hidden;\n    margin: 0;\n    border: 1px solid #e7e7e7;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 0; }\n  .acuity-calendar__day-grid__header {\n    display: flex;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__column-header {\n    flex: 1 1 0;\n    text-align: center;\n    border-top: 1px solid #e7e7e7;\n    border-right: 1px solid #e7e7e7;\n    text-transform: uppercase;\n    padding: 10px;\n    font-weight: 600; }\n  .acuity-calendar__day-grid__date-wrapper {\n    position: absolute;\n    z-index: 4;\n    font-size: 14px;\n    color: #2c2929;\n    cursor: pointer;\n    right: 5px;\n    top: 5px;\n    padding: 3px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__day-grid__date-wrapper:hover {\n      background: #e7e7e7; }\n  .acuity-calendar__day-grid__date {\n    line-height: 1em;\n    margin: 0 auto; }\n    .acuity-calendar__day-grid__date--not-in-range {\n      color: #a9a5a5; }\n  .acuity-calendar__day-grid__row {\n    position: relative;\n    display: flex;\n    flex: 1 1 0;\n    width: 100%; }\n    .acuity-calendar__day-grid__row:not(:last-child) {\n      border-bottom: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__cell {\n    position: relative;\n    flex: 1 1;\n    /* Some width needs to be set. Not a fan of doing this, but I've spent too long on it\n           come up with an obvious easy fix. My brain is too fried today.\n           If you take this out, make SURE you're testing with events in the month view that get \n           cut off for being too long. They make their cells 1 pixel too wide without this\n           This could be set to anything as long as it is less than the actual width of 14.29%\n        */\n    width: 0; }\n    .acuity-calendar__day-grid__cell:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__day-grid__cell--not-in-range {\n      background: #fbf9f9; }\n  .acuity-calendar__day-grid__event-wrapper {\n    margin-top: 35px; }\n  .acuity-calendar__day-grid__more-events {\n    cursor: pointer;\n    text-align: center;\n    font-weight: 600;\n    height: 20px;\n    font-size: 12px; }\n",
      '',
    ]);
  },
  function(e, t, n) {
    n.r(t);
    var r = n(1),
      a = n.n(r),
      i = n(0),
      o = n.n(i),
      s = n(2),
      u = n.n(s),
      c = n(3),
      l = n.n(c),
      d = { 5: 22, 10: 27, 15: 31, 20: 34, 30: 42, 60: 65 };
    function f(e) {
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
    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        'function' === typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function(t) {
            g(e, t, n[t]);
          });
      }
      return e;
    }
    function g(e, t, n) {
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
    var m = function(e) {
        var t = 1;
        return e.reduce(function(n, r, a) {
          var i = h({
              event: r,
              lastEvent: 0 !== a ? e[a - 1] : null,
              currentColumn: t,
            }),
            o = l()(n, i, []);
          return (
            (n = p({}, n, g({}, i, [].concat(f(o), [r])))),
            i !== t && (t = i),
            n
          );
        }, {});
      },
      h = function(e) {
        var t = e.event,
          n = e.lastEvent,
          r = e.currentColumn;
        return n && t.start.isSame(n.start, 'day') && t.start.isBefore(n.end)
          ? r + 1
          : 1;
      },
      v = function() {
        if ('undefined' === typeof window || !window.document) return 15;
        var e = document.createElement('div');
        (e.style.overflowY = 'scroll'), document.body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), t;
      },
      y = function(e) {
        return 60 * e.get('hour') + e.get('minute');
      },
      b = function(e) {
        var t = e.stepMinutes,
          n = e.date,
          r = (e.stepHeight || d[t]) / t;
        return y(n) * r + 1 * n.hour();
      },
      _ = function(e) {
        return e.sort(function(e, t) {
          return e.start.isAfter(t.start)
            ? 1
            : e.start.isBefore(t.start)
            ? -1
            : 0;
        });
      };
    function w(e) {
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
    function E(e, t, n) {
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
    var S = function(e) {
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
                  'function' === typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                      })
                    )),
                    r.forEach(function(t) {
                      E(e, t, n[t]);
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
          if (((e = [].concat(w(e), [r])), 0 === a)) return e;
          for (var i = 1; i <= a; i += 1) {
            var o = Object.assign({}, r);
            (o.start = r.start
              .clone()
              .add(i, 'days')
              .startOf('day')),
              r.end.isSame(o.start, 'day')
                ? (o.end = r.end)
                : (o.end = o.start.clone().endOf('day')),
              (e = [].concat(w(e), [o]));
          }
          return e;
        }, []);
      },
      x = function(e) {
        var t = e.event,
          n = e.stepMinutes,
          r = e.stepHeight,
          a = (r || d[n]) / n,
          i = 60 * a * 24,
          o = t.end.clone().diff(t.start, 'minutes'),
          s = (o / 60) * 1,
          u = b({ stepMinutes: n, date: t.start, stepHeight: r }),
          c = i - u + 24,
          l = o * a + s;
        l > c && (l = c);
        var f = O({ event: t, pixelsPerMinute: a }),
          p = {
            height: l,
            top: u,
            paddingTopHeight: f.topHeight,
            paddingBottomHeight: f.bottomHeight,
          };
        return Object.assign(t, p);
      },
      O = function(e) {
        var t = e.event,
          n = e.pixelsPerMinute,
          r = 0;
        if (t.paddingTopStart) {
          var a = t.paddingTopStart.clone().diff(t.start, 'minutes'),
            i = (a / 60) * 1;
          r = Math.abs(a * n + i);
        }
        var o = 0;
        if (t.paddingBottomEnd) {
          var s = t.paddingBottomEnd.clone().diff(t.end, 'minutes'),
            u = (s / 60) * 1;
          o = Math.abs(s * n + u);
        }
        return { topHeight: r, bottomHeight: o };
      },
      D = function(e) {
        var t = e.eventsKeyed,
          n = e.event,
          r = Object.assign({}, t),
          a = n.start.format('YYYY-MM-DD'),
          i = l()(t, ''.concat(n.group_id, '.').concat(a), []);
        i.push(n);
        var o = l()(t, ''.concat(n.group_id), {});
        return (o[a] = i), (r[n.group_id] = o), r;
      },
      j = function(e) {
        var t = e.events,
          n = e.stepMinutes,
          r = void 0 !== n && n,
          a = e.stepHeight,
          i = void 0 !== a && a,
          o = S(t);
        return _(o).reduce(function(e, t, n) {
          if (!r) return D({ eventsKeyed: e, event: t });
          var a = x({ event: t, stepMinutes: r, stepHeight: i });
          return D({ eventsKeyed: e, event: a });
        }, {});
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
                e[n] = _([].concat(M(l()(e, n, [])), M(r[t][n])));
              }),
              e
            );
          }, {})
        );
      },
      T = { month: 'month', week: 'week', groups: 'groups' },
      C = function() {
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
    var N = function(e) {
        var t = (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            'function' === typeof Object.getOwnPropertySymbols &&
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
      k = function(e) {
        var t = e.events,
          n = e.stepMinutes,
          a = e.stepHeight,
          i = e.visibleEventGroups,
          o = e.stepDetails,
          s = Object(r.useMemo)(
            function() {
              return j({ events: t, stepMinutes: n, stepHeight: a });
            },
            [t, n]
          ),
          u = Object(r.useMemo)(
            function() {
              return R({ mungedEvents: s, visibleEventGroups: i });
            },
            [s, i]
          );
        if (!o) return { mungedEvents: s, eventsWithSelectedEventGroups: u };
        var c = Object(r.useMemo)(
            function() {
              return j({ events: o, stepMinutes: n, stepHeight: a });
            },
            [o, n]
          ),
          l = Object(r.useMemo)(
            function() {
              return R({ mungedEvents: c, visibleEventGroups: i });
            },
            [c, i]
          );
        return {
          mungedEvents: s,
          eventsWithSelectedEventGroups: u,
          mungedStepDetails: c,
          mungedStepDetailsGroups: l,
        };
      },
      H = function(e) {
        return e.isSame(u()(), 'day') ? ' '.concat(C('time-grid__today')) : '';
      },
      I = function(e) {
        var t = e.stepMinutes,
          n = e.selectMinutes,
          r = e.columnDate,
          a = e.stepHeight;
        return function(e) {
          var i = e.currentTarget.getBoundingClientRect(),
            o = (e.clientY - i.top) / ((a || d[t]) / t),
            s = r
              .clone()
              .startOf('day')
              .add(o, 'minutes'),
            u = Math.round(s.clone().minute() / n) * n;
          return s
            .clone()
            .minute(u)
            .second(0);
        };
      },
      z = function(e) {
        var t = e.start,
          n = e.end,
          r = ':'.concat(t.format('mm'));
        ':00' === r && (r = '');
        var a = '';
        t.format('a') !== n.format('a') && (a = t.format('a'));
        var i = ''
            .concat(t.format('h'))
            .concat(r)
            .concat(a),
          o = ':'.concat(n.format('mm'));
        ':00' === o && (o = '');
        var s = ''
          .concat(n.format('h'))
          .concat(o)
          .concat(n.format('a'));
        return ''.concat(i, ' - ').concat(s);
      },
      A = n(4),
      W = n.n(A);
    let q = null;
    let B = null;
    function L(e, t = {}) {
      let n = document.createElement(e);
      return (
        Object.keys(t).forEach(e => {
          n[e] = t[e];
        }),
        n
      );
    }
    function Y(e, t, n) {
      return (window.getComputedStyle(e, n || null) || { display: 'none' })[t];
    }
    function U(e) {
      if (!document.documentElement.contains(e))
        return { detached: !0, rendered: !1 };
      let t = e;
      for (; t !== document; ) {
        if ('none' === Y(t, 'display')) return { detached: !1, rendered: !1 };
        t = t.parentNode;
      }
      return { detached: !1, rendered: !0 };
    }
    var G =
      '.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}';
    let X = 0,
      F = null;
    function $(e, t) {
      if (
        (e.__resize_mutation_handler__ ||
          (e.__resize_mutation_handler__ = function() {
            let { rendered: e, detached: t } = U(this);
            e !== this.__resize_rendered__ &&
              (!t &&
                this.__resize_triggers__ &&
                (Q(this), this.addEventListener('scroll', J, !0)),
              (this.__resize_rendered__ = e),
              K(this));
          }.bind(e)),
        !e.__resize_listeners__)
      )
        if (((e.__resize_listeners__ = []), window.ResizeObserver)) {
          let { offsetWidth: t, offsetHeight: n } = e,
            r = new ResizeObserver(() => {
              (e.__resize_observer_triggered__ ||
                ((e.__resize_observer_triggered__ = !0),
                e.offsetWidth !== t || e.offsetHeight !== n)) &&
                K(e);
            }),
            { detached: a, rendered: i } = U(e);
          (e.__resize_observer_triggered__ = !1 === a && !1 === i),
            (e.__resize_observer__ = r),
            r.observe(e);
        } else if (e.attachEvent && e.addEventListener)
          (e.__resize_legacy_resize_handler__ = function() {
            K(e);
          }),
            e.attachEvent('onresize', e.__resize_legacy_resize_handler__),
            document.addEventListener(
              'DOMSubtreeModified',
              e.__resize_mutation_handler__
            );
        else if (
          (X ||
            (F = (function(e) {
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
            })(G)),
          (function(e) {
            let t = Y(e, 'position');
            (t && 'static' !== t) || (e.style.position = 'relative');
            (e.__resize_old_position__ = t), (e.__resize_last__ = {});
            let n = L('div', { className: 'resize-triggers' }),
              r = L('div', { className: 'resize-expand-trigger' }),
              a = L('div'),
              i = L('div', { className: 'resize-contract-trigger' });
            r.appendChild(a),
              n.appendChild(r),
              n.appendChild(i),
              e.appendChild(n),
              (e.__resize_triggers__ = {
                triggers: n,
                expand: r,
                expandChild: a,
                contract: i,
              }),
              Q(e),
              e.addEventListener('scroll', J, !0),
              (e.__resize_last__ = {
                width: e.offsetWidth,
                height: e.offsetHeight,
              });
          })(e),
          (e.__resize_rendered__ = U(e).rendered),
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
      e.__resize_listeners__.push(t), X++;
    }
    function V(e, t) {
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
              e.removeEventListener('scroll', J),
              e.removeChild(e.__resize_triggers__.triggers),
              (e.__resize_triggers__ = null)),
            (e.__resize_listeners__ = null);
        }
        !--X && F && F.parentNode.removeChild(F);
      }
    }
    function J() {
      var e, t;
      Q(this),
        this.__resize_raf__ &&
          ((e = this.__resize_raf__),
          B ||
            (B = (
              window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              function(e) {
                clearTimeout(e);
              }
            ).bind(window)),
          B(e)),
        (this.__resize_raf__ = ((t = () => {
          let e = (function(e) {
            let { width: t, height: n } = e.__resize_last__,
              { offsetWidth: r, offsetHeight: a } = e;
            return r !== t || a !== n ? { width: r, height: a } : null;
          })(this);
          e && ((this.__resize_last__ = e), K(this));
        }),
        q ||
          (q = (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(e) {
              return setTimeout(e, 16);
            }
          ).bind(window)),
        q(t)));
    }
    function K(e) {
      e &&
        e.__resize_listeners__ &&
        e.__resize_listeners__.forEach(t => {
          t.call(e);
        });
    }
    function Q(e) {
      let { expand: t, expandChild: n, contract: r } = e.__resize_triggers__,
        { scrollWidth: a, scrollHeight: i } = r,
        {
          offsetWidth: o,
          offsetHeight: s,
          scrollWidth: u,
          scrollHeight: c,
        } = t;
      (r.scrollLeft = a),
        (r.scrollTop = i),
        (n.style.width = o + 1 + 'px'),
        (n.style.height = s + 1 + 'px'),
        (t.scrollLeft = u),
        (t.scrollTop = c);
    }
    function Z(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var ee = 0,
      te = !1,
      ne = function(e) {
        return function(t) {
          (ee = t.target.scrollLeft), re(e);
        };
      },
      re = function(e) {
        var t, n, r, a, i;
        te ||
          requestAnimationFrame(
            ((n = (t = e).headerRef),
            (r = t.timeGutterRef),
            t.cornerRef,
            (a = t.timeIndicatorRef),
            t.stepLinesRef,
            t.wrapperRef,
            (i = t.timeIndicatorWidth),
            function() {
              (te = !1),
                (n.current.style.transform = 'translateX(-'.concat(ee, 'px)')),
                (r.current.style.transform = 'translateX('.concat(ee, 'px)')),
                (a.current.style.transform = 'translateX('.concat(ee, 'px)')),
                i && (a.current.style.width = ''.concat(i - ee, 'px'));
            })
          ),
          (te = !0);
      },
      ae = function(e) {
        var t = Object(r.useRef)(null),
          n = Object(r.useRef)(null),
          a = Object(r.useRef)(null),
          i = Object(r.useRef)(null),
          o = Object(r.useRef)(null),
          s = Object(r.useRef)(null),
          u = Z(Object(r.useState)(0), 2),
          c = u[0],
          d = u[1],
          f = ne({
            wrapperRef: t,
            headerRef: a,
            timeGutterRef: n,
            cornerRef: i,
            timeIndicatorRef: o,
            stepLinesRef: s,
            timeIndicatorWidth: e,
          });
        o.current &&
          t.current &&
          s.current &&
          n.current &&
          ((o.current.style.width = ''.concat(e, 'px')),
          (s.current.style.left = ''.concat(n.current.offsetWidth, 'px')),
          (s.current.style.width = ''.concat(e, 'px')));
        var p = W()(function() {
          d(l()(t, 'current.clientWidth'));
        }, 300);
        return (
          Object(r.useEffect)(function() {
            return (
              c || d(l()(t, 'current.clientWidth')),
              t.current && $(t.current, p),
              function() {
                return V(t.current, p);
              }
            );
          }),
          Object(r.useEffect)(function() {
            return (
              t.current.addEventListener('scroll', f, !1),
              function() {
                t.current.removeEventListener('scroll', f, !1);
              }
            );
          }),
          {
            wrapperRef: t,
            timeGutterRef: n,
            headerRef: a,
            cornerRef: i,
            timeIndicatorRef: o,
            stepLinesRef: s,
          }
        );
      },
      ie = n(9),
      oe = n.n(ie);
    function se(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var ue = function(e) {
        var t = Object(r.useRef)(new Map()).current,
          n = Object(r.useRef)(null),
          a = se(Object(r.useState)([]), 2),
          i = a[0],
          o = a[1],
          s = function() {
            var e = [];
            return (
              t.forEach(function(t, n) {
                e.push(t.offsetWidth);
              }),
              e
            );
          },
          u = function() {
            oe()(s(), i) || o(s());
          },
          c = W()(function() {
            u();
          }, 300);
        Object(r.useEffect)(function() {
          return (
            n.current && $(n.current, c),
            u(),
            function() {
              V(n.current, c);
            }
          );
        });
        return {
          TimeGridRef: n,
          elementWidths: i,
          assignRef: function(e) {
            return function(n) {
              return null === n ? t.delete() : t.set(e, n);
            };
          },
        };
      },
      ce = function(e) {
        var t = e.pixelsMoved,
          n = e.selectMinutes,
          r = e.selectMinutesHeight;
        if (0 === t) return 0;
        var a = (t / r) * n;
        return Math.round(a / n) * n;
      },
      le = function(e) {
        var t = e.originalStart,
          n = (e.originalEnd, e.minutesMoved);
        return t
          .clone()
          .add(n, 'minutes')
          .isSame(t.clone().subtract(1, 'days'), 'days');
      },
      de = function(e) {
        var t = e.originalStart,
          n = e.originalEnd,
          r = e.minutesMoved;
        return n
          .clone()
          .add(r, 'minutes')
          .isSame(t.clone().add(1, 'days'), 'days');
      },
      fe = function(e) {
        var t = e.pixelsMoved,
          n = e.originalStart,
          r = e.originalEnd,
          a = e.selectMinutes,
          i = e.selectMinutesHeight,
          o = ce({ pixelsMoved: t, selectMinutes: a, selectMinutesHeight: i });
        return (
          le({ originalStart: n, originalEnd: r, minutesMoved: o }) &&
            (o = -1 * n.clone().diff(n.clone().startOf('day'), 'minutes')),
          de({ originalStart: n, originalEnd: r, minutesMoved: o }) &&
            (o = n
              .clone()
              .endOf('day')
              .add(1, 'minutes')
              .diff(r, 'minutes')),
          o
        );
      },
      pe = function(e) {
        var t = e.pixelsMoved,
          n = e.selectMinutes,
          r = e.originalStart,
          a = e.originalEnd,
          i = e.selectMinutesHeight;
        return t
          ? i *
              (fe({
                originalStart: r,
                originalEnd: a,
                pixelsMoved: t,
                selectMinutes: n,
                selectMinutesHeight: i,
              }) /
                n)
          : 0;
      },
      ge = function(e) {
        var t = e.stepMinutes,
          n = e.selectMinutes;
        return (e.stepHeight || d[t]) / (t / n) + 1 / (60 / n);
      };
    function me(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        'function' === typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function(t) {
            he(e, t, n[t]);
          });
      }
      return e;
    }
    function he(e, t, n) {
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
        i = e.isDurationOnly,
        o = void 0 !== i && i,
        s = t.start.clone(),
        u = t.end.clone(),
        c = fe({
          originalStart: t.start,
          originalEnd: t.end,
          pixelsMoved: n.y,
          selectMinutes: a,
          selectMinutesHeight: r,
        });
      if (0 === c) {
        var l = {};
        return (
          t.paddingTopStart && (l.paddingTopStart = t.paddingTopStart),
          t.paddingBottomEnd && (l.paddingBottomEnd = t.paddingBottomEnd),
          me({ start: s, end: u }, l)
        );
      }
      o || s.add(c, 'minutes'), u.add(c, 'minutes');
      var d = {};
      return (
        o ||
          (t.paddingTopStart &&
            (d.paddingTopStart = t.paddingTopStart.clone().add(c, 'minutes'))),
        t.paddingBottomEnd &&
          (d.paddingBottomEnd = t.paddingBottomEnd.clone().add(c, 'minutes')),
        me({ start: s, end: u }, d)
      );
    };
    function ye(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var be = function(e) {
      var t = e.isSelectable,
        n = e.stepMinutes,
        a = e.selectMinutes,
        i = e.columnDate,
        o = e.stepHeight,
        s = ye(Object(r.useState)(!1), 2),
        u = s[0],
        c = s[1],
        l = ye(Object(r.useState)(0), 2),
        d = l[0],
        f = l[1],
        p = ye(Object(r.useState)(0), 2),
        g = p[0],
        m = p[1],
        h = ye(Object(r.useState)(0), 2),
        v = h[0],
        y = h[1],
        b = ye(Object(r.useState)(0), 2),
        _ = b[0],
        w = b[1],
        E = ye(Object(r.useState)(0), 2),
        S = E[0],
        x = E[1],
        O = ye(Object(r.useState)(null), 2),
        D = O[0],
        j = O[1],
        M = ye(Object(r.useState)(0), 2),
        R = M[0],
        T = M[1],
        C = ge({ stepMinutes: n, selectMinutes: a });
      return {
        selectRangeHandlers: {
          onMouseUp: function(e) {
            w(0), c(!1);
          },
          onMouseDown: function(e) {
            if (!t) return !1;
            c(!0), f(e.clientY);
            var r = e.currentTarget.getBoundingClientRect(),
              s = (e.clientY - r.top) / C,
              u = Math.round(s) * C;
            w(u), T(u);
            var l = I({
              stepHeight: o,
              stepMinutes: n,
              selectMinutes: a,
              columnDate: i,
            })(e);
            j(l);
          },
          onMouseMove: function(e) {
            if (!t || !u) return !1;
            if (e.clientY !== d) {
              var n = e.clientY - d,
                r = Math.abs(
                  pe({
                    originalStart: D,
                    originalEnd: D,
                    pixelsMoved: Math.abs(n),
                    selectMinutes: a,
                    selectMinutesHeight: C,
                  })
                ),
                i = fe({
                  originalStart: D,
                  originalEnd: D,
                  pixelsMoved: n,
                  selectMinutes: a,
                  selectMinutesHeight: C,
                }),
                o = {};
              e.clientY < d
                ? (w(R - r),
                  (o.start = D.clone().add(i, 'minutes')),
                  (o.end = D))
                : ((o.start = D), (o.end = D.clone().add(i, 'minutes'))),
                x(o),
                y(r),
                m(e.clientY);
            }
          },
          onContextMenu: function(e) {
            c(!1);
          },
        },
        isSelectRangeFinished: Math.abs(g) > C / 2,
        resetSelectRangeDrag: function() {
          c(!1), m(0), f(0), y(0);
        },
        selectRangeHeight: v,
        selectRangeTop: _,
        selectRange: S,
      };
    };
    function _e(e, t, n) {
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
    var we,
      Ee = o.a.oneOfType([
        o.a.instanceOf(Date),
        o.a.instanceOf(u.a),
        o.a.string,
      ]),
      Se = o.a.oneOf([0, 1, 2, 3, 4, 5, 6]),
      xe = o.a.instanceOf(u.a),
      Oe = (o.a.oneOf(Object.keys(T)),
      o.a.shape({
        id: o.a.oneOfType([o.a.number, o.a.string]).isRequired,
        group_id: o.a.oneOfType([o.a.number, o.a.string]),
        title: o.a.string,
        start: Ee.isRequired,
        end: Ee.isRequired,
      })),
      De = o.a.shape({
        id: o.a.oneOfType([o.a.number, o.a.string]).isRequired,
        group_id: o.a.oneOfType([o.a.number, o.a.string]),
        start: Ee.isRequired,
        end: Ee.isRequired,
      }),
      je = o.a.oneOf([5, 10, 15, 20, 30, 60]),
      Me = (o.a.shape({ id: o.a.number, name: o.a.string }),
      o.a.shape({
        current: o.a.instanceOf(
          'undefined' === typeof Element ? function() {} : Element
        ),
      })),
      Re = o.a.arrayOf(o.a.number),
      Te = (o.a.shape(
        ((we = o.a.func),
        Object.keys(T).reduce(function(e, t) {
          return (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              'function' === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function(t) {
                  _e(e, t, n[t]);
                });
            }
            return e;
          })({}, e, _e({}, t, we));
        }, {}))
      ),
      o.a.oneOf(Object.values({ day: 'day', time: 'time' })),
      o.a.oneOfType([
        o.a.arrayOf(
          o.a.arrayOf(
            o.a.shape({ isInRange: o.a.bool.isRequired, date: Ee.isRequired })
          )
        ),
        o.a.shape({
          firstDate: Ee.isRequired,
          lastDate: Ee.isRequired,
          totalColumns: o.a.number,
          allowPartialRows: o.a.bool,
          getExcludedDates: o.a.func,
          getIsInRange: o.a.func,
        }),
      ])),
      Ce = new Date();
    n(12);
    function Pe(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var Ne = a.a.forwardRef(function(e, t) {
      e.selectedDate, e.firstDay;
      var n = e.stepMinutes,
        i = e.stepHeight,
        o = (e.selectMinutes, e.onCurrentTimeChange),
        s = e.renderHeader,
        c = e.renderColumns,
        l = e.renderCorner,
        f = e.totalWidth,
        p = Pe(Object(r.useState)(u()()), 2),
        g = p[0],
        m = p[1],
        h = Pe(Object(r.useState)(15), 2),
        y = h[0],
        _ = h[1];
      Object(r.useEffect)(function() {
        var e = setTimeout(function() {
          var e = u()();
          m(e), o(new Date(e.format('YYYY-MM-DD HH:mm:ss')));
        }, 6e4);
        return function() {
          clearTimeout(e);
        };
      });
      var w = ae(f),
        E = w.wrapperRef,
        S = w.timeGutterRef,
        x = w.headerRef,
        O = w.cornerRef,
        D = w.timeIndicatorRef,
        j = w.stepLinesRef,
        M = 50;
      S.current && (M = S.current.offsetWidth - 1);
      var R = 60 / n;
      Object(r.useEffect)(
        function() {
          0 === y && _(v());
        },
        [y]
      );
      var T = C('time-grid__current-time-indicator'),
        P = Object(r.useMemo)(
          function() {
            return (i || d[n]) * R * 24 + (1 * R * 24 - 25);
          },
          [n]
        );
      return a.a.createElement(
        'div',
        { className: C('time-grid'), ref: t },
        a.a.createElement(
          'div',
          { className: C('time-grid__header-wrapper') },
          a.a.createElement(
            'div',
            {
              className: C('time-grid__corner'),
              style: { flex: '1 0 '.concat(M, 'px') },
              ref: O,
            },
            l({ currentTime: g })
          ),
          a.a.createElement(
            'div',
            {
              className: C('time-grid__header'),
              style: { marginRight: y - 1 },
              ref: x,
            },
            s()
          ),
          a.a.createElement(
            'div',
            {
              className: C('time-grid__scroll-gutter'),
              style: { width: y - 1 },
            },
            a.a.createElement('div', {
              className: C('time-grid__scroll-gutter-connector'),
            })
          )
        ),
        a.a.createElement(
          'div',
          { className: C('time-grid__grid-wrapper'), ref: E },
          a.a.createElement(
            'div',
            { className: C('time-grid__step-lines'), ref: j },
            (function() {
              for (
                var e = ''.concat((i || d[n]) + 1 / R, 'px'), t = [], r = 0;
                r < 24 * R;
                r += 1
              ) {
                var o = r % R;
                t.push(
                  a.a.createElement('div', {
                    className: C(
                      'time-grid__step-line',
                      o && 'time-grid__step-line-minor'
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
              className: C('time-grid__time-gutter'),
              ref: S,
              style: { height: P },
            },
            (function() {
              for (var e = R * (i || d[n]), t = [], r = 0; r < 24; r += 1)
                t.push(
                  a.a.createElement(
                    'div',
                    {
                      className: C('time-grid__time-label-wrapper'),
                      key: 'dayTime'.concat(r),
                      style: { height: ''.concat(e + 1, 'px') },
                    },
                    a.a.createElement(
                      'span',
                      {
                        className: C(
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
            { className: C('time-grid__grid') },
            a.a.createElement(
              'div',
              {
                className: T,
                style: {
                  top: ''.concat(
                    b({ stepMinutes: n, date: g, stepHeight: i }),
                    'px'
                  ),
                },
                ref: D,
              },
              a.a.createElement(
                'span',
                { className: ''.concat(T, '__time') },
                u()().format('h:mma')
              ),
              a.a.createElement('div', { className: ''.concat(T, '__line') })
            ),
            c({ currentTime: g, totalGridHeight: P })
          )
        )
      );
    });
    (Ne.displayName = 'TimeGrid'),
      (Ne.defaultProps = {
        renderCorner: function() {
          return null;
        },
        selectedDate: Ce,
        firstDay: 0,
        selectMinutes: 15,
        stepMinutes: 30,
        stepHeight: null,
        onCurrentTimeChange: function() {
          return null;
        },
      }),
      (Ne.propTypes = {
        firstDay: Se,
        onCurrentTimeChange: o.a.func,
        renderColumns: o.a.func.isRequired,
        renderCorner: o.a.func,
        renderHeader: o.a.func.isRequired,
        selectMinutes: je,
        selectedDate: Ee,
        stepHeight: o.a.number,
        stepMinutes: je,
        totalWidth: o.a.number.isRequired,
      });
    var ke = Ne;
    n(15);
    function He() {
      return (He =
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
    function Ie(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var ze = function(e) {
        var t = e.className,
          n = e.eventClass;
        return t ? ''.concat(n, ' ').concat(t) : n;
      },
      Ae = a.a.forwardRef(function(e, t) {
        var n = e.className,
          r = e.eventClass,
          i = e.event,
          o = e.isSelectable,
          s = e.onSelect,
          u = e.children,
          c = Ie(e, [
            'className',
            'eventClass',
            'event',
            'isSelectable',
            'onSelect',
            'children',
          ]);
        return a.a.createElement(
          'div',
          He({}, c, {
            className: ze({ className: n, eventClass: r }),
            role: 'button',
            ref: t,
            onClick: function(e) {
              if ((e.stopPropagation(), !o)) return !1;
              s({ e: e, event: N(i) });
            },
          }),
          u
        );
      });
    (Ae.displayName = 'EventWrapper'),
      (Ae.defaultProps = {
        className: '',
        isSelectable: !0,
        onSelect: function() {
          return null;
        },
        eventClass: C('time-grid__event'),
      }),
      (Ae.propTypes = {
        children: o.a.node.isRequired,
        className: o.a.string,
        event: o.a.object.isRequired,
        eventClass: o.a.string,
        isSelectable: o.a.bool,
        onSelect: o.a.func,
      });
    var We = Ae;
    function qe() {
      return (qe =
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
    function Be(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    function Le(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var Ye = C('time-grid__event-handle-center'),
      Ue = C('time-grid__event-handle'),
      Ge = function(e) {
        var t = e.children,
          n = (e.className, e.event),
          i = e.isSelectable,
          o = e.onSelect,
          s = Le(e, [
            'children',
            'className',
            'event',
            'isSelectable',
            'onSelect',
          ]),
          u = Object(r.useRef)(null),
          c = Object(r.useRef)(null),
          l = Be(Object(r.useState)(0), 2),
          d = l[0],
          f = l[1];
        return (
          Object(r.useEffect)(function() {
            if (null !== u.current && null !== c.current) {
              var e = u.current.clientHeight,
                t = c.current.clientHeight,
                n = ''.concat(e - t, 'px');
              d !== n && f(n);
            }
          }),
          a.a.createElement(
            We,
            qe({ ref: u, event: n, onSelect: o, isSelectable: i }, s),
            a.a.createElement('div', { className: Ye, style: { height: d } }),
            t
              ? t(n)
              : a.a.createElement(
                  'div',
                  { className: C('time-grid__event-details-wrapper') },
                  a.a.createElement(
                    'span',
                    { className: C('time-grid__event-title') },
                    n.title
                  ),
                  a.a.createElement(
                    'span',
                    { className: C('time-grid__event-time') },
                    z(n)
                  )
                ),
            a.a.createElement('div', {
              className: ''
                .concat(Ue, ' ')
                .concat(C('time-grid__event-handle-bottom')),
              ref: c,
            })
          )
        );
      };
    (Ge.defaultProps = { children: null, className: null, isSelectable: !0 }),
      (Ge.propTypes = {
        children: o.a.func,
        className: o.a.string,
        event: Oe.isRequired,
        isSelectable: o.a.bool,
        onSelect: o.a.func.isRequired,
      });
    var Xe = Ge,
      Fe = n(5);
    function $e(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var Ve = function(e) {
        var t = e.isDragging,
          n = e.wasDragged;
        return C(
          'time-grid__draggable-event',
          t && 'time-grid__dragging-event',
          n && 'time-grid__dragged-event'
        );
      },
      Je = function(e) {
        var t = e.event,
          n = e.stepMinutes,
          i = e.selectMinutes,
          o = e.columnWidths,
          s = e.columnIndex,
          u = e.onDrag,
          c = e.onDragEnd,
          l = e.children,
          d = e.stepHeight,
          f = e.getUpdatedDraggedEvent,
          p = $e(Object(r.useState)({ x: 0, y: 0 }), 2),
          g = p[0],
          m = p[1],
          h = $e(Object(r.useState)(0), 2),
          v = h[0],
          y = h[1],
          b = $e(Object(r.useState)(0), 2),
          _ = b[0],
          w = b[1],
          E = $e(Object(r.useState)(o[s]), 2),
          S = E[0],
          x = E[1],
          O = $e(Object(r.useState)(!1), 2),
          D = O[0],
          j = O[1],
          M = $e(Object(r.useState)(!1), 2),
          R = M[0],
          T = M[1],
          P = $e(Object(r.useState)(s), 2),
          k = P[0],
          H = P[1],
          I = ge({ stepHeight: d, stepMinutes: n, selectMinutes: i }),
          z = pe({
            originalStart: t.start,
            originalEnd: t.end,
            pixelsMoved: g.y,
            selectMinutes: i,
            selectMinutesHeight: I,
          }),
          A = k - s,
          W = function(e) {
            var t = e.direction,
              n = e.left;
            w(n), x(o[k + t]), H(k + t);
          },
          q = Object.assign({}, t),
          B = ve({
            event: t,
            deltaPosition: g,
            selectMinutesHeight: I,
            selectMinutes: i,
          });
        return (
          (q.start = B.start),
          (q.end = B.end),
          void 0 !== t.paddingTopStart &&
            (q.paddingTopStart = B.paddingTopStart),
          void 0 !== t.paddingBottomEnd &&
            (q.paddingBottomEnd = B.paddingBottomEnd),
          ((q = f({
            event: q,
            start: B.start,
            end: B.end,
            columnMoves: A,
          })).top = t.top + z),
          (function() {
            S !== o[k] && x(o[k]);
            var e = (function(e) {
              for (
                var t = e.columnMoves,
                  n = e.columnWidths,
                  r = e.columnIndex,
                  a = 0,
                  i = 1;
                i <= Math.abs(t);
                i += 1
              )
                t < 0 && (a += -1 * n[r - i]), t > 0 && (a += n[r + i - 1]);
              return a;
            })({ columnMoves: A, columnWidths: o, columnIndex: s });
            e !== _ && w(e);
            var t = e + S;
            v < e && 0 !== k && W({ direction: -1, left: e }),
              v > t && k !== o.length - 1 && W({ direction: 1, left: e });
          })(),
          a.a.createElement(
            r.Fragment,
            null,
            a.a.createElement(
              Fe.DraggableCore,
              {
                onDrag: function(e, t) {
                  var n = g.x,
                    r = g.y;
                  m({ x: n + t.deltaX, y: r + t.deltaY }),
                    y(t.x),
                    j(!0),
                    u(e, t);
                },
                handle: '.'.concat(Ye),
                onStop: function(e, t) {
                  if (!D) return !1;
                  m({ x: 0, y: 0 }),
                    setTimeout(function() {
                      return j(!1);
                    }),
                    T(!0),
                    c({ e: e, event: N(q) });
                },
              },
              l({
                draggedEvent: q,
                leftChange: _,
                currentColumnWidth: S,
                isDragging: D,
                wasDragged: R,
                isDndPlaceholder: !1,
                dndClassName: Ve({ isDragging: D, wasDragged: R }),
              })
            ),
            D &&
              a.a.createElement(
                'div',
                { className: C('time-grid__dragging-placeholder-event') },
                l({
                  draggedEvent: t,
                  isDragging: D,
                  topChange: 0,
                  isDndPlaceholder: !0,
                })
              )
          )
        );
      };
    (Je.defaultProps = {
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
      (Je.propTypes = {
        children: o.a.func.isRequired,
        columnIndex: o.a.number.isRequired,
        columnWidths: Re.isRequired,
        event: Oe.isRequired,
        getUpdatedDraggedEvent: o.a.func,
        isDraggable: o.a.bool,
        onDrag: o.a.func,
        onDragEnd: o.a.func.isRequired,
        selectMinutes: je,
        stepHeight: o.a.number,
        stepMinutes: je,
      });
    var Ke = Je;
    function Qe(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var Ze = function(e) {
      var t = e.children,
        n = e.event,
        i = e.onExtend,
        o = e.onExtendEnd,
        s = e.selectMinutes,
        u = e.stepMinutes,
        c = e.stepHeight,
        l = Qe(Object(r.useState)(!1), 2),
        d = l[0],
        f = l[1],
        p = Qe(Object(r.useState)({ x: 0, y: 0 }), 2),
        g = p[0],
        m = p[1],
        h = Object(r.useMemo)(
          function() {
            return ge({ stepMinutes: u, selectMinutes: s, stepHeight: c });
          },
          [u, s]
        ),
        v = ve({
          event: n,
          deltaPosition: g,
          selectMinutesHeight: h,
          selectMinutes: s,
          isDurationOnly: !0,
        }),
        y = pe({
          pixelsMoved: g.y,
          selectMinutes: s,
          originalStart: n.start,
          originalEnd: n.end,
          selectMinutesHeight: h,
        }),
        b = Object.assign({}, n);
      return (
        (b.start = v.start),
        (b.end = v.end),
        (b.height = n.height + y),
        void 0 !== v.paddingTopStart && (b.paddingTopStart = v.paddingTopStart),
        void 0 !== v.paddingBottomEnd &&
          (b.paddingBottomEnd = v.paddingBottomEnd),
        a.a.createElement(
          Fe.DraggableCore,
          {
            handle: '.'.concat(Ue),
            onDrag: function(e, t) {
              var n = g.x,
                r = g.y;
              m({ x: n + t.deltaX, y: r + t.deltaY }), i(N(b)), f(!0);
            },
            onStop: function(e, t) {
              if (!d) return !1;
              m({ x: 0, y: 0 }),
                setTimeout(function() {
                  return f(!1);
                }),
                o({ e: e, ui: t, event: b });
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
    (Ze.defaultProps = {
      onExtend: function() {
        return null;
      },
      selectMinutes: 15,
      stepMinutes: 30,
      stepHeight: null,
    }),
      (Ze.propTypes = {
        children: o.a.func.isRequired,
        event: Oe.isRequired,
        onExtend: o.a.func,
        onExtendEnd: o.a.func.isRequired,
        selectMinutes: je,
        stepHeight: o.a.number,
        stepMinutes: je,
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
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var rt = a.a.forwardRef(function(e, t) {
      var n = e.columnId,
        i = e.columnIndex,
        o = e.columnWidths,
        s = e.currentTime,
        c = e.date,
        d = e.events,
        f = e.gridHeight,
        p = e.stepMinutes,
        g = e.onDragEnd,
        m = e.onExtendEnd,
        h = e.onSelectEvent,
        v = e.onSelectSlot,
        y = e.onSelectRangeEnd,
        _ = e.selectMinutes,
        w = e.stepDetails,
        E = e.renderEvent,
        S = e.getUpdatedDraggedEvent,
        x = e.minWidth,
        O = e.minWidthEmpty,
        D = e.renderStepDetail,
        j = e.renderSelectSlotIndicator,
        M = e.renderSelectRange,
        R = e.renderEventPaddingTop,
        T = e.renderEventPaddingBottom,
        P = e.stepHeight,
        N = nt(Object(r.useState)(!0), 2),
        k = N[0],
        A = N[1],
        W = nt(Object(r.useState)(null), 2),
        q = W[0],
        B = W[1],
        L = be({
          isSelectable: k,
          stepMinutes: p,
          selectMinutes: _,
          columnDate: c,
          stepHeight: P,
        }),
        Y = L.selectRangeHandlers,
        U = L.isSelectRangeFinished,
        G = L.resetSelectRangeDrag,
        X = L.selectRangeHeight,
        F = L.selectRangeTop,
        $ = L.selectRange,
        V = Object.keys(d).length,
        J = 100 / V - 1,
        K = C('time-grid__current-time-indicator');
      return a.a.createElement(
        'div',
        tt(
          {
            className: ''.concat(C('time-grid__grid-column')).concat(H(c)),
            key: 'weekView'.concat(c.day()),
            style: { height: f, minWidth: V * x || O },
            onClick: function(e) {
              if (U)
                return (
                  G(),
                  y({
                    e: e,
                    start: new Date($.start),
                    end: new Date($.end),
                    column: n,
                  }),
                  !1
                );
              if (!k) return !1;
              var t = I({
                stepHeight: P,
                stepMinutes: p,
                selectMinutes: _,
                columnDate: c,
              })(e);
              B(t),
                v({ e: e, date: new Date(t), column: n }),
                setTimeout(function() {
                  return B(null);
                }, 300),
                G();
            },
          },
          Y,
          { ref: t }
        ),
        c.isSame(u()(), 'day') &&
          s &&
          a.a.createElement(
            'div',
            {
              className: K,
              style: {
                top: ''.concat(
                  b({ stepMinutes: p, date: s, stepHeight: P }),
                  'px'
                ),
              },
            },
            a.a.createElement('div', {
              className: ''.concat(K, '__line-today'),
            })
          ),
        q &&
          a.a.createElement(
            'div',
            {
              className: C('time-grid__select-slot-indicator'),
              style: { top: ''.concat(b({ stepMinutes: p, date: q }), 'px') },
            },
            j
              ? j({
                  time: new Date(q.format('YYYY-MM-DD HH:mm:ss')),
                  column: n,
                })
              : a.a.createElement(
                  'div',
                  { className: C('time-grid__select-slot-indicator-time') },
                  q.format('h:mma')
                )
          ),
        0 !== X &&
          k &&
          a.a.createElement(
            'div',
            {
              className: C('time-grid__select-range'),
              style: { height: X, top: F },
            },
            M ? M({ start: new Date($.start), end: new Date($.end) }) : z($)
          ),
        Object.keys(d).map(function(e) {
          return l()(d, e, []).map(function(t) {
            return a.a.createElement(
              et,
              {
                key: t.id,
                event: t,
                stepHeight: P,
                stepMinutes: p,
                selectMinutes: _,
                onExtend: function() {
                  G(), A(!1);
                },
                onExtendEnd: function(e) {
                  setTimeout(function() {
                    return A(!0);
                  }),
                    m(e);
                },
              },
              function(n) {
                var r = n.isExtending,
                  s = n.extendedEvent;
                n.heightChange;
                return a.a.createElement(
                  Ke,
                  {
                    event: s,
                    columnIndex: i,
                    columnWidths: o,
                    stepHeight: P,
                    stepMinutes: p,
                    selectMinutes: _,
                    onDrag: function() {
                      G(), A(!1);
                    },
                    onDragEnd: function(e) {
                      g(e),
                        setTimeout(function() {
                          return A(!0);
                        });
                    },
                    getUpdatedDraggedEvent: S,
                  },
                  function(n) {
                    var i = n.draggedEvent,
                      o = n.isDragging,
                      s = n.leftChange,
                      u = n.currentColumnWidth,
                      c = n.isDndPlaceholder,
                      l = n.dndClassName,
                      d = !c && (o || r);
                    return a.a.createElement(
                      'div',
                      {
                        className: ''
                          .concat(l, ' ')
                          .concat(C('time-grid__event-wrapper')),
                        style: {
                          top: i.top - t.paddingTopHeight,
                          width: d ? ''.concat(u, 'px') : ''.concat(J, '%'),
                          left: d
                            ? ''.concat(s, 'px')
                            : ''.concat(J * (e - 1), '%'),
                        },
                      },
                      t.paddingTopStart &&
                        !c &&
                        a.a.createElement(
                          'div',
                          {
                            className: C(
                              'time-grid__event-padding',
                              'time-grid__event-padding-top'
                            ),
                            style: { height: t.paddingTopHeight },
                          },
                          R(t)
                        ),
                      a.a.createElement(
                        Xe,
                        {
                          event: i,
                          style: { height: ''.concat(i.height, 'px') },
                          onSelect: h,
                          isSelectable: !o && !r,
                        },
                        E
                      ),
                      t.paddingBottomEnd &&
                        !c &&
                        a.a.createElement(
                          'div',
                          {
                            className: C(
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
              className: C('time-grid__step-detail-wrapper'),
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
    (rt.displayName = 'Column'),
      (rt.defaultProps = {
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
      (rt.propTypes = {
        columnId: o.a.oneOfType([o.a.instanceOf(Date), o.a.number]).isRequired,
        columnIndex: o.a.number.isRequired,
        columnWidths: Re.isRequired,
        currentTime: xe,
        date: xe,
        events: o.a.object,
        getUpdatedDraggedEvent: o.a.func,
        gridHeight: o.a.number.isRequired,
        minWidth: o.a.number,
        minWidthEmpty: o.a.number,
        onDragEnd: o.a.func,
        onExtendEnd: o.a.func,
        onSelectEvent: o.a.func,
        onSelectRangeEnd: o.a.func,
        onSelectSlot: o.a.func,
        renderEvent: o.a.func,
        renderEventPaddingBottom: o.a.func,
        renderEventPaddingTop: o.a.func,
        renderSelectRange: o.a.func,
        renderSelectSlotIndicator: o.a.func,
        renderStepDetail: o.a.func,
        selectMinutes: je,
        stepDetails: o.a.array,
        stepHeight: o.a.number,
        stepMinutes: je,
      });
    var at = rt,
      it = function(e) {
        var t = e.children,
          n = e.totalEventColumns,
          r = (e.totalColumns, e.date),
          i = e.minWidth,
          o = e.minWidthEmpty;
        return a.a.createElement(
          'div',
          {
            className: ''.concat(C('time-grid__header-column')).concat(H(r)),
            style: { minWidth: ''.concat(n * i || o, 'px') },
          },
          a.a.createElement(
            'div',
            { className: ''.concat(C('time-grid__header-column-container')) },
            t
          )
        );
      };
    (it.defaultProps = { minWidth: 190, minWidthEmpty: 100 }),
      (it.propTypes = {
        children: o.a.node.isRequired,
        date: xe.isRequired,
        minWidth: o.a.number,
        minWidthEmpty: o.a.number,
        totalColumns: o.a.number.isRequired,
        totalEventColumns: o.a.number.isRequired,
      });
    var ot = it;
    function st(e, t, n) {
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
    var ut = function(e) {
        var t = e.events,
          n = e.groupId,
          r = e.selectedDate;
        return l()(t, ''.concat(n, '.').concat(r.format('YYYY-MM-DD')), !1);
      },
      ct = function(e) {
        var t = e.selectedDate,
          n = e.visibleEventGroups,
          r = e.renderHeader,
          i = e.firstDay,
          o = e.stepMinutes,
          s = e.minWidthColumn,
          u = e.minWidthColumnEmpty,
          c = e.onDragEnd,
          l = e.onExtendEnd,
          d = e.onCurrentTimeChange,
          f = e.onSelectEvent,
          h = e.onSelectSlot,
          v = e.onSelectRangeEnd,
          y = e.selectMinutes,
          b = e.stepDetails,
          _ = e.events,
          w = e.renderEvent,
          E = e.renderCorner,
          S = e.renderStepDetail,
          x = e.renderSelectSlotIndicator,
          O = e.renderSelectRange,
          D = e.renderEventPaddingTop,
          j = e.renderEventPaddingBottom,
          M = e.stepHeight,
          R = ue(),
          T = R.TimeGridRef,
          C = R.assignRef,
          P = R.elementWidths,
          N = k({
            events: _,
            stepMinutes: o,
            stepHeight: M,
            stepDetails: b,
            visibleEventGroups: n,
          }),
          H = N.mungedEvents,
          I = N.mungedStepDetails,
          z = (function(e) {
            var t = Object.assign({}, e);
            return Object.keys(t).reduce(function(e, n) {
              return (
                Object.keys(t[n]).forEach(function(r) {
                  e = p({}, e, g({}, n, p({}, e[n], g({}, r, m(t[n][r])))));
                }),
                e
              );
            }, {});
          })(H),
          A = n;
        return (
          n ||
            (A = Object.keys(z).map(function(e) {
              return Number(e);
            })),
          a.a.createElement(ke, {
            ref: T,
            selectedDate: t,
            firstDay: i,
            totalWidth: P.reduce(function(e, t) {
              return e + t;
            }, 0),
            onCurrentTimeChange: d,
            stepMinutes: o,
            selectMinutes: y,
            stepHeight: M,
            renderCorner: E,
            renderHeader: function() {
              var e = A.length;
              return A.map(function(n) {
                var i = ut({ events: z, groupId: n, selectedDate: t }),
                  o = Object.keys(i).length;
                return a.a.createElement(
                  ot,
                  {
                    key: 'calendarHeader'.concat(n),
                    totalEventColumns: o,
                    totalColumns: e,
                    date: t,
                    minWidth: s,
                    minWidthEmpty: u,
                  },
                  a.a.createElement(
                    'h2',
                    null,
                    r && r({ groupId: n, events: i })
                  )
                );
              });
            },
            renderColumns: function(e) {
              var n = e.currentTime,
                r = e.totalGridHeight,
                i = function(e) {
                  var t = e.columnMoves,
                    n = e.columnIndex;
                  return A[n + t];
                };
              return A.map(function(e, s) {
                var u = ut({ events: z, groupId: e, selectedDate: t }) || {},
                  d = ut({ events: I, groupId: e, selectedDate: t }) || [];
                return a.a.createElement(at, {
                  ref: C(e),
                  key: 'groupColumn'.concat(e),
                  events: u,
                  stepDetails: d,
                  gridHeight: r,
                  stepHeight: M,
                  date: t,
                  columnId: e,
                  columnWidths: P,
                  columnIndex: s,
                  onDragEnd: c,
                  onExtendEnd: l,
                  onSelectEvent: f,
                  onSelectRangeEnd: v,
                  onSelectSlot: h,
                  stepMinutes: o,
                  selectMinutes: y,
                  currentTime: n,
                  renderEvent: w,
                  renderStepDetail: S,
                  renderSelectSlotIndicator: x,
                  renderSelectRange: O,
                  renderEventPaddingTop: D,
                  renderEventPaddingBottom: j,
                  getUpdatedDraggedEvent: function(e) {
                    var t = e.event,
                      n = e.columnMoves;
                    return (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                        'function' === typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(
                                n,
                                e
                              ).enumerable;
                            })
                          )),
                          r.forEach(function(t) {
                            st(e, t, n[t]);
                          });
                      }
                      return e;
                    })({}, t, {
                      group_id: i({ columnMoves: n, columnIndex: s }),
                    });
                  },
                });
              });
            },
          })
        );
      };
    (ct.defaultProps = {
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
      (ct.propTypes = {
        events: o.a.arrayOf(Oe),
        firstDay: Se,
        minWidthColumn: o.a.number,
        minWidthColumnEmpty: o.a.number,
        onCurrentTimeChange: o.a.func,
        onDragEnd: o.a.func,
        onExtendEnd: o.a.func,
        onSelectEvent: o.a.func.isRequired,
        onSelectRangeEnd: o.a.func,
        onSelectSlot: o.a.func.isRequired,
        renderCorner: o.a.func,
        renderEvent: o.a.func,
        renderEventPaddingBottom: o.a.func,
        renderEventPaddingTop: o.a.func,
        renderHeader: o.a.func.isRequired,
        renderSelectRange: o.a.func,
        renderSelectSlotIndicator: o.a.func,
        renderStepDetail: o.a.func,
        selectMinutes: je,
        selectedDate: xe,
        stepDetails: o.a.arrayOf(De),
        stepHeight: o.a.number,
        stepMinutes: je,
        visibleEventGroups: o.a.arrayOf(o.a.number),
      });
    var lt = ct;
    function dt(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    var ft = function() {
      var e = Object(r.useRef)(null),
        t = Object(r.useRef)(null),
        n = Object(r.useRef)(null),
        a = Object(r.useRef)(null),
        i = dt(Object(r.useState)(0), 2),
        o = i[0],
        s = i[1],
        u = dt(Object(r.useState)(0), 2),
        c = u[0],
        d = u[1],
        f = dt(Object(r.useState)(0), 2),
        p = f[0],
        g = f[1],
        m = dt(Object(r.useState)(0), 2),
        h = m[0],
        v = m[1],
        y = dt(Object(r.useState)(0), 2),
        b = y[0],
        _ = y[1];
      if (t.current) {
        var w = t.current.offsetHeight;
        w !== p && g(w);
      }
      var E = W()(function() {
        s(l()(e, 'current.offsetHeight', 0)),
          d(l()(e, 'current.offsetWidth', 0));
      }, 300);
      return (
        Object(r.useEffect)(function() {
          return (
            e.current &&
              (s(e.current.offsetHeight),
              d(a.current.offsetWidth),
              $(e.current, E)),
            function() {
              if (e.current) return V(e.current, E);
            }
          );
        }),
        Object(r.useEffect)(
          function() {
            p > 0 && _(Math.floor((o - h) / p) - 1);
          },
          [o]
        ),
        Object(r.useEffect)(
          function() {
            var e = l()(n, 'current.offsetTop', 0);
            v(e);
          },
          [l()(n, 'current.offsetTop', 0)]
        ),
        {
          rowRef: e,
          eventRef: t,
          eventHeight: p,
          eventWrapperRef: n,
          eventWrapperMargin: h,
          cellRef: a,
          cellDimensions: { width: c, height: o },
          totalEventsToShow: b,
        }
      );
    };
    function pt(e) {
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
    var gt = function(e) {
      for (
        var t = e.firstDate,
          n = e.lastDate,
          r = e.totalColumns,
          a = void 0 === r ? 7 : r,
          i = e.allowPartialRows,
          o = void 0 !== i && i,
          s = e.getExcludedDates,
          u =
            void 0 === s
              ? function() {
                  return !1;
                }
              : s,
          c = e.getIsInRange,
          l =
            void 0 === c
              ? function() {
                  return !0;
                }
              : c,
          d = n.diff(t, 'days'),
          f = [],
          p = 0,
          g = 0,
          m = 0;
        m <= d;
        m += 1
      ) {
        f[p] || (f[p] = []);
        var h = t.clone().add(m, 'days');
        u(h) ||
          ((f[p] = [].concat(pt(f[p]), [{ date: h, isInRange: l(h) }])),
          g + 1 === a ? ((p += 1), (g = 0)) : (g += 1));
      }
      return o || (f[f.length - 1].length < a && (f.length = f.length - 1)), f;
    };
    function mt(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (a) throw i;
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
    function ht(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        'function' === typeof Object.getOwnPropertySymbols &&
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
    }
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
    var yt = function(e, t) {
        switch (t.type) {
          case 'moveUp':
            return ht({}, e, {
              rowMoves: e.rowMoves - 1,
              vertChange: e.vertChange - t.vertChange,
            });
          case 'moveRight':
            return ht({}, e, {
              columnMoves: e.columnMoves + 1,
              horizChange: e.horizChange + t.horizChange,
            });
          case 'moveDown':
            return ht({}, e, {
              rowMoves: e.rowMoves + 1,
              vertChange: e.vertChange + t.vertChange,
            });
          case 'moveLeft':
            return ht({}, e, {
              columnMoves: e.columnMoves - 1,
              horizChange: e.horizChange - t.horizChange,
            });
          case 'startDragging':
            var n = e.vertChange;
            return ht({}, e, {
              isDragging: !0,
              position: t.position,
              vertChange: 0 === n ? t.initialVertChange : n,
            });
          case 'stopDragging':
            return ht({}, e, {
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
      bt = {
        rowMoves: 0,
        columnMoves: 0,
        isDragging: !1,
        wasDragged: !1,
        position: { x: 0, y: 0 },
        vertChange: 0,
        horizChange: 0,
      },
      _t = function(e) {
        var t = e.children,
          n = e.cellDimensions,
          i = e.event,
          o = e.topEventOffset,
          s = e.onDrag,
          u = e.onDragEnd,
          c = e.columnMovesPerRowChange,
          l = mt(Object(r.useReducer)(yt, bt), 2),
          d = l[0],
          f = l[1],
          p = n.width,
          g = n.height,
          m = d.position,
          h = m.x,
          v = m.y,
          y = d.columnMoves,
          b = d.rowMoves,
          _ = d.isDragging,
          w = d.vertChange,
          E = d.horizChange;
        v < g * b && f({ type: 'moveUp', vertChange: g }),
          h > p * (y + 1) && f({ type: 'moveRight', horizChange: p + 1 * y }),
          v > g * (b + 1) && f({ type: 'moveDown', vertChange: g }),
          h < p * y && f({ type: 'moveLeft', horizChange: p + 1 });
        var S = (function(e) {
          var t = e.event,
            n = e.columnMoves + e.rowMoves * e.columnMovesPerRowChange,
            r = t.start.clone().add(n, 'days'),
            a = t.end.clone().add(n, 'days'),
            i = {};
          return (
            t.paddingTopStart &&
              (i.paddingTopStart = t.paddingTopStart.clone().add(n, 'days')),
            t.paddingBottomEnd &&
              (i.paddingBottomEnd = t.paddingBottomEnd.clone().add(n, 'days')),
            ht({}, t, { start: r, end: a }, i)
          );
        })({
          event: i,
          columnMoves: y,
          rowMoves: b,
          columnMovesPerRowChange: c,
        });
        return a.a.createElement(
          Fe.DraggableCore,
          {
            onDrag: function(e, t) {
              f({
                type: 'startDragging',
                position: { x: t.x, y: t.y },
                initialVertChange: o,
              }),
                s(e, t);
            },
            onStop: function(e, t) {
              if (!_) return !1;
              u({ e: e, event: N(S) }),
                setTimeout(function() {
                  return f({ type: 'stopDragging' });
                });
            },
          },
          t({ draggedEvent: S, vertChange: w, horizChange: E })
        );
      };
    (_t.defaultProps = {
      onDrag: function() {
        return null;
      },
      onDragEnd: function() {
        return null;
      },
    }),
      (_t.propTypes = {
        cellDimensions: o.a.shape({
          width: o.a.number.isRequired,
          height: o.a.number.isRequired,
        }).isRequired,
        children: o.a.func.isRequired,
        columnMovesPerRowChange: o.a.number.isRequired,
        event: Oe.isRequired,
        onDrag: o.a.func,
        onDragEnd: o.a.func,
        topEventOffset: o.a.number.isRequired,
      });
    var wt = _t;
    n(18);
    function Et() {
      return (Et =
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
    function St(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var xt = a.a.forwardRef(function(e, t) {
      var n,
        r,
        i = e.event,
        o = e.onSelect,
        s = e.children,
        u = St(e, ['event', 'onSelect', 'children']);
      return a.a.createElement(
        We,
        Et(
          { event: i, onSelect: o, eventClass: C('day-grid__event'), ref: t },
          u
        ),
        s
          ? s(i)
          : a.a.createElement(
              'div',
              { className: C('day-grid__event-details') },
              a.a.createElement(
                'div',
                { className: C('day-grid__event-time') },
                ((n = i.start),
                ':00' === (r = ':'.concat(n.format('mm'))) && (r = ''),
                ''
                  .concat(n.format('h'))
                  .concat(r)
                  .concat(n.format('a')))
              ),
              a.a.createElement(
                'div',
                { className: C('day-grid__event-title') },
                i.title
              )
            )
      );
    });
    (xt.defaultProps = {
      onSelect: function() {
        return null;
      },
      children: null,
    }),
      (xt.propTypes = {
        children: o.a.func,
        event: Oe.isRequired,
        onSelect: o.a.func,
      });
    var Ot = xt,
      Dt = a.a.forwardRef(function(e, t) {
        var n = e.events,
          i = e.eventHeight,
          o = e.cellDimensions,
          s = e.dayDetails,
          u = e.onDragEnd,
          c = e.onSelectSlot,
          l = e.onSelectMonthDate,
          d = e.renderCell,
          f = e.renderEvent,
          p = e.eventRef,
          g = e.eventWrapperRef,
          m = e.onSelectEvent,
          h = e.onSelectMoreEvents,
          v = e.totalEventsToShow,
          y = e.totalColumns;
        return a.a.createElement(
          'div',
          {
            className: C(
              'day-grid__cell',
              !s.isInRange && 'day-grid__cell--not-in-range'
            ),
            role: 'button',
            ref: t,
            onClick: function(e) {
              return c({
                e: e,
                date: new Date(s.date),
                isInRange: s.isInRange,
              });
            },
          },
          a.a.createElement(
            'div',
            {
              className: C('day-grid__date-wrapper'),
              onClick: function(e) {
                l &&
                  (e.stopPropagation(),
                  l({ e: e, date: new Date(s.date), isInrange: s.isInRange }));
              },
            },
            a.a.createElement(
              'div',
              {
                className: C(
                  'day-grid__date',
                  !s.isInRange && 'day-grid__date--not-in-range'
                ),
              },
              s.date.date()
            )
          ),
          d
            ? d({
                date: new Date(s.date.startOf('day')),
                isInRange: s.isInRange,
                events: n,
              })
            : a.a.createElement(
                'div',
                {
                  className: C('day-grid__event-wrapper'),
                  ref: g,
                  style: { opacity: v ? 1 : 0 },
                },
                n.length > 0 &&
                  s.isInRange &&
                  a.a.createElement(
                    r.Fragment,
                    null,
                    (function(e) {
                      var t = 0;
                      return e.map(function(e) {
                        return (
                          (t += 1),
                          !v || v >= t
                            ? a.a.createElement(
                                wt,
                                {
                                  cellDimensions: o,
                                  event: e,
                                  topEventOffset: (t - 1) * i * -1,
                                  key: e.id,
                                  columnMovesPerRowChange: y,
                                  onDragEnd: u,
                                },
                                function(e) {
                                  var t = e.draggedEvent,
                                    n = e.vertChange,
                                    r = e.horizChange;
                                  return a.a.createElement(
                                    Ot,
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
                    v < n.length &&
                      v > 0 &&
                      a.a.createElement(
                        'div',
                        {
                          className: C('day-grid__more-events'),
                          onClick: function(e) {
                            var t;
                            e.stopPropagation(),
                              h({
                                e: e,
                                events: n.map(function(e) {
                                  return N(e);
                                }),
                                eventsMore: ((t = n.length - v),
                                n.filter(function(e, r) {
                                  return r >= n.length - t;
                                })).map(function(e) {
                                  return N(e);
                                }),
                                date: new Date(s.date),
                              });
                          },
                        },
                        n.length - v,
                        ' more'
                      )
                  )
              )
        );
      });
    (Dt.displayName = 'DayCell'),
      (Dt.defaultProps = {
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
      (Dt.propTypes = {
        cellDimensions: o.a.shape({
          width: o.a.number.isRequired,
          height: o.a.number.isRequired,
        }).isRequired,
        dayDetails: o.a.shape({
          date: xe.isRequired,
          isInRange: o.a.bool.isRequired,
        }).isRequired,
        eventHeight: o.a.number.isRequired,
        eventRef: Me.isRequired,
        eventWrapperRef: Me.isRequired,
        events: o.a.arrayOf(Oe),
        onDragEnd: o.a.func,
        onSelectEvent: o.a.func,
        onSelectMonthDate: o.a.func,
        onSelectMoreEvents: o.a.func,
        onSelectSlot: o.a.func,
        renderCell: o.a.func,
        renderEvent: o.a.func,
        totalColumns: o.a.number.isRequired,
        totalEventsToShow: o.a.number.isRequired,
      });
    var jt = Dt,
      Mt = (n(20),
      function(e) {
        var t = e.events,
          n = e.grid,
          r = e.renderCell,
          i = e.renderHeader,
          o = e.onDragEnd,
          s = e.onSelectSlot,
          u = e.onSelectDate,
          c = e.onSelectMoreEvents,
          d = e.onSelectEvent,
          f = k({ events: t }).eventsWithSelectedEventGroups,
          p = ft(),
          g = p.rowRef,
          m = p.eventRef,
          h = p.cellRef,
          v = p.eventWrapperRef,
          y = p.eventHeight,
          b = p.totalEventsToShow,
          _ = p.cellDimensions,
          w = n;
        Array.isArray(w) || (w = gt(n));
        var E = 0,
          S = 0;
        return a.a.createElement(
          'div',
          { className: C('day-grid') },
          a.a.createElement(
            'div',
            { className: C('day-grid__header') },
            l()(w, 0, []).map(function(e) {
              var t = e.date.format('dddd');
              return a.a.createElement(
                'div',
                { className: C('day-grid__column-header'), key: t },
                i ? i({ date: e.date }) : t
              );
            })
          ),
          a.a.createElement(
            'div',
            { className: C('day-grid__days') },
            w
              ? w.map(function(e) {
                  S += 1;
                  var t = e.length;
                  return a.a.createElement(
                    'div',
                    {
                      className: C('day-grid__row'),
                      ref: g,
                      key: 'monthColumn'.concat(S),
                    },
                    e.map(function(e) {
                      E += 1;
                      var n = l()(f, e.date.format('YYYY-MM-DD'), []);
                      return a.a.createElement(jt, {
                        totalColumns: t,
                        events: n,
                        ref: h,
                        eventHeight: y,
                        cellDimensions: _,
                        key: 'dayCells'.concat(E),
                        dayDetails: e,
                        renderCell: r,
                        onDragEnd: o,
                        onSelectSlot: s,
                        onSelectDate: u,
                        onSelectMoreEvents: c,
                        totalEventsToShow: b,
                        eventRef: m,
                        eventWrapperRef: v,
                        onSelectEvent: d,
                      });
                    })
                  );
                })
              : null
          )
        );
      });
    (Mt.defaultProps = {
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
      (Mt.propTypes = {
        events: o.a.arrayOf(Oe),
        grid: Te.isRequired,
        onDragEnd: o.a.func,
        onSelectDate: o.a.func,
        onSelectEvent: o.a.func,
        onSelectMoreEvents: o.a.func,
        onSelectSlot: o.a.func,
        renderCell: o.a.func,
        renderHeader: o.a.func,
      });
    var Rt = Mt;
    n.d(t, 'CalendarGroups', function() {
      return lt;
    }),
      n.d(t, 'CalendarMonth', function() {
        return lt;
      }),
      n.d(t, 'CalendarMonthHeatmap', function() {
        return lt;
      }),
      n.d(t, 'CalendarWeek', function() {
        return lt;
      }),
      n.d(t, 'DateList', function() {
        return lt;
      }),
      n.d(t, 'Datepicker', function() {
        return lt;
      }),
      n.d(t, 'DayGrid', function() {
        return Rt;
      }),
      n.d(t, 'TimeGrid', function() {
        return ke;
      });
    t.default = lt;
  },
]);
