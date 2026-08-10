function tw(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function xy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kd={exports:{}},Va={},Bd={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function nw(){if(Cv)return mt;Cv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function p(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(O,Q,Ne){this.props=O,this.context=Q,this.refs=M,this.updater=Ne||y}x.prototype.isReactComponent={},x.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=x.prototype;function R(O,Q,Ne){this.props=O,this.context=Q,this.refs=M,this.updater=Ne||y}var D=R.prototype=new S;D.constructor=R,E(D,x.prototype),D.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,F={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function T(O,Q,Ne){var Xe,Ve={},ce=null,_e=null;if(Q!=null)for(Xe in Q.ref!==void 0&&(_e=Q.ref),Q.key!==void 0&&(ce=""+Q.key),Q)N.call(Q,Xe)&&!L.hasOwnProperty(Xe)&&(Ve[Xe]=Q[Xe]);var me=arguments.length-2;if(me===1)Ve.children=Ne;else if(1<me){for(var Ie=Array(me),je=0;je<me;je++)Ie[je]=arguments[je+2];Ve.children=Ie}if(O&&O.defaultProps)for(Xe in me=O.defaultProps,me)Ve[Xe]===void 0&&(Ve[Xe]=me[Xe]);return{$$typeof:n,type:O,key:ce,ref:_e,props:Ve,_owner:F.current}}function I(O,Q){return{$$typeof:n,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function V(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ne){return Q[Ne]})}var j=/\/+/g;function re(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):Q.toString(36)}function de(O,Q,Ne,Xe,Ve){var ce=typeof O;(ce==="undefined"||ce==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(ce){case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case n:case e:_e=!0}}if(_e)return _e=O,Ve=Ve(_e),O=Xe===""?"."+re(_e,0):Xe,A(Ve)?(Ne="",O!=null&&(Ne=O.replace(j,"$&/")+"/"),de(Ve,Q,Ne,"",function(je){return je})):Ve!=null&&(z(Ve)&&(Ve=I(Ve,Ne+(!Ve.key||_e&&_e.key===Ve.key?"":(""+Ve.key).replace(j,"$&/")+"/")+O)),Q.push(Ve)),1;if(_e=0,Xe=Xe===""?".":Xe+":",A(O))for(var me=0;me<O.length;me++){ce=O[me];var Ie=Xe+re(ce,me);_e+=de(ce,Q,Ne,Ie,Ve)}else if(Ie=p(O),typeof Ie=="function")for(O=Ie.call(O),me=0;!(ce=O.next()).done;)ce=ce.value,Ie=Xe+re(ce,me++),_e+=de(ce,Q,Ne,Ie,Ve);else if(ce==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return _e}function Z(O,Q,Ne){if(O==null)return O;var Xe=[],Ve=0;return de(O,Xe,"","",function(ce){return Q.call(Ne,ce,Ve++)}),Xe}function H(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(Ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ne)},function(Ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ne)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var W={current:null},G={transition:null},ee={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:Z,forEach:function(O,Q,Ne){Z(O,function(){Q.apply(this,arguments)},Ne)},count:function(O){var Q=0;return Z(O,function(){Q++}),Q},toArray:function(O){return Z(O,function(Q){return Q})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},mt.Component=x,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=R,mt.StrictMode=i,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,mt.act=se,mt.cloneElement=function(O,Q,Ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Xe=E({},O.props),Ve=O.key,ce=O.ref,_e=O._owner;if(Q!=null){if(Q.ref!==void 0&&(ce=Q.ref,_e=F.current),Q.key!==void 0&&(Ve=""+Q.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ie in Q)N.call(Q,Ie)&&!L.hasOwnProperty(Ie)&&(Xe[Ie]=Q[Ie]===void 0&&me!==void 0?me[Ie]:Q[Ie])}var Ie=arguments.length-2;if(Ie===1)Xe.children=Ne;else if(1<Ie){me=Array(Ie);for(var je=0;je<Ie;je++)me[je]=arguments[je+2];Xe.children=me}return{$$typeof:n,type:O.type,key:Ve,ref:ce,props:Xe,_owner:_e}},mt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},mt.createElement=T,mt.createFactory=function(O){var Q=T.bind(null,O);return Q.type=O,Q},mt.createRef=function(){return{current:null}},mt.forwardRef=function(O){return{$$typeof:u,render:O}},mt.isValidElement=z,mt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:H}},mt.memo=function(O,Q){return{$$typeof:d,type:O,compare:Q===void 0?null:Q}},mt.startTransition=function(O){var Q=G.transition;G.transition={};try{O()}finally{G.transition=Q}},mt.unstable_act=se,mt.useCallback=function(O,Q){return W.current.useCallback(O,Q)},mt.useContext=function(O){return W.current.useContext(O)},mt.useDebugValue=function(){},mt.useDeferredValue=function(O){return W.current.useDeferredValue(O)},mt.useEffect=function(O,Q){return W.current.useEffect(O,Q)},mt.useId=function(){return W.current.useId()},mt.useImperativeHandle=function(O,Q,Ne){return W.current.useImperativeHandle(O,Q,Ne)},mt.useInsertionEffect=function(O,Q){return W.current.useInsertionEffect(O,Q)},mt.useLayoutEffect=function(O,Q){return W.current.useLayoutEffect(O,Q)},mt.useMemo=function(O,Q){return W.current.useMemo(O,Q)},mt.useReducer=function(O,Q,Ne){return W.current.useReducer(O,Q,Ne)},mt.useRef=function(O){return W.current.useRef(O)},mt.useState=function(O){return W.current.useState(O)},mt.useSyncExternalStore=function(O,Q,Ne){return W.current.useSyncExternalStore(O,Q,Ne)},mt.useTransition=function(){return W.current.useTransition()},mt.version="18.3.1",mt}var Rv;function vm(){return Rv||(Rv=1,Bd.exports=nw()),Bd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function iw(){if(Pv)return Va;Pv=1;var n=vm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var m,v={},p=null,y=null;d!==void 0&&(p=""+d),h.key!==void 0&&(p=""+h.key),h.ref!==void 0&&(y=h.ref);for(m in h)i.call(h,m)&&!a.hasOwnProperty(m)&&(v[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)v[m]===void 0&&(v[m]=h[m]);return{$$typeof:e,type:u,key:p,ref:y,props:v,_owner:o.current}}return Va.Fragment=t,Va.jsx=c,Va.jsxs=c,Va}var Dv;function rw(){return Dv||(Dv=1,kd.exports=iw()),kd.exports}var P=rw(),wc={},Vd={exports:{}},qn={},zd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function sw(){return Lv||(Lv=1,(function(n){function e(G,ee){var se=G.length;G.push(ee);e:for(;0<se;){var O=se-1>>>1,Q=G[O];if(0<o(Q,ee))G[O]=ee,G[se]=Q,se=O;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var ee=G[0],se=G.pop();if(se!==ee){G[0]=se;e:for(var O=0,Q=G.length,Ne=Q>>>1;O<Ne;){var Xe=2*(O+1)-1,Ve=G[Xe],ce=Xe+1,_e=G[ce];if(0>o(Ve,se))ce<Q&&0>o(_e,Ve)?(G[O]=_e,G[ce]=se,O=ce):(G[O]=Ve,G[Xe]=se,O=Xe);else if(ce<Q&&0>o(_e,se))G[O]=_e,G[ce]=se,O=ce;else break e}}return ee}function o(G,ee){var se=G.sortIndex-ee.sortIndex;return se!==0?se:G.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var h=[],d=[],m=1,v=null,p=3,y=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(G){for(var ee=t(d);ee!==null;){if(ee.callback===null)i(d);else if(ee.startTime<=G)i(d),ee.sortIndex=ee.expirationTime,e(h,ee);else break;ee=t(d)}}function A(G){if(M=!1,D(G),!E)if(t(h)!==null)E=!0,H(N);else{var ee=t(d);ee!==null&&W(A,ee.startTime-G)}}function N(G,ee){E=!1,M&&(M=!1,S(T),T=-1),y=!0;var se=p;try{for(D(ee),v=t(h);v!==null&&(!(v.expirationTime>ee)||G&&!V());){var O=v.callback;if(typeof O=="function"){v.callback=null,p=v.priorityLevel;var Q=O(v.expirationTime<=ee);ee=n.unstable_now(),typeof Q=="function"?v.callback=Q:v===t(h)&&i(h),D(ee)}else i(h);v=t(h)}if(v!==null)var Ne=!0;else{var Xe=t(d);Xe!==null&&W(A,Xe.startTime-ee),Ne=!1}return Ne}finally{v=null,p=se,y=!1}}var F=!1,L=null,T=-1,I=5,z=-1;function V(){return!(n.unstable_now()-z<I)}function j(){if(L!==null){var G=n.unstable_now();z=G;var ee=!0;try{ee=L(!0,G)}finally{ee?re():(F=!1,L=null)}}else F=!1}var re;if(typeof R=="function")re=function(){R(j)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Z=de.port2;de.port1.onmessage=j,re=function(){Z.postMessage(null)}}else re=function(){x(j,0)};function H(G){L=G,F||(F=!0,re())}function W(G,ee){T=x(function(){G(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){E||y||(E=!0,H(N))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(G){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var se=p;p=ee;try{return G()}finally{p=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,ee){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var se=p;p=G;try{return ee()}finally{p=se}},n.unstable_scheduleCallback=function(G,ee,se){var O=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=se+Q,G={id:m++,callback:ee,priorityLevel:G,startTime:se,expirationTime:Q,sortIndex:-1},se>O?(G.sortIndex=se,e(d,G),t(h)===null&&G===t(d)&&(M?(S(T),T=-1):M=!0,W(A,se-O))):(G.sortIndex=Q,e(h,G),E||y||(E=!0,H(N))),G},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(G){var ee=p;return function(){var se=p;p=ee;try{return G.apply(this,arguments)}finally{p=se}}}})(Hd)),Hd}var Nv;function ow(){return Nv||(Nv=1,zd.exports=sw()),zd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function aw(){if(Iv)return qn;Iv=1;var n=vm(),e=ow();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function p(r){return h.call(v,r)?!0:h.call(m,r)?!1:d.test(r)?v[r]=!0:(m[r]=!0,!1)}function y(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,s,l,f){if(s===null||typeof s>"u"||y(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,l,f,g,_,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=_,this.removeEmptyString=b}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];x[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(S,R);x[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(S,R);x[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(S,R);x[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function D(r,s,l,f){var g=x.hasOwnProperty(s)?x[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,g,f)&&(l=null),f||g===null?p(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):g.mustUseProperty?r[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,f=g.attributeNamespace,l===null?r.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),F=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),V=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),G=Symbol.iterator;function ee(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,O;function Q(r){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+r}var Ne=!1;function Xe(r,s){if(!r||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var f=fe}Reflect.construct(r,[],s)}else{try{s.call()}catch(fe){f=fe}r.call(s.prototype)}else{try{throw Error()}catch(fe){f=fe}r()}}catch(fe){if(fe&&f&&typeof fe.stack=="string"){for(var g=fe.stack.split(`
`),_=f.stack.split(`
`),b=g.length-1,B=_.length-1;1<=b&&0<=B&&g[b]!==_[B];)B--;for(;1<=b&&0<=B;b--,B--)if(g[b]!==_[B]){if(b!==1||B!==1)do if(b--,B--,0>B||g[b]!==_[B]){var X=`
`+g[b].replace(" at new "," at ");return r.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",r.displayName)),X}while(1<=b&&0<=B);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ve(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Xe(r.type,!1),r;case 11:return r=Xe(r.type.render,!1),r;case 1:return r=Xe(r.type,!0),r;default:return""}}function ce(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case L:return"Fragment";case F:return"Portal";case I:return"Profiler";case T:return"StrictMode";case re:return"Suspense";case de:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case z:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Z:return s=r.displayName||null,s!==null?s:ce(r.type)||"Memo";case H:s=r._payload,r=r._init;try{return ce(r(s))}catch{}}return null}function _e(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ie(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function je(r){var s=Ie(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,_=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return g.call(this)},set:function(b){f=""+b,_.call(this,b)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(b){f=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function tt(r){r._valueTracker||(r._valueTracker=je(r))}function Ot(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=Ie(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function ft(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function wt(r,s){var l=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function _t(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function gt(r,s){s=s.checked,s!=null&&D(r,"checked",s,!1)}function Wt(r,s){gt(r,s);var l=me(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Jt(r,s.type,l):s.hasOwnProperty("defaultValue")&&Jt(r,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Qt(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Jt(r,s,l){(s!=="number"||ft(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var $t=Array.isArray;function Pt(r,s,l,f){if(r=r.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<r.length;l++)g=s.hasOwnProperty("$"+r[l].value),r[l].selected!==g&&(r[l].selected=g),g&&f&&(r[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,g=0;g<r.length;g++){if(r[g].value===l){r[g].selected=!0,f&&(r[g].defaultSelected=!0);return}s!==null||r[g].disabled||(s=r[g])}s!==null&&(s.selected=!0)}}function Xt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function q(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if($t(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:me(l)}}function yn(r,s){var l=me(s.value),f=me(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Mt(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function U(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?U(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var J,ae=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,g){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,g)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=J.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function he(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(r){Re.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Me[s]=Me[r]})});function pe(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(r)&&Me[r]?(""+s).trim():s+"px"}function ve(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=pe(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,g):r[l]=g}}var De=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(r,s){if(s){if(De[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function et(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var nt=null,st=null,Y=null;function be(r){if(r=wa(r)){if(typeof nt!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Vl(s),nt(r.stateNode,r.type,s))}}function ge(r){st?Y?Y.push(r):Y=[r]:st=r}function Pe(){if(st){var r=st,s=Y;if(Y=st=null,be(r),s)for(r=0;r<s.length;r++)be(s[r])}}function Fe(r,s){return r(s)}function xe(){}var Ye=!1;function He(r,s,l){if(Ye)return r(s,l);Ye=!0;try{return Fe(r,s,l)}finally{Ye=!1,(st!==null||Y!==null)&&(xe(),Pe())}}function Ft(r,s){var l=r.stateNode;if(l===null)return null;var f=Vl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ct=!1;if(u)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ct=!1}function ai(r,s,l,f,g,_,b,B,X){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(l,fe)}catch(Se){this.onError(Se)}}var cs=!1,Zs=null,us=!1,fs=null,af={onError:function(r){cs=!0,Zs=r}};function El(r,s,l,f,g,_,b,B,X){cs=!1,Zs=null,ai.apply(af,arguments)}function Ml(r,s,l,f,g,_,b,B,X){if(El.apply(this,arguments),cs){if(cs){var fe=Zs;cs=!1,Zs=null}else throw Error(t(198));us||(us=!0,fs=fe)}}function In(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Qs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function sa(r){if(In(r)!==r)throw Error(t(188))}function Tl(r){var s=r.alternate;if(!s){if(s=In(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var g=l.return;if(g===null)break;var _=g.alternate;if(_===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===l)return sa(g),r;if(_===f)return sa(g),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=_;else{for(var b=!1,B=g.child;B;){if(B===l){b=!0,l=g,f=_;break}if(B===f){b=!0,f=g,l=_;break}B=B.sibling}if(!b){for(B=_.child;B;){if(B===l){b=!0,l=_,f=g;break}if(B===f){b=!0,f=_,l=g;break}B=B.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function ds(r){return r=Tl(r),r!==null?oa(r):null}function oa(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=oa(r);if(s!==null)return s;r=r.sibling}return null}var hs=e.unstable_scheduleCallback,aa=e.unstable_cancelCallback,wl=e.unstable_shouldYield,lf=e.unstable_requestPaint,qt=e.unstable_now,cf=e.unstable_getCurrentPriorityLevel,la=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,Ae=null;function Be(r){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ne,r,void 0,(r.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:lt,$e=Math.log,Je=Math.LN2;function lt(r){return r>>>=0,r===0?32:31-($e(r)/Je|0)|0}var ct=64,Ze=4194304;function yt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function kt(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,g=r.suspendedLanes,_=r.pingedLanes,b=l&268435455;if(b!==0){var B=b&~g;B!==0?f=yt(B):(_&=b,_!==0&&(f=yt(_)))}else b=l&~g,b!==0?f=yt(b):_!==0&&(f=yt(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,_=s&-s,g>=_||g===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-we(s),g=1<<l,f|=r[l],s&=~g;return f}function jt(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,g=r.expirationTimes,_=r.pendingLanes;0<_;){var b=31-we(_),B=1<<b,X=g[b];X===-1?((B&l)===0||(B&f)!==0)&&(g[b]=jt(B,s)):X<=s&&(r.expiredLanes|=B),_&=~B}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Oe(){var r=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),r}function Sn(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ht(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-we(s),r[s]=l}function Hn(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var g=31-we(l),_=1<<g;s[g]=0,f[g]=-1,r[g]=-1,l&=~_}}function Gn(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-we(l),g=1<<f;g&s|r[f]&s&&(r[f]|=s),l&=~g}}var pt=0;function rr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Rt,Vt,_i,Lt,yi,Bi=!1,ps=[],Rr=null,Pr=null,Dr=null,ca=new Map,ua=new Map,Lr=[],MM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(r,s){switch(r){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ca.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(s.pointerId)}}function fa(r,s,l,f,g,_){return r===null||r.nativeEvent!==_?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[g]},s!==null&&(s=wa(s),s!==null&&Vt(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),r)}function TM(r,s,l,f,g){switch(s){case"focusin":return Rr=fa(Rr,r,s,l,f,g),!0;case"dragenter":return Pr=fa(Pr,r,s,l,f,g),!0;case"mouseover":return Dr=fa(Dr,r,s,l,f,g),!0;case"pointerover":var _=g.pointerId;return ca.set(_,fa(ca.get(_)||null,r,s,l,f,g)),!0;case"gotpointercapture":return _=g.pointerId,ua.set(_,fa(ua.get(_)||null,r,s,l,f,g)),!0}return!1}function dg(r){var s=ms(r.target);if(s!==null){var l=In(s);if(l!==null){if(s=l.tag,s===13){if(s=Qs(l),s!==null){r.blockedOn=s,yi(r.priority,function(){_i(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Al(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=ff(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);Ce=f,l.target.dispatchEvent(f),Ce=null}else return s=wa(l),s!==null&&Vt(s),r.blockedOn=l,!1;s.shift()}return!0}function hg(r,s,l){Al(r)&&l.delete(s)}function wM(){Bi=!1,Rr!==null&&Al(Rr)&&(Rr=null),Pr!==null&&Al(Pr)&&(Pr=null),Dr!==null&&Al(Dr)&&(Dr=null),ca.forEach(hg),ua.forEach(hg)}function da(r,s){r.blockedOn===s&&(r.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wM)))}function ha(r){function s(g){return da(g,r)}if(0<ps.length){da(ps[0],r);for(var l=1;l<ps.length;l++){var f=ps[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Rr!==null&&da(Rr,r),Pr!==null&&da(Pr,r),Dr!==null&&da(Dr,r),ca.forEach(s),ua.forEach(s),l=0;l<Lr.length;l++)f=Lr[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Lr.length&&(l=Lr[0],l.blockedOn===null);)dg(l),l.blockedOn===null&&Lr.shift()}var Js=A.ReactCurrentBatchConfig,bl=!0;function AM(r,s,l,f){var g=pt,_=Js.transition;Js.transition=null;try{pt=1,uf(r,s,l,f)}finally{pt=g,Js.transition=_}}function bM(r,s,l,f){var g=pt,_=Js.transition;Js.transition=null;try{pt=4,uf(r,s,l,f)}finally{pt=g,Js.transition=_}}function uf(r,s,l,f){if(bl){var g=ff(r,s,l,f);if(g===null)Cf(r,s,f,Cl,l),fg(r,f);else if(TM(g,r,s,l,f))f.stopPropagation();else if(fg(r,f),s&4&&-1<MM.indexOf(r)){for(;g!==null;){var _=wa(g);if(_!==null&&Rt(_),_=ff(r,s,l,f),_===null&&Cf(r,s,f,Cl,l),_===g)break;g=_}g!==null&&f.stopPropagation()}else Cf(r,s,f,null,l)}}var Cl=null;function ff(r,s,l,f){if(Cl=null,r=et(f),r=ms(r),r!==null)if(s=In(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Qs(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Cl=r,null}function pg(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cf()){case la:return 1;case C:return 4;case K:case ue:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Nr=null,df=null,Rl=null;function mg(){if(Rl)return Rl;var r,s=df,l=s.length,f,g="value"in Nr?Nr.value:Nr.textContent,_=g.length;for(r=0;r<l&&s[r]===g[r];r++);var b=l-r;for(f=1;f<=b&&s[l-f]===g[_-f];f++);return Rl=g.slice(r,1<f?1-f:void 0)}function Pl(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Dl(){return!0}function gg(){return!1}function ei(r){function s(l,f,g,_,b){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var B in r)r.hasOwnProperty(B)&&(l=r[B],this[B]=l?l(_):_[B]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Dl:gg,this.isPropagationStopped=gg,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),s}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=ei(eo),pa=se({},eo,{view:0,detail:0}),CM=ei(pa),pf,mf,ma,Ll=se({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ma&&(ma&&r.type==="mousemove"?(pf=r.screenX-ma.screenX,mf=r.screenY-ma.screenY):mf=pf=0,ma=r),pf)},movementY:function(r){return"movementY"in r?r.movementY:mf}}),vg=ei(Ll),RM=se({},Ll,{dataTransfer:0}),PM=ei(RM),DM=se({},pa,{relatedTarget:0}),gf=ei(DM),LM=se({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),NM=ei(LM),IM=se({},eo,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),FM=ei(IM),UM=se({},eo,{data:0}),xg=ei(UM),OM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=BM[r])?!!s[r]:!1}function vf(){return VM}var zM=se({},pa,{key:function(r){if(r.key){var s=OM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Pl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?kM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(r){return r.type==="keypress"?Pl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Pl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),HM=ei(zM),GM=se({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_g=ei(GM),WM=se({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),XM=ei(WM),jM=se({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),YM=ei(jM),$M=se({},Ll,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),qM=ei($M),KM=[9,13,27,32],xf=u&&"CompositionEvent"in window,ga=null;u&&"documentMode"in document&&(ga=document.documentMode);var ZM=u&&"TextEvent"in window&&!ga,yg=u&&(!xf||ga&&8<ga&&11>=ga),Sg=" ",Eg=!1;function Mg(r,s){switch(r){case"keyup":return KM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var to=!1;function QM(r,s){switch(r){case"compositionend":return Tg(s);case"keypress":return s.which!==32?null:(Eg=!0,Sg);case"textInput":return r=s.data,r===Sg&&Eg?null:r;default:return null}}function JM(r,s){if(to)return r==="compositionend"||!xf&&Mg(r,s)?(r=mg(),Rl=df=Nr=null,to=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return yg&&s.locale!=="ko"?null:s.data;default:return null}}var eT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!eT[r.type]:s==="textarea"}function Ag(r,s,l,f){ge(f),s=Ol(s,"onChange"),0<s.length&&(l=new hf("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var va=null,xa=null;function tT(r){Wg(r,0)}function Nl(r){var s=oo(r);if(Ot(s))return r}function nT(r,s){if(r==="change")return s}var bg=!1;if(u){var _f;if(u){var yf="oninput"in document;if(!yf){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),yf=typeof Cg.oninput=="function"}_f=yf}else _f=!1;bg=_f&&(!document.documentMode||9<document.documentMode)}function Rg(){va&&(va.detachEvent("onpropertychange",Pg),xa=va=null)}function Pg(r){if(r.propertyName==="value"&&Nl(xa)){var s=[];Ag(s,xa,r,et(r)),He(tT,s)}}function iT(r,s,l){r==="focusin"?(Rg(),va=s,xa=l,va.attachEvent("onpropertychange",Pg)):r==="focusout"&&Rg()}function rT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Nl(xa)}function sT(r,s){if(r==="click")return Nl(s)}function oT(r,s){if(r==="input"||r==="change")return Nl(s)}function aT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Si=typeof Object.is=="function"?Object.is:aT;function _a(r,s){if(Si(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!h.call(s,g)||!Si(r[g],s[g]))return!1}return!0}function Dg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Lg(r,s){var l=Dg(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Dg(l)}}function Ng(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Ng(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Ig(){for(var r=window,s=ft();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ft(r.document)}return s}function Sf(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function lT(r){var s=Ig(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Ng(l.ownerDocument.documentElement,l)){if(f!==null&&Sf(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var g=l.textContent.length,_=Math.min(f.start,g);f=f.end===void 0?_:Math.min(f.end,g),!r.extend&&_>f&&(g=f,f=_,_=g),g=Lg(l,_);var b=Lg(l,f);g&&b&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==b.node||r.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),r.removeAllRanges(),_>f?(r.addRange(s),r.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var cT=u&&"documentMode"in document&&11>=document.documentMode,no=null,Ef=null,ya=null,Mf=!1;function Fg(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Mf||no==null||no!==ft(f)||(f=no,"selectionStart"in f&&Sf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ya&&_a(ya,f)||(ya=f,f=Ol(Ef,"onSelect"),0<f.length&&(s=new hf("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=no)))}function Il(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var io={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},Tf={},Ug={};u&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Fl(r){if(Tf[r])return Tf[r];if(!io[r])return r;var s=io[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Ug)return Tf[r]=s[l];return r}var Og=Fl("animationend"),kg=Fl("animationiteration"),Bg=Fl("animationstart"),Vg=Fl("transitionend"),zg=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(r,s){zg.set(r,s),a(s,[r])}for(var wf=0;wf<Hg.length;wf++){var Af=Hg[wf],uT=Af.toLowerCase(),fT=Af[0].toUpperCase()+Af.slice(1);Ir(uT,"on"+fT)}Ir(Og,"onAnimationEnd"),Ir(kg,"onAnimationIteration"),Ir(Bg,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Vg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Gg(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,Ml(f,s,void 0,r),r.currentTarget=null}function Wg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],g=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var b=f.length-1;0<=b;b--){var B=f[b],X=B.instance,fe=B.currentTarget;if(B=B.listener,X!==_&&g.isPropagationStopped())break e;Gg(g,B,fe),_=X}else for(b=0;b<f.length;b++){if(B=f[b],X=B.instance,fe=B.currentTarget,B=B.listener,X!==_&&g.isPropagationStopped())break e;Gg(g,B,fe),_=X}}}if(us)throw r=fs,us=!1,fs=null,r}function zt(r,s){var l=s[If];l===void 0&&(l=s[If]=new Set);var f=r+"__bubble";l.has(f)||(Xg(s,r,2,!1),l.add(f))}function bf(r,s,l){var f=0;s&&(f|=4),Xg(l,r,f,s)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Ea(r){if(!r[Ul]){r[Ul]=!0,i.forEach(function(l){l!=="selectionchange"&&(dT.has(l)||bf(l,!1,r),bf(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ul]||(s[Ul]=!0,bf("selectionchange",!1,s))}}function Xg(r,s,l,f){switch(pg(s)){case 1:var g=AM;break;case 4:g=bM;break;default:g=uf}l=g.bind(null,s,l,r),g=void 0,!Ct||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?r.addEventListener(s,l,{capture:!0,passive:g}):r.addEventListener(s,l,!0):g!==void 0?r.addEventListener(s,l,{passive:g}):r.addEventListener(s,l,!1)}function Cf(r,s,l,f,g){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var b=f.tag;if(b===3||b===4){var B=f.stateNode.containerInfo;if(B===g||B.nodeType===8&&B.parentNode===g)break;if(b===4)for(b=f.return;b!==null;){var X=b.tag;if((X===3||X===4)&&(X=b.stateNode.containerInfo,X===g||X.nodeType===8&&X.parentNode===g))return;b=b.return}for(;B!==null;){if(b=ms(B),b===null)return;if(X=b.tag,X===5||X===6){f=_=b;continue e}B=B.parentNode}}f=f.return}He(function(){var fe=_,Se=et(l),Ee=[];e:{var ye=zg.get(r);if(ye!==void 0){var ke=hf,Ge=r;switch(r){case"keypress":if(Pl(l)===0)break e;case"keydown":case"keyup":ke=HM;break;case"focusin":Ge="focus",ke=gf;break;case"focusout":Ge="blur",ke=gf;break;case"beforeblur":case"afterblur":ke=gf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=PM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=XM;break;case Og:case kg:case Bg:ke=NM;break;case Vg:ke=YM;break;case"scroll":ke=CM;break;case"wheel":ke=qM;break;case"copy":case"cut":case"paste":ke=FM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=_g}var qe=(s&4)!==0,rn=!qe&&r==="scroll",te=qe?ye!==null?ye+"Capture":null:ye;qe=[];for(var $=fe,oe;$!==null;){oe=$;var Te=oe.stateNode;if(oe.tag===5&&Te!==null&&(oe=Te,te!==null&&(Te=Ft($,te),Te!=null&&qe.push(Ma($,Te,oe)))),rn)break;$=$.return}0<qe.length&&(ye=new ke(ye,Ge,null,l,Se),Ee.push({event:ye,listeners:qe}))}}if((s&7)===0){e:{if(ye=r==="mouseover"||r==="pointerover",ke=r==="mouseout"||r==="pointerout",ye&&l!==Ce&&(Ge=l.relatedTarget||l.fromElement)&&(ms(Ge)||Ge[sr]))break e;if((ke||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,ke?(Ge=l.relatedTarget||l.toElement,ke=fe,Ge=Ge?ms(Ge):null,Ge!==null&&(rn=In(Ge),Ge!==rn||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ke=null,Ge=fe),ke!==Ge)){if(qe=vg,Te="onMouseLeave",te="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(qe=_g,Te="onPointerLeave",te="onPointerEnter",$="pointer"),rn=ke==null?ye:oo(ke),oe=Ge==null?ye:oo(Ge),ye=new qe(Te,$+"leave",ke,l,Se),ye.target=rn,ye.relatedTarget=oe,Te=null,ms(Se)===fe&&(qe=new qe(te,$+"enter",Ge,l,Se),qe.target=oe,qe.relatedTarget=rn,Te=qe),rn=Te,ke&&Ge)t:{for(qe=ke,te=Ge,$=0,oe=qe;oe;oe=ro(oe))$++;for(oe=0,Te=te;Te;Te=ro(Te))oe++;for(;0<$-oe;)qe=ro(qe),$--;for(;0<oe-$;)te=ro(te),oe--;for(;$--;){if(qe===te||te!==null&&qe===te.alternate)break t;qe=ro(qe),te=ro(te)}qe=null}else qe=null;ke!==null&&jg(Ee,ye,ke,qe,!1),Ge!==null&&rn!==null&&jg(Ee,rn,Ge,qe,!0)}}e:{if(ye=fe?oo(fe):window,ke=ye.nodeName&&ye.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ye.type==="file")var Qe=nT;else if(wg(ye))if(bg)Qe=oT;else{Qe=rT;var it=iT}else(ke=ye.nodeName)&&ke.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Qe=sT);if(Qe&&(Qe=Qe(r,fe))){Ag(Ee,Qe,l,Se);break e}it&&it(r,ye,fe),r==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&Jt(ye,"number",ye.value)}switch(it=fe?oo(fe):window,r){case"focusin":(wg(it)||it.contentEditable==="true")&&(no=it,Ef=fe,ya=null);break;case"focusout":ya=Ef=no=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,Fg(Ee,l,Se);break;case"selectionchange":if(cT)break;case"keydown":case"keyup":Fg(Ee,l,Se)}var rt;if(xf)e:{switch(r){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else to?Mg(r,l)&&(ot="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(yg&&l.locale!=="ko"&&(to||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&to&&(rt=mg()):(Nr=Se,df="value"in Nr?Nr.value:Nr.textContent,to=!0)),it=Ol(fe,ot),0<it.length&&(ot=new xg(ot,r,null,l,Se),Ee.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=Tg(l),rt!==null&&(ot.data=rt)))),(rt=ZM?QM(r,l):JM(r,l))&&(fe=Ol(fe,"onBeforeInput"),0<fe.length&&(Se=new xg("onBeforeInput","beforeinput",null,l,Se),Ee.push({event:Se,listeners:fe}),Se.data=rt))}Wg(Ee,s)})}function Ma(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Ol(r,s){for(var l=s+"Capture",f=[];r!==null;){var g=r,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=Ft(r,l),_!=null&&f.unshift(Ma(r,_,g)),_=Ft(r,s),_!=null&&f.push(Ma(r,_,g))),r=r.return}return f}function ro(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function jg(r,s,l,f,g){for(var _=s._reactName,b=[];l!==null&&l!==f;){var B=l,X=B.alternate,fe=B.stateNode;if(X!==null&&X===f)break;B.tag===5&&fe!==null&&(B=fe,g?(X=Ft(l,_),X!=null&&b.unshift(Ma(l,X,B))):g||(X=Ft(l,_),X!=null&&b.push(Ma(l,X,B)))),l=l.return}b.length!==0&&r.push({event:s,listeners:b})}var hT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function Yg(r){return(typeof r=="string"?r:""+r).replace(hT,`
`).replace(pT,"")}function kl(r,s,l){if(s=Yg(s),Yg(r)!==s&&l)throw Error(t(425))}function Bl(){}var Rf=null,Pf=null;function Df(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,mT=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,gT=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(r){return $g.resolve(null).then(r).catch(vT)}:Lf;function vT(r){setTimeout(function(){throw r})}function Nf(r,s){var l=s,f=0;do{var g=l.nextSibling;if(r.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){r.removeChild(g),ha(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);ha(s)}function Fr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function qg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var so=Math.random().toString(36).slice(2),Vi="__reactFiber$"+so,Ta="__reactProps$"+so,sr="__reactContainer$"+so,If="__reactEvents$"+so,xT="__reactListeners$"+so,_T="__reactHandles$"+so;function ms(r){var s=r[Vi];if(s)return s;for(var l=r.parentNode;l;){if(s=l[sr]||l[Vi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=qg(r);r!==null;){if(l=r[Vi])return l;r=qg(r)}return s}r=l,l=r.parentNode}return null}function wa(r){return r=r[Vi]||r[sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function oo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Vl(r){return r[Ta]||null}var Ff=[],ao=-1;function Ur(r){return{current:r}}function Ht(r){0>ao||(r.current=Ff[ao],Ff[ao]=null,ao--)}function Bt(r,s){ao++,Ff[ao]=r.current,r.current=s}var Or={},bn=Ur(Or),Wn=Ur(!1),gs=Or;function lo(r,s){var l=r.type.contextTypes;if(!l)return Or;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in l)g[_]=s[_];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=g),g}function Xn(r){return r=r.childContextTypes,r!=null}function zl(){Ht(Wn),Ht(bn)}function Kg(r,s,l){if(bn.current!==Or)throw Error(t(168));Bt(bn,s),Bt(Wn,l)}function Zg(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,_e(r)||"Unknown",g));return se({},l,f)}function Hl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Or,gs=bn.current,Bt(bn,r),Bt(Wn,Wn.current),!0}function Qg(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=Zg(r,s,gs),f.__reactInternalMemoizedMergedChildContext=r,Ht(Wn),Ht(bn),Bt(bn,r)):Ht(Wn),Bt(Wn,l)}var or=null,Gl=!1,Uf=!1;function Jg(r){or===null?or=[r]:or.push(r)}function yT(r){Gl=!0,Jg(r)}function kr(){if(!Uf&&or!==null){Uf=!0;var r=0,s=pt;try{var l=or;for(pt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}or=null,Gl=!1}catch(g){throw or!==null&&(or=or.slice(r+1)),hs(la,kr),g}finally{pt=s,Uf=!1}}return null}var co=[],uo=0,Wl=null,Xl=0,li=[],ci=0,vs=null,ar=1,lr="";function xs(r,s){co[uo++]=Xl,co[uo++]=Wl,Wl=r,Xl=s}function e0(r,s,l){li[ci++]=ar,li[ci++]=lr,li[ci++]=vs,vs=r;var f=ar;r=lr;var g=32-we(f)-1;f&=~(1<<g),l+=1;var _=32-we(s)+g;if(30<_){var b=g-g%5;_=(f&(1<<b)-1).toString(32),f>>=b,g-=b,ar=1<<32-we(s)+g|l<<g|f,lr=_+r}else ar=1<<_|l<<g|f,lr=r}function Of(r){r.return!==null&&(xs(r,1),e0(r,1,0))}function kf(r){for(;r===Wl;)Wl=co[--uo],co[uo]=null,Xl=co[--uo],co[uo]=null;for(;r===vs;)vs=li[--ci],li[ci]=null,lr=li[--ci],li[ci]=null,ar=li[--ci],li[ci]=null}var ti=null,ni=null,Yt=!1,Ei=null;function t0(r,s){var l=hi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function n0(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ti=r,ni=Fr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ti=r,ni=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=vs!==null?{id:ar,overflow:lr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=hi(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,ti=r,ni=null,!0):!1;default:return!1}}function Bf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Vf(r){if(Yt){var s=ni;if(s){var l=s;if(!n0(r,s)){if(Bf(r))throw Error(t(418));s=Fr(l.nextSibling);var f=ti;s&&n0(r,s)?t0(f,l):(r.flags=r.flags&-4097|2,Yt=!1,ti=r)}}else{if(Bf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Yt=!1,ti=r}}}function i0(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ti=r}function jl(r){if(r!==ti)return!1;if(!Yt)return i0(r),Yt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Df(r.type,r.memoizedProps)),s&&(s=ni)){if(Bf(r))throw r0(),Error(t(418));for(;s;)t0(r,s),s=Fr(s.nextSibling)}if(i0(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){ni=Fr(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}ni=null}}else ni=ti?Fr(r.stateNode.nextSibling):null;return!0}function r0(){for(var r=ni;r;)r=Fr(r.nextSibling)}function fo(){ni=ti=null,Yt=!1}function zf(r){Ei===null?Ei=[r]:Ei.push(r)}var ST=A.ReactCurrentBatchConfig;function Aa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var g=f,_=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(b){var B=g.refs;b===null?delete B[_]:B[_]=b},s._stringRef=_,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Yl(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function s0(r){var s=r._init;return s(r._payload)}function o0(r){function s(te,$){if(r){var oe=te.deletions;oe===null?(te.deletions=[$],te.flags|=16):oe.push($)}}function l(te,$){if(!r)return null;for(;$!==null;)s(te,$),$=$.sibling;return null}function f(te,$){for(te=new Map;$!==null;)$.key!==null?te.set($.key,$):te.set($.index,$),$=$.sibling;return te}function g(te,$){return te=jr(te,$),te.index=0,te.sibling=null,te}function _(te,$,oe){return te.index=oe,r?(oe=te.alternate,oe!==null?(oe=oe.index,oe<$?(te.flags|=2,$):oe):(te.flags|=2,$)):(te.flags|=1048576,$)}function b(te){return r&&te.alternate===null&&(te.flags|=2),te}function B(te,$,oe,Te){return $===null||$.tag!==6?($=Ld(oe,te.mode,Te),$.return=te,$):($=g($,oe),$.return=te,$)}function X(te,$,oe,Te){var Qe=oe.type;return Qe===L?Se(te,$,oe.props.children,Te,oe.key):$!==null&&($.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===H&&s0(Qe)===$.type)?(Te=g($,oe.props),Te.ref=Aa(te,$,oe),Te.return=te,Te):(Te=vc(oe.type,oe.key,oe.props,null,te.mode,Te),Te.ref=Aa(te,$,oe),Te.return=te,Te)}function fe(te,$,oe,Te){return $===null||$.tag!==4||$.stateNode.containerInfo!==oe.containerInfo||$.stateNode.implementation!==oe.implementation?($=Nd(oe,te.mode,Te),$.return=te,$):($=g($,oe.children||[]),$.return=te,$)}function Se(te,$,oe,Te,Qe){return $===null||$.tag!==7?($=As(oe,te.mode,Te,Qe),$.return=te,$):($=g($,oe),$.return=te,$)}function Ee(te,$,oe){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Ld(""+$,te.mode,oe),$.return=te,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return oe=vc($.type,$.key,$.props,null,te.mode,oe),oe.ref=Aa(te,null,$),oe.return=te,oe;case F:return $=Nd($,te.mode,oe),$.return=te,$;case H:var Te=$._init;return Ee(te,Te($._payload),oe)}if($t($)||ee($))return $=As($,te.mode,oe,null),$.return=te,$;Yl(te,$)}return null}function ye(te,$,oe,Te){var Qe=$!==null?$.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return Qe!==null?null:B(te,$,""+oe,Te);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case N:return oe.key===Qe?X(te,$,oe,Te):null;case F:return oe.key===Qe?fe(te,$,oe,Te):null;case H:return Qe=oe._init,ye(te,$,Qe(oe._payload),Te)}if($t(oe)||ee(oe))return Qe!==null?null:Se(te,$,oe,Te,null);Yl(te,oe)}return null}function ke(te,$,oe,Te,Qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return te=te.get(oe)||null,B($,te,""+Te,Qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case N:return te=te.get(Te.key===null?oe:Te.key)||null,X($,te,Te,Qe);case F:return te=te.get(Te.key===null?oe:Te.key)||null,fe($,te,Te,Qe);case H:var it=Te._init;return ke(te,$,oe,it(Te._payload),Qe)}if($t(Te)||ee(Te))return te=te.get(oe)||null,Se($,te,Te,Qe,null);Yl($,Te)}return null}function Ge(te,$,oe,Te){for(var Qe=null,it=null,rt=$,ot=$=0,xn=null;rt!==null&&ot<oe.length;ot++){rt.index>ot?(xn=rt,rt=null):xn=rt.sibling;var Tt=ye(te,rt,oe[ot],Te);if(Tt===null){rt===null&&(rt=xn);break}r&&rt&&Tt.alternate===null&&s(te,rt),$=_(Tt,$,ot),it===null?Qe=Tt:it.sibling=Tt,it=Tt,rt=xn}if(ot===oe.length)return l(te,rt),Yt&&xs(te,ot),Qe;if(rt===null){for(;ot<oe.length;ot++)rt=Ee(te,oe[ot],Te),rt!==null&&($=_(rt,$,ot),it===null?Qe=rt:it.sibling=rt,it=rt);return Yt&&xs(te,ot),Qe}for(rt=f(te,rt);ot<oe.length;ot++)xn=ke(rt,te,ot,oe[ot],Te),xn!==null&&(r&&xn.alternate!==null&&rt.delete(xn.key===null?ot:xn.key),$=_(xn,$,ot),it===null?Qe=xn:it.sibling=xn,it=xn);return r&&rt.forEach(function(Yr){return s(te,Yr)}),Yt&&xs(te,ot),Qe}function qe(te,$,oe,Te){var Qe=ee(oe);if(typeof Qe!="function")throw Error(t(150));if(oe=Qe.call(oe),oe==null)throw Error(t(151));for(var it=Qe=null,rt=$,ot=$=0,xn=null,Tt=oe.next();rt!==null&&!Tt.done;ot++,Tt=oe.next()){rt.index>ot?(xn=rt,rt=null):xn=rt.sibling;var Yr=ye(te,rt,Tt.value,Te);if(Yr===null){rt===null&&(rt=xn);break}r&&rt&&Yr.alternate===null&&s(te,rt),$=_(Yr,$,ot),it===null?Qe=Yr:it.sibling=Yr,it=Yr,rt=xn}if(Tt.done)return l(te,rt),Yt&&xs(te,ot),Qe;if(rt===null){for(;!Tt.done;ot++,Tt=oe.next())Tt=Ee(te,Tt.value,Te),Tt!==null&&($=_(Tt,$,ot),it===null?Qe=Tt:it.sibling=Tt,it=Tt);return Yt&&xs(te,ot),Qe}for(rt=f(te,rt);!Tt.done;ot++,Tt=oe.next())Tt=ke(rt,te,ot,Tt.value,Te),Tt!==null&&(r&&Tt.alternate!==null&&rt.delete(Tt.key===null?ot:Tt.key),$=_(Tt,$,ot),it===null?Qe=Tt:it.sibling=Tt,it=Tt);return r&&rt.forEach(function(ew){return s(te,ew)}),Yt&&xs(te,ot),Qe}function rn(te,$,oe,Te){if(typeof oe=="object"&&oe!==null&&oe.type===L&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case N:e:{for(var Qe=oe.key,it=$;it!==null;){if(it.key===Qe){if(Qe=oe.type,Qe===L){if(it.tag===7){l(te,it.sibling),$=g(it,oe.props.children),$.return=te,te=$;break e}}else if(it.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===H&&s0(Qe)===it.type){l(te,it.sibling),$=g(it,oe.props),$.ref=Aa(te,it,oe),$.return=te,te=$;break e}l(te,it);break}else s(te,it);it=it.sibling}oe.type===L?($=As(oe.props.children,te.mode,Te,oe.key),$.return=te,te=$):(Te=vc(oe.type,oe.key,oe.props,null,te.mode,Te),Te.ref=Aa(te,$,oe),Te.return=te,te=Te)}return b(te);case F:e:{for(it=oe.key;$!==null;){if($.key===it)if($.tag===4&&$.stateNode.containerInfo===oe.containerInfo&&$.stateNode.implementation===oe.implementation){l(te,$.sibling),$=g($,oe.children||[]),$.return=te,te=$;break e}else{l(te,$);break}else s(te,$);$=$.sibling}$=Nd(oe,te.mode,Te),$.return=te,te=$}return b(te);case H:return it=oe._init,rn(te,$,it(oe._payload),Te)}if($t(oe))return Ge(te,$,oe,Te);if(ee(oe))return qe(te,$,oe,Te);Yl(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,$!==null&&$.tag===6?(l(te,$.sibling),$=g($,oe),$.return=te,te=$):(l(te,$),$=Ld(oe,te.mode,Te),$.return=te,te=$),b(te)):l(te,$)}return rn}var ho=o0(!0),a0=o0(!1),$l=Ur(null),ql=null,po=null,Hf=null;function Gf(){Hf=po=ql=null}function Wf(r){var s=$l.current;Ht($l),r._currentValue=s}function Xf(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function mo(r,s){ql=r,Hf=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(jn=!0),r.firstContext=null)}function ui(r){var s=r._currentValue;if(Hf!==r)if(r={context:r,memoizedValue:s,next:null},po===null){if(ql===null)throw Error(t(308));po=r,ql.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return s}var _s=null;function jf(r){_s===null?_s=[r]:_s.push(r)}function l0(r,s,l,f){var g=s.interleaved;return g===null?(l.next=l,jf(s)):(l.next=g.next,g.next=l),s.interleaved=l,cr(r,f)}function cr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Br=!1;function Yf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ur(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Vr(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(St&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,cr(r,l)}return g=f.interleaved,g===null?(s.next=s,jf(f)):(s.next=g.next,g.next=s),f.interleaved=s,cr(r,l)}function Kl(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Gn(r,l)}}function u0(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?g=_=b:_=_.next=b,l=l.next}while(l!==null);_===null?g=_=s:_=_.next=s}else g=_=s;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Zl(r,s,l,f){var g=r.updateQueue;Br=!1;var _=g.firstBaseUpdate,b=g.lastBaseUpdate,B=g.shared.pending;if(B!==null){g.shared.pending=null;var X=B,fe=X.next;X.next=null,b===null?_=fe:b.next=fe,b=X;var Se=r.alternate;Se!==null&&(Se=Se.updateQueue,B=Se.lastBaseUpdate,B!==b&&(B===null?Se.firstBaseUpdate=fe:B.next=fe,Se.lastBaseUpdate=X))}if(_!==null){var Ee=g.baseState;b=0,Se=fe=X=null,B=_;do{var ye=B.lane,ke=B.eventTime;if((f&ye)===ye){Se!==null&&(Se=Se.next={eventTime:ke,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ge=r,qe=B;switch(ye=s,ke=l,qe.tag){case 1:if(Ge=qe.payload,typeof Ge=="function"){Ee=Ge.call(ke,Ee,ye);break e}Ee=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=qe.payload,ye=typeof Ge=="function"?Ge.call(ke,Ee,ye):Ge,ye==null)break e;Ee=se({},Ee,ye);break e;case 2:Br=!0}}B.callback!==null&&B.lane!==0&&(r.flags|=64,ye=g.effects,ye===null?g.effects=[B]:ye.push(B))}else ke={eventTime:ke,lane:ye,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Se===null?(fe=Se=ke,X=Ee):Se=Se.next=ke,b|=ye;if(B=B.next,B===null){if(B=g.shared.pending,B===null)break;ye=B,B=ye.next,ye.next=null,g.lastBaseUpdate=ye,g.shared.pending=null}}while(!0);if(Se===null&&(X=Ee),g.baseState=X,g.firstBaseUpdate=fe,g.lastBaseUpdate=Se,s=g.shared.interleaved,s!==null){g=s;do b|=g.lane,g=g.next;while(g!==s)}else _===null&&(g.shared.lanes=0);Es|=b,r.lanes=b,r.memoizedState=Ee}}function f0(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var ba={},zi=Ur(ba),Ca=Ur(ba),Ra=Ur(ba);function ys(r){if(r===ba)throw Error(t(174));return r}function $f(r,s){switch(Bt(Ra,s),Bt(Ca,r),Bt(zi,ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=w(s,r)}Ht(zi),Bt(zi,s)}function go(){Ht(zi),Ht(Ca),Ht(Ra)}function d0(r){ys(Ra.current);var s=ys(zi.current),l=w(s,r.type);s!==l&&(Bt(Ca,r),Bt(zi,l))}function qf(r){Ca.current===r&&(Ht(zi),Ht(Ca))}var Kt=Ur(0);function Ql(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Kf=[];function Zf(){for(var r=0;r<Kf.length;r++)Kf[r]._workInProgressVersionPrimary=null;Kf.length=0}var Jl=A.ReactCurrentDispatcher,Qf=A.ReactCurrentBatchConfig,Ss=0,Zt=null,un=null,gn=null,ec=!1,Pa=!1,Da=0,ET=0;function Cn(){throw Error(t(321))}function Jf(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Si(r[l],s[l]))return!1;return!0}function ed(r,s,l,f,g,_){if(Ss=_,Zt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Jl.current=r===null||r.memoizedState===null?AT:bT,r=l(f,g),Pa){_=0;do{if(Pa=!1,Da=0,25<=_)throw Error(t(301));_+=1,gn=un=null,s.updateQueue=null,Jl.current=CT,r=l(f,g)}while(Pa)}if(Jl.current=ic,s=un!==null&&un.next!==null,Ss=0,gn=un=Zt=null,ec=!1,s)throw Error(t(300));return r}function td(){var r=Da!==0;return Da=0,r}function Hi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Zt.memoizedState=gn=r:gn=gn.next=r,gn}function fi(){if(un===null){var r=Zt.alternate;r=r!==null?r.memoizedState:null}else r=un.next;var s=gn===null?Zt.memoizedState:gn.next;if(s!==null)gn=s,un=r;else{if(r===null)throw Error(t(310));un=r,r={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},gn===null?Zt.memoizedState=gn=r:gn=gn.next=r}return gn}function La(r,s){return typeof s=="function"?s(r):s}function nd(r){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=un,g=f.baseQueue,_=l.pending;if(_!==null){if(g!==null){var b=g.next;g.next=_.next,_.next=b}f.baseQueue=g=_,l.pending=null}if(g!==null){_=g.next,f=f.baseState;var B=b=null,X=null,fe=_;do{var Se=fe.lane;if((Ss&Se)===Se)X!==null&&(X=X.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),f=fe.hasEagerState?fe.eagerState:r(f,fe.action);else{var Ee={lane:Se,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};X===null?(B=X=Ee,b=f):X=X.next=Ee,Zt.lanes|=Se,Es|=Se}fe=fe.next}while(fe!==null&&fe!==_);X===null?b=f:X.next=B,Si(f,s.memoizedState)||(jn=!0),s.memoizedState=f,s.baseState=b,s.baseQueue=X,l.lastRenderedState=f}if(r=l.interleaved,r!==null){g=r;do _=g.lane,Zt.lanes|=_,Es|=_,g=g.next;while(g!==r)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function id(r){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,g=l.pending,_=s.memoizedState;if(g!==null){l.pending=null;var b=g=g.next;do _=r(_,b.action),b=b.next;while(b!==g);Si(_,s.memoizedState)||(jn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function h0(){}function p0(r,s){var l=Zt,f=fi(),g=s(),_=!Si(f.memoizedState,g);if(_&&(f.memoizedState=g,jn=!0),f=f.queue,rd(v0.bind(null,l,f,r),[r]),f.getSnapshot!==s||_||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Na(9,g0.bind(null,l,f,g,s),void 0,null),vn===null)throw Error(t(349));(Ss&30)!==0||m0(l,s,g)}return g}function m0(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function g0(r,s,l,f){s.value=l,s.getSnapshot=f,x0(s)&&_0(r)}function v0(r,s,l){return l(function(){x0(s)&&_0(r)})}function x0(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Si(r,l)}catch{return!0}}function _0(r){var s=cr(r,1);s!==null&&Ai(s,r,1,-1)}function y0(r){var s=Hi();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:r},s.queue=r,r=r.dispatch=wT.bind(null,Zt,r),[s.memoizedState,r]}function Na(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function S0(){return fi().memoizedState}function tc(r,s,l,f){var g=Hi();Zt.flags|=r,g.memoizedState=Na(1|s,l,void 0,f===void 0?null:f)}function nc(r,s,l,f){var g=fi();f=f===void 0?null:f;var _=void 0;if(un!==null){var b=un.memoizedState;if(_=b.destroy,f!==null&&Jf(f,b.deps)){g.memoizedState=Na(s,l,_,f);return}}Zt.flags|=r,g.memoizedState=Na(1|s,l,_,f)}function E0(r,s){return tc(8390656,8,r,s)}function rd(r,s){return nc(2048,8,r,s)}function M0(r,s){return nc(4,2,r,s)}function T0(r,s){return nc(4,4,r,s)}function w0(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function A0(r,s,l){return l=l!=null?l.concat([r]):null,nc(4,4,w0.bind(null,s,r),l)}function sd(){}function b0(r,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Jf(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function C0(r,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Jf(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function R0(r,s,l){return(Ss&21)===0?(r.baseState&&(r.baseState=!1,jn=!0),r.memoizedState=l):(Si(l,s)||(l=Oe(),Zt.lanes|=l,Es|=l,r.baseState=!0),s)}function MT(r,s){var l=pt;pt=l!==0&&4>l?l:4,r(!0);var f=Qf.transition;Qf.transition={};try{r(!1),s()}finally{pt=l,Qf.transition=f}}function P0(){return fi().memoizedState}function TT(r,s,l){var f=Wr(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},D0(r))L0(s,l);else if(l=l0(r,s,l,f),l!==null){var g=Un();Ai(l,r,f,g),N0(l,s,f)}}function wT(r,s,l){var f=Wr(r),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(D0(r))L0(s,g);else{var _=r.alternate;if(r.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var b=s.lastRenderedState,B=_(b,l);if(g.hasEagerState=!0,g.eagerState=B,Si(B,b)){var X=s.interleaved;X===null?(g.next=g,jf(s)):(g.next=X.next,X.next=g),s.interleaved=g;return}}catch{}finally{}l=l0(r,s,g,f),l!==null&&(g=Un(),Ai(l,r,f,g),N0(l,s,f))}}function D0(r){var s=r.alternate;return r===Zt||s!==null&&s===Zt}function L0(r,s){Pa=ec=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function N0(r,s,l){if((l&4194240)!==0){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Gn(r,l)}}var ic={readContext:ui,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},AT={readContext:ui,useCallback:function(r,s){return Hi().memoizedState=[r,s===void 0?null:s],r},useContext:ui,useEffect:E0,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,tc(4194308,4,w0.bind(null,s,r),l)},useLayoutEffect:function(r,s){return tc(4194308,4,r,s)},useInsertionEffect:function(r,s){return tc(4,2,r,s)},useMemo:function(r,s){var l=Hi();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=Hi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=TT.bind(null,Zt,r),[f.memoizedState,r]},useRef:function(r){var s=Hi();return r={current:r},s.memoizedState=r},useState:y0,useDebugValue:sd,useDeferredValue:function(r){return Hi().memoizedState=r},useTransition:function(){var r=y0(!1),s=r[0];return r=MT.bind(null,r[1]),Hi().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=Zt,g=Hi();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),vn===null)throw Error(t(349));(Ss&30)!==0||m0(f,s,l)}g.memoizedState=l;var _={value:l,getSnapshot:s};return g.queue=_,E0(v0.bind(null,f,_,r),[r]),f.flags|=2048,Na(9,g0.bind(null,f,_,l,s),void 0,null),l},useId:function(){var r=Hi(),s=vn.identifierPrefix;if(Yt){var l=lr,f=ar;l=(f&~(1<<32-we(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Da++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=ET++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},bT={readContext:ui,useCallback:b0,useContext:ui,useEffect:rd,useImperativeHandle:A0,useInsertionEffect:M0,useLayoutEffect:T0,useMemo:C0,useReducer:nd,useRef:S0,useState:function(){return nd(La)},useDebugValue:sd,useDeferredValue:function(r){var s=fi();return R0(s,un.memoizedState,r)},useTransition:function(){var r=nd(La)[0],s=fi().memoizedState;return[r,s]},useMutableSource:h0,useSyncExternalStore:p0,useId:P0,unstable_isNewReconciler:!1},CT={readContext:ui,useCallback:b0,useContext:ui,useEffect:rd,useImperativeHandle:A0,useInsertionEffect:M0,useLayoutEffect:T0,useMemo:C0,useReducer:id,useRef:S0,useState:function(){return id(La)},useDebugValue:sd,useDeferredValue:function(r){var s=fi();return un===null?s.memoizedState=r:R0(s,un.memoizedState,r)},useTransition:function(){var r=id(La)[0],s=fi().memoizedState;return[r,s]},useMutableSource:h0,useSyncExternalStore:p0,useId:P0,unstable_isNewReconciler:!1};function Mi(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function od(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:se({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var rc={isMounted:function(r){return(r=r._reactInternals)?In(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=Un(),g=Wr(r),_=ur(f,g);_.payload=s,l!=null&&(_.callback=l),s=Vr(r,_,g),s!==null&&(Ai(s,r,g,f),Kl(s,r,g))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=Un(),g=Wr(r),_=ur(f,g);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Vr(r,_,g),s!==null&&(Ai(s,r,g,f),Kl(s,r,g))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Un(),f=Wr(r),g=ur(l,f);g.tag=2,s!=null&&(g.callback=s),s=Vr(r,g,f),s!==null&&(Ai(s,r,f,l),Kl(s,r,f))}};function I0(r,s,l,f,g,_,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,_,b):s.prototype&&s.prototype.isPureReactComponent?!_a(l,f)||!_a(g,_):!0}function F0(r,s,l){var f=!1,g=Or,_=s.contextType;return typeof _=="object"&&_!==null?_=ui(_):(g=Xn(s)?gs:bn.current,f=s.contextTypes,_=(f=f!=null)?lo(r,g):Or),s=new s(l,_),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=rc,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=_),s}function U0(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&rc.enqueueReplaceState(s,s.state,null)}function ad(r,s,l,f){var g=r.stateNode;g.props=l,g.state=r.memoizedState,g.refs={},Yf(r);var _=s.contextType;typeof _=="object"&&_!==null?g.context=ui(_):(_=Xn(s)?gs:bn.current,g.context=lo(r,_)),g.state=r.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(od(r,s,_,l),g.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&rc.enqueueReplaceState(g,g.state,null),Zl(r,l,g,f),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function vo(r,s){try{var l="",f=s;do l+=Ve(f),f=f.return;while(f);var g=l}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:r,source:s,stack:g,digest:null}}function ld(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function cd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var RT=typeof WeakMap=="function"?WeakMap:Map;function O0(r,s,l){l=ur(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){fc||(fc=!0,Td=f),cd(r,s)},l}function k0(r,s,l){l=ur(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;l.payload=function(){return f(g)},l.callback=function(){cd(r,s)}}var _=r.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){cd(r,s),typeof f!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function B0(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new RT;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(l)||(g.add(l),r=GT.bind(null,r,s,l),s.then(r,r))}function V0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function z0(r,s,l,f,g){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ur(-1,1),s.tag=2,Vr(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var PT=A.ReactCurrentOwner,jn=!1;function Fn(r,s,l,f){s.child=r===null?a0(s,null,l,f):ho(s,r.child,l,f)}function H0(r,s,l,f,g){l=l.render;var _=s.ref;return mo(s,g),f=ed(r,s,l,f,_,g),l=td(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,fr(r,s,g)):(Yt&&l&&Of(s),s.flags|=1,Fn(r,s,f,g),s.child)}function G0(r,s,l,f,g){if(r===null){var _=l.type;return typeof _=="function"&&!Dd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,W0(r,s,_,f,g)):(r=vc(l.type,null,f,s,s.mode,g),r.ref=s.ref,r.return=s,s.child=r)}if(_=r.child,(r.lanes&g)===0){var b=_.memoizedProps;if(l=l.compare,l=l!==null?l:_a,l(b,f)&&r.ref===s.ref)return fr(r,s,g)}return s.flags|=1,r=jr(_,f),r.ref=s.ref,r.return=s,s.child=r}function W0(r,s,l,f,g){if(r!==null){var _=r.memoizedProps;if(_a(_,f)&&r.ref===s.ref)if(jn=!1,s.pendingProps=f=_,(r.lanes&g)!==0)(r.flags&131072)!==0&&(jn=!0);else return s.lanes=r.lanes,fr(r,s,g)}return ud(r,s,l,f,g)}function X0(r,s,l){var f=s.pendingProps,g=f.children,_=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(_o,ii),ii|=l;else{if((l&1073741824)===0)return r=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Bt(_o,ii),ii|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Bt(_o,ii),ii|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Bt(_o,ii),ii|=f;return Fn(r,s,g,l),s.child}function j0(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function ud(r,s,l,f,g){var _=Xn(l)?gs:bn.current;return _=lo(s,_),mo(s,g),l=ed(r,s,l,f,_,g),f=td(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,fr(r,s,g)):(Yt&&f&&Of(s),s.flags|=1,Fn(r,s,l,g),s.child)}function Y0(r,s,l,f,g){if(Xn(l)){var _=!0;Hl(s)}else _=!1;if(mo(s,g),s.stateNode===null)oc(r,s),F0(s,l,f),ad(s,l,f,g),f=!0;else if(r===null){var b=s.stateNode,B=s.memoizedProps;b.props=B;var X=b.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=ui(fe):(fe=Xn(l)?gs:bn.current,fe=lo(s,fe));var Se=l.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ee||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==f||X!==fe)&&U0(s,b,f,fe),Br=!1;var ye=s.memoizedState;b.state=ye,Zl(s,f,b,g),X=s.memoizedState,B!==f||ye!==X||Wn.current||Br?(typeof Se=="function"&&(od(s,l,Se,f),X=s.memoizedState),(B=Br||I0(s,l,B,f,ye,X,fe))?(Ee||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=X),b.props=f,b.state=X,b.context=fe,f=B):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{b=s.stateNode,c0(r,s),B=s.memoizedProps,fe=s.type===s.elementType?B:Mi(s.type,B),b.props=fe,Ee=s.pendingProps,ye=b.context,X=l.contextType,typeof X=="object"&&X!==null?X=ui(X):(X=Xn(l)?gs:bn.current,X=lo(s,X));var ke=l.getDerivedStateFromProps;(Se=typeof ke=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==Ee||ye!==X)&&U0(s,b,f,X),Br=!1,ye=s.memoizedState,b.state=ye,Zl(s,f,b,g);var Ge=s.memoizedState;B!==Ee||ye!==Ge||Wn.current||Br?(typeof ke=="function"&&(od(s,l,ke,f),Ge=s.memoizedState),(fe=Br||I0(s,l,fe,f,ye,Ge,X)||!1)?(Se||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(f,Ge,X),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(f,Ge,X)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Ge),b.props=f,b.state=Ge,b.context=X,f=fe):(typeof b.componentDidUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=1024),f=!1)}return fd(r,s,l,f,_,g)}function fd(r,s,l,f,g,_){j0(r,s);var b=(s.flags&128)!==0;if(!f&&!b)return g&&Qg(s,l,!1),fr(r,s,_);f=s.stateNode,PT.current=s;var B=b&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&b?(s.child=ho(s,r.child,null,_),s.child=ho(s,null,B,_)):Fn(r,s,B,_),s.memoizedState=f.state,g&&Qg(s,l,!0),s.child}function $0(r){var s=r.stateNode;s.pendingContext?Kg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Kg(r,s.context,!1),$f(r,s.containerInfo)}function q0(r,s,l,f,g){return fo(),zf(g),s.flags|=256,Fn(r,s,l,f),s.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function hd(r){return{baseLanes:r,cachePool:null,transitions:null}}function K0(r,s,l){var f=s.pendingProps,g=Kt.current,_=!1,b=(s.flags&128)!==0,B;if((B=b)||(B=r!==null&&r.memoizedState===null?!1:(g&2)!==0),B?(_=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),Bt(Kt,g&1),r===null)return Vf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=f.children,r=f.fallback,_?(f=s.mode,_=s.child,b={mode:"hidden",children:b},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=xc(b,f,0,null),r=As(r,f,l,null),_.return=s,r.return=s,_.sibling=r,s.child=_,s.child.memoizedState=hd(l),s.memoizedState=dd,r):pd(s,b));if(g=r.memoizedState,g!==null&&(B=g.dehydrated,B!==null))return DT(r,s,b,f,B,g,l);if(_){_=f.fallback,b=s.mode,g=r.child,B=g.sibling;var X={mode:"hidden",children:f.children};return(b&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=X,s.deletions=null):(f=jr(g,X),f.subtreeFlags=g.subtreeFlags&14680064),B!==null?_=jr(B,_):(_=As(_,b,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,b=r.child.memoizedState,b=b===null?hd(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=r.childLanes&~l,s.memoizedState=dd,f}return _=r.child,r=_.sibling,f=jr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function pd(r,s){return s=xc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function sc(r,s,l,f){return f!==null&&zf(f),ho(s,r.child,null,l),r=pd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function DT(r,s,l,f,g,_,b){if(l)return s.flags&256?(s.flags&=-257,f=ld(Error(t(422))),sc(r,s,b,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(_=f.fallback,g=s.mode,f=xc({mode:"visible",children:f.children},g,0,null),_=As(_,g,b,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&ho(s,r.child,null,b),s.child.memoizedState=hd(b),s.memoizedState=dd,_);if((s.mode&1)===0)return sc(r,s,b,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var B=f.dgst;return f=B,_=Error(t(419)),f=ld(_,f,void 0),sc(r,s,b,f)}if(B=(b&r.childLanes)!==0,jn||B){if(f=vn,f!==null){switch(b&-b){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|b))!==0?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,cr(r,g),Ai(f,r,g,-1))}return Pd(),f=ld(Error(t(421))),sc(r,s,b,f)}return g.data==="$?"?(s.flags|=128,s.child=r.child,s=WT.bind(null,r),g._reactRetry=s,null):(r=_.treeContext,ni=Fr(g.nextSibling),ti=s,Yt=!0,Ei=null,r!==null&&(li[ci++]=ar,li[ci++]=lr,li[ci++]=vs,ar=r.id,lr=r.overflow,vs=s),s=pd(s,f.children),s.flags|=4096,s)}function Z0(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),Xf(r.return,s,l)}function md(r,s,l,f,g){var _=r.memoizedState;_===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=g)}function Q0(r,s,l){var f=s.pendingProps,g=f.revealOrder,_=f.tail;if(Fn(r,s,f.children,l),f=Kt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Z0(r,l,s);else if(r.tag===19)Z0(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(Bt(Kt,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)r=l.alternate,r!==null&&Ql(r)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),md(s,!1,g,l,_);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(r=g.alternate,r!==null&&Ql(r)===null){s.child=g;break}r=g.sibling,g.sibling=l,l=g,g=r}md(s,!0,l,null,_);break;case"together":md(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function oc(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function fr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),Es|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=jr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=jr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function LT(r,s,l){switch(s.tag){case 3:$0(s),fo();break;case 5:d0(s);break;case 1:Xn(s.type)&&Hl(s);break;case 4:$f(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Bt($l,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Bt(Kt,Kt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?K0(r,s,l):(Bt(Kt,Kt.current&1),r=fr(r,s,l),r!==null?r.sibling:null);Bt(Kt,Kt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(r.flags&128)!==0){if(f)return Q0(r,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Bt(Kt,Kt.current),f)break;return null;case 22:case 23:return s.lanes=0,X0(r,s,l)}return fr(r,s,l)}var J0,gd,ev,tv;J0=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},gd=function(){},ev=function(r,s,l,f){var g=r.memoizedProps;if(g!==f){r=s.stateNode,ys(zi.current);var _=null;switch(l){case"input":g=wt(r,g),f=wt(r,f),_=[];break;case"select":g=se({},g,{value:void 0}),f=se({},f,{value:void 0}),_=[];break;case"textarea":g=Xt(r,g),f=Xt(r,f),_=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Bl)}Ke(l,f);var b;l=null;for(fe in g)if(!f.hasOwnProperty(fe)&&g.hasOwnProperty(fe)&&g[fe]!=null)if(fe==="style"){var B=g[fe];for(b in B)B.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?_||(_=[]):(_=_||[]).push(fe,null));for(fe in f){var X=f[fe];if(B=g!=null?g[fe]:void 0,f.hasOwnProperty(fe)&&X!==B&&(X!=null||B!=null))if(fe==="style")if(B){for(b in B)!B.hasOwnProperty(b)||X&&X.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in X)X.hasOwnProperty(b)&&B[b]!==X[b]&&(l||(l={}),l[b]=X[b])}else l||(_||(_=[]),_.push(fe,l)),l=X;else fe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(_=_||[]).push(fe,X)):fe==="children"?typeof X!="string"&&typeof X!="number"||(_=_||[]).push(fe,""+X):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(X!=null&&fe==="onScroll"&&zt("scroll",r),_||B===X||(_=[])):(_=_||[]).push(fe,X))}l&&(_=_||[]).push("style",l);var fe=_;(s.updateQueue=fe)&&(s.flags|=4)}},tv=function(r,s,l,f){l!==f&&(s.flags|=4)};function Ia(r,s){if(!Yt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Rn(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var g=r.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function NT(r,s,l){var f=s.pendingProps;switch(kf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return Xn(s.type)&&zl(),Rn(s),null;case 3:return f=s.stateNode,go(),Ht(Wn),Ht(bn),Zf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(jl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ei!==null&&(bd(Ei),Ei=null))),gd(r,s),Rn(s),null;case 5:qf(s);var g=ys(Ra.current);if(l=s.type,r!==null&&s.stateNode!=null)ev(r,s,l,f,g),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(r=ys(zi.current),jl(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[Vi]=s,f[Ta]=_,r=(s.mode&1)!==0,l){case"dialog":zt("cancel",f),zt("close",f);break;case"iframe":case"object":case"embed":zt("load",f);break;case"video":case"audio":for(g=0;g<Sa.length;g++)zt(Sa[g],f);break;case"source":zt("error",f);break;case"img":case"image":case"link":zt("error",f),zt("load",f);break;case"details":zt("toggle",f);break;case"input":_t(f,_),zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},zt("invalid",f);break;case"textarea":q(f,_),zt("invalid",f)}Ke(l,_),g=null;for(var b in _)if(_.hasOwnProperty(b)){var B=_[b];b==="children"?typeof B=="string"?f.textContent!==B&&(_.suppressHydrationWarning!==!0&&kl(f.textContent,B,r),g=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(_.suppressHydrationWarning!==!0&&kl(f.textContent,B,r),g=["children",""+B]):o.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&zt("scroll",f)}switch(l){case"input":tt(f),Qt(f,_,!0);break;case"textarea":tt(f),Mt(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Bl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{b=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=U(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=b.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=b.createElement(l,{is:f.is}):(r=b.createElement(l),l==="select"&&(b=r,f.multiple?b.multiple=!0:f.size&&(b.size=f.size))):r=b.createElementNS(r,l),r[Vi]=s,r[Ta]=f,J0(r,s,!1,!1),s.stateNode=r;e:{switch(b=Le(l,f),l){case"dialog":zt("cancel",r),zt("close",r),g=f;break;case"iframe":case"object":case"embed":zt("load",r),g=f;break;case"video":case"audio":for(g=0;g<Sa.length;g++)zt(Sa[g],r);g=f;break;case"source":zt("error",r),g=f;break;case"img":case"image":case"link":zt("error",r),zt("load",r),g=f;break;case"details":zt("toggle",r),g=f;break;case"input":_t(r,f),g=wt(r,f),zt("invalid",r);break;case"option":g=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},g=se({},f,{value:void 0}),zt("invalid",r);break;case"textarea":q(r,f),g=Xt(r,f),zt("invalid",r);break;default:g=f}Ke(l,g),B=g;for(_ in B)if(B.hasOwnProperty(_)){var X=B[_];_==="style"?ve(r,X):_==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&ae(r,X)):_==="children"?typeof X=="string"?(l!=="textarea"||X!=="")&&he(r,X):typeof X=="number"&&he(r,""+X):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?X!=null&&_==="onScroll"&&zt("scroll",r):X!=null&&D(r,_,X,b))}switch(l){case"input":tt(r),Qt(r,f,!1);break;case"textarea":tt(r),Mt(r);break;case"option":f.value!=null&&r.setAttribute("value",""+me(f.value));break;case"select":r.multiple=!!f.multiple,_=f.value,_!=null?Pt(r,!!f.multiple,_,!1):f.defaultValue!=null&&Pt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Bl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(r&&s.stateNode!=null)tv(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=ys(Ra.current),ys(zi.current),jl(s)){if(f=s.stateNode,l=s.memoizedProps,f[Vi]=s,(_=f.nodeValue!==l)&&(r=ti,r!==null))switch(r.tag){case 3:kl(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&kl(f.nodeValue,l,(r.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Vi]=s,s.stateNode=f}return Rn(s),null;case 13:if(Ht(Kt),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Yt&&ni!==null&&(s.mode&1)!==0&&(s.flags&128)===0)r0(),fo(),s.flags|=98560,_=!1;else if(_=jl(s),f!==null&&f.dehydrated!==null){if(r===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Vi]=s}else fo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),_=!1}else Ei!==null&&(bd(Ei),Ei=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Kt.current&1)!==0?fn===0&&(fn=3):Pd())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return go(),gd(r,s),r===null&&Ea(s.stateNode.containerInfo),Rn(s),null;case 10:return Wf(s.type._context),Rn(s),null;case 17:return Xn(s.type)&&zl(),Rn(s),null;case 19:if(Ht(Kt),_=s.memoizedState,_===null)return Rn(s),null;if(f=(s.flags&128)!==0,b=_.rendering,b===null)if(f)Ia(_,!1);else{if(fn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(b=Ql(r),b!==null){for(s.flags|=128,Ia(_,!1),f=b.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,r=f,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=r,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,r=b.dependencies,_.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Bt(Kt,Kt.current&1|2),s.child}r=r.sibling}_.tail!==null&&qt()>yo&&(s.flags|=128,f=!0,Ia(_,!1),s.lanes=4194304)}else{if(!f)if(r=Ql(b),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ia(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!Yt)return Rn(s),null}else 2*qt()-_.renderingStartTime>yo&&l!==1073741824&&(s.flags|=128,f=!0,Ia(_,!1),s.lanes=4194304);_.isBackwards?(b.sibling=s.child,s.child=b):(l=_.last,l!==null?l.sibling=b:s.child=b,_.last=b)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=qt(),s.sibling=null,l=Kt.current,Bt(Kt,f?l&1|2:l&1),s):(Rn(s),null);case 22:case 23:return Rd(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ii&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function IT(r,s){switch(kf(s),s.tag){case 1:return Xn(s.type)&&zl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return go(),Ht(Wn),Ht(bn),Zf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return qf(s),null;case 13:if(Ht(Kt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));fo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ht(Kt),null;case 4:return go(),null;case 10:return Wf(s.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var ac=!1,Pn=!1,FT=typeof WeakSet=="function"?WeakSet:Set,ze=null;function xo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){en(r,s,f)}else l.current=null}function vd(r,s,l){try{l()}catch(f){en(r,s,f)}}var nv=!1;function UT(r,s){if(Rf=bl,r=Ig(),Sf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var b=0,B=-1,X=-1,fe=0,Se=0,Ee=r,ye=null;t:for(;;){for(var ke;Ee!==l||g!==0&&Ee.nodeType!==3||(B=b+g),Ee!==_||f!==0&&Ee.nodeType!==3||(X=b+f),Ee.nodeType===3&&(b+=Ee.nodeValue.length),(ke=Ee.firstChild)!==null;)ye=Ee,Ee=ke;for(;;){if(Ee===r)break t;if(ye===l&&++fe===g&&(B=b),ye===_&&++Se===f&&(X=b),(ke=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=ke}l=B===-1||X===-1?null:{start:B,end:X}}else l=null}l=l||{start:0,end:0}}else l=null;for(Pf={focusedElem:r,selectionRange:l},bl=!1,ze=s;ze!==null;)if(s=ze,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ze=r;else for(;ze!==null;){s=ze;try{var Ge=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var qe=Ge.memoizedProps,rn=Ge.memoizedState,te=s.stateNode,$=te.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Mi(s.type,qe),rn);te.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var oe=s.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){en(s,s.return,Te)}if(r=s.sibling,r!==null){r.return=s.return,ze=r;break}ze=s.return}return Ge=nv,nv=!1,Ge}function Fa(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&r)===r){var _=g.destroy;g.destroy=void 0,_!==void 0&&vd(s,l,_)}g=g.next}while(g!==f)}}function lc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function xd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function iv(r){var s=r.alternate;s!==null&&(r.alternate=null,iv(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Vi],delete s[Ta],delete s[If],delete s[xT],delete s[_T])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function rv(r){return r.tag===5||r.tag===3||r.tag===4}function sv(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||rv(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function _d(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Bl));else if(f!==4&&(r=r.child,r!==null))for(_d(r,s,l),r=r.sibling;r!==null;)_d(r,s,l),r=r.sibling}function yd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(yd(r,s,l),r=r.sibling;r!==null;)yd(r,s,l),r=r.sibling}var En=null,Ti=!1;function zr(r,s,l){for(l=l.child;l!==null;)ov(r,s,l),l=l.sibling}function ov(r,s,l){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:Pn||xo(l,s);case 6:var f=En,g=Ti;En=null,zr(r,s,l),En=f,Ti=g,En!==null&&(Ti?(r=En,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):En.removeChild(l.stateNode));break;case 18:En!==null&&(Ti?(r=En,l=l.stateNode,r.nodeType===8?Nf(r.parentNode,l):r.nodeType===1&&Nf(r,l),ha(r)):Nf(En,l.stateNode));break;case 4:f=En,g=Ti,En=l.stateNode.containerInfo,Ti=!0,zr(r,s,l),En=f,Ti=g;break;case 0:case 11:case 14:case 15:if(!Pn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var _=g,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&vd(l,s,b),g=g.next}while(g!==f)}zr(r,s,l);break;case 1:if(!Pn&&(xo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){en(l,s,B)}zr(r,s,l);break;case 21:zr(r,s,l);break;case 22:l.mode&1?(Pn=(f=Pn)||l.memoizedState!==null,zr(r,s,l),Pn=f):zr(r,s,l);break;default:zr(r,s,l)}}function av(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new FT),s.forEach(function(f){var g=XT.bind(null,r,f);l.has(f)||(l.add(f),f.then(g,g))})}}function wi(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var _=r,b=s,B=b;e:for(;B!==null;){switch(B.tag){case 5:En=B.stateNode,Ti=!1;break e;case 3:En=B.stateNode.containerInfo,Ti=!0;break e;case 4:En=B.stateNode.containerInfo,Ti=!0;break e}B=B.return}if(En===null)throw Error(t(160));ov(_,b,g),En=null,Ti=!1;var X=g.alternate;X!==null&&(X.return=null),g.return=null}catch(fe){en(g,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)lv(s,r),s=s.sibling}function lv(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(wi(s,r),Gi(r),f&4){try{Fa(3,r,r.return),lc(3,r)}catch(qe){en(r,r.return,qe)}try{Fa(5,r,r.return)}catch(qe){en(r,r.return,qe)}}break;case 1:wi(s,r),Gi(r),f&512&&l!==null&&xo(l,l.return);break;case 5:if(wi(s,r),Gi(r),f&512&&l!==null&&xo(l,l.return),r.flags&32){var g=r.stateNode;try{he(g,"")}catch(qe){en(r,r.return,qe)}}if(f&4&&(g=r.stateNode,g!=null)){var _=r.memoizedProps,b=l!==null?l.memoizedProps:_,B=r.type,X=r.updateQueue;if(r.updateQueue=null,X!==null)try{B==="input"&&_.type==="radio"&&_.name!=null&&gt(g,_),Le(B,b);var fe=Le(B,_);for(b=0;b<X.length;b+=2){var Se=X[b],Ee=X[b+1];Se==="style"?ve(g,Ee):Se==="dangerouslySetInnerHTML"?ae(g,Ee):Se==="children"?he(g,Ee):D(g,Se,Ee,fe)}switch(B){case"input":Wt(g,_);break;case"textarea":yn(g,_);break;case"select":var ye=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var ke=_.value;ke!=null?Pt(g,!!_.multiple,ke,!1):ye!==!!_.multiple&&(_.defaultValue!=null?Pt(g,!!_.multiple,_.defaultValue,!0):Pt(g,!!_.multiple,_.multiple?[]:"",!1))}g[Ta]=_}catch(qe){en(r,r.return,qe)}}break;case 6:if(wi(s,r),Gi(r),f&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,_=r.memoizedProps;try{g.nodeValue=_}catch(qe){en(r,r.return,qe)}}break;case 3:if(wi(s,r),Gi(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ha(s.containerInfo)}catch(qe){en(r,r.return,qe)}break;case 4:wi(s,r),Gi(r);break;case 13:wi(s,r),Gi(r),g=r.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(Md=qt())),f&4&&av(r);break;case 22:if(Se=l!==null&&l.memoizedState!==null,r.mode&1?(Pn=(fe=Pn)||Se,wi(s,r),Pn=fe):wi(s,r),Gi(r),f&8192){if(fe=r.memoizedState!==null,(r.stateNode.isHidden=fe)&&!Se&&(r.mode&1)!==0)for(ze=r,Se=r.child;Se!==null;){for(Ee=ze=Se;ze!==null;){switch(ye=ze,ke=ye.child,ye.tag){case 0:case 11:case 14:case 15:Fa(4,ye,ye.return);break;case 1:xo(ye,ye.return);var Ge=ye.stateNode;if(typeof Ge.componentWillUnmount=="function"){f=ye,l=ye.return;try{s=f,Ge.props=s.memoizedProps,Ge.state=s.memoizedState,Ge.componentWillUnmount()}catch(qe){en(f,l,qe)}}break;case 5:xo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){fv(Ee);continue}}ke!==null?(ke.return=ye,ze=ke):fv(Ee)}Se=Se.sibling}e:for(Se=null,Ee=r;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{g=Ee.stateNode,fe?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(B=Ee.stateNode,X=Ee.memoizedProps.style,b=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=pe("display",b))}catch(qe){en(r,r.return,qe)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=fe?"":Ee.memoizedProps}catch(qe){en(r,r.return,qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===r)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===r)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===r)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:wi(s,r),Gi(r),f&4&&av(r);break;case 21:break;default:wi(s,r),Gi(r)}}function Gi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(rv(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(he(g,""),f.flags&=-33);var _=sv(r);yd(r,_,g);break;case 3:case 4:var b=f.stateNode.containerInfo,B=sv(r);_d(r,B,b);break;default:throw Error(t(161))}}catch(X){en(r,r.return,X)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function OT(r,s,l){ze=r,cv(r)}function cv(r,s,l){for(var f=(r.mode&1)!==0;ze!==null;){var g=ze,_=g.child;if(g.tag===22&&f){var b=g.memoizedState!==null||ac;if(!b){var B=g.alternate,X=B!==null&&B.memoizedState!==null||Pn;B=ac;var fe=Pn;if(ac=b,(Pn=X)&&!fe)for(ze=g;ze!==null;)b=ze,X=b.child,b.tag===22&&b.memoizedState!==null?dv(g):X!==null?(X.return=b,ze=X):dv(g);for(;_!==null;)ze=_,cv(_),_=_.sibling;ze=g,ac=B,Pn=fe}uv(r)}else(g.subtreeFlags&8772)!==0&&_!==null?(_.return=g,ze=_):uv(r)}}function uv(r){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Pn||lc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Pn)if(l===null)f.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Mi(s.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&f0(s,_,f);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}f0(s,b,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var X=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&l.focus();break;case"img":X.src&&(l.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var Se=fe.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&ha(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||s.flags&512&&xd(s)}catch(ye){en(s,s.return,ye)}}if(s===r){ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,ze=l;break}ze=s.return}}function fv(r){for(;ze!==null;){var s=ze;if(s===r){ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ze=l;break}ze=s.return}}function dv(r){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{lc(4,s)}catch(X){en(s,l,X)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(X){en(s,g,X)}}var _=s.return;try{xd(s)}catch(X){en(s,_,X)}break;case 5:var b=s.return;try{xd(s)}catch(X){en(s,b,X)}}}catch(X){en(s,s.return,X)}if(s===r){ze=null;break}var B=s.sibling;if(B!==null){B.return=s.return,ze=B;break}ze=s.return}}var kT=Math.ceil,cc=A.ReactCurrentDispatcher,Sd=A.ReactCurrentOwner,di=A.ReactCurrentBatchConfig,St=0,vn=null,an=null,Mn=0,ii=0,_o=Ur(0),fn=0,Ua=null,Es=0,uc=0,Ed=0,Oa=null,Yn=null,Md=0,yo=1/0,dr=null,fc=!1,Td=null,Hr=null,dc=!1,Gr=null,hc=0,ka=0,wd=null,pc=-1,mc=0;function Un(){return(St&6)!==0?qt():pc!==-1?pc:pc=qt()}function Wr(r){return(r.mode&1)===0?1:(St&2)!==0&&Mn!==0?Mn&-Mn:ST.transition!==null?(mc===0&&(mc=Oe()),mc):(r=pt,r!==0||(r=window.event,r=r===void 0?16:pg(r.type)),r)}function Ai(r,s,l,f){if(50<ka)throw ka=0,wd=null,Error(t(185));ht(r,l,f),((St&2)===0||r!==vn)&&(r===vn&&((St&2)===0&&(uc|=l),fn===4&&Xr(r,Mn)),$n(r,f),l===1&&St===0&&(s.mode&1)===0&&(yo=qt()+500,Gl&&kr()))}function $n(r,s){var l=r.callbackNode;Dt(r,s);var f=kt(r,r===vn?Mn:0);if(f===0)l!==null&&aa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&aa(l),s===1)r.tag===0?yT(pv.bind(null,r)):Jg(pv.bind(null,r)),gT(function(){(St&6)===0&&kr()}),l=null;else{switch(rr(f)){case 1:l=la;break;case 4:l=C;break;case 16:l=K;break;case 536870912:l=ie;break;default:l=K}l=Ev(l,hv.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function hv(r,s){if(pc=-1,mc=0,(St&6)!==0)throw Error(t(327));var l=r.callbackNode;if(So()&&r.callbackNode!==l)return null;var f=kt(r,r===vn?Mn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||s)s=gc(r,f);else{s=f;var g=St;St|=2;var _=gv();(vn!==r||Mn!==s)&&(dr=null,yo=qt()+500,Ts(r,s));do try{zT();break}catch(B){mv(r,B)}while(!0);Gf(),cc.current=_,St=g,an!==null?s=0:(vn=null,Mn=0,s=fn)}if(s!==0){if(s===2&&(g=on(r),g!==0&&(f=g,s=Ad(r,g))),s===1)throw l=Ua,Ts(r,0),Xr(r,f),$n(r,qt()),l;if(s===6)Xr(r,f);else{if(g=r.current.alternate,(f&30)===0&&!BT(g)&&(s=gc(r,f),s===2&&(_=on(r),_!==0&&(f=_,s=Ad(r,_))),s===1))throw l=Ua,Ts(r,0),Xr(r,f),$n(r,qt()),l;switch(r.finishedWork=g,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ws(r,Yn,dr);break;case 3:if(Xr(r,f),(f&130023424)===f&&(s=Md+500-qt(),10<s)){if(kt(r,0)!==0)break;if(g=r.suspendedLanes,(g&f)!==f){Un(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=Lf(ws.bind(null,r,Yn,dr),s);break}ws(r,Yn,dr);break;case 4:if(Xr(r,f),(f&4194240)===f)break;for(s=r.eventTimes,g=-1;0<f;){var b=31-we(f);_=1<<b,b=s[b],b>g&&(g=b),f&=~_}if(f=g,f=qt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*kT(f/1960))-f,10<f){r.timeoutHandle=Lf(ws.bind(null,r,Yn,dr),f);break}ws(r,Yn,dr);break;case 5:ws(r,Yn,dr);break;default:throw Error(t(329))}}}return $n(r,qt()),r.callbackNode===l?hv.bind(null,r):null}function Ad(r,s){var l=Oa;return r.current.memoizedState.isDehydrated&&(Ts(r,s).flags|=256),r=gc(r,s),r!==2&&(s=Yn,Yn=l,s!==null&&bd(s)),r}function bd(r){Yn===null?Yn=r:Yn.push.apply(Yn,r)}function BT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],_=g.getSnapshot;g=g.value;try{if(!Si(_(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Xr(r,s){for(s&=~Ed,s&=~uc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-we(s),f=1<<l;r[l]=-1,s&=~f}}function pv(r){if((St&6)!==0)throw Error(t(327));So();var s=kt(r,0);if((s&1)===0)return $n(r,qt()),null;var l=gc(r,s);if(r.tag!==0&&l===2){var f=on(r);f!==0&&(s=f,l=Ad(r,f))}if(l===1)throw l=Ua,Ts(r,0),Xr(r,s),$n(r,qt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ws(r,Yn,dr),$n(r,qt()),null}function Cd(r,s){var l=St;St|=1;try{return r(s)}finally{St=l,St===0&&(yo=qt()+500,Gl&&kr())}}function Ms(r){Gr!==null&&Gr.tag===0&&(St&6)===0&&So();var s=St;St|=1;var l=di.transition,f=pt;try{if(di.transition=null,pt=1,r)return r()}finally{pt=f,di.transition=l,St=s,(St&6)===0&&kr()}}function Rd(){ii=_o.current,Ht(_o)}function Ts(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,mT(l)),an!==null)for(l=an.return;l!==null;){var f=l;switch(kf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&zl();break;case 3:go(),Ht(Wn),Ht(bn),Zf();break;case 5:qf(f);break;case 4:go();break;case 13:Ht(Kt);break;case 19:Ht(Kt);break;case 10:Wf(f.type._context);break;case 22:case 23:Rd()}l=l.return}if(vn=r,an=r=jr(r.current,null),Mn=ii=s,fn=0,Ua=null,Ed=uc=Es=0,Yn=Oa=null,_s!==null){for(s=0;s<_s.length;s++)if(l=_s[s],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,_=l.pending;if(_!==null){var b=_.next;_.next=g,f.next=b}l.pending=f}_s=null}return r}function mv(r,s){do{var l=an;try{if(Gf(),Jl.current=ic,ec){for(var f=Zt.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}ec=!1}if(Ss=0,gn=un=Zt=null,Pa=!1,Da=0,Sd.current=null,l===null||l.return===null){fn=1,Ua=s,an=null;break}e:{var _=r,b=l.return,B=l,X=s;if(s=Mn,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var fe=X,Se=B,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ke=V0(b);if(ke!==null){ke.flags&=-257,z0(ke,b,B,_,s),ke.mode&1&&B0(_,fe,s),s=ke,X=fe;var Ge=s.updateQueue;if(Ge===null){var qe=new Set;qe.add(X),s.updateQueue=qe}else Ge.add(X);break e}else{if((s&1)===0){B0(_,fe,s),Pd();break e}X=Error(t(426))}}else if(Yt&&B.mode&1){var rn=V0(b);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),z0(rn,b,B,_,s),zf(vo(X,B));break e}}_=X=vo(X,B),fn!==4&&(fn=2),Oa===null?Oa=[_]:Oa.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var te=O0(_,X,s);u0(_,te);break e;case 1:B=X;var $=_.type,oe=_.stateNode;if((_.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Hr===null||!Hr.has(oe)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=k0(_,B,s);u0(_,Te);break e}}_=_.return}while(_!==null)}xv(l)}catch(Qe){s=Qe,an===l&&l!==null&&(an=l=l.return);continue}break}while(!0)}function gv(){var r=cc.current;return cc.current=ic,r===null?ic:r}function Pd(){(fn===0||fn===3||fn===2)&&(fn=4),vn===null||(Es&268435455)===0&&(uc&268435455)===0||Xr(vn,Mn)}function gc(r,s){var l=St;St|=2;var f=gv();(vn!==r||Mn!==s)&&(dr=null,Ts(r,s));do try{VT();break}catch(g){mv(r,g)}while(!0);if(Gf(),St=l,cc.current=f,an!==null)throw Error(t(261));return vn=null,Mn=0,fn}function VT(){for(;an!==null;)vv(an)}function zT(){for(;an!==null&&!wl();)vv(an)}function vv(r){var s=Sv(r.alternate,r,ii);r.memoizedProps=r.pendingProps,s===null?xv(r):an=s,Sd.current=null}function xv(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=NT(l,s,ii),l!==null){an=l;return}}else{if(l=IT(l,s),l!==null){l.flags&=32767,an=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{fn=6,an=null;return}}if(s=s.sibling,s!==null){an=s;return}an=s=r}while(s!==null);fn===0&&(fn=5)}function ws(r,s,l){var f=pt,g=di.transition;try{di.transition=null,pt=1,HT(r,s,l,f)}finally{di.transition=g,pt=f}return null}function HT(r,s,l,f){do So();while(Gr!==null);if((St&6)!==0)throw Error(t(327));l=r.finishedWork;var g=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var _=l.lanes|l.childLanes;if(Hn(r,_),r===vn&&(an=vn=null,Mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||dc||(dc=!0,Ev(K,function(){return So(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=di.transition,di.transition=null;var b=pt;pt=1;var B=St;St|=4,Sd.current=null,UT(r,l),lv(l,r),lT(Pf),bl=!!Rf,Pf=Rf=null,r.current=l,OT(l),lf(),St=B,pt=b,di.transition=_}else r.current=l;if(dc&&(dc=!1,Gr=r,hc=g),_=r.pendingLanes,_===0&&(Hr=null),Be(l.stateNode),$n(r,qt()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)g=s[l],f(g.value,{componentStack:g.stack,digest:g.digest});if(fc)throw fc=!1,r=Td,Td=null,r;return(hc&1)!==0&&r.tag!==0&&So(),_=r.pendingLanes,(_&1)!==0?r===wd?ka++:(ka=0,wd=r):ka=0,kr(),null}function So(){if(Gr!==null){var r=rr(hc),s=di.transition,l=pt;try{if(di.transition=null,pt=16>r?16:r,Gr===null)var f=!1;else{if(r=Gr,Gr=null,hc=0,(St&6)!==0)throw Error(t(331));var g=St;for(St|=4,ze=r.current;ze!==null;){var _=ze,b=_.child;if((ze.flags&16)!==0){var B=_.deletions;if(B!==null){for(var X=0;X<B.length;X++){var fe=B[X];for(ze=fe;ze!==null;){var Se=ze;switch(Se.tag){case 0:case 11:case 15:Fa(8,Se,_)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,ze=Ee;else for(;ze!==null;){Se=ze;var ye=Se.sibling,ke=Se.return;if(iv(Se),Se===fe){ze=null;break}if(ye!==null){ye.return=ke,ze=ye;break}ze=ke}}}var Ge=_.alternate;if(Ge!==null){var qe=Ge.child;if(qe!==null){Ge.child=null;do{var rn=qe.sibling;qe.sibling=null,qe=rn}while(qe!==null)}}ze=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ze=b;else e:for(;ze!==null;){if(_=ze,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Fa(9,_,_.return)}var te=_.sibling;if(te!==null){te.return=_.return,ze=te;break e}ze=_.return}}var $=r.current;for(ze=$;ze!==null;){b=ze;var oe=b.child;if((b.subtreeFlags&2064)!==0&&oe!==null)oe.return=b,ze=oe;else e:for(b=$;ze!==null;){if(B=ze,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:lc(9,B)}}catch(Qe){en(B,B.return,Qe)}if(B===b){ze=null;break e}var Te=B.sibling;if(Te!==null){Te.return=B.return,ze=Te;break e}ze=B.return}}if(St=g,kr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ne,r)}catch{}f=!0}return f}finally{pt=l,di.transition=s}}return!1}function _v(r,s,l){s=vo(l,s),s=O0(r,s,1),r=Vr(r,s,1),s=Un(),r!==null&&(ht(r,1,s),$n(r,s))}function en(r,s,l){if(r.tag===3)_v(r,r,l);else for(;s!==null;){if(s.tag===3){_v(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Hr===null||!Hr.has(f))){r=vo(l,r),r=k0(s,r,1),s=Vr(s,r,1),r=Un(),s!==null&&(ht(s,1,r),$n(s,r));break}}s=s.return}}function GT(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=Un(),r.pingedLanes|=r.suspendedLanes&l,vn===r&&(Mn&l)===l&&(fn===4||fn===3&&(Mn&130023424)===Mn&&500>qt()-Md?Ts(r,0):Ed|=l),$n(r,s)}function yv(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var l=Un();r=cr(r,s),r!==null&&(ht(r,s,l),$n(r,l))}function WT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),yv(r,l)}function XT(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,g=r.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),yv(r,l)}var Sv;Sv=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Wn.current)jn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return jn=!1,LT(r,s,l);jn=(r.flags&131072)!==0}else jn=!1,Yt&&(s.flags&1048576)!==0&&e0(s,Xl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;oc(r,s),r=s.pendingProps;var g=lo(s,bn.current);mo(s,l),g=ed(null,s,f,r,g,l);var _=td();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xn(f)?(_=!0,Hl(s)):_=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Yf(s),g.updater=rc,s.stateNode=g,g._reactInternals=s,ad(s,f,r,l),s=fd(null,s,f,!0,_,l)):(s.tag=0,Yt&&_&&Of(s),Fn(null,s,g,l),s=s.child),s;case 16:f=s.elementType;e:{switch(oc(r,s),r=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=YT(f),r=Mi(f,r),g){case 0:s=ud(null,s,f,r,l);break e;case 1:s=Y0(null,s,f,r,l);break e;case 11:s=H0(null,s,f,r,l);break e;case 14:s=G0(null,s,f,Mi(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),ud(r,s,f,g,l);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),Y0(r,s,f,g,l);case 3:e:{if($0(s),r===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,g=_.element,c0(r,s),Zl(s,f,null,l);var b=s.memoizedState;if(f=b.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){g=vo(Error(t(423)),s),s=q0(r,s,f,l,g);break e}else if(f!==g){g=vo(Error(t(424)),s),s=q0(r,s,f,l,g);break e}else for(ni=Fr(s.stateNode.containerInfo.firstChild),ti=s,Yt=!0,Ei=null,l=a0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(fo(),f===g){s=fr(r,s,l);break e}Fn(r,s,f,l)}s=s.child}return s;case 5:return d0(s),r===null&&Vf(s),f=s.type,g=s.pendingProps,_=r!==null?r.memoizedProps:null,b=g.children,Df(f,g)?b=null:_!==null&&Df(f,_)&&(s.flags|=32),j0(r,s),Fn(r,s,b,l),s.child;case 6:return r===null&&Vf(s),null;case 13:return K0(r,s,l);case 4:return $f(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=ho(s,null,f,l):Fn(r,s,f,l),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),H0(r,s,f,g,l);case 7:return Fn(r,s,s.pendingProps,l),s.child;case 8:return Fn(r,s,s.pendingProps.children,l),s.child;case 12:return Fn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,_=s.memoizedProps,b=g.value,Bt($l,f._currentValue),f._currentValue=b,_!==null)if(Si(_.value,b)){if(_.children===g.children&&!Wn.current){s=fr(r,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var B=_.dependencies;if(B!==null){b=_.child;for(var X=B.firstContext;X!==null;){if(X.context===f){if(_.tag===1){X=ur(-1,l&-l),X.tag=2;var fe=_.updateQueue;if(fe!==null){fe=fe.shared;var Se=fe.pending;Se===null?X.next=X:(X.next=Se.next,Se.next=X),fe.pending=X}}_.lanes|=l,X=_.alternate,X!==null&&(X.lanes|=l),Xf(_.return,l,s),B.lanes|=l;break}X=X.next}}else if(_.tag===10)b=_.type===s.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=l,B=b.alternate,B!==null&&(B.lanes|=l),Xf(b,l,s),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===s){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Fn(r,s,g.children,l),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,mo(s,l),g=ui(g),f=f(g),s.flags|=1,Fn(r,s,f,l),s.child;case 14:return f=s.type,g=Mi(f,s.pendingProps),g=Mi(f.type,g),G0(r,s,f,g,l);case 15:return W0(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),oc(r,s),s.tag=1,Xn(f)?(r=!0,Hl(s)):r=!1,mo(s,l),F0(s,f,g),ad(s,f,g,l),fd(null,s,f,!0,r,l);case 19:return Q0(r,s,l);case 22:return X0(r,s,l)}throw Error(t(156,s.tag))};function Ev(r,s){return hs(r,s)}function jT(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(r,s,l,f){return new jT(r,s,l,f)}function Dd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function YT(r){if(typeof r=="function")return Dd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===Z)return 14}return 2}function jr(r,s){var l=r.alternate;return l===null?(l=hi(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function vc(r,s,l,f,g,_){var b=2;if(f=r,typeof r=="function")Dd(r)&&(b=1);else if(typeof r=="string")b=5;else e:switch(r){case L:return As(l.children,g,_,s);case T:b=8,g|=8;break;case I:return r=hi(12,l,s,g|2),r.elementType=I,r.lanes=_,r;case re:return r=hi(13,l,s,g),r.elementType=re,r.lanes=_,r;case de:return r=hi(19,l,s,g),r.elementType=de,r.lanes=_,r;case W:return xc(l,g,_,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case z:b=10;break e;case V:b=9;break e;case j:b=11;break e;case Z:b=14;break e;case H:b=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=hi(b,l,s,g),s.elementType=r,s.type=f,s.lanes=_,s}function As(r,s,l,f){return r=hi(7,r,f,s),r.lanes=l,r}function xc(r,s,l,f){return r=hi(22,r,f,s),r.elementType=W,r.lanes=l,r.stateNode={isHidden:!1},r}function Ld(r,s,l){return r=hi(6,r,null,s),r.lanes=l,r}function Nd(r,s,l){return s=hi(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function $T(r,s,l,f,g){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Id(r,s,l,f,g,_,b,B,X){return r=new $T(r,s,l,B,X),s===1?(s=1,_===!0&&(s|=8)):s=0,_=hi(3,null,null,s),r.current=_,_.stateNode=r,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(_),r}function qT(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function Mv(r){if(!r)return Or;r=r._reactInternals;e:{if(In(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Xn(l))return Zg(r,l,s)}return s}function Tv(r,s,l,f,g,_,b,B,X){return r=Id(l,f,!0,r,g,_,b,B,X),r.context=Mv(null),l=r.current,f=Un(),g=Wr(l),_=ur(f,g),_.callback=s??null,Vr(l,_,g),r.current.lanes=g,ht(r,g,f),$n(r,f),r}function _c(r,s,l,f){var g=s.current,_=Un(),b=Wr(g);return l=Mv(l),s.context===null?s.context=l:s.pendingContext=l,s=ur(_,b),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=Vr(g,s,b),r!==null&&(Ai(r,g,b,_),Kl(r,g,b)),b}function yc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function wv(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Fd(r,s){wv(r,s),(r=r.alternate)&&wv(r,s)}function KT(){return null}var Av=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ud(r){this._internalRoot=r}Sc.prototype.render=Ud.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));_c(r,s,null,null)},Sc.prototype.unmount=Ud.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Ms(function(){_c(null,r,null,null)}),s[sr]=null}};function Sc(r){this._internalRoot=r}Sc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Lt();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Lr.length&&s!==0&&s<Lr[l].priority;l++);Lr.splice(l,0,r),l===0&&dg(r)}};function Od(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ec(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function bv(){}function ZT(r,s,l,f,g){if(g){if(typeof f=="function"){var _=f;f=function(){var fe=yc(b);_.call(fe)}}var b=Tv(s,f,r,0,null,!1,!1,"",bv);return r._reactRootContainer=b,r[sr]=b.current,Ea(r.nodeType===8?r.parentNode:r),Ms(),b}for(;g=r.lastChild;)r.removeChild(g);if(typeof f=="function"){var B=f;f=function(){var fe=yc(X);B.call(fe)}}var X=Id(r,0,!1,null,null,!1,!1,"",bv);return r._reactRootContainer=X,r[sr]=X.current,Ea(r.nodeType===8?r.parentNode:r),Ms(function(){_c(s,X,l,f)}),X}function Mc(r,s,l,f,g){var _=l._reactRootContainer;if(_){var b=_;if(typeof g=="function"){var B=g;g=function(){var X=yc(b);B.call(X)}}_c(s,b,r,g)}else b=ZT(l,s,r,g,f);return yc(b)}Rt=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=yt(s.pendingLanes);l!==0&&(Gn(s,l|1),$n(s,qt()),(St&6)===0&&(yo=qt()+500,kr()))}break;case 13:Ms(function(){var f=cr(r,1);if(f!==null){var g=Un();Ai(f,r,1,g)}}),Fd(r,1)}},Vt=function(r){if(r.tag===13){var s=cr(r,134217728);if(s!==null){var l=Un();Ai(s,r,134217728,l)}Fd(r,134217728)}},_i=function(r){if(r.tag===13){var s=Wr(r),l=cr(r,s);if(l!==null){var f=Un();Ai(l,r,s,f)}Fd(r,s)}},Lt=function(){return pt},yi=function(r,s){var l=pt;try{return pt=r,s()}finally{pt=l}},nt=function(r,s,l){switch(s){case"input":if(Wt(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var g=Vl(f);if(!g)throw Error(t(90));Ot(f),Wt(f,g)}}}break;case"textarea":yn(r,l);break;case"select":s=l.value,s!=null&&Pt(r,!!l.multiple,s,!1)}},Fe=Cd,xe=Ms;var QT={usingClientEntryPoint:!1,Events:[wa,oo,Vl,ge,Pe,Cd]},Ba={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JT={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ds(r),r===null?null:r.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||KT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{ne=Tc.inject(JT),Ae=Tc}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT,qn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Od(s))throw Error(t(200));return qT(r,s,null,l)},qn.createRoot=function(r,s){if(!Od(r))throw Error(t(299));var l=!1,f="",g=Av;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Id(r,1,!1,null,null,l,!1,f,g),r[sr]=s.current,Ea(r.nodeType===8?r.parentNode:r),new Ud(s)},qn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ds(s),r=r===null?null:r.stateNode,r},qn.flushSync=function(r){return Ms(r)},qn.hydrate=function(r,s,l){if(!Ec(s))throw Error(t(200));return Mc(null,r,s,!0,l)},qn.hydrateRoot=function(r,s,l){if(!Od(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,_="",b=Av;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=Tv(s,null,r,1,l??null,g,!1,_,b),r[sr]=s.current,Ea(r),f)for(r=0;r<f.length;r++)l=f[r],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new Sc(s)},qn.render=function(r,s,l){if(!Ec(s))throw Error(t(200));return Mc(null,r,s,!1,l)},qn.unmountComponentAtNode=function(r){if(!Ec(r))throw Error(t(40));return r._reactRootContainer?(Ms(function(){Mc(null,null,r,!1,function(){r._reactRootContainer=null,r[sr]=null})}),!0):!1},qn.unstable_batchedUpdates=Cd,qn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!Ec(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Mc(r,s,l,!1,f)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Fv;function _y(){if(Fv)return Vd.exports;Fv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vd.exports=aw(),Vd.exports}var Uv;function lw(){if(Uv)return wc;Uv=1;var n=_y();return wc.createRoot=n.createRoot,wc.hydrateRoot=n.hydrateRoot,wc}var cw=lw(),k=vm();const uw=xy(k),fw=tw({__proto__:null,default:uw},[k]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),Ov=n=>{const e=hw(n);return e.charAt(0).toUpperCase()+e.slice(1)},yy=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=k.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...u},h)=>k.createElement("svg",{ref:h,...pw,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:yy("lucide",o),...u},[...c.map(([d,m])=>k.createElement(d,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=(n,e)=>{const t=k.forwardRef(({className:i,...o},a)=>k.createElement(mw,{ref:a,iconNode:e,className:yy(`lucide-${dw(Ov(n))}`,`lucide-${n}`,i),...o}));return t.displayName=Ov(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],wu=$s("arrow-up-right",gw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],xw=$s("download",vw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Gd=$s("github",_w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Sw=$s("linkedin",yw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Mw=$s("mail",Ew);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],ww=$s("play",Tw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bw=$s("x",Aw),xm=k.createContext({});function dl(n){const e=k.useRef(null);return e.current===null&&(e.current=n()),e.current}const Cw=typeof window<"u",ju=Cw?k.useLayoutEffect:k.useEffect,Yu=k.createContext(null);function _m(n,e){n.indexOf(e)===-1&&n.push(e)}function Au(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const tr=(n,e,t)=>t>e?e:t<n?n:t;let $u=()=>{};const os={},Sy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Ey=n=>typeof n=="object"&&n!==null,My=n=>/^0[^.\s]+$/u.test(n);function Ty(n){let e;return()=>(e===void 0&&(e=n()),e)}const xi=n=>n,hl=(...n)=>n.reduce((e,t)=>i=>t(e(i))),rl=(n,e,t)=>{const i=e-n;return i?(t-n)/i:1};class ym{constructor(){this.subscriptions=[]}add(e){return _m(this.subscriptions,e),()=>Au(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const oi=n=>n*1e3,vi=n=>n/1e3,wy=(n,e)=>e?n*(1e3/e):0,Ay=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,Rw=1e-7,Pw=12;function Dw(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=Ay(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>Rw&&++u<Pw);return c}function pl(n,e,t,i){if(n===e&&t===i)return xi;const o=a=>Dw(a,0,1,n,t);return a=>a===0||a===1?a:Ay(o(a),e,i)}const by=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Cy=n=>e=>1-n(1-e),Ry=pl(.33,1.53,.69,.99),Sm=Cy(Ry),Py=by(Sm),Dy=n=>n>=1?1:(n*=2)<1?.5*Sm(n):.5*(2-Math.pow(2,-10*(n-1))),Em=n=>1-Math.sin(Math.acos(n)),Ly=Cy(Em),Ny=by(Em),Lw=pl(.42,0,1,1),Nw=pl(0,0,.58,1),Iy=pl(.42,0,.58,1),Iw=n=>Array.isArray(n)&&typeof n[0]!="number",Fy=n=>Array.isArray(n)&&typeof n[0]=="number",Fw={linear:xi,easeIn:Lw,easeInOut:Iy,easeOut:Nw,circIn:Em,circInOut:Ny,circOut:Ly,backIn:Sm,backInOut:Py,backOut:Ry,anticipate:Dy},Uw=n=>typeof n=="string",kv=n=>{if(Fy(n)){$u(n.length===4);const[e,t,i,o]=n;return pl(e,t,i,o)}else if(Uw(n))return Fw[n];return n},Ac=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Ow(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(d){a.has(d)&&(h.schedule(d),n()),d(c)}const h={schedule:(d,m=!1,v=!1)=>{const y=v&&i?e:t;return m&&a.add(d),y.add(d),d},cancel:d=>{t.delete(d),a.delete(d)},process:d=>{if(c=d,i){o=!0;return}i=!0;const m=e;e=t,t=m,e.forEach(u),e.clear(),i=!1,o&&(o=!1,h.process(d))}};return h}const kw=40;function Uy(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Ac.reduce((D,A)=>(D[A]=Ow(a),D),{}),{setup:u,read:h,resolveKeyframes:d,preUpdate:m,update:v,preRender:p,render:y,postRender:E}=c,M=()=>{const D=os.useManualTiming,A=D?o.timestamp:performance.now();t=!1,D||(o.delta=i?1e3/60:Math.max(Math.min(A-o.timestamp,kw),1)),o.timestamp=A,o.isProcessing=!0,u.process(o),h.process(o),d.process(o),m.process(o),v.process(o),p.process(o),y.process(o),E.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(M))},x=()=>{t=!0,i=!0,o.isProcessing||n(M)};return{schedule:Ac.reduce((D,A)=>{const N=c[A];return D[A]=(F,L=!1,T=!1)=>(t||x(),N.schedule(F,L,T)),D},{}),cancel:D=>{for(let A=0;A<Ac.length;A++)c[Ac[A]].cancel(D)},state:o,steps:c}}const{schedule:It,cancel:Tr,state:Tn,steps:Wd}=Uy(typeof requestAnimationFrame<"u"?requestAnimationFrame:xi,!0);let cu;function Bw(){cu=void 0}const Bn={now:()=>(cu===void 0&&Bn.set(Tn.isProcessing||os.useManualTiming?Tn.timestamp:performance.now()),cu),set:n=>{cu=n,queueMicrotask(Bw)}},Oy=n=>e=>typeof e=="string"&&e.startsWith(n),ky=Oy("--"),Vw=Oy("var(--"),Mm=n=>Vw(n)?zw.test(n.split("/*")[0].trim()):!1,zw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Bv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const ea={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},sl={...ea,transform:n=>tr(0,1,n)},bc={...ea,default:1},Ja=n=>Math.round(n*1e5)/1e5,Tm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Hw(n){return n==null}const Gw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,wm=(n,e)=>t=>!!(typeof t=="string"&&Gw.test(t)&&t.startsWith(n)||e&&!Hw(t)&&Object.prototype.hasOwnProperty.call(t,e)),By=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(Tm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},Ww=n=>tr(0,255,n),Xd={...ea,transform:n=>Math.round(Ww(n))},Us={test:wm("rgb","red"),parse:By("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Xd.transform(n)+", "+Xd.transform(e)+", "+Xd.transform(t)+", "+Ja(sl.transform(i))+")"};function Xw(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Kh={test:wm("#"),parse:Xw,transform:Us.transform},ml=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),xr=ml("deg"),Qi=ml("%"),We=ml("px"),jw=ml("vh"),Yw=ml("vw"),Vv={...Qi,parse:n=>Qi.parse(n)/100,transform:n=>Qi.transform(n*100)},zo={test:wm("hsl","hue"),parse:By("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Qi.transform(Ja(e))+", "+Qi.transform(Ja(t))+", "+Ja(sl.transform(i))+")"},cn={test:n=>Us.test(n)||Kh.test(n)||zo.test(n),parse:n=>Us.test(n)?Us.parse(n):zo.test(n)?zo.parse(n):Kh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Us.transform(n):zo.transform(n),getAnimatableNone:n=>{const e=cn.parse(n);return e.alpha=0,cn.transform(e)}},$w=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Tm))==null?void 0:e.length)||0)+(((t=n.match($w))==null?void 0:t.length)||0)>0}const Vy="number",zy="color",Kw="var",Zw="var(",zv="${}",Qw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function qo(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(Qw,h=>(cn.test(h)?(i.color.push(a),o.push(zy),t.push(cn.parse(h))):h.startsWith(Zw)?(i.var.push(a),o.push(Kw),t.push(h)):(i.number.push(a),o.push(Vy),t.push(parseFloat(h))),++a,zv)).split(zv);return{values:t,split:u,indexes:i,types:o}}function Jw(n){return qo(n).values}function Hy({split:n,types:e}){const t=n.length;return i=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],i[a]!==void 0){const c=e[a];c===Vy?o+=Ja(i[a]):c===zy?o+=cn.transform(i[a]):o+=i[a]}return o}}function e1(n){return Hy(qo(n))}const t1=n=>typeof n=="number"?0:cn.test(n)?cn.getAnimatableNone(n):n,n1=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:t1(n);function i1(n){const e=qo(n);return Hy(e)(e.values.map((i,o)=>n1(i,e.split[o])))}const Fi={test:qw,parse:Jw,createTransformer:e1,getAnimatableNone:i1};function jd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function r1({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,h=2*t-u;o=jd(h,u,n+1/3),a=jd(h,u,n),c=jd(h,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function bu(n,e){return t=>t>0?e:n}const Ut=(n,e,t)=>n+(e-n)*t,Yd=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},s1=[Kh,Us,zo],o1=n=>s1.find(e=>e.test(n));function Hv(n){const e=o1(n);if(!e)return!1;let t=e.parse(n);return e===zo&&(t=r1(t)),t}const Gv=(n,e)=>{const t=Hv(n),i=Hv(e);if(!t||!i)return bu(n,e);const o={...t};return a=>(o.red=Yd(t.red,i.red,a),o.green=Yd(t.green,i.green,a),o.blue=Yd(t.blue,i.blue,a),o.alpha=Ut(t.alpha,i.alpha,a),Us.transform(o))},Zh=new Set(["none","hidden"]);function a1(n,e){return Zh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function l1(n,e){return t=>Ut(n,e,t)}function Am(n){return typeof n=="number"?l1:typeof n=="string"?Mm(n)?bu:cn.test(n)?Gv:f1:Array.isArray(n)?Gy:typeof n=="object"?cn.test(n)?Gv:c1:bu}function Gy(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>Am(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function c1(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Am(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function u1(n,e){const t=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][i[a]],u=n.values[c]??0;t[o]=u,i[a]++}return t}const f1=(n,e)=>{const t=Fi.createTransformer(e),i=qo(n),o=qo(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Zh.has(n)&&!o.values.length||Zh.has(e)&&!i.values.length?a1(n,e):hl(Gy(u1(i,o),o.values),t):bu(n,e)};function Wy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Ut(n,e,t):Am(n)(n,e)}const d1=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>It.update(e,t),stop:()=>Tr(e),now:()=>Tn.isProcessing?Tn.timestamp:Bn.now()}},Xy=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Cu=2e4;function bm(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Cu;)e+=t,i=n.next(e);return e>=Cu?1/0:e}function h1(n,e=100,t){const i=t({...n,keyframes:[0,e]}),o=Math.min(bm(i),Cu);return{type:"keyframes",ease:a=>i.next(o*a).value/e,duration:vi(o)}}const tn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Qh(n,e){return n*Math.sqrt(1-e*e)}const p1=12;function m1(n,e,t){let i=t;for(let o=1;o<p1;o++)i=i-n(i)/e(i);return i}const $d=.001;function g1({duration:n=tn.duration,bounce:e=tn.bounce,velocity:t=tn.velocity,mass:i=tn.mass}){let o,a,c=1-e;c=tr(tn.minDamping,tn.maxDamping,c),n=tr(tn.minDuration,tn.maxDuration,vi(n)),c<1?(o=d=>{const m=d*c,v=m*n,p=m-t,y=Qh(d,c),E=Math.exp(-v);return $d-p/y*E},a=d=>{const v=d*c*n,p=v*t+t,y=Math.pow(c,2)*Math.pow(d,2)*n,E=Math.exp(-v),M=Qh(Math.pow(d,2),c);return(-o(d)+$d>0?-1:1)*((p-y)*E)/M}):(o=d=>{const m=Math.exp(-d*n),v=(d-t)*n+1;return-$d+m*v},a=d=>{const m=Math.exp(-d*n),v=(t-d)*(n*n);return m*v});const u=5/n,h=m1(o,a,u);if(n=oi(n),isNaN(h))return{stiffness:tn.stiffness,damping:tn.damping,duration:n};{const d=Math.pow(h,2)*i;return{stiffness:d,damping:c*2*Math.sqrt(i*d),duration:n}}}const v1=["duration","bounce"],x1=["stiffness","damping","mass"];function Wv(n,e){return e.some(t=>n[t]!==void 0)}function _1(n){let e={velocity:tn.velocity,stiffness:tn.stiffness,damping:tn.damping,mass:tn.mass,isResolvedFromDuration:!1,...n};if(!Wv(n,x1)&&Wv(n,v1))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*tr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:tn.mass,stiffness:o,damping:a}}else{const t=g1({...n,velocity:0});e={...e,...t,mass:tn.mass},e.isResolvedFromDuration=!0}return e}function Ru(n=tn.visualDuration,e=tn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:h,damping:d,mass:m,duration:v,velocity:p,isResolvedFromDuration:y}=_1({...t,velocity:-vi(t.velocity||0)}),E=p||0,M=d/(2*Math.sqrt(h*m)),x=c-a,S=vi(Math.sqrt(h/m)),R=Math.abs(x)<5;i||(i=R?tn.restSpeed.granular:tn.restSpeed.default),o||(o=R?tn.restDelta.granular:tn.restDelta.default);let D,A,N,F,L,T;if(M<1)N=Qh(S,M),F=(E+M*S*x)/N,D=z=>{const V=Math.exp(-M*S*z);return c-V*(F*Math.sin(N*z)+x*Math.cos(N*z))},L=M*S*F+x*N,T=M*S*x-F*N,A=z=>Math.exp(-M*S*z)*(L*Math.sin(N*z)+T*Math.cos(N*z));else if(M===1){D=V=>c-Math.exp(-S*V)*(x+(E+S*x)*V);const z=E+S*x;A=V=>Math.exp(-S*V)*(S*z*V-E)}else{const z=S*Math.sqrt(M*M-1);D=de=>{const Z=Math.exp(-M*S*de),H=Math.min(z*de,300);return c-Z*((E+M*S*x)*Math.sinh(H)+z*x*Math.cosh(H))/z};const V=(E+M*S*x)/z,j=M*S*V-x*z,re=M*S*x-V*z;A=de=>{const Z=Math.exp(-M*S*de),H=Math.min(z*de,300);return Z*(j*Math.sinh(H)+re*Math.cosh(H))}}const I={calculatedDuration:y&&v||null,velocity:z=>oi(A(z)),next:z=>{if(!y&&M<1){const j=Math.exp(-M*S*z),re=Math.sin(N*z),de=Math.cos(N*z),Z=c-j*(F*re+x*de),H=oi(j*(L*re+T*de));return u.done=Math.abs(H)<=i&&Math.abs(c-Z)<=o,u.value=u.done?c:Z,u}const V=D(z);if(y)u.done=z>=v;else{const j=oi(A(z));u.done=Math.abs(j)<=i&&Math.abs(c-V)<=o}return u.value=u.done?c:V,u},toString:()=>{const z=Math.min(bm(I),Cu),V=Xy(j=>I.next(z*j).value,z,30);return z+"ms "+V},toTransition:()=>{}};return I}Ru.applyToOptions=n=>{const e=h1(n,100,Ru);return n.ease=e.ease,n.duration=oi(e.duration),n.type="keyframes",n};const y1=5;function jy(n,e,t){const i=Math.max(e-y1,0);return wy(t-n(i),e-i)}function Jh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:h,restDelta:d=.5,restSpeed:m}){const v=n[0],p={done:!1,value:v},y=T=>u!==void 0&&T<u||h!==void 0&&T>h,E=T=>u===void 0?h:h===void 0||Math.abs(u-T)<Math.abs(h-T)?u:h;let M=t*e;const x=v+M,S=c===void 0?x:c(x);S!==x&&(M=S-v);const R=T=>-M*Math.exp(-T/i),D=T=>S+R(T),A=T=>{const I=R(T),z=D(T);p.done=Math.abs(I)<=d,p.value=p.done?S:z};let N,F;const L=T=>{y(p.value)&&(N=T,F=Ru({keyframes:[p.value,E(p.value)],velocity:jy(D,T,p.value),damping:o,stiffness:a,restDelta:d,restSpeed:m}))};return L(0),{calculatedDuration:null,next:T=>{let I=!1;return!F&&N===void 0&&(I=!0,A(T),L(T)),N!==void 0&&T>=N?F.next(T-N):(!I&&A(T),p)}}}function S1(n,e,t){const i=[],o=t||os.mix||Wy,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const h=Array.isArray(e)?e[c]||xi:e;u=hl(h,u)}i.push(u)}return i}function Yy(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if($u(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=S1(e,i,o),h=u.length,d=m=>{if(c&&m<n[0])return e[0];let v=0;if(h>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const p=rl(n[v],n[v+1],m);return u[v](p)};return t?m=>d(tr(n[0],n[a-1],m)):d}function E1(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=rl(0,e,i);n.push(Ut(t,1,o))}}function M1(n){const e=[0];return E1(e,n.length-1),e}function T1(n,e){return n.map(t=>t*e)}function w1(n,e){return n.map(()=>e||Iy).splice(0,n.length-1)}function el({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=Iw(i)?i.map(kv):kv(i),a={done:!1,value:e[0]},c=T1(t&&t.length===e.length?t:M1(e),n),u=Yy(c,e,{ease:Array.isArray(o)?o:w1(e,o)});return{calculatedDuration:n,next:h=>(a.value=u(h),a.done=h>=n,a)}}const A1=n=>n!==null;function qu(n,{repeat:e,repeatType:t="loop"},i,o=1){const a=n.filter(A1),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||i===void 0?a[u]:i}const b1={decay:Jh,inertia:Jh,tween:el,keyframes:el,spring:Ru};function $y(n){typeof n.type=="string"&&(n.type=b1[n.type])}class Cm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const C1=n=>n/100;class ol extends Cm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Bn.now()&&this.tick(Bn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;$y(e);const{type:t=el,repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const h=t||el;h!==el&&typeof u[0]!="number"&&(this.mixKeyframes=hl(C1,Wy(u[0],u[1])),u=[0,100]);const d=h({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...u].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=bm(d));const{calculatedDuration:m}=d;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=d}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:h}=this;if(this.startTime===null)return i.next(0);const{delay:d=0,keyframes:m,repeat:v,repeatType:p,repeatDelay:y,type:E,onUpdate:M,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-d*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let D=this.currentTime,A=i;if(v){const T=Math.min(this.currentTime,o)/u;let I=Math.floor(T),z=T%1;!z&&T>=1&&(z=1),z===1&&I--,I=Math.min(I,v+1),!!(I%2)&&(p==="reverse"?(z=1-z,y&&(z-=y/u)):p==="mirror"&&(A=c)),D=tr(0,1,z)*u}let N;R?(this.delayState.value=m[0],N=this.delayState):N=A.next(D),a&&!R&&(N.value=a(N.value));let{done:F}=N;!R&&h!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const L=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return L&&E!==Jh&&(N.value=qu(m,this.options,x,this.speed)),M&&M(N.value),L&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return vi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+vi(e)}get time(){return vi(this.currentTime)}set time(e){e=oi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return jy(i=>this.generator.next(i).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Bn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=vi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=d1,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Bn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function R1(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Os=n=>n*180/Math.PI,ep=n=>{const e=Os(Math.atan2(n[1],n[0]));return tp(e)},P1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:ep,rotateZ:ep,skewX:n=>Os(Math.atan(n[1])),skewY:n=>Os(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},tp=n=>(n=n%360,n<0&&(n+=360),n),Xv=ep,jv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Yv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),D1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jv,scaleY:Yv,scale:n=>(jv(n)+Yv(n))/2,rotateX:n=>tp(Os(Math.atan2(n[6],n[5]))),rotateY:n=>tp(Os(Math.atan2(-n[2],n[0]))),rotateZ:Xv,rotate:Xv,skewX:n=>Os(Math.atan(n[4])),skewY:n=>Os(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function np(n){return n.includes("scale")?1:0}function ip(n,e){if(!n||n==="none")return np(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(t)i=D1,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=P1,o=u}if(!o)return np(e);const a=i[e],c=o[1].split(",").map(N1);return typeof a=="function"?a(c):c[a]}const L1=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return ip(t,e)};function N1(n){return parseFloat(n.trim())}const ta=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],na=new Set([...ta,"pathRotation"]),$v=n=>n===ea||n===We,I1=new Set(["x","y","z"]),F1=ta.filter(n=>!I1.has(n));function U1(n){const e=[];return F1.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const is={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>ip(e,"x"),y:(n,{transform:e})=>ip(e,"y")};is.translateX=is.x;is.translateY=is.y;const Vs=new Set;let rp=!1,sp=!1,op=!1;function qy(){if(sp){const n=Array.from(Vs).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=U1(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))==null||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}sp=!1,rp=!1,Vs.forEach(n=>n.complete(op)),Vs.clear()}function Ky(){Vs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(sp=!0)})}function O1(){op=!0,Ky(),qy(),op=!1}class Rm{constructor(e,t,i,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Vs.add(this),rp||(rp=!0,It.read(Ky),It.resolveKeyframes(qy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&t){const u=i.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}R1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Vs.delete(this)}cancel(){this.state==="scheduled"&&(Vs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const k1=n=>n.startsWith("--");function Zy(n,e,t){k1(e)?n.style.setProperty(e,t):n.style[e]=t}const B1={};function Qy(n,e){const t=Ty(n);return()=>B1[e]??t()}const V1=Qy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Jy=Qy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ka=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,qv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ka([0,.65,.55,1]),circOut:Ka([.55,0,1,.45]),backIn:Ka([.31,.01,.66,-.59]),backOut:Ka([.33,1.53,.69,.99])};function eS(n,e){if(n)return typeof n=="function"?Jy()?Xy(n,e):"ease-out":Fy(n)?Ka(n):Array.isArray(n)?n.map(t=>eS(t,e)||qv.easeOut):qv[n]}function z1(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:h}={},d=void 0){const m={[e]:t};h&&(m.offset=h);const v=eS(u,o);Array.isArray(v)&&(m.easing=v);const p={delay:i,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return d&&(p.pseudoElement=d),n.animate(m,p)}function tS(n){return typeof n=="function"&&"applyToOptions"in n}function H1({type:n,...e}){return tS(n)&&Jy()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class nS extends Cm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:h}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,$u(typeof e.type!="string");const d=H1(e);this.animation=z1(t,i,o,d,a),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=qu(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(m),Zy(t,i,m),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(i=this.animation).commitStyles)==null||o.call(i))}get duration(){var t,i;const e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return vi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+vi(e)}get time(){return vi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=oi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:i,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&V1()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),i&&(this.animation.rangeEnd=i),xi):o(this)}}const iS={anticipate:Dy,backInOut:Py,circInOut:Ny};function G1(n){return n in iS}function W1(n){typeof n.ease=="string"&&G1(n.ease)&&(n.ease=iS[n.ease])}const qd=10;class X1 extends nS{constructor(e){W1(e),$y(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new ol({...c,autoplay:!1}),h=Math.max(qd,Bn.now()-this.startTime),d=tr(0,qd,h-qd),m=u.sample(h).value,{name:v}=this.options;a&&v&&Zy(a,v,m),t.setWithVelocity(u.sample(Math.max(0,h-d)).value,m,d),u.stop()}}const Kv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Fi.test(n)||n==="0")&&!n.startsWith("url("));function j1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function Y1(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=Kv(o,e),u=Kv(a,e);return!c||!u?!1:j1(n)||(t==="spring"||tS(t))&&i}function ap(n){n.duration=0,n.type="keyframes"}const rS=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),$1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function q1(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&$1.test(n[e]))return!0;return!1}const K1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Z1=Ty(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Q1(n){var v;const{motionValue:e,name:t,repeatDelay:i,repeatType:o,damping:a,type:c,keyframes:u}=n,h=(v=e==null?void 0:e.owner)==null?void 0:v.current;if(!(h instanceof HTMLElement)&&!(h instanceof SVGElement))return!1;const{onUpdate:d,transformTemplate:m}=e.owner.getProps();return Z1()&&t&&(rS.has(t)||K1.has(t)&&q1(u))&&(t!=="transform"||!m)&&!d&&!i&&o!=="mirror"&&a!==0&&c!=="inertia"}const J1=40;class eA extends Cm{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:h,motionValue:d,element:m,...v}){var E;super(),this.stop=()=>{var M,x;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=Bn.now();const p={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,name:h,motionValue:d,element:m,...v},y=(m==null?void 0:m.KeyframeResolver)||Rm;this.keyframeResolver=new y(u,(M,x,S)=>this.onKeyframesResolved(M,x,p,!S),h,d,m),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(e,t,i,o){var S,R;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:h,isHandoff:d,onUpdate:m}=i;this.resolvedAt=Bn.now();let v=!0;Y1(e,a,c,u)||(v=!1,(os.instantAnimations||!h)&&(m==null||m(qu(e,i,t))),e[0]=e[e.length-1],ap(i),i.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>J1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},E=v&&!d&&Q1(y),M=(R=(S=y.motionValue)==null?void 0:S.owner)==null?void 0:R.current;let x;if(E)try{x=new X1({...y,element:M})}catch{x=new ol(y)}else x=new ol(y);x.finished.then(()=>{this.notifyFinished()}).catch(xi),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),O1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function sS(n,e,t,i=0,o=1){const a=Array.from(n).sort((d,m)=>d.sortNodePosition(m)).indexOf(e),c=n.size,u=(c-1)*i;return typeof t=="function"?t(a,c):o===1?a*i:u-a*i}const Zv=30,tA=n=>!isNaN(parseFloat(n)),tl={current:void 0};class nA{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var a;const o=Bn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Bn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=tA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ym);const i=this.events[e].add(t);return e==="change"?()=>{i(),It.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return tl.current&&tl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Bn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Zv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Zv);return wy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Hs(n,e){return new nA(n,e)}function oS(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...i}=n;return{...e,...i}}return n}function Pm(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?oS(t,n):t}const iA={type:"spring",stiffness:500,damping:25,restSpeed:10},rA=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),sA={type:"keyframes",duration:.8},oA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},aA=(n,{keyframes:e})=>e.length>2?sA:na.has(n)?n.startsWith("scale")?rA(e[1]):iA:oA,lA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function cA(n){for(const e in n)if(!lA.has(e))return!0;return!1}const Dm=(n,e,t,i={},o,a)=>c=>{const u=Pm(i,n)||{},h=u.delay||i.delay||0;let{elapsed:d=0}=i;d=d-oi(h);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-d,onUpdate:p=>{e.set(p),u.onUpdate&&u.onUpdate(p)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};cA(u)||Object.assign(m,aA(n,m)),m.duration&&(m.duration=oi(m.duration)),m.repeatDelay&&(m.repeatDelay=oi(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(ap(m),m.delay===0&&(v=!0)),(os.instantAnimations||os.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(v=!0,ap(m),m.delay=0),m.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const p=qu(m.keyframes,u);if(p!==void 0){It.update(()=>{m.onUpdate(p),m.onComplete()});return}}return u.isSync?new ol(m):new eA(m)},uA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fA(n){const e=uA.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function aS(n,e,t=1){const[i,o]=fA(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return Sy(c)?parseFloat(c):c}return Mm(o)?aS(o,e,t+1):o}function Qv(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function Lm(n,e,t,i){if(typeof e=="function"){const[o,a]=Qv(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=Qv(i);e=e(t!==void 0?t:n.custom,o,a)}return e}function zs(n,e,t){const i=n.getProps();return Lm(i,e,t!==void 0?t:i.custom,n)}const lS=new Set(["width","height","top","left","right","bottom",...ta]),lp=n=>Array.isArray(n);function dA(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Hs(t))}function hA(n){return lp(n)?n[n.length-1]||0:n}function pA(n,e){const t=zs(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=hA(a[c]);dA(n,c,u)}}const hn=n=>!!(n&&n.getVelocity);function mA(n){return!!(hn(n)&&n.add)}function cp(n,e){const t=n.getValue("willChange");if(mA(t))return t.add(e);if(!t&&os.WillChange){const i=new os.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function Nm(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const gA="framerAppearId",cS="data-"+Nm(gA);function uS(n){return n.props[cS]}function vA({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function fS(n,e,{delay:t=0,transitionOverride:i,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const h=n.getDefaultTransition();a=a?oS(a,h):h;const d=a==null?void 0:a.reduceMotion,m=a==null?void 0:a.skipAnimations;i&&(a=i);const v=[],p=o&&n.animationState&&n.animationState.getState()[o],y=a==null?void 0:a.path;y&&y.animateVisualElement(n,u,a,t,v);for(const E in u){const M=n.getValue(E,n.latestValues[E]??null),x=u[E];if(x===void 0||p&&vA(p,E))continue;const S={delay:t,...Pm(a||{},E)};m&&(S.skipAnimations=!0);const R=M.get();if(R!==void 0&&!M.isAnimating()&&!Array.isArray(x)&&x===R&&!S.velocity){It.update(()=>M.set(x));continue}let D=!1;if(window.MotionHandoffAnimation){const F=uS(n);if(F){const L=window.MotionHandoffAnimation(F,E,It);L!==null&&(S.startTime=L,D=!0)}}cp(n,E);const A=d??n.shouldReduceMotion;M.start(Dm(E,M,x,A&&lS.has(E)?{type:!1}:S,n,D));const N=M.animation;N&&v.push(N)}if(c){const E=()=>It.update(()=>{c&&pA(n,c)});v.length?Promise.all(v).then(E):E()}return v}function up(n,e,t={}){var h;const i=zs(n,e,t.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(o=t.transitionOverride);const a=i?()=>Promise.all(fS(n,i,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:p}=o;return xA(n,e,d,m,v,p,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[d,m]=u==="beforeChildren"?[a,c]:[c,a];return d().then(()=>m())}else return Promise.all([a(),c(t.delay)])}function xA(n,e,t=0,i=0,o=0,a=1,c){const u=[];for(const h of n.variantChildren)h.notify("AnimationStart",e),u.push(up(h,e,{...c,delay:t+(typeof i=="function"?0:i)+sS(n.variantChildren,h,i,o,a)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(u)}function _A(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>up(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=up(n,e,t);else{const o=typeof e=="function"?zs(n,e,t.custom):e;i=Promise.all(fS(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const yA={test:n=>n==="auto",parse:n=>n},dS=n=>e=>e.test(n),hS=[ea,We,Qi,xr,Yw,jw,yA],Jv=n=>hS.find(dS(n));function SA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||My(n):!0}const EA=new Set(["brightness","contrast","saturate","opacity"]);function MA(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Tm)||[];if(!i)return n;const o=t.replace(i,"");let a=EA.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const TA=/\b([a-z-]*)\(.*?\)/gu,fp={...Fi,getAnimatableNone:n=>{const e=n.match(TA);return e?e.map(MA).join(" "):n}},dp={...Fi,getAnimatableNone:n=>{const e=Fi.parse(n);return Fi.createTransformer(n)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},ex={...ea,transform:Math.round},wA={rotate:xr,pathRotation:xr,rotateX:xr,rotateY:xr,rotateZ:xr,scale:bc,scaleX:bc,scaleY:bc,scaleZ:bc,skew:xr,skewX:xr,skewY:xr,distance:We,translateX:We,translateY:We,translateZ:We,x:We,y:We,z:We,perspective:We,transformPerspective:We,opacity:sl,originX:Vv,originY:Vv,originZ:We},Pu={borderWidth:We,borderTopWidth:We,borderRightWidth:We,borderBottomWidth:We,borderLeftWidth:We,borderRadius:We,borderTopLeftRadius:We,borderTopRightRadius:We,borderBottomRightRadius:We,borderBottomLeftRadius:We,width:We,maxWidth:We,height:We,maxHeight:We,top:We,right:We,bottom:We,left:We,inset:We,insetBlock:We,insetBlockStart:We,insetBlockEnd:We,insetInline:We,insetInlineStart:We,insetInlineEnd:We,padding:We,paddingTop:We,paddingRight:We,paddingBottom:We,paddingLeft:We,paddingBlock:We,paddingBlockStart:We,paddingBlockEnd:We,paddingInline:We,paddingInlineStart:We,paddingInlineEnd:We,margin:We,marginTop:We,marginRight:We,marginBottom:We,marginLeft:We,marginBlock:We,marginBlockStart:We,marginBlockEnd:We,marginInline:We,marginInlineStart:We,marginInlineEnd:We,fontSize:We,backgroundPositionX:We,backgroundPositionY:We,...wA,zIndex:ex,fillOpacity:sl,strokeOpacity:sl,numOctaves:ex},AA={...Pu,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:fp,WebkitFilter:fp,mask:dp,WebkitMask:dp},pS=n=>AA[n],bA=new Set([fp,dp]);function mS(n,e){let t=pS(n);return bA.has(t)||(t=Fi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const CA=new Set(["auto","none","0"]);function RA(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!CA.has(a)&&qo(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=mS(t,o)}class PA extends Rm{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let v=e[m];if(typeof v=="string"&&(v=v.trim(),Mm(v))){const p=aS(v,t.current);p!==void 0&&(e[m]=p),m===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!lS.has(i)||e.length!==2)return;const[o,a]=e,c=Jv(o),u=Jv(a),h=Bv(o),d=Bv(a);if(h!==d&&is[i]){this.needsMeasurement=!0;return}if(c!==u)if($v(c)&&$v(u))for(let m=0;m<e.length;m++){const v=e[m];typeof v=="string"&&(e[m]=parseFloat(v))}else is[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)(e[o]===null||SA(e[o]))&&i.push(o);i.length&&RA(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=is[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,c=i[a];i[a]=is[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([h,d])=>{e.getValue(h).set(d)}),this.resolveNoneKeyframes()}}const Im=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function gS(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const o=(t==null?void 0:t[n])??i.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(i=>i!=null)}const hp=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function uu(n){return Ey(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Fm}=Uy(queueMicrotask,!1),Di={x:!1,y:!1};function vS(){return Di.x||Di.y}function DA(n){return n==="x"||n==="y"?Di[n]?null:(Di[n]=!0,()=>{Di[n]=!1}):Di.x||Di.y?null:(Di.x=Di.y=!0,()=>{Di.x=Di.y=!1})}function xS(n,e){const t=gS(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function LA(n){return!(n.pointerType==="touch"||vS())}function NA(n,e,t={}){const[i,o,a]=xS(n,t);return i.forEach(c=>{let u=!1,h=!1,d;const m=()=>{c.removeEventListener("pointerleave",E)},v=x=>{d&&(d(x),d=void 0),m()},p=x=>{u=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),h&&(h=!1,v(x))},y=()=>{u=!0,window.addEventListener("pointerup",p,o),window.addEventListener("pointercancel",p,o)},E=x=>{if(x.pointerType!=="touch"){if(u){h=!0;return}v(x)}},M=x=>{if(!LA(x))return;h=!1;const S=e(c,x);typeof S=="function"&&(d=S,c.addEventListener("pointerleave",E,o))};c.addEventListener("pointerenter",M,o),c.addEventListener("pointerdown",y,o)}),a}const _S=(n,e)=>e?n===e?!0:_S(n,e.parentElement):!1,Um=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,IA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FA(n){return IA.has(n.tagName)||n.isContentEditable===!0}const UA=new Set(["INPUT","SELECT","TEXTAREA"]);function OA(n){return UA.has(n.tagName)||n.isContentEditable===!0}const fu=new WeakSet;function tx(n){return e=>{e.key==="Enter"&&n(e)}}function Kd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const kA=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=tx(()=>{if(fu.has(t))return;Kd(t,"down");const o=tx(()=>{Kd(t,"up")}),a=()=>Kd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function nx(n){return Um(n)&&!vS()}const ix=new WeakSet;function BA(n,e,t={}){const[i,o,a]=xS(n,t),c=u=>{const h=u.currentTarget;if(!nx(u)||ix.has(u))return;fu.add(h),t.stopPropagation&&ix.add(u);const d=e(h,u),m={...o,capture:!0},v=(E,M)=>{window.removeEventListener("pointerup",p,m),window.removeEventListener("pointercancel",y,m),fu.has(h)&&fu.delete(h),nx(E)&&typeof d=="function"&&d(E,{success:M})},p=E=>{v(E,h===window||h===document||t.useGlobalTarget||_S(h,E.target))},y=E=>{v(E,!1)};window.addEventListener("pointerup",p,m),window.addEventListener("pointercancel",y,m)};return i.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),uu(u)&&(u.addEventListener("focus",d=>kA(d,o)),!FA(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function Om(n){return Ey(n)&&"ownerSVGElement"in n}const du=new WeakMap;let es;const yS=(n,e,t)=>(i,o)=>o&&o[0]?o[0][n+"Size"]:Om(i)&&"getBBox"in i?i.getBBox()[e]:i[t],VA=yS("inline","width","offsetWidth"),zA=yS("block","height","offsetHeight");function HA({target:n,borderBoxSize:e}){var t;(t=du.get(n))==null||t.forEach(i=>{i(n,{get width(){return VA(n,e)},get height(){return zA(n,e)}})})}function GA(n){n.forEach(HA)}function WA(){typeof ResizeObserver>"u"||(es=new ResizeObserver(GA))}function XA(n,e){es||WA();const t=gS(n);return t.forEach(i=>{let o=du.get(i);o||(o=new Set,du.set(i,o)),o.add(e),es==null||es.observe(i)}),()=>{t.forEach(i=>{const o=du.get(i);o==null||o.delete(e),o!=null&&o.size||es==null||es.unobserve(i)})}}const hu=new Set;let Ho;function jA(){Ho=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};hu.forEach(e=>e(n))},window.addEventListener("resize",Ho)}function YA(n){return hu.add(n),Ho||jA(),()=>{hu.delete(n),!hu.size&&typeof Ho=="function"&&(window.removeEventListener("resize",Ho),Ho=void 0)}}function rx(n,e){return typeof n=="function"?YA(n):XA(n,e)}function $A(n){return Om(n)&&n.tagName==="svg"}function qA(...n){const e=!Array.isArray(n[0]),t=e?0:-1,i=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=Yy(o,a,c);return e?u(i):u}function KA(n,e,t={}){const i=n.get();let o=null,a=i,c;const u=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,h=()=>{o&&(o.stop(),o=null),n.animation=void 0},d=()=>{const v=sx(n.get()),p=sx(a);if(v===p){h();return}const y=o?o.getGeneratorVelocity():n.getVelocity();h(),o=new ol({keyframes:[v,p],velocity:y,type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c})},m=()=>{var v;d(),n.animation=o??void 0,(v=n.events.animationStart)==null||v.notify(),o==null||o.then(()=>{var p;n.animation=void 0,(p=n.events.animationComplete)==null||p.notify()})};if(n.attach((v,p)=>{a=v,c=y=>p(Zd(y,u)),It.postRender(m)},h),hn(e)){let v=t.skipInitialAnimation===!0;const p=e.on("change",E=>{v?(v=!1,n.jump(Zd(E,u),!1)):n.set(Zd(E,u))}),y=n.on("destroy",p);return()=>{p(),y()}}return h}function Zd(n,e){return e?n+e:n}function sx(n){return typeof n=="number"?n:parseFloat(n)}const ZA=[...hS,cn,Fi],QA=n=>ZA.find(dS(n)),ox=()=>({translate:0,scale:1,origin:0,originPoint:0}),Go=()=>({x:ox(),y:ox()}),ax=()=>({min:0,max:0}),dn=()=>({x:ax(),y:ax()}),JA=new WeakMap;function Ku(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function al(n){return typeof n=="string"||Array.isArray(n)}const km=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bm=["initial",...km];function Zu(n){return Ku(n.animate)||Bm.some(e=>al(n[e]))}function SS(n){return!!(Zu(n)||n.variants)}function eb(n,e,t){for(const i in e){const o=e[i],a=t[i];if(hn(o))n.addValue(i,o);else if(hn(a))n.addValue(i,Hs(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,Hs(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const pp={current:null},ES={current:!1},tb=typeof window<"u";function nb(){if(ES.current=!0,!!tb)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>pp.current=n.matches;n.addEventListener("change",e),e()}else pp.current=!1}const lx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Du={};function MS(n){Du=n}function ib(){return Du}class rb{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Rm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Bn.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,It.render(this.render,!1,!0))};const{latestValues:d,renderState:m}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=Zu(t),this.isVariantNode=SS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in p){const E=p[y];d[y]!==void 0&&hn(E)&&E.set(d[y])}}mount(e){var t,i;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,JA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(ES.current||nb(),this.shouldReduceMotion=pp.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Tr(this.notifyUpdate),Tr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&rS.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:h,ease:d,duration:m}=t.accelerate,v=new nS({element:this.current,name:e,keyframes:u,times:h,ease:d,duration:oi(m)}),p=c(v);this.valueSubscriptions.set(e,()=>{p(),v.cancel()});return}const i=na.has(e);i&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&It.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Du){const t=Du[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<lx.length;i++){const o=lx[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=eb(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Hs(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Sy(i)||My(i))?i=parseFloat(i):!QA(i)&&Fi.test(t)&&(i=mS(e,t)),this.setBaseTarget(e,hn(i)?i.get():i)),hn(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const c=Lm(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(i=c[e])}if(t&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!hn(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ym),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Fm.render(this.render)}}class TS extends rb{constructor(){super(...arguments),this.KeyframeResolver=PA}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;hn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ls{constructor(e){this.isMounted=!1,this.node=e}update(){}}function wS({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function sb({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function ob(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Qd(n){return n===void 0||n===1}function mp({scale:n,scaleX:e,scaleY:t}){return!Qd(n)||!Qd(e)||!Qd(t)}function Ls(n){return mp(n)||AS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function AS(n){return cx(n.x)||cx(n.y)}function cx(n){return n&&n!=="0%"}function Lu(n,e,t){const i=n-t,o=e*i;return t+o}function ux(n,e,t,i,o){return o!==void 0&&(n=Lu(n,o,i)),Lu(n,t,i)+e}function gp(n,e=0,t=1,i,o){n.min=ux(n.min,e,t,i,o),n.max=ux(n.max,e,t,i,o)}function bS(n,{x:e,y:t}){gp(n.x,e.translate,e.scale,e.originPoint),gp(n.y,t.translate,t.scale,t.originPoint)}const fx=.999999999999,dx=1.0000000000001;function ab(n,e,t,i=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let h=0;h<o;h++){a=t[h],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Yi(n.x,-a.scroll.offset.x),Yi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,bS(n,c)),i&&Ls(a.latestValues)&&pu(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<dx&&e.x>fx&&(e.x=1),e.y<dx&&e.y>fx&&(e.y=1)}function Yi(n,e){n.min+=e,n.max+=e}function hx(n,e,t,i,o=.5){const a=Ut(n.min,n.max,o);gp(n,e,t,a,i)}function px(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function pu(n,e,t){const i=t??n;hx(n.x,px(e.x,i.x),e.scaleX,e.scale,e.originX),hx(n.y,px(e.y,i.y),e.scaleY,e.scale,e.originY)}function CS(n,e){return wS(ob(n.getBoundingClientRect(),e))}function lb(n,e,t){const i=CS(n,t),{scroll:o}=e;return o&&(Yi(i.x,o.offset.x),Yi(i.y,o.offset.y)),i}const cb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ub=ta.length;function fb(n,e,t){let i="",o=!0;for(let c=0;c<ub;c++){const u=ta[c],h=n[u];if(h===void 0)continue;let d=!0;if(typeof h=="number")d=h===(u.startsWith("scale")?1:0);else{const m=parseFloat(h);d=u.startsWith("scale")?m===1:m===0}if(!d||t){const m=hp(h,Pu[u]);if(!d){o=!1;const v=cb[u]||u;i+=`${v}(${m}) `}t&&(e[u]=m)}}const a=n.pathRotation;return a&&(o=!1,i+=`rotate(${hp(a,Pu.pathRotation)}) `),i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function Vm(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const h in e){const d=e[h];if(na.has(h)){c=!0;continue}else if(ky(h)){o[h]=d;continue}else{const m=hp(d,Pu[h]);h.startsWith("origin")?(u=!0,a[h]=m):i[h]=m}}if(e.transform||(c||t?i.transform=fb(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:h="50%",originY:d="50%",originZ:m=0}=a;i.transformOrigin=`${h} ${d} ${m}`}}function RS(n,{style:e,vars:t},i,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,i);for(c in t)a.setProperty(c,t[c])}function mx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const za={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(We.test(n))n=parseFloat(n);else return n;const t=mx(n,e.target.x),i=mx(n,e.target.y);return`${t}% ${i}%`}},db={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=Fi.parse(n);if(o.length>5)return i;const a=Fi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,h=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=h;const d=Ut(u,h,.5);return typeof o[2+c]=="number"&&(o[2+c]/=d),typeof o[3+c]=="number"&&(o[3+c]/=d),a(o)}},vp={borderRadius:{...za,applyTo:[...Im]},borderTopLeftRadius:za,borderTopRightRadius:za,borderBottomLeftRadius:za,borderBottomRightRadius:za,boxShadow:db};function PS(n,{layout:e,layoutId:t}){return na.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!vp[n]||n==="opacity")}function zm(n,e,t){var c;const i=n.style,o=e==null?void 0:e.style,a={};if(!i)return a;for(const u in i)(hn(i[u])||o&&hn(o[u])||PS(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=i[u]);return a}function hb(n){return window.getComputedStyle(n)}class pb extends TS{constructor(){super(...arguments),this.type="html",this.renderInstance=RS}mount(e){$u(!!e.style),super.mount(e)}readValueFromInstance(e,t){var i;if(na.has(t))return(i=this.projection)!=null&&i.isProjecting?np(t):L1(e,t);{const o=hb(e),a=(ky(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return CS(e,t)}build(e,t,i){Vm(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return zm(e,t,i)}}const mb={offset:"stroke-dashoffset",array:"stroke-dasharray"},gb={offset:"strokeDashoffset",array:"strokeDasharray"};function vb(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?mb:gb;n[a.offset]=`${-i}`,n[a.array]=`${e} ${t}`}const xb=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function DS(n,{attrX:e,attrY:t,attrScale:i,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},h,d,m){if(Vm(n,u,d),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:p}=n;v.transform&&(p.transform=v.transform,delete v.transform),(p.transform||v.transformOrigin)&&(p.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),p.transform&&(p.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete v.transformBox);for(const y of xb)v[y]!==void 0&&(p[y]=v[y],delete v[y]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),i!==void 0&&(v.scale=i),o!==void 0&&vb(v,o,a,c,!1)}const LS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),NS=n=>typeof n=="string"&&n.toLowerCase()==="svg";function _b(n,e,t,i){RS(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(LS.has(o)?o:Nm(o),e.attrs[o])}function IS(n,e,t){const i=zm(n,e,t);for(const o in n)if(hn(n[o])||hn(e[o])){const a=ta.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}class yb extends TS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(na.has(t)){const i=pS(t);return i&&i.default||0}return t=LS.has(t)?t:Nm(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return IS(e,t,i)}build(e,t,i){DS(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,o){_b(e,t,i,o)}mount(e){this.isSVGTag=NS(e.tagName),super.mount(e)}}const Sb=Bm.length;function FS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?FS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Sb;t++){const i=Bm[t],o=n.props[i];(al(o)||o===!1)&&(e[i]=o)}return e}function US(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const Eb=[...km].reverse(),Mb=km.length;function Tb(n){return e=>Promise.all(e.map(({animation:t,options:i})=>_A(n,t,i)))}function wb(n){let e=Tb(n),t=gx(),i=!0,o=!1;const a=d=>(m,v)=>{var y;const p=zs(n,v,d==="exit"?(y=n.presenceContext)==null?void 0:y.custom:void 0);if(p){const{transition:E,transitionEnd:M,...x}=p;m={...m,...x,...M}}return m};function c(d){e=d(n)}function u(d){const{props:m}=n,v=FS(n.parent)||{},p=[],y=new Set;let E={},M=1/0;for(let S=0;S<Mb;S++){const R=Eb[S],D=t[R],A=m[R]!==void 0?m[R]:v[R],N=al(A),F=R===d?D.isActive:null;F===!1&&(M=S);let L=A===v[R]&&A!==m[R]&&N;if(L&&(i||o)&&n.manuallyAnimateOnMount&&(L=!1),D.protectedKeys={...E},!D.isActive&&F===null||!A&&!D.prevProp||Ku(A)||typeof A=="boolean")continue;if(R==="exit"&&D.isActive&&F!==!0){D.prevResolvedValues&&(E={...E,...D.prevResolvedValues});continue}const T=Ab(D.prevProp,A);let I=T||R===d&&D.isActive&&!L&&N||S>M&&N,z=!1;const V=Array.isArray(A)?A:[A];let j=V.reduce(a(R),{});F===!1&&(j={});const{prevResolvedValues:re={}}=D,de={...re,...j},Z=G=>{I=!0,y.has(G)&&(z=!0,y.delete(G)),D.needsAnimating[G]=!0;const ee=n.getValue(G);ee&&(ee.liveStyle=!1)};for(const G in de){const ee=j[G],se=re[G];if(E.hasOwnProperty(G))continue;let O=!1;lp(ee)&&lp(se)?O=!US(ee,se)||T:O=ee!==se,O?ee!=null?Z(G):y.add(G):ee!==void 0&&y.has(G)?Z(G):D.protectedKeys[G]=!0}D.prevProp=A,D.prevResolvedValues=j,D.isActive&&(E={...E,...j}),(i||o)&&n.blockInitialAnimation&&(I=!1);const H=L&&T;I&&(!H||z)&&p.push(...V.map(G=>{const ee={type:R};if(typeof G=="string"&&(i||o)&&!H&&n.manuallyAnimateOnMount&&n.parent){const{parent:se}=n,O=zs(se,G);if(se.enteringChildren&&O){const{delayChildren:Q}=O.transition||{};ee.delay=sS(se.enteringChildren,n,Q)}}return{animation:G,options:ee}}))}if(y.size){const S={};if(typeof m.initial!="boolean"){const R=zs(n,Array.isArray(m.initial)?m.initial[0]:m.initial);R&&R.transition&&(S.transition=R.transition)}y.forEach(R=>{const D=n.getBaseTarget(R),A=n.getValue(R);A&&(A.liveStyle=!0),S[R]=D??null}),p.push({animation:S})}let x=!!p.length;return i&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(x=!1),i=!1,o=!1,x?e(p):Promise.resolve()}function h(d,m){var p;if(t[d].isActive===m)return Promise.resolve();(p=n.variantChildren)==null||p.forEach(y=>{var E;return(E=y.animationState)==null?void 0:E.setActive(d,m)}),t[d].isActive=m;const v=u(d);for(const y in t)t[y].protectedKeys={};return v}return{animateChanges:u,setActive:h,setAnimateFunction:c,getState:()=>t,reset:()=>{t=gx(),o=!0}}}function Ab(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!US(e,n):!1}function bs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gx(){return{animate:bs(!0),whileInView:bs(),whileHover:bs(),whileTap:bs(),whileDrag:bs(),whileFocus:bs(),exit:bs()}}function xp(n,e){n.min=e.min,n.max=e.max}function bi(n,e){xp(n.x,e.x),xp(n.y,e.y)}function vx(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const OS=1e-4,bb=1-OS,Cb=1+OS,kS=.01,Rb=0-kS,Pb=0+kS;function Vn(n){return n.max-n.min}function Db(n,e,t){return Math.abs(n-e)<=t}function xx(n,e,t,i=.5){n.origin=i,n.originPoint=Ut(e.min,e.max,n.origin),n.scale=Vn(t)/Vn(e),n.translate=Ut(t.min,t.max,n.origin)-n.originPoint,(n.scale>=bb&&n.scale<=Cb||isNaN(n.scale))&&(n.scale=1),(n.translate>=Rb&&n.translate<=Pb||isNaN(n.translate))&&(n.translate=0)}function nl(n,e,t,i){xx(n.x,e.x,t.x,i?i.originX:void 0),xx(n.y,e.y,t.y,i?i.originY:void 0)}function _x(n,e,t,i=0){const o=i?Ut(t.min,t.max,i):t.min;n.min=o+e.min,n.max=n.min+Vn(e)}function Lb(n,e,t,i){_x(n.x,e.x,t.x,i==null?void 0:i.x),_x(n.y,e.y,t.y,i==null?void 0:i.y)}function yx(n,e,t,i=0){const o=i?Ut(t.min,t.max,i):t.min;n.min=e.min-o,n.max=n.min+Vn(e)}function Nu(n,e,t,i){yx(n.x,e.x,t.x,i==null?void 0:i.x),yx(n.y,e.y,t.y,i==null?void 0:i.y)}function Sx(n,e,t,i,o){return n-=e,n=Lu(n,1/t,i),o!==void 0&&(n=Lu(n,1/o,i)),n}function Nb(n,e=0,t=1,i=.5,o,a=n,c=n){if(Qi.test(e)&&(e=parseFloat(e),e=Ut(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Ut(a.min,a.max,i);n===a&&(u-=e),n.min=Sx(n.min,e,t,u,o),n.max=Sx(n.max,e,t,u,o)}function Ex(n,e,[t,i,o],a,c){Nb(n,e[t],e[i],e[o],e.scale,a,c)}const Ib=["x","scaleX","originX"],Fb=["y","scaleY","originY"];function Mx(n,e,t,i){Ex(n.x,e,Ib,t?t.x:void 0,i?i.x:void 0),Ex(n.y,e,Fb,t?t.y:void 0,i?i.y:void 0)}function Tx(n){return n.translate===0&&n.scale===1}function BS(n){return Tx(n.x)&&Tx(n.y)}function wx(n,e){return n.min===e.min&&n.max===e.max}function Ub(n,e){return wx(n.x,e.x)&&wx(n.y,e.y)}function Ax(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function VS(n,e){return Ax(n.x,e.x)&&Ax(n.y,e.y)}function bx(n){return Vn(n.x)/Vn(n.y)}function Cx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function ji(n){return[n("x"),n("y")]}function Ob(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:d,rotate:m,pathRotation:v,rotateX:p,rotateY:y,skewX:E,skewY:M}=t;d&&(i=`perspective(${d}px) ${i}`),m&&(i+=`rotate(${m}deg) `),v&&(i+=`rotate(${v}deg) `),p&&(i+=`rotateX(${p}deg) `),y&&(i+=`rotateY(${y}deg) `),E&&(i+=`skewX(${E}deg) `),M&&(i+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,h=n.y.scale*e.y;return(u!==1||h!==1)&&(i+=`scale(${u}, ${h})`),i||"none"}const kb=Im.length,Rx=n=>typeof n=="string"?parseFloat(n):n,Px=n=>typeof n=="number"||We.test(n);function Bb(n,e,t,i,o,a){o?(n.opacity=Ut(0,t.opacity??1,Vb(i)),n.opacityExit=Ut(e.opacity??1,0,zb(i))):a&&(n.opacity=Ut(e.opacity??1,t.opacity??1,i));for(let c=0;c<kb;c++){const u=Im[c];let h=Dx(e,u),d=Dx(t,u);if(h===void 0&&d===void 0)continue;h||(h=0),d||(d=0),h===0||d===0||Px(h)===Px(d)?(n[u]=Math.max(Ut(Rx(h),Rx(d),i),0),(Qi.test(d)||Qi.test(h))&&(n[u]+="%")):n[u]=d}(e.rotate||t.rotate)&&(n.rotate=Ut(e.rotate||0,t.rotate||0,i))}function Dx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Vb=zS(0,.5,Ly),zb=zS(.5,.95,xi);function zS(n,e,t){return i=>i<n?0:i>e?1:t(rl(n,e,i))}function Hb(n,e,t){const i=hn(n)?n:Hs(n);return i.start(Dm("",i,e,t)),i.animation}function ll(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}const Gb=(n,e)=>n.depth-e.depth;class Wb{constructor(){this.children=[],this.isDirty=!1}add(e){_m(this.children,e),this.isDirty=!0}remove(e){Au(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Gb),this.isDirty=!1,this.children.forEach(e)}}function Xb(n,e){const t=Bn.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(Tr(i),n(a-e))};return It.setup(i,!0),()=>Tr(i)}function mu(n){return hn(n)?n.get():n}class jb{constructor(){this.members=[]}add(e){_m(this.members,e);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;const o=i.instance;(!o||o.isConnected===!1)&&!i.snapshot&&(Au(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(Au(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let i=this.members.indexOf(e)-1;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=i.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,i,o,a,c;(i=(t=e.options).onExitComplete)==null||i.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const gu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Jd=["","X","Y","Z"],Yb=1e3;let $b=0;function eh(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function HS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=uS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",It,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&HS(i)}function GS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=$b++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Zb),this.nodes.forEach(iC),this.nodes.forEach(rC),this.nodes.forEach(Qb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new Wb)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new ym),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const h=this.eventHandlers.get(c);h&&h.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Om(c)&&!$A(c),this.instance=c;const{layoutId:u,layout:h,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||u)&&(this.isLayoutDirty=!0),n){let m,v=0;const p=()=>this.root.updateBlockedByResize=!1;It.read(()=>{v=window.innerWidth}),n(c,()=>{const y=window.innerWidth;y!==v&&(v=y,this.root.updateBlockedByResize=!0,m&&m(),m=Xb(p,250),gu.hasAnimatedSinceResize&&(gu.hasAnimatedSinceResize=!1,this.nodes.forEach(Ix)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||d.getDefaultTransition()||cC,{onLayoutAnimationStart:M,onLayoutAnimationComplete:x}=d.getProps(),S=!this.targetLayout||!VS(this.targetLayout,y),R=!v&&p;if(this.options.layoutRoot||this.resumeFrom||R||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...Pm(E,"layout"),onPlay:M,onComplete:x};(d.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(m,R,D.path)}else v||Ix(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Tr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sC),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&HS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:h}=this.options;if(u===void 0&&!h)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const h=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),h&&this.nodes.forEach(eC),this.nodes.forEach(Lx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Nx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(tC),this.nodes.forEach(nC),this.nodes.forEach(qb),this.nodes.forEach(Kb)):this.nodes.forEach(Nx),this.clearAllSnapshots();const u=Bn.now();Tn.delta=tr(0,1e3/60,u-Tn.timestamp),Tn.timestamp=u,Tn.isProcessing=!0,Wd.update.process(Tn),Wd.preRender.process(Tn),Wd.render.process(Tn),Tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Jb),this.sharedNodes.forEach(oC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,It.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){It.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=dn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const h=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!BS(this.projectionDelta),h=this.getTransformTemplate(),d=h?h(this.latestValues,""):void 0,m=d!==this.prevTransformTemplateValue;c&&this.instance&&(u||Ls(this.latestValues)||m)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let h=this.removeElementScroll(u);return c&&(h=this.removeTransform(h)),uC(h),{animationId:this.root.animationId,measuredBox:u,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:c}=this.options;if(!c)return dn();const u=c.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(fC))){const{scroll:m}=this.root;m&&(Yi(u.x,m.offset.x),Yi(u.y,m.offset.y))}return u}removeElementScroll(c){var h;const u=dn();if(bi(u,c),(h=this.scroll)!=null&&h.wasRoot)return u;for(let d=0;d<this.path.length;d++){const m=this.path[d],{scroll:v,options:p}=m;m!==this.root&&v&&p.layoutScroll&&(v.wasRoot&&bi(u,c),Yi(u.x,v.offset.x),Yi(u.y,v.offset.y))}return u}applyTransform(c,u=!1,h){var m,v;const d=h||dn();bi(d,c);for(let p=0;p<this.path.length;p++){const y=this.path[p];!u&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(Yi(d.x,-y.scroll.offset.x),Yi(d.y,-y.scroll.offset.y)),Ls(y.latestValues)&&pu(d,y.latestValues,(m=y.layout)==null?void 0:m.layoutBox)}return Ls(this.latestValues)&&pu(d,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),d}removeTransform(c){var h;const u=dn();bi(u,c);for(let d=0;d<this.path.length;d++){const m=this.path[d];if(!Ls(m.latestValues))continue;let v;m.instance&&(mp(m.latestValues)&&m.updateSnapshot(),v=dn(),bi(v,m.measurePageBox())),Mx(u,m.latestValues,(h=m.snapshot)==null?void 0:h.layoutBox,v)}return Ls(this.latestValues)&&Mx(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var y;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==u;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=Tn.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=dn(),this.targetWithTransforms=dn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Lb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):bi(this.target,this.layout.layoutBox),bS(this.target,this.targetDelta)):bi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||mp(this.parent.latestValues)||AS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,h){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dn(),this.relativeTargetOrigin=dn(),Nu(this.relativeTargetOrigin,u,h,this.options.layoutAnchor||void 0),bi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var E;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(h=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Tn.timestamp&&(h=!1),h)return;const{layout:d,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||m))return;bi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,p=this.treeScale.y;ab(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=dn());const{target:y}=c;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vx(this.prevProjectionDelta.x,this.projectionDelta.x),vx(this.prevProjectionDelta.y,this.projectionDelta.y)),nl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==p||!Cx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Cx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Go(),this.projectionDelta=Go(),this.projectionDeltaWithTransform=Go()}setAnimationOrigin(c,u=!1,h){const d=this.snapshot,m=d?d.latestValues:{},v={...this.latestValues},p=Go();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const y=dn(),E=d?d.source:void 0,M=this.layout?this.layout.source:void 0,x=E!==M,S=this.getStack(),R=!S||S.members.length<=1,D=!!(x&&!R&&this.options.crossfade===!0&&!this.path.some(lC));this.animationProgress=0;let A;const N=h==null?void 0:h.interpolateProjection(c);this.mixTargetDelta=F=>{const L=F/1e3,T=N==null?void 0:N(L);T?(p.x.translate=T.x,p.x.scale=Ut(c.x.scale,1,L),p.x.origin=c.x.origin,p.x.originPoint=c.x.originPoint,p.y.translate=T.y,p.y.scale=Ut(c.y.scale,1,L),p.y.origin=c.y.origin,p.y.originPoint=c.y.originPoint):(Fx(p.x,c.x,L),Fx(p.y,c.y,L)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nu(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),aC(this.relativeTarget,this.relativeTargetOrigin,y,L),A&&Ub(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=dn()),bi(A,this.relativeTarget)),x&&(this.animationValues=v,Bb(v,m,this.latestValues,L,D,R)),T&&T.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=T.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,h,d;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(d=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||d.stop(),this.pendingAnimation&&(Tr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=It.update(()=>{gu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Hs(0)),this.motionValue.jump(0,!1),this.currentAnimation=Hb(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),c.onUpdate&&c.onUpdate(m)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:h,layout:d,latestValues:m}=c;if(!(!u||!h||!d)){if(this!==c&&this.layout&&d&&WS(this.options.animationType,this.layout.layoutBox,d.layoutBox)){h=this.target||dn();const v=Vn(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+v;const p=Vn(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+p}bi(u,h),pu(u,m),nl(this.projectionDeltaWithTransform,this.layoutCorrected,u,m)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new jb),this.sharedNodes.get(c).add(u);const d=u.options.initialPromotionConfig;u.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:h}={}){const d=this.getStack();d&&d.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(u=!0),!u)return;const d={};h.z&&eh("z",c,d,this.animationValues);for(let m=0;m<Jd.length;m++)eh(`rotate${Jd[m]}`,c,d,this.animationValues),eh(`skew${Jd[m]}`,c,d,this.animationValues);c.render();for(const m in d)c.setStaticValue(m,d[m]),this.animationValues&&(this.animationValues[m]=d[m]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=mu(u==null?void 0:u.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=mu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ls(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=d.animationValues||d.latestValues;this.applyTransformsToTarget();let v=Ob(this.projectionDeltaWithTransform,this.treeScale,m);h&&(v=h(m,v)),c.transform=v;const{x:p,y}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,d.animationValues?c.opacity=d===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=d===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const E in vp){if(m[E]===void 0)continue;const{correct:M,applyTo:x,isCSSVariable:S}=vp[E],R=v==="none"?m[E]:M(m[E],d);if(x){const D=x.length;for(let A=0;A<D;A++)c[x[A]]=R}else S?this.options.visualElement.renderState.vars[E]=R:c[E]=R}this.options.layoutId&&(c.pointerEvents=d===this?mu(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(Lx),this.root.sharedNodes.clear()}}}function qb(n){n.updateLayout()}function Kb(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")ji(v=>{const p=c?e.measuredBox[v]:e.layoutBox[v],y=Vn(p);p.min=i[v].min,p.max=p.min+y});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";xp(c?e.measuredBox[v]:e.layoutBox[v],i[v])}else WS(a,e.layoutBox,i)&&ji(v=>{const p=c?e.measuredBox[v]:e.layoutBox[v],y=Vn(i[v]);p.max=p.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const u=Go();nl(u,i,e.layoutBox);const h=Go();c?nl(h,n.applyTransform(o,!0),e.measuredBox):nl(h,i,e.layoutBox);const d=!BS(u);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:p,layout:y}=v;if(p&&y){const E=n.options.layoutAnchor||void 0,M=dn();Nu(M,e.layoutBox,p.layoutBox,E);const x=dn();Nu(x,i,y.layoutBox,E),VS(M,x)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=x,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:h,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function Zb(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Qb(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Jb(n){n.clearSnapshot()}function Lx(n){n.clearMeasurements()}function eC(n){n.isLayoutDirty=!0,n.updateLayout()}function Nx(n){n.isLayoutDirty=!1}function tC(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function nC(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ix(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function iC(n){n.resolveTargetDelta()}function rC(n){n.calcProjection()}function sC(n){n.resetSkewAndRotation()}function oC(n){n.removeLeadSnapshot()}function Fx(n,e,t){n.translate=Ut(e.translate,0,t),n.scale=Ut(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Ux(n,e,t,i){n.min=Ut(e.min,t.min,i),n.max=Ut(e.max,t.max,i)}function aC(n,e,t,i){Ux(n.x,e.x,t.x,i),Ux(n.y,e.y,t.y,i)}function lC(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const cC={duration:.45,ease:[.4,0,.1,1]},Ox=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),kx=Ox("applewebkit/")&&!Ox("chrome/")?Math.round:xi;function Bx(n){n.min=kx(n.min),n.max=kx(n.max)}function uC(n){Bx(n.x),Bx(n.y)}function WS(n,e,t){return n==="position"||n==="preserve-aspect"&&!Db(bx(e),bx(t),.2)}function fC(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const dC=GS({attachResizeListener:(n,e)=>ll(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),th={current:void 0},XS=GS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!th.current){const n=new dC({});n.mount(window),n.setOptions({layoutScroll:!0}),th.current=n}return th.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),gl=k.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Vx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function hC(...n){return e=>{let t=!1;const i=n.map(o=>{const a=Vx(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():Vx(n[o],null)}}}}function pC(...n){return k.useCallback(hC(...n),n)}class mC extends k.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(uu(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=t.offsetParent,o=uu(i)&&i.offsetWidth||0,a=uu(i)&&i.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function gC({children:n,isPresent:e,anchorX:t,anchorY:i,root:o,pop:a}){var p;const c=k.useId(),u=k.useRef(null),h=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:d}=k.useContext(gl),m=a!==!1?((p=n.props)==null?void 0:p.ref)??(n==null?void 0:n.ref):void 0,v=pC(u,m);return k.useInsertionEffect(()=>{const{width:y,height:E,top:M,left:x,right:S,bottom:R,direction:D}=h.current;if(e||a===!1||!u.current||!y||!E)return;const A=D==="rtl",N=t==="left"?A?`right: ${S}`:`left: ${x}`:A?`left: ${x}`:`right: ${S}`,F=i==="bottom"?`bottom: ${R}`:`top: ${M}`;u.current.dataset.motionPopId=c;const L=document.createElement("style");d&&(L.nonce=d);const T=o??document.head;return T.appendChild(L),L.sheet&&L.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${E}px !important;
            ${N}px !important;
            ${F}px !important;
          }
        `),()=>{var I;(I=u.current)==null||I.removeAttribute("data-motion-pop-id"),T.contains(L)&&T.removeChild(L)}},[e]),P.jsx(mC,{isPresent:e,childRef:u,sizeRef:h,pop:a,children:a===!1?n:k.cloneElement(n,{ref:v})})}const vC=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:h,root:d})=>{const m=dl(xC),v=k.useId(),p=k.useRef(t),y=k.useRef(i);ju(()=>{p.current=t,y.current=i});let E=!0,M=k.useMemo(()=>(E=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:x=>{m.set(x,!0);for(const S of m.values())if(!S)return;i&&i()},register:x=>(m.set(x,!1),()=>{var S;m.delete(x),!p.current&&!m.size&&((S=y.current)==null||S.call(y))})}),[t,m,i]);return a&&E&&(M={...M}),k.useMemo(()=>{m.forEach((x,S)=>m.set(S,!1))},[t]),k.useEffect(()=>{!t&&!m.size&&i&&i()},[t]),n=P.jsx(gC,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:h,root:d,children:n}),P.jsx(Yu.Provider,{value:M,children:n})};function xC(){return new Map}function jS(n=!0){const e=k.useContext(Yu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=k.useId();k.useEffect(()=>{if(n)return o(a)},[n]);const c=k.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const Cc=n=>n.key||"";function zx(n){const e=[];return k.Children.forEach(n,t=>{k.isValidElement(t)&&e.push(t)}),e}const _p=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:h="top",root:d})=>{const[m,v]=jS(c),p=k.useMemo(()=>zx(n),[n]),y=c&&!m?[]:p.map(Cc),E=k.useRef(!0),M=k.useRef(p),x=dl(()=>new Map),S=k.useRef(new Set),[R,D]=k.useState(p),[A,N]=k.useState(p);ju(()=>{E.current=!1,M.current=p;for(let T=0;T<A.length;T++){const I=Cc(A[T]);y.includes(I)?(x.delete(I),S.current.delete(I)):x.get(I)!==!0&&x.set(I,!1)}},[A,y.length,y.join("-")]);const F=[];if(p!==R){let T=[...p];for(let I=0;I<A.length;I++){const z=A[I],V=Cc(z);y.includes(V)||(T.splice(I,0,z),F.push(z))}return a==="wait"&&F.length&&(T=F),N(zx(T)),D(p),null}const{forceRender:L}=k.useContext(xm);return P.jsx(P.Fragment,{children:A.map(T=>{const I=Cc(T),z=c&&!m?!1:p===A||y.includes(I),V=()=>{if(S.current.has(I))return;if(x.has(I))S.current.add(I),x.set(I,!0);else return;let j=!0;x.forEach(re=>{re||(j=!1)}),j&&(L==null||L(),N(M.current),c&&(v==null||v()),i&&i())};return P.jsx(vC,{isPresent:z,initial:!E.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:d,onExitComplete:z?void 0:V,anchorX:u,anchorY:h,children:T},I)})})},YS=k.createContext({strict:!1}),Hx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Gx=!1;function _C(){if(Gx)return;const n={};for(const e in Hx)n[e]={isEnabled:t=>Hx[e].some(i=>!!t[i])};MS(n),Gx=!0}function $S(){return _C(),ib()}function yC(n){const e=$S();for(const t in n)e[t]={...e[t],...n[t]};MS(e)}const SC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Iu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||SC.has(n)}let qS=n=>!Iu(n);function EC(n){typeof n=="function"&&(qS=e=>e.startsWith("on")?!Iu(e):n(e))}try{EC(require("@emotion/is-prop-valid").default)}catch{}function MC(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||hn(n[o])||(qS(o)||t===!0&&Iu(o)||!e&&!Iu(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}const Qu=k.createContext({});function TC(n,e){if(Zu(n)){const{initial:t,animate:i}=n;return{initial:t===!1||al(t)?t:void 0,animate:al(i)?i:void 0}}return n.inherit!==!1?e:{}}function wC(n){const{initial:e,animate:t}=TC(n,k.useContext(Qu));return k.useMemo(()=>({initial:e,animate:t}),[Wx(e),Wx(t)])}function Wx(n){return Array.isArray(n)?n.join(" "):n}const Hm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function KS(n,e,t){for(const i in e)!hn(e[i])&&!PS(i,t)&&(n[i]=e[i])}function AC({transformTemplate:n},e){return k.useMemo(()=>{const t=Hm();return Vm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function bC(n,e){const t=n.style||{},i={};return KS(i,t,n),Object.assign(i,AC(n,e)),i}function CC(n,e){const t={},i=bC(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const ZS=()=>({...Hm(),attrs:{}});function RC(n,e,t,i){const o=k.useMemo(()=>{const a=ZS();return DS(a,e,NS(i),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};KS(a,n.style,n),o.style={...a,...o.style}}return o}const PC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Gm(n){return typeof n!="string"||n.includes("-")?!1:!!(PC.indexOf(n)>-1||/[A-Z]/u.test(n))}function DC(n,e,t,{latestValues:i},o,a=!1,c){const h=(c??Gm(n)?RC:CC)(e,i,o,n),d=MC(e,typeof n=="string",a),m=n!==k.Fragment?{...d,...h,ref:t}:{},{children:v}=e,p=k.useMemo(()=>hn(v)?v.get():v,[v]);return k.createElement(n,{...m,children:p})}function LC({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,o){return{latestValues:NC(t,i,o,n),renderState:e()}}function NC(n,e,t,i){const o={},a=i(n,{});for(const p in a)o[p]=mu(a[p]);let{initial:c,animate:u}=n;const h=Zu(n),d=SS(n);e&&d&&!h&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=t?t.initial===!1:!1;m=m||c===!1;const v=m?u:c;if(v&&typeof v!="boolean"&&!Ku(v)){const p=Array.isArray(v)?v:[v];for(let y=0;y<p.length;y++){const E=Lm(n,p[y]);if(E){const{transitionEnd:M,transition:x,...S}=E;for(const R in S){let D=S[R];if(Array.isArray(D)){const A=m?D.length-1:0;D=D[A]}D!==null&&(o[R]=D)}for(const R in M)o[R]=M[R]}}}return o}const QS=n=>(e,t)=>{const i=k.useContext(Qu),o=k.useContext(Yu),a=()=>LC(n,e,i,o);return t?a():dl(a)},IC=QS({scrapeMotionValuesFromProps:zm,createRenderState:Hm}),FC=QS({scrapeMotionValuesFromProps:IS,createRenderState:ZS}),UC=Symbol.for("motionComponentSymbol");function OC(n,e,t){const i=k.useRef(t);k.useInsertionEffect(()=>{i.current=t});const o=k.useRef(null);return k.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=i.current;if(typeof c=="function")if(a){const h=c(a);typeof h=="function"&&(o.current=h)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const JS=k.createContext({});function Vo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function kC(n,e,t,i,o,a){var D,A;const{visualElement:c}=k.useContext(Qu),u=k.useContext(YS),h=k.useContext(Yu),d=k.useContext(gl),m=d.reducedMotion,v=d.skipAnimations,p=k.useRef(null),y=k.useRef(!1);i=i||u.renderer,!p.current&&i&&(p.current=i(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:a}),y.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const E=p.current,M=k.useContext(JS);E&&!E.projection&&o&&(E.type==="html"||E.type==="svg")&&BC(p.current,t,o,M);const x=k.useRef(!1);k.useInsertionEffect(()=>{E&&x.current&&E.update(t,h)});const S=t[cS],R=k.useRef(!!S&&typeof window<"u"&&!((D=window.MotionHandoffIsComplete)!=null&&D.call(window,S))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,S)));return ju(()=>{y.current=!0,E&&(x.current=!0,window.MotionIsMounted=!0,E.updateFeatures(),E.scheduleRenderMicrotask(),R.current&&E.animationState&&E.animationState.animateChanges())}),k.useEffect(()=>{E&&(!R.current&&E.animationState&&E.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var N;(N=window.MotionHandoffMarkAsComplete)==null||N.call(window,S)}),R.current=!1),E.enteringChildren=void 0)}),E}function BC(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:h,layoutRoot:d,layoutAnchor:m,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:eE(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Vo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:v,layoutScroll:h,layoutRoot:d,layoutAnchor:m})}function eE(n){if(n)return n.options.allowProjection!==!1?n.projection:eE(n.parent)}function nh(n,{forwardMotionProps:e=!1,type:t}={},i,o){i&&yC(i);const a=t?t==="svg":Gm(n),c=a?FC:IC;function u(d,m){let v;const p={...k.useContext(gl),...d,layoutId:VC(d)},{isStatic:y}=p,E=wC(d),M=c(d,y);if(!y&&typeof window<"u"){zC();const x=HC(p);v=x.MeasureLayout,E.visualElement=kC(n,M,p,o,x.ProjectionNode,a)}return P.jsxs(Qu.Provider,{value:E,children:[v&&E.visualElement?P.jsx(v,{visualElement:E.visualElement,...p}):null,DC(n,d,OC(M,E.visualElement,m),M,y,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=k.forwardRef(u);return h[UC]=n,h}function VC({layoutId:n}){const e=k.useContext(xm).id;return e&&n!==void 0?e+"-"+n:n}function zC(n,e){k.useContext(YS).strict}function HC(n){const e=$S(),{drag:t,layout:i}=e;if(!t&&!i)return{};const o={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(n)||i!=null&&i.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function GC(n,e){if(typeof Proxy>"u")return nh;const t=new Map,i=(a,c)=>nh(a,c,n,e),o=(a,c)=>i(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?i:(t.has(c)||t.set(c,nh(c,void 0,n,e)),t.get(c))})}const WC=(n,e)=>e.isSVG??Gm(n)?new yb(e):new pb(e,{allowProjection:n!==k.Fragment});class XC extends ls{constructor(e){super(e),e.animationState||(e.animationState=wb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ku(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let jC=0;class YC extends ls{constructor(){super(...arguments),this.id=jC++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const h=zs(this.node,c,u);if(h){const{transition:d,transitionEnd:m,...v}=h;for(const p in v)(a=this.node.getValue(p))==null||a.jump(v[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const $C={animation:{Feature:XC},exit:{Feature:YC}};function vl(n){return{point:{x:n.pageX,y:n.pageY}}}const qC=n=>e=>Um(e)&&n(e,vl(e));function il(n,e,t,i){return ll(n,e,qC(t),i)}const tE=({current:n})=>n?n.ownerDocument.defaultView:null,Xx=(n,e)=>Math.abs(n-e);function KC(n,e){const t=Xx(n.x,e.x),i=Xx(n.y,e.y);return Math.sqrt(t**2+i**2)}const jx=new Set(["auto","scroll"]);class nE{constructor(e,t,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=E=>{this.handleScroll(E.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Rc(this.lastRawMoveEventInfo,this.transformPagePoint));const E=ih(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,x=KC(E.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!x)return;const{point:S}=E,{timestamp:R}=Tn;this.history.push({...S,timestamp:R});const{onStart:D,onMove:A}=this.handlers;M||(D&&D(this.lastMoveEvent,E),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,E)},this.handlePointerMove=(E,M)=>{this.lastMoveEvent=E,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Rc(M,this.transformPagePoint),It.update(this.updatePoint,!0)},this.handlePointerUp=(E,M)=>{this.end();const{onEnd:x,onSessionEnd:S,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=ih(E.type==="pointercancel"?this.lastMoveEventInfo:Rc(M,this.transformPagePoint),this.history);this.startEvent&&x&&x(E,D),S&&S(E,D)},!Um(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=c,this.contextWindow=o||window;const h=vl(e),d=Rc(h,this.transformPagePoint),{point:m}=d,{timestamp:v}=Tn;this.history=[{...m,timestamp:v}];const{onSessionStart:p}=t;p&&p(e,ih(d,this.history));const y={passive:!0,capture:!0};this.removeListeners=hl(il(this.contextWindow,"pointermove",this.handlePointerMove,y),il(this.contextWindow,"pointerup",this.handlePointerUp,y),il(this.contextWindow,"pointercancel",this.handlePointerUp,y)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const i=getComputedStyle(t);(jx.has(i.overflowX)||jx.has(i.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const i=e===window,o=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),It.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Tr(this.updatePoint)}}function Rc(n,e){return e?{point:e(n.point)}:n}function Yx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function ih({point:n},e){return{point:n,delta:Yx(n,iE(e)),offset:Yx(n,ZC(e)),velocity:QC(e,.1)}}function ZC(n){return n[0]}function iE(n){return n[n.length-1]}function QC(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=iE(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>oi(e)));)t--;if(!i)return{x:0,y:0};i===n[0]&&n.length>2&&o.timestamp-i.timestamp>oi(e)*2&&(i=n[1]);const a=vi(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function JC(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Ut(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Ut(t,n,i.max):Math.min(n,t)),n}function $x(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function eR(n,{top:e,left:t,bottom:i,right:o}){return{x:$x(n.x,t,o),y:$x(n.y,e,i)}}function qx(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function tR(n,e){return{x:qx(n.x,e.x),y:qx(n.y,e.y)}}function nR(n,e){let t=.5;const i=Vn(n),o=Vn(e);return o>i?t=rl(e.min,e.max-i,n.min):i>o&&(t=rl(n.min,n.max-o,e.min)),tr(0,1,t)}function iR(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const yp=.35;function rR(n=yp){return n===!1?n=0:n===!0&&(n=yp),{x:Kx(n,"left","right"),y:Kx(n,"top","bottom")}}function Kx(n,e,t){return{min:Zx(n,e),max:Zx(n,t)}}function Zx(n,e){return typeof n=="number"?n:n[e]||0}const sR=new WeakMap;class oR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(vl(v).point),this.stopAnimation()},c=(v,p)=>{const{drag:y,dragPropagation:E,onDragStart:M}=this.getProps();if(y&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=DA(y),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ji(S=>{let R=this.getAxisMotionValue(S).get()||0;if(Qi.test(R)){const{projection:D}=this.visualElement;if(D&&D.layout){const A=D.layout.layoutBox[S];A&&(R=Vn(A)*(parseFloat(R)/100))}}this.originPoint[S]=R}),M&&It.update(()=>M(v,p),!1,!0),cp(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},u=(v,p)=>{this.latestPointerEvent=v,this.latestPanInfo=p;const{dragPropagation:y,dragDirectionLock:E,onDirectionLock:M,onDrag:x}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:S}=p;if(E&&this.currentDirection===null){this.currentDirection=lR(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",p.point,S),this.updateAxis("y",p.point,S),this.visualElement.render(),x&&It.update(()=>x(v,p),!1,!0)},h=(v,p)=>{this.latestPointerEvent=v,this.latestPanInfo=p,this.stop(v,p),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new nE(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:h,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:i,contextWindow:tE(this.visualElement),element:this.visualElement.current})}stop(e,t){const i=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!i)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&It.postRender(()=>u(i,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!Pc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=JC(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Vo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=eR(i.layoutBox,e):this.constraints=!1,this.elastic=rR(t),o!==this.constraints&&!Vo(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&ji(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=iR(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Vo(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=lb(i,o.root,this.visualElement.getTransformPagePoint());let c=tR(o.layout.layoutBox,a);if(t){const u=t(sb(c));this.hasMutatedConstraints=!!u,u&&(c=wS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),h=this.constraints||{},d=ji(m=>{if(!Pc(m,t,this.currentDirection))return;let v=h&&h[m]||{};(c===!0||c===m)&&(v={min:0,max:0});const p=o?200:1e6,y=o?40:1e7,E={type:"inertia",velocity:i?e[m]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(m,E)});return Promise.all(d).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return cp(this.visualElement,e),i.start(Dm(e,i,0,t,this.visualElement,!1))}stopAnimation(){ji(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){ji(t=>{const{drag:i}=this.getProps();if(!Pc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],h=a.get()||0;a.set(e[t]-Ut(c,u,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Vo(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ji(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const h=u.get();o[c]=nR({min:h,max:h},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),ji(c=>{if(!Pc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:h,max:d}=this.constraints[c];u.set(Ut(h,d,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;sR.set(this.visualElement,this);const e=this.visualElement.current,t=il(e,"pointerdown",d=>{const{drag:m,dragListener:v=!0}=this.getProps(),p=d.target,y=p!==e&&OA(p);m&&v&&!y&&this.start(d)});let i;const o=()=>{const{dragConstraints:d}=this.getProps();Vo(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),i||(i=aR(e,d.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),It.read(o);const u=ll(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:m})=>{this.isDragging&&m&&(ji(v=>{const p=this.getAxisMotionValue(v);p&&(this.originPoint[v]+=d[v].translate,p.set(p.get()+d[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),h&&h(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=yp,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function Qx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function aR(n,e,t){const i=rx(n,Qx(t)),o=rx(e,Qx(t));return()=>{i(),o()}}function Pc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function lR(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class cR extends ls{constructor(e){super(e),this.removeGroupControls=xi,this.removeListeners=xi,this.controls=new oR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const rh=n=>(e,t)=>{n&&It.update(()=>n(e,t),!1,!0)};class uR extends ls{constructor(){super(...arguments),this.removePointerDownListener=xi}onPointerDown(e){this.session=new nE(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tE(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:rh(e),onStart:rh(t),onMove:rh(i),onEnd:(a,c)=>{delete this.session,o&&It.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=il(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let sh=!1;class fR extends k.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),sh&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,{projection:c}=i;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),sh=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||It.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=t,i.root.didUpdate(),Fm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;sh=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function rE(n){const[e,t]=jS(),i=k.useContext(xm);return P.jsx(fR,{...n,layoutGroup:i,switchLayoutGroup:k.useContext(JS),isPresent:e,safeToRemove:t})}const dR={pan:{Feature:uR},drag:{Feature:cR,ProjectionNode:XS,MeasureLayout:rE}};function Jx(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&It.postRender(()=>a(e,vl(e)))}class hR extends ls{mount(){const{current:e}=this.node;e&&(this.unmount=NA(e,(t,i)=>(Jx(this.node,i,"Start"),o=>Jx(this.node,o,"End"))))}unmount(){}}class pR extends ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hl(ll(this.node.current,"focus",()=>this.onFocus()),ll(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function e_(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&It.postRender(()=>a(e,vl(e)))}class mR extends ls{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=BA(e,(o,a)=>(e_(this.node,a,"Start"),(c,{success:u})=>e_(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Sp=new WeakMap,oh=new WeakMap,gR=n=>{const e=Sp.get(n.target);e&&e(n)},vR=n=>{n.forEach(gR)};function xR({root:n,...e}){const t=n||document;oh.has(t)||oh.set(t,{});const i=oh.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(vR,{root:n,...e})),i[o]}function _R(n,e,t){const i=xR(e);return Sp.set(n,t),i.observe(n),()=>{Sp.delete(n),i.unobserve(n)}}const yR={some:0,all:1};class SR extends ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var h;(h=this.stopObserver)==null||h.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:yR[o]},u=d=>{const{isIntersecting:m}=d;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:p}=this.node.getProps(),y=m?v:p;y&&y(d)};this.stopObserver=_R(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(ER(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function ER({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const MR={inView:{Feature:SR},tap:{Feature:mR},focus:{Feature:pR},hover:{Feature:hR}},TR={layout:{ProjectionNode:XS,MeasureLayout:rE}},wR={...$C,...MR,...dR,...TR},cl=GC(wR,WC);function Fu(n){const e=dl(()=>Hs(n)),{isStatic:t}=k.useContext(gl);if(t){const[,i]=k.useState(n);k.useEffect(()=>e.on("change",i),[])}return e}function sE(n,e){const t=Fu(e()),i=()=>t.set(e());return i(),ju(()=>{const o=()=>It.preRender(i,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Tr(i)}}),t}function AR(n){tl.current=[],n();const e=sE(tl.current,n);return tl.current=void 0,e}function bR(n,e,t,i){if(typeof n=="function")return AR(n);const a=qA(e,t,i),c=Array.isArray(n)?t_(n,a):t_([n],([h])=>a(h)),u=Array.isArray(n)?void 0:n.accelerate;return u&&!u.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(i==null?void 0:i.clamp)!==!1&&(c.accelerate={...u,times:e,keyframes:t,isTransformed:!0}),c}function t_(n,e){const t=dl(()=>[]);return sE(n,()=>{t.length=0;const i=n.length;for(let o=0;o<i;o++)t[o]=n[o].get();return e(t)})}function CR(n,e={}){const{isStatic:t}=k.useContext(gl),i=()=>hn(n)?n.get():n;if(t)return bR(i);const o=Fu(i());return k.useInsertionEffect(()=>KA(o,n,e),[o,JSON.stringify(e)]),o}function Dc(n,e={}){return CR(n,{type:"spring",...e})}function ss(n,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(n==null||n(o),t===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function n_(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function oE(...n){return e=>{let t=!1;const i=n.map(o=>{const a=n_(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():n_(n[o],null)}}}}function qs(...n){return k.useCallback(oE(...n),n)}function RR(n,e){const t=k.createContext(e),i=a=>{const{children:c,...u}=a,h=k.useMemo(()=>u,Object.values(u));return P.jsx(t.Provider,{value:h,children:c})};i.displayName=n+"Provider";function o(a){const c=k.useContext(t);if(c)return c;if(e!==void 0)return e;throw new Error(`\`${a}\` must be used within \`${n}\``)}return[i,o]}function PR(n,e=[]){let t=[];function i(a,c){const u=k.createContext(c),h=t.length;t=[...t,c];const d=v=>{var S;const{scope:p,children:y,...E}=v,M=((S=p==null?void 0:p[n])==null?void 0:S[h])||u,x=k.useMemo(()=>E,Object.values(E));return P.jsx(M.Provider,{value:x,children:y})};d.displayName=a+"Provider";function m(v,p){var M;const y=((M=p==null?void 0:p[n])==null?void 0:M[h])||u,E=k.useContext(y);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${a}\``)}return[d,m]}const o=()=>{const a=t.map(c=>k.createContext(c));return function(u){const h=(u==null?void 0:u[n])||a;return k.useMemo(()=>({[`__scope${n}`]:{...u,[n]:h}}),[u,h])}};return o.scopeName=n,[i,DR(o,...e)]}function DR(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const c=i.reduce((u,{useScope:h,scopeName:d})=>{const v=h(a)[`__scope${d}`];return{...u,...v}},{});return k.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}var Uu=globalThis!=null&&globalThis.document?k.useLayoutEffect:()=>{},LR=fw.useId||(()=>{}),NR=0;function ah(n){const[e,t]=k.useState(LR());return Uu(()=>{t(i=>i??String(NR++))},[n]),n||(e?`radix-${e}`:"")}function Gs(n){const e=k.useRef(n);return k.useEffect(()=>{e.current=n}),k.useMemo(()=>(...t)=>{var i;return(i=e.current)==null?void 0:i.call(e,...t)},[])}function IR({prop:n,defaultProp:e,onChange:t=()=>{}}){const[i,o]=FR({defaultProp:e,onChange:t}),a=n!==void 0,c=a?n:i,u=Gs(t),h=k.useCallback(d=>{if(a){const v=typeof d=="function"?d(n):d;v!==n&&u(v)}else o(d)},[a,n,o,u]);return[c,h]}function FR({defaultProp:n,onChange:e}){const t=k.useState(n),[i]=t,o=k.useRef(i),a=Gs(e);return k.useEffect(()=>{o.current!==i&&(a(i),o.current=i)},[i,o,a]),t}var aE=_y();const UR=xy(aE);var Wm=k.forwardRef((n,e)=>{const{children:t,...i}=n,o=k.Children.toArray(t),a=o.find(kR);if(a){const c=a.props.children,u=o.map(h=>h===a?k.Children.count(c)>1?k.Children.only(null):k.isValidElement(c)?c.props.children:null:h);return P.jsx(Ep,{...i,ref:e,children:k.isValidElement(c)?k.cloneElement(c,void 0,u):null})}return P.jsx(Ep,{...i,ref:e,children:t})});Wm.displayName="Slot";var Ep=k.forwardRef((n,e)=>{const{children:t,...i}=n;if(k.isValidElement(t)){const o=VR(t),a=BR(i,t.props);return t.type!==k.Fragment&&(a.ref=e?oE(e,o):o),k.cloneElement(t,a)}return k.Children.count(t)>1?k.Children.only(null):null});Ep.displayName="SlotClone";var OR=({children:n})=>P.jsx(P.Fragment,{children:n});function kR(n){return k.isValidElement(n)&&n.type===OR}function BR(n,e){const t={...e};for(const i in e){const o=n[i],a=e[i];/^on[A-Z]/.test(i)?o&&a?t[i]=(...u)=>{a(...u),o(...u)}:o&&(t[i]=o):i==="style"?t[i]={...o,...a}:i==="className"&&(t[i]=[o,a].filter(Boolean).join(" "))}return{...n,...t}}function VR(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var zR=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Cr=zR.reduce((n,e)=>{const t=k.forwardRef((i,o)=>{const{asChild:a,...c}=i,u=a?Wm:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),P.jsx(u,{...c,ref:o})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function HR(n,e){n&&aE.flushSync(()=>n.dispatchEvent(e))}function GR(n,e=globalThis==null?void 0:globalThis.document){const t=Gs(n);k.useEffect(()=>{const i=o=>{o.key==="Escape"&&t(o)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[t,e])}var WR="DismissableLayer",Mp="dismissableLayer.update",XR="dismissableLayer.pointerDownOutside",jR="dismissableLayer.focusOutside",i_,lE=k.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),cE=k.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:c,onDismiss:u,...h}=n,d=k.useContext(lE),[m,v]=k.useState(null),p=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=k.useState({}),E=qs(e,L=>v(L)),M=Array.from(d.layers),[x]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),S=M.indexOf(x),R=m?M.indexOf(m):-1,D=d.layersWithOutsidePointerEventsDisabled.size>0,A=R>=S,N=qR(L=>{const T=L.target,I=[...d.branches].some(z=>z.contains(T));!A||I||(o==null||o(L),c==null||c(L),L.defaultPrevented||u==null||u())},p),F=KR(L=>{const T=L.target;[...d.branches].some(z=>z.contains(T))||(a==null||a(L),c==null||c(L),L.defaultPrevented||u==null||u())},p);return GR(L=>{R===d.layers.size-1&&(i==null||i(L),!L.defaultPrevented&&u&&(L.preventDefault(),u()))},p),k.useEffect(()=>{if(m)return t&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(i_=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(m)),d.layers.add(m),r_(),()=>{t&&d.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=i_)}},[m,p,t,d]),k.useEffect(()=>()=>{m&&(d.layers.delete(m),d.layersWithOutsidePointerEventsDisabled.delete(m),r_())},[m,d]),k.useEffect(()=>{const L=()=>y({});return document.addEventListener(Mp,L),()=>document.removeEventListener(Mp,L)},[]),P.jsx(Cr.div,{...h,ref:E,style:{pointerEvents:D?A?"auto":"none":void 0,...n.style},onFocusCapture:ss(n.onFocusCapture,F.onFocusCapture),onBlurCapture:ss(n.onBlurCapture,F.onBlurCapture),onPointerDownCapture:ss(n.onPointerDownCapture,N.onPointerDownCapture)})});cE.displayName=WR;var YR="DismissableLayerBranch",$R=k.forwardRef((n,e)=>{const t=k.useContext(lE),i=k.useRef(null),o=qs(e,i);return k.useEffect(()=>{const a=i.current;if(a)return t.branches.add(a),()=>{t.branches.delete(a)}},[t.branches]),P.jsx(Cr.div,{...n,ref:o})});$R.displayName=YR;function qR(n,e=globalThis==null?void 0:globalThis.document){const t=Gs(n),i=k.useRef(!1),o=k.useRef(()=>{});return k.useEffect(()=>{const a=u=>{if(u.target&&!i.current){let h=function(){uE(XR,t,d,{discrete:!0})};const d={originalEvent:u};u.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=h,e.addEventListener("click",o.current,{once:!0})):h()}else e.removeEventListener("click",o.current);i.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",a),e.removeEventListener("click",o.current)}},[e,t]),{onPointerDownCapture:()=>i.current=!0}}function KR(n,e=globalThis==null?void 0:globalThis.document){const t=Gs(n),i=k.useRef(!1);return k.useEffect(()=>{const o=a=>{a.target&&!i.current&&uE(jR,t,{originalEvent:a},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function r_(){const n=new CustomEvent(Mp);document.dispatchEvent(n)}function uE(n,e,t,{discrete:i}){const o=t.originalEvent.target,a=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&o.addEventListener(n,e,{once:!0}),i?HR(o,a):o.dispatchEvent(a)}var lh="focusScope.autoFocusOnMount",ch="focusScope.autoFocusOnUnmount",s_={bubbles:!1,cancelable:!0},ZR="FocusScope",fE=k.forwardRef((n,e)=>{const{loop:t=!1,trapped:i=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...c}=n,[u,h]=k.useState(null),d=Gs(o),m=Gs(a),v=k.useRef(null),p=qs(e,M=>h(M)),y=k.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;k.useEffect(()=>{if(i){let M=function(D){if(y.paused||!u)return;const A=D.target;u.contains(A)?v.current=A:ts(v.current,{select:!0})},x=function(D){if(y.paused||!u)return;const A=D.relatedTarget;A!==null&&(u.contains(A)||ts(v.current,{select:!0}))},S=function(D){if(document.activeElement===document.body)for(const N of D)N.removedNodes.length>0&&ts(u)};document.addEventListener("focusin",M),document.addEventListener("focusout",x);const R=new MutationObserver(S);return u&&R.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",M),document.removeEventListener("focusout",x),R.disconnect()}}},[i,u,y.paused]),k.useEffect(()=>{if(u){a_.add(y);const M=document.activeElement;if(!u.contains(M)){const S=new CustomEvent(lh,s_);u.addEventListener(lh,d),u.dispatchEvent(S),S.defaultPrevented||(QR(iP(dE(u)),{select:!0}),document.activeElement===M&&ts(u))}return()=>{u.removeEventListener(lh,d),setTimeout(()=>{const S=new CustomEvent(ch,s_);u.addEventListener(ch,m),u.dispatchEvent(S),S.defaultPrevented||ts(M??document.body,{select:!0}),u.removeEventListener(ch,m),a_.remove(y)},0)}}},[u,d,m,y]);const E=k.useCallback(M=>{if(!t&&!i||y.paused)return;const x=M.key==="Tab"&&!M.altKey&&!M.ctrlKey&&!M.metaKey,S=document.activeElement;if(x&&S){const R=M.currentTarget,[D,A]=JR(R);D&&A?!M.shiftKey&&S===A?(M.preventDefault(),t&&ts(D,{select:!0})):M.shiftKey&&S===D&&(M.preventDefault(),t&&ts(A,{select:!0})):S===R&&M.preventDefault()}},[t,i,y.paused]);return P.jsx(Cr.div,{tabIndex:-1,...c,ref:p,onKeyDown:E})});fE.displayName=ZR;function QR(n,{select:e=!1}={}){const t=document.activeElement;for(const i of n)if(ts(i,{select:e}),document.activeElement!==t)return}function JR(n){const e=dE(n),t=o_(e,n),i=o_(e.reverse(),n);return[t,i]}function dE(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function o_(n,e){for(const t of n)if(!eP(t,{upTo:e}))return t}function eP(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function tP(n){return n instanceof HTMLInputElement&&"select"in n}function ts(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&tP(n)&&e&&n.select()}}var a_=nP();function nP(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=l_(n,e),n.unshift(e)},remove(e){var t;n=l_(n,e),(t=n[0])==null||t.resume()}}}function l_(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function iP(n){return n.filter(e=>e.tagName!=="A")}var rP="Portal",hE=k.forwardRef((n,e)=>{var u;const{container:t,...i}=n,[o,a]=k.useState(!1);Uu(()=>a(!0),[]);const c=t||o&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?UR.createPortal(P.jsx(Cr.div,{...i,ref:e}),c):null});hE.displayName=rP;function sP(n,e){return k.useReducer((t,i)=>e[t][i]??t,n)}var Ju=n=>{const{present:e,children:t}=n,i=oP(e),o=typeof t=="function"?t({present:i.isPresent}):k.Children.only(t),a=qs(i.ref,aP(o));return typeof t=="function"||i.isPresent?k.cloneElement(o,{ref:a}):null};Ju.displayName="Presence";function oP(n){const[e,t]=k.useState(),i=k.useRef({}),o=k.useRef(n),a=k.useRef("none"),c=n?"mounted":"unmounted",[u,h]=sP(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return k.useEffect(()=>{const d=Lc(i.current);a.current=u==="mounted"?d:"none"},[u]),Uu(()=>{const d=i.current,m=o.current;if(m!==n){const p=a.current,y=Lc(d);n?h("MOUNT"):y==="none"||(d==null?void 0:d.display)==="none"?h("UNMOUNT"):h(m&&p!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,h]),Uu(()=>{if(e){let d;const m=e.ownerDocument.defaultView??window,v=y=>{const M=Lc(i.current).includes(y.animationName);if(y.target===e&&M&&(h("ANIMATION_END"),!o.current)){const x=e.style.animationFillMode;e.style.animationFillMode="forwards",d=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=x)})}},p=y=>{y.target===e&&(a.current=Lc(i.current))};return e.addEventListener("animationstart",p),e.addEventListener("animationcancel",v),e.addEventListener("animationend",v),()=>{m.clearTimeout(d),e.removeEventListener("animationstart",p),e.removeEventListener("animationcancel",v),e.removeEventListener("animationend",v)}}else h("ANIMATION_END")},[e,h]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:k.useCallback(d=>{d&&(i.current=getComputedStyle(d)),t(d)},[])}}function Lc(n){return(n==null?void 0:n.animationName)||"none"}function aP(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var uh=0;function lP(){k.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??c_()),document.body.insertAdjacentElement("beforeend",n[1]??c_()),uh++,()=>{uh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),uh--}},[])}function c_(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var qi=function(){return qi=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},qi.apply(this,arguments)};function pE(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function cP(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var vu="right-scroll-bar-position",xu="width-before-scroll-bar",uP="with-scroll-bars-hidden",fP="--removed-body-scroll-bar-size";function fh(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function dP(n,e){var t=k.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(i){var o=t.value;o!==i&&(t.value=i,t.callback(i,o))}}}})[0];return t.callback=e,t.facade}var hP=typeof window<"u"?k.useLayoutEffect:k.useEffect,u_=new WeakMap;function pP(n,e){var t=dP(null,function(i){return n.forEach(function(o){return fh(o,i)})});return hP(function(){var i=u_.get(t);if(i){var o=new Set(i),a=new Set(n),c=t.current;o.forEach(function(u){a.has(u)||fh(u,null)}),a.forEach(function(u){o.has(u)||fh(u,c)})}u_.set(t,n)},[n]),t}function mP(n){return n}function gP(n,e){e===void 0&&(e=mP);var t=[],i=!1,o={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(a){var c=e(a,i);return t.push(c),function(){t=t.filter(function(u){return u!==c})}},assignSyncMedium:function(a){for(i=!0;t.length;){var c=t;t=[],c.forEach(a)}t={push:function(u){return a(u)},filter:function(){return t}}},assignMedium:function(a){i=!0;var c=[];if(t.length){var u=t;t=[],u.forEach(a),c=t}var h=function(){var m=c;c=[],m.forEach(a)},d=function(){return Promise.resolve().then(h)};d(),t={push:function(m){c.push(m),d()},filter:function(m){return c=c.filter(m),t}}}};return o}function vP(n){n===void 0&&(n={});var e=gP(null);return e.options=qi({async:!0,ssr:!1},n),e}var mE=function(n){var e=n.sideCar,t=pE(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return k.createElement(i,qi({},t))};mE.isSideCarExport=!0;function xP(n,e){return n.useMedium(e),mE}var gE=vP(),dh=function(){},ef=k.forwardRef(function(n,e){var t=k.useRef(null),i=k.useState({onScrollCapture:dh,onWheelCapture:dh,onTouchMoveCapture:dh}),o=i[0],a=i[1],c=n.forwardProps,u=n.children,h=n.className,d=n.removeScrollBar,m=n.enabled,v=n.shards,p=n.sideCar,y=n.noRelative,E=n.noIsolation,M=n.inert,x=n.allowPinchZoom,S=n.as,R=S===void 0?"div":S,D=n.gapMode,A=pE(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),N=p,F=pP([t,e]),L=qi(qi({},A),o);return k.createElement(k.Fragment,null,m&&k.createElement(N,{sideCar:gE,removeScrollBar:d,shards:v,noRelative:y,noIsolation:E,inert:M,setCallbacks:a,allowPinchZoom:!!x,lockRef:t,gapMode:D}),c?k.cloneElement(k.Children.only(u),qi(qi({},L),{ref:F})):k.createElement(R,qi({},L,{className:h,ref:F}),u))});ef.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ef.classNames={fullWidth:xu,zeroRight:vu};var _P=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function yP(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=_P();return e&&n.setAttribute("nonce",e),n}function SP(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function EP(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var MP=function(){var n=0,e=null;return{add:function(t){n==0&&(e=yP())&&(SP(e,t),EP(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},TP=function(){var n=MP();return function(e,t){k.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},vE=function(){var n=TP(),e=function(t){var i=t.styles,o=t.dynamic;return n(i,o),null};return e},wP={left:0,top:0,right:0,gap:0},hh=function(n){return parseInt(n||"",10)||0},AP=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[hh(t),hh(i),hh(o)]},bP=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return wP;var e=AP(n),t=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-t+e[2]-e[0])}},CP=vE(),Xo="data-scroll-locked",RP=function(n,e,t,i){var o=n.left,a=n.top,c=n.right,u=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(uP,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(u,"px ").concat(i,`;
  }
  body[`).concat(Xo,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),t==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u,"px ").concat(i,`;
    `),t==="padding"&&"padding-right: ".concat(u,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(vu,` {
    right: `).concat(u,"px ").concat(i,`;
  }
  
  .`).concat(xu,` {
    margin-right: `).concat(u,"px ").concat(i,`;
  }
  
  .`).concat(vu," .").concat(vu,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(xu," .").concat(xu,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(Xo,`] {
    `).concat(fP,": ").concat(u,`px;
  }
`)},f_=function(){var n=parseInt(document.body.getAttribute(Xo)||"0",10);return isFinite(n)?n:0},PP=function(){k.useEffect(function(){return document.body.setAttribute(Xo,(f_()+1).toString()),function(){var n=f_()-1;n<=0?document.body.removeAttribute(Xo):document.body.setAttribute(Xo,n.toString())}},[])},DP=function(n){var e=n.noRelative,t=n.noImportant,i=n.gapMode,o=i===void 0?"margin":i;PP();var a=k.useMemo(function(){return bP(o)},[o]);return k.createElement(CP,{styles:RP(a,!e,o,t?"":"!important")})},Tp=!1;if(typeof window<"u")try{var Nc=Object.defineProperty({},"passive",{get:function(){return Tp=!0,!0}});window.addEventListener("test",Nc,Nc),window.removeEventListener("test",Nc,Nc)}catch{Tp=!1}var Eo=Tp?{passive:!1}:!1,LP=function(n){return n.tagName==="TEXTAREA"},xE=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!LP(n)&&t[e]==="visible")},NP=function(n){return xE(n,"overflowY")},IP=function(n){return xE(n,"overflowX")},d_=function(n,e){var t=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var o=_E(n,i);if(o){var a=yE(n,i),c=a[1],u=a[2];if(c>u)return!0}i=i.parentNode}while(i&&i!==t.body);return!1},FP=function(n){var e=n.scrollTop,t=n.scrollHeight,i=n.clientHeight;return[e,t,i]},UP=function(n){var e=n.scrollLeft,t=n.scrollWidth,i=n.clientWidth;return[e,t,i]},_E=function(n,e){return n==="v"?NP(e):IP(e)},yE=function(n,e){return n==="v"?FP(e):UP(e)},OP=function(n,e){return n==="h"&&e==="rtl"?-1:1},kP=function(n,e,t,i,o){var a=OP(n,window.getComputedStyle(e).direction),c=a*i,u=t.target,h=e.contains(u),d=!1,m=c>0,v=0,p=0;do{if(!u)break;var y=yE(n,u),E=y[0],M=y[1],x=y[2],S=M-x-a*E;(E||S)&&_E(n,u)&&(v+=S,p+=E);var R=u.parentNode;u=R&&R.nodeType===Node.DOCUMENT_FRAGMENT_NODE?R.host:R}while(!h&&u!==document.body||h&&(e.contains(u)||e===u));return(m&&Math.abs(v)<1||!m&&Math.abs(p)<1)&&(d=!0),d},Ic=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},h_=function(n){return[n.deltaX,n.deltaY]},p_=function(n){return n&&"current"in n?n.current:n},BP=function(n,e){return n[0]===e[0]&&n[1]===e[1]},VP=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},zP=0,Mo=[];function HP(n){var e=k.useRef([]),t=k.useRef([0,0]),i=k.useRef(),o=k.useState(zP++)[0],a=k.useState(vE)[0],c=k.useRef(n);k.useEffect(function(){c.current=n},[n]),k.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var M=cP([n.lockRef.current],(n.shards||[]).map(p_),!0).filter(Boolean);return M.forEach(function(x){return x.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),M.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(o))})}}},[n.inert,n.lockRef.current,n.shards]);var u=k.useCallback(function(M,x){if("touches"in M&&M.touches.length===2||M.type==="wheel"&&M.ctrlKey)return!c.current.allowPinchZoom;var S=Ic(M),R=t.current,D="deltaX"in M?M.deltaX:R[0]-S[0],A="deltaY"in M?M.deltaY:R[1]-S[1],N,F=M.target,L=Math.abs(D)>Math.abs(A)?"h":"v";if("touches"in M&&L==="h"&&F.type==="range")return!1;var T=window.getSelection(),I=T&&T.anchorNode,z=I?I===F||I.contains(F):!1;if(z)return!1;var V=d_(L,F);if(!V)return!0;if(V?N=L:(N=L==="v"?"h":"v",V=d_(L,F)),!V)return!1;if(!i.current&&"changedTouches"in M&&(D||A)&&(i.current=N),!N)return!0;var j=i.current||N;return kP(j,x,M,j==="h"?D:A)},[]),h=k.useCallback(function(M){var x=M;if(!(!Mo.length||Mo[Mo.length-1]!==a)){var S="deltaY"in x?h_(x):Ic(x),R=e.current.filter(function(N){return N.name===x.type&&(N.target===x.target||x.target===N.shadowParent)&&BP(N.delta,S)})[0];if(R&&R.should){x.cancelable&&x.preventDefault();return}if(!R){var D=(c.current.shards||[]).map(p_).filter(Boolean).filter(function(N){return N.contains(x.target)}),A=D.length>0?u(x,D[0]):!c.current.noIsolation;A&&x.cancelable&&x.preventDefault()}}},[]),d=k.useCallback(function(M,x,S,R){var D={name:M,delta:x,target:S,should:R,shadowParent:GP(S)};e.current.push(D),setTimeout(function(){e.current=e.current.filter(function(A){return A!==D})},1)},[]),m=k.useCallback(function(M){t.current=Ic(M),i.current=void 0},[]),v=k.useCallback(function(M){d(M.type,h_(M),M.target,u(M,n.lockRef.current))},[]),p=k.useCallback(function(M){d(M.type,Ic(M),M.target,u(M,n.lockRef.current))},[]);k.useEffect(function(){return Mo.push(a),n.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:p}),document.addEventListener("wheel",h,Eo),document.addEventListener("touchmove",h,Eo),document.addEventListener("touchstart",m,Eo),function(){Mo=Mo.filter(function(M){return M!==a}),document.removeEventListener("wheel",h,Eo),document.removeEventListener("touchmove",h,Eo),document.removeEventListener("touchstart",m,Eo)}},[]);var y=n.removeScrollBar,E=n.inert;return k.createElement(k.Fragment,null,E?k.createElement(a,{styles:VP(o)}):null,y?k.createElement(DP,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function GP(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const WP=xP(gE,HP);var SE=k.forwardRef(function(n,e){return k.createElement(ef,qi({},n,{ref:e,sideCar:WP}))});SE.classNames=ef.classNames;var XP=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},To=new WeakMap,Fc=new WeakMap,Uc={},ph=0,EE=function(n){return n&&(n.host||EE(n.parentNode))},jP=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=EE(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},YP=function(n,e,t,i){var o=jP(e,Array.isArray(n)?n:[n]);Uc[t]||(Uc[t]=new WeakMap);var a=Uc[t],c=[],u=new Set,h=new Set(o),d=function(v){!v||u.has(v)||(u.add(v),d(v.parentNode))};o.forEach(d);var m=function(v){!v||h.has(v)||Array.prototype.forEach.call(v.children,function(p){if(u.has(p))m(p);else try{var y=p.getAttribute(i),E=y!==null&&y!=="false",M=(To.get(p)||0)+1,x=(a.get(p)||0)+1;To.set(p,M),a.set(p,x),c.push(p),M===1&&E&&Fc.set(p,!0),x===1&&p.setAttribute(t,"true"),E||p.setAttribute(i,"true")}catch(S){console.error("aria-hidden: cannot operate on ",p,S)}})};return m(e),u.clear(),ph++,function(){c.forEach(function(v){var p=To.get(v)-1,y=a.get(v)-1;To.set(v,p),a.set(v,y),p||(Fc.has(v)||v.removeAttribute(i),Fc.delete(v)),y||v.removeAttribute(t)}),ph--,ph||(To=new WeakMap,To=new WeakMap,Fc=new WeakMap,Uc={})}},$P=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),o=XP(n);return o?(i.push.apply(i,Array.from(o.querySelectorAll("[aria-live], script"))),YP(i,o,t,"aria-hidden")):function(){return null}},Xm="Dialog",[ME]=PR(Xm),[qP,Oi]=ME(Xm),TE=n=>{const{__scopeDialog:e,children:t,open:i,defaultOpen:o,onOpenChange:a,modal:c=!0}=n,u=k.useRef(null),h=k.useRef(null),[d=!1,m]=IR({prop:i,defaultProp:o,onChange:a});return P.jsx(qP,{scope:e,triggerRef:u,contentRef:h,contentId:ah(),titleId:ah(),descriptionId:ah(),open:d,onOpenChange:m,onOpenToggle:k.useCallback(()=>m(v=>!v),[m]),modal:c,children:t})};TE.displayName=Xm;var wE="DialogTrigger",AE=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(wE,t),a=qs(e,o.triggerRef);return P.jsx(Cr.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":$m(o.open),...i,ref:a,onClick:ss(n.onClick,o.onOpenToggle)})});AE.displayName=wE;var jm="DialogPortal",[KP,bE]=ME(jm,{forceMount:void 0}),CE=n=>{const{__scopeDialog:e,forceMount:t,children:i,container:o}=n,a=Oi(jm,e);return P.jsx(KP,{scope:e,forceMount:t,children:k.Children.map(i,c=>P.jsx(Ju,{present:t||a.open,children:P.jsx(hE,{asChild:!0,container:o,children:c})}))})};CE.displayName=jm;var Ou="DialogOverlay",RE=k.forwardRef((n,e)=>{const t=bE(Ou,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,a=Oi(Ou,n.__scopeDialog);return a.modal?P.jsx(Ju,{present:i||a.open,children:P.jsx(ZP,{...o,ref:e})}):null});RE.displayName=Ou;var ZP=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(Ou,t);return P.jsx(SE,{as:Wm,allowPinchZoom:!0,shards:[o.contentRef],children:P.jsx(Cr.div,{"data-state":$m(o.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),Ws="DialogContent",PE=k.forwardRef((n,e)=>{const t=bE(Ws,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,a=Oi(Ws,n.__scopeDialog);return P.jsx(Ju,{present:i||a.open,children:a.modal?P.jsx(QP,{...o,ref:e}):P.jsx(JP,{...o,ref:e})})});PE.displayName=Ws;var QP=k.forwardRef((n,e)=>{const t=Oi(Ws,n.__scopeDialog),i=k.useRef(null),o=qs(e,t.contentRef,i);return k.useEffect(()=>{const a=i.current;if(a)return $P(a)},[]),P.jsx(DE,{...n,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ss(n.onCloseAutoFocus,a=>{var c;a.preventDefault(),(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:ss(n.onPointerDownOutside,a=>{const c=a.detail.originalEvent,u=c.button===0&&c.ctrlKey===!0;(c.button===2||u)&&a.preventDefault()}),onFocusOutside:ss(n.onFocusOutside,a=>a.preventDefault())})}),JP=k.forwardRef((n,e)=>{const t=Oi(Ws,n.__scopeDialog),i=k.useRef(!1),o=k.useRef(!1);return P.jsx(DE,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c,u;(c=n.onCloseAutoFocus)==null||c.call(n,a),a.defaultPrevented||(i.current||(u=t.triggerRef.current)==null||u.focus(),a.preventDefault()),i.current=!1,o.current=!1},onInteractOutside:a=>{var h,d;(h=n.onInteractOutside)==null||h.call(n,a),a.defaultPrevented||(i.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=a.target;((d=t.triggerRef.current)==null?void 0:d.contains(c))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),DE=k.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:a,...c}=n,u=Oi(Ws,t),h=k.useRef(null),d=qs(e,h);return lP(),P.jsxs(P.Fragment,{children:[P.jsx(fE,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:o,onUnmountAutoFocus:a,children:P.jsx(cE,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":$m(u.open),...c,ref:d,onDismiss:()=>u.onOpenChange(!1)})}),P.jsxs(P.Fragment,{children:[P.jsx(e2,{titleId:u.titleId}),P.jsx(n2,{contentRef:h,descriptionId:u.descriptionId})]})]})}),Ym="DialogTitle",LE=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(Ym,t);return P.jsx(Cr.h2,{id:o.titleId,...i,ref:e})});LE.displayName=Ym;var NE="DialogDescription",IE=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(NE,t);return P.jsx(Cr.p,{id:o.descriptionId,...i,ref:e})});IE.displayName=NE;var FE="DialogClose",UE=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(FE,t);return P.jsx(Cr.button,{type:"button",...i,ref:e,onClick:ss(n.onClick,()=>o.onOpenChange(!1))})});UE.displayName=FE;function $m(n){return n?"open":"closed"}var OE="DialogTitleWarning",[kF,kE]=RR(OE,{contentName:Ws,titleName:Ym,docsSlug:"dialog"}),e2=({titleId:n})=>{const e=kE(OE),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return k.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},t2="DialogDescriptionWarning",n2=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${kE(t2).contentName}}.`;return k.useEffect(()=>{var a;const o=(a=n.current)==null?void 0:a.getAttribute("aria-describedby");e&&o&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},i2=TE,r2=AE,s2=CE,o2=RE,a2=PE,l2=LE,c2=IE,u2=UE;const f2=[{id:"FIELD-HISTORY/003",year:"MAY 2026 - PRESENT",role:"SOFTWARE DEVELOPER",comp:"MOUNTAINVIEW BUSINESS SOLUTION INC.",type:"FULL-TIME",img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",desc:"Developed and maintained full-stack internal tooling and database scripts using ASP.NET, MSSQL, and PowerBuilder.",refs:[]},{id:"FIELD-HISTORY/002",year:"DEC 2025 - FEB 2026",role:"SOFTWARE ENG. INTERN",comp:"BLANKWORKS STUDIO",type:"INTERNSHIP",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",desc:"Engineered high-performance notification systems with BullMQ and MongoDB, resolved critical billing bugs in production, and modernized legacy React/Next.js codebases.",refs:[]},{id:"FIELD-HISTORY/001",year:"NOV 2024 - APR 2026",role:"WEB DEVELOPER",comp:"FREELANCE",type:"CONTRACT",img:"https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80",desc:"Delivered SEO optimizations for lifestyle blogs and built custom Shopify e-commerce solutions with automated Printify fulfillment.",refs:[]}],d2=[{id:"BUILT/002",num:"002",name:"SIP WEST",type:"WEB APPLICATION",year:"2025",status:"COMPLETED",img:"/sipwests.png",github:"https://github.com/ChristianBuena/sipwest-theme",live:"https://sipwest.com",challenge:"University departments needed a unified system to track physical assets across campuses without relying on fragmented spreadsheets.",solution:"A centralized dashboard and scanning interface, built to solve scheduling problems and manage physical assets efficiently across multiple campuses.",stack:[{name:"Lead Developer",color:"bg-blue-400"},{name:"Liquid",color:"bg-teal-400"},{name:"Shopify",color:"bg-blue-600"},{name:"Web Design",color:"bg-sky-400"}],origins:[{id:"LAB/003",label:"LAB / 003"},{id:"FIELD-HISTORY/002",label:"FIELD HISTORY / 002"}]},{id:"BUILT/003",num:"003",name:"ENDING",type:"NARRATIVE GAME",year:"2025",status:"ONGOING",img:"/ending.png",github:"https://github.com/ChristianBuena/ending",live:"#",challenge:"Creating an immersive, choice-driven narrative system that runs smoothly in the browser while maintaining complex state branches and save files.",solution:"Designed a state-machine driven dialog engine with custom local storage serialization and pixel-art sprite rendering in Canvas.",stack:[{name:"Game Developer",color:"bg-blue-400"},{name:"C#",color:"bg-amber-400"},{name:"UNITY Engine",color:"bg-sky-400"}],origins:[{id:"LAB/001",label:"LAB / 001"}]},{id:"BUILT/004",num:"004",name:"EMOTION QUEST",type:"SCHOOL PROJECT",year:"2024",status:"COMPLETED",img:"/emotionquest.png",github:"https://github.com/ChristianBuena/EmotionQuest",live:"#",challenge:"A gamified application that educates children about the importance of emotional regulation and expression.",solution:"Created a browser-based game featuring interactive mini-games, a virtual pet system, and progress tracking to encourage emotional awareness and healthy coping mechanisms.",stack:[{name:"Lead Developer",color:"bg-blue-400"},{name:"Godot Engine",color:"bg-orange-400"},{name:"GDScript",color:"bg-sky-400"}],origins:[{id:"FIELD-HISTORY/001",label:"FIELD HISTORY / 001"}]}],h2=[{n:"01",name:"OUTSTANDING PRESENTER AWARD",issuer:"TECHNO EXPO 2025",year:"2025",sig:1,img:"/4.png",desc:"Received the Outstanding Presenter Award for exceptional presentation skills at the Techno Expo 2025."},{n:"02",name:"SEO CERTIFIED",issuer:"HUBSPOT ACADEMY",year:"2026",sig:2,img:"/5.png",desc:"Mastered SEO strategies including keyword research, on-page optimization, and technical SEO to improve search engine rankings and drive organic traffic."},{n:"03",name:"PEER CODING SESSION MENTOR",issuer:"CSS",year:"2026",sig:3,img:"/9.png",desc:"Led peer coding sessions to help students with coding assignments and projects."}];function p2(){const[n,e]=k.useState(0),[t,i]=k.useState(0),[o,a]=k.useState(0),[c,u]=k.useState(0),h=k.useRef(0),d=k.useRef(0),m=k.useRef(0),v=k.useRef(!1);k.useEffect(()=>{const y=()=>{v.current=!1;const S=window.scrollY,R=document.documentElement.scrollHeight-window.innerHeight,D=R>0?Math.min(1,S/R):0,A=Math.abs(S-h.current);d.current=d.current*.75+A*.25,h.current=S,e(S),i(D),a(d.current),u(A)},E=()=>{v.current||(v.current=!0,m.current=requestAnimationFrame(y))};let M;const x=()=>{d.current>.05&&(d.current*=.82,a(d.current)),M=requestAnimationFrame(x)};return M=requestAnimationFrame(x),window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),cancelAnimationFrame(m.current),cancelAnimationFrame(M)}},[]);const p=k.useCallback(y=>{const E=document.getElementById(y);if(!E)return 0;const M=E.getBoundingClientRect(),x=window.innerHeight,S=M.height+x,R=x-M.top;return Math.min(1,Math.max(0,R/S))},[n]);return{scrollY:n,totalProgress:t,velocity:o,rawVelocity:c,sectionProgress:p}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="185",m2=0,m_=1,g2=2,_u=1,v2=2,Za=3,as=0,Qn=1,_r=2,Sr=0,jo=1,g_=2,v_=3,x_=4,x2=5,Is=100,_2=101,y2=102,S2=103,E2=104,M2=200,T2=201,w2=202,A2=203,wp=204,Ap=205,b2=206,C2=207,R2=208,P2=209,D2=210,L2=211,N2=212,I2=213,F2=214,bp=0,Cp=1,Rp=2,Ko=3,Pp=4,Dp=5,Lp=6,Np=7,BE=0,U2=1,O2=2,Ji=0,VE=1,zE=2,HE=3,GE=4,WE=5,XE=6,jE=7,YE=300,Xs=301,Zo=302,mh=303,gh=304,tf=306,Ip=1e3,yr=1001,Fp=1002,wn=1003,k2=1004,Oc=1005,Nn=1006,vh=1007,ks=1008,gi=1009,$E=1010,qE=1011,ul=1012,Km=1013,nr=1014,Ki=1015,wr=1016,Zm=1017,Qm=1018,fl=1020,KE=35902,ZE=35899,QE=1021,JE=1022,Ii=1023,Ar=1026,Bs=1027,eM=1028,Jm=1029,js=1030,eg=1031,tg=1033,yu=33776,Su=33777,Eu=33778,Mu=33779,Up=35840,Op=35841,kp=35842,Bp=35843,Vp=36196,zp=37492,Hp=37496,Gp=37488,Wp=37489,ku=37490,Xp=37491,jp=37808,Yp=37809,$p=37810,qp=37811,Kp=37812,Zp=37813,Qp=37814,Jp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,om=36492,am=36494,lm=36495,cm=36283,um=36284,Bu=36285,fm=36286,B2=3200,__=0,V2=1,ns="",mi="srgb",Vu="srgb-linear",zu="linear",Nt="srgb",wo=7680,y_=519,z2=512,H2=513,G2=514,ng=515,W2=516,X2=517,ig=518,j2=519,S_=35044,E_="300 es",Zi=2e3,Hu=2001;function Y2(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $2(){const n=Gu("canvas");return n.style.display="block",n}const M_={};function T_(...n){const e="THREE."+n.shift();console.log(e,...n)}function tM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=tM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=tM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yo(...n){const e=n.join(" ");e in M_||(M_[e]=!0,at(...n))}function q2(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const K2={[bp]:Cp,[Rp]:Lp,[Pp]:Np,[Ko]:Dp,[Cp]:bp,[Lp]:Rp,[Np]:Pp,[Dp]:Ko};class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=Math.PI/180,dm=180/Math.PI;function xl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function Z2(n,e){return(n%e+e)%e}function _h(n,e,t){return(1-t)*n+t*e}function Ha(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const og=class og{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};og.prototype.isVector2=!0;let bt=og;class ia{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let h=i[o+0],d=i[o+1],m=i[o+2],v=i[o+3],p=a[c+0],y=a[c+1],E=a[c+2],M=a[c+3];if(v!==M||h!==p||d!==y||m!==E){let x=h*p+d*y+m*E+v*M;x<0&&(p=-p,y=-y,E=-E,M=-M,x=-x);let S=1-u;if(x<.9995){const R=Math.acos(x),D=Math.sin(R);S=Math.sin(S*R)/D,u=Math.sin(u*R)/D,h=h*S+p*u,d=d*S+y*u,m=m*S+E*u,v=v*S+M*u}else{h=h*S+p*u,d=d*S+y*u,m=m*S+E*u,v=v*S+M*u;const R=1/Math.sqrt(h*h+d*d+m*m+v*v);h*=R,d*=R,m*=R,v*=R}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],h=i[o+1],d=i[o+2],m=i[o+3],v=a[c],p=a[c+1],y=a[c+2],E=a[c+3];return e[t]=u*E+m*v+h*y-d*p,e[t+1]=h*E+m*p+d*v-u*y,e[t+2]=d*E+m*y+u*p-h*v,e[t+3]=m*E-u*v-h*p-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),m=u(o/2),v=u(a/2),p=h(i/2),y=h(o/2),E=h(a/2);switch(c){case"XYZ":this._x=p*m*v+d*y*E,this._y=d*y*v-p*m*E,this._z=d*m*E+p*y*v,this._w=d*m*v-p*y*E;break;case"YXZ":this._x=p*m*v+d*y*E,this._y=d*y*v-p*m*E,this._z=d*m*E-p*y*v,this._w=d*m*v+p*y*E;break;case"ZXY":this._x=p*m*v-d*y*E,this._y=d*y*v+p*m*E,this._z=d*m*E+p*y*v,this._w=d*m*v-p*y*E;break;case"ZYX":this._x=p*m*v-d*y*E,this._y=d*y*v+p*m*E,this._z=d*m*E-p*y*v,this._w=d*m*v+p*y*E;break;case"YZX":this._x=p*m*v+d*y*E,this._y=d*y*v+p*m*E,this._z=d*m*E-p*y*v,this._w=d*m*v-p*y*E;break;case"XZY":this._x=p*m*v-d*y*E,this._y=d*y*v-p*m*E,this._z=d*m*E+p*y*v,this._w=d*m*v+p*y*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],h=t[9],d=t[2],m=t[6],v=t[10],p=i+u+v;if(p>0){const y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(m-h)*y,this._y=(a-d)*y,this._z=(c-o)*y}else if(i>u&&i>v){const y=2*Math.sqrt(1+i-u-v);this._w=(m-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+d)/y}else if(u>v){const y=2*Math.sqrt(1+u-i-v);this._w=(a-d)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+m)/y}else{const y=2*Math.sqrt(1+v-i-u);this._w=(c-o)/y,this._x=(a+d)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,h=t._y,d=t._z,m=t._w;return this._x=i*m+c*u+o*d-a*h,this._y=o*m+c*h+a*u-i*d,this._z=a*m+c*d+i*h-o*u,this._w=c*m-i*u-o*h-a*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,o=-o,a=-a,c=-c,u=-u);let h=1-t;if(u<.9995){const d=Math.acos(u),m=Math.sin(d);h=Math.sin(h*d)/m,t=Math.sin(t*d)/m,this._x=this._x*h+i*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ag=class ag{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(w_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*o-u*i),m=2*(u*t-a*o),v=2*(a*i-c*t);return this.x=t+h*d+c*v-u*m,this.y=i+h*m+u*d-a*v,this.z=o+h*v+a*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=o*h-a*u,this.y=a*c-i*h,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ag.prototype.isVector3=!0;let le=ag;const yh=new le,w_=new ia,lg=class lg{constructor(e,t,i,o,a,c,u,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,h,d)}set(e,t,i,o,a,c,u,h,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=a,m[5]=h,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],m=i[4],v=i[7],p=i[2],y=i[5],E=i[8],M=o[0],x=o[3],S=o[6],R=o[1],D=o[4],A=o[7],N=o[2],F=o[5],L=o[8];return a[0]=c*M+u*R+h*N,a[3]=c*x+u*D+h*F,a[6]=c*S+u*A+h*L,a[1]=d*M+m*R+v*N,a[4]=d*x+m*D+v*F,a[7]=d*S+m*A+v*L,a[2]=p*M+y*R+E*N,a[5]=p*x+y*D+E*F,a[8]=p*S+y*A+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8];return t*c*m-t*u*d-i*a*m+i*u*h+o*a*d-o*c*h}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8],v=m*c-u*d,p=u*h-m*a,y=d*a-c*h,E=t*v+i*p+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(o*d-m*i)*M,e[2]=(u*i-o*c)*M,e[3]=p*M,e[4]=(m*t-o*h)*M,e[5]=(o*a-u*t)*M,e[6]=y*M,e[7]=(i*h-d*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-o*d,o*h,-o*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return Yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(e,t)),this}rotate(e){return Yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-e)),this}translate(e,t){return Yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lg.prototype.isMatrix3=!0;let ut=lg;const Sh=new ut,A_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q2(){const n={enabled:!0,workingColorSpace:Vu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Nt&&(o.r=Er(o.r),o.g=Er(o.g),o.b=Er(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=$o(o.r),o.g=$o(o.g),o.b=$o(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ns?zu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vu]:{primaries:e,whitePoint:i,transfer:zu,toXYZ:A_,fromXYZ:b_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:A_,fromXYZ:b_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),n}const vt=Q2();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ao;class J2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ao===void 0&&(Ao=Gu("canvas")),Ao.width=e.width,Ao.height=e.height;const o=Ao.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Ao}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Er(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eD=0;class rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eD++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Eh(o[c].image)):a.push(Eh(o[c]))}else a=Eh(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?J2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let tD=0;const Mh=new le;class zn extends Ks{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=yr,o=yr,a=Nn,c=ks,u=Ii,h=gi,d=zn.DEFAULT_ANISOTROPY,m=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tD++}),this.uuid=xl(),this.name="",this.source=new rg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==YE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ip:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ip:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=YE;zn.DEFAULT_ANISOTROPY=1;const cg=class cg{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const h=e.elements,d=h[0],m=h[4],v=h[8],p=h[1],y=h[5],E=h[9],M=h[2],x=h[6],S=h[10];if(Math.abs(m-p)<.01&&Math.abs(v-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+p)<.1&&Math.abs(v+M)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,A=(y+1)/2,N=(S+1)/2,F=(m+p)/4,L=(v+M)/4,T=(E+x)/4;return D>A&&D>N?D<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(D),o=F/i,a=L/i):A>N?A<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(A),i=F/o,a=T/o):N<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(N),i=L/a,o=T/a),this.set(i,o,a,t),this}let R=Math.sqrt((x-E)*(x-E)+(v-M)*(v-M)+(p-m)*(p-m));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(v-M)/R,this.z=(p-m)/R,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cg.prototype.isVector4=!0;let nn=cg;class nD extends Ks{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new zn(o),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new rg(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends nD{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nM extends zn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iD extends zn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=class Xu{constructor(e,t,i,o,a,c,u,h,d,m,v,p,y,E,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,h,d,m,v,p,y,E,M,x)}set(e,t,i,o,a,c,u,h,d,m,v,p,y,E,M,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=h,S[2]=d,S[6]=m,S[10]=v,S[14]=p,S[3]=y,S[7]=E,S[11]=M,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,o=1/bo.setFromMatrixColumn(e,0).length(),a=1/bo.setFromMatrixColumn(e,1).length(),c=1/bo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(o),d=Math.sin(o),m=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const p=c*m,y=c*v,E=u*m,M=u*v;t[0]=h*m,t[4]=-h*v,t[8]=d,t[1]=y+E*d,t[5]=p-M*d,t[9]=-u*h,t[2]=M-p*d,t[6]=E+y*d,t[10]=c*h}else if(e.order==="YXZ"){const p=h*m,y=h*v,E=d*m,M=d*v;t[0]=p+M*u,t[4]=E*u-y,t[8]=c*d,t[1]=c*v,t[5]=c*m,t[9]=-u,t[2]=y*u-E,t[6]=M+p*u,t[10]=c*h}else if(e.order==="ZXY"){const p=h*m,y=h*v,E=d*m,M=d*v;t[0]=p-M*u,t[4]=-c*v,t[8]=E+y*u,t[1]=y+E*u,t[5]=c*m,t[9]=M-p*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const p=c*m,y=c*v,E=u*m,M=u*v;t[0]=h*m,t[4]=E*d-y,t[8]=p*d+M,t[1]=h*v,t[5]=M*d+p,t[9]=y*d-E,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const p=c*h,y=c*d,E=u*h,M=u*d;t[0]=h*m,t[4]=M-p*v,t[8]=E*v+y,t[1]=v,t[5]=c*m,t[9]=-u*m,t[2]=-d*m,t[6]=y*v+E,t[10]=p-M*v}else if(e.order==="XZY"){const p=c*h,y=c*d,E=u*h,M=u*d;t[0]=h*m,t[4]=-v,t[8]=d*m,t[1]=p*v+M,t[5]=c*m,t[9]=y*v-E,t[2]=E*v-y,t[6]=u*m,t[10]=M*v+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rD,e,sD)}lookAt(e,t,i){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),$r.crossVectors(i,ri),$r.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),$r.crossVectors(i,ri)),$r.normalize(),kc.crossVectors(ri,$r),o[0]=$r.x,o[4]=kc.x,o[8]=ri.x,o[1]=$r.y,o[5]=kc.y,o[9]=ri.y,o[2]=$r.z,o[6]=kc.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],m=i[1],v=i[5],p=i[9],y=i[13],E=i[2],M=i[6],x=i[10],S=i[14],R=i[3],D=i[7],A=i[11],N=i[15],F=o[0],L=o[4],T=o[8],I=o[12],z=o[1],V=o[5],j=o[9],re=o[13],de=o[2],Z=o[6],H=o[10],W=o[14],G=o[3],ee=o[7],se=o[11],O=o[15];return a[0]=c*F+u*z+h*de+d*G,a[4]=c*L+u*V+h*Z+d*ee,a[8]=c*T+u*j+h*H+d*se,a[12]=c*I+u*re+h*W+d*O,a[1]=m*F+v*z+p*de+y*G,a[5]=m*L+v*V+p*Z+y*ee,a[9]=m*T+v*j+p*H+y*se,a[13]=m*I+v*re+p*W+y*O,a[2]=E*F+M*z+x*de+S*G,a[6]=E*L+M*V+x*Z+S*ee,a[10]=E*T+M*j+x*H+S*se,a[14]=E*I+M*re+x*W+S*O,a[3]=R*F+D*z+A*de+N*G,a[7]=R*L+D*V+A*Z+N*ee,a[11]=R*T+D*j+A*H+N*se,a[15]=R*I+D*re+A*W+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],h=e[9],d=e[13],m=e[2],v=e[6],p=e[10],y=e[14],E=e[3],M=e[7],x=e[11],S=e[15],R=h*y-d*p,D=u*y-d*v,A=u*p-h*v,N=c*y-d*m,F=c*p-h*m,L=c*v-u*m;return t*(M*R-x*D+S*A)-i*(E*R-x*N+S*F)+o*(E*D-M*N+S*L)-a*(E*A-M*F+x*L)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[1],c=e[5],u=e[9],h=e[2],d=e[6],m=e[10];return t*(c*m-u*d)-i*(a*m-u*h)+o*(a*d-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8],v=e[9],p=e[10],y=e[11],E=e[12],M=e[13],x=e[14],S=e[15],R=t*u-i*c,D=t*h-o*c,A=t*d-a*c,N=i*h-o*u,F=i*d-a*u,L=o*d-a*h,T=m*M-v*E,I=m*x-p*E,z=m*S-y*E,V=v*x-p*M,j=v*S-y*M,re=p*S-y*x,de=R*re-D*j+A*V+N*z-F*I+L*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/de;return e[0]=(u*re-h*j+d*V)*Z,e[1]=(o*j-i*re-a*V)*Z,e[2]=(M*L-x*F+S*N)*Z,e[3]=(p*F-v*L-y*N)*Z,e[4]=(h*z-c*re-d*I)*Z,e[5]=(t*re-o*z+a*I)*Z,e[6]=(x*A-E*L-S*D)*Z,e[7]=(m*L-p*A+y*D)*Z,e[8]=(c*j-u*z+d*T)*Z,e[9]=(i*z-t*j-a*T)*Z,e[10]=(E*F-M*A+S*R)*Z,e[11]=(v*A-m*F-y*R)*Z,e[12]=(u*I-c*V-h*T)*Z,e[13]=(t*V-i*I+o*T)*Z,e[14]=(M*D-E*N-x*R)*Z,e[15]=(m*N-v*D+p*R)*Z,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,h=e.z,d=a*c,m=a*u;return this.set(d*c+i,d*u-o*h,d*h+o*u,0,d*u+o*h,m*u+i,m*h-o*c,0,d*h-o*u,m*h+o*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,d=a+a,m=c+c,v=u+u,p=a*d,y=a*m,E=a*v,M=c*m,x=c*v,S=u*v,R=h*d,D=h*m,A=h*v,N=i.x,F=i.y,L=i.z;return o[0]=(1-(M+S))*N,o[1]=(y+A)*N,o[2]=(E-D)*N,o[3]=0,o[4]=(y-A)*F,o[5]=(1-(p+S))*F,o[6]=(x+R)*F,o[7]=0,o[8]=(E+D)*L,o[9]=(x-R)*L,o[10]=(1-(p+M))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let c=bo.set(o[0],o[1],o[2]).length();const u=bo.set(o[4],o[5],o[6]).length(),h=bo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ci.copy(this);const d=1/c,m=1/u,v=1/h;return Ci.elements[0]*=d,Ci.elements[1]*=d,Ci.elements[2]*=d,Ci.elements[4]*=m,Ci.elements[5]*=m,Ci.elements[6]*=m,Ci.elements[8]*=v,Ci.elements[9]*=v,Ci.elements[10]*=v,t.setFromRotationMatrix(Ci),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,o,a,c,u=Zi,h=!1){const d=this.elements,m=2*a/(t-e),v=2*a/(i-o),p=(t+e)/(t-e),y=(i+o)/(i-o);let E,M;if(h)E=a/(c-a),M=c*a/(c-a);else if(u===Zi)E=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Hu)E=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=v,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Zi,h=!1){const d=this.elements,m=2/(t-e),v=2/(i-o),p=-(t+e)/(t-e),y=-(i+o)/(i-o);let E,M;if(h)E=1/(c-a),M=c/(c-a);else if(u===Zi)E=-2/(c-a),M=-(c+a)/(c-a);else if(u===Hu)E=-1/(c-a),M=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=0,d[12]=p,d[1]=0,d[5]=v,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xu.prototype.isMatrix4=!0;let sn=Xu;const bo=new le,Ci=new sn,rD=new le(0,0,0),sD=new le(1,1,1),$r=new le,kc=new le,ri=new le,C_=new sn,R_=new ia;class Ys{constructor(e=0,t=0,i=0,o=Ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],h=o[1],d=o[5],m=o[9],v=o[2],p=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return C_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ys.DEFAULT_ORDER="XYZ";class iM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oD=0;const P_=new le,Co=new ia,hr=new sn,Bc=new le,Ga=new le,aD=new le,lD=new ia,D_=new le(1,0,0),L_=new le(0,1,0),N_=new le(0,0,1),I_={type:"added"},cD={type:"removed"},Ro={type:"childadded",child:null},Th={type:"childremoved",child:null};class Jn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oD++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new le,t=new Ys,i=new ia,o=new le(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new ut}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(D_,e)}rotateY(e){return this.rotateOnAxis(L_,e)}rotateZ(e){return this.rotateOnAxis(N_,e)}translateOnAxis(e,t){return P_.copy(e).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(D_,e)}translateY(e){return this.translateOnAxis(L_,e)}translateZ(e){return this.translateOnAxis(N_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bc.copy(e):Bc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Ga,Bc,this.up):hr.lookAt(Bc,Ga,this.up),this.quaternion.setFromRotationMatrix(hr),o&&(hr.extractRotation(o.matrixWorld),Co.setFromRotationMatrix(hr),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I_),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cD),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I_),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,aD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,lD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const v=h[d];a(e.shapes,v)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(e.materials,this.material[h]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),m=c(e.images),v=c(e.shapes),p=c(e.skeletons),y=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),p.length>0&&(i.skeletons=p),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Jn.DEFAULT_UP=new le(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vc extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uD={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,i),S=this._getHandJoint(d,M);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const m=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],p=m.position.distanceTo(v.position),y=.02,E=.005;d.inputState.pinching&&p>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(uD)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const rM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},zc={h:0,s:0,l:0};function Ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class At{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=vt.workingColorSpace){if(e=Z2(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Ah(c,a,e+1/3),this.g=Ah(c,a,e),this.b=Ah(c,a,e-1/3)}return vt.colorSpaceToWorking(this,o),this}setStyle(e,t=mi){function i(a){a!==void 0&&parseFloat(a)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const i=rM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return vt.workingToColorSpace(Ln.copy(this),e),Math.round(xt(Ln.r*255,0,255))*65536+Math.round(xt(Ln.g*255,0,255))*256+Math.round(xt(Ln.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,o=Ln.g,a=Ln.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let h,d;const m=(u+c)/2;if(u===c)h=0,d=0;else{const v=c-u;switch(d=m<=.5?v/(c+u):v/(2-c-u),c){case i:h=(o-a)/v+(o<a?6:0);break;case o:h=(a-i)/v+2;break;case a:h=(i-o)/v+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=mi){vt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,o=Ln.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(zc);const i=_h(qr.h,zc.h,t),o=_h(qr.s,zc.s,t),a=_h(qr.l,zc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new At;At.NAMES=rM;class fD extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ys,this.environmentIntensity=1,this.environmentRotation=new Ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new le,pr=new le,bh=new le,mr=new le,Po=new le,Do=new le,F_=new le,Ch=new le,Rh=new le,Ph=new le,Dh=new nn,Lh=new nn,Nh=new nn;class Ni{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ri.subVectors(e,t),o.cross(Ri);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Ri.subVectors(o,t),pr.subVectors(i,t),bh.subVectors(e,t);const c=Ri.dot(Ri),u=Ri.dot(pr),h=Ri.dot(bh),d=pr.dot(pr),m=pr.dot(bh),v=c*d-u*u;if(v===0)return a.set(0,0,0),null;const p=1/v,y=(d*h-u*m)*p,E=(c*m-u*h)*p;return a.set(1-y-E,E,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,i,o,a,c,u,h){return this.getBarycoord(e,t,i,o,mr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,mr.x),h.addScaledVector(c,mr.y),h.addScaledVector(u,mr.z),h)}static getInterpolatedAttribute(e,t,i,o,a,c){return Dh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,t),Lh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Dh,a.x),c.addScaledVector(Lh,a.y),c.addScaledVector(Nh,a.z),c}static isFrontFacing(e,t,i,o){return Ri.subVectors(i,t),pr.subVectors(e,t),Ri.cross(pr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ri.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Ni.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;Po.subVectors(o,i),Do.subVectors(a,i),Ch.subVectors(e,i);const h=Po.dot(Ch),d=Do.dot(Ch);if(h<=0&&d<=0)return t.copy(i);Rh.subVectors(e,o);const m=Po.dot(Rh),v=Do.dot(Rh);if(m>=0&&v<=m)return t.copy(o);const p=h*v-m*d;if(p<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(i).addScaledVector(Po,c);Ph.subVectors(e,a);const y=Po.dot(Ph),E=Do.dot(Ph);if(E>=0&&y<=E)return t.copy(a);const M=y*d-h*E;if(M<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(i).addScaledVector(Do,u);const x=m*E-y*v;if(x<=0&&v-m>=0&&y-E>=0)return F_.subVectors(a,o),u=(v-m)/(v-m+(y-E)),t.copy(o).addScaledVector(F_,u);const S=1/(x+M+p);return c=M*S,u=p*S,t.copy(i).addScaledVector(Po,c).addScaledVector(Do,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Pi):Pi.fromBufferAttribute(a,c),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hc.copy(i.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),Gc.subVectors(this.max,Wa),Lo.subVectors(e.a,Wa),No.subVectors(e.b,Wa),Io.subVectors(e.c,Wa),Kr.subVectors(No,Lo),Zr.subVectors(Io,No),Cs.subVectors(Lo,Io);let t=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Cs.z,Cs.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Cs.z,0,-Cs.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Cs.y,Cs.x,0];return!Ih(t,Lo,No,Io,Gc)||(t=[1,0,0,0,1,0,0,0,1],!Ih(t,Lo,No,Io,Gc))?!1:(Wc.crossVectors(Kr,Zr),t=[Wc.x,Wc.y,Wc.z],Ih(t,Lo,No,Io,Gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new le,new le,new le,new le,new le,new le,new le,new le],Pi=new le,Hc=new _l,Lo=new le,No=new le,Io=new le,Kr=new le,Zr=new le,Cs=new le,Wa=new le,Gc=new le,Wc=new le,Rs=new le;function Ih(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){Rs.fromArray(n,a);const u=o.x*Math.abs(Rs.x)+o.y*Math.abs(Rs.y)+o.z*Math.abs(Rs.z),h=e.dot(Rs),d=t.dot(Rs),m=i.dot(Rs);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>u)return!1}return!0}const ln=new le,Xc=new bt;let dD=0;class Ui extends Ks{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dD++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=S_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xc.fromBufferAttribute(this,t),Xc.applyMatrix3(e),this.setXY(t,Xc.x,Xc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ha(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),o=Kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),o=Kn(o,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sM extends Ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oM extends Ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mr extends Ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}const hD=new _l,Xa=new le,Fh=new le;class nf{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hD.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const t=Xa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Xa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(Fh)),this.expandByPoint(Xa.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pD=0;const pi=new sn,Uh=new Jn,Fo=new le,si=new _l,ja=new _l,_n=new le;class ki extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pD++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y2(e)?oM:sM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ut().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mr(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];si.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ja.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(si.min,ja.min),si.expandByPoint(_n),_n.addVectors(si.max,ja.max),si.expandByPoint(_n)):(si.expandByPoint(ja.min),si.expandByPoint(ja.max))}si.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)_n.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(_n));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)_n.fromBufferAttribute(u,d),h&&(Fo.fromBufferAttribute(e,d),_n.add(Fo)),o=Math.max(o,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new le,h[T]=new le;const d=new le,m=new le,v=new le,p=new bt,y=new bt,E=new bt,M=new le,x=new le;function S(T,I,z){d.fromBufferAttribute(i,T),m.fromBufferAttribute(i,I),v.fromBufferAttribute(i,z),p.fromBufferAttribute(a,T),y.fromBufferAttribute(a,I),E.fromBufferAttribute(a,z),m.sub(d),v.sub(d),y.sub(p),E.sub(p);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(V),x.copy(v).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(V),u[T].add(M),u[I].add(M),u[z].add(M),h[T].add(x),h[I].add(x),h[z].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,I=R.length;T<I;++T){const z=R[T],V=z.start,j=z.count;for(let re=V,de=V+j;re<de;re+=3)S(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const D=new le,A=new le,N=new le,F=new le;function L(T){N.fromBufferAttribute(o,T),F.copy(N);const I=u[T];D.copy(I),D.sub(N.multiplyScalar(N.dot(I))).normalize(),A.crossVectors(F,I);const V=A.dot(h[T])<0?-1:1;c.setXYZW(T,D.x,D.y,D.z,V)}for(let T=0,I=R.length;T<I;++T){const z=R[T],V=z.start,j=z.count;for(let re=V,de=V+j;re<de;re+=3)L(e.getX(re+0)),L(e.getX(re+1)),L(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,y=i.count;p<y;p++)i.setXYZ(p,0,0,0);const o=new le,a=new le,c=new le,u=new le,h=new le,d=new le,m=new le,v=new le;if(e)for(let p=0,y=e.count;p<y;p+=3){const E=e.getX(p+0),M=e.getX(p+1),x=e.getX(p+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),u.add(m),h.add(m),d.add(m),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let p=0,y=t.count;p<y;p+=3)o.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),c.fromBufferAttribute(t,p+2),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),i.setXYZ(p+0,m.x,m.y,m.z),i.setXYZ(p+1,m.x,m.y,m.z),i.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,h){const d=u.array,m=u.itemSize,v=u.normalized,p=new d.constructor(h.length*m);let y=0,E=0;for(let M=0,x=h.length;M<x;M++){u.isInterleavedBufferAttribute?y=h[M]*u.data.stride+u.offset:y=h[M]*m;for(let S=0;S<m;S++)p[E++]=d[y++]}return new Ui(p,m,v)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ki,i=this.index.array,o=this.attributes;for(const u in o){const h=o[u],d=e(h,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let m=0,v=d.length;m<v;m++){const p=d[m],y=e(p,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let v=0,p=d.length;v<p;v++){const y=d[v];m.push(y.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],v=a[d];for(let p=0,y=v.length;p<y;p++)m.push(v[p].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mD=0;class yl extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mD++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=jo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Ap,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector2&&i&&i.isVector2||o&&o.isEuler&&i&&i.isEuler||o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wp&&(i.blendSrc=this.blendSrc),this.blendDst!==Ap&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new bt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new le,Oh=new le,jc=new le,Qr=new le,kh=new le,Yc=new le,Bh=new le;class aM{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Oh.copy(e).add(t).multiplyScalar(.5),jc.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Oh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(jc),u=Qr.dot(this.direction),h=-Qr.dot(jc),d=Qr.lengthSq(),m=Math.abs(1-c*c);let v,p,y,E;if(m>0)if(v=c*h-u,p=c*u-h,E=a*m,v>=0)if(p>=-E)if(p<=E){const M=1/m;v*=M,p*=M,y=v*(v+c*p+2*u)+p*(c*v+p+2*h)+d}else p=a,v=Math.max(0,-(c*p+u)),y=-v*v+p*(p+2*h)+d;else p=-a,v=Math.max(0,-(c*p+u)),y=-v*v+p*(p+2*h)+d;else p<=-E?(v=Math.max(0,-(-c*a+u)),p=v>0?-a:Math.min(Math.max(-a,-h),a),y=-v*v+p*(p+2*h)+d):p<=E?(v=0,p=Math.min(Math.max(-a,-h),a),y=p*(p+2*h)+d):(v=Math.max(0,-(c*a+u)),p=v>0?a:Math.min(Math.max(-a,-h),a),y=-v*v+p*(p+2*h)+d);else p=c>0?-a:a,v=Math.max(0,-(c*p+u)),y=-v*v+p*(p+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Oh).addScaledVector(jc,p),y}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),o=vr.dot(vr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,h;const d=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,p=this.origin;return d>=0?(i=(e.min.x-p.x)*d,o=(e.max.x-p.x)*d):(i=(e.max.x-p.x)*d,o=(e.min.x-p.x)*d),m>=0?(a=(e.min.y-p.y)*m,c=(e.max.y-p.y)*m):(a=(e.max.y-p.y)*m,c=(e.min.y-p.y)*m),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-p.z)*v,h=(e.max.z-p.z)*v):(u=(e.max.z-p.z)*v,h=(e.min.z-p.z)*v),i>h||u>o)||((u>i||i!==i)&&(i=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,o,a){kh.subVectors(t,e),Yc.subVectors(i,e),Bh.crossVectors(kh,Yc);let c=this.direction.dot(Bh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Qr.subVectors(this.origin,e);const h=u*this.direction.dot(Yc.crossVectors(Qr,Yc));if(h<0)return null;const d=u*this.direction.dot(kh.cross(Qr));if(d<0||h+d>c)return null;const m=-u*Qr.dot(Bh);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lM extends yl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ys,this.combine=BE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const U_=new sn,Ps=new aM,$c=new nf,O_=new le,qc=new le,Kc=new le,Zc=new le,Vh=new le,Qc=new le,k_=new le,Jc=new le;class br extends Jn{constructor(e=new ki,t=new lM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Qc.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const m=u[h],v=a[h];m!==0&&(Vh.fromBufferAttribute(v,e),c?Qc.addScaledVector(Vh,m):Qc.addScaledVector(Vh.sub(t),m))}t.add(Qc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(a),Ps.copy(e.ray).recast(e.near),!($c.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere($c,O_)===null||Ps.origin.distanceToSquared(O_)>(e.far-e.near)**2))&&(U_.copy(a).invert(),Ps.copy(e.ray).applyMatrix4(U_),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,v=a.attributes.normal,p=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=p.length;E<M;E++){const x=p[E],S=c[x.materialIndex],R=Math.max(x.start,y.start),D=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let A=R,N=D;A<N;A+=3){const F=u.getX(A),L=u.getX(A+1),T=u.getX(A+2);o=eu(this,S,e,i,d,m,v,F,L,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(u.count,y.start+y.count);for(let x=E,S=M;x<S;x+=3){const R=u.getX(x),D=u.getX(x+1),A=u.getX(x+2);o=eu(this,c,e,i,d,m,v,R,D,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=p.length;E<M;E++){const x=p[E],S=c[x.materialIndex],R=Math.max(x.start,y.start),D=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let A=R,N=D;A<N;A+=3){const F=A,L=A+1,T=A+2;o=eu(this,S,e,i,d,m,v,F,L,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let x=E,S=M;x<S;x+=3){const R=x,D=x+1,A=x+2;o=eu(this,c,e,i,d,m,v,R,D,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function gD(n,e,t,i,o,a,c,u){let h;if(e.side===Qn?h=i.intersectTriangle(c,a,o,!0,u):h=i.intersectTriangle(o,a,c,e.side===as,u),h===null)return null;Jc.copy(u),Jc.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Jc);return d<t.near||d>t.far?null:{distance:d,point:Jc.clone(),object:n}}function eu(n,e,t,i,o,a,c,u,h,d){n.getVertexPosition(u,qc),n.getVertexPosition(h,Kc),n.getVertexPosition(d,Zc);const m=gD(n,e,t,i,qc,Kc,Zc,k_);if(m){const v=new le;Ni.getBarycoord(k_,qc,Kc,Zc,v),o&&(m.uv=Ni.getInterpolatedAttribute(o,u,h,d,v,new bt)),a&&(m.uv1=Ni.getInterpolatedAttribute(a,u,h,d,v,new bt)),c&&(m.normal=Ni.getInterpolatedAttribute(c,u,h,d,v,new le),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const p={a:u,b:h,c:d,normal:new le,materialIndex:0};Ni.getNormal(qc,Kc,Zc,p.normal),m.face=p,m.barycoord=v}return m}class vD extends zn{constructor(e=null,t=1,i=1,o,a,c,u,h,d=wn,m=wn,v,p){super(null,c,u,h,d,m,o,a,v,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new le,xD=new le,_D=new ut;class Ns{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=zh.subVectors(i,t).cross(xD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(zh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_D.getNormalMatrix(e),o=this.coplanarPoint(zh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new nf,yD=new bt(.5,.5),tu=new le;class cM{constructor(e=new Ns,t=new Ns,i=new Ns,o=new Ns,a=new Ns,c=new Ns){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],h=a[2],d=a[3],m=a[4],v=a[5],p=a[6],y=a[7],E=a[8],M=a[9],x=a[10],S=a[11],R=a[12],D=a[13],A=a[14],N=a[15];if(o[0].setComponents(d-c,y-m,S-E,N-R).normalize(),o[1].setComponents(d+c,y+m,S+E,N+R).normalize(),o[2].setComponents(d+u,y+v,S+M,N+D).normalize(),o[3].setComponents(d-u,y-v,S-M,N-D).normalize(),i)o[4].setComponents(h,p,x,A).normalize(),o[5].setComponents(d-h,y-p,S-x,N-A).normalize();else if(o[4].setComponents(d-h,y-p,S-x,N-A).normalize(),t===Zi)o[5].setComponents(d+h,y+p,S+x,N+A).normalize();else if(t===Hu)o[5].setComponents(h,p,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const t=yD.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(tu.x=o.normal.x>0?e.max.x:e.min.x,tu.y=o.normal.y>0?e.max.y:e.min.y,tu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uM extends yl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const B_=new sn,hm=new aM,nu=new nf,iu=new le;class SD extends Jn{constructor(e=new ki,t=new uM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nu.copy(i.boundingSphere),nu.applyMatrix4(o),nu.radius+=a,e.ray.intersectsSphere(nu)===!1)return;B_.copy(o).invert(),hm.copy(e.ray).applyMatrix4(B_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=i.index,v=i.attributes.position;if(d!==null){const p=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let E=p,M=y;E<M;E++){const x=d.getX(E);iu.fromBufferAttribute(v,x),V_(iu,x,h,o,e,t,this)}}else{const p=Math.max(0,c.start),y=Math.min(v.count,c.start+c.count);for(let E=p,M=y;E<M;E++)iu.fromBufferAttribute(v,E),V_(iu,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function V_(n,e,t,i,o,a,c){const u=hm.distanceSqToPoint(n);if(u<t){const h=new le;hm.closestPointToPoint(n,h),h.applyMatrix4(i);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class fM extends zn{constructor(e=[],t=Xs,i,o,a,c,u,h,d,m){super(e,t,i,o,a,c,u,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qo extends zn{constructor(e,t,i=nr,o,a,c,u=wn,h=wn,d,m=Ar,v=1){if(m!==Ar&&m!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:v};super(p,o,a,c,u,h,m,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ED extends Qo{constructor(e,t=nr,i=Xs,o,a,c=wn,u=wn,h,d=Ar){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,i,o,a,c,u,h,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dM extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sl extends ki{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],m=[],v=[];let p=0,y=0;E("z","y","x",-1,-1,i,t,e,c,a,0),E("z","y","x",1,-1,i,t,-e,c,a,1),E("x","z","y",1,1,e,i,t,o,c,2),E("x","z","y",1,-1,e,i,-t,o,c,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(h),this.setAttribute("position",new Mr(d,3)),this.setAttribute("normal",new Mr(m,3)),this.setAttribute("uv",new Mr(v,2));function E(M,x,S,R,D,A,N,F,L,T,I){const z=A/L,V=N/T,j=A/2,re=N/2,de=F/2,Z=L+1,H=T+1;let W=0,G=0;const ee=new le;for(let se=0;se<H;se++){const O=se*V-re;for(let Q=0;Q<Z;Q++){const Ne=Q*z-j;ee[M]=Ne*R,ee[x]=O*D,ee[S]=de,d.push(ee.x,ee.y,ee.z),ee[M]=0,ee[x]=0,ee[S]=F>0?1:-1,m.push(ee.x,ee.y,ee.z),v.push(Q/L),v.push(1-se/T),W+=1}}for(let se=0;se<T;se++)for(let O=0;O<L;O++){const Q=p+O+Z*se,Ne=p+O+Z*(se+1),Xe=p+(O+1)+Z*(se+1),Ve=p+(O+1)+Z*se;h.push(Q,Ne,Ve),h.push(Ne,Xe,Ve),G+=6}u.addGroup(y,G,I),y+=G,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rf extends ki{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),h=Math.floor(o),d=u+1,m=h+1,v=e/u,p=t/h,y=[],E=[],M=[],x=[];for(let S=0;S<m;S++){const R=S*p-c;for(let D=0;D<d;D++){const A=D*v-a;E.push(A,-R,0),M.push(0,0,1),x.push(D/u),x.push(1-S/h)}}for(let S=0;S<h;S++)for(let R=0;R<u;R++){const D=R+d*S,A=R+d*(S+1),N=R+1+d*(S+1),F=R+1+d*S;y.push(D,A,F),y.push(A,N,F)}this.setIndex(y),this.setAttribute("position",new Mr(E,3)),this.setAttribute("normal",new Mr(M,3)),this.setAttribute("uv",new Mr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.width,e.height,e.widthSegments,e.heightSegments)}}function Jo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];if(z_(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(z_(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function kn(n){const e={};for(let t=0;t<n.length;t++){const i=Jo(n[t]);for(const o in i)e[o]=i[o]}return e}function z_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function MD(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const TD={clone:Jo,merge:kn};var wD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends yl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wD,this.fragmentShader=AD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=MD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const o=e.uniforms[i];switch(this.uniforms[i]={},o.type){case"t":this.uniforms[i].value=t[o.value]||null;break;case"c":this.uniforms[i].value=new At().setHex(o.value);break;case"v2":this.uniforms[i].value=new bt().fromArray(o.value);break;case"v3":this.uniforms[i].value=new le().fromArray(o.value);break;case"v4":this.uniforms[i].value=new nn().fromArray(o.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[i].value=new sn().fromArray(o.value);break;default:this.uniforms[i].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bD extends ir{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CD extends yl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RD extends yl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ru=new le,su=new ia,Wi=new le;class pM extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ru,su,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ru,su,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new le,H_=new bt,G_=new bt;class Li extends pM{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,H_,G_),t.subVectors(G_,H_)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xh*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*i/d,o*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sg extends pM{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Uo=-90,Oo=1;class PD extends Jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li(Uo,Oo,e,t);o.layers=this.layers,this.add(o);const a=new Li(Uo,Oo,e,t);a.layers=this.layers,this.add(a);const c=new Li(Uo,Oo,e,t);c.layers=this.layers,this.add(c);const u=new Li(Uo,Oo,e,t);u.layers=this.layers,this.add(u);const h=new Li(Uo,Oo,e,t);h.layers=this.layers,this.add(h);const d=new Li(Uo,Oo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,h]=t;for(const d of t)this.remove(d);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,d,m]=this.children,v=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,p,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class DD extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ug=class ug{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};ug.prototype.isMatrix2=!0;let W_=ug;function X_(n,e,t,i){const o=LD(i);switch(t){case QE:return n*e;case eM:return n*e/o.components*o.byteLength;case Jm:return n*e/o.components*o.byteLength;case js:return n*e*2/o.components*o.byteLength;case eg:return n*e*2/o.components*o.byteLength;case JE:return n*e*3/o.components*o.byteLength;case Ii:return n*e*4/o.components*o.byteLength;case tg:return n*e*4/o.components*o.byteLength;case yu:case Su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Op:case Bp:return Math.max(n,16)*Math.max(e,8)/4;case Up:case kp:return Math.max(n,8)*Math.max(e,8)/2;case Vp:case zp:case Gp:case Wp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hp:case ku:case Xp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $p:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case om:case am:case lm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cm:case um:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bu:case fm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LD(n){switch(n){case gi:case $E:return{byteLength:1,components:1};case ul:case qE:case wr:return{byteLength:2,components:1};case Zm:case Qm:return{byteLength:2,components:4};case nr:case Km:case Ki:return{byteLength:4,components:1};case KE:case ZE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mM(){let n=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function ND(n){const e=new WeakMap;function t(u,h){const d=u.array,m=u.usage,v=d.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,d,m),u.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,h,d){const m=h.array,v=h.updateRanges;if(n.bindBuffer(d,u),v.length===0)n.bufferSubData(d,0,m);else{v.sort((y,E)=>y.start-E.start);let p=0;for(let y=1;y<v.length;y++){const E=v[p],M=v[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++p,v[p]=M)}v.length=p+1;for(let y=0,E=v.length;y<E;y++){const M=v[y];n.bufferSubData(d,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(n.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:o,remove:a,update:c}}var ID=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$D=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,i3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,o3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u3="gl_FragColor = linearToOutputTexel( gl_FragColor );",f3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,A3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,O3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,uL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_L=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ML=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$L=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:ID,alphahash_pars_fragment:FD,alphamap_fragment:UD,alphamap_pars_fragment:OD,alphatest_fragment:kD,alphatest_pars_fragment:BD,aomap_fragment:VD,aomap_pars_fragment:zD,batching_pars_vertex:HD,batching_vertex:GD,begin_vertex:WD,beginnormal_vertex:XD,bsdfs:jD,iridescence_fragment:YD,bumpmap_pars_fragment:$D,clipping_planes_fragment:qD,clipping_planes_pars_fragment:KD,clipping_planes_pars_vertex:ZD,clipping_planes_vertex:QD,color_fragment:JD,color_pars_fragment:e3,color_pars_vertex:t3,color_vertex:n3,common:i3,cube_uv_reflection_fragment:r3,defaultnormal_vertex:s3,displacementmap_pars_vertex:o3,displacementmap_vertex:a3,emissivemap_fragment:l3,emissivemap_pars_fragment:c3,colorspace_fragment:u3,colorspace_pars_fragment:f3,envmap_fragment:d3,envmap_common_pars_fragment:h3,envmap_pars_fragment:p3,envmap_pars_vertex:m3,envmap_physical_pars_fragment:A3,envmap_vertex:g3,fog_vertex:v3,fog_pars_vertex:x3,fog_fragment:_3,fog_pars_fragment:y3,gradientmap_pars_fragment:S3,lightmap_pars_fragment:E3,lights_lambert_fragment:M3,lights_lambert_pars_fragment:T3,lights_pars_begin:w3,lights_toon_fragment:b3,lights_toon_pars_fragment:C3,lights_phong_fragment:R3,lights_phong_pars_fragment:P3,lights_physical_fragment:D3,lights_physical_pars_fragment:L3,lights_fragment_begin:N3,lights_fragment_maps:I3,lights_fragment_end:F3,lightprobes_pars_fragment:U3,logdepthbuf_fragment:O3,logdepthbuf_pars_fragment:k3,logdepthbuf_pars_vertex:B3,logdepthbuf_vertex:V3,map_fragment:z3,map_pars_fragment:H3,map_particle_fragment:G3,map_particle_pars_fragment:W3,metalnessmap_fragment:X3,metalnessmap_pars_fragment:j3,morphinstance_vertex:Y3,morphcolor_vertex:$3,morphnormal_vertex:q3,morphtarget_pars_vertex:K3,morphtarget_vertex:Z3,normal_fragment_begin:Q3,normal_fragment_maps:J3,normal_pars_fragment:eL,normal_pars_vertex:tL,normal_vertex:nL,normalmap_pars_fragment:iL,clearcoat_normal_fragment_begin:rL,clearcoat_normal_fragment_maps:sL,clearcoat_pars_fragment:oL,iridescence_pars_fragment:aL,opaque_fragment:lL,packing:cL,premultiplied_alpha_fragment:uL,project_vertex:fL,dithering_fragment:dL,dithering_pars_fragment:hL,roughnessmap_fragment:pL,roughnessmap_pars_fragment:mL,shadowmap_pars_fragment:gL,shadowmap_pars_vertex:vL,shadowmap_vertex:xL,shadowmask_pars_fragment:_L,skinbase_vertex:yL,skinning_pars_vertex:SL,skinning_vertex:EL,skinnormal_vertex:ML,specularmap_fragment:TL,specularmap_pars_fragment:wL,tonemapping_fragment:AL,tonemapping_pars_fragment:bL,transmission_fragment:CL,transmission_pars_fragment:RL,uv_pars_fragment:PL,uv_pars_vertex:DL,uv_vertex:LL,worldpos_vertex:NL,background_vert:IL,background_frag:FL,backgroundCube_vert:UL,backgroundCube_frag:OL,cube_vert:kL,cube_frag:BL,depth_vert:VL,depth_frag:zL,distance_vert:HL,distance_frag:GL,equirect_vert:WL,equirect_frag:XL,linedashed_vert:jL,linedashed_frag:YL,meshbasic_vert:$L,meshbasic_frag:qL,meshlambert_vert:KL,meshlambert_frag:ZL,meshmatcap_vert:QL,meshmatcap_frag:JL,meshnormal_vert:eN,meshnormal_frag:tN,meshphong_vert:nN,meshphong_frag:iN,meshphysical_vert:rN,meshphysical_frag:sN,meshtoon_vert:oN,meshtoon_frag:aN,points_vert:lN,points_frag:cN,shadow_vert:uN,shadow_frag:fN,sprite_vert:dN,sprite_frag:hN},Ue={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},$i={basic:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:kn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:kn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:kn([Ue.points,Ue.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:kn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:kn([Ue.common,Ue.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:kn([Ue.sprite,Ue.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:kn([Ue.common,Ue.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:kn([Ue.lights,Ue.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};$i.physical={uniforms:kn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ou={r:0,b:0,g:0},pN=new sn,gM=new ut;gM.set(-1,0,0,0,1,0,0,0,1);function mN(n,e,t,i,o,a){const c=new At(0);let u=o===!0?0:1,h,d,m=null,v=0,p=null;function y(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){const A=R.backgroundBlurriness>0;D=e.get(D,A)}return D}function E(R){let D=!1;const A=y(R);A===null?x(c,u):A&&A.isColor&&(x(A,1),D=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(R,D){const A=y(D);A&&(A.isCubeTexture||A.mapping===tf)?(d===void 0&&(d=new br(new Sl(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Jo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,F,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pN.makeRotationFromEuler(D.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(gM),d.material.toneMapped=vt.getTransfer(A.colorSpace)!==Nt,(m!==A||v!==A.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,m=A,v=A.version,p=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new br(new rf(2,2),new ir({name:"BackgroundMaterial",uniforms:Jo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=vt.getTransfer(A.colorSpace)!==Nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||v!==A.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,m=A,v=A.version,p=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,D){R.getRGB(ou,hM(n)),t.buffers.color.setClear(ou.r,ou.g,ou.b,D,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,D=1){c.set(R),u=D,x(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(R){u=R,x(c,u)},render:E,addToRenderList:M,dispose:S}}function gN(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=p(null);let a=o,c=!1;function u(V,j,re,de,Z){let H=!1;const W=v(V,de,re,j);a!==W&&(a=W,d(a.object)),H=y(V,de,re,Z),H&&E(V,de,re,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(H||c)&&(c=!1,A(V,j,re,de),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return n.createVertexArray()}function d(V){return n.bindVertexArray(V)}function m(V){return n.deleteVertexArray(V)}function v(V,j,re,de){const Z=de.wireframe===!0;let H=i[j.id];H===void 0&&(H={},i[j.id]=H);const W=V.isInstancedMesh===!0?V.id:0;let G=H[W];G===void 0&&(G={},H[W]=G);let ee=G[re.id];ee===void 0&&(ee={},G[re.id]=ee);let se=ee[Z];return se===void 0&&(se=p(h()),ee[Z]=se),se}function p(V){const j=[],re=[],de=[];for(let Z=0;Z<t;Z++)j[Z]=0,re[Z]=0,de[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:re,attributeDivisors:de,object:V,attributes:{},index:null}}function y(V,j,re,de){const Z=a.attributes,H=j.attributes;let W=0;const G=re.getAttributes();for(const ee in G)if(G[ee].location>=0){const O=Z[ee];let Q=H[ee];if(Q===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;W++}return a.attributesNum!==W||a.index!==de}function E(V,j,re,de){const Z={},H=j.attributes;let W=0;const G=re.getAttributes();for(const ee in G)if(G[ee].location>=0){let O=H[ee];O===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),Z[ee]=Q,W++}a.attributes=Z,a.attributesNum=W,a.index=de}function M(){const V=a.newAttributes;for(let j=0,re=V.length;j<re;j++)V[j]=0}function x(V){S(V,0)}function S(V,j){const re=a.newAttributes,de=a.enabledAttributes,Z=a.attributeDivisors;re[V]=1,de[V]===0&&(n.enableVertexAttribArray(V),de[V]=1),Z[V]!==j&&(n.vertexAttribDivisor(V,j),Z[V]=j)}function R(){const V=a.newAttributes,j=a.enabledAttributes;for(let re=0,de=j.length;re<de;re++)j[re]!==V[re]&&(n.disableVertexAttribArray(re),j[re]=0)}function D(V,j,re,de,Z,H,W){W===!0?n.vertexAttribIPointer(V,j,re,Z,H):n.vertexAttribPointer(V,j,re,de,Z,H)}function A(V,j,re,de){M();const Z=de.attributes,H=re.getAttributes(),W=j.defaultAttributeValues;for(const G in H){const ee=H[G];if(ee.location>=0){let se=Z[G];if(se===void 0&&(G==="instanceMatrix"&&V.instanceMatrix&&(se=V.instanceMatrix),G==="instanceColor"&&V.instanceColor&&(se=V.instanceColor)),se!==void 0){const O=se.normalized,Q=se.itemSize,Ne=e.get(se);if(Ne===void 0)continue;const Xe=Ne.buffer,Ve=Ne.type,ce=Ne.bytesPerElement,_e=Ve===n.INT||Ve===n.UNSIGNED_INT||se.gpuType===Km;if(se.isInterleavedBufferAttribute){const me=se.data,Ie=me.stride,je=se.offset;if(me.isInstancedInterleavedBuffer){for(let tt=0;tt<ee.locationSize;tt++)S(ee.location+tt,me.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let tt=0;tt<ee.locationSize;tt++)x(ee.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let tt=0;tt<ee.locationSize;tt++)D(ee.location+tt,Q/ee.locationSize,Ve,O,Ie*ce,(je+Q/ee.locationSize*tt)*ce,_e)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<ee.locationSize;me++)S(ee.location+me,se.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<ee.locationSize;me++)x(ee.location+me);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let me=0;me<ee.locationSize;me++)D(ee.location+me,Q/ee.locationSize,Ve,O,Q*ce,Q/ee.locationSize*me*ce,_e)}}else if(W!==void 0){const O=W[G];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(ee.location,O);break;case 3:n.vertexAttrib3fv(ee.location,O);break;case 4:n.vertexAttrib4fv(ee.location,O);break;default:n.vertexAttrib1fv(ee.location,O)}}}}R()}function N(){I();for(const V in i){const j=i[V];for(const re in j){const de=j[re];for(const Z in de){const H=de[Z];for(const W in H)m(H[W].object),delete H[W];delete de[Z]}}delete i[V]}}function F(V){if(i[V.id]===void 0)return;const j=i[V.id];for(const re in j){const de=j[re];for(const Z in de){const H=de[Z];for(const W in H)m(H[W].object),delete H[W];delete de[Z]}}delete i[V.id]}function L(V){for(const j in i){const re=i[j];for(const de in re){const Z=re[de];if(Z[V.id]===void 0)continue;const H=Z[V.id];for(const W in H)m(H[W].object),delete H[W];delete Z[V.id]}}}function T(V){for(const j in i){const re=i[j],de=V.isInstancedMesh===!0?V.id:0,Z=re[de];if(Z!==void 0){for(const H in Z){const W=Z[H];for(const G in W)m(W[G].object),delete W[G];delete Z[H]}delete re[de],Object.keys(re).length===0&&delete i[j]}}}function I(){z(),c=!0,a!==o&&(a=o,d(a.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:I,resetDefaultState:z,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:x,disableUnusedAttributes:R}}function vN(n,e,t){let i;function o(h){i=h}function a(h,d){n.drawArrays(i,h,d),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawArraysInstanced(i,h,d,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y];t.update(p,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function xN(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(L){return!(L!==Ii&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(L){const T=L===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==gi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ki&&!T)}function h(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(at("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const v=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),F=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:A,maxSamples:N,samples:F}}function _N(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Ns,u=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){const y=v.length!==0||p||i!==0||o;return o=p,i=v.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,p){t=m(v,p,0)},this.setState=function(v,p,y){const E=v.clippingPlanes,M=v.clipIntersection,x=v.clipShadows,S=n.get(v);if(!o||E===null||E.length===0||a&&!x)a?m(null):d();else{const R=a?0:i,D=R*4;let A=S.clippingState||null;h.value=A,A=m(E,p,D,y);for(let N=0;N!==D;++N)A[N]=t[N];S.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(v,p,y,E){const M=v!==null?v.length:0;let x=null;if(M!==0){if(x=h.value,E!==!0||x===null){const S=y+M*4,R=p.matrixWorldInverse;u.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let D=0,A=y;D!==M;++D,A+=4)c.copy(v[D]).applyMatrix4(R,u),c.normal.toArray(x,A),x[A+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}const rs=4,j_=[.125,.215,.35,.446,.526,.582],Fs=20,yN=256,Ya=new sg,Y_=new At;let Hh=null,Gh=0,Wh=0,Xh=!1;const SN=new le;class $_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=SN}=a;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,o,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Wh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:wr,format:Ii,colorSpace:Vu,depthBuffer:!1},o=q_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EN(a)),this._blurMaterial=TN(a,e,t),this._ggxMaterial=MN(a,e,t)}return o}_compileMaterial(e){const t=new br(new ki,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,i,o,a){const h=new Li(90,1,t,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,y=v.toneMapping;v.getClearColor(Y_),v.toneMapping=Ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new br(new Sl,new lM({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let S=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,S=!0):(x.color.copy(Y_),S=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(h.up.set(0,d[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[D],a.y,a.z)):A===1?(h.up.set(0,0,d[D]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[D],a.z)):(h.up.set(0,d[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[D]));const N=this._cubeSize;ko(o,A*N,D>2?N:0,N,N),v.setRenderTarget(o),S&&v.render(M,h),v.render(e,h)}v.toneMapping=y,v.autoClear=p,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Xs||e.mapping===Zo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;ko(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(d*d-m*m),p=0+d*1.25,y=v*p,{_lodMax:E}=this,M=this._sizeLods[i],x=3*M*(i>E-rs?i-E+rs:0),S=4*(this._cubeSize-M);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=E-t,ko(a,x,S,3*M,2*M),o.setRenderTarget(a),o.render(u,Ya),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=E-i,ko(e,x,S,3*M,2*M),o.setRenderTarget(e),o.render(u,Ya)}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[o];v.material=d;const p=d.uniforms,y=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Fs-1),M=a/E,x=isFinite(a)?1+Math.floor(m*M):Fs;x>Fs&&at(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fs}`);const S=[];let R=0;for(let L=0;L<Fs;++L){const T=L/M,I=Math.exp(-T*T/2);S.push(I),L===0?R+=I:L<x&&(R+=2*I)}for(let L=0;L<S.length;L++)S[L]=S[L]/R;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=S,p.latitudinal.value=c==="latitudinal",u&&(p.poleAxis.value=u);const{_lodMax:D}=this;p.dTheta.value=E,p.mipInt.value=D-i;const A=this._sizeLods[o],N=3*A*(o>D-rs?o-D+rs:0),F=4*(this._cubeSize-A);ko(t,N,F,3*A,2*A),h.setRenderTarget(t),h.render(v,Ya)}}function EN(n){const e=[],t=[],i=[];let o=n;const a=n-rs+1+j_.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let h=1/u;c>n-rs?h=j_[c-n+rs-1]:c===0&&(h=0),t.push(h);const d=1/(u-2),m=-d,v=1+d,p=[m,m,v,m,v,v,m,m,v,v,m,v],y=6,E=6,M=3,x=2,S=1,R=new Float32Array(M*E*y),D=new Float32Array(x*E*y),A=new Float32Array(S*E*y);for(let F=0;F<y;F++){const L=F%3*2/3-1,T=F>2?0:-1,I=[L,T,0,L+2/3,T,0,L+2/3,T+1,0,L,T,0,L+2/3,T+1,0,L,T+1,0];R.set(I,M*E*F),D.set(p,x*E*F);const z=[F,F,F,F,F,F];A.set(z,S*E*F)}const N=new ki;N.setAttribute("position",new Ui(R,M)),N.setAttribute("uv",new Ui(D,x)),N.setAttribute("faceIndex",new Ui(A,S)),i.push(new br(N,null)),o>rs&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function q_(n,e,t){const i=new er(n,e,t);return i.texture.mapping=tf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function MN(n,e,t){return new ir({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function TN(n,e,t){const i=new Float32Array(Fs),o=new le(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function K_(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Z_(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class vM extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new fM(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Sl(5,5,5),a=new ir({name:"CubemapFromEquirect",uniforms:Jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:Sr});a.uniforms.tEquirect.value=t;const c=new br(o,a),u=t.minFilter;return t.minFilter===ks&&(t.minFilter=Nn),new PD(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function wN(n){let e=new WeakMap,t=new WeakMap,i=null;function o(p,y=!1){return p==null?null:y?c(p):a(p)}function a(p){if(p&&p.isTexture){const y=p.mapping;if(y===mh||y===gh)if(e.has(p)){const E=e.get(p).texture;return u(E,p.mapping)}else{const E=p.image;if(E&&E.height>0){const M=new vM(E.height);return M.fromEquirectangularTexture(n,p),e.set(p,M),p.addEventListener("dispose",d),u(M.texture,p.mapping)}else return null}}return p}function c(p){if(p&&p.isTexture){const y=p.mapping,E=y===mh||y===gh,M=y===Xs||y===Zo;if(E||M){let x=t.get(p);const S=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new $_(n)),x=E?i.fromEquirectangular(p,x):i.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),x.texture;if(x!==void 0)return x.texture;{const R=p.image;return E&&R&&R.height>0||M&&R&&h(R)?(i===null&&(i=new $_(n)),x=E?i.fromEquirectangular(p):i.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),p.addEventListener("dispose",m),x.texture):null}}}return p}function u(p,y){return y===mh?p.mapping=Xs:y===gh&&(p.mapping=Zo),p}function h(p){let y=0;const E=6;for(let M=0;M<E;M++)p[M]!==void 0&&y++;return y===E}function d(p){const y=p.target;y.removeEventListener("dispose",d);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function m(p){const y=p.target;y.removeEventListener("dispose",m);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:v}}function AN(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Yo("WebGLRenderer: "+i+" extension not supported."),o}}}function bN(n,e,t,i){const o={},a=new WeakMap;function c(v){const p=v.target;p.index!==null&&e.remove(p.index);for(const E in p.attributes)e.remove(p.attributes[E]);p.removeEventListener("dispose",c),delete o[p.id];const y=a.get(p);y&&(e.remove(y),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(v,p){return o[p.id]===!0||(p.addEventListener("dispose",c),o[p.id]=!0,t.memory.geometries++),p}function h(v){const p=v.attributes;for(const y in p)e.update(p[y],n.ARRAY_BUFFER)}function d(v){const p=[],y=v.index,E=v.attributes.position;let M=0;if(E===void 0)return;if(y!==null){const R=y.array;M=y.version;for(let D=0,A=R.length;D<A;D+=3){const N=R[D+0],F=R[D+1],L=R[D+2];p.push(N,F,F,L,L,N)}}else{const R=E.array;M=E.version;for(let D=0,A=R.length/3-1;D<A;D+=3){const N=D+0,F=D+1,L=D+2;p.push(N,F,F,L,L,N)}}const x=new(E.count>=65535?oM:sM)(p,1);x.version=M;const S=a.get(v);S&&e.remove(S),a.set(v,x)}function m(v){const p=a.get(v);if(p){const y=v.index;y!==null&&p.version<y.version&&d(v)}else d(v);return a.get(v)}return{get:u,update:h,getWireframeAttribute:m}}function CN(n,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function h(v,p){n.drawElements(i,p,a,v*c),t.update(p,i,1)}function d(v,p,y){y!==0&&(n.drawElementsInstanced(i,p,a,v*c,y),t.update(p,i,y))}function m(v,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,v,0,y);let M=0;for(let x=0;x<y;x++)M+=p[x];t.update(M,i,1)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function RN(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Et("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function PN(n,e,t){const i=new WeakMap,o=new nn;function a(c,u,h){const d=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let p=i.get(u);if(p===void 0||p.count!==v){let z=function(){T.dispose(),i.delete(u),u.removeEventListener("dispose",z)};var y=z;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),x===!0&&(A=3);let N=u.attributes.position.count*A,F=1;N>e.maxTextureSize&&(F=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*F*4*v),T=new nM(L,N,F,v);T.type=Ki,T.needsUpdate=!0;const I=A*4;for(let V=0;V<v;V++){const j=S[V],re=R[V],de=D[V],Z=N*F*4*V;for(let H=0;H<j.count;H++){const W=H*I;E===!0&&(o.fromBufferAttribute(j,H),L[Z+W+0]=o.x,L[Z+W+1]=o.y,L[Z+W+2]=o.z,L[Z+W+3]=0),M===!0&&(o.fromBufferAttribute(re,H),L[Z+W+4]=o.x,L[Z+W+5]=o.y,L[Z+W+6]=o.z,L[Z+W+7]=0),x===!0&&(o.fromBufferAttribute(de,H),L[Z+W+8]=o.x,L[Z+W+9]=o.y,L[Z+W+10]=o.z,L[Z+W+11]=de.itemSize===4?o.w:1)}}p={count:v,texture:T,size:new bt(N,F)},i.set(u,p),u.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const M=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function DN(n,e,t,i,o){let a=new WeakMap;function c(d){const m=o.render.frame,v=d.geometry,p=e.get(d,v);if(a.get(p)!==m&&(e.update(p),a.set(p,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),a.get(d)!==m&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,m))),d.isSkinnedMesh){const y=d.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return p}function u(){a=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:u}}const LN={[VE]:"LINEAR_TONE_MAPPING",[zE]:"REINHARD_TONE_MAPPING",[HE]:"CINEON_TONE_MAPPING",[GE]:"ACES_FILMIC_TONE_MAPPING",[XE]:"AGX_TONE_MAPPING",[jE]:"NEUTRAL_TONE_MAPPING",[WE]:"CUSTOM_TONE_MAPPING"};function NN(n,e,t,i,o,a){const c=new er(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:i?4:0,depthTexture:o?new Qo(e,t):void 0}),u=new er(e,t,{type:wr,depthBuffer:!1,stencilBuffer:!1}),h=new ki;h.setAttribute("position",new Mr([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mr([0,2,0,0,2,0],2));const d=new bD({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new br(h,d),v=new sg(-1,1,1,-1,0,1);let p=null,y=null,E=!1,M,x=null,S=[],R=!1;this.setSize=function(D,A){c.setSize(D,A),u.setSize(D,A);for(let N=0;N<S.length;N++){const F=S[N];F.setSize&&F.setSize(D,A)}},this.setEffects=function(D){S=D,R=S.length>0&&S[0].isRenderPass===!0;const A=c.width,N=c.height;for(let F=0;F<S.length;F++){const L=S[F];L.setSize&&L.setSize(A,N)}},this.begin=function(D,A){if(E||D.toneMapping===Ji&&S.length===0)return!1;if(x=A,A!==null){const N=A.width,F=A.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return R===!1&&D.setRenderTarget(c),M=D.toneMapping,D.toneMapping=Ji,!0},this.hasRenderPass=function(){return R},this.end=function(D,A){D.toneMapping=M,E=!0;let N=c,F=u;for(let L=0;L<S.length;L++){const T=S[L];if(T.enabled!==!1&&(T.render(D,F,N,A),T.needsSwap!==!1)){const I=N;N=F,F=I}}if(p!==D.outputColorSpace||y!==D.toneMapping){p=D.outputColorSpace,y=D.toneMapping,d.defines={},vt.getTransfer(p)===Nt&&(d.defines.SRGB_TRANSFER="");const L=LN[y];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(x),D.render(m,v),x=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),d.dispose()}}const xM=new zn,pm=new Qo(1,1),_M=new nM,yM=new iD,SM=new fM,Q_=[],J_=[],ey=new Float32Array(16),ty=new Float32Array(9),ny=new Float32Array(4);function ra(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=Q_[o];if(a===void 0&&(a=new Float32Array(o),Q_[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function of(n,e){let t=J_[e];t===void 0&&(t=new Int32Array(e),J_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function FN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function UN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function ON(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function kN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;ny.set(i),n.uniformMatrix2fv(this.addr,!1,ny),mn(t,i)}}function BN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;ty.set(i),n.uniformMatrix3fv(this.addr,!1,ty),mn(t,i)}}function VN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;ey.set(i),n.uniformMatrix4fv(this.addr,!1,ey),mn(t,i)}}function zN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function HN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function GN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function WN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function XN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function YN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function $N(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function qN(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(pm.compareFunction=t.isReversedDepthBuffer()?ig:ng,a=pm):a=xM,t.setTexture2D(e||a,o)}function KN(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||yM,o)}function ZN(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||SM,o)}function QN(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||_M,o)}function JN(n){switch(n){case 5126:return IN;case 35664:return FN;case 35665:return UN;case 35666:return ON;case 35674:return kN;case 35675:return BN;case 35676:return VN;case 5124:case 35670:return zN;case 35667:case 35671:return HN;case 35668:case 35672:return GN;case 35669:case 35673:return WN;case 5125:return XN;case 36294:return jN;case 36295:return YN;case 36296:return $N;case 35678:case 36198:case 36298:case 36306:case 35682:return qN;case 35679:case 36299:case 36307:return KN;case 35680:case 36300:case 36308:case 36293:return ZN;case 36289:case 36303:case 36311:case 36292:return QN}}function eI(n,e){n.uniform1fv(this.addr,e)}function tI(n,e){const t=ra(e,this.size,2);n.uniform2fv(this.addr,t)}function nI(n,e){const t=ra(e,this.size,3);n.uniform3fv(this.addr,t)}function iI(n,e){const t=ra(e,this.size,4);n.uniform4fv(this.addr,t)}function rI(n,e){const t=ra(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sI(n,e){const t=ra(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oI(n,e){const t=ra(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aI(n,e){n.uniform1iv(this.addr,e)}function lI(n,e){n.uniform2iv(this.addr,e)}function cI(n,e){n.uniform3iv(this.addr,e)}function uI(n,e){n.uniform4iv(this.addr,e)}function fI(n,e){n.uniform1uiv(this.addr,e)}function dI(n,e){n.uniform2uiv(this.addr,e)}function hI(n,e){n.uniform3uiv(this.addr,e)}function pI(n,e){n.uniform4uiv(this.addr,e)}function mI(n,e,t){const i=this.cache,o=e.length,a=of(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=pm:c=xM;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function gI(n,e,t){const i=this.cache,o=e.length,a=of(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||yM,a[c])}function vI(n,e,t){const i=this.cache,o=e.length,a=of(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||SM,a[c])}function xI(n,e,t){const i=this.cache,o=e.length,a=of(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||_M,a[c])}function _I(n){switch(n){case 5126:return eI;case 35664:return tI;case 35665:return nI;case 35666:return iI;case 35674:return rI;case 35675:return sI;case 35676:return oI;case 5124:case 35670:return aI;case 35667:case 35671:return lI;case 35668:case 35672:return cI;case 35669:case 35673:return uI;case 5125:return fI;case 36294:return dI;case 36295:return hI;case 36296:return pI;case 35678:case 36198:case 36298:case 36306:case 35682:return mI;case 35679:case 36299:case 36307:return gI;case 35680:case 36300:case 36308:case 36293:return vI;case 36289:case 36303:case 36311:case 36292:return xI}}class yI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=JN(t.type)}}class SI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_I(t.type)}}class EI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function iy(n,e){n.seq.push(e),n.map[e.id]=e}function MI(n,e,t){const i=n.name,o=i.length;for(jh.lastIndex=0;;){const a=jh.exec(i),c=jh.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===o){iy(t,d===void 0?new yI(u,n,e):new SI(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new EI(u),iy(t,v)),t=v}}}class Tu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);MI(u,h,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function ry(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const TI=37297;let wI=0;function AI(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const sy=new ut;function bI(n){vt._getMatrix(sy,vt.workingColorSpace,n);const e=`mat3( ${sy.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case zu:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function oy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+AI(n.getShaderSource(e),u)}else return a}function CI(n,e){const t=bI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const RI={[VE]:"Linear",[zE]:"Reinhard",[HE]:"Cineon",[GE]:"ACESFilmic",[XE]:"AgX",[jE]:"Neutral",[WE]:"Custom"};function PI(n,e){const t=RI[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const au=new le;function DI(){vt.getLuminanceCoefficients(au);const n=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function NI(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function II(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Qa(n){return n!==""}function ay(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ly(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FI=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(n){return n.replace(FI,OI)}const UI=new Map;function OI(n,e){let t=dt[e];if(t===void 0){const i=UI.get(e);if(i!==void 0)t=dt[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mm(t)}const kI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cy(n){return n.replace(kI,BI)}function BI(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function uy(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const VI={[_u]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function zI(n){return VI[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HI={[Xs]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE",[tf]:"ENVMAP_TYPE_CUBE_UV"};function GI(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":HI[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const WI={[Zo]:"ENVMAP_MODE_REFRACTION"};function XI(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":WI[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jI={[BE]:"ENVMAP_BLENDING_MULTIPLY",[U2]:"ENVMAP_BLENDING_MIX",[O2]:"ENVMAP_BLENDING_ADD"};function YI(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":jI[n.combine]||"ENVMAP_BLENDING_NONE"}function $I(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qI(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=zI(t),d=GI(t),m=XI(t),v=YI(t),p=$I(t),y=LI(t),E=NI(a),M=o.createProgram();let x,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),S.length>0&&(S+=`
`)):(x=[uy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),S=[uy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?PI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,CI("linearToOutputTexel",t.outputColorSpace),DI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),c=mm(c),c=ay(c,t),c=ly(c,t),u=mm(u),u=ay(u,t),u=ly(u,t),c=cy(c),u=cy(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=R+x+c,A=R+S+u,N=ry(o,o.VERTEX_SHADER,D),F=ry(o,o.FRAGMENT_SHADER,A);o.attachShader(M,N),o.attachShader(M,F),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function L(V){if(n.debug.checkShaderErrors){const j=o.getProgramInfoLog(M)||"",re=o.getShaderInfoLog(N)||"",de=o.getShaderInfoLog(F)||"",Z=j.trim(),H=re.trim(),W=de.trim();let G=!0,ee=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,N,F);else{const se=oy(o,N,"vertex"),O=oy(o,F,"fragment");Et("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+se+`
`+O)}else Z!==""?at("WebGLProgram: Program Info Log:",Z):(H===""||W==="")&&(ee=!1);ee&&(V.diagnostics={runnable:G,programLog:Z,vertexShader:{log:H,prefix:x},fragmentShader:{log:W,prefix:S}})}o.deleteShader(N),o.deleteShader(F),T=new Tu(o,M),I=II(o,M)}let T;this.getUniforms=function(){return T===void 0&&L(this),T};let I;this.getAttributes=function(){return I===void 0&&L(this),I};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(M,TI)),z},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wI++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=F,this}let KI=0;class ZI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QI(e),t.set(e,i)),i}}class QI{constructor(e){this.id=KI++,this.code=e,this.usedTimes=0}}function JI(n){return n===js||n===ku||n===Bu}function eF(n,e,t,i,o,a){const c=new iM,u=new ZI,h=new Set,d=[],m=new Map,v=i.logarithmicDepthBuffer;let p=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return h.add(T),T===0?"uv":`uv${T}`}function M(T,I,z,V,j,re){const de=V.fog,Z=j.geometry,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=e.get(T.envMap||H,W),ee=G&&G.mapping===tf?G.image.height:null,se=y[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&at("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=O!==void 0?O.length:0;let Ne=0;Z.morphAttributes.position!==void 0&&(Ne=1),Z.morphAttributes.normal!==void 0&&(Ne=2),Z.morphAttributes.color!==void 0&&(Ne=3);let Xe,Ve,ce,_e;if(se){const He=$i[se];Xe=He.vertexShader,Ve=He.fragmentShader}else{Xe=T.vertexShader,Ve=T.fragmentShader;const He=u.getVertexShaderStage(T),Ft=u.getFragmentShaderStage(T);u.update(T,He,Ft),ce=He.id,_e=Ft.id}const me=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),je=j.isInstancedMesh===!0,tt=j.isBatchedMesh===!0,Ot=!!T.map,ft=!!T.matcap,wt=!!G,_t=!!T.aoMap,gt=!!T.lightMap,Wt=!!T.bumpMap&&T.wireframe===!1,Qt=!!T.normalMap,Jt=!!T.displacementMap,$t=!!T.emissiveMap,Pt=!!T.metalnessMap,Xt=!!T.roughnessMap,q=T.anisotropy>0,yn=T.clearcoat>0,Mt=T.dispersion>0,U=T.iridescence>0,w=T.sheen>0,J=T.transmission>0,ae=q&&!!T.anisotropyMap,he=yn&&!!T.clearcoatMap,Me=yn&&!!T.clearcoatNormalMap,Re=yn&&!!T.clearcoatRoughnessMap,pe=U&&!!T.iridescenceMap,ve=U&&!!T.iridescenceThicknessMap,De=w&&!!T.sheenColorMap,Ke=w&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ce=!!T.specularColorMap,et=!!T.specularIntensityMap,nt=J&&!!T.transmissionMap,st=J&&!!T.thicknessMap,Y=!!T.gradientMap,be=!!T.alphaMap,ge=T.alphaTest>0,Pe=!!T.alphaHash,Fe=!!T.extensions;let xe=Ji;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Ye={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:Xe,fragmentShader:Ve,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:tt,batchingColor:tt&&j._colorsTexture!==null,instancing:je,instancingColor:je&&j.instanceColor!==null,instancingMorph:je&&j.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ot,matcap:ft,envMap:wt,envMapMode:wt&&G.mapping,envMapCubeUVHeight:ee,aoMap:_t,lightMap:gt,bumpMap:Wt,normalMap:Qt,displacementMap:Jt,emissiveMap:$t,normalMapObjectSpace:Qt&&T.normalMapType===V2,normalMapTangentSpace:Qt&&T.normalMapType===__,packedNormalMap:Qt&&T.normalMapType===__&&JI(T.normalMap.format),metalnessMap:Pt,roughnessMap:Xt,anisotropy:q,anisotropyMap:ae,clearcoat:yn,clearcoatMap:he,clearcoatNormalMap:Me,clearcoatRoughnessMap:Re,dispersion:Mt,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:ve,sheen:w,sheenColorMap:De,sheenRoughnessMap:Ke,specularMap:Le,specularColorMap:Ce,specularIntensityMap:et,transmission:J,transmissionMap:nt,thicknessMap:st,gradientMap:Y,opaque:T.transparent===!1&&T.blending===jo&&T.alphaToCoverage===!1,alphaMap:be,alphaTest:ge,alphaHash:Pe,combine:T.combine,mapUv:Ot&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:gt&&E(T.lightMap.channel),bumpMapUv:Wt&&E(T.bumpMap.channel),normalMapUv:Qt&&E(T.normalMap.channel),displacementMapUv:Jt&&E(T.displacementMap.channel),emissiveMapUv:$t&&E(T.emissiveMap.channel),metalnessMapUv:Pt&&E(T.metalnessMap.channel),roughnessMapUv:Xt&&E(T.roughnessMap.channel),anisotropyMapUv:ae&&E(T.anisotropyMap.channel),clearcoatMapUv:he&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&E(T.sheenRoughnessMap.channel),specularMapUv:Le&&E(T.specularMap.channel),specularColorMapUv:Ce&&E(T.specularColorMap.channel),specularIntensityMapUv:et&&E(T.specularIntensityMap.channel),transmissionMapUv:nt&&E(T.transmissionMap.channel),thicknessMapUv:st&&E(T.thicknessMap.channel),alphaMapUv:be&&E(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qt||q),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(Ot||be),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&Qt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ie,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ne,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ot&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:$t&&T.emissiveMap.isVideoTexture===!0&&vt.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_r,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=h.has(1),Ye.vertexUv2s=h.has(2),Ye.vertexUv3s=h.has(3),h.clear(),Ye}function x(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)I.push(z),I.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(I,T),R(I,T),I.push(n.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function S(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function R(T,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),I.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function D(T){const I=y[T.type];let z;if(I){const V=$i[I];z=TD.clone(V.uniforms)}else z=T.uniforms;return z}function A(T,I){let z=m.get(I);return z!==void 0?++z.usedTimes:(z=new qI(n,I,T,o),d.push(z),m.set(I,z)),z}function N(T){if(--T.usedTimes===0){const I=d.indexOf(T);d[I]=d[d.length-1],d.pop(),m.delete(T.cacheKey),T.destroy()}}function F(T){u.remove(T)}function L(){u.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:D,acquireProgram:A,releaseProgram:N,releaseShaderCache:F,programs:d,dispose:L}}function tF(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,h){n.get(c)[u]=h}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function nF(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function fy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dy(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function u(p,y,E,M,x,S){let R=n[e];return R===void 0?(R={id:p.id,object:p,geometry:y,material:E,materialVariant:c(p),groupOrder:M,renderOrder:p.renderOrder,z:x,group:S},n[e]=R):(R.id=p.id,R.object=p,R.geometry=y,R.material=E,R.materialVariant=c(p),R.groupOrder=M,R.renderOrder=p.renderOrder,R.z=x,R.group=S),e++,R}function h(p,y,E,M,x,S){const R=u(p,y,E,M,x,S);E.transmission>0?i.push(R):E.transparent===!0?o.push(R):t.push(R)}function d(p,y,E,M,x,S){const R=u(p,y,E,M,x,S);E.transmission>0?i.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function m(p,y,E){t.length>1&&t.sort(p||nF),i.length>1&&i.sort(y||fy),o.length>1&&o.sort(y||fy),E&&(t.reverse(),i.reverse(),o.reverse())}function v(){for(let p=e,y=n.length;p<y;p++){const E=n[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:h,unshift:d,finish:v,sort:m}}function iF(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new dy,n.set(i,[c])):o>=a.length?(c=new dy,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function rF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new At};break;case"SpotLight":t={position:new le,direction:new le,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function sF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oF=0;function aF(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lF(n){const e=new rF,t=sF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new le);const o=new le,a=new sn,c=new sn;function u(d){let m=0,v=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let y=0,E=0,M=0,x=0,S=0,R=0,D=0,A=0,N=0,F=0,L=0;d.sort(aF);for(let I=0,z=d.length;I<z;I++){const V=d[I],j=V.color,re=V.intensity,de=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===js?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)m+=j.r*re,v+=j.g*re,p+=j.b*re;else if(V.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(V.sh.coefficients[H],re);L++}else if(V.isDirectionalLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,G=t.get(V);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,i.directionalShadow[y]=G,i.directionalShadowMap[y]=Z,i.directionalShadowMatrix[y]=V.shadow.matrix,R++}i.directional[y]=H,y++}else if(V.isSpotLight){const H=e.get(V);H.position.setFromMatrixPosition(V.matrixWorld),H.color.copy(j).multiplyScalar(re),H.distance=de,H.coneCos=Math.cos(V.angle),H.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),H.decay=V.decay,i.spot[M]=H;const W=V.shadow;if(V.map&&(i.spotLightMap[N]=V.map,N++,W.updateMatrices(V),V.castShadow&&F++),i.spotLightMatrix[M]=W.matrix,V.castShadow){const G=t.get(V);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=Z,A++}M++}else if(V.isRectAreaLight){const H=e.get(V);H.color.copy(j).multiplyScalar(re),H.halfWidth.set(V.width*.5,0,0),H.halfHeight.set(0,V.height*.5,0),i.rectArea[x]=H,x++}else if(V.isPointLight){const H=e.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity),H.distance=V.distance,H.decay=V.decay,V.castShadow){const W=V.shadow,G=t.get(V);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,i.pointShadow[E]=G,i.pointShadowMap[E]=Z,i.pointShadowMatrix[E]=V.shadow.matrix,D++}i.point[E]=H,E++}else if(V.isHemisphereLight){const H=e.get(V);H.skyColor.copy(V.color).multiplyScalar(re),H.groundColor.copy(V.groundColor).multiplyScalar(re),i.hemi[S]=H,S++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=p;const T=i.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==M||T.rectAreaLength!==x||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==D||T.numSpotShadows!==A||T.numSpotMaps!==N||T.numLightProbes!==L)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=x,i.point.length=E,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=A+N-F,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=L,T.directionalLength=y,T.pointLength=E,T.spotLength=M,T.rectAreaLength=x,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=D,T.numSpotShadows=A,T.numSpotMaps=N,T.numLightProbes=L,i.version=oF++)}function h(d,m){let v=0,p=0,y=0,E=0,M=0;const x=m.matrixWorldInverse;for(let S=0,R=d.length;S<R;S++){const D=d[S];if(D.isDirectionalLight){const A=i.directional[v];A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),v++}else if(D.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),y++}else if(D.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),c.identity(),a.copy(D.matrixWorld),a.premultiply(x),c.extractRotation(a),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),p++}else if(D.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:u,setupView:h,state:i}}function hy(n){const e=new lF(n),t=[],i=[],o=[];function a(p){v.camera=p,t.length=0,i.length=0,o.length=0}function c(p){t.push(p)}function u(p){i.push(p)}function h(p){o.push(p)}function d(){e.setup(t)}function m(p){e.setupView(t,p)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function cF(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new hy(n),e.set(o,[u])):a>=c.length?(u=new hy(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const uF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dF=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],hF=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],py=new sn,$a=new le,Yh=new le;function pF(n,e,t){let i=new cM;const o=new bt,a=new bt,c=new nn,u=new CD,h=new RD,d={},m=t.maxTextureSize,v={[as]:Qn,[Qn]:as,[_r]:_r},p=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:uF,fragmentShader:fF}),y=p.clone();y.defines.HORIZONTAL_PASS=1;const E=new ki;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new br(E,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let S=this.type;this.render=function(F,L,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;this.type===v2&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_u);const I=n.getRenderTarget(),z=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Sr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const re=S!==this.type;re&&L.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(Z=>Z.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,Z=F.length;de<Z;de++){const H=F[de],W=H.shadow;if(W===void 0){at("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const G=W.getFrameExtents();o.multiply(G),a.copy(W.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/G.x),o.x=a.x*G.x,W.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/G.y),o.y=a.y*G.y,W.mapSize.y=a.y));const ee=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ee,W.map===null||re===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Za){if(H.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new er(o.x,o.y,{format:js,type:wr,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new Qo(o.x,o.y,Ki),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=Ar,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=wn,W.map.depthTexture.magFilter=wn}else H.isPointLight?(W.map=new vM(o.x),W.map.depthTexture=new ED(o.x,nr)):(W.map=new er(o.x,o.y),W.map.depthTexture=new Qo(o.x,o.y,nr)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=Ar,this.type===_u?(W.map.depthTexture.compareFunction=ee?ig:ng,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=wn,W.map.depthTexture.magFilter=wn);W.camera.updateProjectionMatrix()}const se=W.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<se;O++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,O),n.clear();else{O===0&&(n.setRenderTarget(W.map),n.clear());const Q=W.getViewport(O);c.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),j.viewport(c)}if(H.isPointLight){const Q=W.camera,Ne=W.matrix,Xe=H.distance||Q.far;Xe!==Q.far&&(Q.far=Xe,Q.updateProjectionMatrix()),$a.setFromMatrixPosition(H.matrixWorld),Q.position.copy($a),Yh.copy(Q.position),Yh.add(dF[O]),Q.up.copy(hF[O]),Q.lookAt(Yh),Q.updateMatrixWorld(),Ne.makeTranslation(-$a.x,-$a.y,-$a.z),py.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(py,Q.coordinateSystem,Q.reversedDepth)}else W.updateMatrices(H);i=W.getFrustum(),A(L,T,W.camera,H,this.type)}W.isPointLightShadow!==!0&&this.type===Za&&R(W,T),W.needsUpdate=!1}S=this.type,x.needsUpdate=!1,n.setRenderTarget(I,z,V)};function R(F,L){const T=e.update(M);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new er(o.x,o.y,{format:js,type:wr})),p.uniforms.shadow_pass.value=F.map.depthTexture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(L,null,T,p,M,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(L,null,T,y,M,null)}function D(F,L,T,I){let z=null;const V=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)z=V;else if(z=T.isPointLight===!0?h:u,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const j=z.uuid,re=L.uuid;let de=d[j];de===void 0&&(de={},d[j]=de);let Z=de[re];Z===void 0&&(Z=z.clone(),de[re]=Z,L.addEventListener("dispose",N)),z=Z}if(z.visible=L.visible,z.wireframe=L.wireframe,I===Za?z.side=L.shadowSide!==null?L.shadowSide:L.side:z.side=L.shadowSide!==null?L.shadowSide:v[L.side],z.alphaMap=L.alphaMap,z.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,z.map=L.map,z.clipShadows=L.clipShadows,z.clippingPlanes=L.clippingPlanes,z.clipIntersection=L.clipIntersection,z.displacementMap=L.displacementMap,z.displacementScale=L.displacementScale,z.displacementBias=L.displacementBias,z.wireframeLinewidth=L.wireframeLinewidth,z.linewidth=L.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const j=n.properties.get(z);j.light=T}return z}function A(F,L,T,I,z){if(F.visible===!1)return;if(F.layers.test(L.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&z===Za)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const re=e.update(F),de=F.material;if(Array.isArray(de)){const Z=re.groups;for(let H=0,W=Z.length;H<W;H++){const G=Z[H],ee=de[G.materialIndex];if(ee&&ee.visible){const se=D(F,ee,I,z);F.onBeforeShadow(n,F,L,T,re,se,G),n.renderBufferDirect(T,null,re,se,F,G),F.onAfterShadow(n,F,L,T,re,se,G)}}}else if(de.visible){const Z=D(F,de,I,z);F.onBeforeShadow(n,F,L,T,re,Z,null),n.renderBufferDirect(T,null,re,Z,F,null),F.onAfterShadow(n,F,L,T,re,Z,null)}}const j=F.children;for(let re=0,de=j.length;re<de;re++)A(j[re],L,T,I,z)}function N(F){F.target.removeEventListener("dispose",N);for(const T in d){const I=d[T],z=F.target.uuid;z in I&&(I[z].dispose(),delete I[z])}}}function mF(n,e){function t(){let Y=!1;const be=new nn;let ge=null;const Pe=new nn(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!Y&&(n.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,xe,Ye,He,Ft){Ft===!0&&(Fe*=He,xe*=He,Ye*=He),be.set(Fe,xe,Ye,He),Pe.equals(be)===!1&&(n.clearColor(Fe,xe,Ye,He),Pe.copy(be))},reset:function(){Y=!1,ge=null,Pe.set(-1,0,0,0)}}}function i(){let Y=!1,be=!1,ge=null,Pe=null,Fe=null;return{setReversed:function(xe){if(be!==xe){const Ye=e.get("EXT_clip_control");xe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),be=xe;const He=Fe;Fe=null,this.setClear(He)}},getReversed:function(){return be},setTest:function(xe){xe?me(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(xe){ge!==xe&&!Y&&(n.depthMask(xe),ge=xe)},setFunc:function(xe){if(be&&(xe=K2[xe]),Pe!==xe){switch(xe){case bp:n.depthFunc(n.NEVER);break;case Cp:n.depthFunc(n.ALWAYS);break;case Rp:n.depthFunc(n.LESS);break;case Ko:n.depthFunc(n.LEQUAL);break;case Pp:n.depthFunc(n.EQUAL);break;case Dp:n.depthFunc(n.GEQUAL);break;case Lp:n.depthFunc(n.GREATER);break;case Np:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=xe}},setLocked:function(xe){Y=xe},setClear:function(xe){Fe!==xe&&(Fe=xe,be&&(xe=1-xe),n.clearDepth(xe))},reset:function(){Y=!1,ge=null,Pe=null,Fe=null,be=!1}}}function o(){let Y=!1,be=null,ge=null,Pe=null,Fe=null,xe=null,Ye=null,He=null,Ft=null;return{setTest:function(Ct){Y||(Ct?me(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Ct){be!==Ct&&!Y&&(n.stencilMask(Ct),be=Ct)},setFunc:function(Ct,An,ai){(ge!==Ct||Pe!==An||Fe!==ai)&&(n.stencilFunc(Ct,An,ai),ge=Ct,Pe=An,Fe=ai)},setOp:function(Ct,An,ai){(xe!==Ct||Ye!==An||He!==ai)&&(n.stencilOp(Ct,An,ai),xe=Ct,Ye=An,He=ai)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){Ft!==Ct&&(n.clearStencil(Ct),Ft=Ct)},reset:function(){Y=!1,be=null,ge=null,Pe=null,Fe=null,xe=null,Ye=null,He=null,Ft=null}}}const a=new t,c=new i,u=new o,h=new WeakMap,d=new WeakMap;let m={},v={},p={},y=new WeakMap,E=[],M=null,x=!1,S=null,R=null,D=null,A=null,N=null,F=null,L=null,T=new At(0,0,0),I=0,z=!1,V=null,j=null,re=null,de=null,Z=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),W=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),W=G>=2);let se=null,O={};const Q=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Xe=new nn().fromArray(Q),Ve=new nn().fromArray(Ne);function ce(Y,be,ge,Pe){const Fe=new Uint8Array(4),xe=n.createTexture();n.bindTexture(Y,xe),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<ge;Ye++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(be+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return xe}const _e={};_e[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(n.DEPTH_TEST),c.setFunc(Ko),Wt(!1),Qt(m_),me(n.CULL_FACE),_t(Sr);function me(Y){m[Y]!==!0&&(n.enable(Y),m[Y]=!0)}function Ie(Y){m[Y]!==!1&&(n.disable(Y),m[Y]=!1)}function je(Y,be){return p[Y]!==be?(n.bindFramebuffer(Y,be),p[Y]=be,Y===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=be),Y===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=be),!0):!1}function tt(Y,be){let ge=E,Pe=!1;if(Y){ge=y.get(be),ge===void 0&&(ge=[],y.set(be,ge));const Fe=Y.textures;if(ge.length!==Fe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ye=Fe.length;xe<Ye;xe++)ge[xe]=n.COLOR_ATTACHMENT0+xe;ge.length=Fe.length,Pe=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ge)}function Ot(Y){return M!==Y?(n.useProgram(Y),M=Y,!0):!1}const ft={[Is]:n.FUNC_ADD,[_2]:n.FUNC_SUBTRACT,[y2]:n.FUNC_REVERSE_SUBTRACT};ft[S2]=n.MIN,ft[E2]=n.MAX;const wt={[M2]:n.ZERO,[T2]:n.ONE,[w2]:n.SRC_COLOR,[wp]:n.SRC_ALPHA,[D2]:n.SRC_ALPHA_SATURATE,[R2]:n.DST_COLOR,[b2]:n.DST_ALPHA,[A2]:n.ONE_MINUS_SRC_COLOR,[Ap]:n.ONE_MINUS_SRC_ALPHA,[P2]:n.ONE_MINUS_DST_COLOR,[C2]:n.ONE_MINUS_DST_ALPHA,[L2]:n.CONSTANT_COLOR,[N2]:n.ONE_MINUS_CONSTANT_COLOR,[I2]:n.CONSTANT_ALPHA,[F2]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(Y,be,ge,Pe,Fe,xe,Ye,He,Ft,Ct){if(Y===Sr){x===!0&&(Ie(n.BLEND),x=!1);return}if(x===!1&&(me(n.BLEND),x=!0),Y!==x2){if(Y!==S||Ct!==z){if((R!==Is||N!==Is)&&(n.blendEquation(n.FUNC_ADD),R=Is,N=Is),Ct)switch(Y){case jo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g_:n.blendFunc(n.ONE,n.ONE);break;case v_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case x_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",Y);break}else switch(Y){case jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case v_:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x_:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",Y);break}D=null,A=null,F=null,L=null,T.set(0,0,0),I=0,S=Y,z=Ct}return}Fe=Fe||be,xe=xe||ge,Ye=Ye||Pe,(be!==R||Fe!==N)&&(n.blendEquationSeparate(ft[be],ft[Fe]),R=be,N=Fe),(ge!==D||Pe!==A||xe!==F||Ye!==L)&&(n.blendFuncSeparate(wt[ge],wt[Pe],wt[xe],wt[Ye]),D=ge,A=Pe,F=xe,L=Ye),(He.equals(T)===!1||Ft!==I)&&(n.blendColor(He.r,He.g,He.b,Ft),T.copy(He),I=Ft),S=Y,z=!1}function gt(Y,be){Y.side===_r?Ie(n.CULL_FACE):me(n.CULL_FACE);let ge=Y.side===Qn;be&&(ge=!ge),Wt(ge),Y.blending===jo&&Y.transparent===!1?_t(Sr):_t(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),a.setMask(Y.colorWrite);const Pe=Y.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$t(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(Y){V!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),V=Y)}function Qt(Y){Y!==m2?(me(n.CULL_FACE),Y!==j&&(Y===m_?n.cullFace(n.BACK):Y===g2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),j=Y}function Jt(Y){Y!==re&&(W&&n.lineWidth(Y),re=Y)}function $t(Y,be,ge){Y?(me(n.POLYGON_OFFSET_FILL),(de!==be||Z!==ge)&&(de=be,Z=ge,c.getReversed()&&(be=-be),n.polygonOffset(be,ge))):Ie(n.POLYGON_OFFSET_FILL)}function Pt(Y){Y?me(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Xt(Y){Y===void 0&&(Y=n.TEXTURE0+H-1),se!==Y&&(n.activeTexture(Y),se=Y)}function q(Y,be,ge){ge===void 0&&(se===null?ge=n.TEXTURE0+H-1:ge=se);let Pe=O[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},O[ge]=Pe),(Pe.type!==Y||Pe.texture!==be)&&(se!==ge&&(n.activeTexture(ge),se=ge),n.bindTexture(Y,be||_e[Y]),Pe.type=Y,Pe.texture=be)}function yn(){const Y=O[se];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Mt(){try{n.compressedTexImage2D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function w(){try{n.texSubImage2D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function J(){try{n.texSubImage3D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function Me(){try{n.texStorage2D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function Re(){try{n.texStorage3D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function pe(){try{n.texImage2D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function ve(){try{n.texImage3D(...arguments)}catch(Y){Et("WebGLState:",Y)}}function De(Y){return v[Y]!==void 0?v[Y]:n.getParameter(Y)}function Ke(Y,be){v[Y]!==be&&(n.pixelStorei(Y,be),v[Y]=be)}function Le(Y){Xe.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Xe.copy(Y))}function Ce(Y){Ve.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),Ve.copy(Y))}function et(Y,be){let ge=d.get(be);ge===void 0&&(ge=new WeakMap,d.set(be,ge));let Pe=ge.get(Y);Pe===void 0&&(Pe=n.getUniformBlockIndex(be,Y.name),ge.set(Y,Pe))}function nt(Y,be){const Pe=d.get(be).get(Y);h.get(be)!==Pe&&(n.uniformBlockBinding(be,Pe,Y.__bindingPointIndex),h.set(be,Pe))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},v={},se=null,O={},p={},y=new WeakMap,E=[],M=null,x=!1,S=null,R=null,D=null,A=null,N=null,F=null,L=null,T=new At(0,0,0),I=0,z=!1,V=null,j=null,re=null,de=null,Z=null,Xe.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:me,disable:Ie,bindFramebuffer:je,drawBuffers:tt,useProgram:Ot,setBlending:_t,setMaterial:gt,setFlipSided:Wt,setCullFace:Qt,setLineWidth:Jt,setPolygonOffset:$t,setScissorTest:Pt,activeTexture:Xt,bindTexture:q,unbindTexture:yn,compressedTexImage2D:Mt,compressedTexImage3D:U,texImage2D:pe,texImage3D:ve,pixelStorei:Ke,getParameter:De,updateUBOMapping:et,uniformBlockBinding:nt,texStorage2D:Me,texStorage3D:Re,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Le,viewport:Ce,reset:st}}function gF(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new bt,m=new WeakMap,v=new Set;let p;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,w){return E?new OffscreenCanvas(U,w):Gu("canvas")}function x(U,w,J){let ae=1;const he=Mt(U);if((he.width>J||he.height>J)&&(ae=J/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(ae*he.width),Re=Math.floor(ae*he.height);p===void 0&&(p=M(Me,Re));const pe=w?M(Me,Re):p;return pe.width=Me,pe.height=Re,pe.getContext("2d").drawImage(U,0,0,Me,Re),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Me+"x"+Re+")."),pe}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function S(U){return U.generateMipmaps}function R(U){n.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(U,w,J,ae,he,Me=!1){if(U!==null){if(n[U]!==void 0)return n[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(J===n.FLOAT&&(pe=n.R32F),J===n.HALF_FLOAT&&(pe=n.R16F),J===n.UNSIGNED_BYTE&&(pe=n.R8),J===n.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),J===n.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),w===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.R8UI),J===n.UNSIGNED_SHORT&&(pe=n.R16UI),J===n.UNSIGNED_INT&&(pe=n.R32UI),J===n.BYTE&&(pe=n.R8I),J===n.SHORT&&(pe=n.R16I),J===n.INT&&(pe=n.R32I)),w===n.RG&&(J===n.FLOAT&&(pe=n.RG32F),J===n.HALF_FLOAT&&(pe=n.RG16F),J===n.UNSIGNED_BYTE&&(pe=n.RG8),J===n.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),J===n.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RG8UI),J===n.UNSIGNED_SHORT&&(pe=n.RG16UI),J===n.UNSIGNED_INT&&(pe=n.RG32UI),J===n.BYTE&&(pe=n.RG8I),J===n.SHORT&&(pe=n.RG16I),J===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),J===n.UNSIGNED_INT&&(pe=n.RGB32UI),J===n.BYTE&&(pe=n.RGB8I),J===n.SHORT&&(pe=n.RGB16I),J===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),J===n.UNSIGNED_INT&&(pe=n.RGBA32UI),J===n.BYTE&&(pe=n.RGBA8I),J===n.SHORT&&(pe=n.RGBA16I),J===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(J===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),J===n.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const ve=Me?zu:vt.getTransfer(he);J===n.FLOAT&&(pe=n.RGBA32F),J===n.HALF_FLOAT&&(pe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(pe=ve===Nt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),J===n.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(U,w){let J;return U?w===null||w===nr||w===fl?J=n.DEPTH24_STENCIL8:w===Ki?J=n.DEPTH32F_STENCIL8:w===ul&&(J=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===nr||w===fl?J=n.DEPTH_COMPONENT24:w===Ki?J=n.DEPTH_COMPONENT32F:w===ul&&(J=n.DEPTH_COMPONENT16),J}function F(U,w){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function L(U){const w=U.target;w.removeEventListener("dispose",L),I(w),w.isVideoTexture&&m.delete(w),w.isHTMLTexture&&v.delete(w)}function T(U){const w=U.target;w.removeEventListener("dispose",T),V(w)}function I(U){const w=i.get(U);if(w.__webglInit===void 0)return;const J=U.source,ae=y.get(J);if(ae){const he=ae[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&z(U),Object.keys(ae).length===0&&y.delete(J)}i.remove(U)}function z(U){const w=i.get(U);n.deleteTexture(w.__webglTexture);const J=U.source,ae=y.get(J);delete ae[w.__cacheKey],c.memory.textures--}function V(U){const w=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let he=0;he<w.__webglFramebuffer[ae].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[ae][he]);else n.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ae]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=U.textures;for(let ae=0,he=J.length;ae<he;ae++){const Me=i.get(J[ae]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),c.memory.textures--),i.remove(J[ae])}i.remove(U)}let j=0;function re(){j=0}function de(){return j}function Z(U){j=U}function H(){const U=j;return U>=o.maxTextures&&at("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function W(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function G(U,w){const J=i.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const ae=U.image;if(ae===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(J,U,w);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+w)}function ee(U,w){const J=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ie(J,U,w);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+w)}function se(U,w){const J=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ie(J,U,w);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+w)}function O(U,w){const J=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){je(J,U,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+w)}const Q={[Ip]:n.REPEAT,[yr]:n.CLAMP_TO_EDGE,[Fp]:n.MIRRORED_REPEAT},Ne={[wn]:n.NEAREST,[k2]:n.NEAREST_MIPMAP_NEAREST,[Oc]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[ks]:n.LINEAR_MIPMAP_LINEAR},Xe={[z2]:n.NEVER,[j2]:n.ALWAYS,[H2]:n.LESS,[ng]:n.LEQUAL,[G2]:n.EQUAL,[ig]:n.GEQUAL,[W2]:n.GREATER,[X2]:n.NOTEQUAL};function Ve(U,w){if(w.type===Ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Nn||w.magFilter===vh||w.magFilter===Oc||w.magFilter===ks||w.minFilter===Nn||w.minFilter===vh||w.minFilter===Oc||w.minFilter===ks)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Q[w.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Q[w.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Q[w.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Ne[w.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Ne[w.minFilter]),w.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==Oc&&w.minFilter!==ks||w.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ce(U,w){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",L));const ae=w.source;let he=y.get(ae);he===void 0&&(he={},y.set(ae,he));const Me=W(w);if(Me!==U.__cacheKey){he[Me]===void 0&&(he[Me]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,J=!0),he[Me].usedTimes++;const Re=he[U.__cacheKey];Re!==void 0&&(he[U.__cacheKey].usedTimes--,Re.usedTimes===0&&z(w)),U.__cacheKey=Me,U.__webglTexture=he[Me].texture}return J}function _e(U,w,J){return Math.floor(Math.floor(U/J)/w)}function me(U,w,J,ae){const Me=U.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,J,ae,w.data);else{Me.sort((Ke,Le)=>Ke.start-Le.start);let Re=0;for(let Ke=1;Ke<Me.length;Ke++){const Le=Me[Re],Ce=Me[Ke],et=Le.start+Le.count,nt=_e(Ce.start,w.width,4),st=_e(Le.start,w.width,4);Ce.start<=et+1&&nt===st&&_e(Ce.start+Ce.count-1,w.width,4)===nt?Le.count=Math.max(Le.count,Ce.start+Ce.count-Le.start):(++Re,Me[Re]=Ce)}Me.length=Re+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Ke=0,Le=Me.length;Ke<Le;Ke++){const Ce=Me[Ke],et=Math.floor(Ce.start/4),nt=Math.ceil(Ce.count/4),st=et%w.width,Y=Math.floor(et/w.width),be=nt,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(n.TEXTURE_2D,0,st,Y,be,ge,J,ae,w.data)}U.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Ie(U,w,J){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);const he=ce(U,w),Me=w.source;t.bindTexture(ae,U.__webglTexture,n.TEXTURE0+J);const Re=i.get(Me);if(Me.version!==Re.__version||he===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ge=vt.getPrimaries(vt.workingColorSpace),Pe=w.colorSpace===ns?null:vt.getPrimaries(w.colorSpace),Fe=w.colorSpace===ns||ge===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=x(w.image,!1,o.maxTextureSize);ve=yn(w,ve);const De=a.convert(w.format,w.colorSpace),Ke=a.convert(w.type);let Le=A(w.internalFormat,De,Ke,w.normalized,w.colorSpace,w.isVideoTexture);Ve(ae,w);let Ce;const et=w.mipmaps,nt=w.isVideoTexture!==!0,st=Re.__version===void 0||he===!0,Y=Me.dataReady,be=F(w,ve);if(w.isDepthTexture)Le=N(w.format===Bs,w.type),st&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Le,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Le,ve.width,ve.height,0,De,Ke,null));else if(w.isDataTexture)if(et.length>0){nt&&st&&t.texStorage2D(n.TEXTURE_2D,be,Le,et[0].width,et[0].height);for(let ge=0,Pe=et.length;ge<Pe;ge++)Ce=et[ge],nt?Y&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,Ke,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,De,Ke,Ce.data);w.generateMipmaps=!1}else nt?(st&&t.texStorage2D(n.TEXTURE_2D,be,Le,ve.width,ve.height),Y&&me(w,ve,De,Ke)):t.texImage2D(n.TEXTURE_2D,0,Le,ve.width,ve.height,0,De,Ke,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Le,et[0].width,et[0].height,ve.depth);for(let ge=0,Pe=et.length;ge<Pe;ge++)if(Ce=et[ge],w.format!==Ii)if(De!==null)if(nt){if(Y)if(w.layerUpdates.size>0){const Fe=X_(Ce.width,Ce.height,w.format,w.type);for(const xe of w.layerUpdates){const Ye=Ce.data.subarray(xe*Fe/Ce.data.BYTES_PER_ELEMENT,(xe+1)*Fe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,xe,Ce.width,Ce.height,1,De,Ye)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ve.depth,De,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ve.depth,De,Ke,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,ve.depth,0,De,Ke,Ce.data)}else{nt&&st&&t.texStorage2D(n.TEXTURE_2D,be,Le,et[0].width,et[0].height);for(let ge=0,Pe=et.length;ge<Pe;ge++)Ce=et[ge],w.format!==Ii?De!==null?nt?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ce.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Y&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,Ke,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,De,Ke,Ce.data)}else if(w.isDataArrayTexture)if(nt){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Le,ve.width,ve.height,ve.depth),Y)if(w.layerUpdates.size>0){const ge=X_(ve.width,ve.height,w.format,w.type);for(const Pe of w.layerUpdates){const Fe=ve.data.subarray(Pe*ge/ve.data.BYTES_PER_ELEMENT,(Pe+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ve.width,ve.height,1,De,Ke,Fe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,Ke,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ve.width,ve.height,ve.depth,0,De,Ke,ve.data);else if(w.isData3DTexture)nt?(st&&t.texStorage3D(n.TEXTURE_3D,be,Le,ve.width,ve.height,ve.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,Ke,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ve.width,ve.height,ve.depth,0,De,Ke,ve.data);else if(w.isFramebufferTexture){if(st)if(nt)t.texStorage2D(n.TEXTURE_2D,be,Le,ve.width,ve.height);else{let ge=ve.width,Pe=ve.height;for(let Fe=0;Fe<be;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Le,ge,Pe,0,De,Ke,null),ge>>=1,Pe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),v.add(w),ge.onpaint=Pe=>{const Fe=Pe.changedElements;for(const xe of v)Fe.includes(xe.image)&&(xe.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const Fe=n.RGBA,xe=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Fe,xe,Ye,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(et.length>0){if(nt&&st){const ge=Mt(et[0]);t.texStorage2D(n.TEXTURE_2D,be,Le,ge.width,ge.height)}for(let ge=0,Pe=et.length;ge<Pe;ge++)Ce=et[ge],nt?Y&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,De,Ke,Ce):t.texImage2D(n.TEXTURE_2D,ge,Le,De,Ke,Ce);w.generateMipmaps=!1}else if(nt){if(st){const ge=Mt(ve);t.texStorage2D(n.TEXTURE_2D,be,Le,ge.width,ge.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Ke,ve)}else t.texImage2D(n.TEXTURE_2D,0,Le,De,Ke,ve);S(w)&&R(ae),Re.__version=Me.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function je(U,w,J){if(w.image.length!==6)return;const ae=ce(U,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+J);const Me=i.get(he);if(he.version!==Me.__version||ae===!0){t.activeTexture(n.TEXTURE0+J);const Re=vt.getPrimaries(vt.workingColorSpace),pe=w.colorSpace===ns?null:vt.getPrimaries(w.colorSpace),ve=w.colorSpace===ns||Re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,Ke=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let xe=0;xe<6;xe++)!De&&!Ke?Le[xe]=x(w.image[xe],!0,o.maxCubemapSize):Le[xe]=Ke?w.image[xe].image:w.image[xe],Le[xe]=yn(w,Le[xe]);const Ce=Le[0],et=a.convert(w.format,w.colorSpace),nt=a.convert(w.type),st=A(w.internalFormat,et,nt,w.normalized,w.colorSpace),Y=w.isVideoTexture!==!0,be=Me.__version===void 0||ae===!0,ge=he.dataReady;let Pe=F(w,Ce);Ve(n.TEXTURE_CUBE_MAP,w);let Fe;if(De){Y&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,st,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){Fe=Le[xe].mipmaps;for(let Ye=0;Ye<Fe.length;Ye++){const He=Fe[Ye];w.format!==Ii?et!==null?Y?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,He.width,He.height,et,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,st,He.width,He.height,0,He.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,He.width,He.height,et,nt,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,st,He.width,He.height,0,et,nt,He.data)}}}else{if(Fe=w.mipmaps,Y&&be){Fe.length>0&&Pe++;const xe=Mt(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,st,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ke){Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Le[xe].width,Le[xe].height,et,nt,Le[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Le[xe].width,Le[xe].height,0,et,nt,Le[xe].data);for(let Ye=0;Ye<Fe.length;Ye++){const Ft=Fe[Ye].image[xe].image;Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Ft.width,Ft.height,et,nt,Ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,st,Ft.width,Ft.height,0,et,nt,Ft.data)}}else{Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,et,nt,Le[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,et,nt,Le[xe]);for(let Ye=0;Ye<Fe.length;Ye++){const He=Fe[Ye];Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,et,nt,He.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,st,et,nt,He.image[xe])}}}S(w)&&R(n.TEXTURE_CUBE_MAP),Me.__version=he.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function tt(U,w,J,ae,he,Me){const Re=a.convert(J.format,J.colorSpace),pe=a.convert(J.type),ve=A(J.internalFormat,Re,pe,J.normalized,J.colorSpace),De=i.get(w),Ke=i.get(J);if(Ke.__renderTarget=w,!De.__hasExternalTextures){const Le=Math.max(1,w.width>>Me),Ce=Math.max(1,w.height>>Me);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Me,ve,Le,Ce,w.depth,0,Re,pe,null):t.texImage2D(he,Me,ve,Le,Ce,0,Re,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,he,Ke.__webglTexture,0,Pt(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,he,Ke.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(U,w,J){if(n.bindRenderbuffer(n.RENDERBUFFER,U),w.depthBuffer){const ae=w.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Me=N(w.stencilBuffer,he),Re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(w),Me,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(w),Me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Me,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,U)}else{const ae=w.textures;for(let he=0;he<ae.length;he++){const Me=ae[he],Re=a.convert(Me.format,Me.colorSpace),pe=a.convert(Me.type),ve=A(Me.internalFormat,Re,pe,Me.normalized,Me.colorSpace);Xt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(w),ve,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(w),ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(U,w,J){const ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w.depthTexture);const De=a.convert(w.depthTexture.format),Ke=a.convert(w.depthTexture.type);let Le;w.depthTexture.format===Ar?Le=n.DEPTH_COMPONENT24:w.depthTexture.format===Bs&&(Le=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,w.width,w.height,0,De,Ke,null)}}else G(w.depthTexture,0);const Me=he.__webglTexture,Re=Pt(w),pe=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,ve=w.depthTexture.format===Bs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ar)Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Me,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Me,0);else if(w.depthTexture.format===Bs)Xt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Me,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(U){const w=i.get(U),J=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ae}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let ae=0;ae<6;ae++)ft(w.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?ft(w.__webglFramebuffer[0],U,0):ft(w.__webglFramebuffer,U,0)}else if(J){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ot(w.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Me)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ot(w.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(U,w,J){const ae=i.get(U);w!==void 0&&tt(ae.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&wt(U)}function gt(U){const w=U.texture,J=i.get(U),ae=i.get(w);U.addEventListener("dispose",T);const he=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,c.memory.textures++),Me){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let ve=0;ve<w.mipmaps.length;ve++)J.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else J.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)J.__webglFramebuffer[pe]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Re)for(let pe=0,ve=he.length;pe<ve;pe++){const De=i.get(he[pe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),c.memory.textures++)}if(U.samples>0&&Xt(U)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ve=he[pe];J.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const De=a.convert(ve.format,ve.colorSpace),Ke=a.convert(ve.type),Le=A(ve.internalFormat,De,Ke,ve.normalized,ve.colorSpace,U.isXRRenderTarget===!0),Ce=Pt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Le,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Ot(J.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)tt(J.__webglFramebuffer[pe][ve],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else tt(J.__webglFramebuffer[pe],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(w)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,ve=he.length;pe<ve;pe++){const De=he[pe],Ke=i.get(De);let Le=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ke.__webglTexture),Ve(Le,De),tt(J.__webglFramebuffer,U,De,n.COLOR_ATTACHMENT0+pe,Le,0),S(De)&&R(Le)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Ve(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)tt(J.__webglFramebuffer[ve],U,w,n.COLOR_ATTACHMENT0,pe,ve);else tt(J.__webglFramebuffer,U,w,n.COLOR_ATTACHMENT0,pe,0);S(w)&&R(pe),t.unbindTexture()}U.depthBuffer&&wt(U)}function Wt(U){const w=U.textures;for(let J=0,ae=w.length;J<ae;J++){const he=w[J];if(S(he)){const Me=D(U),Re=i.get(he).__webglTexture;t.bindTexture(Me,Re),R(Me),t.unbindTexture()}}}const Qt=[],Jt=[];function $t(U){if(U.samples>0){if(Xt(U)===!1){const w=U.textures,J=U.width,ae=U.height;let he=n.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(U),pe=w.length>1;if(pe)for(let De=0;De<w.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ve=U.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<w.length;De++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const Ke=i.get(w[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,J,ae,0,0,J,ae,he,n.NEAREST),h===!0&&(Qt.length=0,Jt.length=0,Qt.push(n.COLOR_ATTACHMENT0+De),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Qt.push(Me),Jt.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<w.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const Ke=i.get(w[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Pt(U){return Math.min(o.maxSamples,U.samples)}function Xt(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function q(U){const w=c.render.frame;m.get(U)!==w&&(m.set(U,w),U.update())}function yn(U,w){const J=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Vu&&J!==ns&&(vt.getTransfer(J)===Nt?(ae!==Ii||he!==gi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",J)),w}function Mt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=re,this.getTextureUnits=de,this.setTextureUnits=Z,this.setTexture2D=G,this.setTexture2DArray=ee,this.setTexture3D=se,this.setTextureCube=O,this.rebindTextures=_t,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vF(n,e){function t(i,o=ns){let a;const c=vt.getTransfer(o);if(i===gi)return n.UNSIGNED_BYTE;if(i===Zm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===KE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ZE)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$E)return n.BYTE;if(i===qE)return n.SHORT;if(i===ul)return n.UNSIGNED_SHORT;if(i===Km)return n.INT;if(i===nr)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===wr)return n.HALF_FLOAT;if(i===QE)return n.ALPHA;if(i===JE)return n.RGB;if(i===Ii)return n.RGBA;if(i===Ar)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===eM)return n.RED;if(i===Jm)return n.RED_INTEGER;if(i===js)return n.RG;if(i===eg)return n.RG_INTEGER;if(i===tg)return n.RGBA_INTEGER;if(i===yu||i===Su||i===Eu||i===Mu)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Up||i===Op||i===kp||i===Bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Up)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Op)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vp||i===zp||i===Hp||i===Gp||i===Wp||i===ku||i===Xp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Vp||i===zp)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Hp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gp)return a.COMPRESSED_R11_EAC;if(i===Wp)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ku)return a.COMPRESSED_RG11_EAC;if(i===Xp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jp||i===Yp||i===$p||i===qp||i===Kp||i===Zp||i===Qp||i===Jp||i===em||i===tm||i===nm||i===im||i===rm||i===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===jp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$p)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===em)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tm)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nm)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===im)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rm)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sm)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===om||i===am||i===lm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===om)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===am)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cm||i===um||i===Bu||i===fm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===cm)return a.COMPRESSED_RED_RGTC1_EXT;if(i===um)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_F=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ir({vertexShader:xF,fragmentShader:_F,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new br(new rf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SF extends Ks{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",h=1,d=null,m=null,v=null,p=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",x=new yF,S={},R=t.getContextAttributes();let D=null,A=null;const N=[],F=[],L=new bt;let T=null;const I=new Li;I.viewport=new nn;const z=new Li;z.viewport=new nn;const V=[I,z],j=new DD;let re=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let _e=N[ce];return _e===void 0&&(_e=new wh,N[ce]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ce){let _e=N[ce];return _e===void 0&&(_e=new wh,N[ce]=_e),_e.getGripSpace()},this.getHand=function(ce){let _e=N[ce];return _e===void 0&&(_e=new wh,N[ce]=_e),_e.getHandSpace()};function Z(ce){const _e=F.indexOf(ce.inputSource);if(_e===-1)return;const me=N[_e];me!==void 0&&(me.update(ce.inputSource,ce.frame,d||c),me.dispatchEvent({type:ce.type,data:ce.inputSource}))}function H(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",W);for(let ce=0;ce<N.length;ce++){const _e=F[ce];_e!==null&&(F[ce]=null,N[ce].disconnect(_e))}re=null,de=null,x.reset();for(const ce in S)delete S[ce];e.setRenderTarget(D),y=null,p=null,v=null,o=null,A=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){a=ce,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){u=ce,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ce){d=ce},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return v===null&&M&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",H),o.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,je=null;R.depth&&(je=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?Bs:Ar,Ie=R.stencil?fl:nr);const tt={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:a};v=this.getBinding(),p=v.createProjectionLayer(tt),o.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),A=new er(p.textureWidth,p.textureHeight,{format:Ii,type:gi,depthTexture:new Qo(p.textureWidth,p.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new er(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await o.requestReferenceSpace(u),Ve.setContext(o),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(ce){for(let _e=0;_e<ce.removed.length;_e++){const me=ce.removed[_e],Ie=F.indexOf(me);Ie>=0&&(F[Ie]=null,N[Ie].disconnect(me))}for(let _e=0;_e<ce.added.length;_e++){const me=ce.added[_e];let Ie=F.indexOf(me);if(Ie===-1){for(let tt=0;tt<N.length;tt++)if(tt>=F.length){F.push(me),Ie=tt;break}else if(F[tt]===null){F[tt]=me,Ie=tt;break}if(Ie===-1)break}const je=N[Ie];je&&je.connect(me)}}const G=new le,ee=new le;function se(ce,_e,me){G.setFromMatrixPosition(_e.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const Ie=G.distanceTo(ee),je=_e.projectionMatrix.elements,tt=me.projectionMatrix.elements,Ot=je[14]/(je[10]-1),ft=je[14]/(je[10]+1),wt=(je[9]+1)/je[5],_t=(je[9]-1)/je[5],gt=(je[8]-1)/je[0],Wt=(tt[8]+1)/tt[0],Qt=Ot*gt,Jt=Ot*Wt,$t=Ie/(-gt+Wt),Pt=$t*-gt;if(_e.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Pt),ce.translateZ($t),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),je[10]===-1)ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Xt=Ot+$t,q=ft+$t,yn=Qt-Pt,Mt=Jt+(Ie-Pt),U=wt*ft/q*Xt,w=_t*ft/q*Xt;ce.projectionMatrix.makePerspective(yn,Mt,U,w,Xt,q),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function O(ce,_e){_e===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(_e.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let _e=ce.near,me=ce.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(me=x.depthFar)),j.near=z.near=I.near=_e,j.far=z.far=I.far=me,(re!==j.near||de!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,de=j.far),j.layers.mask=ce.layers.mask|6,I.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;const Ie=ce.parent,je=j.cameras;O(j,Ie);for(let tt=0;tt<je.length;tt++)O(je[tt],Ie);je.length===2?se(j,I,z):j.projectionMatrix.copy(I.projectionMatrix),Q(ce,j,Ie)};function Q(ce,_e,me){me===null?ce.matrix.copy(_e.matrixWorld):(ce.matrix.copy(me.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(_e.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=dm*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(p===null&&y===null))return h},this.setFoveation=function(ce){h=ce,p!==null&&(p.fixedFoveation=ce),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(j)},this.getCameraTexture=function(ce){return S[ce]};let Ne=null;function Xe(ce,_e){if(m=_e.getViewerPose(d||c),E=_e,m!==null){const me=m.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let Ie=!1;me.length!==j.cameras.length&&(j.cameras.length=0,Ie=!0);for(let ft=0;ft<me.length;ft++){const wt=me[ft];let _t=null;if(y!==null)_t=y.getViewport(wt);else{const Wt=v.getViewSubImage(p,wt);_t=Wt.viewport,ft===0&&(e.setRenderTargetTextures(A,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(A))}let gt=V[ft];gt===void 0&&(gt=new Li,gt.layers.enable(ft),gt.viewport=new nn,V[ft]=gt),gt.matrix.fromArray(wt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(wt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(_t.x,_t.y,_t.width,_t.height),ft===0&&(j.matrix.copy(gt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ie===!0&&j.cameras.push(gt)}const je=o.enabledFeatures;if(je&&je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){v=i.getBinding();const ft=v.getDepthInformation(me[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,o.renderState)}if(je&&je.includes("camera-access")&&M){e.state.unbindTexture(),v=i.getBinding();for(let ft=0;ft<me.length;ft++){const wt=me[ft].camera;if(wt){let _t=S[wt];_t||(_t=new dM,S[wt]=_t);const gt=v.getCameraImage(wt);_t.sourceTexture=gt}}}}for(let me=0;me<N.length;me++){const Ie=F[me],je=N[me];Ie!==null&&je!==void 0&&je.update(Ie,_e,d||c)}Ne&&Ne(ce,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),E=null}const Ve=new mM;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(ce){Ne=ce},this.dispose=function(){}}}const EF=new sn,EM=new ut;EM.set(-1,0,0,0,1,0,0,0,1);function MF(n,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function i(x,S){S.color.getRGB(x.fogColor.value,hM(n)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,R,D,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(x,S):S.isMeshLambertMaterial?(a(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(x,S),v(x,S)):S.isMeshPhongMaterial?(a(x,S),m(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(x,S),p(x,S),S.isMeshPhysicalMaterial&&y(x,S,A)):S.isMeshMatcapMaterial?(a(x,S),E(x,S)):S.isMeshDepthMaterial?a(x,S):S.isMeshDistanceMaterial?(a(x,S),M(x,S)):S.isMeshNormalMaterial?a(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&u(x,S)):S.isPointsMaterial?h(x,S,R,D):S.isSpriteMaterial?d(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Qn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Qn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=e.get(S),D=R.envMap,A=R.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(EF.makeRotationFromEuler(A)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(EM),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function u(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function h(x,S,R,D){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=D*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function p(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function M(x,S){const R=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function TF(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,N){const F=N.program;i.uniformBlockBinding(A,F)}function d(A,N){let F=o[A.id];F===void 0&&(x(A),F=m(A),o[A.id]=F,A.addEventListener("dispose",R));const L=N.program;i.updateUBOMapping(A,L);const T=e.render.frame;a[A.id]!==T&&(p(A),a[A.id]=T)}function m(A){const N=v();A.__bindingPointIndex=N;const F=n.createBuffer(),L=A.__size,T=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,F),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,F),F}function v(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const N=o[A.id],F=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let T=0,I=F.length;T<I;T++){const z=F[T];if(Array.isArray(z))for(let V=0,j=z.length;V<j;V++)y(z[V],T,V,L);else y(z,T,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(A,N,F,L){if(M(A,N,F,L)===!0){const T=A.__offset,I=A.value;if(Array.isArray(I)){let z=0;for(let V=0;V<I.length;V++){const j=I[V],re=S(j);E(j,A.__data,z),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,A.__data)}}function E(A,N,F){typeof A=="number"||typeof A=="boolean"?N[0]=A:A.isMatrix3?(N[0]=A.elements[0],N[1]=A.elements[1],N[2]=A.elements[2],N[3]=0,N[4]=A.elements[3],N[5]=A.elements[4],N[6]=A.elements[5],N[7]=0,N[8]=A.elements[6],N[9]=A.elements[7],N[10]=A.elements[8],N[11]=0):ArrayBuffer.isView(A)?N.set(new A.constructor(A.buffer,A.byteOffset,N.length)):A.toArray(N,F)}function M(A,N,F,L){const T=A.value,I=N+"_"+F;if(L[I]===void 0)return typeof T=="number"||typeof T=="boolean"?L[I]=T:ArrayBuffer.isView(T)?L[I]=T.slice():L[I]=T.clone(),!0;{const z=L[I];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return L[I]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(z.equals(T)===!1)return z.copy(T),!0}}return!1}function x(A){const N=A.uniforms;let F=0;const L=16;for(let I=0,z=N.length;I<z;I++){const V=Array.isArray(N[I])?N[I]:[N[I]];for(let j=0,re=V.length;j<re;j++){const de=V[j],Z=Array.isArray(de.value)?de.value:[de.value];for(let H=0,W=Z.length;H<W;H++){const G=Z[H],ee=S(G),se=F%L,O=se%ee.boundary,Q=se+O;F+=O,Q!==0&&L-Q<ee.storage&&(F+=L-Q),de.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=F,F+=ee.storage}}}const T=F%L;return T>0&&(F+=L-T),A.__size=F,A.__cache={},this}function S(A){const N={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(N.boundary=4,N.storage=4):A.isVector2?(N.boundary=8,N.storage=8):A.isVector3||A.isColor?(N.boundary=16,N.storage=12):A.isVector4?(N.boundary=16,N.storage=16):A.isMatrix3?(N.boundary=48,N.storage=48):A.isMatrix4?(N.boundary=64,N.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(N.boundary=16,N.storage=A.byteLength):at("WebGLRenderer: Unsupported uniform value type.",A),N}function R(A){const N=A.target;N.removeEventListener("dispose",R);const F=c.indexOf(N.__bindingPointIndex);c.splice(F,1),n.deleteBuffer(o[N.id]),delete o[N.id],delete a[N.id]}function D(){for(const A in o)n.deleteBuffer(o[A]);c=[],o={},a={}}return{bind:h,update:d,dispose:D}}const wF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function AF(){return Xi===null&&(Xi=new vD(wF,16,16,js,wr),Xi.name="DFG_LUT",Xi.minFilter=Nn,Xi.magFilter=Nn,Xi.wrapS=yr,Xi.wrapT=yr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class bF{constructor(e={}){const{canvas:t=$2(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:y=gi}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;const M=y,x=new Set([tg,eg,Jm]),S=new Set([gi,nr,ul,fl,Zm,Qm]),R=new Uint32Array(4),D=new Int32Array(4),A=new le;let N=null,F=null;const L=[],T=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,j=null,re=null,de=null,Z=null;this._outputColorSpace=mi;let H=0,W=0,G=null,ee=-1,se=null;const O=new nn,Q=new nn;let Ne=null;const Xe=new At(0);let Ve=0,ce=t.width,_e=t.height,me=1,Ie=null,je=null;const tt=new nn(0,0,ce,_e),Ot=new nn(0,0,ce,_e);let ft=!1;const wt=new cM;let _t=!1,gt=!1;const Wt=new sn,Qt=new le,Jt=new nn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Xt(){return G===null?me:1}let q=i;function yn(C,K){return t.getContext(C,K)}try{const C={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qm}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",An,!1),q===null){const K="webgl2";if(q=yn(K,C),q===null)throw yn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Et("WebGLRenderer: "+C.message),C}let Mt,U,w,J,ae,he,Me,Re,pe,ve,De,Ke,Le,Ce,et,nt,st,Y,be,ge,Pe,Fe,xe;function Ye(){Mt=new AN(q),Mt.init(),Pe=new vF(q,Mt),U=new xN(q,Mt,e,Pe),w=new mF(q,Mt),U.reversedDepthBuffer&&p&&w.buffers.depth.setReversed(!0),re=q.createFramebuffer(),de=q.createFramebuffer(),Z=q.createFramebuffer(),J=new RN(q),ae=new tF,he=new gF(q,Mt,w,ae,U,Pe,J),Me=new wN(z),Re=new ND(q),Fe=new gN(q,Re),pe=new bN(q,Re,J,Fe),ve=new DN(q,pe,Re,Fe,J),Y=new PN(q,U,he),et=new _N(ae),De=new eF(z,Me,Mt,U,Fe,et),Ke=new MF(z,ae),Le=new iF,Ce=new cF(Mt),st=new mN(z,Me,w,ve,E,h),nt=new pF(z,ve,U),xe=new TF(q,J,U,w),be=new vN(q,Mt,J),ge=new CN(q,Mt,J),J.programs=De.programs,z.capabilities=U,z.extensions=Mt,z.properties=ae,z.renderLists=Le,z.shadowMap=nt,z.state=w,z.info=J}Ye(),M!==gi&&(I=new NN(M,t.width,t.height,u,o,a));const He=new SF(z,q);this.xr=He,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(ce,_e,!1))},this.getSize=function(C){return C.set(ce,_e)},this.setSize=function(C,K,ue=!0){if(He.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,_e=K,t.width=Math.floor(C*me),t.height=Math.floor(K*me),ue===!0&&(t.style.width=C+"px",t.style.height=K+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(ce*me,_e*me).floor()},this.setDrawingBufferSize=function(C,K,ue){ce=C,_e=K,me=ue,t.width=Math.floor(C*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(M===gi){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,K,ue,ie){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,K,ue,ie),w.viewport(O.copy(tt).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(Ot)},this.setScissor=function(C,K,ue,ie){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,K,ue,ie),w.scissor(Q.copy(Ot).multiplyScalar(me).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){w.setScissorTest(ft=C)},this.setOpaqueSort=function(C){Ie=C},this.setTransparentSort=function(C){je=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ue=!0){let ie=0;if(C){let ne=!1;if(G!==null){const Ae=G.texture.format;ne=x.has(Ae)}if(ne){const Ae=G.texture.type,Be=S.has(Ae),we=st.getClearColor(),$e=st.getClearAlpha(),Je=we.r,lt=we.g,ct=we.b;Be?(R[0]=Je,R[1]=lt,R[2]=ct,R[3]=$e,q.clearBufferuiv(q.COLOR,0,R)):(D[0]=Je,D[1]=lt,D[2]=ct,D[3]=$e,q.clearBufferiv(q.COLOR,0,D))}else ie|=q.COLOR_BUFFER_BIT}K&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",An,!1),st.dispose(),Le.dispose(),Ce.dispose(),ae.dispose(),Me.dispose(),ve.dispose(),Fe.dispose(),xe.dispose(),De.dispose(),He.dispose(),He.removeEventListener("sessionstart",El),He.removeEventListener("sessionend",Ml),In.stop()};function Ft(C){C.preventDefault(),T_("WebGLRenderer: Context Lost."),V=!0}function Ct(){T_("WebGLRenderer: Context Restored."),V=!1;const C=J.autoReset,K=nt.enabled,ue=nt.autoUpdate,ie=nt.needsUpdate,ne=nt.type;Ye(),J.autoReset=C,nt.enabled=K,nt.autoUpdate=ue,nt.needsUpdate=ie,nt.type=ne}function An(C){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ai(C){const K=C.target;K.removeEventListener("dispose",ai),cs(K)}function cs(C){Zs(C),ae.remove(C)}function Zs(C){const K=ae.get(C).programs;K!==void 0&&(K.forEach(function(ue){De.releaseProgram(ue)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ue,ie,ne,Ae){K===null&&(K=$t);const Be=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,we=qt(C,K,ue,ie,ne);w.setMaterial(ie,Be);let $e=ue.index,Je=1;if(ie.wireframe===!0){if($e=pe.getWireframeAttribute(ue),$e===void 0)return;Je=2}const lt=ue.drawRange,ct=ue.attributes.position;let Ze=lt.start*Je,yt=(lt.start+lt.count)*Je;Ae!==null&&(Ze=Math.max(Ze,Ae.start*Je),yt=Math.min(yt,(Ae.start+Ae.count)*Je)),$e!==null?(Ze=Math.max(Ze,0),yt=Math.min(yt,$e.count)):ct!=null&&(Ze=Math.max(Ze,0),yt=Math.min(yt,ct.count));const kt=yt-Ze;if(kt<0||kt===1/0)return;Fe.setup(ne,ie,we,ue,$e);let jt,Dt=be;if($e!==null&&(jt=Re.get($e),Dt=ge,Dt.setIndex(jt)),ne.isMesh)ie.wireframe===!0?(w.setLineWidth(ie.wireframeLinewidth*Xt()),Dt.setMode(q.LINES)):Dt.setMode(q.TRIANGLES);else if(ne.isLine){let on=ie.linewidth;on===void 0&&(on=1),w.setLineWidth(on*Xt()),ne.isLineSegments?Dt.setMode(q.LINES):ne.isLineLoop?Dt.setMode(q.LINE_LOOP):Dt.setMode(q.LINE_STRIP)}else ne.isPoints?Dt.setMode(q.POINTS):ne.isSprite&&Dt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const on=ne._multiDrawStarts,Oe=ne._multiDrawCounts,Sn=ne._multiDrawCount,ht=$e?Re.get($e).bytesPerElement:1,Hn=ae.get(ie).currentProgram.getUniforms();for(let Gn=0;Gn<Sn;Gn++)Hn.setValue(q,"_gl_DrawID",Gn),Dt.render(on[Gn]/ht,Oe[Gn])}else if(ne.isInstancedMesh)Dt.renderInstances(Ze,kt,ne.count);else if(ue.isInstancedBufferGeometry){const on=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Oe=Math.min(ue.instanceCount,on);Dt.renderInstances(Ze,kt,Oe)}else Dt.render(Ze,kt)};function us(C,K,ue){C.transparent===!0&&C.side===_r&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,hs(C,K,ue),C.side=as,C.needsUpdate=!0,hs(C,K,ue),C.side=_r):hs(C,K,ue)}this.compile=function(C,K,ue=null){ue===null&&(ue=C),F=Ce.get(ue),F.init(K),T.push(F),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(F.pushLight(ne),ne.castShadow&&F.pushShadow(ne))}),C!==ue&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(F.pushLight(ne),ne.castShadow&&F.pushShadow(ne))}),F.setupLights();const ie=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ae=ne.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){const we=Ae[Be];us(we,ue,ne),ie.add(we)}else us(Ae,ue,ne),ie.add(Ae)}),F=T.pop(),ie},this.compileAsync=function(C,K,ue=null){const ie=this.compile(C,K,ue);return new Promise(ne=>{function Ae(){if(ie.forEach(function(Be){ae.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){ne(C);return}setTimeout(Ae,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let fs=null;function af(C){fs&&fs(C)}function El(){In.stop()}function Ml(){In.start()}const In=new mM;In.setAnimationLoop(af),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(C){fs=C,He.setAnimationLoop(C),C===null?In.stop():In.start()},He.addEventListener("sessionstart",El),He.addEventListener("sessionend",Ml),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;j!==null&&j.renderStart(C,K);const ue=He.enabled===!0&&He.isPresenting===!0,ie=I!==null&&(G===null||ue)&&I.begin(z,G);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(K),K=He.getCamera()),C.isScene===!0&&C.onBeforeRender(z,C,K,G),F=Ce.get(C,T.length),F.init(K),F.state.textureUnits=he.getTextureUnits(),T.push(F),Wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),wt.setFromProjectionMatrix(Wt,Zi,K.reversedDepth),gt=this.localClippingEnabled,_t=et.init(this.clippingPlanes,gt),N=Le.get(C,L.length),N.init(),L.push(N),He.enabled===!0&&He.isPresenting===!0){const Be=z.xr.getDepthSensingMesh();Be!==null&&Qs(Be,K,-1/0,z.sortObjects)}Qs(C,K,0,z.sortObjects),N.finish(),z.sortObjects===!0&&N.sort(Ie,je,K.reversedDepth),Pt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Pt&&st.addToRenderList(N,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&et.beginShadows();const ne=F.state.shadowsArray;if(nt.render(ne,C,K),_t===!0&&et.endShadows(),(ie&&I.hasRenderPass())===!1){const Be=N.opaque,we=N.transmissive;if(F.setupLights(),K.isArrayCamera){const $e=K.cameras;if(we.length>0)for(let Je=0,lt=$e.length;Je<lt;Je++){const ct=$e[Je];Tl(Be,we,C,ct)}Pt&&st.render(C);for(let Je=0,lt=$e.length;Je<lt;Je++){const ct=$e[Je];sa(N,C,ct,ct.viewport)}}else we.length>0&&Tl(Be,we,C,K),Pt&&st.render(C),sa(N,C,K)}G!==null&&W===0&&(he.updateMultisampleRenderTarget(G),he.updateRenderTargetMipmap(G)),ie&&I.end(z),C.isScene===!0&&C.onAfterRender(z,C,K),Fe.resetDefaultState(),ee=-1,se=null,T.pop(),T.length>0?(F=T[T.length-1],he.setTextureUnits(F.state.textureUnits),_t===!0&&et.setGlobalState(z.clippingPlanes,F.state.camera)):F=null,L.pop(),L.length>0?N=L[L.length-1]:N=null,j!==null&&j.renderEnd()};function Qs(C,K,ue,ie){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLightProbeGrid)F.pushLightProbeGrid(C);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||wt.intersectsSprite(C)){ie&&Jt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Wt);const Be=ve.update(C),we=C.material;we.visible&&N.push(C,Be,we,ue,Jt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||wt.intersectsObject(C))){const Be=ve.update(C),we=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Jt.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Jt.copy(Be.boundingSphere.center)),Jt.applyMatrix4(C.matrixWorld).applyMatrix4(Wt)),Array.isArray(we)){const $e=Be.groups;for(let Je=0,lt=$e.length;Je<lt;Je++){const ct=$e[Je],Ze=we[ct.materialIndex];Ze&&Ze.visible&&N.push(C,Be,Ze,ue,Jt.z,ct)}}else we.visible&&N.push(C,Be,we,ue,Jt.z,null)}}const Ae=C.children;for(let Be=0,we=Ae.length;Be<we;Be++)Qs(Ae[Be],K,ue,ie)}function sa(C,K,ue,ie){const{opaque:ne,transmissive:Ae,transparent:Be}=C;F.setupLightsView(ue),_t===!0&&et.setGlobalState(z.clippingPlanes,ue),ie&&w.viewport(O.copy(ie)),ne.length>0&&ds(ne,K,ue),Ae.length>0&&ds(Ae,K,ue),Be.length>0&&ds(Be,K,ue),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Tl(C,K,ue,ie){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ie.id]===void 0){const Ze=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ie.id]=new er(1,1,{generateMipmaps:!0,type:Ze?wr:gi,minFilter:ks,samples:Math.max(4,U.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ae=F.state.transmissionRenderTarget[ie.id],Be=ie.viewport||O;Ae.setSize(Be.z*z.transmissionResolutionScale,Be.w*z.transmissionResolutionScale);const we=z.getRenderTarget(),$e=z.getActiveCubeFace(),Je=z.getActiveMipmapLevel();z.setRenderTarget(Ae),z.getClearColor(Xe),Ve=z.getClearAlpha(),Ve<1&&z.setClearColor(16777215,.5),z.clear(),Pt&&st.render(ue);const lt=z.toneMapping;z.toneMapping=Ji;const ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),F.setupLightsView(ie),_t===!0&&et.setGlobalState(z.clippingPlanes,ie),ds(C,ue,ie),he.updateMultisampleRenderTarget(Ae),he.updateRenderTargetMipmap(Ae),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let yt=0,kt=K.length;yt<kt;yt++){const jt=K[yt],{object:Dt,geometry:on,material:Oe,group:Sn}=jt;if(Oe.side===_r&&Dt.layers.test(ie.layers)){const ht=Oe.side;Oe.side=Qn,Oe.needsUpdate=!0,oa(Dt,ue,ie,on,Oe,Sn),Oe.side=ht,Oe.needsUpdate=!0,Ze=!0}}Ze===!0&&(he.updateMultisampleRenderTarget(Ae),he.updateRenderTargetMipmap(Ae))}z.setRenderTarget(we,$e,Je),z.setClearColor(Xe,Ve),ct!==void 0&&(ie.viewport=ct),z.toneMapping=lt}function ds(C,K,ue){const ie=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Ae=C.length;ne<Ae;ne++){const Be=C[ne],{object:we,geometry:$e,group:Je}=Be;let lt=Be.material;lt.allowOverride===!0&&ie!==null&&(lt=ie),we.layers.test(ue.layers)&&oa(we,K,ue,$e,lt,Je)}}function oa(C,K,ue,ie,ne,Ae){C.onBeforeRender(z,K,ue,ie,ne,Ae),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(z,K,ue,ie,C,Ae),ne.transparent===!0&&ne.side===_r&&ne.forceSinglePass===!1?(ne.side=Qn,ne.needsUpdate=!0,z.renderBufferDirect(ue,K,ie,ne,C,Ae),ne.side=as,ne.needsUpdate=!0,z.renderBufferDirect(ue,K,ie,ne,C,Ae),ne.side=_r):z.renderBufferDirect(ue,K,ie,ne,C,Ae),C.onAfterRender(z,K,ue,ie,ne,Ae)}function hs(C,K,ue){K.isScene!==!0&&(K=$t);const ie=ae.get(C),ne=F.state.lights,Ae=F.state.shadowsArray,Be=ne.state.version,we=De.getParameters(C,ne.state,Ae,K,ue,F.state.lightProbeGridArray),$e=De.getProgramCacheKey(we);let Je=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,ie.fog=K.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=Me.get(C.envMap||ie.environment,lt),ie.envMapRotation=ie.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",ai),Je=new Map,ie.programs=Je);let ct=Je.get($e);if(ct!==void 0){if(ie.currentProgram===ct&&ie.lightsStateVersion===Be)return wl(C,we),ct}else we.uniforms=De.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,ue,we),C.onBeforeCompile(we,z),ct=De.acquireProgram(we,$e),Je.set($e,ct),ie.uniforms=we.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=et.uniform),wl(C,we),ie.needsLights=la(C),ie.lightsStateVersion=Be,ie.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=F.state.lightProbeGridArray.length>0,ie.currentProgram=ct,ie.uniformsList=null,ct}function aa(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Tu.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function wl(C,K){const ue=ae.get(C);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function lf(C,K){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;A.setFromMatrixPosition(K.matrixWorld);for(let ue=0,ie=C.length;ue<ie;ue++){const ne=C[ue];if(ne.texture!==null&&ne.boundingBox.containsPoint(A))return ne}return null}function qt(C,K,ue,ie,ne){K.isScene!==!0&&(K=$t),he.resetTextureUnits();const Ae=K.fog,Be=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?K.environment:null,we=G===null?z.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vt.workingColorSpace,$e=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Je=Me.get(ie.envMap||Be,$e),lt=ie.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ct=!!ue.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!ue.morphAttributes.position,yt=!!ue.morphAttributes.normal,kt=!!ue.morphAttributes.color;let jt=Ji;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(jt=z.toneMapping);const Dt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,on=Dt!==void 0?Dt.length:0,Oe=ae.get(ie),Sn=F.state.lights;if(_t===!0&&(gt===!0||C!==se)){const Lt=C===se&&ie.id===ee;et.setState(ie,C,Lt)}let ht=!1;ie.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Sn.state.version||Oe.outputColorSpace!==we||ne.isBatchedMesh&&Oe.batching===!1||!ne.isBatchedMesh&&Oe.batching===!0||ne.isBatchedMesh&&Oe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Oe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Oe.instancing===!1||!ne.isInstancedMesh&&Oe.instancing===!0||ne.isSkinnedMesh&&Oe.skinning===!1||!ne.isSkinnedMesh&&Oe.skinning===!0||ne.isInstancedMesh&&Oe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Oe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Oe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Oe.instancingMorph===!1&&ne.morphTexture!==null||Oe.envMap!==Je||ie.fog===!0&&Oe.fog!==Ae||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==et.numPlanes||Oe.numIntersection!==et.numIntersection)||Oe.vertexAlphas!==lt||Oe.vertexTangents!==ct||Oe.morphTargets!==Ze||Oe.morphNormals!==yt||Oe.morphColors!==kt||Oe.toneMapping!==jt||Oe.morphTargetsCount!==on||!!Oe.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Oe.__version=ie.version);let Hn=Oe.currentProgram;ht===!0&&(Hn=hs(ie,K,ne),j&&ie.isNodeMaterial&&j.onUpdateProgram(ie,Hn,Oe));let Gn=!1,pt=!1,rr=!1;const Rt=Hn.getUniforms(),Vt=Oe.uniforms;if(w.useProgram(Hn.program)&&(Gn=!0,pt=!0,rr=!0),ie.id!==ee&&(ee=ie.id,pt=!0),Oe.needsLights){const Lt=lf(F.state.lightProbeGridArray,ne);Oe.lightProbeGrid!==Lt&&(Oe.lightProbeGrid=Lt,pt=!0)}if(Gn||se!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(q,"projectionMatrix",C.projectionMatrix),Rt.setValue(q,"viewMatrix",C.matrixWorldInverse);const yi=Rt.map.cameraPosition;yi!==void 0&&yi.setValue(q,Qt.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Rt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Rt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),se!==C&&(se=C,pt=!0,rr=!0)}if(Oe.needsLights&&(Sn.state.directionalShadowMap.length>0&&Rt.setValue(q,"directionalShadowMap",Sn.state.directionalShadowMap,he),Sn.state.spotShadowMap.length>0&&Rt.setValue(q,"spotShadowMap",Sn.state.spotShadowMap,he),Sn.state.pointShadowMap.length>0&&Rt.setValue(q,"pointShadowMap",Sn.state.pointShadowMap,he)),ne.isSkinnedMesh){Rt.setOptional(q,ne,"bindMatrix"),Rt.setOptional(q,ne,"bindMatrixInverse");const Lt=ne.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Rt.setValue(q,"boneTexture",Lt.boneTexture,he))}ne.isBatchedMesh&&(Rt.setOptional(q,ne,"batchingTexture"),Rt.setValue(q,"batchingTexture",ne._matricesTexture,he),Rt.setOptional(q,ne,"batchingIdTexture"),Rt.setValue(q,"batchingIdTexture",ne._indirectTexture,he),Rt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Rt.setValue(q,"batchingColorTexture",ne._colorsTexture,he));const _i=ue.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Y.update(ne,ue,Hn),(pt||Oe.receiveShadow!==ne.receiveShadow)&&(Oe.receiveShadow=ne.receiveShadow,Rt.setValue(q,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&K.environment!==null&&(Vt.envMapIntensity.value=K.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=AF()),pt){if(Rt.setValue(q,"toneMappingExposure",z.toneMappingExposure),Oe.needsLights&&cf(Vt,rr),Ae&&ie.fog===!0&&Ke.refreshFogUniforms(Vt,Ae),Ke.refreshMaterialUniforms(Vt,ie,me,_e,F.state.transmissionRenderTarget[C.id]),Oe.needsLights&&Oe.lightProbeGrid){const Lt=Oe.lightProbeGrid;Vt.probesSH.value=Lt.texture,Vt.probesMin.value.copy(Lt.boundingBox.min),Vt.probesMax.value.copy(Lt.boundingBox.max),Vt.probesResolution.value.copy(Lt.resolution)}Tu.upload(q,aa(Oe),Vt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Tu.upload(q,aa(Oe),Vt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Rt.setValue(q,"center",ne.center),Rt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),Rt.setValue(q,"normalMatrix",ne.normalMatrix),Rt.setValue(q,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Lt=ie.uniformsGroups;for(let yi=0,Bi=Lt.length;yi<Bi;yi++){const ps=Lt[yi];xe.update(ps,Hn),xe.bind(ps,Hn)}}return Hn}function cf(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function la(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,K,ue){const ie=ae.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ae.get(C.texture).__webglTexture=K,ae.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ue,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ue=ae.get(C);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ue=0){G=C,H=K,W=ue;let ie=null,ne=!1,Ae=!1;if(C){const we=ae.get(C);if(we.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(q.FRAMEBUFFER,we.__webglFramebuffer),O.copy(C.viewport),Q.copy(C.scissor),Ne=C.scissorTest,w.viewport(O),w.scissor(Q),w.setScissorTest(Ne),ee=-1;return}else if(we.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(we.__hasExternalTextures)he.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(we.__boundDepthTexture!==lt){if(lt!==null&&ae.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ae=!0);const Je=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?ie=Je[K][ue]:ie=Je[K],ne=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?ie=ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?ie=Je[ue]:ie=Je,O.copy(C.viewport),Q.copy(C.scissor),Ne=C.scissorTest}else O.copy(tt).multiplyScalar(me).floor(),Q.copy(Ot).multiplyScalar(me).floor(),Ne=ft;if(ue!==0&&(ie=re),w.bindFramebuffer(q.FRAMEBUFFER,ie)&&w.drawBuffers(C,ie),w.viewport(O),w.scissor(Q),w.setScissorTest(Ne),ne){const we=ae.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,we.__webglTexture,ue)}else if(Ae){const we=K;for(let $e=0;$e<C.textures.length;$e++){const Je=ae.get(C.textures[$e]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+$e,Je.__webglTexture,ue,we)}}else if(C!==null&&ue!==0){const we=ae.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,we.__webglTexture,ue)}ee=-1},this.readRenderTargetPixels=function(C,K,ue,ie,ne,Ae,Be,we=0){if(!(C&&C.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&($e=$e[Be]),$e){w.bindFramebuffer(q.FRAMEBUFFER,$e);try{const Je=C.textures[we],lt=Je.format,ct=Je.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ct)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ie&&ue>=0&&ue<=C.height-ne&&q.readPixels(K,ue,ie,ne,Pe.convert(lt),Pe.convert(ct),Ae)}finally{const Je=G!==null?ae.get(G).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,K,ue,ie,ne,Ae,Be,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&($e=$e[Be]),$e)if(K>=0&&K<=C.width-ie&&ue>=0&&ue<=C.height-ne){w.bindFramebuffer(q.FRAMEBUFFER,$e);const Je=C.textures[we],lt=Je.format,ct=Je.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.bufferData(q.PIXEL_PACK_BUFFER,Ae.byteLength,q.STREAM_READ),q.readPixels(K,ue,ie,ne,Pe.convert(lt),Pe.convert(ct),0);const yt=G!==null?ae.get(G).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,yt);const kt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await q2(q,kt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ae),q.deleteBuffer(Ze),q.deleteSync(kt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ue=0){const ie=Math.pow(2,-ue),ne=Math.floor(C.image.width*ie),Ae=Math.floor(C.image.height*ie),Be=K!==null?K.x:0,we=K!==null?K.y:0;he.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,Be,we,ne,Ae),w.unbindTexture()},this.copyTextureToTexture=function(C,K,ue=null,ie=null,ne=0,Ae=0){let Be,we,$e,Je,lt,ct,Ze,yt,kt;const jt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(ue!==null)Be=ue.max.x-ue.min.x,we=ue.max.y-ue.min.y,$e=ue.isBox3?ue.max.z-ue.min.z:1,Je=ue.min.x,lt=ue.min.y,ct=ue.isBox3?ue.min.z:0;else{const Vt=Math.pow(2,-ne);Be=Math.floor(jt.width*Vt),we=Math.floor(jt.height*Vt),C.isDataArrayTexture?$e=jt.depth:C.isData3DTexture?$e=Math.floor(jt.depth*Vt):$e=1,Je=0,lt=0,ct=0}ie!==null?(Ze=ie.x,yt=ie.y,kt=ie.z):(Ze=0,yt=0,kt=0);const Dt=Pe.convert(K.format),on=Pe.convert(K.type);let Oe;K.isData3DTexture?(he.setTexture3D(K,0),Oe=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(he.setTexture2DArray(K,0),Oe=q.TEXTURE_2D_ARRAY):(he.setTexture2D(K,0),Oe=q.TEXTURE_2D),w.activeTexture(q.TEXTURE0),w.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),w.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),w.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const Sn=w.getParameter(q.UNPACK_ROW_LENGTH),ht=w.getParameter(q.UNPACK_IMAGE_HEIGHT),Hn=w.getParameter(q.UNPACK_SKIP_PIXELS),Gn=w.getParameter(q.UNPACK_SKIP_ROWS),pt=w.getParameter(q.UNPACK_SKIP_IMAGES);w.pixelStorei(q.UNPACK_ROW_LENGTH,jt.width),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,jt.height),w.pixelStorei(q.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(q.UNPACK_SKIP_ROWS,lt),w.pixelStorei(q.UNPACK_SKIP_IMAGES,ct);const rr=C.isDataArrayTexture||C.isData3DTexture,Rt=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const Vt=ae.get(C),_i=ae.get(K),Lt=ae.get(Vt.__renderTarget),yi=ae.get(_i.__renderTarget);w.bindFramebuffer(q.READ_FRAMEBUFFER,Lt.__webglFramebuffer),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Bi=0;Bi<$e;Bi++)rr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ae.get(C).__webglTexture,ne,ct+Bi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ae.get(K).__webglTexture,Ae,kt+Bi)),q.blitFramebuffer(Je,lt,Be,we,Ze,yt,Be,we,q.DEPTH_BUFFER_BIT,q.NEAREST);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||ae.has(C)){const Vt=ae.get(C),_i=ae.get(K);w.bindFramebuffer(q.READ_FRAMEBUFFER,de),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,Z);for(let Lt=0;Lt<$e;Lt++)rr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Vt.__webglTexture,ne,ct+Lt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Vt.__webglTexture,ne),Rt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,_i.__webglTexture,Ae,kt+Lt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,_i.__webglTexture,Ae),ne!==0?q.blitFramebuffer(Je,lt,Be,we,Ze,yt,Be,we,q.COLOR_BUFFER_BIT,q.NEAREST):Rt?q.copyTexSubImage3D(Oe,Ae,Ze,yt,kt+Lt,Je,lt,Be,we):q.copyTexSubImage2D(Oe,Ae,Ze,yt,Je,lt,Be,we);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(Oe,Ae,Ze,yt,kt,Be,we,$e,Dt,on,jt.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Oe,Ae,Ze,yt,kt,Be,we,$e,Dt,jt.data):q.texSubImage3D(Oe,Ae,Ze,yt,kt,Be,we,$e,Dt,on,jt):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ae,Ze,yt,Be,we,Dt,on,jt.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ae,Ze,yt,jt.width,jt.height,Dt,jt.data):q.texSubImage2D(q.TEXTURE_2D,Ae,Ze,yt,Be,we,Dt,on,jt);w.pixelStorei(q.UNPACK_ROW_LENGTH,Sn),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ht),w.pixelStorei(q.UNPACK_SKIP_PIXELS,Hn),w.pixelStorei(q.UNPACK_SKIP_ROWS,Gn),w.pixelStorei(q.UNPACK_SKIP_IMAGES,pt),Ae===0&&K.generateMipmaps&&q.generateMipmap(Oe),w.unbindTexture()},this.initRenderTarget=function(C){ae.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){H=0,W=0,G=null,w.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const CF=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,my=({dark:n=!1,themeIdx:e=0,scrollVelocity:t=0,scrollProgress:i=0})=>{const o=k.useRef(null),a=k.useRef({scrollVelocity:t,scrollProgress:i,dark:n,themeIdx:e});return k.useEffect(()=>{a.current={scrollVelocity:t,scrollProgress:i,dark:n,themeIdx:e}},[t,i,n,e]),k.useEffect(()=>{const c=o.current;if(!c)return;const u=new bF({alpha:!0,antialias:!1});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(c.clientWidth||window.innerWidth,c.clientHeight||300),u.setClearColor(0,0),c.appendChild(u.domElement);const h=new fD,d=new sg(-1,1,1,-1,.1,10);d.position.z=1;const m=80,v=45,p=m*v,y=new Float32Array(p*3),E=new Float32Array(p*3),M=new Float32Array(p);for(let V=0;V<v;V++)for(let j=0;j<m;j++){const re=(V*m+j)*3,de=j/(m-1)*2-1,Z=V/(v-1)*2-1;y[re]=de,y[re+1]=Z,y[re+2]=0,E[re]=de,E[re+1]=Z,E[re+2]=0,M[V*m+j]=Math.random()*Math.PI*2}const x=new ki;x.setAttribute("position",new Ui(y,3));const S=()=>a.current.dark?16777215:0,R=new uM({color:S(),size:2.5,sizeAttenuation:!1,transparent:!0,opacity:n?.1:.065}),D=new SD(x,R);h.add(D);const A={x:-9999,y:-9999,t:0},N=V=>{const j=c.getBoundingClientRect();A.x=(V.clientX-j.left)/j.width*2-1,A.y=-((V.clientY-j.top)/j.height)*2+1,A.t=performance.now()};window.addEventListener("mousemove",N,{passive:!0});const F=new ResizeObserver(()=>{c&&u.setSize(c.clientWidth,c.clientHeight)});if(F.observe(c),CF)return u.render(h,d),()=>{u.dispose(),x.dispose(),R.dispose(),c.removeChild(u.domElement),F.disconnect(),window.removeEventListener("mousemove",N)};let L=0;const T=performance.now();let I=0;const z=()=>{L=requestAnimationFrame(z);const V=performance.now(),j=(V-T)/1e3,{scrollVelocity:re,scrollProgress:de}=a.current;I=I*.88+re*.12;const Z=Math.min(I*.007,.095),H=de>.88?1-(de-.88)/.12:1,G=(.028*H+Z)*H,ee=(V-A.t)/1e3,se=x.attributes.position;for(let O=0;O<v;O++)for(let Q=0;Q<m;Q++){const Ne=(O*m+Q)*3,Xe=E[Ne],Ve=E[Ne+1],ce=M[O*m+Q],_e=Math.sin(Q*.38+O*.22+j*.45+ce)*G*.7+Math.sin(Q*.15-O*.35+j*.28+ce*.5)*G*.4,me=Xe-A.x,Ie=Ve-A.y,je=Math.sqrt(me*me+Ie*Ie),tt=je<.45&&ee<2.5?(1-je/.45)*(1-ee/2.5)*.07:0,Ot=je<.45&&ee<2.5?Ie/(je+.001)*(1-je/.45)*(1-ee/2.5)*.012:0;se.array[Ne]=Xe+Ot,se.array[Ne+1]=Ve+_e+tt}se.needsUpdate=!0,R.size=Math.max(1.2,2.5+I*.05),R.opacity=n?Math.min(.22,.1+I*.003):Math.min(.16,.065+I*.002),R.color.set(S()),u.render(h,d)};return z(),()=>{cancelAnimationFrame(L),u.dispose(),x.dispose(),R.dispose(),c.contains(u.domElement)&&c.removeChild(u.domElement),F.disconnect(),window.removeEventListener("mousemove",N)}},[n]),P.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full pointer-events-none","aria-hidden":"true"})},gy=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,RF=()=>{const n=Fu(-100),e=Fu(-100),[t,i]=k.useState(!1),[o,a]=k.useState(!1),[c,u]=k.useState(!1),h=Dc(n,{stiffness:120,damping:18,mass:.6}),d=Dc(e,{stiffness:120,damping:18,mass:.6}),m=Dc(n,{stiffness:800,damping:30}),v=Dc(e,{stiffness:800,damping:30});return k.useEffect(()=>{if(gy)return;const p=D=>{n.set(D.clientX),e.set(D.clientY),u(!1)},y=()=>a(!0),E=()=>a(!1),M=()=>u(!0),x=()=>u(!1);document.addEventListener("mousemove",p,{passive:!0}),document.addEventListener("mousedown",y),document.addEventListener("mouseup",E),document.addEventListener("mouseleave",M),document.addEventListener("mouseenter",x);const S="a, button, [role=button], input, select, textarea, label, [data-cursor-hover]",R=D=>{var A;(A=D.target)!=null&&A.closest(S)?i(!0):i(!1)};return document.addEventListener("mouseover",R,{passive:!0}),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mousedown",y),document.removeEventListener("mouseup",E),document.removeEventListener("mouseleave",M),document.removeEventListener("mouseenter",x),document.removeEventListener("mouseover",R)}},[]),gy?null:P.jsxs(P.Fragment,{children:[P.jsx(cl.div,{style:{x:h,y:d,translateX:"-50%",translateY:"-50%",position:"fixed",top:0,left:0,borderRadius:"9999px",border:`${t?1:1.5}px solid var(--foreground)`,pointerEvents:"none",zIndex:9999,opacity:c?0:1,backgroundColor:t?"var(--foreground)":"transparent",mixBlendMode:t?"difference":"normal"},animate:{width:o?18:t?44:28,height:o?18:t?44:28},transition:{type:"spring",stiffness:300,damping:22}}),P.jsx(cl.div,{style:{x:m,y:v,translateX:"-50%",translateY:"-50%",position:"fixed",top:0,left:0,borderRadius:"9999px",pointerEvents:"none",zIndex:9999,opacity:c||t?0:1,width:o?3:5,height:o?3:5,backgroundColor:"var(--accent)"}})]})},PF=({progress:n,accentColor:e})=>P.jsx("div",{className:"fixed top-0 left-0 right-0 z-[9998] h-[2px] pointer-events-none",style:{backgroundColor:"transparent"},children:P.jsx("div",{style:{width:`${n*100}%`,height:"100%",backgroundColor:e||"var(--accent)",transition:"width 0.05s linear",boxShadow:`0 0 8px ${e||"var(--accent)"}66`}})}),$h=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,qa=({children:n,className:e="",as:t="h2",delay:i=0,stagger:o=55,threshold:a=.15,once:c=!0})=>{const u=k.useRef(null),[h,d]=k.useState($h),m=n.split(" ");return k.useEffect(()=>{if($h)return;const v=u.current;if(!v)return;const p=new IntersectionObserver(([y])=>{y.isIntersecting?(d(!0),c&&p.disconnect()):c||d(!1)},{threshold:a});return p.observe(v),()=>p.disconnect()},[c,a]),P.jsx(t,{ref:u,className:`${e} overflow-hidden`,"aria-label":n,children:m.map((v,p)=>P.jsx("span",{className:"inline-block overflow-hidden","aria-hidden":"true",style:{marginRight:"0.28em"},children:P.jsx("span",{style:{display:"inline-block",transform:h?"translateY(0)":"translateY(110%)",opacity:h?1:0,transition:$h?"none":`transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${i+p*o}ms, opacity 600ms ease ${i+p*o}ms`},children:v})},p))})},Wo=[{bg:"#FFFFFF",fg:"#212121",accent:"#0066FF",name:"Professional Blue"},{bg:"#F5F5F5",fg:"#1A1A1A",accent:"#FF3B30",name:"Minimal Crimson"},{bg:"#FAFAFA",fg:"#2C2C2C",accent:"#00A896",name:"Clean Teal"},{bg:"#EAEAEA",fg:"#121212",accent:"#D90429",name:"Nordic Red"},{bg:"#F0F0F0",fg:"#333333",accent:"#7209B7",name:"Deep Indigo"},{bg:"#FFFFFF",fg:"#0A0A0A",accent:"#FFB800",name:"Monochrome Amber"},{bg:"#121212",fg:"#E0E0E0",accent:"#BB86FC",name:"Neon Lavender"},{bg:"#1E1E2E",fg:"#CDD6F4",accent:"#F38BA8",name:"Catppuccin Rose"},{bg:"#0F0F1B",fg:"#F0F0F0",accent:"#39FF14",name:"Matrix Lime"},{bg:"#1A1A2E",fg:"#EAEAEA",accent:"#E94560",name:"Midnight Rose"},{bg:"#0D1117",fg:"#C9D1D9",accent:"#58A6FF",name:"Github Marine"},{bg:"#181818",fg:"#F5F5F5",accent:"#FFD60A",name:"Contrast Yellow"},{bg:"#FFF8F0",fg:"#432818",accent:"#BB4430",name:"Sienna Warmth"},{bg:"#F4F1DE",fg:"#3D405B",accent:"#81B29A",name:"Desert Sage"},{bg:"#FAF3E0",fg:"#4A4E69",accent:"#C9ADA7",name:"Tuscan Sunset"},{bg:"#F5E6CA",fg:"#2C3639",accent:"#A27B5C",name:"Warm Walnut"},{bg:"#FCF6E3",fg:"#3A3A3A",accent:"#D68C45",name:"Solarized Light"},{bg:"#EDE0D4",fg:"#463F3A",accent:"#BC6C25",name:"Almond Ochre"},{bg:"#F7F9FB",fg:"#1B1F3B",accent:"#4361EE",name:"Ice Blue"},{bg:"#EEF1F5",fg:"#2B2D42",accent:"#8D99AE",name:"Corporate Steel"},{bg:"#F0F4F8",fg:"#03045E",accent:"#0077B6",name:"Oceanic Navy"},{bg:"#E8EEF1",fg:"#14213D",accent:"#FCA311",name:"Slate Gold"},{bg:"#F5F7FA",fg:"#1E293B",accent:"#3B82F6",name:"Clean Office"},{bg:"#FFFFFF",fg:"#1A1A1A",accent:"#FF5A5F",name:"Radical Red"},{bg:"#F9F9F9",fg:"#232323",accent:"#6C5CE7",name:"Modern Purple"},{bg:"#FFFFFF",fg:"#111111",accent:"#00D9FF",name:"Electric Cyan"},{bg:"#F2F2F2",fg:"#212529",accent:"#FF006E",name:"Neon Magenta"},{bg:"#FDFDFD",fg:"#1D1D1D",accent:"#8338EC",name:"Royal Purple"},{bg:"#FDF0F4",fg:"#4A4A4A",accent:"#F8A5C2",name:"Blush Pink"},{bg:"#F0F7F4",fg:"#2F3E46",accent:"#84A98C",name:"Sage Mint"},{bg:"#FBF3F9",fg:"#3A3335",accent:"#B8A1CC",name:"Lilac Mist"},{bg:"#EFF6F5",fg:"#264653",accent:"#2A9D8F",name:"Soft Teal"},{bg:"#0D1B2A",fg:"#E0E1DD",accent:"#00F5D4",name:"Cyber Teal"},{bg:"#0A0E27",fg:"#E6E6FA",accent:"#FF3864",name:"Retro Cyberpunk"},{bg:"#0F0F0F",fg:"#EDEDED",accent:"#00FFAB",name:"Green Terminal"}],DF=f2,On=n=>n.trim().split(`
`).flatMap(e=>e.trim().split(/\s+/).map(t=>t==="#"?1:0)),Wu={"001":[On(`
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
      # # . . . # # .
      . . . . . . . .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
    `),On(`
      . . . # . . . .
      . . . # . . . .
      . . . # . . . .
      # # . # . # # .
      . . . # . . . .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
    `),On(`
      . . . . . . . .
      . . . # . . . .
      . . . # . . . .
      # # # # # # # .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
      . . . . . . . .
    `)],"002":[On(`
      . # # # # # . .
      . # . . . # . .
      . # # # # # . .
      . # . . . . . .
      . # . . . . . .
      . # # # . . . .
      . . . . . . . .
      . . . . . . . .
    `),On(`
      . # # # # # . .
      . # . . . # . .
      . # # # # . . .
      . # . . . . . .
      . # . . . . . .
      . # # # # . . .
      . . . . . . . .
      . . . . . . . .
    `)],"003":[On(`
      . . # # . . . .
      . # # . . . . .
      # # . . . . . .
      # # . . . . . .
      . # # # . . . .
      . . . # # . . .
      . . . . # # . .
      . . . . . # # .
    `),On(`
      . . # # . . . .
      . # # . . . . .
      # # . . . . . .
      # # . # . . . .
      . # # # . . . .
      . . . # # . . .
      . . . . # # . .
      . . . . . # . .
    `)],"005":[On(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # . . . # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `),On(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # # . . # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `),On(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # . . # # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `)],"007":[On(`
      . . # # # . . .
      . # . . . # . .
      # . . # . . # .
      # . . # . . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `),On(`
      . . # # # . . .
      . # . . . # . .
      # . . . # . # .
      # . . . # . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `),On(`
      . . # # # . . .
      . # . . . # . .
      # . # . . . # .
      # . # . . . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `)],"009":[On(`
      # # # # # # # .
      # # . . . # # .
      # . # . # . # .
      # . . # . . # .
      # . . . . . # .
      # # # # # # # .
      . . . . . . . .
      . . . . . . . .
    `),On(`
      # # # # # # # .
      # # . . . # # .
      # . # . # . # .
      # . . # . . # .
      # . . # . . # .
      # # # # # # # .
      . . . . . . . .
      . . . . . . . .
    `)]},LF=()=>P.jsx("svg",{className:"absolute w-0 h-0 overflow-hidden","aria-hidden":"true",children:P.jsx("defs",{children:P.jsxs("filter",{id:"dither",colorInterpolationFilters:"sRGB",children:[P.jsx("feColorMatrix",{type:"saturate",values:"0",result:"gray"}),P.jsxs("feComponentTransfer",{in:"gray",children:[P.jsx("feFuncR",{type:"discrete",tableValues:"0 0.33 0.66 1"}),P.jsx("feFuncG",{type:"discrete",tableValues:"0 0.33 0.66 1"}),P.jsx("feFuncB",{type:"discrete",tableValues:"0 0.33 0.66 1"})]})]})})}),Bo=({sectionId:n="001",externalFrame:e})=>{const t=Wu[n]??Wu["001"],[i,o]=k.useState(0);k.useEffect(()=>{if(e!==void 0)return;const c=setInterval(()=>o(u=>(u+1)%t.length),900);return()=>clearInterval(c)},[t.length,e]);const a=e!==void 0?Math.min(e,t.length-1):i;return P.jsxs("div",{className:"flex flex-col items-center gap-1 opacity-40 hover:opacity-75 transition-opacity duration-500 cursor-default shrink-0","aria-hidden":"true",children:[P.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 3px)",gap:"1px"},children:t[a].map((c,u)=>P.jsx("div",{style:{width:3,height:3,backgroundColor:c?"currentColor":"transparent"}},u))}),P.jsxs("span",{className:"font-pixel text-[8px] tracking-widest text-muted-foreground leading-none",children:["FM/",n]})]})},Gt=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,Zn=({children:n,delay:e=0,className:t="",direction:i="up",distance:o=40})=>{const a=k.useRef(null),[c,u]=k.useState(Gt),h=()=>{if(Gt)return{};switch(i){case"down":return{opacity:0,transform:`translateY(-${o}px)`};case"left":return{opacity:0,transform:`translateX(${o}px)`};case"right":return{opacity:0,transform:`translateX(-${o}px)`};default:return{opacity:0,transform:`translateY(${o}px)`}}};k.useEffect(()=>{if(Gt)return;const m=a.current;if(!m)return;if(m.getBoundingClientRect().top<window.innerHeight*.98){u(!0);return}const p=new IntersectionObserver(([y])=>{y.isIntersecting&&(u(!0),p.disconnect())},{threshold:.04,rootMargin:"0px 0px -8px 0px"});return p.observe(m),()=>p.disconnect()},[]);const d=h();return P.jsx("div",{ref:a,style:{opacity:Gt||c?1:d.opacity,transform:Gt||c?"none":d.transform,transition:Gt?"none":`opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${e}ms,
             transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${e}ms`,willChange:c?"auto":"opacity, transform"},className:t,children:n})},gm={"FIELD-NOTE/001":{label:"FIELD NOTE / 001",n:1},"RECORDS/002":{label:"RECORDS / 002",n:2},BUILT:{label:"BUILT / 003",n:3},LAB:{label:"LAB / 005",n:5},"FIELD-HISTORY":{label:"FIELD HISTORY / 007",n:7},CONTACT:{label:"CONTACT / 009",n:9}},NF=Object.keys(gm),IF=24,FF=({active:n,themeIdx:e,setThemeIdx:t})=>{const i=gm[n]??gm["FIELD-NOTE/001"];return P.jsxs("aside",{className:"fixed bottom-4 right-4 z-50 hidden md:flex items-end gap-2 pointer-events-none select-none",children:[P.jsx("div",{className:"relative mb-1 pointer-events-none opacity-85",children:P.jsxs("svg",{width:"150",height:"55",viewBox:"0 0 150 55",fill:"none",className:"text-accent",children:[P.jsxs("g",{transform:"rotate(-6 45 20)",children:[P.jsx("text",{x:"5",y:"16",fill:"currentColor",className:"font-doodle text-[12px] font-bold tracking-wide",children:"click this to"}),P.jsx("text",{x:"5",y:"28",fill:"currentColor",className:"font-doodle text-[12px] font-bold tracking-wide",children:"change color!"})]}),P.jsx("path",{d:"M 75,10 C 85,12 90,8 95,12 C 100,16 95,25 90,26 C 85,27 82,18 90,15 C 105,12 118,22 135,32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),P.jsx("path",{d:"M 135,32 L 126,27 M 135,32 L 130,41 M 134,31 L 128,34",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),P.jsxs("div",{className:"pointer-events-auto bg-background/90 backdrop-blur border border-border px-3 py-2.5 flex flex-col items-end gap-0.5 font-pixel text-[9px] tracking-widest uppercase shadow-md rounded-md",children:[P.jsx("span",{className:"text-muted-foreground/60",children:"LEDGER"}),P.jsx(_p,{mode:"wait",children:P.jsx(cl.span,{initial:{y:-5,opacity:0},animate:{y:0,opacity:.8},exit:{y:5,opacity:0},transition:{duration:.2,ease:[.25,0,0,1]},className:"text-foreground font-bold",children:i.label},i.label)}),P.jsxs("span",{className:"text-muted-foreground",children:[P.jsx(_p,{mode:"wait",children:P.jsx(cl.span,{initial:{y:-5,opacity:0},animate:{y:0,opacity:1},exit:{y:5,opacity:0},transition:{duration:.2,ease:[.25,0,0,1]},className:"inline-block tabular-nums",children:i.n},i.n)}),` OF ${IF} ENTRIES`]}),P.jsx("span",{className:"text-muted-foreground/50 text-[8px] mb-2",children:"LAST UPDATED — AUG 2026"}),P.jsxs("button",{onClick:()=>t(o=>(o+1)%Wo.length),className:"w-full text-center border border-dashed border-accent hover:bg-accent hover:text-primary-foreground py-1.5 px-3 text-[9px] font-pixel text-accent transition-all duration-200 cursor-pointer rounded-sm bg-accent/5",title:"Cycle display theme",children:["DISPLAY — ",Wo[e].name.toUpperCase()]})]})]})},vy=({id:n,label:e,onClick:t})=>P.jsxs("button",{onClick:()=>t(n),className:"inline-flex items-center gap-1 border-b border-dashed border-muted-foreground/50 hover:border-accent hover:text-accent font-pixel text-[10px] transition-colors",children:[e," ",P.jsx(wu,{className:"w-2.5 h-2.5"})]}),lu=({from:n,to:e})=>P.jsxs("div",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground/50 border-t border-border pt-3 flex items-center gap-2 uppercase",children:[P.jsx("span",{children:n}),P.jsx(wu,{className:"w-2.5 h-2.5 opacity-40"}),P.jsx("span",{className:"text-foreground/60",children:e})]}),qh=d2;function UF(){var Z;const[n,e]=k.useState(null),[t,i]=k.useState("FIELD-NOTE/001"),[o,a]=k.useState(0),[c,u]=k.useState(0),[h,d]=k.useState({x:0,y:0}),[m,v]=k.useState(!1),p=k.useRef(null),[y,E]=k.useState(0),M=k.useRef(0),{scrollY:x,totalProgress:S,velocity:R,sectionProgress:D}=p2(),A=k.useCallback(H=>{var W;e(H),(W=document.getElementById(H))==null||W.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>e(null),2400)},[]);k.useEffect(()=>{const H=[];return NF.forEach(W=>{const G=document.getElementById(W);if(!G)return;const ee=new IntersectionObserver(([se])=>{se.isIntersecting&&i(W)},{threshold:.2});ee.observe(G),H.push(ee)}),()=>H.forEach(W=>W.disconnect())},[]);const N=k.useCallback(H=>{if(Gt||!p.current)return;const W=p.current.getBoundingClientRect();d({x:(H.clientX-W.left-W.width/2)/W.width*6,y:(H.clientY-W.top-W.height/2)/W.height*6})},[]);k.useEffect(()=>{if(Gt)return;const H=Math.min(R*.018,1.2)*(x>(M.current||0)?-1:1);M.current=x,E(W=>W*.7+H*.3)},[R,x]);const F=H=>{u(H),Gt||(v(!0),setTimeout(()=>v(!1),380))},L=qh&&qh[c]||{id:"",name:"",type:"",year:"",status:"",img:"",github:"",live:"",challenge:"",solution:"",stack:[],origins:[]},T=Wo[o],I=((Z=p.current)==null?void 0:Z.offsetHeight)??600,z=Math.min(1,x/(I*.6)),V=H=>{const W=Wu[H]??Wu["001"];return Math.floor(S*(W.length*3))%W.length},j=D("FIELD-HISTORY"),re=Math.min(1,Math.max(0,(S-.82)/.18)),de=D("RECORDS/002");return P.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background",style:{cursor:"none"},children:[P.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-doodle {
          font-family: 'Caveat', cursive;
        }
        * { cursor: none !important; }
        :root {
          --background: ${T.bg} !important;
          --foreground: ${T.fg} !important;
          --accent: ${T.accent} !important;
          --primary: ${T.fg} !important;
          --primary-foreground: ${T.bg} !important;
          --border: ${T.fg}24 !important;
          --muted-foreground: ${T.fg}80 !important;
          --muted: ${T.fg}0a !important;
        }
        .dark {
          --background: ${T.fg} !important;
          --foreground: ${T.bg} !important;
          --accent: ${T.accent} !important;
          --primary: ${T.bg} !important;
          --primary-foreground: ${T.fg} !important;
          --border: ${T.bg}24 !important;
          --muted-foreground: ${T.bg}80 !important;
          --muted: ${T.bg}0a !important;
        }
        /* Film grain overlay */
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10%       { transform: translate(-2%, -3%); }
          20%       { transform: translate(3%, 2%); }
          30%       { transform: translate(-1%, 4%); }
          40%       { transform: translate(4%, -1%); }
          50%       { transform: translate(-3%, 1%); }
          60%       { transform: translate(2%, -4%); }
          70%       { transform: translate(-4%, 2%); }
          80%       { transform: translate(1%, -2%); }
          90%       { transform: translate(-2%, 3%); }
        }
        .grain-overlay::before {
          content: '';
          position: fixed;
          inset: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          z-index: 9990;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          animation: grain 0.18s steps(1) infinite;
        }
      `}),P.jsx(LF,{}),P.jsx(RF,{}),P.jsx(PF,{progress:S,accentColor:T.accent}),P.jsx("div",{className:"grain-overlay fixed inset-0 pointer-events-none z-[9989]","aria-hidden":"true"}),P.jsx(FF,{active:t,themeIdx:o,setThemeIdx:a}),P.jsxs("main",{className:"flex flex-col w-full overflow-x-hidden",children:[P.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 pt-16 md:pt-20",children:P.jsx(Zn,{children:P.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4",children:[P.jsxs("div",{className:"flex items-center gap-4",children:[P.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-6 w-auto"}),P.jsx("span",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground uppercase hidden sm:inline-block",children:"[ QUICK VIEW ] — ROLE · STACK · BEST PROJECTS · RÉSUMÉ · CONTACT"})]}),P.jsxs("a",{href:"/resume.pdf",download:"Resume.pdf",className:"flex items-center gap-1.5 font-pixel text-[9px] text-muted-foreground hover:text-accent transition-colors uppercase whitespace-nowrap",children:[P.jsx(xw,{className:"w-3 h-3"})," RÉSUMÉ PDF"]})]})})}),P.jsx("section",{className:"w-full bg-background text-foreground py-8 md:py-16",children:P.jsxs("div",{ref:p,id:"FIELD-NOTE/001",className:`max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-start transition-all duration-500 ${n==="FIELD-NOTE/001"?"outline outline-2 outline-accent outline-offset-8":""}`,onMouseMove:N,onMouseLeave:()=>d({x:0,y:0}),children:[P.jsxs("div",{className:"flex flex-col gap-8",children:[P.jsx(Zn,{children:P.jsx(Bo,{sectionId:"001",externalFrame:V("001")})}),P.jsxs("div",{className:"flex flex-col gap-4",children:[P.jsx(Zn,{delay:60,children:P.jsx("div",{className:"inline-flex items-center bg-accent text-primary-foreground font-pixel text-[9px] tracking-widest px-2 py-0.5 uppercase rounded-sm font-bold shadow-sm",children:"[ FIELD NOTE / 001 ]"})}),P.jsx("div",{style:{opacity:1,transform:"none",transition:"none"},children:P.jsx(qa,{as:"h1",delay:140,stagger:80,className:"text-8xl md:text-[10rem] font-black tracking-tighter leading-none -ml-1 text-foreground",children:"TAN."})}),P.jsx(Zn,{delay:220,children:P.jsx("h2",{className:"text-xl md:text-2xl text-foreground font-bold tracking-tight uppercase mt-2",children:"Software Engineer & Game Developer"})}),P.jsx(Zn,{delay:240,children:P.jsx("p",{className:"text-base md:text-lg leading-relaxed text-foreground/80 max-w-md mt-2 font-medium",children:"I build high-performance digital products, scalable systems, and data-driven experiments to solve complex real-world problems."})})]}),P.jsx(Zn,{delay:300,children:P.jsx("div",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground pt-5 border-t border-border",children:"PHILIPPINES — 2026 — SOFTWARE / WEB / SYSTEMS"})})]}),P.jsx(Zn,{delay:100,children:P.jsxs("div",{className:"relative group cursor-crosshair",children:[P.jsxs("div",{style:{transform:`translate(${h.x}px, ${h.y}px)`,transition:Gt?"none":"transform 0.12s ease-out"},className:"relative",children:[P.jsx("div",{className:"absolute translate-x-3 translate-y-3 inset-0 bg-muted -z-10"}),P.jsx("img",{src:"/profile.png",alt:"SUBJECT: TAN — field photograph",style:{filter:Gt?void 0:z>.15?`url(#dither) contrast(${1+z*.25}) brightness(${1-z*.12})`:void 0,transition:"filter 0.3s ease-out"},className:"w-full grayscale contrast-110 object-cover aspect-[4/5] group-hover:[filter:url(#dither)] transition-all duration-500"})]}),P.jsx("div",{className:"absolute inset-0 border border-foreground/15 pointer-events-none",style:{transform:`translate(${-h.x*.45}px, ${-h.y*.45}px)`,transition:Gt?"none":"transform 0.18s ease-out"}}),P.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex justify-between items-end",children:[P.jsxs("div",{className:"font-pixel text-[8px] tracking-widest flex flex-col gap-0.5 text-foreground bg-background/85 px-2 py-1",children:[P.jsx("span",{className:"opacity-55",children:"PORTRAIT / 01"}),P.jsx("span",{className:"opacity-55",children:"SUBJECT: TAN"}),P.jsx("span",{className:"opacity-40",children:"FIELD: SOFTWARE DEV"})]}),P.jsxs("button",{className:"flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 font-pixel text-[8px] uppercase hover:bg-accent transition-colors",children:[P.jsx(ww,{className:"w-2.5 h-2.5"})," PLAY FIELD NOTE"]})]})]})})]})}),P.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 pb-10",children:P.jsx(lu,{from:"FIELD NOTE / 001",to:"RECORDS / 002"})}),P.jsx("section",{className:"w-full dark bg-background text-foreground py-16 md:py-24",children:P.jsxs("div",{id:"RECORDS/002",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10",children:[P.jsxs("div",{className:"flex items-center gap-4",children:[P.jsx(Bo,{sectionId:"002",externalFrame:V("002")}),P.jsx(qa,{as:"h2",delay:0,stagger:60,className:"text-5xl md:text-6xl font-pixel tracking-widest uppercase",children:"RECORDS"})]}),P.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-8",children:h2.map((H,W)=>{const ee=Math.min(1,Math.max(0,(de-W*.15)/(1-W*.15))),se=Gt?0:(1-ee)*4;return P.jsx(Zn,{delay:W*70,children:P.jsxs(i2,{children:[P.jsx(r2,{asChild:!0,children:P.jsxs("div",{className:"flex flex-col gap-3 group cursor-pointer",style:{transform:`perspective(800px) rotateX(${se}deg)`,transition:Gt?"none":"transform 0.1s ease-out",transformOrigin:"top center"},children:[P.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground",children:["[",H.n,"]"]}),P.jsx("div",{className:"relative aspect-video border border-border bg-muted overflow-hidden",children:P.jsx("img",{src:H.img||`https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${H.sig}`,alt:H.name,className:"w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:[filter:url(#dither)] transition-all duration-500"})}),P.jsxs("div",{children:[P.jsx("div",{className:"font-medium text-sm leading-snug group-hover:text-accent transition-colors",children:H.name}),P.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground mt-0.5",children:["ISSUED BY — ",H.issuer]}),P.jsxs("div",{className:"flex items-center gap-2 font-pixel text-[9px] mt-1",children:[P.jsx("span",{children:H.year}),P.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold",children:"VERIFIED"})]})]})]})}),P.jsxs(s2,{children:[P.jsx(o2,{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-50"}),P.jsxs(a2,{className:"fixed left-[50%] top-[50%] z-50 grid w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-border bg-background p-6 shadow-xl",children:[P.jsx("div",{className:"relative aspect-video border border-border bg-muted overflow-hidden",children:P.jsx("img",{src:H.img||`https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${H.sig}`,alt:H.name,className:"w-full h-full object-cover grayscale"})}),P.jsxs("div",{className:"flex flex-col gap-2",children:[P.jsx(l2,{className:"text-lg font-medium tracking-tight",children:H.name}),P.jsx(c2,{className:"text-sm text-foreground/75 leading-relaxed",children:H.desc}),P.jsxs("div",{className:"flex items-center gap-4 mt-2 font-pixel text-[9px] text-muted-foreground",children:[P.jsxs("span",{children:["ISSUER: ",H.issuer]}),P.jsxs("span",{children:["YEAR: ",H.year]}),P.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold",children:"STATUS: VERIFIED"})]})]}),P.jsxs(u2,{className:"absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity",children:[P.jsx(bw,{className:"h-4 w-4"}),P.jsx("span",{className:"sr-only",children:"Close"})]})]})]})]})},H.n)})})]})}),P.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:P.jsx(lu,{from:"ARCHIVE ENTRY / 003",to:"BUILT"})}),P.jsx("section",{className:"w-full bg-background text-foreground py-16 md:py-24",children:P.jsxs("div",{id:"BUILT",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10 relative",children:[P.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:P.jsx(my,{themeIdx:o,scrollVelocity:R,scrollProgress:S})}),P.jsxs("div",{className:"relative flex flex-row-reverse items-start gap-4 text-right border-b border-border pb-8 mb-8",children:[P.jsx(Bo,{sectionId:"003",externalFrame:V("003")}),P.jsxs("div",{className:"flex-1",children:[P.jsx(qa,{as:"h2",delay:0,stagger:55,className:"text-5xl md:text-6xl font-medium tracking-tight",children:"BUILT / SELECTED WORK"}),P.jsx(Zn,{delay:280,children:P.jsx("p",{className:"text-muted-foreground text-sm mt-1",children:'"Things that started as problems, ideas, or experiments and became software."'})})]})]}),P.jsxs("div",{className:"relative grid md:grid-cols-[160px_1fr] gap-8 border-t border-border pt-8",children:[P.jsxs("div",{className:"flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0",children:[P.jsx("div",{className:"font-pixel text-[8px] text-muted-foreground mb-2 hidden md:block tracking-widest",children:"INDEX"}),qh.map((H,W)=>P.jsx(Zn,{delay:W*50,children:P.jsxs("button",{onClick:()=>F(W),className:`font-pixel text-[11px] whitespace-nowrap text-left py-0.5 w-full flex items-center gap-2 hover:text-foreground transition-colors ${W===c?"text-foreground":"text-muted-foreground"}`,children:[String(W+1).padStart(2,"0")," ",H.name,W===c&&P.jsx("span",{className:"text-accent text-[8px]",children:"← selected"})]})},H.id))]}),P.jsx(_p,{mode:"wait",children:P.jsxs(cl.div,{id:L.id,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.28,ease:[.25,0,0,1]},className:`flex flex-col gap-7 transition-all duration-300 ${n===L.id?"outline outline-2 outline-accent outline-offset-4":""}`,children:[L.github?P.jsxs("a",{href:L.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4 hover:text-foreground transition-colors",children:[P.jsx(Gd,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:L.github.replace(/^https?:\/\/(www\.)?github\.com\//,"").replace(/\/$/,"")}),P.jsx("span",{className:"border border-border rounded-full px-2 py-0.5 text-[8px]",children:"Public"})]}):P.jsxs("div",{className:"flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4",children:[P.jsx(Gd,{className:"w-3.5 h-3.5"}),P.jsxs("span",{children:["mrtnztan / ",L.name.toLowerCase().replace(/\s+/g,"-")]}),P.jsx("span",{className:"border border-border rounded-full px-2 py-0.5 text-[8px]",children:"Public"})]}),P.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[P.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-6",children:[P.jsxs("div",{className:"border border-border rounded-md overflow-hidden bg-background",children:[P.jsxs("div",{className:"bg-muted/30 border-b border-border px-4 py-2.5 flex items-center gap-2 font-pixel text-[9px] text-muted-foreground",children:[P.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500/80"}),P.jsx("span",{className:"w-2 h-2 rounded-full bg-yellow-500/80"}),P.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500/80"}),P.jsxs("span",{className:"ml-2 font-mono text-[10px] lowercase",children:[L.name.replace(/\s+/g,"-"),".png"]})]}),P.jsx("div",{className:"relative aspect-video bg-muted overflow-hidden group cursor-crosshair",children:P.jsx("img",{src:L.img,alt:L.name,className:`w-full h-full object-cover grayscale opacity-90 transition-all duration-500 ${m?"[filter:url(#dither)]":"group-hover:[filter:url(#dither)]"}`})})]}),P.jsxs("div",{className:"border border-border rounded-md bg-background",children:[P.jsx("div",{className:"bg-muted/30 border-b border-border px-4 py-2.5",children:P.jsx("span",{className:"font-pixel text-[9px] font-medium uppercase tracking-widest text-foreground",children:"README.md"})}),P.jsxs("div",{className:"p-6 md:p-8",children:[P.jsx("h1",{className:"text-2xl font-medium mb-4 pb-2 border-b border-border",children:L.name}),P.jsxs("p",{className:"text-muted-foreground text-sm leading-relaxed mb-6",children:[L.type," built in ",L.year,"."]}),L.challenge&&P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{children:[P.jsx("h2",{className:"text-sm font-medium mb-2",children:"Challenge"}),P.jsx("p",{className:"text-sm text-foreground/80 leading-relaxed",children:L.challenge})]}),L.solution&&P.jsxs("div",{children:[P.jsx("h2",{className:"text-sm font-medium mb-2",children:"Solution"}),P.jsx("p",{className:"text-sm text-foreground/80 leading-relaxed",children:L.solution})]})]})]})]})]}),P.jsxs("div",{className:"w-full lg:w-[250px] shrink-0 flex flex-col gap-6",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"font-medium text-sm mb-3",children:"About"}),P.jsxs("p",{className:"text-sm text-muted-foreground mb-4",children:[L.type," — ",L.year]}),P.jsx("div",{className:"flex items-center gap-2 font-pixel text-[9px] mb-6",children:P.jsxs("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold shadow-sm",children:["STATUS: ",L.status]})}),P.jsxs("div",{className:"flex flex-col gap-2",children:[L.github&&P.jsxs("a",{href:L.github,target:"_blank",rel:"noopener noreferrer",className:"font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md",children:[P.jsx("span",{children:"[ SOURCE ]"})," ",P.jsx(wu,{className:"w-3 h-3"})]}),L.live&&P.jsxs("a",{href:L.live,target:"_blank",rel:"noopener noreferrer",className:"font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md",children:[P.jsx("span",{children:"[ LIVE ]"})," ",P.jsx(wu,{className:"w-3 h-3"})]})]})]}),L.stack&&L.stack.length>0&&P.jsxs("div",{className:"border-t border-border pt-6",children:[P.jsx("h3",{className:"font-medium text-sm mb-4",children:"Role & Stack"}),P.jsx("ul",{className:"space-y-3 text-sm text-foreground/80",children:L.stack.map((H,W)=>P.jsxs("li",{className:"flex items-center gap-2",children:[P.jsx("span",{className:`w-2 h-2 rounded-full ${H.color||"bg-accent"}`}),H.name]},W))})]}),L.origins&&L.origins.length>0&&P.jsxs("div",{className:"border-t border-border pt-6",children:[P.jsx("h3",{className:"font-medium text-sm mb-4",children:"Origins"}),P.jsx("div",{className:"flex flex-col gap-2 items-start",children:L.origins.map(H=>P.jsx(vy,{id:H.id,label:H.label,onClick:A},H.id))})]})]})]})]},c)})]})]})}),P.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:P.jsx(lu,{from:"RECORD / 004",to:"LAB"})}),P.jsx("section",{className:"w-full dark bg-background text-foreground py-16 md:py-24",children:P.jsxs("div",{id:"LAB",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10",children:[P.jsxs("div",{className:"flex items-start gap-4",children:[P.jsx(Bo,{sectionId:"005",externalFrame:V("005")}),P.jsxs("div",{children:[P.jsx(qa,{as:"h2",delay:0,stagger:65,className:"text-4xl md:text-5xl font-mono font-medium tracking-tight uppercase",children:"LAB / EXPERIMENTS"}),P.jsx(Zn,{delay:320,children:P.jsx("p",{className:"font-mono text-sm opacity-70 mt-1",children:'"Not everything here is finished."'})})]})]}),P.jsx("div",{className:"grid gap-4",children:[{id:"LAB/001",num:"001",name:"ANTI-SMOKE BELCHING DETECTION",cat:"COMPUTER VISION / IOT",status:"RESEARCHING",accent:!0,note:"Can low-cost edge AI flag high-emission vehicles on local roads in real-time?",label:"Hypothesis"},{id:"LAB/003",num:"003",name:"LOCAL FIRST SCHEDULING",cat:"CRDTs / OFFLINE ARCHITECTURE",status:"PROTOTYPING",accent:!1,note:"Exploring CRDT implementations for calendar events. Led directly to the architecture in BUILT / 001.",label:"Concept"}].map((H,W)=>P.jsx(Zn,{delay:W*80,children:P.jsxs("div",{id:H.id,className:`border border-border p-6 hover:bg-muted/20 transition-all duration-300 group ${n===H.id?"border-accent bg-muted/30":""}`,children:[P.jsxs("div",{className:"flex justify-between items-start mb-4",children:[P.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground",children:["LAB / ",H.num]}),P.jsxs("div",{className:`font-pixel text-[8px] px-2 py-0.5 border border-dashed ${H.accent?"border-accent bg-accent/5 text-accent font-bold":"text-foreground/70 border-border"}`,children:["STATUS: ",H.status]})]}),P.jsx("h3",{className:"text-lg font-medium mb-1 group-hover:underline decoration-1 underline-offset-4",children:H.name}),P.jsx("p",{className:"font-pixel text-[9px] text-muted-foreground mb-4",children:H.cat}),P.jsxs("div",{className:"text-sm border-t border-border pt-4 text-foreground/75",children:[P.jsxs("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mr-2",children:[H.label," —"]}),H.note]})]})},H.id))}),P.jsx(Zn,{delay:150,children:P.jsxs("div",{className:"border border-dashed border-border p-6",children:[P.jsx("div",{className:"font-pixel text-[8px] text-muted-foreground mb-5 tracking-widest",children:"EXPERIMENT LOG"}),P.jsx("div",{className:"font-pixel text-[9px] text-foreground/70 mb-3",children:"EXPERIMENT / 014"}),P.jsxs("div",{className:"grid gap-y-1.5 text-sm",style:{gridTemplateColumns:"88px 1fr"},children:[P.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]",children:"QUESTION —"}),P.jsx("span",{className:"text-foreground/75",children:"Can this model detect X reliably at night?"}),P.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]",children:"RESULT —"}),P.jsx("span",{children:"Promising, ~80% on the test set."}),P.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]",children:"NEXT —"}),P.jsx("span",{className:"text-foreground/75",children:"Try against low-light footage."})]})]})})]})}),P.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:P.jsx(lu,{from:"RECORD / 006",to:"FIELD HISTORY"})}),P.jsx("section",{className:"w-full bg-background text-foreground py-16 md:py-24",children:P.jsxs("div",{id:"FIELD-HISTORY",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-10",children:[P.jsxs("div",{className:"flex flex-col items-center gap-4",children:[P.jsx(Bo,{sectionId:"007",externalFrame:V("007")}),P.jsx(qa,{as:"h2",delay:0,stagger:70,className:"text-5xl md:text-6xl font-medium tracking-tight uppercase",children:"FIELD HISTORY"})]}),P.jsxs("div",{className:"relative w-full",children:[P.jsx("div",{"aria-hidden":"true",style:{position:"absolute",left:"50%",top:0,width:1,height:"100%",backgroundColor:"currentColor",opacity:.12,transformOrigin:"top center",transform:Gt?"scaleY(1)":`scaleY(${Math.min(1,j*1.6)})`,transition:Gt?"none":"transform 0.05s linear",pointerEvents:"none"}}),P.jsx("div",{className:"grid md:grid-cols-3 gap-6 w-full text-left",children:DF.map((H,W)=>P.jsx(Zn,{delay:W*80,children:P.jsxs("div",{id:H.id,className:`border border-border p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:bg-muted/10 ${n===H.id?"border-accent bg-muted/20":""}`,children:[P.jsxs("div",{className:"font-pixel text-[10px] tracking-widest text-muted-foreground flex justify-between items-center",children:[P.jsx("span",{children:H.year}),P.jsxs("span",{className:"opacity-50",children:["[",H.id.split("/").pop(),"]"]})]}),P.jsxs("div",{children:[P.jsx("h3",{className:"text-sm font-medium uppercase tracking-wide mb-1",children:H.role}),P.jsxs("div",{className:"font-pixel text-[8px] text-muted-foreground mb-3 border-b border-border/50 pb-3 flex items-center gap-2 flex-wrap",children:[P.jsx("span",{children:H.comp}),P.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent px-1.5 py-0.5 rounded-sm font-bold",children:H.type})]}),P.jsx("p",{className:"text-xs leading-relaxed text-foreground/80",children:H.desc})]}),H.refs.length>0&&P.jsxs("div",{className:"mt-auto pt-4 flex items-center gap-2 flex-wrap",children:[P.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground",children:"SEE ALSO —"}),H.refs.map(G=>P.jsx(vy,{id:G.id,label:G.label,onClick:A},G.id))]})]})},H.year))})]})]})})]}),P.jsxs("section",{id:"CONTACT",className:"bg-primary text-primary-foreground relative overflow-hidden mt-28",children:[P.jsx("div",{className:"absolute inset-0",children:P.jsx(my,{dark:!0,themeIdx:o,scrollVelocity:R,scrollProgress:S})}),P.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-28 md:py-40 flex flex-col items-start gap-10",children:[P.jsx(Bo,{sectionId:"009",externalFrame:V("009")}),P.jsxs("div",{children:[P.jsx("div",{className:"font-pixel text-[9px] tracking-widest mb-3",style:{opacity:Gt?.4:Math.max(.08,re*.5),transform:Gt?"none":`translateY(${(1-re)*24}px)`,transition:Gt?"none":"opacity 0.06s, transform 0.06s"},children:"CONTACT / 009"}),P.jsxs("div",{className:"text-3xl md:text-6xl font-black tracking-tight leading-none mb-4 overflow-hidden",style:{transform:Gt?"none":`translateY(${(1-Math.min(1,re*1.4))*60}px)`,opacity:Gt?1:Math.min(1,re*2),transition:Gt?"none":"transform 0.08s cubic-bezier(0.16,1,0.3,1), opacity 0.07s ease"},children:["START A NEW",P.jsx("br",{}),"FIELD NOTE."]}),P.jsx("p",{className:"text-sm",style:{opacity:Gt?.55:Math.max(0,(re-.45)*1.2),transform:Gt?"none":`translateY(${(1-Math.min(1,Math.max(0,(re-.45)/.55)))*20}px)`,transition:Gt?"none":"opacity 0.06s, transform 0.06s"},children:'"Have a problem worth exploring?"'})]}),P.jsxs("div",{className:"flex gap-6 mt-4",children:[P.jsx("a",{href:"mailto:cmkbuena@gmail.com",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300",children:P.jsx(Mw,{className:"w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"})}),P.jsx("a",{href:"https://github.com/ChristianBuena",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300",children:P.jsx(Gd,{className:"w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"})}),P.jsx("a",{href:"https://www.linkedin.com/in/mrtnztan/",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300",children:P.jsx(Sw,{className:"w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"})})]})]})]}),P.jsxs("footer",{className:"max-w-6xl mx-auto px-4 md:px-8 py-8 font-pixel text-[8px] text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border",children:[P.jsxs("div",{className:"flex items-center gap-3 tracking-widest uppercase",children:[P.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"}),P.jsx("span",{children:"TAN / FIELD NOTES — SOFTWARE DEVELOPER — PHILIPPINES — 2026"})]}),P.jsx("nav",{className:"flex gap-4 uppercase tracking-widest",children:[["BUILT","#BUILT"],["LAB","#LAB"],["FIELD HISTORY","#FIELD-HISTORY"],["RECORDS","#RECORDS/002"]].map(([H,W])=>P.jsx("a",{href:W,className:"hover:text-foreground transition-colors",children:H},H))}),P.jsxs("div",{className:"flex items-center gap-4",children:[P.jsxs("button",{onClick:()=>a(H=>(H+1)%Wo.length),className:"font-pixel text-[8px] tracking-widest border border-dashed px-2 py-0.5 transition-colors uppercase border-border/60 hover:border-foreground/50 text-foreground",title:"Cycle display theme",children:["DISPLAY — ",Wo[o].name.toUpperCase()," (",o+1,"/",Wo.length,")"]}),P.jsx("span",{className:"tracking-widest",children:"© 2026 TAN"})]})]})]})}cw.createRoot(document.getElementById("root")).render(P.jsx(UF,{}));
