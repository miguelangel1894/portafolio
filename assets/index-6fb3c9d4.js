function Fw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wo={},Vw={get exports(){return Wo},set exports(t){Wo=t}},Ua={},I={},zw={get exports(){return I},set exports(t){I=t}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),Bw=Symbol.for("react.portal"),jw=Symbol.for("react.fragment"),Hw=Symbol.for("react.strict_mode"),Ww=Symbol.for("react.profiler"),qw=Symbol.for("react.provider"),Kw=Symbol.for("react.context"),Gw=Symbol.for("react.forward_ref"),Qw=Symbol.for("react.suspense"),Yw=Symbol.for("react.memo"),Xw=Symbol.for("react.lazy"),Jd=Symbol.iterator;function Jw(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Lm={};function ai(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Pm}ai.prototype.isReactComponent={};ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mm(){}Mm.prototype=ai.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Pm}var sh=ih.prototype=new Mm;sh.constructor=ih;Om(sh,ai.prototype);sh.isPureReactComponent=!0;var Zd=Array.isArray,$m=Object.prototype.hasOwnProperty,oh={current:null},Um={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$m.call(e,r)&&!Um.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cs,type:t,key:s,ref:o,props:i,_owner:oh.current}}function Zw(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function e1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ef=/\/+/g;function Ll(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e1(""+t.key):e.toString(36)}function Co(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case Bw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ll(o,0):r,Zd(i)?(n="",t!=null&&(n=t.replace(ef,"$&/")+"/"),Co(i,e,n,"",function(u){return u})):i!=null&&(ah(i)&&(i=Zw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ef,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ll(s,a);o+=Co(s,e,n,l,i)}else if(l=Jw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ll(s,a++),o+=Co(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zs(t,e,n){if(t==null)return t;var r=[],i=0;return Co(t,r,"","",function(s){return e.call(n,s,i++)}),r}function t1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},No={transition:null},n1={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:No,ReactCurrentOwner:oh};j.Children={map:Zs,forEach:function(t,e,n){Zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zs(t,function(){e++}),e},toArray:function(t){return Zs(t,function(e){return e})||[]},only:function(t){if(!ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=ai;j.Fragment=jw;j.Profiler=Ww;j.PureComponent=ih;j.StrictMode=Hw;j.Suspense=Qw;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Om({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=oh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$m.call(e,l)&&!Um.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Cs,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:Kw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qw,_context:t},t.Consumer=t};j.createElement=Fm;j.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:Gw,render:t}};j.isValidElement=ah;j.lazy=function(t){return{$$typeof:Xw,_payload:{_status:-1,_result:t},_init:t1}};j.memo=function(t,e){return{$$typeof:Yw,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return We.current.useCallback(t,e)};j.useContext=function(t){return We.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return We.current.useDeferredValue(t)};j.useEffect=function(t,e){return We.current.useEffect(t,e)};j.useId=function(){return We.current.useId()};j.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return We.current.useMemo(t,e)};j.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};j.useRef=function(t){return We.current.useRef(t)};j.useState=function(t){return We.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return We.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(zw);const gt=bw(I),Nu=Fw({__proto__:null,default:gt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=I,i1=Symbol.for("react.element"),s1=Symbol.for("react.fragment"),o1=Object.prototype.hasOwnProperty,a1=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l1={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)o1.call(e,r)&&!l1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:i1,type:t,key:s,ref:o,props:i,_owner:a1.current}}Ua.Fragment=s1;Ua.jsx=bm;Ua.jsxs=bm;(function(t){t.exports=Ua})(Vw);const _=Wo.jsx,St=Wo.jsxs;var Ru={},Du={},u1={get exports(){return Du},set exports(t){Du=t}},st={},Au={},c1={get exports(){return Au},set exports(t){Au=t}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,b){var z=D.length;D.push(b);e:for(;0<z;){var ue=z-1>>>1,Ee=D[ue];if(0<i(Ee,b))D[ue]=b,D[z]=Ee,z=ue;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var b=D[0],z=D.pop();if(z!==b){D[0]=z;e:for(var ue=0,Ee=D.length,Xs=Ee>>>1;ue<Xs;){var Mn=2*(ue+1)-1,Ol=D[Mn],$n=Mn+1,Js=D[$n];if(0>i(Ol,z))$n<Ee&&0>i(Js,Ol)?(D[ue]=Js,D[$n]=z,ue=$n):(D[ue]=Ol,D[Mn]=z,ue=Mn);else if($n<Ee&&0>i(Js,z))D[ue]=Js,D[$n]=z,ue=$n;else break e}}return b}function i(D,b){var z=D.sortIndex-b.sortIndex;return z!==0?z:D.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=D)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function w(D){if(v=!1,m(D),!y)if(n(l)!==null)y=!0,xl(T);else{var b=n(u);b!==null&&Pl(w,b.startTime-D)}}function T(D,b){y=!1,v&&(v=!1,p(x),x=-1),g=!0;var z=d;try{for(m(b),h=n(l);h!==null&&(!(h.expirationTime>b)||D&&!ft());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,d=h.priorityLevel;var Ee=ue(h.expirationTime<=b);b=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),m(b)}else r(l);h=n(l)}if(h!==null)var Xs=!0;else{var Mn=n(u);Mn!==null&&Pl(w,Mn.startTime-b),Xs=!1}return Xs}finally{h=null,d=z,g=!1}}var C=!1,N=null,x=-1,J=5,B=-1;function ft(){return!(t.unstable_now()-B<J)}function yi(){if(N!==null){var D=t.unstable_now();B=D;var b=!0;try{b=N(!0,D)}finally{b?vi():(C=!1,N=null)}}else C=!1}var vi;if(typeof f=="function")vi=function(){f(yi)};else if(typeof MessageChannel<"u"){var Xd=new MessageChannel,Uw=Xd.port2;Xd.port1.onmessage=yi,vi=function(){Uw.postMessage(null)}}else vi=function(){O(yi,0)};function xl(D){N=D,C||(C=!0,vi())}function Pl(D,b){x=O(function(){D(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,xl(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var z=d;d=b;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,b){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return b()}finally{d=z}},t.unstable_scheduleCallback=function(D,b,z){var ue=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ue+z:ue):z=ue,D){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=z+Ee,D={id:c++,callback:b,priorityLevel:D,startTime:z,expirationTime:Ee,sortIndex:-1},z>ue?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(v?(p(x),x=-1):v=!0,Pl(w,z-ue))):(D.sortIndex=Ee,e(l,D),y||g||(y=!0,xl(T))),D},t.unstable_shouldYield=ft,t.unstable_wrapCallback=function(D){var b=d;return function(){var z=d;d=b;try{return D.apply(this,arguments)}finally{d=z}}}})(Vm);(function(t){t.exports=Vm})(c1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=I,rt=Au;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bm=new Set,Yi={};function cr(t,e){Wr(t,e),Wr(t+"Capture",e)}function Wr(t,e){for(Yi[t]=e,t=0;t<e.length;t++)Bm.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,h1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tf={},nf={};function d1(t){return xu.call(nf,t)?!0:xu.call(tf,t)?!1:h1.test(t)?nf[t]=!0:(tf[t]=!0,!1)}function f1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p1(t,e,n,r){if(e===null||typeof e>"u"||f1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lh,uh);Ae[e]=new qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lh,uh);Ae[e]=new qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lh,uh);Ae[e]=new qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new qe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function ch(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p1(e,n,i,r)&&(n=null),r||i===null?d1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xt=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),wr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),dh=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),fh=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),rf=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=rf&&t[rf]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Ml;function Ri(t){if(Ml===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ml=e&&e[1]||""}return`
`+Ml+t}var $l=!1;function Ul(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ri(t):""}function m1(t){switch(t.tag){case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return t=Ul(t.type,!1),t;case 11:return t=Ul(t.type.render,!1),t;case 1:return t=Ul(t.type,!0),t;default:return""}}function Mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Er:return"Fragment";case wr:return"Portal";case Pu:return"Profiler";case hh:return"StrictMode";case Ou:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hm:return(t.displayName||"Context")+".Consumer";case jm:return(t._context.displayName||"Context")+".Provider";case dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fh:return e=t.displayName||null,e!==null?e:Mu(t.type)||"Memo";case tn:e=t._payload,t=t._init;try{return Mu(t(e))}catch{}}return null}function g1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(e);case 8:return e===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function In(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y1(t){var e=qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=y1(t))}function Km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=In(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gm(t,e){e=e.checked,e!=null&&ch(t,"checked",e,!1)}function Uu(t,e){Gm(t,e);var n=In(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fu(t,e.type,In(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function of(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fu(t,e,n){(e!=="number"||qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Or(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+In(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Di(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:In(n)}}function Qm(t,e){var n=In(e.value),r=In(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,Xm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v1=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){v1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mi[e]=Mi[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+e).trim():e+"px"}function Zm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var w1=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(t,e){if(e){if(w1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,Lr=null,Mr=null;function uf(t){if(t=Ds(t)){if(typeof Hu!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Ba(e),Hu(t.stateNode,t.type,e))}}function eg(t){Lr?Mr?Mr.push(t):Mr=[t]:Lr=t}function tg(){if(Lr){var t=Lr,e=Mr;if(Mr=Lr=null,uf(t),e)for(t=0;t<e.length;t++)uf(e[t])}}function ng(t,e){return t(e)}function rg(){}var Fl=!1;function ig(t,e,n){if(Fl)return t(e,n);Fl=!0;try{return ng(t,e,n)}finally{Fl=!1,(Lr!==null||Mr!==null)&&(rg(),tg())}}function Ji(t,e){var n=t.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Wu=!1;if(Bt)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Wu=!1}function E1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $i=!1,Ko=null,Go=!1,qu=null,S1={onError:function(t){$i=!0,Ko=t}};function _1(t,e,n,r,i,s,o,a,l){$i=!1,Ko=null,E1.apply(S1,arguments)}function T1(t,e,n,r,i,s,o,a,l){if(_1.apply(this,arguments),$i){if($i){var u=Ko;$i=!1,Ko=null}else throw Error(E(198));Go||(Go=!0,qu=u)}}function hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cf(t){if(hr(t)!==t)throw Error(E(188))}function k1(t){var e=t.alternate;if(!e){if(e=hr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cf(i),t;if(s===r)return cf(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function og(t){return t=k1(t),t!==null?ag(t):null}function ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ag(t);if(e!==null)return e;t=t.sibling}return null}var lg=rt.unstable_scheduleCallback,hf=rt.unstable_cancelCallback,I1=rt.unstable_shouldYield,C1=rt.unstable_requestPaint,ce=rt.unstable_now,N1=rt.unstable_getCurrentPriorityLevel,mh=rt.unstable_ImmediatePriority,ug=rt.unstable_UserBlockingPriority,Qo=rt.unstable_NormalPriority,R1=rt.unstable_LowPriority,cg=rt.unstable_IdlePriority,Fa=null,Rt=null;function D1(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Fa,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:P1,A1=Math.log,x1=Math.LN2;function P1(t){return t>>>=0,t===0?32:31-(A1(t)/x1|0)|0}var ro=64,io=4194304;function Ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ai(a):(s&=o,s!==0&&(r=Ai(s)))}else o=n&~i,o!==0?r=Ai(o):s!==0&&(r=Ai(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function O1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=O1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hg(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ns(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function M1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fg,yh,pg,mg,gg,Gu=!1,so=[],fn=null,pn=null,mn=null,Zi=new Map,es=new Map,rn=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function df(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(e.pointerId)}}function Si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ds(e),e!==null&&yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function U1(t,e,n,r,i){switch(e){case"focusin":return fn=Si(fn,t,e,n,r,i),!0;case"dragenter":return pn=Si(pn,t,e,n,r,i),!0;case"mouseover":return mn=Si(mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zi.set(s,Si(Zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,es.set(s,Si(es.get(s)||null,t,e,n,r,i)),!0}return!1}function yg(t){var e=Vn(t.target);if(e!==null){var n=hr(e);if(n!==null){if(e=n.tag,e===13){if(e=sg(n),e!==null){t.blockedOn=e,gg(t.priority,function(){pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return e=Ds(n),e!==null&&yh(e),t.blockedOn=n,!1;e.shift()}return!0}function ff(t,e,n){Ro(t)&&n.delete(e)}function F1(){Gu=!1,fn!==null&&Ro(fn)&&(fn=null),pn!==null&&Ro(pn)&&(pn=null),mn!==null&&Ro(mn)&&(mn=null),Zi.forEach(ff),es.forEach(ff)}function _i(t,e){t.blockedOn===e&&(t.blockedOn=null,Gu||(Gu=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,F1)))}function ts(t){function e(i){return _i(i,t)}if(0<so.length){_i(so[0],t);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fn!==null&&_i(fn,t),pn!==null&&_i(pn,t),mn!==null&&_i(mn,t),Zi.forEach(e),es.forEach(e),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)yg(n),n.blockedOn===null&&rn.shift()}var $r=Xt.ReactCurrentBatchConfig,Xo=!0;function b1(t,e,n,r){var i=Y,s=$r.transition;$r.transition=null;try{Y=1,vh(t,e,n,r)}finally{Y=i,$r.transition=s}}function V1(t,e,n,r){var i=Y,s=$r.transition;$r.transition=null;try{Y=4,vh(t,e,n,r)}finally{Y=i,$r.transition=s}}function vh(t,e,n,r){if(Xo){var i=Qu(t,e,n,r);if(i===null)Ql(t,e,r,Jo,n),df(t,r);else if(U1(i,t,e,n,r))r.stopPropagation();else if(df(t,r),e&4&&-1<$1.indexOf(t)){for(;i!==null;){var s=Ds(i);if(s!==null&&fg(s),s=Qu(t,e,n,r),s===null&&Ql(t,e,r,Jo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ql(t,e,r,null,n)}}var Jo=null;function Qu(t,e,n,r){if(Jo=null,t=ph(r),t=Vn(t),t!==null)if(e=hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jo=t,null}function vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N1()){case mh:return 1;case ug:return 4;case Qo:case R1:return 16;case cg:return 536870912;default:return 16}default:return 16}}var cn=null,wh=null,Do=null;function wg(){if(Do)return Do;var t,e=wh,n=e.length,r,i="value"in cn?cn.value:cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Do=i.slice(t,1<r?1-r:void 0)}function Ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function pf(){return!1}function ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:pf,this.isPropagationStopped=pf,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=ot(li),Rs=se({},li,{view:0,detail:0}),z1=ot(Rs),Vl,zl,Ti,ba=se({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Vl=t.screenX-Ti.screenX,zl=t.screenY-Ti.screenY):zl=Vl=0,Ti=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),mf=ot(ba),B1=se({},ba,{dataTransfer:0}),j1=ot(B1),H1=se({},Rs,{relatedTarget:0}),Bl=ot(H1),W1=se({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),q1=ot(W1),K1=se({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G1=ot(K1),Q1=se({},li,{data:0}),gf=ot(Q1),Y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J1[t])?!!e[t]:!1}function Sh(){return Z1}var eE=se({},Rs,{key:function(t){if(t.key){var e=Y1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(t){return t.type==="keypress"?Ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tE=ot(eE),nE=se({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=ot(nE),rE=se({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),iE=ot(rE),sE=se({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=ot(sE),aE=se({},ba,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=ot(aE),uE=[9,13,27,32],_h=Bt&&"CompositionEvent"in window,Ui=null;Bt&&"documentMode"in document&&(Ui=document.documentMode);var cE=Bt&&"TextEvent"in window&&!Ui,Eg=Bt&&(!_h||Ui&&8<Ui&&11>=Ui),vf=String.fromCharCode(32),wf=!1;function Sg(t,e){switch(t){case"keyup":return uE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function hE(t,e){switch(t){case"compositionend":return _g(e);case"keypress":return e.which!==32?null:(wf=!0,vf);case"textInput":return t=e.data,t===vf&&wf?null:t;default:return null}}function dE(t,e){if(Sr)return t==="compositionend"||!_h&&Sg(t,e)?(t=wg(),Do=wh=cn=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var fE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fE[t.type]:e==="textarea"}function Tg(t,e,n,r){eg(r),e=Zo(e,"onChange"),0<e.length&&(n=new Eh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fi=null,ns=null;function pE(t){Lg(t,0)}function Va(t){var e=kr(t);if(Km(e))return t}function mE(t,e){if(t==="change")return e}var kg=!1;if(Bt){var jl;if(Bt){var Hl="oninput"in document;if(!Hl){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),Hl=typeof Sf.oninput=="function"}jl=Hl}else jl=!1;kg=jl&&(!document.documentMode||9<document.documentMode)}function _f(){Fi&&(Fi.detachEvent("onpropertychange",Ig),ns=Fi=null)}function Ig(t){if(t.propertyName==="value"&&Va(ns)){var e=[];Tg(e,ns,t,ph(t)),ig(pE,e)}}function gE(t,e,n){t==="focusin"?(_f(),Fi=e,ns=n,Fi.attachEvent("onpropertychange",Ig)):t==="focusout"&&_f()}function yE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Va(ns)}function vE(t,e){if(t==="click")return Va(e)}function wE(t,e){if(t==="input"||t==="change")return Va(e)}function EE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:EE;function rs(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xu.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function Tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kf(t,e){var n=Tf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tf(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ng(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qo(t.document)}return e}function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SE(t){var e=Ng(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(r!==null&&Th(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kf(n,s);var o=kf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _E=Bt&&"documentMode"in document&&11>=document.documentMode,_r=null,Yu=null,bi=null,Xu=!1;function If(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||_r==null||_r!==qo(r)||(r=_r,"selectionStart"in r&&Th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&rs(bi,r)||(bi=r,r=Zo(Yu,"onSelect"),0<r.length&&(e=new Eh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_r)))}function ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Tr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Wl={},Rg={};Bt&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function za(t){if(Wl[t])return Wl[t];if(!Tr[t])return t;var e=Tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return Wl[t]=e[n];return t}var Dg=za("animationend"),Ag=za("animationiteration"),xg=za("animationstart"),Pg=za("transitionend"),Og=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,e){Og.set(t,e),cr(e,[t])}for(var ql=0;ql<Cf.length;ql++){var Kl=Cf[ql],TE=Kl.toLowerCase(),kE=Kl[0].toUpperCase()+Kl.slice(1);An(TE,"on"+kE)}An(Dg,"onAnimationEnd");An(Ag,"onAnimationIteration");An(xg,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Pg,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function Nf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,T1(r,e,void 0,t),t.currentTarget=null}function Lg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Nf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Nf(i,a,u),s=l}}}if(Go)throw t=qu,Go=!1,qu=null,t}function Z(t,e){var n=e[nc];n===void 0&&(n=e[nc]=new Set);var r=t+"__bubble";n.has(r)||(Mg(e,t,2,!1),n.add(r))}function Gl(t,e,n){var r=0;e&&(r|=4),Mg(n,t,r,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function is(t){if(!t[lo]){t[lo]=!0,Bm.forEach(function(n){n!=="selectionchange"&&(IE.has(n)||Gl(n,!1,t),Gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,Gl("selectionchange",!1,e))}}function Mg(t,e,n,r){switch(vg(e)){case 1:var i=b1;break;case 4:i=V1;break;default:i=vh}n=i.bind(null,e,n,t),i=void 0,!Wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ql(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ig(function(){var u=s,c=ph(n),h=[];e:{var d=Og.get(t);if(d!==void 0){var g=Eh,y=t;switch(t){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":g=tE;break;case"focusin":y="focus",g=Bl;break;case"focusout":y="blur",g=Bl;break;case"beforeblur":case"afterblur":g=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=j1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iE;break;case Dg:case Ag:case xg:g=q1;break;case Pg:g=oE;break;case"scroll":g=z1;break;case"wheel":g=lE;break;case"copy":case"cut":case"paste":g=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=yf}var v=(e&4)!==0,O=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ji(f,p),w!=null&&v.push(ss(f,w,m)))),O)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==ju&&(y=n.relatedTarget||n.fromElement)&&(Vn(y)||y[jt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Vn(y):null,y!==null&&(O=hr(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=mf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=yf,w="onPointerLeave",p="onPointerEnter",f="pointer"),O=g==null?d:kr(g),m=y==null?d:kr(y),d=new v(w,f+"leave",g,n,c),d.target=O,d.relatedTarget=m,w=null,Vn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=O,w=v),O=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=mr(m))f++;for(m=0,w=p;w;w=mr(w))m++;for(;0<f-m;)v=mr(v),f--;for(;0<m-f;)p=mr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=mr(v),p=mr(p)}v=null}else v=null;g!==null&&Rf(h,d,g,v,!1),y!==null&&O!==null&&Rf(h,O,y,v,!0)}}e:{if(d=u?kr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=mE;else if(Ef(d))if(kg)T=wE;else{T=yE;var C=gE}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=vE);if(T&&(T=T(t,u))){Tg(h,T,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Fu(d,"number",d.value)}switch(C=u?kr(u):window,t){case"focusin":(Ef(C)||C.contentEditable==="true")&&(_r=C,Yu=u,bi=null);break;case"focusout":bi=Yu=_r=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,If(h,n,c);break;case"selectionchange":if(_E)break;case"keydown":case"keyup":If(h,n,c)}var N;if(_h)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Sr?Sg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Eg&&n.locale!=="ko"&&(Sr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Sr&&(N=wg()):(cn=c,wh="value"in cn?cn.value:cn.textContent,Sr=!0)),C=Zo(u,x),0<C.length&&(x=new gf(x,t,null,n,c),h.push({event:x,listeners:C}),N?x.data=N:(N=_g(n),N!==null&&(x.data=N)))),(N=cE?hE(t,n):dE(t,n))&&(u=Zo(u,"onBeforeInput"),0<u.length&&(c=new gf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Lg(h,e)})}function ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ji(t,n),s!=null&&r.unshift(ss(t,s,i)),s=Ji(t,e),s!=null&&r.push(ss(t,s,i))),t=t.return}return r}function mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ji(n,s),l!=null&&o.unshift(ss(n,l,a))):i||(l=Ji(n,s),l!=null&&o.push(ss(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CE=/\r\n?/g,NE=/\u0000|\uFFFD/g;function Df(t){return(typeof t=="string"?t:""+t).replace(CE,`
`).replace(NE,"")}function uo(t,e,n){if(e=Df(e),Df(t)!==e&&n)throw Error(E(425))}function ea(){}var Ju=null,Zu=null;function ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tc=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,Af=typeof Promise=="function"?Promise:void 0,DE=typeof queueMicrotask=="function"?queueMicrotask:typeof Af<"u"?function(t){return Af.resolve(null).then(t).catch(AE)}:tc;function AE(t){setTimeout(function(){throw t})}function Yl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ts(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ts(e)}function gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),It="__reactFiber$"+ui,os="__reactProps$"+ui,jt="__reactContainer$"+ui,nc="__reactEvents$"+ui,xE="__reactListeners$"+ui,PE="__reactHandles$"+ui;function Vn(t){var e=t[It];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jt]||n[It]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xf(t);t!==null;){if(n=t[It])return n;t=xf(t)}return e}t=n,n=t.parentNode}return null}function Ds(t){return t=t[It]||t[jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Ba(t){return t[os]||null}var rc=[],Ir=-1;function xn(t){return{current:t}}function ee(t){0>Ir||(t.current=rc[Ir],rc[Ir]=null,Ir--)}function X(t,e){Ir++,rc[Ir]=t.current,t.current=e}var Cn={},be=xn(Cn),Ye=xn(!1),er=Cn;function qr(t,e){var n=t.type.contextTypes;if(!n)return Cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(t){return t=t.childContextTypes,t!=null}function ta(){ee(Ye),ee(be)}function Pf(t,e,n){if(be.current!==Cn)throw Error(E(168));X(be,e),X(Ye,n)}function $g(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,g1(t)||"Unknown",i));return se({},n,r)}function na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cn,er=be.current,X(be,t),X(Ye,Ye.current),!0}function Of(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=$g(t,e,er),r.__reactInternalMemoizedMergedChildContext=t,ee(Ye),ee(be),X(be,t)):ee(Ye),X(Ye,n)}var Mt=null,ja=!1,Xl=!1;function Ug(t){Mt===null?Mt=[t]:Mt.push(t)}function OE(t){ja=!0,Ug(t)}function Pn(){if(!Xl&&Mt!==null){Xl=!0;var t=0,e=Y;try{var n=Mt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mt=null,ja=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(t+1)),lg(mh,Pn),i}finally{Y=e,Xl=!1}}return null}var Cr=[],Nr=0,ra=null,ia=0,at=[],lt=0,tr=null,$t=1,Ut="";function Un(t,e){Cr[Nr++]=ia,Cr[Nr++]=ra,ra=t,ia=e}function Fg(t,e,n){at[lt++]=$t,at[lt++]=Ut,at[lt++]=tr,tr=t;var r=$t;t=Ut;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$t=1<<32-wt(e)+i|n<<i|r,Ut=s+t}else $t=1<<s|n<<i|r,Ut=t}function kh(t){t.return!==null&&(Un(t,1),Fg(t,1,0))}function Ih(t){for(;t===ra;)ra=Cr[--Nr],Cr[Nr]=null,ia=Cr[--Nr],Cr[Nr]=null;for(;t===tr;)tr=at[--lt],at[lt]=null,Ut=at[--lt],at[lt]=null,$t=at[--lt],at[lt]=null}var nt=null,tt=null,te=!1,vt=null;function bg(t,e){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=tr!==null?{id:$t,overflow:Ut}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function ic(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sc(t){if(te){var e=tt;if(e){var n=e;if(!Lf(t,e)){if(ic(t))throw Error(E(418));e=gn(n.nextSibling);var r=nt;e&&Lf(t,e)?bg(r,n):(t.flags=t.flags&-4097|2,te=!1,nt=t)}}else{if(ic(t))throw Error(E(418));t.flags=t.flags&-4097|2,te=!1,nt=t}}}function Mf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function co(t){if(t!==nt)return!1;if(!te)return Mf(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ec(t.type,t.memoizedProps)),e&&(e=tt)){if(ic(t))throw Vg(),Error(E(418));for(;e;)bg(t,e),e=gn(e.nextSibling)}if(Mf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?gn(t.stateNode.nextSibling):null;return!0}function Vg(){for(var t=tt;t;)t=gn(t.nextSibling)}function Kr(){tt=nt=null,te=!1}function Ch(t){vt===null?vt=[t]:vt.push(t)}var LE=Xt.ReactCurrentBatchConfig;function mt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var sa=xn(null),oa=null,Rr=null,Nh=null;function Rh(){Nh=Rr=oa=null}function Dh(t){var e=sa.current;ee(sa),t._currentValue=e}function oc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ur(t,e){oa=t,Nh=Rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qe=!0),t.firstContext=null)}function ht(t){var e=t._currentValue;if(Nh!==t)if(t={context:t,memoizedValue:e,next:null},Rr===null){if(oa===null)throw Error(E(308));Rr=t,oa.dependencies={lanes:0,firstContext:t}}else Rr=Rr.next=t;return e}var zn=null;function Ah(t){zn===null?zn=[t]:zn.push(t)}function zg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ah(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ht(t,r)}function Ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nn=!1;function xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ht(t,n)}return i=r.interleaved,i===null?(e.next=e,Ah(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ht(t,n)}function xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}function $f(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function aa(t,e,n,r){var i=t.updateQueue;nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=se({},h,d);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);rr|=o,t.lanes=o,t.memoizedState=h}}function Uf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var jg=new zm.Component().refs;function ac(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ha={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=He(),i=wn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=yn(t,s,i),e!==null&&(Et(e,t,i,r),xo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=He(),i=wn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yn(t,s,i),e!==null&&(Et(e,t,i,r),xo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=He(),r=wn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=yn(t,i,r),e!==null&&(Et(e,t,r,n),xo(e,t,r))}};function Ff(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rs(n,r)||!rs(i,s):!0}function Hg(t,e,n){var r=!1,i=Cn,s=e.contextType;return typeof s=="object"&&s!==null?s=ht(s):(i=Xe(e)?er:be.current,r=e.contextTypes,s=(r=r!=null)?qr(t,i):Cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ha,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ha.enqueueReplaceState(e,e.state,null)}function lc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=jg,xh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ht(s):(s=Xe(e)?er:be.current,i.context=qr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ac(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ha.enqueueReplaceState(i,i.state,null),aa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===jg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vf(t){var e=t._init;return e(t._payload)}function Wg(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=En(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=iu(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Er?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tn&&Vf(T)===f.type)?(w=i(f,m.props),w.ref=ki(p,f,m),w.return=p,w):(w=Uo(m.type,m.key,m.props,null,p.mode,w),w.ref=ki(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=su(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,T){return f===null||f.tag!==7?(f=Kn(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=iu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case eo:return m=Uo(f.type,f.key,f.props,null,p.mode,m),m.ref=ki(p,null,f),m.return=p,m;case wr:return f=su(f,p.mode,m),f.return=p,f;case tn:var w=f._init;return h(p,w(f._payload),m)}if(Di(f)||wi(f))return f=Kn(f,p.mode,m,null),f.return=p,f;ho(p,f)}return null}function d(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:return m.key===T?l(p,f,m,w):null;case wr:return m.key===T?u(p,f,m,w):null;case tn:return T=m._init,d(p,f,T(m._payload),w)}if(Di(m)||wi(m))return T!==null?null:c(p,f,m,w,null);ho(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case eo:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case wr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case tn:var C=w._init;return g(p,f,m,C(w._payload),T)}if(Di(w)||wi(w))return p=p.get(m)||null,c(f,p,w,T,null);ho(f,w)}return null}function y(p,f,m,w){for(var T=null,C=null,N=f,x=f=0,J=null;N!==null&&x<m.length;x++){N.index>x?(J=N,N=null):J=N.sibling;var B=d(p,N,m[x],w);if(B===null){N===null&&(N=J);break}t&&N&&B.alternate===null&&e(p,N),f=s(B,f,x),C===null?T=B:C.sibling=B,C=B,N=J}if(x===m.length)return n(p,N),te&&Un(p,x),T;if(N===null){for(;x<m.length;x++)N=h(p,m[x],w),N!==null&&(f=s(N,f,x),C===null?T=N:C.sibling=N,C=N);return te&&Un(p,x),T}for(N=r(p,N);x<m.length;x++)J=g(N,p,x,m[x],w),J!==null&&(t&&J.alternate!==null&&N.delete(J.key===null?x:J.key),f=s(J,f,x),C===null?T=J:C.sibling=J,C=J);return t&&N.forEach(function(ft){return e(p,ft)}),te&&Un(p,x),T}function v(p,f,m,w){var T=wi(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var C=T=null,N=f,x=f=0,J=null,B=m.next();N!==null&&!B.done;x++,B=m.next()){N.index>x?(J=N,N=null):J=N.sibling;var ft=d(p,N,B.value,w);if(ft===null){N===null&&(N=J);break}t&&N&&ft.alternate===null&&e(p,N),f=s(ft,f,x),C===null?T=ft:C.sibling=ft,C=ft,N=J}if(B.done)return n(p,N),te&&Un(p,x),T;if(N===null){for(;!B.done;x++,B=m.next())B=h(p,B.value,w),B!==null&&(f=s(B,f,x),C===null?T=B:C.sibling=B,C=B);return te&&Un(p,x),T}for(N=r(p,N);!B.done;x++,B=m.next())B=g(N,p,x,B.value,w),B!==null&&(t&&B.alternate!==null&&N.delete(B.key===null?x:B.key),f=s(B,f,x),C===null?T=B:C.sibling=B,C=B);return t&&N.forEach(function(yi){return e(p,yi)}),te&&Un(p,x),T}function O(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Er&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:e:{for(var T=m.key,C=f;C!==null;){if(C.key===T){if(T=m.type,T===Er){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tn&&Vf(T)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=ki(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Er?(f=Kn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Uo(m.type,m.key,m.props,null,p.mode,w),w.ref=ki(p,f,m),w.return=p,p=w)}return o(p);case wr:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=su(m,p.mode,w),f.return=p,p=f}return o(p);case tn:return C=m._init,O(p,f,C(m._payload),w)}if(Di(m))return y(p,f,m,w);if(wi(m))return v(p,f,m,w);ho(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=iu(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return O}var Gr=Wg(!0),qg=Wg(!1),As={},Dt=xn(As),as=xn(As),ls=xn(As);function Bn(t){if(t===As)throw Error(E(174));return t}function Ph(t,e){switch(X(ls,e),X(as,t),X(Dt,As),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}ee(Dt),X(Dt,e)}function Qr(){ee(Dt),ee(as),ee(ls)}function Kg(t){Bn(ls.current);var e=Bn(Dt.current),n=Vu(e,t.type);e!==n&&(X(as,t),X(Dt,n))}function Oh(t){as.current===t&&(ee(Dt),ee(as))}var re=xn(0);function la(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jl=[];function Lh(){for(var t=0;t<Jl.length;t++)Jl[t]._workInProgressVersionPrimary=null;Jl.length=0}var Po=Xt.ReactCurrentDispatcher,Zl=Xt.ReactCurrentBatchConfig,nr=0,ie=null,me=null,_e=null,ua=!1,Vi=!1,us=0,ME=0;function Pe(){throw Error(E(321))}function Mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function $h(t,e,n,r,i,s){if(nr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Po.current=t===null||t.memoizedState===null?bE:VE,t=n(r,i),Vi){s=0;do{if(Vi=!1,us=0,25<=s)throw Error(E(301));s+=1,_e=me=null,e.updateQueue=null,Po.current=zE,t=n(r,i)}while(Vi)}if(Po.current=ca,e=me!==null&&me.next!==null,nr=0,_e=me=ie=null,ua=!1,e)throw Error(E(300));return t}function Uh(){var t=us!==0;return us=0,t}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ie.memoizedState=_e=t:_e=_e.next=t,_e}function dt(){if(me===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=_e===null?ie.memoizedState:_e.next;if(e!==null)_e=e,me=t;else{if(t===null)throw Error(E(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},_e===null?ie.memoizedState=_e=t:_e=_e.next=t}return _e}function cs(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=dt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ie.lanes|=c,rr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,_t(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,rr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=dt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(Qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gg(){}function Qg(t,e){var n=ie,r=dt(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,Fh(Jg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,hs(9,Xg.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(E(349));nr&30||Yg(n,e,i)}return i}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xg(t,e,n,r){e.value=n,e.getSnapshot=r,Zg(e)&&ey(t)}function Jg(t,e,n){return n(function(){Zg(e)&&ey(t)})}function Zg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function ey(t){var e=Ht(t,1);e!==null&&Et(e,t,1,-1)}function zf(t){var e=kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},e.queue=t,t=t.dispatch=FE.bind(null,ie,t),[e.memoizedState,t]}function hs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ty(){return dt().memoizedState}function Oo(t,e,n,r){var i=kt();ie.flags|=t,i.memoizedState=hs(1|e,n,void 0,r===void 0?null:r)}function Wa(t,e,n,r){var i=dt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&Mh(r,o.deps)){i.memoizedState=hs(e,n,s,r);return}}ie.flags|=t,i.memoizedState=hs(1|e,n,s,r)}function Bf(t,e){return Oo(8390656,8,t,e)}function Fh(t,e){return Wa(2048,8,t,e)}function ny(t,e){return Wa(4,2,t,e)}function ry(t,e){return Wa(4,4,t,e)}function iy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sy(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4,4,iy.bind(null,e,t),n)}function bh(){}function oy(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ay(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ly(t,e,n){return nr&21?(_t(n,e)||(n=hg(),ie.lanes|=n,rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n)}function $E(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Zl.transition;Zl.transition={};try{t(!1),e()}finally{Y=n,Zl.transition=r}}function uy(){return dt().memoizedState}function UE(t,e,n){var r=wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cy(t))hy(e,n);else if(n=zg(t,e,n,r),n!==null){var i=He();Et(n,t,r,i),dy(n,e,r)}}function FE(t,e,n){var r=wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cy(t))hy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,o)){var l=e.interleaved;l===null?(i.next=i,Ah(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zg(t,e,i,r),n!==null&&(i=He(),Et(n,t,r,i),dy(n,e,r))}}function cy(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function hy(t,e){Vi=ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}var ca={readContext:ht,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},bE={readContext:ht,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:ht,useEffect:Bf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4194308,4,iy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var n=kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=UE.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:zf,useDebugValue:bh,useDeferredValue:function(t){return kt().memoizedState=t},useTransition:function(){var t=zf(!1),e=t[0];return t=$E.bind(null,t[1]),kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=kt();if(te){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Te===null)throw Error(E(349));nr&30||Yg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bf(Jg.bind(null,r,s,t),[t]),r.flags|=2048,hs(9,Xg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kt(),e=Te.identifierPrefix;if(te){var n=Ut,r=$t;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ME++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VE={readContext:ht,useCallback:oy,useContext:ht,useEffect:Fh,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:ry,useMemo:ay,useReducer:eu,useRef:ty,useState:function(){return eu(cs)},useDebugValue:bh,useDeferredValue:function(t){var e=dt();return ly(e,me.memoizedState,t)},useTransition:function(){var t=eu(cs)[0],e=dt().memoizedState;return[t,e]},useMutableSource:Gg,useSyncExternalStore:Qg,useId:uy,unstable_isNewReconciler:!1},zE={readContext:ht,useCallback:oy,useContext:ht,useEffect:Fh,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:ry,useMemo:ay,useReducer:tu,useRef:ty,useState:function(){return tu(cs)},useDebugValue:bh,useDeferredValue:function(t){var e=dt();return me===null?e.memoizedState=t:ly(e,me.memoizedState,t)},useTransition:function(){var t=tu(cs)[0],e=dt().memoizedState;return[t,e]},useMutableSource:Gg,useSyncExternalStore:Qg,useId:uy,unstable_isNewReconciler:!1};function Yr(t,e){try{var n="",r=e;do n+=m1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function fy(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){da||(da=!0,wc=r),uc(t,e)},n}function py(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uc(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nS.bind(null,t,e,n),e.then(t,t))}function Hf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,yn(n,e,1))),n.lanes|=1),t)}var jE=Xt.ReactCurrentOwner,Qe=!1;function Be(t,e,n,r){e.child=t===null?qg(e,null,n,r):Gr(e,t.child,n,r)}function qf(t,e,n,r,i){n=n.render;var s=e.ref;return Ur(e,i),r=$h(t,e,n,r,s,i),n=Uh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(te&&n&&kh(e),e.flags|=1,Be(t,e,r,i),e.child)}function Kf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,my(t,e,s,r,i)):(t=Uo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rs,n(o,r)&&t.ref===e.ref)return Wt(t,e,i)}return e.flags|=1,t=En(s,r),t.ref=e.ref,t.return=e,e.child=t}function my(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rs(s,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qe=!0);else return e.lanes=t.lanes,Wt(t,e,i)}return cc(t,e,n,r,i)}function gy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Ar,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Ar,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Ar,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Ar,et),et|=r;return Be(t,e,i,n),e.child}function yy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cc(t,e,n,r,i){var s=Xe(n)?er:be.current;return s=qr(e,s),Ur(e,i),n=$h(t,e,n,r,s,i),r=Uh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(te&&r&&kh(e),e.flags|=1,Be(t,e,n,i),e.child)}function Gf(t,e,n,r,i){if(Xe(n)){var s=!0;na(e)}else s=!1;if(Ur(e,i),e.stateNode===null)Lo(t,e),Hg(e,n,r),lc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=Xe(n)?er:be.current,u=qr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bf(e,o,r,u),nn=!1;var d=e.memoizedState;o.state=d,aa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ye.current||nn?(typeof c=="function"&&(ac(e,n,c,r),l=e.memoizedState),(a=nn||Ff(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=Xe(n)?er:be.current,l=qr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&bf(e,o,r,l),nn=!1,d=e.memoizedState,o.state=d,aa(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ye.current||nn?(typeof g=="function"&&(ac(e,n,g,r),y=e.memoizedState),(u=nn||Ff(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return hc(t,e,n,r,s,i)}function hc(t,e,n,r,i,s){yy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Of(e,n,!1),Wt(t,e,s);r=e.stateNode,jE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gr(e,t.child,null,s),e.child=Gr(e,null,a,s)):Be(t,e,a,s),e.memoizedState=r.state,i&&Of(e,n,!0),e.child}function vy(t){var e=t.stateNode;e.pendingContext?Pf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pf(t,e.context,!1),Ph(t,e.containerInfo)}function Qf(t,e,n,r,i){return Kr(),Ch(i),e.flags|=256,Be(t,e,n,r),e.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function wy(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(re,i&1),t===null)return sc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ga(o,r,0,null),t=Kn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fc(n),e.memoizedState=dc,t):Vh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return HE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=En(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=En(a,s):(s=Kn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dc,r}return s=t.child,t=s.sibling,r=En(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vh(t,e){return e=Ga({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fo(t,e,n,r){return r!==null&&Ch(r),Gr(e,t.child,null,n),t=Vh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nu(Error(E(422))),fo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ga({mode:"visible",children:r.children},i,0,null),s=Kn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gr(e,t.child,null,o),e.child.memoizedState=fc(o),e.memoizedState=dc,s);if(!(e.mode&1))return fo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=nu(s,r,void 0),fo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qe||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(t,i),Et(r,t,i,-1))}return qh(),r=nu(Error(E(421))),fo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=gn(i.nextSibling),nt=e,te=!0,vt=null,t!==null&&(at[lt++]=$t,at[lt++]=Ut,at[lt++]=tr,$t=t.id,Ut=t.overflow,tr=e),e=Vh(e,r.children),e.flags|=4096,e)}function Yf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),oc(t.return,e,n)}function ru(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ey(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Be(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yf(t,n,e);else if(t.tag===19)Yf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&la(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ru(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&la(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ru(e,!0,n,null,s);break;case"together":ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=En(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=En(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WE(t,e,n){switch(e.tag){case 3:vy(e),Kr();break;case 5:Kg(e);break;case 1:Xe(e.type)&&na(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(sa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?wy(t,e,n):(X(re,re.current&1),t=Wt(t,e,n),t!==null?t.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ey(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,gy(t,e,n)}return Wt(t,e,n)}var Sy,pc,_y,Ty;Sy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pc=function(){};_y=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(Dt.current);var s=null;switch(n){case"input":i=$u(t,i),r=$u(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=bu(t,i),r=bu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ea)}zu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ty=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ii(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qE(t,e,n){var r=e.pendingProps;switch(Ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Xe(e.type)&&ta(),Oe(e),null;case 3:return r=e.stateNode,Qr(),ee(Ye),ee(be),Lh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(_c(vt),vt=null))),pc(t,e),Oe(e),null;case 5:Oh(e);var i=Bn(ls.current);if(n=e.type,t!==null&&e.stateNode!=null)_y(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Oe(e),null}if(t=Bn(Dt.current),co(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[It]=e,r[os]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<xi.length;i++)Z(xi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":sf(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":af(r,s),Z("invalid",r)}zu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&uo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uo(r.textContent,a,t),i=["children",""+a]):Yi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":to(r),of(r,s,!0);break;case"textarea":to(r),lf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ea)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[It]=e,t[os]=r,Sy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bu(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<xi.length;i++)Z(xi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":sf(t,r),i=$u(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",t);break;case"textarea":af(t,r),i=bu(t,r),Z("invalid",t);break;default:i=r}zu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xi(t,l):typeof l=="number"&&Xi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&ch(t,s,l,o))}switch(n){case"input":to(t),of(t,r,!1);break;case"textarea":to(t),lf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+In(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Or(t,!!r.multiple,s,!1):r.defaultValue!=null&&Or(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)Ty(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Bn(ls.current),Bn(Dt.current),co(e)){if(r=e.stateNode,n=e.memoizedProps,r[It]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=e,e.stateNode=r}return Oe(e),null;case 13:if(ee(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&tt!==null&&e.mode&1&&!(e.flags&128))Vg(),Kr(),e.flags|=98560,s=!1;else if(s=co(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[It]=e}else Kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else vt!==null&&(_c(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?ye===0&&(ye=3):qh())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return Qr(),pc(t,e),t===null&&is(e.stateNode.containerInfo),Oe(e),null;case 10:return Dh(e.type._context),Oe(e),null;case 17:return Xe(e.type)&&ta(),Oe(e),null;case 19:if(ee(re),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ii(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=la(t),o!==null){for(e.flags|=128,Ii(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>Xr&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304)}else{if(!r)if(t=la(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Oe(e),null}else 2*ce()-s.renderingStartTime>Xr&&n!==1073741824&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=re.current,X(re,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Wh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function KE(t,e){switch(Ih(e),e.tag){case 1:return Xe(e.type)&&ta(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qr(),ee(Ye),ee(be),Lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Oh(e),null;case 13:if(ee(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(re),null;case 4:return Qr(),null;case 10:return Dh(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var po=!1,Me=!1,GE=typeof WeakSet=="function"?WeakSet:Set,R=null;function Dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function mc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var Xf=!1;function QE(t,e){if(Ju=Xo,t=Ng(),Th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:t,selectionRange:n},Xo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,O=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:mt(e.type,v),O);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){oe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return y=Xf,Xf=!1,y}function zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mc(e,n,s)}i=i.next}while(i!==r)}}function qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ky(t){var e=t.alternate;e!==null&&(t.alternate=null,ky(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[It],delete e[os],delete e[nc],delete e[xE],delete e[PE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iy(t){return t.tag===5||t.tag===3||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ea));else if(r!==4&&(t=t.child,t!==null))for(yc(t,e,n),t=t.sibling;t!==null;)yc(t,e,n),t=t.sibling}function vc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vc(t,e,n),t=t.sibling;t!==null;)vc(t,e,n),t=t.sibling}var Ce=null,yt=!1;function Zt(t,e,n){for(n=n.child;n!==null;)Cy(t,e,n),n=n.sibling}function Cy(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:Me||Dr(n,e);case 6:var r=Ce,i=yt;Ce=null,Zt(t,e,n),Ce=r,yt=i,Ce!==null&&(yt?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(yt?(t=Ce,n=n.stateNode,t.nodeType===8?Yl(t.parentNode,n):t.nodeType===1&&Yl(t,n),ts(t)):Yl(Ce,n.stateNode));break;case 4:r=Ce,i=yt,Ce=n.stateNode.containerInfo,yt=!0,Zt(t,e,n),Ce=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mc(n,e,o),i=i.next}while(i!==r)}Zt(t,e,n);break;case 1:if(!Me&&(Dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}Zt(t,e,n);break;case 21:Zt(t,e,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Zt(t,e,n),Me=r):Zt(t,e,n);break;default:Zt(t,e,n)}}function Zf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GE),e.forEach(function(r){var i=iS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,yt=!1;break e;case 3:Ce=a.stateNode.containerInfo,yt=!0;break e;case 4:Ce=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Ce===null)throw Error(E(160));Cy(s,o,i),Ce=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ny(e,t),e=e.sibling}function Ny(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pt(e,t),Tt(t),r&4){try{zi(3,t,t.return),qa(3,t)}catch(v){oe(t,t.return,v)}try{zi(5,t,t.return)}catch(v){oe(t,t.return,v)}}break;case 1:pt(e,t),Tt(t),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(pt(e,t),Tt(t),r&512&&n!==null&&Dr(n,n.return),t.flags&32){var i=t.stateNode;try{Xi(i,"")}catch(v){oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gm(i,s),Bu(a,o);var u=Bu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Zm(i,h):c==="dangerouslySetInnerHTML"?Xm(i,h):c==="children"?Xi(i,h):ch(i,c,h,u)}switch(a){case"input":Uu(i,s);break;case"textarea":Qm(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Or(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Or(i,!!s.multiple,s.defaultValue,!0):Or(i,!!s.multiple,s.multiple?[]:"",!1))}i[os]=s}catch(v){oe(t,t.return,v)}}break;case 6:if(pt(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){oe(t,t.return,v)}}break;case 3:if(pt(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(e.containerInfo)}catch(v){oe(t,t.return,v)}break;case 4:pt(e,t),Tt(t);break;case 13:pt(e,t),Tt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jh=ce())),r&4&&Zf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Me=(u=Me)||c,pt(e,t),Me=u):pt(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,g=d.child,d.tag){case 0:case 11:case 14:case 15:zi(4,d,d.return);break;case 1:Dr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:Dr(d,d.return);break;case 22:if(d.memoizedState!==null){tp(h);continue}}g!==null?(g.return=d,R=g):tp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jm("display",o))}catch(v){oe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){oe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pt(e,t),Tt(t),r&4&&Zf(t);break;case 21:break;default:pt(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iy(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xi(i,""),r.flags&=-33);var s=Jf(t);vc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jf(t);yc(t,a,o);break;default:throw Error(E(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YE(t,e,n){R=t,Ry(t)}function Ry(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||po;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Me;a=po;var u=Me;if(po=o,(Me=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?np(i):l!==null?(l.return=o,R=l):np(i);for(;s!==null;)R=s,Ry(s),s=s.sibling;R=i,po=a,Me=u}ep(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):ep(t)}}function ep(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Me||qa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ts(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Me||e.flags&512&&gc(e)}catch(d){oe(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function tp(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function np(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qa(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{gc(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{gc(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var XE=Math.ceil,ha=Xt.ReactCurrentDispatcher,zh=Xt.ReactCurrentOwner,ct=Xt.ReactCurrentBatchConfig,q=0,Te=null,fe=null,Re=0,et=0,Ar=xn(0),ye=0,ds=null,rr=0,Ka=0,Bh=0,Bi=null,Ke=null,jh=0,Xr=1/0,Lt=null,da=!1,wc=null,vn=null,mo=!1,hn=null,fa=0,ji=0,Ec=null,Mo=-1,$o=0;function He(){return q&6?ce():Mo!==-1?Mo:Mo=ce()}function wn(t){return t.mode&1?q&2&&Re!==0?Re&-Re:LE.transition!==null?($o===0&&($o=hg()),$o):(t=Y,t!==0||(t=window.event,t=t===void 0?16:vg(t.type)),t):1}function Et(t,e,n,r){if(50<ji)throw ji=0,Ec=null,Error(E(185));Ns(t,n,r),(!(q&2)||t!==Te)&&(t===Te&&(!(q&2)&&(Ka|=n),ye===4&&sn(t,Re)),Je(t,r),n===1&&q===0&&!(e.mode&1)&&(Xr=ce()+500,ja&&Pn()))}function Je(t,e){var n=t.callbackNode;L1(t,e);var r=Yo(t,t===Te?Re:0);if(r===0)n!==null&&hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hf(n),e===1)t.tag===0?OE(rp.bind(null,t)):Ug(rp.bind(null,t)),DE(function(){!(q&6)&&Pn()}),n=null;else{switch(dg(r)){case 1:n=mh;break;case 4:n=ug;break;case 16:n=Qo;break;case 536870912:n=cg;break;default:n=Qo}n=$y(n,Dy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dy(t,e){if(Mo=-1,$o=0,q&6)throw Error(E(327));var n=t.callbackNode;if(Fr()&&t.callbackNode!==n)return null;var r=Yo(t,t===Te?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pa(t,r);else{e=r;var i=q;q|=2;var s=xy();(Te!==t||Re!==e)&&(Lt=null,Xr=ce()+500,qn(t,e));do try{eS();break}catch(a){Ay(t,a)}while(1);Rh(),ha.current=s,q=i,fe!==null?e=0:(Te=null,Re=0,e=ye)}if(e!==0){if(e===2&&(i=Ku(t),i!==0&&(r=i,e=Sc(t,i))),e===1)throw n=ds,qn(t,0),sn(t,r),Je(t,ce()),n;if(e===6)sn(t,r);else{if(i=t.current.alternate,!(r&30)&&!JE(i)&&(e=pa(t,r),e===2&&(s=Ku(t),s!==0&&(r=s,e=Sc(t,s))),e===1))throw n=ds,qn(t,0),sn(t,r),Je(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Fn(t,Ke,Lt);break;case 3:if(sn(t,r),(r&130023424)===r&&(e=jh+500-ce(),10<e)){if(Yo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){He(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tc(Fn.bind(null,t,Ke,Lt),e);break}Fn(t,Ke,Lt);break;case 4:if(sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XE(r/1960))-r,10<r){t.timeoutHandle=tc(Fn.bind(null,t,Ke,Lt),r);break}Fn(t,Ke,Lt);break;case 5:Fn(t,Ke,Lt);break;default:throw Error(E(329))}}}return Je(t,ce()),t.callbackNode===n?Dy.bind(null,t):null}function Sc(t,e){var n=Bi;return t.current.memoizedState.isDehydrated&&(qn(t,e).flags|=256),t=pa(t,e),t!==2&&(e=Ke,Ke=n,e!==null&&_c(e)),t}function _c(t){Ke===null?Ke=t:Ke.push.apply(Ke,t)}function JE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sn(t,e){for(e&=~Bh,e&=~Ka,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function rp(t){if(q&6)throw Error(E(327));Fr();var e=Yo(t,0);if(!(e&1))return Je(t,ce()),null;var n=pa(t,e);if(t.tag!==0&&n===2){var r=Ku(t);r!==0&&(e=r,n=Sc(t,r))}if(n===1)throw n=ds,qn(t,0),sn(t,e),Je(t,ce()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fn(t,Ke,Lt),Je(t,ce()),null}function Hh(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Xr=ce()+500,ja&&Pn())}}function ir(t){hn!==null&&hn.tag===0&&!(q&6)&&Fr();var e=q;q|=1;var n=ct.transition,r=Y;try{if(ct.transition=null,Y=1,t)return t()}finally{Y=r,ct.transition=n,q=e,!(q&6)&&Pn()}}function Wh(){et=Ar.current,ee(Ar)}function qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RE(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:Qr(),ee(Ye),ee(be),Lh();break;case 5:Oh(r);break;case 4:Qr();break;case 13:ee(re);break;case 19:ee(re);break;case 10:Dh(r.type._context);break;case 22:case 23:Wh()}n=n.return}if(Te=t,fe=t=En(t.current,null),Re=et=e,ye=0,ds=null,Bh=Ka=rr=0,Ke=Bi=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function Ay(t,e){do{var n=fe;try{if(Rh(),Po.current=ca,ua){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ua=!1}if(nr=0,_e=me=ie=null,Vi=!1,us=0,zh.current=null,n===null||n.return===null){ye=1,ds=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Hf(o);if(g!==null){g.flags&=-257,Wf(g,o,a,s,e),g.mode&1&&jf(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){jf(s,u,e),qh();break e}l=Error(E(426))}}else if(te&&a.mode&1){var O=Hf(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Wf(O,o,a,s,e),Ch(Yr(l,a));break e}}s=l=Yr(l,a),ye!==4&&(ye=2),Bi===null?Bi=[s]:Bi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=fy(s,l,e);$f(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vn===null||!vn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=py(s,a,e);$f(s,w);break e}}s=s.return}while(s!==null)}Oy(n)}catch(T){e=T,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function xy(){var t=ha.current;return ha.current=ca,t===null?ca:t}function qh(){(ye===0||ye===3||ye===2)&&(ye=4),Te===null||!(rr&268435455)&&!(Ka&268435455)||sn(Te,Re)}function pa(t,e){var n=q;q|=2;var r=xy();(Te!==t||Re!==e)&&(Lt=null,qn(t,e));do try{ZE();break}catch(i){Ay(t,i)}while(1);if(Rh(),q=n,ha.current=r,fe!==null)throw Error(E(261));return Te=null,Re=0,ye}function ZE(){for(;fe!==null;)Py(fe)}function eS(){for(;fe!==null&&!I1();)Py(fe)}function Py(t){var e=My(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Oy(t):fe=e,zh.current=null}function Oy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KE(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,fe=null;return}}else if(n=qE(n,e,et),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ye===0&&(ye=5)}function Fn(t,e,n){var r=Y,i=ct.transition;try{ct.transition=null,Y=1,tS(t,e,n,r)}finally{ct.transition=i,Y=r}return null}function tS(t,e,n,r){do Fr();while(hn!==null);if(q&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M1(t,s),t===Te&&(fe=Te=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,$y(Qo,function(){return Fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var o=Y;Y=1;var a=q;q|=4,zh.current=null,QE(t,n),Ny(n,t),SE(Zu),Xo=!!Ju,Zu=Ju=null,t.current=n,YE(n),C1(),q=a,Y=o,ct.transition=s}else t.current=n;if(mo&&(mo=!1,hn=t,fa=i),s=t.pendingLanes,s===0&&(vn=null),D1(n.stateNode),Je(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(da)throw da=!1,t=wc,wc=null,t;return fa&1&&t.tag!==0&&Fr(),s=t.pendingLanes,s&1?t===Ec?ji++:(ji=0,Ec=t):ji=0,Pn(),null}function Fr(){if(hn!==null){var t=dg(fa),e=ct.transition,n=Y;try{if(ct.transition=null,Y=16>t?16:t,hn===null)var r=!1;else{if(t=hn,hn=null,fa=0,q&6)throw Error(E(331));var i=q;for(q|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:zi(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,g=c.return;if(ky(c),c===u){R=null;break}if(d!==null){d.return=g,R=d;break}R=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var O=v.sibling;v.sibling=null,v=O}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qa(9,a)}}catch(T){oe(a,a.return,T)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(q=i,Pn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Fa,t)}catch{}r=!0}return r}finally{Y=n,ct.transition=e}}return!1}function ip(t,e,n){e=Yr(n,e),e=fy(t,e,1),t=yn(t,e,1),e=He(),t!==null&&(Ns(t,1,e),Je(t,e))}function oe(t,e,n){if(t.tag===3)ip(t,t,n);else for(;e!==null;){if(e.tag===3){ip(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=Yr(n,t),t=py(e,t,1),e=yn(e,t,1),t=He(),e!==null&&(Ns(e,1,t),Je(e,t));break}}e=e.return}}function nS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=He(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Re&n)===n&&(ye===4||ye===3&&(Re&130023424)===Re&&500>ce()-jh?qn(t,0):Bh|=n),Je(t,e)}function Ly(t,e){e===0&&(t.mode&1?(e=io,io<<=1,!(io&130023424)&&(io=4194304)):e=1);var n=He();t=Ht(t,e),t!==null&&(Ns(t,e,n),Je(t,n))}function rS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ly(t,n)}function iS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Ly(t,n)}var My;My=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ye.current)Qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qe=!1,WE(t,e,n);Qe=!!(t.flags&131072)}else Qe=!1,te&&e.flags&1048576&&Fg(e,ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lo(t,e),t=e.pendingProps;var i=qr(e,be.current);Ur(e,n),i=$h(null,e,r,t,i,n);var s=Uh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(r)?(s=!0,na(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xh(e),i.updater=Ha,e.stateNode=i,i._reactInternals=e,lc(e,r,t,n),e=hc(null,e,r,!0,s,n)):(e.tag=0,te&&s&&kh(e),Be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=oS(r),t=mt(r,t),i){case 0:e=cc(null,e,r,t,n);break e;case 1:e=Gf(null,e,r,t,n);break e;case 11:e=qf(null,e,r,t,n);break e;case 14:e=Kf(null,e,r,mt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),cc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Gf(t,e,r,i,n);case 3:e:{if(vy(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bg(t,e),aa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yr(Error(E(423)),e),e=Qf(t,e,r,n,i);break e}else if(r!==i){i=Yr(Error(E(424)),e),e=Qf(t,e,r,n,i);break e}else for(tt=gn(e.stateNode.containerInfo.firstChild),nt=e,te=!0,vt=null,n=qg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===i){e=Wt(t,e,n);break e}Be(t,e,r,n)}e=e.child}return e;case 5:return Kg(e),t===null&&sc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ec(r,i)?o=null:s!==null&&ec(r,s)&&(e.flags|=32),yy(t,e),Be(t,e,o,n),e.child;case 6:return t===null&&sc(e),null;case 13:return wy(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gr(e,null,r,n):Be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),qf(t,e,r,i,n);case 7:return Be(t,e,e.pendingProps,n),e.child;case 8:return Be(t,e,e.pendingProps.children,n),e.child;case 12:return Be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(sa,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!Ye.current){e=Wt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=zt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),oc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),oc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ur(e,n),i=ht(i),r=r(i),e.flags|=1,Be(t,e,r,n),e.child;case 14:return r=e.type,i=mt(r,e.pendingProps),i=mt(r.type,i),Kf(t,e,r,i,n);case 15:return my(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Lo(t,e),e.tag=1,Xe(r)?(t=!0,na(e)):t=!1,Ur(e,n),Hg(e,r,i),lc(e,r,i,n),hc(null,e,r,!0,t,n);case 19:return Ey(t,e,n);case 22:return gy(t,e,n)}throw Error(E(156,e.tag))};function $y(t,e){return lg(t,e)}function sS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(t,e,n,r){return new sS(t,e,n,r)}function Kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return Kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dh)return 11;if(t===fh)return 14}return 2}function En(t,e){var n=t.alternate;return n===null?(n=ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Er:return Kn(n.children,i,s,e);case hh:o=8,i|=8;break;case Pu:return t=ut(12,n,e,i|2),t.elementType=Pu,t.lanes=s,t;case Ou:return t=ut(13,n,e,i),t.elementType=Ou,t.lanes=s,t;case Lu:return t=ut(19,n,e,i),t.elementType=Lu,t.lanes=s,t;case Wm:return Ga(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jm:o=10;break e;case Hm:o=9;break e;case dh:o=11;break e;case fh:o=14;break e;case tn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kn(t,e,n,r){return t=ut(7,t,r,e),t.lanes=n,t}function Ga(t,e,n,r){return t=ut(22,t,r,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=ut(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,r,i,s,o,a,l){return t=new aS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(s),t}function lS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uy(t){if(!t)return Cn;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Xe(n))return $g(t,n,e)}return e}function Fy(t,e,n,r,i,s,o,a,l){return t=Gh(n,r,!0,t,i,s,o,a,l),t.context=Uy(null),n=t.current,r=He(),i=wn(n),s=zt(r,i),s.callback=e??null,yn(n,s,i),t.current.lanes=i,Ns(t,i,r),Je(t,r),t}function Qa(t,e,n,r){var i=e.current,s=He(),o=wn(i);return n=Uy(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yn(i,e,o),t!==null&&(Et(t,i,o,s),xo(t,i,o)),o}function ma(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qh(t,e){sp(t,e),(t=t.alternate)&&sp(t,e)}function uS(){return null}var by=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}Ya.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Qa(t,e,null,null)};Ya.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ir(function(){Qa(null,t,null,null)}),e[jt]=null}};function Ya(t){this._internalRoot=t}Ya.prototype.unstable_scheduleHydration=function(t){if(t){var e=mg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rn.length&&e!==0&&e<rn[n].priority;n++);rn.splice(n,0,t),n===0&&yg(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function op(){}function cS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ma(o);s.call(u)}}var o=Fy(e,r,t,0,null,!1,!1,"",op);return t._reactRootContainer=o,t[jt]=o.current,is(t.nodeType===8?t.parentNode:t),ir(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ma(l);a.call(u)}}var l=Gh(t,0,!1,null,null,!1,!1,"",op);return t._reactRootContainer=l,t[jt]=l.current,is(t.nodeType===8?t.parentNode:t),ir(function(){Qa(e,l,n,r)}),l}function Ja(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ma(o);a.call(l)}}Qa(e,o,t,i)}else o=cS(n,e,t,i,r);return ma(o)}fg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ai(e.pendingLanes);n!==0&&(gh(e,n|1),Je(e,ce()),!(q&6)&&(Xr=ce()+500,Pn()))}break;case 13:ir(function(){var r=Ht(t,1);if(r!==null){var i=He();Et(r,t,1,i)}}),Qh(t,1)}};yh=function(t){if(t.tag===13){var e=Ht(t,134217728);if(e!==null){var n=He();Et(e,t,134217728,n)}Qh(t,134217728)}};pg=function(t){if(t.tag===13){var e=wn(t),n=Ht(t,e);if(n!==null){var r=He();Et(n,t,e,r)}Qh(t,e)}};mg=function(){return Y};gg=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Hu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ba(r);if(!i)throw Error(E(90));Km(r),Uu(r,i)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&Or(t,!!n.multiple,e,!1)}};ng=Hh;rg=ir;var hS={usingClientEntryPoint:!1,Events:[Ds,kr,Ba,eg,tg,Hh]},Ci={findFiberByHostInstance:Vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dS={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=og(t),t===null?null:t.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Fa=go.inject(dS),Rt=go}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;st.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(E(200));return lS(t,e,null,n)};st.createRoot=function(t,e){if(!Xh(t))throw Error(E(299));var n=!1,r="",i=by;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,r,i),t[jt]=e.current,is(t.nodeType===8?t.parentNode:t),new Yh(e)};st.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=og(e),t=t===null?null:t.stateNode,t};st.flushSync=function(t){return ir(t)};st.hydrate=function(t,e,n){if(!Xa(e))throw Error(E(200));return Ja(null,t,e,!0,n)};st.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=by;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fy(e,null,t,1,n??null,i,!1,s,o),t[jt]=e.current,is(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ya(e)};st.render=function(t,e,n){if(!Xa(e))throw Error(E(200));return Ja(null,t,e,!1,n)};st.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(E(40));return t._reactRootContainer?(ir(function(){Ja(null,null,t,!1,function(){t._reactRootContainer=null,t[jt]=null})}),!0):!1};st.unstable_batchedUpdates=Hh;st.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xa(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Ja(t,e,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=st})(u1);var ap=Du;Ru.createRoot=ap.createRoot,Ru.hydrateRoot=ap.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ga.apply(this,arguments)}var dn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dn||(dn={}));const lp="popstate";function fS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=dr(i.location.hash.substr(1));return Tc("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:fs(s))}function r(i,s){pS(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return yS(e,n,r,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mS(){return Math.random().toString(36).substr(2,8)}function up(t){return{usr:t.state,key:t.key}}function Tc(t,e,n,r){return n===void 0&&(n=null),ga({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?dr(e):e,{state:n,key:e&&e.key||r||mS()})}function fs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function dr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gS(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:fs(t);return ve(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function yS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=dn.Pop,l=null;function u(){a=dn.Pop,l&&l({action:a,location:d.location})}function c(g,y){a=dn.Push;let v=Tc(d.location,g,y);n&&n(v,g);let O=up(v),p=d.createHref(v);try{o.pushState(O,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:d.location})}function h(g,y){a=dn.Replace;let v=Tc(d.location,g,y);n&&n(v,g);let O=up(v),p=d.createHref(v);o.replaceState(O,"",p),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lp,u),l=g,()=>{i.removeEventListener(lp,u),l=null}},createHref(g){return e(i,g)},encodeLocation(g){let y=gS(typeof g=="string"?g:fs(g));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:c,replace:h,go(g){return o.go(g)}};return d}var cp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cp||(cp={}));function vS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?dr(e):e,i=By(r.pathname||"/",n);if(i==null)return null;let s=Vy(t);wS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=RS(s[a],xS(i));return o}function Vy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Sn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vy(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:CS(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of zy(s.path))i(s,o,l)}),e}function zy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function wS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ES=/^:\w+$/,SS=3,_S=2,TS=1,kS=10,IS=-2,hp=t=>t==="*";function CS(t,e){let n=t.split("/"),r=n.length;return n.some(hp)&&(r+=IS),e&&(r+=_S),n.filter(i=>!hp(i)).reduce((i,s)=>i+(ES.test(s)?SS:s===""?TS:kS),r)}function NS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function RS(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=DS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Sn([i,c.pathname]),pathnameBase:MS(Sn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Sn([i,c.pathnameBase]))}return s}function DS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=AS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=PS(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function AS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function xS(t){try{return decodeURI(t)}catch(e){return Jh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function PS(t,e){try{return decodeURIComponent(t)}catch(n){return Jh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function By(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Jh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?dr(t):t;return{pathname:n?n.startsWith("/")?n:LS(n,e):e,search:$S(r),hash:US(i)}}function LS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ou(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=dr(t):(i=ga({},t),ve(!i.pathname||!i.pathname.includes("?"),ou("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),ou("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),ou("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=OS(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Sn=t=>t.join("/").replace(/\/\/+/g,"/"),MS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$S=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,US=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class FS{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function bS(t){return t instanceof FS}const VS=["post","put","patch","delete"];[...VS];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kc(){return kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kc.apply(this,arguments)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const BS=typeof Object.is=="function"?Object.is:zS,{useState:jS,useEffect:HS,useLayoutEffect:WS,useDebugValue:qS}=Nu;function KS(t,e,n){const r=e(),[{inst:i},s]=jS({inst:{value:r,getSnapshot:e}});return WS(()=>{i.value=r,i.getSnapshot=e,au(i)&&s({inst:i})},[t,r,e]),HS(()=>(au(i)&&s({inst:i}),t(()=>{au(i)&&s({inst:i})})),[t]),qS(r),r}function au(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!BS(n,r)}catch{return!0}}function GS(t,e,n){return e()}const QS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YS=!QS,XS=YS?GS:KS;"useSyncExternalStore"in Nu&&(t=>t.useSyncExternalStore)(Nu);const Wy=I.createContext(null),qy=I.createContext(null),Za=I.createContext(null),el=I.createContext(null),ci=I.createContext({outlet:null,matches:[]}),Ky=I.createContext(null);function JS(t,e){let{relative:n}=e===void 0?{}:e;xs()||ve(!1);let{basename:r,navigator:i}=I.useContext(Za),{hash:s,pathname:o,search:a}=Gy(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Sn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function xs(){return I.useContext(el)!=null}function tl(){return xs()||ve(!1),I.useContext(el).location}function ZS(){xs()||ve(!1);let{basename:t,navigator:e}=I.useContext(Za),{matches:n}=I.useContext(ci),{pathname:r}=tl(),i=JSON.stringify(jy(n).map(a=>a.pathnameBase)),s=I.useRef(!1);return I.useEffect(()=>{s.current=!0}),I.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Hy(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Sn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Gy(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(ci),{pathname:i}=tl(),s=JSON.stringify(jy(r).map(o=>o.pathnameBase));return I.useMemo(()=>Hy(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function e_(t,e){xs()||ve(!1);let{navigator:n}=I.useContext(Za),r=I.useContext(qy),{matches:i}=I.useContext(ci),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=tl(),u;if(e){var c;let v=typeof e=="string"?dr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ve(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=vS(t,{pathname:d}),y=i_(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Sn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Sn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?I.createElement(el.Provider,{value:{location:kc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:dn.Pop}},y):y}function t_(){let t=l_(),e=bS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unhandled Thrown Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:s},"errorElement")," props on ",I.createElement("code",{style:s},"<Route>")))}class n_ extends I.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(ci.Provider,{value:this.props.routeContext},I.createElement(Ky.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function r_(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Wy);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(ci.Provider,{value:e},r)}function i_(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ve(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||I.createElement(t_,null):null,c=e.concat(r.slice(0,a+1)),h=()=>I.createElement(r_,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?I.createElement(n_,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var dp;(function(t){t.UseRevalidator="useRevalidator"})(dp||(dp={}));var ya;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ya||(ya={}));function s_(t){let e=I.useContext(qy);return e||ve(!1),e}function o_(t){let e=I.useContext(ci);return e||ve(!1),e}function a_(t){let e=o_(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function l_(){var t;let e=I.useContext(Ky),n=s_(ya.UseRouteError),r=a_(ya.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function gr(t){ve(!1)}function u_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:s,static:o=!1}=t;xs()&&ve(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=dr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=I.useMemo(()=>{let v=By(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return y==null?null:I.createElement(Za.Provider,{value:l},I.createElement(el.Provider,{children:n,value:{location:y,navigationType:i}}))}function c_(t){let{children:e,location:n}=t,r=I.useContext(Wy),i=r&&!e?r.router.routes:Ic(e);return e_(i,n)}var fp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(fp||(fp={}));new Promise(()=>{});function Ic(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,Ic(r.props.children,e));return}r.type!==gr&&ve(!1),!r.props.index||!r.props.children||ve(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Ic(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cc(){return Cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cc.apply(this,arguments)}function h_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function d_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function f_(t,e){return t.button===0&&(!e||e==="_self")&&!d_(t)}const p_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function m_(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=fS({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location});return I.useLayoutEffect(()=>s.listen(a),[s]),I.createElement(u_,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const yo=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=h_(e,p_),d=JS(u,{relative:i}),g=g_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(v){r&&r(v),v.defaultPrevented||g(v)}return I.createElement("a",Cc({},h,{href:d,onClick:s?r:y,ref:n,target:l}))});var pp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(pp||(pp={}));var mp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mp||(mp={}));function g_(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ZS(),l=tl(),u=Gy(t,{relative:o});return I.useCallback(c=>{if(f_(c,n)){c.preventDefault();let h=r!==void 0?r:fs(l)===fs(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const y_=()=>_("h2",{children:"Contacto"}),nl=I.createContext({}),{Provider:v_}=nl,w_=({children:t,card:e,classname:n,style:r})=>_(v_,{value:{card:e},children:_("div",{className:`${n}`,style:r,children:t})}),Qy=({icon:t,className:e,style:n})=>(I.useContext(nl),_("div",{className:e,style:n})),Yy=({img:t="",classname:e,style:n})=>_("img",{src:t,alt:"card-image",className:e,style:n}),Xy=({title:t,className:e,style:n})=>{const{card:r}=I.useContext(nl);return _("b",{className:e,style:n,children:t||r.title})},Jy=({subtitle:t,className:e,style:n})=>{const{card:r}=I.useContext(nl);return _("p",{className:e,style:n,children:t||r.subtitle})},E_=Object.assign(w_,{Icon:Qy,Image:Yy,Title:Xy,Subtitle:Jy});const S_=({children:t,icons:e})=>_("div",{className:"icon-skill-container",children:t}),__=({img:t,alt:e})=>_("img",{src:t,alt:e,title:e}),T_=[{id:"1",icon:"laptop-outline",img:"./card01.jpg",title:"Texto",subtitle:"Esto es un subtitulo"},{id:"2",icon:"phone-portrait-outline",img:"./card01.jpg",title:"nubes",subtitle:"Esto es un subtitulo"},{id:"3",icon:"logo-figma",img:"./card01.jpg",title:"Ideas",subtitle:"Algunas ideas en figma"}],k_=[{icon:"iconSkill/REACT.svg",alt:"react"},{icon:"iconSkill/JS.svg",alt:"javascript"},{icon:"iconSkill/HTML.svg",alt:"html5"},{icon:"iconSkill/CSS.svg",alt:"css3"},{icon:"iconSkill/TYPESCRIPT.svg",alt:"typescript"},{icon:"iconSkill/FIGMA.svg",alt:"figma"}];const gp=()=>St("div",{className:"home-container",children:[_("h2",{children:"Hola, Soy Miguel"}),_("p",{style:{width:"100%"},children:'Soy ingeniero de sistemas y diseñador de interfaces y amante al buen diseño, para mi el " buen diseño " no es unicamente aquel que brinda una linda vista al usuario. Tambien debe permitir una experiencia muy agradable en la curva de aprendizaje para utilizar una herramienta web. Los ultimos 2 años me he desempeñado como desarrollador de videojuegos desarrollando una app de realidad aumentada asi como el ecosistema web de la misma. Los ultimos 2 años me he desempeñado como desarrollador de videojuegos desarrollando una app de realidad aumentada asi como el ecosistema web de la misma.'}),_("h2",{children:"Skills"}),_("div",{className:"icon-container",children:k_.map(t=>_(S_,{icons:t,children:_(__,{img:t.icon,alt:t.alt})},t.alt))}),_("h2",{children:"Experimentos"}),_("div",{className:"cards-group-container",children:T_.map(t=>St(E_,{card:t,classname:"card-container",style:{},children:[_(Yy,{img:t.img,classname:"card-img"}),_(Qy,{icon:t.icon,className:"card-icon"}),_(Xy,{title:t.title,className:"card-title"}),_(Jy,{subtitle:"Plataforma de gestión de cursos",className:"card-subtitle"})]},t.id))})]}),I_=()=>_("h2",{children:"proyectos"});const Zy=gt.createContext({}),ev=!0;function C_({baseColor:t,highlightColor:e,width:n,height:r,borderRadius:i,circle:s,direction:o,duration:a,enableAnimation:l=ev}){const u={};return o==="rtl"&&(u["--animation-direction"]="reverse"),typeof a=="number"&&(u["--animation-duration"]=`${a}s`),l||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof i=="string"||typeof i=="number")&&(u.borderRadius=i),s&&(u.borderRadius="50%"),typeof t<"u"&&(u["--base-color"]=t),typeof e<"u"&&(u["--highlight-color"]=e),u}function N_({count:t=1,wrapper:e,className:n,containerClassName:r,containerTestId:i,circle:s=!1,style:o,...a}){var l,u,c;const h=gt.useContext(Zy),d={...a};for(const[m,w]of Object.entries(a))typeof w>"u"&&delete d[m];const g={...h,...d,circle:s},y={...o,...C_(g)};let v="react-loading-skeleton";n&&(v+=` ${n}`);const O=(l=g.inline)!==null&&l!==void 0?l:!1,p=[],f=Math.ceil(t);for(let m=0;m<f;m++){let w=y;if(f>t&&m===f-1){const C=(u=w.width)!==null&&u!==void 0?u:"100%",N=t%1,x=typeof C=="number"?C*N:`calc(${C} * ${N})`;w={...w,width:x}}const T=gt.createElement("span",{className:v,style:w,key:m},"‌");O?p.push(T):p.push(gt.createElement(gt.Fragment,{key:m},T,gt.createElement("br",null)))}return gt.createElement("span",{className:r,"data-testid":i,"aria-live":"polite","aria-busy":(c=g.enableAnimation)!==null&&c!==void 0?c:ev},e?p.map((m,w)=>gt.createElement(e,{key:w},m)):p)}function R_({children:t,...e}){return gt.createElement(Zy.Provider,{value:e},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},D_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):D_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},A_=function(t){const e=tv(t);return nv.encodeByteArray(e,!0)},va=function(t){return A_(t).replace(/\./g,"")},rv=function(t){try{return nv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function x_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function P_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function O_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L_(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M_(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function U_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=()=>U_().__FIREBASE_DEFAULTS__,b_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},V_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rv(t[1]);return e&&JSON.parse(e)},Zh=()=>{try{return F_()||b_()||V_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iv=t=>{var e,n;return(n=(e=Zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z_=t=>{const e=iv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},B_=()=>{var t;return(t=Zh())===null||t===void 0?void 0:t.config},sv=t=>{var e;return(e=Zh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[va(JSON.stringify(n)),va(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W_,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?q_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function q_(t,e){return t.replace(K_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const K_=/\{\$([^}]+)}/g;function G_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yp(s)&&yp(o)){if(!wa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Q_(t,e){const n=new Y_(t,e);return n.subscribe.bind(n)}class Y_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");X_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=lu),i.error===void 0&&(i.error=lu),i.complete===void 0&&(i.complete=lu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){return t&&t._delegate?t._delegate:t}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J_=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new j_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eT(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Z_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Z_(t){return t===bn?void 0:t}function eT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const nT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},rT=G.INFO,iT={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},sT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ed{constructor(e){this.name=e,this._logLevel=rT,this._logHandler=sT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const oT=(t,e)=>e.some(n=>t instanceof n);let vp,wp;function aT(){return vp||(vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lT(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ov=new WeakMap,Nc=new WeakMap,av=new WeakMap,uu=new WeakMap,td=new WeakMap;function uT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ov.set(n,t)}).catch(()=>{}),td.set(e,t),e}function cT(t){if(Nc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nc.set(t,e)}let Rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||av.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hT(t){Rc=t(Rc)}function dT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cu(this),e,...n);return av.set(r,e.sort?e.sort():[e]),_n(r)}:lT().includes(t)?function(...e){return t.apply(cu(this),e),_n(ov.get(this))}:function(...e){return _n(t.apply(cu(this),e))}}function fT(t){return typeof t=="function"?dT(t):(t instanceof IDBTransaction&&cT(t),oT(t,aT())?new Proxy(t,Rc):t)}function _n(t){if(t instanceof IDBRequest)return uT(t);if(uu.has(t))return uu.get(t);const e=fT(t);return e!==t&&(uu.set(t,e),td.set(e,t)),e}const cu=t=>td.get(t);function pT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_n(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mT=["get","getKey","getAll","getAllKeys","count"],gT=["put","add","delete","clear"],hu=new Map;function Ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hu.get(e))return hu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return hu.set(e,s),s}hT(t=>({...t,get:(e,n,r)=>Ep(e,n)||t.get(e,n,r),has:(e,n)=>!!Ep(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",Sp="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new ed("@firebase/app"),wT="@firebase/app-compat",ET="@firebase/analytics-compat",ST="@firebase/analytics",_T="@firebase/app-check-compat",TT="@firebase/app-check",kT="@firebase/auth",IT="@firebase/auth-compat",CT="@firebase/database",NT="@firebase/database-compat",RT="@firebase/functions",DT="@firebase/functions-compat",AT="@firebase/installations",xT="@firebase/installations-compat",PT="@firebase/messaging",OT="@firebase/messaging-compat",LT="@firebase/performance",MT="@firebase/performance-compat",$T="@firebase/remote-config",UT="@firebase/remote-config-compat",FT="@firebase/storage",bT="@firebase/storage-compat",VT="@firebase/firestore",zT="@firebase/firestore-compat",BT="firebase",jT="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",HT={[Dc]:"fire-core",[wT]:"fire-core-compat",[ST]:"fire-analytics",[ET]:"fire-analytics-compat",[TT]:"fire-app-check",[_T]:"fire-app-check-compat",[kT]:"fire-auth",[IT]:"fire-auth-compat",[CT]:"fire-rtdb",[NT]:"fire-rtdb-compat",[RT]:"fire-fn",[DT]:"fire-fn-compat",[AT]:"fire-iid",[xT]:"fire-iid-compat",[PT]:"fire-fcm",[OT]:"fire-fcm-compat",[LT]:"fire-perf",[MT]:"fire-perf-compat",[$T]:"fire-rc",[UT]:"fire-rc-compat",[FT]:"fire-gcs",[bT]:"fire-gcs-compat",[VT]:"fire-fst",[zT]:"fire-fst-compat","fire-js":"fire-js",[BT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map,xc=new Map;function WT(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jr(t){const e=t.name;if(xc.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,t);for(const n of Ea.values())WT(n,t);return!0}function nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tn=new Ps("app","Firebase",qT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=jT;function lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(n||(n=B_()),!n)throw Tn.create("no-options");const s=Ea.get(i);if(s){if(wa(n,s.options)&&wa(r,s.config))return s;throw Tn.create("duplicate-app",{appName:i})}const o=new tT(i);for(const l of xc.values())o.addComponent(l);const a=new KT(n,r,o);return Ea.set(i,a),a}function uv(t=Ac){const e=Ea.get(t);if(!e&&t===Ac)return lv();if(!e)throw Tn.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let i=(r=HT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Jr(new sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="firebase-heartbeat-database",QT=1,ps="firebase-heartbeat-store";let du=null;function cv(){return du||(du=pT(GT,QT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ps)}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),du}async function YT(t){try{return(await cv()).transaction(ps).objectStore(ps).get(hv(t))}catch(e){if(e instanceof Jt)or.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function _p(t,e){try{const r=(await cv()).transaction(ps,"readwrite");return await r.objectStore(ps).put(e,hv(t)),r.done}catch(n){if(n instanceof Jt)or.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function hv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1024,JT=30*24*60*60*1e3;class ZT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=JT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tp(),{heartbeatsToSend:n,unsentEntries:r}=ek(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tp(){return new Date().toISOString().substring(0,10)}function ek(t,e=XT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kp(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){Jr(new sr("platform-logger",e=>new yT(e),"PRIVATE")),Jr(new sr("heartbeat",e=>new ZT(e),"PRIVATE")),kn(Dc,Sp,t),kn(Dc,Sp,"esm2017"),kn("fire-js","")}nk("");var rk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,rd=rd||{},U=rk||self;function Sa(){}function rl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ms(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ik(t){return Object.prototype.hasOwnProperty.call(t,fu)&&t[fu]||(t[fu]=++sk)}var fu="closure_uid_"+(1e9*Math.random()>>>0),sk=0;function ok(t,e,n){return t.call.apply(t.bind,arguments)}function ak(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ue=ok:Ue=ak,Ue.apply(null,arguments)}function vo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function On(){this.s=this.s,this.o=this.o}var lk=0;On.prototype.s=!1;On.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lk!=0)&&ik(this)};On.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function id(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ip(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var uk=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",Sa,e),U.removeEventListener("test",Sa,e)}catch{}return t}();function _a(t){return/^[\s\xa0]*$/.test(t)}var Cp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pu(t,e){return t<e?-1:t>e?1:0}function il(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Ct(t){return il().indexOf(t)!=-1}function sd(t){return sd[" "](t),t}sd[" "]=Sa;function ck(t){var e=fk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hk=Ct("Opera"),Zr=Ct("Trident")||Ct("MSIE"),fv=Ct("Edge"),Pc=fv||Zr,pv=Ct("Gecko")&&!(il().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),dk=il().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function mv(){var t=U.document;return t?t.documentMode:void 0}var Ta;e:{var mu="",gu=function(){var t=il();if(pv)return/rv:([^\);]+)(\)|;)/.exec(t);if(fv)return/Edge\/([\d\.]+)/.exec(t);if(Zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dk)return/WebKit\/(\S+)/.exec(t);if(hk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(gu&&(mu=gu?gu[1]:""),Zr){var yu=mv();if(yu!=null&&yu>parseFloat(mu)){Ta=String(yu);break e}}Ta=mu}var fk={};function pk(){return ck(function(){let t=0;const e=Cp(String(Ta)).split("."),n=Cp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=pu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||pu(i[2].length==0,s[2].length==0)||pu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Oc;if(U.document&&Zr){var Np=mv();Oc=Np||parseInt(Ta,10)||void 0}else Oc=void 0;var mk=Oc;function ms(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pv){e:{try{sd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ms.X.h.call(this)}}xe(ms,Fe);var gk={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $s="closure_listenable_"+(1e6*Math.random()|0),yk=0;function vk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++yk,this.ba=this.ea=!1}function sl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function od(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gv(t){const e={};for(const n in t)e[n]=t[n];return e}const Rp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Rp.length;s++)n=Rp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ol(t){this.src=t,this.g={},this.h=0}ol.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Mc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vk(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Lc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=dv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(sl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var ad="closure_lm_"+(1e6*Math.random()|0),vu={};function vv(t,e,n,r,i){if(r&&r.once)return Ev(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)vv(t,e[s],n,r,i);return null}return n=cd(n),t&&t[$s]?t.N(e,n,Ms(r)?!!r.capture:!!r,i):wv(t,e,n,!1,r,i)}function wv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ms(i)?!!i.capture:!!i,a=ud(t);if(a||(t[ad]=a=new ol(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)uk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_v(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wk(){function t(n){return e.call(t.src,t.listener,n)}const e=Ek;return t}function Ev(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ev(t,e[s],n,r,i);return null}return n=cd(n),t&&t[$s]?t.O(e,n,Ms(r)?!!r.capture:!!r,i):wv(t,e,n,!0,r,i)}function Sv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Sv(t,e[s],n,r,i);else r=Ms(r)?!!r.capture:!!r,n=cd(n),t&&t[$s]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Mc(s,n,r,i),-1<n&&(sl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ud(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mc(e,n,r,i)),(n=-1<t?e[t]:null)&&ld(n))}function ld(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[$s])Lc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_v(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ud(e))?(Lc(n,t),n.h==0&&(n.src=null,e[ad]=null)):sl(t)}}}function _v(t){return t in vu?vu[t]:vu[t]="on"+t}function Ek(t,e){if(t.ba)t=!0;else{e=new ms(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ld(t),t=n.call(r,e)}return t}function ud(t){return t=t[ad],t instanceof ol?t:null}var wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function cd(t){return typeof t=="function"?t:(t[wu]||(t[wu]=function(e){return t.handleEvent(e)}),t[wu])}function ke(){On.call(this),this.i=new ol(this),this.P=this,this.I=null}xe(ke,On);ke.prototype[$s]=!0;ke.prototype.removeEventListener=function(t,e,n,r){Sv(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(r,t),yv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=wo(o,r,!0,e)&&i}if(o=e.g=t,i=wo(o,r,!0,e)&&i,i=wo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=wo(o,r,!1,e)&&i}ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)sl(n[r]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function wo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Lc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var hd=U.JSON.stringify;function Sk(){var t=Iv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _k{constructor(){this.h=this.g=null}add(e,n){const r=Tv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Tv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tk,t=>t.reset());class Tk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kk(t){U.setTimeout(()=>{throw t},0)}function kv(t,e){$c||Ik(),Uc||($c(),Uc=!0),Iv.add(t,e)}var $c;function Ik(){var t=U.Promise.resolve(void 0);$c=function(){t.then(Ck)}}var Uc=!1,Iv=new _k;function Ck(){for(var t;t=Sk();){try{t.h.call(t.g)}catch(n){kk(n)}var e=Tv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Uc=!1}function al(t,e){ke.call(this),this.h=t||1,this.g=e||U,this.j=Ue(this.lb,this),this.l=Date.now()}xe(al,ke);A=al.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(dd(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}A.M=function(){al.X.M.call(this),dd(this),delete this.g};function fd(t,e,n){if(typeof t=="function")n&&(t=Ue(t,n));else if(t&&typeof t.handleEvent=="function")t=Ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function Cv(t){t.g=fd(()=>{t.g=null,t.i&&(t.i=!1,Cv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Nk extends On{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cv(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(t){On.call(this),this.h=t,this.g={}}xe(gs,On);var Dp=[];function Nv(t,e,n,r){Array.isArray(n)||(n&&(Dp[0]=n.toString()),n=Dp);for(var i=0;i<n.length;i++){var s=vv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Rv(t){od(t.g,function(e,n){this.g.hasOwnProperty(n)&&ld(e)},t),t.g={}}gs.prototype.M=function(){gs.X.M.call(this),Rv(this)};gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ll(){this.g=!0}ll.prototype.Aa=function(){this.g=!1};function Rk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Dk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function xr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xk(t,n)+(r?" "+r:"")})}function Ak(t,e){t.info(function(){return"TIMEOUT: "+e})}ll.prototype.info=function(){};function xk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hd(n)}catch{return e}}var pr={},Ap=null;function ul(){return Ap=Ap||new ke}pr.Pa="serverreachability";function Dv(t){Fe.call(this,pr.Pa,t)}xe(Dv,Fe);function ys(t){const e=ul();De(e,new Dv(e))}pr.STAT_EVENT="statevent";function Av(t,e){Fe.call(this,pr.STAT_EVENT,t),this.stat=e}xe(Av,Fe);function je(t){const e=ul();De(e,new Av(e,t))}pr.Qa="timingevent";function xv(t,e){Fe.call(this,pr.Qa,t),this.size=e}xe(xv,Fe);function Us(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var cl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Pv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function pd(){}pd.prototype.h=null;function xp(t){return t.h||(t.h=t.i())}function Ov(){}var Fs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function md(){Fe.call(this,"d")}xe(md,Fe);function gd(){Fe.call(this,"c")}xe(gd,Fe);var Fc;function hl(){}xe(hl,pd);hl.prototype.g=function(){return new XMLHttpRequest};hl.prototype.i=function(){return{}};Fc=new hl;function bs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new gs(this),this.O=Pk,t=Pc?125:void 0,this.T=new al(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Lv}function Lv(){this.i=null,this.g="",this.h=!1}var Pk=45e3,bc={},ka={};A=bs.prototype;A.setTimeout=function(t){this.O=t};function Vc(t,e,n){t.K=1,t.v=fl(qt(e)),t.s=n,t.P=!0,Mv(t,null)}function Mv(t,e){t.F=Date.now(),Vs(t),t.A=qt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),jv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Lv,t.g=c0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Nk(Ue(t.La,t,t.g),t.N)),Nv(t.S,t.g,"readystatechange",t.ib),e=t.H?gv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ys(),Rk(t.j,t.u,t.A,t.m,t.U,t.s)}A.ib=function(t){t=t.target;const e=this.L;e&&Ft(t)==3?e.l():this.La(t)};A.La=function(t){try{if(t==this.g)e:{const c=Ft(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Pc||this.g&&(this.h.h||this.g.fa()||Mp(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ys(3):ys(2)),dl(this);var n=this.g.aa();this.Y=n;t:if($v(this)){var r=Mp(this.g);t="";var i=r.length,s=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),Hi(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Dk(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_a(a)){var u=a;break t}}u=null}if(n=u)xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zc(this,n);else{this.i=!1,this.o=3,je(12),jn(this),Hi(this);break e}}this.P?(Uv(this,c,o),Pc&&this.i&&c==3&&(Nv(this.S,this.T,"tick",this.hb),this.T.start())):(xr(this.j,this.m,o,null),zc(this,o)),c==4&&jn(this),this.i&&!this.I&&(c==4?o0(this.l,this):(this.i=!1,Vs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),jn(this),Hi(this)}}}catch{}finally{}};function $v(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Uv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=Ok(t,n),i==ka){e==4&&(t.o=4,je(14),r=!1),xr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bc){t.o=4,je(15),xr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xr(t.j,t.m,i,null),zc(t,i);$v(t)&&i!=ka&&i!=bc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Td(e),e.K=!0,je(11))):(xr(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),Hi(t))}A.hb=function(){if(this.g){var t=Ft(this.g),e=this.g.fa();this.C<e.length&&(dl(this),Uv(this,t,e),this.i&&t!=4&&Vs(this))}};function Ok(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ka:(n=Number(e.substring(n,r)),isNaN(n)?bc:(r+=1,r+n>e.length?ka:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,jn(this)};function Vs(t){t.V=Date.now()+t.O,Fv(t,t.O)}function Fv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Us(Ue(t.gb,t),e)}function dl(t){t.B&&(U.clearTimeout(t.B),t.B=null)}A.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ak(this.j,this.A),this.K!=2&&(ys(),je(17)),jn(this),this.o=2,Hi(this)):Fv(this,this.V-t)};function Hi(t){t.l.G==0||t.I||o0(t.l,t)}function jn(t){dl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,dd(t.T),Rv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function zc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bc(n.h,t))){if(!t.J&&Bc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Na(n),gl(n);else break e;_d(n),je(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Us(Ue(n.cb,n),6e3));if(1>=qv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Hn(n,11)}else if((t.J||n.g==t)&&Na(n),!_a(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(yd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ne(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=u0(r,r.H?r.ka:null,r.V),o.J){Kv(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(dl(a),Vs(a)),r.g=o}else i0(r);0<n.i.length&&yl(n)}else u[0]!="stop"&&u[0]!="close"||Hn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Hn(n,7):Sd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ys(4)}catch{}}function Lk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(rl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Mk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(rl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function bv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Mk(t),r=Lk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Vv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $k(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gn){this.h=e!==void 0?e:t.h,Ia(this,t.j),this.s=t.s,this.g=t.g,Ca(this,t.m),this.l=t.l,e=t.i;var n=new vs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pp(this,n),this.o=t.o}else t&&(n=String(t).match(Vv))?(this.h=!!e,Ia(this,n[1]||"",!0),this.s=Pi(n[2]||""),this.g=Pi(n[3]||"",!0),Ca(this,n[4]),this.l=Pi(n[5]||"",!0),Pp(this,n[6]||"",!0),this.o=Pi(n[7]||"")):(this.h=!!e,this.i=new vs(null,this.h))}Gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oi(e,Op,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Oi(e,Op,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Oi(n,n.charAt(0)=="/"?bk:Fk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oi(n,zk)),t.join("")};function qt(t){return new Gn(t)}function Ia(t,e,n){t.j=n?Pi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pp(t,e,n){e instanceof vs?(t.i=e,Bk(t.i,t.h)):(n||(e=Oi(e,Vk)),t.i=new vs(e,t.h))}function ne(t,e,n){t.i.set(e,n)}function fl(t){return ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Uk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Uk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Op=/[#\/\?@]/g,Fk=/[#\?:]/g,bk=/[#\?]/g,Vk=/[#\?@]/g,zk=/#/g;function vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new Map,t.h=0,t.i&&$k(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=vs.prototype;A.add=function(t,e){Ln(this),this.i=null,t=hi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zv(t,e){Ln(t),e=hi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bv(t,e){return Ln(t),e=hi(t,e),t.g.has(e)}A.forEach=function(t,e){Ln(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.oa=function(){Ln(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.W=function(t){Ln(this);let e=[];if(typeof t=="string")Bv(this,t)&&(e=e.concat(this.g.get(hi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Ln(this),this.i=null,t=hi(this,t),Bv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function jv(t,e,n){zv(t,e),0<n.length&&(t.i=null,t.g.set(hi(t,e),id(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function hi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bk(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(zv(this,r),jv(this,i,n))},t)),t.j=e}var jk=class{constructor(t,e){this.h=t,this.g=e}};function Hv(t){this.l=t||Hk,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hk=10;function Wv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qv(t){return t.h?1:t.g?t.g.size:0}function Bc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yd(t,e){t.g?t.g.add(e):t.h=e}function Kv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Hv.prototype.cancel=function(){if(this.i=Gv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return id(t.i)}function vd(){}vd.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};vd.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function Wk(){this.g=new vd}function qk(t,e,n){const r=n||"";try{bv(t,function(i,s){let o=i;Ms(i)&&(o=hd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Kk(t,e){const n=new ll;if(U.Image){const r=new Image;r.onload=vo(Eo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vo(Eo,n,r,"TestLoadImage: error",!1,e),r.onabort=vo(Eo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vo(Eo,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Eo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function zs(t){this.l=t.ac||null,this.j=t.jb||!1}xe(zs,pd);zs.prototype.g=function(){return new pl(this.l,this.j)};zs.prototype.i=function(t){return function(){return t}}({});function pl(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(pl,ke);var wd=0;A=pl.prototype;A.open=function(t,e){if(this.readyState!=wd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ws(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=wd};A.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Qv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}A.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bs(this):ws(this),this.readyState==3&&Qv(this)}};A.Va=function(t){this.g&&(this.response=this.responseText=t,Bs(this))};A.Ua=function(t){this.g&&(this.response=t,Bs(this))};A.ga=function(){this.g&&Bs(this)};function Bs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ws(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ws(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Gk=U.JSON.parse;function le(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yv,this.K=this.L=!1}xe(le,ke);var Yv="",Qk=/^https?$/i,Yk=["POST","PUT"];A=le.prototype;A.Ka=function(t){this.L=t};A.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fc.g(),this.C=this.u?xp(this.u):xp(Fc),this.g.onreadystatechange=Ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Lp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=dv(Yk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zv(this),0<this.B&&((this.K=Xk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ue(this.qa,this)):this.A=fd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lp(this,s)}};function Xk(t){return Zr&&pk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.qa=function(){typeof rd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Lp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xv(t),ml(t)}function Xv(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),ml(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ml(this,!0)),le.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?Jv(this):this.fb())};A.fb=function(){Jv(this)};function Jv(t){if(t.h&&typeof rd<"u"&&(!t.C[1]||Ft(t)!=4||t.aa()!=2)){if(t.v&&Ft(t)==4)fd(t.Ha,0,t);else if(De(t,"readystatechange"),Ft(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Vv)[1]||null;if(!i&&U.self&&U.self.location){var s=U.self.location.protocol;i=s.substr(0,s.length-1)}r=!Qk.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Ft(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Xv(t)}}finally{ml(t)}}}}function ml(t,e){if(t.g){Zv(t);const n=t.g,r=t.C[0]?Sa:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function Zv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function Ft(t){return t.g?t.g.readyState:0}A.aa=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Gk(e)}};function Mp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function e0(t){let e="";return od(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ed(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=e0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ne(t,e,n))}function Ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function t0(t){this.Ca=0,this.i=[],this.j=new ll,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ni("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ni("baseRetryDelayMs",5e3,t),this.bb=Ni("retryDelaySeedMs",1e4,t),this.$a=Ni("forwardChannelMaxRetries",2,t),this.ta=Ni("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Hv(t&&t.concurrentRequestLimit),this.Fa=new Wk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=t0.prototype;A.ma=8;A.G=1;function Sd(t){if(n0(t),t.G==3){var e=t.U++,n=qt(t.F);ne(n,"SID",t.I),ne(n,"RID",e),ne(n,"TYPE","terminate"),js(t,n),e=new bs(t,t.j,e,void 0),e.K=2,e.v=fl(qt(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=c0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Vs(e)}l0(t)}function gl(t){t.g&&(Td(t),t.g.cancel(),t.g=null)}function n0(t){gl(t),t.u&&(U.clearTimeout(t.u),t.u=null),Na(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function yl(t){Wv(t.h)||t.m||(t.m=!0,kv(t.Ja,t),t.C=0)}function Jk(t,e){return qv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Us(Ue(t.Ja,t,e),a0(t,t.C)),t.C++,!0)}A.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new bs(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=gv(s),yv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=r0(this,i,e),n=qt(this.F),ne(n,"RID",t),ne(n,"CVER",22),this.D&&ne(n,"X-HTTP-Session-Id",this.D),js(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(e0(s)))+"&"+e:this.o&&Ed(n,this.o,s)),yd(this.h,i),this.Ya&&ne(n,"TYPE","init"),this.O?(ne(n,"$req",e),ne(n,"SID","null"),i.Z=!0,Vc(i,n,null)):Vc(i,n,e),this.G=2}}else this.G==3&&(t?$p(this,t):this.i.length==0||Wv(this.h)||$p(this))};function $p(t,e){var n;e?n=e.m:n=t.U++;const r=qt(t.F);ne(r,"SID",t.I),ne(r,"RID",n),ne(r,"AID",t.T),js(t,r),t.o&&t.s&&Ed(r,t.o,t.s),n=new bs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=r0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yd(t.h,n),Vc(n,r,e)}function js(t,e){t.ia&&od(t.ia,function(n,r){ne(e,r,n)}),t.l&&bv({},function(n,r){ne(e,r,n)})}function r0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ue(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{qk(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function i0(t){t.g||t.u||(t.Z=1,kv(t.Ia,t),t.A=0)}function _d(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Us(Ue(t.Ia,t),a0(t,t.A)),t.A++,!0)}A.Ia=function(){if(this.u=null,s0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Us(Ue(this.eb,this),t)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,je(10),gl(this),s0(this))};function Td(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function s0(t){t.g=new bs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=qt(t.sa);ne(e,"RID","rpc"),ne(e,"SID",t.I),ne(e,"CI",t.L?"0":"1"),ne(e,"AID",t.T),ne(e,"TYPE","xmlhttp"),js(t,e),t.o&&t.s&&Ed(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=fl(qt(e)),n.s=null,n.P=!0,Mv(n,t)}A.cb=function(){this.v!=null&&(this.v=null,gl(this),_d(this),je(19))};function Na(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function o0(t,e){var n=null;if(t.g==e){Na(t),Td(t),t.g=null;var r=2}else if(Bc(t.h,e))n=e.D,Kv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ul(),De(r,new xv(r,n)),yl(t)}else i0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&Jk(t,e)||r==2&&_d(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Hn(t,5);break;case 4:Hn(t,10);break;case 3:Hn(t,6);break;default:Hn(t,2)}}}function a0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Hn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ue(t.kb,t);n||(n=new Gn("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||Ia(n,"https"),fl(n)),Kk(n.toString(),r)}else je(2);t.G=0,t.l&&t.l.va(e),l0(t),n0(t)}A.kb=function(t){t?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function l0(t){if(t.G=0,t.la=[],t.l){const e=Gv(t.h);(e.length!=0||t.i.length!=0)&&(Ip(t.la,e),Ip(t.la,t.i),t.h.i.length=0,id(t.i),t.i.length=0),t.l.ua()}}function u0(t,e,n){var r=n instanceof Gn?qt(n):new Gn(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ca(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Gn(null,void 0);r&&Ia(s,r),e&&(s.g=e),i&&Ca(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ne(r,n,e),ne(r,"VER",t.ma),js(t,r),r}function c0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new le(new zs({jb:!0})):new le(t.ra),e.Ka(t.H),e}function h0(){}A=h0.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function Ra(){if(Zr&&!(10<=Number(mk)))throw Error("Environmental error: no available transport.")}Ra.prototype.g=function(t,e){return new it(t,e)};function it(t,e){ke.call(this),this.g=new t0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!_a(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_a(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new di(this)}xe(it,ke);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=u0(t,null,t.V),yl(t)};it.prototype.close=function(){Sd(this.g)};it.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hd(t),t=n);e.i.push(new jk(e.ab++,t)),e.G==3&&yl(e)};it.prototype.M=function(){this.g.l=null,delete this.j,Sd(this.g),delete this.g,it.X.M.call(this)};function d0(t){md.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(d0,md);function f0(){gd.call(this),this.status=1}xe(f0,gd);function di(t){this.g=t}xe(di,h0);di.prototype.xa=function(){De(this.g,"a")};di.prototype.wa=function(t){De(this.g,new d0(t))};di.prototype.va=function(t){De(this.g,new f0)};di.prototype.ua=function(){De(this.g,"b")};Ra.prototype.createWebChannel=Ra.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;cl.NO_ERROR=0;cl.TIMEOUT=8;cl.HTTP_ERROR=6;Pv.COMPLETE="complete";Ov.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";ke.prototype.listen=ke.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.Oa;le.prototype.getLastErrorCode=le.prototype.Ea;le.prototype.getStatus=le.prototype.aa;le.prototype.getResponseJson=le.prototype.Sa;le.prototype.getResponseText=le.prototype.fa;le.prototype.send=le.prototype.da;le.prototype.setWithCredentials=le.prototype.Ka;var Zk=function(){return new Ra},eI=function(){return ul()},Eu=cl,tI=Pv,nI=pr,Up={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rI=zs,So=Ov,iI=le;const Fp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new ed("@firebase/firestore");function bp(){return ar.logLevel}function P(t,...e){if(ar.logLevel<=G.DEBUG){const n=e.map(kd);ar.debug(`Firestore (${fi}): ${t}`,...n)}}function Kt(t,...e){if(ar.logLevel<=G.ERROR){const n=e.map(kd);ar.error(`Firestore (${fi}): ${t}`,...n)}}function jc(t,...e){if(ar.logLevel<=G.WARN){const n=e.map(kd);ar.warn(`Firestore (${fi}): ${t}`,...n)}}function kd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${fi}) INTERNAL ASSERTION FAILED: `+t;throw Kt(e),new Error(e)}function pe(t,e){t||V()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class oI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aI{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new p0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new Le(e)}}class lI{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(pe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class uI{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new lI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.A=n.token,new cI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new Ze(0,0))}static max(){return new F(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Es.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Es?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends Es{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const pI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Es{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return pI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ae.fromString(e))}static fromName(e){return new L(ae.fromString(e).popFirst(5))}static empty(){return new L(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ae(e.slice()))}}function mI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new Nn(i,L.empty(),e)}function gI(t){return new Nn(t.readTime,t.key,-1)}class Nn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nn(F.min(),L.empty(),-1)}static max(){return new Nn(F.max(),L.empty(),-1)}}function yI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==vI)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Cd.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function SI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){return t==null}function Hc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const _I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(pe(!!t),typeof t=="string"){let e=0;const n=_I.exec(t);if(pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function g0(t){const e=t.mapValue.fields.__previous_value__;return m0(e)?g0(e):e}function _s(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?m0(t)?4:TI(t)?9007199254740991:10:V()}function Pt(t,e){if(t===e)return!0;const n=lr(t);if(n!==lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _s(t).isEqual(_s(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Rn(r.timestampValue),o=Rn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ti(r.bytesValue).isEqual(ti(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return de(r.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return de(r.integerValue)===de(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=de(r.doubleValue),o=de(i.doubleValue);return s===o?Hc(s)===Hc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vp(s)!==Vp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Pt(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Ts(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function ni(t,e){if(t===e)return 0;const n=lr(t),r=lr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=de(i.integerValue||i.doubleValue),a=de(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return zp(t.timestampValue,e.timestampValue);case 4:return zp(_s(t),_s(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ti(i),a=ti(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(de(i.latitude),de(s.latitude));return o!==0?o:Q(de(i.longitude),de(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ni(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===_o.mapValue&&s===_o.mapValue)return 0;if(i===_o.mapValue)return 1;if(s===_o.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=ni(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function zp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=Rn(t),r=Rn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function ri(t){return Wc(t)}function Wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Rn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ti(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Wc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Wc(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function qc(t){return!!t&&"integerValue"in t}function Nd(t){return!!t&&"arrayValue"in t}function Bp(t){return!!t&&"nullValue"in t}function jp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function Wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.position=e,this.inclusive=n}}function Hp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{}class ge extends y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CI(e,n,r):n==="array-contains"?new DI(e,r):n==="in"?new AI(e,r):n==="not-in"?new xI(e,r):n==="array-contains-any"?new PI(e,r):new ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NI(e,r):new RI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ni(n,this.value)):n!==null&&lr(this.value)===lr(n)&&this.matchesComparison(ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ot extends y0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ot(e,n)}matches(e){return v0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function v0(t){return t.op==="and"}function kI(t){return II(t)&&v0(t)}function II(t){for(const e of t.filters)if(e instanceof Ot)return!1;return!0}function w0(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+ri(t.value);{const e=t.filters.map(n=>w0(n)).join(",");return`${t.op}(${e})`}}function E0(t,e){return t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.field.isEqual(r.field)&&Pt(n.value,r.value)}(t,e):t instanceof Ot?function(n,r){return r instanceof Ot&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&E0(s,r.filters[o]),!0):!1}(t,e):void V()}function S0(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${ri(e.value)}`}(t):t instanceof Ot?function(e){return e.op.toString()+" {"+e.getFilters().map(S0).join(" ,")+"}"}(t):"Filter"}class CI extends ge{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class NI extends ge{constructor(e,n){super(e,"in",n),this.keys=_0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RI extends ge{constructor(e,n){super(e,"not-in",n),this.keys=_0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class DI extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nd(n)&&Ts(n.arrayValue,this.value)}}class AI extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ts(this.value.arrayValue,n)}}class xI extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ts(this.value.arrayValue,n)}}class PI extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ts(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n="asc"){this.field=e,this.dir=n}}function OI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qp(this.data.getIterator())}getIteratorFrom(e){return new qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Yn([])}unionWith(e){let n=new we(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wi(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Wi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,F.min(),F.min(),F.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new $e(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new $e(e,2,n,F.min(),F.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,F.min(),F.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Kp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LI(t,e,n,r,i,s,o)}function Rd(t){const e=K(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>w0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ri(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ri(r)).join(",")),e.ft=n}return e.ft}function Dd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!E0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wp(t.startAt,e.startAt)&&Wp(t.endAt,e.endAt)}function Kc(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function MI(t,e,n,r,i,s,o,a){return new El(t,e,n,r,i,s,o,a)}function T0(t){return new El(t)}function Gp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $I(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function UI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function FI(t){return t.collectionGroup!==null}function br(t){const e=K(t);if(e.dt===null){e.dt=[];const n=UI(e),r=$I(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new qi(n)),e.dt.push(new qi(Ge.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new qi(Ge.keyField(),s))}}}return e.dt}function Gt(t){const e=K(t);if(!e._t)if(e.limitType==="F")e._t=Kp(e.path,e.collectionGroup,br(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of br(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new qi(s.field,o))}const r=e.endAt?new Da(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Da(e.startAt.position,e.startAt.inclusive):null;e._t=Kp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Gc(t,e,n){return new El(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sl(t,e){return Dd(Gt(t),Gt(e))&&t.limitType===e.limitType}function k0(t){return`${Rd(Gt(t))}|lt:${t.limitType}`}function Qc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>S0(r)).join(", ")}]`),wl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ri(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ri(r)).join(",")),`Target(${n})`}(Gt(t))}; limitType=${t.limitType})`}function Ad(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of br(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Hp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,br(n),r)||n.endAt&&!function(i,s,o){const a=Hp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,br(n),r))}(t,e)}function bI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function I0(t){return(e,n)=>{let r=!1;for(const i of br(t)){const s=VI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VI(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ni(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hc(e)?"-0":e}}function BI(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this._=void 0}}function jI(t,e,n){return t instanceof Yc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Aa?C0(t,e):t instanceof xa?N0(t,e):function(r,i){const s=WI(r,i),o=Qp(s)+Qp(r.gt);return qc(s)&&qc(r.gt)?BI(o):zI(r.yt,o)}(t,e)}function HI(t,e,n){return t instanceof Aa?C0(t,e):t instanceof xa?N0(t,e):n}function WI(t,e){return t instanceof Xc?qc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Yc extends _l{}class Aa extends _l{constructor(e){super(),this.elements=e}}function C0(t,e){const n=R0(e);for(const r of t.elements)n.some(i=>Pt(i,r))||n.push(r);return{arrayValue:{values:n}}}class xa extends _l{constructor(e){super(),this.elements=e}}function N0(t,e){let n=R0(e);for(const r of t.elements)n=n.filter(i=>!Pt(i,r));return{arrayValue:{values:n}}}class Xc extends _l{constructor(e,n){super(),this.yt=e,this.gt=n}}function Qp(t){return de(t.integerValue||t.doubleValue)}function R0(t){return Nd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qI(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Aa&&r instanceof Aa||n instanceof xa&&r instanceof xa?ei(n.elements,r.elements,Pt):n instanceof Xc&&r instanceof Xc?Pt(n.gt,r.gt):n instanceof Yc&&r instanceof Yc}(t.transform,e.transform)}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xd{}function D0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new GI(t.key,Xn.none()):new Pd(t.key,t.data,Xn.none());{const n=t.data,r=Nt.empty();let i=new we(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Tl(t.key,r,new Yn(i.toArray()),Xn.none())}}function KI(t,e,n){t instanceof Pd?function(r,i,s){const o=r.value.clone(),a=Xp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Tl?function(r,i,s){if(!Fo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Xp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(A0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ki(t,e,n,r){return t instanceof Pd?function(i,s,o,a){if(!Fo(i.precondition,s))return o;const l=i.value.clone(),u=Jp(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tl?function(i,s,o,a){if(!Fo(i.precondition,s))return o;const l=Jp(i.fieldTransforms,a,s),u=s.data;return u.setAll(A0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Fo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Yp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ei(n,r,(i,s)=>qI(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pd extends xd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tl extends xd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function A0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xp(t,e,n){const r=new Map;pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HI(o,a,n[i]))}return r}function Jp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jI(s,o,e))}return r}class GI extends xd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,H;function x0(t){if(t===void 0)return Kt("GRPC error has no .code"),k.UNKNOWN;switch(t){case he.OK:return k.OK;case he.CANCELLED:return k.CANCELLED;case he.UNKNOWN:return k.UNKNOWN;case he.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case he.INTERNAL:return k.INTERNAL;case he.UNAVAILABLE:return k.UNAVAILABLE;case he.UNAUTHENTICATED:return k.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case he.NOT_FOUND:return k.NOT_FOUND;case he.ALREADY_EXISTS:return k.ALREADY_EXISTS;case he.PERMISSION_DENIED:return k.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case he.ABORTED:return k.ABORTED;case he.OUT_OF_RANGE:return k.OUT_OF_RANGE;case he.UNIMPLEMENTED:return k.UNIMPLEMENTED;case he.DATA_LOSS:return k.DATA_LOSS;default:return V()}}(H=he||(he={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return SI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new Ie(L.comparator);function Dn(){return YI}const P0=new Ie(L.comparator);function Li(...t){let e=P0;for(const n of t)e=e.insert(n.key,n);return e}function XI(t){let e=P0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wn(){return Gi()}function O0(){return Gi()}function Gi(){return new pi(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ie(L.comparator);const JI=new we(L.comparator);function W(...t){let e=JI;for(const n of t)e=e.add(n);return e}const ZI=new we(Q);function L0(){return ZI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ws.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kl(F.min(),i,L0(),Dn(),W())}}class Ws{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ws(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class M0{constructor(e,n){this.targetId=e,this.Et=n}}class $0{constructor(e,n,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Zp{constructor(){this.At=0,this.Rt=tm(),this.bt=ze.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=W(),n=W(),r=W();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Ws(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=tm()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class eC{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Dn(),this.qt=em(),this.Ut=new we(Q)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Kc(s))if(r===0){const o=new L(s.path);this.Qt(n,o,$e.newNoDocument(o,F.min()))}else pe(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Kc(a.target)){const l=new L(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,$e.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=W();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new kl(e,n,this.Ut,this.Lt,r);return this.Lt=Dn(),this.qt=em(),this.Ut=new we(Q),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Zp,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new we(Q),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Zp),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function em(){return new Ie(L.comparator)}function tm(){return new Ie(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rC=(()=>({and:"AND",or:"OR"}))();class iC{constructor(e,n){this.databaseId=e,this.wt=n}}function sC(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oC(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Vr(t){return pe(!!t),F.fromTimestamp(function(e){const n=Rn(e);return new Ze(n.seconds,n.nanos)}(t))}function aC(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function U0(t){const e=ae.fromString(t);return pe(z0(e)),e}function _u(t,e){const n=U0(e);if(n.get(1)!==t.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(F0(n))}function Jc(t,e){return aC(t.databaseId,e)}function lC(t){const e=U0(t);return e.length===4?ae.emptyPath():F0(e)}function nm(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function F0(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(pe(u===void 0||typeof u=="string"),ze.fromBase64String(u||"")):(pe(u===void 0||u instanceof Uint8Array),ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:x0(l.code);return new M(u,l.message||"")}(o);n=new $0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_u(t,r.document.name),s=Vr(r.document.updateTime),o=r.document.createTime?Vr(r.document.createTime):F.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=$e.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new bo(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_u(t,r.document),s=r.readTime?Vr(r.readTime):F.min(),o=$e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_u(t,r.document),s=r.removedTargetIds||[];n=new bo([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new QI(i),o=r.targetId;n=new M0(o,s)}}return n}function cC(t,e){return{documents:[Jc(t,e.path)]}}function hC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return V0(Ot.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:yr(c.field),direction:pC(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||wl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function dC(t){let e=lC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=b0(c);return h instanceof Ot&&kI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new qi(vr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,wl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Da(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Da(d,h)}(n.endAt)),MI(e,i,o,s,a,"F",l,u)}function fC(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function b0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vr(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=vr(e.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vr(e.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vr(e.unaryFilter.field);return ge.create(s,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(vr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ot.create(e.compositeFilter.filters.map(n=>b0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return V()}}(e.compositeFilter.op))}(t):V()}function pC(t){return tC[t]}function mC(t){return nC[t]}function gC(t){return rC[t]}function yr(t){return{fieldPath:t.canonicalString()}}function vr(t){return Ge.fromServerFormat(t.fieldPath)}function V0(t){return t instanceof ge?function(e){if(e.op==="=="){if(jp(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NAN"}};if(Bp(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jp(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NAN"}};if(Bp(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(e.field),op:mC(e.op),value:e.value}}}(t):t instanceof Ot?function(e){const n=e.getFilters().map(r=>V0(r));return n.length===1?n[0]:{compositeFilter:{op:gC(e.op),filters:n}}}(t):V()}function z0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KI(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=O0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=D0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>Yp(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>Yp(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,i,s=F.min(),o=F.min(),a=ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.ie=e}}function EC(t){const e=dC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.Je=new _C}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Nn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Nn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class _C{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ii(0)}static vn(){return new ii(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.changes=new pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ki(r.mutation,i,Yn.empty(),Ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Wn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Li();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Dn();const o=Gi(),a=Gi();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Tl)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ki(c.mutation,u,c.mutation.getFieldMask(),Ze.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new kC(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gi();let i=new Ie((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Yn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=O0();c.forEach(d=>{if(!s.has(d)){const g=D0(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):FI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Wn());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:XI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Li();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Li();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new El(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,$e.newInvalidDocument(u)))});let o=Li();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ki(u.mutation,l,Yn.empty(),Ze.now()),Ad(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Vr(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:EC(r.bundledQuery),readTime:Vr(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.overlays=new Ie(L.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Wn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Wn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Wn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vC(n,r));let s=this.es.get(n);s===void 0&&(s=W(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.ns=new we(Se.ss),this.rs=new we(Se.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Se(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Se(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new ae([])),r=new Se(n,e),i=new Se(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new ae([])),r=new Se(n,e),i=new Se(n,e+1);let s=W();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Se(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||Q(e._s,n._s)}static os(e,n){return Q(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new we(Se.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yC(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Se(n,0),i=new Se(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(Q);return n.forEach(i=>{const s=new Se(i,0),o=new Se(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Se(new L(s),0);let a=new we(Q);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new Se(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Se(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.Es=e,this.docs=new Ie(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$e.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=Dn();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||yI(gI(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){V()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AC(this)}getSize(e){return S.resolve(this.size)}}class AC extends TC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.persistence=e,this.Rs=new pi(n=>Rd(n),Dd),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Od,this.targetCount=0,this.vs=ii.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ii(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Cd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new xC(this),this.indexManager=new SC,this.remoteDocumentCache=function(r){return new DC(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new wC(n),this.Ns=new CC(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new RC(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new OC(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class OC extends wI{constructor(e){super(),this.currentSequenceNumber=e}}class Ld{constructor(e){this.persistence=e,this.Fs=new Od,this.$s=null}static Bs(e){return new Ld(e)}get Ls(){if(this.$s)return this.$s;throw V()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Md(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Gp(n))return S.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gc(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Gc(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Gp(n)||i.isEqual(F.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(bp()<=G.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qc(n)),this.Bi(e,o,n,mI(i,-1)))})}Fi(e,n){let r=new we(I0(e));return n.forEach((i,s)=>{Ad(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return bp()<=G.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Qc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Nn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ie(Q),this.Ui=new pi(s=>Rd(s),Dd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function $C(t,e,n,r){return new MC(t,e,n,r)}async function B0(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function j0(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function UC(t,e){const n=K(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ze.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,O){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=Dn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(FC(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(F.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function FC(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function bC(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Jn(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Zc(t,e,n){const r=K(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hs(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function rm(t,e,n){const r=K(t);let i=F.min(),s=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=K(a),h=c.Ui.get(u);return h!==void 0?S.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,Gt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:W())).next(a=>(VC(r,bI(e),a),{documents:a,Hi:s})))}function VC(t,e,n){let r=t.Ki.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class im{constructor(){this.activeTargetIds=L0()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zC{constructor(){this.Lr=new im,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new im,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);P("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(P("RestConnection","Received: ",l),l),l=>{throw jc("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+fi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=jC[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new iI;a.setWithCredentials(!0),a.listenOnce(tI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Eu.NO_ERROR:const u=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Eu.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const c=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(v)>=0?v:k.UNKNOWN}(d.status);o(new M(g,d.message))}else o(new M(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(k.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Zk(),o=eI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rI({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");P("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new HC({Hr:y=>{h?P("Connection","Not sending because WebChannel is closed:",y):(c||(P("Connection","Opening WebChannel transport."),u.open(),c=!0),P("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,O)=>{y.listen(v,p=>{try{O(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,So.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),g(u,So.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),d.io())}),g(u,So.EventType.ERROR,y=>{h||(h=!0,jc("Connection","WebChannel transport errored:",y),d.io(new M(k.UNAVAILABLE,"The operation could not be completed")))}),g(u,So.EventType.MESSAGE,y=>{var v;if(!h){const O=y.data[0];pe(!!O);const p=O,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){P("Connection","WebChannel received error:",f);const m=f.status;let w=function(C){const N=he[C];if(N!==void 0)return x0(N)}(m),T=f.message;w===void 0&&(w=k.INTERNAL,T="Unknown error status: "+m+" with message "+f.message),h=!0,d.io(new M(w,T)),u.close()}else P("Connection","WebChannel received:",O),d.ro(O)}}),g(o,nI.STAT_EVENT,y=>{y.stat===Up.PROXY?P("Connection","Detected buffering proxy"):y.stat===Up.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Tu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return new iC(t,!0)}class W0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new W0(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Kt(n.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KC extends qC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=uC(this.yt,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Vr(s.readTime):F.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=nm(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=Kc(a)?{documents:cC(i,a)}:{query:hC(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=oC(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=sC(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=fC(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=nm(this.yt),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(k.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(k.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class QC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Kt(n),this.ou=!1):P("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Ks(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=K(a);l._u.add(4),await qs(l),l.gu.set("Unknown"),l._u.delete(4),await Il(l)}(this))})}),this.gu=new QC(r,i)}}async function Il(t){if(Ks(t))for(const e of t.wu)await e(!0)}async function qs(t){for(const e of t.wu)await e(!1)}function q0(t,e){const n=K(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Fd(n)?Ud(n):mi(n).ko()&&$d(n,e))}function K0(t,e){const n=K(t),r=mi(n);n.du.delete(e),r.ko()&&G0(n,e),n.du.size===0&&(r.ko()?r.Fo():Ks(n)&&n.gu.set("Unknown"))}function $d(t,e){t.yu.Ot(e.targetId),mi(t).zo(e)}function G0(t,e){t.yu.Ot(e),mi(t).Ho(e)}function Ud(t){t.yu=new eC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),mi(t).start(),t.gu.uu()}function Fd(t){return Ks(t)&&!mi(t).No()&&t.du.size>0}function Ks(t){return K(t)._u.size===0}function Q0(t){t.yu=void 0}async function XC(t){t.du.forEach((e,n)=>{$d(t,e)})}async function JC(t,e){Q0(t),Fd(t)?(t.gu.hu(e),Ud(t)):t.gu.set("Unknown")}async function ZC(t,e,n){if(t.gu.set("Online"),e instanceof $0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await om(t,r)}else if(e instanceof bo?t.yu.Kt(e):e instanceof M0?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(F.min()))try{const r=await j0(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(ze.EMPTY_BYTE_STRING,l.snapshotVersion)),G0(i,a);const u=new Jn(l.target,a,1,l.sequenceNumber);$d(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await om(t,r)}}async function om(t,e,n){if(!Hs(e))throw e;t._u.add(1),await qs(t),t.gu.set("Offline"),n||(n=()=>j0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Il(t)})}async function am(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Ks(n);n._u.add(3),await qs(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Il(n)}async function eN(t,e){const n=K(t);e?(n._u.delete(2),await Il(n)):e||(n._u.add(2),await qs(n),n.gu.set("Unknown"))}function mi(t){return t.pu||(t.pu=function(e,n,r){const i=K(e);return i.su(),new KC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:XC.bind(null,t),Zr:JC.bind(null,t),Wo:ZC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Fd(t)?Ud(t):t.gu.set("Unknown")):(await t.pu.stop(),Q0(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new bd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Y0(t,e){if(Kt("AsyncQueue",`${e}: ${t}`),Hs(t))return new M(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Li(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.Tu=new Ie(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):V():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new si(e,n,zr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.Au=void 0,this.listeners=[]}}class nN{constructor(){this.queries=new pi(e=>k0(e),Sl),this.onlineState="Unknown",this.Ru=new Set}}async function rN(t,e){const n=K(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new tN),i)try{s.Au=await n.onListen(r)}catch(o){const a=Y0(o,`Initialization of query '${Qc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Vd(n)}async function iN(t,e){const n=K(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function sN(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Vd(n)}function oN(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Vd(t){t.Ru.forEach(e=>{e.next()})}class aN{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.key=e}}class J0{constructor(e){this.key=e}}class lN{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=W(),this.mutatedKeys=W(),this.Gu=I0(e),this.Qu=new zr(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new lm,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Ad(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),O=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),O=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),O=!0):d&&!g&&(r.track({type:1,doc:d}),O=!0,(l||u)&&(a=!0)),O&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new si(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=W(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new J0(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new X0(r))}),n}tc(e){this.qu=e.Hi,this.Ku=W();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return si.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class uN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cN{constructor(e){this.key=e,this.nc=!1}}class hN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new pi(a=>k0(a),Sl),this.rc=new Map,this.oc=new Set,this.uc=new Ie(L.comparator),this.cc=new Map,this.ac=new Od,this.hc={},this.lc=new Map,this.fc=ii.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function dN(t,e){const n=wN(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await bC(n.localStore,Gt(e));n.isPrimaryClient&&q0(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await fN(n,e,r,a==="current",o.resumeToken)}return i}async function fN(t,e,n,r,i){t._c=(h,d,g)=>async function(y,v,O,p){let f=v.view.Wu(O);f.$i&&(f=await rm(y.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return cm(y,v.targetId,w.Xu),w.snapshot}(t,h,d,g);const s=await rm(t.localStore,e,!0),o=new lN(e,s.Hi),a=o.Wu(s.documents),l=Ws.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);cm(t,n,u.Xu);const c=new uN(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function pN(t,e){const n=K(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Sl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),K0(n.remoteStore,r.targetId),eh(n,r.targetId)}).catch(Id)):(eh(n,r.targetId),await Zc(n.localStore,r.targetId,!0))}async function Z0(t,e){const n=K(t);try{const r=await UC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?pe(o.nc):i.removedDocuments.size>0&&(pe(o.nc),o.nc=!1))}),await tw(n,r,e)}catch(r){await Id(r)}}function um(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=K(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Vd(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mN(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ie(L.comparator);o=o.insert(s,$e.newNoDocument(s,F.min()));const a=W().add(s),l=new kl(F.min(),new Map,new we(Q),o,a);await Z0(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),zd(r)}else await Zc(r.localStore,e,!1).then(()=>eh(r,e,n)).catch(Id)}function eh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||ew(t,r)})}function ew(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(K0(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),zd(t))}function cm(t,e,n){for(const r of n)r instanceof X0?(t.ac.addReference(r.key,e),gN(t,r)):r instanceof J0?(P("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||ew(t,r.key)):V()}function gN(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.oc.add(r),zd(t))}function zd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(ae.fromString(e)),r=t.fc.next();t.cc.set(r,new cN(n)),t.uc=t.uc.insert(n,r),q0(t.remoteStore,new Jn(Gt(T0(n.path)),r,2,Cd.at))}}async function tw(t,e,n){const r=K(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Md.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=K(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Hs(c))throw c;P("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function yN(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await B0(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new M(k.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tw(n,r.ji)}}function vN(t,e){const n=K(t),r=n.cc.get(e);if(r&&r.nc)return W().add(r.key);{let i=W();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function wN(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mN.bind(null,e),e.sc.Wo=sN.bind(null,e.eventManager),e.sc.wc=oN.bind(null,e.eventManager),e}class EN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=H0(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return $C(this.persistence,new LC,e.initialUser,this.yt)}yc(e){return new PC(Ld.Bs,this.yt)}gc(e){return new zC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yN.bind(null,this.syncEngine),await eN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nN}createDatastore(e){const n=H0(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new WC(i));var i;return function(s,o,a,l){return new GC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>um(this.syncEngine,a,0),o=sm.C()?new sm:new BC,new YC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new hN(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);P("RemoteStore","RemoteStore shutting down."),n._u.add(5),await qs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t,e,n){if(!n)throw new M(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TN(t,e,n,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hm(t){if(L.isDocumentKey(t))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function th(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kN(t);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new Map;class fm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,TN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sI;switch(n.type){case"gapi":const r=n.client;return new uI(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dm.get(e);n&&(P("ComponentProvider","Removing Datastore"),dm.delete(e),n.terminate())}(this),Promise.resolve()}}function IN(t,e,n,r={}){var i;const s=(t=th(t,Bd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&jc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Le.MOCK_USER;else{o=H_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(l)}t._authCredentials=new oI(new p0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gi(this.firestore,e,this._key)}}class Cl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cl(this.firestore,e,this._query)}}class Br extends Cl{constructor(e,n,r){super(e,n,T0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gi(this.firestore,null,new L(e))}withConverter(e){return new Br(this.firestore,e,this._path)}}function CN(t,e,...n){if(t=fr(t),_N("collection","path",e),t instanceof Bd){const r=ae.fromString(e,...n);return hm(r),new Br(t,null,r)}{if(!(t instanceof gi||t instanceof Br))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return hm(r),new Br(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Kt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=fI.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Y0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function DN(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await B0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function AN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xN(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>am(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>am(e.remoteStore,s)),t.onlineComponents=e}async function xN(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await DN(t,new EN)),t.offlineComponents}async function PN(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await AN(t,new SN)),t.onlineComponents}async function ON(t){const e=await PN(t),n=e.eventManager;return n.onListen=dN.bind(null,e.syncEngine),n.onUnlisten=pN.bind(null,e.syncEngine),n}function LN(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new NN({next:h=>{s.enqueueAndForget(()=>iN(i,c)),h.fromCache&&a.source==="server"?l.reject(new M(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new aN(o,u,{includeMetadataChanges:!0,Nu:!0});return rN(i,c)}(await ON(t),t.asyncQueue,e,n,r)),r.promise}class MN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new W0(this,"async_queue_retry"),this.Wc=()=>{const n=Tu();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Tu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Tu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Qn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Hs(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Kt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=bd.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&V()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class nw extends Bd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new MN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rw(this),this._firestoreClient.terminate()}}function $N(t,e){const n=typeof t=="object"?t:uv(),r=typeof t=="string"?t:e||"(default)",i=nd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=z_("firestore");s&&IN(i,...s)}return i}function UN(t){return t._firestoreClient||rw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new EI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new RN(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pa(ze.fromBase64String(e))}catch(n){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pa(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}const bN=new RegExp("[~\\*/\\[\\]]");function VN(t,e,n){if(e.search(bN)>=0)throw pm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iw(...e.split("."))._internalPath}catch{throw pm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pm(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(k.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ow("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zN extends sw{data(){return super.data()}}function ow(t,e){return typeof e=="string"?VN(t,e):e instanceof iw?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jN{convertValue(e,n="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return vl(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new FN(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=g0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_s(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);pe(z0(r));const i=new Ss(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Kt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HN extends sw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ow("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vo extends HN{data(e={}){return super.data(e)}}class WN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ko(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vo(this._firestore,this._userDataWriter,r.key,r,new ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Vo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ko(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Vo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ko(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:qN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}class KN extends jN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gi(this.firestore,null,n)}}function GN(t){t=th(t,Cl);const e=th(t.firestore,nw),n=UN(e),r=new KN(e);return BN(t._query),LN(n,t._query).then(i=>new WN(e,r,t,i))}(function(t,e=!0){(function(n){fi=n})(Ls),Jr(new sr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new nw(new aI(n.getProvider("auth-internal")),new hI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kn(Fp,"3.8.0",t),kn(Fp,"3.8.0","esm2017")})();var QN="firebase",YN="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(QN,YN,"app");function jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function aw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XN=aw,lw=new Ps("auth","Firebase",aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new ed("@firebase/auth");function zo(t,...e){mm.logLevel<=G.ERROR&&mm.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Hd(t,...e)}function At(t,...e){return Hd(t,...e)}function JN(t,e,n){const r=Object.assign(Object.assign({},XN()),{[e]:n});return new Ps("auth","Firebase",r).create(e,{appName:t.name})}function Hd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lw.create(t,...e)}function $(t,e,...n){if(!t)throw Hd(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function Yt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=new Map;function Vt(t){Yt(t instanceof Function,"Expected a class definition");let e=gm.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t,e){const n=nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wa(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function eR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tR(){return ym()==="http:"||ym()==="https:"}function ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tR()||P_()||"connection"in navigator)?navigator.onLine:!0}function rR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=x_()||O_()}get(){return nR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new Gs(3e4,6e4);function oR(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nl(t,e,n,r,i={}){return cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Os(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uw.fetch()(hw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iR),e);try{const i=new lR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Io(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw JN(t,c,u);Qt(t,c)}}catch(i){if(i instanceof Jt)throw i;Qt(t,"network-request-failed")}}async function aR(t,e,n,r,i={}){const s=await Nl(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wd(t.config,i):`${t.config.apiScheme}://${i}`}class lR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),sR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e){return Nl(t,"POST","/v1/accounts:delete",e)}async function cR(t,e){return Nl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hR(t,e=!1){const n=fr(t),r=await n.getIdToken(e),i=qd(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qi(ku(i.auth_time)),issuedAtTime:Qi(ku(i.iat)),expirationTime:Qi(ku(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ku(t){return Number(t)*1e3}function qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=rv(n);return i?JSON.parse(i):(zo("Failed to decode base64 JWT payload"),null)}catch(i){return zo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dR(t){const e=qd(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&fR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ks(t,cR(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yR(s.providerUserInfo):[],a=gR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function mR(t){const e=fr(t);await Oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yR(t){return t.map(e=>{var{providerId:n}=e,r=jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e){const n=await cw(t,{},async()=>{const r=Os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Is;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ks(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hR(this,e)}reload(){return mR(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ks(this,uR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:N}=n;$(m&&N,e,"internal-error");const x=Is.fromJSON(this.name,N);$(typeof m=="string",e,"internal-error"),en(h,e.name),en(d,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof T=="boolean",e,"internal-error"),en(g,e.name),en(y,e.name),en(v,e.name),en(O,e.name),en(p,e.name),en(f,e.name);const J=new Zn({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(J.providerData=C.map(B=>Object.assign({},B))),O&&(J._redirectEventId=O),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Is;i.updateFromServerResponse(n);const s=new Zn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oa(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fw.type="NONE";const vm=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(Vt(vm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vt(vm);const o=Bo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Zn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vw(e))return"Blackberry";if(ww(e))return"Webos";if(Kd(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(yw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pw(t=Ve()){return/firefox\//i.test(t)}function Kd(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(t=Ve()){return/crios\//i.test(t)}function gw(t=Ve()){return/iemobile/i.test(t)}function yw(t=Ve()){return/android/i.test(t)}function vw(t=Ve()){return/blackberry/i.test(t)}function ww(t=Ve()){return/webos/i.test(t)}function Rl(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wR(t=Ve()){var e;return Rl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ER(){return L_()&&document.documentMode===10}function Ew(t=Ve()){return Rl(t)||yw(t)||ww(t)||vw(t)||/windows phone/i.test(t)||gw(t)}function SR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e=[]){let n;switch(t){case"Browser":n=wm(Ve());break;case"Worker":n=`${wm(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new _R(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fr(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Gd(t){return fr(t)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q_(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function kR(t,e,n){const r=Gd(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_w(e),{host:o,port:a}=IR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||CR()}function _w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IR(t){const e=_w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sm(o)}}}function Sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return aR(t,"POST","/v1/accounts:signInWithIdp",oR(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="http://localhost";class ur extends Tw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:NR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Os(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Qs{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Qs{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Qs{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zn._fromIdTokenResponse(e,r,i),o=_m(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_m(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _m(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new La(e,n,r,i)}}function Iw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,s,e,r):s})}async function RR(t,e,n=!1){const r=await ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ks(t,Iw(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=qd(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e,n=!1){const r="signIn",i=await Iw(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function xR(t,e,n,r){return fr(t).onIdTokenChanged(e,n,r)}function PR(t,e,n){return fr(t).beforeAuthStateChanged(e,n)}const Ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(){const t=Ve();return Kd(t)||Rl(t)}const LR=1e3,MR=10;class Nw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OR()&&SR(),this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ER()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const $R=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rw.type="SESSION";const Dw=Rw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await UR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Qd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function bR(t){xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function VR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BR(){return Aw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="firebaseLocalStorageDb",jR=1,$a="firebaseLocalStorage",Pw="fbase_key";class Ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([$a],e?"readwrite":"readonly").objectStore($a)}function HR(){const t=indexedDB.deleteDatabase(xw);return new Ys(t).toPromise()}function rh(){const t=indexedDB.open(xw,jR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($a,{keyPath:Pw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($a)?e(r):(r.close(),await HR(),e(await rh()))})})}async function Tm(t,e,n){const r=Al(t,!0).put({[Pw]:e,value:n});return new Ys(r).toPromise()}async function WR(t,e){const n=Al(t,!1).get(e),r=await new Ys(n).toPromise();return r===void 0?null:r.value}function km(t,e){const n=Al(t,!0).delete(e);return new Ys(n).toPromise()}const qR=800,KR=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dl._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VR(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rh();return await Tm(e,Ma,"1"),await km(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>km(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Al(i,!1).getAll();return new Ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const GR=Ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QR().appendChild(r)})}function XR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t,e){return e?Vt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Tw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZR(t){return AR(t.auth,new Yd(t),t.bypassAuthState)}function eD(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),DR(n,new Yd(t),t.bypassAuthState)}async function tD(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),RR(n,new Yd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZR;case"linkViaPopup":case"linkViaRedirect":return tD;case"reauthViaPopup":case"reauthViaRedirect":return eD;default:Qt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Gs(2e3,1e4);class Pr extends Lw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,nD.get())};e()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="pendingRedirect",jo=new Map;class iD extends Lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await sD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sD(t,e){const n=lD(e),r=aD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function oD(t,e){jo.set(t._key(),e)}function aD(t){return Vt(t._redirectPersistence)}function lD(t){return Bo(rD,t.config.apiKey,t.name)}async function uD(t,e,n=!1){const r=Gd(t),i=JR(r,e),o=await new iD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=10*60*1e3;class hD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Im(e))}saveEventToCache(e){this.cachedEventUids.add(Im(e)),this.lastProcessedEventTime=Date.now()}}function Im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t,e={}){return Nl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mD=/^https?/;async function gD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fD(t);for(const n of e)try{if(yD(n))return}catch{}Qt(t,"unauthorized-domain")}function yD(t){const e=nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mD.test(n))return!1;if(pD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new Gs(3e4,6e4);function Cm(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wD(t){return new Promise((e,n)=>{var r,i,s;function o(){Cm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cm(),n(At(t,"network-request-failed"))},timeout:vD.get()})}if(!((i=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xt().gapi)===null||s===void 0)&&s.load)o();else{const a=XR("iframefcb");return xt()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},YR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ho=null,e})}let Ho=null;function ED(t){return Ho=Ho||wD(t),Ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=new Gs(5e3,15e3),_D="__/auth/iframe",TD="emulator/auth/iframe",kD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ID=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CD(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wd(e,TD):`https://${t.config.authDomain}/${_D}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=ID.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Os(r).slice(1)}`}async function ND(t){const e=await ED(t),n=xt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:CD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=xt().setTimeout(()=>{s(o)},SD.get());function l(){xt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DD=500,AD=600,xD="_blank",PD="http://localhost";class Nm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OD(t,e,n,r=DD,i=AD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=mw(u)?xD:n),pw(u)&&(e=e||PD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(wR(u)&&a!=="_self")return LD(e||"",a),new Nm(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Nm(h)}function LD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="__/auth/handler",$D="emulator/auth/handler";function Rm(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof kw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",G_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Qs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${UD(t)}?${Os(a).slice(1)}`}function UD({config:t}){return t.emulator?Wd(t,$D):`https://${t.authDomain}/${MD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="webStorageSupport";class FD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dw,this._completeRedirectFn=uD,this._overrideRedirectResult=oD}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Rm(e,n,r,nh(),i);return OD(e,o,Qd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),bR(Rm(e,n,r,nh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ND(e),r=new hD(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Iu,{type:Iu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Iu];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ew()||Kd()||Rl()}}const bD=FD;var Dm="@firebase/auth",Am="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BD(t){Jr(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{$(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(t)},c=new TR(a,l,u);return eR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jr(new sr("auth-internal",e=>{const n=Gd(e.getProvider("auth").getImmediate());return(r=>new VD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Dm,Am,zD(t)),kn(Dm,Am,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=5*60,HD=sv("authIdTokenMaxAge")||jD;let xm=null;const WD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HD)return;const i=n==null?void 0:n.token;xm!==i&&(xm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qD(t=uv()){const e=nd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZN(t,{popupRedirectResolver:bD,persistence:[GR,$R,Dw]}),r=sv("authTokenSyncURL");if(r){const s=WD(r);PR(n,s,()=>s(n.currentUser)),xR(n,o=>s(o))}const i=iv("auth");return i&&kR(n,`http://${i}`),n}BD("Browser");const KD={apiKey:"AIzaSyA3HHPu8tepR32vPPN9MeTB-pHWVEjdNaE",authDomain:"remo-584cc.firebaseapp.com",databaseURL:"https://remo-584cc.firebaseio.com",projectId:"remo-584c",storageBucket:"remo-584cc.appspot.com",messagingSenderId:"1579465808",appId:"1:15794658087:web:cd30f756acc93a4adc6702",measurementId:"G-1VV34LT0FB"},$w=lv(KD),GD=$N($w);qD($w);const QD=t=>{const[e,n]=I.useState([]),[r,i]=I.useState(!1);return I.useEffect(()=>{(async()=>{const o=[];(await GN(CN(GD,t))).forEach(l=>{o.push({...l.data(),id:l.id}),i(!0)}),n(o)})(),i(!1),console.log("llamadno use effect")},[]),{docs:e,isLoading:r}};function YD({date:t,company:e}){return St("div",{className:"date-container",children:[_("img",{src:"./iconDate/calendar.svg",alt:""}),_("p",{children:t}),_("img",{src:"./iconDate/business.svg",alt:""}),_("p",{children:e})]})}const XD=({doc:t})=>_("div",{className:"columns",style:{display:"flex",flexDirection:"row"},children:St("div",{className:"info-trayectory",children:[_("p",{className:"description-trayectory",children:t.description}),_(YD,{date:t.date,company:t.company})]})},t.id),JD=()=>_("div",{className:"columns",style:{display:"flex",flexDirection:"row"},children:_("div",{className:"info-trayectory",children:_("p",{className:"description-trayectory",children:_(N_,{count:4})})})}),ZD=()=>{const{docs:t,isLoading:e}=QD("trayectoria");return _(R_,{baseColor:"#0b6c62",highlightColor:"#26a79a",children:St("div",{className:"trayectory-container",children:[_("h2",{children:"Trayectoria Profesional"}),e||_(JD,{}),t.map(n=>_(XD,{doc:n},n.id)),_("a",{href:"https://www.linkedin.com/in/mbohorquez65/",target:"_blank",children:"Trayectoria"})]})})},eA=()=>_("div",{className:"reactive-container",children:St(c_,{children:[_(gr,{path:"/portafolio",element:_(gp,{})}),_(gr,{path:"/trayectoria",element:_(ZD,{})}),_(gr,{path:"/proyectos",element:_(I_,{})}),_(gr,{path:"/contacto",element:_(y_,{})}),_(gr,{path:"*",element:_(gp,{})})]})});const tA=I.createContext({}),{Provider:nA}=tA,rA=({children:t,profile:e,classname:n,style:r})=>_(nA,{value:{profile:e},children:_("div",{className:"profile-container",style:r,children:t})}),iA=({img:t})=>_("div",{className:"profileImg-container",children:_("img",{src:t,alt:""})}),sA=({status:t})=>_("div",{className:"status-container",children:_("img",{src:t,alt:""})}),oA=({title:t})=>_("div",{className:"title-container",children:_("h4",{children:t})}),aA=({profile:t})=>_("div",{className:"profileProfessional-container",children:_("span",{children:t})});const lA=({description:t})=>_("div",{className:"description-container",children:_("p",{children:t})}),Cu=({icon:t,description:e,classname:n})=>St("div",{className:"contact-container",children:[_("img",{src:t,alt:""}),_("p",{children:e})]}),uA=({logo:t})=>_("div",{className:"logo-container",children:_("img",{src:t,alt:""})}),cA=()=>St("div",{className:"navigation-container",children:[_(uA,{logo:"./logo.svg"}),St("div",{className:"link-container",children:[_("span",{children:_(yo,{to:"/portafolio",children:"Quien soy"})}),_("span",{children:_(yo,{to:"trayectoria",children:"Trayectoria"})}),_("span",{children:_(yo,{to:"Proyectos",children:"Proyectos"})}),_("span",{children:_(yo,{to:"contacto",children:"Contacto"})})]})]});function hA(){const t={logo:"./logo.svg",img:"./card01.jpg",status:"./estado.svg",title:"Miguel Angel Bohorquez",education:"Front-end Developer",description:'Soy ingeniero de sistemas y diseñador de interfaces y amante al buen diseño, para mi el " buen diseño " no es unicamente aquel que brinda una linda vista al usuario.'},e={map:"./icon/Map.svg",mapDescription:"Sincelejo - Colombia",mail:"./icon/Mail.svg",mailDescription:"Mbohorquez65@gmail.com",git:"./icon/github.svg",gitDescription:"github.com/miguelangel1894"};return St("div",{className:"App",style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:[_(cA,{}),St(rA,{profile:t,children:[_(iA,{img:t.img}),_(sA,{status:t.status}),_(oA,{title:t.title}),_(aA,{profile:t.education}),_(lA,{description:t.description}),_(Cu,{icon:e.map,description:e.mapDescription}),_(Cu,{icon:e.mail,description:e.mailDescription}),_(Cu,{icon:e.git,description:e.gitDescription})]}),_(eA,{})]})}Ru.createRoot(document.getElementById("root")).render(_(gt.StrictMode,{children:_(m_,{children:_(hA,{})})}));
