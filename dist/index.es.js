import * as an from "react";
import Je, { useMemo as Pr, useRef as Rr, useState as pt, useEffect as Me, useImperativeHandle as oo, useContext as kt, createContext as sn, forwardRef as ao, Children as io, memo as so } from "react";
import { createContext as lo } from "@chakra-ui/react-utils";
import { useDisclosure as co, useControllableState as uo, useUpdateEffect as fo, forwardRef as Sr, Popover as po, chakra as go, useMergeRefs as Tt, Flex as wt, Box as ho, Divider as Gt, InputGroup as mo, Input as vo, InputRightElement as bo, Spinner as ln, useMultiStyleConfig as yo, Wrap as So, WrapItem as _o, PopoverAnchor as xo, PopoverContent as ko, Center as To } from "@chakra-ui/react";
import { pick as wo, isDefined as cn, isEmpty as Rt, runIfFn as Z, isUndefined as Vr, getNextItem as Ro, getPrevItem as Co, getFirstItem as Eo, getLastItem as gt, isObject as Io, omit as qr, memoizedGet as jo, mergeWith as Oo, filterUndefined as un, objectFilter as Ao } from "@chakra-ui/utils";
import Vt from "@emotion/styled";
import { ThemeContext as Po } from "@emotion/react";
var zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vt = { exports: {} }, jr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Bo() {
  if (Yt)
    return jr;
  Yt = 1;
  var e = Je, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, g, h) {
    var v, S = {}, _ = null, T = null;
    h !== void 0 && (_ = "" + h), g.key !== void 0 && (_ = "" + g.key), g.ref !== void 0 && (T = g.ref);
    for (v in g)
      a.call(g, v) && !u.hasOwnProperty(v) && (S[v] = g[v]);
    if (f && f.defaultProps)
      for (v in g = f.defaultProps, g)
        S[v] === void 0 && (S[v] = g[v]);
    return { $$typeof: r, type: f, key: _, ref: T, props: S, _owner: l.current };
  }
  return jr.Fragment = o, jr.jsx = d, jr.jsxs = d, jr;
}
var Or = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function $o() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Je, r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), P = Symbol.iterator, M = "@@iterator";
    function B(n) {
      if (n === null || typeof n != "object")
        return null;
      var p = P && n[P] || n[M];
      return typeof p == "function" ? p : null;
    }
    var W = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(n) {
      {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), x = 1; x < p; x++)
          m[x - 1] = arguments[x];
        le("error", n, m);
      }
    }
    function le(n, p, m) {
      {
        var x = W.ReactDebugCurrentFrame, $ = x.getStackAddendum();
        $ !== "" && (p += "%s", m = m.concat([$]));
        var D = m.map(function(E) {
          return String(E);
        });
        D.unshift("Warning: " + p), Function.prototype.apply.call(console[n], console, D);
      }
    }
    var ze = !1, cr = !1, ur = !1, Qe = !1, we = !1, Be;
    Be = Symbol.for("react.module.reference");
    function fe(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === u || we || n === l || n === h || n === v || Qe || n === T || ze || cr || ur || typeof n == "object" && n !== null && (n.$$typeof === _ || n.$$typeof === S || n.$$typeof === d || n.$$typeof === f || n.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Be || n.getModuleId !== void 0));
    }
    function Se(n, p, m) {
      var x = n.displayName;
      if (x)
        return x;
      var $ = p.displayName || p.name || "";
      return $ !== "" ? m + "(" + $ + ")" : m;
    }
    function Re(n) {
      return n.displayName || "Context";
    }
    function ce(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var p = n;
            return Re(p) + ".Consumer";
          case d:
            var m = n;
            return Re(m._context) + ".Provider";
          case g:
            return Se(n, n.render, "ForwardRef");
          case S:
            var x = n.displayName || null;
            return x !== null ? x : ce(n.type) || "Memo";
          case _: {
            var $ = n, D = $._payload, E = $._init;
            try {
              return ce(E(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, ee = 0, dr, $e, Ce, fr, Ne, Ge, ge;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function Ze() {
      {
        if (ee === 0) {
          dr = console.log, $e = console.info, Ce = console.warn, fr = console.error, Ne = console.group, Ge = console.groupCollapsed, ge = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ee++;
      }
    }
    function _r() {
      {
        if (ee--, ee === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, n, {
              value: dr
            }),
            info: J({}, n, {
              value: $e
            }),
            warn: J({}, n, {
              value: Ce
            }),
            error: J({}, n, {
              value: fr
            }),
            group: J({}, n, {
              value: Ne
            }),
            groupCollapsed: J({}, n, {
              value: Ge
            }),
            groupEnd: J({}, n, {
              value: ge
            })
          });
        }
        ee < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = W.ReactCurrentDispatcher, ue;
    function he(n, p, m) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch ($) {
            var x = $.stack.trim().match(/\n( *(at )?)/);
            ue = x && x[1] || "";
          }
        return `
` + ue + n;
      }
    }
    var ve = !1, oe;
    {
      var xr = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new xr();
    }
    function Ve(n, p) {
      if (!n || ve)
        return "";
      {
        var m = oe.get(n);
        if (m !== void 0)
          return m;
      }
      var x;
      ve = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = N.current, N.current = null, Ze();
      try {
        if (p) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (de) {
              x = de;
            }
            Reflect.construct(n, [], E);
          } else {
            try {
              E.call();
            } catch (de) {
              x = de;
            }
            n.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            x = de;
          }
          n();
        }
      } catch (de) {
        if (de && x && typeof de.stack == "string") {
          for (var C = de.stack.split(`
`), ie = x.stack.split(`
`), K = C.length - 1, U = ie.length - 1; K >= 1 && U >= 0 && C[K] !== ie[U]; )
            U--;
          for (; K >= 1 && U >= 0; K--, U--)
            if (C[K] !== ie[U]) {
              if (K !== 1 || U !== 1)
                do
                  if (K--, U--, U < 0 || C[K] !== ie[U]) {
                    var me = `
` + C[K].replace(" at new ", " at ");
                    return n.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", n.displayName)), typeof n == "function" && oe.set(n, me), me;
                  }
                while (K >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        ve = !1, N.current = D, _r(), Error.prepareStackTrace = $;
      }
      var je = n ? n.displayName || n.name : "", Oe = je ? he(je) : "";
      return typeof n == "function" && oe.set(n, Oe), Oe;
    }
    function pr(n, p, m) {
      return Ve(n, !1);
    }
    function gr(n) {
      var p = n.prototype;
      return !!(p && p.isReactComponent);
    }
    function ae(n, p, m) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ve(n, gr(n));
      if (typeof n == "string")
        return he(n);
      switch (n) {
        case h:
          return he("Suspense");
        case v:
          return he("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case g:
            return pr(n.render);
          case S:
            return ae(n.type, p, m);
          case _: {
            var x = n, $ = x._payload, D = x._init;
            try {
              return ae(D($), p, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, hr = {}, er = W.ReactDebugCurrentFrame;
    function Ye(n) {
      if (n) {
        var p = n._owner, m = ae(n.type, n._source, p ? p.type : null);
        er.setExtraStackFrame(m);
      } else
        er.setExtraStackFrame(null);
    }
    function rr(n, p, m, x, $) {
      {
        var D = Function.call.bind(Ee);
        for (var E in n)
          if (D(n, E)) {
            var C = void 0;
            try {
              if (typeof n[E] != "function") {
                var ie = Error((x || "React class") + ": " + m + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              C = n[E](p, E, x, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              C = K;
            }
            C && !(C instanceof Error) && (Ye($), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", m, E, typeof C), Ye(null)), C instanceof Error && !(C.message in hr) && (hr[C.message] = !0, Ye($), R("Failed %s type: %s", m, C.message), Ye(null));
          }
      }
    }
    var tr = Array.isArray;
    function He(n) {
      return tr(n);
    }
    function Ie(n) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, m = p && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return m;
      }
    }
    function Cr(n) {
      try {
        return kr(n), !1;
      } catch {
        return !0;
      }
    }
    function kr(n) {
      return "" + n;
    }
    function mr(n) {
      if (Cr(n))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ie(n)), kr(n);
    }
    var b = W.ReactCurrentOwner, w = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, z, re, te;
    te = {};
    function ne(n) {
      if (Ee.call(n, "ref")) {
        var p = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Ue(n) {
      if (Ee.call(n, "key")) {
        var p = Object.getOwnPropertyDescriptor(n, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function be(n, p) {
      if (typeof n.ref == "string" && b.current && p && b.current.stateNode !== p) {
        var m = ce(b.current.type);
        te[m] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ce(b.current.type), n.ref), te[m] = !0);
      }
    }
    function I(n, p) {
      {
        var m = function() {
          z || (z = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Q(n, p) {
      {
        var m = function() {
          re || (re = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var H = function(n, p, m, x, $, D, E) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: p,
        ref: m,
        props: E,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function _e(n, p, m, x, $) {
      {
        var D, E = {}, C = null, ie = null;
        m !== void 0 && (mr(m), C = "" + m), Ue(p) && (mr(p.key), C = "" + p.key), ne(p) && (ie = p.ref, be(p, $));
        for (D in p)
          Ee.call(p, D) && !w.hasOwnProperty(D) && (E[D] = p[D]);
        if (n && n.defaultProps) {
          var K = n.defaultProps;
          for (D in K)
            E[D] === void 0 && (E[D] = K[D]);
        }
        if (C || ie) {
          var U = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          C && I(E, U), ie && Q(E, U);
        }
        return H(n, C, ie, $, x, b.current, E);
      }
    }
    var We = W.ReactCurrentOwner, Xe = W.ReactDebugCurrentFrame;
    function G(n) {
      if (n) {
        var p = n._owner, m = ae(n.type, n._source, p ? p.type : null);
        Xe.setExtraStackFrame(m);
      } else
        Xe.setExtraStackFrame(null);
    }
    var qe;
    qe = !1;
    function pe(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function nr() {
      {
        if (We.current) {
          var n = ce(We.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Tr(n) {
      return "";
    }
    var Fe = {};
    function wr(n) {
      {
        var p = nr();
        if (!p) {
          var m = typeof n == "string" ? n : n.displayName || n.name;
          m && (p = `

Check the top-level render call using <` + m + ">.");
        }
        return p;
      }
    }
    function $r(n, p) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var m = wr(p);
        if (Fe[m])
          return;
        Fe[m] = !0;
        var x = "";
        n && n._owner && n._owner !== We.current && (x = " It was passed a child from " + ce(n._owner.type) + "."), G(n), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, x), G(null);
      }
    }
    function xe(n, p) {
      {
        if (typeof n != "object")
          return;
        if (He(n))
          for (var m = 0; m < n.length; m++) {
            var x = n[m];
            pe(x) && $r(x, p);
          }
        else if (pe(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var $ = B(n);
          if (typeof $ == "function" && $ !== n.entries)
            for (var D = $.call(n), E; !(E = D.next()).done; )
              pe(E.value) && $r(E.value, p);
        }
      }
    }
    function Zr(n) {
      {
        var p = n.type;
        if (p == null || typeof p == "string")
          return;
        var m;
        if (typeof p == "function")
          m = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === S))
          m = p.propTypes;
        else
          return;
        if (m) {
          var x = ce(p);
          rr(m, n.props, "prop", x, n);
        } else if (p.PropTypes !== void 0 && !qe) {
          qe = !0;
          var $ = ce(p);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(n) {
      {
        for (var p = Object.keys(n.props), m = 0; m < p.length; m++) {
          var x = p[m];
          if (x !== "children" && x !== "key") {
            G(n), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), G(null);
            break;
          }
        }
        n.ref !== null && (G(n), R("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    var Wr = {};
    function Fr(n, p, m, x, $, D) {
      {
        var E = fe(n);
        if (!E) {
          var C = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Tr();
          ie ? C += ie : C += nr();
          var K;
          n === null ? K = "null" : He(n) ? K = "array" : n !== void 0 && n.$$typeof === r ? (K = "<" + (ce(n.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : K = typeof n, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, C);
        }
        var U = _e(n, p, m, $, D);
        if (U == null)
          return U;
        if (E) {
          var me = p.children;
          if (me !== void 0)
            if (x)
              if (He(me)) {
                for (var je = 0; je < me.length; je++)
                  xe(me[je], n);
                Object.freeze && Object.freeze(me);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(me, n);
        }
        if (Ee.call(p, "key")) {
          var Oe = ce(n), de = Object.keys(p).filter(function(ot) {
            return ot !== "key";
          }), ar = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wr[Oe + ar]) {
            var Lr = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ar, Oe, Lr, Oe), Wr[Oe + ar] = !0;
          }
        }
        return n === a ? et(U) : Zr(U), U;
      }
    }
    function rt(n, p, m) {
      return Fr(n, p, m, !0);
    }
    function or(n, p, m) {
      return Fr(n, p, m, !1);
    }
    var tt = or, nt = rt;
    Or.Fragment = a, Or.jsx = tt, Or.jsxs = nt;
  }()), Or;
}
process.env.NODE_ENV === "production" ? vt.exports = Bo() : vt.exports = $o();
var k = vt.exports;
const [Wo, lr] = lo({
  name: "AutoCompleteContext",
  errorMessage: "useAutoCompleteContext: `context` is undefined. Seems you forgot to wrap all autoomplete components within `<AutoComplete />`"
});
var Kr = function(e, r) {
  for (var o, a = an.Children.toArray(e), l = 0, u = a; l < u.length; l++) {
    var d = u[l];
    if (r(d))
      return d;
    if (!((o = d.props) === null || o === void 0) && o.children) {
      var f = Kr(d.props.children, r);
      if (f)
        return f;
    }
  }
}, Nr = function(e, r) {
  for (var o = 0, a = r.length, l = e.length; o < a; o++, l++)
    e[l] = r[o];
  return e;
}, fn = function(e, r) {
  for (var o, a = an.Children.toArray(e), l = [], u = 0, d = a; u < d.length; u++) {
    var f = d[u];
    r(f) && (l = Nr(Nr([], l), [f])), !((o = f.props) === null || o === void 0) && o.children && (l = Nr(Nr([], l), fn(f.props.children, r)));
  }
  return l;
};
function Ut(e, r, o = 2) {
  function a(S, _) {
    S = " ".repeat(_ - 1) + S.toLowerCase() + " ".repeat(_ - 1);
    let T = new Array(S.length - _ + 1);
    for (let P = 0; P < T.length; P++)
      T[P] = S.slice(P, P + _);
    return T;
  }
  if (!(e != null && e.length) || !(r != null && r.length))
    return 0;
  let l = e.length < r.length ? e : r, u = e.length < r.length ? r : e, d = a(l, o), f = a(u, o), g = new Set(d), h = f.length, v = 0;
  for (let S of f)
    g.delete(S) && v++;
  return v / h;
}
const Ct = (e) => {
  var r;
  return (r = typeof e == "string" || typeof e == "number" ? e : e[Object.keys(e)[0]]) == null ? void 0 : r.toString();
}, Fo = (e, r) => typeof e != "string" || Rt(r) ? e : e.toString().replace(
  new RegExp(zo(r), "gi"),
  (a) => `<mark>${a}</mark>`
), Lo = (e) => fn(
  e,
  (o) => {
    var a;
    return ((a = o == null ? void 0 : o.type) == null ? void 0 : a.displayName) === "AutoCompleteItem";
  }
).map((o) => {
  const a = wo(o.props, ["value", "label", "fixed", "disabled"]), { getValue: l = Ct } = o.props, u = l(a.value);
  return { ...cn(a.label) ? a : { ...a, label: u }, value: u, originalValue: a.value };
}), Mo = () => ({
  bg: "whiteAlpha.100",
  _light: {
    bg: "gray.200"
  }
}), Do = (e, r, o) => (r == null ? void 0 : r.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || (o == null ? void 0 : o.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || Ut(e, r) >= 0.5 || Ut(e, o) >= 0.5;
function zo(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const No = (e, r) => Kr(
  e,
  (a) => {
    var l;
    return ((l = a == null ? void 0 : a.type) == null ? void 0 : l.displayName) === "AutoCompleteItem" && a.props.value === (r == null ? void 0 : r.value);
  }
), Go = (e, r) => Kr(
  e,
  (a) => {
    var l;
    return ((l = a == null ? void 0 : a.type) == null ? void 0 : l.displayName) === "AutoCompleteItem" && a.props.value === (r == null ? void 0 : r.value);
  }
), Vo = (e, r) => cn(
  Kr(e, (o) => {
    var l, u;
    const a = Z(
      ((l = o.props) == null ? void 0 : l.getValue) || Ct,
      ((u = o.props) == null ? void 0 : u.value) || {}
    );
    return r.some((d) => d.value === a);
  })
), Yo = (e, r) => {
  const o = {}, a = {}, { field: l } = e;
  return l && Object.keys(l).forEach((u) => {
    if (u.startsWith("--input") === !1)
      o[u] = l[u];
    else {
      let d = l[u];
      const g = u.replace("--input-", "").replace(/-([a-z])/g, function(h) {
        return h[1].toUpperCase();
      });
      d.indexOf(".") !== -1 && (d = d.substring(d.indexOf(".") + 1)), a[g] = d;
    }
  }), {
    ...r && {
      ...o,
      ...a,
      _focusWithin: e.field._focus,
      pos: "relative",
      minH: 9,
      // px: 3,
      py: 1.5,
      spacing: 3
    },
    cursor: "text",
    h: "fit-content"
    // w: "full",
  };
};
function Ho(e) {
  var mr;
  let {
    prefocusFirstItem: r = !0,
    closeOnBlur: o = !0,
    creatable: a,
    emphasize: l,
    emptyState: u = !0,
    defaultEmptyStateProps: d = {},
    freeSolo: f,
    isReadOnly: g,
    listAllValuesOnFocus: h,
    maxSuggestions: v,
    multiple: S,
    closeOnSelect: _ = !S,
    defaultValue: T,
    defaultValues: P = T ? [T] : [],
    onReady: M,
    defaultIsOpen: B,
    disableFilter: W,
    isLoading: R = !1,
    placement: le = "bottom",
    restoreOnBlurIfEmpty: ze = !f,
    shouldRenderSuggestions: cr = () => !0,
    submitKeys: ur = [],
    suggestWhenEmpty: Qe,
    value: we,
    values: Be = we ? typeof we == "string" ? [we] : [...we] : void 0
  } = e;
  f = f || (S ? !0 : e.freeSolo);
  const { isOpen: fe, onClose: Se, onOpen: Re } = co({ defaultIsOpen: B }), ce = Pr(() => Z(e.children, {
    isOpen: fe,
    onClose: Se,
    onOpen: Re
  }), [e.children, fe]), J = Pr(() => Lo(ce), [ce]), ee = Rr(null), dr = Rr(null), $e = Rr(null), Ce = Rr(null), [fr, Ne] = pt(!1);
  let Ge = "";
  S ? Ge = "" : Vr(P) ? Vr(Be) || (Ge = Be[0]) : Ge = P[0];
  const [ge, O] = pt(Ge ?? ""), Ze = Pr(() => W ? J : J.filter(
    (b) => b.fixed || Z(
      e.filter || Do,
      ge,
      b.value,
      b.label
    ) || fr
  ).filter(
    (b, w) => v ? b.fixed || w < v : !0
  ), [ge, J, fr, v, W]), _r = a ? [{ value: ge, noFilter: !0, creatable: !0 }] : [], N = Pr(() => [...Ze, ..._r], [Ze, _r]), [ue, he] = uo({
    defaultValue: P.map((b) => b == null ? void 0 : b.toString()),
    value: Be,
    onChange: (b) => {
      const w = N.find((re) => re.value === b[0]), z = b.map(
        (re) => N.find((te) => te.value === re)
      );
      Z(
        e.onChange,
        S ? b : b[0],
        S ? z : w
      );
    }
  });
  Me(() => {
    N.length === 0 && !u && Se();
  }, [N.length]);
  const [ve, oe] = pt(
    r ? (mr = J[0]) == null ? void 0 : mr.value : null
  ), xr = e.maxSelections || ue.length + 1, Ve = N.findIndex((b) => b.value === ve), pr = Ro(
    Ve,
    N,
    !!e.rollNavigation
  ), gr = Co(
    Ve,
    N,
    !!e.rollNavigation
  ), ae = Eo(N), Ee = gt(N), hr = !N.some(
    (b) => b.value === ve
  );
  Me(() => {
    var b;
    hr && oe(
      r ? (b = J[0]) == null ? void 0 : b.value : null
    );
  }, [hr]), fo(() => {
    r && oe(ae == null ? void 0 : ae.value);
  }, [ge, ae == null ? void 0 : ae.value]), Me(() => {
    var b;
    !fe && r && oe((b = J[0]) == null ? void 0 : b.value);
  }, [fe]), Me(() => {
    fe && h && Ne(!0);
  }, [fe, h, Ne]), Me(() => {
    const b = J.find((w) => w.value === ve);
    Z(e.onOptionFocus, {
      item: b,
      focusMethod: Ce.current,
      isNewInput: b == null ? void 0 : b.creatable
    });
  }, [ve, e.onOptionFocus]);
  const er = (b) => {
    var re, te;
    const w = N.find((ne) => ne.value === b), z = (w == null ? void 0 : w.label) || (w == null ? void 0 : w.value);
    O(() => S ? "" : z ?? ""), !ue.includes(b) && ue.length < xr && he((ne) => S ? [...ne, b] : [b]), S && ((re = ee.current) == null || re.focus()), e.focusInputOnSelect && ((te = ee.current) == null || te.focus()), Z(e.onSelectOption, {
      item: w,
      selectMethod: Ce.current,
      isNewInput: w == null ? void 0 : w.creatable
    }), w != null && w.creatable && Z(e.onCreateOption, {
      item: qr(w, ["noFilter"]),
      selectMethod: Ce.current
    }), _ && Se();
  }, Ye = (b, w) => {
    var te;
    he((ne) => {
      const Ue = J.find((be) => be.value === b);
      return Z(e.onTagRemoved, b, Ue, ne), ne.filter((be) => be !== b);
    });
    const z = J.find((ne) => ne.value === b), re = (z == null ? void 0 : z.label) || (z == null ? void 0 : z.value);
    ge === re && O(""), w && ((te = ee.current) == null || te.focus());
  }, rr = (b) => {
    var w;
    he([]), b && ((w = ee.current) == null || w.focus());
  }, tr = S ? ue.map((b) => {
    var w;
    return {
      label: ((w = J.find((z) => z.value === (b == null ? void 0 : b.toString()))) == null ? void 0 : w.label) || b,
      onRemove: () => Ye(b)
    };
  }) : [];
  return Me(() => {
    Z(M, { tags: tr });
  }, [ue]), {
    autoCompleteProps: e,
    children: ce,
    filteredList: N,
    filteredResults: Ze,
    focusedValue: ve,
    defaultEmptyStateProps: d,
    getEmptyStateProps: (b) => {
      if (N.every((z) => z.noFilter) && u && !a)
        return typeof u == "boolean" ? b : Z(u, { query: ge });
    },
    getGroupProps: (b) => {
      const w = Vo(b.children, N);
      return {
        divider: {
          hasFirstChild: No(b.children, ae),
          hasLastChild: Go(
            b.children,
            gt(N.filter((z) => Vr(z == null ? void 0 : z.noFilter)))
          )
        },
        group: {
          display: w ? "initial" : "none"
        }
      };
    },
    getInputProps: (b, w) => {
      const { onBlur: z, onChange: re, onFocus: te, onKeyDown: ne, variant: Ue, ...be } = b;
      return {
        wrapper: {
          ref: dr,
          onClick: () => {
            var I;
            (I = ee == null ? void 0 : ee.current) == null || I.focus();
          },
          ...Yo(w, S),
          ...be
        },
        input: {
          isReadOnly: g,
          onFocus: (I) => {
            Z(te, I), e.openOnFocus && !g && Re(), e.selectOnFocus && I.target.select(), h && Ne(!0);
          },
          onBlur: (I) => {
            var _e, We;
            Z(z, I);
            const Q = I.relatedTarget === ($e == null ? void 0 : $e.current) || ((_e = $e.current) == null ? void 0 : _e.contains(I.relatedTarget)), H = (We = dr.current) == null ? void 0 : We.contains(
              I.relatedTarget
            );
            if (!Q && !H && (o && Se(), !ue.includes(I.target.value) && ze)) {
              const Xe = gt(ue), G = J.find(
                (pe) => pe.value === Xe
              ), qe = (G == null ? void 0 : G.label) || (G == null ? void 0 : G.value) || "";
              O(qe);
            }
          },
          onChange: (I) => {
            const Q = I.target.value;
            Z(re, I), O(Q);
            const H = Rt(Q);
            Z(cr, Q) && (!H || Qe) ? Re() : Se(), Ne(!1);
          },
          onKeyDown: (I) => {
            var _e;
            Z(ne, I), Ce.current = "keyboard";
            const { key: Q } = I, H = N[Ve];
            if (["Enter", ...ur].includes(Q)) {
              H && !(H != null && H.disabled) && fe ? er(H == null ? void 0 : H.value) : (_e = ee.current) == null || _e.focus(), I.preventDefault();
              return;
            }
            if (Q === "ArrowDown") {
              fe ? oe(pr == null ? void 0 : pr.value) : Re(), I.preventDefault();
              return;
            }
            if (Q === "ArrowUp") {
              fe ? oe(gr == null ? void 0 : gr.value) : Re(), I.preventDefault();
              return;
            }
            if (Q === "Tab") {
              fe && H && !(H != null && H.disabled) ? er(H == null ? void 0 : H.value) : Se();
              return;
            }
            if (Q === "Home") {
              oe(ae == null ? void 0 : ae.value), I.preventDefault();
              return;
            }
            if (Q === "End") {
              oe(Ee == null ? void 0 : Ee.value), I.preventDefault();
              return;
            }
            Q === "Escape" && (Se(), I.preventDefault());
          },
          value: ge,
          variant: S ? "unstyled" : Ue,
          ...be
        }
      };
    },
    getItemProps: (b, w) => {
      var Tr;
      const {
        _fixed: z,
        _focus: re,
        children: te,
        disabled: ne,
        label: Ue,
        value: be,
        fixed: I,
        getValue: Q = Ct,
        onClick: H,
        onMouseOver: _e,
        sx: We,
        ...Xe
      } = b, G = w ? be : (Tr = Q(be)) == null ? void 0 : Tr.toString(), qe = G === ve, pe = N.findIndex((Fe) => Fe.value === G) >= 0, nr = te || Ue || G;
      return {
        item: {
          ...typeof nr != "string" || !l ? { children: nr } : {
            dangerouslySetInnerHTML: {
              __html: Fo(nr, ge)
            }
          },
          "aria-selected": ue.includes(G),
          "aria-disabled": ne,
          _disabled: { opacity: 0.4, cursor: "not-allowed", userSelect: "none" },
          onClick: (Fe) => {
            var wr;
            Z(H, Fe), ne ? (wr = ee.current) == null || wr.focus() : er(G);
          },
          onMouseOver: (Fe) => {
            Z(_e, Fe), oe(G), Ce.current = "mouse";
          },
          sx: {
            ...We,
            mark: {
              color: "inherit",
              bg: "transparent",
              ...Io(l) ? l : {
                fontWeight: l ? "extrabold" : "inherit"
              }
            }
          },
          ...qe && (re || Mo()),
          ...I && z,
          ...Xe
        },
        root: {
          isValidSuggestion: pe,
          value: G
        }
      };
    },
    inputRef: ee,
    interactionRef: Ce,
    isLoading: R,
    isOpen: fe,
    itemList: J,
    listRef: $e,
    onClose: Se,
    onOpen: Re,
    placement: le,
    query: ge,
    removeItem: Ye,
    resetItems: rr,
    setQuery: O,
    tags: tr,
    value: we,
    values: ue
  };
}
const Uo = Sr(
  (e, r) => {
    const o = Ho(e), {
      children: a,
      isOpen: l,
      onClose: u,
      onOpen: d,
      placement: f,
      resetItems: g,
      removeItem: h
    } = o;
    oo(r, () => ({
      resetItems: g,
      removeItem: h
    }));
    const { matchWidth: v = !0 } = o.autoCompleteProps;
    return /* @__PURE__ */ k.jsx(Wo, { value: o, children: /* @__PURE__ */ k.jsx(
      po,
      {
        isLazy: !0,
        isOpen: l,
        onClose: u,
        onOpen: d,
        autoFocus: !1,
        placement: f,
        closeOnBlur: !0,
        matchWidth: v,
        children: /* @__PURE__ */ k.jsx(
          go.div,
          {
            w: "full",
            ref: r,
            children: a
          }
        )
      }
    ) });
  }
);
Uo.displayName = "AutoComplete";
const Xo = Sr(
  (e, r) => {
    const {
      focusedValue: o,
      getItemProps: a,
      interactionRef: l
    } = lr(), u = Rr(), d = Tt(r, u), f = a(e), { isValidSuggestion: g, value: h } = f.root, v = o === h;
    Me(() => {
      var M;
      v && l.current === "keyboard" && ((M = u == null ? void 0 : u.current) == null || M.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      }));
    }, [v, l]), Me(() => {
      typeof h != "string" && console.warn("wow"), typeof h != "string" && Vr(e.getValue) && console.error(
        "You must define the `getValue` prop, when an Item's value is not a string"
      );
    }, []);
    const { children: S, dangerouslySetInnerHTML: _, ...T } = f.item, P = qr(T, ["groupId"]);
    return g ? /* @__PURE__ */ k.jsx(wt, { ref: d, ...pn, ...P, children: S || /* @__PURE__ */ k.jsx("span", { dangerouslySetInnerHTML: _ }) }) : null;
  }
);
Xo.displayName = "AutoCompleteItem";
const pn = {
  mx: "2",
  px: "2",
  py: "2",
  rounded: "md",
  cursor: "pointer"
};
function qo(e) {
  const { alwaysDisplay: r, children: o, ...a } = e, {
    autoCompleteProps: l,
    getItemProps: u,
    query: d,
    filteredResults: f
  } = lr(), { children: g, ...h } = u(
    {
      ...e,
      value: d,
      children: Z(o, {
        value: d
      })
    },
    !0
  ).item, v = f.some((T) => T.value === d), S = Rt(d) ? r : !0;
  return l.creatable && S && !v ? /* @__PURE__ */ k.jsx(wt, { ...pn, ...h, ...a, children: g || `Add ${d}` }) : null;
}
qo.displayName = "AutoCompleteCreatable";
const Ko = Sr(
  (e, r) => {
    const { children: o, showDivider: a, ...l } = e, u = qr(l, ["groupSibling"]), { getGroupProps: d } = lr(), { group: f } = d(e), g = Zo(e);
    return /* @__PURE__ */ k.jsxs(ho, { ref: r, ...f, ...u, children: [
      /* @__PURE__ */ k.jsx(Gt, { ...g.top }),
      o,
      /* @__PURE__ */ k.jsx(Gt, { ...g.bottom })
    ] });
  }
), Jo = Sr(
  (e, r) => /* @__PURE__ */ k.jsx(wt, { ...Qo, ...e, ref: r })
);
Ko.displayName = "AutoCompleteGroup";
Jo.displayName = "AutoCompleteGroupTitle";
const Qo = {
  ml: 5,
  my: 1,
  fontSize: "xs",
  letterSpacing: "wider",
  fontWeight: "extrabold",
  textTransform: "uppercase"
}, Zo = (e) => {
  const { getGroupProps: r } = lr(), o = e.groupSibling, {
    divider: { hasFirstChild: a, hasLastChild: l }
  } = r(e), u = {
    my: 2,
    borderColor: e.dividerColor
  }, d = {
    ...u,
    mb: 4,
    display: !e.showDivider || a ? "none" : ""
  }, f = {
    ...u,
    display: !e.showDivider || l || o ? "none" : ""
  };
  return { top: d, bottom: f };
}, Xt = Sr(
  (e, r) => {
    const { isLoading: o } = lr(), { loadingIcon: a, ...l } = e;
    return /* @__PURE__ */ k.jsxs(mo, { children: [
      /* @__PURE__ */ k.jsx(vo, { ...l, ref: r }),
      o && /* @__PURE__ */ k.jsx(bo, { children: a || /* @__PURE__ */ k.jsx(ln, {}) })
    ] });
  }
), gn = Sr(
  (e, r) => {
    const {
      autoCompleteProps: o,
      inputRef: a,
      getInputProps: l,
      tags: u,
      setQuery: d,
      value: f,
      itemList: g
    } = lr(), {
      children: h,
      isInvalid: v,
      hidePlaceholder: S,
      ..._
    } = e, { value: T } = _;
    Me(() => {
      if (f !== void 0 && (typeof f == "string" || f instanceof String)) {
        const Qe = g.find((Be) => Be.value === f), we = Qe === void 0 ? f : Qe.label;
        d(we);
      }
    }, [f]), Me(() => {
      T !== void 0 && (typeof T == "string" || T instanceof String) && d(T);
    }, [T]);
    const P = yo("Input", e);
    let { wrapper: M, input: B } = l(_, P);
    const { ref: W, ...R } = M, le = Tt(r, a), ze = Z(h, { tags: u });
    S && (B = {
      ...B,
      placeholder: Array.isArray(ze) && ze.length ? void 0 : B.placeholder
    });
    const cr = /* @__PURE__ */ k.jsx(Xt, { isInvalid: v, ...B, ref: le }), ur = /* @__PURE__ */ k.jsxs(So, { "aria-invalid": v, ...R, ref: W, children: [
      ze,
      /* @__PURE__ */ k.jsx(_o, { as: Xt, ...B, ref: le })
    ] });
    return /* @__PURE__ */ k.jsx(xo, { children: o.multiple ? ur : cr });
  }
);
gn.displayName = "Input";
gn.id = "Input";
function ea() {
  const e = kt(
    Po
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var hn = sn({});
hn.displayName = "ColorModeContext";
function mn() {
  const e = kt(hn);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function ra() {
  const e = mn(), r = ea();
  return { ...e, theme: r };
}
var Et = (...e) => e.filter(Boolean).join(" ");
function yr(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function br(e, ...r) {
  return ta(e) ? e(...r) : e;
}
var ta = (e) => typeof e == "function", Ur = { exports: {} };
Ur.exports;
(function(e, r) {
  var o = 200, a = "__lodash_hash_undefined__", l = 800, u = 16, d = 9007199254740991, f = "[object Arguments]", g = "[object Array]", h = "[object AsyncFunction]", v = "[object Boolean]", S = "[object Date]", _ = "[object Error]", T = "[object Function]", P = "[object GeneratorFunction]", M = "[object Map]", B = "[object Number]", W = "[object Null]", R = "[object Object]", le = "[object Proxy]", ze = "[object RegExp]", cr = "[object Set]", ur = "[object String]", Qe = "[object Undefined]", we = "[object WeakMap]", Be = "[object ArrayBuffer]", fe = "[object DataView]", Se = "[object Float32Array]", Re = "[object Float64Array]", ce = "[object Int8Array]", J = "[object Int16Array]", ee = "[object Int32Array]", dr = "[object Uint8Array]", $e = "[object Uint8ClampedArray]", Ce = "[object Uint16Array]", fr = "[object Uint32Array]", Ne = /[\\^$.*+?()[\]{}|]/g, Ge = /^\[object .+?Constructor\]$/, ge = /^(?:0|[1-9]\d*)$/, O = {};
  O[Se] = O[Re] = O[ce] = O[J] = O[ee] = O[dr] = O[$e] = O[Ce] = O[fr] = !0, O[f] = O[g] = O[Be] = O[v] = O[fe] = O[S] = O[_] = O[T] = O[M] = O[B] = O[R] = O[ze] = O[cr] = O[ur] = O[we] = !1;
  var Ze = typeof zr == "object" && zr && zr.Object === Object && zr, _r = typeof self == "object" && self && self.Object === Object && self, N = Ze || _r || Function("return this")(), ue = r && !r.nodeType && r, he = ue && !0 && e && !e.nodeType && e, ve = he && he.exports === ue, oe = ve && Ze.process, xr = function() {
    try {
      var t = he && he.require && he.require("util").types;
      return t || oe && oe.binding && oe.binding("util");
    } catch {
    }
  }(), Ve = xr && xr.isTypedArray;
  function pr(t, s, c) {
    switch (c.length) {
      case 0:
        return t.call(s);
      case 1:
        return t.call(s, c[0]);
      case 2:
        return t.call(s, c[0], c[1]);
      case 3:
        return t.call(s, c[0], c[1], c[2]);
    }
    return t.apply(s, c);
  }
  function gr(t, s) {
    for (var c = -1, y = Array(t); ++c < t; )
      y[c] = s(c);
    return y;
  }
  function ae(t) {
    return function(s) {
      return t(s);
    };
  }
  function Ee(t, s) {
    return t == null ? void 0 : t[s];
  }
  function hr(t, s) {
    return function(c) {
      return t(s(c));
    };
  }
  var er = Array.prototype, Ye = Function.prototype, rr = Object.prototype, tr = N["__core-js_shared__"], He = Ye.toString, Ie = rr.hasOwnProperty, Cr = function() {
    var t = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), kr = rr.toString, mr = He.call(Object), b = RegExp(
    "^" + He.call(Ie).replace(Ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), w = ve ? N.Buffer : void 0, z = N.Symbol, re = N.Uint8Array;
  w && w.allocUnsafe;
  var te = hr(Object.getPrototypeOf, Object), ne = Object.create, Ue = rr.propertyIsEnumerable, be = er.splice, I = z ? z.toStringTag : void 0, Q = function() {
    try {
      var t = at(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), H = w ? w.isBuffer : void 0, _e = Math.max, We = Date.now, Xe = at(N, "Map"), G = at(Object, "create"), qe = /* @__PURE__ */ function() {
    function t() {
    }
    return function(s) {
      if (!vr(s))
        return {};
      if (ne)
        return ne(s);
      t.prototype = s;
      var c = new t();
      return t.prototype = void 0, c;
    };
  }();
  function pe(t) {
    var s = -1, c = t == null ? 0 : t.length;
    for (this.clear(); ++s < c; ) {
      var y = t[s];
      this.set(y[0], y[1]);
    }
  }
  function nr() {
    this.__data__ = G ? G(null) : {}, this.size = 0;
  }
  function Tr(t) {
    var s = this.has(t) && delete this.__data__[t];
    return this.size -= s ? 1 : 0, s;
  }
  function Fe(t) {
    var s = this.__data__;
    if (G) {
      var c = s[t];
      return c === a ? void 0 : c;
    }
    return Ie.call(s, t) ? s[t] : void 0;
  }
  function wr(t) {
    var s = this.__data__;
    return G ? s[t] !== void 0 : Ie.call(s, t);
  }
  function $r(t, s) {
    var c = this.__data__;
    return this.size += this.has(t) ? 0 : 1, c[t] = G && s === void 0 ? a : s, this;
  }
  pe.prototype.clear = nr, pe.prototype.delete = Tr, pe.prototype.get = Fe, pe.prototype.has = wr, pe.prototype.set = $r;
  function xe(t) {
    var s = -1, c = t == null ? 0 : t.length;
    for (this.clear(); ++s < c; ) {
      var y = t[s];
      this.set(y[0], y[1]);
    }
  }
  function Zr() {
    this.__data__ = [], this.size = 0;
  }
  function et(t) {
    var s = this.__data__, c = je(s, t);
    if (c < 0)
      return !1;
    var y = s.length - 1;
    return c == y ? s.pop() : be.call(s, c, 1), --this.size, !0;
  }
  function Wr(t) {
    var s = this.__data__, c = je(s, t);
    return c < 0 ? void 0 : s[c][1];
  }
  function Fr(t) {
    return je(this.__data__, t) > -1;
  }
  function rt(t, s) {
    var c = this.__data__, y = je(c, t);
    return y < 0 ? (++this.size, c.push([t, s])) : c[y][1] = s, this;
  }
  xe.prototype.clear = Zr, xe.prototype.delete = et, xe.prototype.get = Wr, xe.prototype.has = Fr, xe.prototype.set = rt;
  function or(t) {
    var s = -1, c = t == null ? 0 : t.length;
    for (this.clear(); ++s < c; ) {
      var y = t[s];
      this.set(y[0], y[1]);
    }
  }
  function tt() {
    this.size = 0, this.__data__ = {
      hash: new pe(),
      map: new (Xe || xe)(),
      string: new pe()
    };
  }
  function nt(t) {
    var s = Mr(this, t).delete(t);
    return this.size -= s ? 1 : 0, s;
  }
  function n(t) {
    return Mr(this, t).get(t);
  }
  function p(t) {
    return Mr(this, t).has(t);
  }
  function m(t, s) {
    var c = Mr(this, t), y = c.size;
    return c.set(t, s), this.size += c.size == y ? 0 : 1, this;
  }
  or.prototype.clear = tt, or.prototype.delete = nt, or.prototype.get = n, or.prototype.has = p, or.prototype.set = m;
  function x(t) {
    var s = this.__data__ = new xe(t);
    this.size = s.size;
  }
  function $() {
    this.__data__ = new xe(), this.size = 0;
  }
  function D(t) {
    var s = this.__data__, c = s.delete(t);
    return this.size = s.size, c;
  }
  function E(t) {
    return this.__data__.get(t);
  }
  function C(t) {
    return this.__data__.has(t);
  }
  function ie(t, s) {
    var c = this.__data__;
    if (c instanceof xe) {
      var y = c.__data__;
      if (!Xe || y.length < o - 1)
        return y.push([t, s]), this.size = ++c.size, this;
      c = this.__data__ = new or(y);
    }
    return c.set(t, s), this.size = c.size, this;
  }
  x.prototype.clear = $, x.prototype.delete = D, x.prototype.get = E, x.prototype.has = C, x.prototype.set = ie;
  function K(t, s) {
    var c = lt(t), y = !c && st(t), A = !c && !y && Ft(t), V = !c && !y && !A && Mt(t), X = c || y || A || V, F = X ? gr(t.length, String) : [], q = F.length;
    for (var Ae in t)
      X && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ae == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      A && (Ae == "offset" || Ae == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      V && (Ae == "buffer" || Ae == "byteLength" || Ae == "byteOffset") || // Skip index properties.
      $t(Ae, q)) || F.push(Ae);
    return F;
  }
  function U(t, s, c) {
    (c !== void 0 && !Dr(t[s], c) || c === void 0 && !(s in t)) && Oe(t, s, c);
  }
  function me(t, s, c) {
    var y = t[s];
    (!(Ie.call(t, s) && Dr(y, c)) || c === void 0 && !(s in t)) && Oe(t, s, c);
  }
  function je(t, s) {
    for (var c = t.length; c--; )
      if (Dr(t[c][0], s))
        return c;
    return -1;
  }
  function Oe(t, s, c) {
    s == "__proto__" && Q ? Q(t, s, {
      configurable: !0,
      enumerable: !0,
      value: c,
      writable: !0
    }) : t[s] = c;
  }
  var de = Dn();
  function ar(t) {
    return t == null ? t === void 0 ? Qe : W : I && I in Object(t) ? zn(t) : Un(t);
  }
  function Lr(t) {
    return Er(t) && ar(t) == f;
  }
  function ot(t) {
    if (!vr(t) || Yn(t))
      return !1;
    var s = ut(t) ? b : Ge;
    return s.test(Jn(t));
  }
  function In(t) {
    return Er(t) && Lt(t.length) && !!O[ar(t)];
  }
  function jn(t) {
    if (!vr(t))
      return Hn(t);
    var s = Wt(t), c = [];
    for (var y in t)
      y == "constructor" && (s || !Ie.call(t, y)) || c.push(y);
    return c;
  }
  function Bt(t, s, c, y, A) {
    t !== s && de(s, function(V, X) {
      if (A || (A = new x()), vr(V))
        On(t, s, X, c, Bt, y, A);
      else {
        var F = y ? y(it(t, X), V, X + "", t, s, A) : void 0;
        F === void 0 && (F = V), U(t, X, F);
      }
    }, Dt);
  }
  function On(t, s, c, y, A, V, X) {
    var F = it(t, c), q = it(s, c), Ae = X.get(q);
    if (Ae) {
      U(t, c, Ae);
      return;
    }
    var ye = V ? V(F, q, c + "", t, s, X) : void 0, Ir = ye === void 0;
    if (Ir) {
      var dt = lt(q), ft = !dt && Ft(q), Nt = !dt && !ft && Mt(q);
      ye = q, dt || ft || Nt ? lt(F) ? ye = F : Qn(F) ? ye = Fn(F) : ft ? (Ir = !1, ye = Bn(q)) : Nt ? (Ir = !1, ye = Wn(q)) : ye = [] : Zn(q) || st(q) ? (ye = F, st(F) ? ye = eo(F) : (!vr(F) || ut(F)) && (ye = Nn(q))) : Ir = !1;
    }
    Ir && (X.set(q, ye), A(ye, q, y, V, X), X.delete(q)), U(t, c, ye);
  }
  function An(t, s) {
    return qn(Xn(t, s, zt), t + "");
  }
  var Pn = Q ? function(t, s) {
    return Q(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: to(s),
      writable: !0
    });
  } : zt;
  function Bn(t, s) {
    return t.slice();
  }
  function $n(t) {
    var s = new t.constructor(t.byteLength);
    return new re(s).set(new re(t)), s;
  }
  function Wn(t, s) {
    var c = $n(t.buffer);
    return new t.constructor(c, t.byteOffset, t.length);
  }
  function Fn(t, s) {
    var c = -1, y = t.length;
    for (s || (s = Array(y)); ++c < y; )
      s[c] = t[c];
    return s;
  }
  function Ln(t, s, c, y) {
    var A = !c;
    c || (c = {});
    for (var V = -1, X = s.length; ++V < X; ) {
      var F = s[V], q = void 0;
      q === void 0 && (q = t[F]), A ? Oe(c, F, q) : me(c, F, q);
    }
    return c;
  }
  function Mn(t) {
    return An(function(s, c) {
      var y = -1, A = c.length, V = A > 1 ? c[A - 1] : void 0, X = A > 2 ? c[2] : void 0;
      for (V = t.length > 3 && typeof V == "function" ? (A--, V) : void 0, X && Gn(c[0], c[1], X) && (V = A < 3 ? void 0 : V, A = 1), s = Object(s); ++y < A; ) {
        var F = c[y];
        F && t(s, F, y, V);
      }
      return s;
    });
  }
  function Dn(t) {
    return function(s, c, y) {
      for (var A = -1, V = Object(s), X = y(s), F = X.length; F--; ) {
        var q = X[++A];
        if (c(V[q], q, V) === !1)
          break;
      }
      return s;
    };
  }
  function Mr(t, s) {
    var c = t.__data__;
    return Vn(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
  }
  function at(t, s) {
    var c = Ee(t, s);
    return ot(c) ? c : void 0;
  }
  function zn(t) {
    var s = Ie.call(t, I), c = t[I];
    try {
      t[I] = void 0;
      var y = !0;
    } catch {
    }
    var A = kr.call(t);
    return y && (s ? t[I] = c : delete t[I]), A;
  }
  function Nn(t) {
    return typeof t.constructor == "function" && !Wt(t) ? qe(te(t)) : {};
  }
  function $t(t, s) {
    var c = typeof t;
    return s = s ?? d, !!s && (c == "number" || c != "symbol" && ge.test(t)) && t > -1 && t % 1 == 0 && t < s;
  }
  function Gn(t, s, c) {
    if (!vr(c))
      return !1;
    var y = typeof s;
    return (y == "number" ? ct(c) && $t(s, c.length) : y == "string" && s in c) ? Dr(c[s], t) : !1;
  }
  function Vn(t) {
    var s = typeof t;
    return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? t !== "__proto__" : t === null;
  }
  function Yn(t) {
    return !!Cr && Cr in t;
  }
  function Wt(t) {
    var s = t && t.constructor, c = typeof s == "function" && s.prototype || rr;
    return t === c;
  }
  function Hn(t) {
    var s = [];
    if (t != null)
      for (var c in Object(t))
        s.push(c);
    return s;
  }
  function Un(t) {
    return kr.call(t);
  }
  function Xn(t, s, c) {
    return s = _e(s === void 0 ? t.length - 1 : s, 0), function() {
      for (var y = arguments, A = -1, V = _e(y.length - s, 0), X = Array(V); ++A < V; )
        X[A] = y[s + A];
      A = -1;
      for (var F = Array(s + 1); ++A < s; )
        F[A] = y[A];
      return F[s] = c(X), pr(t, this, F);
    };
  }
  function it(t, s) {
    if (!(s === "constructor" && typeof t[s] == "function") && s != "__proto__")
      return t[s];
  }
  var qn = Kn(Pn);
  function Kn(t) {
    var s = 0, c = 0;
    return function() {
      var y = We(), A = u - (y - c);
      if (c = y, A > 0) {
        if (++s >= l)
          return arguments[0];
      } else
        s = 0;
      return t.apply(void 0, arguments);
    };
  }
  function Jn(t) {
    if (t != null) {
      try {
        return He.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function Dr(t, s) {
    return t === s || t !== t && s !== s;
  }
  var st = Lr(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Lr : function(t) {
    return Er(t) && Ie.call(t, "callee") && !Ue.call(t, "callee");
  }, lt = Array.isArray;
  function ct(t) {
    return t != null && Lt(t.length) && !ut(t);
  }
  function Qn(t) {
    return Er(t) && ct(t);
  }
  var Ft = H || no;
  function ut(t) {
    if (!vr(t))
      return !1;
    var s = ar(t);
    return s == T || s == P || s == h || s == le;
  }
  function Lt(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= d;
  }
  function vr(t) {
    var s = typeof t;
    return t != null && (s == "object" || s == "function");
  }
  function Er(t) {
    return t != null && typeof t == "object";
  }
  function Zn(t) {
    if (!Er(t) || ar(t) != R)
      return !1;
    var s = te(t);
    if (s === null)
      return !0;
    var c = Ie.call(s, "constructor") && s.constructor;
    return typeof c == "function" && c instanceof c && He.call(c) == mr;
  }
  var Mt = Ve ? ae(Ve) : In;
  function eo(t) {
    return Ln(t, Dt(t));
  }
  function Dt(t) {
    return ct(t) ? K(t) : jn(t);
  }
  var ro = Mn(function(t, s, c, y) {
    Bt(t, s, c, y);
  });
  function to(t) {
    return function() {
      return t;
    };
  }
  function zt(t) {
    return t;
  }
  function no() {
    return !1;
  }
  e.exports = ro;
})(Ur, Ur.exports);
var na = Ur.exports;
const sr = /* @__PURE__ */ dn(na);
var oa = (e) => /!(important)?$/.test(e), qt = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, aa = (e, r) => (o) => {
  const a = String(r), l = oa(a), u = qt(a), d = e ? `${e}.${u}` : u;
  let f = yr(o.__cssMap) && d in o.__cssMap ? o.__cssMap[d].varRef : r;
  return f = qt(f), l ? `${f} !important` : f;
};
function It(e) {
  const { scale: r, transform: o, compose: a } = e;
  return (u, d) => {
    var f;
    const g = aa(r, u)(d);
    let h = (f = o == null ? void 0 : o(g, d)) != null ? f : g;
    return a && (h = a(h, d)), h;
  };
}
var Gr = (...e) => (r) => e.reduce((o, a) => a(o), r);
function ke(e, r) {
  return (o) => {
    const a = { property: o, scale: e };
    return a.transform = It({
      scale: e,
      transform: r
    }), a;
  };
}
var ia = ({ rtl: e, ltr: r }) => (o) => o.direction === "rtl" ? e : r;
function sa(e) {
  const { property: r, scale: o, transform: a } = e;
  return {
    scale: o,
    property: ia(r),
    transform: o ? It({
      scale: o,
      compose: a
    }) : a
  };
}
var vn = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function la() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...vn
  ].join(" ");
}
function ca() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...vn
  ].join(" ");
}
var ua = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, da = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function fa(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var pa = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, bt = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, ga = new Set(Object.values(bt)), yt = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), ha = (e) => e.trim();
function ma(e, r) {
  if (e == null || yt.has(e))
    return e;
  if (!(St(e) || yt.has(e)))
    return `url('${e}')`;
  const l = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), u = l == null ? void 0 : l[1], d = l == null ? void 0 : l[2];
  if (!u || !d)
    return e;
  const f = u.includes("-gradient") ? u : `${u}-gradient`, [g, ...h] = d.split(",").map(ha).filter(Boolean);
  if ((h == null ? void 0 : h.length) === 0)
    return e;
  const v = g in bt ? bt[g] : g;
  h.unshift(v);
  const S = h.map((_) => {
    if (ga.has(_))
      return _;
    const T = _.indexOf(" "), [P, M] = T !== -1 ? [_.substr(0, T), _.substr(T + 1)] : [_], B = St(M) ? M : M && M.split(" "), W = `colors.${P}`, R = W in r.__cssMap ? r.__cssMap[W].varRef : P;
    return B ? [
      R,
      ...Array.isArray(B) ? B : [B]
    ].join(" ") : R;
  });
  return `${f}(${S.join(", ")})`;
}
var St = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), va = (e, r) => ma(e, r ?? {});
function ba(e) {
  return /^var\(--.+\)$/.test(e);
}
var ya = (e) => {
  const r = parseFloat(e.toString()), o = e.toString().replace(String(r), "");
  return { unitless: !o, value: r, unit: o };
}, Le = (e) => (r) => `${e}(${r})`, j = {
  filter(e) {
    return e !== "auto" ? e : ua;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : da;
  },
  ring(e) {
    return fa(j.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? la() : e === "auto-gpu" ? ca() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = ya(e);
    return r || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, r) {
    const o = { left: "right", right: "left" };
    return r.direction === "rtl" ? o[e] : e;
  },
  degree(e) {
    if (ba(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: va,
  blur: Le("blur"),
  opacity: Le("opacity"),
  brightness: Le("brightness"),
  contrast: Le("contrast"),
  dropShadow: Le("drop-shadow"),
  grayscale: Le("grayscale"),
  hueRotate: (e) => Le("hue-rotate")(j.degree(e)),
  invert: Le("invert"),
  saturate: Le("saturate"),
  sepia: Le("sepia"),
  bgImage(e) {
    return e == null || St(e) || yt.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: o, divide: a } = (r = pa[e]) != null ? r : {}, l = { flexDirection: e };
    return o && (l[o] = 1), a && (l[a] = 1), l;
  }
}, i = {
  borderWidths: ke("borderWidths"),
  borderStyles: ke("borderStyles"),
  colors: ke("colors"),
  borders: ke("borders"),
  gradients: ke("gradients", j.gradient),
  radii: ke("radii", j.px),
  space: ke("space", Gr(j.vh, j.px)),
  spaceT: ke("space", Gr(j.vh, j.px)),
  degreeT(e) {
    return { property: e, transform: j.degree };
  },
  prop(e, r, o) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: It({ scale: r, transform: o })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: ke("sizes", Gr(j.vh, j.px)),
  sizesT: ke("sizes", Gr(j.vh, j.fraction)),
  shadows: ke("shadows"),
  logical: sa,
  blur: ke("blur", j.blur)
}, Yr = {
  background: i.colors("background"),
  backgroundColor: i.colors("backgroundColor"),
  backgroundImage: i.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: j.bgClip },
  bgSize: i.prop("backgroundSize"),
  bgPosition: i.prop("backgroundPosition"),
  bg: i.colors("background"),
  bgColor: i.colors("backgroundColor"),
  bgPos: i.prop("backgroundPosition"),
  bgRepeat: i.prop("backgroundRepeat"),
  bgAttachment: i.prop("backgroundAttachment"),
  bgGradient: i.gradients("backgroundImage"),
  bgClip: { transform: j.bgClip }
};
Object.assign(Yr, {
  bgImage: Yr.backgroundImage,
  bgImg: Yr.backgroundImage
});
var L = {
  border: i.borders("border"),
  borderWidth: i.borderWidths("borderWidth"),
  borderStyle: i.borderStyles("borderStyle"),
  borderColor: i.colors("borderColor"),
  borderRadius: i.radii("borderRadius"),
  borderTop: i.borders("borderTop"),
  borderBlockStart: i.borders("borderBlockStart"),
  borderTopLeftRadius: i.radii("borderTopLeftRadius"),
  borderStartStartRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: i.radii("borderTopRightRadius"),
  borderStartEndRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: i.borders("borderRight"),
  borderInlineEnd: i.borders("borderInlineEnd"),
  borderBottom: i.borders("borderBottom"),
  borderBlockEnd: i.borders("borderBlockEnd"),
  borderBottomLeftRadius: i.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: i.radii("borderBottomRightRadius"),
  borderLeft: i.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: i.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: i.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: i.borders(["borderLeft", "borderRight"]),
  borderInline: i.borders("borderInline"),
  borderY: i.borders(["borderTop", "borderBottom"]),
  borderBlock: i.borders("borderBlock"),
  borderTopWidth: i.borderWidths("borderTopWidth"),
  borderBlockStartWidth: i.borderWidths("borderBlockStartWidth"),
  borderTopColor: i.colors("borderTopColor"),
  borderBlockStartColor: i.colors("borderBlockStartColor"),
  borderTopStyle: i.borderStyles("borderTopStyle"),
  borderBlockStartStyle: i.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: i.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: i.borderWidths("borderBlockEndWidth"),
  borderBottomColor: i.colors("borderBottomColor"),
  borderBlockEndColor: i.colors("borderBlockEndColor"),
  borderBottomStyle: i.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: i.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: i.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: i.borderWidths("borderInlineStartWidth"),
  borderLeftColor: i.colors("borderLeftColor"),
  borderInlineStartColor: i.colors("borderInlineStartColor"),
  borderLeftStyle: i.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: i.borderStyles("borderInlineStartStyle"),
  borderRightWidth: i.borderWidths("borderRightWidth"),
  borderInlineEndWidth: i.borderWidths("borderInlineEndWidth"),
  borderRightColor: i.colors("borderRightColor"),
  borderInlineEndColor: i.colors("borderInlineEndColor"),
  borderRightStyle: i.borderStyles("borderRightStyle"),
  borderInlineEndStyle: i.borderStyles("borderInlineEndStyle"),
  borderTopRadius: i.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: i.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: i.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: i.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(L, {
  rounded: L.borderRadius,
  roundedTop: L.borderTopRadius,
  roundedTopLeft: L.borderTopLeftRadius,
  roundedTopRight: L.borderTopRightRadius,
  roundedTopStart: L.borderStartStartRadius,
  roundedTopEnd: L.borderStartEndRadius,
  roundedBottom: L.borderBottomRadius,
  roundedBottomLeft: L.borderBottomLeftRadius,
  roundedBottomRight: L.borderBottomRightRadius,
  roundedBottomStart: L.borderEndStartRadius,
  roundedBottomEnd: L.borderEndEndRadius,
  roundedLeft: L.borderLeftRadius,
  roundedRight: L.borderRightRadius,
  roundedStart: L.borderInlineStartRadius,
  roundedEnd: L.borderInlineEndRadius,
  borderStart: L.borderInlineStart,
  borderEnd: L.borderInlineEnd,
  borderTopStartRadius: L.borderStartStartRadius,
  borderTopEndRadius: L.borderStartEndRadius,
  borderBottomStartRadius: L.borderEndStartRadius,
  borderBottomEndRadius: L.borderEndEndRadius,
  borderStartRadius: L.borderInlineStartRadius,
  borderEndRadius: L.borderInlineEndRadius,
  borderStartWidth: L.borderInlineStartWidth,
  borderEndWidth: L.borderInlineEndWidth,
  borderStartColor: L.borderInlineStartColor,
  borderEndColor: L.borderInlineEndColor,
  borderStartStyle: L.borderInlineStartStyle,
  borderEndStyle: L.borderInlineEndStyle
});
var Sa = {
  color: i.colors("color"),
  textColor: i.colors("color"),
  fill: i.colors("fill"),
  stroke: i.colors("stroke")
}, _t = {
  boxShadow: i.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: i.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: i.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(_t, {
  shadow: _t.boxShadow
});
var _a = {
  filter: { transform: j.filter },
  blur: i.blur("--chakra-blur"),
  brightness: i.propT("--chakra-brightness", j.brightness),
  contrast: i.propT("--chakra-contrast", j.contrast),
  hueRotate: i.propT("--chakra-hue-rotate", j.hueRotate),
  invert: i.propT("--chakra-invert", j.invert),
  saturate: i.propT("--chakra-saturate", j.saturate),
  dropShadow: i.propT("--chakra-drop-shadow", j.dropShadow),
  backdropFilter: { transform: j.backdropFilter },
  backdropBlur: i.blur("--chakra-backdrop-blur"),
  backdropBrightness: i.propT(
    "--chakra-backdrop-brightness",
    j.brightness
  ),
  backdropContrast: i.propT("--chakra-backdrop-contrast", j.contrast),
  backdropHueRotate: i.propT(
    "--chakra-backdrop-hue-rotate",
    j.hueRotate
  ),
  backdropInvert: i.propT("--chakra-backdrop-invert", j.invert),
  backdropSaturate: i.propT("--chakra-backdrop-saturate", j.saturate)
}, Xr = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: j.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: i.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: i.space("gap"),
  rowGap: i.space("rowGap"),
  columnGap: i.space("columnGap")
};
Object.assign(Xr, {
  flexDir: Xr.flexDirection
});
var bn = {
  gridGap: i.space("gridGap"),
  gridColumnGap: i.space("gridColumnGap"),
  gridRowGap: i.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, xa = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: j.outline },
  outlineOffset: !0,
  outlineColor: i.colors("outlineColor")
}, Te = {
  width: i.sizesT("width"),
  inlineSize: i.sizesT("inlineSize"),
  height: i.sizes("height"),
  blockSize: i.sizes("blockSize"),
  boxSize: i.sizes(["width", "height"]),
  minWidth: i.sizes("minWidth"),
  minInlineSize: i.sizes("minInlineSize"),
  minHeight: i.sizes("minHeight"),
  minBlockSize: i.sizes("minBlockSize"),
  maxWidth: i.sizes("maxWidth"),
  maxInlineSize: i.sizes("maxInlineSize"),
  maxHeight: i.sizes("maxHeight"),
  maxBlockSize: i.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, r) => {
      var o, a, l;
      return { [`@media screen and (min-width: ${(l = (a = (o = r.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : a.minW) != null ? l : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, r) => {
      var o, a, l;
      return { [`@media screen and (max-width: ${(l = (a = (o = r.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : a._minW) != null ? l : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: i.propT("float", j.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Te, {
  w: Te.width,
  h: Te.height,
  minW: Te.minWidth,
  maxW: Te.maxWidth,
  minH: Te.minHeight,
  maxH: Te.maxHeight,
  overscroll: Te.overscrollBehavior,
  overscrollX: Te.overscrollBehaviorX,
  overscrollY: Te.overscrollBehaviorY
});
var ka = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: i.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: i.prop("listStyleImage")
};
function Ta(e, r, o, a) {
  const l = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < l.length && e; a += 1)
    e = e[l[a]];
  return e === void 0 ? o : e;
}
var wa = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, l, u, d) => {
    if (typeof a > "u")
      return e(a, l, u);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const f = r.get(a);
    if (f.has(l))
      return f.get(l);
    const g = e(a, l, u, d);
    return f.set(l, g), g;
  };
}, Ra = wa(Ta), Ca = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Ea = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, ht = (e, r, o) => {
  const a = {}, l = Ra(e, r, {});
  for (const u in l)
    u in o && o[u] != null || (a[u] = l[u]);
  return a;
}, Ia = {
  srOnly: {
    transform(e) {
      return e === !0 ? Ca : e === "focusable" ? Ea : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, o) => ht(r, `layerStyles.${e}`, o)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, o) => ht(r, `textStyles.${e}`, o)
  },
  apply: {
    processResult: !0,
    transform: (e, r, o) => ht(r, e, o)
  }
}, Br = {
  position: !0,
  pos: i.prop("position"),
  zIndex: i.prop("zIndex", "zIndices"),
  inset: i.spaceT("inset"),
  insetX: i.spaceT(["left", "right"]),
  insetInline: i.spaceT("insetInline"),
  insetY: i.spaceT(["top", "bottom"]),
  insetBlock: i.spaceT("insetBlock"),
  top: i.spaceT("top"),
  insetBlockStart: i.spaceT("insetBlockStart"),
  bottom: i.spaceT("bottom"),
  insetBlockEnd: i.spaceT("insetBlockEnd"),
  left: i.spaceT("left"),
  insetInlineStart: i.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: i.spaceT("right"),
  insetInlineEnd: i.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Br, {
  insetStart: Br.insetInlineStart,
  insetEnd: Br.insetInlineEnd
});
var ja = {
  ring: { transform: j.ring },
  ringColor: i.colors("--chakra-ring-color"),
  ringOffset: i.prop("--chakra-ring-offset-width"),
  ringOffsetColor: i.colors("--chakra-ring-offset-color"),
  ringInset: i.prop("--chakra-ring-inset")
}, Y = {
  margin: i.spaceT("margin"),
  marginTop: i.spaceT("marginTop"),
  marginBlockStart: i.spaceT("marginBlockStart"),
  marginRight: i.spaceT("marginRight"),
  marginInlineEnd: i.spaceT("marginInlineEnd"),
  marginBottom: i.spaceT("marginBottom"),
  marginBlockEnd: i.spaceT("marginBlockEnd"),
  marginLeft: i.spaceT("marginLeft"),
  marginInlineStart: i.spaceT("marginInlineStart"),
  marginX: i.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: i.spaceT("marginInline"),
  marginY: i.spaceT(["marginTop", "marginBottom"]),
  marginBlock: i.spaceT("marginBlock"),
  padding: i.space("padding"),
  paddingTop: i.space("paddingTop"),
  paddingBlockStart: i.space("paddingBlockStart"),
  paddingRight: i.space("paddingRight"),
  paddingBottom: i.space("paddingBottom"),
  paddingBlockEnd: i.space("paddingBlockEnd"),
  paddingLeft: i.space("paddingLeft"),
  paddingInlineStart: i.space("paddingInlineStart"),
  paddingInlineEnd: i.space("paddingInlineEnd"),
  paddingX: i.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: i.space("paddingInline"),
  paddingY: i.space(["paddingTop", "paddingBottom"]),
  paddingBlock: i.space("paddingBlock")
};
Object.assign(Y, {
  m: Y.margin,
  mt: Y.marginTop,
  mr: Y.marginRight,
  me: Y.marginInlineEnd,
  marginEnd: Y.marginInlineEnd,
  mb: Y.marginBottom,
  ml: Y.marginLeft,
  ms: Y.marginInlineStart,
  marginStart: Y.marginInlineStart,
  mx: Y.marginX,
  my: Y.marginY,
  p: Y.padding,
  pt: Y.paddingTop,
  py: Y.paddingY,
  px: Y.paddingX,
  pb: Y.paddingBottom,
  pl: Y.paddingLeft,
  ps: Y.paddingInlineStart,
  paddingStart: Y.paddingInlineStart,
  pr: Y.paddingRight,
  pe: Y.paddingInlineEnd,
  paddingEnd: Y.paddingInlineEnd
});
var Oa = {
  textDecorationColor: i.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: i.shadows("textShadow")
}, Aa = {
  clipPath: !0,
  transform: i.propT("transform", j.transform),
  transformOrigin: !0,
  translateX: i.spaceT("--chakra-translate-x"),
  translateY: i.spaceT("--chakra-translate-y"),
  skewX: i.degreeT("--chakra-skew-x"),
  skewY: i.degreeT("--chakra-skew-y"),
  scaleX: i.prop("--chakra-scale-x"),
  scaleY: i.prop("--chakra-scale-y"),
  scale: i.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: i.degreeT("--chakra-rotate")
}, Pa = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: i.prop("transitionDuration", "transition.duration"),
  transitionProperty: i.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: i.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Ba = {
  fontFamily: i.prop("fontFamily", "fonts"),
  fontSize: i.prop("fontSize", "fontSizes", j.px),
  fontWeight: i.prop("fontWeight", "fontWeights"),
  lineHeight: i.prop("lineHeight", "lineHeights"),
  letterSpacing: i.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, $a = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: i.spaceT("scrollMargin"),
  scrollMarginTop: i.spaceT("scrollMarginTop"),
  scrollMarginBottom: i.spaceT("scrollMarginBottom"),
  scrollMarginLeft: i.spaceT("scrollMarginLeft"),
  scrollMarginRight: i.spaceT("scrollMarginRight"),
  scrollMarginX: i.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: i.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: i.spaceT("scrollPadding"),
  scrollPaddingTop: i.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: i.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: i.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: i.spaceT("scrollPaddingRight"),
  scrollPaddingX: i.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: i.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function yn(e) {
  return yr(e) && e.reference ? e.reference : String(e);
}
var Jr = (e, ...r) => r.map(yn).join(` ${e} `).replace(/calc/g, ""), Kt = (...e) => `calc(${Jr("+", ...e)})`, Jt = (...e) => `calc(${Jr("-", ...e)})`, xt = (...e) => `calc(${Jr("*", ...e)})`, Qt = (...e) => `calc(${Jr("/", ...e)})`, Zt = (e) => {
  const r = yn(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : xt(r, -1);
}, Ar = Object.assign(
  (e) => ({
    add: (...r) => Ar(Kt(e, ...r)),
    subtract: (...r) => Ar(Jt(e, ...r)),
    multiply: (...r) => Ar(xt(e, ...r)),
    divide: (...r) => Ar(Qt(e, ...r)),
    negate: () => Ar(Zt(e)),
    toString: () => e.toString()
  }),
  {
    add: Kt,
    subtract: Jt,
    multiply: xt,
    divide: Qt,
    negate: Zt
  }
);
function Wa(e) {
  const r = parseFloat(e.toString()), o = e.toString().replace(String(r), "");
  return { unitless: !o, value: r, unit: o };
}
function en(e) {
  if (e == null)
    return e;
  const { unitless: r } = Wa(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function Fa(e, r) {
  const o = ["@media screen"];
  return e && o.push("and", `(min-width: ${en(e)})`), r && o.push("and", `(max-width: ${en(r)})`), o.join(" ");
}
var se = {
  hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
  focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
  focusVisible: (e, r) => `${e}:focus-visible ${r}`,
  focusWithin: (e, r) => `${e}:focus-within ${r}`,
  active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
  disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
  invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
  checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
  indeterminate: (e, r) => `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
  readOnly: (e, r) => `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
  expanded: (e, r) => `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
  placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`
}, ir = (e) => Sn((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), Ke = (e) => Sn((r) => e(r, "~ &"), "[data-peer]", ".peer"), Sn = (e, ...r) => r.map(e).join(", "), jt = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: ir(se.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Ke(se.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: ir(se.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Ke(se.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: ir(se.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Ke(se.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: ir(se.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Ke(se.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: ir(se.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Ke(se.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: ir(se.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Ke(se.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: ir(se.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Ke(se.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: ir(se.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Ke(se.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Ke(se.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, La = Object.keys(
  jt
);
function Ma(e, r = []) {
  const o = Object.assign({}, e);
  for (const a of r)
    a in o && delete o[a];
  return o;
}
var Ot = sr(
  {},
  Yr,
  L,
  Sa,
  Xr,
  Te,
  _a,
  ja,
  xa,
  bn,
  Ia,
  Br,
  _t,
  Y,
  $a,
  Ba,
  Oa,
  Aa,
  ka,
  Pa
);
Object.assign({}, Y, Te, Xr, bn, Br);
var Da = [...Object.keys(Ot), ...La], za = { ...Ot, ...jt }, Na = (e) => e in za, Ga = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: o, toArrayValue: a, media: l } = r.__breakpoints, u = {};
  for (const d in e) {
    let f = br(e[d], r);
    if (f == null)
      continue;
    if (f = yr(f) && o(f) ? a(f) : f, !Array.isArray(f)) {
      u[d] = f;
      continue;
    }
    const g = f.slice(0, l.length).length;
    for (let h = 0; h < g; h += 1) {
      const v = l == null ? void 0 : l[h];
      if (!v) {
        u[d] = f[h];
        continue;
      }
      u[v] = u[v] || {}, f[h] != null && (u[v][d] = f[h]);
    }
  }
  return u;
};
function Va(e) {
  const r = [];
  let o = "", a = !1;
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    u === "(" ? (a = !0, o += u) : u === ")" ? (a = !1, o += u) : u === "," && !a ? (r.push(o), o = "") : o += u;
  }
  return o = o.trim(), o && r.push(o), r;
}
function Ya(e) {
  return /^var\(--.+\)$/.test(e);
}
var Ha = (e, r) => e.startsWith("--") && typeof r == "string" && !Ya(r), Ua = (e, r) => {
  var o, a;
  if (r == null)
    return r;
  const l = (g) => {
    var h, v;
    return (v = (h = e.__cssMap) == null ? void 0 : h[g]) == null ? void 0 : v.varRef;
  }, u = (g) => {
    var h;
    return (h = l(g)) != null ? h : g;
  }, [d, f] = Va(r);
  return r = (a = (o = l(d)) != null ? o : u(f)) != null ? a : u(r), r;
};
function Xa(e) {
  const { configs: r = {}, pseudos: o = {}, theme: a } = e, l = (u, d = !1) => {
    var f, g, h;
    const v = br(u, a), S = Ga(v)(a);
    let _ = {};
    for (let T in S) {
      const P = S[T];
      let M = br(P, a);
      T in o && (T = o[T]), Ha(T, M) && (M = Ua(a, M));
      let B = r[T];
      if (B === !0 && (B = { property: T }), yr(M)) {
        _[T] = (f = _[T]) != null ? f : {}, _[T] = sr(
          {},
          _[T],
          l(M, !0)
        );
        continue;
      }
      let W = (h = (g = B == null ? void 0 : B.transform) == null ? void 0 : g.call(B, M, a, v)) != null ? h : M;
      W = B != null && B.processResult ? l(W, !0) : W;
      const R = br(B == null ? void 0 : B.property, a);
      if (!d && (B != null && B.static)) {
        const le = br(B.static, a);
        _ = sr({}, _, le);
      }
      if (R && Array.isArray(R)) {
        for (const le of R)
          _[le] = W;
        continue;
      }
      if (R) {
        R === "&" && yr(W) ? _ = sr({}, _, W) : _[R] = W;
        continue;
      }
      if (yr(W)) {
        _ = sr({}, _, W);
        continue;
      }
      _[T] = W;
    }
    return _;
  };
  return l;
}
var qa = (e) => (r) => Xa({
  theme: r,
  pseudos: jt,
  configs: Ot
})(e);
function Ka(e, r) {
  if (Array.isArray(e))
    return e;
  if (yr(e))
    return r(e);
  if (e != null)
    return [e];
}
function Ja(e, r) {
  for (let o = r + 1; o < e.length; o++)
    if (e[o] != null)
      return o;
  return -1;
}
function Qa(e) {
  const r = e.__breakpoints;
  return function(a, l, u, d) {
    var f, g;
    if (!r)
      return;
    const h = {}, v = Ka(u, r.toArrayValue);
    if (!v)
      return h;
    const S = v.length, _ = S === 1, T = !!a.parts;
    for (let P = 0; P < S; P++) {
      const M = r.details[P], B = r.details[Ja(v, P)], W = Fa(M.minW, B == null ? void 0 : B._minW), R = br((f = a[l]) == null ? void 0 : f[v[P]], d);
      if (R) {
        if (T) {
          (g = a.parts) == null || g.forEach((le) => {
            sr(h, {
              [le]: _ ? R[le] : { [W]: R[le] }
            });
          });
          continue;
        }
        if (!T) {
          _ ? sr(h, R) : h[W] = R;
          continue;
        }
        h[W] = R;
      }
    }
    return h;
  };
}
function Za(e) {
  return (r) => {
    var o;
    const { variant: a, size: l, theme: u } = r, d = Qa(u);
    return sr(
      {},
      br((o = e.baseStyle) != null ? o : {}, r),
      d(e, "sizes", l, r),
      d(e, "variants", a, r)
    );
  };
}
function ei(e) {
  return Ma(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var ri = typeof Element < "u", ti = typeof Map == "function", ni = typeof Set == "function", oi = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Hr(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var o, a, l;
    if (Array.isArray(e)) {
      if (o = e.length, o != r.length)
        return !1;
      for (a = o; a-- !== 0; )
        if (!Hr(e[a], r[a]))
          return !1;
      return !0;
    }
    var u;
    if (ti && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!Hr(a.value[1], r.get(a.value[0])))
          return !1;
      return !0;
    }
    if (ni && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      return !0;
    }
    if (oi && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (o = e.length, o != r.length)
        return !1;
      for (a = o; a-- !== 0; )
        if (e[a] !== r[a])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof r.valueOf == "function")
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof r.toString == "function")
      return e.toString() === r.toString();
    if (l = Object.keys(e), o = l.length, o !== Object.keys(r).length)
      return !1;
    for (a = o; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, l[a]))
        return !1;
    if (ri && e instanceof Element)
      return !1;
    for (a = o; a-- !== 0; )
      if (!((l[a] === "_owner" || l[a] === "__v" || l[a] === "__o") && e.$$typeof) && !Hr(e[l[a]], r[l[a]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var ai = function(r, o) {
  try {
    return Hr(r, o);
  } catch (a) {
    if ((a.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw a;
  }
};
const ii = /* @__PURE__ */ dn(ai);
function _n(e, r = {}) {
  var o;
  const { styleConfig: a, ...l } = r, { theme: u, colorMode: d } = ra(), f = e ? jo(u, `components.${e}`) : void 0, g = a || f, h = Oo(
    { theme: u, colorMode: d },
    (o = g == null ? void 0 : g.defaultProps) != null ? o : {},
    un(qr(l, ["children"]))
  ), v = Rr({});
  if (g) {
    const _ = Za(g)(h);
    ii(v.current, _) || (v.current = _);
  }
  return v.current;
}
function si(e, r = {}) {
  return _n(e, r);
}
function li(e, r = {}) {
  return _n(e, r);
}
var ci = /* @__PURE__ */ new Set([
  ...Da,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), ui = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function di(e) {
  return ui.has(e) || !ci.has(e);
}
function fi(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const o = { ...e };
  for (const a of r)
    if (a != null)
      for (const l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (l in o && delete o[l], o[l] = a[l]);
  return o;
}
var rn, pi = (rn = Vt.default) != null ? rn : Vt, gi = ({ baseStyle: e }) => (r) => {
  const { theme: o, css: a, __css: l, sx: u, ...d } = r, f = Ao(d, (S, _) => Na(_)), g = Z(e, r), h = fi(
    {},
    l,
    g,
    un(f),
    u
  ), v = qa(h)(r.theme);
  return a ? [v, a] : v;
};
function mt(e, r) {
  const { baseStyle: o, ...a } = r ?? {};
  a.shouldForwardProp || (a.shouldForwardProp = di);
  const l = gi({ baseStyle: o }), u = pi(
    e,
    a
  )(l);
  return Je.forwardRef(function(g, h) {
    const { colorMode: v, forced: S } = mn();
    return Je.createElement(u, {
      ref: h,
      "data-theme": S ? v : void 0,
      ...g
    });
  });
}
function hi() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(mt, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(r, o, a) {
      return mt(...a);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(r, o) {
      return e.has(o) || e.set(o, mt(o)), e.get(o);
    }
  });
}
var De = hi();
function Pe(e) {
  return ao(e);
}
var tn = {
  path: /* @__PURE__ */ k.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ k.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ k.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ k.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Qr = Pe((e, r) => {
  const {
    as: o,
    viewBox: a,
    color: l = "currentColor",
    focusable: u = !1,
    children: d,
    className: f,
    __css: g,
    ...h
  } = e, v = Et("chakra-icon", f), S = si("Icon", e), _ = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: l,
    ...g,
    ...S
  }, T = {
    ref: r,
    focusable: u,
    className: v,
    __css: _
  }, P = a ?? tn.viewBox;
  if (o && typeof o != "string")
    return /* @__PURE__ */ k.jsx(De.svg, { as: o, ...T, ...h });
  const M = d ?? tn.path;
  return /* @__PURE__ */ k.jsx(De.svg, { verticalAlign: "middle", viewBox: P, ...T, ...h, children: M });
});
Qr.displayName = "Icon";
function mi(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function vi(e = {}) {
  const {
    name: r,
    strict: o = !0,
    hookName: a = "useContext",
    providerName: l = "Provider",
    errorMessage: u,
    defaultValue: d
  } = e, f = sn(d);
  f.displayName = r;
  function g() {
    var h;
    const v = kt(f);
    if (!v && o) {
      const S = new Error(
        u ?? mi(a, l)
      );
      throw S.name = "ContextError", (h = Error.captureStackTrace) == null || h.call(Error, S, g), S;
    }
    return v;
  }
  return [f.Provider, g, f];
}
var bi = Pe(function(r, o) {
  const {
    spacing: a = "0.5rem",
    spacingX: l,
    spacingY: u,
    children: d,
    justify: f,
    direction: g,
    align: h,
    className: v,
    shouldWrapChildren: S,
    ..._
  } = r, T = Pr(
    () => S ? io.map(d, (P, M) => /* @__PURE__ */ k.jsx(At, { children: P }, M)) : d,
    [d, S]
  );
  return /* @__PURE__ */ k.jsx(De.div, { ref: o, className: Et("chakra-wrap", v), ..._, children: /* @__PURE__ */ k.jsx(
    De.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: f,
        alignItems: h,
        flexDirection: g,
        listStyleType: "none",
        gap: a,
        columnGap: l,
        rowGap: u,
        padding: "0"
      },
      children: T
    }
  ) });
});
bi.displayName = "Wrap";
var At = Pe(function(r, o) {
  const { className: a, ...l } = r;
  return /* @__PURE__ */ k.jsx(
    De.li,
    {
      ref: o,
      __css: { display: "flex", alignItems: "flex-start" },
      className: Et("chakra-wrap__listitem", a),
      ...l
    }
  );
});
At.displayName = "WrapItem";
var Pt = De("div");
Pt.displayName = "Box";
var xn = Pe(function(r, o) {
  const { size: a, centerContent: l = !0, ...u } = r, d = l ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ k.jsx(
    Pt,
    {
      ref: o,
      boxSize: a,
      __css: {
        ...d,
        flexShrink: 0,
        flexGrow: 0
      },
      ...u
    }
  );
});
xn.displayName = "Square";
var yi = Pe(function(r, o) {
  const { size: a, ...l } = r;
  return /* @__PURE__ */ k.jsx(xn, { size: a, ref: o, borderRadius: "9999px", ...l });
});
yi.displayName = "Circle";
var kn = Pe(function(r, o) {
  const { direction: a, align: l, justify: u, wrap: d, basis: f, grow: g, shrink: h, ...v } = r, S = {
    display: "flex",
    flexDirection: a,
    alignItems: l,
    justifyContent: u,
    flexWrap: d,
    flexBasis: f,
    flexGrow: g,
    flexShrink: h
  };
  return /* @__PURE__ */ k.jsx(De.div, { ref: o, __css: S, ...v });
});
kn.displayName = "Flex";
const Si = (e) => {
  const { getEmptyStateProps: r, defaultEmptyStateProps: o } = lr(), a = r(
    /* @__PURE__ */ k.jsx(kn, { ..._i, ...o, children: "No options found!" })
  );
  return /* @__PURE__ */ k.jsx(Pt, { ...e, children: a });
}, _i = {
  fontSize: "sm",
  align: "center",
  justify: "center",
  fontWeight: "bold",
  fontStyle: "italic"
}, nn = [
  "AutoCompleteGroup",
  "AutoCompleteItem",
  "AutoCompleteCreatable"
], xi = (e) => {
  const r = Je.Children.map(e, (l, u) => {
    var d;
    if (((d = l == null ? void 0 : l.type) == null ? void 0 : d.displayName) === "AutoCompleteGroup") {
      const f = Je.Children.toArray(e)[u + 1];
      return Je.cloneElement(l, {
        groupSibling: f ? f.type.displayName === "AutoCompleteGroup" : !1
      });
    }
    return l;
  }), o = Je.Children.toArray(r).filter(
    (l) => {
      var u;
      return !nn.includes(
        (u = l == null ? void 0 : l.type) == null ? void 0 : u.displayName
      );
    }
  );
  return [Je.Children.toArray(r).filter(
    (l) => {
      var u;
      return nn.includes(
        (u = l == null ? void 0 : l.type) == null ? void 0 : u.displayName
      );
    }
  ), o];
}, ki = Sr(
  (e, r) => {
    const { children: o, loadingState: a, ...l } = e, { listRef: u, isLoading: d } = lr(), f = Tt(r, u), [g, h] = xi(o);
    return /* @__PURE__ */ k.jsxs(ko, { ref: f, w: "inherit", ...Ti, ...l, children: [
      d && /* @__PURE__ */ k.jsx(To, { children: a || /* @__PURE__ */ k.jsx(ln, { size: "md" }) }),
      !d && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        g,
        /* @__PURE__ */ k.jsx(Si, {}),
        h
      ] })
    ] });
  }
);
ki.displayName = "AutoCompleteList";
const Ti = {
  py: "4",
  opacity: "0",
  bg: "#232934",
  rounded: "md",
  maxH: "350px",
  border: "none",
  shadow: "base",
  zIndex: "popover",
  overflowY: "auto",
  _light: {
    bg: "#ffffff"
  },
  _focus: {
    boxShadow: "none"
  }
};
var [wi, Tn] = vi({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), wn = Pe((e, r) => {
  const o = li("Tag", e), a = ei(e), l = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...o.container
  };
  return /* @__PURE__ */ k.jsx(wi, { value: o, children: /* @__PURE__ */ k.jsx(De.span, { ref: r, ...a, __css: l }) });
});
wn.displayName = "Tag";
var Rn = Pe((e, r) => {
  const o = Tn();
  return /* @__PURE__ */ k.jsx(De.span, { ref: r, noOfLines: 1, ...e, __css: o.label });
});
Rn.displayName = "TagLabel";
var Ri = Pe((e, r) => /* @__PURE__ */ k.jsx(Qr, { ref: r, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
Ri.displayName = "TagLeftIcon";
var Ci = Pe((e, r) => /* @__PURE__ */ k.jsx(Qr, { ref: r, verticalAlign: "top", marginStart: "0.5rem", ...e }));
Ci.displayName = "TagRightIcon";
var Cn = (e) => /* @__PURE__ */ k.jsx(Qr, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ k.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
Cn.displayName = "TagCloseIcon";
var En = Pe(
  (e, r) => {
    const { isDisabled: o, children: a, ...l } = e, d = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...Tn().closeButton
    };
    return /* @__PURE__ */ k.jsx(
      De.button,
      {
        ref: r,
        "aria-label": "close",
        ...l,
        type: "button",
        disabled: o,
        __css: d,
        children: a || /* @__PURE__ */ k.jsx(Cn, {})
      }
    );
  }
);
En.displayName = "TagCloseButton";
const Bi = so((e) => {
  const { label: r, onRemove: o, disabled: a, ...l } = e;
  return /* @__PURE__ */ k.jsx(At, { children: /* @__PURE__ */ k.jsxs(
    wn,
    {
      borderRadius: "md",
      fontWeight: "normal",
      ...a && on,
      ...l,
      children: [
        /* @__PURE__ */ k.jsx(Rn, { children: r }),
        /* @__PURE__ */ k.jsx(
          En,
          {
            onClick: () => !a && Z(o),
            cursor: "pointer",
            ...a && on
          }
        )
      ]
    }
  ) });
}), on = {
  cursor: "text",
  userSelect: "none",
  opacity: 0.4,
  _focus: { boxShadow: "none" }
};
export {
  Uo as AutoComplete,
  qo as AutoCompleteCreatable,
  Ko as AutoCompleteGroup,
  Jo as AutoCompleteGroupTitle,
  gn as AutoCompleteInput,
  Xo as AutoCompleteItem,
  ki as AutoCompleteList,
  Wo as AutoCompleteProvider,
  Bi as AutoCompleteTag,
  pn as baseItemStyles,
  Ho as useAutoComplete,
  lr as useAutoCompleteContext
};
