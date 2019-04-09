!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('prop-types'),
        require('react'),
        require('react-dom')
      ))
    : 'function' == typeof define && define.amd
    ? define(['prop-types', 'react', 'react-dom'], t)
    : 'object' == typeof exports
    ? (exports['acuity-calendar'] = t(
        require('prop-types'),
        require('react'),
        require('react-dom')
      ))
    : (e['acuity-calendar'] = t(e.PropTypes, e.React, e.ReactDOM));
})(window, function(e, t, n) {
  return (function(e) {
    var t = {};
    function n(a) {
      if (t[a]) return t[a].exports;
      var r = (t[a] = { i: a, l: !1, exports: {} });
      return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
        var a = Object.create(null);
        if (
          (n.r(a),
          Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              a,
              r,
              function(t) {
                return e[t];
              }.bind(null, r)
            );
        return a;
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
      n((n.s = 153))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t, n) {
      (function(e) {
        e.exports = (function() {
          'use strict';
          var t, a;
          function r() {
            return t.apply(null, arguments);
          }
          function s(e) {
            return (
              e instanceof Array ||
              '[object Array]' === Object.prototype.toString.call(e)
            );
          }
          function i(e) {
            return (
              null != e &&
              '[object Object]' === Object.prototype.toString.call(e)
            );
          }
          function o(e) {
            return void 0 === e;
          }
          function d(e) {
            return (
              'number' == typeof e ||
              '[object Number]' === Object.prototype.toString.call(e)
            );
          }
          function u(e) {
            return (
              e instanceof Date ||
              '[object Date]' === Object.prototype.toString.call(e)
            );
          }
          function l(e, t) {
            var n,
              a = [];
            for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
            return a;
          }
          function _(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function c(e, t) {
            for (var n in t) _(t, n) && (e[n] = t[n]);
            return (
              _(t, 'toString') && (e.toString = t.toString),
              _(t, 'valueOf') && (e.valueOf = t.valueOf),
              e
            );
          }
          function m(e, t, n, a) {
            return jt(e, t, n, a, !0).utc();
          }
          function h(e) {
            return (
              null == e._pf &&
                (e._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              e._pf
            );
          }
          function f(e) {
            if (null == e._isValid) {
              var t = h(e),
                n = a.call(t.parsedDateParts, function(e) {
                  return null != e;
                }),
                r =
                  !isNaN(e._d.getTime()) &&
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && n));
              if (
                (e._strict &&
                  (r =
                    r &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
              )
                return r;
              e._isValid = r;
            }
            return e._isValid;
          }
          function p(e) {
            var t = m(NaN);
            return null != e ? c(h(t), e) : (h(t).userInvalidated = !0), t;
          }
          a = Array.prototype.some
            ? Array.prototype.some
            : function(e) {
                for (
                  var t = Object(this), n = t.length >>> 0, a = 0;
                  a < n;
                  a++
                )
                  if (a in t && e.call(this, t[a], a, t)) return !0;
                return !1;
              };
          var y = (r.momentProperties = []);
          function M(e, t) {
            var n, a, r;
            if (
              (o(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              o(t._i) || (e._i = t._i),
              o(t._f) || (e._f = t._f),
              o(t._l) || (e._l = t._l),
              o(t._strict) || (e._strict = t._strict),
              o(t._tzm) || (e._tzm = t._tzm),
              o(t._isUTC) || (e._isUTC = t._isUTC),
              o(t._offset) || (e._offset = t._offset),
              o(t._pf) || (e._pf = h(t)),
              o(t._locale) || (e._locale = t._locale),
              y.length > 0)
            )
              for (n = 0; n < y.length; n++)
                (a = y[n]), o((r = t[a])) || (e[a] = r);
            return e;
          }
          var g = !1;
          function L(e) {
            M(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === g && ((g = !0), r.updateOffset(this), (g = !1));
          }
          function Y(e) {
            return e instanceof L || (null != e && null != e._isAMomentObject);
          }
          function v(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function D(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = v(t)), n;
          }
          function k(e, t, n) {
            var a,
              r = Math.min(e.length, t.length),
              s = Math.abs(e.length - t.length),
              i = 0;
            for (a = 0; a < r; a++)
              ((n && e[a] !== t[a]) || (!n && D(e[a]) !== D(t[a]))) && i++;
            return i + s;
          }
          function b(e) {
            !1 === r.suppressDeprecationWarnings &&
              'undefined' != typeof console &&
              console.warn &&
              console.warn('Deprecation warning: ' + e);
          }
          function w(e, t) {
            var n = !0;
            return c(function() {
              if (
                (null != r.deprecationHandler && r.deprecationHandler(null, e),
                n)
              ) {
                for (var a, s = [], i = 0; i < arguments.length; i++) {
                  if (((a = ''), 'object' == typeof arguments[i])) {
                    for (var o in ((a += '\n[' + i + '] '), arguments[0]))
                      a += o + ': ' + arguments[0][o] + ', ';
                    a = a.slice(0, -2);
                  } else a = arguments[i];
                  s.push(a);
                }
                b(
                  e +
                    '\nArguments: ' +
                    Array.prototype.slice.call(s).join('') +
                    '\n' +
                    new Error().stack
                ),
                  (n = !1);
              }
              return t.apply(this, arguments);
            }, t);
          }
          var T,
            S = {};
          function H(e, t) {
            null != r.deprecationHandler && r.deprecationHandler(e, t),
              S[e] || (b(t), (S[e] = !0));
          }
          function j(e) {
            return (
              e instanceof Function ||
              '[object Function]' === Object.prototype.toString.call(e)
            );
          }
          function x(e, t) {
            var n,
              a = c({}, e);
            for (n in t)
              _(t, n) &&
                (i(e[n]) && i(t[n])
                  ? ((a[n] = {}), c(a[n], e[n]), c(a[n], t[n]))
                  : null != t[n]
                  ? (a[n] = t[n])
                  : delete a[n]);
            for (n in e) _(e, n) && !_(t, n) && i(e[n]) && (a[n] = c({}, a[n]));
            return a;
          }
          function E(e) {
            null != e && this.set(e);
          }
          (r.suppressDeprecationWarnings = !1),
            (r.deprecationHandler = null),
            (T = Object.keys
              ? Object.keys
              : function(e) {
                  var t,
                    n = [];
                  for (t in e) _(e, t) && n.push(t);
                  return n;
                });
          var O = {};
          function P(e, t) {
            var n = e.toLowerCase();
            O[n] = O[n + 's'] = O[t] = e;
          }
          function W(e) {
            return 'string' == typeof e ? O[e] || O[e.toLowerCase()] : void 0;
          }
          function R(e) {
            var t,
              n,
              a = {};
            for (n in e) _(e, n) && (t = W(n)) && (a[t] = e[n]);
            return a;
          }
          var A = {};
          function C(e, t) {
            A[e] = t;
          }
          function F(e, t, n) {
            var a = '' + Math.abs(e),
              r = t - a.length,
              s = e >= 0;
            return (
              (s ? (n ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, r))
                .toString()
                .substr(1) +
              a
            );
          }
          var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            N = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            I = {},
            J = {};
          function G(e, t, n, a) {
            var r = a;
            'string' == typeof a &&
              (r = function() {
                return this[a]();
              }),
              e && (J[e] = r),
              t &&
                (J[t[0]] = function() {
                  return F(r.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (J[n] = function() {
                  return this.localeData().ordinal(r.apply(this, arguments), e);
                });
          }
          function U(e, t) {
            return e.isValid()
              ? ((t = q(t, e.localeData())),
                (I[t] =
                  I[t] ||
                  (function(e) {
                    var t,
                      n,
                      a,
                      r = e.match(z);
                    for (t = 0, n = r.length; t < n; t++)
                      J[r[t]]
                        ? (r[t] = J[r[t]])
                        : (r[t] = (a = r[t]).match(/\[[\s\S]/)
                            ? a.replace(/^\[|\]$/g, '')
                            : a.replace(/\\/g, ''));
                    return function(t) {
                      var a,
                        s = '';
                      for (a = 0; a < n; a++)
                        s += j(r[a]) ? r[a].call(t, e) : r[a];
                      return s;
                    };
                  })(t)),
                I[t](e))
              : e.localeData().invalidDate();
          }
          function q(e, t) {
            var n = 5;
            function a(e) {
              return t.longDateFormat(e) || e;
            }
            for (N.lastIndex = 0; n >= 0 && N.test(e); )
              (e = e.replace(N, a)), (N.lastIndex = 0), (n -= 1);
            return e;
          }
          var B = /\d/,
            V = /\d\d/,
            $ = /\d{3}/,
            K = /\d{4}/,
            Z = /[+-]?\d{6}/,
            X = /\d\d?/,
            Q = /\d\d\d\d?/,
            ee = /\d\d\d\d\d\d?/,
            te = /\d{1,3}/,
            ne = /\d{1,4}/,
            ae = /[+-]?\d{1,6}/,
            re = /\d+/,
            se = /[+-]?\d+/,
            ie = /Z|[+-]\d\d:?\d\d/gi,
            oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            ue = {};
          function le(e, t, n) {
            ue[e] = j(t)
              ? t
              : function(e, a) {
                  return e && n ? n : t;
                };
          }
          function _e(e, t) {
            return _(ue, e)
              ? ue[e](t._strict, t._locale)
              : new RegExp(
                  ce(
                    e
                      .replace('\\', '')
                      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
                        e,
                        t,
                        n,
                        a,
                        r
                      ) {
                        return t || n || a || r;
                      })
                  )
                );
          }
          function ce(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          }
          var me = {};
          function he(e, t) {
            var n,
              a = t;
            for (
              'string' == typeof e && (e = [e]),
                d(t) &&
                  (a = function(e, n) {
                    n[t] = D(e);
                  }),
                n = 0;
              n < e.length;
              n++
            )
              me[e[n]] = a;
          }
          function fe(e, t) {
            he(e, function(e, n, a, r) {
              (a._w = a._w || {}), t(e, a._w, a, r);
            });
          }
          function pe(e, t, n) {
            null != t && _(me, e) && me[e](t, n._a, n, e);
          }
          var ye = 0,
            Me = 1,
            ge = 2,
            Le = 3,
            Ye = 4,
            ve = 5,
            De = 6,
            ke = 7,
            be = 8;
          function we(e) {
            return Te(e) ? 366 : 365;
          }
          function Te(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          G('Y', 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? '' + e : '+' + e;
          }),
            G(0, ['YY', 2], 0, function() {
              return this.year() % 100;
            }),
            G(0, ['YYYY', 4], 0, 'year'),
            G(0, ['YYYYY', 5], 0, 'year'),
            G(0, ['YYYYYY', 6, !0], 0, 'year'),
            P('year', 'y'),
            C('year', 1),
            le('Y', se),
            le('YY', X, V),
            le('YYYY', ne, K),
            le('YYYYY', ae, Z),
            le('YYYYYY', ae, Z),
            he(['YYYYY', 'YYYYYY'], ye),
            he('YYYY', function(e, t) {
              t[ye] = 2 === e.length ? r.parseTwoDigitYear(e) : D(e);
            }),
            he('YY', function(e, t) {
              t[ye] = r.parseTwoDigitYear(e);
            }),
            he('Y', function(e, t) {
              t[ye] = parseInt(e, 10);
            }),
            (r.parseTwoDigitYear = function(e) {
              return D(e) + (D(e) > 68 ? 1900 : 2e3);
            });
          var Se,
            He = je('FullYear', !0);
          function je(e, t) {
            return function(n) {
              return null != n
                ? (Ee(this, e, n), r.updateOffset(this, t), this)
                : xe(this, e);
            };
          }
          function xe(e, t) {
            return e.isValid()
              ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]()
              : NaN;
          }
          function Ee(e, t, n) {
            e.isValid() &&
              !isNaN(n) &&
              ('FullYear' === t &&
              Te(e.year()) &&
              1 === e.month() &&
              29 === e.date()
                ? e._d['set' + (e._isUTC ? 'UTC' : '') + t](
                    n,
                    e.month(),
                    Oe(n, e.month())
                  )
                : e._d['set' + (e._isUTC ? 'UTC' : '') + t](n));
          }
          function Oe(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n,
              a = ((t % (n = 12)) + n) % n;
            return (
              (e += (t - a) / 12),
              1 === a ? (Te(e) ? 29 : 28) : 31 - ((a % 7) % 2)
            );
          }
          (Se = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function(e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            G('M', ['MM', 2], 'Mo', function() {
              return this.month() + 1;
            }),
            G('MMM', 0, 0, function(e) {
              return this.localeData().monthsShort(this, e);
            }),
            G('MMMM', 0, 0, function(e) {
              return this.localeData().months(this, e);
            }),
            P('month', 'M'),
            C('month', 8),
            le('M', X),
            le('MM', X, V),
            le('MMM', function(e, t) {
              return t.monthsShortRegex(e);
            }),
            le('MMMM', function(e, t) {
              return t.monthsRegex(e);
            }),
            he(['M', 'MM'], function(e, t) {
              t[Me] = D(e) - 1;
            }),
            he(['MMM', 'MMMM'], function(e, t, n, a) {
              var r = n._locale.monthsParse(e, a, n._strict);
              null != r ? (t[Me] = r) : (h(n).invalidMonth = e);
            });
          var Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            We = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_'
            ),
            Re = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
          function Ae(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ('string' == typeof t)
              if (/^\d+$/.test(t)) t = D(t);
              else if (!d((t = e.localeData().monthsParse(t)))) return e;
            return (
              (n = Math.min(e.date(), Oe(e.year(), t))),
              e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n),
              e
            );
          }
          function Ce(e) {
            return null != e
              ? (Ae(this, e), r.updateOffset(this, !0), this)
              : xe(this, 'Month');
          }
          var Fe = de,
            ze = de;
          function Ne() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a = [],
              r = [],
              s = [];
            for (t = 0; t < 12; t++)
              (n = m([2e3, t])),
                a.push(this.monthsShort(n, '')),
                r.push(this.months(n, '')),
                s.push(this.months(n, '')),
                s.push(this.monthsShort(n, ''));
            for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++)
              (a[t] = ce(a[t])), (r[t] = ce(r[t]));
            for (t = 0; t < 24; t++) s[t] = ce(s[t]);
            (this._monthsRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                '^(' + r.join('|') + ')',
                'i'
              )),
              (this._monthsShortStrictRegex = new RegExp(
                '^(' + a.join('|') + ')',
                'i'
              ));
          }
          function Ie(e) {
            var t;
            if (e < 100 && e >= 0) {
              var n = Array.prototype.slice.call(arguments);
              (n[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, n))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
            } else t = new Date(Date.UTC.apply(null, arguments));
            return t;
          }
          function Je(e, t, n) {
            var a = 7 + t - n,
              r = (7 + Ie(e, 0, a).getUTCDay() - t) % 7;
            return -r + a - 1;
          }
          function Ge(e, t, n, a, r) {
            var s,
              i,
              o = (7 + n - a) % 7,
              d = Je(e, a, r),
              u = 1 + 7 * (t - 1) + o + d;
            return (
              u <= 0
                ? (i = we((s = e - 1)) + u)
                : u > we(e)
                ? ((s = e + 1), (i = u - we(e)))
                : ((s = e), (i = u)),
              { year: s, dayOfYear: i }
            );
          }
          function Ue(e, t, n) {
            var a,
              r,
              s = Je(e.year(), t, n),
              i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
            return (
              i < 1
                ? ((r = e.year() - 1), (a = i + qe(r, t, n)))
                : i > qe(e.year(), t, n)
                ? ((a = i - qe(e.year(), t, n)), (r = e.year() + 1))
                : ((r = e.year()), (a = i)),
              { week: a, year: r }
            );
          }
          function qe(e, t, n) {
            var a = Je(e, t, n),
              r = Je(e + 1, t, n);
            return (we(e) - a + r) / 7;
          }
          function Be(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          G('w', ['ww', 2], 'wo', 'week'),
            G('W', ['WW', 2], 'Wo', 'isoWeek'),
            P('week', 'w'),
            P('isoWeek', 'W'),
            C('week', 5),
            C('isoWeek', 5),
            le('w', X),
            le('ww', X, V),
            le('W', X),
            le('WW', X, V),
            fe(['w', 'ww', 'W', 'WW'], function(e, t, n, a) {
              t[a.substr(0, 1)] = D(e);
            }),
            G('d', 0, 'do', 'day'),
            G('dd', 0, 0, function(e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            G('ddd', 0, 0, function(e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            G('dddd', 0, 0, function(e) {
              return this.localeData().weekdays(this, e);
            }),
            G('e', 0, 0, 'weekday'),
            G('E', 0, 0, 'isoWeekday'),
            P('day', 'd'),
            P('weekday', 'e'),
            P('isoWeekday', 'E'),
            C('day', 11),
            C('weekday', 11),
            C('isoWeekday', 11),
            le('d', X),
            le('e', X),
            le('E', X),
            le('dd', function(e, t) {
              return t.weekdaysMinRegex(e);
            }),
            le('ddd', function(e, t) {
              return t.weekdaysShortRegex(e);
            }),
            le('dddd', function(e, t) {
              return t.weekdaysRegex(e);
            }),
            fe(['dd', 'ddd', 'dddd'], function(e, t, n, a) {
              var r = n._locale.weekdaysParse(e, a, n._strict);
              null != r ? (t.d = r) : (h(n).invalidWeekday = e);
            }),
            fe(['d', 'e', 'E'], function(e, t, n, a) {
              t[a] = D(e);
            });
          var Ve = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
              '_'
            ),
            $e = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            Ke = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            Ze = de,
            Xe = de,
            Qe = de;
          function et() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a,
              r,
              s,
              i = [],
              o = [],
              d = [],
              u = [];
            for (t = 0; t < 7; t++)
              (n = m([2e3, 1]).day(t)),
                (a = this.weekdaysMin(n, '')),
                (r = this.weekdaysShort(n, '')),
                (s = this.weekdays(n, '')),
                i.push(a),
                o.push(r),
                d.push(s),
                u.push(a),
                u.push(r),
                u.push(s);
            for (i.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++)
              (o[t] = ce(o[t])), (d[t] = ce(d[t])), (u[t] = ce(u[t]));
            (this._weekdaysRegex = new RegExp('^(' + u.join('|') + ')', 'i')),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                '^(' + d.join('|') + ')',
                'i'
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                '^(' + o.join('|') + ')',
                'i'
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                '^(' + i.join('|') + ')',
                'i'
              ));
          }
          function tt() {
            return this.hours() % 12 || 12;
          }
          function nt(e, t) {
            G(e, 0, 0, function() {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function at(e, t) {
            return t._meridiemParse;
          }
          G('H', ['HH', 2], 0, 'hour'),
            G('h', ['hh', 2], 0, tt),
            G('k', ['kk', 2], 0, function() {
              return this.hours() || 24;
            }),
            G('hmm', 0, 0, function() {
              return '' + tt.apply(this) + F(this.minutes(), 2);
            }),
            G('hmmss', 0, 0, function() {
              return (
                '' +
                tt.apply(this) +
                F(this.minutes(), 2) +
                F(this.seconds(), 2)
              );
            }),
            G('Hmm', 0, 0, function() {
              return '' + this.hours() + F(this.minutes(), 2);
            }),
            G('Hmmss', 0, 0, function() {
              return (
                '' + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2)
              );
            }),
            nt('a', !0),
            nt('A', !1),
            P('hour', 'h'),
            C('hour', 13),
            le('a', at),
            le('A', at),
            le('H', X),
            le('h', X),
            le('k', X),
            le('HH', X, V),
            le('hh', X, V),
            le('kk', X, V),
            le('hmm', Q),
            le('hmmss', ee),
            le('Hmm', Q),
            le('Hmmss', ee),
            he(['H', 'HH'], Le),
            he(['k', 'kk'], function(e, t, n) {
              var a = D(e);
              t[Le] = 24 === a ? 0 : a;
            }),
            he(['a', 'A'], function(e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            he(['h', 'hh'], function(e, t, n) {
              (t[Le] = D(e)), (h(n).bigHour = !0);
            }),
            he('hmm', function(e, t, n) {
              var a = e.length - 2;
              (t[Le] = D(e.substr(0, a))),
                (t[Ye] = D(e.substr(a))),
                (h(n).bigHour = !0);
            }),
            he('hmmss', function(e, t, n) {
              var a = e.length - 4,
                r = e.length - 2;
              (t[Le] = D(e.substr(0, a))),
                (t[Ye] = D(e.substr(a, 2))),
                (t[ve] = D(e.substr(r))),
                (h(n).bigHour = !0);
            }),
            he('Hmm', function(e, t, n) {
              var a = e.length - 2;
              (t[Le] = D(e.substr(0, a))), (t[Ye] = D(e.substr(a)));
            }),
            he('Hmmss', function(e, t, n) {
              var a = e.length - 4,
                r = e.length - 2;
              (t[Le] = D(e.substr(0, a))),
                (t[Ye] = D(e.substr(a, 2))),
                (t[ve] = D(e.substr(r)));
            });
          var rt,
            st = je('Hours', !0),
            it = {
              calendar: {
                sameDay: '[Today at] LT',
                nextDay: '[Tomorrow at] LT',
                nextWeek: 'dddd [at] LT',
                lastDay: '[Yesterday at] LT',
                lastWeek: '[Last] dddd [at] LT',
                sameElse: 'L',
              },
              longDateFormat: {
                LTS: 'h:mm:ss A',
                LT: 'h:mm A',
                L: 'MM/DD/YYYY',
                LL: 'MMMM D, YYYY',
                LLL: 'MMMM D, YYYY h:mm A',
                LLLL: 'dddd, MMMM D, YYYY h:mm A',
              },
              invalidDate: 'Invalid date',
              ordinal: '%d',
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: 'in %s',
                past: '%s ago',
                s: 'a few seconds',
                ss: '%d seconds',
                m: 'a minute',
                mm: '%d minutes',
                h: 'an hour',
                hh: '%d hours',
                d: 'a day',
                dd: '%d days',
                M: 'a month',
                MM: '%d months',
                y: 'a year',
                yy: '%d years',
              },
              months: We,
              monthsShort: Re,
              week: { dow: 0, doy: 6 },
              weekdays: Ve,
              weekdaysMin: Ke,
              weekdaysShort: $e,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            ot = {},
            dt = {};
          function ut(e) {
            return e ? e.toLowerCase().replace('_', '-') : e;
          }
          function lt(t) {
            var a = null;
            if (!ot[t] && void 0 !== e && e && e.exports)
              try {
                (a = rt._abbr), n(138)('./' + t), _t(a);
              } catch (e) {}
            return ot[t];
          }
          function _t(e, t) {
            var n;
            return (
              e &&
                ((n = o(t) ? mt(e) : ct(e, t))
                  ? (rt = n)
                  : 'undefined' != typeof console &&
                    console.warn &&
                    console.warn(
                      'Locale ' + e + ' not found. Did you forget to load it?'
                    )),
              rt._abbr
            );
          }
          function ct(e, t) {
            if (null !== t) {
              var n,
                a = it;
              if (((t.abbr = e), null != ot[e]))
                H(
                  'defineLocaleOverride',
                  'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                ),
                  (a = ot[e]._config);
              else if (null != t.parentLocale)
                if (null != ot[t.parentLocale]) a = ot[t.parentLocale]._config;
                else {
                  if (null == (n = lt(t.parentLocale)))
                    return (
                      dt[t.parentLocale] || (dt[t.parentLocale] = []),
                      dt[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  a = n._config;
                }
              return (
                (ot[e] = new E(x(a, t))),
                dt[e] &&
                  dt[e].forEach(function(e) {
                    ct(e.name, e.config);
                  }),
                _t(e),
                ot[e]
              );
            }
            return delete ot[e], null;
          }
          function mt(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return rt;
            if (!s(e)) {
              if ((t = lt(e))) return t;
              e = [e];
            }
            return (function(e) {
              for (var t, n, a, r, s = 0; s < e.length; ) {
                for (
                  r = ut(e[s]).split('-'),
                    t = r.length,
                    n = (n = ut(e[s + 1])) ? n.split('-') : null;
                  t > 0;

                ) {
                  if ((a = lt(r.slice(0, t).join('-')))) return a;
                  if (n && n.length >= t && k(r, n, !0) >= t - 1) break;
                  t--;
                }
                s++;
              }
              return rt;
            })(e);
          }
          function ht(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === h(e).overflow &&
                ((t =
                  n[Me] < 0 || n[Me] > 11
                    ? Me
                    : n[ge] < 1 || n[ge] > Oe(n[ye], n[Me])
                    ? ge
                    : n[Le] < 0 ||
                      n[Le] > 24 ||
                      (24 === n[Le] &&
                        (0 !== n[Ye] || 0 !== n[ve] || 0 !== n[De]))
                    ? Le
                    : n[Ye] < 0 || n[Ye] > 59
                    ? Ye
                    : n[ve] < 0 || n[ve] > 59
                    ? ve
                    : n[De] < 0 || n[De] > 999
                    ? De
                    : -1),
                h(e)._overflowDayOfYear && (t < ye || t > ge) && (t = ge),
                h(e)._overflowWeeks && -1 === t && (t = ke),
                h(e)._overflowWeekday && -1 === t && (t = be),
                (h(e).overflow = t)),
              e
            );
          }
          function ft(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function pt(e) {
            var t,
              n,
              a,
              s,
              i,
              o = [];
            if (!e._d) {
              for (
                a = (function(e) {
                  var t = new Date(r.now());
                  return e._useUTC
                    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                    : [t.getFullYear(), t.getMonth(), t.getDate()];
                })(e),
                  e._w &&
                    null == e._a[ge] &&
                    null == e._a[Me] &&
                    (function(e) {
                      var t, n, a, r, s, i, o, d;
                      if (null != (t = e._w).GG || null != t.W || null != t.E)
                        (s = 1),
                          (i = 4),
                          (n = ft(t.GG, e._a[ye], Ue(xt(), 1, 4).year)),
                          (a = ft(t.W, 1)),
                          ((r = ft(t.E, 1)) < 1 || r > 7) && (d = !0);
                      else {
                        (s = e._locale._week.dow), (i = e._locale._week.doy);
                        var u = Ue(xt(), s, i);
                        (n = ft(t.gg, e._a[ye], u.year)),
                          (a = ft(t.w, u.week)),
                          null != t.d
                            ? ((r = t.d) < 0 || r > 6) && (d = !0)
                            : null != t.e
                            ? ((r = t.e + s), (t.e < 0 || t.e > 6) && (d = !0))
                            : (r = s);
                      }
                      a < 1 || a > qe(n, s, i)
                        ? (h(e)._overflowWeeks = !0)
                        : null != d
                        ? (h(e)._overflowWeekday = !0)
                        : ((o = Ge(n, a, r, s, i)),
                          (e._a[ye] = o.year),
                          (e._dayOfYear = o.dayOfYear));
                    })(e),
                  null != e._dayOfYear &&
                    ((i = ft(e._a[ye], a[ye])),
                    (e._dayOfYear > we(i) || 0 === e._dayOfYear) &&
                      (h(e)._overflowDayOfYear = !0),
                    (n = Ie(i, 0, e._dayOfYear)),
                    (e._a[Me] = n.getUTCMonth()),
                    (e._a[ge] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = o[t] = a[t];
              for (; t < 7; t++)
                e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[Le] &&
                0 === e._a[Ye] &&
                0 === e._a[ve] &&
                0 === e._a[De] &&
                ((e._nextDay = !0), (e._a[Le] = 0)),
                (e._d = (e._useUTC
                  ? Ie
                  : function(e, t, n, a, r, s, i) {
                      var o;
                      return (
                        e < 100 && e >= 0
                          ? ((o = new Date(e + 400, t, n, a, r, s, i)),
                            isFinite(o.getFullYear()) && o.setFullYear(e))
                          : (o = new Date(e, t, n, a, r, s, i)),
                        o
                      );
                    }
                ).apply(null, o)),
                (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[Le] = 24),
                e._w &&
                  void 0 !== e._w.d &&
                  e._w.d !== s &&
                  (h(e).weekdayMismatch = !0);
            }
          }
          var yt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            gt = /Z|[+-]\d\d(?::?\d\d)?/,
            Lt = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, !1],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
              ['YYYYDDD', /\d{7}/],
            ],
            Yt = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
            ],
            vt = /^\/?Date\((\-?\d+)/i;
          function Dt(e) {
            var t,
              n,
              a,
              r,
              s,
              i,
              o = e._i,
              d = yt.exec(o) || Mt.exec(o);
            if (d) {
              for (h(e).iso = !0, t = 0, n = Lt.length; t < n; t++)
                if (Lt[t][1].exec(d[1])) {
                  (r = Lt[t][0]), (a = !1 !== Lt[t][2]);
                  break;
                }
              if (null == r) return void (e._isValid = !1);
              if (d[3]) {
                for (t = 0, n = Yt.length; t < n; t++)
                  if (Yt[t][1].exec(d[3])) {
                    s = (d[2] || ' ') + Yt[t][0];
                    break;
                  }
                if (null == s) return void (e._isValid = !1);
              }
              if (!a && null != s) return void (e._isValid = !1);
              if (d[4]) {
                if (!gt.exec(d[4])) return void (e._isValid = !1);
                i = 'Z';
              }
              (e._f = r + (s || '') + (i || '')), St(e);
            } else e._isValid = !1;
          }
          var kt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
          function bt(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          var wt = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
          function Tt(e) {
            var t,
              n,
              a,
              r,
              s,
              i,
              o,
              d = kt.exec(
                e._i
                  .replace(/\([^)]*\)|[\n\t]/g, ' ')
                  .replace(/(\s\s+)/g, ' ')
                  .replace(/^\s\s*/, '')
                  .replace(/\s\s*$/, '')
              );
            if (d) {
              var u = ((t = d[4]),
              (n = d[3]),
              (a = d[2]),
              (r = d[5]),
              (s = d[6]),
              (i = d[7]),
              (o = [
                bt(t),
                Re.indexOf(n),
                parseInt(a, 10),
                parseInt(r, 10),
                parseInt(s, 10),
              ]),
              i && o.push(parseInt(i, 10)),
              o);
              if (
                !(function(e, t, n) {
                  if (e) {
                    var a = $e.indexOf(e),
                      r = new Date(t[0], t[1], t[2]).getDay();
                    if (a !== r)
                      return (h(n).weekdayMismatch = !0), (n._isValid = !1), !1;
                  }
                  return !0;
                })(d[1], u, e)
              )
                return;
              (e._a = u),
                (e._tzm = (function(e, t, n) {
                  if (e) return wt[e];
                  if (t) return 0;
                  var a = parseInt(n, 10),
                    r = a % 100,
                    s = (a - r) / 100;
                  return 60 * s + r;
                })(d[8], d[9], d[10])),
                (e._d = Ie.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (h(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function St(e) {
            if (e._f !== r.ISO_8601)
              if (e._f !== r.RFC_2822) {
                (e._a = []), (h(e).empty = !0);
                var t,
                  n,
                  a,
                  s,
                  i,
                  o = '' + e._i,
                  d = o.length,
                  u = 0;
                for (
                  a = q(e._f, e._locale).match(z) || [], t = 0;
                  t < a.length;
                  t++
                )
                  (s = a[t]),
                    (n = (o.match(_e(s, e)) || [])[0]) &&
                      ((i = o.substr(0, o.indexOf(n))).length > 0 &&
                        h(e).unusedInput.push(i),
                      (o = o.slice(o.indexOf(n) + n.length)),
                      (u += n.length)),
                    J[s]
                      ? (n ? (h(e).empty = !1) : h(e).unusedTokens.push(s),
                        pe(s, n, e))
                      : e._strict && !n && h(e).unusedTokens.push(s);
                (h(e).charsLeftOver = d - u),
                  o.length > 0 && h(e).unusedInput.push(o),
                  e._a[Le] <= 12 &&
                    !0 === h(e).bigHour &&
                    e._a[Le] > 0 &&
                    (h(e).bigHour = void 0),
                  (h(e).parsedDateParts = e._a.slice(0)),
                  (h(e).meridiem = e._meridiem),
                  (e._a[Le] = ((l = e._locale),
                  (_ = e._a[Le]),
                  null == (c = e._meridiem)
                    ? _
                    : null != l.meridiemHour
                    ? l.meridiemHour(_, c)
                    : null != l.isPM
                    ? ((m = l.isPM(c)) && _ < 12 && (_ += 12),
                      m || 12 !== _ || (_ = 0),
                      _)
                    : _)),
                  pt(e),
                  ht(e);
              } else Tt(e);
            else Dt(e);
            var l, _, c, m;
          }
          function Ht(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || mt(e._l)),
              null === t || (void 0 === n && '' === t)
                ? p({ nullInput: !0 })
                : ('string' == typeof t && (e._i = t = e._locale.preparse(t)),
                  Y(t)
                    ? new L(ht(t))
                    : (u(t)
                        ? (e._d = t)
                        : s(n)
                        ? (function(e) {
                            var t, n, a, r, s;
                            if (0 === e._f.length)
                              return (
                                (h(e).invalidFormat = !0),
                                void (e._d = new Date(NaN))
                              );
                            for (r = 0; r < e._f.length; r++)
                              (s = 0),
                                (t = M({}, e)),
                                null != e._useUTC && (t._useUTC = e._useUTC),
                                (t._f = e._f[r]),
                                St(t),
                                f(t) &&
                                  ((s += h(t).charsLeftOver),
                                  (s += 10 * h(t).unusedTokens.length),
                                  (h(t).score = s),
                                  (null == a || s < a) && ((a = s), (n = t)));
                            c(e, n || t);
                          })(e)
                        : n
                        ? St(e)
                        : (function(e) {
                            var t = e._i;
                            o(t)
                              ? (e._d = new Date(r.now()))
                              : u(t)
                              ? (e._d = new Date(t.valueOf()))
                              : 'string' == typeof t
                              ? (function(e) {
                                  var t = vt.exec(e._i);
                                  null === t
                                    ? (Dt(e),
                                      !1 === e._isValid &&
                                        (delete e._isValid,
                                        Tt(e),
                                        !1 === e._isValid &&
                                          (delete e._isValid,
                                          r.createFromInputFallback(e))))
                                    : (e._d = new Date(+t[1]));
                                })(e)
                              : s(t)
                              ? ((e._a = l(t.slice(0), function(e) {
                                  return parseInt(e, 10);
                                })),
                                pt(e))
                              : i(t)
                              ? (function(e) {
                                  if (!e._d) {
                                    var t = R(e._i);
                                    (e._a = l(
                                      [
                                        t.year,
                                        t.month,
                                        t.day || t.date,
                                        t.hour,
                                        t.minute,
                                        t.second,
                                        t.millisecond,
                                      ],
                                      function(e) {
                                        return e && parseInt(e, 10);
                                      }
                                    )),
                                      pt(e);
                                  }
                                })(e)
                              : d(t)
                              ? (e._d = new Date(t))
                              : r.createFromInputFallback(e);
                          })(e),
                      f(e) || (e._d = null),
                      e))
            );
          }
          function jt(e, t, n, a, r) {
            var o,
              d = {};
            return (
              (!0 !== n && !1 !== n) || ((a = n), (n = void 0)),
              ((i(e) &&
                (function(e) {
                  if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(e).length;
                  var t;
                  for (t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
                })(e)) ||
                (s(e) && 0 === e.length)) &&
                (e = void 0),
              (d._isAMomentObject = !0),
              (d._useUTC = d._isUTC = r),
              (d._l = n),
              (d._i = e),
              (d._f = t),
              (d._strict = a),
              (o = new L(ht(Ht(d))))._nextDay &&
                (o.add(1, 'd'), (o._nextDay = void 0)),
              o
            );
          }
          function xt(e, t, n, a) {
            return jt(e, t, n, a, !1);
          }
          (r.createFromInputFallback = w(
            'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
            function(e) {
              e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
            }
          )),
            (r.ISO_8601 = function() {}),
            (r.RFC_2822 = function() {});
          var Et = w(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function() {
                var e = xt.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : p();
              }
            ),
            Ot = w(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function() {
                var e = xt.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : p();
              }
            );
          function Pt(e, t) {
            var n, a;
            if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length))
              return xt();
            for (n = t[0], a = 1; a < t.length; ++a)
              (t[a].isValid() && !t[a][e](n)) || (n = t[a]);
            return n;
          }
          var Wt = [
            'year',
            'quarter',
            'month',
            'week',
            'day',
            'hour',
            'minute',
            'second',
            'millisecond',
          ];
          function Rt(e) {
            var t = R(e),
              n = t.year || 0,
              a = t.quarter || 0,
              r = t.month || 0,
              s = t.week || t.isoWeek || 0,
              i = t.day || 0,
              o = t.hour || 0,
              d = t.minute || 0,
              u = t.second || 0,
              l = t.millisecond || 0;
            (this._isValid = (function(e) {
              for (var t in e)
                if (-1 === Se.call(Wt, t) || (null != e[t] && isNaN(e[t])))
                  return !1;
              for (var n = !1, a = 0; a < Wt.length; ++a)
                if (e[Wt[a]]) {
                  if (n) return !1;
                  parseFloat(e[Wt[a]]) !== D(e[Wt[a]]) && (n = !0);
                }
              return !0;
            })(t)),
              (this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60),
              (this._days = +i + 7 * s),
              (this._months = +r + 3 * a + 12 * n),
              (this._data = {}),
              (this._locale = mt()),
              this._bubble();
          }
          function At(e) {
            return e instanceof Rt;
          }
          function Ct(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function Ft(e, t) {
            G(e, 0, 0, function() {
              var e = this.utcOffset(),
                n = '+';
              return (
                e < 0 && ((e = -e), (n = '-')),
                n + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
              );
            });
          }
          Ft('Z', ':'),
            Ft('ZZ', ''),
            le('Z', oe),
            le('ZZ', oe),
            he(['Z', 'ZZ'], function(e, t, n) {
              (n._useUTC = !0), (n._tzm = Nt(oe, e));
            });
          var zt = /([\+\-]|\d\d)/gi;
          function Nt(e, t) {
            var n = (t || '').match(e);
            if (null === n) return null;
            var a = n[n.length - 1] || [],
              r = (a + '').match(zt) || ['-', 0, 0],
              s = 60 * r[1] + D(r[2]);
            return 0 === s ? 0 : '+' === r[0] ? s : -s;
          }
          function It(e, t) {
            var n, a;
            return t._isUTC
              ? ((n = t.clone()),
                (a =
                  (Y(e) || u(e) ? e.valueOf() : xt(e).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + a),
                r.updateOffset(n, !1),
                n)
              : xt(e).local();
          }
          function Jt(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
          }
          function Gt() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          r.updateOffset = function() {};
          var Ut = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            qt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Bt(e, t) {
            var n,
              a,
              r,
              s,
              i,
              o,
              u = e,
              l = null;
            return (
              At(e)
                ? (u = { ms: e._milliseconds, d: e._days, M: e._months })
                : d(e)
                ? ((u = {}), t ? (u[t] = e) : (u.milliseconds = e))
                : (l = Ut.exec(e))
                ? ((n = '-' === l[1] ? -1 : 1),
                  (u = {
                    y: 0,
                    d: D(l[ge]) * n,
                    h: D(l[Le]) * n,
                    m: D(l[Ye]) * n,
                    s: D(l[ve]) * n,
                    ms: D(Ct(1e3 * l[De])) * n,
                  }))
                : (l = qt.exec(e))
                ? ((n = '-' === l[1] ? -1 : 1),
                  (u = {
                    y: Vt(l[2], n),
                    M: Vt(l[3], n),
                    w: Vt(l[4], n),
                    d: Vt(l[5], n),
                    h: Vt(l[6], n),
                    m: Vt(l[7], n),
                    s: Vt(l[8], n),
                  }))
                : null == u
                ? (u = {})
                : 'object' == typeof u &&
                  ('from' in u || 'to' in u) &&
                  ((s = xt(u.from)),
                  (i = xt(u.to)),
                  (r =
                    s.isValid() && i.isValid()
                      ? ((i = It(i, s)),
                        s.isBefore(i)
                          ? (o = $t(s, i))
                          : (((o = $t(i, s)).milliseconds = -o.milliseconds),
                            (o.months = -o.months)),
                        o)
                      : { milliseconds: 0, months: 0 }),
                  ((u = {}).ms = r.milliseconds),
                  (u.M = r.months)),
              (a = new Rt(u)),
              At(e) && _(e, '_locale') && (a._locale = e._locale),
              a
            );
          }
          function Vt(e, t) {
            var n = e && parseFloat(e.replace(',', '.'));
            return (isNaN(n) ? 0 : n) * t;
          }
          function $t(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e
                .clone()
                .add(n.months, 'M')
                .isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
              n
            );
          }
          function Kt(e, t) {
            return function(n, a) {
              var r;
              return (
                null === a ||
                  isNaN(+a) ||
                  (H(
                    t,
                    'moment().' +
                      t +
                      '(period, number) is deprecated. Please use moment().' +
                      t +
                      '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                  ),
                  (r = n),
                  (n = a),
                  (a = r)),
                Zt(this, Bt((n = 'string' == typeof n ? +n : n), a), e),
                this
              );
            };
          }
          function Zt(e, t, n, a) {
            var s = t._milliseconds,
              i = Ct(t._days),
              o = Ct(t._months);
            e.isValid() &&
              ((a = null == a || a),
              o && Ae(e, xe(e, 'Month') + o * n),
              i && Ee(e, 'Date', xe(e, 'Date') + i * n),
              s && e._d.setTime(e._d.valueOf() + s * n),
              a && r.updateOffset(e, i || o));
          }
          (Bt.fn = Rt.prototype),
            (Bt.invalid = function() {
              return Bt(NaN);
            });
          var Xt = Kt(1, 'add'),
            Qt = Kt(-1, 'subtract');
          function en(e, t) {
            var n,
              a,
              r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              s = e.clone().add(r, 'months');
            return (
              t - s < 0
                ? ((n = e.clone().add(r - 1, 'months')),
                  (a = (t - s) / (s - n)))
                : ((n = e.clone().add(r + 1, 'months')),
                  (a = (t - s) / (n - s))),
              -(r + a) || 0
            );
          }
          function tn(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = mt(e)) && (this._locale = t), this);
          }
          (r.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
            (r.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
          var nn = w(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function(e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function an() {
            return this._locale;
          }
          var rn = 1e3,
            sn = 60 * rn,
            on = 60 * sn,
            dn = 3506328 * on;
          function un(e, t) {
            return ((e % t) + t) % t;
          }
          function ln(e, t, n) {
            return e < 100 && e >= 0
              ? new Date(e + 400, t, n) - dn
              : new Date(e, t, n).valueOf();
          }
          function _n(e, t, n) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, t, n) - dn
              : Date.UTC(e, t, n);
          }
          function cn(e, t) {
            G(0, [e, e.length], 0, t);
          }
          function mn(e, t, n, a, r) {
            var s;
            return null == e
              ? Ue(this, a, r).year
              : ((s = qe(e, a, r)),
                t > s && (t = s),
                function(e, t, n, a, r) {
                  var s = Ge(e, t, n, a, r),
                    i = Ie(s.year, 0, s.dayOfYear);
                  return (
                    this.year(i.getUTCFullYear()),
                    this.month(i.getUTCMonth()),
                    this.date(i.getUTCDate()),
                    this
                  );
                }.call(this, e, t, n, a, r));
          }
          G(0, ['gg', 2], 0, function() {
            return this.weekYear() % 100;
          }),
            G(0, ['GG', 2], 0, function() {
              return this.isoWeekYear() % 100;
            }),
            cn('gggg', 'weekYear'),
            cn('ggggg', 'weekYear'),
            cn('GGGG', 'isoWeekYear'),
            cn('GGGGG', 'isoWeekYear'),
            P('weekYear', 'gg'),
            P('isoWeekYear', 'GG'),
            C('weekYear', 1),
            C('isoWeekYear', 1),
            le('G', se),
            le('g', se),
            le('GG', X, V),
            le('gg', X, V),
            le('GGGG', ne, K),
            le('gggg', ne, K),
            le('GGGGG', ae, Z),
            le('ggggg', ae, Z),
            fe(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(e, t, n, a) {
              t[a.substr(0, 2)] = D(e);
            }),
            fe(['gg', 'GG'], function(e, t, n, a) {
              t[a] = r.parseTwoDigitYear(e);
            }),
            G('Q', 0, 'Qo', 'quarter'),
            P('quarter', 'Q'),
            C('quarter', 7),
            le('Q', B),
            he('Q', function(e, t) {
              t[Me] = 3 * (D(e) - 1);
            }),
            G('D', ['DD', 2], 'Do', 'date'),
            P('date', 'D'),
            C('date', 9),
            le('D', X),
            le('DD', X, V),
            le('Do', function(e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            he(['D', 'DD'], ge),
            he('Do', function(e, t) {
              t[ge] = D(e.match(X)[0]);
            });
          var hn = je('Date', !0);
          G('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
            P('dayOfYear', 'DDD'),
            C('dayOfYear', 4),
            le('DDD', te),
            le('DDDD', $),
            he(['DDD', 'DDDD'], function(e, t, n) {
              n._dayOfYear = D(e);
            }),
            G('m', ['mm', 2], 0, 'minute'),
            P('minute', 'm'),
            C('minute', 14),
            le('m', X),
            le('mm', X, V),
            he(['m', 'mm'], Ye);
          var fn = je('Minutes', !1);
          G('s', ['ss', 2], 0, 'second'),
            P('second', 's'),
            C('second', 15),
            le('s', X),
            le('ss', X, V),
            he(['s', 'ss'], ve);
          var pn,
            yn = je('Seconds', !1);
          for (
            G('S', 0, 0, function() {
              return ~~(this.millisecond() / 100);
            }),
              G(0, ['SS', 2], 0, function() {
                return ~~(this.millisecond() / 10);
              }),
              G(0, ['SSS', 3], 0, 'millisecond'),
              G(0, ['SSSS', 4], 0, function() {
                return 10 * this.millisecond();
              }),
              G(0, ['SSSSS', 5], 0, function() {
                return 100 * this.millisecond();
              }),
              G(0, ['SSSSSS', 6], 0, function() {
                return 1e3 * this.millisecond();
              }),
              G(0, ['SSSSSSS', 7], 0, function() {
                return 1e4 * this.millisecond();
              }),
              G(0, ['SSSSSSSS', 8], 0, function() {
                return 1e5 * this.millisecond();
              }),
              G(0, ['SSSSSSSSS', 9], 0, function() {
                return 1e6 * this.millisecond();
              }),
              P('millisecond', 'ms'),
              C('millisecond', 16),
              le('S', te, B),
              le('SS', te, V),
              le('SSS', te, $),
              pn = 'SSSS';
            pn.length <= 9;
            pn += 'S'
          )
            le(pn, re);
          function Mn(e, t) {
            t[De] = D(1e3 * ('0.' + e));
          }
          for (pn = 'S'; pn.length <= 9; pn += 'S') he(pn, Mn);
          var gn = je('Milliseconds', !1);
          G('z', 0, 0, 'zoneAbbr'), G('zz', 0, 0, 'zoneName');
          var Ln = L.prototype;
          function Yn(e) {
            return e;
          }
          (Ln.add = Xt),
            (Ln.calendar = function(e, t) {
              var n = e || xt(),
                a = It(n, this).startOf('day'),
                s = r.calendarFormat(this, a) || 'sameElse',
                i = t && (j(t[s]) ? t[s].call(this, n) : t[s]);
              return this.format(
                i || this.localeData().calendar(s, this, xt(n))
              );
            }),
            (Ln.clone = function() {
              return new L(this);
            }),
            (Ln.diff = function(e, t, n) {
              var a, r, s;
              if (!this.isValid()) return NaN;
              if (!(a = It(e, this)).isValid()) return NaN;
              switch (
                ((r = 6e4 * (a.utcOffset() - this.utcOffset())), (t = W(t)))
              ) {
                case 'year':
                  s = en(this, a) / 12;
                  break;
                case 'month':
                  s = en(this, a);
                  break;
                case 'quarter':
                  s = en(this, a) / 3;
                  break;
                case 'second':
                  s = (this - a) / 1e3;
                  break;
                case 'minute':
                  s = (this - a) / 6e4;
                  break;
                case 'hour':
                  s = (this - a) / 36e5;
                  break;
                case 'day':
                  s = (this - a - r) / 864e5;
                  break;
                case 'week':
                  s = (this - a - r) / 6048e5;
                  break;
                default:
                  s = this - a;
              }
              return n ? s : v(s);
            }),
            (Ln.endOf = function(e) {
              var t;
              if (
                void 0 === (e = W(e)) ||
                'millisecond' === e ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? _n : ln;
              switch (e) {
                case 'year':
                  t = n(this.year() + 1, 0, 1) - 1;
                  break;
                case 'quarter':
                  t =
                    n(this.year(), this.month() - (this.month() % 3) + 3, 1) -
                    1;
                  break;
                case 'month':
                  t = n(this.year(), this.month() + 1, 1) - 1;
                  break;
                case 'week':
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday() + 7
                    ) - 1;
                  break;
                case 'isoWeek':
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                  break;
                case 'day':
                case 'date':
                  t = n(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case 'hour':
                  (t = this._d.valueOf()),
                    (t +=
                      on -
                      un(t + (this._isUTC ? 0 : this.utcOffset() * sn), on) -
                      1);
                  break;
                case 'minute':
                  (t = this._d.valueOf()), (t += sn - un(t, sn) - 1);
                  break;
                case 'second':
                  (t = this._d.valueOf()), (t += rn - un(t, rn) - 1);
              }
              return this._d.setTime(t), r.updateOffset(this, !0), this;
            }),
            (Ln.format = function(e) {
              e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
              var t = U(this, e);
              return this.localeData().postformat(t);
            }),
            (Ln.from = function(e, t) {
              return this.isValid() &&
                ((Y(e) && e.isValid()) || xt(e).isValid())
                ? Bt({ to: this, from: e })
                    .locale(this.locale())
                    .humanize(!t)
                : this.localeData().invalidDate();
            }),
            (Ln.fromNow = function(e) {
              return this.from(xt(), e);
            }),
            (Ln.to = function(e, t) {
              return this.isValid() &&
                ((Y(e) && e.isValid()) || xt(e).isValid())
                ? Bt({ from: this, to: e })
                    .locale(this.locale())
                    .humanize(!t)
                : this.localeData().invalidDate();
            }),
            (Ln.toNow = function(e) {
              return this.to(xt(), e);
            }),
            (Ln.get = function(e) {
              return j(this[(e = W(e))]) ? this[e]() : this;
            }),
            (Ln.invalidAt = function() {
              return h(this).overflow;
            }),
            (Ln.isAfter = function(e, t) {
              var n = Y(e) ? e : xt(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ('millisecond' === (t = W(t) || 'millisecond')
                  ? this.valueOf() > n.valueOf()
                  : n.valueOf() <
                    this.clone()
                      .startOf(t)
                      .valueOf())
              );
            }),
            (Ln.isBefore = function(e, t) {
              var n = Y(e) ? e : xt(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ('millisecond' === (t = W(t) || 'millisecond')
                  ? this.valueOf() < n.valueOf()
                  : this.clone()
                      .endOf(t)
                      .valueOf() < n.valueOf())
              );
            }),
            (Ln.isBetween = function(e, t, n, a) {
              var r = Y(e) ? e : xt(e),
                s = Y(t) ? t : xt(t);
              return (
                !!(this.isValid() && r.isValid() && s.isValid()) &&
                (('(' === (a = a || '()')[0]
                  ? this.isAfter(r, n)
                  : !this.isBefore(r, n)) &&
                  (')' === a[1] ? this.isBefore(s, n) : !this.isAfter(s, n)))
              );
            }),
            (Ln.isSame = function(e, t) {
              var n,
                a = Y(e) ? e : xt(e);
              return (
                !(!this.isValid() || !a.isValid()) &&
                ('millisecond' === (t = W(t) || 'millisecond')
                  ? this.valueOf() === a.valueOf()
                  : ((n = a.valueOf()),
                    this.clone()
                      .startOf(t)
                      .valueOf() <= n &&
                      n <=
                        this.clone()
                          .endOf(t)
                          .valueOf()))
              );
            }),
            (Ln.isSameOrAfter = function(e, t) {
              return this.isSame(e, t) || this.isAfter(e, t);
            }),
            (Ln.isSameOrBefore = function(e, t) {
              return this.isSame(e, t) || this.isBefore(e, t);
            }),
            (Ln.isValid = function() {
              return f(this);
            }),
            (Ln.lang = nn),
            (Ln.locale = tn),
            (Ln.localeData = an),
            (Ln.max = Ot),
            (Ln.min = Et),
            (Ln.parsingFlags = function() {
              return c({}, h(this));
            }),
            (Ln.set = function(e, t) {
              if ('object' == typeof e)
                for (
                  var n = (function(e) {
                      var t = [];
                      for (var n in e) t.push({ unit: n, priority: A[n] });
                      return (
                        t.sort(function(e, t) {
                          return e.priority - t.priority;
                        }),
                        t
                      );
                    })((e = R(e))),
                    a = 0;
                  a < n.length;
                  a++
                )
                  this[n[a].unit](e[n[a].unit]);
              else if (j(this[(e = W(e))])) return this[e](t);
              return this;
            }),
            (Ln.startOf = function(e) {
              var t;
              if (
                void 0 === (e = W(e)) ||
                'millisecond' === e ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? _n : ln;
              switch (e) {
                case 'year':
                  t = n(this.year(), 0, 1);
                  break;
                case 'quarter':
                  t = n(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case 'month':
                  t = n(this.year(), this.month(), 1);
                  break;
                case 'week':
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                  );
                  break;
                case 'isoWeek':
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                  );
                  break;
                case 'day':
                case 'date':
                  t = n(this.year(), this.month(), this.date());
                  break;
                case 'hour':
                  (t = this._d.valueOf()),
                    (t -= un(
                      t + (this._isUTC ? 0 : this.utcOffset() * sn),
                      on
                    ));
                  break;
                case 'minute':
                  (t = this._d.valueOf()), (t -= un(t, sn));
                  break;
                case 'second':
                  (t = this._d.valueOf()), (t -= un(t, rn));
              }
              return this._d.setTime(t), r.updateOffset(this, !0), this;
            }),
            (Ln.subtract = Qt),
            (Ln.toArray = function() {
              var e = this;
              return [
                e.year(),
                e.month(),
                e.date(),
                e.hour(),
                e.minute(),
                e.second(),
                e.millisecond(),
              ];
            }),
            (Ln.toObject = function() {
              var e = this;
              return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
              };
            }),
            (Ln.toDate = function() {
              return new Date(this.valueOf());
            }),
            (Ln.toISOString = function(e) {
              if (!this.isValid()) return null;
              var t = !0 !== e,
                n = t ? this.clone().utc() : this;
              return n.year() < 0 || n.year() > 9999
                ? U(
                    n,
                    t
                      ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                      : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
                  )
                : j(Date.prototype.toISOString)
                ? t
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                      .toISOString()
                      .replace('Z', U(n, 'Z'))
                : U(
                    n,
                    t
                      ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                      : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
                  );
            }),
            (Ln.inspect = function() {
              if (!this.isValid())
                return 'moment.invalid(/* ' + this._i + ' */)';
              var e = 'moment',
                t = '';
              this.isLocal() ||
                ((e =
                  0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'),
                (t = 'Z'));
              var n = '[' + e + '("]',
                a = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
                r = t + '[")]';
              return this.format(n + a + '-MM-DD[T]HH:mm:ss.SSS' + r);
            }),
            (Ln.toJSON = function() {
              return this.isValid() ? this.toISOString() : null;
            }),
            (Ln.toString = function() {
              return this.clone()
                .locale('en')
                .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
            }),
            (Ln.unix = function() {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (Ln.valueOf = function() {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (Ln.creationData = function() {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (Ln.year = He),
            (Ln.isLeapYear = function() {
              return Te(this.year());
            }),
            (Ln.weekYear = function(e) {
              return mn.call(
                this,
                e,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy
              );
            }),
            (Ln.isoWeekYear = function(e) {
              return mn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (Ln.quarter = Ln.quarters = function(e) {
              return null == e
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (e - 1) + (this.month() % 3));
            }),
            (Ln.month = Ce),
            (Ln.daysInMonth = function() {
              return Oe(this.year(), this.month());
            }),
            (Ln.week = Ln.weeks = function(e) {
              var t = this.localeData().week(this);
              return null == e ? t : this.add(7 * (e - t), 'd');
            }),
            (Ln.isoWeek = Ln.isoWeeks = function(e) {
              var t = Ue(this, 1, 4).week;
              return null == e ? t : this.add(7 * (e - t), 'd');
            }),
            (Ln.weeksInYear = function() {
              var e = this.localeData()._week;
              return qe(this.year(), e.dow, e.doy);
            }),
            (Ln.isoWeeksInYear = function() {
              return qe(this.year(), 1, 4);
            }),
            (Ln.date = hn),
            (Ln.day = Ln.days = function(e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null != e
                ? ((e = (function(e, t) {
                    return 'string' != typeof e
                      ? e
                      : isNaN(e)
                      ? 'number' == typeof (e = t.weekdaysParse(e))
                        ? e
                        : null
                      : parseInt(e, 10);
                  })(e, this.localeData())),
                  this.add(e - t, 'd'))
                : t;
            }),
            (Ln.weekday = function(e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == e ? t : this.add(e - t, 'd');
            }),
            (Ln.isoWeekday = function(e) {
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                var t = (function(e, t) {
                  return 'string' == typeof e
                    ? t.weekdaysParse(e) % 7 || 7
                    : isNaN(e)
                    ? null
                    : e;
                })(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7);
              }
              return this.day() || 7;
            }),
            (Ln.dayOfYear = function(e) {
              var t =
                Math.round(
                  (this.clone().startOf('day') - this.clone().startOf('year')) /
                    864e5
                ) + 1;
              return null == e ? t : this.add(e - t, 'd');
            }),
            (Ln.hour = Ln.hours = st),
            (Ln.minute = Ln.minutes = fn),
            (Ln.second = Ln.seconds = yn),
            (Ln.millisecond = Ln.milliseconds = gn),
            (Ln.utcOffset = function(e, t, n) {
              var a,
                s = this._offset || 0;
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                if ('string' == typeof e) {
                  if (null === (e = Nt(oe, e))) return this;
                } else Math.abs(e) < 16 && !n && (e *= 60);
                return (
                  !this._isUTC && t && (a = Jt(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != a && this.add(a, 'm'),
                  s !== e &&
                    (!t || this._changeInProgress
                      ? Zt(this, Bt(e - s, 'm'), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0),
                        r.updateOffset(this, !0),
                        (this._changeInProgress = null))),
                  this
                );
              }
              return this._isUTC ? s : Jt(this);
            }),
            (Ln.utc = function(e) {
              return this.utcOffset(0, e);
            }),
            (Ln.local = function(e) {
              return (
                this._isUTC &&
                  (this.utcOffset(0, e),
                  (this._isUTC = !1),
                  e && this.subtract(Jt(this), 'm')),
                this
              );
            }),
            (Ln.parseZone = function() {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ('string' == typeof this._i) {
                var e = Nt(ie, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (Ln.hasAlignedHourOffset = function(e) {
              return (
                !!this.isValid() &&
                ((e = e ? xt(e).utcOffset() : 0),
                (this.utcOffset() - e) % 60 == 0)
              );
            }),
            (Ln.isDST = function() {
              return (
                this.utcOffset() >
                  this.clone()
                    .month(0)
                    .utcOffset() ||
                this.utcOffset() >
                  this.clone()
                    .month(5)
                    .utcOffset()
              );
            }),
            (Ln.isLocal = function() {
              return !!this.isValid() && !this._isUTC;
            }),
            (Ln.isUtcOffset = function() {
              return !!this.isValid() && this._isUTC;
            }),
            (Ln.isUtc = Gt),
            (Ln.isUTC = Gt),
            (Ln.zoneAbbr = function() {
              return this._isUTC ? 'UTC' : '';
            }),
            (Ln.zoneName = function() {
              return this._isUTC ? 'Coordinated Universal Time' : '';
            }),
            (Ln.dates = w(
              'dates accessor is deprecated. Use date instead.',
              hn
            )),
            (Ln.months = w(
              'months accessor is deprecated. Use month instead',
              Ce
            )),
            (Ln.years = w(
              'years accessor is deprecated. Use year instead',
              He
            )),
            (Ln.zone = w(
              'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
              function(e, t) {
                return null != e
                  ? ('string' != typeof e && (e = -e),
                    this.utcOffset(e, t),
                    this)
                  : -this.utcOffset();
              }
            )),
            (Ln.isDSTShifted = w(
              'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
              function() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if ((M(e, this), (e = Ht(e))._a)) {
                  var t = e._isUTC ? m(e._a) : xt(e._a);
                  this._isDSTShifted =
                    this.isValid() && k(e._a, t.toArray()) > 0;
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
              }
            ));
          var vn = E.prototype;
          function Dn(e, t, n, a) {
            var r = mt(),
              s = m().set(a, t);
            return r[n](s, e);
          }
          function kn(e, t, n) {
            if ((d(e) && ((t = e), (e = void 0)), (e = e || ''), null != t))
              return Dn(e, t, n, 'month');
            var a,
              r = [];
            for (a = 0; a < 12; a++) r[a] = Dn(e, a, n, 'month');
            return r;
          }
          function bn(e, t, n, a) {
            'boolean' == typeof e
              ? (d(t) && ((n = t), (t = void 0)), (t = t || ''))
              : ((n = t = e),
                (e = !1),
                d(t) && ((n = t), (t = void 0)),
                (t = t || ''));
            var r,
              s = mt(),
              i = e ? s._week.dow : 0;
            if (null != n) return Dn(t, (n + i) % 7, a, 'day');
            var o = [];
            for (r = 0; r < 7; r++) o[r] = Dn(t, (r + i) % 7, a, 'day');
            return o;
          }
          (vn.calendar = function(e, t, n) {
            var a = this._calendar[e] || this._calendar.sameElse;
            return j(a) ? a.call(t, n) : a;
          }),
            (vn.longDateFormat = function(e) {
              var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
              return t || !n
                ? t
                : ((this._longDateFormat[e] = n.replace(
                    /MMMM|MM|DD|dddd/g,
                    function(e) {
                      return e.slice(1);
                    }
                  )),
                  this._longDateFormat[e]);
            }),
            (vn.invalidDate = function() {
              return this._invalidDate;
            }),
            (vn.ordinal = function(e) {
              return this._ordinal.replace('%d', e);
            }),
            (vn.preparse = Yn),
            (vn.postformat = Yn),
            (vn.relativeTime = function(e, t, n, a) {
              var r = this._relativeTime[n];
              return j(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
            }),
            (vn.pastFuture = function(e, t) {
              var n = this._relativeTime[e > 0 ? 'future' : 'past'];
              return j(n) ? n(t) : n.replace(/%s/i, t);
            }),
            (vn.set = function(e) {
              var t, n;
              for (n in e) j((t = e[n])) ? (this[n] = t) : (this['_' + n] = t);
              (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                  (this._dayOfMonthOrdinalParse.source ||
                    this._ordinalParse.source) +
                    '|' +
                    /\d{1,2}/.source
                ));
            }),
            (vn.months = function(e, t) {
              return e
                ? s(this._months)
                  ? this._months[e.month()]
                  : this._months[
                      (this._months.isFormat || Pe).test(t)
                        ? 'format'
                        : 'standalone'
                    ][e.month()]
                : s(this._months)
                ? this._months
                : this._months.standalone;
            }),
            (vn.monthsShort = function(e, t) {
              return e
                ? s(this._monthsShort)
                  ? this._monthsShort[e.month()]
                  : this._monthsShort[Pe.test(t) ? 'format' : 'standalone'][
                      e.month()
                    ]
                : s(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
            }),
            (vn.monthsParse = function(e, t, n) {
              var a, r, s;
              if (this._monthsParseExact)
                return function(e, t, n) {
                  var a,
                    r,
                    s,
                    i = e.toLocaleLowerCase();
                  if (!this._monthsParse)
                    for (
                      this._monthsParse = [],
                        this._longMonthsParse = [],
                        this._shortMonthsParse = [],
                        a = 0;
                      a < 12;
                      ++a
                    )
                      (s = m([2e3, a])),
                        (this._shortMonthsParse[a] = this.monthsShort(
                          s,
                          ''
                        ).toLocaleLowerCase()),
                        (this._longMonthsParse[a] = this.months(
                          s,
                          ''
                        ).toLocaleLowerCase());
                  return n
                    ? 'MMM' === t
                      ? -1 !== (r = Se.call(this._shortMonthsParse, i))
                        ? r
                        : null
                      : -1 !== (r = Se.call(this._longMonthsParse, i))
                      ? r
                      : null
                    : 'MMM' === t
                    ? -1 !== (r = Se.call(this._shortMonthsParse, i))
                      ? r
                      : -1 !== (r = Se.call(this._longMonthsParse, i))
                      ? r
                      : null
                    : -1 !== (r = Se.call(this._longMonthsParse, i))
                    ? r
                    : -1 !== (r = Se.call(this._shortMonthsParse, i))
                    ? r
                    : null;
                }.call(this, e, t, n);
              for (
                this._monthsParse ||
                  ((this._monthsParse = []),
                  (this._longMonthsParse = []),
                  (this._shortMonthsParse = [])),
                  a = 0;
                a < 12;
                a++
              ) {
                if (
                  ((r = m([2e3, a])),
                  n &&
                    !this._longMonthsParse[a] &&
                    ((this._longMonthsParse[a] = new RegExp(
                      '^' + this.months(r, '').replace('.', '') + '$',
                      'i'
                    )),
                    (this._shortMonthsParse[a] = new RegExp(
                      '^' + this.monthsShort(r, '').replace('.', '') + '$',
                      'i'
                    ))),
                  n ||
                    this._monthsParse[a] ||
                    ((s =
                      '^' +
                      this.months(r, '') +
                      '|^' +
                      this.monthsShort(r, '')),
                    (this._monthsParse[a] = new RegExp(
                      s.replace('.', ''),
                      'i'
                    ))),
                  n && 'MMMM' === t && this._longMonthsParse[a].test(e))
                )
                  return a;
                if (n && 'MMM' === t && this._shortMonthsParse[a].test(e))
                  return a;
                if (!n && this._monthsParse[a].test(e)) return a;
              }
            }),
            (vn.monthsRegex = function(e) {
              return this._monthsParseExact
                ? (_(this, '_monthsRegex') || Ne.call(this),
                  e ? this._monthsStrictRegex : this._monthsRegex)
                : (_(this, '_monthsRegex') || (this._monthsRegex = ze),
                  this._monthsStrictRegex && e
                    ? this._monthsStrictRegex
                    : this._monthsRegex);
            }),
            (vn.monthsShortRegex = function(e) {
              return this._monthsParseExact
                ? (_(this, '_monthsRegex') || Ne.call(this),
                  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (_(this, '_monthsShortRegex') ||
                    (this._monthsShortRegex = Fe),
                  this._monthsShortStrictRegex && e
                    ? this._monthsShortStrictRegex
                    : this._monthsShortRegex);
            }),
            (vn.week = function(e) {
              return Ue(e, this._week.dow, this._week.doy).week;
            }),
            (vn.firstDayOfYear = function() {
              return this._week.doy;
            }),
            (vn.firstDayOfWeek = function() {
              return this._week.dow;
            }),
            (vn.weekdays = function(e, t) {
              var n = s(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    e && !0 !== e && this._weekdays.isFormat.test(t)
                      ? 'format'
                      : 'standalone'
                  ];
              return !0 === e ? Be(n, this._week.dow) : e ? n[e.day()] : n;
            }),
            (vn.weekdaysMin = function(e) {
              return !0 === e
                ? Be(this._weekdaysMin, this._week.dow)
                : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin;
            }),
            (vn.weekdaysShort = function(e) {
              return !0 === e
                ? Be(this._weekdaysShort, this._week.dow)
                : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort;
            }),
            (vn.weekdaysParse = function(e, t, n) {
              var a, r, s;
              if (this._weekdaysParseExact)
                return function(e, t, n) {
                  var a,
                    r,
                    s,
                    i = e.toLocaleLowerCase();
                  if (!this._weekdaysParse)
                    for (
                      this._weekdaysParse = [],
                        this._shortWeekdaysParse = [],
                        this._minWeekdaysParse = [],
                        a = 0;
                      a < 7;
                      ++a
                    )
                      (s = m([2e3, 1]).day(a)),
                        (this._minWeekdaysParse[a] = this.weekdaysMin(
                          s,
                          ''
                        ).toLocaleLowerCase()),
                        (this._shortWeekdaysParse[a] = this.weekdaysShort(
                          s,
                          ''
                        ).toLocaleLowerCase()),
                        (this._weekdaysParse[a] = this.weekdays(
                          s,
                          ''
                        ).toLocaleLowerCase());
                  return n
                    ? 'dddd' === t
                      ? -1 !== (r = Se.call(this._weekdaysParse, i))
                        ? r
                        : null
                      : 'ddd' === t
                      ? -1 !== (r = Se.call(this._shortWeekdaysParse, i))
                        ? r
                        : null
                      : -1 !== (r = Se.call(this._minWeekdaysParse, i))
                      ? r
                      : null
                    : 'dddd' === t
                    ? -1 !== (r = Se.call(this._weekdaysParse, i))
                      ? r
                      : -1 !== (r = Se.call(this._shortWeekdaysParse, i))
                      ? r
                      : -1 !== (r = Se.call(this._minWeekdaysParse, i))
                      ? r
                      : null
                    : 'ddd' === t
                    ? -1 !== (r = Se.call(this._shortWeekdaysParse, i))
                      ? r
                      : -1 !== (r = Se.call(this._weekdaysParse, i))
                      ? r
                      : -1 !== (r = Se.call(this._minWeekdaysParse, i))
                      ? r
                      : null
                    : -1 !== (r = Se.call(this._minWeekdaysParse, i))
                    ? r
                    : -1 !== (r = Se.call(this._weekdaysParse, i))
                    ? r
                    : -1 !== (r = Se.call(this._shortWeekdaysParse, i))
                    ? r
                    : null;
                }.call(this, e, t, n);
              for (
                this._weekdaysParse ||
                  ((this._weekdaysParse = []),
                  (this._minWeekdaysParse = []),
                  (this._shortWeekdaysParse = []),
                  (this._fullWeekdaysParse = [])),
                  a = 0;
                a < 7;
                a++
              ) {
                if (
                  ((r = m([2e3, 1]).day(a)),
                  n &&
                    !this._fullWeekdaysParse[a] &&
                    ((this._fullWeekdaysParse[a] = new RegExp(
                      '^' + this.weekdays(r, '').replace('.', '\\.?') + '$',
                      'i'
                    )),
                    (this._shortWeekdaysParse[a] = new RegExp(
                      '^' +
                        this.weekdaysShort(r, '').replace('.', '\\.?') +
                        '$',
                      'i'
                    )),
                    (this._minWeekdaysParse[a] = new RegExp(
                      '^' + this.weekdaysMin(r, '').replace('.', '\\.?') + '$',
                      'i'
                    ))),
                  this._weekdaysParse[a] ||
                    ((s =
                      '^' +
                      this.weekdays(r, '') +
                      '|^' +
                      this.weekdaysShort(r, '') +
                      '|^' +
                      this.weekdaysMin(r, '')),
                    (this._weekdaysParse[a] = new RegExp(
                      s.replace('.', ''),
                      'i'
                    ))),
                  n && 'dddd' === t && this._fullWeekdaysParse[a].test(e))
                )
                  return a;
                if (n && 'ddd' === t && this._shortWeekdaysParse[a].test(e))
                  return a;
                if (n && 'dd' === t && this._minWeekdaysParse[a].test(e))
                  return a;
                if (!n && this._weekdaysParse[a].test(e)) return a;
              }
            }),
            (vn.weekdaysRegex = function(e) {
              return this._weekdaysParseExact
                ? (_(this, '_weekdaysRegex') || et.call(this),
                  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (_(this, '_weekdaysRegex') || (this._weekdaysRegex = Ze),
                  this._weekdaysStrictRegex && e
                    ? this._weekdaysStrictRegex
                    : this._weekdaysRegex);
            }),
            (vn.weekdaysShortRegex = function(e) {
              return this._weekdaysParseExact
                ? (_(this, '_weekdaysRegex') || et.call(this),
                  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (_(this, '_weekdaysShortRegex') ||
                    (this._weekdaysShortRegex = Xe),
                  this._weekdaysShortStrictRegex && e
                    ? this._weekdaysShortStrictRegex
                    : this._weekdaysShortRegex);
            }),
            (vn.weekdaysMinRegex = function(e) {
              return this._weekdaysParseExact
                ? (_(this, '_weekdaysRegex') || et.call(this),
                  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (_(this, '_weekdaysMinRegex') ||
                    (this._weekdaysMinRegex = Qe),
                  this._weekdaysMinStrictRegex && e
                    ? this._weekdaysMinStrictRegex
                    : this._weekdaysMinRegex);
            }),
            (vn.isPM = function(e) {
              return 'p' === (e + '').toLowerCase().charAt(0);
            }),
            (vn.meridiem = function(e, t, n) {
              return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
            }),
            _t('en', {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function(e) {
                var t = e % 10,
                  n =
                    1 === D((e % 100) / 10)
                      ? 'th'
                      : 1 === t
                      ? 'st'
                      : 2 === t
                      ? 'nd'
                      : 3 === t
                      ? 'rd'
                      : 'th';
                return e + n;
              },
            }),
            (r.lang = w(
              'moment.lang is deprecated. Use moment.locale instead.',
              _t
            )),
            (r.langData = w(
              'moment.langData is deprecated. Use moment.localeData instead.',
              mt
            ));
          var wn = Math.abs;
          function Tn(e, t, n, a) {
            var r = Bt(t, n);
            return (
              (e._milliseconds += a * r._milliseconds),
              (e._days += a * r._days),
              (e._months += a * r._months),
              e._bubble()
            );
          }
          function Sn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function Hn(e) {
            return (4800 * e) / 146097;
          }
          function jn(e) {
            return (146097 * e) / 4800;
          }
          function xn(e) {
            return function() {
              return this.as(e);
            };
          }
          var En = xn('ms'),
            On = xn('s'),
            Pn = xn('m'),
            Wn = xn('h'),
            Rn = xn('d'),
            An = xn('w'),
            Cn = xn('M'),
            Fn = xn('Q'),
            zn = xn('y');
          function Nn(e) {
            return function() {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var In = Nn('milliseconds'),
            Jn = Nn('seconds'),
            Gn = Nn('minutes'),
            Un = Nn('hours'),
            qn = Nn('days'),
            Bn = Nn('months'),
            Vn = Nn('years'),
            $n = Math.round,
            Kn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
            Zn = Math.abs;
          function Xn(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function Qn() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n = Zn(this._milliseconds) / 1e3,
              a = Zn(this._days),
              r = Zn(this._months);
            (e = v(n / 60)), (t = v(e / 60)), (n %= 60), (e %= 60);
            var s = v(r / 12),
              i = (r %= 12),
              o = a,
              d = t,
              u = e,
              l = n ? n.toFixed(3).replace(/\.?0+$/, '') : '',
              _ = this.asSeconds();
            if (!_) return 'P0D';
            var c = _ < 0 ? '-' : '',
              m = Xn(this._months) !== Xn(_) ? '-' : '',
              h = Xn(this._days) !== Xn(_) ? '-' : '',
              f = Xn(this._milliseconds) !== Xn(_) ? '-' : '';
            return (
              c +
              'P' +
              (s ? m + s + 'Y' : '') +
              (i ? m + i + 'M' : '') +
              (o ? h + o + 'D' : '') +
              (d || u || l ? 'T' : '') +
              (d ? f + d + 'H' : '') +
              (u ? f + u + 'M' : '') +
              (l ? f + l + 'S' : '')
            );
          }
          var ea = Rt.prototype;
          return (
            (ea.isValid = function() {
              return this._isValid;
            }),
            (ea.abs = function() {
              var e = this._data;
              return (
                (this._milliseconds = wn(this._milliseconds)),
                (this._days = wn(this._days)),
                (this._months = wn(this._months)),
                (e.milliseconds = wn(e.milliseconds)),
                (e.seconds = wn(e.seconds)),
                (e.minutes = wn(e.minutes)),
                (e.hours = wn(e.hours)),
                (e.months = wn(e.months)),
                (e.years = wn(e.years)),
                this
              );
            }),
            (ea.add = function(e, t) {
              return Tn(this, e, t, 1);
            }),
            (ea.subtract = function(e, t) {
              return Tn(this, e, t, -1);
            }),
            (ea.as = function(e) {
              if (!this.isValid()) return NaN;
              var t,
                n,
                a = this._milliseconds;
              if ('month' === (e = W(e)) || 'quarter' === e || 'year' === e)
                switch (
                  ((t = this._days + a / 864e5), (n = this._months + Hn(t)), e)
                ) {
                  case 'month':
                    return n;
                  case 'quarter':
                    return n / 3;
                  case 'year':
                    return n / 12;
                }
              else
                switch (((t = this._days + Math.round(jn(this._months))), e)) {
                  case 'week':
                    return t / 7 + a / 6048e5;
                  case 'day':
                    return t + a / 864e5;
                  case 'hour':
                    return 24 * t + a / 36e5;
                  case 'minute':
                    return 1440 * t + a / 6e4;
                  case 'second':
                    return 86400 * t + a / 1e3;
                  case 'millisecond':
                    return Math.floor(864e5 * t) + a;
                  default:
                    throw new Error('Unknown unit ' + e);
                }
            }),
            (ea.asMilliseconds = En),
            (ea.asSeconds = On),
            (ea.asMinutes = Pn),
            (ea.asHours = Wn),
            (ea.asDays = Rn),
            (ea.asWeeks = An),
            (ea.asMonths = Cn),
            (ea.asQuarters = Fn),
            (ea.asYears = zn),
            (ea.valueOf = function() {
              return this.isValid()
                ? this._milliseconds +
                    864e5 * this._days +
                    (this._months % 12) * 2592e6 +
                    31536e6 * D(this._months / 12)
                : NaN;
            }),
            (ea._bubble = function() {
              var e,
                t,
                n,
                a,
                r,
                s = this._milliseconds,
                i = this._days,
                o = this._months,
                d = this._data;
              return (
                (s >= 0 && i >= 0 && o >= 0) ||
                  (s <= 0 && i <= 0 && o <= 0) ||
                  ((s += 864e5 * Sn(jn(o) + i)), (i = 0), (o = 0)),
                (d.milliseconds = s % 1e3),
                (e = v(s / 1e3)),
                (d.seconds = e % 60),
                (t = v(e / 60)),
                (d.minutes = t % 60),
                (n = v(t / 60)),
                (d.hours = n % 24),
                (i += v(n / 24)),
                (r = v(Hn(i))),
                (o += r),
                (i -= Sn(jn(r))),
                (a = v(o / 12)),
                (o %= 12),
                (d.days = i),
                (d.months = o),
                (d.years = a),
                this
              );
            }),
            (ea.clone = function() {
              return Bt(this);
            }),
            (ea.get = function(e) {
              return (e = W(e)), this.isValid() ? this[e + 's']() : NaN;
            }),
            (ea.milliseconds = In),
            (ea.seconds = Jn),
            (ea.minutes = Gn),
            (ea.hours = Un),
            (ea.days = qn),
            (ea.weeks = function() {
              return v(this.days() / 7);
            }),
            (ea.months = Bn),
            (ea.years = Vn),
            (ea.humanize = function(e) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var t = this.localeData(),
                n = (function(e, t, n) {
                  var a = Bt(e).abs(),
                    r = $n(a.as('s')),
                    s = $n(a.as('m')),
                    i = $n(a.as('h')),
                    o = $n(a.as('d')),
                    d = $n(a.as('M')),
                    u = $n(a.as('y')),
                    l = (r <= Kn.ss && ['s', r]) ||
                      (r < Kn.s && ['ss', r]) ||
                      (s <= 1 && ['m']) ||
                      (s < Kn.m && ['mm', s]) ||
                      (i <= 1 && ['h']) ||
                      (i < Kn.h && ['hh', i]) ||
                      (o <= 1 && ['d']) ||
                      (o < Kn.d && ['dd', o]) ||
                      (d <= 1 && ['M']) ||
                      (d < Kn.M && ['MM', d]) ||
                      (u <= 1 && ['y']) || ['yy', u];
                  return (
                    (l[2] = t),
                    (l[3] = +e > 0),
                    (l[4] = n),
                    function(e, t, n, a, r) {
                      return r.relativeTime(t || 1, !!n, e, a);
                    }.apply(null, l)
                  );
                })(this, !e, t);
              return e && (n = t.pastFuture(+this, n)), t.postformat(n);
            }),
            (ea.toISOString = Qn),
            (ea.toString = Qn),
            (ea.toJSON = Qn),
            (ea.locale = tn),
            (ea.localeData = an),
            (ea.toIsoString = w(
              'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
              Qn
            )),
            (ea.lang = nn),
            G('X', 0, 0, 'unix'),
            G('x', 0, 0, 'valueOf'),
            le('x', se),
            le('X', /[+-]?\d+(\.\d{1,3})?/),
            he('X', function(e, t, n) {
              n._d = new Date(1e3 * parseFloat(e, 10));
            }),
            he('x', function(e, t, n) {
              n._d = new Date(D(e));
            }),
            (r.version = '2.24.0'),
            (t = xt),
            (r.fn = Ln),
            (r.min = function() {
              return Pt('isBefore', [].slice.call(arguments, 0));
            }),
            (r.max = function() {
              return Pt('isAfter', [].slice.call(arguments, 0));
            }),
            (r.now = function() {
              return Date.now ? Date.now() : +new Date();
            }),
            (r.utc = m),
            (r.unix = function(e) {
              return xt(1e3 * e);
            }),
            (r.months = function(e, t) {
              return kn(e, t, 'months');
            }),
            (r.isDate = u),
            (r.locale = _t),
            (r.invalid = p),
            (r.duration = Bt),
            (r.isMoment = Y),
            (r.weekdays = function(e, t, n) {
              return bn(e, t, n, 'weekdays');
            }),
            (r.parseZone = function() {
              return xt.apply(null, arguments).parseZone();
            }),
            (r.localeData = mt),
            (r.isDuration = At),
            (r.monthsShort = function(e, t) {
              return kn(e, t, 'monthsShort');
            }),
            (r.weekdaysMin = function(e, t, n) {
              return bn(e, t, n, 'weekdaysMin');
            }),
            (r.defineLocale = ct),
            (r.updateLocale = function(e, t) {
              if (null != t) {
                var n,
                  a,
                  r = it;
                null != (a = lt(e)) && (r = a._config),
                  (t = x(r, t)),
                  ((n = new E(t)).parentLocale = ot[e]),
                  (ot[e] = n),
                  _t(e);
              } else
                null != ot[e] &&
                  (null != ot[e].parentLocale
                    ? (ot[e] = ot[e].parentLocale)
                    : null != ot[e] && delete ot[e]);
              return ot[e];
            }),
            (r.locales = function() {
              return T(ot);
            }),
            (r.weekdaysShort = function(e, t, n) {
              return bn(e, t, n, 'weekdaysShort');
            }),
            (r.normalizeUnits = W),
            (r.relativeTimeRounding = function(e) {
              return void 0 === e
                ? $n
                : 'function' == typeof e && (($n = e), !0);
            }),
            (r.relativeTimeThreshold = function(e, t) {
              return (
                void 0 !== Kn[e] &&
                (void 0 === t
                  ? Kn[e]
                  : ((Kn[e] = t), 's' === e && (Kn.ss = t - 1), !0))
              );
            }),
            (r.calendarFormat = function(e, t) {
              var n = e.diff(t, 'days', !0);
              return n < -6
                ? 'sameElse'
                : n < -1
                ? 'lastWeek'
                : n < 0
                ? 'lastDay'
                : n < 1
                ? 'sameDay'
                : n < 2
                ? 'nextDay'
                : n < 7
                ? 'nextWeek'
                : 'sameElse';
            }),
            (r.prototype = Ln),
            (r.HTML5_FMT = {
              DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
              DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
              DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
              DATE: 'YYYY-MM-DD',
              TIME: 'HH:mm',
              TIME_SECONDS: 'HH:mm:ss',
              TIME_MS: 'HH:mm:ss.SSS',
              WEEK: 'GGGG-[W]WW',
              MONTH: 'YYYY-MM',
            }),
            r
          );
        })();
      }.call(this, n(137)(e)));
    },
    function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          a = '__lodash_hash_undefined__',
          r = 1 / 0,
          s = '[object Function]',
          i = '[object GeneratorFunction]',
          o = '[object Symbol]',
          d = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          u = /^\w*$/,
          l = /^\./,
          _ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          c = /\\(\\)?/g,
          m = /^\[object .+?Constructor\]$/,
          h = 'object' == typeof t && t && t.Object === Object && t,
          f = 'object' == typeof self && self && self.Object === Object && self,
          p = h || f || Function('return this')();
        var y,
          M = Array.prototype,
          g = Function.prototype,
          L = Object.prototype,
          Y = p['__core-js_shared__'],
          v = (y = /[^.]+$/.exec((Y && Y.keys && Y.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + y
            : '',
          D = g.toString,
          k = L.hasOwnProperty,
          b = L.toString,
          w = RegExp(
            '^' +
              D.call(k)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          T = p.Symbol,
          S = M.splice,
          H = z(p, 'Map'),
          j = z(Object, 'create'),
          x = T ? T.prototype : void 0,
          E = x ? x.toString : void 0;
        function O(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
          }
        }
        function P(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
          }
        }
        function W(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
          }
        }
        function R(e, t) {
          for (var n, a, r = e.length; r--; )
            if ((n = e[r][0]) === (a = t) || (n != n && a != a)) return r;
          return -1;
        }
        function A(e, t) {
          for (
            var n,
              a = 0,
              r = (t = (function(e, t) {
                if (G(e)) return !1;
                var n = typeof e;
                if (
                  'number' == n ||
                  'symbol' == n ||
                  'boolean' == n ||
                  null == e ||
                  q(e)
                )
                  return !0;
                return (
                  u.test(e) || !d.test(e) || (null != t && (e in Object(t)))
                );
              })(t, e)
                ? [t]
                : G((n = t))
                ? n
                : N(n)).length;
            null != e && a < r;

          )
            e = e[I(t[a++])];
          return a && a == r ? e : void 0;
        }
        function C(e) {
          return (
            !(!U(e) || ((t = e), v && v in t)) &&
            ((function(e) {
              var t = U(e) ? b.call(e) : '';
              return t == s || t == i;
            })(e) ||
            (function(e) {
              var t = !1;
              if (null != e && 'function' != typeof e.toString)
                try {
                  t = !!(e + '');
                } catch (e) {}
              return t;
            })(e)
              ? w
              : m
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
        function F(e, t) {
          var n,
            a,
            r = e.__data__;
          return ('string' == (a = typeof (n = t)) ||
          'number' == a ||
          'symbol' == a ||
          'boolean' == a
          ? '__proto__' !== n
          : null === n)
            ? r['string' == typeof t ? 'string' : 'hash']
            : r.map;
        }
        function z(e, t) {
          var n = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return C(n) ? n : void 0;
        }
        (O.prototype.clear = function() {
          this.__data__ = j ? j(null) : {};
        }),
          (O.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (O.prototype.get = function(e) {
            var t = this.__data__;
            if (j) {
              var n = t[e];
              return n === a ? void 0 : n;
            }
            return k.call(t, e) ? t[e] : void 0;
          }),
          (O.prototype.has = function(e) {
            var t = this.__data__;
            return j ? void 0 !== t[e] : k.call(t, e);
          }),
          (O.prototype.set = function(e, t) {
            return (this.__data__[e] = j && void 0 === t ? a : t), this;
          }),
          (P.prototype.clear = function() {
            this.__data__ = [];
          }),
          (P.prototype.delete = function(e) {
            var t = this.__data__,
              n = R(t, e);
            return !(
              n < 0 || (n == t.length - 1 ? t.pop() : S.call(t, n, 1), 0)
            );
          }),
          (P.prototype.get = function(e) {
            var t = this.__data__,
              n = R(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (P.prototype.has = function(e) {
            return R(this.__data__, e) > -1;
          }),
          (P.prototype.set = function(e, t) {
            var n = this.__data__,
              a = R(n, e);
            return a < 0 ? n.push([e, t]) : (n[a][1] = t), this;
          }),
          (W.prototype.clear = function() {
            this.__data__ = {
              hash: new O(),
              map: new (H || P)(),
              string: new O(),
            };
          }),
          (W.prototype.delete = function(e) {
            return F(this, e).delete(e);
          }),
          (W.prototype.get = function(e) {
            return F(this, e).get(e);
          }),
          (W.prototype.has = function(e) {
            return F(this, e).has(e);
          }),
          (W.prototype.set = function(e, t) {
            return F(this, e).set(e, t), this;
          });
        var N = J(function(e) {
          var t;
          e =
            null == (t = e)
              ? ''
              : (function(e) {
                  if ('string' == typeof e) return e;
                  if (q(e)) return E ? E.call(e) : '';
                  var t = e + '';
                  return '0' == t && 1 / e == -r ? '-0' : t;
                })(t);
          var n = [];
          return (
            l.test(e) && n.push(''),
            e.replace(_, function(e, t, a, r) {
              n.push(a ? r.replace(c, '$1') : t || e);
            }),
            n
          );
        });
        function I(e) {
          if ('string' == typeof e || q(e)) return e;
          var t = e + '';
          return '0' == t && 1 / e == -r ? '-0' : t;
        }
        function J(e, t) {
          if ('function' != typeof e || (t && 'function' != typeof t))
            throw new TypeError(n);
          var a = function() {
            var n = arguments,
              r = t ? t.apply(this, n) : n[0],
              s = a.cache;
            if (s.has(r)) return s.get(r);
            var i = e.apply(this, n);
            return (a.cache = s.set(r, i)), i;
          };
          return (a.cache = new (J.Cache || W)()), a;
        }
        J.Cache = W;
        var G = Array.isArray;
        function U(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function q(e) {
          return (
            'symbol' == typeof e ||
            ((function(e) {
              return !!e && 'object' == typeof e;
            })(e) &&
              b.call(e) == o)
          );
        }
        e.exports = function(e, t, n) {
          var a = null == e ? void 0 : A(e, t);
          return void 0 === a ? n : a;
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
                  a = e[3];
                if (!a) return n;
                if (t && 'function' == typeof btoa) {
                  var r = ((i = a),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                      ' */'),
                    s = a.sources.map(function(e) {
                      return '/*# sourceURL=' + a.sourceRoot + e + ' */';
                    });
                  return [n]
                    .concat(s)
                    .concat([r])
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
            for (var a = {}, r = 0; r < this.length; r++) {
              var s = this[r][0];
              null != s && (a[s] = !0);
            }
            for (r = 0; r < e.length; r++) {
              var i = e[r];
              (null != i[0] && a[i[0]]) ||
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
      var a,
        r,
        s = {},
        i = ((a = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === r && (r = a.apply(this, arguments)), r;
        }),
        o = (function(e) {
          var t = {};
          return function(e, n) {
            if ('function' == typeof e) return e();
            if (void 0 === t[e]) {
              var a = function(e, t) {
                return t ? t.querySelector(e) : document.querySelector(e);
              }.call(this, e, n);
              if (
                window.HTMLIFrameElement &&
                a instanceof window.HTMLIFrameElement
              )
                try {
                  a = a.contentDocument.head;
                } catch (e) {
                  a = null;
                }
              t[e] = a;
            }
            return t[e];
          };
        })(),
        d = null,
        u = 0,
        l = [],
        _ = n(142);
      function c(e, t) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n],
            r = s[a.id];
          if (r) {
            r.refs++;
            for (var i = 0; i < r.parts.length; i++) r.parts[i](a.parts[i]);
            for (; i < a.parts.length; i++) r.parts.push(M(a.parts[i], t));
          } else {
            var o = [];
            for (i = 0; i < a.parts.length; i++) o.push(M(a.parts[i], t));
            s[a.id] = { id: a.id, refs: 1, parts: o };
          }
        }
      }
      function m(e, t) {
        for (var n = [], a = {}, r = 0; r < e.length; r++) {
          var s = e[r],
            i = t.base ? s[0] + t.base : s[0],
            o = { css: s[1], media: s[2], sourceMap: s[3] };
          a[i] ? a[i].parts.push(o) : n.push((a[i] = { id: i, parts: [o] }));
        }
        return n;
      }
      function h(e, t) {
        var n = o(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var a = l[l.length - 1];
        if ('top' === e.insertAt)
          a
            ? a.nextSibling
              ? n.insertBefore(t, a.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            l.push(t);
        else if ('bottom' === e.insertAt) n.appendChild(t);
        else {
          if ('object' != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var r = o(e.insertAt.before, n);
          n.insertBefore(t, r);
        }
      }
      function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1);
      }
      function p(e) {
        var t = document.createElement('style');
        if (
          (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
          void 0 === e.attrs.nonce)
        ) {
          var a = (function() {
            0;
            return n.nc;
          })();
          a && (e.attrs.nonce = a);
        }
        return y(t, e.attrs), h(e, t), t;
      }
      function y(e, t) {
        Object.keys(t).forEach(function(n) {
          e.setAttribute(n, t[n]);
        });
      }
      function M(e, t) {
        var n, a, r, s;
        if (t.transform && e.css) {
          if (
            !(s =
              'function' == typeof t.transform
                ? t.transform(e.css)
                : t.transform.default(e.css))
          )
            return function() {};
          e.css = s;
        }
        if (t.singleton) {
          var i = u++;
          (n = d || (d = p(t))),
            (a = Y.bind(null, n, i, !1)),
            (r = Y.bind(null, n, i, !0));
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
                  y(t, e.attrs),
                  h(e, t),
                  t
                );
              })(t)),
              (a = function(e, t, n) {
                var a = n.css,
                  r = n.sourceMap,
                  s = void 0 === t.convertToAbsoluteUrls && r;
                (t.convertToAbsoluteUrls || s) && (a = _(a));
                r &&
                  (a +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                    ' */');
                var i = new Blob([a], { type: 'text/css' }),
                  o = e.href;
                (e.href = URL.createObjectURL(i)), o && URL.revokeObjectURL(o);
              }.bind(null, n, t)),
              (r = function() {
                f(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = p(t)),
              (a = function(e, t) {
                var n = t.css,
                  a = t.media;
                a && e.setAttribute('media', a);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(n));
                }
              }.bind(null, n)),
              (r = function() {
                f(n);
              }));
        return (
          a(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              a((e = t));
            } else r();
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
        var n = m(e, t);
        return (
          c(n, t),
          function(e) {
            for (var a = [], r = 0; r < n.length; r++) {
              var i = n[r];
              (o = s[i.id]).refs--, a.push(o);
            }
            e && c(m(e, t), t);
            for (r = 0; r < a.length; r++) {
              var o;
              if (0 === (o = a[r]).refs) {
                for (var d = 0; d < o.parts.length; d++) o.parts[d]();
                delete s[o.id];
              }
            }
          }
        );
      };
      var g,
        L = ((g = []),
        function(e, t) {
          return (g[e] = t), g.filter(Boolean).join('\n');
        });
      function Y(e, t, n, a) {
        var r = n ? '' : a.css;
        if (e.styleSheet) e.styleSheet.cssText = L(t, r);
        else {
          var s = document.createTextNode(r),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(s, i[t]) : e.appendChild(s);
        }
      }
    },
    function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          a = NaN,
          r = '[object Symbol]',
          s = /^\s+|\s+$/g,
          i = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          d = /^0o[0-7]+$/i,
          u = parseInt,
          l = 'object' == typeof t && t && t.Object === Object && t,
          _ = 'object' == typeof self && self && self.Object === Object && self,
          c = l || _ || Function('return this')(),
          m = Object.prototype.toString,
          h = Math.max,
          f = Math.min,
          p = function() {
            return c.Date.now();
          };
        function y(e, t, a) {
          var r,
            s,
            i,
            o,
            d,
            u,
            l = 0,
            _ = !1,
            c = !1,
            m = !0;
          if ('function' != typeof e) throw new TypeError(n);
          function y(t) {
            var n = r,
              a = s;
            return (r = s = void 0), (l = t), (o = e.apply(a, n));
          }
          function L(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (c && e - l >= i);
          }
          function Y() {
            var e = p();
            if (L(e)) return v(e);
            d = setTimeout(
              Y,
              (function(e) {
                var n = t - (e - u);
                return c ? f(n, i - (e - l)) : n;
              })(e)
            );
          }
          function v(e) {
            return (d = void 0), m && r ? y(e) : ((r = s = void 0), o);
          }
          function D() {
            var e = p(),
              n = L(e);
            if (((r = arguments), (s = this), (u = e), n)) {
              if (void 0 === d)
                return (function(e) {
                  return (l = e), (d = setTimeout(Y, t)), _ ? y(e) : o;
                })(u);
              if (c) return (d = setTimeout(Y, t)), y(u);
            }
            return void 0 === d && (d = setTimeout(Y, t)), o;
          }
          return (
            (t = g(t) || 0),
            M(a) &&
              ((_ = !!a.leading),
              (i = (c = 'maxWait' in a) ? h(g(a.maxWait) || 0, t) : i),
              (m = 'trailing' in a ? !!a.trailing : m)),
            (D.cancel = function() {
              void 0 !== d && clearTimeout(d),
                (l = 0),
                (r = u = s = d = void 0);
            }),
            (D.flush = function() {
              return void 0 === d ? o : v(p());
            }),
            D
          );
        }
        function M(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function g(e) {
          if ('number' == typeof e) return e;
          if (
            (function(e) {
              return (
                'symbol' == typeof e ||
                ((function(e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  m.call(e) == r)
              );
            })(e)
          )
            return a;
          if (M(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = M(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(s, '');
          var n = o.test(e);
          return n || d.test(e) ? u(e.slice(2), n ? 2 : 8) : i.test(e) ? a : +e;
        }
        e.exports = function(e, t, a) {
          var r = !0,
            s = !0;
          if ('function' != typeof e) throw new TypeError(n);
          return (
            M(a) &&
              ((r = 'leading' in a ? !!a.leading : r),
              (s = 'trailing' in a ? !!a.trailing : s)),
            y(e, t, { leading: r, maxWait: t, trailing: s })
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
        function a(e) {
          return function() {
            return e;
          };
        }
        (e = e && e.hasOwnProperty('default') ? e.default : e),
          (t = t && t.hasOwnProperty('default') ? t.default : t);
        var r = function() {};
        (r.thatReturns = a),
          (r.thatReturnsFalse = a(!1)),
          (r.thatReturnsTrue = a(!0)),
          (r.thatReturnsNull = a(null)),
          (r.thatReturnsThis = function() {
            return this;
          }),
          (r.thatReturnsArgument = function(e) {
            return e;
          });
        var s = r,
          i = function(e) {};
        i = function(e) {
          if (void 0 === e)
            throw new Error('invariant requires an error message argument');
        };
        var o = function(e, t, n, a, r, s, o, d) {
            if ((i(t), !e)) {
              var u;
              if (void 0 === t)
                u = new Error(
                  'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                );
              else {
                var l = [n, a, r, s, o, d],
                  _ = 0;
                (u = new Error(
                  t.replace(/%s/g, function() {
                    return l[_++];
                  })
                )).name = 'Invariant Violation';
              }
              throw ((u.framesToPop = 1), u);
            }
          },
          d = function(e, t) {
            if (void 0 === t)
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning message argument'
              );
            if (0 !== t.indexOf('Failed Composite propType: ') && !e) {
              for (
                var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2;
                r < n;
                r++
              )
                a[r - 2] = arguments[r];
              (function(e) {
                for (
                  var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1;
                  a < t;
                  a++
                )
                  n[a - 1] = arguments[a];
                var r = 0,
                  s =
                    'Warning: ' +
                    e.replace(/%s/g, function() {
                      return n[r++];
                    });
                'undefined' != typeof console && console.error(s);
                try {
                  throw new Error(s);
                } catch (e) {}
              }.apply(void 0, [t].concat(a)));
            }
          },
          u = Object.getOwnPropertySymbols,
          l = Object.prototype.hasOwnProperty,
          _ = Object.prototype.propertyIsEnumerable,
          c = (function() {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
                return !1;
              for (var t = {}, n = 0; n < 10; n++)
                t['_' + String.fromCharCode(n)] = n;
              var a = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e];
              });
              if ('0123456789' !== a.join('')) return !1;
              var r = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function(e) {
                  r[e] = e;
                }),
                'abcdefghijklmnopqrst' ===
                  Object.keys(Object.assign({}, r)).join('')
              );
            } catch (e) {
              return !1;
            }
          })()
            ? Object.assign
            : function(e, t) {
                for (
                  var n,
                    a,
                    r = (function(e) {
                      if (null == e)
                        throw new TypeError(
                          'Object.assign cannot be called with null or undefined'
                        );
                      return Object(e);
                    })(e),
                    s = 1;
                  s < arguments.length;
                  s++
                ) {
                  for (var i in (n = Object(arguments[s])))
                    l.call(n, i) && (r[i] = n[i]);
                  if (u) {
                    a = u(n);
                    for (var o = 0; o < a.length; o++)
                      _.call(n, a[o]) && (r[a[o]] = n[a[o]]);
                  }
                }
                return r;
              },
          m = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
          h = o,
          f = d,
          p = m,
          y = {},
          M = function(e, t, n, a, r) {
            for (var s in e)
              if (e.hasOwnProperty(s)) {
                var i;
                try {
                  h(
                    'function' == typeof e[s],
                    '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
                    a || 'React class',
                    n,
                    s,
                    typeof e[s]
                  ),
                    (i = e[s](t, s, a, n, null, p));
                } catch (e) {
                  i = e;
                }
                if (
                  (f(
                    !i || i instanceof Error,
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    a || 'React class',
                    n,
                    s,
                    typeof i
                  ),
                  i instanceof Error && !(i.message in y))
                ) {
                  y[i.message] = !0;
                  var o = r ? r() : '';
                  f(
                    !1,
                    'Failed %s type: %s%s',
                    n,
                    i.message,
                    null != o ? o : ''
                  );
                }
              }
          },
          g = function(e, t) {
            var n = 'function' == typeof Symbol && Symbol.iterator,
              a = '@@iterator',
              r = '<<anonymous>>',
              i = {
                array: _('array'),
                bool: _('boolean'),
                func: _('function'),
                number: _('number'),
                object: _('object'),
                string: _('string'),
                symbol: _('symbol'),
                any: l(s.thatReturnsNull),
                arrayOf: function(e) {
                  return l(function(t, n, a, r, s) {
                    if ('function' != typeof e)
                      return new u(
                        'Property `' +
                          s +
                          '` of component `' +
                          a +
                          '` has invalid PropType notation inside arrayOf.'
                      );
                    var i = t[n];
                    if (!Array.isArray(i)) {
                      var o = f(i);
                      return new u(
                        'Invalid ' +
                          r +
                          ' `' +
                          s +
                          '` of type `' +
                          o +
                          '` supplied to `' +
                          a +
                          '`, expected an array.'
                      );
                    }
                    for (var d = 0; d < i.length; d++) {
                      var l = e(i, d, a, r, s + '[' + d + ']', m);
                      if (l instanceof Error) return l;
                    }
                    return null;
                  });
                },
                element: l(function(t, n, a, r, s) {
                  var i = t[n];
                  if (!e(i)) {
                    var o = f(i);
                    return new u(
                      'Invalid ' +
                        r +
                        ' `' +
                        s +
                        '` of type `' +
                        o +
                        '` supplied to `' +
                        a +
                        '`, expected a single ReactElement.'
                    );
                  }
                  return null;
                }),
                instanceOf: function(e) {
                  return l(function(t, n, a, s, i) {
                    if (!(t[n] instanceof e)) {
                      var o = e.name || r,
                        d =
                          (l = t[n]).constructor && l.constructor.name
                            ? l.constructor.name
                            : r;
                      return new u(
                        'Invalid ' +
                          s +
                          ' `' +
                          i +
                          '` of type `' +
                          d +
                          '` supplied to `' +
                          a +
                          '`, expected instance of `' +
                          o +
                          '`.'
                      );
                    }
                    var l;
                    return null;
                  });
                },
                node: l(function(e, t, n, a, r) {
                  return h(e[t])
                    ? null
                    : new u(
                        'Invalid ' +
                          a +
                          ' `' +
                          r +
                          '` supplied to `' +
                          n +
                          '`, expected a ReactNode.'
                      );
                }),
                objectOf: function(e) {
                  return l(function(t, n, a, r, s) {
                    if ('function' != typeof e)
                      return new u(
                        'Property `' +
                          s +
                          '` of component `' +
                          a +
                          '` has invalid PropType notation inside objectOf.'
                      );
                    var i = t[n],
                      o = f(i);
                    if ('object' !== o)
                      return new u(
                        'Invalid ' +
                          r +
                          ' `' +
                          s +
                          '` of type `' +
                          o +
                          '` supplied to `' +
                          a +
                          '`, expected an object.'
                      );
                    for (var d in i)
                      if (i.hasOwnProperty(d)) {
                        var l = e(i, d, a, r, s + '.' + d, m);
                        if (l instanceof Error) return l;
                      }
                    return null;
                  });
                },
                oneOf: function(e) {
                  return Array.isArray(e)
                    ? l(function(t, n, a, r, s) {
                        for (var i = t[n], o = 0; o < e.length; o++)
                          if (
                            ((d = i),
                            (l = e[o]),
                            d === l
                              ? 0 !== d || 1 / d == 1 / l
                              : d != d && l != l)
                          )
                            return null;
                        var d,
                          l,
                          _ = JSON.stringify(e);
                        return new u(
                          'Invalid ' +
                            r +
                            ' `' +
                            s +
                            '` of value `' +
                            i +
                            '` supplied to `' +
                            a +
                            '`, expected one of ' +
                            _ +
                            '.'
                        );
                      })
                    : (d(
                        !1,
                        'Invalid argument supplied to oneOf, expected an instance of array.'
                      ),
                      s.thatReturnsNull);
                },
                oneOfType: function(e) {
                  if (!Array.isArray(e))
                    return (
                      d(
                        !1,
                        'Invalid argument supplied to oneOfType, expected an instance of array.'
                      ),
                      s.thatReturnsNull
                    );
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ('function' != typeof n)
                      return (
                        d(
                          !1,
                          'Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.',
                          y(n),
                          t
                        ),
                        s.thatReturnsNull
                      );
                  }
                  return l(function(t, n, a, r, s) {
                    for (var i = 0; i < e.length; i++) {
                      var o = e[i];
                      if (null == o(t, n, a, r, s, m)) return null;
                    }
                    return new u(
                      'Invalid ' + r + ' `' + s + '` supplied to `' + a + '`.'
                    );
                  });
                },
                shape: function(e) {
                  return l(function(t, n, a, r, s) {
                    var i = t[n],
                      o = f(i);
                    if ('object' !== o)
                      return new u(
                        'Invalid ' +
                          r +
                          ' `' +
                          s +
                          '` of type `' +
                          o +
                          '` supplied to `' +
                          a +
                          '`, expected `object`.'
                      );
                    for (var d in e) {
                      var l = e[d];
                      if (l) {
                        var _ = l(i, d, a, r, s + '.' + d, m);
                        if (_) return _;
                      }
                    }
                    return null;
                  });
                },
                exact: function(e) {
                  return l(function(t, n, a, r, s) {
                    var i = t[n],
                      o = f(i);
                    if ('object' !== o)
                      return new u(
                        'Invalid ' +
                          r +
                          ' `' +
                          s +
                          '` of type `' +
                          o +
                          '` supplied to `' +
                          a +
                          '`, expected `object`.'
                      );
                    var d = c({}, t[n], e);
                    for (var l in d) {
                      var _ = e[l];
                      if (!_)
                        return new u(
                          'Invalid ' +
                            r +
                            ' `' +
                            s +
                            '` key `' +
                            l +
                            '` supplied to `' +
                            a +
                            '`.\nBad object: ' +
                            JSON.stringify(t[n], null, '  ') +
                            '\nValid keys: ' +
                            JSON.stringify(Object.keys(e), null, '  ')
                        );
                      var h = _(i, l, a, r, s + '.' + l, m);
                      if (h) return h;
                    }
                    return null;
                  });
                },
              };
            function u(e) {
              (this.message = e), (this.stack = '');
            }
            function l(e) {
              var n = {},
                a = 0;
              function s(s, i, l, _, c, h, f) {
                if (((_ = _ || r), (h = h || l), f !== m))
                  if (t)
                    o(
                      !1,
                      'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                    );
                  else if ('undefined' != typeof console) {
                    var p = _ + ':' + l;
                    !n[p] &&
                      a < 3 &&
                      (d(
                        !1,
                        'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                        h,
                        _
                      ),
                      (n[p] = !0),
                      a++);
                  }
                return null == i[l]
                  ? s
                    ? null === i[l]
                      ? new u(
                          'The ' +
                            c +
                            ' `' +
                            h +
                            '` is marked as required in `' +
                            _ +
                            '`, but its value is `null`.'
                        )
                      : new u(
                          'The ' +
                            c +
                            ' `' +
                            h +
                            '` is marked as required in `' +
                            _ +
                            '`, but its value is `undefined`.'
                        )
                    : null
                  : e(i, l, _, c, h);
              }
              var i = s.bind(null, !1);
              return (i.isRequired = s.bind(null, !0)), i;
            }
            function _(e) {
              return l(function(t, n, a, r, s, i) {
                var o = t[n];
                if (f(o) !== e) {
                  var d = p(o);
                  return new u(
                    'Invalid ' +
                      r +
                      ' `' +
                      s +
                      '` of type `' +
                      d +
                      '` supplied to `' +
                      a +
                      '`, expected `' +
                      e +
                      '`.'
                  );
                }
                return null;
              });
            }
            function h(t) {
              switch (typeof t) {
                case 'number':
                case 'string':
                case 'undefined':
                  return !0;
                case 'boolean':
                  return !t;
                case 'object':
                  if (Array.isArray(t)) return t.every(h);
                  if (null === t || e(t)) return !0;
                  var r = (function(e) {
                    var t = e && ((n && e[n]) || e[a]);
                    if ('function' == typeof t) return t;
                  })(t);
                  if (!r) return !1;
                  var s,
                    i = r.call(t);
                  if (r !== t.entries) {
                    for (; !(s = i.next()).done; ) if (!h(s.value)) return !1;
                  } else
                    for (; !(s = i.next()).done; ) {
                      var o = s.value;
                      if (o && !h(o[1])) return !1;
                    }
                  return !0;
                default:
                  return !1;
              }
            }
            function f(e) {
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
            function p(e) {
              if (null == e) return '' + e;
              var t = f(e);
              if ('object' === t) {
                if (e instanceof Date) return 'date';
                if (e instanceof RegExp) return 'regexp';
              }
              return t;
            }
            function y(e) {
              var t = p(e);
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
              (u.prototype = Error.prototype),
              (i.checkPropTypes = M),
              (i.PropTypes = i),
              i
            );
          },
          L = n(function(e) {
            var t =
              ('function' == typeof Symbol &&
                Symbol.for &&
                Symbol.for('react.element')) ||
              60103;
            e.exports = g(function(e) {
              return 'object' == typeof e && null !== e && e.$$typeof === t;
            }, !0);
          }),
          Y = n(function(e) {
            /*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
            !(function() {
              var t = {}.hasOwnProperty;
              function n() {
                for (var e = [], a = 0; a < arguments.length; a++) {
                  var r = arguments[a];
                  if (r) {
                    var s = typeof r;
                    if ('string' === s || 'number' === s) e.push(r);
                    else if (Array.isArray(r)) e.push(n.apply(null, r));
                    else if ('object' === s)
                      for (var i in r) t.call(r, i) && r[i] && e.push(i);
                  }
                }
                return e.join(' ');
              }
              e.exports ? (e.exports = n) : (window.classNames = n);
            })();
          });
        function v(e, t) {
          for (var n = 0, a = e.length; n < a; n++)
            if (t.apply(t, [e[n], n, e])) return e[n];
        }
        function D(e) {
          return (
            'function' == typeof e ||
            '[object Function]' === Object.prototype.toString.call(e)
          );
        }
        function k(e) {
          return 'number' == typeof e && !isNaN(e);
        }
        function b(e) {
          return parseInt(e, 10);
        }
        function w(e, t, n) {
          if (e[t])
            return new Error(
              'Invalid prop ' +
                t +
                ' passed to ' +
                n +
                ' - do not set this, set it on the child.'
            );
        }
        var T = ['Moz', 'Webkit', 'O', 'ms'];
        function S(e, t) {
          return t
            ? '' +
                t +
                (function(e) {
                  for (var t = '', n = !0, a = 0; a < e.length; a++)
                    n
                      ? ((t += e[a].toUpperCase()), (n = !1))
                      : '-' === e[a]
                      ? (n = !0)
                      : (t += e[a]);
                  return t;
                })(e)
            : e;
        }
        var H = (function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'transform';
            if ('undefined' == typeof window || void 0 === window.document)
              return '';
            var t = window.document.documentElement.style;
            if (e in t) return '';
            for (var n = 0; n < T.length; n++) if (S(e, T[n]) in t) return T[n];
            return '';
          })(),
          j = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          },
          x = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            }
            return function(t, n, a) {
              return n && e(t.prototype, n), a && e(t, a), t;
            };
          })(),
          E = function(e, t, n) {
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
          O =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            },
          P = function(e, t) {
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
          W = function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          },
          R = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var n = [],
                  a = !0,
                  r = !1,
                  s = void 0;
                try {
                  for (
                    var i, o = e[Symbol.iterator]();
                    !(a = (i = o.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    a = !0
                  );
                } catch (e) {
                  (r = !0), (s = e);
                } finally {
                  try {
                    !a && o.return && o.return();
                  } finally {
                    if (r) throw s;
                  }
                }
                return n;
              })(e, t);
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          },
          A = '';
        function C(e, t) {
          return (
            A ||
              (A = v(
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
            !!D(e[A]) && e[A](t)
          );
        }
        function F(e, t, n) {
          var a = e;
          do {
            if (C(a, t)) return !0;
            if (a === n) return !1;
            a = a.parentNode;
          } while (a);
          return !1;
        }
        function z(e, t, n) {
          e &&
            (e.attachEvent
              ? e.attachEvent('on' + t, n)
              : e.addEventListener
              ? e.addEventListener(t, n, !0)
              : (e['on' + t] = n));
        }
        function N(e, t, n) {
          e &&
            (e.detachEvent
              ? e.detachEvent('on' + t, n)
              : e.removeEventListener
              ? e.removeEventListener(t, n, !0)
              : (e['on' + t] = null));
        }
        function I(e) {
          var t = e.clientHeight,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t += b(n.borderTopWidth)), (t += b(n.borderBottomWidth));
        }
        function J(e) {
          var t = e.clientWidth,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t += b(n.borderLeftWidth)), (t += b(n.borderRightWidth));
        }
        function G(e) {
          var t = e.clientHeight,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t -= b(n.paddingTop)), (t -= b(n.paddingBottom));
        }
        function U(e) {
          var t = e.clientWidth,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t -= b(n.paddingLeft)), (t -= b(n.paddingRight));
        }
        function q(e) {
          if (e) {
            var t,
              n,
              a = e.getElementById('react-draggable-style-el');
            a ||
              (((a = e.createElement('style')).type = 'text/css'),
              (a.id = 'react-draggable-style-el'),
              (a.innerHTML =
                '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n'),
              (a.innerHTML +=
                '.react-draggable-transparent-selection *::selection {background: transparent;}\n'),
              e.getElementsByTagName('head')[0].appendChild(a)),
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
        function B(e) {
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
        function V() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return O({ touchAction: 'none' }, e);
        }
        function $(e) {
          return 'both' === e.props.axis || 'x' === e.props.axis;
        }
        function K(e) {
          return 'both' === e.props.axis || 'y' === e.props.axis;
        }
        function Z(e, t, n) {
          var a =
            'number' == typeof t
              ? (function(e, t) {
                  return (
                    (e.targetTouches &&
                      v(e.targetTouches, function(e) {
                        return t === e.identifier;
                      })) ||
                    (e.changedTouches &&
                      v(e.changedTouches, function(e) {
                        return t === e.identifier;
                      }))
                  );
                })(e, t)
              : null;
          if ('number' == typeof t && !a) return null;
          var r = ee(n),
            s = n.props.offsetParent || r.offsetParent || r.ownerDocument.body;
          return (function(e, t) {
            var n =
                t === t.ownerDocument.body
                  ? { left: 0, top: 0 }
                  : t.getBoundingClientRect(),
              a = e.clientX + t.scrollLeft - n.left,
              r = e.clientY + t.scrollTop - n.top;
            return { x: a, y: r };
          })(a || e, s);
        }
        function X(e, t, n) {
          var a = e.state,
            r = !k(a.lastX),
            s = ee(e);
          return r
            ? { node: s, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
            : {
                node: s,
                deltaX: t - a.lastX,
                deltaY: n - a.lastY,
                lastX: a.lastX,
                lastY: a.lastY,
                x: t,
                y: n,
              };
        }
        function Q(e, t) {
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
          ae = (function(n) {
            function a() {
              var t, n, r;
              j(this, a);
              for (var s = arguments.length, i = Array(s), o = 0; o < s; o++)
                i[o] = arguments[o];
              return (
                (r = W(
                  this,
                  (t = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                    t,
                    [this].concat(i)
                  )
                )),
                (n = r),
                (r.state = {
                  dragging: !1,
                  lastX: NaN,
                  lastY: NaN,
                  touchIdentifier: null,
                }),
                (r.handleDragStart = function(t) {
                  if (
                    (r.props.onMouseDown(t),
                    !r.props.allowAnyClick &&
                      'number' == typeof t.button &&
                      0 !== t.button)
                  )
                    return !1;
                  var n = e.findDOMNode(r);
                  if (!n || !n.ownerDocument || !n.ownerDocument.body)
                    throw new Error(
                      '<DraggableCore> not mounted on DragStart!'
                    );
                  var a = n.ownerDocument;
                  if (
                    !(
                      r.props.disabled ||
                      !(t.target instanceof a.defaultView.Node) ||
                      (r.props.handle && !F(t.target, r.props.handle, n)) ||
                      (r.props.cancel && F(t.target, r.props.cancel, n))
                    )
                  ) {
                    var s = (function(e) {
                      return e.targetTouches && e.targetTouches[0]
                        ? e.targetTouches[0].identifier
                        : e.changedTouches && e.changedTouches[0]
                        ? e.changedTouches[0].identifier
                        : void 0;
                    })(t);
                    r.setState({ touchIdentifier: s });
                    var i = Z(t, s, r);
                    if (null != i) {
                      var o = i.x,
                        d = i.y,
                        u = X(r, o, d);
                      r.props.onStart;
                      var l = r.props.onStart(t, u);
                      !1 !== l &&
                        (r.props.enableUserSelectHack && q(a),
                        r.setState({ dragging: !0, lastX: o, lastY: d }),
                        z(a, ne.move, r.handleDrag),
                        z(a, ne.stop, r.handleDragStop));
                    }
                  }
                }),
                (r.handleDrag = function(e) {
                  'touchmove' === e.type && e.preventDefault();
                  var t = Z(e, r.state.touchIdentifier, r);
                  if (null != t) {
                    var n = t.x,
                      a = t.y;
                    if (Array.isArray(r.props.grid)) {
                      var s = n - r.state.lastX,
                        i = a - r.state.lastY,
                        o = (function(e, t, n) {
                          var a = Math.round(t / e[0]) * e[0],
                            r = Math.round(n / e[1]) * e[1];
                          return [a, r];
                        })(r.props.grid, s, i),
                        d = R(o, 2);
                      if (((s = d[0]), (i = d[1]), !s && !i)) return;
                      (n = r.state.lastX + s), (a = r.state.lastY + i);
                    }
                    var u = X(r, n, a),
                      l = r.props.onDrag(e, u);
                    if (!1 !== l) r.setState({ lastX: n, lastY: a });
                    else
                      try {
                        r.handleDragStop(new MouseEvent('mouseup'));
                      } catch (e) {
                        var _ = document.createEvent('MouseEvents');
                        _.initMouseEvent(
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
                          r.handleDragStop(_);
                      }
                  }
                }),
                (r.handleDragStop = function(t) {
                  if (r.state.dragging) {
                    var n = Z(t, r.state.touchIdentifier, r);
                    if (null != n) {
                      var a = n.x,
                        s = n.y,
                        i = X(r, a, s),
                        o = e.findDOMNode(r);
                      o && r.props.enableUserSelectHack && B(o.ownerDocument),
                        r.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                        r.props.onStop(t, i),
                        o &&
                          (N(o.ownerDocument, ne.move, r.handleDrag),
                          N(o.ownerDocument, ne.stop, r.handleDragStop));
                    }
                  }
                }),
                (r.onMouseDown = function(e) {
                  return (ne = te.mouse), r.handleDragStart(e);
                }),
                (r.onMouseUp = function(e) {
                  return (ne = te.mouse), r.handleDragStop(e);
                }),
                (r.onTouchStart = function(e) {
                  return (ne = te.touch), r.handleDragStart(e);
                }),
                (r.onTouchEnd = function(e) {
                  return (ne = te.touch), r.handleDragStop(e);
                }),
                W(r, n)
              );
            }
            return (
              P(a, n),
              x(a, [
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    var t = e.findDOMNode(this);
                    if (t) {
                      var n = t.ownerDocument;
                      N(n, te.mouse.move, this.handleDrag),
                        N(n, te.touch.move, this.handleDrag),
                        N(n, te.mouse.stop, this.handleDragStop),
                        N(n, te.touch.stop, this.handleDragStop),
                        this.props.enableUserSelectHack && B(n);
                    }
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    return t.cloneElement(
                      t.Children.only(this.props.children),
                      {
                        style: V(this.props.children.props.style),
                        onMouseDown: this.onMouseDown,
                        onTouchStart: this.onTouchStart,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd,
                      }
                    );
                  },
                },
              ]),
              a
            );
          })(t.Component);
        (ae.displayName = 'DraggableCore'),
          (ae.propTypes = {
            allowAnyClick: L.bool,
            disabled: L.bool,
            enableUserSelectHack: L.bool,
            offsetParent: function(e, t) {
              if (e[t] && 1 !== e[t].nodeType)
                throw new Error("Draggable's offsetParent must be a DOM Node.");
            },
            grid: L.arrayOf(L.number),
            scale: L.number,
            handle: L.string,
            cancel: L.string,
            onStart: L.func,
            onDrag: L.func,
            onStop: L.func,
            onMouseDown: L.func,
            className: w,
            style: w,
            transform: w,
          }),
          (ae.defaultProps = {
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
        var re = (function(n) {
          function a(e) {
            j(this, a);
            var t = W(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, e)
            );
            return (
              (t.onDragStart = function(e, n) {
                var a = t.props.onStart(e, Q(t, n));
                if (!1 === a) return !1;
                t.setState({ dragging: !0, dragged: !0 });
              }),
              (t.onDrag = function(e, n) {
                if (!t.state.dragging) return !1;
                var a = Q(t, n),
                  r = { x: a.x, y: a.y };
                if (t.props.bounds) {
                  var s = r.x,
                    i = r.y;
                  (r.x += t.state.slackX), (r.y += t.state.slackY);
                  var o = (function(e, t, n) {
                      if (!e.props.bounds) return [t, n];
                      var a = e.props.bounds;
                      a =
                        'string' == typeof a
                          ? a
                          : (function(e) {
                              return {
                                left: e.left,
                                top: e.top,
                                right: e.right,
                                bottom: e.bottom,
                              };
                            })(a);
                      var r = ee(e);
                      if ('string' == typeof a) {
                        var s = r.ownerDocument,
                          i = s.defaultView,
                          o = void 0;
                        if (
                          !(
                            (o =
                              'parent' === a
                                ? r.parentNode
                                : s.querySelector(a)) instanceof i.HTMLElement
                          )
                        )
                          throw new Error(
                            'Bounds selector "' +
                              a +
                              '" could not find an element.'
                          );
                        var d = i.getComputedStyle(r),
                          u = i.getComputedStyle(o);
                        a = {
                          left:
                            -r.offsetLeft + b(u.paddingLeft) + b(d.marginLeft),
                          top: -r.offsetTop + b(u.paddingTop) + b(d.marginTop),
                          right:
                            U(o) -
                            J(r) -
                            r.offsetLeft +
                            b(u.paddingRight) -
                            b(d.marginRight),
                          bottom:
                            G(o) -
                            I(r) -
                            r.offsetTop +
                            b(u.paddingBottom) -
                            b(d.marginBottom),
                        };
                      }
                      return (
                        k(a.right) && (t = Math.min(t, a.right)),
                        k(a.bottom) && (n = Math.min(n, a.bottom)),
                        k(a.left) && (t = Math.max(t, a.left)),
                        k(a.top) && (n = Math.max(n, a.top)),
                        [t, n]
                      );
                    })(t, r.x, r.y),
                    d = R(o, 2),
                    u = d[0],
                    l = d[1];
                  (r.x = u),
                    (r.y = l),
                    (r.slackX = t.state.slackX + (s - r.x)),
                    (r.slackY = t.state.slackY + (i - r.y)),
                    (a.x = r.x),
                    (a.y = r.y),
                    (a.deltaX = r.x - t.state.x),
                    (a.deltaY = r.y - t.state.y);
                }
                var _ = t.props.onDrag(e, a);
                if (!1 === _) return !1;
                t.setState(r);
              }),
              (t.onDragStop = function(e, n) {
                if (!t.state.dragging) return !1;
                var a = t.props.onStop(e, Q(t, n));
                if (!1 === a) return !1;
                var r = { dragging: !1, slackX: 0, slackY: 0 },
                  s = Boolean(t.props.position);
                if (s) {
                  var i = t.props.position,
                    o = i.x,
                    d = i.y;
                  (r.x = o), (r.y = d);
                }
                t.setState(r);
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
            P(a, n),
            x(a, [
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
                    a,
                    r,
                    s = {},
                    i = null,
                    o = Boolean(this.props.position),
                    d = !o || this.state.dragging,
                    u = this.props.position || this.props.defaultPosition,
                    l = {
                      x: $(this) && d ? this.state.x : u.x,
                      y: K(this) && d ? this.state.y : u.y,
                    };
                  this.state.isElementSVG
                    ? ((a = (n = l).x),
                      (r = n.y),
                      (i = 'translate(' + a + ',' + r + ')'))
                    : (s = (function(e) {
                        var t = e.x,
                          n = e.y;
                        return E(
                          {},
                          S('transform', H),
                          'translate(' + t + 'px,' + n + 'px)'
                        );
                      })(l));
                  var _ = this.props,
                    c = _.defaultClassName,
                    m = _.defaultClassNameDragging,
                    h = _.defaultClassNameDragged,
                    f = t.Children.only(this.props.children),
                    p = Y(
                      f.props.className || '',
                      c,
                      (E((e = {}), m, this.state.dragging),
                      E(e, h, this.state.dragged),
                      e)
                    );
                  return t.createElement(
                    ae,
                    O({}, this.props, {
                      onStart: this.onDragStart,
                      onDrag: this.onDrag,
                      onStop: this.onDragStop,
                    }),
                    t.cloneElement(f, {
                      className: p,
                      style: O({}, f.props.style, s),
                      transform: i,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(t.Component);
        return (
          (re.displayName = 'Draggable'),
          (re.propTypes = O({}, ae.propTypes, {
            axis: L.oneOf(['both', 'x', 'y', 'none']),
            bounds: L.oneOfType([
              L.shape({
                left: L.number,
                right: L.number,
                top: L.number,
                bottom: L.number,
              }),
              L.string,
              L.oneOf([!1]),
            ]),
            defaultClassName: L.string,
            defaultClassNameDragging: L.string,
            defaultClassNameDragged: L.string,
            defaultPosition: L.shape({ x: L.number, y: L.number }),
            position: L.shape({ x: L.number, y: L.number }),
            className: w,
            style: w,
            transform: w,
          })),
          (re.defaultProps = O({}, ae.defaultProps, {
            axis: 'both',
            bounds: !1,
            defaultClassName: 'react-draggable',
            defaultClassNameDragging: 'react-draggable-dragging',
            defaultClassNameDragged: 'react-draggable-dragged',
            defaultPosition: { x: 0, y: 0 },
            position: null,
            scale: 1,
          })),
          (re.default = re),
          (re.DraggableCore = ae),
          re
        );
      })(n(139), n(1));
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
      !(function(e) {
        'use strict';
        e.defineLocale('af', {
          months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split(
            '_'
          ),
          weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split(
            '_'
          ),
          weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
          weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
          meridiemParse: /vm|nm/i,
          isPM: function(e) {
            return /^nm$/i.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? (n ? 'vm' : 'VM') : n ? 'nm' : 'NM';
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Vandag om] LT',
            nextDay: '[Môre om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[Gister om] LT',
            lastWeek: '[Laas] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'oor %s',
            past: '%s gelede',
            s: "'n paar sekondes",
            ss: '%d sekondes',
            m: "'n minuut",
            mm: '%d minute',
            h: "'n uur",
            hh: '%d ure',
            d: "'n dag",
            dd: '%d dae',
            M: "'n maand",
            MM: '%d maande',
            y: "'n jaar",
            yy: '%d jaar',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '١',
            2: '٢',
            3: '٣',
            4: '٤',
            5: '٥',
            6: '٦',
            7: '٧',
            8: '٨',
            9: '٩',
            0: '٠',
          },
          n = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0',
          },
          a = function(e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : 2 === e
              ? 2
              : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
              ? 4
              : 5;
          },
          r = {
            s: [
              'أقل من ثانية',
              'ثانية واحدة',
              ['ثانيتان', 'ثانيتين'],
              '%d ثوان',
              '%d ثانية',
              '%d ثانية',
            ],
            m: [
              'أقل من دقيقة',
              'دقيقة واحدة',
              ['دقيقتان', 'دقيقتين'],
              '%d دقائق',
              '%d دقيقة',
              '%d دقيقة',
            ],
            h: [
              'أقل من ساعة',
              'ساعة واحدة',
              ['ساعتان', 'ساعتين'],
              '%d ساعات',
              '%d ساعة',
              '%d ساعة',
            ],
            d: [
              'أقل من يوم',
              'يوم واحد',
              ['يومان', 'يومين'],
              '%d أيام',
              '%d يومًا',
              '%d يوم',
            ],
            M: [
              'أقل من شهر',
              'شهر واحد',
              ['شهران', 'شهرين'],
              '%d أشهر',
              '%d شهرا',
              '%d شهر',
            ],
            y: [
              'أقل من عام',
              'عام واحد',
              ['عامان', 'عامين'],
              '%d أعوام',
              '%d عامًا',
              '%d عام',
            ],
          },
          s = function(e) {
            return function(t, n, s, i) {
              var o = a(t),
                d = r[e][a(t)];
              return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
            };
          },
          i = [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر',
          ];
        e.defineLocale('ar', {
          months: i,
          monthsShort: i,
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
            '_'
          ),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/‏M/‏YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return 'م' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'ص' : 'م';
          },
          calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: s('s'),
            ss: s('s'),
            m: s('m'),
            mm: s('m'),
            h: s('h'),
            hh: s('h'),
            d: s('d'),
            dd: s('d'),
            M: s('M'),
            MM: s('M'),
            y: s('y'),
            yy: s('y'),
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return n[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 6, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-dz', {
          months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_'
          ),
          monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_'
          ),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
            '_'
          ),
          weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 0, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-kw', {
          months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_'
          ),
          monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_'
          ),
          weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
            '_'
          ),
          weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 0, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            0: '0',
          },
          n = function(e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : 2 === e
              ? 2
              : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
              ? 4
              : 5;
          },
          a = {
            s: [
              'أقل من ثانية',
              'ثانية واحدة',
              ['ثانيتان', 'ثانيتين'],
              '%d ثوان',
              '%d ثانية',
              '%d ثانية',
            ],
            m: [
              'أقل من دقيقة',
              'دقيقة واحدة',
              ['دقيقتان', 'دقيقتين'],
              '%d دقائق',
              '%d دقيقة',
              '%d دقيقة',
            ],
            h: [
              'أقل من ساعة',
              'ساعة واحدة',
              ['ساعتان', 'ساعتين'],
              '%d ساعات',
              '%d ساعة',
              '%d ساعة',
            ],
            d: [
              'أقل من يوم',
              'يوم واحد',
              ['يومان', 'يومين'],
              '%d أيام',
              '%d يومًا',
              '%d يوم',
            ],
            M: [
              'أقل من شهر',
              'شهر واحد',
              ['شهران', 'شهرين'],
              '%d أشهر',
              '%d شهرا',
              '%d شهر',
            ],
            y: [
              'أقل من عام',
              'عام واحد',
              ['عامان', 'عامين'],
              '%d أعوام',
              '%d عامًا',
              '%d عام',
            ],
          },
          r = function(e) {
            return function(t, r, s, i) {
              var o = n(t),
                d = a[e][n(t)];
              return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t);
            };
          },
          s = [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر',
          ];
        e.defineLocale('ar-ly', {
          months: s,
          monthsShort: s,
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
            '_'
          ),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/‏M/‏YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return 'م' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'ص' : 'م';
          },
          calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: r('s'),
            ss: r('s'),
            m: r('m'),
            mm: r('m'),
            h: r('h'),
            hh: r('h'),
            d: r('d'),
            dd: r('d'),
            M: r('M'),
            MM: r('M'),
            y: r('y'),
            yy: r('y'),
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 6, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-ma', {
          months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_'
          ),
          monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_'
          ),
          weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
            '_'
          ),
          weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 6, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '١',
            2: '٢',
            3: '٣',
            4: '٤',
            5: '٥',
            6: '٦',
            7: '٧',
            8: '٨',
            9: '٩',
            0: '٠',
          },
          n = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0',
          };
        e.defineLocale('ar-sa', {
          months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_'
          ),
          monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_'
          ),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
            '_'
          ),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return 'م' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'ص' : 'م';
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return n[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-tn', {
          months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_'
          ),
          monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_'
          ),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
            '_'
          ),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          1: '-inci',
          5: '-inci',
          8: '-inci',
          70: '-inci',
          80: '-inci',
          2: '-nci',
          7: '-nci',
          20: '-nci',
          50: '-nci',
          3: '-üncü',
          4: '-üncü',
          100: '-üncü',
          6: '-ncı',
          9: '-uncu',
          10: '-uncu',
          30: '-uncu',
          60: '-ıncı',
          90: '-ıncı',
        };
        e.defineLocale('az', {
          months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split(
            '_'
          ),
          monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split(
            '_'
          ),
          weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split(
            '_'
          ),
          weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
          weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[sabah saat] LT',
            nextWeek: '[gələn həftə] dddd [saat] LT',
            lastDay: '[dünən] LT',
            lastWeek: '[keçən həftə] dddd [saat] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s sonra',
            past: '%s əvvəl',
            s: 'birneçə saniyə',
            ss: '%d saniyə',
            m: 'bir dəqiqə',
            mm: '%d dəqiqə',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir il',
            yy: '%d il',
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function(e) {
            return /^(gündüz|axşam)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'gecə'
              : e < 12
              ? 'səhər'
              : e < 17
              ? 'gündüz'
              : 'axşam';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function(e) {
            if (0 === e) return e + '-ıncı';
            var n = e % 10,
              a = (e % 100) - n,
              r = e >= 100 ? 100 : null;
            return e + (t[n] || t[a] || t[r]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n) {
          var a,
            r,
            s = {
              ss: t ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
              mm: t ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
              hh: t ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
              dd: 'дзень_дні_дзён',
              MM: 'месяц_месяцы_месяцаў',
              yy: 'год_гады_гадоў',
            };
          return 'm' === n
            ? t
              ? 'хвіліна'
              : 'хвіліну'
            : 'h' === n
            ? t
              ? 'гадзіна'
              : 'гадзіну'
            : e +
              ' ' +
              ((a = +e),
              (r = s[n].split('_')),
              a % 10 == 1 && a % 100 != 11
                ? r[0]
                : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
                ? r[1]
                : r[2]);
        }
        e.defineLocale('be', {
          months: {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
              '_'
            ),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split(
              '_'
            ),
          },
          monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split(
            '_'
          ),
          weekdays: {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split(
              '_'
            ),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split(
              '_'
            ),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
          },
          weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
          weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., HH:mm',
            LLLL: 'dddd, D MMMM YYYY г., HH:mm',
          },
          calendar: {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function() {
              return '[У] dddd [ў] LT';
            },
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return '[У мінулую] dddd [ў] LT';
                case 1:
                case 2:
                case 4:
                  return '[У мінулы] dddd [ў] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'праз %s',
            past: '%s таму',
            s: 'некалькі секунд',
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: 'дзень',
            dd: t,
            M: 'месяц',
            MM: t,
            y: 'год',
            yy: t,
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function(e) {
            return /^(дня|вечара)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'ночы'
              : e < 12
              ? 'раніцы'
              : e < 17
              ? 'дня'
              : 'вечара';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'M':
              case 'd':
              case 'DDD':
              case 'w':
              case 'W':
                return (e % 10 != 2 && e % 10 != 3) ||
                  e % 100 == 12 ||
                  e % 100 == 13
                  ? e + '-ы'
                  : e + '-і';
              case 'D':
                return e + '-га';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('bg', {
          months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split(
            '_'
          ),
          monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split(
            '_'
          ),
          weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split(
            '_'
          ),
          weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[Днес в] LT',
            nextDay: '[Утре в] LT',
            nextWeek: 'dddd [в] LT',
            lastDay: '[Вчера в] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[В изминалия] dddd [в] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'след %s',
            past: 'преди %s',
            s: 'няколко секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дни',
            M: 'месец',
            MM: '%d месеца',
            y: 'година',
            yy: '%d години',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
            var t = e % 10,
              n = e % 100;
            return 0 === e
              ? e + '-ев'
              : 0 === n
              ? e + '-ен'
              : n > 10 && n < 20
              ? e + '-ти'
              : 1 === t
              ? e + '-ви'
              : 2 === t
              ? e + '-ри'
              : 7 === t || 8 === t
              ? e + '-ми'
              : e + '-ти';
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('bm', {
          months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split(
            '_'
          ),
          monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split(
            '_'
          ),
          weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
          weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
          weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'MMMM [tile] D [san] YYYY',
            LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
          },
          calendar: {
            sameDay: '[Bi lɛrɛ] LT',
            nextDay: '[Sini lɛrɛ] LT',
            nextWeek: 'dddd [don lɛrɛ] LT',
            lastDay: '[Kunu lɛrɛ] LT',
            lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s kɔnɔ',
            past: 'a bɛ %s bɔ',
            s: 'sanga dama dama',
            ss: 'sekondi %d',
            m: 'miniti kelen',
            mm: 'miniti %d',
            h: 'lɛrɛ kelen',
            hh: 'lɛrɛ %d',
            d: 'tile kelen',
            dd: 'tile %d',
            M: 'kalo kelen',
            MM: 'kalo %d',
            y: 'san kelen',
            yy: 'san %d',
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '১',
            2: '২',
            3: '৩',
            4: '৪',
            5: '৫',
            6: '৬',
            7: '৭',
            8: '৮',
            9: '৯',
            0: '০',
          },
          n = {
            '১': '1',
            '২': '2',
            '৩': '3',
            '৪': '4',
            '৫': '5',
            '৬': '6',
            '৭': '7',
            '৮': '8',
            '৯': '9',
            '০': '0',
          };
        e.defineLocale('bn', {
          months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split(
            '_'
          ),
          monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split(
            '_'
          ),
          weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split(
            '_'
          ),
          weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
          weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
          longDateFormat: {
            LT: 'A h:mm সময়',
            LTS: 'A h:mm:ss সময়',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm সময়',
            LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
          },
          calendar: {
            sameDay: '[আজ] LT',
            nextDay: '[আগামীকাল] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[গতকাল] LT',
            lastWeek: '[গত] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s পরে',
            past: '%s আগে',
            s: 'কয়েক সেকেন্ড',
            ss: '%d সেকেন্ড',
            m: 'এক মিনিট',
            mm: '%d মিনিট',
            h: 'এক ঘন্টা',
            hh: '%d ঘন্টা',
            d: 'এক দিন',
            dd: '%d দিন',
            M: 'এক মাস',
            MM: '%d মাস',
            y: 'এক বছর',
            yy: '%d বছর',
          },
          preparse: function(e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ('রাত' === t && e >= 4) ||
              ('দুপুর' === t && e < 5) ||
              'বিকাল' === t
                ? e + 12
                : e
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'রাত'
              : e < 10
              ? 'সকাল'
              : e < 17
              ? 'দুপুর'
              : e < 20
              ? 'বিকাল'
              : 'রাত';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '༡',
            2: '༢',
            3: '༣',
            4: '༤',
            5: '༥',
            6: '༦',
            7: '༧',
            8: '༨',
            9: '༩',
            0: '༠',
          },
          n = {
            '༡': '1',
            '༢': '2',
            '༣': '3',
            '༤': '4',
            '༥': '5',
            '༦': '6',
            '༧': '7',
            '༨': '8',
            '༩': '9',
            '༠': '0',
          };
        e.defineLocale('bo', {
          months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split(
            '_'
          ),
          monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split(
            '_'
          ),
          weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split(
            '_'
          ),
          weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split(
            '_'
          ),
          weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split(
            '_'
          ),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm',
          },
          calendar: {
            sameDay: '[དི་རིང] LT',
            nextDay: '[སང་ཉིན] LT',
            nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay: '[ཁ་སང] LT',
            lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ལ་',
            past: '%s སྔན་ལ',
            s: 'ལམ་སང',
            ss: '%d སྐར་ཆ།',
            m: 'སྐར་མ་གཅིག',
            mm: '%d སྐར་མ',
            h: 'ཆུ་ཚོད་གཅིག',
            hh: '%d ཆུ་ཚོད',
            d: 'ཉིན་གཅིག',
            dd: '%d ཉིན་',
            M: 'ཟླ་བ་གཅིག',
            MM: '%d ཟླ་བ',
            y: 'ལོ་གཅིག',
            yy: '%d ལོ',
          },
          preparse: function(e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ('མཚན་མོ' === t && e >= 4) ||
              ('ཉིན་གུང' === t && e < 5) ||
              'དགོང་དག' === t
                ? e + 12
                : e
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'མཚན་མོ'
              : e < 10
              ? 'ཞོགས་ཀས'
              : e < 17
              ? 'ཉིན་གུང'
              : e < 20
              ? 'དགོང་དག'
              : 'མཚན་མོ';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n) {
          return (
            e +
            ' ' +
            (function(e, t) {
              return 2 === t
                ? (function(e) {
                    var t = { m: 'v', b: 'v', d: 'z' };
                    return void 0 === t[e.charAt(0)]
                      ? e
                      : t[e.charAt(0)] + e.substring(1);
                  })(e)
                : e;
            })({ mm: 'munutenn', MM: 'miz', dd: 'devezh' }[n], e)
          );
        }
        e.defineLocale('br', {
          months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
            '_'
          ),
          monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
            '_'
          ),
          weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split('_'),
          weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
          weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h[e]mm A',
            LTS: 'h[e]mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [a viz] MMMM YYYY',
            LLL: 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A',
          },
          calendar: {
            sameDay: '[Hiziv da] LT',
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: 'dddd [da] LT',
            lastDay: "[Dec'h da] LT",
            lastWeek: 'dddd [paset da] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'a-benn %s',
            past: "%s 'zo",
            s: 'un nebeud segondennoù',
            ss: '%d eilenn',
            m: 'ur vunutenn',
            mm: t,
            h: 'un eur',
            hh: '%d eur',
            d: 'un devezh',
            dd: t,
            M: 'ur miz',
            MM: t,
            y: 'ur bloaz',
            yy: function(e) {
              switch (
                (function e(t) {
                  return t > 9 ? e(t % 10) : t;
                })(e)
              ) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                  return e + ' bloaz';
                default:
                  return e + ' vloaz';
              }
            },
          },
          dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
          ordinal: function(e) {
            var t = 1 === e ? 'añ' : 'vet';
            return e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n) {
          var a = e + ' ';
          switch (n) {
            case 'ss':
              return (a +=
                1 === e
                  ? 'sekunda'
                  : 2 === e || 3 === e || 4 === e
                  ? 'sekunde'
                  : 'sekundi');
            case 'm':
              return t ? 'jedna minuta' : 'jedne minute';
            case 'mm':
              return (a +=
                1 === e
                  ? 'minuta'
                  : 2 === e || 3 === e || 4 === e
                  ? 'minute'
                  : 'minuta');
            case 'h':
              return t ? 'jedan sat' : 'jednog sata';
            case 'hh':
              return (a +=
                1 === e
                  ? 'sat'
                  : 2 === e || 3 === e || 4 === e
                  ? 'sata'
                  : 'sati');
            case 'dd':
              return (a += 1 === e ? 'dan' : 'dana');
            case 'MM':
              return (a +=
                1 === e
                  ? 'mjesec'
                  : 2 === e || 3 === e || 4 === e
                  ? 'mjeseca'
                  : 'mjeseci');
            case 'yy':
              return (a +=
                1 === e
                  ? 'godina'
                  : 2 === e || 3 === e || 4 === e
                  ? 'godine'
                  : 'godina');
          }
        }
        e.defineLocale('bs', {
          months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split(
            '_'
          ),
          monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split(
            '_'
          ),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';
                case 3:
                  return '[u] [srijedu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return '[prošlu] dddd [u] LT';
                case 6:
                  return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prošli] dddd [u] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: 'dan',
            dd: t,
            M: 'mjesec',
            MM: t,
            y: 'godinu',
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ca', {
          months: {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split(
              '_'
            ),
            format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
              '_'
            ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split(
            '_'
          ),
          weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
          weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [de] YYYY',
            ll: 'D MMM YYYY',
            LLL: 'D MMMM [de] YYYY [a les] H:mm',
            lll: 'D MMM YYYY, H:mm',
            LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll: 'ddd D MMM YYYY, H:mm',
          },
          calendar: {
            sameDay: function() {
              return '[avui a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            nextDay: function() {
              return '[demà a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            lastDay: function() {
              return '[ahir a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            lastWeek: function() {
              return (
                '[el] dddd [passat a ' +
                (1 !== this.hours() ? 'les' : 'la') +
                '] LT'
              );
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: "d'aquí %s",
            past: 'fa %s',
            s: 'uns segons',
            ss: '%d segons',
            m: 'un minut',
            mm: '%d minuts',
            h: 'una hora',
            hh: '%d hores',
            d: 'un dia',
            dd: '%d dies',
            M: 'un mes',
            MM: '%d mesos',
            y: 'un any',
            yy: '%d anys',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function(e, t) {
            var n =
              1 === e
                ? 'r'
                : 2 === e
                ? 'n'
                : 3 === e
                ? 'r'
                : 4 === e
                ? 't'
                : 'è';
            return ('w' !== t && 'W' !== t) || (n = 'a'), e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split(
            '_'
          ),
          n = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
          a = [
            /^led/i,
            /^úno/i,
            /^bře/i,
            /^dub/i,
            /^kvě/i,
            /^(čvn|červen$|června)/i,
            /^(čvc|červenec|července)/i,
            /^srp/i,
            /^zář/i,
            /^říj/i,
            /^lis/i,
            /^pro/i,
          ],
          r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
        function s(e) {
          return e > 1 && e < 5 && 1 != ~~(e / 10);
        }
        function i(e, t, n, a) {
          var r = e + ' ';
          switch (n) {
            case 's':
              return t || a ? 'pár sekund' : 'pár sekundami';
            case 'ss':
              return t || a
                ? r + (s(e) ? 'sekundy' : 'sekund')
                : r + 'sekundami';
            case 'm':
              return t ? 'minuta' : a ? 'minutu' : 'minutou';
            case 'mm':
              return t || a ? r + (s(e) ? 'minuty' : 'minut') : r + 'minutami';
            case 'h':
              return t ? 'hodina' : a ? 'hodinu' : 'hodinou';
            case 'hh':
              return t || a ? r + (s(e) ? 'hodiny' : 'hodin') : r + 'hodinami';
            case 'd':
              return t || a ? 'den' : 'dnem';
            case 'dd':
              return t || a ? r + (s(e) ? 'dny' : 'dní') : r + 'dny';
            case 'M':
              return t || a ? 'měsíc' : 'měsícem';
            case 'MM':
              return t || a ? r + (s(e) ? 'měsíce' : 'měsíců') : r + 'měsíci';
            case 'y':
              return t || a ? 'rok' : 'rokem';
            case 'yy':
              return t || a ? r + (s(e) ? 'roky' : 'let') : r + 'lety';
          }
        }
        e.defineLocale('cs', {
          months: t,
          monthsShort: n,
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
          monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split(
            '_'
          ),
          weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
          weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY',
          },
          calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[v neděli v] LT';
                case 1:
                case 2:
                  return '[v] dddd [v] LT';
                case 3:
                  return '[ve středu v] LT';
                case 4:
                  return '[ve čtvrtek v] LT';
                case 5:
                  return '[v pátek v] LT';
                case 6:
                  return '[v sobotu v] LT';
              }
            },
            lastDay: '[včera v] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[minulou neděli v] LT';
                case 1:
                case 2:
                  return '[minulé] dddd [v] LT';
                case 3:
                  return '[minulou středu v] LT';
                case 4:
                case 5:
                  return '[minulý] dddd [v] LT';
                case 6:
                  return '[minulou sobotu v] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('cv', {
          months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split(
            '_'
          ),
          monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split(
            '_'
          ),
          weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split(
            '_'
          ),
          weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
          weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          },
          calendar: {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              var t = /сехет$/i.exec(e)
                ? 'рен'
                : /ҫул$/i.exec(e)
                ? 'тан'
                : 'ран';
              return e + t;
            },
            past: '%s каялла',
            s: 'пӗр-ик ҫеккунт',
            ss: '%d ҫеккунт',
            m: 'пӗр минут',
            mm: '%d минут',
            h: 'пӗр сехет',
            hh: '%d сехет',
            d: 'пӗр кун',
            dd: '%d кун',
            M: 'пӗр уйӑх',
            MM: '%d уйӑх',
            y: 'пӗр ҫул',
            yy: '%d ҫул',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
          ordinal: '%d-мӗш',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('cy', {
          months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split(
            '_'
          ),
          monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split(
            '_'
          ),
          weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split(
            '_'
          ),
          weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
          weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function(e) {
            var t = e,
              n = '';
            return (
              t > 20
                ? (n =
                    40 === t || 50 === t || 60 === t || 80 === t || 100 === t
                      ? 'fed'
                      : 'ain')
                : t > 0 &&
                  (n = [
                    '',
                    'af',
                    'il',
                    'ydd',
                    'ydd',
                    'ed',
                    'ed',
                    'ed',
                    'fed',
                    'fed',
                    'fed',
                    'eg',
                    'fed',
                    'eg',
                    'eg',
                    'fed',
                    'eg',
                    'eg',
                    'fed',
                    'eg',
                    'fed',
                  ][t]),
              e + n
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('da', {
          months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split(
            '_'
          ),
          weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split(
            '_'
          ),
          weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
          weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
          },
          calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'på dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[i] dddd[s kl.] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'få sekunder',
            ss: '%d sekunder',
            m: 'et minut',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dage',
            M: 'en måned',
            MM: '%d måneder',
            y: 'et år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = {
            m: ['eine Minute', 'einer Minute'],
            h: ['eine Stunde', 'einer Stunde'],
            d: ['ein Tag', 'einem Tag'],
            dd: [e + ' Tage', e + ' Tagen'],
            M: ['ein Monat', 'einem Monat'],
            MM: [e + ' Monate', e + ' Monaten'],
            y: ['ein Jahr', 'einem Jahr'],
            yy: [e + ' Jahre', e + ' Jahren'],
          };
          return t ? r[n][0] : r[n][1];
        }
        e.defineLocale('de', {
          months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_'
          ),
          monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
            '_'
          ),
          weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]',
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: t,
            mm: '%d Minuten',
            h: t,
            hh: '%d Stunden',
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = {
            m: ['eine Minute', 'einer Minute'],
            h: ['eine Stunde', 'einer Stunde'],
            d: ['ein Tag', 'einem Tag'],
            dd: [e + ' Tage', e + ' Tagen'],
            M: ['ein Monat', 'einem Monat'],
            MM: [e + ' Monate', e + ' Monaten'],
            y: ['ein Jahr', 'einem Jahr'],
            yy: [e + ' Jahre', e + ' Jahren'],
          };
          return t ? r[n][0] : r[n][1];
        }
        e.defineLocale('de-at', {
          months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_'
          ),
          monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
            '_'
          ),
          weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]',
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: t,
            mm: '%d Minuten',
            h: t,
            hh: '%d Stunden',
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = {
            m: ['eine Minute', 'einer Minute'],
            h: ['eine Stunde', 'einer Stunde'],
            d: ['ein Tag', 'einem Tag'],
            dd: [e + ' Tage', e + ' Tagen'],
            M: ['ein Monat', 'einem Monat'],
            MM: [e + ' Monate', e + ' Monaten'],
            y: ['ein Jahr', 'einem Jahr'],
            yy: [e + ' Jahre', e + ' Jahren'],
          };
          return t ? r[n][0] : r[n][1];
        }
        e.defineLocale('de-ch', {
          months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_'
          ),
          monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
            '_'
          ),
          weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]',
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: t,
            mm: '%d Minuten',
            h: t,
            hh: '%d Stunden',
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = [
            'ޖެނުއަރީ',
            'ފެބްރުއަރީ',
            'މާރިޗު',
            'އޭޕްރީލު',
            'މޭ',
            'ޖޫން',
            'ޖުލައި',
            'އޯގަސްޓު',
            'ސެޕްޓެމްބަރު',
            'އޮކްޓޯބަރު',
            'ނޮވެމްބަރު',
            'ޑިސެމްބަރު',
          ],
          n = [
            'އާދިއްތަ',
            'ހޯމަ',
            'އަންގާރަ',
            'ބުދަ',
            'ބުރާސްފަތި',
            'ހުކުރު',
            'ހޮނިހިރު',
          ];
        e.defineLocale('dv', {
          months: t,
          monthsShort: t,
          weekdays: n,
          weekdaysShort: n,
          weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/M/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /މކ|މފ/,
          isPM: function(e) {
            return 'މފ' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'މކ' : 'މފ';
          },
          calendar: {
            sameDay: '[މިއަދު] LT',
            nextDay: '[މާދަމާ] LT',
            nextWeek: 'dddd LT',
            lastDay: '[އިއްޔެ] LT',
            lastWeek: '[ފާއިތުވި] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ތެރޭގައި %s',
            past: 'ކުރިން %s',
            s: 'ސިކުންތުކޮޅެއް',
            ss: 'd% ސިކުންތު',
            m: 'މިނިޓެއް',
            mm: 'މިނިޓު %d',
            h: 'ގަޑިއިރެއް',
            hh: 'ގަޑިއިރު %d',
            d: 'ދުވަހެއް',
            dd: 'ދުވަސް %d',
            M: 'މަހެއް',
            MM: 'މަސް %d',
            y: 'އަހަރެއް',
            yy: 'އަހަރު %d',
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 7, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('el', {
          monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(
            '_'
          ),
          monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(
            '_'
          ),
          months: function(e, t) {
            return e
              ? 'string' == typeof t &&
                /D/.test(t.substring(0, t.indexOf('MMMM')))
                ? this._monthsGenitiveEl[e.month()]
                : this._monthsNominativeEl[e.month()]
              : this._monthsNominativeEl;
          },
          monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split(
            '_'
          ),
          weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split(
            '_'
          ),
          weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
          weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? 'μμ' : 'ΜΜ') : n ? 'πμ' : 'ΠΜ';
          },
          isPM: function(e) {
            return 'μ' === (e + '').toLowerCase()[0];
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendarEl: {
            sameDay: '[Σήμερα {}] LT',
            nextDay: '[Αύριο {}] LT',
            nextWeek: 'dddd [{}] LT',
            lastDay: '[Χθες {}] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 6:
                  return '[το προηγούμενο] dddd [{}] LT';
                default:
                  return '[την προηγούμενη] dddd [{}] LT';
              }
            },
            sameElse: 'L',
          },
          calendar: function(e, t) {
            var n,
              a = this._calendarEl[e],
              r = t && t.hours();
            return (
              ((n = a) instanceof Function ||
                '[object Function]' === Object.prototype.toString.call(n)) &&
                (a = a.apply(t)),
              a.replace('{}', r % 12 == 1 ? 'στη' : 'στις')
            );
          },
          relativeTime: {
            future: 'σε %s',
            past: '%s πριν',
            s: 'λίγα δευτερόλεπτα',
            ss: '%d δευτερόλεπτα',
            m: 'ένα λεπτό',
            mm: '%d λεπτά',
            h: 'μία ώρα',
            hh: '%d ώρες',
            d: 'μία μέρα',
            dd: '%d μέρες',
            M: 'ένας μήνας',
            MM: '%d μήνες',
            y: 'ένας χρόνος',
            yy: '%d χρόνια',
          },
          dayOfMonthOrdinalParse: /\d{1,2}η/,
          ordinal: '%dη',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-SG', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-au', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-ca', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'YYYY-MM-DD',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-gb', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-ie', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-il', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-nz', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('eo', {
          months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split(
            '_'
          ),
          weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split(
            '_'
          ),
          weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
          weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D[-a de] MMMM, YYYY',
            LLL: 'D[-a de] MMMM, YYYY HH:mm',
            LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm',
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function(e) {
            return 'p' === e.charAt(0).toLowerCase();
          },
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? 'p.t.m.' : 'P.T.M.') : n ? 'a.t.m.' : 'A.T.M.';
          },
          calendar: {
            sameDay: '[Hodiaŭ je] LT',
            nextDay: '[Morgaŭ je] LT',
            nextWeek: 'dddd [je] LT',
            lastDay: '[Hieraŭ je] LT',
            lastWeek: '[pasinta] dddd [je] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'post %s',
            past: 'antaŭ %s',
            s: 'sekundoj',
            ss: '%d sekundoj',
            m: 'minuto',
            mm: '%d minutoj',
            h: 'horo',
            hh: '%d horoj',
            d: 'tago',
            dd: '%d tagoj',
            M: 'monato',
            MM: '%d monatoj',
            y: 'jaro',
            yy: '%d jaroj',
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: '%da',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
            '_'
          ),
          n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          a = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale('es', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_'
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split(
            '_'
          ),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
          },
          calendar: {
            sameDay: function() {
              return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function() {
              return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function() {
              return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function() {
              return (
                '[el] dddd [pasado a la' +
                (1 !== this.hours() ? 's' : '') +
                '] LT'
              );
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
            '_'
          ),
          n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          a = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale('es-do', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_'
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split(
            '_'
          ),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
          },
          calendar: {
            sameDay: function() {
              return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function() {
              return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function() {
              return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function() {
              return (
                '[el] dddd [pasado a la' +
                (1 !== this.hours() ? 's' : '') +
                '] LT'
              );
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
            '_'
          ),
          n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          a = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale('es-us', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_'
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split(
            '_'
          ),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
          },
          calendar: {
            sameDay: function() {
              return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function() {
              return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function() {
              return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function() {
              return (
                '[el] dddd [pasado a la' +
                (1 !== this.hours() ? 's' : '') +
                '] LT'
              );
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = {
            s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            ss: [e + 'sekundi', e + 'sekundit'],
            m: ['ühe minuti', 'üks minut'],
            mm: [e + ' minuti', e + ' minutit'],
            h: ['ühe tunni', 'tund aega', 'üks tund'],
            hh: [e + ' tunni', e + ' tundi'],
            d: ['ühe päeva', 'üks päev'],
            M: ['kuu aja', 'kuu aega', 'üks kuu'],
            MM: [e + ' kuu', e + ' kuud'],
            y: ['ühe aasta', 'aasta', 'üks aasta'],
            yy: [e + ' aasta', e + ' aastat'],
          };
          return t ? (r[n][2] ? r[n][2] : r[n][1]) : a ? r[n][0] : r[n][1];
        }
        e.defineLocale('et', {
          months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split(
            '_'
          ),
          monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split(
            '_'
          ),
          weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split(
            '_'
          ),
          weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
          weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[Täna,] LT',
            nextDay: '[Homme,] LT',
            nextWeek: '[Järgmine] dddd LT',
            lastDay: '[Eile,] LT',
            lastWeek: '[Eelmine] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s pärast',
            past: '%s tagasi',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: '%d päeva',
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('eu', {
          months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split(
            '_'
          ),
          monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split(
            '_'
          ),
          weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
          weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY[ko] MMMM[ren] D[a]',
            LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l: 'YYYY-M-D',
            ll: 'YYYY[ko] MMM D[a]',
            lll: 'YYYY[ko] MMM D[a] HH:mm',
            llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
          },
          calendar: {
            sameDay: '[gaur] LT[etan]',
            nextDay: '[bihar] LT[etan]',
            nextWeek: 'dddd LT[etan]',
            lastDay: '[atzo] LT[etan]',
            lastWeek: '[aurreko] dddd LT[etan]',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s barru',
            past: 'duela %s',
            s: 'segundo batzuk',
            ss: '%d segundo',
            m: 'minutu bat',
            mm: '%d minutu',
            h: 'ordu bat',
            hh: '%d ordu',
            d: 'egun bat',
            dd: '%d egun',
            M: 'hilabete bat',
            MM: '%d hilabete',
            y: 'urte bat',
            yy: '%d urte',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '۱',
            2: '۲',
            3: '۳',
            4: '۴',
            5: '۵',
            6: '۶',
            7: '۷',
            8: '۸',
            9: '۹',
            0: '۰',
          },
          n = {
            '۱': '1',
            '۲': '2',
            '۳': '3',
            '۴': '4',
            '۵': '5',
            '۶': '6',
            '۷': '7',
            '۸': '8',
            '۹': '9',
            '۰': '0',
          };
        e.defineLocale('fa', {
          months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
            '_'
          ),
          monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
            '_'
          ),
          weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split(
            '_'
          ),
          weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split(
            '_'
          ),
          weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function(e) {
            return /بعد از ظهر/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'قبل از ظهر' : 'بعد از ظهر';
          },
          calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [پیش] [ساعت] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            ss: 'ثانیه d%',
            m: 'یک دقیقه',
            mm: '%d دقیقه',
            h: 'یک ساعت',
            hh: '%d ساعت',
            d: 'یک روز',
            dd: '%d روز',
            M: 'یک ماه',
            MM: '%d ماه',
            y: 'یک سال',
            yy: '%d سال',
          },
          preparse: function(e) {
            return e
              .replace(/[۰-۹]/g, function(e) {
                return n[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          dayOfMonthOrdinalParse: /\d{1,2}م/,
          ordinal: '%dم',
          week: { dow: 6, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(
            ' '
          ),
          n = [
            'nolla',
            'yhden',
            'kahden',
            'kolmen',
            'neljän',
            'viiden',
            'kuuden',
            t[7],
            t[8],
            t[9],
          ];
        function a(e, a, r, s) {
          var i = '';
          switch (r) {
            case 's':
              return s ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
              return s ? 'sekunnin' : 'sekuntia';
            case 'm':
              return s ? 'minuutin' : 'minuutti';
            case 'mm':
              i = s ? 'minuutin' : 'minuuttia';
              break;
            case 'h':
              return s ? 'tunnin' : 'tunti';
            case 'hh':
              i = s ? 'tunnin' : 'tuntia';
              break;
            case 'd':
              return s ? 'päivän' : 'päivä';
            case 'dd':
              i = s ? 'päivän' : 'päivää';
              break;
            case 'M':
              return s ? 'kuukauden' : 'kuukausi';
            case 'MM':
              i = s ? 'kuukauden' : 'kuukautta';
              break;
            case 'y':
              return s ? 'vuoden' : 'vuosi';
            case 'yy':
              i = s ? 'vuoden' : 'vuotta';
          }
          return (i =
            (function(e, a) {
              return e < 10 ? (a ? n[e] : t[e]) : e;
            })(e, s) +
            ' ' +
            i);
        }
        e.defineLocale('fi', {
          months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
            '_'
          ),
          monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split(
            '_'
          ),
          weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
            '_'
          ),
          weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
          weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
          },
          calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('fo', {
          months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split(
            '_'
          ),
          weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split(
            '_'
          ),
          weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
          weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D. MMMM, YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Í dag kl.] LT',
            nextDay: '[Í morgin kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[Í gjár kl.] LT',
            lastWeek: '[síðstu] dddd [kl] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'um %s',
            past: '%s síðani',
            s: 'fá sekund',
            ss: '%d sekundir',
            m: 'ein minuttur',
            mm: '%d minuttir',
            h: 'ein tími',
            hh: '%d tímar',
            d: 'ein dagur',
            dd: '%d dagar',
            M: 'ein mánaður',
            MM: '%d mánaðir',
            y: 'eitt ár',
            yy: '%d ár',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('fr', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_'
          ),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
            '_'
          ),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'D':
                return e + (1 === e ? 'er' : '');
              default:
              case 'M':
              case 'Q':
              case 'DDD':
              case 'd':
                return e + (1 === e ? 'er' : 'e');
              case 'w':
              case 'W':
                return e + (1 === e ? 're' : 'e');
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('fr-ca', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_'
          ),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
            '_'
          ),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function(e, t) {
            switch (t) {
              default:
              case 'M':
              case 'Q':
              case 'D':
              case 'DDD':
              case 'd':
                return e + (1 === e ? 'er' : 'e');
              case 'w':
              case 'W':
                return e + (1 === e ? 're' : 'e');
            }
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('fr-ch', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_'
          ),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
            '_'
          ),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function(e, t) {
            switch (t) {
              default:
              case 'M':
              case 'Q':
              case 'D':
              case 'DDD':
              case 'd':
                return e + (1 === e ? 'er' : 'e');
              case 'w':
              case 'W':
                return e + (1 === e ? 're' : 'e');
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split(
            '_'
          ),
          n = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
        e.defineLocale('fy', {
          months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split(
            '_'
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsParseExact: !0,
          weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split(
            '_'
          ),
          weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
          weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'oer %s',
            past: '%s lyn',
            s: 'in pear sekonden',
            ss: '%d sekonden',
            m: 'ien minút',
            mm: '%d minuten',
            h: 'ien oere',
            hh: '%d oeren',
            d: 'ien dei',
            dd: '%d dagen',
            M: 'ien moanne',
            MM: '%d moannen',
            y: 'ien jier',
            yy: '%d jierren',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ga', {
          months: [
            'Eanáir',
            'Feabhra',
            'Márta',
            'Aibreán',
            'Bealtaine',
            'Méitheamh',
            'Iúil',
            'Lúnasa',
            'Meán Fómhair',
            'Deaireadh Fómhair',
            'Samhain',
            'Nollaig',
          ],
          monthsShort: [
            'Eaná',
            'Feab',
            'Márt',
            'Aibr',
            'Beal',
            'Méit',
            'Iúil',
            'Lúna',
            'Meán',
            'Deai',
            'Samh',
            'Noll',
          ],
          monthsParseExact: !0,
          weekdays: [
            'Dé Domhnaigh',
            'Dé Luain',
            'Dé Máirt',
            'Dé Céadaoin',
            'Déardaoin',
            'Dé hAoine',
            'Dé Satharn',
          ],
          weekdaysShort: ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'],
          weekdaysMin: ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'],
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Inniu ag] LT',
            nextDay: '[Amárach ag] LT',
            nextWeek: 'dddd [ag] LT',
            lastDay: '[Inné aig] LT',
            lastWeek: 'dddd [seo caite] [ag] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'i %s',
            past: '%s ó shin',
            s: 'cúpla soicind',
            ss: '%d soicind',
            m: 'nóiméad',
            mm: '%d nóiméad',
            h: 'uair an chloig',
            hh: '%d uair an chloig',
            d: 'lá',
            dd: '%d lá',
            M: 'mí',
            MM: '%d mí',
            y: 'bliain',
            yy: '%d bliain',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function(e) {
            var t = 1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh';
            return e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('gd', {
          months: [
            'Am Faoilleach',
            'An Gearran',
            'Am Màrt',
            'An Giblean',
            'An Cèitean',
            'An t-Ògmhios',
            'An t-Iuchar',
            'An Lùnastal',
            'An t-Sultain',
            'An Dàmhair',
            'An t-Samhain',
            'An Dùbhlachd',
          ],
          monthsShort: [
            'Faoi',
            'Gear',
            'Màrt',
            'Gibl',
            'Cèit',
            'Ògmh',
            'Iuch',
            'Lùn',
            'Sult',
            'Dàmh',
            'Samh',
            'Dùbh',
          ],
          monthsParseExact: !0,
          weekdays: [
            'Didòmhnaich',
            'Diluain',
            'Dimàirt',
            'Diciadain',
            'Diardaoin',
            'Dihaoine',
            'Disathairne',
          ],
          weekdaysShort: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
          weekdaysMin: ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'],
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[An-diugh aig] LT',
            nextDay: '[A-màireach aig] LT',
            nextWeek: 'dddd [aig] LT',
            lastDay: '[An-dè aig] LT',
            lastWeek: 'dddd [seo chaidh] [aig] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ann an %s',
            past: 'bho chionn %s',
            s: 'beagan diogan',
            ss: '%d diogan',
            m: 'mionaid',
            mm: '%d mionaidean',
            h: 'uair',
            hh: '%d uairean',
            d: 'latha',
            dd: '%d latha',
            M: 'mìos',
            MM: '%d mìosan',
            y: 'bliadhna',
            yy: '%d bliadhna',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function(e) {
            var t = 1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh';
            return e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('gl', {
          months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split(
            '_'
          ),
          monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split(
            '_'
          ),
          weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
          },
          calendar: {
            sameDay: function() {
              return '[hoxe ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
            },
            nextDay: function() {
              return '[mañá ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
            },
            lastDay: function() {
              return '[onte ' + (1 !== this.hours() ? 'á' : 'a') + '] LT';
            },
            lastWeek: function() {
              return (
                '[o] dddd [pasado ' + (1 !== this.hours() ? 'ás' : 'a') + '] LT'
              );
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return 0 === e.indexOf('un') ? 'n' + e : 'en ' + e;
            },
            past: 'hai %s',
            s: 'uns segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'unha hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un ano',
            yy: '%d anos',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = {
            s: ['thodde secondanim', 'thodde second'],
            ss: [e + ' secondanim', e + ' second'],
            m: ['eka mintan', 'ek minute'],
            mm: [e + ' mintanim', e + ' mintam'],
            h: ['eka voran', 'ek vor'],
            hh: [e + ' voranim', e + ' voram'],
            d: ['eka disan', 'ek dis'],
            dd: [e + ' disanim', e + ' dis'],
            M: ['eka mhoinean', 'ek mhoino'],
            MM: [e + ' mhoineanim', e + ' mhoine'],
            y: ['eka vorsan', 'ek voros'],
            yy: [e + ' vorsanim', e + ' vorsam'],
          };
          return t ? r[n][0] : r[n][1];
        }
        e.defineLocale('gom-latn', {
          months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split(
            '_'
          ),
          monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split(
            '_'
          ),
          weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
          weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'A h:mm [vazta]',
            LTS: 'A h:mm:ss [vazta]',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY A h:mm [vazta]',
            LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
          },
          calendar: {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s',
            past: '%s adim',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'D':
                return e + 'er';
              default:
              case 'M':
              case 'Q':
              case 'DDD':
              case 'd':
              case 'w':
              case 'W':
                return e;
            }
          },
          week: { dow: 1, doy: 4 },
          meridiemParse: /rati|sokalli|donparam|sanje/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'rati' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'sokalli' === t
                ? e
                : 'donparam' === t
                ? e > 12
                  ? e
                  : e + 12
                : 'sanje' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'rati'
              : e < 12
              ? 'sokalli'
              : e < 16
              ? 'donparam'
              : e < 20
              ? 'sanje'
              : 'rati';
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '૧',
            2: '૨',
            3: '૩',
            4: '૪',
            5: '૫',
            6: '૬',
            7: '૭',
            8: '૮',
            9: '૯',
            0: '૦',
          },
          n = {
            '૧': '1',
            '૨': '2',
            '૩': '3',
            '૪': '4',
            '૫': '5',
            '૬': '6',
            '૭': '7',
            '૮': '8',
            '૯': '9',
            '૦': '0',
          };
        e.defineLocale('gu', {
          months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split(
            '_'
          ),
          monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split(
            '_'
          ),
          weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
          weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે',
          },
          calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ',
          },
          preparse: function(e) {
            return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'રાત' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'સવાર' === t
                ? e
                : 'બપોર' === t
                ? e >= 10
                  ? e
                  : e + 12
                : 'સાંજ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'રાત'
              : e < 10
              ? 'સવાર'
              : e < 17
              ? 'બપોર'
              : e < 20
              ? 'સાંજ'
              : 'રાત';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('he', {
          months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split(
            '_'
          ),
          monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split(
            '_'
          ),
          weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
          weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
          weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [ב]MMMM YYYY',
            LLL: 'D [ב]MMMM YYYY HH:mm',
            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
            l: 'D/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[היום ב־]LT',
            nextDay: '[מחר ב־]LT',
            nextWeek: 'dddd [בשעה] LT',
            lastDay: '[אתמול ב־]LT',
            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'בעוד %s',
            past: 'לפני %s',
            s: 'מספר שניות',
            ss: '%d שניות',
            m: 'דקה',
            mm: '%d דקות',
            h: 'שעה',
            hh: function(e) {
              return 2 === e ? 'שעתיים' : e + ' שעות';
            },
            d: 'יום',
            dd: function(e) {
              return 2 === e ? 'יומיים' : e + ' ימים';
            },
            M: 'חודש',
            MM: function(e) {
              return 2 === e ? 'חודשיים' : e + ' חודשים';
            },
            y: 'שנה',
            yy: function(e) {
              return 2 === e
                ? 'שנתיים'
                : e % 10 == 0 && 10 !== e
                ? e + ' שנה'
                : e + ' שנים';
            },
          },
          meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: function(e) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 5
              ? 'לפנות בוקר'
              : e < 10
              ? 'בבוקר'
              : e < 12
              ? n
                ? 'לפנה"צ'
                : 'לפני הצהריים'
              : e < 18
              ? n
                ? 'אחה"צ'
                : 'אחרי הצהריים'
              : 'בערב';
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
            0: '०',
          },
          n = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0',
          };
        e.defineLocale('hi', {
          months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split(
            '_'
          ),
          monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split(
            '_'
          ),
          weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
          weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
          longDateFormat: {
            LT: 'A h:mm बजे',
            LTS: 'A h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे',
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[कल] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[कल] LT',
            lastWeek: '[पिछले] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s में',
            past: '%s पहले',
            s: 'कुछ ही क्षण',
            ss: '%d सेकंड',
            m: 'एक मिनट',
            mm: '%d मिनट',
            h: 'एक घंटा',
            hh: '%d घंटे',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महीने',
            MM: '%d महीने',
            y: 'एक वर्ष',
            yy: '%d वर्ष',
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'रात' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'सुबह' === t
                ? e
                : 'दोपहर' === t
                ? e >= 10
                  ? e
                  : e + 12
                : 'शाम' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'रात'
              : e < 10
              ? 'सुबह'
              : e < 17
              ? 'दोपहर'
              : e < 20
              ? 'शाम'
              : 'रात';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n) {
          var a = e + ' ';
          switch (n) {
            case 'ss':
              return (a +=
                1 === e
                  ? 'sekunda'
                  : 2 === e || 3 === e || 4 === e
                  ? 'sekunde'
                  : 'sekundi');
            case 'm':
              return t ? 'jedna minuta' : 'jedne minute';
            case 'mm':
              return (a +=
                1 === e
                  ? 'minuta'
                  : 2 === e || 3 === e || 4 === e
                  ? 'minute'
                  : 'minuta');
            case 'h':
              return t ? 'jedan sat' : 'jednog sata';
            case 'hh':
              return (a +=
                1 === e
                  ? 'sat'
                  : 2 === e || 3 === e || 4 === e
                  ? 'sata'
                  : 'sati');
            case 'dd':
              return (a += 1 === e ? 'dan' : 'dana');
            case 'MM':
              return (a +=
                1 === e
                  ? 'mjesec'
                  : 2 === e || 3 === e || 4 === e
                  ? 'mjeseca'
                  : 'mjeseci');
            case 'yy':
              return (a +=
                1 === e
                  ? 'godina'
                  : 2 === e || 3 === e || 4 === e
                  ? 'godine'
                  : 'godina');
          }
        }
        e.defineLocale('hr', {
          months: {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
              '_'
            ),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
              '_'
            ),
          },
          monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split(
            '_'
          ),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';
                case 3:
                  return '[u] [srijedu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return '[prošlu] dddd [u] LT';
                case 6:
                  return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prošli] dddd [u] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: 'dan',
            dd: t,
            M: 'mjesec',
            MM: t,
            y: 'godinu',
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(
          ' '
        );
        function n(e, t, n, a) {
          var r = e;
          switch (n) {
            case 's':
              return a || t ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
              return r + (a || t) ? ' másodperc' : ' másodperce';
            case 'm':
              return 'egy' + (a || t ? ' perc' : ' perce');
            case 'mm':
              return r + (a || t ? ' perc' : ' perce');
            case 'h':
              return 'egy' + (a || t ? ' óra' : ' órája');
            case 'hh':
              return r + (a || t ? ' óra' : ' órája');
            case 'd':
              return 'egy' + (a || t ? ' nap' : ' napja');
            case 'dd':
              return r + (a || t ? ' nap' : ' napja');
            case 'M':
              return 'egy' + (a || t ? ' hónap' : ' hónapja');
            case 'MM':
              return r + (a || t ? ' hónap' : ' hónapja');
            case 'y':
              return 'egy' + (a || t ? ' év' : ' éve');
            case 'yy':
              return r + (a || t ? ' év' : ' éve');
          }
          return '';
        }
        function a(e) {
          return (e ? '' : '[múlt] ') + '[' + t[this.day()] + '] LT[-kor]';
        }
        e.defineLocale('hu', {
          months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split(
            '_'
          ),
          monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split(
            '_'
          ),
          weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split(
            '_'
          ),
          weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
          weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm',
          },
          meridiemParse: /de|du/i,
          isPM: function(e) {
            return 'u' === e.charAt(1).toLowerCase();
          },
          meridiem: function(e, t, n) {
            return e < 12 ? (!0 === n ? 'de' : 'DE') : !0 === n ? 'du' : 'DU';
          },
          calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: function() {
              return a.call(this, !0);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: function() {
              return a.call(this, !1);
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('hy-am', {
          months: {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split(
              '_'
            ),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split(
              '_'
            ),
          },
          monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split(
            '_'
          ),
          weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split(
            '_'
          ),
          weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
          weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY թ.',
            LLL: 'D MMMM YYYY թ., HH:mm',
            LLLL: 'dddd, D MMMM YYYY թ., HH:mm',
          },
          calendar: {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function() {
              return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function() {
              return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s հետո',
            past: '%s առաջ',
            s: 'մի քանի վայրկյան',
            ss: '%d վայրկյան',
            m: 'րոպե',
            mm: '%d րոպե',
            h: 'ժամ',
            hh: '%d ժամ',
            d: 'օր',
            dd: '%d օր',
            M: 'ամիս',
            MM: '%d ամիս',
            y: 'տարի',
            yy: '%d տարի',
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function(e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e);
          },
          meridiem: function(e) {
            return e < 4
              ? 'գիշերվա'
              : e < 12
              ? 'առավոտվա'
              : e < 17
              ? 'ցերեկվա'
              : 'երեկոյան';
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'DDD':
              case 'w':
              case 'W':
              case 'DDDo':
                return 1 === e ? e + '-ին' : e + '-րդ';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('id', {
          months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split(
            '_'
          ),
          weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
          weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
          weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'pagi' === t
                ? e
                : 'siang' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'sore' === t || 'malam' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? 'pagi'
              : e < 15
              ? 'siang'
              : e < 19
              ? 'sore'
              : 'malam';
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Besok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kemarin pukul] LT',
            lastWeek: 'dddd [lalu pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lalu',
            s: 'beberapa detik',
            ss: '%d detik',
            m: 'semenit',
            mm: '%d menit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e) {
          return e % 100 == 11 || e % 10 != 1;
        }
        function n(e, n, a, r) {
          var s = e + ' ';
          switch (a) {
            case 's':
              return n || r ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
              return t(e)
                ? s + (n || r ? 'sekúndur' : 'sekúndum')
                : s + 'sekúnda';
            case 'm':
              return n ? 'mínúta' : 'mínútu';
            case 'mm':
              return t(e)
                ? s + (n || r ? 'mínútur' : 'mínútum')
                : n
                ? s + 'mínúta'
                : s + 'mínútu';
            case 'hh':
              return t(e)
                ? s + (n || r ? 'klukkustundir' : 'klukkustundum')
                : s + 'klukkustund';
            case 'd':
              return n ? 'dagur' : r ? 'dag' : 'degi';
            case 'dd':
              return t(e)
                ? n
                  ? s + 'dagar'
                  : s + (r ? 'daga' : 'dögum')
                : n
                ? s + 'dagur'
                : s + (r ? 'dag' : 'degi');
            case 'M':
              return n ? 'mánuður' : r ? 'mánuð' : 'mánuði';
            case 'MM':
              return t(e)
                ? n
                  ? s + 'mánuðir'
                  : s + (r ? 'mánuði' : 'mánuðum')
                : n
                ? s + 'mánuður'
                : s + (r ? 'mánuð' : 'mánuði');
            case 'y':
              return n || r ? 'ár' : 'ári';
            case 'yy':
              return t(e)
                ? s + (n || r ? 'ár' : 'árum')
                : s + (n || r ? 'ár' : 'ári');
          }
        }
        e.defineLocale('is', {
          months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split(
            '_'
          ),
          weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split(
            '_'
          ),
          weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
          weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
          },
          calendar: {
            sameDay: '[í dag kl.] LT',
            nextDay: '[á morgun kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[í gær kl.] LT',
            lastWeek: '[síðasta] dddd [kl.] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'eftir %s',
            past: 'fyrir %s síðan',
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: 'klukkustund',
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('it', {
          months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
            '_'
          ),
          monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split(
            '_'
          ),
          weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split(
            '_'
          ),
          weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
          weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[la scorsa] dddd [alle] LT';
                default:
                  return '[lo scorso] dddd [alle] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: "un'ora",
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('it-ch', {
          months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
            '_'
          ),
          monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split(
            '_'
          ),
          weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split(
            '_'
          ),
          weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
          weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[la scorsa] dddd [alle] LT';
                default:
                  return '[lo scorso] dddd [alle] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: "un'ora",
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ja', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
          ),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
            '_'
          ),
          weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split(
            '_'
          ),
          weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
          weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日 dddd HH:mm',
            l: 'YYYY/MM/DD',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日(ddd) HH:mm',
          },
          meridiemParse: /午前|午後/i,
          isPM: function(e) {
            return '午後' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? '午前' : '午後';
          },
          calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: function(e) {
              return e.week() < this.week() ? '[来週]dddd LT' : 'dddd LT';
            },
            lastDay: '[昨日] LT',
            lastWeek: function(e) {
              return this.week() < e.week() ? '[先週]dddd LT' : 'dddd LT';
            },
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            ss: '%d秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年',
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('jv', {
          months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split(
            '_'
          ),
          weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
          weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
          weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'enjing' === t
                ? e
                : 'siyang' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'sonten' === t || 'ndalu' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? 'enjing'
              : e < 15
              ? 'siyang'
              : e < 19
              ? 'sonten'
              : 'ndalu';
          },
          calendar: {
            sameDay: '[Dinten puniko pukul] LT',
            nextDay: '[Mbenjang pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kala wingi pukul] LT',
            lastWeek: 'dddd [kepengker pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'wonten ing %s',
            past: '%s ingkang kepengker',
            s: 'sawetawis detik',
            ss: '%d detik',
            m: 'setunggal menit',
            mm: '%d menit',
            h: 'setunggal jam',
            hh: '%d jam',
            d: 'sedinten',
            dd: '%d dinten',
            M: 'sewulan',
            MM: '%d wulan',
            y: 'setaun',
            yy: '%d taun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ka', {
          months: {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split(
              '_'
            ),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split(
              '_'
            ),
          },
          monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split(
            '_'
          ),
          weekdays: {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split(
              '_'
            ),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split(
              '_'
            ),
            isFormat: /(წინა|შემდეგ)/,
          },
          weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
          weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[დღეს] LT[-ზე]',
            nextDay: '[ხვალ] LT[-ზე]',
            lastDay: '[გუშინ] LT[-ზე]',
            nextWeek: '[შემდეგ] dddd LT[-ზე]',
            lastWeek: '[წინა] dddd LT-ზე',
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return /(წამი|წუთი|საათი|წელი)/.test(e)
                ? e.replace(/ი$/, 'ში')
                : e + 'ში';
            },
            past: function(e) {
              return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                ? e.replace(/(ი|ე)$/, 'ის წინ')
                : /წელი/.test(e)
                ? e.replace(/წელი$/, 'წლის წინ')
                : void 0;
            },
            s: 'რამდენიმე წამი',
            ss: '%d წამი',
            m: 'წუთი',
            mm: '%d წუთი',
            h: 'საათი',
            hh: '%d საათი',
            d: 'დღე',
            dd: '%d დღე',
            M: 'თვე',
            MM: '%d თვე',
            y: 'წელი',
            yy: '%d წელი',
          },
          dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function(e) {
            return 0 === e
              ? e
              : 1 === e
              ? e + '-ლი'
              : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
              ? 'მე-' + e
              : e + '-ე';
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          0: '-ші',
          1: '-ші',
          2: '-ші',
          3: '-ші',
          4: '-ші',
          5: '-ші',
          6: '-шы',
          7: '-ші',
          8: '-ші',
          9: '-шы',
          10: '-шы',
          20: '-шы',
          30: '-шы',
          40: '-шы',
          50: '-ші',
          60: '-шы',
          70: '-ші',
          80: '-ші',
          90: '-шы',
          100: '-ші',
        };
        e.defineLocale('kk', {
          months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split(
            '_'
          ),
          monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split(
            '_'
          ),
          weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split(
            '_'
          ),
          weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
          weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Бүгін сағат] LT',
            nextDay: '[Ертең сағат] LT',
            nextWeek: 'dddd [сағат] LT',
            lastDay: '[Кеше сағат] LT',
            lastWeek: '[Өткен аптаның] dddd [сағат] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ішінде',
            past: '%s бұрын',
            s: 'бірнеше секунд',
            ss: '%d секунд',
            m: 'бір минут',
            mm: '%d минут',
            h: 'бір сағат',
            hh: '%d сағат',
            d: 'бір күн',
            dd: '%d күн',
            M: 'бір ай',
            MM: '%d ай',
            y: 'бір жыл',
            yy: '%d жыл',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
          ordinal: function(e) {
            var n = e % 10,
              a = e >= 100 ? 100 : null;
            return e + (t[e] || t[n] || t[a]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '១',
            2: '២',
            3: '៣',
            4: '៤',
            5: '៥',
            6: '៦',
            7: '៧',
            8: '៨',
            9: '៩',
            0: '០',
          },
          n = {
            '១': '1',
            '២': '2',
            '៣': '3',
            '៤': '4',
            '៥': '5',
            '៦': '6',
            '៧': '7',
            '៨': '8',
            '៩': '9',
            '០': '0',
          };
        e.defineLocale('km', {
          months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
          ),
          monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
          ),
          weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
          weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
          weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          meridiemParse: /ព្រឹក|ល្ងាច/,
          isPM: function(e) {
            return 'ល្ងាច' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'ព្រឹក' : 'ល្ងាច';
          },
          calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ',
          },
          dayOfMonthOrdinalParse: /ទី\d{1,2}/,
          ordinal: 'ទី%d',
          preparse: function(e) {
            return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '೧',
            2: '೨',
            3: '೩',
            4: '೪',
            5: '೫',
            6: '೬',
            7: '೭',
            8: '೮',
            9: '೯',
            0: '೦',
          },
          n = {
            '೧': '1',
            '೨': '2',
            '೩': '3',
            '೪': '4',
            '೫': '5',
            '೬': '6',
            '೭': '7',
            '೮': '8',
            '೯': '9',
            '೦': '0',
          };
        e.defineLocale('kn', {
          months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split(
            '_'
          ),
          monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split(
            '_'
          ),
          weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
          weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm',
          },
          calendar: {
            sameDay: '[ಇಂದು] LT',
            nextDay: '[ನಾಳೆ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ನಿನ್ನೆ] LT',
            lastWeek: '[ಕೊನೆಯ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ನಂತರ',
            past: '%s ಹಿಂದೆ',
            s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss: '%d ಸೆಕೆಂಡುಗಳು',
            m: 'ಒಂದು ನಿಮಿಷ',
            mm: '%d ನಿಮಿಷ',
            h: 'ಒಂದು ಗಂಟೆ',
            hh: '%d ಗಂಟೆ',
            d: 'ಒಂದು ದಿನ',
            dd: '%d ದಿನ',
            M: 'ಒಂದು ತಿಂಗಳು',
            MM: '%d ತಿಂಗಳು',
            y: 'ಒಂದು ವರ್ಷ',
            yy: '%d ವರ್ಷ',
          },
          preparse: function(e) {
            return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'ರಾತ್ರಿ' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'ಬೆಳಿಗ್ಗೆ' === t
                ? e
                : 'ಮಧ್ಯಾಹ್ನ' === t
                ? e >= 10
                  ? e
                  : e + 12
                : 'ಸಂಜೆ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'ರಾತ್ರಿ'
              : e < 10
              ? 'ಬೆಳಿಗ್ಗೆ'
              : e < 17
              ? 'ಮಧ್ಯಾಹ್ನ'
              : e < 20
              ? 'ಸಂಜೆ'
              : 'ರಾತ್ರಿ';
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
          ordinal: function(e) {
            return e + 'ನೇ';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ko', {
          months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split(
            '_'
          ),
          monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split(
            '_'
          ),
          weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split(
            '_'
          ),
          weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
          weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h:mm',
            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
            l: 'YYYY.MM.DD.',
            ll: 'YYYY년 MMMM D일',
            lll: 'YYYY년 MMMM D일 A h:mm',
            llll: 'YYYY년 MMMM D일 dddd A h:mm',
          },
          calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇 초',
            ss: '%d초',
            m: '1분',
            mm: '%d분',
            h: '한 시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한 달',
            MM: '%d달',
            y: '일 년',
            yy: '%d년',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '일';
              case 'M':
                return e + '월';
              case 'w':
              case 'W':
                return e + '주';
              default:
                return e;
            }
          },
          meridiemParse: /오전|오후/,
          isPM: function(e) {
            return '오후' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? '오전' : '오후';
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '١',
            2: '٢',
            3: '٣',
            4: '٤',
            5: '٥',
            6: '٦',
            7: '٧',
            8: '٨',
            9: '٩',
            0: '٠',
          },
          n = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0',
          },
          a = [
            'کانونی دووەم',
            'شوبات',
            'ئازار',
            'نیسان',
            'ئایار',
            'حوزەیران',
            'تەمموز',
            'ئاب',
            'ئەیلوول',
            'تشرینی یەكەم',
            'تشرینی دووەم',
            'كانونی یەکەم',
          ];
        e.defineLocale('ku', {
          months: a,
          monthsShort: a,
          weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split(
            '_'
          ),
          weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split(
            '_'
          ),
          weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          meridiemParse: /ئێواره‌|به‌یانی/,
          isPM: function(e) {
            return /ئێواره‌/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'به‌یانی' : 'ئێواره‌';
          },
          calendar: {
            sameDay: '[ئه‌مرۆ كاتژمێر] LT',
            nextDay: '[به‌یانی كاتژمێر] LT',
            nextWeek: 'dddd [كاتژمێر] LT',
            lastDay: '[دوێنێ كاتژمێر] LT',
            lastWeek: 'dddd [كاتژمێر] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'له‌ %s',
            past: '%s',
            s: 'چه‌ند چركه‌یه‌ك',
            ss: 'چركه‌ %d',
            m: 'یه‌ك خوله‌ك',
            mm: '%d خوله‌ك',
            h: 'یه‌ك كاتژمێر',
            hh: '%d كاتژمێر',
            d: 'یه‌ك ڕۆژ',
            dd: '%d ڕۆژ',
            M: 'یه‌ك مانگ',
            MM: '%d مانگ',
            y: 'یه‌ك ساڵ',
            yy: '%d ساڵ',
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return n[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 6, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          0: '-чү',
          1: '-чи',
          2: '-чи',
          3: '-чү',
          4: '-чү',
          5: '-чи',
          6: '-чы',
          7: '-чи',
          8: '-чи',
          9: '-чу',
          10: '-чу',
          20: '-чы',
          30: '-чу',
          40: '-чы',
          50: '-чү',
          60: '-чы',
          70: '-чи',
          80: '-чи',
          90: '-чу',
          100: '-чү',
        };
        e.defineLocale('ky', {
          months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
            '_'
          ),
          monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split(
            '_'
          ),
          weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split(
            '_'
          ),
          weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
          weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Бүгүн саат] LT',
            nextDay: '[Эртең саат] LT',
            nextWeek: 'dddd [саат] LT',
            lastDay: '[Кечээ саат] LT',
            lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ичинде',
            past: '%s мурун',
            s: 'бирнече секунд',
            ss: '%d секунд',
            m: 'бир мүнөт',
            mm: '%d мүнөт',
            h: 'бир саат',
            hh: '%d саат',
            d: 'бир күн',
            dd: '%d күн',
            M: 'бир ай',
            MM: '%d ай',
            y: 'бир жыл',
            yy: '%d жыл',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
          ordinal: function(e) {
            var n = e % 10,
              a = e >= 100 ? 100 : null;
            return e + (t[e] || t[n] || t[a]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = {
            m: ['eng Minutt', 'enger Minutt'],
            h: ['eng Stonn', 'enger Stonn'],
            d: ['een Dag', 'engem Dag'],
            M: ['ee Mount', 'engem Mount'],
            y: ['ee Joer', 'engem Joer'],
          };
          return t ? r[n][0] : r[n][1];
        }
        function n(e) {
          if (((e = parseInt(e, 10)), isNaN(e))) return !1;
          if (e < 0) return !0;
          if (e < 10) return 4 <= e && e <= 7;
          if (e < 100) {
            var t = e % 10,
              a = e / 10;
            return n(0 === t ? a : t);
          }
          if (e < 1e4) {
            for (; e >= 10; ) e /= 10;
            return n(e);
          }
          return n((e /= 1e3));
        }
        e.defineLocale('lb', {
          months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_'
          ),
          monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split(
            '_'
          ),
          weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
          },
          calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 2:
                case 4:
                  return '[Leschten] dddd [um] LT';
                default:
                  return '[Leschte] dddd [um] LT';
              }
            },
          },
          relativeTime: {
            future: function(e) {
              return n(e.substr(0, e.indexOf(' '))) ? 'a ' + e : 'an ' + e;
            },
            past: function(e) {
              return n(e.substr(0, e.indexOf(' ')))
                ? 'viru ' + e
                : 'virun ' + e;
            },
            s: 'e puer Sekonnen',
            ss: '%d Sekonnen',
            m: t,
            mm: '%d Minutten',
            h: t,
            hh: '%d Stonnen',
            d: t,
            dd: '%d Deeg',
            M: t,
            MM: '%d Méint',
            y: t,
            yy: '%d Joer',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('lo', {
          months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split(
            '_'
          ),
          monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split(
            '_'
          ),
          weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
          weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
          weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'ວັນdddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
          isPM: function(e) {
            return 'ຕອນແລງ' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'ຕອນເຊົ້າ' : 'ຕອນແລງ';
          },
          calendar: {
            sameDay: '[ມື້ນີ້ເວລາ] LT',
            nextDay: '[ມື້ອື່ນເວລາ] LT',
            nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay: '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ອີກ %s',
            past: '%sຜ່ານມາ',
            s: 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss: '%d ວິນາທີ',
            m: '1 ນາທີ',
            mm: '%d ນາທີ',
            h: '1 ຊົ່ວໂມງ',
            hh: '%d ຊົ່ວໂມງ',
            d: '1 ມື້',
            dd: '%d ມື້',
            M: '1 ເດືອນ',
            MM: '%d ເດືອນ',
            y: '1 ປີ',
            yy: '%d ປີ',
          },
          dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
          ordinal: function(e) {
            return 'ທີ່' + e;
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          ss: 'sekundė_sekundžių_sekundes',
          m: 'minutė_minutės_minutę',
          mm: 'minutės_minučių_minutes',
          h: 'valanda_valandos_valandą',
          hh: 'valandos_valandų_valandas',
          d: 'diena_dienos_dieną',
          dd: 'dienos_dienų_dienas',
          M: 'mėnuo_mėnesio_mėnesį',
          MM: 'mėnesiai_mėnesių_mėnesius',
          y: 'metai_metų_metus',
          yy: 'metai_metų_metus',
        };
        function n(e, t, n, a) {
          return t ? r(n)[0] : a ? r(n)[1] : r(n)[2];
        }
        function a(e) {
          return e % 10 == 0 || (e > 10 && e < 20);
        }
        function r(e) {
          return t[e].split('_');
        }
        function s(e, t, s, i) {
          var o = e + ' ';
          return 1 === e
            ? o + n(0, t, s[0], i)
            : t
            ? o + (a(e) ? r(s)[1] : r(s)[0])
            : i
            ? o + r(s)[1]
            : o + (a(e) ? r(s)[1] : r(s)[2]);
        }
        e.defineLocale('lt', {
          months: {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
              '_'
            ),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
              '_'
            ),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
          },
          monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split(
            '_'
          ),
          weekdays: {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split(
              '_'
            ),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split(
              '_'
            ),
            isFormat: /dddd HH:mm/,
          },
          weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
          weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
          },
          calendar: {
            sameDay: '[Šiandien] LT',
            nextDay: '[Rytoj] LT',
            nextWeek: 'dddd LT',
            lastDay: '[Vakar] LT',
            lastWeek: '[Praėjusį] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'po %s',
            past: 'prieš %s',
            s: function(e, t, n, a) {
              return t
                ? 'kelios sekundės'
                : a
                ? 'kelių sekundžių'
                : 'kelias sekundes';
            },
            ss: s,
            m: n,
            mm: s,
            h: n,
            hh: s,
            d: n,
            dd: s,
            M: n,
            MM: s,
            y: n,
            yy: s,
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function(e) {
            return e + '-oji';
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
          m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
          mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
          h: 'stundas_stundām_stunda_stundas'.split('_'),
          hh: 'stundas_stundām_stunda_stundas'.split('_'),
          d: 'dienas_dienām_diena_dienas'.split('_'),
          dd: 'dienas_dienām_diena_dienas'.split('_'),
          M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
          MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
          y: 'gada_gadiem_gads_gadi'.split('_'),
          yy: 'gada_gadiem_gads_gadi'.split('_'),
        };
        function n(e, t, n) {
          return n
            ? t % 10 == 1 && t % 100 != 11
              ? e[2]
              : e[3]
            : t % 10 == 1 && t % 100 != 11
            ? e[0]
            : e[1];
        }
        function a(e, a, r) {
          return e + ' ' + n(t[r], e, a);
        }
        function r(e, a, r) {
          return n(t[r], e, a);
        }
        e.defineLocale('lv', {
          months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split(
            '_'
          ),
          weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split(
            '_'
          ),
          weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
          weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY.',
            LL: 'YYYY. [gada] D. MMMM',
            LLL: 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
          },
          calendar: {
            sameDay: '[Šodien pulksten] LT',
            nextDay: '[Rīt pulksten] LT',
            nextWeek: 'dddd [pulksten] LT',
            lastDay: '[Vakar pulksten] LT',
            lastWeek: '[Pagājušā] dddd [pulksten] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'pēc %s',
            past: 'pirms %s',
            s: function(e, t) {
              return t ? 'dažas sekundes' : 'dažām sekundēm';
            },
            ss: a,
            m: r,
            mm: a,
            h: r,
            hh: a,
            d: r,
            dd: a,
            M: r,
            MM: a,
            y: r,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          words: {
            ss: ['sekund', 'sekunda', 'sekundi'],
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina'],
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, n, a) {
            var r = t.words[a];
            return 1 === a.length
              ? n
                ? r[0]
                : r[1]
              : e + ' ' + t.correctGrammaticalCase(e, r);
          },
        };
        e.defineLocale('me', {
          months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
            '_'
          ),
          monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split(
            '_'
          ),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';
                case 3:
                  return '[u] [srijedu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[juče u] LT',
            lastWeek: function() {
              return [
                '[prošle] [nedjelje] [u] LT',
                '[prošlog] [ponedjeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srijede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT',
              ][this.day()];
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'nekoliko sekundi',
            ss: t.translate,
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: 'dan',
            dd: t.translate,
            M: 'mjesec',
            MM: t.translate,
            y: 'godinu',
            yy: t.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('mi', {
          months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split(
            '_'
          ),
          monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split(
            '_'
          ),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split(
            '_'
          ),
          weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
          weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
          },
          calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('mk', {
          months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split(
            '_'
          ),
          monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split(
            '_'
          ),
          weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split(
            '_'
          ),
          weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
          weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[Денес во] LT',
            nextDay: '[Утре во] LT',
            nextWeek: '[Во] dddd [во] LT',
            lastDay: '[Вчера во] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return '[Изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[Изминатиот] dddd [во] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'после %s',
            past: 'пред %s',
            s: 'неколку секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дена',
            M: 'месец',
            MM: '%d месеци',
            y: 'година',
            yy: '%d години',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
            var t = e % 10,
              n = e % 100;
            return 0 === e
              ? e + '-ев'
              : 0 === n
              ? e + '-ен'
              : n > 10 && n < 20
              ? e + '-ти'
              : 1 === t
              ? e + '-ви'
              : 2 === t
              ? e + '-ри'
              : 7 === t || 8 === t
              ? e + '-ми'
              : e + '-ти';
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ml', {
          months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split(
            '_'
          ),
          monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split(
            '_'
          ),
          weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
          weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm -നു',
            LTS: 'A h:mm:ss -നു',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm -നു',
            LLLL: 'dddd, D MMMM YYYY, A h:mm -നു',
          },
          calendar: {
            sameDay: '[ഇന്ന്] LT',
            nextDay: '[നാളെ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ഇന്നലെ] LT',
            lastWeek: '[കഴിഞ്ഞ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s കഴിഞ്ഞ്',
            past: '%s മുൻപ്',
            s: 'അൽപ നിമിഷങ്ങൾ',
            ss: '%d സെക്കൻഡ്',
            m: 'ഒരു മിനിറ്റ്',
            mm: '%d മിനിറ്റ്',
            h: 'ഒരു മണിക്കൂർ',
            hh: '%d മണിക്കൂർ',
            d: 'ഒരു ദിവസം',
            dd: '%d ദിവസം',
            M: 'ഒരു മാസം',
            MM: '%d മാസം',
            y: 'ഒരു വർഷം',
            yy: '%d വർഷം',
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ('രാത്രി' === t && e >= 4) ||
              'ഉച്ച കഴിഞ്ഞ്' === t ||
              'വൈകുന്നേരം' === t
                ? e + 12
                : e
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'രാത്രി'
              : e < 12
              ? 'രാവിലെ'
              : e < 17
              ? 'ഉച്ച കഴിഞ്ഞ്'
              : e < 20
              ? 'വൈകുന്നേരം'
              : 'രാത്രി';
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          switch (n) {
            case 's':
              return t ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
              return e + (t ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
              return e + (t ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
              return e + (t ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
              return e + (t ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
              return e + (t ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
              return e + (t ? ' жил' : ' жилийн');
            default:
              return e;
          }
        }
        e.defineLocale('mn', {
          months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split(
            '_'
          ),
          monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
          weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
          weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm',
          },
          meridiemParse: /ҮӨ|ҮХ/i,
          isPM: function(e) {
            return 'ҮХ' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'ҮӨ' : 'ҮХ';
          },
          calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + ' өдөр';
              default:
                return e;
            }
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
            0: '०',
          },
          n = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0',
          };
        function a(e, t, n, a) {
          var r = '';
          if (t)
            switch (n) {
              case 's':
                r = 'काही सेकंद';
                break;
              case 'ss':
                r = '%d सेकंद';
                break;
              case 'm':
                r = 'एक मिनिट';
                break;
              case 'mm':
                r = '%d मिनिटे';
                break;
              case 'h':
                r = 'एक तास';
                break;
              case 'hh':
                r = '%d तास';
                break;
              case 'd':
                r = 'एक दिवस';
                break;
              case 'dd':
                r = '%d दिवस';
                break;
              case 'M':
                r = 'एक महिना';
                break;
              case 'MM':
                r = '%d महिने';
                break;
              case 'y':
                r = 'एक वर्ष';
                break;
              case 'yy':
                r = '%d वर्षे';
            }
          else
            switch (n) {
              case 's':
                r = 'काही सेकंदां';
                break;
              case 'ss':
                r = '%d सेकंदां';
                break;
              case 'm':
                r = 'एका मिनिटा';
                break;
              case 'mm':
                r = '%d मिनिटां';
                break;
              case 'h':
                r = 'एका तासा';
                break;
              case 'hh':
                r = '%d तासां';
                break;
              case 'd':
                r = 'एका दिवसा';
                break;
              case 'dd':
                r = '%d दिवसां';
                break;
              case 'M':
                r = 'एका महिन्या';
                break;
              case 'MM':
                r = '%d महिन्यां';
                break;
              case 'y':
                r = 'एका वर्षा';
                break;
              case 'yy':
                r = '%d वर्षां';
            }
          return r.replace(/%d/i, e);
        }
        e.defineLocale('mr', {
          months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split(
            '_'
          ),
          monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split(
            '_'
          ),
          weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
          weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
          longDateFormat: {
            LT: 'A h:mm वाजता',
            LTS: 'A h:mm:ss वाजता',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm वाजता',
            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता',
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[उद्या] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'रात्री' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'सकाळी' === t
                ? e
                : 'दुपारी' === t
                ? e >= 10
                  ? e
                  : e + 12
                : 'सायंकाळी' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'रात्री'
              : e < 10
              ? 'सकाळी'
              : e < 17
              ? 'दुपारी'
              : e < 20
              ? 'सायंकाळी'
              : 'रात्री';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ms', {
          months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split(
            '_'
          ),
          weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
          weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
          weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'pagi' === t
                ? e
                : 'tengahari' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'petang' === t || 'malam' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? 'pagi'
              : e < 15
              ? 'tengahari'
              : e < 19
              ? 'petang'
              : 'malam';
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ms-my', {
          months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split(
            '_'
          ),
          weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
          weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
          weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'pagi' === t
                ? e
                : 'tengahari' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'petang' === t || 'malam' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 11
              ? 'pagi'
              : e < 15
              ? 'tengahari'
              : e < 19
              ? 'petang'
              : 'malam';
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('mt', {
          months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split(
            '_'
          ),
          monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split(
            '_'
          ),
          weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split(
            '_'
          ),
          weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
          weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Illum fil-]LT',
            nextDay: '[Għada fil-]LT',
            nextWeek: 'dddd [fil-]LT',
            lastDay: '[Il-bieraħ fil-]LT',
            lastWeek: 'dddd [li għadda] [fil-]LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'f’ %s',
            past: '%s ilu',
            s: 'ftit sekondi',
            ss: '%d sekondi',
            m: 'minuta',
            mm: '%d minuti',
            h: 'siegħa',
            hh: '%d siegħat',
            d: 'ġurnata',
            dd: '%d ġranet',
            M: 'xahar',
            MM: '%d xhur',
            y: 'sena',
            yy: '%d sni',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '၁',
            2: '၂',
            3: '၃',
            4: '၄',
            5: '၅',
            6: '၆',
            7: '၇',
            8: '၈',
            9: '၉',
            0: '၀',
          },
          n = {
            '၁': '1',
            '၂': '2',
            '၃': '3',
            '၄': '4',
            '၅': '5',
            '၆': '6',
            '၇': '7',
            '၈': '8',
            '၉': '9',
            '၀': '0',
          };
        e.defineLocale('my', {
          months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split(
            '_'
          ),
          monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split(
            '_'
          ),
          weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split(
            '_'
          ),
          weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
          weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss: '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်',
          },
          preparse: function(e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('nb', {
          months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_'
          ),
          monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split(
            '_'
          ),
          weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
          weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
          },
          calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'noen sekunder',
            ss: '%d sekunder',
            m: 'ett minutt',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dager',
            M: 'en måned',
            MM: '%d måneder',
            y: 'ett år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९',
            0: '०',
          },
          n = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0',
          };
        e.defineLocale('ne', {
          months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split(
            '_'
          ),
          monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split(
            '_'
          ),
          weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
          weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'Aको h:mm बजे',
            LTS: 'Aको h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, Aको h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'राति' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'बिहान' === t
                ? e
                : 'दिउँसो' === t
                ? e >= 10
                  ? e
                  : e + 12
                : 'साँझ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 3
              ? 'राति'
              : e < 12
              ? 'बिहान'
              : e < 16
              ? 'दिउँसो'
              : e < 20
              ? 'साँझ'
              : 'राति';
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[भोलि] LT',
            nextWeek: '[आउँदो] dddd[,] LT',
            lastDay: '[हिजो] LT',
            lastWeek: '[गएको] dddd[,] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sमा',
            past: '%s अगाडि',
            s: 'केही क्षण',
            ss: '%d सेकेण्ड',
            m: 'एक मिनेट',
            mm: '%d मिनेट',
            h: 'एक घण्टा',
            hh: '%d घण्टा',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महिना',
            MM: '%d महिना',
            y: 'एक बर्ष',
            yy: '%d बर्ष',
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
            '_'
          ),
          n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          a = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale('nl', {
          months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
            '_'
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
            '_'
          ),
          weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
          weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
            '_'
          ),
          n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          a = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale('nl-be', {
          months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
            '_'
          ),
          monthsShort: function(e, a) {
            return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
            '_'
          ),
          weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
          weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('nn', {
          months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split(
            '_'
          ),
          weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split(
            '_'
          ),
          weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
          weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
          },
          calendar: {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: '%s sidan',
            s: 'nokre sekund',
            ss: '%d sekund',
            m: 'eit minutt',
            mm: '%d minutt',
            h: 'ein time',
            hh: '%d timar',
            d: 'ein dag',
            dd: '%d dagar',
            M: 'ein månad',
            MM: '%d månader',
            y: 'eit år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '੧',
            2: '੨',
            3: '੩',
            4: '੪',
            5: '੫',
            6: '੬',
            7: '੭',
            8: '੮',
            9: '੯',
            0: '੦',
          },
          n = {
            '੧': '1',
            '੨': '2',
            '੩': '3',
            '੪': '4',
            '੫': '5',
            '੬': '6',
            '੭': '7',
            '੮': '8',
            '੯': '9',
            '੦': '0',
          };
        e.defineLocale('pa-in', {
          months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split(
            '_'
          ),
          monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split(
            '_'
          ),
          weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split(
            '_'
          ),
          weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
          weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm ਵਜੇ',
            LTS: 'A h:mm:ss ਵਜੇ',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ',
          },
          calendar: {
            sameDay: '[ਅਜ] LT',
            nextDay: '[ਕਲ] LT',
            nextWeek: '[ਅਗਲਾ] dddd, LT',
            lastDay: '[ਕਲ] LT',
            lastWeek: '[ਪਿਛਲੇ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ਵਿੱਚ',
            past: '%s ਪਿਛਲੇ',
            s: 'ਕੁਝ ਸਕਿੰਟ',
            ss: '%d ਸਕਿੰਟ',
            m: 'ਇਕ ਮਿੰਟ',
            mm: '%d ਮਿੰਟ',
            h: 'ਇੱਕ ਘੰਟਾ',
            hh: '%d ਘੰਟੇ',
            d: 'ਇੱਕ ਦਿਨ',
            dd: '%d ਦਿਨ',
            M: 'ਇੱਕ ਮਹੀਨਾ',
            MM: '%d ਮਹੀਨੇ',
            y: 'ਇੱਕ ਸਾਲ',
            yy: '%d ਸਾਲ',
          },
          preparse: function(e) {
            return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'ਰਾਤ' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'ਸਵੇਰ' === t
                ? e
                : 'ਦੁਪਹਿਰ' === t
                ? e >= 10
                  ? e
                  : e + 12
                : 'ਸ਼ਾਮ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'ਰਾਤ'
              : e < 10
              ? 'ਸਵੇਰ'
              : e < 17
              ? 'ਦੁਪਹਿਰ'
              : e < 20
              ? 'ਸ਼ਾਮ'
              : 'ਰਾਤ';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
            '_'
          ),
          n = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
            '_'
          );
        function a(e) {
          return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
        }
        function r(e, t, n) {
          var r = e + ' ';
          switch (n) {
            case 'ss':
              return r + (a(e) ? 'sekundy' : 'sekund');
            case 'm':
              return t ? 'minuta' : 'minutę';
            case 'mm':
              return r + (a(e) ? 'minuty' : 'minut');
            case 'h':
              return t ? 'godzina' : 'godzinę';
            case 'hh':
              return r + (a(e) ? 'godziny' : 'godzin');
            case 'MM':
              return r + (a(e) ? 'miesiące' : 'miesięcy');
            case 'yy':
              return r + (a(e) ? 'lata' : 'lat');
          }
        }
        e.defineLocale('pl', {
          months: function(e, a) {
            return e
              ? '' === a
                ? '(' + n[e.month()] + '|' + t[e.month()] + ')'
                : /D MMMM/.test(a)
                ? n[e.month()]
                : t[e.month()]
              : t;
          },
          monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split(
            '_'
          ),
          weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split(
            '_'
          ),
          weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
          weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[W niedzielę o] LT';
                case 2:
                  return '[We wtorek o] LT';
                case 3:
                  return '[W środę o] LT';
                case 6:
                  return '[W sobotę o] LT';
                default:
                  return '[W] dddd [o] LT';
              }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[W zeszłą niedzielę o] LT';
                case 3:
                  return '[W zeszłą środę o] LT';
                case 6:
                  return '[W zeszłą sobotę o] LT';
                default:
                  return '[W zeszły] dddd [o] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: r,
            y: 'rok',
            yy: r,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('pt', {
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_'
          ),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split(
            '_'
          ),
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split(
            '_'
          ),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day()
                ? '[Último] dddd [às] LT'
                : '[Última] dddd [às] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('pt-br', {
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_'
          ),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split(
            '_'
          ),
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split(
            '_'
          ),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day()
                ? '[Último] dddd [às] LT'
                : '[Última] dddd [às] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n) {
          var a = ' ';
          return (
            (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (a = ' de '),
            e +
              a +
              {
                ss: 'secunde',
                mm: 'minute',
                hh: 'ore',
                dd: 'zile',
                MM: 'luni',
                yy: 'ani',
              }[n]
          );
        }
        e.defineLocale('ro', {
          months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split(
            '_'
          ),
          monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split(
            '_'
          ),
          weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
          weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'peste %s',
            past: '%s în urmă',
            s: 'câteva secunde',
            ss: t,
            m: 'un minut',
            mm: t,
            h: 'o oră',
            hh: t,
            d: 'o zi',
            dd: t,
            M: 'o lună',
            MM: t,
            y: 'un an',
            yy: t,
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n) {
          var a,
            r,
            s = {
              ss: t ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
              mm: t ? 'минута_минуты_минут' : 'минуту_минуты_минут',
              hh: 'час_часа_часов',
              dd: 'день_дня_дней',
              MM: 'месяц_месяца_месяцев',
              yy: 'год_года_лет',
            };
          return 'm' === n
            ? t
              ? 'минута'
              : 'минуту'
            : e +
                ' ' +
                ((a = +e),
                (r = s[n].split('_')),
                a % 10 == 1 && a % 100 != 11
                  ? r[0]
                  : a % 10 >= 2 &&
                    a % 10 <= 4 &&
                    (a % 100 < 10 || a % 100 >= 20)
                  ? r[1]
                  : r[2]);
        }
        var n = [
          /^янв/i,
          /^фев/i,
          /^мар/i,
          /^апр/i,
          /^ма[йя]/i,
          /^июн/i,
          /^июл/i,
          /^авг/i,
          /^сен/i,
          /^окт/i,
          /^ноя/i,
          /^дек/i,
        ];
        e.defineLocale('ru', {
          months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
              '_'
            ),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
              '_'
            ),
          },
          monthsShort: {
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split(
              '_'
            ),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split(
              '_'
            ),
          },
          weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split(
              '_'
            ),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split(
              '_'
            ),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/,
          },
          weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
          monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm',
          },
          calendar: {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function(e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? '[Во] dddd, [в] LT'
                  : '[В] dddd, [в] LT';
              switch (this.day()) {
                case 0:
                  return '[В следующее] dddd, [в] LT';
                case 1:
                case 2:
                case 4:
                  return '[В следующий] dddd, [в] LT';
                case 3:
                case 5:
                case 6:
                  return '[В следующую] dddd, [в] LT';
              }
            },
            lastWeek: function(e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? '[Во] dddd, [в] LT'
                  : '[В] dddd, [в] LT';
              switch (this.day()) {
                case 0:
                  return '[В прошлое] dddd, [в] LT';
                case 1:
                case 2:
                case 4:
                  return '[В прошлый] dddd, [в] LT';
                case 3:
                case 5:
                case 6:
                  return '[В прошлую] dddd, [в] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: t,
            m: t,
            mm: t,
            h: 'час',
            hh: t,
            d: 'день',
            dd: t,
            M: 'месяц',
            MM: t,
            y: 'год',
            yy: t,
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function(e) {
            return /^(дня|вечера)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'M':
              case 'd':
              case 'DDD':
                return e + '-й';
              case 'D':
                return e + '-го';
              case 'w':
              case 'W':
                return e + '-я';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = [
            'جنوري',
            'فيبروري',
            'مارچ',
            'اپريل',
            'مئي',
            'جون',
            'جولاءِ',
            'آگسٽ',
            'سيپٽمبر',
            'آڪٽوبر',
            'نومبر',
            'ڊسمبر',
          ],
          n = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
        e.defineLocale('sd', {
          months: t,
          monthsShort: t,
          weekdays: n,
          weekdaysShort: n,
          weekdaysMin: n,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd، D MMMM YYYY HH:mm',
          },
          meridiemParse: /صبح|شام/,
          isPM: function(e) {
            return 'شام' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'صبح' : 'شام';
          },
          calendar: {
            sameDay: '[اڄ] LT',
            nextDay: '[سڀاڻي] LT',
            nextWeek: 'dddd [اڳين هفتي تي] LT',
            lastDay: '[ڪالهه] LT',
            lastWeek: '[گزريل هفتي] dddd [تي] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s پوء',
            past: '%s اڳ',
            s: 'چند سيڪنڊ',
            ss: '%d سيڪنڊ',
            m: 'هڪ منٽ',
            mm: '%d منٽ',
            h: 'هڪ ڪلاڪ',
            hh: '%d ڪلاڪ',
            d: 'هڪ ڏينهن',
            dd: '%d ڏينهن',
            M: 'هڪ مهينو',
            MM: '%d مهينا',
            y: 'هڪ سال',
            yy: '%d سال',
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('se', {
          months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split(
            '_'
          ),
          monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split(
            '_'
          ),
          weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split(
            '_'
          ),
          weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
          weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'MMMM D. [b.] YYYY',
            LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
          },
          calendar: {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s geažes',
            past: 'maŋit %s',
            s: 'moadde sekunddat',
            ss: '%d sekunddat',
            m: 'okta minuhta',
            mm: '%d minuhtat',
            h: 'okta diimmu',
            hh: '%d diimmut',
            d: 'okta beaivi',
            dd: '%d beaivvit',
            M: 'okta mánnu',
            MM: '%d mánut',
            y: 'okta jahki',
            yy: '%d jagit',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('si', {
          months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split(
            '_'
          ),
          monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split(
            '_'
          ),
          weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split(
            '_'
          ),
          weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
          weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'a h:mm',
            LTS: 'a h:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY MMMM D',
            LLL: 'YYYY MMMM D, a h:mm',
            LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss',
          },
          calendar: {
            sameDay: '[අද] LT[ට]',
            nextDay: '[හෙට] LT[ට]',
            nextWeek: 'dddd LT[ට]',
            lastDay: '[ඊයේ] LT[ට]',
            lastWeek: '[පසුගිය] dddd LT[ට]',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sකින්',
            past: '%sකට පෙර',
            s: 'තත්පර කිහිපය',
            ss: 'තත්පර %d',
            m: 'මිනිත්තුව',
            mm: 'මිනිත්තු %d',
            h: 'පැය',
            hh: 'පැය %d',
            d: 'දිනය',
            dd: 'දින %d',
            M: 'මාසය',
            MM: 'මාස %d',
            y: 'වසර',
            yy: 'වසර %d',
          },
          dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
          ordinal: function(e) {
            return e + ' වැනි';
          },
          meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
          isPM: function(e) {
            return 'ප.ව.' === e || 'පස් වරු' === e;
          },
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? 'ප.ව.' : 'පස් වරු') : n ? 'පෙ.ව.' : 'පෙර වරු';
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split(
            '_'
          ),
          n = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
        function a(e) {
          return e > 1 && e < 5;
        }
        function r(e, t, n, r) {
          var s = e + ' ';
          switch (n) {
            case 's':
              return t || r ? 'pár sekúnd' : 'pár sekundami';
            case 'ss':
              return t || r
                ? s + (a(e) ? 'sekundy' : 'sekúnd')
                : s + 'sekundami';
            case 'm':
              return t ? 'minúta' : r ? 'minútu' : 'minútou';
            case 'mm':
              return t || r ? s + (a(e) ? 'minúty' : 'minút') : s + 'minútami';
            case 'h':
              return t ? 'hodina' : r ? 'hodinu' : 'hodinou';
            case 'hh':
              return t || r ? s + (a(e) ? 'hodiny' : 'hodín') : s + 'hodinami';
            case 'd':
              return t || r ? 'deň' : 'dňom';
            case 'dd':
              return t || r ? s + (a(e) ? 'dni' : 'dní') : s + 'dňami';
            case 'M':
              return t || r ? 'mesiac' : 'mesiacom';
            case 'MM':
              return t || r
                ? s + (a(e) ? 'mesiace' : 'mesiacov')
                : s + 'mesiacmi';
            case 'y':
              return t || r ? 'rok' : 'rokom';
            case 'yy':
              return t || r ? s + (a(e) ? 'roky' : 'rokov') : s + 'rokmi';
          }
        }
        e.defineLocale('sk', {
          months: t,
          monthsShort: n,
          weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split(
            '_'
          ),
          weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
          weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[v nedeľu o] LT';
                case 1:
                case 2:
                  return '[v] dddd [o] LT';
                case 3:
                  return '[v stredu o] LT';
                case 4:
                  return '[vo štvrtok o] LT';
                case 5:
                  return '[v piatok o] LT';
                case 6:
                  return '[v sobotu o] LT';
              }
            },
            lastDay: '[včera o] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                  return '[minulý] dddd [o] LT';
                case 3:
                  return '[minulú stredu o] LT';
                case 4:
                case 5:
                  return '[minulý] dddd [o] LT';
                case 6:
                  return '[minulú sobotu o] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'pred %s',
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = e + ' ';
          switch (n) {
            case 's':
              return t || a ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
              return (r +=
                1 === e
                  ? t
                    ? 'sekundo'
                    : 'sekundi'
                  : 2 === e
                  ? t || a
                    ? 'sekundi'
                    : 'sekundah'
                  : e < 5
                  ? t || a
                    ? 'sekunde'
                    : 'sekundah'
                  : 'sekund');
            case 'm':
              return t ? 'ena minuta' : 'eno minuto';
            case 'mm':
              return (r +=
                1 === e
                  ? t
                    ? 'minuta'
                    : 'minuto'
                  : 2 === e
                  ? t || a
                    ? 'minuti'
                    : 'minutama'
                  : e < 5
                  ? t || a
                    ? 'minute'
                    : 'minutami'
                  : t || a
                  ? 'minut'
                  : 'minutami');
            case 'h':
              return t ? 'ena ura' : 'eno uro';
            case 'hh':
              return (r +=
                1 === e
                  ? t
                    ? 'ura'
                    : 'uro'
                  : 2 === e
                  ? t || a
                    ? 'uri'
                    : 'urama'
                  : e < 5
                  ? t || a
                    ? 'ure'
                    : 'urami'
                  : t || a
                  ? 'ur'
                  : 'urami');
            case 'd':
              return t || a ? 'en dan' : 'enim dnem';
            case 'dd':
              return (r +=
                1 === e
                  ? t || a
                    ? 'dan'
                    : 'dnem'
                  : 2 === e
                  ? t || a
                    ? 'dni'
                    : 'dnevoma'
                  : t || a
                  ? 'dni'
                  : 'dnevi');
            case 'M':
              return t || a ? 'en mesec' : 'enim mesecem';
            case 'MM':
              return (r +=
                1 === e
                  ? t || a
                    ? 'mesec'
                    : 'mesecem'
                  : 2 === e
                  ? t || a
                    ? 'meseca'
                    : 'mesecema'
                  : e < 5
                  ? t || a
                    ? 'mesece'
                    : 'meseci'
                  : t || a
                  ? 'mesecev'
                  : 'meseci');
            case 'y':
              return t || a ? 'eno leto' : 'enim letom';
            case 'yy':
              return (r +=
                1 === e
                  ? t || a
                    ? 'leto'
                    : 'letom'
                  : 2 === e
                  ? t || a
                    ? 'leti'
                    : 'letoma'
                  : e < 5
                  ? t || a
                    ? 'leta'
                    : 'leti'
                  : t || a
                  ? 'let'
                  : 'leti');
          }
        }
        e.defineLocale('sl', {
          months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split(
            '_'
          ),
          monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split(
            '_'
          ),
          weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
          weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[v] [nedeljo] [ob] LT';
                case 3:
                  return '[v] [sredo] [ob] LT';
                case 6:
                  return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[v] dddd [ob] LT';
              }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                  return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                  return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prejšnji] dddd [ob] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('sq', {
          months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split(
            '_'
          ),
          monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split(
            '_'
          ),
          weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split(
            '_'
          ),
          weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
          weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
          weekdaysParseExact: !0,
          meridiemParse: /PD|MD/,
          isPM: function(e) {
            return 'M' === e.charAt(0);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'PD' : 'MD';
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Sot në] LT',
            nextDay: '[Nesër në] LT',
            nextWeek: 'dddd [në] LT',
            lastDay: '[Dje në] LT',
            lastWeek: 'dddd [e kaluar në] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'në %s',
            past: '%s më parë',
            s: 'disa sekonda',
            ss: '%d sekonda',
            m: 'një minutë',
            mm: '%d minuta',
            h: 'një orë',
            hh: '%d orë',
            d: 'një ditë',
            dd: '%d ditë',
            M: 'një muaj',
            MM: '%d muaj',
            y: 'një vit',
            yy: '%d vite',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          words: {
            ss: ['sekunda', 'sekunde', 'sekundi'],
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina'],
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, n, a) {
            var r = t.words[a];
            return 1 === a.length
              ? n
                ? r[0]
                : r[1]
              : e + ' ' + t.correctGrammaticalCase(e, r);
          },
        };
        e.defineLocale('sr', {
          months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
            '_'
          ),
          monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split(
            '_'
          ),
          weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedelju] [u] LT';
                case 3:
                  return '[u] [sredu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[juče u] LT',
            lastWeek: function() {
              return [
                '[prošle] [nedelje] [u] LT',
                '[prošlog] [ponedeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT',
              ][this.day()];
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'pre %s',
            s: 'nekoliko sekundi',
            ss: t.translate,
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: 'dan',
            dd: t.translate,
            M: 'mesec',
            MM: t.translate,
            y: 'godinu',
            yy: t.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          words: {
            ss: ['секунда', 'секунде', 'секунди'],
            m: ['један минут', 'једне минуте'],
            mm: ['минут', 'минуте', 'минута'],
            h: ['један сат', 'једног сата'],
            hh: ['сат', 'сата', 'сати'],
            dd: ['дан', 'дана', 'дана'],
            MM: ['месец', 'месеца', 'месеци'],
            yy: ['година', 'године', 'година'],
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, n, a) {
            var r = t.words[a];
            return 1 === a.length
              ? n
                ? r[0]
                : r[1]
              : e + ' ' + t.correctGrammaticalCase(e, r);
          },
        };
        e.defineLocale('sr-cyrl', {
          months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split(
            '_'
          ),
          monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split(
            '_'
          ),
          weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
          weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[у] [недељу] [у] LT';
                case 3:
                  return '[у] [среду] [у] LT';
                case 6:
                  return '[у] [суботу] [у] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[у] dddd [у] LT';
              }
            },
            lastDay: '[јуче у] LT',
            lastWeek: function() {
              return [
                '[прошле] [недеље] [у] LT',
                '[прошлог] [понедељка] [у] LT',
                '[прошлог] [уторка] [у] LT',
                '[прошле] [среде] [у] LT',
                '[прошлог] [четвртка] [у] LT',
                '[прошлог] [петка] [у] LT',
                '[прошле] [суботе] [у] LT',
              ][this.day()];
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'за %s',
            past: 'пре %s',
            s: 'неколико секунди',
            ss: t.translate,
            m: t.translate,
            mm: t.translate,
            h: t.translate,
            hh: t.translate,
            d: 'дан',
            dd: t.translate,
            M: 'месец',
            MM: t.translate,
            y: 'годину',
            yy: t.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ss', {
          months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
            '_'
          ),
          monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split(
            '_'
          ),
          weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split(
            '_'
          ),
          weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
          weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Namuhla nga] LT',
            nextDay: '[Kusasa nga] LT',
            nextWeek: 'dddd [nga] LT',
            lastDay: '[Itolo nga] LT',
            lastWeek: 'dddd [leliphelile] [nga] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'nga %s',
            past: 'wenteka nga %s',
            s: 'emizuzwana lomcane',
            ss: '%d mzuzwana',
            m: 'umzuzu',
            mm: '%d emizuzu',
            h: 'lihora',
            hh: '%d emahora',
            d: 'lilanga',
            dd: '%d emalanga',
            M: 'inyanga',
            MM: '%d tinyanga',
            y: 'umnyaka',
            yy: '%d iminyaka',
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function(e, t, n) {
            return e < 11
              ? 'ekuseni'
              : e < 15
              ? 'emini'
              : e < 19
              ? 'entsambama'
              : 'ebusuku';
          },
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'ekuseni' === t
                ? e
                : 'emini' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'entsambama' === t || 'ebusuku' === t
                ? 0 === e
                  ? 0
                  : e + 12
                : void 0
            );
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: '%d',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('sv', {
          months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split(
            '_'
          ),
          weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split(
            '_'
          ),
          weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
          weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'e'
                  : 1 === t
                  ? 'a'
                  : 2 === t
                  ? 'a'
                  : 'e';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('sw', {
          months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split(
            '_'
          ),
          weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split(
            '_'
          ),
          weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
          weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[leo saa] LT',
            nextDay: '[kesho saa] LT',
            nextWeek: '[wiki ijayo] dddd [saat] LT',
            lastDay: '[jana] LT',
            lastWeek: '[wiki iliyopita] dddd [saat] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s baadaye',
            past: 'tokea %s',
            s: 'hivi punde',
            ss: 'sekunde %d',
            m: 'dakika moja',
            mm: 'dakika %d',
            h: 'saa limoja',
            hh: 'masaa %d',
            d: 'siku moja',
            dd: 'masiku %d',
            M: 'mwezi mmoja',
            MM: 'miezi %d',
            y: 'mwaka mmoja',
            yy: 'miaka %d',
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            1: '௧',
            2: '௨',
            3: '௩',
            4: '௪',
            5: '௫',
            6: '௬',
            7: '௭',
            8: '௮',
            9: '௯',
            0: '௦',
          },
          n = {
            '௧': '1',
            '௨': '2',
            '௩': '3',
            '௪': '4',
            '௫': '5',
            '௬': '6',
            '௭': '7',
            '௮': '8',
            '௯': '9',
            '௦': '0',
          };
        e.defineLocale('ta', {
          months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split(
            '_'
          ),
          monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split(
            '_'
          ),
          weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split(
            '_'
          ),
          weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split(
            '_'
          ),
          weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, HH:mm',
            LLLL: 'dddd, D MMMM YYYY, HH:mm',
          },
          calendar: {
            sameDay: '[இன்று] LT',
            nextDay: '[நாளை] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[நேற்று] LT',
            lastWeek: '[கடந்த வாரம்] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s இல்',
            past: '%s முன்',
            s: 'ஒரு சில விநாடிகள்',
            ss: '%d விநாடிகள்',
            m: 'ஒரு நிமிடம்',
            mm: '%d நிமிடங்கள்',
            h: 'ஒரு மணி நேரம்',
            hh: '%d மணி நேரம்',
            d: 'ஒரு நாள்',
            dd: '%d நாட்கள்',
            M: 'ஒரு மாதம்',
            MM: '%d மாதங்கள்',
            y: 'ஒரு வருடம்',
            yy: '%d ஆண்டுகள்',
          },
          dayOfMonthOrdinalParse: /\d{1,2}வது/,
          ordinal: function(e) {
            return e + 'வது';
          },
          preparse: function(e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
              return n[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function(e, t, n) {
            return e < 2
              ? ' யாமம்'
              : e < 6
              ? ' வைகறை'
              : e < 10
              ? ' காலை'
              : e < 14
              ? ' நண்பகல்'
              : e < 18
              ? ' எற்பாடு'
              : e < 22
              ? ' மாலை'
              : ' யாமம்';
          },
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'யாமம்' === t
                ? e < 2
                  ? e
                  : e + 12
                : 'வைகறை' === t || 'காலை' === t
                ? e
                : 'நண்பகல்' === t && e >= 10
                ? e
                : e + 12
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('te', {
          months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split(
            '_'
          ),
          monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split(
            '_'
          ),
          weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
          weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm',
          },
          calendar: {
            sameDay: '[నేడు] LT',
            nextDay: '[రేపు] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[నిన్న] LT',
            lastWeek: '[గత] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s లో',
            past: '%s క్రితం',
            s: 'కొన్ని క్షణాలు',
            ss: '%d సెకన్లు',
            m: 'ఒక నిమిషం',
            mm: '%d నిమిషాలు',
            h: 'ఒక గంట',
            hh: '%d గంటలు',
            d: 'ఒక రోజు',
            dd: '%d రోజులు',
            M: 'ఒక నెల',
            MM: '%d నెలలు',
            y: 'ఒక సంవత్సరం',
            yy: '%d సంవత్సరాలు',
          },
          dayOfMonthOrdinalParse: /\d{1,2}వ/,
          ordinal: '%dవ',
          meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'రాత్రి' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'ఉదయం' === t
                ? e
                : 'మధ్యాహ్నం' === t
                ? e >= 10
                  ? e
                  : e + 12
                : 'సాయంత్రం' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'రాత్రి'
              : e < 10
              ? 'ఉదయం'
              : e < 17
              ? 'మధ్యాహ్నం'
              : e < 20
              ? 'సాయంత్రం'
              : 'రాత్రి';
          },
          week: { dow: 0, doy: 6 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('tet', {
          months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split(
            '_'
          ),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split(
            '_'
          ),
          weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split(
            '_'
          ),
          weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
          weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Ohin iha] LT',
            nextDay: '[Aban iha] LT',
            nextWeek: 'dddd [iha] LT',
            lastDay: '[Horiseik iha] LT',
            lastWeek: 'dddd [semana kotuk] [iha] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'iha %s',
            past: '%s liuba',
            s: 'minutu balun',
            ss: 'minutu %d',
            m: 'minutu ida',
            mm: 'minutu %d',
            h: 'oras ida',
            hh: 'oras %d',
            d: 'loron ida',
            dd: 'loron %d',
            M: 'fulan ida',
            MM: 'fulan %d',
            y: 'tinan ida',
            yy: 'tinan %d',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          0: '-ум',
          1: '-ум',
          2: '-юм',
          3: '-юм',
          4: '-ум',
          5: '-ум',
          6: '-ум',
          7: '-ум',
          8: '-ум',
          9: '-ум',
          10: '-ум',
          12: '-ум',
          13: '-ум',
          20: '-ум',
          30: '-юм',
          40: '-ум',
          50: '-ум',
          60: '-ум',
          70: '-ум',
          80: '-ум',
          90: '-ум',
          100: '-ум',
        };
        e.defineLocale('tg', {
          months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split(
            '_'
          ),
          monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split(
            '_'
          ),
          weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split(
            '_'
          ),
          weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
          weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Имрӯз соати] LT',
            nextDay: '[Пагоҳ соати] LT',
            lastDay: '[Дирӯз соати] LT',
            nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
            lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'баъди %s',
            past: '%s пеш',
            s: 'якчанд сония',
            m: 'як дақиқа',
            mm: '%d дақиқа',
            h: 'як соат',
            hh: '%d соат',
            d: 'як рӯз',
            dd: '%d рӯз',
            M: 'як моҳ',
            MM: '%d моҳ',
            y: 'як сол',
            yy: '%d сол',
          },
          meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'шаб' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'субҳ' === t
                ? e
                : 'рӯз' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'бегоҳ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'шаб'
              : e < 11
              ? 'субҳ'
              : e < 16
              ? 'рӯз'
              : e < 19
              ? 'бегоҳ'
              : 'шаб';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
          ordinal: function(e) {
            var n = e % 10,
              a = e >= 100 ? 100 : null;
            return e + (t[e] || t[n] || t[a]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('th', {
          months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
            '_'
          ),
          monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
          weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split(
            '_'
          ),
          weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY เวลา H:mm',
            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function(e) {
            return 'หลังเที่ยง' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง';
          },
          calendar: {
            sameDay: '[วันนี้ เวลา] LT',
            nextDay: '[พรุ่งนี้ เวลา] LT',
            nextWeek: 'dddd[หน้า เวลา] LT',
            lastDay: '[เมื่อวานนี้ เวลา] LT',
            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'อีก %s',
            past: '%sที่แล้ว',
            s: 'ไม่กี่วินาที',
            ss: '%d วินาที',
            m: '1 นาที',
            mm: '%d นาที',
            h: '1 ชั่วโมง',
            hh: '%d ชั่วโมง',
            d: '1 วัน',
            dd: '%d วัน',
            M: '1 เดือน',
            MM: '%d เดือน',
            y: '1 ปี',
            yy: '%d ปี',
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('tl-ph', {
          months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split(
            '_'
          ),
          monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split(
            '_'
          ),
          weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split(
            '_'
          ),
          weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
          weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'MM/D/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY HH:mm',
            LLLL: 'dddd, MMMM DD, YYYY HH:mm',
          },
          calendar: {
            sameDay: 'LT [ngayong araw]',
            nextDay: '[Bukas ng] LT',
            nextWeek: 'LT [sa susunod na] dddd',
            lastDay: 'LT [kahapon]',
            lastWeek: 'LT [noong nakaraang] dddd',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'sa loob ng %s',
            past: '%s ang nakalipas',
            s: 'ilang segundo',
            ss: '%d segundo',
            m: 'isang minuto',
            mm: '%d minuto',
            h: 'isang oras',
            hh: '%d oras',
            d: 'isang araw',
            dd: '%d araw',
            M: 'isang buwan',
            MM: '%d buwan',
            y: 'isang taon',
            yy: '%d taon',
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function(e) {
            return e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
        function n(e, n, a, r) {
          var s = (function(e) {
            var n = Math.floor((e % 1e3) / 100),
              a = Math.floor((e % 100) / 10),
              r = e % 10,
              s = '';
            return (
              n > 0 && (s += t[n] + 'vatlh'),
              a > 0 && (s += ('' !== s ? ' ' : '') + t[a] + 'maH'),
              r > 0 && (s += ('' !== s ? ' ' : '') + t[r]),
              '' === s ? 'pagh' : s
            );
          })(e);
          switch (a) {
            case 'ss':
              return s + ' lup';
            case 'mm':
              return s + ' tup';
            case 'hh':
              return s + ' rep';
            case 'dd':
              return s + ' jaj';
            case 'MM':
              return s + ' jar';
            case 'yy':
              return s + ' DIS';
          }
        }
        e.defineLocale('tlh', {
          months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split(
            '_'
          ),
          monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
            '_'
          ),
          weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
            '_'
          ),
          weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
            '_'
          ),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa’leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa’Hu’] LT',
            lastWeek: 'LLL',
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              var t = e;
              return (t =
                -1 !== e.indexOf('jaj')
                  ? t.slice(0, -3) + 'leS'
                  : -1 !== e.indexOf('jar')
                  ? t.slice(0, -3) + 'waQ'
                  : -1 !== e.indexOf('DIS')
                  ? t.slice(0, -3) + 'nem'
                  : t + ' pIq');
            },
            past: function(e) {
              var t = e;
              return (t =
                -1 !== e.indexOf('jaj')
                  ? t.slice(0, -3) + 'Hu’'
                  : -1 !== e.indexOf('jar')
                  ? t.slice(0, -3) + 'wen'
                  : -1 !== e.indexOf('DIS')
                  ? t.slice(0, -3) + 'ben'
                  : t + ' ret');
            },
            s: 'puS lup',
            ss: n,
            m: 'wa’ tup',
            mm: n,
            h: 'wa’ rep',
            hh: n,
            d: 'wa’ jaj',
            dd: n,
            M: 'wa’ jar',
            MM: n,
            y: 'wa’ DIS',
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı",
        };
        e.defineLocale('tr', {
          months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split(
            '_'
          ),
          monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split(
            '_'
          ),
          weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split(
            '_'
          ),
          weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
          weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[gelecek] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen] dddd [saat] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            ss: '%d saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl',
          },
          ordinal: function(e, n) {
            switch (n) {
              case 'd':
              case 'D':
              case 'Do':
              case 'DD':
                return e;
              default:
                if (0 === e) return e + "'ıncı";
                var a = e % 10,
                  r = (e % 100) - a,
                  s = e >= 100 ? 100 : null;
                return e + (t[a] || t[r] || t[s]);
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n, a) {
          var r = {
            s: ['viensas secunds', "'iensas secunds"],
            ss: [e + ' secunds', e + ' secunds'],
            m: ["'n míut", "'iens míut"],
            mm: [e + ' míuts', e + ' míuts'],
            h: ["'n þora", "'iensa þora"],
            hh: [e + ' þoras', e + ' þoras'],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + ' ziuas', e + ' ziuas'],
            M: ["'n mes", "'iens mes"],
            MM: [e + ' mesen', e + ' mesen'],
            y: ["'n ar", "'iens ar"],
            yy: [e + ' ars', e + ' ars'],
          };
          return a ? r[n][0] : t ? r[n][0] : r[n][1];
        }
        e.defineLocale('tzl', {
          months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split(
            '_'
          ),
          monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split(
            '_'
          ),
          weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split(
            '_'
          ),
          weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
          weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM [dallas] YYYY',
            LLL: 'D. MMMM [dallas] YYYY HH.mm',
            LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function(e) {
            return "d'o" === e.toLowerCase();
          },
          meridiem: function(e, t, n) {
            return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
          },
          calendar: {
            sameDay: '[oxhi à] LT',
            nextDay: '[demà à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[ieiri à] LT',
            lastWeek: '[sür el] dddd [lasteu à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'osprei %s',
            past: 'ja%s',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('tzm', {
          months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split(
            '_'
          ),
          monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split(
            '_'
          ),
          weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split(
            '_'
          ),
          weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split(
            '_'
          ),
          weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split(
            '_'
          ),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past: 'ⵢⴰⵏ %s',
            s: 'ⵉⵎⵉⴽ',
            ss: '%d ⵉⵎⵉⴽ',
            m: 'ⵎⵉⵏⵓⴺ',
            mm: '%d ⵎⵉⵏⵓⴺ',
            h: 'ⵙⴰⵄⴰ',
            hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d: 'ⴰⵙⵙ',
            dd: '%d oⵙⵙⴰⵏ',
            M: 'ⴰⵢoⵓⵔ',
            MM: '%d ⵉⵢⵢⵉⵔⵏ',
            y: 'ⴰⵙⴳⴰⵙ',
            yy: '%d ⵉⵙⴳⴰⵙⵏ',
          },
          week: { dow: 6, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('tzm-latn', {
          months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
            '_'
          ),
          monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
            '_'
          ),
          weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split(
            '_'
          ),
          weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split(
            '_'
          ),
          weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split(
            '_'
          ),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dadkh s yan %s',
            past: 'yan %s',
            s: 'imik',
            ss: '%d imik',
            m: 'minuḍ',
            mm: '%d minuḍ',
            h: 'saɛa',
            hh: '%d tassaɛin',
            d: 'ass',
            dd: '%d ossan',
            M: 'ayowr',
            MM: '%d iyyirn',
            y: 'asgas',
            yy: '%d isgasn',
          },
          week: { dow: 6, doy: 12 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('ug-cn', {
          months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
          ),
          monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
          ),
          weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split(
            '_'
          ),
          weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
          weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
            LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
          },
          meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'يېرىم كېچە' === t || 'سەھەر' === t || 'چۈشتىن بۇرۇن' === t
                ? e
                : 'چۈشتىن كېيىن' === t || 'كەچ' === t
                ? e + 12
                : e >= 11
                ? e
                : e + 12
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? 'يېرىم كېچە'
              : a < 900
              ? 'سەھەر'
              : a < 1130
              ? 'چۈشتىن بۇرۇن'
              : a < 1230
              ? 'چۈش'
              : a < 1800
              ? 'چۈشتىن كېيىن'
              : 'كەچ';
          },
          calendar: {
            sameDay: '[بۈگۈن سائەت] LT',
            nextDay: '[ئەتە سائەت] LT',
            nextWeek: '[كېلەركى] dddd [سائەت] LT',
            lastDay: '[تۆنۈگۈن] LT',
            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s كېيىن',
            past: '%s بۇرۇن',
            s: 'نەچچە سېكونت',
            ss: '%d سېكونت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '-كۈنى';
              case 'w':
              case 'W':
                return e + '-ھەپتە';
              default:
                return e;
            }
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e, t, n) {
          var a,
            r,
            s = {
              ss: t ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
              mm: t ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
              hh: t ? 'година_години_годин' : 'годину_години_годин',
              dd: 'день_дні_днів',
              MM: 'місяць_місяці_місяців',
              yy: 'рік_роки_років',
            };
          return 'm' === n
            ? t
              ? 'хвилина'
              : 'хвилину'
            : 'h' === n
            ? t
              ? 'година'
              : 'годину'
            : e +
              ' ' +
              ((a = +e),
              (r = s[n].split('_')),
              a % 10 == 1 && a % 100 != 11
                ? r[0]
                : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
                ? r[1]
                : r[2]);
        }
        function n(e) {
          return function() {
            return e + 'о' + (11 === this.hours() ? 'б' : '') + '] LT';
          };
        }
        e.defineLocale('uk', {
          months: {
            format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
              '_'
            ),
            standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
              '_'
            ),
          },
          monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split(
            '_'
          ),
          weekdays: function(e, t) {
            var n = {
              nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split(
                '_'
              ),
              accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split(
                '_'
              ),
              genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split(
                '_'
              ),
            };
            if (!0 === e)
              return n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1));
            if (!e) return n.nominative;
            var a = /(\[[ВвУу]\]) ?dddd/.test(t)
              ? 'accusative'
              : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
              ? 'genitive'
              : 'nominative';
            return n[a][e.day()];
          },
          weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY р.',
            LLL: 'D MMMM YYYY р., HH:mm',
            LLLL: 'dddd, D MMMM YYYY р., HH:mm',
          },
          calendar: {
            sameDay: n('[Сьогодні '),
            nextDay: n('[Завтра '),
            lastDay: n('[Вчора '),
            nextWeek: n('[У] dddd ['),
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return n('[Минулої] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                  return n('[Минулого] dddd [').call(this);
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'за %s',
            past: '%s тому',
            s: 'декілька секунд',
            ss: t,
            m: t,
            mm: t,
            h: 'годину',
            hh: t,
            d: 'день',
            dd: t,
            M: 'місяць',
            MM: t,
            y: 'рік',
            yy: t,
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function(e) {
            return /^(дня|вечора)$/.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 4
              ? 'ночі'
              : e < 12
              ? 'ранку'
              : e < 17
              ? 'дня'
              : 'вечора';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'M':
              case 'd':
              case 'DDD':
              case 'w':
              case 'W':
                return e + '-й';
              case 'D':
                return e + '-го';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = [
            'جنوری',
            'فروری',
            'مارچ',
            'اپریل',
            'مئی',
            'جون',
            'جولائی',
            'اگست',
            'ستمبر',
            'اکتوبر',
            'نومبر',
            'دسمبر',
          ],
          n = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
        e.defineLocale('ur', {
          months: t,
          monthsShort: t,
          weekdays: n,
          weekdaysShort: n,
          weekdaysMin: n,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd، D MMMM YYYY HH:mm',
          },
          meridiemParse: /صبح|شام/,
          isPM: function(e) {
            return 'شام' === e;
          },
          meridiem: function(e, t, n) {
            return e < 12 ? 'صبح' : 'شام';
          },
          calendar: {
            sameDay: '[آج بوقت] LT',
            nextDay: '[کل بوقت] LT',
            nextWeek: 'dddd [بوقت] LT',
            lastDay: '[گذشتہ روز بوقت] LT',
            lastWeek: '[گذشتہ] dddd [بوقت] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s بعد',
            past: '%s قبل',
            s: 'چند سیکنڈ',
            ss: '%d سیکنڈ',
            m: 'ایک منٹ',
            mm: '%d منٹ',
            h: 'ایک گھنٹہ',
            hh: '%d گھنٹے',
            d: 'ایک دن',
            dd: '%d دن',
            M: 'ایک ماہ',
            MM: '%d ماہ',
            y: 'ایک سال',
            yy: '%d سال',
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('uz', {
          months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split(
            '_'
          ),
          monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split(
            '_'
          ),
          weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split(
            '_'
          ),
          weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
          weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm',
          },
          calendar: {
            sameDay: '[Бугун соат] LT [да]',
            nextDay: '[Эртага] LT [да]',
            nextWeek: 'dddd [куни соат] LT [да]',
            lastDay: '[Кеча соат] LT [да]',
            lastWeek: '[Утган] dddd [куни соат] LT [да]',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'Якин %s ичида',
            past: 'Бир неча %s олдин',
            s: 'фурсат',
            ss: '%d фурсат',
            m: 'бир дакика',
            mm: '%d дакика',
            h: 'бир соат',
            hh: '%d соат',
            d: 'бир кун',
            dd: '%d кун',
            M: 'бир ой',
            MM: '%d ой',
            y: 'бир йил',
            yy: '%d йил',
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('uz-latn', {
          months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split(
            '_'
          ),
          monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split(
            '_'
          ),
          weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split(
            '_'
          ),
          weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
          weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm',
          },
          calendar: {
            sameDay: '[Bugun soat] LT [da]',
            nextDay: '[Ertaga] LT [da]',
            nextWeek: 'dddd [kuni soat] LT [da]',
            lastDay: '[Kecha soat] LT [da]',
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: 'L',
          },
          relativeTime: {
            future: 'Yaqin %s ichida',
            past: 'Bir necha %s oldin',
            s: 'soniya',
            ss: '%d soniya',
            m: 'bir daqiqa',
            mm: '%d daqiqa',
            h: 'bir soat',
            hh: '%d soat',
            d: 'bir kun',
            dd: '%d kun',
            M: 'bir oy',
            MM: '%d oy',
            y: 'bir yil',
            yy: '%d yil',
          },
          week: { dow: 1, doy: 7 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('vi', {
          months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split(
            '_'
          ),
          monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split(
            '_'
          ),
          weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
          weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
          weekdaysParseExact: !0,
          meridiemParse: /sa|ch/i,
          isPM: function(e) {
            return /^ch$/i.test(e);
          },
          meridiem: function(e, t, n) {
            return e < 12 ? (n ? 'sa' : 'SA') : n ? 'ch' : 'CH';
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [năm] YYYY',
            LLL: 'D MMMM [năm] YYYY HH:mm',
            LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
            l: 'DD/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s tới',
            past: '%s trước',
            s: 'vài giây',
            ss: '%d giây',
            m: 'một phút',
            mm: '%d phút',
            h: 'một giờ',
            hh: '%d giờ',
            d: 'một ngày',
            dd: '%d ngày',
            M: 'một tháng',
            MM: '%d tháng',
            y: 'một năm',
            yy: '%d năm',
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function(e) {
            return e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('x-pseudo', {
          months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split(
            '_'
          ),
          monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split(
            '_'
          ),
          monthsParseExact: !0,
          weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split(
            '_'
          ),
          weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
          weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[T~ódá~ý át] LT',
            nextDay: '[T~ómó~rró~w át] LT',
            nextWeek: 'dddd [át] LT',
            lastDay: '[Ý~ést~érdá~ý át] LT',
            lastWeek: '[L~ást] dddd [át] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'í~ñ %s',
            past: '%s á~gó',
            s: 'á ~féw ~sécó~ñds',
            ss: '%d s~écóñ~ds',
            m: 'á ~míñ~úté',
            mm: '%d m~íñú~tés',
            h: 'á~ñ hó~úr',
            hh: '%d h~óúrs',
            d: 'á ~dáý',
            dd: '%d d~áýs',
            M: 'á ~móñ~th',
            MM: '%d m~óñt~hs',
            y: 'á ~ýéár',
            yy: '%d ý~éárs',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(e) {
            var t = e % 10,
              n =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 === t
                  ? 'st'
                  : 2 === t
                  ? 'nd'
                  : 3 === t
                  ? 'rd'
                  : 'th';
            return e + n;
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('yo', {
          months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split(
            '_'
          ),
          monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split(
            '_'
          ),
          weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
          weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
          weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Ònì ni] LT',
            nextDay: '[Ọ̀la ni] LT',
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: '[Àna ni] LT',
            lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ní %s',
            past: '%s kọjá',
            s: 'ìsẹjú aayá die',
            ss: 'aayá %d',
            m: 'ìsẹjú kan',
            mm: 'ìsẹjú %d',
            h: 'wákati kan',
            hh: 'wákati %d',
            d: 'ọjọ́ kan',
            dd: 'ọjọ́ %d',
            M: 'osù kan',
            MM: 'osù %d',
            y: 'ọdún kan',
            yy: 'ọdún %d',
          },
          dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
          ordinal: 'ọjọ́ %d',
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('zh-cn', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
          ),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
            '_'
          ),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split(
            '_'
          ),
          weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              '凌晨' === t || '早上' === t || '上午' === t
                ? e
                : '下午' === t || '晚上' === t
                ? e + 12
                : e >= 11
                ? e
                : e + 12
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? '凌晨'
              : a < 900
              ? '早上'
              : a < 1130
              ? '上午'
              : a < 1230
              ? '中午'
              : a < 1800
              ? '下午'
              : '晚上';
          },
          calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              case 'M':
                return e + '月';
              case 'w':
              case 'W':
                return e + '周';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年',
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('zh-hk', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
          ),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
            '_'
          ),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split(
            '_'
          ),
          weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              '凌晨' === t || '早上' === t || '上午' === t
                ? e
                : '中午' === t
                ? e >= 11
                  ? e
                  : e + 12
                : '下午' === t || '晚上' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? '凌晨'
              : a < 900
              ? '早上'
              : a < 1130
              ? '上午'
              : a < 1230
              ? '中午'
              : a < 1800
              ? '下午'
              : '晚上';
          },
          calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              case 'M':
                return e + '月';
              case 'w':
              case 'W':
                return e + '週';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年',
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineLocale('zh-tw', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
          ),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
            '_'
          ),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split(
            '_'
          ),
          weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              '凌晨' === t || '早上' === t || '上午' === t
                ? e
                : '中午' === t
                ? e >= 11
                  ? e
                  : e + 12
                : '下午' === t || '晚上' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, n) {
            var a = 100 * e + t;
            return a < 600
              ? '凌晨'
              : a < 900
              ? '早上'
              : a < 1130
              ? '上午'
              : a < 1230
              ? '中午'
              : a < 1800
              ? '下午'
              : '晚上';
          },
          calendar: {
            sameDay: '[今天] LT',
            nextDay: '[明天] LT',
            nextWeek: '[下]dddd LT',
            lastDay: '[昨天] LT',
            lastWeek: '[上]dddd LT',
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              case 'M':
                return e + '月';
              case 'w':
              case 'W':
                return e + '週';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年',
          },
        });
      })(n(2));
    },
    function(e, t, n) {
      'use strict';
      var a = Array.isArray,
        r = Object.keys,
        s = Object.prototype.hasOwnProperty,
        i = 'undefined' != typeof Element;
      e.exports = function(e, t) {
        try {
          return (function e(t, n) {
            if (t === n) return !0;
            if (t && n && 'object' == typeof t && 'object' == typeof n) {
              var o,
                d,
                u,
                l = a(t),
                _ = a(n);
              if (l && _) {
                if ((d = t.length) != n.length) return !1;
                for (o = d; 0 != o--; ) if (!e(t[o], n[o])) return !1;
                return !0;
              }
              if (l != _) return !1;
              var c = t instanceof Date,
                m = n instanceof Date;
              if (c != m) return !1;
              if (c && m) return t.getTime() == n.getTime();
              var h = t instanceof RegExp,
                f = n instanceof RegExp;
              if (h != f) return !1;
              if (h && f) return t.toString() == n.toString();
              var p = r(t);
              if ((d = p.length) !== r(n).length) return !1;
              for (o = d; 0 != o--; ) if (!s.call(n, p[o])) return !1;
              if (i && t instanceof Element && n instanceof Element)
                return t === n;
              for (o = d; 0 != o--; )
                if (!(('_owner' === (u = p[o]) && t.$$typeof) || e(t[u], n[u])))
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
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, n) {
      var a = {
        './af': 9,
        './af.js': 9,
        './ar': 10,
        './ar-dz': 11,
        './ar-dz.js': 11,
        './ar-kw': 12,
        './ar-kw.js': 12,
        './ar-ly': 13,
        './ar-ly.js': 13,
        './ar-ma': 14,
        './ar-ma.js': 14,
        './ar-sa': 15,
        './ar-sa.js': 15,
        './ar-tn': 16,
        './ar-tn.js': 16,
        './ar.js': 10,
        './az': 17,
        './az.js': 17,
        './be': 18,
        './be.js': 18,
        './bg': 19,
        './bg.js': 19,
        './bm': 20,
        './bm.js': 20,
        './bn': 21,
        './bn.js': 21,
        './bo': 22,
        './bo.js': 22,
        './br': 23,
        './br.js': 23,
        './bs': 24,
        './bs.js': 24,
        './ca': 25,
        './ca.js': 25,
        './cs': 26,
        './cs.js': 26,
        './cv': 27,
        './cv.js': 27,
        './cy': 28,
        './cy.js': 28,
        './da': 29,
        './da.js': 29,
        './de': 30,
        './de-at': 31,
        './de-at.js': 31,
        './de-ch': 32,
        './de-ch.js': 32,
        './de.js': 30,
        './dv': 33,
        './dv.js': 33,
        './el': 34,
        './el.js': 34,
        './en-SG': 35,
        './en-SG.js': 35,
        './en-au': 36,
        './en-au.js': 36,
        './en-ca': 37,
        './en-ca.js': 37,
        './en-gb': 38,
        './en-gb.js': 38,
        './en-ie': 39,
        './en-ie.js': 39,
        './en-il': 40,
        './en-il.js': 40,
        './en-nz': 41,
        './en-nz.js': 41,
        './eo': 42,
        './eo.js': 42,
        './es': 43,
        './es-do': 44,
        './es-do.js': 44,
        './es-us': 45,
        './es-us.js': 45,
        './es.js': 43,
        './et': 46,
        './et.js': 46,
        './eu': 47,
        './eu.js': 47,
        './fa': 48,
        './fa.js': 48,
        './fi': 49,
        './fi.js': 49,
        './fo': 50,
        './fo.js': 50,
        './fr': 51,
        './fr-ca': 52,
        './fr-ca.js': 52,
        './fr-ch': 53,
        './fr-ch.js': 53,
        './fr.js': 51,
        './fy': 54,
        './fy.js': 54,
        './ga': 55,
        './ga.js': 55,
        './gd': 56,
        './gd.js': 56,
        './gl': 57,
        './gl.js': 57,
        './gom-latn': 58,
        './gom-latn.js': 58,
        './gu': 59,
        './gu.js': 59,
        './he': 60,
        './he.js': 60,
        './hi': 61,
        './hi.js': 61,
        './hr': 62,
        './hr.js': 62,
        './hu': 63,
        './hu.js': 63,
        './hy-am': 64,
        './hy-am.js': 64,
        './id': 65,
        './id.js': 65,
        './is': 66,
        './is.js': 66,
        './it': 67,
        './it-ch': 68,
        './it-ch.js': 68,
        './it.js': 67,
        './ja': 69,
        './ja.js': 69,
        './jv': 70,
        './jv.js': 70,
        './ka': 71,
        './ka.js': 71,
        './kk': 72,
        './kk.js': 72,
        './km': 73,
        './km.js': 73,
        './kn': 74,
        './kn.js': 74,
        './ko': 75,
        './ko.js': 75,
        './ku': 76,
        './ku.js': 76,
        './ky': 77,
        './ky.js': 77,
        './lb': 78,
        './lb.js': 78,
        './lo': 79,
        './lo.js': 79,
        './lt': 80,
        './lt.js': 80,
        './lv': 81,
        './lv.js': 81,
        './me': 82,
        './me.js': 82,
        './mi': 83,
        './mi.js': 83,
        './mk': 84,
        './mk.js': 84,
        './ml': 85,
        './ml.js': 85,
        './mn': 86,
        './mn.js': 86,
        './mr': 87,
        './mr.js': 87,
        './ms': 88,
        './ms-my': 89,
        './ms-my.js': 89,
        './ms.js': 88,
        './mt': 90,
        './mt.js': 90,
        './my': 91,
        './my.js': 91,
        './nb': 92,
        './nb.js': 92,
        './ne': 93,
        './ne.js': 93,
        './nl': 94,
        './nl-be': 95,
        './nl-be.js': 95,
        './nl.js': 94,
        './nn': 96,
        './nn.js': 96,
        './pa-in': 97,
        './pa-in.js': 97,
        './pl': 98,
        './pl.js': 98,
        './pt': 99,
        './pt-br': 100,
        './pt-br.js': 100,
        './pt.js': 99,
        './ro': 101,
        './ro.js': 101,
        './ru': 102,
        './ru.js': 102,
        './sd': 103,
        './sd.js': 103,
        './se': 104,
        './se.js': 104,
        './si': 105,
        './si.js': 105,
        './sk': 106,
        './sk.js': 106,
        './sl': 107,
        './sl.js': 107,
        './sq': 108,
        './sq.js': 108,
        './sr': 109,
        './sr-cyrl': 110,
        './sr-cyrl.js': 110,
        './sr.js': 109,
        './ss': 111,
        './ss.js': 111,
        './sv': 112,
        './sv.js': 112,
        './sw': 113,
        './sw.js': 113,
        './ta': 114,
        './ta.js': 114,
        './te': 115,
        './te.js': 115,
        './tet': 116,
        './tet.js': 116,
        './tg': 117,
        './tg.js': 117,
        './th': 118,
        './th.js': 118,
        './tl-ph': 119,
        './tl-ph.js': 119,
        './tlh': 120,
        './tlh.js': 120,
        './tr': 121,
        './tr.js': 121,
        './tzl': 122,
        './tzl.js': 122,
        './tzm': 123,
        './tzm-latn': 124,
        './tzm-latn.js': 124,
        './tzm.js': 123,
        './ug-cn': 125,
        './ug-cn.js': 125,
        './uk': 126,
        './uk.js': 126,
        './ur': 127,
        './ur.js': 127,
        './uz': 128,
        './uz-latn': 129,
        './uz-latn.js': 129,
        './uz.js': 128,
        './vi': 130,
        './vi.js': 130,
        './x-pseudo': 131,
        './x-pseudo.js': 131,
        './yo': 132,
        './yo.js': 132,
        './zh-cn': 133,
        './zh-cn.js': 133,
        './zh-hk': 134,
        './zh-hk.js': 134,
        './zh-tw': 135,
        './zh-tw.js': 135,
      };
      function r(e) {
        var t = s(e);
        return n(t);
      }
      function s(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return a[e];
      }
      (r.keys = function() {
        return Object.keys(a);
      }),
        (r.resolve = s),
        (e.exports = r),
        (r.id = 138);
    },
    function(e, t) {
      e.exports = n;
    },
    function(e, t, n) {
      var a = n(141);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(a, r);
      a.locals && (e.exports = a.locals);
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
          a = n + t.pathname.replace(/\/[^\/]*$/, '/');
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(e, t) {
            var r,
              s = t
                .trim()
                .replace(/^"(.*)"$/, function(e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function(e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)
              ? e
              : ((r =
                  0 === s.indexOf('//')
                    ? s
                    : 0 === s.indexOf('/')
                    ? n + s
                    : a + s.replace(/^\.\//, '')),
                'url(' + JSON.stringify(r) + ')');
          }
        );
      };
    },
    function(e, t, n) {
      var a = n(144);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(a, r);
      a.locals && (e.exports = a.locals);
    },
    function(e, t, n) {
      (e.exports = n(4)(!1)).push([
        e.i,
        ".acuity-calendar__day-grid {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .acuity-calendar__day-grid__days {\n    overflow: hidden;\n    margin: 0;\n    border: 1px solid #e7e7e7;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 0; }\n  .acuity-calendar__day-grid__header {\n    display: flex;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__column-header {\n    flex: 1 1 0;\n    text-align: center;\n    border-top: 1px solid #e7e7e7;\n    border-right: 1px solid #e7e7e7;\n    text-transform: uppercase;\n    padding: 10px;\n    font-weight: 600;\n    overflow: hidden; }\n  .acuity-calendar__day-grid__date-wrapper {\n    position: absolute;\n    z-index: 4;\n    font-size: 14px;\n    color: #2c2929;\n    cursor: pointer;\n    right: 5px;\n    top: 5px;\n    padding: 3px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__day-grid__date-wrapper:hover {\n      background: #e7e7e7; }\n  .acuity-calendar__day-grid__date {\n    line-height: 1em;\n    margin: 0 auto; }\n    .acuity-calendar__day-grid__date--not-in-range {\n      color: #a9a5a5; }\n  .acuity-calendar__day-grid__row {\n    position: relative;\n    display: flex;\n    flex: 1 1 0;\n    width: 100%; }\n    .acuity-calendar__day-grid__row:not(:last-child) {\n      border-bottom: 1px solid #e7e7e7; }\n  .acuity-calendar__day-grid__cell {\n    position: relative;\n    flex: 1 1;\n    /* Some width needs to be set. Not a fan of doing this, but I've spent too long on it\n           come up with an obvious easy fix. My brain is too fried today.\n           If you take this out, make SURE you're testing with events in the month view that get \n           cut off for being too long. They make their cells 1 pixel too wide without this\n           This could be set to anything as long as it is less than the actual width of 14.29%\n        */\n    width: 0; }\n    .acuity-calendar__day-grid__cell:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__day-grid__cell--not-in-range {\n      background: #fbf9f9; }\n  .acuity-calendar__day-grid__event-wrapper {\n    margin-top: 35px; }\n  .acuity-calendar__day-grid__more-events {\n    cursor: pointer;\n    text-align: center;\n    font-weight: 600;\n    height: 20px;\n    font-size: 12px; }\n",
        '',
      ]);
    },
    function(e, t, n) {
      var a = n(146);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(a, r);
      a.locals && (e.exports = a.locals);
    },
    function(e, t, n) {
      (e.exports = n(4)(!1)).push([
        e.i,
        ".acuity-calendar__time-grid {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-right: 1px solid #e7e7e7;\n  /* ------ Header START ------ */\n  /* ------ Header END ------ */\n  /* ------ Grid START ------ */\n  /* ------ Grid END ------ */ }\n  .acuity-calendar__time-grid__header-wrapper {\n    display: flex;\n    border-top: 1px solid #e7e7e7;\n    position: relative; }\n  .acuity-calendar__time-grid__corner {\n    position: relative;\n    z-index: 5;\n    background: white;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__corner h2 {\n    margin: 0;\n    background: white; }\n  .acuity-calendar__time-grid__header {\n    display: flex;\n    width: 100%;\n    background: white;\n    z-index: 4;\n    text-align: center; }\n  .acuity-calendar__time-grid__header-column {\n    font-size: 12px;\n    flex: 1;\n    display: flex;\n    align-items: center; }\n    .acuity-calendar__time-grid__header-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n    .acuity-calendar__time-grid__header-column h2 {\n      font-size: 12px;\n      color: #444;\n      font-weight: 400;\n      padding: 25px 0; }\n  .acuity-calendar__time-grid__header-column-container {\n    margin: 0 auto; }\n  .acuity-calendar__time-grid__scroll-gutter {\n    height: 100%;\n    background: white;\n    position: absolute;\n    z-index: 5;\n    right: -2px;\n    border-right: 1px solid #e7e7e7;\n    border-left: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__scroll-gutter-connector {\n    width: 100%;\n    background: white;\n    height: 1px;\n    bottom: -1px;\n    position: absolute; }\n  .acuity-calendar__time-grid__grid-wrapper {\n    position: relative;\n    width: 100%;\n    display: flex;\n    overflow: auto;\n    position: relative;\n    border: 1px solid #e7e7e7;\n    background: #f3f3f3; }\n  .acuity-calendar__time-grid__step-lines {\n    width: 100%;\n    position: absolute;\n    top: -1px; }\n  .acuity-calendar__time-grid__step-line:after {\n    width: 100%;\n    content: '';\n    border-bottom: 1px solid #e7e7e7;\n    position: absolute;\n    pointer-events: none;\n    z-index: 2; }\n  .acuity-calendar__time-grid__step-line-minor:after {\n    border-bottom: 1px dashed #e7e7e7; }\n  .acuity-calendar__time-grid__time-gutter {\n    background: white;\n    position: relative;\n    flex: 1 0 50px;\n    text-align: center;\n    border-right: 1px solid #e7e7e7;\n    z-index: 5;\n    text-align: right; }\n  .acuity-calendar__time-grid__time-label {\n    font-size: 10px;\n    color: #444;\n    transform: translateY(-8px);\n    display: block;\n    margin-right: 4px; }\n  .acuity-calendar__time-grid__time-label-0 {\n    display: none; }\n  .acuity-calendar__time-grid__grid {\n    display: flex;\n    width: 100%; }\n  .acuity-calendar__time-grid__grid-column {\n    text-align: center;\n    position: relative;\n    flex: 1; }\n    .acuity-calendar__time-grid__grid-column:not(:last-child) {\n      border-right: 1px solid #e7e7e7; }\n  .acuity-calendar__time-grid__step-detail-wrapper {\n    position: absolute;\n    width: 100%; }\n  .acuity-calendar__time-grid__today {\n    background: #edf8f2; }\n  .acuity-calendar__time-grid__select-slot-indicator {\n    border-bottom: 2px dashed #c1c1c1;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    z-index: 4; }\n  .acuity-calendar__time-grid__select-slot-indicator-time {\n    position: absolute;\n    top: -20px;\n    font-size: 14px;\n    left: 0;\n    right: 0; }\n  .acuity-calendar__time-grid__select-range {\n    position: absolute;\n    width: 99%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 4;\n    border-radius: 4px;\n    color: white;\n    user-select: none; }\n  .acuity-calendar__time-grid__current-time-indicator {\n    width: 100%;\n    position: absolute;\n    z-index: 6; }\n    .acuity-calendar__time-grid__current-time-indicator__line {\n      height: 1px;\n      background: #af5b55;\n      opacity: 0.4; }\n    .acuity-calendar__time-grid__current-time-indicator__line-today {\n      height: 1px;\n      background: #af5b55; }\n    .acuity-calendar__time-grid__current-time-indicator__time {\n      position: absolute;\n      transform: translate(-115%, -7px);\n      color: #c9484d;\n      background: #fff;\n      box-shadow: -3px 0px 8px 5px #fff;\n      font-size: 10px; }\n",
        '',
      ]);
    },
    function(e, t, n) {
      var a = n(148);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(a, r);
      a.locals && (e.exports = a.locals);
    },
    function(e, t, n) {
      (e.exports = n(4)(!1)).push([
        e.i,
        '.acuity-calendar__time-grid__event-wrapper {\n  position: absolute; }\n\n.acuity-calendar__time-grid__event-details-wrapper {\n  padding: 7.5px 10px 0;\n  text-align: left; }\n\n.acuity-calendar__time-grid__event {\n  background: #26ada0;\n  z-index: 3;\n  position: relative;\n  color: #fff;\n  border-radius: 2px;\n  font-size: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__event-padding {\n  background: #3dbe8b;\n  z-index: 2;\n  position: relative;\n  opacity: 0.25;\n  pointer-events: none;\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, rgba(17, 17, 17, 0.2) 25%, rgba(17, 17, 17, 0.2) 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, rgba(17, 17, 17, 0.2) 75%);\n  background-size: 8px 8px; }\n\n.acuity-calendar__time-grid__event-handle {\n  position: absolute;\n  height: 10px;\n  width: 100%;\n  left: 0;\n  cursor: ns-resize;\n  z-index: 4; }\n\n.acuity-calendar__time-grid__event-handle-top {\n  top: 0; }\n\n.acuity-calendar__time-grid__event-handle-center {\n  position: absolute;\n  width: 100%; }\n\n.acuity-calendar__time-grid__event-handle-bottom {\n  bottom: 0; }\n\n.acuity-calendar__time-grid__dragging-event {\n  z-index: 4;\n  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px white; }\n\n.acuity-calendar__time-grid__dragging-placeholder-event .acuity-calendar__time-grid__event {\n  opacity: 0.5; }\n\n.acuity-calendar__time-grid__event-title {\n  display: block;\n  margin-bottom: 7.5px; }\n',
        '',
      ]);
    },
    function(e, t, n) {
      var a = n(150);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(a, r);
      a.locals && (e.exports = a.locals);
    },
    function(e, t, n) {
      (e.exports = n(4)(!1)).push([
        e.i,
        '.acuity-calendar__toolbar {\n  margin: 30px 0;\n  display: flex;\n  align-items: center;\n  height: 33px; }\n  .acuity-calendar__toolbar__views {\n    margin-right: 20px; }\n  .acuity-calendar__toolbar button {\n    border: 1px solid #e7e7e7;\n    padding: 3px 10px;\n    margin-right: 4px;\n    font-size: 16px;\n    border-radius: 4px;\n    cursor: pointer; }\n  .acuity-calendar__toolbar button:hover {\n    background: #2c2929;\n    border: 1px solid #2c2929;\n    color: #fff; }\n  .acuity-calendar__toolbar__title {\n    font-size: 28px;\n    margin: 0;\n    margin-left: 20px; }\n',
        '',
      ]);
    },
    function(e, t, n) {
      var a = n(152);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(a, r);
      a.locals && (e.exports = a.locals);
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
      var a = n(1),
        r = n.n(a),
        s = n(0),
        i = n.n(s),
        o = n(3),
        d = n.n(o),
        u = n(2),
        l = n.n(u),
        _ = n(6),
        c = n.n(_);
      let m = null;
      let h = null;
      function f(e, t = {}) {
        let n = document.createElement(e);
        return (
          Object.keys(t).forEach(e => {
            n[e] = t[e];
          }),
          n
        );
      }
      function p(e, t, n) {
        return (window.getComputedStyle(e, n || null) || { display: 'none' })[
          t
        ];
      }
      function y(e) {
        if (!document.documentElement.contains(e))
          return { detached: !0, rendered: !1 };
        let t = e;
        for (; t !== document; ) {
          if ('none' === p(t, 'display')) return { detached: !1, rendered: !1 };
          t = t.parentNode;
        }
        return { detached: !1, rendered: !0 };
      }
      var M =
        '.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}';
      let g = 0,
        L = null;
      function Y(e, t) {
        if (
          (e.__resize_mutation_handler__ ||
            (e.__resize_mutation_handler__ = function() {
              let { rendered: e, detached: t } = y(this);
              e !== this.__resize_rendered__ &&
                (!t &&
                  this.__resize_triggers__ &&
                  (b(this), this.addEventListener('scroll', D, !0)),
                (this.__resize_rendered__ = e),
                k(this));
            }.bind(e)),
          !e.__resize_listeners__)
        )
          if (((e.__resize_listeners__ = []), window.ResizeObserver)) {
            let { offsetWidth: t, offsetHeight: n } = e,
              a = new ResizeObserver(() => {
                (e.__resize_observer_triggered__ ||
                  ((e.__resize_observer_triggered__ = !0),
                  e.offsetWidth !== t || e.offsetHeight !== n)) &&
                  k(e);
              }),
              { detached: r, rendered: s } = y(e);
            (e.__resize_observer_triggered__ = !1 === r && !1 === s),
              (e.__resize_observer__ = a),
              a.observe(e);
          } else if (e.attachEvent && e.addEventListener)
            (e.__resize_legacy_resize_handler__ = function() {
              k(e);
            }),
              e.attachEvent('onresize', e.__resize_legacy_resize_handler__),
              document.addEventListener(
                'DOMSubtreeModified',
                e.__resize_mutation_handler__
              );
          else if (
            (g ||
              ((n = M),
              ((a = document.createElement('style')).type = 'text/css'),
              a.styleSheet
                ? (a.styleSheet.cssText = n)
                : a.appendChild(document.createTextNode(n)),
              (document.querySelector('head') || document.body).appendChild(a),
              (L = a)),
            (function(e) {
              let t = p(e, 'position');
              (t && 'static' !== t) || (e.style.position = 'relative');
              (e.__resize_old_position__ = t), (e.__resize_last__ = {});
              let n = f('div', { className: 'resize-triggers' }),
                a = f('div', { className: 'resize-expand-trigger' }),
                r = f('div'),
                s = f('div', { className: 'resize-contract-trigger' });
              a.appendChild(r),
                n.appendChild(a),
                n.appendChild(s),
                e.appendChild(n),
                (e.__resize_triggers__ = {
                  triggers: n,
                  expand: a,
                  expandChild: r,
                  contract: s,
                }),
                b(e),
                e.addEventListener('scroll', D, !0),
                (e.__resize_last__ = {
                  width: e.offsetWidth,
                  height: e.offsetHeight,
                });
            })(e),
            (e.__resize_rendered__ = y(e).rendered),
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
        var n, a;
        e.__resize_listeners__.push(t), g++;
      }
      function v(e, t) {
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
          !--g && L && L.parentNode.removeChild(L);
        }
      }
      function D() {
        var e, t;
        b(this),
          this.__resize_raf__ &&
            ((e = this.__resize_raf__),
            h ||
              (h = (
                window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                function(e) {
                  clearTimeout(e);
                }
              ).bind(window)),
            h(e)),
          (this.__resize_raf__ = ((t = () => {
            let e = (function(e) {
              let { width: t, height: n } = e.__resize_last__,
                { offsetWidth: a, offsetHeight: r } = e;
              return a !== t || r !== n ? { width: a, height: r } : null;
            })(this);
            e && ((this.__resize_last__ = e), k(this));
          }),
          m ||
            (m = (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function(e) {
                return setTimeout(e, 16);
              }
            ).bind(window)),
          m(t)));
      }
      function k(e) {
        e &&
          e.__resize_listeners__ &&
          e.__resize_listeners__.forEach(t => {
            t.call(e);
          });
      }
      function b(e) {
        let { expand: t, expandChild: n, contract: a } = e.__resize_triggers__,
          { scrollWidth: r, scrollHeight: s } = a,
          {
            offsetWidth: i,
            offsetHeight: o,
            scrollWidth: d,
            scrollHeight: u,
          } = t;
        (a.scrollLeft = r),
          (a.scrollTop = s),
          (n.style.width = i + 1 + 'px'),
          (n.style.height = o + 1 + 'px'),
          (t.scrollLeft = d),
          (t.scrollTop = u);
      }
      function w(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var T = function() {
        var e = Object(a.useRef)(null),
          t = Object(a.useRef)(null),
          n = Object(a.useRef)(null),
          r = Object(a.useRef)(null),
          s = w(Object(a.useState)(0), 2),
          i = s[0],
          o = s[1],
          u = w(Object(a.useState)(0), 2),
          l = u[0],
          _ = u[1],
          m = w(Object(a.useState)(0), 2),
          h = m[0],
          f = m[1],
          p = w(Object(a.useState)(0), 2),
          y = p[0],
          M = p[1],
          g = w(Object(a.useState)(0), 2),
          L = g[0],
          D = g[1];
        Object(a.useEffect)(function() {
          if (t.current) {
            var e = t.current.offsetHeight;
            e !== h && f(e);
          }
        });
        var k = c()(function() {
          o(d()(e, 'current.offsetHeight', 0)),
            _(d()(e, 'current.offsetWidth', 0));
        }, 300);
        return (
          Object(a.useEffect)(function() {
            return (
              e.current &&
                (o(e.current.offsetHeight),
                _(r.current.offsetWidth),
                Y(e.current, k)),
              function() {
                if (e.current) return v(e.current, k);
              }
            );
          }),
          Object(a.useEffect)(
            function() {
              h > 0 && D(Math.floor((i - y) / h) - 1);
            },
            [i, h]
          ),
          Object(a.useEffect)(
            function() {
              var e = d()(n, 'current.offsetTop', 0);
              M(e);
            },
            [d()(n, 'current.offsetTop', 0)]
          ),
          {
            rowRef: e,
            eventRef: t,
            eventHeight: h,
            eventWrapperRef: n,
            eventWrapperMargin: y,
            cellRef: r,
            cellDimensions: { width: l, height: i },
            totalEventsToShow: L,
          }
        );
      };
      function S(e) {
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
      var H = function(e) {
          for (
            var t = e.firstDate,
              n = e.lastDate,
              a = e.totalColumns,
              r = void 0 === a ? 7 : a,
              s = e.allowPartialRows,
              i = void 0 !== s && s,
              o = e.getExcludedDates,
              d =
                void 0 === o
                  ? function() {
                      return !1;
                    }
                  : o,
              u = e.getIsInRange,
              l =
                void 0 === u
                  ? function() {
                      return !0;
                    }
                  : u,
              _ = n.diff(t, 'days'),
              c = [],
              m = 0,
              h = 0,
              f = 0;
            f <= _;
            f += 1
          ) {
            c[m] || (c[m] = []);
            var p = t.clone().add(f, 'days');
            d(p) ||
              ((c[m] = [].concat(S(c[m]), [{ date: p, isInRange: l(p) }])),
              h + 1 === r ? ((m += 1), (h = 0)) : (h += 1));
          }
          return (
            i || (c[c.length - 1].length < r && (c.length = c.length - 1)), c
          );
        },
        j = function(e) {
          return e.sort(function(e, t) {
            return e.start.isAfter(t.start)
              ? 1
              : e.start.isBefore(t.start)
              ? -1
              : 0;
          });
        };
      function x(e) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              O(e, t, n[t]);
            });
        }
        return e;
      }
      function O(e, t, n) {
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
      var P = function(e) {
          var t = 1;
          return e.reduce(function(n, a, r) {
            var s = W({
                event: a,
                lastEvent: 0 !== r ? e[r - 1] : null,
                currentColumn: t,
              }),
              i = d()(n, s, []);
            return (
              (n = E({}, n, O({}, s, [].concat(x(i), [a])))),
              s !== t && (t = s),
              n
            );
          }, {});
        },
        W = function(e) {
          var t = e.event,
            n = e.lastEvent,
            a = e.currentColumn;
          return n && t.start.isSame(n.start, 'day') && t.start.isBefore(n.end)
            ? a + 1
            : 1;
        },
        R = function(e) {
          var t = Object.assign({}, e);
          return Object.keys(e).reduce(function(e, n) {
            return E({}, e, O({}, n, P(t[n])));
          }, {});
        },
        A = function() {
          if ('undefined' == typeof window || !window.document) return 15;
          var e = document.createElement('div');
          (e.style.overflowY = 'scroll'), document.body.append(e);
          var t = e.offsetWidth - e.clientWidth;
          return document.body.removeChild(e), t;
        },
        C = { month: 'month', week: 'week', groups: 'groups' },
        F = function() {
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
        z = { 5: 22, 10: 27, 15: 31, 20: 34, 30: 42, 60: 65 },
        N = F('time-grid__event-handle-center'),
        I = F('time-grid__event-handle'),
        J = function(e) {
          return 60 * e.get('hour') + e.get('minute');
        },
        G = function(e) {
          var t = e.stepMinutes,
            n = e.date,
            a = (e.stepHeight || z[t]) / t;
          return J(n) * a + 1 * n.hour();
        },
        U = function(e) {
          return e.isSame(l()(), 'day')
            ? ' '.concat(F('time-grid__today'))
            : '';
        },
        q = function(e) {
          var t = e.stepMinutes,
            n = e.selectMinutes,
            a = e.columnDate,
            r = e.stepHeight;
          return function(e) {
            var s = e.currentTarget.getBoundingClientRect(),
              i = (e.clientY - s.top) / ((r || z[t]) / t),
              o = a
                .clone()
                .startOf('day')
                .add(i, 'minutes'),
              d = Math.round(o.clone().minute() / n) * n;
            return o
              .clone()
              .minute(d)
              .second(0);
          };
        },
        B = function(e) {
          var t = e.start,
            n = e.end,
            a = ':'.concat(t.format('mm'));
          ':00' === a && (a = '');
          var r = '';
          t.format('a') !== n.format('a') && (r = t.format('a'));
          var s = ''
              .concat(t.format('h'))
              .concat(a)
              .concat(r),
            i = ':'.concat(n.format('mm'));
          ':00' === i && (i = '');
          var o = ''
            .concat(n.format('h'))
            .concat(i)
            .concat(n.format('a'));
          return ''.concat(s, ' - ').concat(o);
        },
        V = function(e) {
          var t = e.mungedEvents,
            n = e.selectedDate,
            a = (function(e) {
              var t = e.mungedEvents,
                n = e.selectedDate,
                a = e.hasGroups,
                r = Object.keys(t).reduce(function(e, r) {
                  var s = t[r];
                  if (a) s = t[r][n.format('YYYY-MM-DD')];
                  else if (r !== n.format('YYYY-MM-DD')) return e;
                  if (s) {
                    var i = s.reduce(function(e, t) {
                      return !1 === e ? t : t.top < e.top ? t : e;
                    }, !1);
                    if (null === e || e.top > i.top) return i;
                  }
                  return e;
                }, null);
              return d()(r, 'start', null);
            })({ mungedEvents: t, selectedDate: n, hasGroups: e.hasGroups }),
            r = n.clone().set({ hour: 8, minute: 30 });
          if (!a) return r;
          var s = a.clone().subtract(60, 'minutes');
          return s.isSame(a, 'day')
            ? s
            : a.clone().set({ hour: 0, minutes: 0, seconds: 0 });
        };
      function $(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var K = 0,
        Z = !1,
        X = function(e) {
          return function(t) {
            (K = t.target.scrollLeft), Q(e);
          };
        },
        Q = function(e) {
          var t, n, a, r, s;
          Z ||
            requestAnimationFrame(
              ((n = (t = e).headerRef),
              (a = t.timeGutterRef),
              t.cornerRef,
              (r = t.timeIndicatorRef),
              t.stepLinesRef,
              t.wrapperRef,
              (s = t.timeIndicatorWidth),
              function() {
                (Z = !1),
                  (n.current.style.transform = 'translateX(-'.concat(K, 'px)')),
                  (a.current.style.transform = 'translateX('.concat(K, 'px)')),
                  (r.current.style.transform = 'translateX('.concat(K, 'px)')),
                  s && (r.current.style.width = ''.concat(s - K, 'px'));
              })
            ),
            (Z = !0);
        },
        ee = function(e) {
          var t = Object(a.useRef)(null),
            n = Object(a.useRef)(null),
            r = Object(a.useRef)(null),
            s = Object(a.useRef)(null),
            i = Object(a.useRef)(null),
            o = Object(a.useRef)(null),
            u = $(Object(a.useState)(0), 2),
            l = u[0],
            _ = u[1],
            m = X({
              wrapperRef: t,
              headerRef: r,
              timeGutterRef: n,
              cornerRef: s,
              timeIndicatorRef: i,
              stepLinesRef: o,
              timeIndicatorWidth: e,
            });
          i.current &&
            t.current &&
            o.current &&
            n.current &&
            ((i.current.style.width = ''.concat(e, 'px')),
            (o.current.style.left = ''.concat(n.current.offsetWidth, 'px')),
            (o.current.style.width = ''.concat(e, 'px')));
          var h = c()(function() {
            _(d()(t, 'current.clientWidth'));
          }, 300);
          return (
            Object(a.useEffect)(function() {
              return (
                l || _(d()(t, 'current.clientWidth')),
                t.current && Y(t.current, h),
                function() {
                  return v(t.current, h);
                }
              );
            }),
            Object(a.useEffect)(function() {
              return (
                t.current.addEventListener('scroll', m, !1),
                function() {
                  t.current.removeEventListener('scroll', m, !1);
                }
              );
            }),
            {
              wrapperRef: t,
              timeGutterRef: n,
              headerRef: r,
              cornerRef: s,
              timeIndicatorRef: i,
              stepLinesRef: o,
            }
          );
        },
        te = n(136),
        ne = n.n(te);
      function ae(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var re = function(e) {
          var t = Object(a.useRef)(new Map()).current,
            n = Object(a.useRef)(null),
            r = ae(Object(a.useState)([]), 2),
            s = r[0],
            i = r[1],
            o = function() {
              var e = [];
              return (
                t.forEach(function(t, n) {
                  e.push(t.offsetWidth);
                }),
                e
              );
            },
            d = function() {
              ne()(o(), s) || i(o());
            },
            u = c()(function() {
              d();
            }, 300);
          Object(a.useEffect)(function() {
            return (
              n.current && Y(n.current, u),
              d(),
              function() {
                v(n.current, u);
              }
            );
          });
          return {
            TimeGridRef: n,
            elementWidths: s,
            assignRef: function(e) {
              return function(n) {
                return null === n ? t.delete() : t.set(e, n);
              };
            },
          };
        },
        se = function(e) {
          var t = e.pixelsMoved,
            n = e.selectMinutes,
            a = e.selectMinutesHeight;
          if (0 === t) return 0;
          var r = (t / a) * n;
          return Math.round(r / n) * n;
        },
        ie = function(e) {
          var t = e.originalStart,
            n = (e.originalEnd, e.minutesMoved);
          return t
            .clone()
            .add(n, 'minutes')
            .isSame(t.clone().subtract(1, 'days'), 'days');
        },
        oe = function(e) {
          var t = e.originalStart,
            n = e.originalEnd,
            a = e.minutesMoved;
          return n
            .clone()
            .add(a, 'minutes')
            .isSame(t.clone().add(1, 'days'), 'days');
        },
        de = function(e) {
          var t = e.pixelsMoved,
            n = e.originalStart,
            a = e.originalEnd,
            r = e.selectMinutes,
            s = e.selectMinutesHeight,
            i = se({
              pixelsMoved: t,
              selectMinutes: r,
              selectMinutesHeight: s,
            });
          return (
            ie({ originalStart: n, originalEnd: a, minutesMoved: i }) &&
              (i = -1 * n.clone().diff(n.clone().startOf('day'), 'minutes')),
            oe({ originalStart: n, originalEnd: a, minutesMoved: i }) &&
              (i = n
                .clone()
                .endOf('day')
                .add(1, 'minutes')
                .diff(a, 'minutes')),
            i
          );
        },
        ue = function(e) {
          var t = e.pixelsMoved,
            n = e.selectMinutes,
            a = e.originalStart,
            r = e.originalEnd,
            s = e.selectMinutesHeight;
          return t
            ? s *
                (de({
                  originalStart: a,
                  originalEnd: r,
                  pixelsMoved: t,
                  selectMinutes: n,
                  selectMinutesHeight: s,
                }) /
                  n)
            : 0;
        },
        le = function(e) {
          var t = e.stepMinutes,
            n = e.selectMinutes;
          return (e.stepHeight || z[t]) / (t / n) + 1 / (60 / n);
        };
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
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
      var me = function(e) {
        var t = e.event,
          n = e.deltaPosition,
          a = e.selectMinutesHeight,
          r = e.selectMinutes,
          s = e.isDurationOnly,
          i = void 0 !== s && s,
          o = t.start.clone(),
          d = t.end.clone(),
          u = de({
            originalStart: t.start,
            originalEnd: t.end,
            pixelsMoved: n.y,
            selectMinutes: r,
            selectMinutesHeight: a,
          });
        if (0 === u) {
          var l = {};
          return (
            t.paddingTopStart && (l.paddingTopStart = t.paddingTopStart),
            t.paddingBottomEnd && (l.paddingBottomEnd = t.paddingBottomEnd),
            _e({ start: o, end: d }, l)
          );
        }
        i || o.add(u, 'minutes'), d.add(u, 'minutes');
        var _ = {};
        return (
          i ||
            (t.paddingTopStart &&
              (_.paddingTopStart = t.paddingTopStart
                .clone()
                .add(u, 'minutes'))),
          t.paddingBottomEnd &&
            (_.paddingBottomEnd = t.paddingBottomEnd.clone().add(u, 'minutes')),
          _e({ start: o, end: d }, _)
        );
      };
      function he(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var fe = function(e) {
        var t = e.isSelectable,
          n = e.stepMinutes,
          r = e.selectMinutes,
          s = e.columnDate,
          i = e.stepHeight,
          o = he(Object(a.useState)(!1), 2),
          d = o[0],
          u = o[1],
          l = he(Object(a.useState)(0), 2),
          _ = l[0],
          c = l[1],
          m = he(Object(a.useState)(0), 2),
          h = m[0],
          f = m[1],
          p = he(Object(a.useState)(0), 2),
          y = p[0],
          M = p[1],
          g = he(Object(a.useState)(0), 2),
          L = g[0],
          Y = g[1],
          v = he(Object(a.useState)(0), 2),
          D = v[0],
          k = v[1],
          b = he(Object(a.useState)(null), 2),
          w = b[0],
          T = b[1],
          S = he(Object(a.useState)(0), 2),
          H = S[0],
          j = S[1],
          x = le({ stepMinutes: n, selectMinutes: r });
        return {
          selectRangeHandlers: {
            onMouseUp: function(e) {
              Y(0), u(!1);
            },
            onMouseDown: function(e) {
              if (
                e.target.className.split(' ').includes(N) ||
                e.target.className.split(' ').includes(I) ||
                !t
              )
                return !1;
              u(!0), c(e.clientY);
              var a = e.currentTarget.getBoundingClientRect(),
                o = (e.clientY - a.top) / x,
                d = Math.round(o) * x;
              Y(d), j(d);
              var l = q({
                stepHeight: i,
                stepMinutes: n,
                selectMinutes: r,
                columnDate: s,
              })(e);
              T(l);
            },
            onMouseMove: function(e) {
              if (!t || !d) return !1;
              if (e.clientY !== _) {
                var n = e.clientY - _,
                  a = Math.abs(
                    ue({
                      originalStart: w,
                      originalEnd: w,
                      pixelsMoved: Math.abs(n),
                      selectMinutes: r,
                      selectMinutesHeight: x,
                    })
                  ),
                  s = de({
                    originalStart: w,
                    originalEnd: w,
                    pixelsMoved: n,
                    selectMinutes: r,
                    selectMinutesHeight: x,
                  }),
                  i = {};
                e.clientY < _
                  ? (Y(H - a),
                    (i.start = w.clone().add(s, 'minutes')),
                    (i.end = w))
                  : ((i.start = w), (i.end = w.clone().add(s, 'minutes'))),
                  k(i),
                  M(a),
                  f(e.clientY);
              }
            },
            onContextMenu: function(e) {
              u(!1);
            },
          },
          isSelectRangeFinished: Math.abs(h) > x / 2,
          resetSelectRangeDrag: function() {
            u(!1), f(0), c(0), M(0);
          },
          selectRangeHeight: y,
          selectRangeTop: L,
          selectRange: D,
        };
      };
      function pe(e) {
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
      function ye(e, t, n) {
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
      var Me = function(e) {
          return e.reduce(function(e, t) {
            var n = {};
            t.paddingTopStart &&
              (n.paddingTopStart = l()(t.paddingTopStart).seconds(0)),
              t.paddingBottomEnd &&
                (n.paddingBottomEnd = l()(t.paddingBottomEnd).seconds(0));
            var a = Object.assign(
                {},
                t,
                (function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      a = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                      (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })
                      )),
                      a.forEach(function(t) {
                        ye(e, t, n[t]);
                      });
                  }
                  return e;
                })(
                  {
                    start: l()(t.start).seconds(0),
                    end: l()(t.end).seconds(0),
                  },
                  n
                )
              ),
              r = Math.abs(
                a.start
                  .clone()
                  .startOf('day')
                  .diff(a.end.clone().subtract(1, 'seconds'), 'days')
              );
            if (((e = [].concat(pe(e), [a])), 0 === r)) return e;
            for (var s = 1; s <= r; s += 1) {
              var i = Object.assign({}, a);
              (i.start = a.start
                .clone()
                .add(s, 'days')
                .startOf('day')),
                a.end.isSame(i.start, 'day')
                  ? (i.end = a.end)
                  : (i.end = i.start.clone().endOf('day')),
                (e = [].concat(pe(e), [i]));
            }
            return e;
          }, []);
        },
        ge = function(e) {
          var t = e.event,
            n = e.stepMinutes,
            a = e.stepHeight,
            r = (a || z[n]) / n,
            s = 60 * r * 24,
            i = t.end.clone().diff(t.start, 'minutes'),
            o = (i / 60) * 1,
            d = G({ stepMinutes: n, date: t.start, stepHeight: a }),
            u = s - d + 24,
            l = i * r + o;
          l > u && (l = u);
          var _ = Le({ event: t, pixelsPerMinute: r }),
            c = {
              height: l,
              top: d,
              paddingTopHeight: _.topHeight,
              paddingBottomHeight: _.bottomHeight,
            };
          return Object.assign(t, c);
        },
        Le = function(e) {
          var t = e.event,
            n = e.pixelsPerMinute,
            a = 0;
          if (t.paddingTopStart) {
            var r = t.paddingTopStart.clone().diff(t.start, 'minutes'),
              s = (r / 60) * 1;
            a = Math.abs(r * n + s);
          }
          var i = 0;
          if (t.paddingBottomEnd) {
            var o = t.paddingBottomEnd.clone().diff(t.end, 'minutes'),
              d = (o / 60) * 1;
            i = Math.abs(o * n + d);
          }
          return { topHeight: a, bottomHeight: i };
        },
        Ye = function(e) {
          var t = e.eventsKeyed,
            n = e.event,
            a = Object.assign({}, t),
            r = n.start.format('YYYY-MM-DD'),
            s = d()(t, ''.concat(n.group_id, '.').concat(r), []);
          s.push(n);
          var i = d()(t, ''.concat(n.group_id), {});
          return (i[r] = s), (a[n.group_id] = i), a;
        },
        ve = function(e) {
          var t = e.events,
            n = e.stepMinutes,
            a = void 0 !== n && n,
            r = e.stepHeight,
            s = void 0 !== r && r,
            i = Me(t);
          return j(i).reduce(function(e, t, n) {
            if (!a) return Ye({ eventsKeyed: e, event: t });
            var r = ge({ event: t, stepMinutes: a, stepHeight: s });
            return Ye({ eventsKeyed: e, event: r });
          }, {});
        };
      function De(e) {
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
      var ke = function(e) {
        var t = e.mungedEvents,
          n = e.visibleEventGroups,
          a = Object.assign({}, t);
        return (
          n &&
            Object.keys(a).forEach(function(e) {
              n.includes(Number(e)) || delete a[e];
            }),
          Object.keys(a).reduce(function(e, t) {
            return (
              Object.keys(a[t]).forEach(function(n) {
                e[n] = j([].concat(De(d()(e, n, [])), De(a[t][n])));
              }),
              e
            );
          }, {})
        );
      };
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
      var we = function(e) {
          var t = (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(n);
              'function' == typeof Object.getOwnPropertySymbols &&
                (a = a.concat(
                  Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                a.forEach(function(t) {
                  be(e, t, n[t]);
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
        Te = function(e) {
          var t = e.events,
            n = e.stepMinutes,
            r = e.stepHeight,
            s = e.visibleEventGroups,
            i = e.stepDetails,
            o = Object(a.useMemo)(
              function() {
                return ve({ events: t, stepMinutes: n, stepHeight: r });
              },
              [t, n]
            ),
            d = Object(a.useMemo)(
              function() {
                return ke({ mungedEvents: o, visibleEventGroups: s });
              },
              [o, s]
            );
          if (!i) return { mungedEvents: o, eventsWithSelectedEventGroups: d };
          var u = Object(a.useMemo)(
              function() {
                return ve({ events: i, stepMinutes: n, stepHeight: r });
              },
              [i, n]
            ),
            l = Object(a.useMemo)(
              function() {
                return ke({ mungedEvents: u, visibleEventGroups: s });
              },
              [u, s]
            );
          return {
            mungedEvents: o,
            eventsWithSelectedEventGroups: d,
            mungedStepDetails: u,
            mungedStepDetailsGroups: l,
          };
        },
        Se = n(7);
      function He(e, t, n) {
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
      var je,
        xe = i.a.oneOfType([
          i.a.instanceOf(Date),
          i.a.instanceOf(l.a),
          i.a.string,
        ]),
        Ee = i.a.oneOf([0, 1, 2, 3, 4, 5, 6]),
        Oe = i.a.instanceOf(l.a),
        Pe = i.a.string,
        We = i.a.shape({
          id: i.a.oneOfType([i.a.number, i.a.string]).isRequired,
          group_id: i.a.oneOfType([i.a.number, i.a.string]),
          title: i.a.string,
          start: xe.isRequired,
          end: xe.isRequired,
        }),
        Re = i.a.shape({
          id: i.a.oneOfType([i.a.number, i.a.string]).isRequired,
          group_id: i.a.oneOfType([i.a.number, i.a.string]),
          start: xe.isRequired,
          end: xe.isRequired,
        }),
        Ae = i.a.oneOf([5, 10, 15, 20, 30, 60]),
        Ce = (i.a.shape({ id: i.a.number, name: i.a.string }),
        i.a.shape({
          current: i.a.instanceOf(
            'undefined' == typeof Element ? function() {} : Element
          ),
        })),
        Fe = i.a.arrayOf(i.a.number),
        ze = i.a.arrayOf(
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
        Ne = (i.a.shape(
          ((je = i.a.func),
          Object.keys(C).reduce(function(e, t) {
            return (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  a = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                  (a = a.concat(
                    Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  a.forEach(function(t) {
                    He(e, t, n[t]);
                  });
              }
              return e;
            })({}, e, He({}, t, je));
          }, {}))
        ),
        i.a.oneOf(Object.values({ day: 'day', time: 'time' })),
        i.a.oneOfType([
          i.a.arrayOf(
            i.a.arrayOf(
              i.a.shape({ isInRange: i.a.bool.isRequired, date: xe.isRequired })
            )
          ),
          i.a.shape({
            firstDate: xe.isRequired,
            lastDate: xe.isRequired,
            totalColumns: i.a.number,
            allowPartialRows: i.a.bool,
            getExcludedDates: i.a.func,
            getIsInRange: i.a.func,
          }),
        ])),
        Ie = i.a.shape({ start: xe.isRequired, end: xe.isRequired }),
        Je = i.a.oneOfType([xe, i.a.oneOf(['firstEvent'])]),
        Ge = i.a.shape({ id: i.a.number.isRequired, title: i.a.string });
      function Ue(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              Be(e, t, n[t]);
            });
        }
        return e;
      }
      function Be(e, t, n) {
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
      var Ve = function(e, t) {
          switch (t.type) {
            case 'moveUp':
              return qe({}, e, {
                rowMoves: e.rowMoves - 1,
                vertChange: e.vertChange - t.vertChange,
              });
            case 'moveRight':
              return qe({}, e, {
                columnMoves: e.columnMoves + 1,
                horizChange: e.horizChange + t.horizChange,
              });
            case 'moveDown':
              return qe({}, e, {
                rowMoves: e.rowMoves + 1,
                vertChange: e.vertChange + t.vertChange,
              });
            case 'moveLeft':
              return qe({}, e, {
                columnMoves: e.columnMoves - 1,
                horizChange: e.horizChange - t.horizChange,
              });
            case 'startDragging':
              var n = e.vertChange;
              return qe({}, e, {
                isDragging: !0,
                position: t.position,
                vertChange: 0 === n ? t.initialVertChange : n,
              });
            case 'stopDragging':
              return qe({}, e, {
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
        $e = {
          rowMoves: 0,
          columnMoves: 0,
          isDragging: !1,
          wasDragged: !1,
          position: { x: 0, y: 0 },
          vertChange: 0,
          horizChange: 0,
        },
        Ke = function(e) {
          var t = e.children,
            n = e.cellDimensions,
            s = e.isDraggable,
            i = e.event,
            o = e.topEventOffset,
            d = e.onDrag,
            u = e.onDragEnd,
            l = e.columnMovesPerRowChange,
            _ = Ue(Object(a.useReducer)(Ve, $e), 2),
            c = _[0],
            m = _[1],
            h = n.width,
            f = n.height,
            p = c.position,
            y = p.x,
            M = p.y,
            g = c.columnMoves,
            L = c.rowMoves,
            Y = c.isDragging,
            v = c.vertChange,
            D = c.horizChange;
          M < f * L && m({ type: 'moveUp', vertChange: f }),
            y > h * (g + 1) && m({ type: 'moveRight', horizChange: h + 1 * g }),
            M > f * (L + 1) && m({ type: 'moveDown', vertChange: f }),
            y < h * g && m({ type: 'moveLeft', horizChange: h + 1 });
          var k = (function(e) {
            var t = e.event,
              n = e.columnMoves + e.rowMoves * e.columnMovesPerRowChange,
              a = t.start.clone().add(n, 'days'),
              r = t.end.clone().add(n, 'days'),
              s = {};
            return (
              t.paddingTopStart &&
                (s.paddingTopStart = t.paddingTopStart.clone().add(n, 'days')),
              t.paddingBottomEnd &&
                (s.paddingBottomEnd = t.paddingBottomEnd
                  .clone()
                  .add(n, 'days')),
              qe({}, t, { start: a, end: r }, s)
            );
          })({
            event: i,
            columnMoves: g,
            rowMoves: L,
            columnMovesPerRowChange: l,
          });
          return r.a.createElement(
            Se.DraggableCore,
            {
              onDrag: function(e, t) {
                if (!s({ event: i })) return !1;
                m({
                  type: 'startDragging',
                  position: { x: t.x, y: t.y },
                  initialVertChange: o,
                }),
                  d(e, t);
              },
              onStop: function(e, t) {
                if (!Y) return !1;
                u({ e: e, event: we(k) }),
                  setTimeout(function() {
                    return m({ type: 'stopDragging' });
                  });
              },
            },
            t({ draggedEvent: k, vertChange: v, horizChange: D })
          );
        };
      (Ke.defaultProps = {
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
        (Ke.propTypes = {
          cellDimensions: i.a.shape({
            width: i.a.number.isRequired,
            height: i.a.number.isRequired,
          }).isRequired,
          children: i.a.func.isRequired,
          columnMovesPerRowChange: i.a.number.isRequired,
          event: We.isRequired,
          isDraggable: i.a.func,
          onDrag: i.a.func,
          onDragEnd: i.a.func,
          topEventOffset: i.a.number.isRequired,
        });
      var Ze = Ke;
      function Xe() {
        return (Xe =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Qe(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              s = Object.keys(e);
            for (a = 0; a < s.length; a++)
              (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var et = function(e) {
          var t = e.className,
            n = e.eventClass;
          return t ? ''.concat(n, ' ').concat(t) : n;
        },
        tt = r.a.forwardRef(function(e, t) {
          var n = e.className,
            a = e.eventClass,
            s = e.event,
            i = e.isSelectable,
            o = e.onSelect,
            d = e.children,
            u = Qe(e, [
              'className',
              'eventClass',
              'event',
              'isSelectable',
              'onSelect',
              'children',
            ]);
          return r.a.createElement(
            'div',
            Xe({}, u, {
              className: et({ className: n, eventClass: a }),
              role: 'button',
              ref: t,
              onClick: function(e) {
                if ((e.stopPropagation(), !i)) return !1;
                o({ e: e, event: we(s) });
              },
            }),
            d
          );
        });
      (tt.displayName = 'EventWrapper'),
        (tt.defaultProps = {
          className: '',
          isSelectable: !0,
          onSelect: function() {
            return null;
          },
          eventClass: F('time-grid__event'),
        }),
        (tt.propTypes = {
          children: i.a.node.isRequired,
          className: i.a.string,
          event: i.a.object.isRequired,
          eventClass: i.a.string,
          isSelectable: i.a.bool,
          onSelect: i.a.func,
        });
      var nt = tt;
      n(140);
      function at() {
        return (at =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function rt(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              s = Object.keys(e);
            for (a = 0; a < s.length; a++)
              (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var st = r.a.forwardRef(function(e, t) {
        var n,
          a,
          s = e.event,
          i = e.onSelect,
          o = e.children,
          d = rt(e, ['event', 'onSelect', 'children']);
        return r.a.createElement(
          nt,
          at(
            { event: s, onSelect: i, eventClass: F('day-grid__event'), ref: t },
            d
          ),
          o
            ? o(s)
            : r.a.createElement(
                'div',
                { className: F('day-grid__event-details') },
                r.a.createElement(
                  'div',
                  { className: F('day-grid__event-time') },
                  ((n = s.start),
                  ':00' === (a = ':'.concat(n.format('mm'))) && (a = ''),
                  ''
                    .concat(n.format('h'))
                    .concat(a)
                    .concat(n.format('a')))
                ),
                r.a.createElement(
                  'div',
                  { className: F('day-grid__event-title') },
                  s.title
                )
              )
        );
      });
      (st.defaultProps = {
        onSelect: function() {
          return null;
        },
        children: null,
      }),
        (st.propTypes = {
          children: i.a.func,
          event: We.isRequired,
          onSelect: i.a.func,
        });
      var it = st,
        ot = r.a.forwardRef(function(e, t) {
          var n = e.events,
            s = e.eventHeight,
            i = e.cellDimensions,
            o = e.dayDetails,
            d = e.isEventDraggable,
            u = e.onDragEnd,
            l = e.onSelectSlot,
            _ = e.onSelectDate,
            c = e.renderCell,
            m = e.renderEvent,
            h = e.eventRef,
            f = e.eventWrapperRef,
            p = e.onSelectEvent,
            y = e.onSelectMoreEvents,
            M = e.totalEventsToShow,
            g = e.totalColumns;
          return r.a.createElement(
            'div',
            {
              className: F(
                'day-grid__cell',
                !o.isInRange && 'day-grid__cell--not-in-range',
                n.length > 0 && 'day-grid__cell--has-events'
              ),
              role: 'button',
              ref: t,
              onClick: function(e) {
                return l({
                  e: e,
                  date: new Date(o.date),
                  isInRange: o.isInRange,
                });
              },
            },
            r.a.createElement(
              'div',
              {
                className: F('day-grid__date-wrapper'),
                onClick: function(e) {
                  _ &&
                    (e.stopPropagation(),
                    _({
                      e: e,
                      date: new Date(o.date),
                      isInrange: o.isInRange,
                    }));
                },
              },
              r.a.createElement(
                'div',
                {
                  className: F(
                    'day-grid__date',
                    !o.isInRange && 'day-grid__date--not-in-range'
                  ),
                },
                o.date.date()
              )
            ),
            c
              ? c({
                  date: new Date(o.date.startOf('day')),
                  isInRange: o.isInRange,
                  events: n,
                })
              : r.a.createElement(
                  'div',
                  {
                    className: F('day-grid__event-wrapper'),
                    ref: f,
                    style: { opacity: M ? 1 : 0 },
                  },
                  n.length > 0 &&
                    o.isInRange &&
                    r.a.createElement(
                      a.Fragment,
                      null,
                      (function(e) {
                        var t = 0;
                        return e.map(function(e) {
                          return (
                            (t += 1),
                            !M || M >= t
                              ? r.a.createElement(
                                  Ze,
                                  {
                                    cellDimensions: i,
                                    event: e,
                                    topEventOffset: (t - 1) * s * -1,
                                    key: e.id,
                                    columnMovesPerRowChange: g,
                                    onDragEnd: u,
                                    isDraggable: d,
                                  },
                                  function(e) {
                                    var t = e.draggedEvent,
                                      n = e.vertChange,
                                      a = e.horizChange;
                                    return r.a.createElement(
                                      it,
                                      {
                                        event: t,
                                        onSelect: p,
                                        ref: h,
                                        style: {
                                          transform: 'translate('
                                            .concat(a, 'px, ')
                                            .concat(n, 'px)'),
                                        },
                                      },
                                      m
                                    );
                                  }
                                )
                              : null
                          );
                        });
                      })(n),
                      M < n.length &&
                        M > 0 &&
                        r.a.createElement(
                          'div',
                          {
                            className: F('day-grid__more-events'),
                            onClick: function(e) {
                              var t;
                              e.stopPropagation(),
                                y({
                                  e: e,
                                  events: n.map(function(e) {
                                    return we(e);
                                  }),
                                  eventsMore: ((t = n.length - M),
                                  n.filter(function(e, a) {
                                    return a >= n.length - t;
                                  })).map(function(e) {
                                    return we(e);
                                  }),
                                  date: new Date(o.date),
                                });
                            },
                          },
                          n.length - M,
                          ' more'
                        )
                    )
                )
          );
        });
      (ot.displayName = 'DayCell'),
        (ot.defaultProps = {
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
        (ot.propTypes = {
          cellDimensions: i.a.shape({
            width: i.a.number.isRequired,
            height: i.a.number.isRequired,
          }).isRequired,
          dayDetails: i.a.shape({
            date: Oe.isRequired,
            isInRange: i.a.bool.isRequired,
          }).isRequired,
          eventHeight: i.a.number.isRequired,
          eventRef: Ce.isRequired,
          eventWrapperRef: Ce.isRequired,
          events: i.a.arrayOf(We),
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
      var dt = ot,
        ut = (n(143),
        function(e) {
          var t = e.events,
            n = e.isEventDraggable,
            a = e.grid,
            s = e.renderCell,
            i = e.renderHeader,
            o = e.onDragEnd,
            u = e.onSelectSlot,
            l = e.onSelectDate,
            _ = e.onSelectMoreEvents,
            c = e.onSelectEvent,
            m = e.visibleEventGroups,
            h = Te({ events: t, visibleEventGroups: m })
              .eventsWithSelectedEventGroups,
            f = T(),
            p = f.rowRef,
            y = f.eventRef,
            M = f.cellRef,
            g = f.eventWrapperRef,
            L = f.eventHeight,
            Y = f.totalEventsToShow,
            v = f.cellDimensions,
            D = a;
          Array.isArray(D) || (D = H(a));
          var k = 0,
            b = 0;
          return r.a.createElement(
            'div',
            { className: F('day-grid') },
            r.a.createElement(
              'div',
              { className: F('day-grid__header') },
              d()(D, 0, []).map(function(e) {
                var t = e.date.format('dddd');
                return r.a.createElement(
                  'div',
                  { className: F('day-grid__column-header'), key: t },
                  i ? i({ date: e.date }) : t
                );
              })
            ),
            r.a.createElement(
              'div',
              { className: F('day-grid__days') },
              D
                ? D.map(function(e) {
                    b += 1;
                    var t = e.length;
                    return r.a.createElement(
                      'div',
                      {
                        className: F('day-grid__row'),
                        ref: p,
                        key: 'monthColumn'.concat(b),
                      },
                      e.map(function(e) {
                        k += 1;
                        var a = d()(h, e.date.format('YYYY-MM-DD'), []);
                        return r.a.createElement(dt, {
                          isEventDraggable: n,
                          totalColumns: t,
                          events: a,
                          ref: M,
                          eventHeight: L,
                          cellDimensions: v,
                          key: 'dayCells'.concat(k),
                          dayDetails: e,
                          renderCell: s,
                          onDragEnd: o,
                          onSelectSlot: u,
                          onSelectDate: l,
                          onSelectMoreEvents: _,
                          totalEventsToShow: Y,
                          eventRef: y,
                          eventWrapperRef: g,
                          onSelectEvent: c,
                        });
                      })
                    );
                  })
                : null
            )
          );
        });
      (ut.defaultProps = {
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
        (ut.propTypes = {
          events: i.a.arrayOf(We),
          grid: Ne.isRequired,
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
      var lt = ut,
        _t = new Date();
      function ct(e, t, n) {
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
            a = e.isInRange,
            r = e.type,
            s = { day: n, isInRange: a },
            i = null;
          return (
            'last' === r &&
              (i = t
                .clone()
                .subtract(1, 'months')
                .date(n)),
            'current' === r && (i = t.clone().date(n)),
            'next' === r &&
              (i = t
                .clone()
                .add(1, 'months')
                .date(n)),
            (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  a = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                  (a = a.concat(
                    Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  a.forEach(function(t) {
                    ct(e, t, n[t]);
                  });
              }
              return e;
            })({}, s, { date: i })
          );
        },
        ft = function(e) {
          for (
            var t = e.date,
              n = e.firstDay,
              a = e.forceSixWeeks,
              r = pt({ date: t, firstDay: n }),
              s = Mt(t),
              i = r.length + s.length,
              o = mt({ totalDates: i, forceSixWeeks: a }),
              d = gt({ totalDates: i, forceSixWeeks: a }),
              u = [].concat(r, s, d),
              l = [],
              _ = 0;
            _ < o;
            _ += 7
          )
            l.push(u.slice(_, _ + 7));
          return l;
        },
        pt = function(e) {
          for (
            var t = e.date,
              n = e.firstDay,
              a = yt({
                firstDateDay: t
                  .clone()
                  .startOf('month')
                  .day(),
                firstDay: n,
              }),
              r = t
                .clone()
                .subtract(1, 'months')
                .endOf('month')
                .date(),
              s = [],
              i = r - a + 1;
            i <= r;
            i += 1
          )
            s.push(i);
          return s;
        },
        yt = function(e) {
          for (
            var t = e.firstDateDay, n = e.firstDay, a = 0, r = n;
            r < n + 7;
            r += 1
          ) {
            if (r === t || (r > 6 && r === t + 7)) return a;
            a += 1;
          }
          return a;
        },
        Mt = function(e) {
          for (var t = e.daysInMonth(), n = [], a = 1; a <= t; a += 1)
            n.push(a);
          return n;
        },
        gt = function(e) {
          for (
            var t = e.totalDates,
              n = e.forceSixWeeks,
              a = mt({ totalDates: t, forceSixWeeks: n }) - t,
              r = [],
              s = 1;
            s <= a;
            s += 1
          )
            r.push(s);
          return r;
        },
        Lt = function(e) {
          var t = e.date,
            n = e.firstDay,
            a = void 0 === n ? 0 : n,
            r = e.forceSixWeeks,
            s = ft({ date: t, firstDay: a, forceSixWeeks: void 0 !== r && r }),
            i = t
              .clone()
              .subtract(1, 'months')
              .endOf('month')
              .date(),
            o = t
              .clone()
              .endOf('month')
              .date(),
            d = 1 !== s[0][0],
            u = 1 === s[0][0],
            l = !1;
          return s.map(function(e) {
            return e.map(function(e) {
              return d
                ? (e === i && ((d = !1), (u = !0)),
                  ht({ date: t, day: e, isInRange: !1, type: 'last' }))
                : u
                ? (e === o && ((u = !1), (l = !0)),
                  ht({ date: t, day: e, isInRange: !0, type: 'current' }))
                : l
                ? ht({ date: t, day: e, isInRange: !1, type: 'next' })
                : null;
            });
          });
        },
        Yt = function(e) {
          var t = e.events,
            n = e.firstDay,
            a = e.forceSixWeeks,
            s = e.isEventDraggable,
            i = e.selectedDate,
            o = e.onDragEnd,
            d = e.onSelectMore,
            u = e.onSelectDate,
            _ = e.onSelectSlot,
            c = e.onSelectEvent,
            m = e.visibleEventGroups,
            h = e.renderHeader,
            f = e.renderCell,
            p = e.renderEvent,
            y = Lt({ date: l()(i), firstDay: n, forceSixWeeks: a });
          return r.a.createElement(lt, {
            isEventDraggable: s,
            grid: y,
            events: t,
            onDragEnd: o,
            onSelectMoreEvents: d,
            onSelectDate: u,
            onSelectEvent: c,
            onSelectSlot: _,
            visibleEventGroups: m,
            renderEvent: p,
            renderHeader: h,
            renderCell: f,
          });
        };
      (Yt.defaultProps = {
        events: [],
        isEventDraggable: function() {
          return !0;
        },
        forceSixWeeks: !1,
        firstDay: 0,
        selectedDate: _t,
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
        (Yt.propTypes = {
          events: i.a.arrayOf(We),
          firstDay: Ee,
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
          selectedDate: xe,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var vt = Yt;
      n(145);
      function Dt(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var kt = r.a.forwardRef(function(e, t) {
        var n = e.selectedDate,
          s = (e.firstDay, e.stepMinutes),
          i = e.stepHeight,
          o = (e.selectMinutes, e.onCurrentTimeChange),
          d = e.renderHeader,
          u = e.renderColumns,
          _ = e.renderCorner,
          c = e.totalWidth,
          m = e.scrollToTime,
          h = Dt(Object(a.useState)(l()()), 2),
          f = h[0],
          p = h[1],
          y = Dt(Object(a.useState)(15), 2),
          M = y[0],
          g = y[1];
        Object(a.useEffect)(function() {
          var e = setTimeout(function() {
            var e = l()();
            p(e), o(new Date(e.format('YYYY-MM-DD HH:mm:ss')));
          }, 6e4);
          return function() {
            clearTimeout(e);
          };
        });
        var L = ee(c),
          Y = L.wrapperRef,
          v = L.timeGutterRef,
          D = L.headerRef,
          k = L.cornerRef,
          b = L.timeIndicatorRef,
          w = L.stepLinesRef,
          T = 60 / s,
          S = Object(a.useMemo)(
            function() {
              return (i || z[s]) * T * 24 + (1 * T * 24 - 25);
            },
            [s]
          );
        Object(a.useEffect)(
          function() {
            if (m) {
              var e = G({ stepMinutes: s, date: l()(m), stepHeight: i });
              Y.current.scrollTop = e;
            }
          },
          [l()(n).format(), s, i]
        );
        var H = 50;
        v.current && (H = v.current.offsetWidth - 1),
          Object(a.useEffect)(
            function() {
              0 === M && g(A());
            },
            [M]
          );
        var j = F('time-grid__current-time-indicator');
        return r.a.createElement(
          'div',
          { className: F('time-grid'), ref: t },
          r.a.createElement(
            'div',
            { className: F('time-grid__header-wrapper') },
            r.a.createElement(
              'div',
              {
                className: F('time-grid__corner'),
                style: { flex: '1 0 '.concat(H, 'px') },
                ref: k,
              },
              _({ currentTime: new Date(f) })
            ),
            r.a.createElement(
              'div',
              {
                className: F('time-grid__header'),
                style: { marginRight: M - 1 },
                ref: D,
              },
              d()
            ),
            r.a.createElement(
              'div',
              {
                className: F('time-grid__scroll-gutter'),
                style: { width: M - 1 },
              },
              r.a.createElement('div', {
                className: F('time-grid__scroll-gutter-connector'),
              })
            )
          ),
          r.a.createElement(
            'div',
            { className: F('time-grid__grid-wrapper'), ref: Y },
            r.a.createElement(
              'div',
              { className: F('time-grid__step-lines'), ref: w },
              (function() {
                for (
                  var e = ''.concat((i || z[s]) + 1 / T, 'px'), t = [], n = 0;
                  n < 24 * T;
                  n += 1
                ) {
                  var a = n % T;
                  t.push(
                    r.a.createElement('div', {
                      className: F(
                        'time-grid__step-line',
                        a && 'time-grid__step-line-minor'
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
            r.a.createElement(
              'div',
              {
                className: F('time-grid__time-gutter'),
                ref: v,
                style: { height: S },
              },
              (function() {
                for (var e = T * (i || z[s]), t = [], n = 0; n < 24; n += 1)
                  t.push(
                    r.a.createElement(
                      'div',
                      {
                        className: F('time-grid__time-label-wrapper'),
                        key: 'dayTime'.concat(n),
                        style: { height: ''.concat(e + 1, 'px') },
                      },
                      r.a.createElement(
                        'span',
                        {
                          className: F(
                            'time-grid__time-label',
                            'time-grid__time-label-'.concat(n)
                          ),
                        },
                        l()()
                          .hour(n)
                          .format('ha')
                      )
                    )
                  );
                return t;
              })()
            ),
            r.a.createElement(
              'div',
              { className: F('time-grid__grid') },
              r.a.createElement(
                'div',
                {
                  className: j,
                  style: {
                    top: ''.concat(
                      G({ stepMinutes: s, date: f, stepHeight: i }),
                      'px'
                    ),
                  },
                  ref: b,
                },
                r.a.createElement(
                  'span',
                  { className: ''.concat(j, '__time') },
                  l()().format('h:mma')
                ),
                r.a.createElement('div', { className: ''.concat(j, '__line') })
              ),
              u({ currentTime: f, totalGridHeight: S })
            )
          )
        );
      });
      (kt.displayName = 'TimeGrid'),
        (kt.defaultProps = {
          renderCorner: function() {
            return null;
          },
          selectedDate: _t,
          firstDay: 0,
          scrollToTime: null,
          selectMinutes: 15,
          stepMinutes: 30,
          stepHeight: null,
          onCurrentTimeChange: function() {
            return null;
          },
        }),
        (kt.propTypes = {
          firstDay: Ee,
          onCurrentTimeChange: i.a.func,
          renderColumns: i.a.func.isRequired,
          renderCorner: i.a.func,
          renderHeader: i.a.func.isRequired,
          scrollToTime: xe,
          selectMinutes: Ae,
          selectedDate: xe,
          stepHeight: i.a.number,
          stepMinutes: Ae,
          totalWidth: i.a.number.isRequired,
        });
      var bt = kt;
      n(147);
      function wt() {
        return (wt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Tt(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              s = Object.keys(e);
            for (a = 0; a < s.length; a++)
              (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var Ht = function(e) {
        var t = e.children,
          n = (e.className, e.event),
          s = e.isSelectable,
          i = e.onSelect,
          o = e.isExtendable,
          d = St(e, [
            'children',
            'className',
            'event',
            'isSelectable',
            'onSelect',
            'isExtendable',
          ]),
          u = Object(a.useRef)(null),
          l = Object(a.useRef)(null),
          _ = Tt(Object(a.useState)(0), 2),
          c = _[0],
          m = _[1];
        return (
          Object(a.useEffect)(function() {
            if (null !== u.current && null !== l.current) {
              var e = u.current.clientHeight,
                t = l.current.clientHeight,
                n = ''.concat(e - t, 'px');
              c !== n && m(n);
            }
          }),
          r.a.createElement(
            nt,
            wt({ ref: u, event: n, onSelect: i, isSelectable: s }, d),
            r.a.createElement('div', { className: N, style: { height: c } }),
            t
              ? t(n)
              : r.a.createElement(
                  'div',
                  { className: F('time-grid__event-details-wrapper') },
                  r.a.createElement(
                    'span',
                    { className: F('time-grid__event-title') },
                    n.title
                  ),
                  r.a.createElement(
                    'span',
                    { className: F('time-grid__event-time') },
                    B(n)
                  )
                ),
            r.a.createElement('div', {
              className: ''
                .concat(I, ' ')
                .concat(o({ event: n }) && F('time-grid__event-handle-bottom')),
              ref: l,
            })
          )
        );
      };
      (Ht.defaultProps = {
        children: null,
        className: null,
        isSelectable: !0,
        isExtendable: function() {
          return !0;
        },
      }),
        (Ht.propTypes = {
          children: i.a.func,
          className: i.a.string,
          event: We.isRequired,
          isExtendable: i.a.func,
          isSelectable: i.a.bool,
          onSelect: i.a.func.isRequired,
        });
      var jt = Ht;
      function xt(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var Et = function(e) {
          var t = e.isDragging,
            n = e.wasDragged;
          return F(
            'time-grid__draggable-event',
            t && 'time-grid__dragging-event',
            n && 'time-grid__dragged-event'
          );
        },
        Ot = function(e) {
          var t = e.event,
            n = e.stepMinutes,
            s = e.selectMinutes,
            i = e.columnWidths,
            o = e.columnIndex,
            d = e.isDraggable,
            u = e.onDrag,
            l = e.onDragEnd,
            _ = e.children,
            c = e.stepHeight,
            m = e.getUpdatedDraggedEvent,
            h = xt(Object(a.useState)({ x: 0, y: 0 }), 2),
            f = h[0],
            p = h[1],
            y = xt(Object(a.useState)(0), 2),
            M = y[0],
            g = y[1],
            L = xt(Object(a.useState)(0), 2),
            Y = L[0],
            v = L[1],
            D = xt(Object(a.useState)(i[o]), 2),
            k = D[0],
            b = D[1],
            w = xt(Object(a.useState)(!1), 2),
            T = w[0],
            S = w[1],
            H = xt(Object(a.useState)(!1), 2),
            j = H[0],
            x = H[1],
            E = xt(Object(a.useState)(o), 2),
            O = E[0],
            P = E[1],
            W = le({ stepHeight: c, stepMinutes: n, selectMinutes: s }),
            R = ue({
              originalStart: t.start,
              originalEnd: t.end,
              pixelsMoved: f.y,
              selectMinutes: s,
              selectMinutesHeight: W,
            }),
            A = O - o,
            C = function(e) {
              var t = e.direction,
                n = e.left;
              v(n), b(i[O + t]), P(O + t);
            },
            z = Object.assign({}, t),
            I = me({
              event: t,
              deltaPosition: f,
              selectMinutesHeight: W,
              selectMinutes: s,
            });
          return (
            (z.start = I.start),
            (z.end = I.end),
            void 0 !== t.paddingTopStart &&
              (z.paddingTopStart = I.paddingTopStart),
            void 0 !== t.paddingBottomEnd &&
              (z.paddingBottomEnd = I.paddingBottomEnd),
            ((z = m({
              event: z,
              start: I.start,
              end: I.end,
              columnMoves: A,
            })).top = t.top + R),
            (function() {
              k !== i[O] && b(i[O]);
              var e = (function(e) {
                for (
                  var t = e.columnMoves,
                    n = e.columnWidths,
                    a = e.columnIndex,
                    r = 0,
                    s = 1;
                  s <= Math.abs(t);
                  s += 1
                )
                  t < 0 && (r += -1 * n[a - s]), t > 0 && (r += n[a + s - 1]);
                return r;
              })({ columnMoves: A, columnWidths: i, columnIndex: o });
              e !== Y && v(e);
              var t = e + k;
              M < e && 0 !== O && C({ direction: -1, left: e }),
                M > t && O !== i.length - 1 && C({ direction: 1, left: e });
            })(),
            r.a.createElement(
              a.Fragment,
              null,
              r.a.createElement(
                Se.DraggableCore,
                {
                  onDrag: function(e, n) {
                    if (!d({ event: t })) return !1;
                    var a = f.x,
                      r = f.y;
                    p({ x: a + n.deltaX, y: r + n.deltaY }),
                      g(n.x),
                      S(!0),
                      u(e, n);
                  },
                  handle: '.'.concat(N),
                  onStop: function(e, t) {
                    if (!T) return !1;
                    p({ x: 0, y: 0 }),
                      setTimeout(function() {
                        return S(!1);
                      }),
                      x(!0),
                      l({ e: e, event: we(z) });
                  },
                },
                _({
                  draggedEvent: z,
                  leftChange: Y,
                  currentColumnWidth: k,
                  isDragging: T,
                  wasDragged: j,
                  isDndPlaceholder: !1,
                  dndClassName: Et({ isDragging: T, wasDragged: j }),
                })
              ),
              T &&
                r.a.createElement(
                  'div',
                  { className: F('time-grid__dragging-placeholder-event') },
                  _({
                    draggedEvent: t,
                    isDragging: T,
                    topChange: 0,
                    isDndPlaceholder: !0,
                  })
                )
            )
          );
        };
      (Ot.defaultProps = {
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
        (Ot.propTypes = {
          children: i.a.func.isRequired,
          columnIndex: i.a.number.isRequired,
          columnWidths: Fe.isRequired,
          event: We.isRequired,
          getUpdatedDraggedEvent: i.a.func,
          isDraggable: i.a.func,
          onDrag: i.a.func,
          onDragEnd: i.a.func.isRequired,
          selectMinutes: Ae,
          stepHeight: i.a.number,
          stepMinutes: Ae,
        });
      var Pt = Ot;
      function Wt(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var Rt = function(e) {
        var t = e.children,
          n = e.event,
          s = e.isExtendable,
          i = e.onExtend,
          o = e.onExtendEnd,
          d = e.selectMinutes,
          u = e.stepMinutes,
          l = e.stepHeight,
          _ = Wt(Object(a.useState)(!1), 2),
          c = _[0],
          m = _[1],
          h = Wt(Object(a.useState)({ x: 0, y: 0 }), 2),
          f = h[0],
          p = h[1],
          y = Object(a.useMemo)(
            function() {
              return le({ stepMinutes: u, selectMinutes: d, stepHeight: l });
            },
            [u, d]
          ),
          M = me({
            event: n,
            deltaPosition: f,
            selectMinutesHeight: y,
            selectMinutes: d,
            isDurationOnly: !0,
          }),
          g = ue({
            pixelsMoved: f.y,
            selectMinutes: d,
            originalStart: n.start,
            originalEnd: n.end,
            selectMinutesHeight: y,
          }),
          L = Object.assign({}, n);
        return (
          (L.start = M.start),
          (L.end = M.end),
          (L.height = n.height + g),
          void 0 !== M.paddingTopStart &&
            (L.paddingTopStart = M.paddingTopStart),
          void 0 !== M.paddingBottomEnd &&
            (L.paddingBottomEnd = M.paddingBottomEnd),
          r.a.createElement(
            Se.DraggableCore,
            {
              handle: '.'.concat(I),
              onDrag: function(e, t) {
                if (!s({ event: n })) return !1;
                var a = f.x,
                  r = f.y;
                p({ x: a + t.deltaX, y: r + t.deltaY }), i(we(L)), m(!0);
              },
              onStop: function(e, t) {
                if (!c) return !1;
                p({ x: 0, y: 0 }),
                  setTimeout(function() {
                    return m(!1);
                  }),
                  o({ e: e, ui: t, event: L });
              },
            },
            r.a.createElement(
              'span',
              null,
              t({ isExtending: c, extendedEvent: L })
            )
          )
        );
      };
      (Rt.defaultProps = {
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
        (Rt.propTypes = {
          children: i.a.func.isRequired,
          event: We.isRequired,
          isExtendable: i.a.func,
          onExtend: i.a.func,
          onExtendEnd: i.a.func.isRequired,
          selectMinutes: Ae,
          stepHeight: i.a.number,
          stepMinutes: Ae,
        });
      var At = Rt;
      function Ct() {
        return (Ct =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ft(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var zt = r.a.forwardRef(function(e, t) {
        var n = e.columnId,
          s = e.columnIndex,
          i = e.columnWidths,
          o = e.currentTime,
          u = e.date,
          _ = e.events,
          c = e.isEventDraggable,
          m = e.isEventExtendable,
          h = e.gridHeight,
          f = e.stepMinutes,
          p = e.onDragEnd,
          y = e.onExtendEnd,
          M = e.onSelectEvent,
          g = e.onSelectSlot,
          L = e.onSelectRangeEnd,
          Y = e.selectMinutes,
          v = e.stepDetails,
          D = e.renderEvent,
          k = e.getUpdatedDraggedEvent,
          b = e.minWidth,
          w = e.minWidthEmpty,
          T = e.renderStepDetail,
          S = e.renderSelectSlotIndicator,
          H = e.renderSelectRange,
          j = e.renderEventPaddingTop,
          x = e.renderEventPaddingBottom,
          E = e.stepHeight,
          O = Ft(Object(a.useState)(!0), 2),
          P = O[0],
          W = O[1],
          R = Ft(Object(a.useState)(null), 2),
          A = R[0],
          C = R[1],
          z = fe({
            isSelectable: P,
            stepMinutes: f,
            selectMinutes: Y,
            columnDate: u,
            stepHeight: E,
          }),
          N = z.selectRangeHandlers,
          I = z.isSelectRangeFinished,
          J = z.resetSelectRangeDrag,
          V = z.selectRangeHeight,
          $ = z.selectRangeTop,
          K = z.selectRange,
          Z = Object.keys(_).length,
          X = 100 / Z - 1,
          Q = F('time-grid__current-time-indicator');
        return r.a.createElement(
          'div',
          Ct(
            {
              className: ''.concat(F('time-grid__grid-column')).concat(U(u)),
              key: 'weekView'.concat(u.day()),
              style: { height: h, minWidth: Z * b || w },
              onClick: function(e) {
                if (I)
                  return (
                    J(),
                    L({
                      e: e,
                      start: new Date(K.start),
                      end: new Date(K.end),
                      column: n,
                    }),
                    !1
                  );
                if (!P) return !1;
                var t = q({
                  stepHeight: E,
                  stepMinutes: f,
                  selectMinutes: Y,
                  columnDate: u,
                })(e);
                C(t),
                  g({ e: e, date: new Date(t), column: n }),
                  setTimeout(function() {
                    return C(null);
                  }, 300),
                  J();
              },
            },
            N,
            { ref: t }
          ),
          u.isSame(l()(), 'day') &&
            o &&
            r.a.createElement(
              'div',
              {
                className: Q,
                style: {
                  top: ''.concat(
                    G({ stepMinutes: f, date: o, stepHeight: E }),
                    'px'
                  ),
                },
              },
              r.a.createElement('div', {
                className: ''.concat(Q, '__line-today'),
              })
            ),
          A &&
            r.a.createElement(
              'div',
              {
                className: F('time-grid__select-slot-indicator'),
                style: { top: ''.concat(G({ stepMinutes: f, date: A }), 'px') },
              },
              S
                ? S({
                    time: new Date(A.format('YYYY-MM-DD HH:mm:ss')),
                    column: n,
                  })
                : r.a.createElement(
                    'div',
                    { className: F('time-grid__select-slot-indicator-time') },
                    A.format('h:mma')
                  )
            ),
          0 !== V &&
            P &&
            r.a.createElement(
              'div',
              {
                className: F('time-grid__select-range'),
                style: { height: V, top: $ },
              },
              H ? H({ start: new Date(K.start), end: new Date(K.end) }) : B(K)
            ),
          Object.keys(_).map(function(e) {
            return d()(_, e, []).map(function(t) {
              return r.a.createElement(
                At,
                {
                  key: t.id,
                  event: t,
                  stepHeight: E,
                  stepMinutes: f,
                  selectMinutes: Y,
                  isExtendable: m,
                  onExtend: function() {
                    J(), W(!1);
                  },
                  onExtendEnd: function(e) {
                    setTimeout(function() {
                      return W(!0);
                    }),
                      y(e);
                  },
                },
                function(n) {
                  var a = n.isExtending,
                    o = n.extendedEvent;
                  n.heightChange;
                  return r.a.createElement(
                    Pt,
                    {
                      event: o,
                      isDraggable: c,
                      columnIndex: s,
                      columnWidths: i,
                      stepHeight: E,
                      stepMinutes: f,
                      selectMinutes: Y,
                      onDrag: function() {
                        J(), W(!1);
                      },
                      onDragEnd: function(e) {
                        p(e),
                          setTimeout(function() {
                            return W(!0);
                          });
                      },
                      getUpdatedDraggedEvent: k,
                    },
                    function(n) {
                      var s = n.draggedEvent,
                        i = n.isDragging,
                        o = n.leftChange,
                        d = n.currentColumnWidth,
                        u = n.isDndPlaceholder,
                        l = n.dndClassName,
                        _ = !u && (i || a);
                      return r.a.createElement(
                        'div',
                        {
                          className: ''
                            .concat(l, ' ')
                            .concat(F('time-grid__event-wrapper')),
                          style: {
                            top: s.top - t.paddingTopHeight,
                            width: _ ? ''.concat(d, 'px') : ''.concat(X, '%'),
                            left: _
                              ? ''.concat(o, 'px')
                              : ''.concat(X * (e - 1), '%'),
                          },
                        },
                        t.paddingTopStart &&
                          !u &&
                          r.a.createElement(
                            'div',
                            {
                              className: F(
                                'time-grid__event-padding',
                                'time-grid__event-padding-top'
                              ),
                              style: { height: t.paddingTopHeight },
                            },
                            j(t)
                          ),
                        r.a.createElement(
                          jt,
                          {
                            isExtendable: m,
                            event: s,
                            style: { height: ''.concat(s.height, 'px') },
                            onSelect: M,
                            isSelectable: !i && !a,
                          },
                          D
                        ),
                        t.paddingBottomEnd &&
                          !u &&
                          r.a.createElement(
                            'div',
                            {
                              className: F(
                                'time-grid__event-padding',
                                'time-grid__event-padding-bottom'
                              ),
                              style: { height: t.paddingBottomHeight },
                            },
                            x(t)
                          )
                      );
                    }
                  );
                }
              );
            });
          }),
          v.map(function(e) {
            return r.a.createElement(
              'div',
              {
                key: e.id,
                className: F('time-grid__step-detail-wrapper'),
                style: {
                  top: ''.concat(e.top, 'px'),
                  height: ''.concat(e.height, 'px'),
                },
              },
              T(e)
            );
          })
        );
      });
      (zt.displayName = 'Column'),
        (zt.defaultProps = {
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
          date: l()(),
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
        (zt.propTypes = {
          columnId: i.a.oneOfType([i.a.instanceOf(Date), i.a.number])
            .isRequired,
          columnIndex: i.a.number.isRequired,
          columnWidths: Fe.isRequired,
          currentTime: Oe,
          date: Oe,
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
          selectMinutes: Ae,
          stepDetails: i.a.array,
          stepHeight: i.a.number,
          stepMinutes: Ae,
        });
      var Nt = zt,
        It = function(e) {
          var t = e.firstDay,
            n = e.date,
            a = (function(e) {
              e.firstDay;
              for (
                var t = [], n = e.date.clone().subtract(6, 'days'), a = 0;
                a < 13;
                a += 1
              )
                t.push(n.clone().add(a, 'days'));
              return t;
            })({ firstDay: t, date: n }),
            r = (function(e) {
              var t = e.firstDay,
                n = e.dateDay;
              if (t === n) return 6;
              var a = t - (n + 7);
              return n > t && (a = -1 * (n - t)), 6 + a;
            })({ firstDay: t, dateDay: n.day(), possibleDays: a });
          return a.slice(r, r + 7);
        },
        Jt = function(e) {
          var t = e.children,
            n = e.totalEventColumns,
            a = e.date,
            s = e.minWidth,
            i = e.minWidthEmpty,
            o = e.type;
          return r.a.createElement(
            'div',
            {
              className: ''.concat(F('time-grid__header-column')).concat(U(a)),
              style: { minWidth: ''.concat(n * s || i, 'px') },
            },
            r.a.createElement(
              'div',
              {
                className: ''.concat(
                  F(
                    'time-grid__header-column-container',
                    'time-grid__header-column-'.concat(o)
                  )
                ),
              },
              t
            )
          );
        };
      (Jt.defaultProps = { minWidth: 190, minWidthEmpty: 100 }),
        (Jt.propTypes = {
          children: i.a.node.isRequired,
          date: Oe.isRequired,
          minWidth: i.a.number,
          minWidthEmpty: i.a.number,
          totalEventColumns: i.a.number.isRequired,
          type: i.a.oneOf([C.week, C.groups]).isRequired,
        });
      var Gt = Jt;
      function Ut() {
        return (Ut =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function qt(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              s = Object.keys(e);
            for (a = 0; a < s.length; a++)
              (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var Bt = function(e) {
        var t = e.events,
          n = e.selectedDate,
          s = e.firstDay,
          i = e.isEventDraggable,
          o = e.isEventExtendable,
          d = e.minWidthColumn,
          u = e.minWidthColumnEmpty,
          _ = e.stepMinutes,
          c = e.onDragEnd,
          m = e.onExtendEnd,
          h = e.onSelectEvent,
          f = e.onSelectSlot,
          p = e.onCurrentTimeChange,
          y = e.onSelectRangeEnd,
          M = e.selectMinutes,
          g = e.renderEvent,
          L = e.stepDetails,
          Y = e.renderCorner,
          v = e.renderStepDetail,
          D = e.renderSelectSlotIndicator,
          k = e.renderSelectRange,
          b = e.renderEventPaddingTop,
          w = e.renderEventPaddingBottom,
          T = e.renderHeaders,
          S = e.renderColumns,
          H = e.stepHeight,
          j = e.scrollToTime,
          x = e.visibleEventGroups,
          W = It({ date: l()(n), firstDay: s }),
          A = re(),
          C = A.TimeGridRef,
          F = A.assignRef,
          z = A.elementWidths,
          N = Te({
            events: t,
            stepMinutes: _,
            stepHeight: H,
            stepDetails: L,
            visibleEventGroups: x,
          }),
          I = N.eventsWithSelectedEventGroups,
          J = N.mungedStepDetailsGroups,
          G = N.mungedEvents,
          U = N.mungedStepDetails,
          q = Object(a.useMemo)(
            function() {
              return R(I);
            },
            [I]
          ),
          B = (function(e) {
            var t = Object.assign({}, e);
            return Object.keys(t).reduce(function(e, n) {
              return (
                Object.keys(t[n]).forEach(function(a) {
                  e = E({}, e, O({}, n, E({}, e[n], O({}, a, P(t[n][a])))));
                }),
                e
              );
            }, {});
          })(G);
        return r.a.createElement(bt, {
          ref: C,
          selectedDate: n,
          totalWidth: z.reduce(function(e, t) {
            return e + t;
          }, 0),
          firstDay: s,
          stepMinutes: _,
          onSelectEvent: h,
          onSelectSlot: f,
          onCurrentTimeChange: p,
          selectMinutes: M,
          stepHeight: H,
          scrollToTime:
            'firstEvent' === j
              ? V({ mungedEvents: I, selectedDate: l()(n), hasGroups: !1 })
              : j,
          renderCorner: Y,
          renderHeader: function() {
            return T({
              ColumnComponent: function(e) {
                var t = e.totalEventColumns,
                  n = void 0 === t ? null : t,
                  a = e.date,
                  s = e.columnClass,
                  i = qt(e, ['totalEventColumns', 'date', 'columnClass']),
                  o = l()(new Date(a)).format('YYYY-MM-DD'),
                  _ = n;
                return (
                  null === n && (_ = q[o] ? Object.keys(q[o]).length : 0),
                  r.a.createElement(
                    Gt,
                    Ut(
                      {
                        totalEventColumns: _,
                        date: a,
                        type: s,
                        minWidth: d,
                        minWidthEmpty: u,
                      },
                      i
                    )
                  )
                );
              },
              week: W,
              events: q,
              eventsWithGroups: B,
              stepDetails: J,
              stepDetailsWithGroups: U,
            });
          },
          renderColumns: function(e) {
            var t = e.currentTime,
              n = e.totalGridHeight;
            return S({
              ColumnComponent: function(e) {
                var a = e.date,
                  s = e.columnKey,
                  l = e.columnIndex,
                  p = e.columnId,
                  L = e.eventsForColumn,
                  Y = e.getUpdatedDraggedEvent,
                  T = e.stepDetailsForColumn;
                return r.a.createElement(Nt, {
                  ref: F(s),
                  key: 'weekColumn'.concat(s),
                  events: L,
                  stepDetails: T,
                  date: a,
                  columnId: p,
                  columnWidths: z,
                  columnIndex: l,
                  isEventDraggable: i,
                  isEventExtendable: o,
                  minWidth: d,
                  minWidthEmpty: u,
                  onDragEnd: c,
                  onExtendEnd: m,
                  onSelectEvent: h,
                  onSelectSlot: f,
                  onSelectRangeEnd: y,
                  renderSelectRange: k,
                  stepMinutes: _,
                  selectMinutes: M,
                  stepHeight: H,
                  gridHeight: n,
                  currentTime: t,
                  renderEvent: g,
                  renderEventPaddingTop: b,
                  renderEventPaddingBottom: w,
                  getUpdatedDraggedEvent: Y,
                  renderStepDetail: v,
                  renderSelectSlotIndicator: D,
                });
              },
              week: W,
              events: q,
              eventsWithGroups: B,
              stepDetails: J,
              stepDetailsWithGroups: U,
            });
          },
        });
      };
      (Bt.defaultProps = {
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
        selectedDate: _t,
        selectMinutes: 15,
        scrollToTime: 'firstEvent',
        firstDay: 0,
        visibleEventGroups: null,
      }),
        (Bt.propTypes = {
          events: i.a.arrayOf(We),
          firstDay: Ee,
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
          scrollToTime: Je,
          selectMinutes: Ae,
          selectedDate: xe,
          stepDetails: i.a.arrayOf(Re),
          stepHeight: i.a.number,
          stepMinutes: Ae,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var Vt = Bt;
      function $t() {
        return ($t =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Kt(e, t, n) {
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
      function Zt(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              s = Object.keys(e);
            for (a = 0; a < s.length; a++)
              (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var Xt = function(e) {
          var t = e.events,
            n = e.groupId,
            a = e.selectedDate;
          return d()(t, ''.concat(n, '.').concat(a.format('YYYY-MM-DD')), !1);
        },
        Qt = function(e) {
          var t = e.eventGroups,
            n = e.visibleEventGroups,
            a = e.renderHeader,
            s = e.selectedDate,
            i = Zt(e, [
              'eventGroups',
              'visibleEventGroups',
              'renderHeader',
              'selectedDate',
            ]);
          return r.a.createElement(
            Vt,
            $t({ selectedDate: s, visibleEventGroups: n }, i, {
              renderHeaders: function(e) {
                var i = e.ColumnComponent,
                  o = e.eventsWithGroups;
                return t.map(function(e) {
                  if (n && !n.includes(e.id)) return !1;
                  var t = Xt({ events: o, groupId: e.id, selectedDate: s }),
                    d = Object.keys(t).length;
                  return r.a.createElement(
                    i,
                    {
                      totalEventColumns: d,
                      key: 'dayHeader'.concat(e.id),
                      date: s,
                      columnClass: C.groups,
                    },
                    r.a.createElement(
                      'h2',
                      null,
                      a ? a({ group: e, events: t }) : e.title
                    )
                  );
                });
              },
              renderColumns: function(e) {
                var a = e.ColumnComponent,
                  i = e.eventsWithGroups,
                  o = e.stepDetailsWithGroups;
                return t.map(function(e, d) {
                  if (n && !n.includes(e.id)) return null;
                  var u =
                      Xt({ events: i, groupId: e.id, selectedDate: s }) || {},
                    l = Xt({ events: o, groupId: e.id, selectedDate: s }) || [];
                  return r.a.createElement(a, {
                    date: s,
                    key: 'groupColumn'.concat(d),
                    columnKey: 'groupColumn'.concat(d),
                    columnIndex: d,
                    columnId: e.id,
                    eventsForColumn: u,
                    stepDetailsForColumn: l,
                    getUpdatedDraggedEvent: function(e) {
                      var n = e.event,
                        a = e.columnMoves;
                      return (function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                          'function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                              Object.getOwnPropertySymbols(n).filter(function(
                                e
                              ) {
                                return Object.getOwnPropertyDescriptor(n, e)
                                  .enumerable;
                              })
                            )),
                            a.forEach(function(t) {
                              Kt(e, t, n[t]);
                            });
                        }
                        return e;
                      })({}, n, { group_id: t[d + a].id });
                    },
                  });
                });
              },
            })
          );
        };
      (Qt.defaultProps = {
        selectedDate: l()(),
        renderHeader: null,
        visibleEventGroups: null,
      }),
        (Qt.propTypes = {
          eventGroups: i.a.arrayOf(Ge).isRequired,
          renderHeader: i.a.func,
          selectedDate: Oe,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var en = Qt;
      function tn() {
        return (tn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function nn(e, t, n) {
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
      function an(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              s = Object.keys(e);
            for (a = 0; a < s.length; a++)
              (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var rn = function(e) {
        var t = e.renderHeader,
          n = an(e, ['renderHeader']);
        return r.a.createElement(
          Vt,
          tn({}, n, {
            renderHeaders: function(e) {
              var n = e.week,
                a = e.ColumnComponent,
                s = e.events;
              return n.map(function(e) {
                return r.a.createElement(
                  a,
                  {
                    key: 'dayHeader'.concat(e.date()),
                    date: e,
                    columnClass: C.week,
                  },
                  t
                    ? t({ date: new Date(e), events: s })
                    : r.a.createElement(
                        'h2',
                        null,
                        e.format('dddd'),
                        ', ',
                        e.format('MMM D')
                      )
                );
              });
            },
            renderColumns: function(e) {
              var t = e.ColumnComponent,
                n = e.week,
                a = e.events,
                s = e.stepDetails;
              return n.map(function(e, n) {
                var i = d()(s, e.format('YYYY-MM-DD'), []),
                  o = d()(a, e.format('YYYY-MM-DD'), {}),
                  u = new Date(e.startOf('day').format('YYYY-MM-DD HH:mm:ss'));
                return r.a.createElement(t, {
                  key: 'weekColumn'.concat(e.day()),
                  date: e,
                  columnKey: 'weekColumn'.concat(e.day()),
                  events: o,
                  columnIndex: n,
                  columnId: u,
                  eventsForColumn: o,
                  stepDetailsForColumn: i,
                  getUpdatedDraggedEvent: function(e) {
                    var t = e.event,
                      n = e.columnMoves,
                      a = e.start,
                      r = e.end,
                      s = {};
                    return (
                      void 0 !== t.paddingTopStart &&
                        (s.paddingTopStart = t.paddingTopStart
                          .clone()
                          .add(n, 'days')),
                      void 0 !== t.paddingBottomEnd &&
                        (s.paddingBottomEnd = t.paddingBottomEnd
                          .clone()
                          .add(n, 'days')),
                      (function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                          'function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                              Object.getOwnPropertySymbols(n).filter(function(
                                e
                              ) {
                                return Object.getOwnPropertyDescriptor(n, e)
                                  .enumerable;
                              })
                            )),
                            a.forEach(function(t) {
                              nn(e, t, n[t]);
                            });
                        }
                        return e;
                      })(
                        {},
                        t,
                        {
                          start: a.clone().add(n, 'days'),
                          end: r.clone().add(n, 'days'),
                        },
                        s
                      )
                    );
                  },
                });
              });
            },
          })
        );
      };
      (rn.defaultProps = { renderHeader: null }),
        (rn.propTypes = { renderHeader: i.a.func });
      var sn = rn;
      n(149);
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
      var dn = function(e) {
        var t,
          n = e.view,
          a = e.direction,
          r = e.currentDate,
          s = C.week,
          i = C.groups,
          o = function(e) {
            return r.clone().add(a, e);
          };
        return (on((t = {}), C.month, o('months')),
        on(t, s, o('weeks')),
        on(t, i, o('days')),
        t)[n];
      };
      function un(e, t, n) {
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
      var ln = C.month,
        _n = C.week,
        cn = C.groups,
        mn = function(e) {
          var t,
            n = e.date,
            a = e.view,
            r = e.firstDay,
            s = It({ firstDay: r, date: n });
          return (un((t = {}), ln, n.format('MMMM YYYY')),
          un(t, _n, 'Week of '.concat(s[0].format('MMMM D, YYYY'))),
          un(t, cn, n.format('dddd, MMMM D, YYYY')),
          t)[a];
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
      var fn = C.groups,
        pn = C.week,
        yn = C.month,
        Mn = function(e) {
          var t,
            n = e.view,
            a = e.selectedDate,
            r = e.firstDay;
          return (hn((t = {}), yn, function() {
            return {
              start: a.clone().startOf('month'),
              end: a.clone().endOf('month'),
            };
          }),
          hn(t, pn, function() {
            var e = It({ firstDay: r, date: a });
            return {
              start: e[0].clone().startOf('day'),
              end: e[0]
                .clone()
                .add(6, 'days')
                .endOf('day'),
            };
          }),
          hn(t, fn, function() {
            return {
              start: a.clone().startOf('day'),
              end: a.clone().endOf('day'),
            };
          }),
          t)[n]();
        },
        gn = function(e) {
          var t = e.events,
            n = e.view,
            a = e.selectedDate,
            r = e.firstDay,
            s = Mn({ view: n, selectedDate: a, firstDay: r }),
            i = s.start,
            o = s.end;
          return t.filter(function(e) {
            return l()(e.start).isBetween(i, o, 'minutes', '[]');
          });
        };
      function Ln(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              Yn(e, t, n[t]);
            });
        }
        return e;
      }
      function Yn(e, t, n) {
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
      function vn(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                a || null == o.return || o.return();
              } finally {
                if (r) throw s;
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
      var Dn = function(e) {
          var t = e.cursorDate,
            n = e.fullRange,
            a = e.monthPadding,
            r = e.setFullRange,
            s = l()(new Date(t)),
            i = n.start,
            o = n.end,
            d = kn({
              selectedDate: s,
              startDate: l()(new Date(i)),
              endDate: l()(new Date(o)),
              monthPadding: a,
            });
          if (!!d.fullRange)
            return (
              r({
                start: new Date(d.fullRange.start),
                end: new Date(d.fullRange.end),
              }),
              Ln(
                { shouldFetchMore: !0 },
                {
                  fetchMoreRange: {
                    start: new Date(d.fetchMoreRange.start),
                    end: new Date(d.fetchMoreRange.end),
                  },
                  fullRange: {
                    start: new Date(d.fullRange.start),
                    end: new Date(d.fullRange.end),
                  },
                }
              )
            );
          if (Hn({ selectedDate: s, startDate: i, endDate: o })) {
            var u = jn({ selectedDate: s, monthPadding: a });
            return (
              r({ start: new Date(u.start), end: new Date(u.end) }),
              Ln(
                { isOutsideRange: !0 },
                {
                  fetchMoreRange: { start: null, end: null },
                  fullRange: { start: new Date(u.start), end: new Date(u.end) },
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
        kn = function(e) {
          var t = e.selectedDate,
            n = e.startDate,
            a = e.endDate,
            r = e.monthPadding,
            s = { fetchMoreRange: !1, fullRange: !1 };
          return (
            bn({ selectedDate: t, startDate: n, monthPadding: r }) &&
              (s = wn({ startDate: n, endDate: a, monthPadding: r })),
            Tn({ selectedDate: t, endDate: a, monthPadding: r }) &&
              (s = Sn({ startDate: n, endDate: a, monthPadding: r })),
            s
          );
        },
        bn = function(e) {
          var t = e.selectedDate,
            n = e.startDate,
            a = e.monthPadding;
          return t.isBefore(n.clone().add(a, 'months')) && t.isAfter(n);
        },
        wn = function(e) {
          var t = e.startDate,
            n = e.endDate,
            a = e.monthPadding,
            r = {
              start: t
                .clone()
                .subtract(a, 'months')
                .subtract(1, 'milliseconds'),
              end: t,
            },
            s = !1;
          return (
            r && (s = { start: r.start, end: n }),
            { fetchMoreRange: r, fullRange: s }
          );
        },
        Tn = function(e) {
          var t = e.selectedDate,
            n = e.endDate,
            a = e.monthPadding;
          return t.isAfter(n.clone().subtract(a, 'months')) && t.isBefore(n);
        },
        Sn = function(e) {
          var t = e.startDate,
            n = e.endDate,
            a = e.monthPadding,
            r = {
              start: n,
              end: n
                .clone()
                .startOf('month')
                .add(a, 'months')
                .add(1, 'milliseconds')
                .endOf('month'),
            },
            s = !1;
          return (
            r && (s = { start: t, end: r.end }),
            { fetchMoreRange: r, fullRange: s }
          );
        },
        Hn = function(e) {
          var t = e.selectedDate,
            n = e.startDate,
            a = e.endDate;
          return t.isBefore(n) || t.isAfter(a);
        },
        jn = function(e) {
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
        xn = function(e) {
          var t = e.cursorDate,
            n = e.monthPadding,
            r = void 0 === n ? 1 : n,
            s = e.currentFullRange,
            i = void 0 === s ? null : s,
            o = i || {
              start: l()()
                .subtract(r, 'months')
                .startOf('month'),
              end: l()()
                .add(r, 'months')
                .endOf('month'),
            },
            d = vn(Object(a.useState)(o), 2),
            u = d[0],
            _ = d[1];
          return Dn({
            cursorDate: t,
            fullRange: u,
            monthPadding: r,
            setFullRange: _,
          });
        },
        En = function(e) {
          var t = e.children,
            n = e.firstDay,
            s = e.fetchEventInitialFullRange,
            i = e.fetchEventPadding,
            o = e.onNavigate,
            d = e.onFetchEvents,
            u = e.onViewChange,
            _ = e.selectedDate,
            c = e.events,
            m = e.currentView,
            h = e.views,
            f = xn({ cursorDate: _, monthPadding: i, currentFullRange: s }),
            p = f.fetchMoreRange,
            y = f.fullRange,
            M = f.shouldFetchMore,
            g = f.isOutsideRange;
          Object(a.useEffect)(function() {
            d({ fetchMoreRange: p, fullRange: y, initialFetch: !0 });
          }, []),
            (M || g) &&
              d({ fetchMoreRange: p, fullRange: y, outsideRange: !!g });
          var L = function(e) {
              o(e);
            },
            Y = mn({ date: l()(_), view: m, firstDay: n }),
            v = function() {
              var e = new Date(
                dn({ view: m, direction: 1, currentDate: l()(_) })
              );
              L(e);
            },
            D = function() {
              var e = new Date(
                dn({ view: m, direction: -1, currentDate: l()(_) })
              );
              L(e);
            },
            k = function() {
              L(new Date());
            };
          return t
            ? t({
                onNext: v,
                onPrev: D,
                onToday: k,
                title: Y,
                eventsForView: gn({
                  events: c,
                  view: m,
                  selectedDate: l()(_),
                  firstDay: n,
                }),
              })
            : r.a.createElement(
                'div',
                { className: F('toolbar') },
                r.a.createElement(
                  'div',
                  { className: F('toolbar__views') },
                  h.map(function(e) {
                    return r.a.createElement(
                      'button',
                      {
                        key: e,
                        type: 'button',
                        onClick: function() {
                          return u('string' == typeof e ? e : e.view);
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
                r.a.createElement(
                  'div',
                  { className: F('toolbar__navigate') },
                  r.a.createElement(
                    'button',
                    { type: 'button', onClick: k },
                    'Today'
                  ),
                  r.a.createElement(
                    'button',
                    { type: 'button', onClick: D },
                    'Back'
                  ),
                  r.a.createElement(
                    'button',
                    { type: 'button', onClick: v },
                    'Next'
                  )
                ),
                r.a.createElement('h1', { className: F('toolbar__title') }, Y)
              );
        };
      (En.defaultProps = {
        children: null,
        events: [],
        firstDay: 0,
        fetchEventInitialFullRange: null,
        fetchEventPadding: 1,
        onFetchEvents: function() {
          return null;
        },
        views: Object.values(C),
      }),
        (En.propTypes = {
          children: i.a.func,
          currentView: Pe.isRequired,
          events: i.a.arrayOf(We),
          fetchEventInitialFullRange: Ie,
          fetchEventPadding: i.a.number,
          firstDay: Ee,
          onFetchEvents: i.a.func,
          onNavigate: i.a.func.isRequired,
          onViewChange: i.a.func.isRequired,
          selectedDate: xe.isRequired,
          views: ze,
        });
      var On = En;
      function Pn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              Wn(e, t, n[t]);
            });
        }
        return e;
      }
      function Wn(e, t, n) {
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
      function Rn() {
        return (Rn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var An = function(e) {
        var t,
          n,
          a,
          s = e.events,
          i = e.eventGroups,
          o = (e.fetchEventPadding, e.fetchEventInitialFullRange),
          u = e.firstDay,
          _ = e.forceSixWeeks,
          c = e.isEventDraggable,
          m = e.isEventExtendable,
          h = e.minWidthColumn,
          f = e.minWidthColumnEmpty,
          p = e.onDragEnd,
          y = e.onExtendEnd,
          M = e.onFetchEvents,
          g = e.onNavigate,
          L = e.onSelectMore,
          Y = e.onSelectDate,
          v = e.onSelectEvent,
          D = e.onSelectRangeEnd,
          k = e.onCurrentTimeChange,
          b = e.onSelectSlot,
          w = e.onViewChange,
          T = e.renderCell,
          S = (e.renderEvent, e.renderCorner),
          H = e.renderEventPaddingBottom,
          j = e.renderEventPaddingTop,
          x = e.renderGroupsHeader,
          E = e.renderMonthHeader,
          O = e.renderSelectRange,
          P = e.renderSelectSlotIndicator,
          W = e.renderStepDetail,
          R = e.renderWeekHeader,
          A = e.renderDayGridEvent,
          F = e.renderTimeGridEvent,
          z = e.renderToolbar,
          N = e.scrollToTime,
          I = e.selectedDate,
          J = e.selectMinutes,
          G = e.stepDetails,
          U = e.stepHeight,
          q = e.stepMinutes,
          B = e.style,
          V = e.currentView,
          $ = e.views,
          K = e.visibleEventGroups,
          Z = C.month,
          X = C.week,
          Q = C.groups,
          ee = {
            isEventDraggable: c,
            onDragEnd: p,
            onSelectEvent: v,
            onSelectSlot: b,
            events: s,
            selectedDate: l()(I),
            firstDay: u,
            visibleEventGroups: K,
          },
          te = {
            onSelectMore: L,
            onSelectDate: Y,
            forceSixWeeks: _,
            renderCell: T,
            renderEvent: A,
          },
          ne = {
            isEventExtendable: m,
            onExtendEnd: y,
            onCurrentTimeChange: k,
            onSelectRangeEnd: D,
            stepDetails: G,
            minWidthColumn: h,
            minWidthColumnEmpty: f,
            renderCorner: S,
            renderEventPaddingBottom: H,
            renderEventPaddingTop: j,
            renderSelectRange: O,
            renderStepDetail: W,
            selectMinutes: J,
            stepHeight: U,
            stepMinutes: q,
            renderSelectSlotIndicator: P,
            renderEvent: F,
            scrollToTime: N,
          },
          ae = (Wn(
            (t = {}),
            Z,
            r.a.createElement(vt, Rn({ renderHeader: E }, te, ee))
          ),
          Wn(t, X, r.a.createElement(sn, Rn({ renderHeader: R }, ne, ee))),
          Wn(
            t,
            Q,
            r.a.createElement(
              en,
              Rn({ renderHeader: x, eventGroups: i }, ne, ee)
            )
          ),
          t);
        return r.a.createElement(
          'div',
          { className: 'acuity-calendar', style: B },
          r.a.createElement(
            On,
            {
              events: s,
              fetchEventInitialFullRange: o,
              firstDay: u,
              onNavigate: g,
              onViewChange: w,
              onFetchEvents: M,
              selectedDate: I,
              currentView: V,
              views: $,
            },
            z
          ),
          ((n = function(e) {
            return 'string' == typeof e || e instanceof String;
          }),
          void 0 ===
          (a = $.find(function(e) {
            return !(!n(e) || e !== V) || e.view === V;
          }))
            ? (console.error(
                'You have supplied a view that is not in the "views" prop.'
              ),
              null)
            : Object.values(C).includes(n(a) ? a : a.view) &&
              !d()(a, 'render', !1)
            ? ae[V]
            : 'time' === a.grid
            ? a.render(Pn({}, ne, ee))
            : 'day' === a.grid
            ? a.render(Pn({}, te, ee))
            : null)
        );
      };
      (An.defaultProps = {
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
        selectedDate: _t,
        stepDetails: null,
        stepHeight: null,
        stepMinutes: 30,
        style: {},
        scrollToTime: 'firstEvent',
        views: Object.values(C),
        visibleEventGroups: null,
        isEventDraggable: function() {
          return !0;
        },
        isEventExtendable: function() {
          return !0;
        },
      }),
        (An.propTypes = {
          currentView: Pe.isRequired,
          eventGroups: i.a.arrayOf(Ge),
          events: i.a.arrayOf(We),
          fetchEventInitialFullRange: Ie,
          fetchEventPadding: i.a.number,
          firstDay: Ee,
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
          scrollToTime: Je,
          selectMinutes: Ae,
          selectedDate: xe,
          stepDetails: i.a.arrayOf(Re),
          stepHeight: i.a.number,
          stepMinutes: Ae,
          style: i.a.object,
          views: ze,
          visibleEventGroups: i.a.arrayOf(i.a.number),
        });
      var Cn = An;
      function Fn(e) {
        return (Fn =
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
      var zn = (function() {
          var e = function(e, t, n) {
              var a,
                r = e[t];
              return null == r || 'object' !== Fn(r)
                ? new TypeError(
                    'Invalid '
                      .concat(t, ' prop: ')
                      .concat(r, ' for ')
                      .concat(t, ' in ')
                      .concat(n)
                  )
                : ((a = r),
                  Object.keys(a).some(function(e) {
                    return (
                      !l()(new Date(e)).isValid() || 'number' != typeof a[e]
                    );
                  })
                    ? new TypeError(
                        'Invalid '
                          .concat(t, ' prop: ')
                          .concat(
                            r,
                            " must have a date for \n        each key and a number for each value. e.g. {'2019-02-12': 5, '2019-02-13': 6}"
                          )
                      )
                    : null);
            },
            t = function(t, n, a) {
              return null == t[n] ? null : e(t, n, a);
            };
          return (t.isRequired = e), t;
        })(),
        Nn = '.'.concat('acuity-calendar'),
        In = '.'.concat('acuity-calendar', '__day-grid'),
        Jn = '\n    '
          .concat(
            Nn,
            '__heatmap-header {\n        font-size: 14px;\n    }\n    '
          )
          .concat(
            Nn,
            '__heatmap__cell {\n        background: #26ada0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    '
          )
          .concat(
            In,
            ' {\n        height: 250px;\n        width: 250px;\n    }\n    '
          )
          .concat(
            In,
            '__date-wrapper:hover {\n        background: none;\n    }\n    '
          )
          .concat(
            In,
            '__date-wrapper {\n        position: relative;\n        cursor: default;\n        top: auto;\n        right: auto;\n        margin: 0 auto;\n    }\n    '
          )
          .concat(
            In,
            '__column-header {\n        text-transform: none;\n        padding: 5px;\n    }\n    '
          )
          .concat(
            In,
            '__cell {\n        position: relative;\n        display: flex;\n        align-items: center;\n    }\n    '
          )
          .concat(
            In,
            '__date {\n        text-align: center;\n        position: relative;\n        z-index: 10;\n    }\n'
          );
      function Gn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              Un(e, t, n[t]);
            });
        }
        return e;
      }
      function Un(e, t, n) {
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
      var qn = function(e) {
        var t = e.counts,
          n = e.firstDay,
          s = e.forceSixWeeks,
          i = e.onSelectCell,
          o = e.renderCell,
          u = e.renderHeader,
          _ = e.selectedDate,
          c = Math.max.apply(Math, Object.values(t)),
          m = Object.keys(t).length,
          h = function(e) {
            var n = l()(e).format('YYYY-MM-DD'),
              a = d()(t, n, 0);
            return {
              count: a,
              weight: m > 0 ? Math.round((a / c) * 100) / 100 : 0,
            };
          };
        return r.a.createElement(
          a.Fragment,
          null,
          r.a.createElement('style', null, Jn),
          r.a.createElement(vt, {
            forceSixWeeks: s,
            firstDay: n,
            onSelectSlot: function(e) {
              var t = h(e.date),
                n = t.weight,
                a = t.count;
              i(Gn({}, e, { weight: n, count: a }));
            },
            renderHeader: u,
            renderCell: function(e) {
              var t = h(e.date),
                n = t.weight,
                s = t.count;
              return r.a.createElement(
                a.Fragment,
                null,
                o
                  ? o(Gn({}, e, { weight: n, count: s }))
                  : r.a.createElement('div', {
                      className: F('heatmap__cell'),
                      style: { opacity: n },
                    })
              );
            },
            selectedDate: _,
          })
        );
      };
      (qn.defaultProps = {
        counts: {},
        firstDay: 0,
        forceSixWeeks: !0,
        onSelectCell: function() {
          return null;
        },
        renderCell: null,
        renderHeader: function(e) {
          var t = e.date;
          return r.a.createElement(
            'span',
            { className: F('heatmap-header') },
            t.format('dd')
          );
        },
        selectedDate: new Date(),
      }),
        (qn.propTypes = {
          counts: zn,
          firstDay: Ee,
          forceSixWeeks: i.a.bool,
          onSelectCell: i.a.func,
          renderCell: i.a.func,
          renderHeader: i.a.func,
          selectedDate: xe,
        });
      var Bn = qn;
      n(151);
      function Vn() {
        return (Vn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function $n(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              s = Object.keys(e);
            for (a = 0; a < s.length; a++)
              (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (a = 0; a < s.length; a++)
            (n = s[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var Kn = function(e) {
        var t = e.renderCell,
          n = e.renderHeader,
          a = e.firstDay,
          s = e.totalDays,
          i = $n(e, ['renderCell', 'renderHeader', 'firstDay', 'totalDays']),
          o = {
            firstDate: l()().day(a),
            lastDate: l()()
              .day(a)
              .add(7, 'days'),
            totalColumns: s,
          },
          d = function(e) {
            return {
              full: e.format('dddd'),
              small: e.format('ddd'),
              min: e.format('dd'),
              int: Number(e.format('d')),
            };
          };
        return r.a.createElement(
          'div',
          { className: F('day-list') },
          r.a.createElement(
            lt,
            Vn(
              {
                grid: o,
                renderHeader: function(e) {
                  var t = e.date;
                  return n ? n(d(l()(t))) : t.format('dddd');
                },
                renderCell: function(e) {
                  var n = e.date;
                  return t ? t(d(l()(n))) : null;
                },
              },
              i
            )
          )
        );
      };
      (Kn.defaultProps = {
        renderCell: function() {
          return null;
        },
        renderHeader: null,
        firstDay: 0,
        totalDays: 7,
      }),
        (Kn.propTypes = {
          firstDay: Ee,
          renderCell: i.a.func,
          renderHeader: i.a.func,
          totalDays: i.a.number,
        });
      var Zn = Kn;
      n.d(t, 'CalendarGroups', function() {
        return en;
      }),
        n.d(t, 'CalendarMonth', function() {
          return vt;
        }),
        n.d(t, 'CalendarMonthHeatmap', function() {
          return Bn;
        }),
        n.d(t, 'CalendarWeek', function() {
          return sn;
        }),
        n.d(t, 'DayList', function() {
          return Zn;
        }),
        n.d(t, 'DayGrid', function() {
          return lt;
        }),
        n.d(t, 'TimeGrid', function() {
          return Vt;
        }),
        n.d(t, 'Toolbar', function() {
          return On;
        });
      t.default = Cn;
    },
  ]);
});
//# sourceMappingURL=main.js.map
