function WT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function cy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Pd={exports:{}},Va={},Dd={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function XT(){if(Ev)return mt;Ev=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(k,J,Fe){this.props=k,this.context=J,this.refs=M,this.updater=Fe||_}y.prototype.isReactComponent={},y.prototype.setState=function(k,J){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,J,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(k,J,Fe){this.props=k,this.context=J,this.refs=M,this.updater=Fe||_}var L=R.prototype=new S;L.constructor=R,E(L,y.prototype),L.isPureReactComponent=!0;var A=Array.isArray,P=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(k,J,Fe){var Xe,Ve={},ce=null,xe=null;if(J!=null)for(Xe in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(ce=""+J.key),J)P.call(J,Xe)&&!F.hasOwnProperty(Xe)&&(Ve[Xe]=J[Xe]);var me=arguments.length-2;if(me===1)Ve.children=Fe;else if(1<me){for(var Ue=Array(me),et=0;et<me;et++)Ue[et]=arguments[et+2];Ve.children=Ue}if(k&&k.defaultProps)for(Xe in me=k.defaultProps,me)Ve[Xe]===void 0&&(Ve[Xe]=me[Xe]);return{$$typeof:n,type:k,key:ce,ref:xe,props:Ve,_owner:I.current}}function N(k,J){return{$$typeof:n,type:k.type,key:J,ref:k.ref,props:k.props,_owner:k._owner}}function O(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function V(k){var J={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Fe){return J[Fe]})}var j=/\/+/g;function H(k,J){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):J.toString(36)}function ee(k,J,Fe,Xe,Ve){var ce=typeof k;(ce==="undefined"||ce==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(ce){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case n:case e:xe=!0}}if(xe)return xe=k,Ve=Ve(xe),k=Xe===""?"."+H(xe,0):Xe,A(Ve)?(Fe="",k!=null&&(Fe=k.replace(j,"$&/")+"/"),ee(Ve,J,Fe,"",function(et){return et})):Ve!=null&&(O(Ve)&&(Ve=N(Ve,Fe+(!Ve.key||xe&&xe.key===Ve.key?"":(""+Ve.key).replace(j,"$&/")+"/")+k)),J.push(Ve)),1;if(xe=0,Xe=Xe===""?".":Xe+":",A(k))for(var me=0;me<k.length;me++){ce=k[me];var Ue=Xe+H(ce,me);xe+=ee(ce,J,Fe,Ue,Ve)}else if(Ue=m(k),typeof Ue=="function")for(k=Ue.call(k),me=0;!(ce=k.next()).done;)ce=ce.value,Ue=Xe+H(ce,me++),xe+=ee(ce,J,Fe,Ue,Ve);else if(ce==="object")throw J=String(k),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function K(k,J,Fe){if(k==null)return k;var Xe=[],Ve=0;return ee(k,Xe,"","",function(ce){return J.call(Fe,ce,Ve++)}),Xe}function ue(k){if(k._status===-1){var J=k._result;J=J(),J.then(function(Fe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Fe)},function(Fe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Fe)}),k._status===-1&&(k._status=0,k._result=J)}if(k._status===1)return k._result.default;throw k._result}var Z={current:null},W={transition:null},ne={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:W,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:K,forEach:function(k,J,Fe){K(k,function(){J.apply(this,arguments)},Fe)},count:function(k){var J=0;return K(k,function(){J++}),J},toArray:function(k){return K(k,function(J){return J})||[]},only:function(k){if(!O(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},mt.Component=y,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=R,mt.StrictMode=i,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,mt.act=oe,mt.cloneElement=function(k,J,Fe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Xe=E({},k.props),Ve=k.key,ce=k.ref,xe=k._owner;if(J!=null){if(J.ref!==void 0&&(ce=J.ref,xe=I.current),J.key!==void 0&&(Ve=""+J.key),k.type&&k.type.defaultProps)var me=k.type.defaultProps;for(Ue in J)P.call(J,Ue)&&!F.hasOwnProperty(Ue)&&(Xe[Ue]=J[Ue]===void 0&&me!==void 0?me[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)Xe.children=Fe;else if(1<Ue){me=Array(Ue);for(var et=0;et<Ue;et++)me[et]=arguments[et+2];Xe.children=me}return{$$typeof:n,type:k.type,key:Ve,ref:ce,props:Xe,_owner:xe}},mt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},mt.createElement=T,mt.createFactory=function(k){var J=T.bind(null,k);return J.type=k,J},mt.createRef=function(){return{current:null}},mt.forwardRef=function(k){return{$$typeof:u,render:k}},mt.isValidElement=O,mt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:ue}},mt.memo=function(k,J){return{$$typeof:h,type:k,compare:J===void 0?null:J}},mt.startTransition=function(k){var J=W.transition;W.transition={};try{k()}finally{W.transition=J}},mt.unstable_act=oe,mt.useCallback=function(k,J){return Z.current.useCallback(k,J)},mt.useContext=function(k){return Z.current.useContext(k)},mt.useDebugValue=function(){},mt.useDeferredValue=function(k){return Z.current.useDeferredValue(k)},mt.useEffect=function(k,J){return Z.current.useEffect(k,J)},mt.useId=function(){return Z.current.useId()},mt.useImperativeHandle=function(k,J,Fe){return Z.current.useImperativeHandle(k,J,Fe)},mt.useInsertionEffect=function(k,J){return Z.current.useInsertionEffect(k,J)},mt.useLayoutEffect=function(k,J){return Z.current.useLayoutEffect(k,J)},mt.useMemo=function(k,J){return Z.current.useMemo(k,J)},mt.useReducer=function(k,J,Fe){return Z.current.useReducer(k,J,Fe)},mt.useRef=function(k){return Z.current.useRef(k)},mt.useState=function(k){return Z.current.useState(k)},mt.useSyncExternalStore=function(k,J,Fe){return Z.current.useSyncExternalStore(k,J,Fe)},mt.useTransition=function(){return Z.current.useTransition()},mt.version="18.3.1",mt}var Mv;function lm(){return Mv||(Mv=1,Dd.exports=XT()),Dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function jT(){if(Tv)return Va;Tv=1;var n=lm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:m,ref:_,props:v,_owner:o.current}}return Va.Fragment=t,Va.jsx=c,Va.jsxs=c,Va}var wv;function YT(){return wv||(wv=1,Pd.exports=jT()),Pd.exports}var D=YT(),_c={},Ld={exports:{}},Kn={},Nd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function $T(){return Av||(Av=1,(function(n){function e(W,ne){var oe=W.length;W.push(ne);e:for(;0<oe;){var k=oe-1>>>1,J=W[k];if(0<o(J,ne))W[k]=ne,W[oe]=J,oe=k;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var ne=W[0],oe=W.pop();if(oe!==ne){W[0]=oe;e:for(var k=0,J=W.length,Fe=J>>>1;k<Fe;){var Xe=2*(k+1)-1,Ve=W[Xe],ce=Xe+1,xe=W[ce];if(0>o(Ve,oe))ce<J&&0>o(xe,Ve)?(W[k]=xe,W[ce]=oe,k=ce):(W[k]=Ve,W[Xe]=oe,k=Xe);else if(ce<J&&0>o(xe,oe))W[k]=xe,W[ce]=oe,k=ce;else break e}}return ne}function o(W,ne){var oe=W.sortIndex-ne.sortIndex;return oe!==0?oe:W.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,m=3,_=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(W){for(var ne=t(h);ne!==null;){if(ne.callback===null)i(h);else if(ne.startTime<=W)i(h),ne.sortIndex=ne.expirationTime,e(d,ne);else break;ne=t(h)}}function A(W){if(M=!1,L(W),!E)if(t(d)!==null)E=!0,ue(P);else{var ne=t(h);ne!==null&&Z(A,ne.startTime-W)}}function P(W,ne){E=!1,M&&(M=!1,S(T),T=-1),_=!0;var oe=m;try{for(L(ne),v=t(d);v!==null&&(!(v.expirationTime>ne)||W&&!V());){var k=v.callback;if(typeof k=="function"){v.callback=null,m=v.priorityLevel;var J=k(v.expirationTime<=ne);ne=n.unstable_now(),typeof J=="function"?v.callback=J:v===t(d)&&i(d),L(ne)}else i(d);v=t(d)}if(v!==null)var Fe=!0;else{var Xe=t(h);Xe!==null&&Z(A,Xe.startTime-ne),Fe=!1}return Fe}finally{v=null,m=oe,_=!1}}var I=!1,F=null,T=-1,N=5,O=-1;function V(){return!(n.unstable_now()-O<N)}function j(){if(F!==null){var W=n.unstable_now();O=W;var ne=!0;try{ne=F(!0,W)}finally{ne?H():(I=!1,F=null)}}else I=!1}var H;if(typeof R=="function")H=function(){R(j)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,K=ee.port2;ee.port1.onmessage=j,H=function(){K.postMessage(null)}}else H=function(){y(j,0)};function ue(W){F=W,I||(I=!0,H())}function Z(W,ne){T=y(function(){W(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){E||_||(E=!0,ue(P))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(W){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var oe=m;m=ne;try{return W()}finally{m=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,ne){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var oe=m;m=W;try{return ne()}finally{m=oe}},n.unstable_scheduleCallback=function(W,ne,oe){var k=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,W){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=oe+J,W={id:p++,callback:ne,priorityLevel:W,startTime:oe,expirationTime:J,sortIndex:-1},oe>k?(W.sortIndex=oe,e(h,W),t(d)===null&&W===t(h)&&(M?(S(T),T=-1):M=!0,Z(A,oe-k))):(W.sortIndex=J,e(d,W),E||_||(E=!0,ue(P))),W},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(W){var ne=m;return function(){var oe=m;m=ne;try{return W.apply(this,arguments)}finally{m=oe}}}})(Id)),Id}var bv;function qT(){return bv||(bv=1,Nd.exports=$T()),Nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function KT(){if(Cv)return Kn;Cv=1;var n=lm(),e=qT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function m(r){return d.call(v,r)?!0:d.call(p,r)?!1:h.test(r)?v[r]=!0:(p[r]=!0,!1)}function _(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,s,l,f){if(s===null||typeof s>"u"||_(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,l,f,g,x,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=x,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];y[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(S,R);y[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(S,R);y[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(S,R);y[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function L(r,s,l,f){var g=y.hasOwnProperty(s)?y[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,g,f)&&(l=null),f||g===null?m(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):g.mustUseProperty?r[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,f=g.attributeNamespace,l===null?r.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),V=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),W=Symbol.iterator;function ne(r){return r===null||typeof r!="object"?null:(r=W&&r[W]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,k;function J(r){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+r}var Fe=!1;function Xe(r,s){if(!r||Fe)return"";Fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var f=de}Reflect.construct(r,[],s)}else{try{s.call()}catch(de){f=de}r.call(s.prototype)}else{try{throw Error()}catch(de){f=de}r()}}catch(de){if(de&&f&&typeof de.stack=="string"){for(var g=de.stack.split(`
`),x=f.stack.split(`
`),b=g.length-1,B=x.length-1;1<=b&&0<=B&&g[b]!==x[B];)B--;for(;1<=b&&0<=B;b--,B--)if(g[b]!==x[B]){if(b!==1||B!==1)do if(b--,B--,0>B||g[b]!==x[B]){var G=`
`+g[b].replace(" at new "," at ");return r.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",r.displayName)),G}while(1<=b&&0<=B);break}}}finally{Fe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?J(r):""}function Ve(r){switch(r.tag){case 5:return J(r.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return r=Xe(r.type,!1),r;case 11:return r=Xe(r.type.render,!1),r;case 1:return r=Xe(r.type,!0),r;default:return""}}function ce(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case I:return"Portal";case N:return"Profiler";case T:return"StrictMode";case H:return"Suspense";case ee:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case O:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case K:return s=r.displayName||null,s!==null?s:ce(r.type)||"Memo";case ue:s=r._payload,r=r._init;try{return ce(r(s))}catch{}}return null}function xe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ue(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(r){var s=Ue(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return g.call(this)},set:function(b){f=""+b,x.call(this,b)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(b){f=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function tt(r){r._valueTracker||(r._valueTracker=et(r))}function Ht(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=Ue(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function ft(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function wt(r,s){var l=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function _t(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function gt(r,s){s=s.checked,s!=null&&L(r,"checked",s,!1)}function Gt(r,s){gt(r,s);var l=me(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Qt(r,s.type,l):s.hasOwnProperty("defaultValue")&&Qt(r,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Zt(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Qt(r,s,l){(s!=="number"||ft(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Yt=Array.isArray;function Pt(r,s,l,f){if(r=r.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<r.length;l++)g=s.hasOwnProperty("$"+r[l].value),r[l].selected!==g&&(r[l].selected=g),g&&f&&(r[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,g=0;g<r.length;g++){if(r[g].value===l){r[g].selected=!0,f&&(r[g].defaultSelected=!0);return}s!==null||r[g].disabled||(s=r[g])}s!==null&&(s.selected=!0)}}function Wt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function $(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Yt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:me(l)}}function yn(r,s){var l=me(s.value),f=me(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Mt(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function U(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?U(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Q,ae=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,g){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,g)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Q.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function he(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(r){Re.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Me[s]=Me[r]})});function pe(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(r)&&Me[r]?(""+s).trim():s+"px"}function ve(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=pe(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,g):r[l]=g}}var De=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(r,s){if(s){if(De[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Je(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var nt=null,st=null,X=null;function be(r){if(r=wa(r)){if(typeof nt!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Il(s),nt(r.stateNode,r.type,s))}}function ge(r){st?X?X.push(r):X=[r]:st=r}function Pe(){if(st){var r=st,s=X;if(X=st=null,be(r),s)for(r=0;r<s.length;r++)be(s[r])}}function Ne(r,s){return r(s)}function _e(){}var je=!1;function He(r,s,l){if(je)return r(s,l);je=!0;try{return Ne(r,s,l)}finally{je=!1,(st!==null||X!==null)&&(_e(),Pe())}}function It(r,s){var l=r.stateNode;if(l===null)return null;var f=Il(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ct=!1;if(u)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Ct=!1}function ai(r,s,l,f,g,x,b,B,G){var de=Array.prototype.slice.call(arguments,3);try{s.apply(l,de)}catch(Se){this.onError(Se)}}var cs=!1,Ks=null,us=!1,fs=null,Qu={onError:function(r){cs=!0,Ks=r}};function gl(r,s,l,f,g,x,b,B,G){cs=!1,Ks=null,ai.apply(Qu,arguments)}function vl(r,s,l,f,g,x,b,B,G){if(gl.apply(this,arguments),cs){if(cs){var de=Ks;cs=!1,Ks=null}else throw Error(t(198));us||(us=!0,fs=de)}}function Fn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Zs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function sa(r){if(Fn(r)!==r)throw Error(t(188))}function xl(r){var s=r.alternate;if(!s){if(s=Fn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return sa(g),r;if(x===f)return sa(g),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=x;else{for(var b=!1,B=g.child;B;){if(B===l){b=!0,l=g,f=x;break}if(B===f){b=!0,f=g,l=x;break}B=B.sibling}if(!b){for(B=x.child;B;){if(B===l){b=!0,l=x,f=g;break}if(B===f){b=!0,f=x,l=g;break}B=B.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function ds(r){return r=xl(r),r!==null?oa(r):null}function oa(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=oa(r);if(s!==null)return s;r=r.sibling}return null}var hs=e.unstable_scheduleCallback,aa=e.unstable_cancelCallback,_l=e.unstable_shouldYield,Ju=e.unstable_requestPaint,$t=e.unstable_now,ef=e.unstable_getCurrentPriorityLevel,la=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,fe=e.unstable_LowPriority,re=e.unstable_IdlePriority,ie=null,Ae=null;function Be(r){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ie,r,void 0,(r.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:lt,Ye=Math.log,Qe=Math.LN2;function lt(r){return r>>>=0,r===0?32:31-(Ye(r)/Qe|0)|0}var ct=64,Ke=4194304;function yt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ot(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,g=r.suspendedLanes,x=r.pingedLanes,b=l&268435455;if(b!==0){var B=b&~g;B!==0?f=yt(B):(x&=b,x!==0&&(f=yt(x)))}else b=l&~g,b!==0?f=yt(b):x!==0&&(f=yt(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,x=s&-s,g>=x||g===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-we(s),g=1<<l,f|=r[l],s&=~g;return f}function Xt(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,g=r.expirationTimes,x=r.pendingLanes;0<x;){var b=31-we(x),B=1<<b,G=g[b];G===-1?((B&l)===0||(B&f)!==0)&&(g[b]=Xt(B,s)):G<=s&&(r.expiredLanes|=B),x&=~B}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Oe(){var r=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),r}function Sn(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ht(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-we(s),r[s]=l}function Gn(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var g=31-we(l),x=1<<g;s[g]=0,f[g]=-1,r[g]=-1,l&=~x}}function Wn(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-we(l),g=1<<f;g&s|r[f]&s&&(r[f]|=s),l&=~g}}var pt=0;function rr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Rt,Bt,_i,Lt,yi,Bi=!1,ps=[],Cr=null,Rr=null,Pr=null,ca=new Map,ua=new Map,Dr=[],dM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(r,s){switch(r){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ca.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(s.pointerId)}}function fa(r,s,l,f,g,x){return r===null||r.nativeEvent!==x?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[g]},s!==null&&(s=wa(s),s!==null&&Bt(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),r)}function hM(r,s,l,f,g){switch(s){case"focusin":return Cr=fa(Cr,r,s,l,f,g),!0;case"dragenter":return Rr=fa(Rr,r,s,l,f,g),!0;case"mouseover":return Pr=fa(Pr,r,s,l,f,g),!0;case"pointerover":var x=g.pointerId;return ca.set(x,fa(ca.get(x)||null,r,s,l,f,g)),!0;case"gotpointercapture":return x=g.pointerId,ua.set(x,fa(ua.get(x)||null,r,s,l,f,g)),!0}return!1}function og(r){var s=ms(r.target);if(s!==null){var l=Fn(s);if(l!==null){if(s=l.tag,s===13){if(s=Zs(l),s!==null){r.blockedOn=s,yi(r.priority,function(){_i(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yl(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=nf(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);Ce=f,l.target.dispatchEvent(f),Ce=null}else return s=wa(l),s!==null&&Bt(s),r.blockedOn=l,!1;s.shift()}return!0}function ag(r,s,l){yl(r)&&l.delete(s)}function pM(){Bi=!1,Cr!==null&&yl(Cr)&&(Cr=null),Rr!==null&&yl(Rr)&&(Rr=null),Pr!==null&&yl(Pr)&&(Pr=null),ca.forEach(ag),ua.forEach(ag)}function da(r,s){r.blockedOn===s&&(r.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pM)))}function ha(r){function s(g){return da(g,r)}if(0<ps.length){da(ps[0],r);for(var l=1;l<ps.length;l++){var f=ps[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Cr!==null&&da(Cr,r),Rr!==null&&da(Rr,r),Pr!==null&&da(Pr,r),ca.forEach(s),ua.forEach(s),l=0;l<Dr.length;l++)f=Dr[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Dr.length&&(l=Dr[0],l.blockedOn===null);)og(l),l.blockedOn===null&&Dr.shift()}var Qs=A.ReactCurrentBatchConfig,Sl=!0;function mM(r,s,l,f){var g=pt,x=Qs.transition;Qs.transition=null;try{pt=1,tf(r,s,l,f)}finally{pt=g,Qs.transition=x}}function gM(r,s,l,f){var g=pt,x=Qs.transition;Qs.transition=null;try{pt=4,tf(r,s,l,f)}finally{pt=g,Qs.transition=x}}function tf(r,s,l,f){if(Sl){var g=nf(r,s,l,f);if(g===null)yf(r,s,f,El,l),sg(r,f);else if(hM(g,r,s,l,f))f.stopPropagation();else if(sg(r,f),s&4&&-1<dM.indexOf(r)){for(;g!==null;){var x=wa(g);if(x!==null&&Rt(x),x=nf(r,s,l,f),x===null&&yf(r,s,f,El,l),x===g)break;g=x}g!==null&&f.stopPropagation()}else yf(r,s,f,null,l)}}var El=null;function nf(r,s,l,f){if(El=null,r=Je(f),r=ms(r),r!==null)if(s=Fn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Zs(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return El=r,null}function lg(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ef()){case la:return 1;case C:return 4;case q:case fe:return 16;case re:return 536870912;default:return 16}default:return 16}}var Lr=null,rf=null,Ml=null;function cg(){if(Ml)return Ml;var r,s=rf,l=s.length,f,g="value"in Lr?Lr.value:Lr.textContent,x=g.length;for(r=0;r<l&&s[r]===g[r];r++);var b=l-r;for(f=1;f<=b&&s[l-f]===g[x-f];f++);return Ml=g.slice(r,1<f?1-f:void 0)}function Tl(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function wl(){return!0}function ug(){return!1}function ei(r){function s(l,f,g,x,b){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var B in r)r.hasOwnProperty(B)&&(l=r[B],this[B]=l?l(x):x[B]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?wl:ug,this.isPropagationStopped=ug,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),s}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=ei(Js),pa=oe({},Js,{view:0,detail:0}),vM=ei(pa),of,af,ma,Al=oe({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ma&&(ma&&r.type==="mousemove"?(of=r.screenX-ma.screenX,af=r.screenY-ma.screenY):af=of=0,ma=r),of)},movementY:function(r){return"movementY"in r?r.movementY:af}}),fg=ei(Al),xM=oe({},Al,{dataTransfer:0}),_M=ei(xM),yM=oe({},pa,{relatedTarget:0}),lf=ei(yM),SM=oe({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),EM=ei(SM),MM=oe({},Js,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),TM=ei(MM),wM=oe({},Js,{data:0}),dg=ei(wM),AM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=CM[r])?!!s[r]:!1}function cf(){return RM}var PM=oe({},pa,{key:function(r){if(r.key){var s=AM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Tl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?bM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(r){return r.type==="keypress"?Tl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Tl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),DM=ei(PM),LM=oe({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hg=ei(LM),NM=oe({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),IM=ei(NM),FM=oe({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),UM=ei(FM),OM=oe({},Al,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),kM=ei(OM),BM=[9,13,27,32],uf=u&&"CompositionEvent"in window,ga=null;u&&"documentMode"in document&&(ga=document.documentMode);var VM=u&&"TextEvent"in window&&!ga,pg=u&&(!uf||ga&&8<ga&&11>=ga),mg=" ",gg=!1;function vg(r,s){switch(r){case"keyup":return BM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var eo=!1;function zM(r,s){switch(r){case"compositionend":return xg(s);case"keypress":return s.which!==32?null:(gg=!0,mg);case"textInput":return r=s.data,r===mg&&gg?null:r;default:return null}}function HM(r,s){if(eo)return r==="compositionend"||!uf&&vg(r,s)?(r=cg(),Ml=rf=Lr=null,eo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return pg&&s.locale!=="ko"?null:s.data;default:return null}}var GM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _g(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!GM[r.type]:s==="textarea"}function yg(r,s,l,f){ge(f),s=Dl(s,"onChange"),0<s.length&&(l=new sf("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var va=null,xa=null;function WM(r){kg(r,0)}function bl(r){var s=so(r);if(Ht(s))return r}function XM(r,s){if(r==="change")return s}var Sg=!1;if(u){var ff;if(u){var df="oninput"in document;if(!df){var Eg=document.createElement("div");Eg.setAttribute("oninput","return;"),df=typeof Eg.oninput=="function"}ff=df}else ff=!1;Sg=ff&&(!document.documentMode||9<document.documentMode)}function Mg(){va&&(va.detachEvent("onpropertychange",Tg),xa=va=null)}function Tg(r){if(r.propertyName==="value"&&bl(xa)){var s=[];yg(s,xa,r,Je(r)),He(WM,s)}}function jM(r,s,l){r==="focusin"?(Mg(),va=s,xa=l,va.attachEvent("onpropertychange",Tg)):r==="focusout"&&Mg()}function YM(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return bl(xa)}function $M(r,s){if(r==="click")return bl(s)}function qM(r,s){if(r==="input"||r==="change")return bl(s)}function KM(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Si=typeof Object.is=="function"?Object.is:KM;function _a(r,s){if(Si(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!d.call(s,g)||!Si(r[g],s[g]))return!1}return!0}function wg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Ag(r,s){var l=wg(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=wg(l)}}function bg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?bg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Cg(){for(var r=window,s=ft();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ft(r.document)}return s}function hf(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function ZM(r){var s=Cg(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&bg(l.ownerDocument.documentElement,l)){if(f!==null&&hf(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var g=l.textContent.length,x=Math.min(f.start,g);f=f.end===void 0?x:Math.min(f.end,g),!r.extend&&x>f&&(g=f,f=x,x=g),g=Ag(l,x);var b=Ag(l,f);g&&b&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==b.node||r.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),r.removeAllRanges(),x>f?(r.addRange(s),r.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var QM=u&&"documentMode"in document&&11>=document.documentMode,to=null,pf=null,ya=null,mf=!1;function Rg(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;mf||to==null||to!==ft(f)||(f=to,"selectionStart"in f&&hf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ya&&_a(ya,f)||(ya=f,f=Dl(pf,"onSelect"),0<f.length&&(s=new sf("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=to)))}function Cl(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var no={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},gf={},Pg={};u&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function Rl(r){if(gf[r])return gf[r];if(!no[r])return r;var s=no[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Pg)return gf[r]=s[l];return r}var Dg=Rl("animationend"),Lg=Rl("animationiteration"),Ng=Rl("animationstart"),Ig=Rl("transitionend"),Fg=new Map,Ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(r,s){Fg.set(r,s),a(s,[r])}for(var vf=0;vf<Ug.length;vf++){var xf=Ug[vf],JM=xf.toLowerCase(),eT=xf[0].toUpperCase()+xf.slice(1);Nr(JM,"on"+eT)}Nr(Dg,"onAnimationEnd"),Nr(Lg,"onAnimationIteration"),Nr(Ng,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Ig,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Og(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,vl(f,s,void 0,r),r.currentTarget=null}function kg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],g=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var b=f.length-1;0<=b;b--){var B=f[b],G=B.instance,de=B.currentTarget;if(B=B.listener,G!==x&&g.isPropagationStopped())break e;Og(g,B,de),x=G}else for(b=0;b<f.length;b++){if(B=f[b],G=B.instance,de=B.currentTarget,B=B.listener,G!==x&&g.isPropagationStopped())break e;Og(g,B,de),x=G}}}if(us)throw r=fs,us=!1,fs=null,r}function Vt(r,s){var l=s[Af];l===void 0&&(l=s[Af]=new Set);var f=r+"__bubble";l.has(f)||(Bg(s,r,2,!1),l.add(f))}function _f(r,s,l){var f=0;s&&(f|=4),Bg(l,r,f,s)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Ea(r){if(!r[Pl]){r[Pl]=!0,i.forEach(function(l){l!=="selectionchange"&&(tT.has(l)||_f(l,!1,r),_f(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Pl]||(s[Pl]=!0,_f("selectionchange",!1,s))}}function Bg(r,s,l,f){switch(lg(s)){case 1:var g=mM;break;case 4:g=gM;break;default:g=tf}l=g.bind(null,s,l,r),g=void 0,!Ct||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?r.addEventListener(s,l,{capture:!0,passive:g}):r.addEventListener(s,l,!0):g!==void 0?r.addEventListener(s,l,{passive:g}):r.addEventListener(s,l,!1)}function yf(r,s,l,f,g){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var b=f.tag;if(b===3||b===4){var B=f.stateNode.containerInfo;if(B===g||B.nodeType===8&&B.parentNode===g)break;if(b===4)for(b=f.return;b!==null;){var G=b.tag;if((G===3||G===4)&&(G=b.stateNode.containerInfo,G===g||G.nodeType===8&&G.parentNode===g))return;b=b.return}for(;B!==null;){if(b=ms(B),b===null)return;if(G=b.tag,G===5||G===6){f=x=b;continue e}B=B.parentNode}}f=f.return}He(function(){var de=x,Se=Je(l),Ee=[];e:{var ye=Fg.get(r);if(ye!==void 0){var ke=sf,Ge=r;switch(r){case"keypress":if(Tl(l)===0)break e;case"keydown":case"keyup":ke=DM;break;case"focusin":Ge="focus",ke=lf;break;case"focusout":Ge="blur",ke=lf;break;case"beforeblur":case"afterblur":ke=lf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=_M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=IM;break;case Dg:case Lg:case Ng:ke=EM;break;case Ig:ke=UM;break;case"scroll":ke=vM;break;case"wheel":ke=kM;break;case"copy":case"cut":case"paste":ke=TM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=hg}var $e=(s&4)!==0,nn=!$e&&r==="scroll",te=$e?ye!==null?ye+"Capture":null:ye;$e=[];for(var Y=de,se;Y!==null;){se=Y;var Te=se.stateNode;if(se.tag===5&&Te!==null&&(se=Te,te!==null&&(Te=It(Y,te),Te!=null&&$e.push(Ma(Y,Te,se)))),nn)break;Y=Y.return}0<$e.length&&(ye=new ke(ye,Ge,null,l,Se),Ee.push({event:ye,listeners:$e}))}}if((s&7)===0){e:{if(ye=r==="mouseover"||r==="pointerover",ke=r==="mouseout"||r==="pointerout",ye&&l!==Ce&&(Ge=l.relatedTarget||l.fromElement)&&(ms(Ge)||Ge[sr]))break e;if((ke||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,ke?(Ge=l.relatedTarget||l.toElement,ke=de,Ge=Ge?ms(Ge):null,Ge!==null&&(nn=Fn(Ge),Ge!==nn||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ke=null,Ge=de),ke!==Ge)){if($e=fg,Te="onMouseLeave",te="onMouseEnter",Y="mouse",(r==="pointerout"||r==="pointerover")&&($e=hg,Te="onPointerLeave",te="onPointerEnter",Y="pointer"),nn=ke==null?ye:so(ke),se=Ge==null?ye:so(Ge),ye=new $e(Te,Y+"leave",ke,l,Se),ye.target=nn,ye.relatedTarget=se,Te=null,ms(Se)===de&&($e=new $e(te,Y+"enter",Ge,l,Se),$e.target=se,$e.relatedTarget=nn,Te=$e),nn=Te,ke&&Ge)t:{for($e=ke,te=Ge,Y=0,se=$e;se;se=io(se))Y++;for(se=0,Te=te;Te;Te=io(Te))se++;for(;0<Y-se;)$e=io($e),Y--;for(;0<se-Y;)te=io(te),se--;for(;Y--;){if($e===te||te!==null&&$e===te.alternate)break t;$e=io($e),te=io(te)}$e=null}else $e=null;ke!==null&&Vg(Ee,ye,ke,$e,!1),Ge!==null&&nn!==null&&Vg(Ee,nn,Ge,$e,!0)}}e:{if(ye=de?so(de):window,ke=ye.nodeName&&ye.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ye.type==="file")var Ze=XM;else if(_g(ye))if(Sg)Ze=qM;else{Ze=YM;var it=jM}else(ke=ye.nodeName)&&ke.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ze=$M);if(Ze&&(Ze=Ze(r,de))){yg(Ee,Ze,l,Se);break e}it&&it(r,ye,de),r==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&Qt(ye,"number",ye.value)}switch(it=de?so(de):window,r){case"focusin":(_g(it)||it.contentEditable==="true")&&(to=it,pf=de,ya=null);break;case"focusout":ya=pf=to=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Rg(Ee,l,Se);break;case"selectionchange":if(QM)break;case"keydown":case"keyup":Rg(Ee,l,Se)}var rt;if(uf)e:{switch(r){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else eo?vg(r,l)&&(ot="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(pg&&l.locale!=="ko"&&(eo||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&eo&&(rt=cg()):(Lr=Se,rf="value"in Lr?Lr.value:Lr.textContent,eo=!0)),it=Dl(de,ot),0<it.length&&(ot=new dg(ot,r,null,l,Se),Ee.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=xg(l),rt!==null&&(ot.data=rt)))),(rt=VM?zM(r,l):HM(r,l))&&(de=Dl(de,"onBeforeInput"),0<de.length&&(Se=new dg("onBeforeInput","beforeinput",null,l,Se),Ee.push({event:Se,listeners:de}),Se.data=rt))}kg(Ee,s)})}function Ma(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Dl(r,s){for(var l=s+"Capture",f=[];r!==null;){var g=r,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=It(r,l),x!=null&&f.unshift(Ma(r,x,g)),x=It(r,s),x!=null&&f.push(Ma(r,x,g))),r=r.return}return f}function io(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Vg(r,s,l,f,g){for(var x=s._reactName,b=[];l!==null&&l!==f;){var B=l,G=B.alternate,de=B.stateNode;if(G!==null&&G===f)break;B.tag===5&&de!==null&&(B=de,g?(G=It(l,x),G!=null&&b.unshift(Ma(l,G,B))):g||(G=It(l,x),G!=null&&b.push(Ma(l,G,B)))),l=l.return}b.length!==0&&r.push({event:s,listeners:b})}var nT=/\r\n?/g,iT=/\u0000|\uFFFD/g;function zg(r){return(typeof r=="string"?r:""+r).replace(nT,`
`).replace(iT,"")}function Ll(r,s,l){if(s=zg(s),zg(r)!==s&&l)throw Error(t(425))}function Nl(){}var Sf=null,Ef=null;function Mf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,rT=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,sT=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(r){return Hg.resolve(null).then(r).catch(oT)}:Tf;function oT(r){setTimeout(function(){throw r})}function wf(r,s){var l=s,f=0;do{var g=l.nextSibling;if(r.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){r.removeChild(g),ha(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);ha(s)}function Ir(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Gg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var ro=Math.random().toString(36).slice(2),Vi="__reactFiber$"+ro,Ta="__reactProps$"+ro,sr="__reactContainer$"+ro,Af="__reactEvents$"+ro,aT="__reactListeners$"+ro,lT="__reactHandles$"+ro;function ms(r){var s=r[Vi];if(s)return s;for(var l=r.parentNode;l;){if(s=l[sr]||l[Vi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Gg(r);r!==null;){if(l=r[Vi])return l;r=Gg(r)}return s}r=l,l=r.parentNode}return null}function wa(r){return r=r[Vi]||r[sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function so(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Il(r){return r[Ta]||null}var bf=[],oo=-1;function Fr(r){return{current:r}}function zt(r){0>oo||(r.current=bf[oo],bf[oo]=null,oo--)}function kt(r,s){oo++,bf[oo]=r.current,r.current=s}var Ur={},Cn=Fr(Ur),Xn=Fr(!1),gs=Ur;function ao(r,s){var l=r.type.contextTypes;if(!l)return Ur;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=s[x];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=g),g}function jn(r){return r=r.childContextTypes,r!=null}function Fl(){zt(Xn),zt(Cn)}function Wg(r,s,l){if(Cn.current!==Ur)throw Error(t(168));kt(Cn,s),kt(Xn,l)}function Xg(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,xe(r)||"Unknown",g));return oe({},l,f)}function Ul(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Ur,gs=Cn.current,kt(Cn,r),kt(Xn,Xn.current),!0}function jg(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=Xg(r,s,gs),f.__reactInternalMemoizedMergedChildContext=r,zt(Xn),zt(Cn),kt(Cn,r)):zt(Xn),kt(Xn,l)}var or=null,Ol=!1,Cf=!1;function Yg(r){or===null?or=[r]:or.push(r)}function cT(r){Ol=!0,Yg(r)}function Or(){if(!Cf&&or!==null){Cf=!0;var r=0,s=pt;try{var l=or;for(pt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}or=null,Ol=!1}catch(g){throw or!==null&&(or=or.slice(r+1)),hs(la,Or),g}finally{pt=s,Cf=!1}}return null}var lo=[],co=0,kl=null,Bl=0,li=[],ci=0,vs=null,ar=1,lr="";function xs(r,s){lo[co++]=Bl,lo[co++]=kl,kl=r,Bl=s}function $g(r,s,l){li[ci++]=ar,li[ci++]=lr,li[ci++]=vs,vs=r;var f=ar;r=lr;var g=32-we(f)-1;f&=~(1<<g),l+=1;var x=32-we(s)+g;if(30<x){var b=g-g%5;x=(f&(1<<b)-1).toString(32),f>>=b,g-=b,ar=1<<32-we(s)+g|l<<g|f,lr=x+r}else ar=1<<x|l<<g|f,lr=r}function Rf(r){r.return!==null&&(xs(r,1),$g(r,1,0))}function Pf(r){for(;r===kl;)kl=lo[--co],lo[co]=null,Bl=lo[--co],lo[co]=null;for(;r===vs;)vs=li[--ci],li[ci]=null,lr=li[--ci],li[ci]=null,ar=li[--ci],li[ci]=null}var ti=null,ni=null,jt=!1,Ei=null;function qg(r,s){var l=hi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Kg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ti=r,ni=Ir(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ti=r,ni=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=vs!==null?{id:ar,overflow:lr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=hi(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,ti=r,ni=null,!0):!1;default:return!1}}function Df(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Lf(r){if(jt){var s=ni;if(s){var l=s;if(!Kg(r,s)){if(Df(r))throw Error(t(418));s=Ir(l.nextSibling);var f=ti;s&&Kg(r,s)?qg(f,l):(r.flags=r.flags&-4097|2,jt=!1,ti=r)}}else{if(Df(r))throw Error(t(418));r.flags=r.flags&-4097|2,jt=!1,ti=r}}}function Zg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ti=r}function Vl(r){if(r!==ti)return!1;if(!jt)return Zg(r),jt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Mf(r.type,r.memoizedProps)),s&&(s=ni)){if(Df(r))throw Qg(),Error(t(418));for(;s;)qg(r,s),s=Ir(s.nextSibling)}if(Zg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){ni=Ir(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}ni=null}}else ni=ti?Ir(r.stateNode.nextSibling):null;return!0}function Qg(){for(var r=ni;r;)r=Ir(r.nextSibling)}function uo(){ni=ti=null,jt=!1}function Nf(r){Ei===null?Ei=[r]:Ei.push(r)}var uT=A.ReactCurrentBatchConfig;function Aa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var g=f,x=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(b){var B=g.refs;b===null?delete B[x]:B[x]=b},s._stringRef=x,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function zl(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Jg(r){var s=r._init;return s(r._payload)}function e0(r){function s(te,Y){if(r){var se=te.deletions;se===null?(te.deletions=[Y],te.flags|=16):se.push(Y)}}function l(te,Y){if(!r)return null;for(;Y!==null;)s(te,Y),Y=Y.sibling;return null}function f(te,Y){for(te=new Map;Y!==null;)Y.key!==null?te.set(Y.key,Y):te.set(Y.index,Y),Y=Y.sibling;return te}function g(te,Y){return te=Xr(te,Y),te.index=0,te.sibling=null,te}function x(te,Y,se){return te.index=se,r?(se=te.alternate,se!==null?(se=se.index,se<Y?(te.flags|=2,Y):se):(te.flags|=2,Y)):(te.flags|=1048576,Y)}function b(te){return r&&te.alternate===null&&(te.flags|=2),te}function B(te,Y,se,Te){return Y===null||Y.tag!==6?(Y=Td(se,te.mode,Te),Y.return=te,Y):(Y=g(Y,se),Y.return=te,Y)}function G(te,Y,se,Te){var Ze=se.type;return Ze===F?Se(te,Y,se.props.children,Te,se.key):Y!==null&&(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&Jg(Ze)===Y.type)?(Te=g(Y,se.props),Te.ref=Aa(te,Y,se),Te.return=te,Te):(Te=fc(se.type,se.key,se.props,null,te.mode,Te),Te.ref=Aa(te,Y,se),Te.return=te,Te)}function de(te,Y,se,Te){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=wd(se,te.mode,Te),Y.return=te,Y):(Y=g(Y,se.children||[]),Y.return=te,Y)}function Se(te,Y,se,Te,Ze){return Y===null||Y.tag!==7?(Y=As(se,te.mode,Te,Ze),Y.return=te,Y):(Y=g(Y,se),Y.return=te,Y)}function Ee(te,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Td(""+Y,te.mode,se),Y.return=te,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case P:return se=fc(Y.type,Y.key,Y.props,null,te.mode,se),se.ref=Aa(te,null,Y),se.return=te,se;case I:return Y=wd(Y,te.mode,se),Y.return=te,Y;case ue:var Te=Y._init;return Ee(te,Te(Y._payload),se)}if(Yt(Y)||ne(Y))return Y=As(Y,te.mode,se,null),Y.return=te,Y;zl(te,Y)}return null}function ye(te,Y,se,Te){var Ze=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ze!==null?null:B(te,Y,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case P:return se.key===Ze?G(te,Y,se,Te):null;case I:return se.key===Ze?de(te,Y,se,Te):null;case ue:return Ze=se._init,ye(te,Y,Ze(se._payload),Te)}if(Yt(se)||ne(se))return Ze!==null?null:Se(te,Y,se,Te,null);zl(te,se)}return null}function ke(te,Y,se,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return te=te.get(se)||null,B(Y,te,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case P:return te=te.get(Te.key===null?se:Te.key)||null,G(Y,te,Te,Ze);case I:return te=te.get(Te.key===null?se:Te.key)||null,de(Y,te,Te,Ze);case ue:var it=Te._init;return ke(te,Y,se,it(Te._payload),Ze)}if(Yt(Te)||ne(Te))return te=te.get(se)||null,Se(Y,te,Te,Ze,null);zl(Y,Te)}return null}function Ge(te,Y,se,Te){for(var Ze=null,it=null,rt=Y,ot=Y=0,xn=null;rt!==null&&ot<se.length;ot++){rt.index>ot?(xn=rt,rt=null):xn=rt.sibling;var Tt=ye(te,rt,se[ot],Te);if(Tt===null){rt===null&&(rt=xn);break}r&&rt&&Tt.alternate===null&&s(te,rt),Y=x(Tt,Y,ot),it===null?Ze=Tt:it.sibling=Tt,it=Tt,rt=xn}if(ot===se.length)return l(te,rt),jt&&xs(te,ot),Ze;if(rt===null){for(;ot<se.length;ot++)rt=Ee(te,se[ot],Te),rt!==null&&(Y=x(rt,Y,ot),it===null?Ze=rt:it.sibling=rt,it=rt);return jt&&xs(te,ot),Ze}for(rt=f(te,rt);ot<se.length;ot++)xn=ke(rt,te,ot,se[ot],Te),xn!==null&&(r&&xn.alternate!==null&&rt.delete(xn.key===null?ot:xn.key),Y=x(xn,Y,ot),it===null?Ze=xn:it.sibling=xn,it=xn);return r&&rt.forEach(function(jr){return s(te,jr)}),jt&&xs(te,ot),Ze}function $e(te,Y,se,Te){var Ze=ne(se);if(typeof Ze!="function")throw Error(t(150));if(se=Ze.call(se),se==null)throw Error(t(151));for(var it=Ze=null,rt=Y,ot=Y=0,xn=null,Tt=se.next();rt!==null&&!Tt.done;ot++,Tt=se.next()){rt.index>ot?(xn=rt,rt=null):xn=rt.sibling;var jr=ye(te,rt,Tt.value,Te);if(jr===null){rt===null&&(rt=xn);break}r&&rt&&jr.alternate===null&&s(te,rt),Y=x(jr,Y,ot),it===null?Ze=jr:it.sibling=jr,it=jr,rt=xn}if(Tt.done)return l(te,rt),jt&&xs(te,ot),Ze;if(rt===null){for(;!Tt.done;ot++,Tt=se.next())Tt=Ee(te,Tt.value,Te),Tt!==null&&(Y=x(Tt,Y,ot),it===null?Ze=Tt:it.sibling=Tt,it=Tt);return jt&&xs(te,ot),Ze}for(rt=f(te,rt);!Tt.done;ot++,Tt=se.next())Tt=ke(rt,te,ot,Tt.value,Te),Tt!==null&&(r&&Tt.alternate!==null&&rt.delete(Tt.key===null?ot:Tt.key),Y=x(Tt,Y,ot),it===null?Ze=Tt:it.sibling=Tt,it=Tt);return r&&rt.forEach(function(GT){return s(te,GT)}),jt&&xs(te,ot),Ze}function nn(te,Y,se,Te){if(typeof se=="object"&&se!==null&&se.type===F&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case P:e:{for(var Ze=se.key,it=Y;it!==null;){if(it.key===Ze){if(Ze=se.type,Ze===F){if(it.tag===7){l(te,it.sibling),Y=g(it,se.props.children),Y.return=te,te=Y;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&Jg(Ze)===it.type){l(te,it.sibling),Y=g(it,se.props),Y.ref=Aa(te,it,se),Y.return=te,te=Y;break e}l(te,it);break}else s(te,it);it=it.sibling}se.type===F?(Y=As(se.props.children,te.mode,Te,se.key),Y.return=te,te=Y):(Te=fc(se.type,se.key,se.props,null,te.mode,Te),Te.ref=Aa(te,Y,se),Te.return=te,te=Te)}return b(te);case I:e:{for(it=se.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){l(te,Y.sibling),Y=g(Y,se.children||[]),Y.return=te,te=Y;break e}else{l(te,Y);break}else s(te,Y);Y=Y.sibling}Y=wd(se,te.mode,Te),Y.return=te,te=Y}return b(te);case ue:return it=se._init,nn(te,Y,it(se._payload),Te)}if(Yt(se))return Ge(te,Y,se,Te);if(ne(se))return $e(te,Y,se,Te);zl(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Y!==null&&Y.tag===6?(l(te,Y.sibling),Y=g(Y,se),Y.return=te,te=Y):(l(te,Y),Y=Td(se,te.mode,Te),Y.return=te,te=Y),b(te)):l(te,Y)}return nn}var fo=e0(!0),t0=e0(!1),Hl=Fr(null),Gl=null,ho=null,If=null;function Ff(){If=ho=Gl=null}function Uf(r){var s=Hl.current;zt(Hl),r._currentValue=s}function Of(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function po(r,s){Gl=r,If=ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Yn=!0),r.firstContext=null)}function ui(r){var s=r._currentValue;if(If!==r)if(r={context:r,memoizedValue:s,next:null},ho===null){if(Gl===null)throw Error(t(308));ho=r,Gl.dependencies={lanes:0,firstContext:r}}else ho=ho.next=r;return s}var _s=null;function kf(r){_s===null?_s=[r]:_s.push(r)}function n0(r,s,l,f){var g=s.interleaved;return g===null?(l.next=l,kf(s)):(l.next=g.next,g.next=l),s.interleaved=l,cr(r,f)}function cr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var kr=!1;function Bf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ur(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Br(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(St&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,cr(r,l)}return g=f.interleaved,g===null?(s.next=s,kf(f)):(s.next=g.next,g.next=s),f.interleaved=s,cr(r,l)}function Wl(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Wn(r,l)}}function r0(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=b:x=x.next=b,l=l.next}while(l!==null);x===null?g=x=s:x=x.next=s}else g=x=s;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Xl(r,s,l,f){var g=r.updateQueue;kr=!1;var x=g.firstBaseUpdate,b=g.lastBaseUpdate,B=g.shared.pending;if(B!==null){g.shared.pending=null;var G=B,de=G.next;G.next=null,b===null?x=de:b.next=de,b=G;var Se=r.alternate;Se!==null&&(Se=Se.updateQueue,B=Se.lastBaseUpdate,B!==b&&(B===null?Se.firstBaseUpdate=de:B.next=de,Se.lastBaseUpdate=G))}if(x!==null){var Ee=g.baseState;b=0,Se=de=G=null,B=x;do{var ye=B.lane,ke=B.eventTime;if((f&ye)===ye){Se!==null&&(Se=Se.next={eventTime:ke,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ge=r,$e=B;switch(ye=s,ke=l,$e.tag){case 1:if(Ge=$e.payload,typeof Ge=="function"){Ee=Ge.call(ke,Ee,ye);break e}Ee=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=$e.payload,ye=typeof Ge=="function"?Ge.call(ke,Ee,ye):Ge,ye==null)break e;Ee=oe({},Ee,ye);break e;case 2:kr=!0}}B.callback!==null&&B.lane!==0&&(r.flags|=64,ye=g.effects,ye===null?g.effects=[B]:ye.push(B))}else ke={eventTime:ke,lane:ye,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Se===null?(de=Se=ke,G=Ee):Se=Se.next=ke,b|=ye;if(B=B.next,B===null){if(B=g.shared.pending,B===null)break;ye=B,B=ye.next,ye.next=null,g.lastBaseUpdate=ye,g.shared.pending=null}}while(!0);if(Se===null&&(G=Ee),g.baseState=G,g.firstBaseUpdate=de,g.lastBaseUpdate=Se,s=g.shared.interleaved,s!==null){g=s;do b|=g.lane,g=g.next;while(g!==s)}else x===null&&(g.shared.lanes=0);Es|=b,r.lanes=b,r.memoizedState=Ee}}function s0(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var ba={},zi=Fr(ba),Ca=Fr(ba),Ra=Fr(ba);function ys(r){if(r===ba)throw Error(t(174));return r}function Vf(r,s){switch(kt(Ra,s),kt(Ca,r),kt(zi,ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=w(s,r)}zt(zi),kt(zi,s)}function mo(){zt(zi),zt(Ca),zt(Ra)}function o0(r){ys(Ra.current);var s=ys(zi.current),l=w(s,r.type);s!==l&&(kt(Ca,r),kt(zi,l))}function zf(r){Ca.current===r&&(zt(zi),zt(Ca))}var qt=Fr(0);function jl(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Hf=[];function Gf(){for(var r=0;r<Hf.length;r++)Hf[r]._workInProgressVersionPrimary=null;Hf.length=0}var Yl=A.ReactCurrentDispatcher,Wf=A.ReactCurrentBatchConfig,Ss=0,Kt=null,un=null,gn=null,$l=!1,Pa=!1,Da=0,fT=0;function Rn(){throw Error(t(321))}function Xf(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Si(r[l],s[l]))return!1;return!0}function jf(r,s,l,f,g,x){if(Ss=x,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Yl.current=r===null||r.memoizedState===null?mT:gT,r=l(f,g),Pa){x=0;do{if(Pa=!1,Da=0,25<=x)throw Error(t(301));x+=1,gn=un=null,s.updateQueue=null,Yl.current=vT,r=l(f,g)}while(Pa)}if(Yl.current=Zl,s=un!==null&&un.next!==null,Ss=0,gn=un=Kt=null,$l=!1,s)throw Error(t(300));return r}function Yf(){var r=Da!==0;return Da=0,r}function Hi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Kt.memoizedState=gn=r:gn=gn.next=r,gn}function fi(){if(un===null){var r=Kt.alternate;r=r!==null?r.memoizedState:null}else r=un.next;var s=gn===null?Kt.memoizedState:gn.next;if(s!==null)gn=s,un=r;else{if(r===null)throw Error(t(310));un=r,r={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},gn===null?Kt.memoizedState=gn=r:gn=gn.next=r}return gn}function La(r,s){return typeof s=="function"?s(r):s}function $f(r){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=un,g=f.baseQueue,x=l.pending;if(x!==null){if(g!==null){var b=g.next;g.next=x.next,x.next=b}f.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,f=f.baseState;var B=b=null,G=null,de=x;do{var Se=de.lane;if((Ss&Se)===Se)G!==null&&(G=G.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),f=de.hasEagerState?de.eagerState:r(f,de.action);else{var Ee={lane:Se,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};G===null?(B=G=Ee,b=f):G=G.next=Ee,Kt.lanes|=Se,Es|=Se}de=de.next}while(de!==null&&de!==x);G===null?b=f:G.next=B,Si(f,s.memoizedState)||(Yn=!0),s.memoizedState=f,s.baseState=b,s.baseQueue=G,l.lastRenderedState=f}if(r=l.interleaved,r!==null){g=r;do x=g.lane,Kt.lanes|=x,Es|=x,g=g.next;while(g!==r)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function qf(r){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,g=l.pending,x=s.memoizedState;if(g!==null){l.pending=null;var b=g=g.next;do x=r(x,b.action),b=b.next;while(b!==g);Si(x,s.memoizedState)||(Yn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function a0(){}function l0(r,s){var l=Kt,f=fi(),g=s(),x=!Si(f.memoizedState,g);if(x&&(f.memoizedState=g,Yn=!0),f=f.queue,Kf(f0.bind(null,l,f,r),[r]),f.getSnapshot!==s||x||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Na(9,u0.bind(null,l,f,g,s),void 0,null),vn===null)throw Error(t(349));(Ss&30)!==0||c0(l,s,g)}return g}function c0(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function u0(r,s,l,f){s.value=l,s.getSnapshot=f,d0(s)&&h0(r)}function f0(r,s,l){return l(function(){d0(s)&&h0(r)})}function d0(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Si(r,l)}catch{return!0}}function h0(r){var s=cr(r,1);s!==null&&Ai(s,r,1,-1)}function p0(r){var s=Hi();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:r},s.queue=r,r=r.dispatch=pT.bind(null,Kt,r),[s.memoizedState,r]}function Na(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function m0(){return fi().memoizedState}function ql(r,s,l,f){var g=Hi();Kt.flags|=r,g.memoizedState=Na(1|s,l,void 0,f===void 0?null:f)}function Kl(r,s,l,f){var g=fi();f=f===void 0?null:f;var x=void 0;if(un!==null){var b=un.memoizedState;if(x=b.destroy,f!==null&&Xf(f,b.deps)){g.memoizedState=Na(s,l,x,f);return}}Kt.flags|=r,g.memoizedState=Na(1|s,l,x,f)}function g0(r,s){return ql(8390656,8,r,s)}function Kf(r,s){return Kl(2048,8,r,s)}function v0(r,s){return Kl(4,2,r,s)}function x0(r,s){return Kl(4,4,r,s)}function _0(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function y0(r,s,l){return l=l!=null?l.concat([r]):null,Kl(4,4,_0.bind(null,s,r),l)}function Zf(){}function S0(r,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Xf(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function E0(r,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Xf(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function M0(r,s,l){return(Ss&21)===0?(r.baseState&&(r.baseState=!1,Yn=!0),r.memoizedState=l):(Si(l,s)||(l=Oe(),Kt.lanes|=l,Es|=l,r.baseState=!0),s)}function dT(r,s){var l=pt;pt=l!==0&&4>l?l:4,r(!0);var f=Wf.transition;Wf.transition={};try{r(!1),s()}finally{pt=l,Wf.transition=f}}function T0(){return fi().memoizedState}function hT(r,s,l){var f=Gr(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},w0(r))A0(s,l);else if(l=n0(r,s,l,f),l!==null){var g=On();Ai(l,r,f,g),b0(l,s,f)}}function pT(r,s,l){var f=Gr(r),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(w0(r))A0(s,g);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var b=s.lastRenderedState,B=x(b,l);if(g.hasEagerState=!0,g.eagerState=B,Si(B,b)){var G=s.interleaved;G===null?(g.next=g,kf(s)):(g.next=G.next,G.next=g),s.interleaved=g;return}}catch{}finally{}l=n0(r,s,g,f),l!==null&&(g=On(),Ai(l,r,f,g),b0(l,s,f))}}function w0(r){var s=r.alternate;return r===Kt||s!==null&&s===Kt}function A0(r,s){Pa=$l=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function b0(r,s,l){if((l&4194240)!==0){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Wn(r,l)}}var Zl={readContext:ui,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},mT={readContext:ui,useCallback:function(r,s){return Hi().memoizedState=[r,s===void 0?null:s],r},useContext:ui,useEffect:g0,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,ql(4194308,4,_0.bind(null,s,r),l)},useLayoutEffect:function(r,s){return ql(4194308,4,r,s)},useInsertionEffect:function(r,s){return ql(4,2,r,s)},useMemo:function(r,s){var l=Hi();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=Hi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=hT.bind(null,Kt,r),[f.memoizedState,r]},useRef:function(r){var s=Hi();return r={current:r},s.memoizedState=r},useState:p0,useDebugValue:Zf,useDeferredValue:function(r){return Hi().memoizedState=r},useTransition:function(){var r=p0(!1),s=r[0];return r=dT.bind(null,r[1]),Hi().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=Kt,g=Hi();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),vn===null)throw Error(t(349));(Ss&30)!==0||c0(f,s,l)}g.memoizedState=l;var x={value:l,getSnapshot:s};return g.queue=x,g0(f0.bind(null,f,x,r),[r]),f.flags|=2048,Na(9,u0.bind(null,f,x,l,s),void 0,null),l},useId:function(){var r=Hi(),s=vn.identifierPrefix;if(jt){var l=lr,f=ar;l=(f&~(1<<32-we(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Da++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=fT++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},gT={readContext:ui,useCallback:S0,useContext:ui,useEffect:Kf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:E0,useReducer:$f,useRef:m0,useState:function(){return $f(La)},useDebugValue:Zf,useDeferredValue:function(r){var s=fi();return M0(s,un.memoizedState,r)},useTransition:function(){var r=$f(La)[0],s=fi().memoizedState;return[r,s]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1},vT={readContext:ui,useCallback:S0,useContext:ui,useEffect:Kf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:E0,useReducer:qf,useRef:m0,useState:function(){return qf(La)},useDebugValue:Zf,useDeferredValue:function(r){var s=fi();return un===null?s.memoizedState=r:M0(s,un.memoizedState,r)},useTransition:function(){var r=qf(La)[0],s=fi().memoizedState;return[r,s]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1};function Mi(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Qf(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:oe({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Ql={isMounted:function(r){return(r=r._reactInternals)?Fn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=On(),g=Gr(r),x=ur(f,g);x.payload=s,l!=null&&(x.callback=l),s=Br(r,x,g),s!==null&&(Ai(s,r,g,f),Wl(s,r,g))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=On(),g=Gr(r),x=ur(f,g);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Br(r,x,g),s!==null&&(Ai(s,r,g,f),Wl(s,r,g))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=On(),f=Gr(r),g=ur(l,f);g.tag=2,s!=null&&(g.callback=s),s=Br(r,g,f),s!==null&&(Ai(s,r,f,l),Wl(s,r,f))}};function C0(r,s,l,f,g,x,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,x,b):s.prototype&&s.prototype.isPureReactComponent?!_a(l,f)||!_a(g,x):!0}function R0(r,s,l){var f=!1,g=Ur,x=s.contextType;return typeof x=="object"&&x!==null?x=ui(x):(g=jn(s)?gs:Cn.current,f=s.contextTypes,x=(f=f!=null)?ao(r,g):Ur),s=new s(l,x),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ql,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=x),s}function P0(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&Ql.enqueueReplaceState(s,s.state,null)}function Jf(r,s,l,f){var g=r.stateNode;g.props=l,g.state=r.memoizedState,g.refs={},Bf(r);var x=s.contextType;typeof x=="object"&&x!==null?g.context=ui(x):(x=jn(s)?gs:Cn.current,g.context=ao(r,x)),g.state=r.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Qf(r,s,x,l),g.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Ql.enqueueReplaceState(g,g.state,null),Xl(r,l,g,f),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function go(r,s){try{var l="",f=s;do l+=Ve(f),f=f.return;while(f);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:s,stack:g,digest:null}}function ed(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function td(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var xT=typeof WeakMap=="function"?WeakMap:Map;function D0(r,s,l){l=ur(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){sc||(sc=!0,gd=f),td(r,s)},l}function L0(r,s,l){l=ur(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;l.payload=function(){return f(g)},l.callback=function(){td(r,s)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){td(r,s),typeof f!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function N0(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new xT;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(l)||(g.add(l),r=LT.bind(null,r,s,l),s.then(r,r))}function I0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function F0(r,s,l,f,g){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ur(-1,1),s.tag=2,Br(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var _T=A.ReactCurrentOwner,Yn=!1;function Un(r,s,l,f){s.child=r===null?t0(s,null,l,f):fo(s,r.child,l,f)}function U0(r,s,l,f,g){l=l.render;var x=s.ref;return po(s,g),f=jf(r,s,l,f,x,g),l=Yf(),r!==null&&!Yn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,fr(r,s,g)):(jt&&l&&Rf(s),s.flags|=1,Un(r,s,f,g),s.child)}function O0(r,s,l,f,g){if(r===null){var x=l.type;return typeof x=="function"&&!Md(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,k0(r,s,x,f,g)):(r=fc(l.type,null,f,s,s.mode,g),r.ref=s.ref,r.return=s,s.child=r)}if(x=r.child,(r.lanes&g)===0){var b=x.memoizedProps;if(l=l.compare,l=l!==null?l:_a,l(b,f)&&r.ref===s.ref)return fr(r,s,g)}return s.flags|=1,r=Xr(x,f),r.ref=s.ref,r.return=s,s.child=r}function k0(r,s,l,f,g){if(r!==null){var x=r.memoizedProps;if(_a(x,f)&&r.ref===s.ref)if(Yn=!1,s.pendingProps=f=x,(r.lanes&g)!==0)(r.flags&131072)!==0&&(Yn=!0);else return s.lanes=r.lanes,fr(r,s,g)}return nd(r,s,l,f,g)}function B0(r,s,l){var f=s.pendingProps,g=f.children,x=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(xo,ii),ii|=l;else{if((l&1073741824)===0)return r=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,kt(xo,ii),ii|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,kt(xo,ii),ii|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,kt(xo,ii),ii|=f;return Un(r,s,g,l),s.child}function V0(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function nd(r,s,l,f,g){var x=jn(l)?gs:Cn.current;return x=ao(s,x),po(s,g),l=jf(r,s,l,f,x,g),f=Yf(),r!==null&&!Yn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~g,fr(r,s,g)):(jt&&f&&Rf(s),s.flags|=1,Un(r,s,l,g),s.child)}function z0(r,s,l,f,g){if(jn(l)){var x=!0;Ul(s)}else x=!1;if(po(s,g),s.stateNode===null)ec(r,s),R0(s,l,f),Jf(s,l,f,g),f=!0;else if(r===null){var b=s.stateNode,B=s.memoizedProps;b.props=B;var G=b.context,de=l.contextType;typeof de=="object"&&de!==null?de=ui(de):(de=jn(l)?gs:Cn.current,de=ao(s,de));var Se=l.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ee||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==f||G!==de)&&P0(s,b,f,de),kr=!1;var ye=s.memoizedState;b.state=ye,Xl(s,f,b,g),G=s.memoizedState,B!==f||ye!==G||Xn.current||kr?(typeof Se=="function"&&(Qf(s,l,Se,f),G=s.memoizedState),(B=kr||C0(s,l,B,f,ye,G,de))?(Ee||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=G),b.props=f,b.state=G,b.context=de,f=B):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{b=s.stateNode,i0(r,s),B=s.memoizedProps,de=s.type===s.elementType?B:Mi(s.type,B),b.props=de,Ee=s.pendingProps,ye=b.context,G=l.contextType,typeof G=="object"&&G!==null?G=ui(G):(G=jn(l)?gs:Cn.current,G=ao(s,G));var ke=l.getDerivedStateFromProps;(Se=typeof ke=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==Ee||ye!==G)&&P0(s,b,f,G),kr=!1,ye=s.memoizedState,b.state=ye,Xl(s,f,b,g);var Ge=s.memoizedState;B!==Ee||ye!==Ge||Xn.current||kr?(typeof ke=="function"&&(Qf(s,l,ke,f),Ge=s.memoizedState),(de=kr||C0(s,l,de,f,ye,Ge,G)||!1)?(Se||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(f,Ge,G),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(f,Ge,G)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Ge),b.props=f,b.state=Ge,b.context=G,f=de):(typeof b.componentDidUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&ye===r.memoizedState||(s.flags|=1024),f=!1)}return id(r,s,l,f,x,g)}function id(r,s,l,f,g,x){V0(r,s);var b=(s.flags&128)!==0;if(!f&&!b)return g&&jg(s,l,!1),fr(r,s,x);f=s.stateNode,_T.current=s;var B=b&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&b?(s.child=fo(s,r.child,null,x),s.child=fo(s,null,B,x)):Un(r,s,B,x),s.memoizedState=f.state,g&&jg(s,l,!0),s.child}function H0(r){var s=r.stateNode;s.pendingContext?Wg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Wg(r,s.context,!1),Vf(r,s.containerInfo)}function G0(r,s,l,f,g){return uo(),Nf(g),s.flags|=256,Un(r,s,l,f),s.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(r){return{baseLanes:r,cachePool:null,transitions:null}}function W0(r,s,l){var f=s.pendingProps,g=qt.current,x=!1,b=(s.flags&128)!==0,B;if((B=b)||(B=r!==null&&r.memoizedState===null?!1:(g&2)!==0),B?(x=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),kt(qt,g&1),r===null)return Lf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=f.children,r=f.fallback,x?(f=s.mode,x=s.child,b={mode:"hidden",children:b},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=dc(b,f,0,null),r=As(r,f,l,null),x.return=s,r.return=s,x.sibling=r,s.child=x,s.child.memoizedState=sd(l),s.memoizedState=rd,r):od(s,b));if(g=r.memoizedState,g!==null&&(B=g.dehydrated,B!==null))return yT(r,s,b,f,B,g,l);if(x){x=f.fallback,b=s.mode,g=r.child,B=g.sibling;var G={mode:"hidden",children:f.children};return(b&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=G,s.deletions=null):(f=Xr(g,G),f.subtreeFlags=g.subtreeFlags&14680064),B!==null?x=Xr(B,x):(x=As(x,b,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,b=r.child.memoizedState,b=b===null?sd(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=r.childLanes&~l,s.memoizedState=rd,f}return x=r.child,r=x.sibling,f=Xr(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function od(r,s){return s=dc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Jl(r,s,l,f){return f!==null&&Nf(f),fo(s,r.child,null,l),r=od(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function yT(r,s,l,f,g,x,b){if(l)return s.flags&256?(s.flags&=-257,f=ed(Error(t(422))),Jl(r,s,b,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(x=f.fallback,g=s.mode,f=dc({mode:"visible",children:f.children},g,0,null),x=As(x,g,b,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&fo(s,r.child,null,b),s.child.memoizedState=sd(b),s.memoizedState=rd,x);if((s.mode&1)===0)return Jl(r,s,b,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var B=f.dgst;return f=B,x=Error(t(419)),f=ed(x,f,void 0),Jl(r,s,b,f)}if(B=(b&r.childLanes)!==0,Yn||B){if(f=vn,f!==null){switch(b&-b){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|b))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,cr(r,g),Ai(f,r,g,-1))}return Ed(),f=ed(Error(t(421))),Jl(r,s,b,f)}return g.data==="$?"?(s.flags|=128,s.child=r.child,s=NT.bind(null,r),g._reactRetry=s,null):(r=x.treeContext,ni=Ir(g.nextSibling),ti=s,jt=!0,Ei=null,r!==null&&(li[ci++]=ar,li[ci++]=lr,li[ci++]=vs,ar=r.id,lr=r.overflow,vs=s),s=od(s,f.children),s.flags|=4096,s)}function X0(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),Of(r.return,s,l)}function ad(r,s,l,f,g){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=g)}function j0(r,s,l){var f=s.pendingProps,g=f.revealOrder,x=f.tail;if(Un(r,s,f.children,l),f=qt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&X0(r,l,s);else if(r.tag===19)X0(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(kt(qt,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)r=l.alternate,r!==null&&jl(r)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),ad(s,!1,g,l,x);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(r=g.alternate,r!==null&&jl(r)===null){s.child=g;break}r=g.sibling,g.sibling=l,l=g,g=r}ad(s,!0,l,null,x);break;case"together":ad(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ec(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function fr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),Es|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Xr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Xr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function ST(r,s,l){switch(s.tag){case 3:H0(s),uo();break;case 5:o0(s);break;case 1:jn(s.type)&&Ul(s);break;case 4:Vf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;kt(Hl,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(kt(qt,qt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?W0(r,s,l):(kt(qt,qt.current&1),r=fr(r,s,l),r!==null?r.sibling:null);kt(qt,qt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(r.flags&128)!==0){if(f)return j0(r,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),kt(qt,qt.current),f)break;return null;case 22:case 23:return s.lanes=0,B0(r,s,l)}return fr(r,s,l)}var Y0,ld,$0,q0;Y0=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ld=function(){},$0=function(r,s,l,f){var g=r.memoizedProps;if(g!==f){r=s.stateNode,ys(zi.current);var x=null;switch(l){case"input":g=wt(r,g),f=wt(r,f),x=[];break;case"select":g=oe({},g,{value:void 0}),f=oe({},f,{value:void 0}),x=[];break;case"textarea":g=Wt(r,g),f=Wt(r,f),x=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Nl)}qe(l,f);var b;l=null;for(de in g)if(!f.hasOwnProperty(de)&&g.hasOwnProperty(de)&&g[de]!=null)if(de==="style"){var B=g[de];for(b in B)B.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?x||(x=[]):(x=x||[]).push(de,null));for(de in f){var G=f[de];if(B=g!=null?g[de]:void 0,f.hasOwnProperty(de)&&G!==B&&(G!=null||B!=null))if(de==="style")if(B){for(b in B)!B.hasOwnProperty(b)||G&&G.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in G)G.hasOwnProperty(b)&&B[b]!==G[b]&&(l||(l={}),l[b]=G[b])}else l||(x||(x=[]),x.push(de,l)),l=G;else de==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,B=B?B.__html:void 0,G!=null&&B!==G&&(x=x||[]).push(de,G)):de==="children"?typeof G!="string"&&typeof G!="number"||(x=x||[]).push(de,""+G):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(G!=null&&de==="onScroll"&&Vt("scroll",r),x||B===G||(x=[])):(x=x||[]).push(de,G))}l&&(x=x||[]).push("style",l);var de=x;(s.updateQueue=de)&&(s.flags|=4)}},q0=function(r,s,l,f){l!==f&&(s.flags|=4)};function Ia(r,s){if(!jt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Pn(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var g=r.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function ET(r,s,l){var f=s.pendingProps;switch(Pf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(s),null;case 1:return jn(s.type)&&Fl(),Pn(s),null;case 3:return f=s.stateNode,mo(),zt(Xn),zt(Cn),Gf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Vl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ei!==null&&(_d(Ei),Ei=null))),ld(r,s),Pn(s),null;case 5:zf(s);var g=ys(Ra.current);if(l=s.type,r!==null&&s.stateNode!=null)$0(r,s,l,f,g),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Pn(s),null}if(r=ys(zi.current),Vl(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[Vi]=s,f[Ta]=x,r=(s.mode&1)!==0,l){case"dialog":Vt("cancel",f),Vt("close",f);break;case"iframe":case"object":case"embed":Vt("load",f);break;case"video":case"audio":for(g=0;g<Sa.length;g++)Vt(Sa[g],f);break;case"source":Vt("error",f);break;case"img":case"image":case"link":Vt("error",f),Vt("load",f);break;case"details":Vt("toggle",f);break;case"input":_t(f,x),Vt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Vt("invalid",f);break;case"textarea":$(f,x),Vt("invalid",f)}qe(l,x),g=null;for(var b in x)if(x.hasOwnProperty(b)){var B=x[b];b==="children"?typeof B=="string"?f.textContent!==B&&(x.suppressHydrationWarning!==!0&&Ll(f.textContent,B,r),g=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(x.suppressHydrationWarning!==!0&&Ll(f.textContent,B,r),g=["children",""+B]):o.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&Vt("scroll",f)}switch(l){case"input":tt(f),Zt(f,x,!0);break;case"textarea":tt(f),Mt(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Nl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{b=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=U(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=b.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=b.createElement(l,{is:f.is}):(r=b.createElement(l),l==="select"&&(b=r,f.multiple?b.multiple=!0:f.size&&(b.size=f.size))):r=b.createElementNS(r,l),r[Vi]=s,r[Ta]=f,Y0(r,s,!1,!1),s.stateNode=r;e:{switch(b=Le(l,f),l){case"dialog":Vt("cancel",r),Vt("close",r),g=f;break;case"iframe":case"object":case"embed":Vt("load",r),g=f;break;case"video":case"audio":for(g=0;g<Sa.length;g++)Vt(Sa[g],r);g=f;break;case"source":Vt("error",r),g=f;break;case"img":case"image":case"link":Vt("error",r),Vt("load",r),g=f;break;case"details":Vt("toggle",r),g=f;break;case"input":_t(r,f),g=wt(r,f),Vt("invalid",r);break;case"option":g=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},g=oe({},f,{value:void 0}),Vt("invalid",r);break;case"textarea":$(r,f),g=Wt(r,f),Vt("invalid",r);break;default:g=f}qe(l,g),B=g;for(x in B)if(B.hasOwnProperty(x)){var G=B[x];x==="style"?ve(r,G):x==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&ae(r,G)):x==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&he(r,G):typeof G=="number"&&he(r,""+G):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?G!=null&&x==="onScroll"&&Vt("scroll",r):G!=null&&L(r,x,G,b))}switch(l){case"input":tt(r),Zt(r,f,!1);break;case"textarea":tt(r),Mt(r);break;case"option":f.value!=null&&r.setAttribute("value",""+me(f.value));break;case"select":r.multiple=!!f.multiple,x=f.value,x!=null?Pt(r,!!f.multiple,x,!1):f.defaultValue!=null&&Pt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Nl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Pn(s),null;case 6:if(r&&s.stateNode!=null)q0(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=ys(Ra.current),ys(zi.current),Vl(s)){if(f=s.stateNode,l=s.memoizedProps,f[Vi]=s,(x=f.nodeValue!==l)&&(r=ti,r!==null))switch(r.tag){case 3:Ll(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ll(f.nodeValue,l,(r.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Vi]=s,s.stateNode=f}return Pn(s),null;case 13:if(zt(qt),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(jt&&ni!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Qg(),uo(),s.flags|=98560,x=!1;else if(x=Vl(s),f!==null&&f.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Vi]=s}else uo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Pn(s),x=!1}else Ei!==null&&(_d(Ei),Ei=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(qt.current&1)!==0?fn===0&&(fn=3):Ed())),s.updateQueue!==null&&(s.flags|=4),Pn(s),null);case 4:return mo(),ld(r,s),r===null&&Ea(s.stateNode.containerInfo),Pn(s),null;case 10:return Uf(s.type._context),Pn(s),null;case 17:return jn(s.type)&&Fl(),Pn(s),null;case 19:if(zt(qt),x=s.memoizedState,x===null)return Pn(s),null;if(f=(s.flags&128)!==0,b=x.rendering,b===null)if(f)Ia(x,!1);else{if(fn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(b=jl(r),b!==null){for(s.flags|=128,Ia(x,!1),f=b.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,r=f,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,r=b.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return kt(qt,qt.current&1|2),s.child}r=r.sibling}x.tail!==null&&$t()>_o&&(s.flags|=128,f=!0,Ia(x,!1),s.lanes=4194304)}else{if(!f)if(r=jl(b),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ia(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!jt)return Pn(s),null}else 2*$t()-x.renderingStartTime>_o&&l!==1073741824&&(s.flags|=128,f=!0,Ia(x,!1),s.lanes=4194304);x.isBackwards?(b.sibling=s.child,s.child=b):(l=x.last,l!==null?l.sibling=b:s.child=b,x.last=b)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=$t(),s.sibling=null,l=qt.current,kt(qt,f?l&1|2:l&1),s):(Pn(s),null);case 22:case 23:return Sd(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ii&1073741824)!==0&&(Pn(s),s.subtreeFlags&6&&(s.flags|=8192)):Pn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function MT(r,s){switch(Pf(s),s.tag){case 1:return jn(s.type)&&Fl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return mo(),zt(Xn),zt(Cn),Gf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return zf(s),null;case 13:if(zt(qt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return zt(qt),null;case 4:return mo(),null;case 10:return Uf(s.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var tc=!1,Dn=!1,TT=typeof WeakSet=="function"?WeakSet:Set,ze=null;function vo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Jt(r,s,f)}else l.current=null}function cd(r,s,l){try{l()}catch(f){Jt(r,s,f)}}var K0=!1;function wT(r,s){if(Sf=Sl,r=Cg(),hf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var b=0,B=-1,G=-1,de=0,Se=0,Ee=r,ye=null;t:for(;;){for(var ke;Ee!==l||g!==0&&Ee.nodeType!==3||(B=b+g),Ee!==x||f!==0&&Ee.nodeType!==3||(G=b+f),Ee.nodeType===3&&(b+=Ee.nodeValue.length),(ke=Ee.firstChild)!==null;)ye=Ee,Ee=ke;for(;;){if(Ee===r)break t;if(ye===l&&++de===g&&(B=b),ye===x&&++Se===f&&(G=b),(ke=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=ke}l=B===-1||G===-1?null:{start:B,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ef={focusedElem:r,selectionRange:l},Sl=!1,ze=s;ze!==null;)if(s=ze,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ze=r;else for(;ze!==null;){s=ze;try{var Ge=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var $e=Ge.memoizedProps,nn=Ge.memoizedState,te=s.stateNode,Y=te.getSnapshotBeforeUpdate(s.elementType===s.type?$e:Mi(s.type,$e),nn);te.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Jt(s,s.return,Te)}if(r=s.sibling,r!==null){r.return=s.return,ze=r;break}ze=s.return}return Ge=K0,K0=!1,Ge}function Fa(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&r)===r){var x=g.destroy;g.destroy=void 0,x!==void 0&&cd(s,l,x)}g=g.next}while(g!==f)}}function nc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function ud(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function Z0(r){var s=r.alternate;s!==null&&(r.alternate=null,Z0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Vi],delete s[Ta],delete s[Af],delete s[aT],delete s[lT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Q0(r){return r.tag===5||r.tag===3||r.tag===4}function J0(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Q0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function fd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Nl));else if(f!==4&&(r=r.child,r!==null))for(fd(r,s,l),r=r.sibling;r!==null;)fd(r,s,l),r=r.sibling}function dd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(dd(r,s,l),r=r.sibling;r!==null;)dd(r,s,l),r=r.sibling}var En=null,Ti=!1;function Vr(r,s,l){for(l=l.child;l!==null;)ev(r,s,l),l=l.sibling}function ev(r,s,l){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ie,l)}catch{}switch(l.tag){case 5:Dn||vo(l,s);case 6:var f=En,g=Ti;En=null,Vr(r,s,l),En=f,Ti=g,En!==null&&(Ti?(r=En,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):En.removeChild(l.stateNode));break;case 18:En!==null&&(Ti?(r=En,l=l.stateNode,r.nodeType===8?wf(r.parentNode,l):r.nodeType===1&&wf(r,l),ha(r)):wf(En,l.stateNode));break;case 4:f=En,g=Ti,En=l.stateNode.containerInfo,Ti=!0,Vr(r,s,l),En=f,Ti=g;break;case 0:case 11:case 14:case 15:if(!Dn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var x=g,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&cd(l,s,b),g=g.next}while(g!==f)}Vr(r,s,l);break;case 1:if(!Dn&&(vo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){Jt(l,s,B)}Vr(r,s,l);break;case 21:Vr(r,s,l);break;case 22:l.mode&1?(Dn=(f=Dn)||l.memoizedState!==null,Vr(r,s,l),Dn=f):Vr(r,s,l);break;default:Vr(r,s,l)}}function tv(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new TT),s.forEach(function(f){var g=IT.bind(null,r,f);l.has(f)||(l.add(f),f.then(g,g))})}}function wi(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var x=r,b=s,B=b;e:for(;B!==null;){switch(B.tag){case 5:En=B.stateNode,Ti=!1;break e;case 3:En=B.stateNode.containerInfo,Ti=!0;break e;case 4:En=B.stateNode.containerInfo,Ti=!0;break e}B=B.return}if(En===null)throw Error(t(160));ev(x,b,g),En=null,Ti=!1;var G=g.alternate;G!==null&&(G.return=null),g.return=null}catch(de){Jt(g,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)nv(s,r),s=s.sibling}function nv(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(wi(s,r),Gi(r),f&4){try{Fa(3,r,r.return),nc(3,r)}catch($e){Jt(r,r.return,$e)}try{Fa(5,r,r.return)}catch($e){Jt(r,r.return,$e)}}break;case 1:wi(s,r),Gi(r),f&512&&l!==null&&vo(l,l.return);break;case 5:if(wi(s,r),Gi(r),f&512&&l!==null&&vo(l,l.return),r.flags&32){var g=r.stateNode;try{he(g,"")}catch($e){Jt(r,r.return,$e)}}if(f&4&&(g=r.stateNode,g!=null)){var x=r.memoizedProps,b=l!==null?l.memoizedProps:x,B=r.type,G=r.updateQueue;if(r.updateQueue=null,G!==null)try{B==="input"&&x.type==="radio"&&x.name!=null&&gt(g,x),Le(B,b);var de=Le(B,x);for(b=0;b<G.length;b+=2){var Se=G[b],Ee=G[b+1];Se==="style"?ve(g,Ee):Se==="dangerouslySetInnerHTML"?ae(g,Ee):Se==="children"?he(g,Ee):L(g,Se,Ee,de)}switch(B){case"input":Gt(g,x);break;case"textarea":yn(g,x);break;case"select":var ye=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var ke=x.value;ke!=null?Pt(g,!!x.multiple,ke,!1):ye!==!!x.multiple&&(x.defaultValue!=null?Pt(g,!!x.multiple,x.defaultValue,!0):Pt(g,!!x.multiple,x.multiple?[]:"",!1))}g[Ta]=x}catch($e){Jt(r,r.return,$e)}}break;case 6:if(wi(s,r),Gi(r),f&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,x=r.memoizedProps;try{g.nodeValue=x}catch($e){Jt(r,r.return,$e)}}break;case 3:if(wi(s,r),Gi(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ha(s.containerInfo)}catch($e){Jt(r,r.return,$e)}break;case 4:wi(s,r),Gi(r);break;case 13:wi(s,r),Gi(r),g=r.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(md=$t())),f&4&&tv(r);break;case 22:if(Se=l!==null&&l.memoizedState!==null,r.mode&1?(Dn=(de=Dn)||Se,wi(s,r),Dn=de):wi(s,r),Gi(r),f&8192){if(de=r.memoizedState!==null,(r.stateNode.isHidden=de)&&!Se&&(r.mode&1)!==0)for(ze=r,Se=r.child;Se!==null;){for(Ee=ze=Se;ze!==null;){switch(ye=ze,ke=ye.child,ye.tag){case 0:case 11:case 14:case 15:Fa(4,ye,ye.return);break;case 1:vo(ye,ye.return);var Ge=ye.stateNode;if(typeof Ge.componentWillUnmount=="function"){f=ye,l=ye.return;try{s=f,Ge.props=s.memoizedProps,Ge.state=s.memoizedState,Ge.componentWillUnmount()}catch($e){Jt(f,l,$e)}}break;case 5:vo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){sv(Ee);continue}}ke!==null?(ke.return=ye,ze=ke):sv(Ee)}Se=Se.sibling}e:for(Se=null,Ee=r;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{g=Ee.stateNode,de?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(B=Ee.stateNode,G=Ee.memoizedProps.style,b=G!=null&&G.hasOwnProperty("display")?G.display:null,B.style.display=pe("display",b))}catch($e){Jt(r,r.return,$e)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=de?"":Ee.memoizedProps}catch($e){Jt(r,r.return,$e)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===r)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===r)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===r)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:wi(s,r),Gi(r),f&4&&tv(r);break;case 21:break;default:wi(s,r),Gi(r)}}function Gi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(Q0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(he(g,""),f.flags&=-33);var x=J0(r);dd(r,x,g);break;case 3:case 4:var b=f.stateNode.containerInfo,B=J0(r);fd(r,B,b);break;default:throw Error(t(161))}}catch(G){Jt(r,r.return,G)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function AT(r,s,l){ze=r,iv(r)}function iv(r,s,l){for(var f=(r.mode&1)!==0;ze!==null;){var g=ze,x=g.child;if(g.tag===22&&f){var b=g.memoizedState!==null||tc;if(!b){var B=g.alternate,G=B!==null&&B.memoizedState!==null||Dn;B=tc;var de=Dn;if(tc=b,(Dn=G)&&!de)for(ze=g;ze!==null;)b=ze,G=b.child,b.tag===22&&b.memoizedState!==null?ov(g):G!==null?(G.return=b,ze=G):ov(g);for(;x!==null;)ze=x,iv(x),x=x.sibling;ze=g,tc=B,Dn=de}rv(r)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,ze=x):rv(r)}}function rv(r){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Dn||nc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Dn)if(l===null)f.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Mi(s.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&s0(s,x,f);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}s0(s,b,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var G=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var Se=de.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&ha(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||s.flags&512&&ud(s)}catch(ye){Jt(s,s.return,ye)}}if(s===r){ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,ze=l;break}ze=s.return}}function sv(r){for(;ze!==null;){var s=ze;if(s===r){ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ze=l;break}ze=s.return}}function ov(r){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{nc(4,s)}catch(G){Jt(s,l,G)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(G){Jt(s,g,G)}}var x=s.return;try{ud(s)}catch(G){Jt(s,x,G)}break;case 5:var b=s.return;try{ud(s)}catch(G){Jt(s,b,G)}}}catch(G){Jt(s,s.return,G)}if(s===r){ze=null;break}var B=s.sibling;if(B!==null){B.return=s.return,ze=B;break}ze=s.return}}var bT=Math.ceil,ic=A.ReactCurrentDispatcher,hd=A.ReactCurrentOwner,di=A.ReactCurrentBatchConfig,St=0,vn=null,on=null,Mn=0,ii=0,xo=Fr(0),fn=0,Ua=null,Es=0,rc=0,pd=0,Oa=null,$n=null,md=0,_o=1/0,dr=null,sc=!1,gd=null,zr=null,oc=!1,Hr=null,ac=0,ka=0,vd=null,lc=-1,cc=0;function On(){return(St&6)!==0?$t():lc!==-1?lc:lc=$t()}function Gr(r){return(r.mode&1)===0?1:(St&2)!==0&&Mn!==0?Mn&-Mn:uT.transition!==null?(cc===0&&(cc=Oe()),cc):(r=pt,r!==0||(r=window.event,r=r===void 0?16:lg(r.type)),r)}function Ai(r,s,l,f){if(50<ka)throw ka=0,vd=null,Error(t(185));ht(r,l,f),((St&2)===0||r!==vn)&&(r===vn&&((St&2)===0&&(rc|=l),fn===4&&Wr(r,Mn)),qn(r,f),l===1&&St===0&&(s.mode&1)===0&&(_o=$t()+500,Ol&&Or()))}function qn(r,s){var l=r.callbackNode;Dt(r,s);var f=Ot(r,r===vn?Mn:0);if(f===0)l!==null&&aa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&aa(l),s===1)r.tag===0?cT(lv.bind(null,r)):Yg(lv.bind(null,r)),sT(function(){(St&6)===0&&Or()}),l=null;else{switch(rr(f)){case 1:l=la;break;case 4:l=C;break;case 16:l=q;break;case 536870912:l=re;break;default:l=q}l=gv(l,av.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function av(r,s){if(lc=-1,cc=0,(St&6)!==0)throw Error(t(327));var l=r.callbackNode;if(yo()&&r.callbackNode!==l)return null;var f=Ot(r,r===vn?Mn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||s)s=uc(r,f);else{s=f;var g=St;St|=2;var x=uv();(vn!==r||Mn!==s)&&(dr=null,_o=$t()+500,Ts(r,s));do try{PT();break}catch(B){cv(r,B)}while(!0);Ff(),ic.current=x,St=g,on!==null?s=0:(vn=null,Mn=0,s=fn)}if(s!==0){if(s===2&&(g=sn(r),g!==0&&(f=g,s=xd(r,g))),s===1)throw l=Ua,Ts(r,0),Wr(r,f),qn(r,$t()),l;if(s===6)Wr(r,f);else{if(g=r.current.alternate,(f&30)===0&&!CT(g)&&(s=uc(r,f),s===2&&(x=sn(r),x!==0&&(f=x,s=xd(r,x))),s===1))throw l=Ua,Ts(r,0),Wr(r,f),qn(r,$t()),l;switch(r.finishedWork=g,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ws(r,$n,dr);break;case 3:if(Wr(r,f),(f&130023424)===f&&(s=md+500-$t(),10<s)){if(Ot(r,0)!==0)break;if(g=r.suspendedLanes,(g&f)!==f){On(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=Tf(ws.bind(null,r,$n,dr),s);break}ws(r,$n,dr);break;case 4:if(Wr(r,f),(f&4194240)===f)break;for(s=r.eventTimes,g=-1;0<f;){var b=31-we(f);x=1<<b,b=s[b],b>g&&(g=b),f&=~x}if(f=g,f=$t()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*bT(f/1960))-f,10<f){r.timeoutHandle=Tf(ws.bind(null,r,$n,dr),f);break}ws(r,$n,dr);break;case 5:ws(r,$n,dr);break;default:throw Error(t(329))}}}return qn(r,$t()),r.callbackNode===l?av.bind(null,r):null}function xd(r,s){var l=Oa;return r.current.memoizedState.isDehydrated&&(Ts(r,s).flags|=256),r=uc(r,s),r!==2&&(s=$n,$n=l,s!==null&&_d(s)),r}function _d(r){$n===null?$n=r:$n.push.apply($n,r)}function CT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],x=g.getSnapshot;g=g.value;try{if(!Si(x(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Wr(r,s){for(s&=~pd,s&=~rc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-we(s),f=1<<l;r[l]=-1,s&=~f}}function lv(r){if((St&6)!==0)throw Error(t(327));yo();var s=Ot(r,0);if((s&1)===0)return qn(r,$t()),null;var l=uc(r,s);if(r.tag!==0&&l===2){var f=sn(r);f!==0&&(s=f,l=xd(r,f))}if(l===1)throw l=Ua,Ts(r,0),Wr(r,s),qn(r,$t()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ws(r,$n,dr),qn(r,$t()),null}function yd(r,s){var l=St;St|=1;try{return r(s)}finally{St=l,St===0&&(_o=$t()+500,Ol&&Or())}}function Ms(r){Hr!==null&&Hr.tag===0&&(St&6)===0&&yo();var s=St;St|=1;var l=di.transition,f=pt;try{if(di.transition=null,pt=1,r)return r()}finally{pt=f,di.transition=l,St=s,(St&6)===0&&Or()}}function Sd(){ii=xo.current,zt(xo)}function Ts(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,rT(l)),on!==null)for(l=on.return;l!==null;){var f=l;switch(Pf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Fl();break;case 3:mo(),zt(Xn),zt(Cn),Gf();break;case 5:zf(f);break;case 4:mo();break;case 13:zt(qt);break;case 19:zt(qt);break;case 10:Uf(f.type._context);break;case 22:case 23:Sd()}l=l.return}if(vn=r,on=r=Xr(r.current,null),Mn=ii=s,fn=0,Ua=null,pd=rc=Es=0,$n=Oa=null,_s!==null){for(s=0;s<_s.length;s++)if(l=_s[s],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,x=l.pending;if(x!==null){var b=x.next;x.next=g,f.next=b}l.pending=f}_s=null}return r}function cv(r,s){do{var l=on;try{if(Ff(),Yl.current=Zl,$l){for(var f=Kt.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}$l=!1}if(Ss=0,gn=un=Kt=null,Pa=!1,Da=0,hd.current=null,l===null||l.return===null){fn=1,Ua=s,on=null;break}e:{var x=r,b=l.return,B=l,G=s;if(s=Mn,B.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=G,Se=B,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ke=I0(b);if(ke!==null){ke.flags&=-257,F0(ke,b,B,x,s),ke.mode&1&&N0(x,de,s),s=ke,G=de;var Ge=s.updateQueue;if(Ge===null){var $e=new Set;$e.add(G),s.updateQueue=$e}else Ge.add(G);break e}else{if((s&1)===0){N0(x,de,s),Ed();break e}G=Error(t(426))}}else if(jt&&B.mode&1){var nn=I0(b);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),F0(nn,b,B,x,s),Nf(go(G,B));break e}}x=G=go(G,B),fn!==4&&(fn=2),Oa===null?Oa=[x]:Oa.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var te=D0(x,G,s);r0(x,te);break e;case 1:B=G;var Y=x.type,se=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(zr===null||!zr.has(se)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=L0(x,B,s);r0(x,Te);break e}}x=x.return}while(x!==null)}dv(l)}catch(Ze){s=Ze,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function uv(){var r=ic.current;return ic.current=Zl,r===null?Zl:r}function Ed(){(fn===0||fn===3||fn===2)&&(fn=4),vn===null||(Es&268435455)===0&&(rc&268435455)===0||Wr(vn,Mn)}function uc(r,s){var l=St;St|=2;var f=uv();(vn!==r||Mn!==s)&&(dr=null,Ts(r,s));do try{RT();break}catch(g){cv(r,g)}while(!0);if(Ff(),St=l,ic.current=f,on!==null)throw Error(t(261));return vn=null,Mn=0,fn}function RT(){for(;on!==null;)fv(on)}function PT(){for(;on!==null&&!_l();)fv(on)}function fv(r){var s=mv(r.alternate,r,ii);r.memoizedProps=r.pendingProps,s===null?dv(r):on=s,hd.current=null}function dv(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=ET(l,s,ii),l!==null){on=l;return}}else{if(l=MT(l,s),l!==null){l.flags&=32767,on=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{fn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=r}while(s!==null);fn===0&&(fn=5)}function ws(r,s,l){var f=pt,g=di.transition;try{di.transition=null,pt=1,DT(r,s,l,f)}finally{di.transition=g,pt=f}return null}function DT(r,s,l,f){do yo();while(Hr!==null);if((St&6)!==0)throw Error(t(327));l=r.finishedWork;var g=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=l.lanes|l.childLanes;if(Gn(r,x),r===vn&&(on=vn=null,Mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||oc||(oc=!0,gv(q,function(){return yo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=di.transition,di.transition=null;var b=pt;pt=1;var B=St;St|=4,hd.current=null,wT(r,l),nv(l,r),ZM(Ef),Sl=!!Sf,Ef=Sf=null,r.current=l,AT(l),Ju(),St=B,pt=b,di.transition=x}else r.current=l;if(oc&&(oc=!1,Hr=r,ac=g),x=r.pendingLanes,x===0&&(zr=null),Be(l.stateNode),qn(r,$t()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)g=s[l],f(g.value,{componentStack:g.stack,digest:g.digest});if(sc)throw sc=!1,r=gd,gd=null,r;return(ac&1)!==0&&r.tag!==0&&yo(),x=r.pendingLanes,(x&1)!==0?r===vd?ka++:(ka=0,vd=r):ka=0,Or(),null}function yo(){if(Hr!==null){var r=rr(ac),s=di.transition,l=pt;try{if(di.transition=null,pt=16>r?16:r,Hr===null)var f=!1;else{if(r=Hr,Hr=null,ac=0,(St&6)!==0)throw Error(t(331));var g=St;for(St|=4,ze=r.current;ze!==null;){var x=ze,b=x.child;if((ze.flags&16)!==0){var B=x.deletions;if(B!==null){for(var G=0;G<B.length;G++){var de=B[G];for(ze=de;ze!==null;){var Se=ze;switch(Se.tag){case 0:case 11:case 15:Fa(8,Se,x)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,ze=Ee;else for(;ze!==null;){Se=ze;var ye=Se.sibling,ke=Se.return;if(Z0(Se),Se===de){ze=null;break}if(ye!==null){ye.return=ke,ze=ye;break}ze=ke}}}var Ge=x.alternate;if(Ge!==null){var $e=Ge.child;if($e!==null){Ge.child=null;do{var nn=$e.sibling;$e.sibling=null,$e=nn}while($e!==null)}}ze=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,ze=b;else e:for(;ze!==null;){if(x=ze,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Fa(9,x,x.return)}var te=x.sibling;if(te!==null){te.return=x.return,ze=te;break e}ze=x.return}}var Y=r.current;for(ze=Y;ze!==null;){b=ze;var se=b.child;if((b.subtreeFlags&2064)!==0&&se!==null)se.return=b,ze=se;else e:for(b=Y;ze!==null;){if(B=ze,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:nc(9,B)}}catch(Ze){Jt(B,B.return,Ze)}if(B===b){ze=null;break e}var Te=B.sibling;if(Te!==null){Te.return=B.return,ze=Te;break e}ze=B.return}}if(St=g,Or(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ie,r)}catch{}f=!0}return f}finally{pt=l,di.transition=s}}return!1}function hv(r,s,l){s=go(l,s),s=D0(r,s,1),r=Br(r,s,1),s=On(),r!==null&&(ht(r,1,s),qn(r,s))}function Jt(r,s,l){if(r.tag===3)hv(r,r,l);else for(;s!==null;){if(s.tag===3){hv(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(zr===null||!zr.has(f))){r=go(l,r),r=L0(s,r,1),s=Br(s,r,1),r=On(),s!==null&&(ht(s,1,r),qn(s,r));break}}s=s.return}}function LT(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=On(),r.pingedLanes|=r.suspendedLanes&l,vn===r&&(Mn&l)===l&&(fn===4||fn===3&&(Mn&130023424)===Mn&&500>$t()-md?Ts(r,0):pd|=l),qn(r,s)}function pv(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=On();r=cr(r,s),r!==null&&(ht(r,s,l),qn(r,l))}function NT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),pv(r,l)}function IT(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,g=r.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),pv(r,l)}var mv;mv=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xn.current)Yn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return Yn=!1,ST(r,s,l);Yn=(r.flags&131072)!==0}else Yn=!1,jt&&(s.flags&1048576)!==0&&$g(s,Bl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;ec(r,s),r=s.pendingProps;var g=ao(s,Cn.current);po(s,l),g=jf(null,s,f,r,g,l);var x=Yf();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,jn(f)?(x=!0,Ul(s)):x=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Bf(s),g.updater=Ql,s.stateNode=g,g._reactInternals=s,Jf(s,f,r,l),s=id(null,s,f,!0,x,l)):(s.tag=0,jt&&x&&Rf(s),Un(null,s,g,l),s=s.child),s;case 16:f=s.elementType;e:{switch(ec(r,s),r=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=UT(f),r=Mi(f,r),g){case 0:s=nd(null,s,f,r,l);break e;case 1:s=z0(null,s,f,r,l);break e;case 11:s=U0(null,s,f,r,l);break e;case 14:s=O0(null,s,f,Mi(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),nd(r,s,f,g,l);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),z0(r,s,f,g,l);case 3:e:{if(H0(s),r===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,g=x.element,i0(r,s),Xl(s,f,null,l);var b=s.memoizedState;if(f=b.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){g=go(Error(t(423)),s),s=G0(r,s,f,l,g);break e}else if(f!==g){g=go(Error(t(424)),s),s=G0(r,s,f,l,g);break e}else for(ni=Ir(s.stateNode.containerInfo.firstChild),ti=s,jt=!0,Ei=null,l=t0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(uo(),f===g){s=fr(r,s,l);break e}Un(r,s,f,l)}s=s.child}return s;case 5:return o0(s),r===null&&Lf(s),f=s.type,g=s.pendingProps,x=r!==null?r.memoizedProps:null,b=g.children,Mf(f,g)?b=null:x!==null&&Mf(f,x)&&(s.flags|=32),V0(r,s),Un(r,s,b,l),s.child;case 6:return r===null&&Lf(s),null;case 13:return W0(r,s,l);case 4:return Vf(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=fo(s,null,f,l):Un(r,s,f,l),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),U0(r,s,f,g,l);case 7:return Un(r,s,s.pendingProps,l),s.child;case 8:return Un(r,s,s.pendingProps.children,l),s.child;case 12:return Un(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,x=s.memoizedProps,b=g.value,kt(Hl,f._currentValue),f._currentValue=b,x!==null)if(Si(x.value,b)){if(x.children===g.children&&!Xn.current){s=fr(r,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var B=x.dependencies;if(B!==null){b=x.child;for(var G=B.firstContext;G!==null;){if(G.context===f){if(x.tag===1){G=ur(-1,l&-l),G.tag=2;var de=x.updateQueue;if(de!==null){de=de.shared;var Se=de.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),de.pending=G}}x.lanes|=l,G=x.alternate,G!==null&&(G.lanes|=l),Of(x.return,l,s),B.lanes|=l;break}G=G.next}}else if(x.tag===10)b=x.type===s.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=l,B=b.alternate,B!==null&&(B.lanes|=l),Of(b,l,s),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===s){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}Un(r,s,g.children,l),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,po(s,l),g=ui(g),f=f(g),s.flags|=1,Un(r,s,f,l),s.child;case 14:return f=s.type,g=Mi(f,s.pendingProps),g=Mi(f.type,g),O0(r,s,f,g,l);case 15:return k0(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Mi(f,g),ec(r,s),s.tag=1,jn(f)?(r=!0,Ul(s)):r=!1,po(s,l),R0(s,f,g),Jf(s,f,g,l),id(null,s,f,!0,r,l);case 19:return j0(r,s,l);case 22:return B0(r,s,l)}throw Error(t(156,s.tag))};function gv(r,s){return hs(r,s)}function FT(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(r,s,l,f){return new FT(r,s,l,f)}function Md(r){return r=r.prototype,!(!r||!r.isReactComponent)}function UT(r){if(typeof r=="function")return Md(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===K)return 14}return 2}function Xr(r,s){var l=r.alternate;return l===null?(l=hi(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function fc(r,s,l,f,g,x){var b=2;if(f=r,typeof r=="function")Md(r)&&(b=1);else if(typeof r=="string")b=5;else e:switch(r){case F:return As(l.children,g,x,s);case T:b=8,g|=8;break;case N:return r=hi(12,l,s,g|2),r.elementType=N,r.lanes=x,r;case H:return r=hi(13,l,s,g),r.elementType=H,r.lanes=x,r;case ee:return r=hi(19,l,s,g),r.elementType=ee,r.lanes=x,r;case Z:return dc(l,g,x,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:b=10;break e;case V:b=9;break e;case j:b=11;break e;case K:b=14;break e;case ue:b=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=hi(b,l,s,g),s.elementType=r,s.type=f,s.lanes=x,s}function As(r,s,l,f){return r=hi(7,r,f,s),r.lanes=l,r}function dc(r,s,l,f){return r=hi(22,r,f,s),r.elementType=Z,r.lanes=l,r.stateNode={isHidden:!1},r}function Td(r,s,l){return r=hi(6,r,null,s),r.lanes=l,r}function wd(r,s,l){return s=hi(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function OT(r,s,l,f,g){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Ad(r,s,l,f,g,x,b,B,G){return r=new OT(r,s,l,B,G),s===1?(s=1,x===!0&&(s|=8)):s=0,x=hi(3,null,null,s),r.current=x,x.stateNode=r,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bf(x),r}function kT(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function vv(r){if(!r)return Ur;r=r._reactInternals;e:{if(Fn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(jn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(jn(l))return Xg(r,l,s)}return s}function xv(r,s,l,f,g,x,b,B,G){return r=Ad(l,f,!0,r,g,x,b,B,G),r.context=vv(null),l=r.current,f=On(),g=Gr(l),x=ur(f,g),x.callback=s??null,Br(l,x,g),r.current.lanes=g,ht(r,g,f),qn(r,f),r}function hc(r,s,l,f){var g=s.current,x=On(),b=Gr(g);return l=vv(l),s.context===null?s.context=l:s.pendingContext=l,s=ur(x,b),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=Br(g,s,b),r!==null&&(Ai(r,g,b,x),Wl(r,g,b)),b}function pc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function _v(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function bd(r,s){_v(r,s),(r=r.alternate)&&_v(r,s)}function BT(){return null}var yv=typeof reportError=="function"?reportError:function(r){console.error(r)};function Cd(r){this._internalRoot=r}mc.prototype.render=Cd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));hc(r,s,null,null)},mc.prototype.unmount=Cd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Ms(function(){hc(null,r,null,null)}),s[sr]=null}};function mc(r){this._internalRoot=r}mc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Lt();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Dr.length&&s!==0&&s<Dr[l].priority;l++);Dr.splice(l,0,r),l===0&&og(r)}};function Rd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function gc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Sv(){}function VT(r,s,l,f,g){if(g){if(typeof f=="function"){var x=f;f=function(){var de=pc(b);x.call(de)}}var b=xv(s,f,r,0,null,!1,!1,"",Sv);return r._reactRootContainer=b,r[sr]=b.current,Ea(r.nodeType===8?r.parentNode:r),Ms(),b}for(;g=r.lastChild;)r.removeChild(g);if(typeof f=="function"){var B=f;f=function(){var de=pc(G);B.call(de)}}var G=Ad(r,0,!1,null,null,!1,!1,"",Sv);return r._reactRootContainer=G,r[sr]=G.current,Ea(r.nodeType===8?r.parentNode:r),Ms(function(){hc(s,G,l,f)}),G}function vc(r,s,l,f,g){var x=l._reactRootContainer;if(x){var b=x;if(typeof g=="function"){var B=g;g=function(){var G=pc(b);B.call(G)}}hc(s,b,r,g)}else b=VT(l,s,r,g,f);return pc(b)}Rt=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=yt(s.pendingLanes);l!==0&&(Wn(s,l|1),qn(s,$t()),(St&6)===0&&(_o=$t()+500,Or()))}break;case 13:Ms(function(){var f=cr(r,1);if(f!==null){var g=On();Ai(f,r,1,g)}}),bd(r,1)}},Bt=function(r){if(r.tag===13){var s=cr(r,134217728);if(s!==null){var l=On();Ai(s,r,134217728,l)}bd(r,134217728)}},_i=function(r){if(r.tag===13){var s=Gr(r),l=cr(r,s);if(l!==null){var f=On();Ai(l,r,s,f)}bd(r,s)}},Lt=function(){return pt},yi=function(r,s){var l=pt;try{return pt=r,s()}finally{pt=l}},nt=function(r,s,l){switch(s){case"input":if(Gt(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var g=Il(f);if(!g)throw Error(t(90));Ht(f),Gt(f,g)}}}break;case"textarea":yn(r,l);break;case"select":s=l.value,s!=null&&Pt(r,!!l.multiple,s,!1)}},Ne=yd,_e=Ms;var zT={usingClientEntryPoint:!1,Events:[wa,so,Il,ge,Pe,yd]},Ba={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HT={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ds(r),r===null?null:r.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||BT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{ie=xc.inject(HT),Ae=xc}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zT,Kn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(s))throw Error(t(200));return kT(r,s,null,l)},Kn.createRoot=function(r,s){if(!Rd(r))throw Error(t(299));var l=!1,f="",g=yv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Ad(r,1,!1,null,null,l,!1,f,g),r[sr]=s.current,Ea(r.nodeType===8?r.parentNode:r),new Cd(s)},Kn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ds(s),r=r===null?null:r.stateNode,r},Kn.flushSync=function(r){return Ms(r)},Kn.hydrate=function(r,s,l){if(!gc(s))throw Error(t(200));return vc(null,r,s,!0,l)},Kn.hydrateRoot=function(r,s,l){if(!Rd(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,x="",b=yv;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=xv(s,null,r,1,l??null,g,!1,x,b),r[sr]=s.current,Ea(r),f)for(r=0;r<f.length;r++)l=f[r],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new mc(s)},Kn.render=function(r,s,l){if(!gc(s))throw Error(t(200));return vc(null,r,s,!1,l)},Kn.unmountComponentAtNode=function(r){if(!gc(r))throw Error(t(40));return r._reactRootContainer?(Ms(function(){vc(null,null,r,!1,function(){r._reactRootContainer=null,r[sr]=null})}),!0):!1},Kn.unstable_batchedUpdates=yd,Kn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!gc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return vc(r,s,l,!1,f)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var Rv;function uy(){if(Rv)return Ld.exports;Rv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ld.exports=KT(),Ld.exports}var Pv;function ZT(){if(Pv)return _c;Pv=1;var n=uy();return _c.createRoot=n.createRoot,_c.hydrateRoot=n.hydrateRoot,_c}var QT=ZT(),z=lm();const JT=cy(z),ew=WT({__proto__:null,default:JT},[z]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),Dv=n=>{const e=nw(n);return e.charAt(0).toUpperCase()+e.slice(1)},fy=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=z.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...u},d)=>z.createElement("svg",{ref:d,...iw,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:fy("lucide",o),...u},[...c.map(([h,p])=>z.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=(n,e)=>{const t=z.forwardRef(({className:i,...o},a)=>z.createElement(rw,{ref:a,iconNode:e,className:fy(`lucide-${tw(Dv(n))}`,`lucide-${n}`,i),...o}));return t.displayName=Dv(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],xu=Ys("arrow-up-right",sw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],aw=Ys("download",ow);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Fd=Ys("github",lw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],uw=Ys("linkedin",cw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],dw=Ys("mail",fw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],pw=Ys("play",hw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gw=Ys("x",mw),cm=z.createContext({});function um(n){const e=z.useRef(null);return e.current===null&&(e.current=n()),e.current}const vw=typeof window<"u",fm=vw?z.useLayoutEffect:z.useEffect,Bu=z.createContext(null);function dm(n,e){n.indexOf(e)===-1&&n.push(e)}function _u(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const tr=(n,e,t)=>t>e?e:t<n?n:t;let Vu=()=>{};const ss={},dy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),hy=n=>typeof n=="object"&&n!==null,py=n=>/^0[^.\s]+$/u.test(n);function my(n){let e;return()=>(e===void 0&&(e=n()),e)}const xi=n=>n,ll=(...n)=>n.reduce((e,t)=>i=>t(e(i))),nl=(n,e,t)=>{const i=e-n;return i?(t-n)/i:1};class hm{constructor(){this.subscriptions=[]}add(e){return dm(this.subscriptions,e),()=>_u(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const oi=n=>n*1e3,vi=n=>n/1e3,gy=(n,e)=>e?n*(1e3/e):0,vy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,xw=1e-7,_w=12;function yw(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=vy(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>xw&&++u<_w);return c}function cl(n,e,t,i){if(n===e&&t===i)return xi;const o=a=>yw(a,0,1,n,t);return a=>a===0||a===1?a:vy(o(a),e,i)}const xy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,_y=n=>e=>1-n(1-e),yy=cl(.33,1.53,.69,.99),pm=_y(yy),Sy=xy(pm),Ey=n=>n>=1?1:(n*=2)<1?.5*pm(n):.5*(2-Math.pow(2,-10*(n-1))),mm=n=>1-Math.sin(Math.acos(n)),My=_y(mm),Ty=xy(mm),Sw=cl(.42,0,1,1),Ew=cl(0,0,.58,1),wy=cl(.42,0,.58,1),Mw=n=>Array.isArray(n)&&typeof n[0]!="number",Ay=n=>Array.isArray(n)&&typeof n[0]=="number",Tw={linear:xi,easeIn:Sw,easeInOut:wy,easeOut:Ew,circIn:mm,circInOut:Ty,circOut:My,backIn:pm,backInOut:Sy,backOut:yy,anticipate:Ey},ww=n=>typeof n=="string",Lv=n=>{if(Ay(n)){Vu(n.length===4);const[e,t,i,o]=n;return cl(e,t,i,o)}else if(ww(n))return Tw[n];return n},yc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Aw(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,p=!1,v=!1)=>{const _=v&&i?e:t;return p&&a.add(h),_.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,i){o=!0;return}i=!0;const p=e;e=t,t=p,e.forEach(u),e.clear(),i=!1,o&&(o=!1,d.process(h))}};return d}const bw=40;function by(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=yc.reduce((L,A)=>(L[A]=Aw(a),L),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:v,preRender:m,render:_,postRender:E}=c,M=()=>{const L=ss.useManualTiming,A=L?o.timestamp:performance.now();t=!1,L||(o.delta=i?1e3/60:Math.max(Math.min(A-o.timestamp,bw),1)),o.timestamp=A,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),v.process(o),m.process(o),_.process(o),E.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(M))},y=()=>{t=!0,i=!0,o.isProcessing||n(M)};return{schedule:yc.reduce((L,A)=>{const P=c[A];return L[A]=(I,F=!1,T=!1)=>(t||y(),P.schedule(I,F,T)),L},{}),cancel:L=>{for(let A=0;A<yc.length;A++)c[yc[A]].cancel(L)},state:o,steps:c}}const{schedule:Ut,cancel:os,state:Tn,steps:Ud}=by(typeof requestAnimationFrame<"u"?requestAnimationFrame:xi,!0);let nu;function Cw(){nu=void 0}const Vn={now:()=>(nu===void 0&&Vn.set(Tn.isProcessing||ss.useManualTiming?Tn.timestamp:performance.now()),nu),set:n=>{nu=n,queueMicrotask(Cw)}},Cy=n=>e=>typeof e=="string"&&e.startsWith(n),Ry=Cy("--"),Rw=Cy("var(--"),gm=n=>Rw(n)?Pw.test(n.split("/*")[0].trim()):!1,Pw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Nv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const ea={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},il={...ea,transform:n=>tr(0,1,n)},Sc={...ea,default:1},Qa=n=>Math.round(n*1e5)/1e5,vm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Dw(n){return n==null}const Lw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xm=(n,e)=>t=>!!(typeof t=="string"&&Lw.test(t)&&t.startsWith(n)||e&&!Dw(t)&&Object.prototype.hasOwnProperty.call(t,e)),Py=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(vm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},Nw=n=>tr(0,255,n),Od={...ea,transform:n=>Math.round(Nw(n))},Us={test:xm("rgb","red"),parse:Py("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Od.transform(n)+", "+Od.transform(e)+", "+Od.transform(t)+", "+Qa(il.transform(i))+")"};function Iw(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Vh={test:xm("#"),parse:Iw,transform:Us.transform},ul=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),xr=ul("deg"),Qi=ul("%"),We=ul("px"),Fw=ul("vh"),Uw=ul("vw"),Iv={...Qi,parse:n=>Qi.parse(n)/100,transform:n=>Qi.transform(n*100)},Vo={test:xm("hsl","hue"),parse:Py("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Qi.transform(Qa(e))+", "+Qi.transform(Qa(t))+", "+Qa(il.transform(i))+")"},cn={test:n=>Us.test(n)||Vh.test(n)||Vo.test(n),parse:n=>Us.test(n)?Us.parse(n):Vo.test(n)?Vo.parse(n):Vh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Us.transform(n):Vo.transform(n),getAnimatableNone:n=>{const e=cn.parse(n);return e.alpha=0,cn.transform(e)}},Ow=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function kw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(vm))==null?void 0:e.length)||0)+(((t=n.match(Ow))==null?void 0:t.length)||0)>0}const Dy="number",Ly="color",Bw="var",Vw="var(",Fv="${}",zw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $o(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(zw,d=>(cn.test(d)?(i.color.push(a),o.push(Ly),t.push(cn.parse(d))):d.startsWith(Vw)?(i.var.push(a),o.push(Bw),t.push(d)):(i.number.push(a),o.push(Dy),t.push(parseFloat(d))),++a,Fv)).split(Fv);return{values:t,split:u,indexes:i,types:o}}function Hw(n){return $o(n).values}function Ny({split:n,types:e}){const t=n.length;return i=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],i[a]!==void 0){const c=e[a];c===Dy?o+=Qa(i[a]):c===Ly?o+=cn.transform(i[a]):o+=i[a]}return o}}function Gw(n){return Ny($o(n))}const Ww=n=>typeof n=="number"?0:cn.test(n)?cn.getAnimatableNone(n):n,Xw=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:Ww(n);function jw(n){const e=$o(n);return Ny(e)(e.values.map((i,o)=>Xw(i,e.split[o])))}const Fi={test:kw,parse:Hw,createTransformer:Gw,getAnimatableNone:jw};function kd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Yw({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=kd(d,u,n+1/3),a=kd(d,u,n),c=kd(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function yu(n,e){return t=>t>0?e:n}const Ft=(n,e,t)=>n+(e-n)*t,Bd=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},$w=[Vh,Us,Vo],qw=n=>$w.find(e=>e.test(n));function Uv(n){const e=qw(n);if(!e)return!1;let t=e.parse(n);return e===Vo&&(t=Yw(t)),t}const Ov=(n,e)=>{const t=Uv(n),i=Uv(e);if(!t||!i)return yu(n,e);const o={...t};return a=>(o.red=Bd(t.red,i.red,a),o.green=Bd(t.green,i.green,a),o.blue=Bd(t.blue,i.blue,a),o.alpha=Ft(t.alpha,i.alpha,a),Us.transform(o))},zh=new Set(["none","hidden"]);function Kw(n,e){return zh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function Zw(n,e){return t=>Ft(n,e,t)}function _m(n){return typeof n=="number"?Zw:typeof n=="string"?gm(n)?yu:cn.test(n)?Ov:e1:Array.isArray(n)?Iy:typeof n=="object"?cn.test(n)?Ov:Qw:yu}function Iy(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>_m(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function Qw(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=_m(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function Jw(n,e){const t=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][i[a]],u=n.values[c]??0;t[o]=u,i[a]++}return t}const e1=(n,e)=>{const t=Fi.createTransformer(e),i=$o(n),o=$o(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?zh.has(n)&&!o.values.length||zh.has(e)&&!i.values.length?Kw(n,e):ll(Iy(Jw(i,o),o.values),t):yu(n,e)};function Fy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Ft(n,e,t):_m(n)(n,e)}const t1=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ut.update(e,t),stop:()=>os(e),now:()=>Tn.isProcessing?Tn.timestamp:Vn.now()}},Uy=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Su=2e4;function ym(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Su;)e+=t,i=n.next(e);return e>=Su?1/0:e}function n1(n,e=100,t){const i=t({...n,keyframes:[0,e]}),o=Math.min(ym(i),Su);return{type:"keyframes",ease:a=>i.next(o*a).value/e,duration:vi(o)}}const en={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Hh(n,e){return n*Math.sqrt(1-e*e)}const i1=12;function r1(n,e,t){let i=t;for(let o=1;o<i1;o++)i=i-n(i)/e(i);return i}const Vd=.001;function s1({duration:n=en.duration,bounce:e=en.bounce,velocity:t=en.velocity,mass:i=en.mass}){let o,a,c=1-e;c=tr(en.minDamping,en.maxDamping,c),n=tr(en.minDuration,en.maxDuration,vi(n)),c<1?(o=h=>{const p=h*c,v=p*n,m=p-t,_=Hh(h,c),E=Math.exp(-v);return Vd-m/_*E},a=h=>{const v=h*c*n,m=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,E=Math.exp(-v),M=Hh(Math.pow(h,2),c);return(-o(h)+Vd>0?-1:1)*((m-_)*E)/M}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Vd+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,d=r1(o,a,u);if(n=oi(n),isNaN(d))return{stiffness:en.stiffness,damping:en.damping,duration:n};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:n}}}const o1=["duration","bounce"],a1=["stiffness","damping","mass"];function kv(n,e){return e.some(t=>n[t]!==void 0)}function l1(n){let e={velocity:en.velocity,stiffness:en.stiffness,damping:en.damping,mass:en.mass,isResolvedFromDuration:!1,...n};if(!kv(n,a1)&&kv(n,o1))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*tr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:en.mass,stiffness:o,damping:a}}else{const t=s1({...n,velocity:0});e={...e,...t,mass:en.mass},e.isResolvedFromDuration=!0}return e}function Eu(n=en.visualDuration,e=en.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:m,isResolvedFromDuration:_}=l1({...t,velocity:-vi(t.velocity||0)}),E=m||0,M=h/(2*Math.sqrt(d*p)),y=c-a,S=vi(Math.sqrt(d/p)),R=Math.abs(y)<5;i||(i=R?en.restSpeed.granular:en.restSpeed.default),o||(o=R?en.restDelta.granular:en.restDelta.default);let L,A,P,I,F,T;if(M<1)P=Hh(S,M),I=(E+M*S*y)/P,L=O=>{const V=Math.exp(-M*S*O);return c-V*(I*Math.sin(P*O)+y*Math.cos(P*O))},F=M*S*I+y*P,T=M*S*y-I*P,A=O=>Math.exp(-M*S*O)*(F*Math.sin(P*O)+T*Math.cos(P*O));else if(M===1){L=V=>c-Math.exp(-S*V)*(y+(E+S*y)*V);const O=E+S*y;A=V=>Math.exp(-S*V)*(S*O*V-E)}else{const O=S*Math.sqrt(M*M-1);L=ee=>{const K=Math.exp(-M*S*ee),ue=Math.min(O*ee,300);return c-K*((E+M*S*y)*Math.sinh(ue)+O*y*Math.cosh(ue))/O};const V=(E+M*S*y)/O,j=M*S*V-y*O,H=M*S*y-V*O;A=ee=>{const K=Math.exp(-M*S*ee),ue=Math.min(O*ee,300);return K*(j*Math.sinh(ue)+H*Math.cosh(ue))}}const N={calculatedDuration:_&&v||null,velocity:O=>oi(A(O)),next:O=>{if(!_&&M<1){const j=Math.exp(-M*S*O),H=Math.sin(P*O),ee=Math.cos(P*O),K=c-j*(I*H+y*ee),ue=oi(j*(F*H+T*ee));return u.done=Math.abs(ue)<=i&&Math.abs(c-K)<=o,u.value=u.done?c:K,u}const V=L(O);if(_)u.done=O>=v;else{const j=oi(A(O));u.done=Math.abs(j)<=i&&Math.abs(c-V)<=o}return u.value=u.done?c:V,u},toString:()=>{const O=Math.min(ym(N),Su),V=Uy(j=>N.next(O*j).value,O,30);return O+"ms "+V},toTransition:()=>{}};return N}Eu.applyToOptions=n=>{const e=n1(n,100,Eu);return n.ease=e.ease,n.duration=oi(e.duration),n.type="keyframes",n};const c1=5;function Oy(n,e,t){const i=Math.max(e-c1,0);return gy(t-n(i),e-i)}function Gh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],m={done:!1,value:v},_=T=>u!==void 0&&T<u||d!==void 0&&T>d,E=T=>u===void 0?d:d===void 0||Math.abs(u-T)<Math.abs(d-T)?u:d;let M=t*e;const y=v+M,S=c===void 0?y:c(y);S!==y&&(M=S-v);const R=T=>-M*Math.exp(-T/i),L=T=>S+R(T),A=T=>{const N=R(T),O=L(T);m.done=Math.abs(N)<=h,m.value=m.done?S:O};let P,I;const F=T=>{_(m.value)&&(P=T,I=Eu({keyframes:[m.value,E(m.value)],velocity:Oy(L,T,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:T=>{let N=!1;return!I&&P===void 0&&(N=!0,A(T),F(T)),P!==void 0&&T>=P?I.next(T-P):(!N&&A(T),m)}}}function u1(n,e,t){const i=[],o=t||ss.mix||Fy,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||xi:e;u=ll(d,u)}i.push(u)}return i}function f1(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(Vu(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=u1(e,i,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const m=nl(n[v],n[v+1],p);return u[v](m)};return t?p=>h(tr(n[0],n[a-1],p)):h}function d1(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=nl(0,e,i);n.push(Ft(t,1,o))}}function h1(n){const e=[0];return d1(e,n.length-1),e}function p1(n,e){return n.map(t=>t*e)}function m1(n,e){return n.map(()=>e||wy).splice(0,n.length-1)}function Ja({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=Mw(i)?i.map(Lv):Lv(i),a={done:!1,value:e[0]},c=p1(t&&t.length===e.length?t:h1(e),n),u=f1(c,e,{ease:Array.isArray(o)?o:m1(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const g1=n=>n!==null;function zu(n,{repeat:e,repeatType:t="loop"},i,o=1){const a=n.filter(g1),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||i===void 0?a[u]:i}const v1={decay:Gh,inertia:Gh,tween:Ja,keyframes:Ja,spring:Eu};function ky(n){typeof n.type=="string"&&(n.type=v1[n.type])}class Sm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const x1=n=>n/100;class Mu extends Sm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Vn.now()&&this.tick(Vn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;ky(e);const{type:t=Ja,repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const d=t||Ja;d!==Ja&&typeof u[0]!="number"&&(this.mixKeyframes=ll(x1,Fy(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=ym(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return i.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:m,repeatDelay:_,type:E,onUpdate:M,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let L=this.currentTime,A=i;if(v){const T=Math.min(this.currentTime,o)/u;let N=Math.floor(T),O=T%1;!O&&T>=1&&(O=1),O===1&&N--,N=Math.min(N,v+1),!!(N%2)&&(m==="reverse"?(O=1-O,_&&(O-=_/u)):m==="mirror"&&(A=c)),L=tr(0,1,O)*u}let P;R?(this.delayState.value=p[0],P=this.delayState):P=A.next(L),a&&!R&&(P.value=a(P.value));let{done:I}=P;!R&&d!==null&&(I=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return F&&E!==Gh&&(P.value=zu(p,this.options,y,this.speed)),M&&M(P.value),F&&this.finish(),P}then(e,t){return this.finished.then(e,t)}get duration(){return vi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+vi(e)}get time(){return vi(this.currentTime)}set time(e){e=oi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return Oy(i=>this.generator.next(i).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Vn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=vi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=t1,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function _1(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Os=n=>n*180/Math.PI,Wh=n=>{const e=Os(Math.atan2(n[1],n[0]));return Xh(e)},y1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Wh,rotateZ:Wh,skewX:n=>Os(Math.atan(n[1])),skewY:n=>Os(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Xh=n=>(n=n%360,n<0&&(n+=360),n),Bv=Wh,Vv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),zv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),S1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Vv,scaleY:zv,scale:n=>(Vv(n)+zv(n))/2,rotateX:n=>Xh(Os(Math.atan2(n[6],n[5]))),rotateY:n=>Xh(Os(Math.atan2(-n[2],n[0]))),rotateZ:Bv,rotate:Bv,skewX:n=>Os(Math.atan(n[4])),skewY:n=>Os(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function jh(n){return n.includes("scale")?1:0}function Yh(n,e){if(!n||n==="none")return jh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(t)i=S1,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=y1,o=u}if(!o)return jh(e);const a=i[e],c=o[1].split(",").map(M1);return typeof a=="function"?a(c):c[a]}const E1=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Yh(t,e)};function M1(n){return parseFloat(n.trim())}const ta=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],na=new Set([...ta,"pathRotation"]),Hv=n=>n===ea||n===We,T1=new Set(["x","y","z"]),w1=ta.filter(n=>!T1.has(n));function A1(n){const e=[];return w1.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const ns={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Yh(e,"x"),y:(n,{transform:e})=>Yh(e,"y")};ns.translateX=ns.x;ns.translateY=ns.y;const Vs=new Set;let $h=!1,qh=!1,Kh=!1;function By(){if(qh){const n=Array.from(Vs).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=A1(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))==null||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}qh=!1,$h=!1,Vs.forEach(n=>n.complete(Kh)),Vs.clear()}function Vy(){Vs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(qh=!0)})}function b1(){Kh=!0,Vy(),By(),Kh=!1}class Em{constructor(e,t,i,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Vs.add(this),$h||($h=!0,Ut.read(Vy),Ut.resolveKeyframes(By))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&t){const u=i.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}_1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Vs.delete(this)}cancel(){this.state==="scheduled"&&(Vs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const C1=n=>n.startsWith("--");function zy(n,e,t){C1(e)?n.style.setProperty(e,t):n.style[e]=t}const R1={};function Hy(n,e){const t=my(n);return()=>R1[e]??t()}const P1=Hy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Gy=Hy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),qa=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Gv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qa([0,.65,.55,1]),circOut:qa([.55,0,1,.45]),backIn:qa([.31,.01,.66,-.59]),backOut:qa([.33,1.53,.69,.99])};function Wy(n,e){if(n)return typeof n=="function"?Gy()?Uy(n,e):"ease-out":Ay(n)?qa(n):Array.isArray(n)?n.map(t=>Wy(t,e)||Gv.easeOut):Gv[n]}function D1(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const v=Wy(u,o);Array.isArray(v)&&(p.easing=v);const m={delay:i,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(m.pseudoElement=h),n.animate(p,m)}function Xy(n){return typeof n=="function"&&"applyToOptions"in n}function L1({type:n,...e}){return Xy(n)&&Gy()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class jy extends Sm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Vu(typeof e.type!="string");const h=L1(e);this.animation=D1(t,i,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=zu(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(p),zy(t,i,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(i=this.animation).commitStyles)==null||o.call(i))}get duration(){var t,i;const e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return vi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+vi(e)}get time(){return vi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=oi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:i,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&P1()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),i&&(this.animation.rangeEnd=i),xi):o(this)}}const Yy={anticipate:Ey,backInOut:Sy,circInOut:Ty};function N1(n){return n in Yy}function I1(n){typeof n.ease=="string"&&N1(n.ease)&&(n.ease=Yy[n.ease])}const zd=10;class F1 extends jy{constructor(e){I1(e),ky(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new Mu({...c,autoplay:!1}),d=Math.max(zd,Vn.now()-this.startTime),h=tr(0,zd,d-zd),p=u.sample(d).value,{name:v}=this.options;a&&v&&zy(a,v,p),t.setWithVelocity(u.sample(Math.max(0,d-h)).value,p,h),u.stop()}}const Wv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Fi.test(n)||n==="0")&&!n.startsWith("url("));function U1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function O1(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=Wv(o,e),u=Wv(a,e);return!c||!u?!1:U1(n)||(t==="spring"||Xy(t))&&i}function Zh(n){n.duration=0,n.type="keyframes"}const $y=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),k1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function B1(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&k1.test(n[e]))return!0;return!1}const V1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),z1=my(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function H1(n){var v;const{motionValue:e,name:t,repeatDelay:i,repeatType:o,damping:a,type:c,keyframes:u}=n,d=(v=e==null?void 0:e.owner)==null?void 0:v.current;if(!(d instanceof HTMLElement)&&!(d instanceof SVGElement))return!1;const{onUpdate:h,transformTemplate:p}=e.owner.getProps();return z1()&&t&&($y.has(t)||V1.has(t)&&B1(u))&&(t!=="transform"||!p)&&!h&&!i&&o!=="mirror"&&a!==0&&c!=="inertia"}const G1=40;class W1 extends Sm{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...v}){var E;super(),this.stop=()=>{var M,y;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Vn.now();const m={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:p,...v},_=(p==null?void 0:p.KeyframeResolver)||Em;this.keyframeResolver=new _(u,(M,y,S)=>this.onKeyframesResolved(M,y,m,!S),d,h,p),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(e,t,i,o){var S,R;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=i;this.resolvedAt=Vn.now();let v=!0;O1(e,a,c,u)||(v=!1,(ss.instantAnimations||!d)&&(p==null||p(zu(e,i,t))),e[0]=e[e.length-1],Zh(i),i.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>G1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},E=v&&!h&&H1(_),M=(R=(S=_.motionValue)==null?void 0:S.owner)==null?void 0:R.current;let y;if(E)try{y=new F1({..._,element:M})}catch{y=new Mu(_)}else y=new Mu(_);y.finished.then(()=>{this.notifyFinished()}).catch(xi),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),b1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function qy(n,e,t,i=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*i;return typeof t=="function"?t(a,c):o===1?a*i:u-a*i}const Xv=30,X1=n=>!isNaN(parseFloat(n));class j1{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var a;const o=Vn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Vn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=X1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new hm);const i=this.events[e].add(t);return e==="change"?()=>{i(),Ut.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Vn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Xv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Xv);return gy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function qo(n,e){return new j1(n,e)}function Ky(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...i}=n;return{...e,...i}}return n}function Mm(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?Ky(t,n):t}const Y1={type:"spring",stiffness:500,damping:25,restSpeed:10},$1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),q1={type:"keyframes",duration:.8},K1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Z1=(n,{keyframes:e})=>e.length>2?q1:na.has(n)?n.startsWith("scale")?$1(e[1]):Y1:K1,Q1=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function J1(n){for(const e in n)if(!Q1.has(e))return!0;return!1}const Tm=(n,e,t,i={},o,a)=>c=>{const u=Mm(i,n)||{},d=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-oi(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:m=>{e.set(m),u.onUpdate&&u.onUpdate(m)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};J1(u)||Object.assign(p,Z1(n,p)),p.duration&&(p.duration=oi(p.duration)),p.repeatDelay&&(p.repeatDelay=oi(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Zh(p),p.delay===0&&(v=!0)),(ss.instantAnimations||ss.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(v=!0,Zh(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const m=zu(p.keyframes,u);if(m!==void 0){Ut.update(()=>{p.onUpdate(m),p.onComplete()});return}}return u.isSync?new Mu(p):new W1(p)},eA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function tA(n){const e=eA.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function Zy(n,e,t=1){const[i,o]=tA(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return dy(c)?parseFloat(c):c}return gm(o)?Zy(o,e,t+1):o}function jv(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function wm(n,e,t,i){if(typeof e=="function"){const[o,a]=jv(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=jv(i);e=e(t!==void 0?t:n.custom,o,a)}return e}function zs(n,e,t){const i=n.getProps();return wm(i,e,t!==void 0?t:i.custom,n)}const Qy=new Set(["width","height","top","left","right","bottom",...ta]),Qh=n=>Array.isArray(n);function nA(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,qo(t))}function iA(n){return Qh(n)?n[n.length-1]||0:n}function rA(n,e){const t=zs(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=iA(a[c]);nA(n,c,u)}}const wn=n=>!!(n&&n.getVelocity);function sA(n){return!!(wn(n)&&n.add)}function Jh(n,e){const t=n.getValue("willChange");if(sA(t))return t.add(e);if(!t&&ss.WillChange){const i=new ss.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function Am(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const oA="framerAppearId",Jy="data-"+Am(oA);function eS(n){return n.props[Jy]}function aA({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function tS(n,e,{delay:t=0,transitionOverride:i,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const d=n.getDefaultTransition();a=a?Ky(a,d):d;const h=a==null?void 0:a.reduceMotion,p=a==null?void 0:a.skipAnimations;i&&(a=i);const v=[],m=o&&n.animationState&&n.animationState.getState()[o],_=a==null?void 0:a.path;_&&_.animateVisualElement(n,u,a,t,v);for(const E in u){const M=n.getValue(E,n.latestValues[E]??null),y=u[E];if(y===void 0||m&&aA(m,E))continue;const S={delay:t,...Mm(a||{},E)};p&&(S.skipAnimations=!0);const R=M.get();if(R!==void 0&&!M.isAnimating()&&!Array.isArray(y)&&y===R&&!S.velocity){Ut.update(()=>M.set(y));continue}let L=!1;if(window.MotionHandoffAnimation){const I=eS(n);if(I){const F=window.MotionHandoffAnimation(I,E,Ut);F!==null&&(S.startTime=F,L=!0)}}Jh(n,E);const A=h??n.shouldReduceMotion;M.start(Tm(E,M,y,A&&Qy.has(E)?{type:!1}:S,n,L));const P=M.animation;P&&v.push(P)}if(c){const E=()=>Ut.update(()=>{c&&rA(n,c)});v.length?Promise.all(v).then(E):E()}return v}function ep(n,e,t={}){var d;const i=zs(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(o=t.transitionOverride);const a=i?()=>Promise.all(tS(n,i,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:m}=o;return lA(n,e,h,p,v,m,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,p]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>p())}else return Promise.all([a(),c(t.delay)])}function lA(n,e,t=0,i=0,o=0,a=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(ep(d,e,{...c,delay:t+(typeof i=="function"?0:i)+qy(n.variantChildren,d,i,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function cA(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>ep(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=ep(n,e,t);else{const o=typeof e=="function"?zs(n,e,t.custom):e;i=Promise.all(tS(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const uA={test:n=>n==="auto",parse:n=>n},nS=n=>e=>e.test(n),iS=[ea,We,Qi,xr,Uw,Fw,uA],Yv=n=>iS.find(nS(n));function fA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||py(n):!0}const dA=new Set(["brightness","contrast","saturate","opacity"]);function hA(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(vm)||[];if(!i)return n;const o=t.replace(i,"");let a=dA.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const pA=/\b([a-z-]*)\(.*?\)/gu,tp={...Fi,getAnimatableNone:n=>{const e=n.match(pA);return e?e.map(hA).join(" "):n}},np={...Fi,getAnimatableNone:n=>{const e=Fi.parse(n);return Fi.createTransformer(n)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},$v={...ea,transform:Math.round},mA={rotate:xr,pathRotation:xr,rotateX:xr,rotateY:xr,rotateZ:xr,scale:Sc,scaleX:Sc,scaleY:Sc,scaleZ:Sc,skew:xr,skewX:xr,skewY:xr,distance:We,translateX:We,translateY:We,translateZ:We,x:We,y:We,z:We,perspective:We,transformPerspective:We,opacity:il,originX:Iv,originY:Iv,originZ:We},Tu={borderWidth:We,borderTopWidth:We,borderRightWidth:We,borderBottomWidth:We,borderLeftWidth:We,borderRadius:We,borderTopLeftRadius:We,borderTopRightRadius:We,borderBottomRightRadius:We,borderBottomLeftRadius:We,width:We,maxWidth:We,height:We,maxHeight:We,top:We,right:We,bottom:We,left:We,inset:We,insetBlock:We,insetBlockStart:We,insetBlockEnd:We,insetInline:We,insetInlineStart:We,insetInlineEnd:We,padding:We,paddingTop:We,paddingRight:We,paddingBottom:We,paddingLeft:We,paddingBlock:We,paddingBlockStart:We,paddingBlockEnd:We,paddingInline:We,paddingInlineStart:We,paddingInlineEnd:We,margin:We,marginTop:We,marginRight:We,marginBottom:We,marginLeft:We,marginBlock:We,marginBlockStart:We,marginBlockEnd:We,marginInline:We,marginInlineStart:We,marginInlineEnd:We,fontSize:We,backgroundPositionX:We,backgroundPositionY:We,...mA,zIndex:$v,fillOpacity:il,strokeOpacity:il,numOctaves:$v},gA={...Tu,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:tp,WebkitFilter:tp,mask:np,WebkitMask:np},rS=n=>gA[n],vA=new Set([tp,np]);function sS(n,e){let t=rS(n);return vA.has(t)||(t=Fi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const xA=new Set(["auto","none","0"]);function _A(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!xA.has(a)&&$o(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=sS(t,o)}class yA extends Em{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),gm(v))){const m=Zy(v,t.current);m!==void 0&&(e[p]=m),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!Qy.has(i)||e.length!==2)return;const[o,a]=e,c=Yv(o),u=Yv(a),d=Nv(o),h=Nv(a);if(d!==h&&ns[i]){this.needsMeasurement=!0;return}if(c!==u)if(Hv(c)&&Hv(u))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else ns[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)(e[o]===null||fA(e[o]))&&i.push(o);i.length&&_A(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ns[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,c=i[a];i[a]=ns[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const bm=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function oS(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const o=(t==null?void 0:t[n])??i.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(i=>i!=null)}const ip=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function iu(n){return hy(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Cm}=by(queueMicrotask,!1),Di={x:!1,y:!1};function aS(){return Di.x||Di.y}function SA(n){return n==="x"||n==="y"?Di[n]?null:(Di[n]=!0,()=>{Di[n]=!1}):Di.x||Di.y?null:(Di.x=Di.y=!0,()=>{Di.x=Di.y=!1})}function lS(n,e){const t=oS(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function EA(n){return!(n.pointerType==="touch"||aS())}function MA(n,e,t={}){const[i,o,a]=lS(n,t);return i.forEach(c=>{let u=!1,d=!1,h;const p=()=>{c.removeEventListener("pointerleave",E)},v=y=>{h&&(h(y),h=void 0),p()},m=y=>{u=!1,window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),d&&(d=!1,v(y))},_=()=>{u=!0,window.addEventListener("pointerup",m,o),window.addEventListener("pointercancel",m,o)},E=y=>{if(y.pointerType!=="touch"){if(u){d=!0;return}v(y)}},M=y=>{if(!EA(y))return;d=!1;const S=e(c,y);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",E,o))};c.addEventListener("pointerenter",M,o),c.addEventListener("pointerdown",_,o)}),a}const cS=(n,e)=>e?n===e?!0:cS(n,e.parentElement):!1,Rm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,TA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wA(n){return TA.has(n.tagName)||n.isContentEditable===!0}const AA=new Set(["INPUT","SELECT","TEXTAREA"]);function bA(n){return AA.has(n.tagName)||n.isContentEditable===!0}const ru=new WeakSet;function qv(n){return e=>{e.key==="Enter"&&n(e)}}function Hd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const CA=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=qv(()=>{if(ru.has(t))return;Hd(t,"down");const o=qv(()=>{Hd(t,"up")}),a=()=>Hd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function Kv(n){return Rm(n)&&!aS()}const Zv=new WeakSet;function RA(n,e,t={}){const[i,o,a]=lS(n,t),c=u=>{const d=u.currentTarget;if(!Kv(u)||Zv.has(u))return;ru.add(d),t.stopPropagation&&Zv.add(u);const h=e(d,u),p={...o,capture:!0},v=(E,M)=>{window.removeEventListener("pointerup",m,p),window.removeEventListener("pointercancel",_,p),ru.has(d)&&ru.delete(d),Kv(E)&&typeof h=="function"&&h(E,{success:M})},m=E=>{v(E,d===window||d===document||t.useGlobalTarget||cS(d,E.target))},_=E=>{v(E,!1)};window.addEventListener("pointerup",m,p),window.addEventListener("pointercancel",_,p)};return i.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),iu(u)&&(u.addEventListener("focus",h=>CA(h,o)),!wA(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function Pm(n){return hy(n)&&"ownerSVGElement"in n}const su=new WeakMap;let Jr;const uS=(n,e,t)=>(i,o)=>o&&o[0]?o[0][n+"Size"]:Pm(i)&&"getBBox"in i?i.getBBox()[e]:i[t],PA=uS("inline","width","offsetWidth"),DA=uS("block","height","offsetHeight");function LA({target:n,borderBoxSize:e}){var t;(t=su.get(n))==null||t.forEach(i=>{i(n,{get width(){return PA(n,e)},get height(){return DA(n,e)}})})}function NA(n){n.forEach(LA)}function IA(){typeof ResizeObserver>"u"||(Jr=new ResizeObserver(NA))}function FA(n,e){Jr||IA();const t=oS(n);return t.forEach(i=>{let o=su.get(i);o||(o=new Set,su.set(i,o)),o.add(e),Jr==null||Jr.observe(i)}),()=>{t.forEach(i=>{const o=su.get(i);o==null||o.delete(e),o!=null&&o.size||Jr==null||Jr.unobserve(i)})}}const ou=new Set;let zo;function UA(){zo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ou.forEach(e=>e(n))},window.addEventListener("resize",zo)}function OA(n){return ou.add(n),zo||UA(),()=>{ou.delete(n),!ou.size&&typeof zo=="function"&&(window.removeEventListener("resize",zo),zo=void 0)}}function Qv(n,e){return typeof n=="function"?OA(n):FA(n,e)}function kA(n){return Pm(n)&&n.tagName==="svg"}const BA=[...iS,cn,Fi],VA=n=>BA.find(nS(n)),Jv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ho=()=>({x:Jv(),y:Jv()}),ex=()=>({min:0,max:0}),hn=()=>({x:ex(),y:ex()}),zA=new WeakMap;function Hu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function rl(n){return typeof n=="string"||Array.isArray(n)}const Dm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Lm=["initial",...Dm];function Gu(n){return Hu(n.animate)||Lm.some(e=>rl(n[e]))}function fS(n){return!!(Gu(n)||n.variants)}function HA(n,e,t){for(const i in e){const o=e[i],a=t[i];if(wn(o))n.addValue(i,o);else if(wn(a))n.addValue(i,qo(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,qo(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const rp={current:null},dS={current:!1},GA=typeof window<"u";function WA(){if(dS.current=!0,!!GA)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>rp.current=n.matches;n.addEventListener("change",e),e()}else rp.current=!1}const tx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let wu={};function hS(n){wu=n}function XA(){return wu}class jA{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Em,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Vn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Ut.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Gu(t),this.isVariantNode=fS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in m){const E=m[_];h[_]!==void 0&&wn(E)&&E.set(h[_])}}mount(e){var t,i;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,zA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(dS.current||WA(),this.shouldReduceMotion=rp.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),os(this.notifyUpdate),os(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&$y.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:d,ease:h,duration:p}=t.accelerate,v=new jy({element:this.current,name:e,keyframes:u,times:d,ease:h,duration:oi(p)}),m=c(v);this.valueSubscriptions.set(e,()=>{m(),v.cancel()});return}const i=na.has(e);i&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ut.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in wu){const t=wu[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):hn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<tx.length;i++){const o=tx[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=HA(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=qo(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(dy(i)||py(i))?i=parseFloat(i):!VA(i)&&Fi.test(t)&&(i=sS(e,t)),this.setBaseTarget(e,wn(i)?i.get():i)),wn(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const c=wm(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(i=c[e])}if(t&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!wn(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new hm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Cm.render(this.render)}}class pS extends jA{constructor(){super(...arguments),this.KeyframeResolver=yA}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;wn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ls{constructor(e){this.isMounted=!1,this.node=e}update(){}}function mS({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function YA({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function $A(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Gd(n){return n===void 0||n===1}function sp({scale:n,scaleX:e,scaleY:t}){return!Gd(n)||!Gd(e)||!Gd(t)}function Ls(n){return sp(n)||gS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function gS(n){return nx(n.x)||nx(n.y)}function nx(n){return n&&n!=="0%"}function Au(n,e,t){const i=n-t,o=e*i;return t+o}function ix(n,e,t,i,o){return o!==void 0&&(n=Au(n,o,i)),Au(n,t,i)+e}function op(n,e=0,t=1,i,o){n.min=ix(n.min,e,t,i,o),n.max=ix(n.max,e,t,i,o)}function vS(n,{x:e,y:t}){op(n.x,e.translate,e.scale,e.originPoint),op(n.y,t.translate,t.scale,t.originPoint)}const rx=.999999999999,sx=1.0000000000001;function qA(n,e,t,i=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let d=0;d<o;d++){a=t[d],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Yi(n.x,-a.scroll.offset.x),Yi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,vS(n,c)),i&&Ls(a.latestValues)&&au(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<sx&&e.x>rx&&(e.x=1),e.y<sx&&e.y>rx&&(e.y=1)}function Yi(n,e){n.min+=e,n.max+=e}function ox(n,e,t,i,o=.5){const a=Ft(n.min,n.max,o);op(n,e,t,a,i)}function ax(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function au(n,e,t){const i=t??n;ox(n.x,ax(e.x,i.x),e.scaleX,e.scale,e.originX),ox(n.y,ax(e.y,i.y),e.scaleY,e.scale,e.originY)}function xS(n,e){return mS($A(n.getBoundingClientRect(),e))}function KA(n,e,t){const i=xS(n,t),{scroll:o}=e;return o&&(Yi(i.x,o.offset.x),Yi(i.y,o.offset.y)),i}const ZA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},QA=ta.length;function JA(n,e,t){let i="",o=!0;for(let c=0;c<QA;c++){const u=ta[c],d=n[u];if(d===void 0)continue;let h=!0;if(typeof d=="number")h=d===(u.startsWith("scale")?1:0);else{const p=parseFloat(d);h=u.startsWith("scale")?p===1:p===0}if(!h||t){const p=ip(d,Tu[u]);if(!h){o=!1;const v=ZA[u]||u;i+=`${v}(${p}) `}t&&(e[u]=p)}}const a=n.pathRotation;return a&&(o=!1,i+=`rotate(${ip(a,Tu.pathRotation)}) `),i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function Nm(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(na.has(d)){c=!0;continue}else if(Ry(d)){o[d]=h;continue}else{const p=ip(h,Tu[d]);d.startsWith("origin")?(u=!0,a[d]=p):i[d]=p}}if(e.transform||(c||t?i.transform=JA(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${d} ${h} ${p}`}}function _S(n,{style:e,vars:t},i,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,i);for(c in t)a.setProperty(c,t[c])}function lx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const za={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(We.test(n))n=parseFloat(n);else return n;const t=lx(n,e.target.x),i=lx(n,e.target.y);return`${t}% ${i}%`}},eb={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=Fi.parse(n);if(o.length>5)return i;const a=Fi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=Ft(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},ap={borderRadius:{...za,applyTo:[...bm]},borderTopLeftRadius:za,borderTopRightRadius:za,borderBottomLeftRadius:za,borderBottomRightRadius:za,boxShadow:eb};function yS(n,{layout:e,layoutId:t}){return na.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!ap[n]||n==="opacity")}function Im(n,e,t){var c;const i=n.style,o=e==null?void 0:e.style,a={};if(!i)return a;for(const u in i)(wn(i[u])||o&&wn(o[u])||yS(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=i[u]);return a}function tb(n){return window.getComputedStyle(n)}class nb extends pS{constructor(){super(...arguments),this.type="html",this.renderInstance=_S}mount(e){Vu(!!e.style),super.mount(e)}readValueFromInstance(e,t){var i;if(na.has(t))return(i=this.projection)!=null&&i.isProjecting?jh(t):E1(e,t);{const o=tb(e),a=(Ry(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return xS(e,t)}build(e,t,i){Nm(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return Im(e,t,i)}}const ib={offset:"stroke-dashoffset",array:"stroke-dasharray"},rb={offset:"strokeDashoffset",array:"strokeDasharray"};function sb(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?ib:rb;n[a.offset]=`${-i}`,n[a.array]=`${e} ${t}`}const ob=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function SS(n,{attrX:e,attrY:t,attrScale:i,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,p){if(Nm(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:m}=n;v.transform&&(m.transform=v.transform,delete v.transform),(m.transform||v.transformOrigin)&&(m.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),m.transform&&(m.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox);for(const _ of ob)v[_]!==void 0&&(m[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),i!==void 0&&(v.scale=i),o!==void 0&&sb(v,o,a,c,!1)}const ES=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),MS=n=>typeof n=="string"&&n.toLowerCase()==="svg";function ab(n,e,t,i){_S(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(ES.has(o)?o:Am(o),e.attrs[o])}function TS(n,e,t){const i=Im(n,e,t);for(const o in n)if(wn(n[o])||wn(e[o])){const a=ta.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}class lb extends pS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=hn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(na.has(t)){const i=rS(t);return i&&i.default||0}return t=ES.has(t)?t:Am(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return TS(e,t,i)}build(e,t,i){SS(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,o){ab(e,t,i,o)}mount(e){this.isSVGTag=MS(e.tagName),super.mount(e)}}const cb=Lm.length;function wS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?wS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<cb;t++){const i=Lm[t],o=n.props[i];(rl(o)||o===!1)&&(e[i]=o)}return e}function AS(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const ub=[...Dm].reverse(),fb=Dm.length;function db(n){return e=>Promise.all(e.map(({animation:t,options:i})=>cA(n,t,i)))}function hb(n){let e=db(n),t=cx(),i=!0,o=!1;const a=h=>(p,v)=>{var _;const m=zs(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(m){const{transition:E,transitionEnd:M,...y}=m;p={...p,...y,...M}}return p};function c(h){e=h(n)}function u(h){const{props:p}=n,v=wS(n.parent)||{},m=[],_=new Set;let E={},M=1/0;for(let S=0;S<fb;S++){const R=ub[S],L=t[R],A=p[R]!==void 0?p[R]:v[R],P=rl(A),I=R===h?L.isActive:null;I===!1&&(M=S);let F=A===v[R]&&A!==p[R]&&P;if(F&&(i||o)&&n.manuallyAnimateOnMount&&(F=!1),L.protectedKeys={...E},!L.isActive&&I===null||!A&&!L.prevProp||Hu(A)||typeof A=="boolean")continue;if(R==="exit"&&L.isActive&&I!==!0){L.prevResolvedValues&&(E={...E,...L.prevResolvedValues});continue}const T=pb(L.prevProp,A);let N=T||R===h&&L.isActive&&!F&&P||S>M&&P,O=!1;const V=Array.isArray(A)?A:[A];let j=V.reduce(a(R),{});I===!1&&(j={});const{prevResolvedValues:H={}}=L,ee={...H,...j},K=W=>{N=!0,_.has(W)&&(O=!0,_.delete(W)),L.needsAnimating[W]=!0;const ne=n.getValue(W);ne&&(ne.liveStyle=!1)};for(const W in ee){const ne=j[W],oe=H[W];if(E.hasOwnProperty(W))continue;let k=!1;Qh(ne)&&Qh(oe)?k=!AS(ne,oe)||T:k=ne!==oe,k?ne!=null?K(W):_.add(W):ne!==void 0&&_.has(W)?K(W):L.protectedKeys[W]=!0}L.prevProp=A,L.prevResolvedValues=j,L.isActive&&(E={...E,...j}),(i||o)&&n.blockInitialAnimation&&(N=!1);const ue=F&&T;N&&(!ue||O)&&m.push(...V.map(W=>{const ne={type:R};if(typeof W=="string"&&(i||o)&&!ue&&n.manuallyAnimateOnMount&&n.parent){const{parent:oe}=n,k=zs(oe,W);if(oe.enteringChildren&&k){const{delayChildren:J}=k.transition||{};ne.delay=qy(oe.enteringChildren,n,J)}}return{animation:W,options:ne}}))}if(_.size){const S={};if(typeof p.initial!="boolean"){const R=zs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);R&&R.transition&&(S.transition=R.transition)}_.forEach(R=>{const L=n.getBaseTarget(R),A=n.getValue(R);A&&(A.liveStyle=!0),S[R]=L??null}),m.push({animation:S})}let y=!!m.length;return i&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(y=!1),i=!1,o=!1,y?e(m):Promise.resolve()}function d(h,p){var m;if(t[h].isActive===p)return Promise.resolve();(m=n.variantChildren)==null||m.forEach(_=>{var E;return(E=_.animationState)==null?void 0:E.setActive(h,p)}),t[h].isActive=p;const v=u(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:u,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=cx(),o=!0}}}function pb(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!AS(e,n):!1}function bs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cx(){return{animate:bs(!0),whileInView:bs(),whileHover:bs(),whileTap:bs(),whileDrag:bs(),whileFocus:bs(),exit:bs()}}function lp(n,e){n.min=e.min,n.max=e.max}function bi(n,e){lp(n.x,e.x),lp(n.y,e.y)}function ux(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const bS=1e-4,mb=1-bS,gb=1+bS,CS=.01,vb=0-CS,xb=0+CS;function zn(n){return n.max-n.min}function _b(n,e,t){return Math.abs(n-e)<=t}function fx(n,e,t,i=.5){n.origin=i,n.originPoint=Ft(e.min,e.max,n.origin),n.scale=zn(t)/zn(e),n.translate=Ft(t.min,t.max,n.origin)-n.originPoint,(n.scale>=mb&&n.scale<=gb||isNaN(n.scale))&&(n.scale=1),(n.translate>=vb&&n.translate<=xb||isNaN(n.translate))&&(n.translate=0)}function el(n,e,t,i){fx(n.x,e.x,t.x,i?i.originX:void 0),fx(n.y,e.y,t.y,i?i.originY:void 0)}function dx(n,e,t,i=0){const o=i?Ft(t.min,t.max,i):t.min;n.min=o+e.min,n.max=n.min+zn(e)}function yb(n,e,t,i){dx(n.x,e.x,t.x,i==null?void 0:i.x),dx(n.y,e.y,t.y,i==null?void 0:i.y)}function hx(n,e,t,i=0){const o=i?Ft(t.min,t.max,i):t.min;n.min=e.min-o,n.max=n.min+zn(e)}function bu(n,e,t,i){hx(n.x,e.x,t.x,i==null?void 0:i.x),hx(n.y,e.y,t.y,i==null?void 0:i.y)}function px(n,e,t,i,o){return n-=e,n=Au(n,1/t,i),o!==void 0&&(n=Au(n,1/o,i)),n}function Sb(n,e=0,t=1,i=.5,o,a=n,c=n){if(Qi.test(e)&&(e=parseFloat(e),e=Ft(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Ft(a.min,a.max,i);n===a&&(u-=e),n.min=px(n.min,e,t,u,o),n.max=px(n.max,e,t,u,o)}function mx(n,e,[t,i,o],a,c){Sb(n,e[t],e[i],e[o],e.scale,a,c)}const Eb=["x","scaleX","originX"],Mb=["y","scaleY","originY"];function gx(n,e,t,i){mx(n.x,e,Eb,t?t.x:void 0,i?i.x:void 0),mx(n.y,e,Mb,t?t.y:void 0,i?i.y:void 0)}function vx(n){return n.translate===0&&n.scale===1}function RS(n){return vx(n.x)&&vx(n.y)}function xx(n,e){return n.min===e.min&&n.max===e.max}function Tb(n,e){return xx(n.x,e.x)&&xx(n.y,e.y)}function _x(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function PS(n,e){return _x(n.x,e.x)&&_x(n.y,e.y)}function yx(n){return zn(n.x)/zn(n.y)}function Sx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function ji(n){return[n("x"),n("y")]}function wb(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,pathRotation:v,rotateX:m,rotateY:_,skewX:E,skewY:M}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),v&&(i+=`rotate(${v}deg) `),m&&(i+=`rotateX(${m}deg) `),_&&(i+=`rotateY(${_}deg) `),E&&(i+=`skewX(${E}deg) `),M&&(i+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(i+=`scale(${u}, ${d})`),i||"none"}const Ab=bm.length,Ex=n=>typeof n=="string"?parseFloat(n):n,Mx=n=>typeof n=="number"||We.test(n);function bb(n,e,t,i,o,a){o?(n.opacity=Ft(0,t.opacity??1,Cb(i)),n.opacityExit=Ft(e.opacity??1,0,Rb(i))):a&&(n.opacity=Ft(e.opacity??1,t.opacity??1,i));for(let c=0;c<Ab;c++){const u=bm[c];let d=Tx(e,u),h=Tx(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Mx(d)===Mx(h)?(n[u]=Math.max(Ft(Ex(d),Ex(h),i),0),(Qi.test(h)||Qi.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Ft(e.rotate||0,t.rotate||0,i))}function Tx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Cb=DS(0,.5,My),Rb=DS(.5,.95,xi);function DS(n,e,t){return i=>i<n?0:i>e?1:t(nl(n,e,i))}function Pb(n,e,t){const i=wn(n)?n:qo(n);return i.start(Tm("",i,e,t)),i.animation}function sl(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}const Db=(n,e)=>n.depth-e.depth;class Lb{constructor(){this.children=[],this.isDirty=!1}add(e){dm(this.children,e),this.isDirty=!0}remove(e){_u(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Db),this.isDirty=!1,this.children.forEach(e)}}function Nb(n,e){const t=Vn.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(os(i),n(a-e))};return Ut.setup(i,!0),()=>os(i)}function lu(n){return wn(n)?n.get():n}class Ib{constructor(){this.members=[]}add(e){dm(this.members,e);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;const o=i.instance;(!o||o.isConnected===!1)&&!i.snapshot&&(_u(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(_u(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let i=this.members.indexOf(e)-1;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=i.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,i,o,a,c;(i=(t=e.options).onExitComplete)==null||i.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Wd=["","X","Y","Z"],Fb=1e3;let Ub=0;function Xd(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function LS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=eS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ut,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&LS(i)}function NS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=Ub++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Bb),this.nodes.forEach(Xb),this.nodes.forEach(jb),this.nodes.forEach(Vb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Lb)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new hm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Pm(c)&&!kA(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,v=0;const m=()=>this.root.updateBlockedByResize=!1;Ut.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,p&&p(),p=Nb(m,250),cu.hasAnimatedSinceResize&&(cu.hasAnimatedSinceResize=!1,this.nodes.forEach(bx)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:m,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||Zb,{onLayoutAnimationStart:M,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!PS(this.targetLayout,_),R=!v&&m;if(this.options.layoutRoot||this.resumeFrom||R||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Mm(E,"layout"),onPlay:M,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(p,R,L.path)}else v||bx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),os(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Yb),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&LS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(Hb),this.nodes.forEach(wx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ax);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Gb),this.nodes.forEach(Wb),this.nodes.forEach(Ob),this.nodes.forEach(kb)):this.nodes.forEach(Ax),this.clearAllSnapshots();const u=Vn.now();Tn.delta=tr(0,1e3/60,u-Tn.timestamp),Tn.timestamp=u,Tn.isProcessing=!0,Ud.update.process(Tn),Ud.preRender.process(Tn),Ud.render.process(Tn),Tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(zb),this.sharedNodes.forEach($b)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!zn(this.snapshot.measuredBox.x)&&!zn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=hn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!RS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Ls(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),Qb(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return hn();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(Jb))){const{scroll:p}=this.root;p&&(Yi(u.x,p.offset.x),Yi(u.y,p.offset.y))}return u}removeElementScroll(c){var d;const u=hn();if(bi(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:m}=p;p!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&bi(u,c),Yi(u.x,v.offset.x),Yi(u.y,v.offset.y))}return u}applyTransform(c,u=!1,d){var p,v;const h=d||hn();bi(h,c);for(let m=0;m<this.path.length;m++){const _=this.path[m];!u&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Yi(h.x,-_.scroll.offset.x),Yi(h.y,-_.scroll.offset.y)),Ls(_.latestValues)&&au(h,_.latestValues,(p=_.layout)==null?void 0:p.layoutBox)}return Ls(this.latestValues)&&au(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var d;const u=hn();bi(u,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!Ls(p.latestValues))continue;let v;p.instance&&(sp(p.latestValues)&&p.updateSnapshot(),v=hn(),bi(v,p.measurePageBox())),gx(u,p.latestValues,(d=p.snapshot)==null?void 0:d.layoutBox,v)}return Ls(this.latestValues)&&gx(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=Tn.timestamp;const m=this.getClosestProjectingParent();m&&this.linkedParentVersion!==m.layoutVersion&&!m.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&m&&m.layout?this.createRelativeTarget(m,this.layout.layoutBox,m.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=hn(),this.targetWithTransforms=hn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):bi(this.target,this.layout.layoutBox),vS(this.target,this.targetDelta)):bi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?this.createRelativeTarget(m,this.target,m.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||sp(this.parent.latestValues)||gS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=hn(),this.relativeTargetOrigin=hn(),bu(this.relativeTargetOrigin,u,d,this.options.layoutAnchor||void 0),bi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var E;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Tn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;bi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,m=this.treeScale.y;qA(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=hn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ux(this.prevProjectionDelta.x,this.projectionDelta.x),ux(this.prevProjectionDelta.y,this.projectionDelta.y)),el(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==m||!Sx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Sx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ho(),this.projectionDelta=Ho(),this.projectionDeltaWithTransform=Ho()}setAnimationOrigin(c,u=!1,d){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},m=Ho();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const _=hn(),E=h?h.source:void 0,M=this.layout?this.layout.source:void 0,y=E!==M,S=this.getStack(),R=!S||S.members.length<=1,L=!!(y&&!R&&this.options.crossfade===!0&&!this.path.some(Kb));this.animationProgress=0;let A;const P=d==null?void 0:d.interpolateProjection(c);this.mixTargetDelta=I=>{const F=I/1e3,T=P==null?void 0:P(F);T?(m.x.translate=T.x,m.x.scale=Ft(c.x.scale,1,F),m.x.origin=c.x.origin,m.x.originPoint=c.x.originPoint,m.y.translate=T.y,m.y.scale=Ft(c.y.scale,1,F),m.y.origin=c.y.origin,m.y.originPoint=c.y.originPoint):(Cx(m.x,c.x,F),Cx(m.y,c.y,F)),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(bu(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),qb(this.relativeTarget,this.relativeTargetOrigin,_,F),A&&Tb(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=hn()),bi(A,this.relativeTarget)),y&&(this.animationValues=v,bb(v,p,this.latestValues,F,L,R)),T&&T.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=T.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(os(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ut.update(()=>{cu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=qo(0)),this.motionValue.jump(0,!1),this.currentAnimation=Pb(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&IS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||hn();const v=zn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const m=zn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+m}bi(u,d),au(u,p),el(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new Ib),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Xd("z",c,h,this.animationValues);for(let p=0;p<Wd.length;p++)Xd(`rotate${Wd[p]}`,c,h,this.animationValues),Xd(`skew${Wd[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=lu(u==null?void 0:u.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=lu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ls(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=wb(this.projectionDeltaWithTransform,this.treeScale,p);d&&(v=d(p,v)),c.transform=v;const{x:m,y:_}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const E in ap){if(p[E]===void 0)continue;const{correct:M,applyTo:y,isCSSVariable:S}=ap[E],R=v==="none"?p[E]:M(p[E],h);if(y){const L=y.length;for(let A=0;A<L;A++)c[y[A]]=R}else S?this.options.visualElement.renderState.vars[E]=R:c[E]=R}this.options.layoutId&&(c.pointerEvents=h===this?lu(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(wx),this.root.sharedNodes.clear()}}}function Ob(n){n.updateLayout()}function kb(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")ji(v=>{const m=c?e.measuredBox[v]:e.layoutBox[v],_=zn(m);m.min=i[v].min,m.max=m.min+_});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";lp(c?e.measuredBox[v]:e.layoutBox[v],i[v])}else IS(a,e.layoutBox,i)&&ji(v=>{const m=c?e.measuredBox[v]:e.layoutBox[v],_=zn(i[v]);m.max=m.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const u=Ho();el(u,i,e.layoutBox);const d=Ho();c?el(d,n.applyTransform(o,!0),e.measuredBox):el(d,i,e.layoutBox);const h=!RS(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:_}=v;if(m&&_){const E=n.options.layoutAnchor||void 0,M=hn();bu(M,e.layoutBox,m.layoutBox,E);const y=hn();bu(y,i,_.layoutBox,E),PS(M,y)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function Bb(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Vb(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function zb(n){n.clearSnapshot()}function wx(n){n.clearMeasurements()}function Hb(n){n.isLayoutDirty=!0,n.updateLayout()}function Ax(n){n.isLayoutDirty=!1}function Gb(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function Wb(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function bx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Xb(n){n.resolveTargetDelta()}function jb(n){n.calcProjection()}function Yb(n){n.resetSkewAndRotation()}function $b(n){n.removeLeadSnapshot()}function Cx(n,e,t){n.translate=Ft(e.translate,0,t),n.scale=Ft(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Rx(n,e,t,i){n.min=Ft(e.min,t.min,i),n.max=Ft(e.max,t.max,i)}function qb(n,e,t,i){Rx(n.x,e.x,t.x,i),Rx(n.y,e.y,t.y,i)}function Kb(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Zb={duration:.45,ease:[.4,0,.1,1]},Px=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Dx=Px("applewebkit/")&&!Px("chrome/")?Math.round:xi;function Lx(n){n.min=Dx(n.min),n.max=Dx(n.max)}function Qb(n){Lx(n.x),Lx(n.y)}function IS(n,e,t){return n==="position"||n==="preserve-aspect"&&!_b(yx(e),yx(t),.2)}function Jb(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const eC=NS({attachResizeListener:(n,e)=>sl(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),jd={current:void 0},FS=NS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!jd.current){const n=new eC({});n.mount(window),n.setOptions({layoutScroll:!0}),jd.current=n}return jd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Fm=z.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Nx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function tC(...n){return e=>{let t=!1;const i=n.map(o=>{const a=Nx(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():Nx(n[o],null)}}}}function nC(...n){return z.useCallback(tC(...n),n)}class iC extends z.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(iu(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=t.offsetParent,o=iu(i)&&i.offsetWidth||0,a=iu(i)&&i.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function rC({children:n,isPresent:e,anchorX:t,anchorY:i,root:o,pop:a}){var m;const c=z.useId(),u=z.useRef(null),d=z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=z.useContext(Fm),p=a!==!1?((m=n.props)==null?void 0:m.ref)??(n==null?void 0:n.ref):void 0,v=nC(u,p);return z.useInsertionEffect(()=>{const{width:_,height:E,top:M,left:y,right:S,bottom:R,direction:L}=d.current;if(e||a===!1||!u.current||!_||!E)return;const A=L==="rtl",P=t==="left"?A?`right: ${S}`:`left: ${y}`:A?`left: ${y}`:`right: ${S}`,I=i==="bottom"?`bottom: ${R}`:`top: ${M}`;u.current.dataset.motionPopId=c;const F=document.createElement("style");h&&(F.nonce=h);const T=o??document.head;return T.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${E}px !important;
            ${P}px !important;
            ${I}px !important;
          }
        `),()=>{var N;(N=u.current)==null||N.removeAttribute("data-motion-pop-id"),T.contains(F)&&T.removeChild(F)}},[e]),D.jsx(iC,{isPresent:e,childRef:u,sizeRef:d,pop:a,children:a===!1?n:z.cloneElement(n,{ref:v})})}const sC=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:d,root:h})=>{const p=um(oC),v=z.useId(),m=z.useRef(t),_=z.useRef(i);fm(()=>{m.current=t,_.current=i});let E=!0,M=z.useMemo(()=>(E=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:y=>{p.set(y,!0);for(const S of p.values())if(!S)return;i&&i()},register:y=>(p.set(y,!1),()=>{var S;p.delete(y),!m.current&&!p.size&&((S=_.current)==null||S.call(_))})}),[t,p,i]);return a&&E&&(M={...M}),z.useMemo(()=>{p.forEach((y,S)=>p.set(S,!1))},[t]),z.useEffect(()=>{!t&&!p.size&&i&&i()},[t]),n=D.jsx(rC,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:d,root:h,children:n}),D.jsx(Bu.Provider,{value:M,children:n})};function oC(){return new Map}function US(n=!0){const e=z.useContext(Bu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=z.useId();z.useEffect(()=>{if(n)return o(a)},[n]);const c=z.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const Ec=n=>n.key||"";function Ix(n){const e=[];return z.Children.forEach(n,t=>{z.isValidElement(t)&&e.push(t)}),e}const cp=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:d="top",root:h})=>{const[p,v]=US(c),m=z.useMemo(()=>Ix(n),[n]),_=c&&!p?[]:m.map(Ec),E=z.useRef(!0),M=z.useRef(m),y=um(()=>new Map),S=z.useRef(new Set),[R,L]=z.useState(m),[A,P]=z.useState(m);fm(()=>{E.current=!1,M.current=m;for(let T=0;T<A.length;T++){const N=Ec(A[T]);_.includes(N)?(y.delete(N),S.current.delete(N)):y.get(N)!==!0&&y.set(N,!1)}},[A,_.length,_.join("-")]);const I=[];if(m!==R){let T=[...m];for(let N=0;N<A.length;N++){const O=A[N],V=Ec(O);_.includes(V)||(T.splice(N,0,O),I.push(O))}return a==="wait"&&I.length&&(T=I),P(Ix(T)),L(m),null}const{forceRender:F}=z.useContext(cm);return D.jsx(D.Fragment,{children:A.map(T=>{const N=Ec(T),O=c&&!p?!1:m===A||_.includes(N),V=()=>{if(S.current.has(N))return;if(y.has(N))S.current.add(N),y.set(N,!0);else return;let j=!0;y.forEach(H=>{H||(j=!1)}),j&&(F==null||F(),P(M.current),c&&(v==null||v()),i&&i())};return D.jsx(sC,{isPresent:O,initial:!E.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:O?void 0:V,anchorX:u,anchorY:d,children:T},N)})})},OS=z.createContext({strict:!1}),Fx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Ux=!1;function aC(){if(Ux)return;const n={};for(const e in Fx)n[e]={isEnabled:t=>Fx[e].some(i=>!!t[i])};hS(n),Ux=!0}function kS(){return aC(),XA()}function lC(n){const e=kS();for(const t in n)e[t]={...e[t],...n[t]};hS(e)}const cC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Cu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||cC.has(n)}let BS=n=>!Cu(n);function uC(n){typeof n=="function"&&(BS=e=>e.startsWith("on")?!Cu(e):n(e))}try{uC(require("@emotion/is-prop-valid").default)}catch{}function fC(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||wn(n[o])||(BS(o)||t===!0&&Cu(o)||!e&&!Cu(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}const Wu=z.createContext({});function dC(n,e){if(Gu(n)){const{initial:t,animate:i}=n;return{initial:t===!1||rl(t)?t:void 0,animate:rl(i)?i:void 0}}return n.inherit!==!1?e:{}}function hC(n){const{initial:e,animate:t}=dC(n,z.useContext(Wu));return z.useMemo(()=>({initial:e,animate:t}),[Ox(e),Ox(t)])}function Ox(n){return Array.isArray(n)?n.join(" "):n}const Um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function VS(n,e,t){for(const i in e)!wn(e[i])&&!yS(i,t)&&(n[i]=e[i])}function pC({transformTemplate:n},e){return z.useMemo(()=>{const t=Um();return Nm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function mC(n,e){const t=n.style||{},i={};return VS(i,t,n),Object.assign(i,pC(n,e)),i}function gC(n,e){const t={},i=mC(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const zS=()=>({...Um(),attrs:{}});function vC(n,e,t,i){const o=z.useMemo(()=>{const a=zS();return SS(a,e,MS(i),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};VS(a,n.style,n),o.style={...a,...o.style}}return o}const xC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Om(n){return typeof n!="string"||n.includes("-")?!1:!!(xC.indexOf(n)>-1||/[A-Z]/u.test(n))}function _C(n,e,t,{latestValues:i},o,a=!1,c){const d=(c??Om(n)?vC:gC)(e,i,o,n),h=fC(e,typeof n=="string",a),p=n!==z.Fragment?{...h,...d,ref:t}:{},{children:v}=e,m=z.useMemo(()=>wn(v)?v.get():v,[v]);return z.createElement(n,{...p,children:m})}function yC({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,o){return{latestValues:SC(t,i,o,n),renderState:e()}}function SC(n,e,t,i){const o={},a=i(n,{});for(const m in a)o[m]=lu(a[m]);let{initial:c,animate:u}=n;const d=Gu(n),h=fS(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!Hu(v)){const m=Array.isArray(v)?v:[v];for(let _=0;_<m.length;_++){const E=wm(n,m[_]);if(E){const{transitionEnd:M,transition:y,...S}=E;for(const R in S){let L=S[R];if(Array.isArray(L)){const A=p?L.length-1:0;L=L[A]}L!==null&&(o[R]=L)}for(const R in M)o[R]=M[R]}}}return o}const HS=n=>(e,t)=>{const i=z.useContext(Wu),o=z.useContext(Bu),a=()=>yC(n,e,i,o);return t?a():um(a)},EC=HS({scrapeMotionValuesFromProps:Im,createRenderState:Um}),MC=HS({scrapeMotionValuesFromProps:TS,createRenderState:zS}),TC=Symbol.for("motionComponentSymbol");function wC(n,e,t){const i=z.useRef(t);z.useInsertionEffect(()=>{i.current=t});const o=z.useRef(null);return z.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=i.current;if(typeof c=="function")if(a){const d=c(a);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const GS=z.createContext({});function Bo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function AC(n,e,t,i,o,a){var L,A;const{visualElement:c}=z.useContext(Wu),u=z.useContext(OS),d=z.useContext(Bu),h=z.useContext(Fm),p=h.reducedMotion,v=h.skipAnimations,m=z.useRef(null),_=z.useRef(!1);i=i||u.renderer,!m.current&&i&&(m.current=i(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,skipAnimations:v,isSVG:a}),_.current&&m.current&&(m.current.manuallyAnimateOnMount=!0));const E=m.current,M=z.useContext(GS);E&&!E.projection&&o&&(E.type==="html"||E.type==="svg")&&bC(m.current,t,o,M);const y=z.useRef(!1);z.useInsertionEffect(()=>{E&&y.current&&E.update(t,d)});const S=t[Jy],R=z.useRef(!!S&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,S))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,S)));return fm(()=>{_.current=!0,E&&(y.current=!0,window.MotionIsMounted=!0,E.updateFeatures(),E.scheduleRenderMicrotask(),R.current&&E.animationState&&E.animationState.animateChanges())}),z.useEffect(()=>{E&&(!R.current&&E.animationState&&E.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,S)}),R.current=!1),E.enteringChildren=void 0)}),E}function bC(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutAnchor:p,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:WS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Bo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:p})}function WS(n){if(n)return n.options.allowProjection!==!1?n.projection:WS(n.parent)}function Yd(n,{forwardMotionProps:e=!1,type:t}={},i,o){i&&lC(i);const a=t?t==="svg":Om(n),c=a?MC:EC;function u(h,p){let v;const m={...z.useContext(Fm),...h,layoutId:CC(h)},{isStatic:_}=m,E=hC(h),M=c(h,_);if(!_&&typeof window<"u"){RC();const y=PC(m);v=y.MeasureLayout,E.visualElement=AC(n,M,m,o,y.ProjectionNode,a)}return D.jsxs(Wu.Provider,{value:E,children:[v&&E.visualElement?D.jsx(v,{visualElement:E.visualElement,...m}):null,_C(n,h,wC(M,E.visualElement,p),M,_,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=z.forwardRef(u);return d[TC]=n,d}function CC({layoutId:n}){const e=z.useContext(cm).id;return e&&n!==void 0?e+"-"+n:n}function RC(n,e){z.useContext(OS).strict}function PC(n){const e=kS(),{drag:t,layout:i}=e;if(!t&&!i)return{};const o={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(n)||i!=null&&i.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function DC(n,e){if(typeof Proxy>"u")return Yd;const t=new Map,i=(a,c)=>Yd(a,c,n,e),o=(a,c)=>i(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?i:(t.has(c)||t.set(c,Yd(c,void 0,n,e)),t.get(c))})}const LC=(n,e)=>e.isSVG??Om(n)?new lb(e):new nb(e,{allowProjection:n!==z.Fragment});class NC extends ls{constructor(e){super(e),e.animationState||(e.animationState=hb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Hu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let IC=0;class FC extends ls{constructor(){super(...arguments),this.id=IC++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const d=zs(this.node,c,u);if(d){const{transition:h,transitionEnd:p,...v}=d;for(const m in v)(a=this.node.getValue(m))==null||a.jump(v[m])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const UC={animation:{Feature:NC},exit:{Feature:FC}};function fl(n){return{point:{x:n.pageX,y:n.pageY}}}const OC=n=>e=>Rm(e)&&n(e,fl(e));function tl(n,e,t,i){return sl(n,e,OC(t),i)}const XS=({current:n})=>n?n.ownerDocument.defaultView:null,kx=(n,e)=>Math.abs(n-e);function kC(n,e){const t=kx(n.x,e.x),i=kx(n.y,e.y);return Math.sqrt(t**2+i**2)}const Bx=new Set(["auto","scroll"]);class jS{constructor(e,t,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=E=>{this.handleScroll(E.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Mc(this.lastRawMoveEventInfo,this.transformPagePoint));const E=$d(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,y=kC(E.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!y)return;const{point:S}=E,{timestamp:R}=Tn;this.history.push({...S,timestamp:R});const{onStart:L,onMove:A}=this.handlers;M||(L&&L(this.lastMoveEvent,E),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,E)},this.handlePointerMove=(E,M)=>{this.lastMoveEvent=E,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Mc(M,this.transformPagePoint),Ut.update(this.updatePoint,!0)},this.handlePointerUp=(E,M)=>{this.end();const{onEnd:y,onSessionEnd:S,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=$d(E.type==="pointercancel"?this.lastMoveEventInfo:Mc(M,this.transformPagePoint),this.history);this.startEvent&&y&&y(E,L),S&&S(E,L)},!Rm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=c,this.contextWindow=o||window;const d=fl(e),h=Mc(d,this.transformPagePoint),{point:p}=h,{timestamp:v}=Tn;this.history=[{...p,timestamp:v}];const{onSessionStart:m}=t;m&&m(e,$d(h,this.history));const _={passive:!0,capture:!0};this.removeListeners=ll(tl(this.contextWindow,"pointermove",this.handlePointerMove,_),tl(this.contextWindow,"pointerup",this.handlePointerUp,_),tl(this.contextWindow,"pointercancel",this.handlePointerUp,_)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const i=getComputedStyle(t);(Bx.has(i.overflowX)||Bx.has(i.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const i=e===window,o=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Ut.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),os(this.updatePoint)}}function Mc(n,e){return e?{point:e(n.point)}:n}function Vx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function $d({point:n},e){return{point:n,delta:Vx(n,YS(e)),offset:Vx(n,BC(e)),velocity:VC(e,.1)}}function BC(n){return n[0]}function YS(n){return n[n.length-1]}function VC(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=YS(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>oi(e)));)t--;if(!i)return{x:0,y:0};i===n[0]&&n.length>2&&o.timestamp-i.timestamp>oi(e)*2&&(i=n[1]);const a=vi(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function zC(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Ft(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Ft(t,n,i.max):Math.min(n,t)),n}function zx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function HC(n,{top:e,left:t,bottom:i,right:o}){return{x:zx(n.x,t,o),y:zx(n.y,e,i)}}function Hx(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function GC(n,e){return{x:Hx(n.x,e.x),y:Hx(n.y,e.y)}}function WC(n,e){let t=.5;const i=zn(n),o=zn(e);return o>i?t=nl(e.min,e.max-i,n.min):i>o&&(t=nl(n.min,n.max-o,e.min)),tr(0,1,t)}function XC(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const up=.35;function jC(n=up){return n===!1?n=0:n===!0&&(n=up),{x:Gx(n,"left","right"),y:Gx(n,"top","bottom")}}function Gx(n,e,t){return{min:Wx(n,e),max:Wx(n,t)}}function Wx(n,e){return typeof n=="number"?n:n[e]||0}const YC=new WeakMap;class $C{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=hn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(fl(v).point),this.stopAnimation()},c=(v,m)=>{const{drag:_,dragPropagation:E,onDragStart:M}=this.getProps();if(_&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=SA(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ji(S=>{let R=this.getAxisMotionValue(S).get()||0;if(Qi.test(R)){const{projection:L}=this.visualElement;if(L&&L.layout){const A=L.layout.layoutBox[S];A&&(R=zn(A)*(parseFloat(R)/100))}}this.originPoint[S]=R}),M&&Ut.update(()=>M(v,m),!1,!0),Jh(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},u=(v,m)=>{this.latestPointerEvent=v,this.latestPanInfo=m;const{dragPropagation:_,dragDirectionLock:E,onDirectionLock:M,onDrag:y}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=m;if(E&&this.currentDirection===null){this.currentDirection=KC(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",m.point,S),this.updateAxis("y",m.point,S),this.visualElement.render(),y&&Ut.update(()=>y(v,m),!1,!0)},d=(v,m)=>{this.latestPointerEvent=v,this.latestPanInfo=m,this.stop(v,m),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new jS(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:i,contextWindow:XS(this.visualElement),element:this.visualElement.current})}stop(e,t){const i=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!i)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&Ut.postRender(()=>u(i,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!Tc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=zC(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Bo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=HC(i.layoutBox,e):this.constraints=!1,this.elastic=jC(t),o!==this.constraints&&!Bo(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&ji(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=XC(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Bo(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=KA(i,o.root,this.visualElement.getTransformPagePoint());let c=GC(o.layout.layoutBox,a);if(t){const u=t(YA(c));this.hasMutatedConstraints=!!u,u&&(c=mS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=ji(p=>{if(!Tc(p,t,this.currentDirection))return;let v=d&&d[p]||{};(c===!0||c===p)&&(v={min:0,max:0});const m=o?200:1e6,_=o?40:1e7,E={type:"inertia",velocity:i?e[p]:0,bounceStiffness:m,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,E)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Jh(this.visualElement,e),i.start(Tm(e,i,0,t,this.visualElement,!1))}stopAnimation(){ji(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){ji(t=>{const{drag:i}=this.getProps();if(!Tc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-Ft(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Bo(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ji(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=WC({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),ji(c=>{if(!Tc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(Ft(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;YC.set(this.visualElement,this);const e=this.visualElement.current,t=tl(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),m=h.target,_=m!==e&&bA(m);p&&v&&!_&&this.start(h)});let i;const o=()=>{const{dragConstraints:h}=this.getProps();Bo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),i||(i=qC(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Ut.read(o);const u=sl(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(ji(v=>{const m=this.getAxisMotionValue(v);m&&(this.originPoint[v]+=h[v].translate,m.set(m.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),d&&d(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=up,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function Xx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function qC(n,e,t){const i=Qv(n,Xx(t)),o=Qv(e,Xx(t));return()=>{i(),o()}}function Tc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function KC(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class ZC extends ls{constructor(e){super(e),this.removeGroupControls=xi,this.removeListeners=xi,this.controls=new $C(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const qd=n=>(e,t)=>{n&&Ut.update(()=>n(e,t),!1,!0)};class QC extends ls{constructor(){super(...arguments),this.removePointerDownListener=xi}onPointerDown(e){this.session=new jS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:XS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:qd(e),onStart:qd(t),onMove:qd(i),onEnd:(a,c)=>{delete this.session,o&&Ut.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=tl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Kd=!1;class JC extends z.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),Kd&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,{projection:c}=i;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Kd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Ut.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=t,i.root.didUpdate(),Cm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;Kd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function $S(n){const[e,t]=US(),i=z.useContext(cm);return D.jsx(JC,{...n,layoutGroup:i,switchLayoutGroup:z.useContext(GS),isPresent:e,safeToRemove:t})}const eR={pan:{Feature:QC},drag:{Feature:ZC,ProjectionNode:FS,MeasureLayout:$S}};function jx(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&Ut.postRender(()=>a(e,fl(e)))}class tR extends ls{mount(){const{current:e}=this.node;e&&(this.unmount=MA(e,(t,i)=>(jx(this.node,i,"Start"),o=>jx(this.node,o,"End"))))}unmount(){}}class nR extends ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ll(sl(this.node.current,"focus",()=>this.onFocus()),sl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Yx(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&Ut.postRender(()=>a(e,fl(e)))}class iR extends ls{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=RA(e,(o,a)=>(Yx(this.node,a,"Start"),(c,{success:u})=>Yx(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const fp=new WeakMap,Zd=new WeakMap,rR=n=>{const e=fp.get(n.target);e&&e(n)},sR=n=>{n.forEach(rR)};function oR({root:n,...e}){const t=n||document;Zd.has(t)||Zd.set(t,{});const i=Zd.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(sR,{root:n,...e})),i[o]}function aR(n,e,t){const i=oR(e);return fp.set(n,t),i.observe(n),()=>{fp.delete(n),i.unobserve(n)}}const lR={some:0,all:1};class cR extends ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:lR[o]},u=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:m}=this.node.getProps(),_=p?v:m;_&&_(h)};this.stopObserver=aR(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(uR(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function uR({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const fR={inView:{Feature:cR},tap:{Feature:iR},focus:{Feature:nR},hover:{Feature:tR}},dR={layout:{ProjectionNode:FS,MeasureLayout:$S}},hR={...UC,...fR,...eR,...dR},dp=DC(hR,LC);function rs(n,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(n==null||n(o),t===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function $x(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function qS(...n){return e=>{let t=!1;const i=n.map(o=>{const a=$x(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():$x(n[o],null)}}}}function $s(...n){return z.useCallback(qS(...n),n)}function pR(n,e){const t=z.createContext(e),i=a=>{const{children:c,...u}=a,d=z.useMemo(()=>u,Object.values(u));return D.jsx(t.Provider,{value:d,children:c})};i.displayName=n+"Provider";function o(a){const c=z.useContext(t);if(c)return c;if(e!==void 0)return e;throw new Error(`\`${a}\` must be used within \`${n}\``)}return[i,o]}function mR(n,e=[]){let t=[];function i(a,c){const u=z.createContext(c),d=t.length;t=[...t,c];const h=v=>{var S;const{scope:m,children:_,...E}=v,M=((S=m==null?void 0:m[n])==null?void 0:S[d])||u,y=z.useMemo(()=>E,Object.values(E));return D.jsx(M.Provider,{value:y,children:_})};h.displayName=a+"Provider";function p(v,m){var M;const _=((M=m==null?void 0:m[n])==null?void 0:M[d])||u,E=z.useContext(_);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${a}\``)}return[h,p]}const o=()=>{const a=t.map(c=>z.createContext(c));return function(u){const d=(u==null?void 0:u[n])||a;return z.useMemo(()=>({[`__scope${n}`]:{...u,[n]:d}}),[u,d])}};return o.scopeName=n,[i,gR(o,...e)]}function gR(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const c=i.reduce((u,{useScope:d,scopeName:h})=>{const v=d(a)[`__scope${h}`];return{...u,...v}},{});return z.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}var Ru=globalThis!=null&&globalThis.document?z.useLayoutEffect:()=>{},vR=ew.useId||(()=>{}),xR=0;function Qd(n){const[e,t]=z.useState(vR());return Ru(()=>{t(i=>i??String(xR++))},[n]),n||(e?`radix-${e}`:"")}function Hs(n){const e=z.useRef(n);return z.useEffect(()=>{e.current=n}),z.useMemo(()=>(...t)=>{var i;return(i=e.current)==null?void 0:i.call(e,...t)},[])}function _R({prop:n,defaultProp:e,onChange:t=()=>{}}){const[i,o]=yR({defaultProp:e,onChange:t}),a=n!==void 0,c=a?n:i,u=Hs(t),d=z.useCallback(h=>{if(a){const v=typeof h=="function"?h(n):h;v!==n&&u(v)}else o(h)},[a,n,o,u]);return[c,d]}function yR({defaultProp:n,onChange:e}){const t=z.useState(n),[i]=t,o=z.useRef(i),a=Hs(e);return z.useEffect(()=>{o.current!==i&&(a(i),o.current=i)},[i,o,a]),t}var KS=uy();const SR=cy(KS);var km=z.forwardRef((n,e)=>{const{children:t,...i}=n,o=z.Children.toArray(t),a=o.find(MR);if(a){const c=a.props.children,u=o.map(d=>d===a?z.Children.count(c)>1?z.Children.only(null):z.isValidElement(c)?c.props.children:null:d);return D.jsx(hp,{...i,ref:e,children:z.isValidElement(c)?z.cloneElement(c,void 0,u):null})}return D.jsx(hp,{...i,ref:e,children:t})});km.displayName="Slot";var hp=z.forwardRef((n,e)=>{const{children:t,...i}=n;if(z.isValidElement(t)){const o=wR(t),a=TR(i,t.props);return t.type!==z.Fragment&&(a.ref=e?qS(e,o):o),z.cloneElement(t,a)}return z.Children.count(t)>1?z.Children.only(null):null});hp.displayName="SlotClone";var ER=({children:n})=>D.jsx(D.Fragment,{children:n});function MR(n){return z.isValidElement(n)&&n.type===ER}function TR(n,e){const t={...e};for(const i in e){const o=n[i],a=e[i];/^on[A-Z]/.test(i)?o&&a?t[i]=(...u)=>{a(...u),o(...u)}:o&&(t[i]=o):i==="style"?t[i]={...o,...a}:i==="className"&&(t[i]=[o,a].filter(Boolean).join(" "))}return{...n,...t}}function wR(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var AR=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],br=AR.reduce((n,e)=>{const t=z.forwardRef((i,o)=>{const{asChild:a,...c}=i,u=a?km:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),D.jsx(u,{...c,ref:o})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function bR(n,e){n&&KS.flushSync(()=>n.dispatchEvent(e))}function CR(n,e=globalThis==null?void 0:globalThis.document){const t=Hs(n);z.useEffect(()=>{const i=o=>{o.key==="Escape"&&t(o)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[t,e])}var RR="DismissableLayer",pp="dismissableLayer.update",PR="dismissableLayer.pointerDownOutside",DR="dismissableLayer.focusOutside",qx,ZS=z.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),QS=z.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:c,onDismiss:u,...d}=n,h=z.useContext(ZS),[p,v]=z.useState(null),m=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,_]=z.useState({}),E=$s(e,F=>v(F)),M=Array.from(h.layers),[y]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),S=M.indexOf(y),R=p?M.indexOf(p):-1,L=h.layersWithOutsidePointerEventsDisabled.size>0,A=R>=S,P=IR(F=>{const T=F.target,N=[...h.branches].some(O=>O.contains(T));!A||N||(o==null||o(F),c==null||c(F),F.defaultPrevented||u==null||u())},m),I=FR(F=>{const T=F.target;[...h.branches].some(O=>O.contains(T))||(a==null||a(F),c==null||c(F),F.defaultPrevented||u==null||u())},m);return CR(F=>{R===h.layers.size-1&&(i==null||i(F),!F.defaultPrevented&&u&&(F.preventDefault(),u()))},m),z.useEffect(()=>{if(p)return t&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(qx=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(p)),h.layers.add(p),Kx(),()=>{t&&h.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=qx)}},[p,m,t,h]),z.useEffect(()=>()=>{p&&(h.layers.delete(p),h.layersWithOutsidePointerEventsDisabled.delete(p),Kx())},[p,h]),z.useEffect(()=>{const F=()=>_({});return document.addEventListener(pp,F),()=>document.removeEventListener(pp,F)},[]),D.jsx(br.div,{...d,ref:E,style:{pointerEvents:L?A?"auto":"none":void 0,...n.style},onFocusCapture:rs(n.onFocusCapture,I.onFocusCapture),onBlurCapture:rs(n.onBlurCapture,I.onBlurCapture),onPointerDownCapture:rs(n.onPointerDownCapture,P.onPointerDownCapture)})});QS.displayName=RR;var LR="DismissableLayerBranch",NR=z.forwardRef((n,e)=>{const t=z.useContext(ZS),i=z.useRef(null),o=$s(e,i);return z.useEffect(()=>{const a=i.current;if(a)return t.branches.add(a),()=>{t.branches.delete(a)}},[t.branches]),D.jsx(br.div,{...n,ref:o})});NR.displayName=LR;function IR(n,e=globalThis==null?void 0:globalThis.document){const t=Hs(n),i=z.useRef(!1),o=z.useRef(()=>{});return z.useEffect(()=>{const a=u=>{if(u.target&&!i.current){let d=function(){JS(PR,t,h,{discrete:!0})};const h={originalEvent:u};u.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=d,e.addEventListener("click",o.current,{once:!0})):d()}else e.removeEventListener("click",o.current);i.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",a),e.removeEventListener("click",o.current)}},[e,t]),{onPointerDownCapture:()=>i.current=!0}}function FR(n,e=globalThis==null?void 0:globalThis.document){const t=Hs(n),i=z.useRef(!1);return z.useEffect(()=>{const o=a=>{a.target&&!i.current&&JS(DR,t,{originalEvent:a},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Kx(){const n=new CustomEvent(pp);document.dispatchEvent(n)}function JS(n,e,t,{discrete:i}){const o=t.originalEvent.target,a=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&o.addEventListener(n,e,{once:!0}),i?bR(o,a):o.dispatchEvent(a)}var Jd="focusScope.autoFocusOnMount",eh="focusScope.autoFocusOnUnmount",Zx={bubbles:!1,cancelable:!0},UR="FocusScope",eE=z.forwardRef((n,e)=>{const{loop:t=!1,trapped:i=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...c}=n,[u,d]=z.useState(null),h=Hs(o),p=Hs(a),v=z.useRef(null),m=$s(e,M=>d(M)),_=z.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;z.useEffect(()=>{if(i){let M=function(L){if(_.paused||!u)return;const A=L.target;u.contains(A)?v.current=A:es(v.current,{select:!0})},y=function(L){if(_.paused||!u)return;const A=L.relatedTarget;A!==null&&(u.contains(A)||es(v.current,{select:!0}))},S=function(L){if(document.activeElement===document.body)for(const P of L)P.removedNodes.length>0&&es(u)};document.addEventListener("focusin",M),document.addEventListener("focusout",y);const R=new MutationObserver(S);return u&&R.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",M),document.removeEventListener("focusout",y),R.disconnect()}}},[i,u,_.paused]),z.useEffect(()=>{if(u){Jx.add(_);const M=document.activeElement;if(!u.contains(M)){const S=new CustomEvent(Jd,Zx);u.addEventListener(Jd,h),u.dispatchEvent(S),S.defaultPrevented||(OR(HR(tE(u)),{select:!0}),document.activeElement===M&&es(u))}return()=>{u.removeEventListener(Jd,h),setTimeout(()=>{const S=new CustomEvent(eh,Zx);u.addEventListener(eh,p),u.dispatchEvent(S),S.defaultPrevented||es(M??document.body,{select:!0}),u.removeEventListener(eh,p),Jx.remove(_)},0)}}},[u,h,p,_]);const E=z.useCallback(M=>{if(!t&&!i||_.paused)return;const y=M.key==="Tab"&&!M.altKey&&!M.ctrlKey&&!M.metaKey,S=document.activeElement;if(y&&S){const R=M.currentTarget,[L,A]=kR(R);L&&A?!M.shiftKey&&S===A?(M.preventDefault(),t&&es(L,{select:!0})):M.shiftKey&&S===L&&(M.preventDefault(),t&&es(A,{select:!0})):S===R&&M.preventDefault()}},[t,i,_.paused]);return D.jsx(br.div,{tabIndex:-1,...c,ref:m,onKeyDown:E})});eE.displayName=UR;function OR(n,{select:e=!1}={}){const t=document.activeElement;for(const i of n)if(es(i,{select:e}),document.activeElement!==t)return}function kR(n){const e=tE(n),t=Qx(e,n),i=Qx(e.reverse(),n);return[t,i]}function tE(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function Qx(n,e){for(const t of n)if(!BR(t,{upTo:e}))return t}function BR(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function VR(n){return n instanceof HTMLInputElement&&"select"in n}function es(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&VR(n)&&e&&n.select()}}var Jx=zR();function zR(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=e_(n,e),n.unshift(e)},remove(e){var t;n=e_(n,e),(t=n[0])==null||t.resume()}}}function e_(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function HR(n){return n.filter(e=>e.tagName!=="A")}var GR="Portal",nE=z.forwardRef((n,e)=>{var u;const{container:t,...i}=n,[o,a]=z.useState(!1);Ru(()=>a(!0),[]);const c=t||o&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?SR.createPortal(D.jsx(br.div,{...i,ref:e}),c):null});nE.displayName=GR;function WR(n,e){return z.useReducer((t,i)=>e[t][i]??t,n)}var Xu=n=>{const{present:e,children:t}=n,i=XR(e),o=typeof t=="function"?t({present:i.isPresent}):z.Children.only(t),a=$s(i.ref,jR(o));return typeof t=="function"||i.isPresent?z.cloneElement(o,{ref:a}):null};Xu.displayName="Presence";function XR(n){const[e,t]=z.useState(),i=z.useRef({}),o=z.useRef(n),a=z.useRef("none"),c=n?"mounted":"unmounted",[u,d]=WR(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return z.useEffect(()=>{const h=wc(i.current);a.current=u==="mounted"?h:"none"},[u]),Ru(()=>{const h=i.current,p=o.current;if(p!==n){const m=a.current,_=wc(h);n?d("MOUNT"):_==="none"||(h==null?void 0:h.display)==="none"?d("UNMOUNT"):d(p&&m!==_?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,d]),Ru(()=>{if(e){let h;const p=e.ownerDocument.defaultView??window,v=_=>{const M=wc(i.current).includes(_.animationName);if(_.target===e&&M&&(d("ANIMATION_END"),!o.current)){const y=e.style.animationFillMode;e.style.animationFillMode="forwards",h=p.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=y)})}},m=_=>{_.target===e&&(a.current=wc(i.current))};return e.addEventListener("animationstart",m),e.addEventListener("animationcancel",v),e.addEventListener("animationend",v),()=>{p.clearTimeout(h),e.removeEventListener("animationstart",m),e.removeEventListener("animationcancel",v),e.removeEventListener("animationend",v)}}else d("ANIMATION_END")},[e,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:z.useCallback(h=>{h&&(i.current=getComputedStyle(h)),t(h)},[])}}function wc(n){return(n==null?void 0:n.animationName)||"none"}function jR(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var th=0;function YR(){z.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??t_()),document.body.insertAdjacentElement("beforeend",n[1]??t_()),th++,()=>{th===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),th--}},[])}function t_(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var qi=function(){return qi=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},qi.apply(this,arguments)};function iE(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function $R(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var uu="right-scroll-bar-position",fu="width-before-scroll-bar",qR="with-scroll-bars-hidden",KR="--removed-body-scroll-bar-size";function nh(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function ZR(n,e){var t=z.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(i){var o=t.value;o!==i&&(t.value=i,t.callback(i,o))}}}})[0];return t.callback=e,t.facade}var QR=typeof window<"u"?z.useLayoutEffect:z.useEffect,n_=new WeakMap;function JR(n,e){var t=ZR(null,function(i){return n.forEach(function(o){return nh(o,i)})});return QR(function(){var i=n_.get(t);if(i){var o=new Set(i),a=new Set(n),c=t.current;o.forEach(function(u){a.has(u)||nh(u,null)}),a.forEach(function(u){o.has(u)||nh(u,c)})}n_.set(t,n)},[n]),t}function eP(n){return n}function tP(n,e){e===void 0&&(e=eP);var t=[],i=!1,o={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(a){var c=e(a,i);return t.push(c),function(){t=t.filter(function(u){return u!==c})}},assignSyncMedium:function(a){for(i=!0;t.length;){var c=t;t=[],c.forEach(a)}t={push:function(u){return a(u)},filter:function(){return t}}},assignMedium:function(a){i=!0;var c=[];if(t.length){var u=t;t=[],u.forEach(a),c=t}var d=function(){var p=c;c=[],p.forEach(a)},h=function(){return Promise.resolve().then(d)};h(),t={push:function(p){c.push(p),h()},filter:function(p){return c=c.filter(p),t}}}};return o}function nP(n){n===void 0&&(n={});var e=tP(null);return e.options=qi({async:!0,ssr:!1},n),e}var rE=function(n){var e=n.sideCar,t=iE(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return z.createElement(i,qi({},t))};rE.isSideCarExport=!0;function iP(n,e){return n.useMedium(e),rE}var sE=nP(),ih=function(){},ju=z.forwardRef(function(n,e){var t=z.useRef(null),i=z.useState({onScrollCapture:ih,onWheelCapture:ih,onTouchMoveCapture:ih}),o=i[0],a=i[1],c=n.forwardProps,u=n.children,d=n.className,h=n.removeScrollBar,p=n.enabled,v=n.shards,m=n.sideCar,_=n.noRelative,E=n.noIsolation,M=n.inert,y=n.allowPinchZoom,S=n.as,R=S===void 0?"div":S,L=n.gapMode,A=iE(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=m,I=JR([t,e]),F=qi(qi({},A),o);return z.createElement(z.Fragment,null,p&&z.createElement(P,{sideCar:sE,removeScrollBar:h,shards:v,noRelative:_,noIsolation:E,inert:M,setCallbacks:a,allowPinchZoom:!!y,lockRef:t,gapMode:L}),c?z.cloneElement(z.Children.only(u),qi(qi({},F),{ref:I})):z.createElement(R,qi({},F,{className:d,ref:I}),u))});ju.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ju.classNames={fullWidth:fu,zeroRight:uu};var rP=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function sP(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=rP();return e&&n.setAttribute("nonce",e),n}function oP(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function aP(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var lP=function(){var n=0,e=null;return{add:function(t){n==0&&(e=sP())&&(oP(e,t),aP(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},cP=function(){var n=lP();return function(e,t){z.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},oE=function(){var n=cP(),e=function(t){var i=t.styles,o=t.dynamic;return n(i,o),null};return e},uP={left:0,top:0,right:0,gap:0},rh=function(n){return parseInt(n||"",10)||0},fP=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[rh(t),rh(i),rh(o)]},dP=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return uP;var e=fP(n),t=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-t+e[2]-e[0])}},hP=oE(),Wo="data-scroll-locked",pP=function(n,e,t,i){var o=n.left,a=n.top,c=n.right,u=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(qR,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(u,"px ").concat(i,`;
  }
  body[`).concat(Wo,`] {
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
  
  .`).concat(uu,` {
    right: `).concat(u,"px ").concat(i,`;
  }
  
  .`).concat(fu,` {
    margin-right: `).concat(u,"px ").concat(i,`;
  }
  
  .`).concat(uu," .").concat(uu,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(fu," .").concat(fu,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(Wo,`] {
    `).concat(KR,": ").concat(u,`px;
  }
`)},i_=function(){var n=parseInt(document.body.getAttribute(Wo)||"0",10);return isFinite(n)?n:0},mP=function(){z.useEffect(function(){return document.body.setAttribute(Wo,(i_()+1).toString()),function(){var n=i_()-1;n<=0?document.body.removeAttribute(Wo):document.body.setAttribute(Wo,n.toString())}},[])},gP=function(n){var e=n.noRelative,t=n.noImportant,i=n.gapMode,o=i===void 0?"margin":i;mP();var a=z.useMemo(function(){return dP(o)},[o]);return z.createElement(hP,{styles:pP(a,!e,o,t?"":"!important")})},mp=!1;if(typeof window<"u")try{var Ac=Object.defineProperty({},"passive",{get:function(){return mp=!0,!0}});window.addEventListener("test",Ac,Ac),window.removeEventListener("test",Ac,Ac)}catch{mp=!1}var So=mp?{passive:!1}:!1,vP=function(n){return n.tagName==="TEXTAREA"},aE=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!vP(n)&&t[e]==="visible")},xP=function(n){return aE(n,"overflowY")},_P=function(n){return aE(n,"overflowX")},r_=function(n,e){var t=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var o=lE(n,i);if(o){var a=cE(n,i),c=a[1],u=a[2];if(c>u)return!0}i=i.parentNode}while(i&&i!==t.body);return!1},yP=function(n){var e=n.scrollTop,t=n.scrollHeight,i=n.clientHeight;return[e,t,i]},SP=function(n){var e=n.scrollLeft,t=n.scrollWidth,i=n.clientWidth;return[e,t,i]},lE=function(n,e){return n==="v"?xP(e):_P(e)},cE=function(n,e){return n==="v"?yP(e):SP(e)},EP=function(n,e){return n==="h"&&e==="rtl"?-1:1},MP=function(n,e,t,i,o){var a=EP(n,window.getComputedStyle(e).direction),c=a*i,u=t.target,d=e.contains(u),h=!1,p=c>0,v=0,m=0;do{if(!u)break;var _=cE(n,u),E=_[0],M=_[1],y=_[2],S=M-y-a*E;(E||S)&&lE(n,u)&&(v+=S,m+=E);var R=u.parentNode;u=R&&R.nodeType===Node.DOCUMENT_FRAGMENT_NODE?R.host:R}while(!d&&u!==document.body||d&&(e.contains(u)||e===u));return(p&&Math.abs(v)<1||!p&&Math.abs(m)<1)&&(h=!0),h},bc=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},s_=function(n){return[n.deltaX,n.deltaY]},o_=function(n){return n&&"current"in n?n.current:n},TP=function(n,e){return n[0]===e[0]&&n[1]===e[1]},wP=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},AP=0,Eo=[];function bP(n){var e=z.useRef([]),t=z.useRef([0,0]),i=z.useRef(),o=z.useState(AP++)[0],a=z.useState(oE)[0],c=z.useRef(n);z.useEffect(function(){c.current=n},[n]),z.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var M=$R([n.lockRef.current],(n.shards||[]).map(o_),!0).filter(Boolean);return M.forEach(function(y){return y.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),M.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(o))})}}},[n.inert,n.lockRef.current,n.shards]);var u=z.useCallback(function(M,y){if("touches"in M&&M.touches.length===2||M.type==="wheel"&&M.ctrlKey)return!c.current.allowPinchZoom;var S=bc(M),R=t.current,L="deltaX"in M?M.deltaX:R[0]-S[0],A="deltaY"in M?M.deltaY:R[1]-S[1],P,I=M.target,F=Math.abs(L)>Math.abs(A)?"h":"v";if("touches"in M&&F==="h"&&I.type==="range")return!1;var T=window.getSelection(),N=T&&T.anchorNode,O=N?N===I||N.contains(I):!1;if(O)return!1;var V=r_(F,I);if(!V)return!0;if(V?P=F:(P=F==="v"?"h":"v",V=r_(F,I)),!V)return!1;if(!i.current&&"changedTouches"in M&&(L||A)&&(i.current=P),!P)return!0;var j=i.current||P;return MP(j,y,M,j==="h"?L:A)},[]),d=z.useCallback(function(M){var y=M;if(!(!Eo.length||Eo[Eo.length-1]!==a)){var S="deltaY"in y?s_(y):bc(y),R=e.current.filter(function(P){return P.name===y.type&&(P.target===y.target||y.target===P.shadowParent)&&TP(P.delta,S)})[0];if(R&&R.should){y.cancelable&&y.preventDefault();return}if(!R){var L=(c.current.shards||[]).map(o_).filter(Boolean).filter(function(P){return P.contains(y.target)}),A=L.length>0?u(y,L[0]):!c.current.noIsolation;A&&y.cancelable&&y.preventDefault()}}},[]),h=z.useCallback(function(M,y,S,R){var L={name:M,delta:y,target:S,should:R,shadowParent:CP(S)};e.current.push(L),setTimeout(function(){e.current=e.current.filter(function(A){return A!==L})},1)},[]),p=z.useCallback(function(M){t.current=bc(M),i.current=void 0},[]),v=z.useCallback(function(M){h(M.type,s_(M),M.target,u(M,n.lockRef.current))},[]),m=z.useCallback(function(M){h(M.type,bc(M),M.target,u(M,n.lockRef.current))},[]);z.useEffect(function(){return Eo.push(a),n.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:m}),document.addEventListener("wheel",d,So),document.addEventListener("touchmove",d,So),document.addEventListener("touchstart",p,So),function(){Eo=Eo.filter(function(M){return M!==a}),document.removeEventListener("wheel",d,So),document.removeEventListener("touchmove",d,So),document.removeEventListener("touchstart",p,So)}},[]);var _=n.removeScrollBar,E=n.inert;return z.createElement(z.Fragment,null,E?z.createElement(a,{styles:wP(o)}):null,_?z.createElement(gP,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function CP(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const RP=iP(sE,bP);var uE=z.forwardRef(function(n,e){return z.createElement(ju,qi({},n,{ref:e,sideCar:RP}))});uE.classNames=ju.classNames;var PP=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Mo=new WeakMap,Cc=new WeakMap,Rc={},sh=0,fE=function(n){return n&&(n.host||fE(n.parentNode))},DP=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=fE(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},LP=function(n,e,t,i){var o=DP(e,Array.isArray(n)?n:[n]);Rc[t]||(Rc[t]=new WeakMap);var a=Rc[t],c=[],u=new Set,d=new Set(o),h=function(v){!v||u.has(v)||(u.add(v),h(v.parentNode))};o.forEach(h);var p=function(v){!v||d.has(v)||Array.prototype.forEach.call(v.children,function(m){if(u.has(m))p(m);else try{var _=m.getAttribute(i),E=_!==null&&_!=="false",M=(Mo.get(m)||0)+1,y=(a.get(m)||0)+1;Mo.set(m,M),a.set(m,y),c.push(m),M===1&&E&&Cc.set(m,!0),y===1&&m.setAttribute(t,"true"),E||m.setAttribute(i,"true")}catch(S){console.error("aria-hidden: cannot operate on ",m,S)}})};return p(e),u.clear(),sh++,function(){c.forEach(function(v){var m=Mo.get(v)-1,_=a.get(v)-1;Mo.set(v,m),a.set(v,_),m||(Cc.has(v)||v.removeAttribute(i),Cc.delete(v)),_||v.removeAttribute(t)}),sh--,sh||(Mo=new WeakMap,Mo=new WeakMap,Cc=new WeakMap,Rc={})}},NP=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),o=PP(n);return o?(i.push.apply(i,Array.from(o.querySelectorAll("[aria-live], script"))),LP(i,o,t,"aria-hidden")):function(){return null}},Bm="Dialog",[dE]=mR(Bm),[IP,Oi]=dE(Bm),hE=n=>{const{__scopeDialog:e,children:t,open:i,defaultOpen:o,onOpenChange:a,modal:c=!0}=n,u=z.useRef(null),d=z.useRef(null),[h=!1,p]=_R({prop:i,defaultProp:o,onChange:a});return D.jsx(IP,{scope:e,triggerRef:u,contentRef:d,contentId:Qd(),titleId:Qd(),descriptionId:Qd(),open:h,onOpenChange:p,onOpenToggle:z.useCallback(()=>p(v=>!v),[p]),modal:c,children:t})};hE.displayName=Bm;var pE="DialogTrigger",mE=z.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(pE,t),a=$s(e,o.triggerRef);return D.jsx(br.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Hm(o.open),...i,ref:a,onClick:rs(n.onClick,o.onOpenToggle)})});mE.displayName=pE;var Vm="DialogPortal",[FP,gE]=dE(Vm,{forceMount:void 0}),vE=n=>{const{__scopeDialog:e,forceMount:t,children:i,container:o}=n,a=Oi(Vm,e);return D.jsx(FP,{scope:e,forceMount:t,children:z.Children.map(i,c=>D.jsx(Xu,{present:t||a.open,children:D.jsx(nE,{asChild:!0,container:o,children:c})}))})};vE.displayName=Vm;var Pu="DialogOverlay",xE=z.forwardRef((n,e)=>{const t=gE(Pu,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,a=Oi(Pu,n.__scopeDialog);return a.modal?D.jsx(Xu,{present:i||a.open,children:D.jsx(UP,{...o,ref:e})}):null});xE.displayName=Pu;var UP=z.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(Pu,t);return D.jsx(uE,{as:km,allowPinchZoom:!0,shards:[o.contentRef],children:D.jsx(br.div,{"data-state":Hm(o.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),Gs="DialogContent",_E=z.forwardRef((n,e)=>{const t=gE(Gs,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,a=Oi(Gs,n.__scopeDialog);return D.jsx(Xu,{present:i||a.open,children:a.modal?D.jsx(OP,{...o,ref:e}):D.jsx(kP,{...o,ref:e})})});_E.displayName=Gs;var OP=z.forwardRef((n,e)=>{const t=Oi(Gs,n.__scopeDialog),i=z.useRef(null),o=$s(e,t.contentRef,i);return z.useEffect(()=>{const a=i.current;if(a)return NP(a)},[]),D.jsx(yE,{...n,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:rs(n.onCloseAutoFocus,a=>{var c;a.preventDefault(),(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:rs(n.onPointerDownOutside,a=>{const c=a.detail.originalEvent,u=c.button===0&&c.ctrlKey===!0;(c.button===2||u)&&a.preventDefault()}),onFocusOutside:rs(n.onFocusOutside,a=>a.preventDefault())})}),kP=z.forwardRef((n,e)=>{const t=Oi(Gs,n.__scopeDialog),i=z.useRef(!1),o=z.useRef(!1);return D.jsx(yE,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c,u;(c=n.onCloseAutoFocus)==null||c.call(n,a),a.defaultPrevented||(i.current||(u=t.triggerRef.current)==null||u.focus(),a.preventDefault()),i.current=!1,o.current=!1},onInteractOutside:a=>{var d,h;(d=n.onInteractOutside)==null||d.call(n,a),a.defaultPrevented||(i.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=a.target;((h=t.triggerRef.current)==null?void 0:h.contains(c))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),yE=z.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:a,...c}=n,u=Oi(Gs,t),d=z.useRef(null),h=$s(e,d);return YR(),D.jsxs(D.Fragment,{children:[D.jsx(eE,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:o,onUnmountAutoFocus:a,children:D.jsx(QS,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":Hm(u.open),...c,ref:h,onDismiss:()=>u.onOpenChange(!1)})}),D.jsxs(D.Fragment,{children:[D.jsx(BP,{titleId:u.titleId}),D.jsx(zP,{contentRef:d,descriptionId:u.descriptionId})]})]})}),zm="DialogTitle",SE=z.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(zm,t);return D.jsx(br.h2,{id:o.titleId,...i,ref:e})});SE.displayName=zm;var EE="DialogDescription",ME=z.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(EE,t);return D.jsx(br.p,{id:o.descriptionId,...i,ref:e})});ME.displayName=EE;var TE="DialogClose",wE=z.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Oi(TE,t);return D.jsx(br.button,{type:"button",...i,ref:e,onClick:rs(n.onClick,()=>o.onOpenChange(!1))})});wE.displayName=TE;function Hm(n){return n?"open":"closed"}var AE="DialogTitleWarning",[SF,bE]=pR(AE,{contentName:Gs,titleName:zm,docsSlug:"dialog"}),BP=({titleId:n})=>{const e=bE(AE),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return z.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},VP="DialogDescriptionWarning",zP=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bE(VP).contentName}}.`;return z.useEffect(()=>{var a;const o=(a=n.current)==null?void 0:a.getAttribute("aria-describedby");e&&o&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},HP=hE,GP=mE,WP=vE,XP=xE,jP=_E,YP=SE,$P=ME,qP=wE;const KP=[{id:"FIELD-HISTORY/003",year:"MAY 2026 - PRESENT",role:"SOFTWARE DEVELOPER",comp:"MOUNTAINVIEW BUSINESS SOLUTION INC.",type:"FULL-TIME",img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",desc:"Developed and maintained full-stack internal tooling and database scripts using ASP.NET, MSSQL, and PowerBuilder.",refs:[]},{id:"FIELD-HISTORY/002",year:"DEC 2025 - FEB 2026",role:"SOFTWARE ENG. INTERN",comp:"BLANKWORKS STUDIO",type:"INTERNSHIP",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",desc:"Engineered high-performance notification systems with BullMQ and MongoDB, resolved critical billing bugs in production, and modernized legacy React/Next.js codebases.",refs:[]},{id:"FIELD-HISTORY/001",year:"NOV 2024 - APR 2026",role:"WEB DEVELOPER",comp:"FREELANCE",type:"CONTRACT",img:"https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80",desc:"Delivered SEO optimizations for lifestyle blogs and built custom Shopify e-commerce solutions with automated Printify fulfillment.",refs:[]}],ZP=[{id:"BUILT/002",num:"002",name:"SIP WEST",type:"WEB APPLICATION",year:"2025",status:"COMPLETED",img:"/sipwests.png",github:"https://github.com/ChristianBuena/sipwest-theme",live:"https://sipwest.com",challenge:"University departments needed a unified system to track physical assets across campuses without relying on fragmented spreadsheets.",solution:"A centralized dashboard and scanning interface, built to solve scheduling problems and manage physical assets efficiently across multiple campuses.",stack:[{name:"Lead Developer",color:"bg-blue-400"},{name:"Liquid",color:"bg-teal-400"},{name:"Shopify",color:"bg-blue-600"},{name:"Web Design",color:"bg-sky-400"}],origins:[{id:"LAB/003",label:"LAB / 003"},{id:"FIELD-HISTORY/002",label:"FIELD HISTORY / 002"}]},{id:"BUILT/003",num:"003",name:"ENDING",type:"NARRATIVE GAME",year:"2025",status:"ONGOING",img:"/ending.png",github:"https://github.com/ChristianBuena/ending",live:"#",challenge:"Creating an immersive, choice-driven narrative system that runs smoothly in the browser while maintaining complex state branches and save files.",solution:"Designed a state-machine driven dialog engine with custom local storage serialization and pixel-art sprite rendering in Canvas.",stack:[{name:"Game Developer",color:"bg-blue-400"},{name:"C#",color:"bg-amber-400"},{name:"UNITY Engine",color:"bg-sky-400"}],origins:[{id:"LAB/001",label:"LAB / 001"}]},{id:"BUILT/004",num:"004",name:"EMOTION QUEST",type:"SCHOOL PROJECT",year:"2024",status:"COMPLETED",img:"/emotionquest.png",github:"https://github.com/ChristianBuena/EmotionQuest",live:"#",challenge:"A gamified application that educates children about the importance of emotional regulation and expression.",solution:"Created a browser-based game featuring interactive mini-games, a virtual pet system, and progress tracking to encourage emotional awareness and healthy coping mechanisms.",stack:[{name:"Lead Developer",color:"bg-blue-400"},{name:"Godot Engine",color:"bg-orange-400"},{name:"GDScript",color:"bg-sky-400"}],origins:[{id:"FIELD-HISTORY/001",label:"FIELD HISTORY / 001"}]}],QP=[{n:"01",name:"OUTSTANDING PRESENTER AWARD",issuer:"TECHNO EXPO 2025",year:"2025",sig:1,img:"/4.png",desc:"Received the Outstanding Presenter Award for exceptional presentation skills at the Techno Expo 2025."},{n:"02",name:"SEO CERTIFIED",issuer:"HUBSPOT ACADEMY",year:"2026",sig:2,img:"/5.png",desc:"Mastered SEO strategies including keyword research, on-page optimization, and technical SEO to improve search engine rankings and drive organic traffic."},{n:"03",name:"PEER CODING SESSION MENTOR",issuer:"CSS",year:"2026",sig:3,img:"/9.png",desc:"Led peer coding sessions to help students with coding assignments and projects."}];function JP(){const[n,e]=z.useState(0),[t,i]=z.useState(0),[o,a]=z.useState(0),c=z.useRef(0),u=z.useRef(0),d=z.useRef(!1);z.useEffect(()=>{const p=()=>{d.current=!1;const m=window.scrollY,_=document.documentElement.scrollHeight-window.innerHeight,E=_>0?Math.min(1,m/_):0,M=Math.abs(m-c.current);c.current=m,e(m),i(E),a(M)},v=()=>{d.current||(d.current=!0,u.current=requestAnimationFrame(p))};return window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),cancelAnimationFrame(u.current)}},[]);const h=z.useCallback(p=>{const v=document.getElementById(p);if(!v)return 0;const m=v.getBoundingClientRect(),_=window.innerHeight,E=m.height+_,M=_-m.top;return Math.min(1,Math.max(0,M/E))},[n]);return{scrollY:n,totalProgress:t,velocity:o,sectionProgress:h}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gm="185",eD=0,a_=1,tD=2,du=1,nD=2,Ka=3,as=0,Qn=1,_r=2,Sr=0,Xo=1,l_=2,c_=3,u_=4,iD=5,Is=100,rD=101,sD=102,oD=103,aD=104,lD=200,cD=201,uD=202,fD=203,gp=204,vp=205,dD=206,hD=207,pD=208,mD=209,gD=210,vD=211,xD=212,_D=213,yD=214,xp=0,_p=1,yp=2,Ko=3,Sp=4,Ep=5,Mp=6,Tp=7,CE=0,SD=1,ED=2,Ji=0,RE=1,PE=2,DE=3,LE=4,NE=5,IE=6,FE=7,UE=300,Ws=301,Zo=302,oh=303,ah=304,Yu=306,wp=1e3,yr=1001,Ap=1002,An=1003,MD=1004,Pc=1005,In=1006,lh=1007,ks=1008,gi=1009,OE=1010,kE=1011,ol=1012,Wm=1013,nr=1014,Ki=1015,Tr=1016,Xm=1017,jm=1018,al=1020,BE=35902,VE=35899,zE=1021,HE=1022,Ii=1023,wr=1026,Bs=1027,GE=1028,Ym=1029,Xs=1030,$m=1031,qm=1033,hu=33776,pu=33777,mu=33778,gu=33779,bp=35840,Cp=35841,Rp=35842,Pp=35843,Dp=36196,Lp=37492,Np=37496,Ip=37488,Fp=37489,Du=37490,Up=37491,Op=37808,kp=37809,Bp=37810,Vp=37811,zp=37812,Hp=37813,Gp=37814,Wp=37815,Xp=37816,jp=37817,Yp=37818,$p=37819,qp=37820,Kp=37821,Zp=36492,Qp=36494,Jp=36495,em=36283,tm=36284,Lu=36285,nm=36286,TD=3200,f_=0,wD=1,ts="",mi="srgb",Nu="srgb-linear",Iu="linear",Nt="srgb",To=7680,d_=519,AD=512,bD=513,CD=514,Km=515,RD=516,PD=517,Zm=518,DD=519,h_=35044,p_="300 es",Zi=2e3,Fu=2001;function LD(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Uu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ND(){const n=Uu("canvas");return n.style.display="block",n}const m_={};function g_(...n){const e="THREE."+n.shift();console.log(e,...n)}function WE(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=WE(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=WE(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function jo(...n){const e=n.join(" ");e in m_||(m_[e]=!0,at(...n))}function ID(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const FD={[xp]:_p,[yp]:Mp,[Sp]:Tp,[Ko]:Ep,[_p]:xp,[Mp]:yp,[Tp]:Sp,[Ep]:Ko};class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=Math.PI/180,im=180/Math.PI;function dl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function UD(n,e){return(n%e+e)%e}function uh(n,e,t){return(1-t)*n+t*e}function Ha(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const eg=class eg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eg.prototype.isVector2=!0;let bt=eg;class ia{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let d=i[o+0],h=i[o+1],p=i[o+2],v=i[o+3],m=a[c+0],_=a[c+1],E=a[c+2],M=a[c+3];if(v!==M||d!==m||h!==_||p!==E){let y=d*m+h*_+p*E+v*M;y<0&&(m=-m,_=-_,E=-E,M=-M,y=-y);let S=1-u;if(y<.9995){const R=Math.acos(y),L=Math.sin(R);S=Math.sin(S*R)/L,u=Math.sin(u*R)/L,d=d*S+m*u,h=h*S+_*u,p=p*S+E*u,v=v*S+M*u}else{d=d*S+m*u,h=h*S+_*u,p=p*S+E*u,v=v*S+M*u;const R=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=R,h*=R,p*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],d=i[o+1],h=i[o+2],p=i[o+3],v=a[c],m=a[c+1],_=a[c+2],E=a[c+3];return e[t]=u*E+p*v+d*_-h*m,e[t+1]=d*E+p*m+h*v-u*_,e[t+2]=h*E+p*_+u*m-d*v,e[t+3]=p*E-u*v-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(o/2),v=u(a/2),m=d(i/2),_=d(o/2),E=d(a/2);switch(c){case"XYZ":this._x=m*p*v+h*_*E,this._y=h*_*v-m*p*E,this._z=h*p*E+m*_*v,this._w=h*p*v-m*_*E;break;case"YXZ":this._x=m*p*v+h*_*E,this._y=h*_*v-m*p*E,this._z=h*p*E-m*_*v,this._w=h*p*v+m*_*E;break;case"ZXY":this._x=m*p*v-h*_*E,this._y=h*_*v+m*p*E,this._z=h*p*E+m*_*v,this._w=h*p*v-m*_*E;break;case"ZYX":this._x=m*p*v-h*_*E,this._y=h*_*v+m*p*E,this._z=h*p*E-m*_*v,this._w=h*p*v+m*_*E;break;case"YZX":this._x=m*p*v+h*_*E,this._y=h*_*v+m*p*E,this._z=h*p*E-m*_*v,this._w=h*p*v-m*_*E;break;case"XZY":this._x=m*p*v-h*_*E,this._y=h*_*v-m*p*E,this._z=h*p*E+m*_*v,this._w=h*p*v+m*_*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],m=i+u+v;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(i>u&&i>v){const _=2*Math.sqrt(1+i-u-v);this._w=(p-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>v){const _=2*Math.sqrt(1+u-i-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-i-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-i*h,this._z=a*p+c*h+i*d-o*u,this._w=c*p-i*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tg=class tg{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(v_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(v_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),v=2*(a*i-c*t);return this.x=t+d*h+c*v-u*p,this.y=i+d*p+u*h-a*v,this.z=o+d*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-i*d,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tg.prototype.isVector3=!0;let le=tg;const fh=new le,v_=new ia,ng=class ng{constructor(e,t,i,o,a,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h)}set(e,t,i,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],v=i[7],m=i[2],_=i[5],E=i[8],M=o[0],y=o[3],S=o[6],R=o[1],L=o[4],A=o[7],P=o[2],I=o[5],F=o[8];return a[0]=c*M+u*R+d*P,a[3]=c*y+u*L+d*I,a[6]=c*S+u*A+d*F,a[1]=h*M+p*R+v*P,a[4]=h*y+p*L+v*I,a[7]=h*S+p*A+v*F,a[2]=m*M+_*R+E*P,a[5]=m*y+_*L+E*I,a[8]=m*S+_*A+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,m=u*d-p*a,_=h*a-c*d,E=t*v+i*m+o*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(o*h-p*i)*M,e[2]=(u*i-o*c)*M,e[3]=m*M,e[4]=(p*t-o*d)*M,e[5]=(o*a-u*t)*M,e[6]=_*M,e[7]=(i*d-h*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return jo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dh.makeScale(e,t)),this}rotate(e){return jo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return jo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ng.prototype.isMatrix3=!0;let ut=ng;const dh=new ut,x_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),__=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OD(){const n={enabled:!0,workingColorSpace:Nu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Nt&&(o.r=Er(o.r),o.g=Er(o.g),o.b=Er(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=Yo(o.r),o.g=Yo(o.g),o.b=Yo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ts?Iu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nu]:{primaries:e,whitePoint:i,transfer:Iu,toXYZ:x_,fromXYZ:__,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:x_,fromXYZ:__,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),n}const vt=OD();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wo;class kD{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wo===void 0&&(wo=Uu("canvas")),wo.width=e.width,wo.height=e.height;const o=wo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=wo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Er(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BD=0;class Qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BD++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(hh(o[c].image)):a.push(hh(o[c]))}else a=hh(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function hh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kD.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let VD=0;const ph=new le;class Hn extends qs{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=yr,o=yr,a=In,c=ks,u=Ii,d=gi,h=Hn.DEFAULT_ANISOTROPY,p=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VD++}),this.uuid=dl(),this.name="",this.source=new Qm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wp:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wp:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=UE;Hn.DEFAULT_ANISOTROPY=1;const ig=class ig{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],m=d[1],_=d[5],E=d[9],M=d[2],y=d[6],S=d[10];if(Math.abs(p-m)<.01&&Math.abs(v-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(v+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,A=(_+1)/2,P=(S+1)/2,I=(p+m)/4,F=(v+M)/4,T=(E+y)/4;return L>A&&L>P?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=I/i,a=F/i):A>P?A<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(A),i=I/o,a=T/o):P<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(P),i=F/a,o=T/a),this.set(i,o,a,t),this}let R=Math.sqrt((y-E)*(y-E)+(v-M)*(v-M)+(m-p)*(m-p));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(v-M)/R,this.z=(m-p)/R,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ig.prototype.isVector4=!0;let tn=ig;class zD extends qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new Hn(o),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Qm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends zD{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class XE extends Hn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HD extends Hn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=class ku{constructor(e,t,i,o,a,c,u,d,h,p,v,m,_,E,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h,p,v,m,_,E,M,y)}set(e,t,i,o,a,c,u,d,h,p,v,m,_,E,M,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=d,S[2]=h,S[6]=p,S[10]=v,S[14]=m,S[3]=_,S[7]=E,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ku().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,o=1/Ao.setFromMatrixColumn(e,0).length(),a=1/Ao.setFromMatrixColumn(e,1).length(),c=1/Ao.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=c*p,_=c*v,E=u*p,M=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+E*h,t[5]=m-M*h,t[9]=-u*d,t[2]=M-m*h,t[6]=E+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*p,_=d*v,E=h*p,M=h*v;t[0]=m+M*u,t[4]=E*u-_,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=_*u-E,t[6]=M+m*u,t[10]=c*d}else if(e.order==="ZXY"){const m=d*p,_=d*v,E=h*p,M=h*v;t[0]=m-M*u,t[4]=-c*v,t[8]=E+_*u,t[1]=_+E*u,t[5]=c*p,t[9]=M-m*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const m=c*p,_=c*v,E=u*p,M=u*v;t[0]=d*p,t[4]=E*h-_,t[8]=m*h+M,t[1]=d*v,t[5]=M*h+m,t[9]=_*h-E,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,E=u*d,M=u*h;t[0]=d*p,t[4]=M-m*v,t[8]=E*v+_,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*v+E,t[10]=m-M*v}else if(e.order==="XZY"){const m=c*d,_=c*h,E=u*d,M=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=m*v+M,t[5]=c*p,t[9]=_*v-E,t[2]=E*v-_,t[6]=u*p,t[10]=M*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GD,e,WD)}lookAt(e,t,i){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Yr.crossVectors(i,ri),Yr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Yr.crossVectors(i,ri)),Yr.normalize(),Dc.crossVectors(ri,Yr),o[0]=Yr.x,o[4]=Dc.x,o[8]=ri.x,o[1]=Yr.y,o[5]=Dc.y,o[9]=ri.y,o[2]=Yr.z,o[6]=Dc.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],v=i[5],m=i[9],_=i[13],E=i[2],M=i[6],y=i[10],S=i[14],R=i[3],L=i[7],A=i[11],P=i[15],I=o[0],F=o[4],T=o[8],N=o[12],O=o[1],V=o[5],j=o[9],H=o[13],ee=o[2],K=o[6],ue=o[10],Z=o[14],W=o[3],ne=o[7],oe=o[11],k=o[15];return a[0]=c*I+u*O+d*ee+h*W,a[4]=c*F+u*V+d*K+h*ne,a[8]=c*T+u*j+d*ue+h*oe,a[12]=c*N+u*H+d*Z+h*k,a[1]=p*I+v*O+m*ee+_*W,a[5]=p*F+v*V+m*K+_*ne,a[9]=p*T+v*j+m*ue+_*oe,a[13]=p*N+v*H+m*Z+_*k,a[2]=E*I+M*O+y*ee+S*W,a[6]=E*F+M*V+y*K+S*ne,a[10]=E*T+M*j+y*ue+S*oe,a[14]=E*N+M*H+y*Z+S*k,a[3]=R*I+L*O+A*ee+P*W,a[7]=R*F+L*V+A*K+P*ne,a[11]=R*T+L*j+A*ue+P*oe,a[15]=R*N+L*H+A*Z+P*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],m=e[10],_=e[14],E=e[3],M=e[7],y=e[11],S=e[15],R=d*_-h*m,L=u*_-h*v,A=u*m-d*v,P=c*_-h*p,I=c*m-d*p,F=c*v-u*p;return t*(M*R-y*L+S*A)-i*(E*R-y*P+S*I)+o*(E*L-M*P+S*F)-a*(E*A-M*I+y*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[1],c=e[5],u=e[9],d=e[2],h=e[6],p=e[10];return t*(c*p-u*h)-i*(a*p-u*d)+o*(a*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],m=e[10],_=e[11],E=e[12],M=e[13],y=e[14],S=e[15],R=t*u-i*c,L=t*d-o*c,A=t*h-a*c,P=i*d-o*u,I=i*h-a*u,F=o*h-a*d,T=p*M-v*E,N=p*y-m*E,O=p*S-_*E,V=v*y-m*M,j=v*S-_*M,H=m*S-_*y,ee=R*H-L*j+A*V+P*O-I*N+F*T;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ee;return e[0]=(u*H-d*j+h*V)*K,e[1]=(o*j-i*H-a*V)*K,e[2]=(M*F-y*I+S*P)*K,e[3]=(m*I-v*F-_*P)*K,e[4]=(d*O-c*H-h*N)*K,e[5]=(t*H-o*O+a*N)*K,e[6]=(y*A-E*F-S*L)*K,e[7]=(p*F-m*A+_*L)*K,e[8]=(c*j-u*O+h*T)*K,e[9]=(i*O-t*j-a*T)*K,e[10]=(E*I-M*A+S*R)*K,e[11]=(v*A-p*I-_*R)*K,e[12]=(u*N-c*V-d*T)*K,e[13]=(t*V-i*N+o*T)*K,e[14]=(M*L-E*P-y*R)*K,e[15]=(p*P-v*L+m*R)*K,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+i,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,v=u+u,m=a*h,_=a*p,E=a*v,M=c*p,y=c*v,S=u*v,R=d*h,L=d*p,A=d*v,P=i.x,I=i.y,F=i.z;return o[0]=(1-(M+S))*P,o[1]=(_+A)*P,o[2]=(E-L)*P,o[3]=0,o[4]=(_-A)*I,o[5]=(1-(m+S))*I,o[6]=(y+R)*I,o[7]=0,o[8]=(E+L)*F,o[9]=(y-R)*F,o[10]=(1-(m+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let c=Ao.set(o[0],o[1],o[2]).length();const u=Ao.set(o[4],o[5],o[6]).length(),d=Ao.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ci.copy(this);const h=1/c,p=1/u,v=1/d;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=p,Ci.elements[5]*=p,Ci.elements[6]*=p,Ci.elements[8]*=v,Ci.elements[9]*=v,Ci.elements[10]*=v,t.setFromRotationMatrix(Ci),i.x=c,i.y=u,i.z=d,this}makePerspective(e,t,i,o,a,c,u=Zi,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(i-o),m=(t+e)/(t-e),_=(i+o)/(i-o);let E,M;if(d)E=a/(c-a),M=c*a/(c-a);else if(u===Zi)E=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Fu)E=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Zi,d=!1){const h=this.elements,p=2/(t-e),v=2/(i-o),m=-(t+e)/(t-e),_=-(i+o)/(i-o);let E,M;if(d)E=1/(c-a),M=c/(c-a);else if(u===Zi)E=-2/(c-a),M=-(c+a)/(c-a);else if(u===Fu)E=-1/(c-a),M=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ku.prototype.isMatrix4=!0;let rn=ku;const Ao=new le,Ci=new rn,GD=new le(0,0,0),WD=new le(1,1,1),Yr=new le,Dc=new le,ri=new le,y_=new rn,S_=new ia;class js{constructor(e=0,t=0,i=0,o=js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],v=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return S_.setFromEuler(this),this.setFromQuaternion(S_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class jE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XD=0;const E_=new le,bo=new ia,hr=new rn,Lc=new le,Ga=new le,jD=new le,YD=new ia,M_=new le(1,0,0),T_=new le(0,1,0),w_=new le(0,0,1),A_={type:"added"},$D={type:"removed"},Co={type:"childadded",child:null},mh={type:"childremoved",child:null};class Jn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XD++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new le,t=new js,i=new ia,o=new le(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new ut}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(M_,e)}rotateY(e){return this.rotateOnAxis(T_,e)}rotateZ(e){return this.rotateOnAxis(w_,e)}translateOnAxis(e,t){return E_.copy(e).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(M_,e)}translateY(e){return this.translateOnAxis(T_,e)}translateZ(e){return this.translateOnAxis(w_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lc.copy(e):Lc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Ga,Lc,this.up):hr.lookAt(Lc,Ga,this.up),this.quaternion.setFromRotationMatrix(hr),o&&(hr.extractRotation(o.matrixWorld),bo.setFromRotationMatrix(hr),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A_),Co.child=e,this.dispatchEvent(Co),Co.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($D),mh.child=e,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A_),Co.child=e,this.dispatchEvent(Co),Co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,jD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,YD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),m=c(e.skeletons),_=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Jn.DEFAULT_UP=new le(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nc extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qD={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),S=this._getHandJoint(h,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=p.position.distanceTo(v.position),_=.02,E=.005;h.inputState.pinching&&m>_+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(qD)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const YE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function vh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class At{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=vt.workingColorSpace){if(e=UD(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=vh(c,a,e+1/3),this.g=vh(c,a,e),this.b=vh(c,a,e-1/3)}return vt.colorSpaceToWorking(this,o),this}setStyle(e,t=mi){function i(a){a!==void 0&&parseFloat(a)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const i=YE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return vt.workingToColorSpace(Nn.copy(this),e),Math.round(xt(Nn.r*255,0,255))*65536+Math.round(xt(Nn.g*255,0,255))*256+Math.round(xt(Nn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,o=Nn.g,a=Nn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case i:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-i)/v+2;break;case a:d=(i-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=mi){vt.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,i=Nn.g,o=Nn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Ic);const i=uh($r.h,Ic.h,t),o=uh($r.s,Ic.s,t),a=uh($r.l,Ic.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new At;At.NAMES=YE;class KD extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new le,pr=new le,xh=new le,mr=new le,Ro=new le,Po=new le,b_=new le,_h=new le,yh=new le,Sh=new le,Eh=new tn,Mh=new tn,Th=new tn;class Ni{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ri.subVectors(e,t),o.cross(Ri);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Ri.subVectors(o,t),pr.subVectors(i,t),xh.subVectors(e,t);const c=Ri.dot(Ri),u=Ri.dot(pr),d=Ri.dot(xh),h=pr.dot(pr),p=pr.dot(xh),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const m=1/v,_=(h*d-u*p)*m,E=(c*p-u*d)*m;return a.set(1-_-E,E,_)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,i,o,a,c,u,d){return this.getBarycoord(e,t,i,o,mr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,mr.x),d.addScaledVector(c,mr.y),d.addScaledVector(u,mr.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return Eh.setScalar(0),Mh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(e,t),Mh.fromBufferAttribute(e,i),Th.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Eh,a.x),c.addScaledVector(Mh,a.y),c.addScaledVector(Th,a.z),c}static isFrontFacing(e,t,i,o){return Ri.subVectors(i,t),pr.subVectors(e,t),Ri.cross(pr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ri.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Ni.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;Ro.subVectors(o,i),Po.subVectors(a,i),_h.subVectors(e,i);const d=Ro.dot(_h),h=Po.dot(_h);if(d<=0&&h<=0)return t.copy(i);yh.subVectors(e,o);const p=Ro.dot(yh),v=Po.dot(yh);if(p>=0&&v<=p)return t.copy(o);const m=d*v-p*h;if(m<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(Ro,c);Sh.subVectors(e,a);const _=Ro.dot(Sh),E=Po.dot(Sh);if(E>=0&&_<=E)return t.copy(a);const M=_*h-d*E;if(M<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(i).addScaledVector(Po,u);const y=p*E-_*v;if(y<=0&&v-p>=0&&_-E>=0)return b_.subVectors(a,o),u=(v-p)/(v-p+(_-E)),t.copy(o).addScaledVector(b_,u);const S=1/(y+M+m);return c=M*S,u=m*S,t.copy(i).addScaledVector(Ro,c).addScaledVector(Po,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hl{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Pi):Pi.fromBufferAttribute(a,c),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fc.copy(i.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),Uc.subVectors(this.max,Wa),Do.subVectors(e.a,Wa),Lo.subVectors(e.b,Wa),No.subVectors(e.c,Wa),qr.subVectors(Lo,Do),Kr.subVectors(No,Lo),Cs.subVectors(Do,No);let t=[0,-qr.z,qr.y,0,-Kr.z,Kr.y,0,-Cs.z,Cs.y,qr.z,0,-qr.x,Kr.z,0,-Kr.x,Cs.z,0,-Cs.x,-qr.y,qr.x,0,-Kr.y,Kr.x,0,-Cs.y,Cs.x,0];return!wh(t,Do,Lo,No,Uc)||(t=[1,0,0,0,1,0,0,0,1],!wh(t,Do,Lo,No,Uc))?!1:(Oc.crossVectors(qr,Kr),t=[Oc.x,Oc.y,Oc.z],wh(t,Do,Lo,No,Uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new le,new le,new le,new le,new le,new le,new le,new le],Pi=new le,Fc=new hl,Do=new le,Lo=new le,No=new le,qr=new le,Kr=new le,Cs=new le,Wa=new le,Uc=new le,Oc=new le,Rs=new le;function wh(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){Rs.fromArray(n,a);const u=o.x*Math.abs(Rs.x)+o.y*Math.abs(Rs.y)+o.z*Math.abs(Rs.z),d=e.dot(Rs),h=t.dot(Rs),p=i.dot(Rs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const an=new le,kc=new bt;let ZD=0;class Ui extends qs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZD++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=h_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ha(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),o=Zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),o=Zn(o,this.array),a=Zn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $E extends Ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qE extends Ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mr extends Ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}const QD=new hl,Xa=new le,Ah=new le;class $u{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):QD.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const t=Xa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Xa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(Ah)),this.expandByPoint(Xa.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let JD=0;const pi=new rn,bh=new Jn,Io=new le,si=new hl,ja=new hl,_n=new le;class ki extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JD++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LD(e)?qE:$E)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ut().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mr(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];si.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ja.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(si.min,ja.min),si.expandByPoint(_n),_n.addVectors(si.max,ja.max),si.expandByPoint(_n)):(si.expandByPoint(ja.min),si.expandByPoint(ja.max))}si.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)_n.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(_n));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)_n.fromBufferAttribute(u,h),d&&(Io.fromBufferAttribute(e,h),_n.add(Io)),o=Math.max(o,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let T=0;T<i.count;T++)u[T]=new le,d[T]=new le;const h=new le,p=new le,v=new le,m=new bt,_=new bt,E=new bt,M=new le,y=new le;function S(T,N,O){h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,N),v.fromBufferAttribute(i,O),m.fromBufferAttribute(a,T),_.fromBufferAttribute(a,N),E.fromBufferAttribute(a,O),p.sub(h),v.sub(h),_.sub(m),E.sub(m);const V=1/(_.x*E.y-E.x*_.y);isFinite(V)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(v,-_.y).multiplyScalar(V),y.copy(v).multiplyScalar(_.x).addScaledVector(p,-E.x).multiplyScalar(V),u[T].add(M),u[N].add(M),u[O].add(M),d[T].add(y),d[N].add(y),d[O].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,N=R.length;T<N;++T){const O=R[T],V=O.start,j=O.count;for(let H=V,ee=V+j;H<ee;H+=3)S(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const L=new le,A=new le,P=new le,I=new le;function F(T){P.fromBufferAttribute(o,T),I.copy(P);const N=u[T];L.copy(N),L.sub(P.multiplyScalar(P.dot(N))).normalize(),A.crossVectors(I,N);const V=A.dot(d[T])<0?-1:1;c.setXYZW(T,L.x,L.y,L.z,V)}for(let T=0,N=R.length;T<N;++T){const O=R[T],V=O.start,j=O.count;for(let H=V,ee=V+j;H<ee;H+=3)F(e.getX(H+0)),F(e.getX(H+1)),F(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const o=new le,a=new le,c=new le,u=new le,d=new le,h=new le,p=new le,v=new le;if(e)for(let m=0,_=e.count;m<_;m+=3){const E=e.getX(m+0),M=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),u.add(p),d.add(p),h.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,m=new h.constructor(d.length*p);let _=0,E=0;for(let M=0,y=d.length;M<y;M++){u.isInterleavedBufferAttribute?_=d[M]*u.data.stride+u.offset:_=d[M]*p;for(let S=0;S<p;S++)m[E++]=h[_++]}return new Ui(m,p,v)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ki,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const m=h[p],_=e(m,i);d.push(_)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,m=h.length;v<m;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let m=0,_=v.length;m<_;m++)p.push(v[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let e2=0;class pl extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Xo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gp,this.blendDst=vp,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector2&&i&&i.isVector2||o&&o.isEuler&&i&&i.isEuler||o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gp&&(i.blendSrc=this.blendSrc),this.blendDst!==vp&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(i.stencilFail=this.stencilFail),this.stencilZFail!==To&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new bt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new le,Ch=new le,Bc=new le,Zr=new le,Rh=new le,Vc=new le,Ph=new le;class KE{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Ch.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Ch);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Bc),u=Zr.dot(this.direction),d=-Zr.dot(Bc),h=Zr.lengthSq(),p=Math.abs(1-c*c);let v,m,_,E;if(p>0)if(v=c*d-u,m=c*u-d,E=a*p,v>=0)if(m>=-E)if(m<=E){const M=1/p;v*=M,m*=M,_=v*(v+c*m+2*u)+m*(c*v+m+2*d)+h}else m=a,v=Math.max(0,-(c*m+u)),_=-v*v+m*(m+2*d)+h;else m=-a,v=Math.max(0,-(c*m+u)),_=-v*v+m*(m+2*d)+h;else m<=-E?(v=Math.max(0,-(-c*a+u)),m=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+m*(m+2*d)+h):m<=E?(v=0,m=Math.min(Math.max(-a,-d),a),_=m*(m+2*d)+h):(v=Math.max(0,-(c*a+u)),m=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+m*(m+2*d)+h);else m=c>0?-a:a,v=Math.max(0,-(c*m+u)),_=-v*v+m*(m+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ch).addScaledVector(Bc,m),_}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),o=vr.dot(vr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(u=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,o,a){Rh.subVectors(t,e),Vc.subVectors(i,e),Ph.crossVectors(Rh,Vc);let c=this.direction.dot(Ph),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Zr.subVectors(this.origin,e);const d=u*this.direction.dot(Vc.crossVectors(Zr,Vc));if(d<0)return null;const h=u*this.direction.dot(Rh.cross(Zr));if(h<0||d+h>c)return null;const p=-u*Zr.dot(Ph);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ZE extends pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=CE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const C_=new rn,Ps=new KE,zc=new $u,R_=new le,Hc=new le,Gc=new le,Wc=new le,Dh=new le,Xc=new le,P_=new le,jc=new le;class Ar extends Jn{constructor(e=new ki,t=new ZE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Xc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],v=a[d];p!==0&&(Dh.fromBufferAttribute(v,e),c?Xc.addScaledVector(Dh,p):Xc.addScaledVector(Dh.sub(t),p))}t.add(Xc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zc.copy(i.boundingSphere),zc.applyMatrix4(a),Ps.copy(e.ray).recast(e.near),!(zc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(zc,R_)===null||Ps.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(C_.copy(a).invert(),Ps.copy(e.ray).applyMatrix4(C_),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,m=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=m.length;E<M;E++){const y=m[E],S=c[y.materialIndex],R=Math.max(y.start,_.start),L=Math.min(u.count,Math.min(y.start+y.count,_.start+_.count));for(let A=R,P=L;A<P;A+=3){const I=u.getX(A),F=u.getX(A+1),T=u.getX(A+2);o=Yc(this,S,e,i,h,p,v,I,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,_.start),M=Math.min(u.count,_.start+_.count);for(let y=E,S=M;y<S;y+=3){const R=u.getX(y),L=u.getX(y+1),A=u.getX(y+2);o=Yc(this,c,e,i,h,p,v,R,L,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=m.length;E<M;E++){const y=m[E],S=c[y.materialIndex],R=Math.max(y.start,_.start),L=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let A=R,P=L;A<P;A+=3){const I=A,F=A+1,T=A+2;o=Yc(this,S,e,i,h,p,v,I,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,_.start),M=Math.min(d.count,_.start+_.count);for(let y=E,S=M;y<S;y+=3){const R=y,L=y+1,A=y+2;o=Yc(this,c,e,i,h,p,v,R,L,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function t2(n,e,t,i,o,a,c,u){let d;if(e.side===Qn?d=i.intersectTriangle(c,a,o,!0,u):d=i.intersectTriangle(o,a,c,e.side===as,u),d===null)return null;jc.copy(u),jc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(jc);return h<t.near||h>t.far?null:{distance:h,point:jc.clone(),object:n}}function Yc(n,e,t,i,o,a,c,u,d,h){n.getVertexPosition(u,Hc),n.getVertexPosition(d,Gc),n.getVertexPosition(h,Wc);const p=t2(n,e,t,i,Hc,Gc,Wc,P_);if(p){const v=new le;Ni.getBarycoord(P_,Hc,Gc,Wc,v),o&&(p.uv=Ni.getInterpolatedAttribute(o,u,d,h,v,new bt)),a&&(p.uv1=Ni.getInterpolatedAttribute(a,u,d,h,v,new bt)),c&&(p.normal=Ni.getInterpolatedAttribute(c,u,d,h,v,new le),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:h,normal:new le,materialIndex:0};Ni.getNormal(Hc,Gc,Wc,m.normal),p.face=m,p.barycoord=v}return p}class n2 extends Hn{constructor(e=null,t=1,i=1,o,a,c,u,d,h=An,p=An,v,m){super(null,c,u,d,h,p,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lh=new le,i2=new le,r2=new ut;class Ns{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Lh.subVectors(i,t).cross(i2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(Lh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||r2.getNormalMatrix(e),o=this.coplanarPoint(Lh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new $u,s2=new bt(.5,.5),$c=new le;class QE{constructor(e=new Ns,t=new Ns,i=new Ns,o=new Ns,a=new Ns,c=new Ns){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],m=a[6],_=a[7],E=a[8],M=a[9],y=a[10],S=a[11],R=a[12],L=a[13],A=a[14],P=a[15];if(o[0].setComponents(h-c,_-p,S-E,P-R).normalize(),o[1].setComponents(h+c,_+p,S+E,P+R).normalize(),o[2].setComponents(h+u,_+v,S+M,P+L).normalize(),o[3].setComponents(h-u,_-v,S-M,P-L).normalize(),i)o[4].setComponents(d,m,y,A).normalize(),o[5].setComponents(h-d,_-m,S-y,P-A).normalize();else if(o[4].setComponents(h-d,_-m,S-y,P-A).normalize(),t===Zi)o[5].setComponents(h+d,_+m,S+y,P+A).normalize();else if(t===Fu)o[5].setComponents(d,m,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const t=s2.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if($c.x=o.normal.x>0?e.max.x:e.min.x,$c.y=o.normal.y>0?e.max.y:e.min.y,$c.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint($c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class JE extends pl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D_=new rn,rm=new KE,qc=new $u,Kc=new le;class o2 extends Jn{constructor(e=new ki,t=new JE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(o),qc.radius+=a,e.ray.intersectsSphere(qc)===!1)return;D_.copy(o).invert(),rm.copy(e.ray).applyMatrix4(D_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,v=i.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let E=m,M=_;E<M;E++){const y=h.getX(E);Kc.fromBufferAttribute(v,y),L_(Kc,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(v.count,c.start+c.count);for(let E=m,M=_;E<M;E++)Kc.fromBufferAttribute(v,E),L_(Kc,E,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function L_(n,e,t,i,o,a,c){const u=rm.distanceSqToPoint(n);if(u<t){const d=new le;rm.closestPointToPoint(n,d),d.applyMatrix4(i);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class eM extends Hn{constructor(e=[],t=Ws,i,o,a,c,u,d,h,p){super(e,t,i,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qo extends Hn{constructor(e,t,i=nr,o,a,c,u=An,d=An,h,p=wr,v=1){if(p!==wr&&p!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,c,u,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class a2 extends Qo{constructor(e,t=nr,i=Ws,o,a,c=An,u=An,d,h=wr){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,i,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tM extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ml extends ki{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],v=[];let m=0,_=0;E("z","y","x",-1,-1,i,t,e,c,a,0),E("z","y","x",1,-1,i,t,-e,c,a,1),E("x","z","y",1,1,e,i,t,o,c,2),E("x","z","y",1,-1,e,i,-t,o,c,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new Mr(h,3)),this.setAttribute("normal",new Mr(p,3)),this.setAttribute("uv",new Mr(v,2));function E(M,y,S,R,L,A,P,I,F,T,N){const O=A/F,V=P/T,j=A/2,H=P/2,ee=I/2,K=F+1,ue=T+1;let Z=0,W=0;const ne=new le;for(let oe=0;oe<ue;oe++){const k=oe*V-H;for(let J=0;J<K;J++){const Fe=J*O-j;ne[M]=Fe*R,ne[y]=k*L,ne[S]=ee,h.push(ne.x,ne.y,ne.z),ne[M]=0,ne[y]=0,ne[S]=I>0?1:-1,p.push(ne.x,ne.y,ne.z),v.push(J/F),v.push(1-oe/T),Z+=1}}for(let oe=0;oe<T;oe++)for(let k=0;k<F;k++){const J=m+k+K*oe,Fe=m+k+K*(oe+1),Xe=m+(k+1)+K*(oe+1),Ve=m+(k+1)+K*oe;d.push(J,Fe,Ve),d.push(Fe,Xe,Ve),W+=6}u.addGroup(_,W,N),_+=W,m+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qu extends ki{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(o),h=u+1,p=d+1,v=e/u,m=t/d,_=[],E=[],M=[],y=[];for(let S=0;S<p;S++){const R=S*m-c;for(let L=0;L<h;L++){const A=L*v-a;E.push(A,-R,0),M.push(0,0,1),y.push(L/u),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<u;R++){const L=R+h*S,A=R+h*(S+1),P=R+1+h*(S+1),I=R+1+h*S;_.push(L,A,I),_.push(A,P,I)}this.setIndex(_),this.setAttribute("position",new Mr(E,3)),this.setAttribute("normal",new Mr(M,3)),this.setAttribute("uv",new Mr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Jo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];if(N_(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(N_(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function Bn(n){const e={};for(let t=0;t<n.length;t++){const i=Jo(n[t]);for(const o in i)e[o]=i[o]}return e}function N_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function l2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const c2={clone:Jo,merge:Bn};var u2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u2,this.fragmentShader=f2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=l2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const o=e.uniforms[i];switch(this.uniforms[i]={},o.type){case"t":this.uniforms[i].value=t[o.value]||null;break;case"c":this.uniforms[i].value=new At().setHex(o.value);break;case"v2":this.uniforms[i].value=new bt().fromArray(o.value);break;case"v3":this.uniforms[i].value=new le().fromArray(o.value);break;case"v4":this.uniforms[i].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[i].value=new rn().fromArray(o.value);break;default:this.uniforms[i].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class d2 extends ir{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h2 extends pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p2 extends pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zc=new le,Qc=new ia,Wi=new le;class iM extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zc,Qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Qc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zc,Qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Qc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new le,I_=new bt,F_=new bt;class Li extends iM{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=im*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ch*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return im*2*Math.atan(Math.tan(ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,I_,F_),t.subVectors(F_,I_)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ch*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/h,o*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jm extends iM{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fo=-90,Uo=1;class m2 extends Jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li(Fo,Uo,e,t);o.layers=this.layers,this.add(o);const a=new Li(Fo,Uo,e,t);a.layers=this.layers,this.add(a);const c=new Li(Fo,Uo,e,t);c.layers=this.layers,this.add(c);const u=new Li(Fo,Uo,e,t);u.layers=this.layers,this.add(u);const d=new Li(Fo,Uo,e,t);d.layers=this.layers,this.add(d);const h=new Li(Fo,Uo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,m,_),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class g2 extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rg=class rg{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};rg.prototype.isMatrix2=!0;let U_=rg;function O_(n,e,t,i){const o=v2(i);switch(t){case zE:return n*e;case GE:return n*e/o.components*o.byteLength;case Ym:return n*e/o.components*o.byteLength;case Xs:return n*e*2/o.components*o.byteLength;case $m:return n*e*2/o.components*o.byteLength;case HE:return n*e*3/o.components*o.byteLength;case Ii:return n*e*4/o.components*o.byteLength;case qm:return n*e*4/o.components*o.byteLength;case hu:case pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mu:case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cp:case Pp:return Math.max(n,16)*Math.max(e,8)/4;case bp:case Rp:return Math.max(n,8)*Math.max(e,8)/2;case Dp:case Lp:case Ip:case Fp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Np:case Du:case Up:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $p:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zp:case Qp:case Jp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case em:case tm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lu:case nm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v2(n){switch(n){case gi:case OE:return{byteLength:1,components:1};case ol:case kE:case Tr:return{byteLength:2,components:1};case Xm:case jm:return{byteLength:2,components:4};case nr:case Wm:case Ki:return{byteLength:4,components:1};case BE:case VE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gm}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rM(){let n=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function x2(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((_,E)=>_.start-E.start);let m=0;for(let _=1;_<v.length;_++){const E=v[m],M=v[_];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++m,v[m]=M)}v.length=m+1;for(let _=0,E=v.length;_<E;_++){const M=v[_];n.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var _2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y2=`#ifdef USE_ALPHAHASH
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
#endif`,S2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w2=`#ifdef USE_AOMAP
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
#endif`,A2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b2=`#ifdef USE_BATCHING
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
#endif`,C2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L2=`#ifdef USE_IRIDESCENCE
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
#endif`,N2=`#ifdef USE_BUMPMAP
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
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,z2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,H2=`#define PI 3.141592653589793
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
} // validated`,G2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W2=`vec3 transformedNormal = objectNormal;
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
#endif`,X2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q2="gl_FragColor = linearToOutputTexel( gl_FragColor );",K2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z2=`#ifdef USE_ENVMAP
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
#endif`,Q2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J2=`#ifdef USE_ENVMAP
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
#endif`,e3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
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
#endif`,n3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o3=`#ifdef USE_GRADIENTMAP
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
}`,a3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u3=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,f3=`#ifdef USE_ENVMAP
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
#endif`,d3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g3=`PhysicalMaterial material;
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
#endif`,v3=`uniform sampler2D dfgLUT;
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
}`,x3=`
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
#endif`,_3=`#if defined( RE_IndirectDiffuse )
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
#endif`,y3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S3=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,E3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R3=`#if defined( USE_POINTS_UV )
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
#endif`,P3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F3=`#ifdef USE_MORPHTARGETS
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
#endif`,U3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H3=`#ifdef USE_NORMALMAP
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
#endif`,G3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rL=`float getShadowMask() {
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
}`,sL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oL=`#ifdef USE_SKINNING
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
#endif`,aL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lL=`#ifdef USE_SKINNING
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
#endif`,cL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hL=`#ifdef USE_TRANSMISSION
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
#endif`,pL=`#ifdef USE_TRANSMISSION
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
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _L=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yL=`uniform sampler2D t2D;
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
}`,SL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ML=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wL=`#include <common>
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
}`,AL=`#if DEPTH_PACKING == 3200
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
}`,bL=`#define DISTANCE
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
}`,CL=`#define DISTANCE
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
}`,RL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DL=`uniform float scale;
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
}`,LL=`uniform vec3 diffuse;
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
}`,NL=`#include <common>
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
}`,IL=`uniform vec3 diffuse;
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
}`,FL=`#define LAMBERT
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
}`,UL=`#define LAMBERT
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
}`,OL=`#define MATCAP
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
}`,kL=`#define MATCAP
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
}`,BL=`#define NORMAL
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
}`,VL=`#define NORMAL
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
}`,zL=`#define PHONG
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
}`,HL=`#define PHONG
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
}`,GL=`#define STANDARD
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
}`,WL=`#define STANDARD
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
}`,XL=`#define TOON
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
}`,jL=`#define TOON
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
}`,YL=`uniform float size;
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
}`,$L=`uniform vec3 diffuse;
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
}`,qL=`#include <common>
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
}`,KL=`uniform vec3 color;
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
}`,ZL=`uniform float rotation;
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
}`,QL=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:_2,alphahash_pars_fragment:y2,alphamap_fragment:S2,alphamap_pars_fragment:E2,alphatest_fragment:M2,alphatest_pars_fragment:T2,aomap_fragment:w2,aomap_pars_fragment:A2,batching_pars_vertex:b2,batching_vertex:C2,begin_vertex:R2,beginnormal_vertex:P2,bsdfs:D2,iridescence_fragment:L2,bumpmap_pars_fragment:N2,clipping_planes_fragment:I2,clipping_planes_pars_fragment:F2,clipping_planes_pars_vertex:U2,clipping_planes_vertex:O2,color_fragment:k2,color_pars_fragment:B2,color_pars_vertex:V2,color_vertex:z2,common:H2,cube_uv_reflection_fragment:G2,defaultnormal_vertex:W2,displacementmap_pars_vertex:X2,displacementmap_vertex:j2,emissivemap_fragment:Y2,emissivemap_pars_fragment:$2,colorspace_fragment:q2,colorspace_pars_fragment:K2,envmap_fragment:Z2,envmap_common_pars_fragment:Q2,envmap_pars_fragment:J2,envmap_pars_vertex:e3,envmap_physical_pars_fragment:f3,envmap_vertex:t3,fog_vertex:n3,fog_pars_vertex:i3,fog_fragment:r3,fog_pars_fragment:s3,gradientmap_pars_fragment:o3,lightmap_pars_fragment:a3,lights_lambert_fragment:l3,lights_lambert_pars_fragment:c3,lights_pars_begin:u3,lights_toon_fragment:d3,lights_toon_pars_fragment:h3,lights_phong_fragment:p3,lights_phong_pars_fragment:m3,lights_physical_fragment:g3,lights_physical_pars_fragment:v3,lights_fragment_begin:x3,lights_fragment_maps:_3,lights_fragment_end:y3,lightprobes_pars_fragment:S3,logdepthbuf_fragment:E3,logdepthbuf_pars_fragment:M3,logdepthbuf_pars_vertex:T3,logdepthbuf_vertex:w3,map_fragment:A3,map_pars_fragment:b3,map_particle_fragment:C3,map_particle_pars_fragment:R3,metalnessmap_fragment:P3,metalnessmap_pars_fragment:D3,morphinstance_vertex:L3,morphcolor_vertex:N3,morphnormal_vertex:I3,morphtarget_pars_vertex:F3,morphtarget_vertex:U3,normal_fragment_begin:O3,normal_fragment_maps:k3,normal_pars_fragment:B3,normal_pars_vertex:V3,normal_vertex:z3,normalmap_pars_fragment:H3,clearcoat_normal_fragment_begin:G3,clearcoat_normal_fragment_maps:W3,clearcoat_pars_fragment:X3,iridescence_pars_fragment:j3,opaque_fragment:Y3,packing:$3,premultiplied_alpha_fragment:q3,project_vertex:K3,dithering_fragment:Z3,dithering_pars_fragment:Q3,roughnessmap_fragment:J3,roughnessmap_pars_fragment:eL,shadowmap_pars_fragment:tL,shadowmap_pars_vertex:nL,shadowmap_vertex:iL,shadowmask_pars_fragment:rL,skinbase_vertex:sL,skinning_pars_vertex:oL,skinning_vertex:aL,skinnormal_vertex:lL,specularmap_fragment:cL,specularmap_pars_fragment:uL,tonemapping_fragment:fL,tonemapping_pars_fragment:dL,transmission_fragment:hL,transmission_pars_fragment:pL,uv_pars_fragment:mL,uv_pars_vertex:gL,uv_vertex:vL,worldpos_vertex:xL,background_vert:_L,background_frag:yL,backgroundCube_vert:SL,backgroundCube_frag:EL,cube_vert:ML,cube_frag:TL,depth_vert:wL,depth_frag:AL,distance_vert:bL,distance_frag:CL,equirect_vert:RL,equirect_frag:PL,linedashed_vert:DL,linedashed_frag:LL,meshbasic_vert:NL,meshbasic_frag:IL,meshlambert_vert:FL,meshlambert_frag:UL,meshmatcap_vert:OL,meshmatcap_frag:kL,meshnormal_vert:BL,meshnormal_frag:VL,meshphong_vert:zL,meshphong_frag:HL,meshphysical_vert:GL,meshphysical_frag:WL,meshtoon_vert:XL,meshtoon_frag:jL,points_vert:YL,points_frag:$L,shadow_vert:qL,shadow_frag:KL,sprite_vert:ZL,sprite_frag:QL},Ie={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},$i={basic:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new At(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Bn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Bn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Bn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Bn([Ie.lights,Ie.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};$i.physical={uniforms:Bn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Jc={r:0,b:0,g:0},JL=new rn,sM=new ut;sM.set(-1,0,0,0,1,0,0,0,1);function eN(n,e,t,i,o,a){const c=new At(0);let u=o===!0?0:1,d,h,p=null,v=0,m=null;function _(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const A=R.backgroundBlurriness>0;L=e.get(L,A)}return L}function E(R){let L=!1;const A=_(R);A===null?y(c,u):A&&A.isColor&&(y(A,1),L=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(R,L){const A=_(L);A&&(A.isCubeTexture||A.mapping===Yu)?(h===void 0&&(h=new Ar(new ml(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Jo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(JL.makeRotationFromEuler(L.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(sM),h.material.toneMapped=vt.getTransfer(A.colorSpace)!==Nt,(p!==A||v!==A.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=A,v=A.version,m=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new Ar(new qu(2,2),new ir({name:"BackgroundMaterial",uniforms:Jo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=vt.getTransfer(A.colorSpace)!==Nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||v!==A.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=A,v=A.version,m=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,L){R.getRGB(Jc,nM(n)),t.buffers.color.setClear(Jc.r,Jc.g,Jc.b,L,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),u=L,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(R){u=R,y(c,u)},render:E,addToRenderList:M,dispose:S}}function tN(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=m(null);let a=o,c=!1;function u(V,j,H,ee,K){let ue=!1;const Z=v(V,ee,H,j);a!==Z&&(a=Z,h(a.object)),ue=_(V,ee,H,K),ue&&E(V,ee,H,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,A(V,j,H,ee),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.createVertexArray()}function h(V){return n.bindVertexArray(V)}function p(V){return n.deleteVertexArray(V)}function v(V,j,H,ee){const K=ee.wireframe===!0;let ue=i[j.id];ue===void 0&&(ue={},i[j.id]=ue);const Z=V.isInstancedMesh===!0?V.id:0;let W=ue[Z];W===void 0&&(W={},ue[Z]=W);let ne=W[H.id];ne===void 0&&(ne={},W[H.id]=ne);let oe=ne[K];return oe===void 0&&(oe=m(d()),ne[K]=oe),oe}function m(V){const j=[],H=[],ee=[];for(let K=0;K<t;K++)j[K]=0,H[K]=0,ee[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:H,attributeDivisors:ee,object:V,attributes:{},index:null}}function _(V,j,H,ee){const K=a.attributes,ue=j.attributes;let Z=0;const W=H.getAttributes();for(const ne in W)if(W[ne].location>=0){const k=K[ne];let J=ue[ne];if(J===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;Z++}return a.attributesNum!==Z||a.index!==ee}function E(V,j,H,ee){const K={},ue=j.attributes;let Z=0;const W=H.getAttributes();for(const ne in W)if(W[ne].location>=0){let k=ue[ne];k===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(k=V.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),K[ne]=J,Z++}a.attributes=K,a.attributesNum=Z,a.index=ee}function M(){const V=a.newAttributes;for(let j=0,H=V.length;j<H;j++)V[j]=0}function y(V){S(V,0)}function S(V,j){const H=a.newAttributes,ee=a.enabledAttributes,K=a.attributeDivisors;H[V]=1,ee[V]===0&&(n.enableVertexAttribArray(V),ee[V]=1),K[V]!==j&&(n.vertexAttribDivisor(V,j),K[V]=j)}function R(){const V=a.newAttributes,j=a.enabledAttributes;for(let H=0,ee=j.length;H<ee;H++)j[H]!==V[H]&&(n.disableVertexAttribArray(H),j[H]=0)}function L(V,j,H,ee,K,ue,Z){Z===!0?n.vertexAttribIPointer(V,j,H,K,ue):n.vertexAttribPointer(V,j,H,ee,K,ue)}function A(V,j,H,ee){M();const K=ee.attributes,ue=H.getAttributes(),Z=j.defaultAttributeValues;for(const W in ue){const ne=ue[W];if(ne.location>=0){let oe=K[W];if(oe===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(oe=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(oe=V.instanceColor)),oe!==void 0){const k=oe.normalized,J=oe.itemSize,Fe=e.get(oe);if(Fe===void 0)continue;const Xe=Fe.buffer,Ve=Fe.type,ce=Fe.bytesPerElement,xe=Ve===n.INT||Ve===n.UNSIGNED_INT||oe.gpuType===Wm;if(oe.isInterleavedBufferAttribute){const me=oe.data,Ue=me.stride,et=oe.offset;if(me.isInstancedInterleavedBuffer){for(let tt=0;tt<ne.locationSize;tt++)S(ne.location+tt,me.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let tt=0;tt<ne.locationSize;tt++)y(ne.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let tt=0;tt<ne.locationSize;tt++)L(ne.location+tt,J/ne.locationSize,Ve,k,Ue*ce,(et+J/ne.locationSize*tt)*ce,xe)}else{if(oe.isInstancedBufferAttribute){for(let me=0;me<ne.locationSize;me++)S(ne.location+me,oe.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<ne.locationSize;me++)y(ne.location+me);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let me=0;me<ne.locationSize;me++)L(ne.location+me,J/ne.locationSize,Ve,k,J*ce,J/ne.locationSize*me*ce,xe)}}else if(Z!==void 0){const k=Z[W];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(ne.location,k);break;case 3:n.vertexAttrib3fv(ne.location,k);break;case 4:n.vertexAttrib4fv(ne.location,k);break;default:n.vertexAttrib1fv(ne.location,k)}}}}R()}function P(){N();for(const V in i){const j=i[V];for(const H in j){const ee=j[H];for(const K in ee){const ue=ee[K];for(const Z in ue)p(ue[Z].object),delete ue[Z];delete ee[K]}}delete i[V]}}function I(V){if(i[V.id]===void 0)return;const j=i[V.id];for(const H in j){const ee=j[H];for(const K in ee){const ue=ee[K];for(const Z in ue)p(ue[Z].object),delete ue[Z];delete ee[K]}}delete i[V.id]}function F(V){for(const j in i){const H=i[j];for(const ee in H){const K=H[ee];if(K[V.id]===void 0)continue;const ue=K[V.id];for(const Z in ue)p(ue[Z].object),delete ue[Z];delete K[V.id]}}}function T(V){for(const j in i){const H=i[j],ee=V.isInstancedMesh===!0?V.id:0,K=H[ee];if(K!==void 0){for(const ue in K){const Z=K[ue];for(const W in Z)p(Z[W].object),delete Z[W];delete K[ue]}delete H[ee],Object.keys(H).length===0&&delete i[j]}}}function N(){O(),c=!0,a!==o&&(a=o,h(a.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:N,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:y,disableUnusedAttributes:R}}function nN(n,e,t){let i;function o(d){i=d}function a(d,h){n.drawArrays(i,d,h),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawArraysInstanced(i,d,h,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,p);let m=0;for(let _=0;_<p;_++)m+=h[_];t.update(m,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function iN(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Ii&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const T=F===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ki&&!T)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(at("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:A,maxSamples:P,samples:I}}function rN(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Ns,u=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const _=v.length!==0||m||i!==0||o;return o=m,i=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=p(v,m,0)},this.setState=function(v,m,_){const E=v.clippingPlanes,M=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||E===null||E.length===0||a&&!y)a?p(null):h();else{const R=a?0:i,L=R*4;let A=S.clippingState||null;d.value=A,A=p(E,m,L,_);for(let P=0;P!==L;++P)A[P]=t[P];S.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,m,_,E){const M=v!==null?v.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const S=_+M*4,R=m.matrixWorldInverse;u.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,A=_;L!==M;++L,A+=4)c.copy(v[L]).applyMatrix4(R,u),c.normal.toArray(y,A),y[A+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}const is=4,k_=[.125,.215,.35,.446,.526,.582],Fs=20,sN=256,Ya=new Jm,B_=new At;let Nh=null,Ih=0,Fh=0,Uh=!1;const oN=new le;class V_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=oN}=a;Nh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Ih,Fh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Tr,format:Ii,colorSpace:Nu,depthBuffer:!1},o=z_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aN(a)),this._blurMaterial=cN(a,e,t),this._ggxMaterial=lN(a,e,t)}return o}_compileMaterial(e){const t=new Ar(new ki,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,i,o,a){const d=new Li(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,_=v.toneMapping;v.getClearColor(B_),v.toneMapping=Ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ar(new ml,new ZE({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(B_),S=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[L],a.y,a.z)):A===1?(d.up.set(0,0,h[L]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[L],a.z)):(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[L]));const P=this._cubeSize;Oo(o,A*P,L>2?P:0,P,P),v.setRenderTarget(o),S&&v.render(M,d),v.render(e,d)}v.toneMapping=_,v.autoClear=m,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Ws||e.mapping===Zo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Oo(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),m=0+h*1.25,_=v*m,{_lodMax:E}=this,M=this._sizeLods[i],y=3*M*(i>E-is?i-E+is:0),S=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=E-t,Oo(a,y,S,3*M,2*M),o.setRenderTarget(a),o.render(u,Ya),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=E-i,Oo(e,y,S,3*M,2*M),o.setRenderTarget(e),o.render(u,Ya)}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[o];v.material=h;const m=h.uniforms,_=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Fs-1),M=a/E,y=isFinite(a)?1+Math.floor(p*M):Fs;y>Fs&&at(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fs}`);const S=[];let R=0;for(let F=0;F<Fs;++F){const T=F/M,N=Math.exp(-T*T/2);S.push(N),F===0?R+=N:F<y&&(R+=2*N)}for(let F=0;F<S.length;F++)S[F]=S[F]/R;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:L}=this;m.dTheta.value=E,m.mipInt.value=L-i;const A=this._sizeLods[o],P=3*A*(o>L-is?o-L+is:0),I=4*(this._cubeSize-A);Oo(t,P,I,3*A,2*A),d.setRenderTarget(t),d.render(v,Ya)}}function aN(n){const e=[],t=[],i=[];let o=n;const a=n-is+1+k_.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let d=1/u;c>n-is?d=k_[c-n+is-1]:c===0&&(d=0),t.push(d);const h=1/(u-2),p=-h,v=1+h,m=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,E=6,M=3,y=2,S=1,R=new Float32Array(M*E*_),L=new Float32Array(y*E*_),A=new Float32Array(S*E*_);for(let I=0;I<_;I++){const F=I%3*2/3-1,T=I>2?0:-1,N=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];R.set(N,M*E*I),L.set(m,y*E*I);const O=[I,I,I,I,I,I];A.set(O,S*E*I)}const P=new ki;P.setAttribute("position",new Ui(R,M)),P.setAttribute("uv",new Ui(L,y)),P.setAttribute("faceIndex",new Ui(A,S)),i.push(new Ar(P,null)),o>is&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function z_(n,e,t){const i=new er(n,e,t);return i.texture.mapping=Yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function lN(n,e,t){return new ir({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function cN(n,e,t){const i=new Float32Array(Fs),o=new le(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function H_(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function G_(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Ku(){return`

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
	`}class oM extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new eM(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ml(5,5,5),a=new ir({name:"CubemapFromEquirect",uniforms:Jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:Sr});a.uniforms.tEquirect.value=t;const c=new Ar(o,a),u=t.minFilter;return t.minFilter===ks&&(t.minFilter=In),new m2(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function uN(n){let e=new WeakMap,t=new WeakMap,i=null;function o(m,_=!1){return m==null?null:_?c(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===oh||_===ah)if(e.has(m)){const E=e.get(m).texture;return u(E,m.mapping)}else{const E=m.image;if(E&&E.height>0){const M=new oM(E.height);return M.fromEquirectangularTexture(n,m),e.set(m,M),m.addEventListener("dispose",h),u(M.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,E=_===oh||_===ah,M=_===Ws||_===Zo;if(E||M){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new V_(n)),y=E?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const R=m.image;return E&&R&&R.height>0||M&&R&&d(R)?(i===null&&(i=new V_(n)),y=E?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",p),y.texture):null}}}return m}function u(m,_){return _===oh?m.mapping=Ws:_===ah&&(m.mapping=Zo),m}function d(m){let _=0;const E=6;for(let M=0;M<E;M++)m[M]!==void 0&&_++;return _===E}function h(m){const _=m.target;_.removeEventListener("dispose",h);const E=e.get(_);E!==void 0&&(e.delete(_),E.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const E=t.get(_);E!==void 0&&(t.delete(_),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:v}}function fN(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&jo("WebGLRenderer: "+i+" extension not supported."),o}}}function dN(n,e,t,i){const o={},a=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);m.removeEventListener("dispose",c),delete o[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const _ in m)e.update(m[_],n.ARRAY_BUFFER)}function h(v){const m=[],_=v.index,E=v.attributes.position;let M=0;if(E===void 0)return;if(_!==null){const R=_.array;M=_.version;for(let L=0,A=R.length;L<A;L+=3){const P=R[L+0],I=R[L+1],F=R[L+2];m.push(P,I,I,F,F,P)}}else{const R=E.array;M=E.version;for(let L=0,A=R.length/3-1;L<A;L+=3){const P=L+0,I=L+1,F=L+2;m.push(P,I,I,F,F,P)}}const y=new(E.count>=65535?qE:$E)(m,1);y.version=M;const S=a.get(v);S&&e.remove(S),a.set(v,y)}function p(v){const m=a.get(v);if(m){const _=v.index;_!==null&&m.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function hN(n,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,m){n.drawElements(i,m,a,v*c),t.update(m,i,1)}function h(v,m,_){_!==0&&(n.drawElementsInstanced(i,m,a,v*c,_),t.update(m,i,_))}function p(v,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,v,0,_);let M=0;for(let y=0;y<_;y++)M+=m[y];t.update(M,i,1)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function pN(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Et("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function mN(n,e,t){const i=new WeakMap,o=new tn;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==v){let O=function(){T.dispose(),i.delete(u),u.removeEventListener("dispose",O)};var _=O;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),y===!0&&(A=3);let P=u.attributes.position.count*A,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*I*4*v),T=new XE(F,P,I,v);T.type=Ki,T.needsUpdate=!0;const N=A*4;for(let V=0;V<v;V++){const j=S[V],H=R[V],ee=L[V],K=P*I*4*V;for(let ue=0;ue<j.count;ue++){const Z=ue*N;E===!0&&(o.fromBufferAttribute(j,ue),F[K+Z+0]=o.x,F[K+Z+1]=o.y,F[K+Z+2]=o.z,F[K+Z+3]=0),M===!0&&(o.fromBufferAttribute(H,ue),F[K+Z+4]=o.x,F[K+Z+5]=o.y,F[K+Z+6]=o.z,F[K+Z+7]=0),y===!0&&(o.fromBufferAttribute(ee,ue),F[K+Z+8]=o.x,F[K+Z+9]=o.y,F[K+Z+10]=o.z,F[K+Z+11]=ee.itemSize===4?o.w:1)}}m={count:v,texture:T,size:new bt(P,I)},i.set(u,m),u.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function gN(n,e,t,i,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return m}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const vN={[RE]:"LINEAR_TONE_MAPPING",[PE]:"REINHARD_TONE_MAPPING",[DE]:"CINEON_TONE_MAPPING",[LE]:"ACES_FILMIC_TONE_MAPPING",[IE]:"AGX_TONE_MAPPING",[FE]:"NEUTRAL_TONE_MAPPING",[NE]:"CUSTOM_TONE_MAPPING"};function xN(n,e,t,i,o,a){const c=new er(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:i?4:0,depthTexture:o?new Qo(e,t):void 0}),u=new er(e,t,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),d=new ki;d.setAttribute("position",new Mr([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Mr([0,2,0,0,2,0],2));const h=new d2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ar(d,h),v=new Jm(-1,1,1,-1,0,1);let m=null,_=null,E=!1,M,y=null,S=[],R=!1;this.setSize=function(L,A){c.setSize(L,A),u.setSize(L,A);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(L,A)}},this.setEffects=function(L){S=L,R=S.length>0&&S[0].isRenderPass===!0;const A=c.width,P=c.height;for(let I=0;I<S.length;I++){const F=S[I];F.setSize&&F.setSize(A,P)}},this.begin=function(L,A){if(E||L.toneMapping===Ji&&S.length===0)return!1;if(y=A,A!==null){const P=A.width,I=A.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return R===!1&&L.setRenderTarget(c),M=L.toneMapping,L.toneMapping=Ji,!0},this.hasRenderPass=function(){return R},this.end=function(L,A){L.toneMapping=M,E=!0;let P=c,I=u;for(let F=0;F<S.length;F++){const T=S[F];if(T.enabled!==!1&&(T.render(L,I,P,A),T.needsSwap!==!1)){const N=P;P=I,I=N}}if(m!==L.outputColorSpace||_!==L.toneMapping){m=L.outputColorSpace,_=L.toneMapping,h.defines={},vt.getTransfer(m)===Nt&&(h.defines.SRGB_TRANSFER="");const F=vN[_];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(y),L.render(p,v),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),d.dispose(),h.dispose()}}const aM=new Hn,sm=new Qo(1,1),lM=new XE,cM=new HD,uM=new eM,W_=[],X_=[],j_=new Float32Array(16),Y_=new Float32Array(9),$_=new Float32Array(4);function ra(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=W_[o];if(a===void 0&&(a=new Float32Array(o),W_[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zu(n,e){let t=X_[e];t===void 0&&(t=new Int32Array(e),X_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _N(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function SN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function EN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function MN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;$_.set(i),n.uniformMatrix2fv(this.addr,!1,$_),mn(t,i)}}function TN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;Y_.set(i),n.uniformMatrix3fv(this.addr,!1,Y_),mn(t,i)}}function wN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;j_.set(i),n.uniformMatrix4fv(this.addr,!1,j_),mn(t,i)}}function AN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function CN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function RN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function PN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function LN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function NN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function IN(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(sm.compareFunction=t.isReversedDepthBuffer()?Zm:Km,a=sm):a=aM,t.setTexture2D(e||a,o)}function FN(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||cM,o)}function UN(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||uM,o)}function ON(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||lM,o)}function kN(n){switch(n){case 5126:return _N;case 35664:return yN;case 35665:return SN;case 35666:return EN;case 35674:return MN;case 35675:return TN;case 35676:return wN;case 5124:case 35670:return AN;case 35667:case 35671:return bN;case 35668:case 35672:return CN;case 35669:case 35673:return RN;case 5125:return PN;case 36294:return DN;case 36295:return LN;case 36296:return NN;case 35678:case 36198:case 36298:case 36306:case 35682:return IN;case 35679:case 36299:case 36307:return FN;case 35680:case 36300:case 36308:case 36293:return UN;case 36289:case 36303:case 36311:case 36292:return ON}}function BN(n,e){n.uniform1fv(this.addr,e)}function VN(n,e){const t=ra(e,this.size,2);n.uniform2fv(this.addr,t)}function zN(n,e){const t=ra(e,this.size,3);n.uniform3fv(this.addr,t)}function HN(n,e){const t=ra(e,this.size,4);n.uniform4fv(this.addr,t)}function GN(n,e){const t=ra(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WN(n,e){const t=ra(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function XN(n,e){const t=ra(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jN(n,e){n.uniform1iv(this.addr,e)}function YN(n,e){n.uniform2iv(this.addr,e)}function $N(n,e){n.uniform3iv(this.addr,e)}function qN(n,e){n.uniform4iv(this.addr,e)}function KN(n,e){n.uniform1uiv(this.addr,e)}function ZN(n,e){n.uniform2uiv(this.addr,e)}function QN(n,e){n.uniform3uiv(this.addr,e)}function JN(n,e){n.uniform4uiv(this.addr,e)}function eI(n,e,t){const i=this.cache,o=e.length,a=Zu(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=sm:c=aM;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function tI(n,e,t){const i=this.cache,o=e.length,a=Zu(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||cM,a[c])}function nI(n,e,t){const i=this.cache,o=e.length,a=Zu(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||uM,a[c])}function iI(n,e,t){const i=this.cache,o=e.length,a=Zu(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||lM,a[c])}function rI(n){switch(n){case 5126:return BN;case 35664:return VN;case 35665:return zN;case 35666:return HN;case 35674:return GN;case 35675:return WN;case 35676:return XN;case 5124:case 35670:return jN;case 35667:case 35671:return YN;case 35668:case 35672:return $N;case 35669:case 35673:return qN;case 5125:return KN;case 36294:return ZN;case 36295:return QN;case 36296:return JN;case 35678:case 36198:case 36298:case 36306:case 35682:return eI;case 35679:case 36299:case 36307:return tI;case 35680:case 36300:case 36308:case 36293:return nI;case 36289:case 36303:case 36311:case 36292:return iI}}class sI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kN(t.type)}}class oI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rI(t.type)}}class aI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function q_(n,e){n.seq.push(e),n.map[e.id]=e}function lI(n,e,t){const i=n.name,o=i.length;for(Oh.lastIndex=0;;){const a=Oh.exec(i),c=Oh.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){q_(t,h===void 0?new sI(u,n,e):new oI(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new aI(u),q_(t,v)),t=v}}}class vu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);lI(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function K_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cI=37297;let uI=0;function fI(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Z_=new ut;function dI(n){vt._getMatrix(Z_,vt.workingColorSpace,n);const e=`mat3( ${Z_.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case Iu:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Q_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+fI(n.getShaderSource(e),u)}else return a}function hI(n,e){const t=dI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const pI={[RE]:"Linear",[PE]:"Reinhard",[DE]:"Cineon",[LE]:"ACESFilmic",[IE]:"AgX",[FE]:"Neutral",[NE]:"Custom"};function mI(n,e){const t=pI[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eu=new le;function gI(){vt.getLuminanceCoefficients(eu);const n=eu.x.toFixed(4),e=eu.y.toFixed(4),t=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function xI(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _I(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Za(n){return n!==""}function J_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ey(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yI=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(n){return n.replace(yI,EI)}const SI=new Map;function EI(n,e){let t=dt[e];if(t===void 0){const i=SI.get(e);if(i!==void 0)t=dt[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return om(t)}const MI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ty(n){return n.replace(MI,TI)}function TI(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function ny(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const wI={[du]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function AI(n){return wI[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bI={[Ws]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE",[Yu]:"ENVMAP_TYPE_CUBE_UV"};function CI(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bI[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const RI={[Zo]:"ENVMAP_MODE_REFRACTION"};function PI(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":RI[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DI={[CE]:"ENVMAP_BLENDING_MULTIPLY",[SD]:"ENVMAP_BLENDING_MIX",[ED]:"ENVMAP_BLENDING_ADD"};function LI(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":DI[n.combine]||"ENVMAP_BLENDING_NONE"}function NI(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function II(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=AI(t),h=CI(t),p=PI(t),v=LI(t),m=NI(t),_=vI(t),E=xI(a),M=o.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Za).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Za).join(`
`),S.length>0&&(S+=`
`)):(y=[ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),S=[ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?mI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,hI("linearToOutputTexel",t.outputColorSpace),gI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),c=om(c),c=J_(c,t),c=ey(c,t),u=om(u),u=J_(u,t),u=ey(u,t),c=ty(c),u=ty(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=R+y+c,A=R+S+u,P=K_(o,o.VERTEX_SHADER,L),I=K_(o,o.FRAGMENT_SHADER,A);o.attachShader(M,P),o.attachShader(M,I),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(V){if(n.debug.checkShaderErrors){const j=o.getProgramInfoLog(M)||"",H=o.getShaderInfoLog(P)||"",ee=o.getShaderInfoLog(I)||"",K=j.trim(),ue=H.trim(),Z=ee.trim();let W=!0,ne=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,P,I);else{const oe=Q_(o,P,"vertex"),k=Q_(o,I,"fragment");Et("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+oe+`
`+k)}else K!==""?at("WebGLProgram: Program Info Log:",K):(ue===""||Z==="")&&(ne=!1);ne&&(V.diagnostics={runnable:W,programLog:K,vertexShader:{log:ue,prefix:y},fragmentShader:{log:Z,prefix:S}})}o.deleteShader(P),o.deleteShader(I),T=new vu(o,M),N=_I(o,M)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(M,cI)),O},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uI++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=I,this}let FI=0;class UI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new OI(e),t.set(e,i)),i}}class OI{constructor(e){this.id=FI++,this.code=e,this.usedTimes=0}}function kI(n){return n===Xs||n===Du||n===Lu}function BI(n,e,t,i,o,a){const c=new jE,u=new UI,d=new Set,h=[],p=new Map,v=i.logarithmicDepthBuffer;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return d.add(T),T===0?"uv":`uv${T}`}function M(T,N,O,V,j,H){const ee=V.fog,K=j.geometry,ue=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,W=e.get(T.envMap||ue,Z),ne=W&&W.mapping===Yu?W.image.height:null,oe=_[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&at("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const k=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,J=k!==void 0?k.length:0;let Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let Xe,Ve,ce,xe;if(oe){const He=$i[oe];Xe=He.vertexShader,Ve=He.fragmentShader}else{Xe=T.vertexShader,Ve=T.fragmentShader;const He=u.getVertexShaderStage(T),It=u.getFragmentShaderStage(T);u.update(T,He,It),ce=He.id,xe=It.id}const me=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),et=j.isInstancedMesh===!0,tt=j.isBatchedMesh===!0,Ht=!!T.map,ft=!!T.matcap,wt=!!W,_t=!!T.aoMap,gt=!!T.lightMap,Gt=!!T.bumpMap&&T.wireframe===!1,Zt=!!T.normalMap,Qt=!!T.displacementMap,Yt=!!T.emissiveMap,Pt=!!T.metalnessMap,Wt=!!T.roughnessMap,$=T.anisotropy>0,yn=T.clearcoat>0,Mt=T.dispersion>0,U=T.iridescence>0,w=T.sheen>0,Q=T.transmission>0,ae=$&&!!T.anisotropyMap,he=yn&&!!T.clearcoatMap,Me=yn&&!!T.clearcoatNormalMap,Re=yn&&!!T.clearcoatRoughnessMap,pe=U&&!!T.iridescenceMap,ve=U&&!!T.iridescenceThicknessMap,De=w&&!!T.sheenColorMap,qe=w&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ce=!!T.specularColorMap,Je=!!T.specularIntensityMap,nt=Q&&!!T.transmissionMap,st=Q&&!!T.thicknessMap,X=!!T.gradientMap,be=!!T.alphaMap,ge=T.alphaTest>0,Pe=!!T.alphaHash,Ne=!!T.extensions;let _e=Ji;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=n.toneMapping);const je={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:Xe,fragmentShader:Ve,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:tt,batchingColor:tt&&j._colorsTexture!==null,instancing:et,instancingColor:et&&j.instanceColor!==null,instancingMorph:et&&j.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ht,matcap:ft,envMap:wt,envMapMode:wt&&W.mapping,envMapCubeUVHeight:ne,aoMap:_t,lightMap:gt,bumpMap:Gt,normalMap:Zt,displacementMap:Qt,emissiveMap:Yt,normalMapObjectSpace:Zt&&T.normalMapType===wD,normalMapTangentSpace:Zt&&T.normalMapType===f_,packedNormalMap:Zt&&T.normalMapType===f_&&kI(T.normalMap.format),metalnessMap:Pt,roughnessMap:Wt,anisotropy:$,anisotropyMap:ae,clearcoat:yn,clearcoatMap:he,clearcoatNormalMap:Me,clearcoatRoughnessMap:Re,dispersion:Mt,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:ve,sheen:w,sheenColorMap:De,sheenRoughnessMap:qe,specularMap:Le,specularColorMap:Ce,specularIntensityMap:Je,transmission:Q,transmissionMap:nt,thicknessMap:st,gradientMap:X,opaque:T.transparent===!1&&T.blending===Xo&&T.alphaToCoverage===!1,alphaMap:be,alphaTest:ge,alphaHash:Pe,combine:T.combine,mapUv:Ht&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:gt&&E(T.lightMap.channel),bumpMapUv:Gt&&E(T.bumpMap.channel),normalMapUv:Zt&&E(T.normalMap.channel),displacementMapUv:Qt&&E(T.displacementMap.channel),emissiveMapUv:Yt&&E(T.emissiveMap.channel),metalnessMapUv:Pt&&E(T.metalnessMap.channel),roughnessMapUv:Wt&&E(T.roughnessMap.channel),anisotropyMapUv:ae&&E(T.anisotropyMap.channel),clearcoatMapUv:he&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:qe&&E(T.sheenRoughnessMap.channel),specularMapUv:Le&&E(T.specularMap.channel),specularColorMapUv:Ce&&E(T.specularColorMap.channel),specularIntensityMapUv:Je&&E(T.specularIntensityMap.channel),transmissionMapUv:nt&&E(T.transmissionMap.channel),thicknessMapUv:st&&E(T.thicknessMap.channel),alphaMapUv:be&&E(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Zt||$),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(Ht||be),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&Zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Fe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ht&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:Yt&&T.emissiveMap.isVideoTexture===!0&&vt.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_r,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=d.has(1),je.vertexUv2s=d.has(2),je.vertexUv3s=d.has(3),d.clear(),je}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)N.push(O),N.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(S(N,T),R(N,T),N.push(n.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function R(T,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function L(T){const N=_[T.type];let O;if(N){const V=$i[N];O=c2.clone(V.uniforms)}else O=T.uniforms;return O}function A(T,N){let O=p.get(N);return O!==void 0?++O.usedTimes:(O=new II(n,N,T,o),h.push(O),p.set(N,O)),O}function P(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),p.delete(T.cacheKey),T.destroy()}}function I(T){u.remove(T)}function F(){u.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:L,acquireProgram:A,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:F}}function VI(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function zI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function iy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ry(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function u(m,_,E,M,y,S){let R=n[e];return R===void 0?(R={id:m.id,object:m,geometry:_,material:E,materialVariant:c(m),groupOrder:M,renderOrder:m.renderOrder,z:y,group:S},n[e]=R):(R.id=m.id,R.object=m,R.geometry=_,R.material=E,R.materialVariant=c(m),R.groupOrder=M,R.renderOrder=m.renderOrder,R.z=y,R.group=S),e++,R}function d(m,_,E,M,y,S){const R=u(m,_,E,M,y,S);E.transmission>0?i.push(R):E.transparent===!0?o.push(R):t.push(R)}function h(m,_,E,M,y,S){const R=u(m,_,E,M,y,S);E.transmission>0?i.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function p(m,_,E){t.length>1&&t.sort(m||zI),i.length>1&&i.sort(_||iy),o.length>1&&o.sort(_||iy),E&&(t.reverse(),i.reverse(),o.reverse())}function v(){for(let m=e,_=n.length;m<_;m++){const E=n[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function HI(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new ry,n.set(i,[c])):o>=a.length?(c=new ry,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function GI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new At};break;case"SpotLight":t={position:new le,direction:new le,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function WI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XI=0;function jI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YI(n){const e=new GI,t=WI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new le);const o=new le,a=new rn,c=new rn;function u(h){let p=0,v=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,E=0,M=0,y=0,S=0,R=0,L=0,A=0,P=0,I=0,F=0;h.sort(jI);for(let N=0,O=h.length;N<O;N++){const V=h[N],j=V.color,H=V.intensity,ee=V.distance;let K=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Xs?K=V.shadow.map.texture:K=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)p+=j.r*H,v+=j.g*H,m+=j.b*H;else if(V.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(V.sh.coefficients[ue],H);F++}else if(V.isDirectionalLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,W=t.get(V);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.directionalShadow[_]=W,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=V.shadow.matrix,R++}i.directional[_]=ue,_++}else if(V.isSpotLight){const ue=e.get(V);ue.position.setFromMatrixPosition(V.matrixWorld),ue.color.copy(j).multiplyScalar(H),ue.distance=ee,ue.coneCos=Math.cos(V.angle),ue.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ue.decay=V.decay,i.spot[M]=ue;const Z=V.shadow;if(V.map&&(i.spotLightMap[P]=V.map,P++,Z.updateMatrices(V),V.castShadow&&I++),i.spotLightMatrix[M]=Z.matrix,V.castShadow){const W=t.get(V);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=K,A++}M++}else if(V.isRectAreaLight){const ue=e.get(V);ue.color.copy(j).multiplyScalar(H),ue.halfWidth.set(V.width*.5,0,0),ue.halfHeight.set(0,V.height*.5,0),i.rectArea[y]=ue,y++}else if(V.isPointLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),ue.distance=V.distance,ue.decay=V.decay,V.castShadow){const Z=V.shadow,W=t.get(V);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,i.pointShadow[E]=W,i.pointShadowMap[E]=K,i.pointShadowMatrix[E]=V.shadow.matrix,L++}i.point[E]=ue,E++}else if(V.isHemisphereLight){const ue=e.get(V);ue.skyColor.copy(V.color).multiplyScalar(H),ue.groundColor.copy(V.groundColor).multiplyScalar(H),i.hemi[S]=ue,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=v,i.ambient[2]=m;const T=i.hash;(T.directionalLength!==_||T.pointLength!==E||T.spotLength!==M||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==L||T.numSpotShadows!==A||T.numSpotMaps!==P||T.numLightProbes!==F)&&(i.directional.length=_,i.spot.length=M,i.rectArea.length=y,i.point.length=E,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+P-I,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=F,T.directionalLength=_,T.pointLength=E,T.spotLength=M,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=L,T.numSpotShadows=A,T.numSpotMaps=P,T.numLightProbes=F,i.version=XI++)}function d(h,p){let v=0,m=0,_=0,E=0,M=0;const y=p.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const L=h[S];if(L.isDirectionalLight){const A=i.directional[v];A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),v++}else if(L.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),_++}else if(L.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),c.identity(),a.copy(L.matrixWorld),a.premultiply(y),c.extractRotation(a),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),m++}else if(L.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(y),M++}}}return{setup:u,setupView:d,state:i}}function sy(n){const e=new YI(n),t=[],i=[],o=[];function a(m){v.camera=m,t.length=0,i.length=0,o.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function $I(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new sy(n),e.set(o,[u])):a>=c.length?(u=new sy(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const qI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KI=`uniform sampler2D shadow_pass;
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
}`,ZI=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],QI=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],oy=new rn,$a=new le,kh=new le;function JI(n,e,t){let i=new QE;const o=new bt,a=new bt,c=new tn,u=new h2,d=new p2,h={},p=t.maxTextureSize,v={[as]:Qn,[Qn]:as,[_r]:_r},m=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:qI,fragmentShader:KI}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const E=new ki;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ar(E,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let S=this.type;this.render=function(I,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===nD&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=du);const N=n.getRenderTarget(),O=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Sr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const H=S!==this.type;H&&F.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(K=>K.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,K=I.length;ee<K;ee++){const ue=I[ee],Z=ue.shadow;if(Z===void 0){at("WebGLShadowMap:",ue,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const W=Z.getFrameExtents();o.multiply(W),a.copy(Z.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/W.x),o.x=a.x*W.x,Z.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/W.y),o.y=a.y*W.y,Z.mapSize.y=a.y));const ne=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ne,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ka){if(ue.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new er(o.x,o.y,{format:Xs,type:Tr,minFilter:In,magFilter:In,generateMipmaps:!1}),Z.map.texture.name=ue.name+".shadowMap",Z.map.depthTexture=new Qo(o.x,o.y,Ki),Z.map.depthTexture.name=ue.name+".shadowMapDepth",Z.map.depthTexture.format=wr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=An,Z.map.depthTexture.magFilter=An}else ue.isPointLight?(Z.map=new oM(o.x),Z.map.depthTexture=new a2(o.x,nr)):(Z.map=new er(o.x,o.y),Z.map.depthTexture=new Qo(o.x,o.y,nr)),Z.map.depthTexture.name=ue.name+".shadowMap",Z.map.depthTexture.format=wr,this.type===du?(Z.map.depthTexture.compareFunction=ne?Zm:Km,Z.map.depthTexture.minFilter=In,Z.map.depthTexture.magFilter=In):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=An,Z.map.depthTexture.magFilter=An);Z.camera.updateProjectionMatrix()}const oe=Z.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<oe;k++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,k),n.clear();else{k===0&&(n.setRenderTarget(Z.map),n.clear());const J=Z.getViewport(k);c.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),j.viewport(c)}if(ue.isPointLight){const J=Z.camera,Fe=Z.matrix,Xe=ue.distance||J.far;Xe!==J.far&&(J.far=Xe,J.updateProjectionMatrix()),$a.setFromMatrixPosition(ue.matrixWorld),J.position.copy($a),kh.copy(J.position),kh.add(ZI[k]),J.up.copy(QI[k]),J.lookAt(kh),J.updateMatrixWorld(),Fe.makeTranslation(-$a.x,-$a.y,-$a.z),oy.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(oy,J.coordinateSystem,J.reversedDepth)}else Z.updateMatrices(ue);i=Z.getFrustum(),A(F,T,Z.camera,ue,this.type)}Z.isPointLightShadow!==!0&&this.type===Ka&&R(Z,T),Z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(N,O,V)};function R(I,F){const T=e.update(M);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new er(o.x,o.y,{format:Xs,type:Tr})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(F,null,T,m,M,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(F,null,T,_,M,null)}function L(I,F,T,N){let O=null;const V=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)O=V;else if(O=T.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=O.uuid,H=F.uuid;let ee=h[j];ee===void 0&&(ee={},h[j]=ee);let K=ee[H];K===void 0&&(K=O.clone(),ee[H]=K,F.addEventListener("dispose",P)),O=K}if(O.visible=F.visible,O.wireframe=F.wireframe,N===Ka?O.side=F.shadowSide!==null?F.shadowSide:F.side:O.side=F.shadowSide!==null?F.shadowSide:v[F.side],O.alphaMap=F.alphaMap,O.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,O.map=F.map,O.clipShadows=F.clipShadows,O.clippingPlanes=F.clippingPlanes,O.clipIntersection=F.clipIntersection,O.displacementMap=F.displacementMap,O.displacementScale=F.displacementScale,O.displacementBias=F.displacementBias,O.wireframeLinewidth=F.wireframeLinewidth,O.linewidth=F.linewidth,T.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const j=n.properties.get(O);j.light=T}return O}function A(I,F,T,N,O){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&O===Ka)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const H=e.update(I),ee=I.material;if(Array.isArray(ee)){const K=H.groups;for(let ue=0,Z=K.length;ue<Z;ue++){const W=K[ue],ne=ee[W.materialIndex];if(ne&&ne.visible){const oe=L(I,ne,N,O);I.onBeforeShadow(n,I,F,T,H,oe,W),n.renderBufferDirect(T,null,H,oe,I,W),I.onAfterShadow(n,I,F,T,H,oe,W)}}}else if(ee.visible){const K=L(I,ee,N,O);I.onBeforeShadow(n,I,F,T,H,K,null),n.renderBufferDirect(T,null,H,K,I,null),I.onAfterShadow(n,I,F,T,H,K,null)}}const j=I.children;for(let H=0,ee=j.length;H<ee;H++)A(j[H],F,T,N,O)}function P(I){I.target.removeEventListener("dispose",P);for(const T in h){const N=h[T],O=I.target.uuid;O in N&&(N[O].dispose(),delete N[O])}}}function eF(n,e){function t(){let X=!1;const be=new tn;let ge=null;const Pe=new tn(0,0,0,0);return{setMask:function(Ne){ge!==Ne&&!X&&(n.colorMask(Ne,Ne,Ne,Ne),ge=Ne)},setLocked:function(Ne){X=Ne},setClear:function(Ne,_e,je,He,It){It===!0&&(Ne*=He,_e*=He,je*=He),be.set(Ne,_e,je,He),Pe.equals(be)===!1&&(n.clearColor(Ne,_e,je,He),Pe.copy(be))},reset:function(){X=!1,ge=null,Pe.set(-1,0,0,0)}}}function i(){let X=!1,be=!1,ge=null,Pe=null,Ne=null;return{setReversed:function(_e){if(be!==_e){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const He=Ne;Ne=null,this.setClear(He)}},getReversed:function(){return be},setTest:function(_e){_e?me(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(_e){ge!==_e&&!X&&(n.depthMask(_e),ge=_e)},setFunc:function(_e){if(be&&(_e=FD[_e]),Pe!==_e){switch(_e){case xp:n.depthFunc(n.NEVER);break;case _p:n.depthFunc(n.ALWAYS);break;case yp:n.depthFunc(n.LESS);break;case Ko:n.depthFunc(n.LEQUAL);break;case Sp:n.depthFunc(n.EQUAL);break;case Ep:n.depthFunc(n.GEQUAL);break;case Mp:n.depthFunc(n.GREATER);break;case Tp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Ne!==_e&&(Ne=_e,be&&(_e=1-_e),n.clearDepth(_e))},reset:function(){X=!1,ge=null,Pe=null,Ne=null,be=!1}}}function o(){let X=!1,be=null,ge=null,Pe=null,Ne=null,_e=null,je=null,He=null,It=null;return{setTest:function(Ct){X||(Ct?me(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Ct){be!==Ct&&!X&&(n.stencilMask(Ct),be=Ct)},setFunc:function(Ct,bn,ai){(ge!==Ct||Pe!==bn||Ne!==ai)&&(n.stencilFunc(Ct,bn,ai),ge=Ct,Pe=bn,Ne=ai)},setOp:function(Ct,bn,ai){(_e!==Ct||je!==bn||He!==ai)&&(n.stencilOp(Ct,bn,ai),_e=Ct,je=bn,He=ai)},setLocked:function(Ct){X=Ct},setClear:function(Ct){It!==Ct&&(n.clearStencil(Ct),It=Ct)},reset:function(){X=!1,be=null,ge=null,Pe=null,Ne=null,_e=null,je=null,He=null,It=null}}}const a=new t,c=new i,u=new o,d=new WeakMap,h=new WeakMap;let p={},v={},m={},_=new WeakMap,E=[],M=null,y=!1,S=null,R=null,L=null,A=null,P=null,I=null,F=null,T=new At(0,0,0),N=0,O=!1,V=null,j=null,H=null,ee=null,K=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Z=W>=1):ne.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Z=W>=2);let oe=null,k={};const J=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Xe=new tn().fromArray(J),Ve=new tn().fromArray(Fe);function ce(X,be,ge,Pe){const Ne=new Uint8Array(4),_e=n.createTexture();n.bindTexture(X,_e),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<ge;je++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(be+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return _e}const xe={};xe[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(n.DEPTH_TEST),c.setFunc(Ko),Gt(!1),Zt(a_),me(n.CULL_FACE),_t(Sr);function me(X){p[X]!==!0&&(n.enable(X),p[X]=!0)}function Ue(X){p[X]!==!1&&(n.disable(X),p[X]=!1)}function et(X,be){return m[X]!==be?(n.bindFramebuffer(X,be),m[X]=be,X===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=be),X===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=be),!0):!1}function tt(X,be){let ge=E,Pe=!1;if(X){ge=_.get(be),ge===void 0&&(ge=[],_.set(be,ge));const Ne=X.textures;if(ge.length!==Ne.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,je=Ne.length;_e<je;_e++)ge[_e]=n.COLOR_ATTACHMENT0+_e;ge.length=Ne.length,Pe=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ge)}function Ht(X){return M!==X?(n.useProgram(X),M=X,!0):!1}const ft={[Is]:n.FUNC_ADD,[rD]:n.FUNC_SUBTRACT,[sD]:n.FUNC_REVERSE_SUBTRACT};ft[oD]=n.MIN,ft[aD]=n.MAX;const wt={[lD]:n.ZERO,[cD]:n.ONE,[uD]:n.SRC_COLOR,[gp]:n.SRC_ALPHA,[gD]:n.SRC_ALPHA_SATURATE,[pD]:n.DST_COLOR,[dD]:n.DST_ALPHA,[fD]:n.ONE_MINUS_SRC_COLOR,[vp]:n.ONE_MINUS_SRC_ALPHA,[mD]:n.ONE_MINUS_DST_COLOR,[hD]:n.ONE_MINUS_DST_ALPHA,[vD]:n.CONSTANT_COLOR,[xD]:n.ONE_MINUS_CONSTANT_COLOR,[_D]:n.CONSTANT_ALPHA,[yD]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(X,be,ge,Pe,Ne,_e,je,He,It,Ct){if(X===Sr){y===!0&&(Ue(n.BLEND),y=!1);return}if(y===!1&&(me(n.BLEND),y=!0),X!==iD){if(X!==S||Ct!==O){if((R!==Is||P!==Is)&&(n.blendEquation(n.FUNC_ADD),R=Is,P=Is),Ct)switch(X){case Xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case l_:n.blendFunc(n.ONE,n.ONE);break;case c_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case u_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case Xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case l_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case c_:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case u_:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}L=null,A=null,I=null,F=null,T.set(0,0,0),N=0,S=X,O=Ct}return}Ne=Ne||be,_e=_e||ge,je=je||Pe,(be!==R||Ne!==P)&&(n.blendEquationSeparate(ft[be],ft[Ne]),R=be,P=Ne),(ge!==L||Pe!==A||_e!==I||je!==F)&&(n.blendFuncSeparate(wt[ge],wt[Pe],wt[_e],wt[je]),L=ge,A=Pe,I=_e,F=je),(He.equals(T)===!1||It!==N)&&(n.blendColor(He.r,He.g,He.b,It),T.copy(He),N=It),S=X,O=!1}function gt(X,be){X.side===_r?Ue(n.CULL_FACE):me(n.CULL_FACE);let ge=X.side===Qn;be&&(ge=!ge),Gt(ge),X.blending===Xo&&X.transparent===!1?_t(Sr):_t(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),a.setMask(X.colorWrite);const Pe=X.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(X){V!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),V=X)}function Zt(X){X!==eD?(me(n.CULL_FACE),X!==j&&(X===a_?n.cullFace(n.BACK):X===tD?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),j=X}function Qt(X){X!==H&&(Z&&n.lineWidth(X),H=X)}function Yt(X,be,ge){X?(me(n.POLYGON_OFFSET_FILL),(ee!==be||K!==ge)&&(ee=be,K=ge,c.getReversed()&&(be=-be),n.polygonOffset(be,ge))):Ue(n.POLYGON_OFFSET_FILL)}function Pt(X){X?me(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function Wt(X){X===void 0&&(X=n.TEXTURE0+ue-1),oe!==X&&(n.activeTexture(X),oe=X)}function $(X,be,ge){ge===void 0&&(oe===null?ge=n.TEXTURE0+ue-1:ge=oe);let Pe=k[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},k[ge]=Pe),(Pe.type!==X||Pe.texture!==be)&&(oe!==ge&&(n.activeTexture(ge),oe=ge),n.bindTexture(X,be||xe[X]),Pe.type=X,Pe.texture=be)}function yn(){const X=k[oe];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Mt(){try{n.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function w(){try{n.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Q(){try{n.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Me(){try{n.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Re(){try{n.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function pe(){try{n.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function ve(){try{n.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function De(X){return v[X]!==void 0?v[X]:n.getParameter(X)}function qe(X,be){v[X]!==be&&(n.pixelStorei(X,be),v[X]=be)}function Le(X){Xe.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Xe.copy(X))}function Ce(X){Ve.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Ve.copy(X))}function Je(X,be){let ge=h.get(be);ge===void 0&&(ge=new WeakMap,h.set(be,ge));let Pe=ge.get(X);Pe===void 0&&(Pe=n.getUniformBlockIndex(be,X.name),ge.set(X,Pe))}function nt(X,be){const Pe=h.get(be).get(X);d.get(be)!==Pe&&(n.uniformBlockBinding(be,Pe,X.__bindingPointIndex),d.set(be,Pe))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},v={},oe=null,k={},m={},_=new WeakMap,E=[],M=null,y=!1,S=null,R=null,L=null,A=null,P=null,I=null,F=null,T=new At(0,0,0),N=0,O=!1,V=null,j=null,H=null,ee=null,K=null,Xe.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:me,disable:Ue,bindFramebuffer:et,drawBuffers:tt,useProgram:Ht,setBlending:_t,setMaterial:gt,setFlipSided:Gt,setCullFace:Zt,setLineWidth:Qt,setPolygonOffset:Yt,setScissorTest:Pt,activeTexture:Wt,bindTexture:$,unbindTexture:yn,compressedTexImage2D:Mt,compressedTexImage3D:U,texImage2D:pe,texImage3D:ve,pixelStorei:qe,getParameter:De,updateUBOMapping:Je,uniformBlockBinding:nt,texStorage2D:Me,texStorage3D:Re,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Le,viewport:Ce,reset:st}}function tF(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,p=new WeakMap,v=new Set;let m;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,w){return E?new OffscreenCanvas(U,w):Uu("canvas")}function y(U,w,Q){let ae=1;const he=Mt(U);if((he.width>Q||he.height>Q)&&(ae=Q/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(ae*he.width),Re=Math.floor(ae*he.height);m===void 0&&(m=M(Me,Re));const pe=w?M(Me,Re):m;return pe.width=Me,pe.height=Re,pe.getContext("2d").drawImage(U,0,0,Me,Re),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Me+"x"+Re+")."),pe}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function S(U){return U.generateMipmaps}function R(U){n.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(U,w,Q,ae,he,Me=!1){if(U!==null){if(n[U]!==void 0)return n[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(Q===n.FLOAT&&(pe=n.R32F),Q===n.HALF_FLOAT&&(pe=n.R16F),Q===n.UNSIGNED_BYTE&&(pe=n.R8),Q===n.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),Q===n.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(pe=n.R8UI),Q===n.UNSIGNED_SHORT&&(pe=n.R16UI),Q===n.UNSIGNED_INT&&(pe=n.R32UI),Q===n.BYTE&&(pe=n.R8I),Q===n.SHORT&&(pe=n.R16I),Q===n.INT&&(pe=n.R32I)),w===n.RG&&(Q===n.FLOAT&&(pe=n.RG32F),Q===n.HALF_FLOAT&&(pe=n.RG16F),Q===n.UNSIGNED_BYTE&&(pe=n.RG8),Q===n.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),Q===n.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(pe=n.RG8UI),Q===n.UNSIGNED_SHORT&&(pe=n.RG16UI),Q===n.UNSIGNED_INT&&(pe=n.RG32UI),Q===n.BYTE&&(pe=n.RG8I),Q===n.SHORT&&(pe=n.RG16I),Q===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),Q===n.UNSIGNED_INT&&(pe=n.RGB32UI),Q===n.BYTE&&(pe=n.RGB8I),Q===n.SHORT&&(pe=n.RGB16I),Q===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),Q===n.UNSIGNED_INT&&(pe=n.RGBA32UI),Q===n.BYTE&&(pe=n.RGBA8I),Q===n.SHORT&&(pe=n.RGBA16I),Q===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(Q===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),Q===n.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const ve=Me?Iu:vt.getTransfer(he);Q===n.FLOAT&&(pe=n.RGBA32F),Q===n.HALF_FLOAT&&(pe=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(pe=ve===Nt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),Q===n.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(U,w){let Q;return U?w===null||w===nr||w===al?Q=n.DEPTH24_STENCIL8:w===Ki?Q=n.DEPTH32F_STENCIL8:w===ol&&(Q=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===nr||w===al?Q=n.DEPTH_COMPONENT24:w===Ki?Q=n.DEPTH_COMPONENT32F:w===ol&&(Q=n.DEPTH_COMPONENT16),Q}function I(U,w){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==An&&U.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function F(U){const w=U.target;w.removeEventListener("dispose",F),N(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&v.delete(w)}function T(U){const w=U.target;w.removeEventListener("dispose",T),V(w)}function N(U){const w=i.get(U);if(w.__webglInit===void 0)return;const Q=U.source,ae=_.get(Q);if(ae){const he=ae[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(U),Object.keys(ae).length===0&&_.delete(Q)}i.remove(U)}function O(U){const w=i.get(U);n.deleteTexture(w.__webglTexture);const Q=U.source,ae=_.get(Q);delete ae[w.__cacheKey],c.memory.textures--}function V(U){const w=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let he=0;he<w.__webglFramebuffer[ae].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[ae][he]);else n.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ae]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=U.textures;for(let ae=0,he=Q.length;ae<he;ae++){const Me=i.get(Q[ae]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),c.memory.textures--),i.remove(Q[ae])}i.remove(U)}let j=0;function H(){j=0}function ee(){return j}function K(U){j=U}function ue(){const U=j;return U>=o.maxTextures&&at("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function Z(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function W(U,w){const Q=i.get(U);if(U.isVideoTexture&&$(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const ae=U.image;if(ae===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Q,U,w);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+w)}function ne(U,w){const Q=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ue(Q,U,w);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+w)}function oe(U,w){const Q=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ue(Q,U,w);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+w)}function k(U,w){const Q=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){et(Q,U,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+w)}const J={[wp]:n.REPEAT,[yr]:n.CLAMP_TO_EDGE,[Ap]:n.MIRRORED_REPEAT},Fe={[An]:n.NEAREST,[MD]:n.NEAREST_MIPMAP_NEAREST,[Pc]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[lh]:n.LINEAR_MIPMAP_NEAREST,[ks]:n.LINEAR_MIPMAP_LINEAR},Xe={[AD]:n.NEVER,[DD]:n.ALWAYS,[bD]:n.LESS,[Km]:n.LEQUAL,[CD]:n.EQUAL,[Zm]:n.GEQUAL,[RD]:n.GREATER,[PD]:n.NOTEQUAL};function Ve(U,w){if(w.type===Ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===In||w.magFilter===lh||w.magFilter===Pc||w.magFilter===ks||w.minFilter===In||w.minFilter===lh||w.minFilter===Pc||w.minFilter===ks)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,J[w.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,J[w.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,J[w.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Fe[w.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Fe[w.minFilter]),w.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===An||w.minFilter!==Pc&&w.minFilter!==ks||w.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ce(U,w){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",F));const ae=w.source;let he=_.get(ae);he===void 0&&(he={},_.set(ae,he));const Me=Z(w);if(Me!==U.__cacheKey){he[Me]===void 0&&(he[Me]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),he[Me].usedTimes++;const Re=he[U.__cacheKey];Re!==void 0&&(he[U.__cacheKey].usedTimes--,Re.usedTimes===0&&O(w)),U.__cacheKey=Me,U.__webglTexture=he[Me].texture}return Q}function xe(U,w,Q){return Math.floor(Math.floor(U/Q)/w)}function me(U,w,Q,ae){const Me=U.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Q,ae,w.data);else{Me.sort((qe,Le)=>qe.start-Le.start);let Re=0;for(let qe=1;qe<Me.length;qe++){const Le=Me[Re],Ce=Me[qe],Je=Le.start+Le.count,nt=xe(Ce.start,w.width,4),st=xe(Le.start,w.width,4);Ce.start<=Je+1&&nt===st&&xe(Ce.start+Ce.count-1,w.width,4)===nt?Le.count=Math.max(Le.count,Ce.start+Ce.count-Le.start):(++Re,Me[Re]=Ce)}Me.length=Re+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let qe=0,Le=Me.length;qe<Le;qe++){const Ce=Me[qe],Je=Math.floor(Ce.start/4),nt=Math.ceil(Ce.count/4),st=Je%w.width,X=Math.floor(Je/w.width),be=nt,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,st,X,be,ge,Q,ae,w.data)}U.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Ue(U,w,Q){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);const he=ce(U,w),Me=w.source;t.bindTexture(ae,U.__webglTexture,n.TEXTURE0+Q);const Re=i.get(Me);if(Me.version!==Re.__version||he===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ge=vt.getPrimaries(vt.workingColorSpace),Pe=w.colorSpace===ts?null:vt.getPrimaries(w.colorSpace),Ne=w.colorSpace===ts||ge===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=y(w.image,!1,o.maxTextureSize);ve=yn(w,ve);const De=a.convert(w.format,w.colorSpace),qe=a.convert(w.type);let Le=A(w.internalFormat,De,qe,w.normalized,w.colorSpace,w.isVideoTexture);Ve(ae,w);let Ce;const Je=w.mipmaps,nt=w.isVideoTexture!==!0,st=Re.__version===void 0||he===!0,X=Me.dataReady,be=I(w,ve);if(w.isDepthTexture)Le=P(w.format===Bs,w.type),st&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Le,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Le,ve.width,ve.height,0,De,qe,null));else if(w.isDataTexture)if(Je.length>0){nt&&st&&t.texStorage2D(n.TEXTURE_2D,be,Le,Je[0].width,Je[0].height);for(let ge=0,Pe=Je.length;ge<Pe;ge++)Ce=Je[ge],nt?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,qe,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,De,qe,Ce.data);w.generateMipmaps=!1}else nt?(st&&t.texStorage2D(n.TEXTURE_2D,be,Le,ve.width,ve.height),X&&me(w,ve,De,qe)):t.texImage2D(n.TEXTURE_2D,0,Le,ve.width,ve.height,0,De,qe,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Le,Je[0].width,Je[0].height,ve.depth);for(let ge=0,Pe=Je.length;ge<Pe;ge++)if(Ce=Je[ge],w.format!==Ii)if(De!==null)if(nt){if(X)if(w.layerUpdates.size>0){const Ne=O_(Ce.width,Ce.height,w.format,w.type);for(const _e of w.layerUpdates){const je=Ce.data.subarray(_e*Ne/Ce.data.BYTES_PER_ELEMENT,(_e+1)*Ne/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,_e,Ce.width,Ce.height,1,De,je)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ve.depth,De,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ve.depth,De,qe,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,ve.depth,0,De,qe,Ce.data)}else{nt&&st&&t.texStorage2D(n.TEXTURE_2D,be,Le,Je[0].width,Je[0].height);for(let ge=0,Pe=Je.length;ge<Pe;ge++)Ce=Je[ge],w.format!==Ii?De!==null?nt?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ce.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,qe,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,De,qe,Ce.data)}else if(w.isDataArrayTexture)if(nt){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Le,ve.width,ve.height,ve.depth),X)if(w.layerUpdates.size>0){const ge=O_(ve.width,ve.height,w.format,w.type);for(const Pe of w.layerUpdates){const Ne=ve.data.subarray(Pe*ge/ve.data.BYTES_PER_ELEMENT,(Pe+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ve.width,ve.height,1,De,qe,Ne)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,qe,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ve.width,ve.height,ve.depth,0,De,qe,ve.data);else if(w.isData3DTexture)nt?(st&&t.texStorage3D(n.TEXTURE_3D,be,Le,ve.width,ve.height,ve.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,qe,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ve.width,ve.height,ve.depth,0,De,qe,ve.data);else if(w.isFramebufferTexture){if(st)if(nt)t.texStorage2D(n.TEXTURE_2D,be,Le,ve.width,ve.height);else{let ge=ve.width,Pe=ve.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Le,ge,Pe,0,De,qe,null),ge>>=1,Pe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),v.add(w),ge.onpaint=Pe=>{const Ne=Pe.changedElements;for(const _e of v)Ne.includes(_e.image)&&(_e.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const Ne=n.RGBA,_e=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,_e,je,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(nt&&st){const ge=Mt(Je[0]);t.texStorage2D(n.TEXTURE_2D,be,Le,ge.width,ge.height)}for(let ge=0,Pe=Je.length;ge<Pe;ge++)Ce=Je[ge],nt?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,De,qe,Ce):t.texImage2D(n.TEXTURE_2D,ge,Le,De,qe,Ce);w.generateMipmaps=!1}else if(nt){if(st){const ge=Mt(ve);t.texStorage2D(n.TEXTURE_2D,be,Le,ge.width,ge.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,qe,ve)}else t.texImage2D(n.TEXTURE_2D,0,Le,De,qe,ve);S(w)&&R(ae),Re.__version=Me.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function et(U,w,Q){if(w.image.length!==6)return;const ae=ce(U,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+Q);const Me=i.get(he);if(he.version!==Me.__version||ae===!0){t.activeTexture(n.TEXTURE0+Q);const Re=vt.getPrimaries(vt.workingColorSpace),pe=w.colorSpace===ts?null:vt.getPrimaries(w.colorSpace),ve=w.colorSpace===ts||Re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,qe=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let _e=0;_e<6;_e++)!De&&!qe?Le[_e]=y(w.image[_e],!0,o.maxCubemapSize):Le[_e]=qe?w.image[_e].image:w.image[_e],Le[_e]=yn(w,Le[_e]);const Ce=Le[0],Je=a.convert(w.format,w.colorSpace),nt=a.convert(w.type),st=A(w.internalFormat,Je,nt,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,be=Me.__version===void 0||ae===!0,ge=he.dataReady;let Pe=I(w,Ce);Ve(n.TEXTURE_CUBE_MAP,w);let Ne;if(De){X&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,st,Ce.width,Ce.height);for(let _e=0;_e<6;_e++){Ne=Le[_e].mipmaps;for(let je=0;je<Ne.length;je++){const He=Ne[je];w.format!==Ii?Je!==null?X?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,He.width,He.height,Je,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,st,He.width,He.height,0,He.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,He.width,He.height,Je,nt,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,st,He.width,He.height,0,Je,nt,He.data)}}}else{if(Ne=w.mipmaps,X&&be){Ne.length>0&&Pe++;const _e=Mt(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,st,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(qe){X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Le[_e].width,Le[_e].height,Je,nt,Le[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,Le[_e].width,Le[_e].height,0,Je,nt,Le[_e].data);for(let je=0;je<Ne.length;je++){const It=Ne[je].image[_e].image;X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,It.width,It.height,Je,nt,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,st,It.width,It.height,0,Je,nt,It.data)}}else{X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Je,nt,Le[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,Je,nt,Le[_e]);for(let je=0;je<Ne.length;je++){const He=Ne[je];X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,Je,nt,He.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,st,Je,nt,He.image[_e])}}}S(w)&&R(n.TEXTURE_CUBE_MAP),Me.__version=he.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function tt(U,w,Q,ae,he,Me){const Re=a.convert(Q.format,Q.colorSpace),pe=a.convert(Q.type),ve=A(Q.internalFormat,Re,pe,Q.normalized,Q.colorSpace),De=i.get(w),qe=i.get(Q);if(qe.__renderTarget=w,!De.__hasExternalTextures){const Le=Math.max(1,w.width>>Me),Ce=Math.max(1,w.height>>Me);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Me,ve,Le,Ce,w.depth,0,Re,pe,null):t.texImage2D(he,Me,ve,Le,Ce,0,Re,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Wt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,he,qe.__webglTexture,0,Pt(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,he,qe.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(U,w,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,U),w.depthBuffer){const ae=w.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Me=P(w.stencilBuffer,he),Re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(w),Me,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(w),Me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Me,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,U)}else{const ae=w.textures;for(let he=0;he<ae.length;he++){const Me=ae[he],Re=a.convert(Me.format,Me.colorSpace),pe=a.convert(Me.type),ve=A(Me.internalFormat,Re,pe,Me.normalized,Me.colorSpace);Wt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(w),ve,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(w),ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(U,w,Q){const ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w.depthTexture);const De=a.convert(w.depthTexture.format),qe=a.convert(w.depthTexture.type);let Le;w.depthTexture.format===wr?Le=n.DEPTH_COMPONENT24:w.depthTexture.format===Bs&&(Le=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,w.width,w.height,0,De,qe,null)}}else W(w.depthTexture,0);const Me=he.__webglTexture,Re=Pt(w),pe=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,ve=w.depthTexture.format===Bs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===wr)Wt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Me,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Me,0);else if(w.depthTexture.format===Bs)Wt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Me,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(U){const w=i.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ae}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)ft(w.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?ft(w.__webglFramebuffer[0],U,0):ft(w.__webglFramebuffer,U,0)}else if(Q){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ht(w.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Me)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ht(w.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(U,w,Q){const ae=i.get(U);w!==void 0&&tt(ae.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&wt(U)}function gt(U){const w=U.texture,Q=i.get(U),ae=i.get(w);U.addEventListener("dispose",T);const he=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,c.memory.textures++),Me){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let ve=0;ve<w.mipmaps.length;ve++)Q.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else Q.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Re)for(let pe=0,ve=he.length;pe<ve;pe++){const De=i.get(he[pe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),c.memory.textures++)}if(U.samples>0&&Wt(U)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ve=he[pe];Q.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const De=a.convert(ve.format,ve.colorSpace),qe=a.convert(ve.type),Le=A(ve.internalFormat,De,qe,ve.normalized,ve.colorSpace,U.isXRRenderTarget===!0),Ce=Pt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Le,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Q.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ht(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)tt(Q.__webglFramebuffer[pe][ve],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else tt(Q.__webglFramebuffer[pe],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(w)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,ve=he.length;pe<ve;pe++){const De=he[pe],qe=i.get(De);let Le=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,qe.__webglTexture),Ve(Le,De),tt(Q.__webglFramebuffer,U,De,n.COLOR_ATTACHMENT0+pe,Le,0),S(De)&&R(Le)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Ve(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)tt(Q.__webglFramebuffer[ve],U,w,n.COLOR_ATTACHMENT0,pe,ve);else tt(Q.__webglFramebuffer,U,w,n.COLOR_ATTACHMENT0,pe,0);S(w)&&R(pe),t.unbindTexture()}U.depthBuffer&&wt(U)}function Gt(U){const w=U.textures;for(let Q=0,ae=w.length;Q<ae;Q++){const he=w[Q];if(S(he)){const Me=L(U),Re=i.get(he).__webglTexture;t.bindTexture(Me,Re),R(Me),t.unbindTexture()}}}const Zt=[],Qt=[];function Yt(U){if(U.samples>0){if(Wt(U)===!1){const w=U.textures,Q=U.width,ae=U.height;let he=n.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(U),pe=w.length>1;if(pe)for(let De=0;De<w.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ve=U.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<w.length;De++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const qe=i.get(w[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,he,n.NEAREST),d===!0&&(Zt.length=0,Qt.length=0,Zt.push(n.COLOR_ATTACHMENT0+De),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Zt.push(Me),Qt.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<w.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const qe=i.get(w[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const w=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Pt(U){return Math.min(o.maxSamples,U.samples)}function Wt(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $(U){const w=c.render.frame;p.get(U)!==w&&(p.set(U,w),U.update())}function yn(U,w){const Q=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Nu&&Q!==ts&&(vt.getTransfer(Q)===Nt?(ae!==Ii||he!==gi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),w}function Mt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=ue,this.resetTextureUnits=H,this.getTextureUnits=ee,this.setTextureUnits=K,this.setTexture2D=W,this.setTexture2DArray=ne,this.setTexture3D=oe,this.setTextureCube=k,this.rebindTextures=_t,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nF(n,e){function t(i,o=ts){let a;const c=vt.getTransfer(o);if(i===gi)return n.UNSIGNED_BYTE;if(i===Xm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===BE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===VE)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===OE)return n.BYTE;if(i===kE)return n.SHORT;if(i===ol)return n.UNSIGNED_SHORT;if(i===Wm)return n.INT;if(i===nr)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===Tr)return n.HALF_FLOAT;if(i===zE)return n.ALPHA;if(i===HE)return n.RGB;if(i===Ii)return n.RGBA;if(i===wr)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===GE)return n.RED;if(i===Ym)return n.RED_INTEGER;if(i===Xs)return n.RG;if(i===$m)return n.RG_INTEGER;if(i===qm)return n.RGBA_INTEGER;if(i===hu||i===pu||i===mu||i===gu)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bp||i===Cp||i===Rp||i===Pp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===bp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dp||i===Lp||i===Np||i===Ip||i===Fp||i===Du||i===Up)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Dp||i===Lp)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Np)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ip)return a.COMPRESSED_R11_EAC;if(i===Fp)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Du)return a.COMPRESSED_RG11_EAC;if(i===Up)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Op||i===kp||i===Bp||i===Vp||i===zp||i===Hp||i===Gp||i===Wp||i===Xp||i===jp||i===Yp||i===$p||i===qp||i===Kp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Op)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$p)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kp)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zp||i===Qp||i===Jp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Zp)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===em||i===tm||i===Lu||i===nm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===em)return a.COMPRESSED_RED_RGTC1_EXT;if(i===tm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===al?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const iF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rF=`
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

}`;class sF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new tM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ir({vertexShader:iF,fragmentShader:rF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ar(new qu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oF extends qs{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,m=null,_=null,E=null;const M=typeof XRWebGLBinding<"u",y=new sF,S={},R=t.getContextAttributes();let L=null,A=null;const P=[],I=[],F=new bt;let T=null;const N=new Li;N.viewport=new tn;const O=new Li;O.viewport=new tn;const V=[N,O],j=new g2;let H=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let xe=P[ce];return xe===void 0&&(xe=new gh,P[ce]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ce){let xe=P[ce];return xe===void 0&&(xe=new gh,P[ce]=xe),xe.getGripSpace()},this.getHand=function(ce){let xe=P[ce];return xe===void 0&&(xe=new gh,P[ce]=xe),xe.getHandSpace()};function K(ce){const xe=I.indexOf(ce.inputSource);if(xe===-1)return;const me=P[xe];me!==void 0&&(me.update(ce.inputSource,ce.frame,h||c),me.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ue(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",Z);for(let ce=0;ce<P.length;ce++){const xe=I[ce];xe!==null&&(I[ce]=null,P[ce].disconnect(xe))}H=null,ee=null,y.reset();for(const ce in S)delete S[ce];e.setRenderTarget(L),_=null,m=null,v=null,o=null,A=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){a=ce,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){u=ce,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return v===null&&M&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",Z),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,et=null;R.depth&&(et=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?Bs:wr,Ue=R.stencil?al:nr);const tt={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(tt),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new er(m.textureWidth,m.textureHeight,{format:Ii,type:gi,depthTexture:new Qo(m.textureWidth,m.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),A=new er(_.framebufferWidth,_.framebufferHeight,{format:Ii,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),Ve.setContext(o),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(ce){for(let xe=0;xe<ce.removed.length;xe++){const me=ce.removed[xe],Ue=I.indexOf(me);Ue>=0&&(I[Ue]=null,P[Ue].disconnect(me))}for(let xe=0;xe<ce.added.length;xe++){const me=ce.added[xe];let Ue=I.indexOf(me);if(Ue===-1){for(let tt=0;tt<P.length;tt++)if(tt>=I.length){I.push(me),Ue=tt;break}else if(I[tt]===null){I[tt]=me,Ue=tt;break}if(Ue===-1)break}const et=P[Ue];et&&et.connect(me)}}const W=new le,ne=new le;function oe(ce,xe,me){W.setFromMatrixPosition(xe.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);const Ue=W.distanceTo(ne),et=xe.projectionMatrix.elements,tt=me.projectionMatrix.elements,Ht=et[14]/(et[10]-1),ft=et[14]/(et[10]+1),wt=(et[9]+1)/et[5],_t=(et[9]-1)/et[5],gt=(et[8]-1)/et[0],Gt=(tt[8]+1)/tt[0],Zt=Ht*gt,Qt=Ht*Gt,Yt=Ue/(-gt+Gt),Pt=Yt*-gt;if(xe.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Pt),ce.translateZ(Yt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),et[10]===-1)ce.projectionMatrix.copy(xe.projectionMatrix),ce.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Wt=Ht+Yt,$=ft+Yt,yn=Zt-Pt,Mt=Qt+(Ue-Pt),U=wt*ft/$*Wt,w=_t*ft/$*Wt;ce.projectionMatrix.makePerspective(yn,Mt,U,w,Wt,$),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function k(ce,xe){xe===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(xe.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let xe=ce.near,me=ce.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(me=y.depthFar)),j.near=O.near=N.near=xe,j.far=O.far=N.far=me,(H!==j.near||ee!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),H=j.near,ee=j.far),j.layers.mask=ce.layers.mask|6,N.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;const Ue=ce.parent,et=j.cameras;k(j,Ue);for(let tt=0;tt<et.length;tt++)k(et[tt],Ue);et.length===2?oe(j,N,O):j.projectionMatrix.copy(N.projectionMatrix),J(ce,j,Ue)};function J(ce,xe,me){me===null?ce.matrix.copy(xe.matrixWorld):(ce.matrix.copy(me.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(xe.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(xe.projectionMatrix),ce.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=im*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(ce){d=ce,m!==null&&(m.fixedFoveation=ce),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ce){return S[ce]};let Fe=null;function Xe(ce,xe){if(p=xe.getViewerPose(h||c),E=xe,p!==null){const me=p.views;_!==null&&(e.setRenderTargetFramebuffer(A,_.framebuffer),e.setRenderTarget(A));let Ue=!1;me.length!==j.cameras.length&&(j.cameras.length=0,Ue=!0);for(let ft=0;ft<me.length;ft++){const wt=me[ft];let _t=null;if(_!==null)_t=_.getViewport(wt);else{const Gt=v.getViewSubImage(m,wt);_t=Gt.viewport,ft===0&&(e.setRenderTargetTextures(A,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(A))}let gt=V[ft];gt===void 0&&(gt=new Li,gt.layers.enable(ft),gt.viewport=new tn,V[ft]=gt),gt.matrix.fromArray(wt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(wt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(_t.x,_t.y,_t.width,_t.height),ft===0&&(j.matrix.copy(gt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ue===!0&&j.cameras.push(gt)}const et=o.enabledFeatures;if(et&&et.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){v=i.getBinding();const ft=v.getDepthInformation(me[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(et&&et.includes("camera-access")&&M){e.state.unbindTexture(),v=i.getBinding();for(let ft=0;ft<me.length;ft++){const wt=me[ft].camera;if(wt){let _t=S[wt];_t||(_t=new tM,S[wt]=_t);const gt=v.getCameraImage(wt);_t.sourceTexture=gt}}}}for(let me=0;me<P.length;me++){const Ue=I[me],et=P[me];Ue!==null&&et!==void 0&&et.update(Ue,xe,h||c)}Fe&&Fe(ce,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Ve=new rM;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(ce){Fe=ce},this.dispose=function(){}}}const aF=new rn,fM=new ut;fM.set(-1,0,0,0,1,0,0,0,1);function lF(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,nM(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,L,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),v(y,S)):S.isMeshPhongMaterial?(a(y,S),p(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),m(y,S),S.isMeshPhysicalMaterial&&_(y,S,A)):S.isMeshMatcapMaterial?(a(y,S),E(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),M(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&u(y,S)):S.isPointsMaterial?d(y,S,R,L):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),L=R.envMap,A=R.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(aF.makeRotationFromEuler(A)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(fM),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function u(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function cF(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,P){const I=P.program;i.uniformBlockBinding(A,I)}function h(A,P){let I=o[A.id];I===void 0&&(y(A),I=p(A),o[A.id]=I,A.addEventListener("dispose",R));const F=P.program;i.updateUBOMapping(A,F);const T=e.render.frame;a[A.id]!==T&&(m(A),a[A.id]=T)}function p(A){const P=v();A.__bindingPointIndex=P;const I=n.createBuffer(),F=A.__size,T=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,F,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,I),I}function v(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const P=o[A.id],I=A.uniforms,F=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let T=0,N=I.length;T<N;T++){const O=I[T];if(Array.isArray(O))for(let V=0,j=O.length;V<j;V++)_(O[V],T,V,F);else _(O,T,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(A,P,I,F){if(M(A,P,I,F)===!0){const T=A.__offset,N=A.value;if(Array.isArray(N)){let O=0;for(let V=0;V<N.length;V++){const j=N[V],H=S(j);E(j,A.__data,O),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(O+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,A.__data)}}function E(A,P,I){typeof A=="number"||typeof A=="boolean"?P[0]=A:A.isMatrix3?(P[0]=A.elements[0],P[1]=A.elements[1],P[2]=A.elements[2],P[3]=0,P[4]=A.elements[3],P[5]=A.elements[4],P[6]=A.elements[5],P[7]=0,P[8]=A.elements[6],P[9]=A.elements[7],P[10]=A.elements[8],P[11]=0):ArrayBuffer.isView(A)?P.set(new A.constructor(A.buffer,A.byteOffset,P.length)):A.toArray(P,I)}function M(A,P,I,F){const T=A.value,N=P+"_"+I;if(F[N]===void 0)return typeof T=="number"||typeof T=="boolean"?F[N]=T:ArrayBuffer.isView(T)?F[N]=T.slice():F[N]=T.clone(),!0;{const O=F[N];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return F[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(O.equals(T)===!1)return O.copy(T),!0}}return!1}function y(A){const P=A.uniforms;let I=0;const F=16;for(let N=0,O=P.length;N<O;N++){const V=Array.isArray(P[N])?P[N]:[P[N]];for(let j=0,H=V.length;j<H;j++){const ee=V[j],K=Array.isArray(ee.value)?ee.value:[ee.value];for(let ue=0,Z=K.length;ue<Z;ue++){const W=K[ue],ne=S(W),oe=I%F,k=oe%ne.boundary,J=oe+k;I+=k,J!==0&&F-J<ne.storage&&(I+=F-J),ee.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=I,I+=ne.storage}}}const T=I%F;return T>0&&(I+=F-T),A.__size=I,A.__cache={},this}function S(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(P.boundary=16,P.storage=A.byteLength):at("WebGLRenderer: Unsupported uniform value type.",A),P}function R(A){const P=A.target;P.removeEventListener("dispose",R);const I=c.indexOf(P.__bindingPointIndex);c.splice(I,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function L(){for(const A in o)n.deleteBuffer(o[A]);c=[],o={},a={}}return{bind:d,update:h,dispose:L}}const uF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function fF(){return Xi===null&&(Xi=new n2(uF,16,16,Xs,Tr),Xi.name="DFG_LUT",Xi.minFilter=In,Xi.magFilter=In,Xi.wrapS=yr,Xi.wrapT=yr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class dF{constructor(e={}){const{canvas:t=ND(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:_=gi}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;const M=_,y=new Set([qm,$m,Ym]),S=new Set([gi,nr,ol,al,Xm,jm]),R=new Uint32Array(4),L=new Int32Array(4),A=new le;let P=null,I=null;const F=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let V=!1,j=null,H=null,ee=null,K=null;this._outputColorSpace=mi;let ue=0,Z=0,W=null,ne=-1,oe=null;const k=new tn,J=new tn;let Fe=null;const Xe=new At(0);let Ve=0,ce=t.width,xe=t.height,me=1,Ue=null,et=null;const tt=new tn(0,0,ce,xe),Ht=new tn(0,0,ce,xe);let ft=!1;const wt=new QE;let _t=!1,gt=!1;const Gt=new rn,Zt=new le,Qt=new tn,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Wt(){return W===null?me:1}let $=i;function yn(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gm}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",bn,!1),$===null){const q="webgl2";if($=yn(q,C),$===null)throw yn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Et("WebGLRenderer: "+C.message),C}let Mt,U,w,Q,ae,he,Me,Re,pe,ve,De,qe,Le,Ce,Je,nt,st,X,be,ge,Pe,Ne,_e;function je(){Mt=new fN($),Mt.init(),Pe=new nF($,Mt),U=new iN($,Mt,e,Pe),w=new eF($,Mt),U.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),H=$.createFramebuffer(),ee=$.createFramebuffer(),K=$.createFramebuffer(),Q=new pN($),ae=new VI,he=new tF($,Mt,w,ae,U,Pe,Q),Me=new uN(O),Re=new x2($),Ne=new tN($,Re),pe=new dN($,Re,Q,Ne),ve=new gN($,pe,Re,Ne,Q),X=new mN($,U,he),Je=new rN(ae),De=new BI(O,Me,Mt,U,Ne,Je),qe=new lF(O,ae),Le=new HI,Ce=new $I(Mt),st=new eN(O,Me,w,ve,E,d),nt=new JI(O,ve,U),_e=new cF($,Q,U,w),be=new nN($,Mt,Q),ge=new hN($,Mt,Q),Q.programs=De.programs,O.capabilities=U,O.extensions=Mt,O.properties=ae,O.renderLists=Le,O.shadowMap=nt,O.state=w,O.info=Q}je(),M!==gi&&(N=new xN(M,t.width,t.height,u,o,a));const He=new oF(O,$);this.xr=He,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(ce,xe,!1))},this.getSize=function(C){return C.set(ce,xe)},this.setSize=function(C,q,fe=!0){if(He.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,xe=q,t.width=Math.floor(C*me),t.height=Math.floor(q*me),fe===!0&&(t.style.width=C+"px",t.style.height=q+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ce*me,xe*me).floor()},this.setDrawingBufferSize=function(C,q,fe){ce=C,xe=q,me=fe,t.width=Math.floor(C*fe),t.height=Math.floor(q*fe),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(M===gi){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,q,fe,re){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,q,fe,re),w.viewport(k.copy(tt).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(Ht)},this.setScissor=function(C,q,fe,re){C.isVector4?Ht.set(C.x,C.y,C.z,C.w):Ht.set(C,q,fe,re),w.scissor(J.copy(Ht).multiplyScalar(me).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){w.setScissorTest(ft=C)},this.setOpaqueSort=function(C){Ue=C},this.setTransparentSort=function(C){et=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,fe=!0){let re=0;if(C){let ie=!1;if(W!==null){const Ae=W.texture.format;ie=y.has(Ae)}if(ie){const Ae=W.texture.type,Be=S.has(Ae),we=st.getClearColor(),Ye=st.getClearAlpha(),Qe=we.r,lt=we.g,ct=we.b;Be?(R[0]=Qe,R[1]=lt,R[2]=ct,R[3]=Ye,$.clearBufferuiv($.COLOR,0,R)):(L[0]=Qe,L[1]=lt,L[2]=ct,L[3]=Ye,$.clearBufferiv($.COLOR,0,L))}else re|=$.COLOR_BUFFER_BIT}q&&(re|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(re|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&$.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),st.dispose(),Le.dispose(),Ce.dispose(),ae.dispose(),Me.dispose(),ve.dispose(),Ne.dispose(),_e.dispose(),De.dispose(),He.dispose(),He.removeEventListener("sessionstart",gl),He.removeEventListener("sessionend",vl),Fn.stop()};function It(C){C.preventDefault(),g_("WebGLRenderer: Context Lost."),V=!0}function Ct(){g_("WebGLRenderer: Context Restored."),V=!1;const C=Q.autoReset,q=nt.enabled,fe=nt.autoUpdate,re=nt.needsUpdate,ie=nt.type;je(),Q.autoReset=C,nt.enabled=q,nt.autoUpdate=fe,nt.needsUpdate=re,nt.type=ie}function bn(C){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ai(C){const q=C.target;q.removeEventListener("dispose",ai),cs(q)}function cs(C){Ks(C),ae.remove(C)}function Ks(C){const q=ae.get(C).programs;q!==void 0&&(q.forEach(function(fe){De.releaseProgram(fe)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,fe,re,ie,Ae){q===null&&(q=Yt);const Be=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,we=$t(C,q,fe,re,ie);w.setMaterial(re,Be);let Ye=fe.index,Qe=1;if(re.wireframe===!0){if(Ye=pe.getWireframeAttribute(fe),Ye===void 0)return;Qe=2}const lt=fe.drawRange,ct=fe.attributes.position;let Ke=lt.start*Qe,yt=(lt.start+lt.count)*Qe;Ae!==null&&(Ke=Math.max(Ke,Ae.start*Qe),yt=Math.min(yt,(Ae.start+Ae.count)*Qe)),Ye!==null?(Ke=Math.max(Ke,0),yt=Math.min(yt,Ye.count)):ct!=null&&(Ke=Math.max(Ke,0),yt=Math.min(yt,ct.count));const Ot=yt-Ke;if(Ot<0||Ot===1/0)return;Ne.setup(ie,re,we,fe,Ye);let Xt,Dt=be;if(Ye!==null&&(Xt=Re.get(Ye),Dt=ge,Dt.setIndex(Xt)),ie.isMesh)re.wireframe===!0?(w.setLineWidth(re.wireframeLinewidth*Wt()),Dt.setMode($.LINES)):Dt.setMode($.TRIANGLES);else if(ie.isLine){let sn=re.linewidth;sn===void 0&&(sn=1),w.setLineWidth(sn*Wt()),ie.isLineSegments?Dt.setMode($.LINES):ie.isLineLoop?Dt.setMode($.LINE_LOOP):Dt.setMode($.LINE_STRIP)}else ie.isPoints?Dt.setMode($.POINTS):ie.isSprite&&Dt.setMode($.TRIANGLES);if(ie.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const sn=ie._multiDrawStarts,Oe=ie._multiDrawCounts,Sn=ie._multiDrawCount,ht=Ye?Re.get(Ye).bytesPerElement:1,Gn=ae.get(re).currentProgram.getUniforms();for(let Wn=0;Wn<Sn;Wn++)Gn.setValue($,"_gl_DrawID",Wn),Dt.render(sn[Wn]/ht,Oe[Wn])}else if(ie.isInstancedMesh)Dt.renderInstances(Ke,Ot,ie.count);else if(fe.isInstancedBufferGeometry){const sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Oe=Math.min(fe.instanceCount,sn);Dt.renderInstances(Ke,Ot,Oe)}else Dt.render(Ke,Ot)};function us(C,q,fe){C.transparent===!0&&C.side===_r&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,hs(C,q,fe),C.side=as,C.needsUpdate=!0,hs(C,q,fe),C.side=_r):hs(C,q,fe)}this.compile=function(C,q,fe=null){fe===null&&(fe=C),I=Ce.get(fe),I.init(q),T.push(I),fe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),C!==fe&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),I.setupLights();const re=new Set;return C.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ae=ie.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){const we=Ae[Be];us(we,fe,ie),re.add(we)}else us(Ae,fe,ie),re.add(Ae)}),I=T.pop(),re},this.compileAsync=function(C,q,fe=null){const re=this.compile(C,q,fe);return new Promise(ie=>{function Ae(){if(re.forEach(function(Be){ae.get(Be).currentProgram.isReady()&&re.delete(Be)}),re.size===0){ie(C);return}setTimeout(Ae,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let fs=null;function Qu(C){fs&&fs(C)}function gl(){Fn.stop()}function vl(){Fn.start()}const Fn=new rM;Fn.setAnimationLoop(Qu),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(C){fs=C,He.setAnimationLoop(C),C===null?Fn.stop():Fn.start()},He.addEventListener("sessionstart",gl),He.addEventListener("sessionend",vl),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;j!==null&&j.renderStart(C,q);const fe=He.enabled===!0&&He.isPresenting===!0,re=N!==null&&(W===null||fe)&&N.begin(O,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(q),q=He.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,q,W),I=Ce.get(C,T.length),I.init(q),I.state.textureUnits=he.getTextureUnits(),T.push(I),Gt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),wt.setFromProjectionMatrix(Gt,Zi,q.reversedDepth),gt=this.localClippingEnabled,_t=Je.init(this.clippingPlanes,gt),P=Le.get(C,F.length),P.init(),F.push(P),He.enabled===!0&&He.isPresenting===!0){const Be=O.xr.getDepthSensingMesh();Be!==null&&Zs(Be,q,-1/0,O.sortObjects)}Zs(C,q,0,O.sortObjects),P.finish(),O.sortObjects===!0&&P.sort(Ue,et,q.reversedDepth),Pt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Pt&&st.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Je.beginShadows();const ie=I.state.shadowsArray;if(nt.render(ie,C,q),_t===!0&&Je.endShadows(),(re&&N.hasRenderPass())===!1){const Be=P.opaque,we=P.transmissive;if(I.setupLights(),q.isArrayCamera){const Ye=q.cameras;if(we.length>0)for(let Qe=0,lt=Ye.length;Qe<lt;Qe++){const ct=Ye[Qe];xl(Be,we,C,ct)}Pt&&st.render(C);for(let Qe=0,lt=Ye.length;Qe<lt;Qe++){const ct=Ye[Qe];sa(P,C,ct,ct.viewport)}}else we.length>0&&xl(Be,we,C,q),Pt&&st.render(C),sa(P,C,q)}W!==null&&Z===0&&(he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W)),re&&N.end(O),C.isScene===!0&&C.onAfterRender(O,C,q),Ne.resetDefaultState(),ne=-1,oe=null,T.pop(),T.length>0?(I=T[T.length-1],he.setTextureUnits(I.state.textureUnits),_t===!0&&Je.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,j!==null&&j.renderEnd()};function Zs(C,q,fe,re){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)I.pushLightProbeGrid(C);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||wt.intersectsSprite(C)){re&&Qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Gt);const Be=ve.update(C),we=C.material;we.visible&&P.push(C,Be,we,fe,Qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||wt.intersectsObject(C))){const Be=ve.update(C),we=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qt.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Qt.copy(Be.boundingSphere.center)),Qt.applyMatrix4(C.matrixWorld).applyMatrix4(Gt)),Array.isArray(we)){const Ye=Be.groups;for(let Qe=0,lt=Ye.length;Qe<lt;Qe++){const ct=Ye[Qe],Ke=we[ct.materialIndex];Ke&&Ke.visible&&P.push(C,Be,Ke,fe,Qt.z,ct)}}else we.visible&&P.push(C,Be,we,fe,Qt.z,null)}}const Ae=C.children;for(let Be=0,we=Ae.length;Be<we;Be++)Zs(Ae[Be],q,fe,re)}function sa(C,q,fe,re){const{opaque:ie,transmissive:Ae,transparent:Be}=C;I.setupLightsView(fe),_t===!0&&Je.setGlobalState(O.clippingPlanes,fe),re&&w.viewport(k.copy(re)),ie.length>0&&ds(ie,q,fe),Ae.length>0&&ds(Ae,q,fe),Be.length>0&&ds(Be,q,fe),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function xl(C,q,fe,re){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const Ke=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new er(1,1,{generateMipmaps:!0,type:Ke?Tr:gi,minFilter:ks,samples:Math.max(4,U.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ae=I.state.transmissionRenderTarget[re.id],Be=re.viewport||k;Ae.setSize(Be.z*O.transmissionResolutionScale,Be.w*O.transmissionResolutionScale);const we=O.getRenderTarget(),Ye=O.getActiveCubeFace(),Qe=O.getActiveMipmapLevel();O.setRenderTarget(Ae),O.getClearColor(Xe),Ve=O.getClearAlpha(),Ve<1&&O.setClearColor(16777215,.5),O.clear(),Pt&&st.render(fe);const lt=O.toneMapping;O.toneMapping=Ji;const ct=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),_t===!0&&Je.setGlobalState(O.clippingPlanes,re),ds(C,fe,re),he.updateMultisampleRenderTarget(Ae),he.updateRenderTargetMipmap(Ae),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let yt=0,Ot=q.length;yt<Ot;yt++){const Xt=q[yt],{object:Dt,geometry:sn,material:Oe,group:Sn}=Xt;if(Oe.side===_r&&Dt.layers.test(re.layers)){const ht=Oe.side;Oe.side=Qn,Oe.needsUpdate=!0,oa(Dt,fe,re,sn,Oe,Sn),Oe.side=ht,Oe.needsUpdate=!0,Ke=!0}}Ke===!0&&(he.updateMultisampleRenderTarget(Ae),he.updateRenderTargetMipmap(Ae))}O.setRenderTarget(we,Ye,Qe),O.setClearColor(Xe,Ve),ct!==void 0&&(re.viewport=ct),O.toneMapping=lt}function ds(C,q,fe){const re=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Ae=C.length;ie<Ae;ie++){const Be=C[ie],{object:we,geometry:Ye,group:Qe}=Be;let lt=Be.material;lt.allowOverride===!0&&re!==null&&(lt=re),we.layers.test(fe.layers)&&oa(we,q,fe,Ye,lt,Qe)}}function oa(C,q,fe,re,ie,Ae){C.onBeforeRender(O,q,fe,re,ie,Ae),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(O,q,fe,re,C,Ae),ie.transparent===!0&&ie.side===_r&&ie.forceSinglePass===!1?(ie.side=Qn,ie.needsUpdate=!0,O.renderBufferDirect(fe,q,re,ie,C,Ae),ie.side=as,ie.needsUpdate=!0,O.renderBufferDirect(fe,q,re,ie,C,Ae),ie.side=_r):O.renderBufferDirect(fe,q,re,ie,C,Ae),C.onAfterRender(O,q,fe,re,ie,Ae)}function hs(C,q,fe){q.isScene!==!0&&(q=Yt);const re=ae.get(C),ie=I.state.lights,Ae=I.state.shadowsArray,Be=ie.state.version,we=De.getParameters(C,ie.state,Ae,q,fe,I.state.lightProbeGridArray),Ye=De.getProgramCacheKey(we);let Qe=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,re.fog=q.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=Me.get(C.envMap||re.environment,lt),re.envMapRotation=re.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",ai),Qe=new Map,re.programs=Qe);let ct=Qe.get(Ye);if(ct!==void 0){if(re.currentProgram===ct&&re.lightsStateVersion===Be)return _l(C,we),ct}else we.uniforms=De.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,fe,we),C.onBeforeCompile(we,O),ct=De.acquireProgram(we,Ye),Qe.set(Ye,ct),re.uniforms=we.uniforms;const Ke=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Je.uniform),_l(C,we),re.needsLights=la(C),re.lightsStateVersion=Be,re.needsLights&&(Ke.ambientLightColor.value=ie.state.ambient,Ke.lightProbe.value=ie.state.probe,Ke.directionalLights.value=ie.state.directional,Ke.directionalLightShadows.value=ie.state.directionalShadow,Ke.spotLights.value=ie.state.spot,Ke.spotLightShadows.value=ie.state.spotShadow,Ke.rectAreaLights.value=ie.state.rectArea,Ke.ltc_1.value=ie.state.rectAreaLTC1,Ke.ltc_2.value=ie.state.rectAreaLTC2,Ke.pointLights.value=ie.state.point,Ke.pointLightShadows.value=ie.state.pointShadow,Ke.hemisphereLights.value=ie.state.hemi,Ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ie.state.spotLightMatrix,Ke.spotLightMap.value=ie.state.spotLightMap,Ke.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.lightProbeGrid=I.state.lightProbeGridArray.length>0,re.currentProgram=ct,re.uniformsList=null,ct}function aa(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=vu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function _l(C,q){const fe=ae.get(C);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function Ju(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;A.setFromMatrixPosition(q.matrixWorld);for(let fe=0,re=C.length;fe<re;fe++){const ie=C[fe];if(ie.texture!==null&&ie.boundingBox.containsPoint(A))return ie}return null}function $t(C,q,fe,re,ie){q.isScene!==!0&&(q=Yt),he.resetTextureUnits();const Ae=q.fog,Be=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?q.environment:null,we=W===null?O.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:vt.workingColorSpace,Ye=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Qe=Me.get(re.envMap||Be,Ye),lt=re.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ct=!!fe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!fe.morphAttributes.position,yt=!!fe.morphAttributes.normal,Ot=!!fe.morphAttributes.color;let Xt=Ji;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=O.toneMapping);const Dt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,sn=Dt!==void 0?Dt.length:0,Oe=ae.get(re),Sn=I.state.lights;if(_t===!0&&(gt===!0||C!==oe)){const Lt=C===oe&&re.id===ne;Je.setState(re,C,Lt)}let ht=!1;re.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Sn.state.version||Oe.outputColorSpace!==we||ie.isBatchedMesh&&Oe.batching===!1||!ie.isBatchedMesh&&Oe.batching===!0||ie.isBatchedMesh&&Oe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Oe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Oe.instancing===!1||!ie.isInstancedMesh&&Oe.instancing===!0||ie.isSkinnedMesh&&Oe.skinning===!1||!ie.isSkinnedMesh&&Oe.skinning===!0||ie.isInstancedMesh&&Oe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Oe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Oe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Oe.instancingMorph===!1&&ie.morphTexture!==null||Oe.envMap!==Qe||re.fog===!0&&Oe.fog!==Ae||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Je.numPlanes||Oe.numIntersection!==Je.numIntersection)||Oe.vertexAlphas!==lt||Oe.vertexTangents!==ct||Oe.morphTargets!==Ke||Oe.morphNormals!==yt||Oe.morphColors!==Ot||Oe.toneMapping!==Xt||Oe.morphTargetsCount!==sn||!!Oe.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Oe.__version=re.version);let Gn=Oe.currentProgram;ht===!0&&(Gn=hs(re,q,ie),j&&re.isNodeMaterial&&j.onUpdateProgram(re,Gn,Oe));let Wn=!1,pt=!1,rr=!1;const Rt=Gn.getUniforms(),Bt=Oe.uniforms;if(w.useProgram(Gn.program)&&(Wn=!0,pt=!0,rr=!0),re.id!==ne&&(ne=re.id,pt=!0),Oe.needsLights){const Lt=Ju(I.state.lightProbeGridArray,ie);Oe.lightProbeGrid!==Lt&&(Oe.lightProbeGrid=Lt,pt=!0)}if(Wn||oe!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue($,"projectionMatrix",C.projectionMatrix),Rt.setValue($,"viewMatrix",C.matrixWorldInverse);const yi=Rt.map.cameraPosition;yi!==void 0&&yi.setValue($,Zt.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Rt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Rt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),oe!==C&&(oe=C,pt=!0,rr=!0)}if(Oe.needsLights&&(Sn.state.directionalShadowMap.length>0&&Rt.setValue($,"directionalShadowMap",Sn.state.directionalShadowMap,he),Sn.state.spotShadowMap.length>0&&Rt.setValue($,"spotShadowMap",Sn.state.spotShadowMap,he),Sn.state.pointShadowMap.length>0&&Rt.setValue($,"pointShadowMap",Sn.state.pointShadowMap,he)),ie.isSkinnedMesh){Rt.setOptional($,ie,"bindMatrix"),Rt.setOptional($,ie,"bindMatrixInverse");const Lt=ie.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Rt.setValue($,"boneTexture",Lt.boneTexture,he))}ie.isBatchedMesh&&(Rt.setOptional($,ie,"batchingTexture"),Rt.setValue($,"batchingTexture",ie._matricesTexture,he),Rt.setOptional($,ie,"batchingIdTexture"),Rt.setValue($,"batchingIdTexture",ie._indirectTexture,he),Rt.setOptional($,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Rt.setValue($,"batchingColorTexture",ie._colorsTexture,he));const _i=fe.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&X.update(ie,fe,Gn),(pt||Oe.receiveShadow!==ie.receiveShadow)&&(Oe.receiveShadow=ie.receiveShadow,Rt.setValue($,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&q.environment!==null&&(Bt.envMapIntensity.value=q.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=fF()),pt){if(Rt.setValue($,"toneMappingExposure",O.toneMappingExposure),Oe.needsLights&&ef(Bt,rr),Ae&&re.fog===!0&&qe.refreshFogUniforms(Bt,Ae),qe.refreshMaterialUniforms(Bt,re,me,xe,I.state.transmissionRenderTarget[C.id]),Oe.needsLights&&Oe.lightProbeGrid){const Lt=Oe.lightProbeGrid;Bt.probesSH.value=Lt.texture,Bt.probesMin.value.copy(Lt.boundingBox.min),Bt.probesMax.value.copy(Lt.boundingBox.max),Bt.probesResolution.value.copy(Lt.resolution)}vu.upload($,aa(Oe),Bt,he)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(vu.upload($,aa(Oe),Bt,he),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Rt.setValue($,"center",ie.center),Rt.setValue($,"modelViewMatrix",ie.modelViewMatrix),Rt.setValue($,"normalMatrix",ie.normalMatrix),Rt.setValue($,"modelMatrix",ie.matrixWorld),re.uniformsGroups!==void 0){const Lt=re.uniformsGroups;for(let yi=0,Bi=Lt.length;yi<Bi;yi++){const ps=Lt[yi];_e.update(ps,Gn),_e.bind(ps,Gn)}}return Gn}function ef(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function la(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,q,fe){const re=ae.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ae.get(C.texture).__webglTexture=q,ae.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:fe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const fe=ae.get(C);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,fe=0){W=C,ue=q,Z=fe;let re=null,ie=!1,Ae=!1;if(C){const we=ae.get(C);if(we.__useDefaultFramebuffer!==void 0){w.bindFramebuffer($.FRAMEBUFFER,we.__webglFramebuffer),k.copy(C.viewport),J.copy(C.scissor),Fe=C.scissorTest,w.viewport(k),w.scissor(J),w.setScissorTest(Fe),ne=-1;return}else if(we.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(we.__hasExternalTextures)he.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(we.__boundDepthTexture!==lt){if(lt!==null&&ae.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ae=!0);const Qe=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?re=Qe[q][fe]:re=Qe[q],ie=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?re=ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?re=Qe[fe]:re=Qe,k.copy(C.viewport),J.copy(C.scissor),Fe=C.scissorTest}else k.copy(tt).multiplyScalar(me).floor(),J.copy(Ht).multiplyScalar(me).floor(),Fe=ft;if(fe!==0&&(re=H),w.bindFramebuffer($.FRAMEBUFFER,re)&&w.drawBuffers(C,re),w.viewport(k),w.scissor(J),w.setScissorTest(Fe),ie){const we=ae.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,we.__webglTexture,fe)}else if(Ae){const we=q;for(let Ye=0;Ye<C.textures.length;Ye++){const Qe=ae.get(C.textures[Ye]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,fe,we)}}else if(C!==null&&fe!==0){const we=ae.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,we.__webglTexture,fe)}ne=-1},this.readRenderTargetPixels=function(C,q,fe,re,ie,Ae,Be,we=0){if(!(C&&C.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye){w.bindFramebuffer($.FRAMEBUFFER,Ye);try{const Qe=C.textures[we],lt=Qe.format,ct=Qe.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ct)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-re&&fe>=0&&fe<=C.height-ie&&$.readPixels(q,fe,re,ie,Pe.convert(lt),Pe.convert(ct),Ae)}finally{const Qe=W!==null?ae.get(W).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,q,fe,re,ie,Ae,Be,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye)if(q>=0&&q<=C.width-re&&fe>=0&&fe<=C.height-ie){w.bindFramebuffer($.FRAMEBUFFER,Ye);const Qe=C.textures[we],lt=Qe.format,ct=Qe.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ke),$.bufferData($.PIXEL_PACK_BUFFER,Ae.byteLength,$.STREAM_READ),$.readPixels(q,fe,re,ie,Pe.convert(lt),Pe.convert(ct),0);const yt=W!==null?ae.get(W).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,yt);const Ot=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await ID($,Ot,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ke),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ae),$.deleteBuffer(Ke),$.deleteSync(Ot),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,fe=0){const re=Math.pow(2,-fe),ie=Math.floor(C.image.width*re),Ae=Math.floor(C.image.height*re),Be=q!==null?q.x:0,we=q!==null?q.y:0;he.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,fe,0,0,Be,we,ie,Ae),w.unbindTexture()},this.copyTextureToTexture=function(C,q,fe=null,re=null,ie=0,Ae=0){let Be,we,Ye,Qe,lt,ct,Ke,yt,Ot;const Xt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(fe!==null)Be=fe.max.x-fe.min.x,we=fe.max.y-fe.min.y,Ye=fe.isBox3?fe.max.z-fe.min.z:1,Qe=fe.min.x,lt=fe.min.y,ct=fe.isBox3?fe.min.z:0;else{const Bt=Math.pow(2,-ie);Be=Math.floor(Xt.width*Bt),we=Math.floor(Xt.height*Bt),C.isDataArrayTexture?Ye=Xt.depth:C.isData3DTexture?Ye=Math.floor(Xt.depth*Bt):Ye=1,Qe=0,lt=0,ct=0}re!==null?(Ke=re.x,yt=re.y,Ot=re.z):(Ke=0,yt=0,Ot=0);const Dt=Pe.convert(q.format),sn=Pe.convert(q.type);let Oe;q.isData3DTexture?(he.setTexture3D(q,0),Oe=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Oe=$.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Oe=$.TEXTURE_2D),w.activeTexture($.TEXTURE0),w.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const Sn=w.getParameter($.UNPACK_ROW_LENGTH),ht=w.getParameter($.UNPACK_IMAGE_HEIGHT),Gn=w.getParameter($.UNPACK_SKIP_PIXELS),Wn=w.getParameter($.UNPACK_SKIP_ROWS),pt=w.getParameter($.UNPACK_SKIP_IMAGES);w.pixelStorei($.UNPACK_ROW_LENGTH,Xt.width),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,Xt.height),w.pixelStorei($.UNPACK_SKIP_PIXELS,Qe),w.pixelStorei($.UNPACK_SKIP_ROWS,lt),w.pixelStorei($.UNPACK_SKIP_IMAGES,ct);const rr=C.isDataArrayTexture||C.isData3DTexture,Rt=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Bt=ae.get(C),_i=ae.get(q),Lt=ae.get(Bt.__renderTarget),yi=ae.get(_i.__renderTarget);w.bindFramebuffer($.READ_FRAMEBUFFER,Lt.__webglFramebuffer),w.bindFramebuffer($.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Bi=0;Bi<Ye;Bi++)rr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ae.get(C).__webglTexture,ie,ct+Bi),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ae.get(q).__webglTexture,Ae,Ot+Bi)),$.blitFramebuffer(Qe,lt,Be,we,Ke,yt,Be,we,$.DEPTH_BUFFER_BIT,$.NEAREST);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ie!==0||C.isRenderTargetTexture||ae.has(C)){const Bt=ae.get(C),_i=ae.get(q);w.bindFramebuffer($.READ_FRAMEBUFFER,ee),w.bindFramebuffer($.DRAW_FRAMEBUFFER,K);for(let Lt=0;Lt<Ye;Lt++)rr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Bt.__webglTexture,ie,ct+Lt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Bt.__webglTexture,ie),Rt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,_i.__webglTexture,Ae,Ot+Lt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,_i.__webglTexture,Ae),ie!==0?$.blitFramebuffer(Qe,lt,Be,we,Ke,yt,Be,we,$.COLOR_BUFFER_BIT,$.NEAREST):Rt?$.copyTexSubImage3D(Oe,Ae,Ke,yt,Ot+Lt,Qe,lt,Be,we):$.copyTexSubImage2D(Oe,Ae,Ke,yt,Qe,lt,Be,we);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(Oe,Ae,Ke,yt,Ot,Be,we,Ye,Dt,sn,Xt.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(Oe,Ae,Ke,yt,Ot,Be,we,Ye,Dt,Xt.data):$.texSubImage3D(Oe,Ae,Ke,yt,Ot,Be,we,Ye,Dt,sn,Xt):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ae,Ke,yt,Be,we,Dt,sn,Xt.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ae,Ke,yt,Xt.width,Xt.height,Dt,Xt.data):$.texSubImage2D($.TEXTURE_2D,Ae,Ke,yt,Be,we,Dt,sn,Xt);w.pixelStorei($.UNPACK_ROW_LENGTH,Sn),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,ht),w.pixelStorei($.UNPACK_SKIP_PIXELS,Gn),w.pixelStorei($.UNPACK_SKIP_ROWS,Wn),w.pixelStorei($.UNPACK_SKIP_IMAGES,pt),Ae===0&&q.generateMipmaps&&$.generateMipmap(Oe),w.unbindTexture()},this.initRenderTarget=function(C){ae.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){ue=0,Z=0,W=null,w.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const hF=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,ay=({dark:n=!1,themeIdx:e=0,scrollVelocity:t=0,scrollProgress:i=0})=>{const o=z.useRef(null),a=z.useRef({scrollVelocity:t,scrollProgress:i,dark:n,themeIdx:e});return z.useEffect(()=>{a.current={scrollVelocity:t,scrollProgress:i,dark:n,themeIdx:e}},[t,i,n,e]),z.useEffect(()=>{const c=o.current;if(!c)return;const u=new dF({alpha:!0,antialias:!1});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(c.clientWidth||window.innerWidth,c.clientHeight||300),u.setClearColor(0,0),c.appendChild(u.domElement);const d=new KD,h=new Jm(-1,1,1,-1,.1,10);h.position.z=1;const p=50,v=30,m=p*v,_=new Float32Array(m*3),E=new Float32Array(m*3);for(let N=0;N<v;N++)for(let O=0;O<p;O++){const V=(N*p+O)*3,j=O/(p-1)*2-1,H=N/(v-1)*2-1;_[V]=j,_[V+1]=H,_[V+2]=0,E[V]=j,E[V+1]=H,E[V+2]=0}const M=new ki;M.setAttribute("position",new Ui(_,3));const y=()=>a.current.dark?16777215:0,S=new JE({color:y(),size:2,sizeAttenuation:!1,transparent:!0,opacity:n?.07:.048}),R=new o2(M,S);d.add(R);const L={x:-9999,y:-9999,t:0},A=N=>{const O=c.getBoundingClientRect();L.x=(N.clientX-O.left)/O.width*2-1,L.y=-((N.clientY-O.top)/O.height)*2+1,L.t=performance.now()};window.addEventListener("mousemove",A,{passive:!0});const P=new ResizeObserver(()=>{c&&u.setSize(c.clientWidth,c.clientHeight)});if(P.observe(c),hF)return u.render(d,h),()=>{u.dispose(),M.dispose(),S.dispose(),c.removeChild(u.domElement),P.disconnect(),window.removeEventListener("mousemove",A)};let I=0;const F=performance.now(),T=()=>{I=requestAnimationFrame(T);const N=performance.now(),O=(N-F)/1e3,{scrollVelocity:V,scrollProgress:j}=a.current,H=Math.min(V*.004,.06),ee=j>.85?1-(j-.85)/.15:1,ue=(.018*ee+H)*ee,Z=(N-L.t)/1e3,W=M.attributes.position;for(let ne=0;ne<v;ne++)for(let oe=0;oe<p;oe++){const k=(ne*p+oe)*3,J=E[k],Fe=E[k+1],Xe=Math.sin(oe*.4+ne*.4+O*.38)*ue,Ve=J-L.x,ce=Fe-L.y,xe=Math.sqrt(Ve*Ve+ce*ce),me=xe<.3&&Z<2?(1-xe/.3)*(1-Z/2)*.04:0;W.array[k+1]=Fe+Xe+me}W.needsUpdate=!0,S.size=Math.max(1.5,2+V*.03),S.color.set(y()),u.render(d,h)};return T(),()=>{cancelAnimationFrame(I),u.dispose(),M.dispose(),S.dispose(),c.contains(u.domElement)&&c.removeChild(u.domElement),P.disconnect(),window.removeEventListener("mousemove",A)}},[n]),D.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full pointer-events-none","aria-hidden":"true"})},Go=[{bg:"#FFFFFF",fg:"#212121",accent:"#0066FF",name:"Professional Blue"},{bg:"#F5F5F5",fg:"#1A1A1A",accent:"#FF3B30",name:"Minimal Crimson"},{bg:"#FAFAFA",fg:"#2C2C2C",accent:"#00A896",name:"Clean Teal"},{bg:"#EAEAEA",fg:"#121212",accent:"#D90429",name:"Nordic Red"},{bg:"#F0F0F0",fg:"#333333",accent:"#7209B7",name:"Deep Indigo"},{bg:"#FFFFFF",fg:"#0A0A0A",accent:"#FFB800",name:"Monochrome Amber"},{bg:"#121212",fg:"#E0E0E0",accent:"#BB86FC",name:"Neon Lavender"},{bg:"#1E1E2E",fg:"#CDD6F4",accent:"#F38BA8",name:"Catppuccin Rose"},{bg:"#0F0F1B",fg:"#F0F0F0",accent:"#39FF14",name:"Matrix Lime"},{bg:"#1A1A2E",fg:"#EAEAEA",accent:"#E94560",name:"Midnight Rose"},{bg:"#0D1117",fg:"#C9D1D9",accent:"#58A6FF",name:"Github Marine"},{bg:"#181818",fg:"#F5F5F5",accent:"#FFD60A",name:"Contrast Yellow"},{bg:"#FFF8F0",fg:"#432818",accent:"#BB4430",name:"Sienna Warmth"},{bg:"#F4F1DE",fg:"#3D405B",accent:"#81B29A",name:"Desert Sage"},{bg:"#FAF3E0",fg:"#4A4E69",accent:"#C9ADA7",name:"Tuscan Sunset"},{bg:"#F5E6CA",fg:"#2C3639",accent:"#A27B5C",name:"Warm Walnut"},{bg:"#FCF6E3",fg:"#3A3A3A",accent:"#D68C45",name:"Solarized Light"},{bg:"#EDE0D4",fg:"#463F3A",accent:"#BC6C25",name:"Almond Ochre"},{bg:"#F7F9FB",fg:"#1B1F3B",accent:"#4361EE",name:"Ice Blue"},{bg:"#EEF1F5",fg:"#2B2D42",accent:"#8D99AE",name:"Corporate Steel"},{bg:"#F0F4F8",fg:"#03045E",accent:"#0077B6",name:"Oceanic Navy"},{bg:"#E8EEF1",fg:"#14213D",accent:"#FCA311",name:"Slate Gold"},{bg:"#F5F7FA",fg:"#1E293B",accent:"#3B82F6",name:"Clean Office"},{bg:"#FFFFFF",fg:"#1A1A1A",accent:"#FF5A5F",name:"Radical Red"},{bg:"#F9F9F9",fg:"#232323",accent:"#6C5CE7",name:"Modern Purple"},{bg:"#FFFFFF",fg:"#111111",accent:"#00D9FF",name:"Electric Cyan"},{bg:"#F2F2F2",fg:"#212529",accent:"#FF006E",name:"Neon Magenta"},{bg:"#FDFDFD",fg:"#1D1D1D",accent:"#8338EC",name:"Royal Purple"},{bg:"#FDF0F4",fg:"#4A4A4A",accent:"#F8A5C2",name:"Blush Pink"},{bg:"#F0F7F4",fg:"#2F3E46",accent:"#84A98C",name:"Sage Mint"},{bg:"#FBF3F9",fg:"#3A3335",accent:"#B8A1CC",name:"Lilac Mist"},{bg:"#EFF6F5",fg:"#264653",accent:"#2A9D8F",name:"Soft Teal"},{bg:"#0D1B2A",fg:"#E0E1DD",accent:"#00F5D4",name:"Cyber Teal"},{bg:"#0A0E27",fg:"#E6E6FA",accent:"#FF3864",name:"Retro Cyberpunk"},{bg:"#0F0F0F",fg:"#EDEDED",accent:"#00FFAB",name:"Green Terminal"}],pF=KP,kn=n=>n.trim().split(`
`).flatMap(e=>e.trim().split(/\s+/).map(t=>t==="#"?1:0)),Ou={"001":[kn(`
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
      # # . . . # # .
      . . . . . . . .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
    `),kn(`
      . . . # . . . .
      . . . # . . . .
      . . . # . . . .
      # # . # . # # .
      . . . # . . . .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
    `),kn(`
      . . . . . . . .
      . . . # . . . .
      . . . # . . . .
      # # # # # # # .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
      . . . . . . . .
    `)],"002":[kn(`
      . # # # # # . .
      . # . . . # . .
      . # # # # # . .
      . # . . . . . .
      . # . . . . . .
      . # # # . . . .
      . . . . . . . .
      . . . . . . . .
    `),kn(`
      . # # # # # . .
      . # . . . # . .
      . # # # # . . .
      . # . . . . . .
      . # . . . . . .
      . # # # # . . .
      . . . . . . . .
      . . . . . . . .
    `)],"003":[kn(`
      . . # # . . . .
      . # # . . . . .
      # # . . . . . .
      # # . . . . . .
      . # # # . . . .
      . . . # # . . .
      . . . . # # . .
      . . . . . # # .
    `),kn(`
      . . # # . . . .
      . # # . . . . .
      # # . . . . . .
      # # . # . . . .
      . # # # . . . .
      . . . # # . . .
      . . . . # # . .
      . . . . . # . .
    `)],"005":[kn(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # . . . # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `),kn(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # # . . # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `),kn(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # . . # # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `)],"007":[kn(`
      . . # # # . . .
      . # . . . # . .
      # . . # . . # .
      # . . # . . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `),kn(`
      . . # # # . . .
      . # . . . # . .
      # . . . # . # .
      # . . . # . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `),kn(`
      . . # # # . . .
      . # . . . # . .
      # . # . . . # .
      # . # . . . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `)],"009":[kn(`
      # # # # # # # .
      # # . . . # # .
      # . # . # . # .
      # . . # . . # .
      # . . . . . # .
      # # # # # # # .
      . . . . . . . .
      . . . . . . . .
    `),kn(`
      # # # # # # # .
      # # . . . # # .
      # . # . # . # .
      # . . # . . # .
      # . . # . . # .
      # # # # # # # .
      . . . . . . . .
      . . . . . . . .
    `)]},mF=()=>D.jsx("svg",{className:"absolute w-0 h-0 overflow-hidden","aria-hidden":"true",children:D.jsx("defs",{children:D.jsxs("filter",{id:"dither",colorInterpolationFilters:"sRGB",children:[D.jsx("feColorMatrix",{type:"saturate",values:"0",result:"gray"}),D.jsxs("feComponentTransfer",{in:"gray",children:[D.jsx("feFuncR",{type:"discrete",tableValues:"0 0.33 0.66 1"}),D.jsx("feFuncG",{type:"discrete",tableValues:"0 0.33 0.66 1"}),D.jsx("feFuncB",{type:"discrete",tableValues:"0 0.33 0.66 1"})]})]})})}),ko=({sectionId:n="001",externalFrame:e})=>{const t=Ou[n]??Ou["001"],[i,o]=z.useState(0);z.useEffect(()=>{if(e!==void 0)return;const c=setInterval(()=>o(u=>(u+1)%t.length),900);return()=>clearInterval(c)},[t.length,e]);const a=e!==void 0?Math.min(e,t.length-1):i;return D.jsxs("div",{className:"flex flex-col items-center gap-1 opacity-40 hover:opacity-75 transition-opacity duration-500 cursor-default shrink-0","aria-hidden":"true",children:[D.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 3px)",gap:"1px"},children:t[a].map((c,u)=>D.jsx("div",{style:{width:3,height:3,backgroundColor:c?"currentColor":"transparent"}},u))}),D.jsxs("span",{className:"font-pixel text-[8px] tracking-widest text-muted-foreground leading-none",children:["FM/",n]})]})},ln=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,dn=({children:n,delay:e=0,className:t=""})=>{const i=z.useRef(null),[o,a]=z.useState(ln);return z.useEffect(()=>{if(ln)return;const c=i.current;if(!c)return;const u=new IntersectionObserver(([d])=>{d.isIntersecting&&(a(!0),u.disconnect())},{threshold:.08,rootMargin:"0px 0px -24px 0px"});return u.observe(c),()=>u.disconnect()},[]),D.jsx("div",{ref:i,style:{opacity:o?1:0,transform:o?"none":"translateY(12px)",transition:`opacity 500ms ease-out ${e}ms, transform 500ms ease-out ${e}ms`},className:t,children:n})},am={"FIELD-NOTE/001":{label:"FIELD NOTE / 001",n:1},"RECORDS/002":{label:"RECORDS / 002",n:2},BUILT:{label:"BUILT / 003",n:3},LAB:{label:"LAB / 005",n:5},"FIELD-HISTORY":{label:"FIELD HISTORY / 007",n:7},CONTACT:{label:"CONTACT / 009",n:9}},gF=Object.keys(am),vF=24,xF=({active:n,themeIdx:e,setThemeIdx:t})=>{const i=am[n]??am["FIELD-NOTE/001"];return D.jsxs("aside",{className:"fixed bottom-4 right-4 z-50 hidden md:flex items-end gap-2 pointer-events-none select-none",children:[D.jsx("div",{className:"relative mb-1 pointer-events-none opacity-85",children:D.jsxs("svg",{width:"150",height:"55",viewBox:"0 0 150 55",fill:"none",className:"text-accent",children:[D.jsxs("g",{transform:"rotate(-6 45 20)",children:[D.jsx("text",{x:"5",y:"16",fill:"currentColor",className:"font-doodle text-[12px] font-bold tracking-wide",children:"click this to"}),D.jsx("text",{x:"5",y:"28",fill:"currentColor",className:"font-doodle text-[12px] font-bold tracking-wide",children:"change color!"})]}),D.jsx("path",{d:"M 75,10 C 85,12 90,8 95,12 C 100,16 95,25 90,26 C 85,27 82,18 90,15 C 105,12 118,22 135,32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),D.jsx("path",{d:"M 135,32 L 126,27 M 135,32 L 130,41 M 134,31 L 128,34",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),D.jsxs("div",{className:"pointer-events-auto bg-background/90 backdrop-blur border border-border px-3 py-2.5 flex flex-col items-end gap-0.5 font-pixel text-[9px] tracking-widest uppercase shadow-md rounded-md",children:[D.jsx("span",{className:"text-muted-foreground/60",children:"LEDGER"}),D.jsx(cp,{mode:"wait",children:D.jsx(dp.span,{initial:{y:-5,opacity:0},animate:{y:0,opacity:.8},exit:{y:5,opacity:0},transition:{duration:.2,ease:[.25,0,0,1]},className:"text-foreground font-bold",children:i.label},i.label)}),D.jsxs("span",{className:"text-muted-foreground",children:[D.jsx(cp,{mode:"wait",children:D.jsx(dp.span,{initial:{y:-5,opacity:0},animate:{y:0,opacity:1},exit:{y:5,opacity:0},transition:{duration:.2,ease:[.25,0,0,1]},className:"inline-block tabular-nums",children:i.n},i.n)}),` OF ${vF} ENTRIES`]}),D.jsx("span",{className:"text-muted-foreground/50 text-[8px] mb-2",children:"LAST UPDATED — AUG 2026"}),D.jsxs("button",{onClick:()=>t(o=>(o+1)%Go.length),className:"w-full text-center border border-dashed border-accent hover:bg-accent hover:text-primary-foreground py-1.5 px-3 text-[9px] font-pixel text-accent transition-all duration-200 cursor-pointer rounded-sm bg-accent/5",title:"Cycle display theme",children:["DISPLAY — ",Go[e].name.toUpperCase()]})]})]})},ly=({id:n,label:e,onClick:t})=>D.jsxs("button",{onClick:()=>t(n),className:"inline-flex items-center gap-1 border-b border-dashed border-muted-foreground/50 hover:border-accent hover:text-accent font-pixel text-[10px] transition-colors",children:[e," ",D.jsx(xu,{className:"w-2.5 h-2.5"})]}),tu=({from:n,to:e})=>D.jsxs("div",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground/50 border-t border-border pt-3 flex items-center gap-2 uppercase",children:[D.jsx("span",{children:n}),D.jsx(xu,{className:"w-2.5 h-2.5 opacity-40"}),D.jsx("span",{className:"text-foreground/60",children:e})]}),Bh=ZP;function _F(){var j;const[n,e]=z.useState(null),[t,i]=z.useState("FIELD-NOTE/001"),[o,a]=z.useState(0),[c,u]=z.useState(0),[d,h]=z.useState({x:0,y:0}),[p,v]=z.useState(!1),m=z.useRef(null),{scrollY:_,totalProgress:E,velocity:M,sectionProgress:y}=JP(),S=z.useCallback(H=>{var ee;e(H),(ee=document.getElementById(H))==null||ee.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>e(null),2400)},[]);z.useEffect(()=>{const H=[];return gF.forEach(ee=>{const K=document.getElementById(ee);if(!K)return;const ue=new IntersectionObserver(([Z])=>{Z.isIntersecting&&i(ee)},{threshold:.2});ue.observe(K),H.push(ue)}),()=>H.forEach(ee=>ee.disconnect())},[]);const R=z.useCallback(H=>{if(ln||!m.current)return;const ee=m.current.getBoundingClientRect();h({x:(H.clientX-ee.left-ee.width/2)/ee.width*6,y:(H.clientY-ee.top-ee.height/2)/ee.height*6})},[]),L=H=>{u(H),ln||(v(!0),setTimeout(()=>v(!1),380))},A=Bh&&Bh[c]||{id:"",name:"",type:"",year:"",status:"",img:"",github:"",live:"",challenge:"",solution:"",stack:[],origins:[]},P=Go[o],I=((j=m.current)==null?void 0:j.offsetHeight)??600,F=Math.min(1,_/(I*.6)),T=H=>{const ee=Ou[H]??Ou["001"];return Math.floor(E*(ee.length*3))%ee.length},N=y("FIELD-HISTORY"),O=Math.min(1,Math.max(0,(E-.82)/.18)),V=y("RECORDS/002");return D.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background",children:[D.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-doodle {
          font-family: 'Caveat', cursive;
        }
        :root {
          --background: ${P.bg} !important;
          --foreground: ${P.fg} !important;
          --accent: ${P.accent} !important;
          --primary: ${P.fg} !important;
          --primary-foreground: ${P.bg} !important;
          --border: ${P.fg}24 !important;
          --muted-foreground: ${P.fg}80 !important;
          --muted: ${P.fg}0a !important;
        }
        .dark {
          --background: ${P.fg} !important;
          --foreground: ${P.bg} !important;
          --accent: ${P.accent} !important;
          --primary: ${P.bg} !important;
          --primary-foreground: ${P.fg} !important;
          --border: ${P.bg}24 !important;
          --muted-foreground: ${P.bg}80 !important;
          --muted: ${P.bg}0a !important;
        }
      `}),D.jsx(mF,{}),D.jsx(xF,{active:t,themeIdx:o,setThemeIdx:a}),D.jsxs("main",{className:"flex flex-col w-full overflow-x-hidden",children:[D.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 pt-16 md:pt-20",children:D.jsx(dn,{children:D.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4",children:[D.jsxs("div",{className:"flex items-center gap-4",children:[D.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-6 w-auto"}),D.jsx("span",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground uppercase hidden sm:inline-block",children:"[ QUICK VIEW ] — ROLE · STACK · BEST PROJECTS · RÉSUMÉ · CONTACT"})]}),D.jsxs("a",{href:"/resume.pdf",download:"Resume.pdf",className:"flex items-center gap-1.5 font-pixel text-[9px] text-muted-foreground hover:text-accent transition-colors uppercase whitespace-nowrap",children:[D.jsx(aw,{className:"w-3 h-3"})," RÉSUMÉ PDF"]})]})})}),D.jsx("section",{className:"w-full bg-background text-foreground py-8 md:py-16",children:D.jsxs("div",{ref:m,id:"FIELD-NOTE/001",className:`max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-start transition-all duration-500 ${n==="FIELD-NOTE/001"?"outline outline-2 outline-accent outline-offset-8":""}`,onMouseMove:R,onMouseLeave:()=>h({x:0,y:0}),children:[D.jsxs("div",{className:"flex flex-col gap-8",children:[D.jsx(dn,{children:D.jsx(ko,{sectionId:"001",externalFrame:T("001")})}),D.jsxs("div",{className:"flex flex-col gap-4",children:[D.jsx(dn,{delay:60,children:D.jsx("div",{className:"inline-flex items-center bg-accent text-primary-foreground font-pixel text-[9px] tracking-widest px-2 py-0.5 uppercase rounded-sm font-bold shadow-sm",children:"[ FIELD NOTE / 001 ]"})}),D.jsx(dn,{delay:120,children:D.jsx("h1",{className:"text-8xl md:text-[10rem] font-black tracking-tighter leading-none -ml-1 text-foreground",children:"TAN."})}),D.jsx(dn,{delay:180,children:D.jsx("h2",{className:"text-xl md:text-2xl text-foreground font-bold tracking-tight uppercase mt-2",children:"Software Engineer & Game Developer"})}),D.jsx(dn,{delay:240,children:D.jsx("p",{className:"text-base md:text-lg leading-relaxed text-foreground/80 max-w-md mt-2 font-medium",children:"I build high-performance digital products, scalable systems, and data-driven experiments to solve complex real-world problems."})})]}),D.jsx(dn,{delay:300,children:D.jsx("div",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground pt-5 border-t border-border",children:"PHILIPPINES — 2026 — SOFTWARE / WEB / SYSTEMS"})})]}),D.jsx(dn,{delay:100,children:D.jsxs("div",{className:"relative group cursor-crosshair",children:[D.jsxs("div",{style:{transform:`translate(${d.x}px, ${d.y}px)`,transition:ln?"none":"transform 0.12s ease-out"},className:"relative",children:[D.jsx("div",{className:"absolute translate-x-3 translate-y-3 inset-0 bg-muted -z-10"}),D.jsx("img",{src:"/profile.png",alt:"SUBJECT: TAN — field photograph",style:{filter:ln?void 0:F>.15?`url(#dither) contrast(${1+F*.25}) brightness(${1-F*.12})`:void 0,transition:"filter 0.3s ease-out"},className:"w-full grayscale contrast-110 object-cover aspect-[4/5] group-hover:[filter:url(#dither)] transition-all duration-500"})]}),D.jsx("div",{className:"absolute inset-0 border border-foreground/15 pointer-events-none",style:{transform:`translate(${-d.x*.45}px, ${-d.y*.45}px)`,transition:ln?"none":"transform 0.18s ease-out"}}),D.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex justify-between items-end",children:[D.jsxs("div",{className:"font-pixel text-[8px] tracking-widest flex flex-col gap-0.5 text-foreground bg-background/85 px-2 py-1",children:[D.jsx("span",{className:"opacity-55",children:"PORTRAIT / 01"}),D.jsx("span",{className:"opacity-55",children:"SUBJECT: TAN"}),D.jsx("span",{className:"opacity-40",children:"FIELD: SOFTWARE DEV"})]}),D.jsxs("button",{className:"flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 font-pixel text-[8px] uppercase hover:bg-accent transition-colors",children:[D.jsx(pw,{className:"w-2.5 h-2.5"})," PLAY FIELD NOTE"]})]})]})})]})}),D.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 pb-10",children:D.jsx(tu,{from:"FIELD NOTE / 001",to:"RECORDS / 002"})}),D.jsx("section",{className:"w-full dark bg-background text-foreground py-16 md:py-24",children:D.jsxs("div",{id:"RECORDS/002",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10",children:[D.jsxs("div",{className:"flex items-center gap-4",children:[D.jsx(ko,{sectionId:"002",externalFrame:T("002")}),D.jsx(dn,{children:D.jsx("h2",{className:"text-5xl md:text-6xl font-pixel tracking-widest uppercase",children:"RECORDS"})})]}),D.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-8",children:QP.map((H,ee)=>{const ue=Math.min(1,Math.max(0,(V-ee*.15)/(1-ee*.15))),Z=ln?0:(1-ue)*4;return D.jsx(dn,{delay:ee*70,children:D.jsxs(HP,{children:[D.jsx(GP,{asChild:!0,children:D.jsxs("div",{className:"flex flex-col gap-3 group cursor-pointer",style:{transform:`perspective(800px) rotateX(${Z}deg)`,transition:ln?"none":"transform 0.1s ease-out",transformOrigin:"top center"},children:[D.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground",children:["[",H.n,"]"]}),D.jsx("div",{className:"relative aspect-video border border-border bg-muted overflow-hidden",children:D.jsx("img",{src:H.img||`https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${H.sig}`,alt:H.name,className:"w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:[filter:url(#dither)] transition-all duration-500"})}),D.jsxs("div",{children:[D.jsx("div",{className:"font-medium text-sm leading-snug group-hover:text-accent transition-colors",children:H.name}),D.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground mt-0.5",children:["ISSUED BY — ",H.issuer]}),D.jsxs("div",{className:"flex items-center gap-2 font-pixel text-[9px] mt-1",children:[D.jsx("span",{children:H.year}),D.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold",children:"VERIFIED"})]})]})]})}),D.jsxs(WP,{children:[D.jsx(XP,{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-50"}),D.jsxs(jP,{className:"fixed left-[50%] top-[50%] z-50 grid w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-border bg-background p-6 shadow-xl",children:[D.jsx("div",{className:"relative aspect-video border border-border bg-muted overflow-hidden",children:D.jsx("img",{src:H.img||`https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${H.sig}`,alt:H.name,className:"w-full h-full object-cover grayscale"})}),D.jsxs("div",{className:"flex flex-col gap-2",children:[D.jsx(YP,{className:"text-lg font-medium tracking-tight",children:H.name}),D.jsx($P,{className:"text-sm text-foreground/75 leading-relaxed",children:H.desc}),D.jsxs("div",{className:"flex items-center gap-4 mt-2 font-pixel text-[9px] text-muted-foreground",children:[D.jsxs("span",{children:["ISSUER: ",H.issuer]}),D.jsxs("span",{children:["YEAR: ",H.year]}),D.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold",children:"STATUS: VERIFIED"})]})]}),D.jsxs(qP,{className:"absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity",children:[D.jsx(gw,{className:"h-4 w-4"}),D.jsx("span",{className:"sr-only",children:"Close"})]})]})]})]})},H.n)})})]})}),D.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:D.jsx(tu,{from:"ARCHIVE ENTRY / 003",to:"BUILT"})}),D.jsx("section",{className:"w-full bg-background text-foreground py-16 md:py-24",children:D.jsxs("div",{id:"BUILT",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10 relative",children:[D.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:D.jsx(ay,{themeIdx:o,scrollVelocity:M,scrollProgress:E})}),D.jsxs("div",{className:"relative flex flex-row-reverse items-start gap-4 text-right border-b border-border pb-8 mb-8",children:[D.jsx(ko,{sectionId:"003",externalFrame:T("003")}),D.jsxs("div",{className:"flex-1",children:[D.jsx(dn,{children:D.jsx("h2",{className:"text-5xl md:text-6xl font-medium tracking-tight",children:"BUILT / SELECTED WORK"})}),D.jsx(dn,{delay:60,children:D.jsx("p",{className:"text-muted-foreground text-sm mt-1",children:'"Things that started as problems, ideas, or experiments and became software."'})})]})]}),D.jsxs("div",{className:"relative grid md:grid-cols-[160px_1fr] gap-8 border-t border-border pt-8",children:[D.jsxs("div",{className:"flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0",children:[D.jsx("div",{className:"font-pixel text-[8px] text-muted-foreground mb-2 hidden md:block tracking-widest",children:"INDEX"}),Bh.map((H,ee)=>D.jsx(dn,{delay:ee*50,children:D.jsxs("button",{onClick:()=>L(ee),className:`font-pixel text-[11px] whitespace-nowrap text-left py-0.5 w-full flex items-center gap-2 hover:text-foreground transition-colors ${ee===c?"text-foreground":"text-muted-foreground"}`,children:[String(ee+1).padStart(2,"0")," ",H.name,ee===c&&D.jsx("span",{className:"text-accent text-[8px]",children:"← selected"})]})},H.id))]}),D.jsx(cp,{mode:"wait",children:D.jsxs(dp.div,{id:A.id,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.28,ease:[.25,0,0,1]},className:`flex flex-col gap-7 transition-all duration-300 ${n===A.id?"outline outline-2 outline-accent outline-offset-4":""}`,children:[A.github?D.jsxs("a",{href:A.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4 hover:text-foreground transition-colors",children:[D.jsx(Fd,{className:"w-3.5 h-3.5"}),D.jsx("span",{children:A.github.replace(/^https?:\/\/(www\.)?github\.com\//,"").replace(/\/$/,"")}),D.jsx("span",{className:"border border-border rounded-full px-2 py-0.5 text-[8px]",children:"Public"})]}):D.jsxs("div",{className:"flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4",children:[D.jsx(Fd,{className:"w-3.5 h-3.5"}),D.jsxs("span",{children:["mrtnztan / ",A.name.toLowerCase().replace(/\s+/g,"-")]}),D.jsx("span",{className:"border border-border rounded-full px-2 py-0.5 text-[8px]",children:"Public"})]}),D.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[D.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-6",children:[D.jsxs("div",{className:"border border-border rounded-md overflow-hidden bg-background",children:[D.jsxs("div",{className:"bg-muted/30 border-b border-border px-4 py-2.5 flex items-center gap-2 font-pixel text-[9px] text-muted-foreground",children:[D.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500/80"}),D.jsx("span",{className:"w-2 h-2 rounded-full bg-yellow-500/80"}),D.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500/80"}),D.jsxs("span",{className:"ml-2 font-mono text-[10px] lowercase",children:[A.name.replace(/\s+/g,"-"),".png"]})]}),D.jsx("div",{className:"relative aspect-video bg-muted overflow-hidden group cursor-crosshair",children:D.jsx("img",{src:A.img,alt:A.name,className:`w-full h-full object-cover grayscale opacity-90 transition-all duration-500 ${p?"[filter:url(#dither)]":"group-hover:[filter:url(#dither)]"}`})})]}),D.jsxs("div",{className:"border border-border rounded-md bg-background",children:[D.jsx("div",{className:"bg-muted/30 border-b border-border px-4 py-2.5",children:D.jsx("span",{className:"font-pixel text-[9px] font-medium uppercase tracking-widest text-foreground",children:"README.md"})}),D.jsxs("div",{className:"p-6 md:p-8",children:[D.jsx("h1",{className:"text-2xl font-medium mb-4 pb-2 border-b border-border",children:A.name}),D.jsxs("p",{className:"text-muted-foreground text-sm leading-relaxed mb-6",children:[A.type," built in ",A.year,"."]}),A.challenge&&D.jsxs("div",{className:"space-y-6",children:[D.jsxs("div",{children:[D.jsx("h2",{className:"text-sm font-medium mb-2",children:"Challenge"}),D.jsx("p",{className:"text-sm text-foreground/80 leading-relaxed",children:A.challenge})]}),A.solution&&D.jsxs("div",{children:[D.jsx("h2",{className:"text-sm font-medium mb-2",children:"Solution"}),D.jsx("p",{className:"text-sm text-foreground/80 leading-relaxed",children:A.solution})]})]})]})]})]}),D.jsxs("div",{className:"w-full lg:w-[250px] shrink-0 flex flex-col gap-6",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"font-medium text-sm mb-3",children:"About"}),D.jsxs("p",{className:"text-sm text-muted-foreground mb-4",children:[A.type," — ",A.year]}),D.jsx("div",{className:"flex items-center gap-2 font-pixel text-[9px] mb-6",children:D.jsxs("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold shadow-sm",children:["STATUS: ",A.status]})}),D.jsxs("div",{className:"flex flex-col gap-2",children:[A.github&&D.jsxs("a",{href:A.github,target:"_blank",rel:"noopener noreferrer",className:"font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md",children:[D.jsx("span",{children:"[ SOURCE ]"})," ",D.jsx(xu,{className:"w-3 h-3"})]}),A.live&&D.jsxs("a",{href:A.live,target:"_blank",rel:"noopener noreferrer",className:"font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md",children:[D.jsx("span",{children:"[ LIVE ]"})," ",D.jsx(xu,{className:"w-3 h-3"})]})]})]}),A.stack&&A.stack.length>0&&D.jsxs("div",{className:"border-t border-border pt-6",children:[D.jsx("h3",{className:"font-medium text-sm mb-4",children:"Role & Stack"}),D.jsx("ul",{className:"space-y-3 text-sm text-foreground/80",children:A.stack.map((H,ee)=>D.jsxs("li",{className:"flex items-center gap-2",children:[D.jsx("span",{className:`w-2 h-2 rounded-full ${H.color||"bg-accent"}`}),H.name]},ee))})]}),A.origins&&A.origins.length>0&&D.jsxs("div",{className:"border-t border-border pt-6",children:[D.jsx("h3",{className:"font-medium text-sm mb-4",children:"Origins"}),D.jsx("div",{className:"flex flex-col gap-2 items-start",children:A.origins.map(H=>D.jsx(ly,{id:H.id,label:H.label,onClick:S},H.id))})]})]})]})]},c)})]})]})}),D.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:D.jsx(tu,{from:"RECORD / 004",to:"LAB"})}),D.jsx("section",{className:"w-full dark bg-background text-foreground py-16 md:py-24",children:D.jsxs("div",{id:"LAB",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10",children:[D.jsxs("div",{className:"flex items-start gap-4",children:[D.jsx(ko,{sectionId:"005",externalFrame:T("005")}),D.jsxs("div",{children:[D.jsx(dn,{children:D.jsx("h2",{className:"text-4xl md:text-5xl font-mono font-medium tracking-tight uppercase",children:"LAB / EXPERIMENTS"})}),D.jsx(dn,{delay:50,children:D.jsx("p",{className:"font-mono text-sm opacity-70 mt-1",children:'"Not everything here is finished."'})})]})]}),D.jsx("div",{className:"grid gap-4",children:[{id:"LAB/001",num:"001",name:"ANTI-SMOKE BELCHING DETECTION",cat:"COMPUTER VISION / IOT",status:"RESEARCHING",accent:!0,note:"Can low-cost edge AI flag high-emission vehicles on local roads in real-time?",label:"Hypothesis"},{id:"LAB/003",num:"003",name:"LOCAL FIRST SCHEDULING",cat:"CRDTs / OFFLINE ARCHITECTURE",status:"PROTOTYPING",accent:!1,note:"Exploring CRDT implementations for calendar events. Led directly to the architecture in BUILT / 001.",label:"Concept"}].map((H,ee)=>D.jsx(dn,{delay:ee*80,children:D.jsxs("div",{id:H.id,className:`border border-border p-6 hover:bg-muted/20 transition-all duration-300 group ${n===H.id?"border-accent bg-muted/30":""}`,children:[D.jsxs("div",{className:"flex justify-between items-start mb-4",children:[D.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground",children:["LAB / ",H.num]}),D.jsxs("div",{className:`font-pixel text-[8px] px-2 py-0.5 border border-dashed ${H.accent?"border-accent bg-accent/5 text-accent font-bold":"text-foreground/70 border-border"}`,children:["STATUS: ",H.status]})]}),D.jsx("h3",{className:"text-lg font-medium mb-1 group-hover:underline decoration-1 underline-offset-4",children:H.name}),D.jsx("p",{className:"font-pixel text-[9px] text-muted-foreground mb-4",children:H.cat}),D.jsxs("div",{className:"text-sm border-t border-border pt-4 text-foreground/75",children:[D.jsxs("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mr-2",children:[H.label," —"]}),H.note]})]})},H.id))}),D.jsx(dn,{delay:150,children:D.jsxs("div",{className:"border border-dashed border-border p-6",children:[D.jsx("div",{className:"font-pixel text-[8px] text-muted-foreground mb-5 tracking-widest",children:"EXPERIMENT LOG"}),D.jsx("div",{className:"font-pixel text-[9px] text-foreground/70 mb-3",children:"EXPERIMENT / 014"}),D.jsxs("div",{className:"grid gap-y-1.5 text-sm",style:{gridTemplateColumns:"88px 1fr"},children:[D.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]",children:"QUESTION —"}),D.jsx("span",{className:"text-foreground/75",children:"Can this model detect X reliably at night?"}),D.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]",children:"RESULT —"}),D.jsx("span",{children:"Promising, ~80% on the test set."}),D.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]",children:"NEXT —"}),D.jsx("span",{className:"text-foreground/75",children:"Try against low-light footage."})]})]})})]})}),D.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:D.jsx(tu,{from:"RECORD / 006",to:"FIELD HISTORY"})}),D.jsx("section",{className:"w-full bg-background text-foreground py-16 md:py-24",children:D.jsxs("div",{id:"FIELD-HISTORY",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-10",children:[D.jsxs("div",{className:"flex flex-col items-center gap-4",children:[D.jsx(ko,{sectionId:"007",externalFrame:T("007")}),D.jsx(dn,{children:D.jsx("h2",{className:"text-5xl md:text-6xl font-medium tracking-tight uppercase",children:"FIELD HISTORY"})})]}),D.jsxs("div",{className:"relative w-full",children:[D.jsx("div",{"aria-hidden":"true",style:{position:"absolute",left:"50%",top:0,width:1,height:"100%",backgroundColor:"currentColor",opacity:.12,transformOrigin:"top center",transform:ln?"scaleY(1)":`scaleY(${Math.min(1,N*1.6)})`,transition:ln?"none":"transform 0.05s linear",pointerEvents:"none"}}),D.jsx("div",{className:"grid md:grid-cols-3 gap-6 w-full text-left",children:pF.map((H,ee)=>D.jsx(dn,{delay:ee*80,children:D.jsxs("div",{id:H.id,className:`border border-border p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:bg-muted/10 ${n===H.id?"border-accent bg-muted/20":""}`,children:[D.jsxs("div",{className:"font-pixel text-[10px] tracking-widest text-muted-foreground flex justify-between items-center",children:[D.jsx("span",{children:H.year}),D.jsxs("span",{className:"opacity-50",children:["[",H.id.split("/").pop(),"]"]})]}),D.jsxs("div",{children:[D.jsx("h3",{className:"text-sm font-medium uppercase tracking-wide mb-1",children:H.role}),D.jsxs("div",{className:"font-pixel text-[8px] text-muted-foreground mb-3 border-b border-border/50 pb-3 flex items-center gap-2 flex-wrap",children:[D.jsx("span",{children:H.comp}),D.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent px-1.5 py-0.5 rounded-sm font-bold",children:H.type})]}),D.jsx("p",{className:"text-xs leading-relaxed text-foreground/80",children:H.desc})]}),H.refs.length>0&&D.jsxs("div",{className:"mt-auto pt-4 flex items-center gap-2 flex-wrap",children:[D.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground",children:"SEE ALSO —"}),H.refs.map(K=>D.jsx(ly,{id:K.id,label:K.label,onClick:S},K.id))]})]})},H.year))})]})]})})]}),D.jsxs("section",{id:"CONTACT",className:"bg-primary text-primary-foreground relative overflow-hidden mt-28",children:[D.jsx("div",{className:"absolute inset-0",children:D.jsx(ay,{dark:!0,themeIdx:o,scrollVelocity:M,scrollProgress:E})}),D.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-28 md:py-40 flex flex-col items-start gap-10",children:[D.jsx(ko,{sectionId:"009",externalFrame:T("009")}),D.jsxs("div",{children:[D.jsx("div",{className:"font-pixel text-[9px] tracking-widest opacity-40 mb-3",style:{opacity:ln?.4:Math.max(.1,O*.4),transform:ln?"none":`translateY(${(1-O)*8}px)`,transition:ln?"none":"opacity 0.1s, transform 0.1s"},children:"CONTACT / 009"}),D.jsx("h2",{className:"text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-3",style:{opacity:ln?1:Math.max(0,O*1.5-.2),transform:ln?"none":`translateY(${(1-Math.min(1,O*1.5))*16}px)`,transition:ln?"none":"opacity 0.08s, transform 0.08s"},children:"START A NEW FIELD NOTE."}),D.jsx("p",{className:"text-sm opacity-55",style:{opacity:ln?.55:Math.max(0,(O-.4)*.9),transform:ln?"none":`translateY(${(1-Math.min(1,Math.max(0,(O-.4)/.6)))*12}px)`,transition:ln?"none":"opacity 0.08s, transform 0.08s"},children:'"Have a problem worth exploring?"'})]}),D.jsxs("div",{className:"flex gap-6 mt-4",children:[D.jsx("a",{href:"mailto:cmkbuena@gmail.com",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300",children:D.jsx(dw,{className:"w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"})}),D.jsx("a",{href:"https://github.com/ChristianBuena",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300",children:D.jsx(Fd,{className:"w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"})}),D.jsx("a",{href:"https://www.linkedin.com/in/mrtnztan/",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300",children:D.jsx(uw,{className:"w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"})})]})]})]}),D.jsxs("footer",{className:"max-w-6xl mx-auto px-4 md:px-8 py-8 font-pixel text-[8px] text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border",children:[D.jsxs("div",{className:"flex items-center gap-3 tracking-widest uppercase",children:[D.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"}),D.jsx("span",{children:"TAN / FIELD NOTES — SOFTWARE DEVELOPER — PHILIPPINES — 2026"})]}),D.jsx("nav",{className:"flex gap-4 uppercase tracking-widest",children:[["BUILT","#BUILT"],["LAB","#LAB"],["FIELD HISTORY","#FIELD-HISTORY"],["RECORDS","#RECORDS/002"]].map(([H,ee])=>D.jsx("a",{href:ee,className:"hover:text-foreground transition-colors",children:H},H))}),D.jsxs("div",{className:"flex items-center gap-4",children:[D.jsxs("button",{onClick:()=>a(H=>(H+1)%Go.length),className:"font-pixel text-[8px] tracking-widest border border-dashed px-2 py-0.5 transition-colors uppercase border-border/60 hover:border-foreground/50 text-foreground",title:"Cycle display theme",children:["DISPLAY — ",Go[o].name.toUpperCase()," (",o+1,"/",Go.length,")"]}),D.jsx("span",{className:"tracking-widest",children:"© 2026 TAN"})]})]})]})}QT.createRoot(document.getElementById("root")).render(D.jsx(_F,{}));
