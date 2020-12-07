function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof_1(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var interopRequireWildcard = _interopRequireWildcard;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_production_min = createCommonjsModule(function (module, exports) {
var n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;objectAssign(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:objectAssign};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=objectAssign({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return {current:null}};exports.forwardRef=function(a){return {$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";
});

/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

var normalizeTrailingSlash = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.removePathTrailingSlash=removePathTrailingSlash;exports.normalizePathTrailingSlash=void 0;/**
 * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
 */function removePathTrailingSlash(path){return path.endsWith('/')&&path!=='/'?path.slice(0,-1):path;}/**
 * Normalizes the trailing slash of a path according to the `trailingSlash` option
 * in `next.config.js`.
 */const normalizePathTrailingSlash=process.env.__NEXT_TRAILING_SLASH?path=>{if(/\.[^/]+\/?$/.test(path)){return removePathTrailingSlash(path);}else if(path.endsWith('/')){return path;}else {return path+'/';}}:removePathTrailingSlash;exports.normalizePathTrailingSlash=normalizePathTrailingSlash;

});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var interopRequireDefault = _interopRequireDefault;

var _default=getAssetPathFromRoute;// Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...
function getAssetPathFromRoute(route,ext=''){const path=route==='/'?'/index':/^\/index(\/|$)/.test(route)?`/index${route}`:`${route}`;return path+ext;}


var getAssetPathFromRoute_1 = /*#__PURE__*/Object.defineProperty({
	default: _default
}, '__esModule', {value: true});

var requestIdleCallback_1 = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.default=void 0;const requestIdleCallback=typeof self!=='undefined'&&self.requestIdleCallback||function(cb){let start=Date.now();return setTimeout(function(){cb({didTimeout:false,timeRemaining:function(){return Math.max(0,50-(Date.now()-start));}});},1);};var _default=requestIdleCallback;exports.default=_default;

});

var routeLoader = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.markAssetError=markAssetError;exports.isAssetError=isAssetError;exports.getClientBuildManifest=getClientBuildManifest;exports.default=void 0;var _getAssetPathFromRoute=interopRequireDefault(getAssetPathFromRoute_1);var _requestIdleCallback=interopRequireDefault(requestIdleCallback_1);// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY=3800;function withFuture(key,map,generator){let entry=map.get(key);if(entry){if('future'in entry){return entry.future;}return Promise.resolve(entry);}let resolver;const prom=new Promise(resolve=>{resolver=resolve;});map.set(key,entry={resolve:resolver,future:prom});return generator?// eslint-disable-next-line no-sequences
generator().then(value=>(resolver(value),value)):prom;}function hasPrefetch(link){try{link=document.createElement('link');return(// detect IE11 since it supports prefetch but isn't detected
// with relList.support
!!window.MSInputMethodContext&&!!document.documentMode||link.relList.supports('prefetch'));}catch(_unused){return false;}}const canPrefetch=hasPrefetch();function prefetchViaDom(href,as,link){return new Promise((res,rej)=>{if(document.querySelector(`link[rel="prefetch"][href^="${href}"]`)){return res();}link=document.createElement('link');// The order of property assignment here is intentional:
if(as)link.as=as;link.rel=`prefetch`;link.crossOrigin=process.env.__NEXT_CROSS_ORIGIN;link.onload=res;link.onerror=rej;// `href` should always be last:
link.href=href;document.head.appendChild(link);});}const ASSET_LOAD_ERROR=Symbol('ASSET_LOAD_ERROR');// TODO: unexport
function markAssetError(err){return Object.defineProperty(err,ASSET_LOAD_ERROR,{});}function isAssetError(err){return err&&ASSET_LOAD_ERROR in err;}function appendScript(src,script){return new Promise((resolve,reject)=>{script=document.createElement('script');// The order of property assignment here is intentional.
// 1. Setup success/failure hooks in case the browser synchronously
//    executes when `src` is set.
script.onload=resolve;script.onerror=()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)));// 2. Configure the cross-origin attribute before setting `src` in case the
//    browser begins to fetch.
script.crossOrigin=process.env.__NEXT_CROSS_ORIGIN;// 3. Finally, set the source and inject into the DOM in case the child
//    must be appended for fetching to start.
script.src=src;document.body.appendChild(script);});}function idleTimeout(ms,err){return new Promise((_resolve,reject)=>(0, _requestIdleCallback.default)(()=>setTimeout(()=>reject(err),ms)));}// TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.
function getClientBuildManifest(){if(self.__BUILD_MANIFEST){return Promise.resolve(self.__BUILD_MANIFEST);}const onBuildManifest=new Promise(resolve=>{// Mandatory because this is not concurrent safe:
const cb=self.__BUILD_MANIFEST_CB;self.__BUILD_MANIFEST_CB=()=>{resolve(self.__BUILD_MANIFEST);cb&&cb();};});return Promise.race([onBuildManifest,idleTimeout(MS_MAX_IDLE_DELAY,markAssetError(new Error('Failed to load client build manifest')))]);}function getFilesForRoute(assetPrefix,route){if(process.env.NODE_ENV==='development'){return Promise.resolve({scripts:[assetPrefix+'/_next/static/chunks/pages'+encodeURI((0, _getAssetPathFromRoute.default)(route,'.js'))],// Styles are handled by `style-loader` in development:
css:[]});}return getClientBuildManifest().then(manifest=>{if(!(route in manifest)){throw markAssetError(new Error(`Failed to lookup route: ${route}`));}const allFiles=manifest[route].map(entry=>assetPrefix+'/_next/'+encodeURI(entry));return {scripts:allFiles.filter(v=>v.endsWith('.js')),css:allFiles.filter(v=>v.endsWith('.css'))};});}function createRouteLoader(assetPrefix){const entrypoints=new Map();const loadedScripts=new Map();const styleSheets=new Map();const routes=new Map();function maybeExecuteScript(src){let prom=loadedScripts.get(src);if(prom){return prom;}// Skip executing script if it's already in the DOM:
if(document.querySelector(`script[src^="${src}"]`)){return Promise.resolve();}loadedScripts.set(src,prom=appendScript(src));return prom;}function fetchStyleSheet(href){let prom=styleSheets.get(href);if(prom){return prom;}styleSheets.set(href,prom=fetch(href).then(res=>{if(!res.ok){throw new Error(`Failed to load stylesheet: ${href}`);}return res.text().then(text=>({href:href,content:text}));}).catch(err=>{throw markAssetError(err);}));return prom;}return {whenEntrypoint(route){return withFuture(route,entrypoints);},onEntrypoint(route,execute){Promise.resolve(execute).then(fn=>fn()).then(exports=>({component:exports&&exports.default||exports,exports:exports}),err=>({error:err})).then(input=>{const old=entrypoints.get(route);entrypoints.set(route,input);if(old&&'resolve'in old)old.resolve(input);});},loadRoute(route){return withFuture(route,routes,async()=>{try{const{scripts,css}=await getFilesForRoute(assetPrefix,route);const[,styles]=await Promise.all([entrypoints.has(route)?[]:Promise.all(scripts.map(maybeExecuteScript)),Promise.all(css.map(fetchStyleSheet))]);const entrypoint=await Promise.race([this.whenEntrypoint(route),idleTimeout(MS_MAX_IDLE_DELAY,markAssetError(new Error(`Route did not complete loading: ${route}`)))]);const res=Object.assign({styles},entrypoint);return 'error'in entrypoint?entrypoint:res;}catch(err){return {error:err};}});},prefetch(route){// https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
// License: Apache 2.0
let cn;if(cn=navigator.connection){// Don't prefetch if using 2G or if Save-Data is enabled.
if(cn.saveData||/2g/.test(cn.effectiveType))return Promise.resolve();}return getFilesForRoute(assetPrefix,route).then(output=>Promise.all(canPrefetch?output.scripts.map(script=>prefetchViaDom(script,'script')):[])).then(()=>{(0, _requestIdleCallback.default)(()=>this.loadRoute(route));}).catch(// swallow prefetch errors
()=>{});}};}var _default=createRouteLoader;exports.default=_default;

});

var normalizePathSep_1=normalizePathSep;var denormalizePagePath_2=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}


var denormalizePagePath_1 = /*#__PURE__*/Object.defineProperty({
	normalizePathSep: normalizePathSep_1,
	denormalizePagePath: denormalizePagePath_2
}, '__esModule', {value: true});

var _default$1=mitt;/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt(){const all=Object.create(null);return {on(type,handler){(all[type]||(all[type]=[])).push(handler);},off(type,handler){if(all[type]){all[type].splice(all[type].indexOf(handler)>>>0,1);}},emit(type,...evts){// eslint-disable-next-line array-callback-return
(all[type]||[]).slice().map(handler=>{handler(...evts);});}};}


var mitt_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$1
}, '__esModule', {value: true});

var searchParamsToUrlQuery_1=searchParamsToUrlQuery;var urlQueryToSearchParams_1=urlQueryToSearchParams;var assign_1=assign;function searchParamsToUrlQuery(searchParams){const query={};searchParams.forEach((value,key)=>{if(typeof query[key]==='undefined'){query[key]=value;}else if(Array.isArray(query[key])){query[key].push(value);}else {query[key]=[query[key],value];}});return query;}function stringifyUrlQueryParam(param){if(typeof param==='string'||typeof param==='number'&&!isNaN(param)||typeof param==='boolean'){return String(param);}else {return '';}}function urlQueryToSearchParams(urlQuery){const result=new URLSearchParams();Object.entries(urlQuery).forEach(([key,value])=>{if(Array.isArray(value)){value.forEach(item=>result.append(key,stringifyUrlQueryParam(item)));}else {result.set(key,stringifyUrlQueryParam(value));}});return result;}function assign(target,...searchParamsList){searchParamsList.forEach(searchParams=>{Array.from(searchParams.keys()).forEach(key=>target.delete(key));searchParams.forEach((value,key)=>target.append(key,value));});return target;}


var querystring = /*#__PURE__*/Object.defineProperty({
	searchParamsToUrlQuery: searchParamsToUrlQuery_1,
	urlQueryToSearchParams: urlQueryToSearchParams_1,
	assign: assign_1
}, '__esModule', {value: true});

var formatUrl_2=formatUrl;var querystring$1=_interopRequireWildcard$1(querystring);function _getRequireWildcardCache$1(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache$1=function(){return cache;};return cache;}function _interopRequireWildcard$1(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return {default:obj};}var cache=_getRequireWildcardCache$1();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else {newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols=/https?|ftp|gopher|file/;function formatUrl(urlObj){let{auth,hostname}=urlObj;let protocol=urlObj.protocol||'';let pathname=urlObj.pathname||'';let hash=urlObj.hash||'';let query=urlObj.query||'';let host=false;auth=auth?encodeURIComponent(auth).replace(/%3A/i,':')+'@':'';if(urlObj.host){host=auth+urlObj.host;}else if(hostname){host=auth+(~hostname.indexOf(':')?`[${hostname}]`:hostname);if(urlObj.port){host+=':'+urlObj.port;}}if(query&&typeof query==='object'){query=String(querystring$1.urlQueryToSearchParams(query));}let search=urlObj.search||query&&`?${query}`||'';if(protocol&&protocol.substr(-1)!==':')protocol+=':';if(urlObj.slashes||(!protocol||slashedProtocols.test(protocol))&&host!==false){host='//'+(host||'');if(pathname&&pathname[0]!=='/')pathname='/'+pathname;}else if(!host){host='';}if(hash&&hash[0]!=='#')hash='#'+hash;if(search&&search[0]!=='?')search='?'+search;pathname=pathname.replace(/[?#]/g,encodeURIComponent);search=search.replace('#','%23');return `${protocol}${host}${pathname}${search}${hash}`;}


var formatUrl_1 = /*#__PURE__*/Object.defineProperty({
	formatUrl: formatUrl_2
}, '__esModule', {value: true});

var utils = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.execOnce=execOnce;exports.getLocationOrigin=getLocationOrigin;exports.getURL=getURL;exports.getDisplayName=getDisplayName;exports.isResSent=isResSent;exports.loadGetInitialProps=loadGetInitialProps;exports.formatWithValidation=formatWithValidation;exports.ST=exports.SP=exports.urlObjectKeys=void 0;/**
 * Utils
 */function execOnce(fn){let used=false;let result;return (...args)=>{if(!used){used=true;result=fn(...args);}return result;};}function getLocationOrigin(){const{protocol,hostname,port}=window.location;return `${protocol}//${hostname}${port?':'+port:''}`;}function getURL(){const{href}=window.location;const origin=getLocationOrigin();return href.substring(origin.length);}function getDisplayName(Component){return typeof Component==='string'?Component:Component.displayName||Component.name||'Unknown';}function isResSent(res){return res.finished||res.headersSent;}async function loadGetInitialProps(App,ctx){if(process.env.NODE_ENV!=='production'){var _App$prototype;if((_App$prototype=App.prototype)==null?void 0:_App$prototype.getInitialProps){const message=`"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;throw new Error(message);}}// when called from _app `ctx` is nested in `ctx`
const res=ctx.res||ctx.ctx&&ctx.ctx.res;if(!App.getInitialProps){if(ctx.ctx&&ctx.Component){// @ts-ignore pageProps default
return {pageProps:await loadGetInitialProps(ctx.Component,ctx.ctx)};}return {};}const props=await App.getInitialProps(ctx);if(res&&isResSent(res)){return props;}if(!props){const message=`"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;throw new Error(message);}if(process.env.NODE_ENV!=='production'){if(Object.keys(props).length===0&&!ctx.ctx){console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);}}return props;}const urlObjectKeys=['auth','hash','host','hostname','href','path','pathname','port','protocol','query','search','slashes'];exports.urlObjectKeys=urlObjectKeys;function formatWithValidation(url){if(process.env.NODE_ENV==='development'){if(url!==null&&typeof url==='object'){Object.keys(url).forEach(key=>{if(urlObjectKeys.indexOf(key)===-1){console.warn(`Unknown key passed via urlObject into url.format: ${key}`);}});}}return (0, formatUrl_1.formatUrl)(url);}const SP=typeof performance!=='undefined';exports.SP=SP;const ST=SP&&typeof performance.mark==='function'&&typeof performance.measure==='function';exports.ST=ST;

});

var _default$2=escapePathDelimiters;// escape delimiters used by path-to-regexp
function escapePathDelimiters(segment){return segment.replace(/[/#?]/g,char=>encodeURIComponent(char));}


var escapePathDelimiters_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$2
}, '__esModule', {value: true});

var isDynamicRoute_1=isDynamicRoute;// Identify /[param]/ in route string
const TEST_ROUTE=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(route){return TEST_ROUTE.test(route);}


var isDynamic = /*#__PURE__*/Object.defineProperty({
	isDynamicRoute: isDynamicRoute_1
}, '__esModule', {value: true});

var parseRelativeUrl_2=parseRelativeUrl;/**
 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
 * (e.g. `./hello`) then at least base must be.
 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
 * the current origin will be parsed as relative
 */function parseRelativeUrl(url,base){const globalBase=new URL(typeof window==='undefined'?'http://n':(0, utils.getLocationOrigin)());const resolvedBase=base?new URL(base,globalBase):globalBase;const{pathname,searchParams,search,hash,href,origin}=new URL(url,resolvedBase);if(origin!==globalBase.origin){throw new Error('invariant: invalid relative URL');}return {pathname,query:(0, querystring.searchParamsToUrlQuery)(searchParams),search,hash,href:href.slice(globalBase.origin.length)};}


var parseRelativeUrl_1 = /*#__PURE__*/Object.defineProperty({
	parseRelativeUrl: parseRelativeUrl_2
}, '__esModule', {value: true});

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
var parse_1 = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
var compile_1 = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
var tokensToFunction_1 = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
var match_1 = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
var regexpToFunction_1 = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
var tokensToRegexp_1 = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
var pathToRegexp_2 = pathToRegexp;


var pathToRegexp_1 = /*#__PURE__*/Object.defineProperty({
	parse: parse_1,
	compile: compile_1,
	tokensToFunction: tokensToFunction_1,
	match: match_1,
	regexpToFunction: regexpToFunction_1,
	tokensToRegexp: tokensToRegexp_1,
	pathToRegexp: pathToRegexp_2
}, '__esModule', {value: true});

var pathMatch = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.pathToRegexp=exports.default=exports.customRouteMatcherOptions=exports.matcherOptions=void 0;var pathToRegexp=_interopRequireWildcard(pathToRegexp_1);exports.pathToRegexp=pathToRegexp;function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return {default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else {newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}const matcherOptions={sensitive:false,delimiter:'/'};exports.matcherOptions=matcherOptions;const customRouteMatcherOptions={...matcherOptions,strict:true};exports.customRouteMatcherOptions=customRouteMatcherOptions;var _default=(customRoute=false)=>{return path=>{const keys=[];const matcherRegex=pathToRegexp.pathToRegexp(path,keys,customRoute?customRouteMatcherOptions:matcherOptions);const matcher=pathToRegexp.regexpToFunction(matcherRegex,keys);return (pathname,params)=>{const res=pathname==null?false:matcher(pathname);if(!res){return false;}if(customRoute){for(const key of keys){// unnamed params should be removed as they
// are not allowed to be used in the destination
if(typeof key.name==='number'){delete res.params[key.name];}}}return {...params,...res.params};};};};exports.default=_default;

});

var compileNonPath_1=compileNonPath;var _default$3=prepareDestination;var pathToRegexp$1=_interopRequireWildcard$2(pathToRegexp_1);function _getRequireWildcardCache$2(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache$2=function(){return cache;};return cache;}function _interopRequireWildcard$2(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return {default:obj};}var cache=_getRequireWildcardCache$2();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else {newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function compileNonPath(value,params){if(!value.includes(':')){return value;}for(const key of Object.keys(params)){if(value.includes(`:${key}`)){value=value.replace(new RegExp(`:${key}\\*`,'g'),`:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`,'g'),`:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`,'g'),`:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`,'g'),`--ESCAPED_PARAM_COLON${key}`);}}value=value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,'\\$1').replace(/--ESCAPED_PARAM_PLUS/g,'+').replace(/--ESCAPED_PARAM_COLON/g,':').replace(/--ESCAPED_PARAM_QUESTION/g,'?').replace(/--ESCAPED_PARAM_ASTERISKS/g,'*');// the value needs to start with a forward-slash to be compiled
// correctly
return pathToRegexp$1.compile(`/${value}`,{validate:false})(params).substr(1);}function prepareDestination(destination,params,query,appendParamsToQuery,basePath){let parsedDestination={};// clone query so we don't modify the original
query=Object.assign({},query);const hadLocale=query.__nextLocale;delete query.__nextLocale;delete query.__nextDefaultLocale;if(destination.startsWith('/')){parsedDestination=(0, parseRelativeUrl_1.parseRelativeUrl)(destination);}else {const{pathname,searchParams,hash,hostname,port,protocol,search,href}=new URL(destination);parsedDestination={pathname,query:(0, querystring.searchParamsToUrlQuery)(searchParams),hash,protocol,hostname,port,search,href};}const destQuery=parsedDestination.query;const destPath=`${parsedDestination.pathname}${parsedDestination.hash||''}`;const destPathParamKeys=[];pathToRegexp$1.pathToRegexp(destPath,destPathParamKeys);const destPathParams=destPathParamKeys.map(key=>key.name);let destinationCompiler=pathToRegexp$1.compile(destPath,// we don't validate while compiling the destination since we should
// have already validated before we got to this point and validating
// breaks compiling destinations with named pattern params from the source
// e.g. /something:hello(.*) -> /another/:hello is broken with validation
// since compile validation is meant for reversing and not for inserting
// params from a separate path-regex into another
{validate:false});let newUrl;// update any params in query values
for(const[key,strOrArray]of Object.entries(destQuery)){let value=Array.isArray(strOrArray)?strOrArray[0]:strOrArray;if(value){// the value needs to start with a forward-slash to be compiled
// correctly
value=compileNonPath(value,params);}destQuery[key]=value;}// add path params to query if it's not a redirect and not
// already defined in destination query or path
let paramKeys=Object.keys(params);// remove internal param for i18n
if(hadLocale){paramKeys=paramKeys.filter(name=>name!=='nextInternalLocale');}if(appendParamsToQuery&&!paramKeys.some(key=>destPathParams.includes(key))){for(const key of paramKeys){if(!(key in destQuery)){destQuery[key]=params[key];}}}const shouldAddBasePath=destination.startsWith('/')&&basePath;try{newUrl=`${shouldAddBasePath?basePath:''}${destinationCompiler(params)}`;const[pathname,hash]=newUrl.split('#');parsedDestination.pathname=pathname;parsedDestination.hash=`${hash?'#':''}${hash||''}`;delete parsedDestination.search;}catch(err){if(err.message.match(/Expected .*? to not repeat, but got an array/)){throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);}throw err;}// Query merge order lowest priority to highest
// 1. initial URL query values
// 2. path segment values
// 3. destination specified query values
parsedDestination.query={...query,...parsedDestination.query};return {newUrl,parsedDestination};}


var prepareDestination_1 = /*#__PURE__*/Object.defineProperty({
	compileNonPath: compileNonPath_1,
	default: _default$3
}, '__esModule', {value: true});

var _default$4=resolveRewrites;var _pathMatch=_interopRequireDefault$1(pathMatch);var _prepareDestination=_interopRequireDefault$1(prepareDestination_1);function _interopRequireDefault$1(obj){return obj&&obj.__esModule?obj:{default:obj};}const customRouteMatcher=(0, _pathMatch.default)(true);function resolveRewrites(asPath,pages,basePath,rewrites,query,resolveHref){if(!pages.includes(asPath)){for(const rewrite of rewrites){const matcher=customRouteMatcher(rewrite.source);const params=matcher(asPath);if(params){if(!rewrite.destination){// this is a proxied rewrite which isn't handled on the client
break;}const destRes=(0, _prepareDestination.default)(rewrite.destination,params,query,true,rewrite.basePath===false?'':basePath);asPath=destRes.parsedDestination.pathname;Object.assign(query,destRes.parsedDestination.query);if(pages.includes((0, normalizeTrailingSlash.removePathTrailingSlash)(asPath))){// check if we now match a page as this means we are done
// resolving the rewrites
break;}// check if we match a dynamic-route, if so we break the rewrites chain
const resolvedHref=resolveHref(asPath);if(resolvedHref!==asPath&&pages.includes(resolvedHref)){break;}}}}return asPath;}


var resolveRewrites_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$4
}, '__esModule', {value: true});

var getRouteMatcher_1=getRouteMatcher;function getRouteMatcher(routeRegex){const{re,groups}=routeRegex;return pathname=>{const routeMatch=re.exec(pathname);if(!routeMatch){return false;}const decode=param=>{try{return decodeURIComponent(param);}catch(_){const err=new Error('failed to decode param');err.code='DECODE_FAILED';throw err;}};const params={};Object.keys(groups).forEach(slugName=>{const g=groups[slugName];const m=routeMatch[g.pos];if(m!==undefined){params[slugName]=~m.indexOf('/')?m.split('/').map(entry=>decode(entry)):g.repeat?[decode(m)]:decode(m);}});return params;};}


var routeMatcher = /*#__PURE__*/Object.defineProperty({
	getRouteMatcher: getRouteMatcher_1
}, '__esModule', {value: true});

var getRouteRegex_1=getRouteRegex;// this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str){return str.replace(/[|\\{}()[\]^$+*?.-]/g,'\\$&');}function parseParameter(param){const optional=param.startsWith('[')&&param.endsWith(']');if(optional){param=param.slice(1,-1);}const repeat=param.startsWith('...');if(repeat){param=param.slice(3);}return {key:param,repeat,optional};}function getRouteRegex(normalizedRoute){const segments=(normalizedRoute.replace(/\/$/,'')||'/').slice(1).split('/');const groups={};let groupIndex=1;const parameterizedRoute=segments.map(segment=>{if(segment.startsWith('[')&&segment.endsWith(']')){const{key,optional,repeat}=parseParameter(segment.slice(1,-1));groups[key]={pos:groupIndex++,repeat,optional};return repeat?optional?'(?:/(.+?))?':'/(.+?)':'/([^/]+?)';}else {return `/${escapeRegex(segment)}`;}}).join('');// dead code eliminate for browser since it's only needed
// while generating routes-manifest
if(typeof window==='undefined'){let routeKeyCharCode=97;let routeKeyCharLength=1;// builds a minimal routeKey using only a-z and minimal number of characters
const getSafeRouteKey=()=>{let routeKey='';for(let i=0;i<routeKeyCharLength;i++){routeKey+=String.fromCharCode(routeKeyCharCode);routeKeyCharCode++;if(routeKeyCharCode>122){routeKeyCharLength++;routeKeyCharCode=97;}}return routeKey;};const routeKeys={};let namedParameterizedRoute=segments.map(segment=>{if(segment.startsWith('[')&&segment.endsWith(']')){const{key,optional,repeat}=parseParameter(segment.slice(1,-1));// replace any non-word characters since they can break
// the named regex
let cleanedKey=key.replace(/\W/g,'');let invalidKey=false;// check if the key is still invalid and fallback to using a known
// safe key
if(cleanedKey.length===0||cleanedKey.length>30){invalidKey=true;}if(!isNaN(parseInt(cleanedKey.substr(0,1)))){invalidKey=true;}if(invalidKey){cleanedKey=getSafeRouteKey();}routeKeys[cleanedKey]=key;return repeat?optional?`(?:/(?<${cleanedKey}>.+?))?`:`/(?<${cleanedKey}>.+?)`:`/(?<${cleanedKey}>[^/]+?)`;}else {return `/${escapeRegex(segment)}`;}}).join('');return {re:new RegExp(`^${parameterizedRoute}(?:/)?$`),groups,routeKeys,namedRegex:`^${namedParameterizedRoute}(?:/)?$`};}return {re:new RegExp(`^${parameterizedRoute}(?:/)?$`),groups};}


var routeRegex = /*#__PURE__*/Object.defineProperty({
	getRouteRegex: getRouteRegex_1
}, '__esModule', {value: true});

var normalizeLocalePath_2=normalizeLocalePath;function normalizeLocalePath(pathname,locales){let detectedLocale;// first item will be empty string from splitting at first char
const pathnameParts=pathname.split('/');(locales||[]).some(locale=>{if(pathnameParts[1].toLowerCase()===locale.toLowerCase()){detectedLocale=locale;pathnameParts.splice(1,1);pathname=pathnameParts.join('/')||'/';return true;}return false;});return {pathname,detectedLocale};}


var normalizeLocalePath_1 = /*#__PURE__*/Object.defineProperty({
	normalizeLocalePath: normalizeLocalePath_2
}, '__esModule', {value: true});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

var router = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.addLocale=addLocale;exports.delLocale=delLocale;exports.hasBasePath=hasBasePath;exports.addBasePath=addBasePath;exports.delBasePath=delBasePath;exports.isLocalURL=isLocalURL;exports.interpolateAs=interpolateAs;exports.resolveHref=resolveHref;exports.default=void 0;var _mitt=_interopRequireDefault(mitt_1);var _escapePathDelimiters=_interopRequireDefault(escapePathDelimiters_1);var _resolveRewrites=_interopRequireDefault(resolveRewrites_1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath=process.env.__NEXT_ROUTER_BASEPATH||'';function buildCancellationError(){return Object.assign(new Error('Route Cancelled'),{cancelled:true});}function addPathPrefix(path,prefix){return prefix&&path.startsWith('/')?path==='/'?(0, normalizeTrailingSlash.normalizePathTrailingSlash)(prefix):`${prefix}${path}`:path;}function addLocale(path,locale,defaultLocale){if(process.env.__NEXT_I18N_SUPPORT){return locale&&locale!==defaultLocale&&!path.startsWith('/'+locale+'/')&&path!=='/'+locale?addPathPrefix(path,'/'+locale):path;}return path;}function delLocale(path,locale){if(process.env.__NEXT_I18N_SUPPORT){return locale&&(path.startsWith('/'+locale+'/')||path==='/'+locale)?path.substr(locale.length+1)||'/':path;}return path;}function hasBasePath(path){return path===basePath||path.startsWith(basePath+'/');}function addBasePath(path){// we only add the basepath on relative urls
return addPathPrefix(path,basePath);}function delBasePath(path){return path.slice(basePath.length)||'/';}/**
 * Detects whether a given url is routable by the Next.js router (browser only).
 */function isLocalURL(url){if(url.startsWith('/'))return true;try{// absolute urls can be local if they are on the same origin
const locationOrigin=(0,utils.getLocationOrigin)();const resolved=new URL(url,locationOrigin);return resolved.origin===locationOrigin&&hasBasePath(resolved.pathname);}catch(_){return false;}}function interpolateAs(route,asPathname,query){let interpolatedRoute='';const dynamicRegex=(0, routeRegex.getRouteRegex)(route);const dynamicGroups=dynamicRegex.groups;const dynamicMatches=// Try to match the dynamic route against the asPath
(asPathname!==route?(0, routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname):'')||// Fall back to reading the values from the href
// TODO: should this take priority; also need to change in the router.
query;interpolatedRoute=route;const params=Object.keys(dynamicGroups);if(!params.every(param=>{let value=dynamicMatches[param]||'';const{repeat,optional}=dynamicGroups[param];// support single-level catch-all
// TODO: more robust handling for user-error (passing `/`)
let replaced=`[${repeat?'...':''}${param}]`;if(optional){replaced=`${!value?'/':''}[${replaced}]`;}if(repeat&&!Array.isArray(value))value=[value];return (optional||param in dynamicMatches)&&(// Interpolate group into data URL if present
interpolatedRoute=interpolatedRoute.replace(replaced,repeat?value.map(_escapePathDelimiters.default).join('/'):(0, _escapePathDelimiters.default)(value))||'/');})){interpolatedRoute='';// did not satisfy all requirements
// n.b. We ignore this error because we handle warning for this case in
// development in the `<Link>` component directly.
}return {params,result:interpolatedRoute};}function omitParmsFromQuery(query,params){const filteredQuery={};Object.keys(query).forEach(key=>{if(!params.includes(key)){filteredQuery[key]=query[key];}});return filteredQuery;}/**
 * Resolves a given hyperlink with a certain router state (basePath not included).
 * Preserves absolute urls.
 */function resolveHref(currentPath,href,resolveAs){// we use a dummy base url for relative urls
const base=new URL(currentPath,'http://n');const urlAsString=typeof href==='string'?href:(0, utils.formatWithValidation)(href);// Return because it cannot be routed by the Next.js router
if(!isLocalURL(urlAsString)){return resolveAs?[urlAsString]:urlAsString;}try{const finalUrl=new URL(urlAsString,base);finalUrl.pathname=(0,normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);let interpolatedAs='';if((0,isDynamic.isDynamicRoute)(finalUrl.pathname)&&finalUrl.searchParams&&resolveAs){const query=(0,querystring.searchParamsToUrlQuery)(finalUrl.searchParams);const{result,params}=interpolateAs(finalUrl.pathname,finalUrl.pathname,query);if(result){interpolatedAs=(0,utils.formatWithValidation)({pathname:result,hash:finalUrl.hash,query:omitParmsFromQuery(query,params)});}}// if the origin didn't change, it means we received a relative href
const resolvedHref=finalUrl.origin===base.origin?finalUrl.href.slice(finalUrl.origin.length):finalUrl.href;return resolveAs?[resolvedHref,interpolatedAs||resolvedHref]:resolvedHref;}catch(_){return resolveAs?[urlAsString]:urlAsString;}}function prepareUrlAs(router,url,as){// If url and as provided as an object representation,
// we'll format them into the string version here.
return {url:addBasePath(resolveHref(router.pathname,url)),as:as?addBasePath(resolveHref(router.pathname,as)):as};}const manualScrollRestoration=process.env.__NEXT_SCROLL_RESTORATION&&typeof window!=='undefined'&&'scrollRestoration'in window.history;const SSG_DATA_NOT_FOUND_ERROR='SSG Data NOT_FOUND';function fetchRetry(url,attempts){return fetch(url,{// Cookies are required to be present for Next.js' SSG "Preview Mode".
// Cookies may also be required for `getServerSideProps`.
//
// > `fetch` won’t send cookies, unless you set the credentials init
// > option.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//
// > For maximum browser compatibility when it comes to sending &
// > receiving cookies, always supply the `credentials: 'same-origin'`
// > option instead of relying on the default.
// https://github.com/github/fetch#caveats
credentials:'same-origin'}).then(res=>{if(!res.ok){if(attempts>1&&res.status>=500){return fetchRetry(url,attempts-1);}if(res.status===404){// TODO: handle reloading in development from fallback returning 200
// to on-demand-entry-handler causing it to reload periodically
throw new Error(SSG_DATA_NOT_FOUND_ERROR);}throw new Error(`Failed to load static props`);}return res.json();});}function fetchNextData(dataHref,isServerRender){return fetchRetry(dataHref,isServerRender?3:1).catch(err=>{// We should only trigger a server-side transition if this was caused
// on a client-side transition. Otherwise, we'd get into an infinite
// loop.
if(!isServerRender){(0, routeLoader.markAssetError)(err);}throw err;});}class Router{/**
   * Map of all components loaded in `Router`
   */ // Static Data Cache
constructor(_pathname,_query,_as,{initialProps,pageLoader,App,wrapApp,Component,err,subscription,isFallback,locale,locales,defaultLocale}){this.route=void 0;this.pathname=void 0;this.query=void 0;this.asPath=void 0;this.basePath=void 0;this.components=void 0;this.sdc={};this.sub=void 0;this.clc=void 0;this.pageLoader=void 0;this._bps=void 0;this.events=void 0;this._wrapApp=void 0;this.isSsr=void 0;this.isFallback=void 0;this._inFlightRoute=void 0;this._shallow=void 0;this.locale=void 0;this.locales=void 0;this.defaultLocale=void 0;this.onPopState=e=>{const state=e.state;if(!state){// We get state as undefined for two reasons.
//  1. With older safari (< 8) and older chrome (< 34)
//  2. When the URL changed with #
//
// In the both cases, we don't need to proceed and change the route.
// (as it's already changed)
// But we can simply replace the state with the new changes.
// Actually, for (1) we don't need to nothing. But it's hard to detect that event.
// So, doing the following for (1) does no harm.
const{pathname,query}=this;this.changeState('replaceState',(0, utils.formatWithValidation)({pathname:addBasePath(pathname),query}),(0, utils.getURL)());return;}if(!state.__N){return;}const{url,as,options}=state;const{pathname}=(0, parseRelativeUrl_1.parseRelativeUrl)(url);// Make sure we don't re-render on initial load,
// can be caused by navigating back from an external site
if(this.isSsr&&as===this.asPath&&pathname===this.pathname){return;}// If the downstream application returns falsy, return.
// They will then be responsible for handling the event.
if(this._bps&&!this._bps(state)){return;}this.change('replaceState',url,as,Object.assign({},options,{shallow:options.shallow&&this._shallow,locale:options.locale||this.defaultLocale}));};// represents the current component key
this.route=(0, normalizeTrailingSlash.removePathTrailingSlash)(_pathname);// set up the component cache (by route keys)
this.components={};// We should not keep the cache, if there's an error
// Otherwise, this cause issues when when going back and
// come again to the errored page.
if(_pathname!=='/_error'){this.components[this.route]={Component,initial:true,props:initialProps,err,__N_SSG:initialProps&&initialProps.__N_SSG,__N_SSP:initialProps&&initialProps.__N_SSP};}this.components['/_app']={Component:App,styleSheets:[/* /_app does not need its stylesheets managed */]};// Backwards compat for Router.router.events
// TODO: Should be remove the following major version as it was never documented
this.events=Router.events;this.pageLoader=pageLoader;this.pathname=_pathname;this.query=_query;// if auto prerendered and dynamic route wait to update asPath
// until after mount to prevent hydration mismatch
this.asPath=// @ts-ignore this is temporarily global (attached to window)
(0, isDynamic.isDynamicRoute)(_pathname)&&__NEXT_DATA__.autoExport?_pathname:_as;this.basePath=basePath;this.sub=subscription;this.clc=null;this._wrapApp=wrapApp;// make sure to ignore extra popState in safari on navigating
// back from external site
this.isSsr=true;this.isFallback=isFallback;if(process.env.__NEXT_I18N_SUPPORT){this.locale=locale;this.locales=locales;this.defaultLocale=defaultLocale;}if(typeof window!=='undefined'){// make sure "as" doesn't start with double slashes or else it can
// throw an error as it's considered invalid
if(_as.substr(0,2)!=='//'){// in order for `e.state` to work on the `onpopstate` event
// we have to register the initial route upon initialization
this.changeState('replaceState',(0, utils.formatWithValidation)({pathname:addBasePath(_pathname),query:_query}),(0, utils.getURL)(),{locale});}window.addEventListener('popstate',this.onPopState);// enable custom scroll restoration handling when available
// otherwise fallback to browser's default handling
if(process.env.__NEXT_SCROLL_RESTORATION){if(manualScrollRestoration){window.history.scrollRestoration='manual';let scrollDebounceTimeout;const debouncedScrollSave=()=>{if(scrollDebounceTimeout)clearTimeout(scrollDebounceTimeout);scrollDebounceTimeout=setTimeout(()=>{const{url,as:curAs,options}=history.state;this.changeState('replaceState',url,curAs,Object.assign({},options,{_N_X:window.scrollX,_N_Y:window.scrollY}));},10);};window.addEventListener('scroll',debouncedScrollSave);}}}}reload(){window.location.reload();}/**
   * Go back in history
   */back(){window.history.back();}/**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */push(url,as=url,options={}){({url,as}=prepareUrlAs(this,url,as));return this.change('pushState',url,as,options);}/**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */replace(url,as=url,options={}){({url,as}=prepareUrlAs(this,url,as));return this.change('replaceState',url,as,options);}async change(method,url,as,options){if(!isLocalURL(url)){window.location.href=url;return false;}let localeChange=options.locale!==this.locale;if(process.env.__NEXT_I18N_SUPPORT){var _this$locales;this.locale=options.locale===false?this.defaultLocale:options.locale||this.locale;if(typeof options.locale==='undefined'){options.locale=this.locale;}const{normalizeLocalePath}=normalizeLocalePath_1;const parsedAs=(0, parseRelativeUrl_1.parseRelativeUrl)(hasBasePath(as)?delBasePath(as):as);const localePathResult=normalizeLocalePath(parsedAs.pathname,this.locales);if(localePathResult.detectedLocale){this.locale=localePathResult.detectedLocale;url=addBasePath(localePathResult.pathname);}// if the locale isn't configured hard navigate to show 404 page
if(!((_this$locales=this.locales)==null?void 0:_this$locales.includes(this.locale))){parsedAs.pathname=addLocale(parsedAs.pathname,this.locale);window.location.href=(0, utils.formatWithValidation)(parsedAs);return new Promise(()=>{});}}if(!options._h){this.isSsr=false;}// marking route changes as a navigation start entry
if(utils.ST){performance.mark('routeChange');}if(this._inFlightRoute){this.abortComponentLoad(this._inFlightRoute);}as=addBasePath(addLocale(hasBasePath(as)?delBasePath(as):as,options.locale,this.defaultLocale));const cleanedAs=delLocale(hasBasePath(as)?delBasePath(as):as,this.locale);this._inFlightRoute=as;// If the url change is only related to a hash change
// We should not proceed. We should only change the state.
// WARNING: `_h` is an internal option for handing Next.js client-side
// hydration. Your app should _never_ use this property. It may change at
// any time without notice.
if(!options._h&&this.onlyAHashChange(cleanedAs)){this.asPath=cleanedAs;Router.events.emit('hashChangeStart',as);// TODO: do we need the resolved href when only a hash change?
this.changeState(method,url,as,options);this.scrollToHash(cleanedAs);this.notify(this.components[this.route]);Router.events.emit('hashChangeComplete',as);return true;}let parsed=(0, parseRelativeUrl_1.parseRelativeUrl)(url);let{pathname,query}=parsed;// The build manifest needs to be loaded before auto-static dynamic pages
// get their query parameters to allow ensuring they can be parsed properly
// when rewritten to
let pages,rewrites;try{pages=await this.pageLoader.getPageList();({__rewrites:rewrites}=await(0,routeLoader.getClientBuildManifest)());}catch(err){// If we fail to resolve the page list or client-build manifest, we must
// do a server-side transition:
window.location.href=as;return false;}parsed=this._resolveHref(parsed,pages);if(parsed.pathname!==pathname){pathname=parsed.pathname;url=(0, utils.formatWithValidation)(parsed);}// url and as should always be prefixed with basePath by this
// point by either next/link or router.push/replace so strip the
// basePath from the pathname to match the pages dir 1-to-1
pathname=pathname?(0, normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)):pathname;// If asked to change the current URL we should reload the current page
// (not location.reload() but reload getInitialProps and other Next.js stuffs)
// We also need to set the method = replaceState always
// as this should not go into the history (That's how browsers work)
// We should compare the new asPath to the current asPath, not the url
if(!this.urlIsNew(cleanedAs)&&!localeChange){method='replaceState';}let route=(0, normalizeTrailingSlash.removePathTrailingSlash)(pathname);const{shallow=false}=options;// we need to resolve the as value using rewrites for dynamic SSG
// pages to allow building the data URL correctly
let resolvedAs=as;if(process.env.__NEXT_HAS_REWRITES){resolvedAs=(0, _resolveRewrites.default)((0, parseRelativeUrl_1.parseRelativeUrl)(as).pathname,pages,basePath,rewrites,query,p=>this._resolveHref({pathname:p},pages).pathname);if(resolvedAs!==as){const potentialHref=(0, normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({},parsed,{pathname:resolvedAs}),pages,false).pathname);// if this directly matches a page we need to update the href to
// allow the correct page chunk to be loaded
if(pages.includes(potentialHref)){route=potentialHref;pathname=potentialHref;parsed.pathname=pathname;url=(0, utils.formatWithValidation)(parsed);}}}resolvedAs=delLocale(delBasePath(resolvedAs),this.locale);if((0, isDynamic.isDynamicRoute)(route)){const parsedAs=(0, parseRelativeUrl_1.parseRelativeUrl)(resolvedAs);const asPathname=parsedAs.pathname;const routeRegex$1=(0, routeRegex.getRouteRegex)(route);const routeMatch=(0, routeMatcher.getRouteMatcher)(routeRegex$1)(asPathname);const shouldInterpolate=route===asPathname;const interpolatedAs=shouldInterpolate?interpolateAs(route,asPathname,query):{};if(!routeMatch||shouldInterpolate&&!interpolatedAs.result){const missingParams=Object.keys(routeRegex$1.groups).filter(param=>!query[param]);if(missingParams.length>0){if(process.env.NODE_ENV!=='production'){console.warn(`${shouldInterpolate?`Interpolating href`:`Mismatching \`as\` and \`href\``} failed to manually provide `+`the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);}throw new Error((shouldInterpolate?`The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. `:`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `)+`Read more: https://err.sh/vercel/next.js/${shouldInterpolate?'href-interpolation-failed':'incompatible-href-as'}`);}}else if(shouldInterpolate){as=(0, utils.formatWithValidation)(Object.assign({},parsedAs,{pathname:interpolatedAs.result,query:omitParmsFromQuery(query,interpolatedAs.params)}));}else {// Merge params into `query`, overwriting any specified in search
Object.assign(query,routeMatch);}}Router.events.emit('routeChangeStart',as);try{const routeInfo=await this.getRouteInfo(route,pathname,query,as,shallow);let{error,props,__N_SSG,__N_SSP}=routeInfo;// handle redirect on client-transition
if((__N_SSG||__N_SSP)&&props&&props.pageProps&&props.pageProps.__N_REDIRECT){const destination=props.pageProps.__N_REDIRECT;// check if destination is internal (resolves to a page) and attempt
// client-navigation if it is falling back to hard navigation if
// it's not
if(destination.startsWith('/')){const parsedHref=(0,parseRelativeUrl_1.parseRelativeUrl)(destination);this._resolveHref(parsedHref,pages,false);if(pages.includes(parsedHref.pathname)){const{url:newUrl,as:newAs}=prepareUrlAs(this,destination,destination);return this.change(method,newUrl,newAs,options);}}window.location.href=destination;return new Promise(()=>{});}Router.events.emit('beforeHistoryChange',as);this.changeState(method,url,as,options);if(process.env.NODE_ENV!=='production'){const appComp=this.components['/_app'].Component;window.next.isPrerendered=appComp.getInitialProps===appComp.origGetInitialProps&&!routeInfo.Component.getInitialProps;}await this.set(route,pathname,query,cleanedAs,routeInfo).catch(e=>{if(e.cancelled)error=error||e;else throw e;});if(error){Router.events.emit('routeChangeError',error,cleanedAs);throw error;}if(process.env.__NEXT_SCROLL_RESTORATION){if(manualScrollRestoration&&'_N_X'in options){window.scrollTo(options._N_X,options._N_Y);}}if(process.env.__NEXT_I18N_SUPPORT){if(this.locale){document.documentElement.lang=this.locale;}}Router.events.emit('routeChangeComplete',as);return true;}catch(err){if(err.cancelled){return false;}throw err;}}changeState(method,url,as,options={}){if(process.env.NODE_ENV!=='production'){if(typeof window.history==='undefined'){console.error(`Warning: window.history is not available.`);return;}if(typeof window.history[method]==='undefined'){console.error(`Warning: window.history.${method} is not available`);return;}}if(method!=='pushState'||(0, utils.getURL)()!==as){this._shallow=options.shallow;window.history[method]({url,as,options,__N:true},// Most browsers currently ignores this parameter, although they may use it in the future.
// Passing the empty string here should be safe against future changes to the method.
// https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
'',as);}}async handleRouteInfoError(err,pathname,query,as,loadErrorFail){if(err.cancelled){// bubble up cancellation errors
throw err;}if((0, routeLoader.isAssetError)(err)||loadErrorFail){Router.events.emit('routeChangeError',err,as);// If we can't load the page it could be one of following reasons
//  1. Page doesn't exists
//  2. Page does exist in a different zone
//  3. Internal error while loading the page
// So, doing a hard reload is the proper way to deal with this.
window.location.href=as;// Changing the URL doesn't block executing the current code path.
// So let's throw a cancellation error stop the routing logic.
throw buildCancellationError();}try{let Component;let styleSheets;let props;const ssg404=err.message===SSG_DATA_NOT_FOUND_ERROR;if(ssg404){try{let mod;({page:Component,styleSheets,mod}=await this.fetchComponent('/404'));// TODO: should we tolerate these props missing and still render the
// page instead of falling back to _error?
if(mod&&mod.__N_SSG){props=await this._getStaticData(this.pageLoader.getDataHref('/404','/404',true,this.locale));}}catch(_err){// non-fatal fallback to _error
}}if(typeof Component==='undefined'||typeof styleSheets==='undefined'){;({page:Component,styleSheets}=await this.fetchComponent('/_error'));}const routeInfo={props,Component,styleSheets,err:ssg404?undefined:err,error:ssg404?undefined:err};if(!routeInfo.props){try{routeInfo.props=await this.getInitialProps(Component,{err,pathname,query});}catch(gipErr){console.error('Error in error page `getInitialProps`: ',gipErr);routeInfo.props={};}}return routeInfo;}catch(routeInfoErr){return this.handleRouteInfoError(routeInfoErr,pathname,query,as,true);}}async getRouteInfo(route,pathname,query,as,shallow=false){try{const existingRouteInfo=this.components[route];if(shallow&&existingRouteInfo&&this.route===route){return existingRouteInfo;}const cachedRouteInfo=existingRouteInfo&&'initial'in existingRouteInfo?undefined:existingRouteInfo;const routeInfo=cachedRouteInfo?cachedRouteInfo:await this.fetchComponent(route).then(res=>({Component:res.page,styleSheets:res.styleSheets,__N_SSG:res.mod.__N_SSG,__N_SSP:res.mod.__N_SSP}));const{Component,__N_SSG,__N_SSP}=routeInfo;if(process.env.NODE_ENV!=='production'){const{isValidElementType}=reactIs;if(!isValidElementType(Component)){throw new Error(`The default export is not a React Component in page: "${pathname}"`);}}let dataHref;if(__N_SSG||__N_SSP){dataHref=this.pageLoader.getDataHref((0,utils.formatWithValidation)({pathname,query}),delBasePath(as),__N_SSG,this.locale);}const props=await this._getData(()=>__N_SSG?this._getStaticData(dataHref):__N_SSP?this._getServerData(dataHref):this.getInitialProps(Component,// we provide AppTree later so this needs to be `any`
{pathname,query,asPath:as}));routeInfo.props=props;this.components[route]=routeInfo;return routeInfo;}catch(err){return this.handleRouteInfoError(err,pathname,query,as);}}set(route,pathname,query,as,data){this.isFallback=false;this.route=route;this.pathname=pathname;this.query=query;this.asPath=as;return this.notify(data);}/**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */beforePopState(cb){this._bps=cb;}onlyAHashChange(as){if(!this.asPath)return false;const[oldUrlNoHash,oldHash]=this.asPath.split('#');const[newUrlNoHash,newHash]=as.split('#');// Makes sure we scroll to the provided hash if the url/hash are the same
if(newHash&&oldUrlNoHash===newUrlNoHash&&oldHash===newHash){return true;}// If the urls are change, there's more than a hash change
if(oldUrlNoHash!==newUrlNoHash){return false;}// If the hash has changed, then it's a hash only change.
// This check is necessary to handle both the enter and
// leave hash === '' cases. The identity case falls through
// and is treated as a next reload.
return oldHash!==newHash;}scrollToHash(as){const[,hash]=as.split('#');// Scroll to top if the hash is just `#` with no value
if(hash===''){window.scrollTo(0,0);return;}// First we check if the element by id is found
const idEl=document.getElementById(hash);if(idEl){idEl.scrollIntoView();return;}// If there's no element with the id, we check the `name` property
// To mirror browsers
const nameEl=document.getElementsByName(hash)[0];if(nameEl){nameEl.scrollIntoView();}}urlIsNew(asPath){return this.asPath!==asPath;}_resolveHref(parsedHref,pages,applyBasePath=true){const{pathname}=parsedHref;const cleanPathname=(0, normalizeTrailingSlash.removePathTrailingSlash)((0, denormalizePagePath_1.denormalizePagePath)(applyBasePath?delBasePath(pathname):pathname));if(cleanPathname==='/404'||cleanPathname==='/_error'){return parsedHref;}// handle resolving href for dynamic routes
if(!pages.includes(cleanPathname)){// eslint-disable-next-line array-callback-return
pages.some(page=>{if((0, isDynamic.isDynamicRoute)(page)&&(0, routeRegex.getRouteRegex)(page).re.test(cleanPathname)){parsedHref.pathname=applyBasePath?addBasePath(page):page;return true;}});}return parsedHref;}/**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */async prefetch(url,asPath=url,options={}){let parsed=(0, parseRelativeUrl_1.parseRelativeUrl)(url);let{pathname}=parsed;if(process.env.__NEXT_I18N_SUPPORT){const normalizeLocalePath=normalizeLocalePath_1.normalizeLocalePath;if(options.locale===false){pathname=normalizeLocalePath(pathname,this.locales).pathname;parsed.pathname=pathname;url=(0, utils.formatWithValidation)(parsed);let parsedAs=(0, parseRelativeUrl_1.parseRelativeUrl)(asPath);const localePathResult=normalizeLocalePath(parsedAs.pathname,this.locales);parsedAs.pathname=localePathResult.pathname;options.locale=localePathResult.detectedLocale||this.defaultLocale;asPath=(0, utils.formatWithValidation)(parsedAs);}}const pages=await this.pageLoader.getPageList();parsed=this._resolveHref(parsed,pages,false);if(parsed.pathname!==pathname){pathname=parsed.pathname;url=(0, utils.formatWithValidation)(parsed);}// Prefetch is not supported in development mode because it would trigger on-demand-entries
if(process.env.NODE_ENV!=='production'){return;}const route=(0, normalizeTrailingSlash.removePathTrailingSlash)(pathname);await Promise.all([this.pageLoader._isSsg(url).then(isSsg=>{return isSsg?this._getStaticData(this.pageLoader.getDataHref(url,asPath,true,typeof options.locale!=='undefined'?options.locale:this.locale)):false;}),this.pageLoader[options.priority?'loadPage':'prefetch'](route)]);}async fetchComponent(route){let cancelled=false;const cancel=this.clc=()=>{cancelled=true;};const componentResult=await this.pageLoader.loadPage(route);if(cancelled){const error=new Error(`Abort fetching component for route: "${route}"`);error.cancelled=true;throw error;}if(cancel===this.clc){this.clc=null;}return componentResult;}_getData(fn){let cancelled=false;const cancel=()=>{cancelled=true;};this.clc=cancel;return fn().then(data=>{if(cancel===this.clc){this.clc=null;}if(cancelled){const err=new Error('Loading initial props cancelled');err.cancelled=true;throw err;}return data;});}_getStaticData(dataHref){const{href:cacheKey}=new URL(dataHref,window.location.href);if(process.env.NODE_ENV==='production'&&this.sdc[cacheKey]){return Promise.resolve(this.sdc[cacheKey]);}return fetchNextData(dataHref,this.isSsr).then(data=>{this.sdc[cacheKey]=data;return data;});}_getServerData(dataHref){return fetchNextData(dataHref,this.isSsr);}getInitialProps(Component,ctx){const{Component:App}=this.components['/_app'];const AppTree=this._wrapApp(App);ctx.AppTree=AppTree;return (0, utils.loadGetInitialProps)(App,{AppTree,Component,router:this,ctx});}abortComponentLoad(as){if(this.clc){Router.events.emit('routeChangeError',buildCancellationError(),as);this.clc();this.clc=null;}}notify(data){return this.sub(data,this.components['/_app'].Component);}}exports.default=Router;Router.events=(0, _mitt.default)();

});

var routerContext = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.RouterContext=void 0;var _react=_interopRequireDefault(react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const RouterContext=/*#__PURE__*/_react.default.createContext(null);exports.RouterContext=RouterContext;if(process.env.NODE_ENV!=='production'){RouterContext.displayName='RouterContext';}

});

var _default$5=withRouter;var _react=interopRequireDefault(react);function withRouter(ComposedComponent){function WithRouterWrapper(props){return/*#__PURE__*/_react.default.createElement(ComposedComponent,Object.assign({router:(0, router$1.useRouter)()},props));}WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps// This is needed to allow checking for custom getInitialProps in _app
;WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps;if(process.env.NODE_ENV!=='production'){const name=ComposedComponent.displayName||ComposedComponent.name||'Unknown';WithRouterWrapper.displayName=`withRouter(${name})`;}return WithRouterWrapper;}


var withRouter_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$5
}, '__esModule', {value: true});

var router$1 = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.useRouter=useRouter;exports.makePublicRouterInstance=makePublicRouterInstance;exports.createRouter=exports.withRouter=exports.default=void 0;var _react=interopRequireDefault(react);var _router2=interopRequireWildcard(router);exports.Router=_router2.default;exports.NextRouter=_router2.NextRouter;var _withRouter=interopRequireDefault(withRouter_1);exports.withRouter=_withRouter.default;/* global window */const singletonRouter={router:null,// holds the actual router instance
readyCallbacks:[],ready(cb){if(this.router)return cb();if(typeof window!=='undefined'){this.readyCallbacks.push(cb);}}};// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields=['pathname','route','query','asPath','components','isFallback','basePath','locale','locales','defaultLocale'];const routerEvents=['routeChangeStart','beforeHistoryChange','routeChangeComplete','routeChangeError','hashChangeStart','hashChangeComplete'];const coreMethodFields=['push','replace','reload','back','prefetch','beforePopState'];// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter,'events',{get(){return _router2.default.events;}});urlPropertyFields.forEach(field=>{// Here we need to use Object.defineProperty because, we need to return
// the property assigned to the actual router
// The value might get changed as we change routes and this is the
// proper way to access it
Object.defineProperty(singletonRouter,field,{get(){const router=getRouter();return router[field];}});});coreMethodFields.forEach(field=>{// We don't really know the types here, so we add them later instead
singletonRouter[field]=(...args)=>{const router=getRouter();return router[field](...args);};});routerEvents.forEach(event=>{singletonRouter.ready(()=>{_router2.default.events.on(event,(...args)=>{const eventField=`on${event.charAt(0).toUpperCase()}${event.substring(1)}`;const _singletonRouter=singletonRouter;if(_singletonRouter[eventField]){try{_singletonRouter[eventField](...args);}catch(err){console.error(`Error when running the Router event: ${eventField}`);console.error(`${err.message}\n${err.stack}`);}}});});});function getRouter(){if(!singletonRouter.router){const message='No router instance found.\n'+'You should only use "next/router" inside the client side of your app.\n';throw new Error(message);}return singletonRouter.router;}// Export the singletonRouter and this is the public API.
var _default=singletonRouter;// Reexport the withRoute HOC
exports.default=_default;function useRouter(){return _react.default.useContext(routerContext.RouterContext);}// INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter=(...args)=>{singletonRouter.router=new _router2.default(...args);singletonRouter.readyCallbacks.forEach(cb=>cb());singletonRouter.readyCallbacks=[];return singletonRouter.router;};// This function is used to create the `withRouter` router instance
exports.createRouter=createRouter;function makePublicRouterInstance(router){const _router=router;const instance={};for(const property of urlPropertyFields){if(typeof _router[property]==='object'){instance[property]=Object.assign(Array.isArray(_router[property])?[]:{},_router[property]);// makes sure query is not stateful
continue;}instance[property]=_router[property];}// Events is a static property on the router, the router doesn't have to be initialized to use it
instance.events=_router2.default.events;coreMethodFields.forEach(field=>{instance[field]=(...args)=>{return _router[field](...args);};});return instance;}

});

var useIntersection_2=useIntersection;var _requestIdleCallback=interopRequireDefault(requestIdleCallback_1);const hasIntersectionObserver=typeof IntersectionObserver!=='undefined';function useIntersection({rootMargin,disabled}){const isDisabled=disabled||!hasIntersectionObserver;const unobserve=(0, react.useRef)();const[visible,setVisible]=(0, react.useState)(false);const setRef=(0, react.useCallback)(el=>{if(unobserve.current){unobserve.current();unobserve.current=undefined;}if(isDisabled||visible)return;if(el&&el.tagName){unobserve.current=observe(el,isVisible=>isVisible&&setVisible(isVisible),{rootMargin});}},[isDisabled,rootMargin,visible]);(0, react.useEffect)(()=>{if(!hasIntersectionObserver){if(!visible)(0, _requestIdleCallback.default)(()=>setVisible(true));}},[visible]);return [setRef,visible];}function observe(element,callback,options){const{id,observer,elements}=createObserver(options);elements.set(element,callback);observer.observe(element);return function unobserve(){observer.unobserve(element);// Destroy observer when there's nothing left to watch:
if(elements.size===0){observer.disconnect();observers.delete(id);}};}const observers=new Map();function createObserver(options){const id=options.rootMargin||'';let instance=observers.get(id);if(instance){return instance;}const elements=new Map();const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{const callback=elements.get(entry.target);const isVisible=entry.isIntersecting||entry.intersectionRatio>0;if(callback&&isVisible){callback(isVisible);}});},options);observers.set(id,instance={id,observer,elements});return instance;}


var useIntersection_1 = /*#__PURE__*/Object.defineProperty({
	useIntersection: useIntersection_2
}, '__esModule', {value: true});

var link = createCommonjsModule(function (module, exports) {
exports.__esModule=true;exports.default=void 0;var _react=interopRequireWildcard(react);const prefetched={};function prefetch(router$1,href,as,options){if(typeof window==='undefined')return;if(!(0, router.isLocalURL)(href))return;// Prefetch the JSON page if asked (only in the client)
// We need to handle a prefetch error here since we may be
// loading with priority which can reject but we don't
// want to force navigation since this is only a prefetch
router$1.prefetch(href,as,options).catch(err=>{if(process.env.NODE_ENV!=='production'){// rethrow to show invalid URL errors
throw err;}});const curLocale=options&&typeof options.locale!=='undefined'?options.locale:router$1&&router$1.locale;// Join on an invalid URI character
prefetched[href+'%'+as+(curLocale?'%'+curLocale:'')]=true;}function isModifiedEvent(event){const{target}=event.currentTarget;return target&&target!=='_self'||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||// triggers resource download
event.nativeEvent&&event.nativeEvent.which===2;}function linkClicked(e,router$1,href,as,replace,shallow,scroll,locale){const{nodeName}=e.currentTarget;if(nodeName==='A'&&(isModifiedEvent(e)||!(0, router.isLocalURL)(href))){// ignore click for browser’s default behavior
return;}e.preventDefault();//  avoid scroll for urls with anchor refs
if(scroll==null){scroll=as.indexOf('#')<0;}// replace state instead of push if prop is present
router$1[replace?'replace':'push'](href,as,{shallow,locale}).then(success=>{if(!success)return;if(scroll){window.scrollTo(0,0);document.body.focus();}});}function Link(props){if(process.env.NODE_ENV!=='production'){function createPropError(args){return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.`+(typeof window!=='undefined'?"\nOpen your browser's console to view the Component stack trace.":''));}// TypeScript trick for type-guarding:
const requiredPropsGuard={href:true};const requiredProps=Object.keys(requiredPropsGuard);requiredProps.forEach(key=>{if(key==='href'){if(props[key]==null||typeof props[key]!=='string'&&typeof props[key]!=='object'){throw createPropError({key,expected:'`string` or `object`',actual:props[key]===null?'null':typeof props[key]});}}});// TypeScript trick for type-guarding:
const optionalPropsGuard={as:true,replace:true,scroll:true,shallow:true,passHref:true,prefetch:true,locale:true};const optionalProps=Object.keys(optionalPropsGuard);optionalProps.forEach(key=>{const valType=typeof props[key];if(key==='as'){if(props[key]&&valType!=='string'&&valType!=='object'){throw createPropError({key,expected:'`string` or `object`',actual:valType});}}else if(key==='locale'){if(props[key]&&valType!=='string'){throw createPropError({key,expected:'`string`',actual:valType});}}else if(key==='replace'||key==='scroll'||key==='shallow'||key==='passHref'||key==='prefetch'){if(props[key]!=null&&valType!=='boolean'){throw createPropError({key,expected:'`boolean`',actual:valType});}}else;});// This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
// eslint-disable-next-line react-hooks/rules-of-hooks
const hasWarned=_react.default.useRef(false);if(props.prefetch&&!hasWarned.current){hasWarned.current=true;console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');}}const p=props.prefetch!==false;const router$2=(0, router$1.useRouter)();const pathname=router$2&&router$2.pathname||'/';const{href,as}=_react.default.useMemo(()=>{const[resolvedHref,resolvedAs]=(0, router.resolveHref)(pathname,props.href,true);return {href:resolvedHref,as:props.as?(0, router.resolveHref)(pathname,props.as):resolvedAs||resolvedHref};},[pathname,props.href,props.as]);let{children,replace,shallow,scroll,locale}=props;// Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
if(typeof children==='string'){children=/*#__PURE__*/_react.default.createElement("a",null,children);}// This will return the first child, if multiple are provided it will throw an error
const child=_react.Children.only(children);const childRef=child&&typeof child==='object'&&child.ref;const[setIntersectionRef,isVisible]=(0, useIntersection_1.useIntersection)({rootMargin:'200px'});const setRef=_react.default.useCallback(el=>{setIntersectionRef(el);if(childRef){if(typeof childRef==='function')childRef(el);else if(typeof childRef==='object'){childRef.current=el;}}},[childRef,setIntersectionRef]);(0, _react.useEffect)(()=>{const shouldPrefetch=isVisible&&p&&(0, router.isLocalURL)(href);const curLocale=typeof locale!=='undefined'?locale:router$2&&router$2.locale;const isPrefetched=prefetched[href+'%'+as+(curLocale?'%'+curLocale:'')];if(shouldPrefetch&&!isPrefetched){prefetch(router$2,href,as,{locale:curLocale});}},[as,href,isVisible,locale,p,router$2]);const childProps={ref:setRef,onClick:e=>{if(child.props&&typeof child.props.onClick==='function'){child.props.onClick(e);}if(!e.defaultPrevented){linkClicked(e,router$2,href,as,replace,shallow,scroll,locale);}}};childProps.onMouseEnter=e=>{if(!(0, router.isLocalURL)(href))return;if(child.props&&typeof child.props.onMouseEnter==='function'){child.props.onMouseEnter(e);}prefetch(router$2,href,as,{priority:true});};// If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
// defined, we specify the current 'href', so that repetition is not needed by the user
if(props.passHref||child.type==='a'&&!('href'in child.props)){childProps.href=(0, router.addBasePath)((0, router.addLocale)(as,typeof locale!=='undefined'?locale:router$2&&router$2.locale,router$2&&router$2.defaultLocale));}return/*#__PURE__*/_react.default.cloneElement(child,childProps);}var _default=Link;exports.default=_default;

});

var link$1 = link;

var _default$6 = function Example() {
  console.log('Hello from Example()');
};

_default$6();
// Hello from Example

// TypeError: link$1 is not a function
link$1();
