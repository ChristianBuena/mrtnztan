function pw(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Dy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bd={exports:{}},za={},Vd={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function mw(){if(Dv)return xt;Dv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function p(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function _(k,Q,Fe){this.props=k,this.context=Q,this.refs=M,this.updater=Fe||y}_.prototype.isReactComponent={},_.prototype.setState=function(k,Q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Q,"setState")},_.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=_.prototype;function P(k,Q,Fe){this.props=k,this.context=Q,this.refs=M,this.updater=Fe||y}var D=P.prototype=new S;D.constructor=P,E(D,_.prototype),D.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(k,Q,Fe){var He,Be={},K=null,ge=null;if(Q!=null)for(He in Q.ref!==void 0&&(ge=Q.ref),Q.key!==void 0&&(K=""+Q.key),Q)N.call(Q,He)&&!F.hasOwnProperty(He)&&(Be[He]=Q[He]);var ve=arguments.length-2;if(ve===1)Be.children=Fe;else if(1<ve){for(var Ue=Array(ve),Xe=0;Xe<ve;Xe++)Ue[Xe]=arguments[Xe+2];Be.children=Ue}if(k&&k.defaultProps)for(He in ve=k.defaultProps,ve)Be[He]===void 0&&(Be[He]=ve[He]);return{$$typeof:n,type:k,key:K,ref:ge,props:Be,_owner:L.current}}function I(k,Q){return{$$typeof:n,type:k.type,key:Q,ref:k.ref,props:k.props,_owner:k._owner}}function V(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function z(k){var Q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Fe){return Q[Fe]})}var X=/\/+/g;function de(k,Q){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):Q.toString(36)}function le(k,Q,Fe,He,Be){var K=typeof k;(K==="undefined"||K==="boolean")&&(k=null);var ge=!1;if(k===null)ge=!0;else switch(K){case"string":case"number":ge=!0;break;case"object":switch(k.$$typeof){case n:case e:ge=!0}}if(ge)return ge=k,Be=Be(ge),k=He===""?"."+de(ge,0):He,b(Be)?(Fe="",k!=null&&(Fe=k.replace(X,"$&/")+"/"),le(Be,Q,Fe,"",function(Xe){return Xe})):Be!=null&&(V(Be)&&(Be=I(Be,Fe+(!Be.key||ge&&ge.key===Be.key?"":(""+Be.key).replace(X,"$&/")+"/")+k)),Q.push(Be)),1;if(ge=0,He=He===""?".":He+":",b(k))for(var ve=0;ve<k.length;ve++){K=k[ve];var Ue=He+de(K,ve);ge+=le(K,Q,Fe,Ue,Be)}else if(Ue=p(k),typeof Ue=="function")for(k=Ue.call(k),ve=0;!(K=k.next()).done;)K=K.value,Ue=He+de(K,ve++),ge+=le(K,Q,Fe,Ue,Be);else if(K==="object")throw Q=String(k),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ge}function j(k,Q,Fe){if(k==null)return k;var He=[],Be=0;return le(k,He,"","",function(K){return Q.call(Fe,K,Be++)}),He}function re(k){if(k._status===-1){var Q=k._result;Q=Q(),Q.then(function(Fe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Fe)},function(Fe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Fe)}),k._status===-1&&(k._status=0,k._result=Q)}if(k._status===1)return k._result.default;throw k._result}var Z={current:null},G={transition:null},te={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:G,ReactCurrentOwner:L};function ce(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:j,forEach:function(k,Q,Fe){j(k,function(){Q.apply(this,arguments)},Fe)},count:function(k){var Q=0;return j(k,function(){Q++}),Q},toArray:function(k){return j(k,function(Q){return Q})||[]},only:function(k){if(!V(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xt.Component=_,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=P,xt.StrictMode=i,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,xt.act=ce,xt.cloneElement=function(k,Q,Fe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var He=E({},k.props),Be=k.key,K=k.ref,ge=k._owner;if(Q!=null){if(Q.ref!==void 0&&(K=Q.ref,ge=L.current),Q.key!==void 0&&(Be=""+Q.key),k.type&&k.type.defaultProps)var ve=k.type.defaultProps;for(Ue in Q)N.call(Q,Ue)&&!F.hasOwnProperty(Ue)&&(He[Ue]=Q[Ue]===void 0&&ve!==void 0?ve[Ue]:Q[Ue])}var Ue=arguments.length-2;if(Ue===1)He.children=Fe;else if(1<Ue){ve=Array(Ue);for(var Xe=0;Xe<Ue;Xe++)ve[Xe]=arguments[Xe+2];He.children=ve}return{$$typeof:n,type:k.type,key:Be,ref:K,props:He,_owner:ge}},xt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},xt.createElement=T,xt.createFactory=function(k){var Q=T.bind(null,k);return Q.type=k,Q},xt.createRef=function(){return{current:null}},xt.forwardRef=function(k){return{$$typeof:u,render:k}},xt.isValidElement=V,xt.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:re}},xt.memo=function(k,Q){return{$$typeof:d,type:k,compare:Q===void 0?null:Q}},xt.startTransition=function(k){var Q=G.transition;G.transition={};try{k()}finally{G.transition=Q}},xt.unstable_act=ce,xt.useCallback=function(k,Q){return Z.current.useCallback(k,Q)},xt.useContext=function(k){return Z.current.useContext(k)},xt.useDebugValue=function(){},xt.useDeferredValue=function(k){return Z.current.useDeferredValue(k)},xt.useEffect=function(k,Q){return Z.current.useEffect(k,Q)},xt.useId=function(){return Z.current.useId()},xt.useImperativeHandle=function(k,Q,Fe){return Z.current.useImperativeHandle(k,Q,Fe)},xt.useInsertionEffect=function(k,Q){return Z.current.useInsertionEffect(k,Q)},xt.useLayoutEffect=function(k,Q){return Z.current.useLayoutEffect(k,Q)},xt.useMemo=function(k,Q){return Z.current.useMemo(k,Q)},xt.useReducer=function(k,Q,Fe){return Z.current.useReducer(k,Q,Fe)},xt.useRef=function(k){return Z.current.useRef(k)},xt.useState=function(k){return Z.current.useState(k)},xt.useSyncExternalStore=function(k,Q,Fe){return Z.current.useSyncExternalStore(k,Q,Fe)},xt.useTransition=function(){return Z.current.useTransition()},xt.version="18.3.1",xt}var Nv;function ym(){return Nv||(Nv=1,Vd.exports=mw()),Vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function gw(){if(Lv)return za;Lv=1;var n=ym(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var m,g={},p=null,y=null;d!==void 0&&(p=""+d),h.key!==void 0&&(p=""+h.key),h.ref!==void 0&&(y=h.ref);for(m in h)i.call(h,m)&&!a.hasOwnProperty(m)&&(g[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:u,key:p,ref:y,props:g,_owner:o.current}}return za.Fragment=t,za.jsx=c,za.jsxs=c,za}var Iv;function vw(){return Iv||(Iv=1,Bd.exports=gw()),Bd.exports}var A=vw(),wc={},zd={exports:{}},qn={},Hd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function xw(){return Fv||(Fv=1,(function(n){function e(G,te){var ce=G.length;G.push(te);e:for(;0<ce;){var k=ce-1>>>1,Q=G[k];if(0<o(Q,te))G[k]=te,G[ce]=Q,ce=k;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var te=G[0],ce=G.pop();if(ce!==te){G[0]=ce;e:for(var k=0,Q=G.length,Fe=Q>>>1;k<Fe;){var He=2*(k+1)-1,Be=G[He],K=He+1,ge=G[K];if(0>o(Be,ce))K<Q&&0>o(ge,Be)?(G[k]=ge,G[K]=ce,k=K):(G[k]=Be,G[He]=ce,k=He);else if(K<Q&&0>o(ge,ce))G[k]=ge,G[K]=ce,k=K;else break e}}return te}function o(G,te){var ce=G.sortIndex-te.sortIndex;return ce!==0?ce:G.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var h=[],d=[],m=1,g=null,p=3,y=!1,E=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(G){for(var te=t(d);te!==null;){if(te.callback===null)i(d);else if(te.startTime<=G)i(d),te.sortIndex=te.expirationTime,e(h,te);else break;te=t(d)}}function b(G){if(M=!1,D(G),!E)if(t(h)!==null)E=!0,re(N);else{var te=t(d);te!==null&&Z(b,te.startTime-G)}}function N(G,te){E=!1,M&&(M=!1,S(T),T=-1),y=!0;var ce=p;try{for(D(te),g=t(h);g!==null&&(!(g.expirationTime>te)||G&&!z());){var k=g.callback;if(typeof k=="function"){g.callback=null,p=g.priorityLevel;var Q=k(g.expirationTime<=te);te=n.unstable_now(),typeof Q=="function"?g.callback=Q:g===t(h)&&i(h),D(te)}else i(h);g=t(h)}if(g!==null)var Fe=!0;else{var He=t(d);He!==null&&Z(b,He.startTime-te),Fe=!1}return Fe}finally{g=null,p=ce,y=!1}}var L=!1,F=null,T=-1,I=5,V=-1;function z(){return!(n.unstable_now()-V<I)}function X(){if(F!==null){var G=n.unstable_now();V=G;var te=!0;try{te=F(!0,G)}finally{te?de():(L=!1,F=null)}}else L=!1}var de;if(typeof P=="function")de=function(){P(X)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,j=le.port2;le.port1.onmessage=X,de=function(){j.postMessage(null)}}else de=function(){_(X,0)};function re(G){F=G,L||(L=!0,de())}function Z(G,te){T=_(function(){G(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){E||y||(E=!0,re(N))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(G){switch(p){case 1:case 2:case 3:var te=3;break;default:te=p}var ce=p;p=te;try{return G()}finally{p=ce}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ce=p;p=G;try{return te()}finally{p=ce}},n.unstable_scheduleCallback=function(G,te,ce){var k=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?k+ce:k):ce=k,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ce+Q,G={id:m++,callback:te,priorityLevel:G,startTime:ce,expirationTime:Q,sortIndex:-1},ce>k?(G.sortIndex=ce,e(d,G),t(h)===null&&G===t(d)&&(M?(S(T),T=-1):M=!0,Z(b,ce-k))):(G.sortIndex=Q,e(h,G),E||y||(E=!0,re(N))),G},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(G){var te=p;return function(){var ce=p;p=te;try{return G.apply(this,arguments)}finally{p=ce}}}})(Gd)),Gd}var Uv;function _w(){return Uv||(Uv=1,Hd.exports=xw()),Hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function yw(){if(Ov)return qn;Ov=1;var n=ym(),e=_w();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function p(r){return h.call(g,r)?!0:h.call(m,r)?!1:d.test(r)?g[r]=!0:(m[r]=!0,!1)}function y(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,s,l,f){if(s===null||typeof s>"u"||y(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,l,f,v,x,C){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=x,this.removeEmptyString=C}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){_[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];_[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){_[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){_[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){_[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){_[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){_[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){_[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){_[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function P(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(S,P);_[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(S,P);_[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(S,P);_[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){_[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),_.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){_[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function D(r,s,l,f){var v=_.hasOwnProperty(s)?_[s]:null;(v!==null?v.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,v,f)&&(l=null),f||v===null?p(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):v.mustUseProperty?r[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,f=v.attributeNamespace,l===null?r.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),z=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),G=Symbol.iterator;function te(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var ce=Object.assign,k;function Q(r){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+r}var Fe=!1;function He(r,s){if(!r||Fe)return"";Fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var f=fe}Reflect.construct(r,[],s)}else{try{s.call()}catch(fe){f=fe}r.call(s.prototype)}else{try{throw Error()}catch(fe){f=fe}r()}}catch(fe){if(fe&&f&&typeof fe.stack=="string"){for(var v=fe.stack.split(`
`),x=f.stack.split(`
`),C=v.length-1,B=x.length-1;1<=C&&0<=B&&v[C]!==x[B];)B--;for(;1<=C&&0<=B;C--,B--)if(v[C]!==x[B]){if(C!==1||B!==1)do if(C--,B--,0>B||v[C]!==x[B]){var H=`
`+v[C].replace(" at new "," at ");return r.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",r.displayName)),H}while(1<=C&&0<=B);break}}}finally{Fe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?Q(r):""}function Be(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=He(r.type,!1),r;case 11:return r=He(r.type.render,!1),r;case 1:return r=He(r.type,!0),r;default:return""}}function K(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case L:return"Portal";case I:return"Profiler";case T:return"StrictMode";case de:return"Suspense";case le:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case z:return(r.displayName||"Context")+".Consumer";case V:return(r._context.displayName||"Context")+".Provider";case X:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case j:return s=r.displayName||null,s!==null?s:K(r.type)||"Memo";case re:s=r._payload,r=r._init;try{return K(r(s))}catch{}}return null}function ge(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ue(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Xe(r){var s=Ue(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,x=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return v.call(this)},set:function(C){f=""+C,x.call(this,C)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(C){f=""+C},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function je(r){r._valueTracker||(r._valueTracker=Xe(r))}function At(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=Ue(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function me(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ce(r,s){var l=s.checked;return ce({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function rt(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=ve(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ft(r,s){s=s.checked,s!=null&&D(r,"checked",s,!1)}function Dt(r,s){ft(r,s);var l=ve(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?jt(r,s.type,l):s.hasOwnProperty("defaultValue")&&jt(r,s.type,ve(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ht(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function jt(r,s,l){(s!=="number"||me(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Bt=Array.isArray;function Nt(r,s,l,f){if(r=r.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<r.length;l++)v=s.hasOwnProperty("$"+r[l].value),r[l].selected!==v&&(r[l].selected=v),v&&f&&(r[l].defaultSelected=!0)}else{for(l=""+ve(l),s=null,v=0;v<r.length;v++){if(r[v].value===l){r[v].selected=!0,f&&(r[v].defaultSelected=!0);return}s!==null||r[v].disabled||(s=r[v])}s!==null&&(s.selected=!0)}}function Yt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function $(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Bt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:ve(l)}}function yn(r,s){var l=ve(s.value),f=ve(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Tt(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function U(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?U(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var J,oe=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,v){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,v)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=J.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function he(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(r){De.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Te[s]=Te[r]})});function pe(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Te.hasOwnProperty(r)&&Te[r]?(""+s).trim():s+"px"}function _e(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,v=pe(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,v):r[l]=v}}var Le=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(r,s){if(s){if(Le[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ie(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function it(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var st=null,lt=null,W=null;function Re(r){if(r=Aa(r)){if(typeof st!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Vl(s),st(r.stateNode,r.type,s))}}function xe(r){lt?W?W.push(r):W=[r]:lt=r}function Ne(){if(lt){var r=lt,s=W;if(W=lt=null,Re(r),s)for(r=0;r<s.length;r++)Re(s[r])}}function Oe(r,s){return r(s)}function ye(){}var Ke=!1;function Ye(r,s,l){if(Ke)return r(s,l);Ke=!0;try{return Oe(r,s,l)}finally{Ke=!1,(lt!==null||W!==null)&&(ye(),Ne())}}function Ot(r,s){var l=r.stateNode;if(l===null)return null;var f=Vl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Rt=!1;if(u)try{var An={};Object.defineProperty(An,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Rt=!1}function ai(r,s,l,f,v,x,C,B,H){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(l,fe)}catch(Ee){this.onError(Ee)}}var ds=!1,Js=null,hs=!1,ps=null,lf={onError:function(r){ds=!0,Js=r}};function El(r,s,l,f,v,x,C,B,H){ds=!1,Js=null,ai.apply(lf,arguments)}function Ml(r,s,l,f,v,x,C,B,H){if(El.apply(this,arguments),ds){if(ds){var fe=Js;ds=!1,Js=null}else throw Error(t(198));hs||(hs=!0,ps=fe)}}function In(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function eo(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function oa(r){if(In(r)!==r)throw Error(t(188))}function Tl(r){var s=r.alternate;if(!s){if(s=In(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var v=l.return;if(v===null)break;var x=v.alternate;if(x===null){if(f=v.return,f!==null){l=f;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===l)return oa(v),r;if(x===f)return oa(v),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=v,f=x;else{for(var C=!1,B=v.child;B;){if(B===l){C=!0,l=v,f=x;break}if(B===f){C=!0,f=v,l=x;break}B=B.sibling}if(!C){for(B=x.child;B;){if(B===l){C=!0,l=x,f=v;break}if(B===f){C=!0,f=x,l=v;break}B=B.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function ms(r){return r=Tl(r),r!==null?aa(r):null}function aa(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=aa(r);if(s!==null)return s;r=r.sibling}return null}var gs=e.unstable_scheduleCallback,la=e.unstable_cancelCallback,wl=e.unstable_shouldYield,cf=e.unstable_requestPaint,Kt=e.unstable_now,uf=e.unstable_getCurrentPriorityLevel,ca=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,be=null;function Ge(r){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ne,r,void 0,(r.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:dt,Ze=Math.log,nt=Math.LN2;function dt(r){return r>>>=0,r===0?32:31-(Ze(r)/nt|0)|0}var ht=64,et=4194304;function St(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Vt(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,v=r.suspendedLanes,x=r.pingedLanes,C=l&268435455;if(C!==0){var B=C&~v;B!==0?f=St(B):(x&=C,x!==0&&(f=St(x)))}else C=l&~v,C!==0?f=St(C):x!==0&&(f=St(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&v)===0&&(v=f&-f,x=s&-s,v>=x||v===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-Ae(s),v=1<<l,f|=r[l],s&=~v;return f}function $t(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,v=r.expirationTimes,x=r.pendingLanes;0<x;){var C=31-Ae(x),B=1<<C,H=v[C];H===-1?((B&l)===0||(B&f)!==0)&&(v[C]=$t(B,s)):H<=s&&(r.expiredLanes|=B),x&=~B}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ve(){var r=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),r}function Sn(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function gt(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ae(s),r[s]=l}function Hn(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var v=31-Ae(l),x=1<<v;s[v]=0,f[v]=-1,r[v]=-1,l&=~x}}function Gn(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-Ae(l),v=1<<f;v&s|r[f]&s&&(r[f]|=s),l&=~v}}var vt=0;function sr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Pt,Gt,_i,It,yi,Vi=!1,vs=[],Dr=null,Nr=null,Lr=null,ua=new Map,fa=new Map,Ir=[],UM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pg(r,s){switch(r){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":ua.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(s.pointerId)}}function da(r,s,l,f,v,x){return r===null||r.nativeEvent!==x?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[v]},s!==null&&(s=Aa(s),s!==null&&Gt(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),r)}function OM(r,s,l,f,v){switch(s){case"focusin":return Dr=da(Dr,r,s,l,f,v),!0;case"dragenter":return Nr=da(Nr,r,s,l,f,v),!0;case"mouseover":return Lr=da(Lr,r,s,l,f,v),!0;case"pointerover":var x=v.pointerId;return ua.set(x,da(ua.get(x)||null,r,s,l,f,v)),!0;case"gotpointercapture":return x=v.pointerId,fa.set(x,da(fa.get(x)||null,r,s,l,f,v)),!0}return!1}function mg(r){var s=xs(r.target);if(s!==null){var l=In(s);if(l!==null){if(s=l.tag,s===13){if(s=eo(l),s!==null){r.blockedOn=s,yi(r.priority,function(){_i(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Al(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=df(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);Pe=f,l.target.dispatchEvent(f),Pe=null}else return s=Aa(l),s!==null&&Gt(s),r.blockedOn=l,!1;s.shift()}return!0}function gg(r,s,l){Al(r)&&l.delete(s)}function kM(){Vi=!1,Dr!==null&&Al(Dr)&&(Dr=null),Nr!==null&&Al(Nr)&&(Nr=null),Lr!==null&&Al(Lr)&&(Lr=null),ua.forEach(gg),fa.forEach(gg)}function ha(r,s){r.blockedOn===s&&(r.blockedOn=null,Vi||(Vi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kM)))}function pa(r){function s(v){return ha(v,r)}if(0<vs.length){ha(vs[0],r);for(var l=1;l<vs.length;l++){var f=vs[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Dr!==null&&ha(Dr,r),Nr!==null&&ha(Nr,r),Lr!==null&&ha(Lr,r),ua.forEach(s),fa.forEach(s),l=0;l<Ir.length;l++)f=Ir[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)mg(l),l.blockedOn===null&&Ir.shift()}var to=b.ReactCurrentBatchConfig,bl=!0;function BM(r,s,l,f){var v=vt,x=to.transition;to.transition=null;try{vt=1,ff(r,s,l,f)}finally{vt=v,to.transition=x}}function VM(r,s,l,f){var v=vt,x=to.transition;to.transition=null;try{vt=4,ff(r,s,l,f)}finally{vt=v,to.transition=x}}function ff(r,s,l,f){if(bl){var v=df(r,s,l,f);if(v===null)Rf(r,s,f,Cl,l),pg(r,f);else if(OM(v,r,s,l,f))f.stopPropagation();else if(pg(r,f),s&4&&-1<UM.indexOf(r)){for(;v!==null;){var x=Aa(v);if(x!==null&&Pt(x),x=df(r,s,l,f),x===null&&Rf(r,s,f,Cl,l),x===v)break;v=x}v!==null&&f.stopPropagation()}else Rf(r,s,f,null,l)}}var Cl=null;function df(r,s,l,f){if(Cl=null,r=it(f),r=xs(r),r!==null)if(s=In(r),s===null)r=null;else if(l=s.tag,l===13){if(r=eo(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Cl=r,null}function vg(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case ca:return 1;case R:return 4;case q:case ue:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Fr=null,hf=null,Rl=null;function xg(){if(Rl)return Rl;var r,s=hf,l=s.length,f,v="value"in Fr?Fr.value:Fr.textContent,x=v.length;for(r=0;r<l&&s[r]===v[r];r++);var C=l-r;for(f=1;f<=C&&s[l-f]===v[x-f];f++);return Rl=v.slice(r,1<f?1-f:void 0)}function Pl(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Dl(){return!0}function _g(){return!1}function ei(r){function s(l,f,v,x,C){this._reactName=l,this._targetInst=v,this.type=f,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var B in r)r.hasOwnProperty(B)&&(l=r[B],this[B]=l?l(x):x[B]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Dl:_g,this.isPropagationStopped=_g,this}return ce(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),s}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=ei(no),ma=ce({},no,{view:0,detail:0}),zM=ei(ma),mf,gf,ga,Nl=ce({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ga&&(ga&&r.type==="mousemove"?(mf=r.screenX-ga.screenX,gf=r.screenY-ga.screenY):gf=mf=0,ga=r),mf)},movementY:function(r){return"movementY"in r?r.movementY:gf}}),yg=ei(Nl),HM=ce({},Nl,{dataTransfer:0}),GM=ei(HM),WM=ce({},ma,{relatedTarget:0}),vf=ei(WM),XM=ce({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),jM=ei(XM),YM=ce({},no,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),$M=ei(YM),qM=ce({},no,{data:0}),Sg=ei(qM),KM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=QM[r])?!!s[r]:!1}function xf(){return JM}var eT=ce({},ma,{key:function(r){if(r.key){var s=KM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Pl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ZM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(r){return r.type==="keypress"?Pl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Pl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),tT=ei(eT),nT=ce({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=ei(nT),iT=ce({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),rT=ei(iT),sT=ce({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),oT=ei(sT),aT=ce({},Nl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),lT=ei(aT),cT=[9,13,27,32],_f=u&&"CompositionEvent"in window,va=null;u&&"documentMode"in document&&(va=document.documentMode);var uT=u&&"TextEvent"in window&&!va,Mg=u&&(!_f||va&&8<va&&11>=va),Tg=" ",wg=!1;function Ag(r,s){switch(r){case"keyup":return cT.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var io=!1;function fT(r,s){switch(r){case"compositionend":return bg(s);case"keypress":return s.which!==32?null:(wg=!0,Tg);case"textInput":return r=s.data,r===Tg&&wg?null:r;default:return null}}function dT(r,s){if(io)return r==="compositionend"||!_f&&Ag(r,s)?(r=xg(),Rl=hf=Fr=null,io=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Mg&&s.locale!=="ko"?null:s.data;default:return null}}var hT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!hT[r.type]:s==="textarea"}function Rg(r,s,l,f){xe(f),s=Ol(s,"onChange"),0<s.length&&(l=new pf("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var xa=null,_a=null;function pT(r){Yg(r,0)}function Ll(r){var s=lo(r);if(At(s))return r}function mT(r,s){if(r==="change")return s}var Pg=!1;if(u){var yf;if(u){var Sf="oninput"in document;if(!Sf){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),Sf=typeof Dg.oninput=="function"}yf=Sf}else yf=!1;Pg=yf&&(!document.documentMode||9<document.documentMode)}function Ng(){xa&&(xa.detachEvent("onpropertychange",Lg),_a=xa=null)}function Lg(r){if(r.propertyName==="value"&&Ll(_a)){var s=[];Rg(s,_a,r,it(r)),Ye(pT,s)}}function gT(r,s,l){r==="focusin"?(Ng(),xa=s,_a=l,xa.attachEvent("onpropertychange",Lg)):r==="focusout"&&Ng()}function vT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ll(_a)}function xT(r,s){if(r==="click")return Ll(s)}function _T(r,s){if(r==="input"||r==="change")return Ll(s)}function yT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Si=typeof Object.is=="function"?Object.is:yT;function ya(r,s){if(Si(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var v=l[f];if(!h.call(s,v)||!Si(r[v],s[v]))return!1}return!0}function Ig(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Fg(r,s){var l=Ig(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ig(l)}}function Ug(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Ug(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Og(){for(var r=window,s=me();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=me(r.document)}return s}function Ef(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function ST(r){var s=Og(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Ug(l.ownerDocument.documentElement,l)){if(f!==null&&Ef(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var v=l.textContent.length,x=Math.min(f.start,v);f=f.end===void 0?x:Math.min(f.end,v),!r.extend&&x>f&&(v=f,f=x,x=v),v=Fg(l,x);var C=Fg(l,f);v&&C&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==C.node||r.focusOffset!==C.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),r.removeAllRanges(),x>f?(r.addRange(s),r.extend(C.node,C.offset)):(s.setEnd(C.node,C.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var ET=u&&"documentMode"in document&&11>=document.documentMode,ro=null,Mf=null,Sa=null,Tf=!1;function kg(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Tf||ro==null||ro!==me(f)||(f=ro,"selectionStart"in f&&Ef(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Sa&&ya(Sa,f)||(Sa=f,f=Ol(Mf,"onSelect"),0<f.length&&(s=new pf("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=ro)))}function Il(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var so={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},wf={},Bg={};u&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Fl(r){if(wf[r])return wf[r];if(!so[r])return r;var s=so[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Bg)return wf[r]=s[l];return r}var Vg=Fl("animationend"),zg=Fl("animationiteration"),Hg=Fl("animationstart"),Gg=Fl("transitionend"),Wg=new Map,Xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(r,s){Wg.set(r,s),a(s,[r])}for(var Af=0;Af<Xg.length;Af++){var bf=Xg[Af],MT=bf.toLowerCase(),TT=bf[0].toUpperCase()+bf.slice(1);Ur(MT,"on"+TT)}Ur(Vg,"onAnimationEnd"),Ur(zg,"onAnimationIteration"),Ur(Hg,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Gg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function jg(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,Ml(f,s,void 0,r),r.currentTarget=null}function Yg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],v=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var C=f.length-1;0<=C;C--){var B=f[C],H=B.instance,fe=B.currentTarget;if(B=B.listener,H!==x&&v.isPropagationStopped())break e;jg(v,B,fe),x=H}else for(C=0;C<f.length;C++){if(B=f[C],H=B.instance,fe=B.currentTarget,B=B.listener,H!==x&&v.isPropagationStopped())break e;jg(v,B,fe),x=H}}}if(hs)throw r=ps,hs=!1,ps=null,r}function Wt(r,s){var l=s[Ff];l===void 0&&(l=s[Ff]=new Set);var f=r+"__bubble";l.has(f)||($g(s,r,2,!1),l.add(f))}function Cf(r,s,l){var f=0;s&&(f|=4),$g(l,r,f,s)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Ma(r){if(!r[Ul]){r[Ul]=!0,i.forEach(function(l){l!=="selectionchange"&&(wT.has(l)||Cf(l,!1,r),Cf(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ul]||(s[Ul]=!0,Cf("selectionchange",!1,s))}}function $g(r,s,l,f){switch(vg(s)){case 1:var v=BM;break;case 4:v=VM;break;default:v=ff}l=v.bind(null,s,l,r),v=void 0,!Rt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),f?v!==void 0?r.addEventListener(s,l,{capture:!0,passive:v}):r.addEventListener(s,l,!0):v!==void 0?r.addEventListener(s,l,{passive:v}):r.addEventListener(s,l,!1)}function Rf(r,s,l,f,v){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var C=f.tag;if(C===3||C===4){var B=f.stateNode.containerInfo;if(B===v||B.nodeType===8&&B.parentNode===v)break;if(C===4)for(C=f.return;C!==null;){var H=C.tag;if((H===3||H===4)&&(H=C.stateNode.containerInfo,H===v||H.nodeType===8&&H.parentNode===v))return;C=C.return}for(;B!==null;){if(C=xs(B),C===null)return;if(H=C.tag,H===5||H===6){f=x=C;continue e}B=B.parentNode}}f=f.return}Ye(function(){var fe=x,Ee=it(l),Me=[];e:{var Se=Wg.get(r);if(Se!==void 0){var ze=pf,$e=r;switch(r){case"keypress":if(Pl(l)===0)break e;case"keydown":case"keyup":ze=tT;break;case"focusin":$e="focus",ze=vf;break;case"focusout":$e="blur",ze=vf;break;case"beforeblur":case"afterblur":ze=vf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=GM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=rT;break;case Vg:case zg:case Hg:ze=jM;break;case Gg:ze=oT;break;case"scroll":ze=zM;break;case"wheel":ze=lT;break;case"copy":case"cut":case"paste":ze=$M;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Eg}var Qe=(s&4)!==0,nn=!Qe&&r==="scroll",ee=Qe?Se!==null?Se+"Capture":null:Se;Qe=[];for(var Y=fe,se;Y!==null;){se=Y;var we=se.stateNode;if(se.tag===5&&we!==null&&(se=we,ee!==null&&(we=Ot(Y,ee),we!=null&&Qe.push(Ta(Y,we,se)))),nn)break;Y=Y.return}0<Qe.length&&(Se=new ze(Se,$e,null,l,Ee),Me.push({event:Se,listeners:Qe}))}}if((s&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",ze=r==="mouseout"||r==="pointerout",Se&&l!==Pe&&($e=l.relatedTarget||l.fromElement)&&(xs($e)||$e[or]))break e;if((ze||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,ze?($e=l.relatedTarget||l.toElement,ze=fe,$e=$e?xs($e):null,$e!==null&&(nn=In($e),$e!==nn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(ze=null,$e=fe),ze!==$e)){if(Qe=yg,we="onMouseLeave",ee="onMouseEnter",Y="mouse",(r==="pointerout"||r==="pointerover")&&(Qe=Eg,we="onPointerLeave",ee="onPointerEnter",Y="pointer"),nn=ze==null?Se:lo(ze),se=$e==null?Se:lo($e),Se=new Qe(we,Y+"leave",ze,l,Ee),Se.target=nn,Se.relatedTarget=se,we=null,xs(Ee)===fe&&(Qe=new Qe(ee,Y+"enter",$e,l,Ee),Qe.target=se,Qe.relatedTarget=nn,we=Qe),nn=we,ze&&$e)t:{for(Qe=ze,ee=$e,Y=0,se=Qe;se;se=oo(se))Y++;for(se=0,we=ee;we;we=oo(we))se++;for(;0<Y-se;)Qe=oo(Qe),Y--;for(;0<se-Y;)ee=oo(ee),se--;for(;Y--;){if(Qe===ee||ee!==null&&Qe===ee.alternate)break t;Qe=oo(Qe),ee=oo(ee)}Qe=null}else Qe=null;ze!==null&&qg(Me,Se,ze,Qe,!1),$e!==null&&nn!==null&&qg(Me,nn,$e,Qe,!0)}}e:{if(Se=fe?lo(fe):window,ze=Se.nodeName&&Se.nodeName.toLowerCase(),ze==="select"||ze==="input"&&Se.type==="file")var tt=mT;else if(Cg(Se))if(Pg)tt=_T;else{tt=vT;var ot=gT}else(ze=Se.nodeName)&&ze.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(tt=xT);if(tt&&(tt=tt(r,fe))){Rg(Me,tt,l,Ee);break e}ot&&ot(r,Se,fe),r==="focusout"&&(ot=Se._wrapperState)&&ot.controlled&&Se.type==="number"&&jt(Se,"number",Se.value)}switch(ot=fe?lo(fe):window,r){case"focusin":(Cg(ot)||ot.contentEditable==="true")&&(ro=ot,Mf=fe,Sa=null);break;case"focusout":Sa=Mf=ro=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,kg(Me,l,Ee);break;case"selectionchange":if(ET)break;case"keydown":case"keyup":kg(Me,l,Ee)}var at;if(_f)e:{switch(r){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else io?Ag(r,l)&&(ct="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Mg&&l.locale!=="ko"&&(io||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&io&&(at=xg()):(Fr=Ee,hf="value"in Fr?Fr.value:Fr.textContent,io=!0)),ot=Ol(fe,ct),0<ot.length&&(ct=new Sg(ct,r,null,l,Ee),Me.push({event:ct,listeners:ot}),at?ct.data=at:(at=bg(l),at!==null&&(ct.data=at)))),(at=uT?fT(r,l):dT(r,l))&&(fe=Ol(fe,"onBeforeInput"),0<fe.length&&(Ee=new Sg("onBeforeInput","beforeinput",null,l,Ee),Me.push({event:Ee,listeners:fe}),Ee.data=at))}Yg(Me,s)})}function Ta(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Ol(r,s){for(var l=s+"Capture",f=[];r!==null;){var v=r,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=Ot(r,l),x!=null&&f.unshift(Ta(r,x,v)),x=Ot(r,s),x!=null&&f.push(Ta(r,x,v))),r=r.return}return f}function oo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function qg(r,s,l,f,v){for(var x=s._reactName,C=[];l!==null&&l!==f;){var B=l,H=B.alternate,fe=B.stateNode;if(H!==null&&H===f)break;B.tag===5&&fe!==null&&(B=fe,v?(H=Ot(l,x),H!=null&&C.unshift(Ta(l,H,B))):v||(H=Ot(l,x),H!=null&&C.push(Ta(l,H,B)))),l=l.return}C.length!==0&&r.push({event:s,listeners:C})}var AT=/\r\n?/g,bT=/\u0000|\uFFFD/g;function Kg(r){return(typeof r=="string"?r:""+r).replace(AT,`
`).replace(bT,"")}function kl(r,s,l){if(s=Kg(s),Kg(r)!==s&&l)throw Error(t(425))}function Bl(){}var Pf=null,Df=null;function Nf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,CT=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,RT=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(r){return Zg.resolve(null).then(r).catch(PT)}:Lf;function PT(r){setTimeout(function(){throw r})}function If(r,s){var l=s,f=0;do{var v=l.nextSibling;if(r.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(f===0){r.removeChild(v),pa(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=v}while(l);pa(s)}function Or(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Qg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var ao=Math.random().toString(36).slice(2),zi="__reactFiber$"+ao,wa="__reactProps$"+ao,or="__reactContainer$"+ao,Ff="__reactEvents$"+ao,DT="__reactListeners$"+ao,NT="__reactHandles$"+ao;function xs(r){var s=r[zi];if(s)return s;for(var l=r.parentNode;l;){if(s=l[or]||l[zi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Qg(r);r!==null;){if(l=r[zi])return l;r=Qg(r)}return s}r=l,l=r.parentNode}return null}function Aa(r){return r=r[zi]||r[or],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function lo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Vl(r){return r[wa]||null}var Uf=[],co=-1;function kr(r){return{current:r}}function Xt(r){0>co||(r.current=Uf[co],Uf[co]=null,co--)}function zt(r,s){co++,Uf[co]=r.current,r.current=s}var Br={},bn=kr(Br),Wn=kr(!1),_s=Br;function uo(r,s){var l=r.type.contextTypes;if(!l)return Br;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in l)v[x]=s[x];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=v),v}function Xn(r){return r=r.childContextTypes,r!=null}function zl(){Xt(Wn),Xt(bn)}function Jg(r,s,l){if(bn.current!==Br)throw Error(t(168));zt(bn,s),zt(Wn,l)}function e0(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var v in f)if(!(v in s))throw Error(t(108,ge(r)||"Unknown",v));return ce({},l,f)}function Hl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Br,_s=bn.current,zt(bn,r),zt(Wn,Wn.current),!0}function t0(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=e0(r,s,_s),f.__reactInternalMemoizedMergedChildContext=r,Xt(Wn),Xt(bn),zt(bn,r)):Xt(Wn),zt(Wn,l)}var ar=null,Gl=!1,Of=!1;function n0(r){ar===null?ar=[r]:ar.push(r)}function LT(r){Gl=!0,n0(r)}function Vr(){if(!Of&&ar!==null){Of=!0;var r=0,s=vt;try{var l=ar;for(vt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}ar=null,Gl=!1}catch(v){throw ar!==null&&(ar=ar.slice(r+1)),gs(ca,Vr),v}finally{vt=s,Of=!1}}return null}var fo=[],ho=0,Wl=null,Xl=0,li=[],ci=0,ys=null,lr=1,cr="";function Ss(r,s){fo[ho++]=Xl,fo[ho++]=Wl,Wl=r,Xl=s}function i0(r,s,l){li[ci++]=lr,li[ci++]=cr,li[ci++]=ys,ys=r;var f=lr;r=cr;var v=32-Ae(f)-1;f&=~(1<<v),l+=1;var x=32-Ae(s)+v;if(30<x){var C=v-v%5;x=(f&(1<<C)-1).toString(32),f>>=C,v-=C,lr=1<<32-Ae(s)+v|l<<v|f,cr=x+r}else lr=1<<x|l<<v|f,cr=r}function kf(r){r.return!==null&&(Ss(r,1),i0(r,1,0))}function Bf(r){for(;r===Wl;)Wl=fo[--ho],fo[ho]=null,Xl=fo[--ho],fo[ho]=null;for(;r===ys;)ys=li[--ci],li[ci]=null,cr=li[--ci],li[ci]=null,lr=li[--ci],li[ci]=null}var ti=null,ni=null,qt=!1,Ei=null;function r0(r,s){var l=hi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function s0(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ti=r,ni=Or(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ti=r,ni=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ys!==null?{id:lr,overflow:cr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=hi(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,ti=r,ni=null,!0):!1;default:return!1}}function Vf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function zf(r){if(qt){var s=ni;if(s){var l=s;if(!s0(r,s)){if(Vf(r))throw Error(t(418));s=Or(l.nextSibling);var f=ti;s&&s0(r,s)?r0(f,l):(r.flags=r.flags&-4097|2,qt=!1,ti=r)}}else{if(Vf(r))throw Error(t(418));r.flags=r.flags&-4097|2,qt=!1,ti=r}}}function o0(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ti=r}function jl(r){if(r!==ti)return!1;if(!qt)return o0(r),qt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Nf(r.type,r.memoizedProps)),s&&(s=ni)){if(Vf(r))throw a0(),Error(t(418));for(;s;)r0(r,s),s=Or(s.nextSibling)}if(o0(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){ni=Or(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}ni=null}}else ni=ti?Or(r.stateNode.nextSibling):null;return!0}function a0(){for(var r=ni;r;)r=Or(r.nextSibling)}function po(){ni=ti=null,qt=!1}function Hf(r){Ei===null?Ei=[r]:Ei.push(r)}var IT=b.ReactCurrentBatchConfig;function ba(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var v=f,x=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(C){var B=v.refs;C===null?delete B[x]:B[x]=C},s._stringRef=x,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Yl(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function l0(r){var s=r._init;return s(r._payload)}function c0(r){function s(ee,Y){if(r){var se=ee.deletions;se===null?(ee.deletions=[Y],ee.flags|=16):se.push(Y)}}function l(ee,Y){if(!r)return null;for(;Y!==null;)s(ee,Y),Y=Y.sibling;return null}function f(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function v(ee,Y){return ee=$r(ee,Y),ee.index=0,ee.sibling=null,ee}function x(ee,Y,se){return ee.index=se,r?(se=ee.alternate,se!==null?(se=se.index,se<Y?(ee.flags|=2,Y):se):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function C(ee){return r&&ee.alternate===null&&(ee.flags|=2),ee}function B(ee,Y,se,we){return Y===null||Y.tag!==6?(Y=Ld(se,ee.mode,we),Y.return=ee,Y):(Y=v(Y,se),Y.return=ee,Y)}function H(ee,Y,se,we){var tt=se.type;return tt===F?Ee(ee,Y,se.props.children,we,se.key):Y!==null&&(Y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===re&&l0(tt)===Y.type)?(we=v(Y,se.props),we.ref=ba(ee,Y,se),we.return=ee,we):(we=vc(se.type,se.key,se.props,null,ee.mode,we),we.ref=ba(ee,Y,se),we.return=ee,we)}function fe(ee,Y,se,we){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=Id(se,ee.mode,we),Y.return=ee,Y):(Y=v(Y,se.children||[]),Y.return=ee,Y)}function Ee(ee,Y,se,we,tt){return Y===null||Y.tag!==7?(Y=Rs(se,ee.mode,we,tt),Y.return=ee,Y):(Y=v(Y,se),Y.return=ee,Y)}function Me(ee,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Ld(""+Y,ee.mode,se),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:return se=vc(Y.type,Y.key,Y.props,null,ee.mode,se),se.ref=ba(ee,null,Y),se.return=ee,se;case L:return Y=Id(Y,ee.mode,se),Y.return=ee,Y;case re:var we=Y._init;return Me(ee,we(Y._payload),se)}if(Bt(Y)||te(Y))return Y=Rs(Y,ee.mode,se,null),Y.return=ee,Y;Yl(ee,Y)}return null}function Se(ee,Y,se,we){var tt=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return tt!==null?null:B(ee,Y,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case N:return se.key===tt?H(ee,Y,se,we):null;case L:return se.key===tt?fe(ee,Y,se,we):null;case re:return tt=se._init,Se(ee,Y,tt(se._payload),we)}if(Bt(se)||te(se))return tt!==null?null:Ee(ee,Y,se,we,null);Yl(ee,se)}return null}function ze(ee,Y,se,we,tt){if(typeof we=="string"&&we!==""||typeof we=="number")return ee=ee.get(se)||null,B(Y,ee,""+we,tt);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return ee=ee.get(we.key===null?se:we.key)||null,H(Y,ee,we,tt);case L:return ee=ee.get(we.key===null?se:we.key)||null,fe(Y,ee,we,tt);case re:var ot=we._init;return ze(ee,Y,se,ot(we._payload),tt)}if(Bt(we)||te(we))return ee=ee.get(se)||null,Ee(Y,ee,we,tt,null);Yl(Y,we)}return null}function $e(ee,Y,se,we){for(var tt=null,ot=null,at=Y,ct=Y=0,xn=null;at!==null&&ct<se.length;ct++){at.index>ct?(xn=at,at=null):xn=at.sibling;var wt=Se(ee,at,se[ct],we);if(wt===null){at===null&&(at=xn);break}r&&at&&wt.alternate===null&&s(ee,at),Y=x(wt,Y,ct),ot===null?tt=wt:ot.sibling=wt,ot=wt,at=xn}if(ct===se.length)return l(ee,at),qt&&Ss(ee,ct),tt;if(at===null){for(;ct<se.length;ct++)at=Me(ee,se[ct],we),at!==null&&(Y=x(at,Y,ct),ot===null?tt=at:ot.sibling=at,ot=at);return qt&&Ss(ee,ct),tt}for(at=f(ee,at);ct<se.length;ct++)xn=ze(at,ee,ct,se[ct],we),xn!==null&&(r&&xn.alternate!==null&&at.delete(xn.key===null?ct:xn.key),Y=x(xn,Y,ct),ot===null?tt=xn:ot.sibling=xn,ot=xn);return r&&at.forEach(function(qr){return s(ee,qr)}),qt&&Ss(ee,ct),tt}function Qe(ee,Y,se,we){var tt=te(se);if(typeof tt!="function")throw Error(t(150));if(se=tt.call(se),se==null)throw Error(t(151));for(var ot=tt=null,at=Y,ct=Y=0,xn=null,wt=se.next();at!==null&&!wt.done;ct++,wt=se.next()){at.index>ct?(xn=at,at=null):xn=at.sibling;var qr=Se(ee,at,wt.value,we);if(qr===null){at===null&&(at=xn);break}r&&at&&qr.alternate===null&&s(ee,at),Y=x(qr,Y,ct),ot===null?tt=qr:ot.sibling=qr,ot=qr,at=xn}if(wt.done)return l(ee,at),qt&&Ss(ee,ct),tt;if(at===null){for(;!wt.done;ct++,wt=se.next())wt=Me(ee,wt.value,we),wt!==null&&(Y=x(wt,Y,ct),ot===null?tt=wt:ot.sibling=wt,ot=wt);return qt&&Ss(ee,ct),tt}for(at=f(ee,at);!wt.done;ct++,wt=se.next())wt=ze(at,ee,ct,wt.value,we),wt!==null&&(r&&wt.alternate!==null&&at.delete(wt.key===null?ct:wt.key),Y=x(wt,Y,ct),ot===null?tt=wt:ot.sibling=wt,ot=wt);return r&&at.forEach(function(hw){return s(ee,hw)}),qt&&Ss(ee,ct),tt}function nn(ee,Y,se,we){if(typeof se=="object"&&se!==null&&se.type===F&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case N:e:{for(var tt=se.key,ot=Y;ot!==null;){if(ot.key===tt){if(tt=se.type,tt===F){if(ot.tag===7){l(ee,ot.sibling),Y=v(ot,se.props.children),Y.return=ee,ee=Y;break e}}else if(ot.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===re&&l0(tt)===ot.type){l(ee,ot.sibling),Y=v(ot,se.props),Y.ref=ba(ee,ot,se),Y.return=ee,ee=Y;break e}l(ee,ot);break}else s(ee,ot);ot=ot.sibling}se.type===F?(Y=Rs(se.props.children,ee.mode,we,se.key),Y.return=ee,ee=Y):(we=vc(se.type,se.key,se.props,null,ee.mode,we),we.ref=ba(ee,Y,se),we.return=ee,ee=we)}return C(ee);case L:e:{for(ot=se.key;Y!==null;){if(Y.key===ot)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){l(ee,Y.sibling),Y=v(Y,se.children||[]),Y.return=ee,ee=Y;break e}else{l(ee,Y);break}else s(ee,Y);Y=Y.sibling}Y=Id(se,ee.mode,we),Y.return=ee,ee=Y}return C(ee);case re:return ot=se._init,nn(ee,Y,ot(se._payload),we)}if(Bt(se))return $e(ee,Y,se,we);if(te(se))return Qe(ee,Y,se,we);Yl(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Y!==null&&Y.tag===6?(l(ee,Y.sibling),Y=v(Y,se),Y.return=ee,ee=Y):(l(ee,Y),Y=Ld(se,ee.mode,we),Y.return=ee,ee=Y),C(ee)):l(ee,Y)}return nn}var mo=c0(!0),u0=c0(!1),$l=kr(null),ql=null,go=null,Gf=null;function Wf(){Gf=go=ql=null}function Xf(r){var s=$l.current;Xt($l),r._currentValue=s}function jf(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function vo(r,s){ql=r,Gf=go=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(jn=!0),r.firstContext=null)}function ui(r){var s=r._currentValue;if(Gf!==r)if(r={context:r,memoizedValue:s,next:null},go===null){if(ql===null)throw Error(t(308));go=r,ql.dependencies={lanes:0,firstContext:r}}else go=go.next=r;return s}var Es=null;function Yf(r){Es===null?Es=[r]:Es.push(r)}function f0(r,s,l,f){var v=s.interleaved;return v===null?(l.next=l,Yf(s)):(l.next=v.next,v.next=l),s.interleaved=l,ur(r,f)}function ur(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var zr=!1;function $f(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function fr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Hr(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Et&2)!==0){var v=f.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),f.pending=s,ur(r,l)}return v=f.interleaved,v===null?(s.next=s,Yf(f)):(s.next=v.next,v.next=s),f.interleaved=s,ur(r,l)}function Kl(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Gn(r,l)}}function h0(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var v=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?v=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?v=x=s:x=x.next=s}else v=x=s;l={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Zl(r,s,l,f){var v=r.updateQueue;zr=!1;var x=v.firstBaseUpdate,C=v.lastBaseUpdate,B=v.shared.pending;if(B!==null){v.shared.pending=null;var H=B,fe=H.next;H.next=null,C===null?x=fe:C.next=fe,C=H;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,B=Ee.lastBaseUpdate,B!==C&&(B===null?Ee.firstBaseUpdate=fe:B.next=fe,Ee.lastBaseUpdate=H))}if(x!==null){var Me=v.baseState;C=0,Ee=fe=H=null,B=x;do{var Se=B.lane,ze=B.eventTime;if((f&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:ze,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var $e=r,Qe=B;switch(Se=s,ze=l,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Me=$e.call(ze,Me,Se);break e}Me=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,Se=typeof $e=="function"?$e.call(ze,Me,Se):$e,Se==null)break e;Me=ce({},Me,Se);break e;case 2:zr=!0}}B.callback!==null&&B.lane!==0&&(r.flags|=64,Se=v.effects,Se===null?v.effects=[B]:Se.push(B))}else ze={eventTime:ze,lane:Se,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ee===null?(fe=Ee=ze,H=Me):Ee=Ee.next=ze,C|=Se;if(B=B.next,B===null){if(B=v.shared.pending,B===null)break;Se=B,B=Se.next,Se.next=null,v.lastBaseUpdate=Se,v.shared.pending=null}}while(!0);if(Ee===null&&(H=Me),v.baseState=H,v.firstBaseUpdate=fe,v.lastBaseUpdate=Ee,s=v.shared.interleaved,s!==null){v=s;do C|=v.lane,v=v.next;while(v!==s)}else x===null&&(v.shared.lanes=0);ws|=C,r.lanes=C,r.memoizedState=Me}}function p0(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],v=f.callback;if(v!==null){if(f.callback=null,f=l,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var Ca={},Hi=kr(Ca),Ra=kr(Ca),Pa=kr(Ca);function Ms(r){if(r===Ca)throw Error(t(174));return r}function qf(r,s){switch(zt(Pa,s),zt(Ra,r),zt(Hi,Ca),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=w(s,r)}Xt(Hi),zt(Hi,s)}function xo(){Xt(Hi),Xt(Ra),Xt(Pa)}function m0(r){Ms(Pa.current);var s=Ms(Hi.current),l=w(s,r.type);s!==l&&(zt(Ra,r),zt(Hi,l))}function Kf(r){Ra.current===r&&(Xt(Hi),Xt(Ra))}var Zt=kr(0);function Ql(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Zf=[];function Qf(){for(var r=0;r<Zf.length;r++)Zf[r]._workInProgressVersionPrimary=null;Zf.length=0}var Jl=b.ReactCurrentDispatcher,Jf=b.ReactCurrentBatchConfig,Ts=0,Qt=null,un=null,gn=null,ec=!1,Da=!1,Na=0,FT=0;function Cn(){throw Error(t(321))}function ed(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Si(r[l],s[l]))return!1;return!0}function td(r,s,l,f,v,x){if(Ts=x,Qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Jl.current=r===null||r.memoizedState===null?BT:VT,r=l(f,v),Da){x=0;do{if(Da=!1,Na=0,25<=x)throw Error(t(301));x+=1,gn=un=null,s.updateQueue=null,Jl.current=zT,r=l(f,v)}while(Da)}if(Jl.current=ic,s=un!==null&&un.next!==null,Ts=0,gn=un=Qt=null,ec=!1,s)throw Error(t(300));return r}function nd(){var r=Na!==0;return Na=0,r}function Gi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Qt.memoizedState=gn=r:gn=gn.next=r,gn}function fi(){if(un===null){var r=Qt.alternate;r=r!==null?r.memoizedState:null}else r=un.next;var s=gn===null?Qt.memoizedState:gn.next;if(s!==null)gn=s,un=r;else{if(r===null)throw Error(t(310));un=r,r={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},gn===null?Qt.memoizedState=gn=r:gn=gn.next=r}return gn}function La(r,s){return typeof s=="function"?s(r):s}function id(r){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=un,v=f.baseQueue,x=l.pending;if(x!==null){if(v!==null){var C=v.next;v.next=x.next,x.next=C}f.baseQueue=v=x,l.pending=null}if(v!==null){x=v.next,f=f.baseState;var B=C=null,H=null,fe=x;do{var Ee=fe.lane;if((Ts&Ee)===Ee)H!==null&&(H=H.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),f=fe.hasEagerState?fe.eagerState:r(f,fe.action);else{var Me={lane:Ee,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};H===null?(B=H=Me,C=f):H=H.next=Me,Qt.lanes|=Ee,ws|=Ee}fe=fe.next}while(fe!==null&&fe!==x);H===null?C=f:H.next=B,Si(f,s.memoizedState)||(jn=!0),s.memoizedState=f,s.baseState=C,s.baseQueue=H,l.lastRenderedState=f}if(r=l.interleaved,r!==null){v=r;do x=v.lane,Qt.lanes|=x,ws|=x,v=v.next;while(v!==r)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function rd(r){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,v=l.pending,x=s.memoizedState;if(v!==null){l.pending=null;var C=v=v.next;do x=r(x,C.action),C=C.next;while(C!==v);Si(x,s.memoizedState)||(jn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function g0(){}function v0(r,s){var l=Qt,f=fi(),v=s(),x=!Si(f.memoizedState,v);if(x&&(f.memoizedState=v,jn=!0),f=f.queue,sd(y0.bind(null,l,f,r),[r]),f.getSnapshot!==s||x||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Ia(9,_0.bind(null,l,f,v,s),void 0,null),vn===null)throw Error(t(349));(Ts&30)!==0||x0(l,s,v)}return v}function x0(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function _0(r,s,l,f){s.value=l,s.getSnapshot=f,S0(s)&&E0(r)}function y0(r,s,l){return l(function(){S0(s)&&E0(r)})}function S0(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Si(r,l)}catch{return!0}}function E0(r){var s=ur(r,1);s!==null&&Ai(s,r,1,-1)}function M0(r){var s=Gi();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:r},s.queue=r,r=r.dispatch=kT.bind(null,Qt,r),[s.memoizedState,r]}function Ia(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function T0(){return fi().memoizedState}function tc(r,s,l,f){var v=Gi();Qt.flags|=r,v.memoizedState=Ia(1|s,l,void 0,f===void 0?null:f)}function nc(r,s,l,f){var v=fi();f=f===void 0?null:f;var x=void 0;if(un!==null){var C=un.memoizedState;if(x=C.destroy,f!==null&&ed(f,C.deps)){v.memoizedState=Ia(s,l,x,f);return}}Qt.flags|=r,v.memoizedState=Ia(1|s,l,x,f)}function w0(r,s){return tc(8390656,8,r,s)}function sd(r,s){return nc(2048,8,r,s)}function A0(r,s){return nc(4,2,r,s)}function b0(r,s){return nc(4,4,r,s)}function C0(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function R0(r,s,l){return l=l!=null?l.concat([r]):null,nc(4,4,C0.bind(null,s,r),l)}function od(){}function P0(r,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&ed(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function D0(r,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&ed(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function N0(r,s,l){return(Ts&21)===0?(r.baseState&&(r.baseState=!1,jn=!0),r.memoizedState=l):(Si(l,s)||(l=Ve(),Qt.lanes|=l,ws|=l,r.baseState=!0),s)}function UT(r,s){var l=vt;vt=l!==0&&4>l?l:4,r(!0);var f=Jf.transition;Jf.transition={};try{r(!1),s()}finally{vt=l,Jf.transition=f}}function L0(){return fi().memoizedState}function OT(r,s,l){var f=jr(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},I0(r))F0(s,l);else if(l=f0(r,s,l,f),l!==null){var v=Un();Ai(l,r,f,v),U0(l,s,f)}}function kT(r,s,l){var f=jr(r),v={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(I0(r))F0(s,v);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var C=s.lastRenderedState,B=x(C,l);if(v.hasEagerState=!0,v.eagerState=B,Si(B,C)){var H=s.interleaved;H===null?(v.next=v,Yf(s)):(v.next=H.next,H.next=v),s.interleaved=v;return}}catch{}finally{}l=f0(r,s,v,f),l!==null&&(v=Un(),Ai(l,r,f,v),U0(l,s,f))}}function I0(r){var s=r.alternate;return r===Qt||s!==null&&s===Qt}function F0(r,s){Da=ec=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function U0(r,s,l){if((l&4194240)!==0){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Gn(r,l)}}var ic={readContext:ui,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},BT={readContext:ui,useCallback:function(r,s){return Gi().memoizedState=[r,s===void 0?null:s],r},useContext:ui,useEffect:w0,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,tc(4194308,4,C0.bind(null,s,r),l)},useLayoutEffect:function(r,s){return tc(4194308,4,r,s)},useInsertionEffect:function(r,s){return tc(4,2,r,s)},useMemo:function(r,s){var l=Gi();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=Gi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=OT.bind(null,Qt,r),[f.memoizedState,r]},useRef:function(r){var s=Gi();return r={current:r},s.memoizedState=r},useState:M0,useDebugValue:od,useDeferredValue:function(r){return Gi().memoizedState=r},useTransition:function(){var r=M0(!1),s=r[0];return r=UT.bind(null,r[1]),Gi().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=Qt,v=Gi();if(qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),vn===null)throw Error(t(349));(Ts&30)!==0||x0(f,s,l)}v.memoizedState=l;var x={value:l,getSnapshot:s};return v.queue=x,w0(y0.bind(null,f,x,r),[r]),f.flags|=2048,Ia(9,_0.bind(null,f,x,l,s),void 0,null),l},useId:function(){var r=Gi(),s=vn.identifierPrefix;if(qt){var l=cr,f=lr;l=(f&~(1<<32-Ae(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Na++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=FT++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},VT={readContext:ui,useCallback:P0,useContext:ui,useEffect:sd,useImperativeHandle:R0,useInsertionEffect:A0,useLayoutEffect:b0,useMemo:D0,useReducer:id,useRef:T0,useState:function(){return id(La)},useDebugValue:od,useDeferredValue:function(r){var s=fi();return N0(s,un.memoizedState,r)},useTransition:function(){var r=id(La)[0],s=fi().memoizedState;return[r,s]},useMutableSource:g0,useSyncExternalStore:v0,useId:L0,unstable_isNewReconciler:!1},zT={readContext:ui,useCallback:P0,useContext:ui,useEffect:sd,useImperativeHandle:R0,useInsertionEffect:A0,useLayoutEffect:b0,useMemo:D0,useReducer:rd,useRef:T0,useState:function(){return rd(La)},useDebugValue:od,useDeferredValue:function(r){var s=fi();return un===null?s.memoizedState=r:N0(s,un.memoizedState,r)},useTransition:function(){var r=rd(La)[0],s=fi().memoizedState;return[r,s]},useMutableSource:g0,useSyncExternalStore:v0,useId:L0,unstable_isNewReconciler:!1};function Mi(r,s){if(r&&r.defaultProps){s=ce({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function ad(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:ce({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var rc={isMounted:function(r){return(r=r._reactInternals)?In(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=Un(),v=jr(r),x=fr(f,v);x.payload=s,l!=null&&(x.callback=l),s=Hr(r,x,v),s!==null&&(Ai(s,r,v,f),Kl(s,r,v))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=Un(),v=jr(r),x=fr(f,v);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Hr(r,x,v),s!==null&&(Ai(s,r,v,f),Kl(s,r,v))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Un(),f=jr(r),v=fr(l,f);v.tag=2,s!=null&&(v.callback=s),s=Hr(r,v,f),s!==null&&(Ai(s,r,f,l),Kl(s,r,f))}};function O0(r,s,l,f,v,x,C){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,x,C):s.prototype&&s.prototype.isPureReactComponent?!ya(l,f)||!ya(v,x):!0}function k0(r,s,l){var f=!1,v=Br,x=s.contextType;return typeof x=="object"&&x!==null?x=ui(x):(v=Xn(s)?_s:bn.current,f=s.contextTypes,x=(f=f!=null)?uo(r,v):Br),s=new s(l,x),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=rc,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=x),s}function B0(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&rc.enqueueReplaceState(s,s.state,null)}function ld(r,s,l,f){var v=r.stateNode;v.props=l,v.state=r.memoizedState,v.refs={},$f(r);var x=s.contextType;typeof x=="object"&&x!==null?v.context=ui(x):(x=Xn(s)?_s:bn.current,v.context=uo(r,x)),v.state=r.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(ad(r,s,x,l),v.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&rc.enqueueReplaceState(v,v.state,null),Zl(r,l,v,f),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function _o(r,s){try{var l="",f=s;do l+=Be(f),f=f.return;while(f);var v=l}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:s,stack:v,digest:null}}function cd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function ud(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var HT=typeof WeakMap=="function"?WeakMap:Map;function V0(r,s,l){l=fr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){fc||(fc=!0,wd=f),ud(r,s)},l}function z0(r,s,l){l=fr(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var v=s.value;l.payload=function(){return f(v)},l.callback=function(){ud(r,s)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){ud(r,s),typeof f!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var C=s.stack;this.componentDidCatch(s.value,{componentStack:C!==null?C:""})}),l}function H0(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new HT;var v=new Set;f.set(s,v)}else v=f.get(s),v===void 0&&(v=new Set,f.set(s,v));v.has(l)||(v.add(l),r=nw.bind(null,r,s,l),s.then(r,r))}function G0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function W0(r,s,l,f,v){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=fr(-1,1),s.tag=2,Hr(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=v,r)}var GT=b.ReactCurrentOwner,jn=!1;function Fn(r,s,l,f){s.child=r===null?u0(s,null,l,f):mo(s,r.child,l,f)}function X0(r,s,l,f,v){l=l.render;var x=s.ref;return vo(s,v),f=td(r,s,l,f,x,v),l=nd(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~v,dr(r,s,v)):(qt&&l&&kf(s),s.flags|=1,Fn(r,s,f,v),s.child)}function j0(r,s,l,f,v){if(r===null){var x=l.type;return typeof x=="function"&&!Nd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,Y0(r,s,x,f,v)):(r=vc(l.type,null,f,s,s.mode,v),r.ref=s.ref,r.return=s,s.child=r)}if(x=r.child,(r.lanes&v)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:ya,l(C,f)&&r.ref===s.ref)return dr(r,s,v)}return s.flags|=1,r=$r(x,f),r.ref=s.ref,r.return=s,s.child=r}function Y0(r,s,l,f,v){if(r!==null){var x=r.memoizedProps;if(ya(x,f)&&r.ref===s.ref)if(jn=!1,s.pendingProps=f=x,(r.lanes&v)!==0)(r.flags&131072)!==0&&(jn=!0);else return s.lanes=r.lanes,dr(r,s,v)}return fd(r,s,l,f,v)}function $0(r,s,l){var f=s.pendingProps,v=f.children,x=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(So,ii),ii|=l;else{if((l&1073741824)===0)return r=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,zt(So,ii),ii|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,zt(So,ii),ii|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,zt(So,ii),ii|=f;return Fn(r,s,v,l),s.child}function q0(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function fd(r,s,l,f,v){var x=Xn(l)?_s:bn.current;return x=uo(s,x),vo(s,v),l=td(r,s,l,f,x,v),f=nd(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~v,dr(r,s,v)):(qt&&f&&kf(s),s.flags|=1,Fn(r,s,l,v),s.child)}function K0(r,s,l,f,v){if(Xn(l)){var x=!0;Hl(s)}else x=!1;if(vo(s,v),s.stateNode===null)oc(r,s),k0(s,l,f),ld(s,l,f,v),f=!0;else if(r===null){var C=s.stateNode,B=s.memoizedProps;C.props=B;var H=C.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=ui(fe):(fe=Xn(l)?_s:bn.current,fe=uo(s,fe));var Ee=l.getDerivedStateFromProps,Me=typeof Ee=="function"||typeof C.getSnapshotBeforeUpdate=="function";Me||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==f||H!==fe)&&B0(s,C,f,fe),zr=!1;var Se=s.memoizedState;C.state=Se,Zl(s,f,C,v),H=s.memoizedState,B!==f||Se!==H||Wn.current||zr?(typeof Ee=="function"&&(ad(s,l,Ee,f),H=s.memoizedState),(B=zr||O0(s,l,B,f,Se,H,fe))?(Me||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(s.flags|=4194308)):(typeof C.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=H),C.props=f,C.state=H,C.context=fe,f=B):(typeof C.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{C=s.stateNode,d0(r,s),B=s.memoizedProps,fe=s.type===s.elementType?B:Mi(s.type,B),C.props=fe,Me=s.pendingProps,Se=C.context,H=l.contextType,typeof H=="object"&&H!==null?H=ui(H):(H=Xn(l)?_s:bn.current,H=uo(s,H));var ze=l.getDerivedStateFromProps;(Ee=typeof ze=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==Me||Se!==H)&&B0(s,C,f,H),zr=!1,Se=s.memoizedState,C.state=Se,Zl(s,f,C,v);var $e=s.memoizedState;B!==Me||Se!==$e||Wn.current||zr?(typeof ze=="function"&&(ad(s,l,ze,f),$e=s.memoizedState),(fe=zr||O0(s,l,fe,f,Se,$e,H)||!1)?(Ee||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(f,$e,H),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(f,$e,H)),typeof C.componentDidUpdate=="function"&&(s.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof C.componentDidUpdate!="function"||B===r.memoizedProps&&Se===r.memoizedState||(s.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&Se===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=$e),C.props=f,C.state=$e,C.context=H,f=fe):(typeof C.componentDidUpdate!="function"||B===r.memoizedProps&&Se===r.memoizedState||(s.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===r.memoizedProps&&Se===r.memoizedState||(s.flags|=1024),f=!1)}return dd(r,s,l,f,x,v)}function dd(r,s,l,f,v,x){q0(r,s);var C=(s.flags&128)!==0;if(!f&&!C)return v&&t0(s,l,!1),dr(r,s,x);f=s.stateNode,GT.current=s;var B=C&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&C?(s.child=mo(s,r.child,null,x),s.child=mo(s,null,B,x)):Fn(r,s,B,x),s.memoizedState=f.state,v&&t0(s,l,!0),s.child}function Z0(r){var s=r.stateNode;s.pendingContext?Jg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Jg(r,s.context,!1),qf(r,s.containerInfo)}function Q0(r,s,l,f,v){return po(),Hf(v),s.flags|=256,Fn(r,s,l,f),s.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function pd(r){return{baseLanes:r,cachePool:null,transitions:null}}function J0(r,s,l){var f=s.pendingProps,v=Zt.current,x=!1,C=(s.flags&128)!==0,B;if((B=C)||(B=r!==null&&r.memoizedState===null?!1:(v&2)!==0),B?(x=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),zt(Zt,v&1),r===null)return zf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(C=f.children,r=f.fallback,x?(f=s.mode,x=s.child,C={mode:"hidden",children:C},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=xc(C,f,0,null),r=Rs(r,f,l,null),x.return=s,r.return=s,x.sibling=r,s.child=x,s.child.memoizedState=pd(l),s.memoizedState=hd,r):md(s,C));if(v=r.memoizedState,v!==null&&(B=v.dehydrated,B!==null))return WT(r,s,C,f,B,v,l);if(x){x=f.fallback,C=s.mode,v=r.child,B=v.sibling;var H={mode:"hidden",children:f.children};return(C&1)===0&&s.child!==v?(f=s.child,f.childLanes=0,f.pendingProps=H,s.deletions=null):(f=$r(v,H),f.subtreeFlags=v.subtreeFlags&14680064),B!==null?x=$r(B,x):(x=Rs(x,C,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,C=r.child.memoizedState,C=C===null?pd(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=r.childLanes&~l,s.memoizedState=hd,f}return x=r.child,r=x.sibling,f=$r(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function md(r,s){return s=xc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function sc(r,s,l,f){return f!==null&&Hf(f),mo(s,r.child,null,l),r=md(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function WT(r,s,l,f,v,x,C){if(l)return s.flags&256?(s.flags&=-257,f=cd(Error(t(422))),sc(r,s,C,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(x=f.fallback,v=s.mode,f=xc({mode:"visible",children:f.children},v,0,null),x=Rs(x,v,C,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&mo(s,r.child,null,C),s.child.memoizedState=pd(C),s.memoizedState=hd,x);if((s.mode&1)===0)return sc(r,s,C,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var B=f.dgst;return f=B,x=Error(t(419)),f=cd(x,f,void 0),sc(r,s,C,f)}if(B=(C&r.childLanes)!==0,jn||B){if(f=vn,f!==null){switch(C&-C){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|C))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,ur(r,v),Ai(f,r,v,-1))}return Dd(),f=cd(Error(t(421))),sc(r,s,C,f)}return v.data==="$?"?(s.flags|=128,s.child=r.child,s=iw.bind(null,r),v._reactRetry=s,null):(r=x.treeContext,ni=Or(v.nextSibling),ti=s,qt=!0,Ei=null,r!==null&&(li[ci++]=lr,li[ci++]=cr,li[ci++]=ys,lr=r.id,cr=r.overflow,ys=s),s=md(s,f.children),s.flags|=4096,s)}function ev(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),jf(r.return,s,l)}function gd(r,s,l,f,v){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:v}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=v)}function tv(r,s,l){var f=s.pendingProps,v=f.revealOrder,x=f.tail;if(Fn(r,s,f.children,l),f=Zt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ev(r,l,s);else if(r.tag===19)ev(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(zt(Zt,f),(s.mode&1)===0)s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)r=l.alternate,r!==null&&Ql(r)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),gd(s,!1,v,l,x);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(r=v.alternate,r!==null&&Ql(r)===null){s.child=v;break}r=v.sibling,v.sibling=l,l=v,v=r}gd(s,!0,l,null,x);break;case"together":gd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function oc(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function dr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ws|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=$r(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=$r(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function XT(r,s,l){switch(s.tag){case 3:Z0(s),po();break;case 5:m0(s);break;case 1:Xn(s.type)&&Hl(s);break;case 4:qf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,v=s.memoizedProps.value;zt($l,f._currentValue),f._currentValue=v;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(zt(Zt,Zt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?J0(r,s,l):(zt(Zt,Zt.current&1),r=dr(r,s,l),r!==null?r.sibling:null);zt(Zt,Zt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(r.flags&128)!==0){if(f)return tv(r,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),zt(Zt,Zt.current),f)break;return null;case 22:case 23:return s.lanes=0,$0(r,s,l)}return dr(r,s,l)}var nv,vd,iv,rv;nv=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},vd=function(){},iv=function(r,s,l,f){var v=r.memoizedProps;if(v!==f){r=s.stateNode,Ms(Hi.current);var x=null;switch(l){case"input":v=Ce(r,v),f=Ce(r,f),x=[];break;case"select":v=ce({},v,{value:void 0}),f=ce({},f,{value:void 0}),x=[];break;case"textarea":v=Yt(r,v),f=Yt(r,f),x=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Bl)}Je(l,f);var C;l=null;for(fe in v)if(!f.hasOwnProperty(fe)&&v.hasOwnProperty(fe)&&v[fe]!=null)if(fe==="style"){var B=v[fe];for(C in B)B.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?x||(x=[]):(x=x||[]).push(fe,null));for(fe in f){var H=f[fe];if(B=v!=null?v[fe]:void 0,f.hasOwnProperty(fe)&&H!==B&&(H!=null||B!=null))if(fe==="style")if(B){for(C in B)!B.hasOwnProperty(C)||H&&H.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in H)H.hasOwnProperty(C)&&B[C]!==H[C]&&(l||(l={}),l[C]=H[C])}else l||(x||(x=[]),x.push(fe,l)),l=H;else fe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,B=B?B.__html:void 0,H!=null&&B!==H&&(x=x||[]).push(fe,H)):fe==="children"?typeof H!="string"&&typeof H!="number"||(x=x||[]).push(fe,""+H):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(H!=null&&fe==="onScroll"&&Wt("scroll",r),x||B===H||(x=[])):(x=x||[]).push(fe,H))}l&&(x=x||[]).push("style",l);var fe=x;(s.updateQueue=fe)&&(s.flags|=4)}},rv=function(r,s,l,f){l!==f&&(s.flags|=4)};function Fa(r,s){if(!qt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Rn(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function jT(r,s,l){var f=s.pendingProps;switch(Bf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return Xn(s.type)&&zl(),Rn(s),null;case 3:return f=s.stateNode,xo(),Xt(Wn),Xt(bn),Qf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(jl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ei!==null&&(Cd(Ei),Ei=null))),vd(r,s),Rn(s),null;case 5:Kf(s);var v=Ms(Pa.current);if(l=s.type,r!==null&&s.stateNode!=null)iv(r,s,l,f,v),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(r=Ms(Hi.current),jl(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[zi]=s,f[wa]=x,r=(s.mode&1)!==0,l){case"dialog":Wt("cancel",f),Wt("close",f);break;case"iframe":case"object":case"embed":Wt("load",f);break;case"video":case"audio":for(v=0;v<Ea.length;v++)Wt(Ea[v],f);break;case"source":Wt("error",f);break;case"img":case"image":case"link":Wt("error",f),Wt("load",f);break;case"details":Wt("toggle",f);break;case"input":rt(f,x),Wt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Wt("invalid",f);break;case"textarea":$(f,x),Wt("invalid",f)}Je(l,x),v=null;for(var C in x)if(x.hasOwnProperty(C)){var B=x[C];C==="children"?typeof B=="string"?f.textContent!==B&&(x.suppressHydrationWarning!==!0&&kl(f.textContent,B,r),v=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(x.suppressHydrationWarning!==!0&&kl(f.textContent,B,r),v=["children",""+B]):o.hasOwnProperty(C)&&B!=null&&C==="onScroll"&&Wt("scroll",f)}switch(l){case"input":je(f),Ht(f,x,!0);break;case"textarea":je(f),Tt(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Bl)}f=v,s.updateQueue=f,f!==null&&(s.flags|=4)}else{C=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=U(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=C.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=C.createElement(l,{is:f.is}):(r=C.createElement(l),l==="select"&&(C=r,f.multiple?C.multiple=!0:f.size&&(C.size=f.size))):r=C.createElementNS(r,l),r[zi]=s,r[wa]=f,nv(r,s,!1,!1),s.stateNode=r;e:{switch(C=Ie(l,f),l){case"dialog":Wt("cancel",r),Wt("close",r),v=f;break;case"iframe":case"object":case"embed":Wt("load",r),v=f;break;case"video":case"audio":for(v=0;v<Ea.length;v++)Wt(Ea[v],r);v=f;break;case"source":Wt("error",r),v=f;break;case"img":case"image":case"link":Wt("error",r),Wt("load",r),v=f;break;case"details":Wt("toggle",r),v=f;break;case"input":rt(r,f),v=Ce(r,f),Wt("invalid",r);break;case"option":v=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},v=ce({},f,{value:void 0}),Wt("invalid",r);break;case"textarea":$(r,f),v=Yt(r,f),Wt("invalid",r);break;default:v=f}Je(l,v),B=v;for(x in B)if(B.hasOwnProperty(x)){var H=B[x];x==="style"?_e(r,H):x==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&oe(r,H)):x==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&he(r,H):typeof H=="number"&&he(r,""+H):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?H!=null&&x==="onScroll"&&Wt("scroll",r):H!=null&&D(r,x,H,C))}switch(l){case"input":je(r),Ht(r,f,!1);break;case"textarea":je(r),Tt(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ve(f.value));break;case"select":r.multiple=!!f.multiple,x=f.value,x!=null?Nt(r,!!f.multiple,x,!1):f.defaultValue!=null&&Nt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=Bl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(r&&s.stateNode!=null)rv(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Ms(Pa.current),Ms(Hi.current),jl(s)){if(f=s.stateNode,l=s.memoizedProps,f[zi]=s,(x=f.nodeValue!==l)&&(r=ti,r!==null))switch(r.tag){case 3:kl(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&kl(f.nodeValue,l,(r.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[zi]=s,s.stateNode=f}return Rn(s),null;case 13:if(Xt(Zt),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(qt&&ni!==null&&(s.mode&1)!==0&&(s.flags&128)===0)a0(),po(),s.flags|=98560,x=!1;else if(x=jl(s),f!==null&&f.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[zi]=s}else po(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),x=!1}else Ei!==null&&(Cd(Ei),Ei=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Zt.current&1)!==0?fn===0&&(fn=3):Dd())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return xo(),vd(r,s),r===null&&Ma(s.stateNode.containerInfo),Rn(s),null;case 10:return Xf(s.type._context),Rn(s),null;case 17:return Xn(s.type)&&zl(),Rn(s),null;case 19:if(Xt(Zt),x=s.memoizedState,x===null)return Rn(s),null;if(f=(s.flags&128)!==0,C=x.rendering,C===null)if(f)Fa(x,!1);else{if(fn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(C=Ql(r),C!==null){for(s.flags|=128,Fa(x,!1),f=C.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,r=f,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,r=C.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return zt(Zt,Zt.current&1|2),s.child}r=r.sibling}x.tail!==null&&Kt()>Eo&&(s.flags|=128,f=!0,Fa(x,!1),s.lanes=4194304)}else{if(!f)if(r=Ql(C),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Fa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!qt)return Rn(s),null}else 2*Kt()-x.renderingStartTime>Eo&&l!==1073741824&&(s.flags|=128,f=!0,Fa(x,!1),s.lanes=4194304);x.isBackwards?(C.sibling=s.child,s.child=C):(l=x.last,l!==null?l.sibling=C:s.child=C,x.last=C)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=Kt(),s.sibling=null,l=Zt.current,zt(Zt,f?l&1|2:l&1),s):(Rn(s),null);case 22:case 23:return Pd(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ii&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function YT(r,s){switch(Bf(s),s.tag){case 1:return Xn(s.type)&&zl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return xo(),Xt(Wn),Xt(bn),Qf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Kf(s),null;case 13:if(Xt(Zt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));po()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xt(Zt),null;case 4:return xo(),null;case 10:return Xf(s.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var ac=!1,Pn=!1,$T=typeof WeakSet=="function"?WeakSet:Set,We=null;function yo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Jt(r,s,f)}else l.current=null}function xd(r,s,l){try{l()}catch(f){Jt(r,s,f)}}var sv=!1;function qT(r,s){if(Pf=bl,r=Og(),Ef(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var v=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var C=0,B=-1,H=-1,fe=0,Ee=0,Me=r,Se=null;t:for(;;){for(var ze;Me!==l||v!==0&&Me.nodeType!==3||(B=C+v),Me!==x||f!==0&&Me.nodeType!==3||(H=C+f),Me.nodeType===3&&(C+=Me.nodeValue.length),(ze=Me.firstChild)!==null;)Se=Me,Me=ze;for(;;){if(Me===r)break t;if(Se===l&&++fe===v&&(B=C),Se===x&&++Ee===f&&(H=C),(ze=Me.nextSibling)!==null)break;Me=Se,Se=Me.parentNode}Me=ze}l=B===-1||H===-1?null:{start:B,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(Df={focusedElem:r,selectionRange:l},bl=!1,We=s;We!==null;)if(s=We,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,We=r;else for(;We!==null;){s=We;try{var $e=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,nn=$e.memoizedState,ee=s.stateNode,Y=ee.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:Mi(s.type,Qe),nn);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Jt(s,s.return,we)}if(r=s.sibling,r!==null){r.return=s.return,We=r;break}We=s.return}return $e=sv,sv=!1,$e}function Ua(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&r)===r){var x=v.destroy;v.destroy=void 0,x!==void 0&&xd(s,l,x)}v=v.next}while(v!==f)}}function lc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function _d(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function ov(r){var s=r.alternate;s!==null&&(r.alternate=null,ov(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[zi],delete s[wa],delete s[Ff],delete s[DT],delete s[NT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function av(r){return r.tag===5||r.tag===3||r.tag===4}function lv(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||av(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function yd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Bl));else if(f!==4&&(r=r.child,r!==null))for(yd(r,s,l),r=r.sibling;r!==null;)yd(r,s,l),r=r.sibling}function Sd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(Sd(r,s,l),r=r.sibling;r!==null;)Sd(r,s,l),r=r.sibling}var En=null,Ti=!1;function Gr(r,s,l){for(l=l.child;l!==null;)cv(r,s,l),l=l.sibling}function cv(r,s,l){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:Pn||yo(l,s);case 6:var f=En,v=Ti;En=null,Gr(r,s,l),En=f,Ti=v,En!==null&&(Ti?(r=En,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):En.removeChild(l.stateNode));break;case 18:En!==null&&(Ti?(r=En,l=l.stateNode,r.nodeType===8?If(r.parentNode,l):r.nodeType===1&&If(r,l),pa(r)):If(En,l.stateNode));break;case 4:f=En,v=Ti,En=l.stateNode.containerInfo,Ti=!0,Gr(r,s,l),En=f,Ti=v;break;case 0:case 11:case 14:case 15:if(!Pn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var x=v,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&xd(l,s,C),v=v.next}while(v!==f)}Gr(r,s,l);break;case 1:if(!Pn&&(yo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){Jt(l,s,B)}Gr(r,s,l);break;case 21:Gr(r,s,l);break;case 22:l.mode&1?(Pn=(f=Pn)||l.memoizedState!==null,Gr(r,s,l),Pn=f):Gr(r,s,l);break;default:Gr(r,s,l)}}function uv(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new $T),s.forEach(function(f){var v=rw.bind(null,r,f);l.has(f)||(l.add(f),f.then(v,v))})}}function wi(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var v=l[f];try{var x=r,C=s,B=C;e:for(;B!==null;){switch(B.tag){case 5:En=B.stateNode,Ti=!1;break e;case 3:En=B.stateNode.containerInfo,Ti=!0;break e;case 4:En=B.stateNode.containerInfo,Ti=!0;break e}B=B.return}if(En===null)throw Error(t(160));cv(x,C,v),En=null,Ti=!1;var H=v.alternate;H!==null&&(H.return=null),v.return=null}catch(fe){Jt(v,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)fv(s,r),s=s.sibling}function fv(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(wi(s,r),Wi(r),f&4){try{Ua(3,r,r.return),lc(3,r)}catch(Qe){Jt(r,r.return,Qe)}try{Ua(5,r,r.return)}catch(Qe){Jt(r,r.return,Qe)}}break;case 1:wi(s,r),Wi(r),f&512&&l!==null&&yo(l,l.return);break;case 5:if(wi(s,r),Wi(r),f&512&&l!==null&&yo(l,l.return),r.flags&32){var v=r.stateNode;try{he(v,"")}catch(Qe){Jt(r,r.return,Qe)}}if(f&4&&(v=r.stateNode,v!=null)){var x=r.memoizedProps,C=l!==null?l.memoizedProps:x,B=r.type,H=r.updateQueue;if(r.updateQueue=null,H!==null)try{B==="input"&&x.type==="radio"&&x.name!=null&&ft(v,x),Ie(B,C);var fe=Ie(B,x);for(C=0;C<H.length;C+=2){var Ee=H[C],Me=H[C+1];Ee==="style"?_e(v,Me):Ee==="dangerouslySetInnerHTML"?oe(v,Me):Ee==="children"?he(v,Me):D(v,Ee,Me,fe)}switch(B){case"input":Dt(v,x);break;case"textarea":yn(v,x);break;case"select":var Se=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var ze=x.value;ze!=null?Nt(v,!!x.multiple,ze,!1):Se!==!!x.multiple&&(x.defaultValue!=null?Nt(v,!!x.multiple,x.defaultValue,!0):Nt(v,!!x.multiple,x.multiple?[]:"",!1))}v[wa]=x}catch(Qe){Jt(r,r.return,Qe)}}break;case 6:if(wi(s,r),Wi(r),f&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,x=r.memoizedProps;try{v.nodeValue=x}catch(Qe){Jt(r,r.return,Qe)}}break;case 3:if(wi(s,r),Wi(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{pa(s.containerInfo)}catch(Qe){Jt(r,r.return,Qe)}break;case 4:wi(s,r),Wi(r);break;case 13:wi(s,r),Wi(r),v=r.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(Td=Kt())),f&4&&uv(r);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,r.mode&1?(Pn=(fe=Pn)||Ee,wi(s,r),Pn=fe):wi(s,r),Wi(r),f&8192){if(fe=r.memoizedState!==null,(r.stateNode.isHidden=fe)&&!Ee&&(r.mode&1)!==0)for(We=r,Ee=r.child;Ee!==null;){for(Me=We=Ee;We!==null;){switch(Se=We,ze=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ua(4,Se,Se.return);break;case 1:yo(Se,Se.return);var $e=Se.stateNode;if(typeof $e.componentWillUnmount=="function"){f=Se,l=Se.return;try{s=f,$e.props=s.memoizedProps,$e.state=s.memoizedState,$e.componentWillUnmount()}catch(Qe){Jt(f,l,Qe)}}break;case 5:yo(Se,Se.return);break;case 22:if(Se.memoizedState!==null){pv(Me);continue}}ze!==null?(ze.return=Se,We=ze):pv(Me)}Ee=Ee.sibling}e:for(Ee=null,Me=r;;){if(Me.tag===5){if(Ee===null){Ee=Me;try{v=Me.stateNode,fe?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(B=Me.stateNode,H=Me.memoizedProps.style,C=H!=null&&H.hasOwnProperty("display")?H.display:null,B.style.display=pe("display",C))}catch(Qe){Jt(r,r.return,Qe)}}}else if(Me.tag===6){if(Ee===null)try{Me.stateNode.nodeValue=fe?"":Me.memoizedProps}catch(Qe){Jt(r,r.return,Qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===r)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===r)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===r)break e;Ee===Me&&(Ee=null),Me=Me.return}Ee===Me&&(Ee=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:wi(s,r),Wi(r),f&4&&uv(r);break;case 21:break;default:wi(s,r),Wi(r)}}function Wi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(av(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(he(v,""),f.flags&=-33);var x=lv(r);Sd(r,x,v);break;case 3:case 4:var C=f.stateNode.containerInfo,B=lv(r);yd(r,B,C);break;default:throw Error(t(161))}}catch(H){Jt(r,r.return,H)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function KT(r,s,l){We=r,dv(r)}function dv(r,s,l){for(var f=(r.mode&1)!==0;We!==null;){var v=We,x=v.child;if(v.tag===22&&f){var C=v.memoizedState!==null||ac;if(!C){var B=v.alternate,H=B!==null&&B.memoizedState!==null||Pn;B=ac;var fe=Pn;if(ac=C,(Pn=H)&&!fe)for(We=v;We!==null;)C=We,H=C.child,C.tag===22&&C.memoizedState!==null?mv(v):H!==null?(H.return=C,We=H):mv(v);for(;x!==null;)We=x,dv(x),x=x.sibling;We=v,ac=B,Pn=fe}hv(r)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,We=x):hv(r)}}function hv(r){for(;We!==null;){var s=We;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Pn||lc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Pn)if(l===null)f.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:Mi(s.type,l.memoizedProps);f.componentDidUpdate(v,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&p0(s,x,f);break;case 3:var C=s.updateQueue;if(C!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}p0(s,C,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var Ee=fe.memoizedState;if(Ee!==null){var Me=Ee.dehydrated;Me!==null&&pa(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||s.flags&512&&_d(s)}catch(Se){Jt(s,s.return,Se)}}if(s===r){We=null;break}if(l=s.sibling,l!==null){l.return=s.return,We=l;break}We=s.return}}function pv(r){for(;We!==null;){var s=We;if(s===r){We=null;break}var l=s.sibling;if(l!==null){l.return=s.return,We=l;break}We=s.return}}function mv(r){for(;We!==null;){var s=We;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{lc(4,s)}catch(H){Jt(s,l,H)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var v=s.return;try{f.componentDidMount()}catch(H){Jt(s,v,H)}}var x=s.return;try{_d(s)}catch(H){Jt(s,x,H)}break;case 5:var C=s.return;try{_d(s)}catch(H){Jt(s,C,H)}}}catch(H){Jt(s,s.return,H)}if(s===r){We=null;break}var B=s.sibling;if(B!==null){B.return=s.return,We=B;break}We=s.return}}var ZT=Math.ceil,cc=b.ReactCurrentDispatcher,Ed=b.ReactCurrentOwner,di=b.ReactCurrentBatchConfig,Et=0,vn=null,on=null,Mn=0,ii=0,So=kr(0),fn=0,Oa=null,ws=0,uc=0,Md=0,ka=null,Yn=null,Td=0,Eo=1/0,hr=null,fc=!1,wd=null,Wr=null,dc=!1,Xr=null,hc=0,Ba=0,Ad=null,pc=-1,mc=0;function Un(){return(Et&6)!==0?Kt():pc!==-1?pc:pc=Kt()}function jr(r){return(r.mode&1)===0?1:(Et&2)!==0&&Mn!==0?Mn&-Mn:IT.transition!==null?(mc===0&&(mc=Ve()),mc):(r=vt,r!==0||(r=window.event,r=r===void 0?16:vg(r.type)),r)}function Ai(r,s,l,f){if(50<Ba)throw Ba=0,Ad=null,Error(t(185));gt(r,l,f),((Et&2)===0||r!==vn)&&(r===vn&&((Et&2)===0&&(uc|=l),fn===4&&Yr(r,Mn)),$n(r,f),l===1&&Et===0&&(s.mode&1)===0&&(Eo=Kt()+500,Gl&&Vr()))}function $n(r,s){var l=r.callbackNode;Lt(r,s);var f=Vt(r,r===vn?Mn:0);if(f===0)l!==null&&la(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&la(l),s===1)r.tag===0?LT(vv.bind(null,r)):n0(vv.bind(null,r)),RT(function(){(Et&6)===0&&Vr()}),l=null;else{switch(sr(f)){case 1:l=ca;break;case 4:l=R;break;case 16:l=q;break;case 536870912:l=ie;break;default:l=q}l=wv(l,gv.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function gv(r,s){if(pc=-1,mc=0,(Et&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Mo()&&r.callbackNode!==l)return null;var f=Vt(r,r===vn?Mn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||s)s=gc(r,f);else{s=f;var v=Et;Et|=2;var x=_v();(vn!==r||Mn!==s)&&(hr=null,Eo=Kt()+500,bs(r,s));do try{ew();break}catch(B){xv(r,B)}while(!0);Wf(),cc.current=x,Et=v,on!==null?s=0:(vn=null,Mn=0,s=fn)}if(s!==0){if(s===2&&(v=sn(r),v!==0&&(f=v,s=bd(r,v))),s===1)throw l=Oa,bs(r,0),Yr(r,f),$n(r,Kt()),l;if(s===6)Yr(r,f);else{if(v=r.current.alternate,(f&30)===0&&!QT(v)&&(s=gc(r,f),s===2&&(x=sn(r),x!==0&&(f=x,s=bd(r,x))),s===1))throw l=Oa,bs(r,0),Yr(r,f),$n(r,Kt()),l;switch(r.finishedWork=v,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Cs(r,Yn,hr);break;case 3:if(Yr(r,f),(f&130023424)===f&&(s=Td+500-Kt(),10<s)){if(Vt(r,0)!==0)break;if(v=r.suspendedLanes,(v&f)!==f){Un(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=Lf(Cs.bind(null,r,Yn,hr),s);break}Cs(r,Yn,hr);break;case 4:if(Yr(r,f),(f&4194240)===f)break;for(s=r.eventTimes,v=-1;0<f;){var C=31-Ae(f);x=1<<C,C=s[C],C>v&&(v=C),f&=~x}if(f=v,f=Kt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*ZT(f/1960))-f,10<f){r.timeoutHandle=Lf(Cs.bind(null,r,Yn,hr),f);break}Cs(r,Yn,hr);break;case 5:Cs(r,Yn,hr);break;default:throw Error(t(329))}}}return $n(r,Kt()),r.callbackNode===l?gv.bind(null,r):null}function bd(r,s){var l=ka;return r.current.memoizedState.isDehydrated&&(bs(r,s).flags|=256),r=gc(r,s),r!==2&&(s=Yn,Yn=l,s!==null&&Cd(s)),r}function Cd(r){Yn===null?Yn=r:Yn.push.apply(Yn,r)}function QT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var v=l[f],x=v.getSnapshot;v=v.value;try{if(!Si(x(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Yr(r,s){for(s&=~Md,s&=~uc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Ae(s),f=1<<l;r[l]=-1,s&=~f}}function vv(r){if((Et&6)!==0)throw Error(t(327));Mo();var s=Vt(r,0);if((s&1)===0)return $n(r,Kt()),null;var l=gc(r,s);if(r.tag!==0&&l===2){var f=sn(r);f!==0&&(s=f,l=bd(r,f))}if(l===1)throw l=Oa,bs(r,0),Yr(r,s),$n(r,Kt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Cs(r,Yn,hr),$n(r,Kt()),null}function Rd(r,s){var l=Et;Et|=1;try{return r(s)}finally{Et=l,Et===0&&(Eo=Kt()+500,Gl&&Vr())}}function As(r){Xr!==null&&Xr.tag===0&&(Et&6)===0&&Mo();var s=Et;Et|=1;var l=di.transition,f=vt;try{if(di.transition=null,vt=1,r)return r()}finally{vt=f,di.transition=l,Et=s,(Et&6)===0&&Vr()}}function Pd(){ii=So.current,Xt(So)}function bs(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,CT(l)),on!==null)for(l=on.return;l!==null;){var f=l;switch(Bf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&zl();break;case 3:xo(),Xt(Wn),Xt(bn),Qf();break;case 5:Kf(f);break;case 4:xo();break;case 13:Xt(Zt);break;case 19:Xt(Zt);break;case 10:Xf(f.type._context);break;case 22:case 23:Pd()}l=l.return}if(vn=r,on=r=$r(r.current,null),Mn=ii=s,fn=0,Oa=null,Md=uc=ws=0,Yn=ka=null,Es!==null){for(s=0;s<Es.length;s++)if(l=Es[s],f=l.interleaved,f!==null){l.interleaved=null;var v=f.next,x=l.pending;if(x!==null){var C=x.next;x.next=v,f.next=C}l.pending=f}Es=null}return r}function xv(r,s){do{var l=on;try{if(Wf(),Jl.current=ic,ec){for(var f=Qt.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}ec=!1}if(Ts=0,gn=un=Qt=null,Da=!1,Na=0,Ed.current=null,l===null||l.return===null){fn=1,Oa=s,on=null;break}e:{var x=r,C=l.return,B=l,H=s;if(s=Mn,B.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var fe=H,Ee=B,Me=Ee.tag;if((Ee.mode&1)===0&&(Me===0||Me===11||Me===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var ze=G0(C);if(ze!==null){ze.flags&=-257,W0(ze,C,B,x,s),ze.mode&1&&H0(x,fe,s),s=ze,H=fe;var $e=s.updateQueue;if($e===null){var Qe=new Set;Qe.add(H),s.updateQueue=Qe}else $e.add(H);break e}else{if((s&1)===0){H0(x,fe,s),Dd();break e}H=Error(t(426))}}else if(qt&&B.mode&1){var nn=G0(C);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),W0(nn,C,B,x,s),Hf(_o(H,B));break e}}x=H=_o(H,B),fn!==4&&(fn=2),ka===null?ka=[x]:ka.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ee=V0(x,H,s);h0(x,ee);break e;case 1:B=H;var Y=x.type,se=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Wr===null||!Wr.has(se)))){x.flags|=65536,s&=-s,x.lanes|=s;var we=z0(x,B,s);h0(x,we);break e}}x=x.return}while(x!==null)}Sv(l)}catch(tt){s=tt,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function _v(){var r=cc.current;return cc.current=ic,r===null?ic:r}function Dd(){(fn===0||fn===3||fn===2)&&(fn=4),vn===null||(ws&268435455)===0&&(uc&268435455)===0||Yr(vn,Mn)}function gc(r,s){var l=Et;Et|=2;var f=_v();(vn!==r||Mn!==s)&&(hr=null,bs(r,s));do try{JT();break}catch(v){xv(r,v)}while(!0);if(Wf(),Et=l,cc.current=f,on!==null)throw Error(t(261));return vn=null,Mn=0,fn}function JT(){for(;on!==null;)yv(on)}function ew(){for(;on!==null&&!wl();)yv(on)}function yv(r){var s=Tv(r.alternate,r,ii);r.memoizedProps=r.pendingProps,s===null?Sv(r):on=s,Ed.current=null}function Sv(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=jT(l,s,ii),l!==null){on=l;return}}else{if(l=YT(l,s),l!==null){l.flags&=32767,on=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{fn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=r}while(s!==null);fn===0&&(fn=5)}function Cs(r,s,l){var f=vt,v=di.transition;try{di.transition=null,vt=1,tw(r,s,l,f)}finally{di.transition=v,vt=f}return null}function tw(r,s,l,f){do Mo();while(Xr!==null);if((Et&6)!==0)throw Error(t(327));l=r.finishedWork;var v=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=l.lanes|l.childLanes;if(Hn(r,x),r===vn&&(on=vn=null,Mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||dc||(dc=!0,wv(q,function(){return Mo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=di.transition,di.transition=null;var C=vt;vt=1;var B=Et;Et|=4,Ed.current=null,qT(r,l),fv(l,r),ST(Df),bl=!!Pf,Df=Pf=null,r.current=l,KT(l),cf(),Et=B,vt=C,di.transition=x}else r.current=l;if(dc&&(dc=!1,Xr=r,hc=v),x=r.pendingLanes,x===0&&(Wr=null),Ge(l.stateNode),$n(r,Kt()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)v=s[l],f(v.value,{componentStack:v.stack,digest:v.digest});if(fc)throw fc=!1,r=wd,wd=null,r;return(hc&1)!==0&&r.tag!==0&&Mo(),x=r.pendingLanes,(x&1)!==0?r===Ad?Ba++:(Ba=0,Ad=r):Ba=0,Vr(),null}function Mo(){if(Xr!==null){var r=sr(hc),s=di.transition,l=vt;try{if(di.transition=null,vt=16>r?16:r,Xr===null)var f=!1;else{if(r=Xr,Xr=null,hc=0,(Et&6)!==0)throw Error(t(331));var v=Et;for(Et|=4,We=r.current;We!==null;){var x=We,C=x.child;if((We.flags&16)!==0){var B=x.deletions;if(B!==null){for(var H=0;H<B.length;H++){var fe=B[H];for(We=fe;We!==null;){var Ee=We;switch(Ee.tag){case 0:case 11:case 15:Ua(8,Ee,x)}var Me=Ee.child;if(Me!==null)Me.return=Ee,We=Me;else for(;We!==null;){Ee=We;var Se=Ee.sibling,ze=Ee.return;if(ov(Ee),Ee===fe){We=null;break}if(Se!==null){Se.return=ze,We=Se;break}We=ze}}}var $e=x.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var nn=Qe.sibling;Qe.sibling=null,Qe=nn}while(Qe!==null)}}We=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,We=C;else e:for(;We!==null;){if(x=We,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Ua(9,x,x.return)}var ee=x.sibling;if(ee!==null){ee.return=x.return,We=ee;break e}We=x.return}}var Y=r.current;for(We=Y;We!==null;){C=We;var se=C.child;if((C.subtreeFlags&2064)!==0&&se!==null)se.return=C,We=se;else e:for(C=Y;We!==null;){if(B=We,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:lc(9,B)}}catch(tt){Jt(B,B.return,tt)}if(B===C){We=null;break e}var we=B.sibling;if(we!==null){we.return=B.return,We=we;break e}We=B.return}}if(Et=v,Vr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ne,r)}catch{}f=!0}return f}finally{vt=l,di.transition=s}}return!1}function Ev(r,s,l){s=_o(l,s),s=V0(r,s,1),r=Hr(r,s,1),s=Un(),r!==null&&(gt(r,1,s),$n(r,s))}function Jt(r,s,l){if(r.tag===3)Ev(r,r,l);else for(;s!==null;){if(s.tag===3){Ev(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Wr===null||!Wr.has(f))){r=_o(l,r),r=z0(s,r,1),s=Hr(s,r,1),r=Un(),s!==null&&(gt(s,1,r),$n(s,r));break}}s=s.return}}function nw(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=Un(),r.pingedLanes|=r.suspendedLanes&l,vn===r&&(Mn&l)===l&&(fn===4||fn===3&&(Mn&130023424)===Mn&&500>Kt()-Td?bs(r,0):Md|=l),$n(r,s)}function Mv(r,s){s===0&&((r.mode&1)===0?s=1:(s=et,et<<=1,(et&130023424)===0&&(et=4194304)));var l=Un();r=ur(r,s),r!==null&&(gt(r,s,l),$n(r,l))}function iw(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),Mv(r,l)}function rw(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,v=r.memoizedState;v!==null&&(l=v.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Mv(r,l)}var Tv;Tv=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Wn.current)jn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return jn=!1,XT(r,s,l);jn=(r.flags&131072)!==0}else jn=!1,qt&&(s.flags&1048576)!==0&&i0(s,Xl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;oc(r,s),r=s.pendingProps;var v=uo(s,bn.current);vo(s,l),v=td(null,s,f,r,v,l);var x=nd();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xn(f)?(x=!0,Hl(s)):x=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,$f(s),v.updater=rc,s.stateNode=v,v._reactInternals=s,ld(s,f,r,l),s=dd(null,s,f,!0,x,l)):(s.tag=0,qt&&x&&kf(s),Fn(null,s,v,l),s=s.child),s;case 16:f=s.elementType;e:{switch(oc(r,s),r=s.pendingProps,v=f._init,f=v(f._payload),s.type=f,v=s.tag=ow(f),r=Mi(f,r),v){case 0:s=fd(null,s,f,r,l);break e;case 1:s=K0(null,s,f,r,l);break e;case 11:s=X0(null,s,f,r,l);break e;case 14:s=j0(null,s,f,Mi(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Mi(f,v),fd(r,s,f,v,l);case 1:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Mi(f,v),K0(r,s,f,v,l);case 3:e:{if(Z0(s),r===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,v=x.element,d0(r,s),Zl(s,f,null,l);var C=s.memoizedState;if(f=C.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){v=_o(Error(t(423)),s),s=Q0(r,s,f,l,v);break e}else if(f!==v){v=_o(Error(t(424)),s),s=Q0(r,s,f,l,v);break e}else for(ni=Or(s.stateNode.containerInfo.firstChild),ti=s,qt=!0,Ei=null,l=u0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(po(),f===v){s=dr(r,s,l);break e}Fn(r,s,f,l)}s=s.child}return s;case 5:return m0(s),r===null&&zf(s),f=s.type,v=s.pendingProps,x=r!==null?r.memoizedProps:null,C=v.children,Nf(f,v)?C=null:x!==null&&Nf(f,x)&&(s.flags|=32),q0(r,s),Fn(r,s,C,l),s.child;case 6:return r===null&&zf(s),null;case 13:return J0(r,s,l);case 4:return qf(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=mo(s,null,f,l):Fn(r,s,f,l),s.child;case 11:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Mi(f,v),X0(r,s,f,v,l);case 7:return Fn(r,s,s.pendingProps,l),s.child;case 8:return Fn(r,s,s.pendingProps.children,l),s.child;case 12:return Fn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,v=s.pendingProps,x=s.memoizedProps,C=v.value,zt($l,f._currentValue),f._currentValue=C,x!==null)if(Si(x.value,C)){if(x.children===v.children&&!Wn.current){s=dr(r,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var B=x.dependencies;if(B!==null){C=x.child;for(var H=B.firstContext;H!==null;){if(H.context===f){if(x.tag===1){H=fr(-1,l&-l),H.tag=2;var fe=x.updateQueue;if(fe!==null){fe=fe.shared;var Ee=fe.pending;Ee===null?H.next=H:(H.next=Ee.next,Ee.next=H),fe.pending=H}}x.lanes|=l,H=x.alternate,H!==null&&(H.lanes|=l),jf(x.return,l,s),B.lanes|=l;break}H=H.next}}else if(x.tag===10)C=x.type===s.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,B=C.alternate,B!==null&&(B.lanes|=l),jf(C,l,s),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===s){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Fn(r,s,v.children,l),s=s.child}return s;case 9:return v=s.type,f=s.pendingProps.children,vo(s,l),v=ui(v),f=f(v),s.flags|=1,Fn(r,s,f,l),s.child;case 14:return f=s.type,v=Mi(f,s.pendingProps),v=Mi(f.type,v),j0(r,s,f,v,l);case 15:return Y0(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Mi(f,v),oc(r,s),s.tag=1,Xn(f)?(r=!0,Hl(s)):r=!1,vo(s,l),k0(s,f,v),ld(s,f,v,l),dd(null,s,f,!0,r,l);case 19:return tv(r,s,l);case 22:return $0(r,s,l)}throw Error(t(156,s.tag))};function wv(r,s){return gs(r,s)}function sw(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(r,s,l,f){return new sw(r,s,l,f)}function Nd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ow(r){if(typeof r=="function")return Nd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===X)return 11;if(r===j)return 14}return 2}function $r(r,s){var l=r.alternate;return l===null?(l=hi(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function vc(r,s,l,f,v,x){var C=2;if(f=r,typeof r=="function")Nd(r)&&(C=1);else if(typeof r=="string")C=5;else e:switch(r){case F:return Rs(l.children,v,x,s);case T:C=8,v|=8;break;case I:return r=hi(12,l,s,v|2),r.elementType=I,r.lanes=x,r;case de:return r=hi(13,l,s,v),r.elementType=de,r.lanes=x,r;case le:return r=hi(19,l,s,v),r.elementType=le,r.lanes=x,r;case Z:return xc(l,v,x,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case V:C=10;break e;case z:C=9;break e;case X:C=11;break e;case j:C=14;break e;case re:C=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=hi(C,l,s,v),s.elementType=r,s.type=f,s.lanes=x,s}function Rs(r,s,l,f){return r=hi(7,r,f,s),r.lanes=l,r}function xc(r,s,l,f){return r=hi(22,r,f,s),r.elementType=Z,r.lanes=l,r.stateNode={isHidden:!1},r}function Ld(r,s,l){return r=hi(6,r,null,s),r.lanes=l,r}function Id(r,s,l){return s=hi(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function aw(r,s,l,f,v){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Fd(r,s,l,f,v,x,C,B,H){return r=new aw(r,s,l,B,H),s===1?(s=1,x===!0&&(s|=8)):s=0,x=hi(3,null,null,s),r.current=x,x.stateNode=r,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(x),r}function lw(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function Av(r){if(!r)return Br;r=r._reactInternals;e:{if(In(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Xn(l))return e0(r,l,s)}return s}function bv(r,s,l,f,v,x,C,B,H){return r=Fd(l,f,!0,r,v,x,C,B,H),r.context=Av(null),l=r.current,f=Un(),v=jr(l),x=fr(f,v),x.callback=s??null,Hr(l,x,v),r.current.lanes=v,gt(r,v,f),$n(r,f),r}function _c(r,s,l,f){var v=s.current,x=Un(),C=jr(v);return l=Av(l),s.context===null?s.context=l:s.pendingContext=l,s=fr(x,C),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=Hr(v,s,C),r!==null&&(Ai(r,v,C,x),Kl(r,v,C)),C}function yc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Cv(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Ud(r,s){Cv(r,s),(r=r.alternate)&&Cv(r,s)}function cw(){return null}var Rv=typeof reportError=="function"?reportError:function(r){console.error(r)};function Od(r){this._internalRoot=r}Sc.prototype.render=Od.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));_c(r,s,null,null)},Sc.prototype.unmount=Od.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;As(function(){_c(null,r,null,null)}),s[or]=null}};function Sc(r){this._internalRoot=r}Sc.prototype.unstable_scheduleHydration=function(r){if(r){var s=It();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Ir.length&&s!==0&&s<Ir[l].priority;l++);Ir.splice(l,0,r),l===0&&mg(r)}};function kd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ec(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Pv(){}function uw(r,s,l,f,v){if(v){if(typeof f=="function"){var x=f;f=function(){var fe=yc(C);x.call(fe)}}var C=bv(s,f,r,0,null,!1,!1,"",Pv);return r._reactRootContainer=C,r[or]=C.current,Ma(r.nodeType===8?r.parentNode:r),As(),C}for(;v=r.lastChild;)r.removeChild(v);if(typeof f=="function"){var B=f;f=function(){var fe=yc(H);B.call(fe)}}var H=Fd(r,0,!1,null,null,!1,!1,"",Pv);return r._reactRootContainer=H,r[or]=H.current,Ma(r.nodeType===8?r.parentNode:r),As(function(){_c(s,H,l,f)}),H}function Mc(r,s,l,f,v){var x=l._reactRootContainer;if(x){var C=x;if(typeof v=="function"){var B=v;v=function(){var H=yc(C);B.call(H)}}_c(s,C,r,v)}else C=uw(l,s,r,v,f);return yc(C)}Pt=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=St(s.pendingLanes);l!==0&&(Gn(s,l|1),$n(s,Kt()),(Et&6)===0&&(Eo=Kt()+500,Vr()))}break;case 13:As(function(){var f=ur(r,1);if(f!==null){var v=Un();Ai(f,r,1,v)}}),Ud(r,1)}},Gt=function(r){if(r.tag===13){var s=ur(r,134217728);if(s!==null){var l=Un();Ai(s,r,134217728,l)}Ud(r,134217728)}},_i=function(r){if(r.tag===13){var s=jr(r),l=ur(r,s);if(l!==null){var f=Un();Ai(l,r,s,f)}Ud(r,s)}},It=function(){return vt},yi=function(r,s){var l=vt;try{return vt=r,s()}finally{vt=l}},st=function(r,s,l){switch(s){case"input":if(Dt(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var v=Vl(f);if(!v)throw Error(t(90));At(f),Dt(f,v)}}}break;case"textarea":yn(r,l);break;case"select":s=l.value,s!=null&&Nt(r,!!l.multiple,s,!1)}},Oe=Rd,ye=As;var fw={usingClientEntryPoint:!1,Events:[Aa,lo,Vl,xe,Ne,Rd]},Va={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dw={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ms(r),r===null?null:r.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{ne=Tc.inject(dw),be=Tc}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw,qn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(s))throw Error(t(200));return lw(r,s,null,l)},qn.createRoot=function(r,s){if(!kd(r))throw Error(t(299));var l=!1,f="",v=Rv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=Fd(r,1,!1,null,null,l,!1,f,v),r[or]=s.current,Ma(r.nodeType===8?r.parentNode:r),new Od(s)},qn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ms(s),r=r===null?null:r.stateNode,r},qn.flushSync=function(r){return As(r)},qn.hydrate=function(r,s,l){if(!Ec(s))throw Error(t(200));return Mc(null,r,s,!0,l)},qn.hydrateRoot=function(r,s,l){if(!kd(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,v=!1,x="",C=Rv;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),s=bv(s,null,r,1,l??null,v,!1,x,C),r[or]=s.current,Ma(r),f)for(r=0;r<f.length;r++)l=f[r],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new Sc(s)},qn.render=function(r,s,l){if(!Ec(s))throw Error(t(200));return Mc(null,r,s,!1,l)},qn.unmountComponentAtNode=function(r){if(!Ec(r))throw Error(t(40));return r._reactRootContainer?(As(function(){Mc(null,null,r,!1,function(){r._reactRootContainer=null,r[or]=null})}),!0):!1},qn.unstable_batchedUpdates=Rd,qn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!Ec(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Mc(r,s,l,!1,f)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var kv;function Ny(){if(kv)return zd.exports;kv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),zd.exports=yw(),zd.exports}var Bv;function Sw(){if(Bv)return wc;Bv=1;var n=Ny();return wc.createRoot=n.createRoot,wc.hydrateRoot=n.hydrateRoot,wc}var Ew=Sw(),O=ym();const Mw=Dy(O),Tw=pw({__proto__:null,default:Mw},[O]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Aw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),Vv=n=>{const e=Aw(n);return e.charAt(0).toUpperCase()+e.slice(1)},Ly=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=O.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...u},h)=>O.createElement("svg",{ref:h,...bw,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Ly("lucide",o),...u},[...c.map(([d,m])=>O.createElement(d,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=(n,e)=>{const t=O.forwardRef(({className:i,...o},a)=>O.createElement(Cw,{ref:a,iconNode:e,className:Ly(`lucide-${ww(Vv(n))}`,`lucide-${n}`,i),...o}));return t.displayName=Vv(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Au=Oi("arrow-up-right",Rw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Dw=Oi("chevron-left",Pw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Lw=Oi("chevron-right",Nw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Fw=Oi("download",Iw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Wd=Oi("github",Uw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],kw=Oi("linkedin",Ow);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Vw=Oi("mail",Bw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Xd=Oi("play",zw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Gw=Oi("refresh-cw",Hw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],zv=Oi("terminal",Ww);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hv=Oi("x",Xw),Sm=O.createContext({});function dl(n){const e=O.useRef(null);return e.current===null&&(e.current=n()),e.current}const jw=typeof window<"u",Yu=jw?O.useLayoutEffect:O.useEffect,$u=O.createContext(null);function Em(n,e){n.indexOf(e)===-1&&n.push(e)}function bu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const nr=(n,e,t)=>t>e?e:t<n?n:t;let qu=()=>{};const cs={},Iy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Fy=n=>typeof n=="object"&&n!==null,Uy=n=>/^0[^.\s]+$/u.test(n);function Oy(n){let e;return()=>(e===void 0&&(e=n()),e)}const xi=n=>n,hl=(...n)=>n.reduce((e,t)=>i=>t(e(i))),sl=(n,e,t)=>{const i=e-n;return i?(t-n)/i:1};class Mm{constructor(){this.subscriptions=[]}add(e){return Em(this.subscriptions,e),()=>bu(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const oi=n=>n*1e3,vi=n=>n/1e3,ky=(n,e)=>e?n*(1e3/e):0,By=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,Yw=1e-7,$w=12;function qw(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=By(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>Yw&&++u<$w);return c}function pl(n,e,t,i){if(n===e&&t===i)return xi;const o=a=>qw(a,0,1,n,t);return a=>a===0||a===1?a:By(o(a),e,i)}const Vy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,zy=n=>e=>1-n(1-e),Hy=pl(.33,1.53,.69,.99),Tm=zy(Hy),Gy=Vy(Tm),Wy=n=>n>=1?1:(n*=2)<1?.5*Tm(n):.5*(2-Math.pow(2,-10*(n-1))),wm=n=>1-Math.sin(Math.acos(n)),Xy=zy(wm),jy=Vy(wm),Kw=pl(.42,0,1,1),Zw=pl(0,0,.58,1),Yy=pl(.42,0,.58,1),Qw=n=>Array.isArray(n)&&typeof n[0]!="number",$y=n=>Array.isArray(n)&&typeof n[0]=="number",Jw={linear:xi,easeIn:Kw,easeInOut:Yy,easeOut:Zw,circIn:wm,circInOut:jy,circOut:Xy,backIn:Tm,backInOut:Gy,backOut:Hy,anticipate:Wy},e1=n=>typeof n=="string",Gv=n=>{if($y(n)){qu(n.length===4);const[e,t,i,o]=n;return pl(e,t,i,o)}else if(e1(n))return Jw[n];return n},Ac=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function t1(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(d){a.has(d)&&(h.schedule(d),n()),d(c)}const h={schedule:(d,m=!1,g=!1)=>{const y=g&&i?e:t;return m&&a.add(d),y.add(d),d},cancel:d=>{t.delete(d),a.delete(d)},process:d=>{if(c=d,i){o=!0;return}i=!0;const m=e;e=t,t=m,e.forEach(u),e.clear(),i=!1,o&&(o=!1,h.process(d))}};return h}const n1=40;function qy(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Ac.reduce((D,b)=>(D[b]=t1(a),D),{}),{setup:u,read:h,resolveKeyframes:d,preUpdate:m,update:g,preRender:p,render:y,postRender:E}=c,M=()=>{const D=cs.useManualTiming,b=D?o.timestamp:performance.now();t=!1,D||(o.delta=i?1e3/60:Math.max(Math.min(b-o.timestamp,n1),1)),o.timestamp=b,o.isProcessing=!0,u.process(o),h.process(o),d.process(o),m.process(o),g.process(o),p.process(o),y.process(o),E.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(M))},_=()=>{t=!0,i=!0,o.isProcessing||n(M)};return{schedule:Ac.reduce((D,b)=>{const N=c[b];return D[b]=(L,F=!1,T=!1)=>(t||_(),N.schedule(L,F,T)),D},{}),cancel:D=>{for(let b=0;b<Ac.length;b++)c[Ac[b]].cancel(D)},state:o,steps:c}}const{schedule:Ut,cancel:Ar,state:Tn,steps:jd}=qy(typeof requestAnimationFrame<"u"?requestAnimationFrame:xi,!0);let uu;function i1(){uu=void 0}const Bn={now:()=>(uu===void 0&&Bn.set(Tn.isProcessing||cs.useManualTiming?Tn.timestamp:performance.now()),uu),set:n=>{uu=n,queueMicrotask(i1)}},Ky=n=>e=>typeof e=="string"&&e.startsWith(n),Zy=Ky("--"),r1=Ky("var(--"),Am=n=>r1(n)?s1.test(n.split("/*")[0].trim()):!1,s1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Wv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const ta={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ol={...ta,transform:n=>nr(0,1,n)},bc={...ta,default:1},el=n=>Math.round(n*1e5)/1e5,bm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function o1(n){return n==null}const a1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cm=(n,e)=>t=>!!(typeof t=="string"&&a1.test(t)&&t.startsWith(n)||e&&!o1(t)&&Object.prototype.hasOwnProperty.call(t,e)),Qy=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(bm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},l1=n=>nr(0,255,n),Yd={...ta,transform:n=>Math.round(l1(n))},Bs={test:Cm("rgb","red"),parse:Qy("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Yd.transform(n)+", "+Yd.transform(e)+", "+Yd.transform(t)+", "+el(ol.transform(i))+")"};function c1(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Jh={test:Cm("#"),parse:c1,transform:Bs.transform},ml=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),_r=ml("deg"),Ji=ml("%"),qe=ml("px"),u1=ml("vh"),f1=ml("vw"),Xv={...Ji,parse:n=>Ji.parse(n)/100,transform:n=>Ji.transform(n*100)},Go={test:Cm("hsl","hue"),parse:Qy("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Ji.transform(el(e))+", "+Ji.transform(el(t))+", "+el(ol.transform(i))+")"},cn={test:n=>Bs.test(n)||Jh.test(n)||Go.test(n),parse:n=>Bs.test(n)?Bs.parse(n):Go.test(n)?Go.parse(n):Jh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Bs.transform(n):Go.transform(n),getAnimatableNone:n=>{const e=cn.parse(n);return e.alpha=0,cn.transform(e)}},d1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function h1(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(bm))==null?void 0:e.length)||0)+(((t=n.match(d1))==null?void 0:t.length)||0)>0}const Jy="number",eS="color",p1="var",m1="var(",jv="${}",g1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ko(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(g1,h=>(cn.test(h)?(i.color.push(a),o.push(eS),t.push(cn.parse(h))):h.startsWith(m1)?(i.var.push(a),o.push(p1),t.push(h)):(i.number.push(a),o.push(Jy),t.push(parseFloat(h))),++a,jv)).split(jv);return{values:t,split:u,indexes:i,types:o}}function v1(n){return Ko(n).values}function tS({split:n,types:e}){const t=n.length;return i=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],i[a]!==void 0){const c=e[a];c===Jy?o+=el(i[a]):c===eS?o+=cn.transform(i[a]):o+=i[a]}return o}}function x1(n){return tS(Ko(n))}const _1=n=>typeof n=="number"?0:cn.test(n)?cn.getAnimatableNone(n):n,y1=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:_1(n);function S1(n){const e=Ko(n);return tS(e)(e.values.map((i,o)=>y1(i,e.split[o])))}const Fi={test:h1,parse:v1,createTransformer:x1,getAnimatableNone:S1};function $d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function E1({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,h=2*t-u;o=$d(h,u,n+1/3),a=$d(h,u,n),c=$d(h,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function Cu(n,e){return t=>t>0?e:n}const kt=(n,e,t)=>n+(e-n)*t,qd=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},M1=[Jh,Bs,Go],T1=n=>M1.find(e=>e.test(n));function Yv(n){const e=T1(n);if(!e)return!1;let t=e.parse(n);return e===Go&&(t=E1(t)),t}const $v=(n,e)=>{const t=Yv(n),i=Yv(e);if(!t||!i)return Cu(n,e);const o={...t};return a=>(o.red=qd(t.red,i.red,a),o.green=qd(t.green,i.green,a),o.blue=qd(t.blue,i.blue,a),o.alpha=kt(t.alpha,i.alpha,a),Bs.transform(o))},ep=new Set(["none","hidden"]);function w1(n,e){return ep.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function A1(n,e){return t=>kt(n,e,t)}function Rm(n){return typeof n=="number"?A1:typeof n=="string"?Am(n)?Cu:cn.test(n)?$v:R1:Array.isArray(n)?nS:typeof n=="object"?cn.test(n)?$v:b1:Cu}function nS(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>Rm(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function b1(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Rm(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function C1(n,e){const t=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][i[a]],u=n.values[c]??0;t[o]=u,i[a]++}return t}const R1=(n,e)=>{const t=Fi.createTransformer(e),i=Ko(n),o=Ko(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?ep.has(n)&&!o.values.length||ep.has(e)&&!i.values.length?w1(n,e):hl(nS(C1(i,o),o.values),t):Cu(n,e)};function iS(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?kt(n,e,t):Rm(n)(n,e)}const P1=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ut.update(e,t),stop:()=>Ar(e),now:()=>Tn.isProcessing?Tn.timestamp:Bn.now()}},rS=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Ru=2e4;function Pm(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Ru;)e+=t,i=n.next(e);return e>=Ru?1/0:e}function D1(n,e=100,t){const i=t({...n,keyframes:[0,e]}),o=Math.min(Pm(i),Ru);return{type:"keyframes",ease:a=>i.next(o*a).value/e,duration:vi(o)}}const en={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function tp(n,e){return n*Math.sqrt(1-e*e)}const N1=12;function L1(n,e,t){let i=t;for(let o=1;o<N1;o++)i=i-n(i)/e(i);return i}const Kd=.001;function I1({duration:n=en.duration,bounce:e=en.bounce,velocity:t=en.velocity,mass:i=en.mass}){let o,a,c=1-e;c=nr(en.minDamping,en.maxDamping,c),n=nr(en.minDuration,en.maxDuration,vi(n)),c<1?(o=d=>{const m=d*c,g=m*n,p=m-t,y=tp(d,c),E=Math.exp(-g);return Kd-p/y*E},a=d=>{const g=d*c*n,p=g*t+t,y=Math.pow(c,2)*Math.pow(d,2)*n,E=Math.exp(-g),M=tp(Math.pow(d,2),c);return(-o(d)+Kd>0?-1:1)*((p-y)*E)/M}):(o=d=>{const m=Math.exp(-d*n),g=(d-t)*n+1;return-Kd+m*g},a=d=>{const m=Math.exp(-d*n),g=(t-d)*(n*n);return m*g});const u=5/n,h=L1(o,a,u);if(n=oi(n),isNaN(h))return{stiffness:en.stiffness,damping:en.damping,duration:n};{const d=Math.pow(h,2)*i;return{stiffness:d,damping:c*2*Math.sqrt(i*d),duration:n}}}const F1=["duration","bounce"],U1=["stiffness","damping","mass"];function qv(n,e){return e.some(t=>n[t]!==void 0)}function O1(n){let e={velocity:en.velocity,stiffness:en.stiffness,damping:en.damping,mass:en.mass,isResolvedFromDuration:!1,...n};if(!qv(n,U1)&&qv(n,F1))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*nr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:en.mass,stiffness:o,damping:a}}else{const t=I1({...n,velocity:0});e={...e,...t,mass:en.mass},e.isResolvedFromDuration=!0}return e}function Pu(n=en.visualDuration,e=en.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:h,damping:d,mass:m,duration:g,velocity:p,isResolvedFromDuration:y}=O1({...t,velocity:-vi(t.velocity||0)}),E=p||0,M=d/(2*Math.sqrt(h*m)),_=c-a,S=vi(Math.sqrt(h/m)),P=Math.abs(_)<5;i||(i=P?en.restSpeed.granular:en.restSpeed.default),o||(o=P?en.restDelta.granular:en.restDelta.default);let D,b,N,L,F,T;if(M<1)N=tp(S,M),L=(E+M*S*_)/N,D=V=>{const z=Math.exp(-M*S*V);return c-z*(L*Math.sin(N*V)+_*Math.cos(N*V))},F=M*S*L+_*N,T=M*S*_-L*N,b=V=>Math.exp(-M*S*V)*(F*Math.sin(N*V)+T*Math.cos(N*V));else if(M===1){D=z=>c-Math.exp(-S*z)*(_+(E+S*_)*z);const V=E+S*_;b=z=>Math.exp(-S*z)*(S*V*z-E)}else{const V=S*Math.sqrt(M*M-1);D=le=>{const j=Math.exp(-M*S*le),re=Math.min(V*le,300);return c-j*((E+M*S*_)*Math.sinh(re)+V*_*Math.cosh(re))/V};const z=(E+M*S*_)/V,X=M*S*z-_*V,de=M*S*_-z*V;b=le=>{const j=Math.exp(-M*S*le),re=Math.min(V*le,300);return j*(X*Math.sinh(re)+de*Math.cosh(re))}}const I={calculatedDuration:y&&g||null,velocity:V=>oi(b(V)),next:V=>{if(!y&&M<1){const X=Math.exp(-M*S*V),de=Math.sin(N*V),le=Math.cos(N*V),j=c-X*(L*de+_*le),re=oi(X*(F*de+T*le));return u.done=Math.abs(re)<=i&&Math.abs(c-j)<=o,u.value=u.done?c:j,u}const z=D(V);if(y)u.done=V>=g;else{const X=oi(b(V));u.done=Math.abs(X)<=i&&Math.abs(c-z)<=o}return u.value=u.done?c:z,u},toString:()=>{const V=Math.min(Pm(I),Ru),z=rS(X=>I.next(V*X).value,V,30);return V+"ms "+z},toTransition:()=>{}};return I}Pu.applyToOptions=n=>{const e=D1(n,100,Pu);return n.ease=e.ease,n.duration=oi(e.duration),n.type="keyframes",n};const k1=5;function sS(n,e,t){const i=Math.max(e-k1,0);return ky(t-n(i),e-i)}function np({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:h,restDelta:d=.5,restSpeed:m}){const g=n[0],p={done:!1,value:g},y=T=>u!==void 0&&T<u||h!==void 0&&T>h,E=T=>u===void 0?h:h===void 0||Math.abs(u-T)<Math.abs(h-T)?u:h;let M=t*e;const _=g+M,S=c===void 0?_:c(_);S!==_&&(M=S-g);const P=T=>-M*Math.exp(-T/i),D=T=>S+P(T),b=T=>{const I=P(T),V=D(T);p.done=Math.abs(I)<=d,p.value=p.done?S:V};let N,L;const F=T=>{y(p.value)&&(N=T,L=Pu({keyframes:[p.value,E(p.value)],velocity:sS(D,T,p.value),damping:o,stiffness:a,restDelta:d,restSpeed:m}))};return F(0),{calculatedDuration:null,next:T=>{let I=!1;return!L&&N===void 0&&(I=!0,b(T),F(T)),N!==void 0&&T>=N?L.next(T-N):(!I&&b(T),p)}}}function B1(n,e,t){const i=[],o=t||cs.mix||iS,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const h=Array.isArray(e)?e[c]||xi:e;u=hl(h,u)}i.push(u)}return i}function oS(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(qu(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=B1(e,i,o),h=u.length,d=m=>{if(c&&m<n[0])return e[0];let g=0;if(h>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const p=sl(n[g],n[g+1],m);return u[g](p)};return t?m=>d(nr(n[0],n[a-1],m)):d}function V1(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=sl(0,e,i);n.push(kt(t,1,o))}}function z1(n){const e=[0];return V1(e,n.length-1),e}function H1(n,e){return n.map(t=>t*e)}function G1(n,e){return n.map(()=>e||Yy).splice(0,n.length-1)}function tl({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=Qw(i)?i.map(Gv):Gv(i),a={done:!1,value:e[0]},c=H1(t&&t.length===e.length?t:z1(e),n),u=oS(c,e,{ease:Array.isArray(o)?o:G1(e,o)});return{calculatedDuration:n,next:h=>(a.value=u(h),a.done=h>=n,a)}}const W1=n=>n!==null;function Ku(n,{repeat:e,repeatType:t="loop"},i,o=1){const a=n.filter(W1),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||i===void 0?a[u]:i}const X1={decay:np,inertia:np,tween:tl,keyframes:tl,spring:Pu};function aS(n){typeof n.type=="string"&&(n.type=X1[n.type])}class Dm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const j1=n=>n/100;class al extends Dm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Bn.now()&&this.tick(Bn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;aS(e);const{type:t=tl,repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const h=t||tl;h!==tl&&typeof u[0]!="number"&&(this.mixKeyframes=hl(j1,iS(u[0],u[1])),u=[0,100]);const d=h({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...u].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=Pm(d));const{calculatedDuration:m}=d;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=d}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:h}=this;if(this.startTime===null)return i.next(0);const{delay:d=0,keyframes:m,repeat:g,repeatType:p,repeatDelay:y,type:E,onUpdate:M,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-d*(this.playbackSpeed>=0?1:-1),P=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let D=this.currentTime,b=i;if(g){const T=Math.min(this.currentTime,o)/u;let I=Math.floor(T),V=T%1;!V&&T>=1&&(V=1),V===1&&I--,I=Math.min(I,g+1),!!(I%2)&&(p==="reverse"?(V=1-V,y&&(V-=y/u)):p==="mirror"&&(b=c)),D=nr(0,1,V)*u}let N;P?(this.delayState.value=m[0],N=this.delayState):N=b.next(D),a&&!P&&(N.value=a(N.value));let{done:L}=N;!P&&h!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&E!==np&&(N.value=Ku(m,this.options,_,this.speed)),M&&M(N.value),F&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return vi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+vi(e)}get time(){return vi(this.currentTime)}set time(e){e=oi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return sS(i=>this.generator.next(i).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Bn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=vi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=P1,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Bn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function Y1(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Vs=n=>n*180/Math.PI,ip=n=>{const e=Vs(Math.atan2(n[1],n[0]));return rp(e)},$1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:ip,rotateZ:ip,skewX:n=>Vs(Math.atan(n[1])),skewY:n=>Vs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},rp=n=>(n=n%360,n<0&&(n+=360),n),Kv=ip,Zv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Qv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),q1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zv,scaleY:Qv,scale:n=>(Zv(n)+Qv(n))/2,rotateX:n=>rp(Vs(Math.atan2(n[6],n[5]))),rotateY:n=>rp(Vs(Math.atan2(-n[2],n[0]))),rotateZ:Kv,rotate:Kv,skewX:n=>Vs(Math.atan(n[4])),skewY:n=>Vs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function sp(n){return n.includes("scale")?1:0}function op(n,e){if(!n||n==="none")return sp(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(t)i=q1,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=$1,o=u}if(!o)return sp(e);const a=i[e],c=o[1].split(",").map(Z1);return typeof a=="function"?a(c):c[a]}const K1=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return op(t,e)};function Z1(n){return parseFloat(n.trim())}const na=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ia=new Set([...na,"pathRotation"]),Jv=n=>n===ta||n===qe,Q1=new Set(["x","y","z"]),J1=na.filter(n=>!Q1.has(n));function eA(n){const e=[];return J1.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const ss={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>op(e,"x"),y:(n,{transform:e})=>op(e,"y")};ss.translateX=ss.x;ss.translateY=ss.y;const Gs=new Set;let ap=!1,lp=!1,cp=!1;function lS(){if(lp){const n=Array.from(Gs).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=eA(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))==null||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}lp=!1,ap=!1,Gs.forEach(n=>n.complete(cp)),Gs.clear()}function cS(){Gs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(lp=!0)})}function tA(){cp=!0,cS(),lS(),cp=!1}class Nm{constructor(e,t,i,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Gs.add(this),ap||(ap=!0,Ut.read(cS),Ut.resolveKeyframes(lS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&t){const u=i.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}Y1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Gs.delete(this)}cancel(){this.state==="scheduled"&&(Gs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nA=n=>n.startsWith("--");function uS(n,e,t){nA(e)?n.style.setProperty(e,t):n.style[e]=t}const iA={};function fS(n,e){const t=Oy(n);return()=>iA[e]??t()}const rA=fS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),dS=fS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Za=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,ex={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Za([0,.65,.55,1]),circOut:Za([.55,0,1,.45]),backIn:Za([.31,.01,.66,-.59]),backOut:Za([.33,1.53,.69,.99])};function hS(n,e){if(n)return typeof n=="function"?dS()?rS(n,e):"ease-out":$y(n)?Za(n):Array.isArray(n)?n.map(t=>hS(t,e)||ex.easeOut):ex[n]}function sA(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:h}={},d=void 0){const m={[e]:t};h&&(m.offset=h);const g=hS(u,o);Array.isArray(g)&&(m.easing=g);const p={delay:i,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return d&&(p.pseudoElement=d),n.animate(m,p)}function pS(n){return typeof n=="function"&&"applyToOptions"in n}function oA({type:n,...e}){return pS(n)&&dS()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class mS extends Dm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:h}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,qu(typeof e.type!="string");const d=oA(e);this.animation=sA(t,i,o,d,a),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=Ku(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(m),uS(t,i,m),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(i=this.animation).commitStyles)==null||o.call(i))}get duration(){var t,i;const e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return vi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+vi(e)}get time(){return vi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=oi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:i,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&rA()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),i&&(this.animation.rangeEnd=i),xi):o(this)}}const gS={anticipate:Wy,backInOut:Gy,circInOut:jy};function aA(n){return n in gS}function lA(n){typeof n.ease=="string"&&aA(n.ease)&&(n.ease=gS[n.ease])}const Zd=10;class cA extends mS{constructor(e){lA(e),aS(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new al({...c,autoplay:!1}),h=Math.max(Zd,Bn.now()-this.startTime),d=nr(0,Zd,h-Zd),m=u.sample(h).value,{name:g}=this.options;a&&g&&uS(a,g,m),t.setWithVelocity(u.sample(Math.max(0,h-d)).value,m,d),u.stop()}}const tx=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Fi.test(n)||n==="0")&&!n.startsWith("url("));function uA(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function fA(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=tx(o,e),u=tx(a,e);return!c||!u?!1:uA(n)||(t==="spring"||pS(t))&&i}function up(n){n.duration=0,n.type="keyframes"}const vS=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),dA=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function hA(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&dA.test(n[e]))return!0;return!1}const pA=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),mA=Oy(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function gA(n){var g;const{motionValue:e,name:t,repeatDelay:i,repeatType:o,damping:a,type:c,keyframes:u}=n,h=(g=e==null?void 0:e.owner)==null?void 0:g.current;if(!(h instanceof HTMLElement)&&!(h instanceof SVGElement))return!1;const{onUpdate:d,transformTemplate:m}=e.owner.getProps();return mA()&&t&&(vS.has(t)||pA.has(t)&&hA(u))&&(t!=="transform"||!m)&&!d&&!i&&o!=="mirror"&&a!==0&&c!=="inertia"}const vA=40;class xA extends Dm{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:h,motionValue:d,element:m,...g}){var E;super(),this.stop=()=>{var M,_;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(_=this.keyframeResolver)==null||_.cancel()},this.createdAt=Bn.now();const p={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,name:h,motionValue:d,element:m,...g},y=(m==null?void 0:m.KeyframeResolver)||Nm;this.keyframeResolver=new y(u,(M,_,S)=>this.onKeyframesResolved(M,_,p,!S),h,d,m),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(e,t,i,o){var S,P;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:h,isHandoff:d,onUpdate:m}=i;this.resolvedAt=Bn.now();let g=!0;fA(e,a,c,u)||(g=!1,(cs.instantAnimations||!h)&&(m==null||m(Ku(e,i,t))),e[0]=e[e.length-1],up(i),i.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>vA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},E=g&&!d&&gA(y),M=(P=(S=y.motionValue)==null?void 0:S.owner)==null?void 0:P.current;let _;if(E)try{_=new cA({...y,element:M})}catch{_=new al(y)}else _=new al(y);_.finished.then(()=>{this.notifyFinished()}).catch(xi),this.pendingTimeline&&(this.stopTimeline=_.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=_}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),tA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function xS(n,e,t,i=0,o=1){const a=Array.from(n).sort((d,m)=>d.sortNodePosition(m)).indexOf(e),c=n.size,u=(c-1)*i;return typeof t=="function"?t(a,c):o===1?a*i:u-a*i}const nx=30,_A=n=>!isNaN(parseFloat(n)),nl={current:void 0};class yA{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var a;const o=Bn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Bn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=_A(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Mm);const i=this.events[e].add(t);return e==="change"?()=>{i(),Ut.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return nl.current&&nl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Bn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>nx)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,nx);return ky(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xs(n,e){return new yA(n,e)}function _S(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...i}=n;return{...e,...i}}return n}function Lm(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?_S(t,n):t}const SA={type:"spring",stiffness:500,damping:25,restSpeed:10},EA=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),MA={type:"keyframes",duration:.8},TA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wA=(n,{keyframes:e})=>e.length>2?MA:ia.has(n)?n.startsWith("scale")?EA(e[1]):SA:TA,AA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function bA(n){for(const e in n)if(!AA.has(e))return!0;return!1}const Im=(n,e,t,i={},o,a)=>c=>{const u=Lm(i,n)||{},h=u.delay||i.delay||0;let{elapsed:d=0}=i;d=d-oi(h);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-d,onUpdate:p=>{e.set(p),u.onUpdate&&u.onUpdate(p)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};bA(u)||Object.assign(m,wA(n,m)),m.duration&&(m.duration=oi(m.duration)),m.repeatDelay&&(m.repeatDelay=oi(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(up(m),m.delay===0&&(g=!0)),(cs.instantAnimations||cs.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(g=!0,up(m),m.delay=0),m.allowFlatten=!u.type&&!u.ease,g&&!a&&e.get()!==void 0){const p=Ku(m.keyframes,u);if(p!==void 0){Ut.update(()=>{m.onUpdate(p),m.onComplete()});return}}return u.isSync?new al(m):new xA(m)},CA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function RA(n){const e=CA.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function yS(n,e,t=1){const[i,o]=RA(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return Iy(c)?parseFloat(c):c}return Am(o)?yS(o,e,t+1):o}function ix(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function Fm(n,e,t,i){if(typeof e=="function"){const[o,a]=ix(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=ix(i);e=e(t!==void 0?t:n.custom,o,a)}return e}function Ws(n,e,t){const i=n.getProps();return Fm(i,e,t!==void 0?t:i.custom,n)}const SS=new Set(["width","height","top","left","right","bottom",...na]),fp=n=>Array.isArray(n);function PA(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Xs(t))}function DA(n){return fp(n)?n[n.length-1]||0:n}function NA(n,e){const t=Ws(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=DA(a[c]);PA(n,c,u)}}const hn=n=>!!(n&&n.getVelocity);function LA(n){return!!(hn(n)&&n.add)}function dp(n,e){const t=n.getValue("willChange");if(LA(t))return t.add(e);if(!t&&cs.WillChange){const i=new cs.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function Um(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const IA="framerAppearId",ES="data-"+Um(IA);function MS(n){return n.props[ES]}function FA({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function TS(n,e,{delay:t=0,transitionOverride:i,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const h=n.getDefaultTransition();a=a?_S(a,h):h;const d=a==null?void 0:a.reduceMotion,m=a==null?void 0:a.skipAnimations;i&&(a=i);const g=[],p=o&&n.animationState&&n.animationState.getState()[o],y=a==null?void 0:a.path;y&&y.animateVisualElement(n,u,a,t,g);for(const E in u){const M=n.getValue(E,n.latestValues[E]??null),_=u[E];if(_===void 0||p&&FA(p,E))continue;const S={delay:t,...Lm(a||{},E)};m&&(S.skipAnimations=!0);const P=M.get();if(P!==void 0&&!M.isAnimating()&&!Array.isArray(_)&&_===P&&!S.velocity){Ut.update(()=>M.set(_));continue}let D=!1;if(window.MotionHandoffAnimation){const L=MS(n);if(L){const F=window.MotionHandoffAnimation(L,E,Ut);F!==null&&(S.startTime=F,D=!0)}}dp(n,E);const b=d??n.shouldReduceMotion;M.start(Im(E,M,_,b&&SS.has(E)?{type:!1}:S,n,D));const N=M.animation;N&&g.push(N)}if(c){const E=()=>Ut.update(()=>{c&&NA(n,c)});g.length?Promise.all(g).then(E):E()}return g}function hp(n,e,t={}){var h;const i=Ws(n,e,t.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(o=t.transitionOverride);const a=i?()=>Promise.all(TS(n,i,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:p}=o;return UA(n,e,d,m,g,p,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[d,m]=u==="beforeChildren"?[a,c]:[c,a];return d().then(()=>m())}else return Promise.all([a(),c(t.delay)])}function UA(n,e,t=0,i=0,o=0,a=1,c){const u=[];for(const h of n.variantChildren)h.notify("AnimationStart",e),u.push(hp(h,e,{...c,delay:t+(typeof i=="function"?0:i)+xS(n.variantChildren,h,i,o,a)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(u)}function OA(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>hp(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=hp(n,e,t);else{const o=typeof e=="function"?Ws(n,e,t.custom):e;i=Promise.all(TS(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const kA={test:n=>n==="auto",parse:n=>n},wS=n=>e=>e.test(n),AS=[ta,qe,Ji,_r,f1,u1,kA],rx=n=>AS.find(wS(n));function BA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Uy(n):!0}const VA=new Set(["brightness","contrast","saturate","opacity"]);function zA(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(bm)||[];if(!i)return n;const o=t.replace(i,"");let a=VA.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const HA=/\b([a-z-]*)\(.*?\)/gu,pp={...Fi,getAnimatableNone:n=>{const e=n.match(HA);return e?e.map(zA).join(" "):n}},mp={...Fi,getAnimatableNone:n=>{const e=Fi.parse(n);return Fi.createTransformer(n)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},sx={...ta,transform:Math.round},GA={rotate:_r,pathRotation:_r,rotateX:_r,rotateY:_r,rotateZ:_r,scale:bc,scaleX:bc,scaleY:bc,scaleZ:bc,skew:_r,skewX:_r,skewY:_r,distance:qe,translateX:qe,translateY:qe,translateZ:qe,x:qe,y:qe,z:qe,perspective:qe,transformPerspective:qe,opacity:ol,originX:Xv,originY:Xv,originZ:qe},Du={borderWidth:qe,borderTopWidth:qe,borderRightWidth:qe,borderBottomWidth:qe,borderLeftWidth:qe,borderRadius:qe,borderTopLeftRadius:qe,borderTopRightRadius:qe,borderBottomRightRadius:qe,borderBottomLeftRadius:qe,width:qe,maxWidth:qe,height:qe,maxHeight:qe,top:qe,right:qe,bottom:qe,left:qe,inset:qe,insetBlock:qe,insetBlockStart:qe,insetBlockEnd:qe,insetInline:qe,insetInlineStart:qe,insetInlineEnd:qe,padding:qe,paddingTop:qe,paddingRight:qe,paddingBottom:qe,paddingLeft:qe,paddingBlock:qe,paddingBlockStart:qe,paddingBlockEnd:qe,paddingInline:qe,paddingInlineStart:qe,paddingInlineEnd:qe,margin:qe,marginTop:qe,marginRight:qe,marginBottom:qe,marginLeft:qe,marginBlock:qe,marginBlockStart:qe,marginBlockEnd:qe,marginInline:qe,marginInlineStart:qe,marginInlineEnd:qe,fontSize:qe,backgroundPositionX:qe,backgroundPositionY:qe,...GA,zIndex:sx,fillOpacity:ol,strokeOpacity:ol,numOctaves:sx},WA={...Du,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:pp,WebkitFilter:pp,mask:mp,WebkitMask:mp},bS=n=>WA[n],XA=new Set([pp,mp]);function CS(n,e){let t=bS(n);return XA.has(t)||(t=Fi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const jA=new Set(["auto","none","0"]);function YA(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!jA.has(a)&&Ko(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=CS(t,o)}class $A extends Nm{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let g=e[m];if(typeof g=="string"&&(g=g.trim(),Am(g))){const p=yS(g,t.current);p!==void 0&&(e[m]=p),m===e.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!SS.has(i)||e.length!==2)return;const[o,a]=e,c=rx(o),u=rx(a),h=Wv(o),d=Wv(a);if(h!==d&&ss[i]){this.needsMeasurement=!0;return}if(c!==u)if(Jv(c)&&Jv(u))for(let m=0;m<e.length;m++){const g=e[m];typeof g=="string"&&(e[m]=parseFloat(g))}else ss[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)(e[o]===null||BA(e[o]))&&i.push(o);i.length&&YA(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ss[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,c=i[a];i[a]=ss[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([h,d])=>{e.getValue(h).set(d)}),this.resolveNoneKeyframes()}}const Om=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function RS(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const o=(t==null?void 0:t[n])??i.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(i=>i!=null)}const gp=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function fu(n){return Fy(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:km}=qy(queueMicrotask,!1),Di={x:!1,y:!1};function PS(){return Di.x||Di.y}function qA(n){return n==="x"||n==="y"?Di[n]?null:(Di[n]=!0,()=>{Di[n]=!1}):Di.x||Di.y?null:(Di.x=Di.y=!0,()=>{Di.x=Di.y=!1})}function DS(n,e){const t=RS(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function KA(n){return!(n.pointerType==="touch"||PS())}function ZA(n,e,t={}){const[i,o,a]=DS(n,t);return i.forEach(c=>{let u=!1,h=!1,d;const m=()=>{c.removeEventListener("pointerleave",E)},g=_=>{d&&(d(_),d=void 0),m()},p=_=>{u=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),h&&(h=!1,g(_))},y=()=>{u=!0,window.addEventListener("pointerup",p,o),window.addEventListener("pointercancel",p,o)},E=_=>{if(_.pointerType!=="touch"){if(u){h=!0;return}g(_)}},M=_=>{if(!KA(_))return;h=!1;const S=e(c,_);typeof S=="function"&&(d=S,c.addEventListener("pointerleave",E,o))};c.addEventListener("pointerenter",M,o),c.addEventListener("pointerdown",y,o)}),a}const NS=(n,e)=>e?n===e?!0:NS(n,e.parentElement):!1,Bm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,QA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function JA(n){return QA.has(n.tagName)||n.isContentEditable===!0}const eb=new Set(["INPUT","SELECT","TEXTAREA"]);function tb(n){return eb.has(n.tagName)||n.isContentEditable===!0}const du=new WeakSet;function ox(n){return e=>{e.key==="Enter"&&n(e)}}function Qd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const nb=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=ox(()=>{if(du.has(t))return;Qd(t,"down");const o=ox(()=>{Qd(t,"up")}),a=()=>Qd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function ax(n){return Bm(n)&&!PS()}const lx=new WeakSet;function ib(n,e,t={}){const[i,o,a]=DS(n,t),c=u=>{const h=u.currentTarget;if(!ax(u)||lx.has(u))return;du.add(h),t.stopPropagation&&lx.add(u);const d=e(h,u),m={...o,capture:!0},g=(E,M)=>{window.removeEventListener("pointerup",p,m),window.removeEventListener("pointercancel",y,m),du.has(h)&&du.delete(h),ax(E)&&typeof d=="function"&&d(E,{success:M})},p=E=>{g(E,h===window||h===document||t.useGlobalTarget||NS(h,E.target))},y=E=>{g(E,!1)};window.addEventListener("pointerup",p,m),window.addEventListener("pointercancel",y,m)};return i.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),fu(u)&&(u.addEventListener("focus",d=>nb(d,o)),!JA(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function Vm(n){return Fy(n)&&"ownerSVGElement"in n}const hu=new WeakMap;let ns;const LS=(n,e,t)=>(i,o)=>o&&o[0]?o[0][n+"Size"]:Vm(i)&&"getBBox"in i?i.getBBox()[e]:i[t],rb=LS("inline","width","offsetWidth"),sb=LS("block","height","offsetHeight");function ob({target:n,borderBoxSize:e}){var t;(t=hu.get(n))==null||t.forEach(i=>{i(n,{get width(){return rb(n,e)},get height(){return sb(n,e)}})})}function ab(n){n.forEach(ob)}function lb(){typeof ResizeObserver>"u"||(ns=new ResizeObserver(ab))}function cb(n,e){ns||lb();const t=RS(n);return t.forEach(i=>{let o=hu.get(i);o||(o=new Set,hu.set(i,o)),o.add(e),ns==null||ns.observe(i)}),()=>{t.forEach(i=>{const o=hu.get(i);o==null||o.delete(e),o!=null&&o.size||ns==null||ns.unobserve(i)})}}const pu=new Set;let Wo;function ub(){Wo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};pu.forEach(e=>e(n))},window.addEventListener("resize",Wo)}function fb(n){return pu.add(n),Wo||ub(),()=>{pu.delete(n),!pu.size&&typeof Wo=="function"&&(window.removeEventListener("resize",Wo),Wo=void 0)}}function cx(n,e){return typeof n=="function"?fb(n):cb(n,e)}function db(n){return Vm(n)&&n.tagName==="svg"}function hb(...n){const e=!Array.isArray(n[0]),t=e?0:-1,i=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=oS(o,a,c);return e?u(i):u}function pb(n,e,t={}){const i=n.get();let o=null,a=i,c;const u=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,h=()=>{o&&(o.stop(),o=null),n.animation=void 0},d=()=>{const g=ux(n.get()),p=ux(a);if(g===p){h();return}const y=o?o.getGeneratorVelocity():n.getVelocity();h(),o=new al({keyframes:[g,p],velocity:y,type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c})},m=()=>{var g;d(),n.animation=o??void 0,(g=n.events.animationStart)==null||g.notify(),o==null||o.then(()=>{var p;n.animation=void 0,(p=n.events.animationComplete)==null||p.notify()})};if(n.attach((g,p)=>{a=g,c=y=>p(Jd(y,u)),Ut.postRender(m)},h),hn(e)){let g=t.skipInitialAnimation===!0;const p=e.on("change",E=>{g?(g=!1,n.jump(Jd(E,u),!1)):n.set(Jd(E,u))}),y=n.on("destroy",p);return()=>{p(),y()}}return h}function Jd(n,e){return e?n+e:n}function ux(n){return typeof n=="number"?n:parseFloat(n)}const mb=[...AS,cn,Fi],gb=n=>mb.find(wS(n)),fx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xo=()=>({x:fx(),y:fx()}),dx=()=>({min:0,max:0}),dn=()=>({x:dx(),y:dx()}),vb=new WeakMap;function Zu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ll(n){return typeof n=="string"||Array.isArray(n)}const zm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hm=["initial",...zm];function Qu(n){return Zu(n.animate)||Hm.some(e=>ll(n[e]))}function IS(n){return!!(Qu(n)||n.variants)}function xb(n,e,t){for(const i in e){const o=e[i],a=t[i];if(hn(o))n.addValue(i,o);else if(hn(a))n.addValue(i,Xs(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,Xs(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const vp={current:null},FS={current:!1},_b=typeof window<"u";function yb(){if(FS.current=!0,!!_b)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>vp.current=n.matches;n.addEventListener("change",e),e()}else vp.current=!1}const hx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nu={};function US(n){Nu=n}function Sb(){return Nu}class Eb{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Nm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Bn.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ut.render(this.render,!1,!0))};const{latestValues:d,renderState:m}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=Qu(t),this.isVariantNode=IS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in p){const E=p[y];d[y]!==void 0&&hn(E)&&E.set(d[y])}}mount(e){var t,i;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,vb.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(FS.current||yb(),this.shouldReduceMotion=vp.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ar(this.notifyUpdate),Ar(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&vS.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:h,ease:d,duration:m}=t.accelerate,g=new mS({element:this.current,name:e,keyframes:u,times:h,ease:d,duration:oi(m)}),p=c(g);this.valueSubscriptions.set(e,()=>{p(),g.cancel()});return}const i=ia.has(e);i&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ut.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Nu){const t=Nu[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<hx.length;i++){const o=hx[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=xb(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Xs(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Iy(i)||Uy(i))?i=parseFloat(i):!gb(i)&&Fi.test(t)&&(i=CS(e,t)),this.setBaseTarget(e,hn(i)?i.get():i)),hn(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const c=Fm(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(i=c[e])}if(t&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!hn(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Mm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){km.render(this.render)}}class OS extends Eb{constructor(){super(...arguments),this.KeyframeResolver=$A}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;hn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class fs{constructor(e){this.isMounted=!1,this.node=e}update(){}}function kS({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function Mb({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Tb(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function eh(n){return n===void 0||n===1}function xp({scale:n,scaleX:e,scaleY:t}){return!eh(n)||!eh(e)||!eh(t)}function Fs(n){return xp(n)||BS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function BS(n){return px(n.x)||px(n.y)}function px(n){return n&&n!=="0%"}function Lu(n,e,t){const i=n-t,o=e*i;return t+o}function mx(n,e,t,i,o){return o!==void 0&&(n=Lu(n,o,i)),Lu(n,t,i)+e}function _p(n,e=0,t=1,i,o){n.min=mx(n.min,e,t,i,o),n.max=mx(n.max,e,t,i,o)}function VS(n,{x:e,y:t}){_p(n.x,e.translate,e.scale,e.originPoint),_p(n.y,t.translate,t.scale,t.originPoint)}const gx=.999999999999,vx=1.0000000000001;function wb(n,e,t,i=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let h=0;h<o;h++){a=t[h],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&($i(n.x,-a.scroll.offset.x),$i(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,VS(n,c)),i&&Fs(a.latestValues)&&mu(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<vx&&e.x>gx&&(e.x=1),e.y<vx&&e.y>gx&&(e.y=1)}function $i(n,e){n.min+=e,n.max+=e}function xx(n,e,t,i,o=.5){const a=kt(n.min,n.max,o);_p(n,e,t,a,i)}function _x(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function mu(n,e,t){const i=t??n;xx(n.x,_x(e.x,i.x),e.scaleX,e.scale,e.originX),xx(n.y,_x(e.y,i.y),e.scaleY,e.scale,e.originY)}function zS(n,e){return kS(Tb(n.getBoundingClientRect(),e))}function Ab(n,e,t){const i=zS(n,t),{scroll:o}=e;return o&&($i(i.x,o.offset.x),$i(i.y,o.offset.y)),i}const bb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Cb=na.length;function Rb(n,e,t){let i="",o=!0;for(let c=0;c<Cb;c++){const u=na[c],h=n[u];if(h===void 0)continue;let d=!0;if(typeof h=="number")d=h===(u.startsWith("scale")?1:0);else{const m=parseFloat(h);d=u.startsWith("scale")?m===1:m===0}if(!d||t){const m=gp(h,Du[u]);if(!d){o=!1;const g=bb[u]||u;i+=`${g}(${m}) `}t&&(e[u]=m)}}const a=n.pathRotation;return a&&(o=!1,i+=`rotate(${gp(a,Du.pathRotation)}) `),i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function Gm(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const h in e){const d=e[h];if(ia.has(h)){c=!0;continue}else if(Zy(h)){o[h]=d;continue}else{const m=gp(d,Du[h]);h.startsWith("origin")?(u=!0,a[h]=m):i[h]=m}}if(e.transform||(c||t?i.transform=Rb(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:h="50%",originY:d="50%",originZ:m=0}=a;i.transformOrigin=`${h} ${d} ${m}`}}function HS(n,{style:e,vars:t},i,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,i);for(c in t)a.setProperty(c,t[c])}function yx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ha={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(qe.test(n))n=parseFloat(n);else return n;const t=yx(n,e.target.x),i=yx(n,e.target.y);return`${t}% ${i}%`}},Pb={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=Fi.parse(n);if(o.length>5)return i;const a=Fi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,h=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=h;const d=kt(u,h,.5);return typeof o[2+c]=="number"&&(o[2+c]/=d),typeof o[3+c]=="number"&&(o[3+c]/=d),a(o)}},yp={borderRadius:{...Ha,applyTo:[...Om]},borderTopLeftRadius:Ha,borderTopRightRadius:Ha,borderBottomLeftRadius:Ha,borderBottomRightRadius:Ha,boxShadow:Pb};function GS(n,{layout:e,layoutId:t}){return ia.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!yp[n]||n==="opacity")}function Wm(n,e,t){var c;const i=n.style,o=e==null?void 0:e.style,a={};if(!i)return a;for(const u in i)(hn(i[u])||o&&hn(o[u])||GS(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=i[u]);return a}function Db(n){return window.getComputedStyle(n)}class Nb extends OS{constructor(){super(...arguments),this.type="html",this.renderInstance=HS}mount(e){qu(!!e.style),super.mount(e)}readValueFromInstance(e,t){var i;if(ia.has(t))return(i=this.projection)!=null&&i.isProjecting?sp(t):K1(e,t);{const o=Db(e),a=(Zy(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return zS(e,t)}build(e,t,i){Gm(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return Wm(e,t,i)}}const Lb={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ib={offset:"strokeDashoffset",array:"strokeDasharray"};function Fb(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?Lb:Ib;n[a.offset]=`${-i}`,n[a.array]=`${e} ${t}`}const Ub=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function WS(n,{attrX:e,attrY:t,attrScale:i,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},h,d,m){if(Gm(n,u,d),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:p}=n;g.transform&&(p.transform=g.transform,delete g.transform),(p.transform||g.transformOrigin)&&(p.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),p.transform&&(p.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete g.transformBox);for(const y of Ub)g[y]!==void 0&&(p[y]=g[y],delete g[y]);e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),i!==void 0&&(g.scale=i),o!==void 0&&Fb(g,o,a,c,!1)}const XS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),jS=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Ob(n,e,t,i){HS(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(XS.has(o)?o:Um(o),e.attrs[o])}function YS(n,e,t){const i=Wm(n,e,t);for(const o in n)if(hn(n[o])||hn(e[o])){const a=na.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}class kb extends OS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ia.has(t)){const i=bS(t);return i&&i.default||0}return t=XS.has(t)?t:Um(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return YS(e,t,i)}build(e,t,i){WS(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,o){Ob(e,t,i,o)}mount(e){this.isSVGTag=jS(e.tagName),super.mount(e)}}const Bb=Hm.length;function $S(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?$S(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Bb;t++){const i=Hm[t],o=n.props[i];(ll(o)||o===!1)&&(e[i]=o)}return e}function qS(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const Vb=[...zm].reverse(),zb=zm.length;function Hb(n){return e=>Promise.all(e.map(({animation:t,options:i})=>OA(n,t,i)))}function Gb(n){let e=Hb(n),t=Sx(),i=!0,o=!1;const a=d=>(m,g)=>{var y;const p=Ws(n,g,d==="exit"?(y=n.presenceContext)==null?void 0:y.custom:void 0);if(p){const{transition:E,transitionEnd:M,..._}=p;m={...m,..._,...M}}return m};function c(d){e=d(n)}function u(d){const{props:m}=n,g=$S(n.parent)||{},p=[],y=new Set;let E={},M=1/0;for(let S=0;S<zb;S++){const P=Vb[S],D=t[P],b=m[P]!==void 0?m[P]:g[P],N=ll(b),L=P===d?D.isActive:null;L===!1&&(M=S);let F=b===g[P]&&b!==m[P]&&N;if(F&&(i||o)&&n.manuallyAnimateOnMount&&(F=!1),D.protectedKeys={...E},!D.isActive&&L===null||!b&&!D.prevProp||Zu(b)||typeof b=="boolean")continue;if(P==="exit"&&D.isActive&&L!==!0){D.prevResolvedValues&&(E={...E,...D.prevResolvedValues});continue}const T=Wb(D.prevProp,b);let I=T||P===d&&D.isActive&&!F&&N||S>M&&N,V=!1;const z=Array.isArray(b)?b:[b];let X=z.reduce(a(P),{});L===!1&&(X={});const{prevResolvedValues:de={}}=D,le={...de,...X},j=G=>{I=!0,y.has(G)&&(V=!0,y.delete(G)),D.needsAnimating[G]=!0;const te=n.getValue(G);te&&(te.liveStyle=!1)};for(const G in le){const te=X[G],ce=de[G];if(E.hasOwnProperty(G))continue;let k=!1;fp(te)&&fp(ce)?k=!qS(te,ce)||T:k=te!==ce,k?te!=null?j(G):y.add(G):te!==void 0&&y.has(G)?j(G):D.protectedKeys[G]=!0}D.prevProp=b,D.prevResolvedValues=X,D.isActive&&(E={...E,...X}),(i||o)&&n.blockInitialAnimation&&(I=!1);const re=F&&T;I&&(!re||V)&&p.push(...z.map(G=>{const te={type:P};if(typeof G=="string"&&(i||o)&&!re&&n.manuallyAnimateOnMount&&n.parent){const{parent:ce}=n,k=Ws(ce,G);if(ce.enteringChildren&&k){const{delayChildren:Q}=k.transition||{};te.delay=xS(ce.enteringChildren,n,Q)}}return{animation:G,options:te}}))}if(y.size){const S={};if(typeof m.initial!="boolean"){const P=Ws(n,Array.isArray(m.initial)?m.initial[0]:m.initial);P&&P.transition&&(S.transition=P.transition)}y.forEach(P=>{const D=n.getBaseTarget(P),b=n.getValue(P);b&&(b.liveStyle=!0),S[P]=D??null}),p.push({animation:S})}let _=!!p.length;return i&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(_=!1),i=!1,o=!1,_?e(p):Promise.resolve()}function h(d,m){var p;if(t[d].isActive===m)return Promise.resolve();(p=n.variantChildren)==null||p.forEach(y=>{var E;return(E=y.animationState)==null?void 0:E.setActive(d,m)}),t[d].isActive=m;const g=u(d);for(const y in t)t[y].protectedKeys={};return g}return{animateChanges:u,setActive:h,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Sx(),o=!0}}}function Wb(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!qS(e,n):!1}function Ps(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sx(){return{animate:Ps(!0),whileInView:Ps(),whileHover:Ps(),whileTap:Ps(),whileDrag:Ps(),whileFocus:Ps(),exit:Ps()}}function Sp(n,e){n.min=e.min,n.max=e.max}function bi(n,e){Sp(n.x,e.x),Sp(n.y,e.y)}function Ex(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const KS=1e-4,Xb=1-KS,jb=1+KS,ZS=.01,Yb=0-ZS,$b=0+ZS;function Vn(n){return n.max-n.min}function qb(n,e,t){return Math.abs(n-e)<=t}function Mx(n,e,t,i=.5){n.origin=i,n.originPoint=kt(e.min,e.max,n.origin),n.scale=Vn(t)/Vn(e),n.translate=kt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Xb&&n.scale<=jb||isNaN(n.scale))&&(n.scale=1),(n.translate>=Yb&&n.translate<=$b||isNaN(n.translate))&&(n.translate=0)}function il(n,e,t,i){Mx(n.x,e.x,t.x,i?i.originX:void 0),Mx(n.y,e.y,t.y,i?i.originY:void 0)}function Tx(n,e,t,i=0){const o=i?kt(t.min,t.max,i):t.min;n.min=o+e.min,n.max=n.min+Vn(e)}function Kb(n,e,t,i){Tx(n.x,e.x,t.x,i==null?void 0:i.x),Tx(n.y,e.y,t.y,i==null?void 0:i.y)}function wx(n,e,t,i=0){const o=i?kt(t.min,t.max,i):t.min;n.min=e.min-o,n.max=n.min+Vn(e)}function Iu(n,e,t,i){wx(n.x,e.x,t.x,i==null?void 0:i.x),wx(n.y,e.y,t.y,i==null?void 0:i.y)}function Ax(n,e,t,i,o){return n-=e,n=Lu(n,1/t,i),o!==void 0&&(n=Lu(n,1/o,i)),n}function Zb(n,e=0,t=1,i=.5,o,a=n,c=n){if(Ji.test(e)&&(e=parseFloat(e),e=kt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=kt(a.min,a.max,i);n===a&&(u-=e),n.min=Ax(n.min,e,t,u,o),n.max=Ax(n.max,e,t,u,o)}function bx(n,e,[t,i,o],a,c){Zb(n,e[t],e[i],e[o],e.scale,a,c)}const Qb=["x","scaleX","originX"],Jb=["y","scaleY","originY"];function Cx(n,e,t,i){bx(n.x,e,Qb,t?t.x:void 0,i?i.x:void 0),bx(n.y,e,Jb,t?t.y:void 0,i?i.y:void 0)}function Rx(n){return n.translate===0&&n.scale===1}function QS(n){return Rx(n.x)&&Rx(n.y)}function Px(n,e){return n.min===e.min&&n.max===e.max}function eC(n,e){return Px(n.x,e.x)&&Px(n.y,e.y)}function Dx(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function JS(n,e){return Dx(n.x,e.x)&&Dx(n.y,e.y)}function Nx(n){return Vn(n.x)/Vn(n.y)}function Lx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Yi(n){return[n("x"),n("y")]}function tC(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:d,rotate:m,pathRotation:g,rotateX:p,rotateY:y,skewX:E,skewY:M}=t;d&&(i=`perspective(${d}px) ${i}`),m&&(i+=`rotate(${m}deg) `),g&&(i+=`rotate(${g}deg) `),p&&(i+=`rotateX(${p}deg) `),y&&(i+=`rotateY(${y}deg) `),E&&(i+=`skewX(${E}deg) `),M&&(i+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,h=n.y.scale*e.y;return(u!==1||h!==1)&&(i+=`scale(${u}, ${h})`),i||"none"}const nC=Om.length,Ix=n=>typeof n=="string"?parseFloat(n):n,Fx=n=>typeof n=="number"||qe.test(n);function iC(n,e,t,i,o,a){o?(n.opacity=kt(0,t.opacity??1,rC(i)),n.opacityExit=kt(e.opacity??1,0,sC(i))):a&&(n.opacity=kt(e.opacity??1,t.opacity??1,i));for(let c=0;c<nC;c++){const u=Om[c];let h=Ux(e,u),d=Ux(t,u);if(h===void 0&&d===void 0)continue;h||(h=0),d||(d=0),h===0||d===0||Fx(h)===Fx(d)?(n[u]=Math.max(kt(Ix(h),Ix(d),i),0),(Ji.test(d)||Ji.test(h))&&(n[u]+="%")):n[u]=d}(e.rotate||t.rotate)&&(n.rotate=kt(e.rotate||0,t.rotate||0,i))}function Ux(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const rC=eE(0,.5,Xy),sC=eE(.5,.95,xi);function eE(n,e,t){return i=>i<n?0:i>e?1:t(sl(n,e,i))}function oC(n,e,t){const i=hn(n)?n:Xs(n);return i.start(Im("",i,e,t)),i.animation}function cl(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}const aC=(n,e)=>n.depth-e.depth;class lC{constructor(){this.children=[],this.isDirty=!1}add(e){Em(this.children,e),this.isDirty=!0}remove(e){bu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(aC),this.isDirty=!1,this.children.forEach(e)}}function cC(n,e){const t=Bn.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(Ar(i),n(a-e))};return Ut.setup(i,!0),()=>Ar(i)}function gu(n){return hn(n)?n.get():n}class uC{constructor(){this.members=[]}add(e){Em(this.members,e);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;const o=i.instance;(!o||o.isConnected===!1)&&!i.snapshot&&(bu(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(bu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let i=this.members.indexOf(e)-1;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=i.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,i,o,a,c;(i=(t=e.options).onExitComplete)==null||i.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const vu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},th=["","X","Y","Z"],fC=1e3;let dC=0;function nh(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function tE(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=MS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ut,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&tE(i)}function nE({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=dC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(mC),this.nodes.forEach(SC),this.nodes.forEach(EC),this.nodes.forEach(gC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new lC)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Mm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const h=this.eventHandlers.get(c);h&&h.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Vm(c)&&!db(c),this.instance=c;const{layoutId:u,layout:h,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||u)&&(this.isLayoutDirty=!0),n){let m,g=0;const p=()=>this.root.updateBlockedByResize=!1;Ut.read(()=>{g=window.innerWidth}),n(c,()=>{const y=window.innerWidth;y!==g&&(g=y,this.root.updateBlockedByResize=!0,m&&m(),m=cC(p,250),vu.hasAnimatedSinceResize&&(vu.hasAnimatedSinceResize=!1,this.nodes.forEach(Bx)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g,hasRelativeLayoutChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||d.getDefaultTransition()||bC,{onLayoutAnimationStart:M,onLayoutAnimationComplete:_}=d.getProps(),S=!this.targetLayout||!JS(this.targetLayout,y),P=!g&&p;if(this.options.layoutRoot||this.resumeFrom||P||g&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...Lm(E,"layout"),onPlay:M,onComplete:_};(d.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(m,P,D.path)}else g||Bx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(MC),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&tE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,(typeof g.latestValues.x=="string"||typeof g.latestValues.y=="string")&&(g.isLayoutDirty=!0),g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:u,layout:h}=this.options;if(u===void 0&&!h)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const h=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),h&&this.nodes.forEach(xC),this.nodes.forEach(Ox);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(kx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(_C),this.nodes.forEach(yC),this.nodes.forEach(hC),this.nodes.forEach(pC)):this.nodes.forEach(kx),this.clearAllSnapshots();const u=Bn.now();Tn.delta=nr(0,1e3/60,u-Tn.timestamp),Tn.timestamp=u,Tn.isProcessing=!0,jd.update.process(Tn),jd.preRender.process(Tn),jd.render.process(Tn),Tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,km.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vC),this.sharedNodes.forEach(TC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=dn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const h=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!QS(this.projectionDelta),h=this.getTransformTemplate(),d=h?h(this.latestValues,""):void 0,m=d!==this.prevTransformTemplateValue;c&&this.instance&&(u||Fs(this.latestValues)||m)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let h=this.removeElementScroll(u);return c&&(h=this.removeTransform(h)),CC(h),{animationId:this.root.animationId,measuredBox:u,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:c}=this.options;if(!c)return dn();const u=c.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(RC))){const{scroll:m}=this.root;m&&($i(u.x,m.offset.x),$i(u.y,m.offset.y))}return u}removeElementScroll(c){var h;const u=dn();if(bi(u,c),(h=this.scroll)!=null&&h.wasRoot)return u;for(let d=0;d<this.path.length;d++){const m=this.path[d],{scroll:g,options:p}=m;m!==this.root&&g&&p.layoutScroll&&(g.wasRoot&&bi(u,c),$i(u.x,g.offset.x),$i(u.y,g.offset.y))}return u}applyTransform(c,u=!1,h){var m,g;const d=h||dn();bi(d,c);for(let p=0;p<this.path.length;p++){const y=this.path[p];!u&&y.options.layoutScroll&&y.scroll&&y!==y.root&&($i(d.x,-y.scroll.offset.x),$i(d.y,-y.scroll.offset.y)),Fs(y.latestValues)&&mu(d,y.latestValues,(m=y.layout)==null?void 0:m.layoutBox)}return Fs(this.latestValues)&&mu(d,this.latestValues,(g=this.layout)==null?void 0:g.layoutBox),d}removeTransform(c){var h;const u=dn();bi(u,c);for(let d=0;d<this.path.length;d++){const m=this.path[d];if(!Fs(m.latestValues))continue;let g;m.instance&&(xp(m.latestValues)&&m.updateSnapshot(),g=dn(),bi(g,m.measurePageBox())),Cx(u,m.latestValues,(h=m.snapshot)==null?void 0:h.layoutBox,g)}return Fs(this.latestValues)&&Cx(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var y;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==u;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:g}=this.options;if(!this.layout||!(m||g))return;this.resolvedRelativeTargetAt=Tn.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=dn(),this.targetWithTransforms=dn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Kb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):bi(this.target,this.layout.layoutBox),VS(this.target,this.targetDelta)):bi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||xp(this.parent.latestValues)||BS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,h){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dn(),this.relativeTargetOrigin=dn(),Iu(this.relativeTargetOrigin,u,h,this.options.layoutAnchor||void 0),bi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var E;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(h=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Tn.timestamp&&(h=!1),h)return;const{layout:d,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||m))return;bi(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,p=this.treeScale.y;wb(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=dn());const{target:y}=c;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ex(this.prevProjectionDelta.x,this.projectionDelta.x),Ex(this.prevProjectionDelta.y,this.projectionDelta.y)),il(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==p||!Lx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Lx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xo(),this.projectionDelta=Xo(),this.projectionDeltaWithTransform=Xo()}setAnimationOrigin(c,u=!1,h){const d=this.snapshot,m=d?d.latestValues:{},g={...this.latestValues},p=Xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const y=dn(),E=d?d.source:void 0,M=this.layout?this.layout.source:void 0,_=E!==M,S=this.getStack(),P=!S||S.members.length<=1,D=!!(_&&!P&&this.options.crossfade===!0&&!this.path.some(AC));this.animationProgress=0;let b;const N=h==null?void 0:h.interpolateProjection(c);this.mixTargetDelta=L=>{const F=L/1e3,T=N==null?void 0:N(F);T?(p.x.translate=T.x,p.x.scale=kt(c.x.scale,1,F),p.x.origin=c.x.origin,p.x.originPoint=c.x.originPoint,p.y.translate=T.y,p.y.scale=kt(c.y.scale,1,F),p.y.origin=c.y.origin,p.y.originPoint=c.y.originPoint):(Vx(p.x,c.x,F),Vx(p.y,c.y,F)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Iu(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),wC(this.relativeTarget,this.relativeTargetOrigin,y,F),b&&eC(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=dn()),bi(b,this.relativeTarget)),_&&(this.animationValues=g,iC(g,m,this.latestValues,F,D,P)),T&&T.rotate!==void 0&&(this.animationValues||(this.animationValues=g),this.animationValues.pathRotation=T.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,h,d;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(d=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||d.stop(),this.pendingAnimation&&(Ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ut.update(()=>{vu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Xs(0)),this.motionValue.jump(0,!1),this.currentAnimation=oC(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),c.onUpdate&&c.onUpdate(m)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:h,layout:d,latestValues:m}=c;if(!(!u||!h||!d)){if(this!==c&&this.layout&&d&&iE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){h=this.target||dn();const g=Vn(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+g;const p=Vn(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+p}bi(u,h),mu(u,m),il(this.projectionDeltaWithTransform,this.layoutCorrected,u,m)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new uC),this.sharedNodes.get(c).add(u);const d=u.options.initialPromotionConfig;u.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:h}={}){const d=this.getStack();d&&d.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(u=!0),!u)return;const d={};h.z&&nh("z",c,d,this.animationValues);for(let m=0;m<th.length;m++)nh(`rotate${th[m]}`,c,d,this.animationValues),nh(`skew${th[m]}`,c,d,this.animationValues);c.render();for(const m in d)c.setStaticValue(m,d[m]),this.animationValues&&(this.animationValues[m]=d[m]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=gu(u==null?void 0:u.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=gu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Fs(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=d.animationValues||d.latestValues;this.applyTransformsToTarget();let g=tC(this.projectionDeltaWithTransform,this.treeScale,m);h&&(g=h(m,g)),c.transform=g;const{x:p,y}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,d.animationValues?c.opacity=d===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=d===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const E in yp){if(m[E]===void 0)continue;const{correct:M,applyTo:_,isCSSVariable:S}=yp[E],P=g==="none"?m[E]:M(m[E],d);if(_){const D=_.length;for(let b=0;b<D;b++)c[_[b]]=P}else S?this.options.visualElement.renderState.vars[E]=P:c[E]=P}this.options.layoutId&&(c.pointerEvents=d===this?gu(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(Ox),this.root.sharedNodes.clear()}}}function hC(n){n.updateLayout()}function pC(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Yi(g=>{const p=c?e.measuredBox[g]:e.layoutBox[g],y=Vn(p);p.min=i[g].min,p.max=p.min+y});else if(a==="x"||a==="y"){const g=a==="x"?"y":"x";Sp(c?e.measuredBox[g]:e.layoutBox[g],i[g])}else iE(a,e.layoutBox,i)&&Yi(g=>{const p=c?e.measuredBox[g]:e.layoutBox[g],y=Vn(i[g]);p.max=p.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+y)});const u=Xo();il(u,i,e.layoutBox);const h=Xo();c?il(h,n.applyTransform(o,!0),e.measuredBox):il(h,i,e.layoutBox);const d=!QS(u);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:p,layout:y}=g;if(p&&y){const E=n.options.layoutAnchor||void 0,M=dn();Iu(M,e.layoutBox,p.layoutBox,E);const _=dn();Iu(_,i,y.layoutBox,E),JS(M,_)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=_,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:h,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function mC(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function gC(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function vC(n){n.clearSnapshot()}function Ox(n){n.clearMeasurements()}function xC(n){n.isLayoutDirty=!0,n.updateLayout()}function kx(n){n.isLayoutDirty=!1}function _C(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function yC(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Bx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function SC(n){n.resolveTargetDelta()}function EC(n){n.calcProjection()}function MC(n){n.resetSkewAndRotation()}function TC(n){n.removeLeadSnapshot()}function Vx(n,e,t){n.translate=kt(e.translate,0,t),n.scale=kt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function zx(n,e,t,i){n.min=kt(e.min,t.min,i),n.max=kt(e.max,t.max,i)}function wC(n,e,t,i){zx(n.x,e.x,t.x,i),zx(n.y,e.y,t.y,i)}function AC(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const bC={duration:.45,ease:[.4,0,.1,1]},Hx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Gx=Hx("applewebkit/")&&!Hx("chrome/")?Math.round:xi;function Wx(n){n.min=Gx(n.min),n.max=Gx(n.max)}function CC(n){Wx(n.x),Wx(n.y)}function iE(n,e,t){return n==="position"||n==="preserve-aspect"&&!qb(Nx(e),Nx(t),.2)}function RC(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const PC=nE({attachResizeListener:(n,e)=>cl(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ih={current:void 0},rE=nE({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ih.current){const n=new PC({});n.mount(window),n.setOptions({layoutScroll:!0}),ih.current=n}return ih.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),gl=O.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Xx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function DC(...n){return e=>{let t=!1;const i=n.map(o=>{const a=Xx(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():Xx(n[o],null)}}}}function NC(...n){return O.useCallback(DC(...n),n)}class LC extends O.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(fu(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=t.offsetParent,o=fu(i)&&i.offsetWidth||0,a=fu(i)&&i.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function IC({children:n,isPresent:e,anchorX:t,anchorY:i,root:o,pop:a}){var p;const c=O.useId(),u=O.useRef(null),h=O.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:d}=O.useContext(gl),m=a!==!1?((p=n.props)==null?void 0:p.ref)??(n==null?void 0:n.ref):void 0,g=NC(u,m);return O.useInsertionEffect(()=>{const{width:y,height:E,top:M,left:_,right:S,bottom:P,direction:D}=h.current;if(e||a===!1||!u.current||!y||!E)return;const b=D==="rtl",N=t==="left"?b?`right: ${S}`:`left: ${_}`:b?`left: ${_}`:`right: ${S}`,L=i==="bottom"?`bottom: ${P}`:`top: ${M}`;u.current.dataset.motionPopId=c;const F=document.createElement("style");d&&(F.nonce=d);const T=o??document.head;return T.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${E}px !important;
            ${N}px !important;
            ${L}px !important;
          }
        `),()=>{var I;(I=u.current)==null||I.removeAttribute("data-motion-pop-id"),T.contains(F)&&T.removeChild(F)}},[e]),A.jsx(LC,{isPresent:e,childRef:u,sizeRef:h,pop:a,children:a===!1?n:O.cloneElement(n,{ref:g})})}const FC=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:h,root:d})=>{const m=dl(UC),g=O.useId(),p=O.useRef(t),y=O.useRef(i);Yu(()=>{p.current=t,y.current=i});let E=!0,M=O.useMemo(()=>(E=!1,{id:g,initial:e,isPresent:t,custom:o,onExitComplete:_=>{m.set(_,!0);for(const S of m.values())if(!S)return;i&&i()},register:_=>(m.set(_,!1),()=>{var S;m.delete(_),!p.current&&!m.size&&((S=y.current)==null||S.call(y))})}),[t,m,i]);return a&&E&&(M={...M}),O.useMemo(()=>{m.forEach((_,S)=>m.set(S,!1))},[t]),O.useEffect(()=>{!t&&!m.size&&i&&i()},[t]),n=A.jsx(IC,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:h,root:d,children:n}),A.jsx($u.Provider,{value:M,children:n})};function UC(){return new Map}function sE(n=!0){const e=O.useContext($u);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=O.useId();O.useEffect(()=>{if(n)return o(a)},[n]);const c=O.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const Cc=n=>n.key||"";function jx(n){const e=[];return O.Children.forEach(n,t=>{O.isValidElement(t)&&e.push(t)}),e}const Ep=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:h="top",root:d})=>{const[m,g]=sE(c),p=O.useMemo(()=>jx(n),[n]),y=c&&!m?[]:p.map(Cc),E=O.useRef(!0),M=O.useRef(p),_=dl(()=>new Map),S=O.useRef(new Set),[P,D]=O.useState(p),[b,N]=O.useState(p);Yu(()=>{E.current=!1,M.current=p;for(let T=0;T<b.length;T++){const I=Cc(b[T]);y.includes(I)?(_.delete(I),S.current.delete(I)):_.get(I)!==!0&&_.set(I,!1)}},[b,y.length,y.join("-")]);const L=[];if(p!==P){let T=[...p];for(let I=0;I<b.length;I++){const V=b[I],z=Cc(V);y.includes(z)||(T.splice(I,0,V),L.push(V))}return a==="wait"&&L.length&&(T=L),N(jx(T)),D(p),null}const{forceRender:F}=O.useContext(Sm);return A.jsx(A.Fragment,{children:b.map(T=>{const I=Cc(T),V=c&&!m?!1:p===b||y.includes(I),z=()=>{if(S.current.has(I))return;if(_.has(I))S.current.add(I),_.set(I,!0);else return;let X=!0;_.forEach(de=>{de||(X=!1)}),X&&(F==null||F(),N(M.current),c&&(g==null||g()),i&&i())};return A.jsx(FC,{isPresent:V,initial:!E.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:d,onExitComplete:V?void 0:z,anchorX:u,anchorY:h,children:T},I)})})},oE=O.createContext({strict:!1}),Yx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let $x=!1;function OC(){if($x)return;const n={};for(const e in Yx)n[e]={isEnabled:t=>Yx[e].some(i=>!!t[i])};US(n),$x=!0}function aE(){return OC(),Sb()}function kC(n){const e=aE();for(const t in n)e[t]={...e[t],...n[t]};US(e)}const BC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Fu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||BC.has(n)}let lE=n=>!Fu(n);function VC(n){typeof n=="function"&&(lE=e=>e.startsWith("on")?!Fu(e):n(e))}try{VC(require("@emotion/is-prop-valid").default)}catch{}function zC(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||hn(n[o])||(lE(o)||t===!0&&Fu(o)||!e&&!Fu(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}const Ju=O.createContext({});function HC(n,e){if(Qu(n)){const{initial:t,animate:i}=n;return{initial:t===!1||ll(t)?t:void 0,animate:ll(i)?i:void 0}}return n.inherit!==!1?e:{}}function GC(n){const{initial:e,animate:t}=HC(n,O.useContext(Ju));return O.useMemo(()=>({initial:e,animate:t}),[qx(e),qx(t)])}function qx(n){return Array.isArray(n)?n.join(" "):n}const Xm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function cE(n,e,t){for(const i in e)!hn(e[i])&&!GS(i,t)&&(n[i]=e[i])}function WC({transformTemplate:n},e){return O.useMemo(()=>{const t=Xm();return Gm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function XC(n,e){const t=n.style||{},i={};return cE(i,t,n),Object.assign(i,WC(n,e)),i}function jC(n,e){const t={},i=XC(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const uE=()=>({...Xm(),attrs:{}});function YC(n,e,t,i){const o=O.useMemo(()=>{const a=uE();return WS(a,e,jS(i),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};cE(a,n.style,n),o.style={...a,...o.style}}return o}const $C=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jm(n){return typeof n!="string"||n.includes("-")?!1:!!($C.indexOf(n)>-1||/[A-Z]/u.test(n))}function qC(n,e,t,{latestValues:i},o,a=!1,c){const h=(c??jm(n)?YC:jC)(e,i,o,n),d=zC(e,typeof n=="string",a),m=n!==O.Fragment?{...d,...h,ref:t}:{},{children:g}=e,p=O.useMemo(()=>hn(g)?g.get():g,[g]);return O.createElement(n,{...m,children:p})}function KC({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,o){return{latestValues:ZC(t,i,o,n),renderState:e()}}function ZC(n,e,t,i){const o={},a=i(n,{});for(const p in a)o[p]=gu(a[p]);let{initial:c,animate:u}=n;const h=Qu(n),d=IS(n);e&&d&&!h&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=t?t.initial===!1:!1;m=m||c===!1;const g=m?u:c;if(g&&typeof g!="boolean"&&!Zu(g)){const p=Array.isArray(g)?g:[g];for(let y=0;y<p.length;y++){const E=Fm(n,p[y]);if(E){const{transitionEnd:M,transition:_,...S}=E;for(const P in S){let D=S[P];if(Array.isArray(D)){const b=m?D.length-1:0;D=D[b]}D!==null&&(o[P]=D)}for(const P in M)o[P]=M[P]}}}return o}const fE=n=>(e,t)=>{const i=O.useContext(Ju),o=O.useContext($u),a=()=>KC(n,e,i,o);return t?a():dl(a)},QC=fE({scrapeMotionValuesFromProps:Wm,createRenderState:Xm}),JC=fE({scrapeMotionValuesFromProps:YS,createRenderState:uE}),eR=Symbol.for("motionComponentSymbol");function tR(n,e,t){const i=O.useRef(t);O.useInsertionEffect(()=>{i.current=t});const o=O.useRef(null);return O.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=i.current;if(typeof c=="function")if(a){const h=c(a);typeof h=="function"&&(o.current=h)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const dE=O.createContext({});function Ho(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function nR(n,e,t,i,o,a){var D,b;const{visualElement:c}=O.useContext(Ju),u=O.useContext(oE),h=O.useContext($u),d=O.useContext(gl),m=d.reducedMotion,g=d.skipAnimations,p=O.useRef(null),y=O.useRef(!1);i=i||u.renderer,!p.current&&i&&(p.current=i(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m,skipAnimations:g,isSVG:a}),y.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const E=p.current,M=O.useContext(dE);E&&!E.projection&&o&&(E.type==="html"||E.type==="svg")&&iR(p.current,t,o,M);const _=O.useRef(!1);O.useInsertionEffect(()=>{E&&_.current&&E.update(t,h)});const S=t[ES],P=O.useRef(!!S&&typeof window<"u"&&!((D=window.MotionHandoffIsComplete)!=null&&D.call(window,S))&&((b=window.MotionHasOptimisedAnimation)==null?void 0:b.call(window,S)));return Yu(()=>{y.current=!0,E&&(_.current=!0,window.MotionIsMounted=!0,E.updateFeatures(),E.scheduleRenderMicrotask(),P.current&&E.animationState&&E.animationState.animateChanges())}),O.useEffect(()=>{E&&(!P.current&&E.animationState&&E.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{var N;(N=window.MotionHandoffMarkAsComplete)==null||N.call(window,S)}),P.current=!1),E.enteringChildren=void 0)}),E}function iR(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:h,layoutRoot:d,layoutAnchor:m,layoutCrossfade:g}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:hE(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Ho(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:g,layoutScroll:h,layoutRoot:d,layoutAnchor:m})}function hE(n){if(n)return n.options.allowProjection!==!1?n.projection:hE(n.parent)}function rh(n,{forwardMotionProps:e=!1,type:t}={},i,o){i&&kC(i);const a=t?t==="svg":jm(n),c=a?JC:QC;function u(d,m){let g;const p={...O.useContext(gl),...d,layoutId:rR(d)},{isStatic:y}=p,E=GC(d),M=c(d,y);if(!y&&typeof window<"u"){sR();const _=oR(p);g=_.MeasureLayout,E.visualElement=nR(n,M,p,o,_.ProjectionNode,a)}return A.jsxs(Ju.Provider,{value:E,children:[g&&E.visualElement?A.jsx(g,{visualElement:E.visualElement,...p}):null,qC(n,d,tR(M,E.visualElement,m),M,y,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=O.forwardRef(u);return h[eR]=n,h}function rR({layoutId:n}){const e=O.useContext(Sm).id;return e&&n!==void 0?e+"-"+n:n}function sR(n,e){O.useContext(oE).strict}function oR(n){const e=aE(),{drag:t,layout:i}=e;if(!t&&!i)return{};const o={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(n)||i!=null&&i.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function aR(n,e){if(typeof Proxy>"u")return rh;const t=new Map,i=(a,c)=>rh(a,c,n,e),o=(a,c)=>i(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?i:(t.has(c)||t.set(c,rh(c,void 0,n,e)),t.get(c))})}const lR=(n,e)=>e.isSVG??jm(n)?new kb(e):new Nb(e,{allowProjection:n!==O.Fragment});class cR extends fs{constructor(e){super(e),e.animationState||(e.animationState=Gb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Zu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let uR=0;class fR extends fs{constructor(){super(...arguments),this.id=uR++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const h=Ws(this.node,c,u);if(h){const{transition:d,transitionEnd:m,...g}=h;for(const p in g)(a=this.node.getValue(p))==null||a.jump(g[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const dR={animation:{Feature:cR},exit:{Feature:fR}};function vl(n){return{point:{x:n.pageX,y:n.pageY}}}const hR=n=>e=>Bm(e)&&n(e,vl(e));function rl(n,e,t,i){return cl(n,e,hR(t),i)}const pE=({current:n})=>n?n.ownerDocument.defaultView:null,Kx=(n,e)=>Math.abs(n-e);function pR(n,e){const t=Kx(n.x,e.x),i=Kx(n.y,e.y);return Math.sqrt(t**2+i**2)}const Zx=new Set(["auto","scroll"]);class mE{constructor(e,t,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=E=>{this.handleScroll(E.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Rc(this.lastRawMoveEventInfo,this.transformPagePoint));const E=sh(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,_=pR(E.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!_)return;const{point:S}=E,{timestamp:P}=Tn;this.history.push({...S,timestamp:P});const{onStart:D,onMove:b}=this.handlers;M||(D&&D(this.lastMoveEvent,E),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,E)},this.handlePointerMove=(E,M)=>{this.lastMoveEvent=E,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Rc(M,this.transformPagePoint),Ut.update(this.updatePoint,!0)},this.handlePointerUp=(E,M)=>{this.end();const{onEnd:_,onSessionEnd:S,resumeAnimation:P}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=sh(E.type==="pointercancel"?this.lastMoveEventInfo:Rc(M,this.transformPagePoint),this.history);this.startEvent&&_&&_(E,D),S&&S(E,D)},!Bm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=c,this.contextWindow=o||window;const h=vl(e),d=Rc(h,this.transformPagePoint),{point:m}=d,{timestamp:g}=Tn;this.history=[{...m,timestamp:g}];const{onSessionStart:p}=t;p&&p(e,sh(d,this.history));const y={passive:!0,capture:!0};this.removeListeners=hl(rl(this.contextWindow,"pointermove",this.handlePointerMove,y),rl(this.contextWindow,"pointerup",this.handlePointerUp,y),rl(this.contextWindow,"pointercancel",this.handlePointerUp,y)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const i=getComputedStyle(t);(Zx.has(i.overflowX)||Zx.has(i.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const i=e===window,o=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Ut.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ar(this.updatePoint)}}function Rc(n,e){return e?{point:e(n.point)}:n}function Qx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function sh({point:n},e){return{point:n,delta:Qx(n,gE(e)),offset:Qx(n,mR(e)),velocity:gR(e,.1)}}function mR(n){return n[0]}function gE(n){return n[n.length-1]}function gR(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=gE(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>oi(e)));)t--;if(!i)return{x:0,y:0};i===n[0]&&n.length>2&&o.timestamp-i.timestamp>oi(e)*2&&(i=n[1]);const a=vi(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function vR(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?kt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?kt(t,n,i.max):Math.min(n,t)),n}function Jx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function xR(n,{top:e,left:t,bottom:i,right:o}){return{x:Jx(n.x,t,o),y:Jx(n.y,e,i)}}function e_(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function _R(n,e){return{x:e_(n.x,e.x),y:e_(n.y,e.y)}}function yR(n,e){let t=.5;const i=Vn(n),o=Vn(e);return o>i?t=sl(e.min,e.max-i,n.min):i>o&&(t=sl(n.min,n.max-o,e.min)),nr(0,1,t)}function SR(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Mp=.35;function ER(n=Mp){return n===!1?n=0:n===!0&&(n=Mp),{x:t_(n,"left","right"),y:t_(n,"top","bottom")}}function t_(n,e,t){return{min:n_(n,e),max:n_(n,t)}}function n_(n,e){return typeof n=="number"?n:n[e]||0}const MR=new WeakMap;class TR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=g=>{t&&this.snapToCursor(vl(g).point),this.stopAnimation()},c=(g,p)=>{const{drag:y,dragPropagation:E,onDragStart:M}=this.getProps();if(y&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=qA(y),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yi(S=>{let P=this.getAxisMotionValue(S).get()||0;if(Ji.test(P)){const{projection:D}=this.visualElement;if(D&&D.layout){const b=D.layout.layoutBox[S];b&&(P=Vn(b)*(parseFloat(P)/100))}}this.originPoint[S]=P}),M&&Ut.update(()=>M(g,p),!1,!0),dp(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},u=(g,p)=>{this.latestPointerEvent=g,this.latestPanInfo=p;const{dragPropagation:y,dragDirectionLock:E,onDirectionLock:M,onDrag:_}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:S}=p;if(E&&this.currentDirection===null){this.currentDirection=AR(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",p.point,S),this.updateAxis("y",p.point,S),this.visualElement.render(),_&&Ut.update(()=>_(g,p),!1,!0)},h=(g,p)=>{this.latestPointerEvent=g,this.latestPanInfo=p,this.stop(g,p),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:g}=this.getProps();(g||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new mE(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:h,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:i,contextWindow:pE(this.visualElement),element:this.visualElement.current})}stop(e,t){const i=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!i)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&Ut.postRender(()=>u(i,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!Pc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=vR(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Ho(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=xR(i.layoutBox,e):this.constraints=!1,this.elastic=ER(t),o!==this.constraints&&!Ho(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Yi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=SR(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ho(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=Ab(i,o.root,this.visualElement.getTransformPagePoint());let c=_R(o.layout.layoutBox,a);if(t){const u=t(Mb(c));this.hasMutatedConstraints=!!u,u&&(c=kS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),h=this.constraints||{},d=Yi(m=>{if(!Pc(m,t,this.currentDirection))return;let g=h&&h[m]||{};(c===!0||c===m)&&(g={min:0,max:0});const p=o?200:1e6,y=o?40:1e7,E={type:"inertia",velocity:i?e[m]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...g};return this.startAxisValueAnimation(m,E)});return Promise.all(d).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return dp(this.visualElement,e),i.start(Im(e,i,0,t,this.visualElement,!1))}stopAnimation(){Yi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Yi(t=>{const{drag:i}=this.getProps();if(!Pc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],h=a.get()||0;a.set(e[t]-kt(c,u,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Ho(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Yi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const h=u.get();o[c]=yR({min:h,max:h},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Yi(c=>{if(!Pc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:h,max:d}=this.constraints[c];u.set(kt(h,d,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;MR.set(this.visualElement,this);const e=this.visualElement.current,t=rl(e,"pointerdown",d=>{const{drag:m,dragListener:g=!0}=this.getProps(),p=d.target,y=p!==e&&tb(p);m&&g&&!y&&this.start(d)});let i;const o=()=>{const{dragConstraints:d}=this.getProps();Ho(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),i||(i=wR(e,d.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Ut.read(o);const u=cl(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:m})=>{this.isDragging&&m&&(Yi(g=>{const p=this.getAxisMotionValue(g);p&&(this.originPoint[g]+=d[g].translate,p.set(p.get()+d[g].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),h&&h(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Mp,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function i_(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function wR(n,e,t){const i=cx(n,i_(t)),o=cx(e,i_(t));return()=>{i(),o()}}function Pc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function AR(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class bR extends fs{constructor(e){super(e),this.removeGroupControls=xi,this.removeListeners=xi,this.controls=new TR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const oh=n=>(e,t)=>{n&&Ut.update(()=>n(e,t),!1,!0)};class CR extends fs{constructor(){super(...arguments),this.removePointerDownListener=xi}onPointerDown(e){this.session=new mE(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pE(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:oh(e),onStart:oh(t),onMove:oh(i),onEnd:(a,c)=>{delete this.session,o&&Ut.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=rl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ah=!1;class RR extends O.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),ah&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),vu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,{projection:c}=i;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),ah=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Ut.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=t,i.root.didUpdate(),km.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;ah=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function vE(n){const[e,t]=sE(),i=O.useContext(Sm);return A.jsx(RR,{...n,layoutGroup:i,switchLayoutGroup:O.useContext(dE),isPresent:e,safeToRemove:t})}const PR={pan:{Feature:CR},drag:{Feature:bR,ProjectionNode:rE,MeasureLayout:vE}};function r_(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&Ut.postRender(()=>a(e,vl(e)))}class DR extends fs{mount(){const{current:e}=this.node;e&&(this.unmount=ZA(e,(t,i)=>(r_(this.node,i,"Start"),o=>r_(this.node,o,"End"))))}unmount(){}}class NR extends fs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hl(cl(this.node.current,"focus",()=>this.onFocus()),cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function s_(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&Ut.postRender(()=>a(e,vl(e)))}class LR extends fs{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=ib(e,(o,a)=>(s_(this.node,a,"Start"),(c,{success:u})=>s_(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Tp=new WeakMap,lh=new WeakMap,IR=n=>{const e=Tp.get(n.target);e&&e(n)},FR=n=>{n.forEach(IR)};function UR({root:n,...e}){const t=n||document;lh.has(t)||lh.set(t,{});const i=lh.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(FR,{root:n,...e})),i[o]}function OR(n,e,t){const i=UR(e);return Tp.set(n,t),i.observe(n),()=>{Tp.delete(n),i.unobserve(n)}}const kR={some:0,all:1};class BR extends fs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var h;(h=this.stopObserver)==null||h.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:kR[o]},u=d=>{const{isIntersecting:m}=d;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:p}=this.node.getProps(),y=m?g:p;y&&y(d)};this.stopObserver=OR(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(VR(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function VR({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const zR={inView:{Feature:BR},tap:{Feature:LR},focus:{Feature:NR},hover:{Feature:DR}},HR={layout:{ProjectionNode:rE,MeasureLayout:vE}},GR={...dR,...zR,...PR,...HR},Er=aR(GR,lR);function Uu(n){const e=dl(()=>Xs(n)),{isStatic:t}=O.useContext(gl);if(t){const[,i]=O.useState(n);O.useEffect(()=>e.on("change",i),[])}return e}function xE(n,e){const t=Uu(e()),i=()=>t.set(e());return i(),Yu(()=>{const o=()=>Ut.preRender(i,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Ar(i)}}),t}function WR(n){nl.current=[],n();const e=xE(nl.current,n);return nl.current=void 0,e}function XR(n,e,t,i){if(typeof n=="function")return WR(n);const a=hb(e,t,i),c=Array.isArray(n)?o_(n,a):o_([n],([h])=>a(h)),u=Array.isArray(n)?void 0:n.accelerate;return u&&!u.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(i==null?void 0:i.clamp)!==!1&&(c.accelerate={...u,times:e,keyframes:t,isTransformed:!0}),c}function o_(n,e){const t=dl(()=>[]);return xE(n,()=>{t.length=0;const i=n.length;for(let o=0;o<i;o++)t[o]=n[o].get();return e(t)})}function jR(n,e={}){const{isStatic:t}=O.useContext(gl),i=()=>hn(n)?n.get():n;if(t)return XR(i);const o=Uu(i());return O.useInsertionEffect(()=>pb(o,n,e),[o,JSON.stringify(e)]),o}function Dc(n,e={}){return jR(n,{type:"spring",...e})}function ls(n,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(n==null||n(o),t===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function a_(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function _E(...n){return e=>{let t=!1;const i=n.map(o=>{const a=a_(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():a_(n[o],null)}}}}function Zs(...n){return O.useCallback(_E(...n),n)}function YR(n,e){const t=O.createContext(e),i=a=>{const{children:c,...u}=a,h=O.useMemo(()=>u,Object.values(u));return A.jsx(t.Provider,{value:h,children:c})};i.displayName=n+"Provider";function o(a){const c=O.useContext(t);if(c)return c;if(e!==void 0)return e;throw new Error(`\`${a}\` must be used within \`${n}\``)}return[i,o]}function $R(n,e=[]){let t=[];function i(a,c){const u=O.createContext(c),h=t.length;t=[...t,c];const d=g=>{var S;const{scope:p,children:y,...E}=g,M=((S=p==null?void 0:p[n])==null?void 0:S[h])||u,_=O.useMemo(()=>E,Object.values(E));return A.jsx(M.Provider,{value:_,children:y})};d.displayName=a+"Provider";function m(g,p){var M;const y=((M=p==null?void 0:p[n])==null?void 0:M[h])||u,E=O.useContext(y);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${g}\` must be used within \`${a}\``)}return[d,m]}const o=()=>{const a=t.map(c=>O.createContext(c));return function(u){const h=(u==null?void 0:u[n])||a;return O.useMemo(()=>({[`__scope${n}`]:{...u,[n]:h}}),[u,h])}};return o.scopeName=n,[i,qR(o,...e)]}function qR(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const c=i.reduce((u,{useScope:h,scopeName:d})=>{const g=h(a)[`__scope${d}`];return{...u,...g}},{});return O.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}var Ou=globalThis!=null&&globalThis.document?O.useLayoutEffect:()=>{},KR=Tw.useId||(()=>{}),ZR=0;function ch(n){const[e,t]=O.useState(KR());return Ou(()=>{t(i=>i??String(ZR++))},[n]),n||(e?`radix-${e}`:"")}function js(n){const e=O.useRef(n);return O.useEffect(()=>{e.current=n}),O.useMemo(()=>(...t)=>{var i;return(i=e.current)==null?void 0:i.call(e,...t)},[])}function QR({prop:n,defaultProp:e,onChange:t=()=>{}}){const[i,o]=JR({defaultProp:e,onChange:t}),a=n!==void 0,c=a?n:i,u=js(t),h=O.useCallback(d=>{if(a){const g=typeof d=="function"?d(n):d;g!==n&&u(g)}else o(d)},[a,n,o,u]);return[c,h]}function JR({defaultProp:n,onChange:e}){const t=O.useState(n),[i]=t,o=O.useRef(i),a=js(e);return O.useEffect(()=>{o.current!==i&&(a(i),o.current=i)},[i,o,a]),t}var yE=Ny();const eP=Dy(yE);var Ym=O.forwardRef((n,e)=>{const{children:t,...i}=n,o=O.Children.toArray(t),a=o.find(nP);if(a){const c=a.props.children,u=o.map(h=>h===a?O.Children.count(c)>1?O.Children.only(null):O.isValidElement(c)?c.props.children:null:h);return A.jsx(wp,{...i,ref:e,children:O.isValidElement(c)?O.cloneElement(c,void 0,u):null})}return A.jsx(wp,{...i,ref:e,children:t})});Ym.displayName="Slot";var wp=O.forwardRef((n,e)=>{const{children:t,...i}=n;if(O.isValidElement(t)){const o=rP(t),a=iP(i,t.props);return t.type!==O.Fragment&&(a.ref=e?_E(e,o):o),O.cloneElement(t,a)}return O.Children.count(t)>1?O.Children.only(null):null});wp.displayName="SlotClone";var tP=({children:n})=>A.jsx(A.Fragment,{children:n});function nP(n){return O.isValidElement(n)&&n.type===tP}function iP(n,e){const t={...e};for(const i in e){const o=n[i],a=e[i];/^on[A-Z]/.test(i)?o&&a?t[i]=(...u)=>{a(...u),o(...u)}:o&&(t[i]=o):i==="style"?t[i]={...o,...a}:i==="className"&&(t[i]=[o,a].filter(Boolean).join(" "))}return{...n,...t}}function rP(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var sP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Pr=sP.reduce((n,e)=>{const t=O.forwardRef((i,o)=>{const{asChild:a,...c}=i,u=a?Ym:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),A.jsx(u,{...c,ref:o})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function oP(n,e){n&&yE.flushSync(()=>n.dispatchEvent(e))}function aP(n,e=globalThis==null?void 0:globalThis.document){const t=js(n);O.useEffect(()=>{const i=o=>{o.key==="Escape"&&t(o)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[t,e])}var lP="DismissableLayer",Ap="dismissableLayer.update",cP="dismissableLayer.pointerDownOutside",uP="dismissableLayer.focusOutside",l_,SE=O.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),EE=O.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:c,onDismiss:u,...h}=n,d=O.useContext(SE),[m,g]=O.useState(null),p=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=O.useState({}),E=Zs(e,F=>g(F)),M=Array.from(d.layers),[_]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),S=M.indexOf(_),P=m?M.indexOf(m):-1,D=d.layersWithOutsidePointerEventsDisabled.size>0,b=P>=S,N=hP(F=>{const T=F.target,I=[...d.branches].some(V=>V.contains(T));!b||I||(o==null||o(F),c==null||c(F),F.defaultPrevented||u==null||u())},p),L=pP(F=>{const T=F.target;[...d.branches].some(V=>V.contains(T))||(a==null||a(F),c==null||c(F),F.defaultPrevented||u==null||u())},p);return aP(F=>{P===d.layers.size-1&&(i==null||i(F),!F.defaultPrevented&&u&&(F.preventDefault(),u()))},p),O.useEffect(()=>{if(m)return t&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(l_=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(m)),d.layers.add(m),c_(),()=>{t&&d.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=l_)}},[m,p,t,d]),O.useEffect(()=>()=>{m&&(d.layers.delete(m),d.layersWithOutsidePointerEventsDisabled.delete(m),c_())},[m,d]),O.useEffect(()=>{const F=()=>y({});return document.addEventListener(Ap,F),()=>document.removeEventListener(Ap,F)},[]),A.jsx(Pr.div,{...h,ref:E,style:{pointerEvents:D?b?"auto":"none":void 0,...n.style},onFocusCapture:ls(n.onFocusCapture,L.onFocusCapture),onBlurCapture:ls(n.onBlurCapture,L.onBlurCapture),onPointerDownCapture:ls(n.onPointerDownCapture,N.onPointerDownCapture)})});EE.displayName=lP;var fP="DismissableLayerBranch",dP=O.forwardRef((n,e)=>{const t=O.useContext(SE),i=O.useRef(null),o=Zs(e,i);return O.useEffect(()=>{const a=i.current;if(a)return t.branches.add(a),()=>{t.branches.delete(a)}},[t.branches]),A.jsx(Pr.div,{...n,ref:o})});dP.displayName=fP;function hP(n,e=globalThis==null?void 0:globalThis.document){const t=js(n),i=O.useRef(!1),o=O.useRef(()=>{});return O.useEffect(()=>{const a=u=>{if(u.target&&!i.current){let h=function(){ME(cP,t,d,{discrete:!0})};const d={originalEvent:u};u.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=h,e.addEventListener("click",o.current,{once:!0})):h()}else e.removeEventListener("click",o.current);i.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",a),e.removeEventListener("click",o.current)}},[e,t]),{onPointerDownCapture:()=>i.current=!0}}function pP(n,e=globalThis==null?void 0:globalThis.document){const t=js(n),i=O.useRef(!1);return O.useEffect(()=>{const o=a=>{a.target&&!i.current&&ME(uP,t,{originalEvent:a},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function c_(){const n=new CustomEvent(Ap);document.dispatchEvent(n)}function ME(n,e,t,{discrete:i}){const o=t.originalEvent.target,a=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&o.addEventListener(n,e,{once:!0}),i?oP(o,a):o.dispatchEvent(a)}var uh="focusScope.autoFocusOnMount",fh="focusScope.autoFocusOnUnmount",u_={bubbles:!1,cancelable:!0},mP="FocusScope",TE=O.forwardRef((n,e)=>{const{loop:t=!1,trapped:i=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...c}=n,[u,h]=O.useState(null),d=js(o),m=js(a),g=O.useRef(null),p=Zs(e,M=>h(M)),y=O.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;O.useEffect(()=>{if(i){let M=function(D){if(y.paused||!u)return;const b=D.target;u.contains(b)?g.current=b:is(g.current,{select:!0})},_=function(D){if(y.paused||!u)return;const b=D.relatedTarget;b!==null&&(u.contains(b)||is(g.current,{select:!0}))},S=function(D){if(document.activeElement===document.body)for(const N of D)N.removedNodes.length>0&&is(u)};document.addEventListener("focusin",M),document.addEventListener("focusout",_);const P=new MutationObserver(S);return u&&P.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",M),document.removeEventListener("focusout",_),P.disconnect()}}},[i,u,y.paused]),O.useEffect(()=>{if(u){d_.add(y);const M=document.activeElement;if(!u.contains(M)){const S=new CustomEvent(uh,u_);u.addEventListener(uh,d),u.dispatchEvent(S),S.defaultPrevented||(gP(SP(wE(u)),{select:!0}),document.activeElement===M&&is(u))}return()=>{u.removeEventListener(uh,d),setTimeout(()=>{const S=new CustomEvent(fh,u_);u.addEventListener(fh,m),u.dispatchEvent(S),S.defaultPrevented||is(M??document.body,{select:!0}),u.removeEventListener(fh,m),d_.remove(y)},0)}}},[u,d,m,y]);const E=O.useCallback(M=>{if(!t&&!i||y.paused)return;const _=M.key==="Tab"&&!M.altKey&&!M.ctrlKey&&!M.metaKey,S=document.activeElement;if(_&&S){const P=M.currentTarget,[D,b]=vP(P);D&&b?!M.shiftKey&&S===b?(M.preventDefault(),t&&is(D,{select:!0})):M.shiftKey&&S===D&&(M.preventDefault(),t&&is(b,{select:!0})):S===P&&M.preventDefault()}},[t,i,y.paused]);return A.jsx(Pr.div,{tabIndex:-1,...c,ref:p,onKeyDown:E})});TE.displayName=mP;function gP(n,{select:e=!1}={}){const t=document.activeElement;for(const i of n)if(is(i,{select:e}),document.activeElement!==t)return}function vP(n){const e=wE(n),t=f_(e,n),i=f_(e.reverse(),n);return[t,i]}function wE(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function f_(n,e){for(const t of n)if(!xP(t,{upTo:e}))return t}function xP(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function _P(n){return n instanceof HTMLInputElement&&"select"in n}function is(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&_P(n)&&e&&n.select()}}var d_=yP();function yP(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=h_(n,e),n.unshift(e)},remove(e){var t;n=h_(n,e),(t=n[0])==null||t.resume()}}}function h_(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function SP(n){return n.filter(e=>e.tagName!=="A")}var EP="Portal",AE=O.forwardRef((n,e)=>{var u;const{container:t,...i}=n,[o,a]=O.useState(!1);Ou(()=>a(!0),[]);const c=t||o&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?eP.createPortal(A.jsx(Pr.div,{...i,ref:e}),c):null});AE.displayName=EP;function MP(n,e){return O.useReducer((t,i)=>e[t][i]??t,n)}var ef=n=>{const{present:e,children:t}=n,i=TP(e),o=typeof t=="function"?t({present:i.isPresent}):O.Children.only(t),a=Zs(i.ref,wP(o));return typeof t=="function"||i.isPresent?O.cloneElement(o,{ref:a}):null};ef.displayName="Presence";function TP(n){const[e,t]=O.useState(),i=O.useRef({}),o=O.useRef(n),a=O.useRef("none"),c=n?"mounted":"unmounted",[u,h]=MP(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return O.useEffect(()=>{const d=Nc(i.current);a.current=u==="mounted"?d:"none"},[u]),Ou(()=>{const d=i.current,m=o.current;if(m!==n){const p=a.current,y=Nc(d);n?h("MOUNT"):y==="none"||(d==null?void 0:d.display)==="none"?h("UNMOUNT"):h(m&&p!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,h]),Ou(()=>{if(e){let d;const m=e.ownerDocument.defaultView??window,g=y=>{const M=Nc(i.current).includes(y.animationName);if(y.target===e&&M&&(h("ANIMATION_END"),!o.current)){const _=e.style.animationFillMode;e.style.animationFillMode="forwards",d=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=_)})}},p=y=>{y.target===e&&(a.current=Nc(i.current))};return e.addEventListener("animationstart",p),e.addEventListener("animationcancel",g),e.addEventListener("animationend",g),()=>{m.clearTimeout(d),e.removeEventListener("animationstart",p),e.removeEventListener("animationcancel",g),e.removeEventListener("animationend",g)}}else h("ANIMATION_END")},[e,h]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:O.useCallback(d=>{d&&(i.current=getComputedStyle(d)),t(d)},[])}}function Nc(n){return(n==null?void 0:n.animationName)||"none"}function wP(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var dh=0;function AP(){O.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??p_()),document.body.insertAdjacentElement("beforeend",n[1]??p_()),dh++,()=>{dh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),dh--}},[])}function p_(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Ki=function(){return Ki=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ki.apply(this,arguments)};function bE(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function bP(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var xu="right-scroll-bar-position",_u="width-before-scroll-bar",CP="with-scroll-bars-hidden",RP="--removed-body-scroll-bar-size";function hh(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function PP(n,e){var t=O.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(i){var o=t.value;o!==i&&(t.value=i,t.callback(i,o))}}}})[0];return t.callback=e,t.facade}var DP=typeof window<"u"?O.useLayoutEffect:O.useEffect,m_=new WeakMap;function NP(n,e){var t=PP(null,function(i){return n.forEach(function(o){return hh(o,i)})});return DP(function(){var i=m_.get(t);if(i){var o=new Set(i),a=new Set(n),c=t.current;o.forEach(function(u){a.has(u)||hh(u,null)}),a.forEach(function(u){o.has(u)||hh(u,c)})}m_.set(t,n)},[n]),t}function LP(n){return n}function IP(n,e){e===void 0&&(e=LP);var t=[],i=!1,o={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(a){var c=e(a,i);return t.push(c),function(){t=t.filter(function(u){return u!==c})}},assignSyncMedium:function(a){for(i=!0;t.length;){var c=t;t=[],c.forEach(a)}t={push:function(u){return a(u)},filter:function(){return t}}},assignMedium:function(a){i=!0;var c=[];if(t.length){var u=t;t=[],u.forEach(a),c=t}var h=function(){var m=c;c=[],m.forEach(a)},d=function(){return Promise.resolve().then(h)};d(),t={push:function(m){c.push(m),d()},filter:function(m){return c=c.filter(m),t}}}};return o}function FP(n){n===void 0&&(n={});var e=IP(null);return e.options=Ki({async:!0,ssr:!1},n),e}var CE=function(n){var e=n.sideCar,t=bE(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return O.createElement(i,Ki({},t))};CE.isSideCarExport=!0;function UP(n,e){return n.useMedium(e),CE}var RE=FP(),ph=function(){},tf=O.forwardRef(function(n,e){var t=O.useRef(null),i=O.useState({onScrollCapture:ph,onWheelCapture:ph,onTouchMoveCapture:ph}),o=i[0],a=i[1],c=n.forwardProps,u=n.children,h=n.className,d=n.removeScrollBar,m=n.enabled,g=n.shards,p=n.sideCar,y=n.noRelative,E=n.noIsolation,M=n.inert,_=n.allowPinchZoom,S=n.as,P=S===void 0?"div":S,D=n.gapMode,b=bE(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),N=p,L=NP([t,e]),F=Ki(Ki({},b),o);return O.createElement(O.Fragment,null,m&&O.createElement(N,{sideCar:RE,removeScrollBar:d,shards:g,noRelative:y,noIsolation:E,inert:M,setCallbacks:a,allowPinchZoom:!!_,lockRef:t,gapMode:D}),c?O.cloneElement(O.Children.only(u),Ki(Ki({},F),{ref:L})):O.createElement(P,Ki({},F,{className:h,ref:L}),u))});tf.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};tf.classNames={fullWidth:_u,zeroRight:xu};var OP=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function kP(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=OP();return e&&n.setAttribute("nonce",e),n}function BP(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function VP(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var zP=function(){var n=0,e=null;return{add:function(t){n==0&&(e=kP())&&(BP(e,t),VP(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},HP=function(){var n=zP();return function(e,t){O.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},PE=function(){var n=HP(),e=function(t){var i=t.styles,o=t.dynamic;return n(i,o),null};return e},GP={left:0,top:0,right:0,gap:0},mh=function(n){return parseInt(n||"",10)||0},WP=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[mh(t),mh(i),mh(o)]},XP=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return GP;var e=WP(n),t=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-t+e[2]-e[0])}},jP=PE(),jo="data-scroll-locked",YP=function(n,e,t,i){var o=n.left,a=n.top,c=n.right,u=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(CP,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(u,"px ").concat(i,`;
  }
  body[`).concat(jo,`] {
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
  
  .`).concat(xu,` {
    right: `).concat(u,"px ").concat(i,`;
  }
  
  .`).concat(_u,` {
    margin-right: `).concat(u,"px ").concat(i,`;
  }
  
  .`).concat(xu," .").concat(xu,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(_u," .").concat(_u,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(jo,`] {
    `).concat(RP,": ").concat(u,`px;
  }
`)},g_=function(){var n=parseInt(document.body.getAttribute(jo)||"0",10);return isFinite(n)?n:0},$P=function(){O.useEffect(function(){return document.body.setAttribute(jo,(g_()+1).toString()),function(){var n=g_()-1;n<=0?document.body.removeAttribute(jo):document.body.setAttribute(jo,n.toString())}},[])},qP=function(n){var e=n.noRelative,t=n.noImportant,i=n.gapMode,o=i===void 0?"margin":i;$P();var a=O.useMemo(function(){return XP(o)},[o]);return O.createElement(jP,{styles:YP(a,!e,o,t?"":"!important")})},bp=!1;if(typeof window<"u")try{var Lc=Object.defineProperty({},"passive",{get:function(){return bp=!0,!0}});window.addEventListener("test",Lc,Lc),window.removeEventListener("test",Lc,Lc)}catch{bp=!1}var To=bp?{passive:!1}:!1,KP=function(n){return n.tagName==="TEXTAREA"},DE=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!KP(n)&&t[e]==="visible")},ZP=function(n){return DE(n,"overflowY")},QP=function(n){return DE(n,"overflowX")},v_=function(n,e){var t=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var o=NE(n,i);if(o){var a=LE(n,i),c=a[1],u=a[2];if(c>u)return!0}i=i.parentNode}while(i&&i!==t.body);return!1},JP=function(n){var e=n.scrollTop,t=n.scrollHeight,i=n.clientHeight;return[e,t,i]},e2=function(n){var e=n.scrollLeft,t=n.scrollWidth,i=n.clientWidth;return[e,t,i]},NE=function(n,e){return n==="v"?ZP(e):QP(e)},LE=function(n,e){return n==="v"?JP(e):e2(e)},t2=function(n,e){return n==="h"&&e==="rtl"?-1:1},n2=function(n,e,t,i,o){var a=t2(n,window.getComputedStyle(e).direction),c=a*i,u=t.target,h=e.contains(u),d=!1,m=c>0,g=0,p=0;do{if(!u)break;var y=LE(n,u),E=y[0],M=y[1],_=y[2],S=M-_-a*E;(E||S)&&NE(n,u)&&(g+=S,p+=E);var P=u.parentNode;u=P&&P.nodeType===Node.DOCUMENT_FRAGMENT_NODE?P.host:P}while(!h&&u!==document.body||h&&(e.contains(u)||e===u));return(m&&Math.abs(g)<1||!m&&Math.abs(p)<1)&&(d=!0),d},Ic=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},x_=function(n){return[n.deltaX,n.deltaY]},__=function(n){return n&&"current"in n?n.current:n},i2=function(n,e){return n[0]===e[0]&&n[1]===e[1]},r2=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},s2=0,wo=[];function o2(n){var e=O.useRef([]),t=O.useRef([0,0]),i=O.useRef(),o=O.useState(s2++)[0],a=O.useState(PE)[0],c=O.useRef(n);O.useEffect(function(){c.current=n},[n]),O.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var M=bP([n.lockRef.current],(n.shards||[]).map(__),!0).filter(Boolean);return M.forEach(function(_){return _.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),M.forEach(function(_){return _.classList.remove("allow-interactivity-".concat(o))})}}},[n.inert,n.lockRef.current,n.shards]);var u=O.useCallback(function(M,_){if("touches"in M&&M.touches.length===2||M.type==="wheel"&&M.ctrlKey)return!c.current.allowPinchZoom;var S=Ic(M),P=t.current,D="deltaX"in M?M.deltaX:P[0]-S[0],b="deltaY"in M?M.deltaY:P[1]-S[1],N,L=M.target,F=Math.abs(D)>Math.abs(b)?"h":"v";if("touches"in M&&F==="h"&&L.type==="range")return!1;var T=window.getSelection(),I=T&&T.anchorNode,V=I?I===L||I.contains(L):!1;if(V)return!1;var z=v_(F,L);if(!z)return!0;if(z?N=F:(N=F==="v"?"h":"v",z=v_(F,L)),!z)return!1;if(!i.current&&"changedTouches"in M&&(D||b)&&(i.current=N),!N)return!0;var X=i.current||N;return n2(X,_,M,X==="h"?D:b)},[]),h=O.useCallback(function(M){var _=M;if(!(!wo.length||wo[wo.length-1]!==a)){var S="deltaY"in _?x_(_):Ic(_),P=e.current.filter(function(N){return N.name===_.type&&(N.target===_.target||_.target===N.shadowParent)&&i2(N.delta,S)})[0];if(P&&P.should){_.cancelable&&_.preventDefault();return}if(!P){var D=(c.current.shards||[]).map(__).filter(Boolean).filter(function(N){return N.contains(_.target)}),b=D.length>0?u(_,D[0]):!c.current.noIsolation;b&&_.cancelable&&_.preventDefault()}}},[]),d=O.useCallback(function(M,_,S,P){var D={name:M,delta:_,target:S,should:P,shadowParent:a2(S)};e.current.push(D),setTimeout(function(){e.current=e.current.filter(function(b){return b!==D})},1)},[]),m=O.useCallback(function(M){t.current=Ic(M),i.current=void 0},[]),g=O.useCallback(function(M){d(M.type,x_(M),M.target,u(M,n.lockRef.current))},[]),p=O.useCallback(function(M){d(M.type,Ic(M),M.target,u(M,n.lockRef.current))},[]);O.useEffect(function(){return wo.push(a),n.setCallbacks({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:p}),document.addEventListener("wheel",h,To),document.addEventListener("touchmove",h,To),document.addEventListener("touchstart",m,To),function(){wo=wo.filter(function(M){return M!==a}),document.removeEventListener("wheel",h,To),document.removeEventListener("touchmove",h,To),document.removeEventListener("touchstart",m,To)}},[]);var y=n.removeScrollBar,E=n.inert;return O.createElement(O.Fragment,null,E?O.createElement(a,{styles:r2(o)}):null,y?O.createElement(qP,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function a2(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const l2=UP(RE,o2);var IE=O.forwardRef(function(n,e){return O.createElement(tf,Ki({},n,{ref:e,sideCar:l2}))});IE.classNames=tf.classNames;var c2=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Ao=new WeakMap,Fc=new WeakMap,Uc={},gh=0,FE=function(n){return n&&(n.host||FE(n.parentNode))},u2=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=FE(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},f2=function(n,e,t,i){var o=u2(e,Array.isArray(n)?n:[n]);Uc[t]||(Uc[t]=new WeakMap);var a=Uc[t],c=[],u=new Set,h=new Set(o),d=function(g){!g||u.has(g)||(u.add(g),d(g.parentNode))};o.forEach(d);var m=function(g){!g||h.has(g)||Array.prototype.forEach.call(g.children,function(p){if(u.has(p))m(p);else try{var y=p.getAttribute(i),E=y!==null&&y!=="false",M=(Ao.get(p)||0)+1,_=(a.get(p)||0)+1;Ao.set(p,M),a.set(p,_),c.push(p),M===1&&E&&Fc.set(p,!0),_===1&&p.setAttribute(t,"true"),E||p.setAttribute(i,"true")}catch(S){console.error("aria-hidden: cannot operate on ",p,S)}})};return m(e),u.clear(),gh++,function(){c.forEach(function(g){var p=Ao.get(g)-1,y=a.get(g)-1;Ao.set(g,p),a.set(g,y),p||(Fc.has(g)||g.removeAttribute(i),Fc.delete(g)),y||g.removeAttribute(t)}),gh--,gh||(Ao=new WeakMap,Ao=new WeakMap,Fc=new WeakMap,Uc={})}},d2=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),o=c2(n);return o?(i.push.apply(i,Array.from(o.querySelectorAll("[aria-live], script"))),f2(i,o,t,"aria-hidden")):function(){return null}},$m="Dialog",[UE]=$R($m),[h2,ki]=UE($m),OE=n=>{const{__scopeDialog:e,children:t,open:i,defaultOpen:o,onOpenChange:a,modal:c=!0}=n,u=O.useRef(null),h=O.useRef(null),[d=!1,m]=QR({prop:i,defaultProp:o,onChange:a});return A.jsx(h2,{scope:e,triggerRef:u,contentRef:h,contentId:ch(),titleId:ch(),descriptionId:ch(),open:d,onOpenChange:m,onOpenToggle:O.useCallback(()=>m(g=>!g),[m]),modal:c,children:t})};OE.displayName=$m;var kE="DialogTrigger",BE=O.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=ki(kE,t),a=Zs(e,o.triggerRef);return A.jsx(Pr.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Zm(o.open),...i,ref:a,onClick:ls(n.onClick,o.onOpenToggle)})});BE.displayName=kE;var qm="DialogPortal",[p2,VE]=UE(qm,{forceMount:void 0}),zE=n=>{const{__scopeDialog:e,forceMount:t,children:i,container:o}=n,a=ki(qm,e);return A.jsx(p2,{scope:e,forceMount:t,children:O.Children.map(i,c=>A.jsx(ef,{present:t||a.open,children:A.jsx(AE,{asChild:!0,container:o,children:c})}))})};zE.displayName=qm;var ku="DialogOverlay",HE=O.forwardRef((n,e)=>{const t=VE(ku,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,a=ki(ku,n.__scopeDialog);return a.modal?A.jsx(ef,{present:i||a.open,children:A.jsx(m2,{...o,ref:e})}):null});HE.displayName=ku;var m2=O.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=ki(ku,t);return A.jsx(IE,{as:Ym,allowPinchZoom:!0,shards:[o.contentRef],children:A.jsx(Pr.div,{"data-state":Zm(o.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),Ys="DialogContent",GE=O.forwardRef((n,e)=>{const t=VE(Ys,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,a=ki(Ys,n.__scopeDialog);return A.jsx(ef,{present:i||a.open,children:a.modal?A.jsx(g2,{...o,ref:e}):A.jsx(v2,{...o,ref:e})})});GE.displayName=Ys;var g2=O.forwardRef((n,e)=>{const t=ki(Ys,n.__scopeDialog),i=O.useRef(null),o=Zs(e,t.contentRef,i);return O.useEffect(()=>{const a=i.current;if(a)return d2(a)},[]),A.jsx(WE,{...n,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ls(n.onCloseAutoFocus,a=>{var c;a.preventDefault(),(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:ls(n.onPointerDownOutside,a=>{const c=a.detail.originalEvent,u=c.button===0&&c.ctrlKey===!0;(c.button===2||u)&&a.preventDefault()}),onFocusOutside:ls(n.onFocusOutside,a=>a.preventDefault())})}),v2=O.forwardRef((n,e)=>{const t=ki(Ys,n.__scopeDialog),i=O.useRef(!1),o=O.useRef(!1);return A.jsx(WE,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c,u;(c=n.onCloseAutoFocus)==null||c.call(n,a),a.defaultPrevented||(i.current||(u=t.triggerRef.current)==null||u.focus(),a.preventDefault()),i.current=!1,o.current=!1},onInteractOutside:a=>{var h,d;(h=n.onInteractOutside)==null||h.call(n,a),a.defaultPrevented||(i.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=a.target;((d=t.triggerRef.current)==null?void 0:d.contains(c))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),WE=O.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:a,...c}=n,u=ki(Ys,t),h=O.useRef(null),d=Zs(e,h);return AP(),A.jsxs(A.Fragment,{children:[A.jsx(TE,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:o,onUnmountAutoFocus:a,children:A.jsx(EE,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":Zm(u.open),...c,ref:d,onDismiss:()=>u.onOpenChange(!1)})}),A.jsxs(A.Fragment,{children:[A.jsx(x2,{titleId:u.titleId}),A.jsx(y2,{contentRef:h,descriptionId:u.descriptionId})]})]})}),Km="DialogTitle",XE=O.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=ki(Km,t);return A.jsx(Pr.h2,{id:o.titleId,...i,ref:e})});XE.displayName=Km;var jE="DialogDescription",YE=O.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=ki(jE,t);return A.jsx(Pr.p,{id:o.descriptionId,...i,ref:e})});YE.displayName=jE;var $E="DialogClose",qE=O.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=ki($E,t);return A.jsx(Pr.button,{type:"button",...i,ref:e,onClick:ls(n.onClick,()=>o.onOpenChange(!1))})});qE.displayName=$E;function Zm(n){return n?"open":"closed"}var KE="DialogTitleWarning",[qF,ZE]=YR(KE,{contentName:Ys,titleName:Km,docsSlug:"dialog"}),x2=({titleId:n})=>{const e=ZE(KE),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return O.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},_2="DialogDescriptionWarning",y2=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ZE(_2).contentName}}.`;return O.useEffect(()=>{var a;const o=(a=n.current)==null?void 0:a.getAttribute("aria-describedby");e&&o&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},y_=OE,S_=BE,E_=zE,M_=HE,T_=GE,S2=XE,E2=YE,w_=qE;const M2=[{id:"FIELD-HISTORY/003",year:"MAY 2026 - PRESENT",role:"SOFTWARE DEVELOPER",comp:"MOUNTAINVIEW BUSINESS SOLUTION INC.",type:"FULL-TIME",img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",desc:"Developed and maintained full-stack internal tooling and database scripts using ASP.NET, MSSQL, and PowerBuilder.",refs:[]},{id:"FIELD-HISTORY/002",year:"DEC 2025 - FEB 2026",role:"SOFTWARE ENG. INTERN",comp:"BLANKWORKS STUDIO",type:"INTERNSHIP",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",desc:"Engineered high-performance notification systems with BullMQ and MongoDB, resolved critical billing bugs in production, and modernized legacy React/Next.js codebases.",refs:[]},{id:"FIELD-HISTORY/001",year:"NOV 2024 - APR 2026",role:"WEB DEVELOPER",comp:"FREELANCE",type:"CONTRACT",img:"https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80",desc:"Delivered SEO optimizations for lifestyle blogs and built custom Shopify e-commerce solutions with automated Printify fulfillment.",refs:[]}],T2=[{id:"BUILT/002",num:"002",name:"SIP WEST",type:"WEB APPLICATION",year:"2025",status:"COMPLETED",img:"/sipwests.png",github:"https://github.com/ChristianBuena/sipwest-theme",live:"https://sipwest.com",challenge:"University departments needed a unified system to track physical assets across campuses without relying on fragmented spreadsheets.",solution:"A centralized dashboard and scanning interface, built to solve scheduling problems and manage physical assets efficiently across multiple campuses.",stack:[{name:"Lead Developer",color:"bg-blue-400"},{name:"Liquid",color:"bg-teal-400"},{name:"Shopify",color:"bg-blue-600"},{name:"Web Design",color:"bg-sky-400"}],origins:[{id:"LAB/003",label:"LAB / 003"},{id:"FIELD-HISTORY/002",label:"FIELD HISTORY / 002"}]},{id:"BUILT/003",num:"003",name:"ENDING",type:"NARRATIVE GAME",year:"2025",status:"ONGOING",img:"/ending.png",github:"https://github.com/ChristianBuena/ending",live:"#",challenge:"Creating an immersive, choice-driven narrative system that runs smoothly in the browser while maintaining complex state branches and save files.",solution:"Designed a state-machine driven dialog engine with custom local storage serialization and pixel-art sprite rendering in Canvas.",stack:[{name:"Game Developer",color:"bg-blue-400"},{name:"C#",color:"bg-amber-400"},{name:"UNITY Engine",color:"bg-sky-400"}],origins:[{id:"LAB/001",label:"LAB / 001"}]},{id:"BUILT/004",num:"004",name:"EMOTION QUEST",type:"SCHOOL PROJECT",year:"2024",status:"COMPLETED",img:"/emotionquest.png",github:"https://github.com/ChristianBuena/EmotionQuest",live:"#",challenge:"A gamified application that educates children about the importance of emotional regulation and expression.",solution:"Created a browser-based game featuring interactive mini-games, a virtual pet system, and progress tracking to encourage emotional awareness and healthy coping mechanisms.",stack:[{name:"Lead Developer",color:"bg-blue-400"},{name:"Godot Engine",color:"bg-orange-400"},{name:"GDScript",color:"bg-sky-400"}],origins:[{id:"FIELD-HISTORY/001",label:"FIELD HISTORY / 001"}]}],vh=[{n:"01",name:"OUTSTANDING PRESENTER AWARD",issuer:"TECHNO EXPO 2025",year:"2025",sig:1,img:"/4.png",desc:"Received the Outstanding Presenter Award for exceptional presentation skills at the Techno Expo 2025."},{n:"02",name:"SEO CERTIFIED",issuer:"HUBSPOT ACADEMY",year:"2026",sig:2,img:"/5.png",desc:"Mastered SEO strategies including keyword research, on-page optimization, and technical SEO to improve search engine rankings and drive organic traffic."},{n:"03",name:"PEER CODING SESSION MENTOR",issuer:"CSS",year:"2026",sig:3,img:"/9.png",desc:"Led peer coding sessions to help students with coding assignments and projects."},{n:"01",name:"OUTSTANDING PRESENTER AWARD",issuer:"TECHNO EXPO 2025",year:"2025",sig:1,img:"/4.png",desc:"Received the Outstanding Presenter Award for exceptional presentation skills at the Techno Expo 2025."},{n:"02",name:"SEO CERTIFIED",issuer:"HUBSPOT ACADEMY",year:"2026",sig:2,img:"/5.png",desc:"Mastered SEO strategies including keyword research, on-page optimization, and technical SEO to improve search engine rankings and drive organic traffic."},{n:"03",name:"PEER CODING SESSION MENTOR",issuer:"CSS",year:"2026",sig:3,img:"/9.png",desc:"Led peer coding sessions to help students with coding assignments and projects."},{n:"01",name:"OUTSTANDING PRESENTER AWARD",issuer:"TECHNO EXPO 2025",year:"2025",sig:1,img:"/4.png",desc:"Received the Outstanding Presenter Award for exceptional presentation skills at the Techno Expo 2025."},{n:"02",name:"SEO CERTIFIED",issuer:"HUBSPOT ACADEMY",year:"2026",sig:2,img:"/5.png",desc:"Mastered SEO strategies including keyword research, on-page optimization, and technical SEO to improve search engine rankings and drive organic traffic."},{n:"03",name:"PEER CODING SESSION MENTOR",issuer:"CSS",year:"2026",sig:3,img:"/9.png",desc:"Led peer coding sessions to help students with coding assignments and projects."}];function w2(){const[n,e]=O.useState(0),[t,i]=O.useState(0),[o,a]=O.useState(0),[c,u]=O.useState(0),h=O.useRef(0),d=O.useRef(0),m=O.useRef(0),g=O.useRef(!1);O.useEffect(()=>{const y=()=>{g.current=!1;const S=window.scrollY,P=document.documentElement.scrollHeight-window.innerHeight,D=P>0?Math.min(1,S/P):0,b=Math.abs(S-h.current);d.current=d.current*.75+b*.25,h.current=S,e(S),i(D),a(d.current),u(b)},E=()=>{g.current||(g.current=!0,m.current=requestAnimationFrame(y))};let M;const _=()=>{d.current>.05&&(d.current*=.82,a(d.current)),M=requestAnimationFrame(_)};return M=requestAnimationFrame(_),window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),cancelAnimationFrame(m.current),cancelAnimationFrame(M)}},[]);const p=O.useCallback(y=>{const E=document.getElementById(y);if(!E)return 0;const M=E.getBoundingClientRect(),_=window.innerHeight,S=M.height+_,P=_-M.top;return Math.min(1,Math.max(0,P/S))},[n]);return{scrollY:n,totalProgress:t,velocity:o,rawVelocity:c,sectionProgress:p}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qm="185",A2=0,A_=1,b2=2,yu=1,C2=2,Qa=3,us=0,Qn=1,yr=2,Mr=0,Yo=1,b_=2,C_=3,R_=4,R2=5,Os=100,P2=101,D2=102,N2=103,L2=104,I2=200,F2=201,U2=202,O2=203,Cp=204,Rp=205,k2=206,B2=207,V2=208,z2=209,H2=210,G2=211,W2=212,X2=213,j2=214,Pp=0,Dp=1,Np=2,Zo=3,Lp=4,Ip=5,Fp=6,Up=7,QE=0,Y2=1,$2=2,er=0,JE=1,eM=2,tM=3,nM=4,iM=5,rM=6,sM=7,oM=300,$s=301,Qo=302,xh=303,_h=304,nf=306,Op=1e3,Sr=1001,kp=1002,wn=1003,q2=1004,Oc=1005,Ln=1006,yh=1007,zs=1008,gi=1009,aM=1010,lM=1011,ul=1012,Jm=1013,ir=1014,Zi=1015,br=1016,eg=1017,tg=1018,fl=1020,cM=35902,uM=35899,fM=1021,dM=1022,Ii=1023,Cr=1026,Hs=1027,hM=1028,ng=1029,qs=1030,ig=1031,rg=1033,Su=33776,Eu=33777,Mu=33778,Tu=33779,Bp=35840,Vp=35841,zp=35842,Hp=35843,Gp=36196,Wp=37492,Xp=37496,jp=37488,Yp=37489,Bu=37490,$p=37491,qp=37808,Kp=37809,Zp=37810,Qp=37811,Jp=37812,em=37813,tm=37814,nm=37815,im=37816,rm=37817,sm=37818,om=37819,am=37820,lm=37821,cm=36492,um=36494,fm=36495,dm=36283,hm=36284,Vu=36285,pm=36286,K2=3200,P_=0,Z2=1,rs="",mi="srgb",zu="srgb-linear",Hu="linear",Ft="srgb",bo=7680,D_=519,Q2=512,J2=513,e3=514,sg=515,t3=516,n3=517,og=518,i3=519,N_=35044,L_="300 es",Qi=2e3,Gu=2001;function r3(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s3(){const n=Wu("canvas");return n.style.display="block",n}const I_={};function F_(...n){const e="THREE."+n.shift();console.log(e,...n)}function pM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=pM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=pM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $o(...n){const e=n.join(" ");e in I_||(I_[e]=!0,ut(...n))}function o3(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const a3={[Pp]:Dp,[Np]:Fp,[Lp]:Up,[Zo]:Ip,[Dp]:Pp,[Fp]:Np,[Up]:Lp,[Ip]:Zo};class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,mm=180/Math.PI;function xl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function l3(n,e){return(n%e+e)%e}function Eh(n,e,t){return(1-t)*n+t*e}function Ga(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const cg=class cg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cg.prototype.isVector2=!0;let Ct=cg;class ra{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let h=i[o+0],d=i[o+1],m=i[o+2],g=i[o+3],p=a[c+0],y=a[c+1],E=a[c+2],M=a[c+3];if(g!==M||h!==p||d!==y||m!==E){let _=h*p+d*y+m*E+g*M;_<0&&(p=-p,y=-y,E=-E,M=-M,_=-_);let S=1-u;if(_<.9995){const P=Math.acos(_),D=Math.sin(P);S=Math.sin(S*P)/D,u=Math.sin(u*P)/D,h=h*S+p*u,d=d*S+y*u,m=m*S+E*u,g=g*S+M*u}else{h=h*S+p*u,d=d*S+y*u,m=m*S+E*u,g=g*S+M*u;const P=1/Math.sqrt(h*h+d*d+m*m+g*g);h*=P,d*=P,m*=P,g*=P}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],h=i[o+1],d=i[o+2],m=i[o+3],g=a[c],p=a[c+1],y=a[c+2],E=a[c+3];return e[t]=u*E+m*g+h*y-d*p,e[t+1]=h*E+m*p+d*g-u*y,e[t+2]=d*E+m*y+u*p-h*g,e[t+3]=m*E-u*g-h*p-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),m=u(o/2),g=u(a/2),p=h(i/2),y=h(o/2),E=h(a/2);switch(c){case"XYZ":this._x=p*m*g+d*y*E,this._y=d*y*g-p*m*E,this._z=d*m*E+p*y*g,this._w=d*m*g-p*y*E;break;case"YXZ":this._x=p*m*g+d*y*E,this._y=d*y*g-p*m*E,this._z=d*m*E-p*y*g,this._w=d*m*g+p*y*E;break;case"ZXY":this._x=p*m*g-d*y*E,this._y=d*y*g+p*m*E,this._z=d*m*E+p*y*g,this._w=d*m*g-p*y*E;break;case"ZYX":this._x=p*m*g-d*y*E,this._y=d*y*g+p*m*E,this._z=d*m*E-p*y*g,this._w=d*m*g+p*y*E;break;case"YZX":this._x=p*m*g+d*y*E,this._y=d*y*g+p*m*E,this._z=d*m*E-p*y*g,this._w=d*m*g-p*y*E;break;case"XZY":this._x=p*m*g-d*y*E,this._y=d*y*g-p*m*E,this._z=d*m*E+p*y*g,this._w=d*m*g+p*y*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],h=t[9],d=t[2],m=t[6],g=t[10],p=i+u+g;if(p>0){const y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(m-h)*y,this._y=(a-d)*y,this._z=(c-o)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(m-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+d)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-d)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+m)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-o)/y,this._x=(a+d)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,h=t._y,d=t._z,m=t._w;return this._x=i*m+c*u+o*d-a*h,this._y=o*m+c*h+a*u-i*d,this._z=a*m+c*d+i*h-o*u,this._w=c*m-i*u-o*h-a*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,o=-o,a=-a,c=-c,u=-u);let h=1-t;if(u<.9995){const d=Math.acos(u),m=Math.sin(d);h=Math.sin(h*d)/m,t=Math.sin(t*d)/m,this._x=this._x*h+i*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ug=class ug{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(U_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(U_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*o-u*i),m=2*(u*t-a*o),g=2*(a*i-c*t);return this.x=t+h*d+c*g-u*m,this.y=i+h*m+u*d-a*g,this.z=o+h*g+a*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=o*h-a*u,this.y=a*c-i*h,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ug.prototype.isVector3=!0;let ae=ug;const Mh=new ae,U_=new ra,fg=class fg{constructor(e,t,i,o,a,c,u,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,h,d)}set(e,t,i,o,a,c,u,h,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=a,m[5]=h,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],m=i[4],g=i[7],p=i[2],y=i[5],E=i[8],M=o[0],_=o[3],S=o[6],P=o[1],D=o[4],b=o[7],N=o[2],L=o[5],F=o[8];return a[0]=c*M+u*P+h*N,a[3]=c*_+u*D+h*L,a[6]=c*S+u*b+h*F,a[1]=d*M+m*P+g*N,a[4]=d*_+m*D+g*L,a[7]=d*S+m*b+g*F,a[2]=p*M+y*P+E*N,a[5]=p*_+y*D+E*L,a[8]=p*S+y*b+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8];return t*c*m-t*u*d-i*a*m+i*u*h+o*a*d-o*c*h}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8],g=m*c-u*d,p=u*h-m*a,y=d*a-c*h,E=t*g+i*p+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*d-m*i)*M,e[2]=(u*i-o*c)*M,e[3]=p*M,e[4]=(m*t-o*h)*M,e[5]=(o*a-u*t)*M,e[6]=y*M,e[7]=(i*h-d*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-o*d,o*h,-o*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return $o("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Th.makeScale(e,t)),this}rotate(e){return $o("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return $o("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fg.prototype.isMatrix3=!0;let pt=fg;const Th=new pt,O_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),k_=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c3(){const n={enabled:!0,workingColorSpace:zu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ft&&(o.r=Tr(o.r),o.g=Tr(o.g),o.b=Tr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=qo(o.r),o.g=qo(o.g),o.b=qo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===rs?Hu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zu]:{primaries:e,whitePoint:i,transfer:Hu,toXYZ:O_,fromXYZ:k_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:O_,fromXYZ:k_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),n}const _t=c3();function Tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Co;class u3{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Co===void 0&&(Co=Wu("canvas")),Co.width=e.width,Co.height=e.height;const o=Co.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Co}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Tr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f3=0;class ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f3++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(wh(o[c].image)):a.push(wh(o[c]))}else a=wh(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?u3.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let d3=0;const Ah=new ae;class zn extends Qs{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=Sr,o=Sr,a=Ln,c=zs,u=Ii,h=gi,d=zn.DEFAULT_ANISOTROPY,m=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d3++}),this.uuid=xl(),this.name="",this.source=new ag(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Op:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case kp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Op:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case kp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=oM;zn.DEFAULT_ANISOTROPY=1;const dg=class dg{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const h=e.elements,d=h[0],m=h[4],g=h[8],p=h[1],y=h[5],E=h[9],M=h[2],_=h[6],S=h[10];if(Math.abs(m-p)<.01&&Math.abs(g-M)<.01&&Math.abs(E-_)<.01){if(Math.abs(m+p)<.1&&Math.abs(g+M)<.1&&Math.abs(E+_)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,b=(y+1)/2,N=(S+1)/2,L=(m+p)/4,F=(g+M)/4,T=(E+_)/4;return D>b&&D>N?D<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(D),o=L/i,a=F/i):b>N?b<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),i=L/o,a=T/o):N<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(N),i=F/a,o=T/a),this.set(i,o,a,t),this}let P=Math.sqrt((_-E)*(_-E)+(g-M)*(g-M)+(p-m)*(p-m));return Math.abs(P)<.001&&(P=1),this.x=(_-E)/P,this.y=(g-M)/P,this.z=(p-m)/P,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dg.prototype.isVector4=!0;let tn=dg;class h3 extends Qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new zn(o),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ag(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends h3{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mM extends zn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p3 extends zn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=class ju{constructor(e,t,i,o,a,c,u,h,d,m,g,p,y,E,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,h,d,m,g,p,y,E,M,_)}set(e,t,i,o,a,c,u,h,d,m,g,p,y,E,M,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=h,S[2]=d,S[6]=m,S[10]=g,S[14]=p,S[3]=y,S[7]=E,S[11]=M,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ju().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,o=1/Ro.setFromMatrixColumn(e,0).length(),a=1/Ro.setFromMatrixColumn(e,1).length(),c=1/Ro.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(o),d=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const p=c*m,y=c*g,E=u*m,M=u*g;t[0]=h*m,t[4]=-h*g,t[8]=d,t[1]=y+E*d,t[5]=p-M*d,t[9]=-u*h,t[2]=M-p*d,t[6]=E+y*d,t[10]=c*h}else if(e.order==="YXZ"){const p=h*m,y=h*g,E=d*m,M=d*g;t[0]=p+M*u,t[4]=E*u-y,t[8]=c*d,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=y*u-E,t[6]=M+p*u,t[10]=c*h}else if(e.order==="ZXY"){const p=h*m,y=h*g,E=d*m,M=d*g;t[0]=p-M*u,t[4]=-c*g,t[8]=E+y*u,t[1]=y+E*u,t[5]=c*m,t[9]=M-p*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const p=c*m,y=c*g,E=u*m,M=u*g;t[0]=h*m,t[4]=E*d-y,t[8]=p*d+M,t[1]=h*g,t[5]=M*d+p,t[9]=y*d-E,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const p=c*h,y=c*d,E=u*h,M=u*d;t[0]=h*m,t[4]=M-p*g,t[8]=E*g+y,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-d*m,t[6]=y*g+E,t[10]=p-M*g}else if(e.order==="XZY"){const p=c*h,y=c*d,E=u*h,M=u*d;t[0]=h*m,t[4]=-g,t[8]=d*m,t[1]=p*g+M,t[5]=c*m,t[9]=y*g-E,t[2]=E*g-y,t[6]=u*m,t[10]=M*g+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m3,e,g3)}lookAt(e,t,i){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Kr.crossVectors(i,ri),Kr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Kr.crossVectors(i,ri)),Kr.normalize(),kc.crossVectors(ri,Kr),o[0]=Kr.x,o[4]=kc.x,o[8]=ri.x,o[1]=Kr.y,o[5]=kc.y,o[9]=ri.y,o[2]=Kr.z,o[6]=kc.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],m=i[1],g=i[5],p=i[9],y=i[13],E=i[2],M=i[6],_=i[10],S=i[14],P=i[3],D=i[7],b=i[11],N=i[15],L=o[0],F=o[4],T=o[8],I=o[12],V=o[1],z=o[5],X=o[9],de=o[13],le=o[2],j=o[6],re=o[10],Z=o[14],G=o[3],te=o[7],ce=o[11],k=o[15];return a[0]=c*L+u*V+h*le+d*G,a[4]=c*F+u*z+h*j+d*te,a[8]=c*T+u*X+h*re+d*ce,a[12]=c*I+u*de+h*Z+d*k,a[1]=m*L+g*V+p*le+y*G,a[5]=m*F+g*z+p*j+y*te,a[9]=m*T+g*X+p*re+y*ce,a[13]=m*I+g*de+p*Z+y*k,a[2]=E*L+M*V+_*le+S*G,a[6]=E*F+M*z+_*j+S*te,a[10]=E*T+M*X+_*re+S*ce,a[14]=E*I+M*de+_*Z+S*k,a[3]=P*L+D*V+b*le+N*G,a[7]=P*F+D*z+b*j+N*te,a[11]=P*T+D*X+b*re+N*ce,a[15]=P*I+D*de+b*Z+N*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],h=e[9],d=e[13],m=e[2],g=e[6],p=e[10],y=e[14],E=e[3],M=e[7],_=e[11],S=e[15],P=h*y-d*p,D=u*y-d*g,b=u*p-h*g,N=c*y-d*m,L=c*p-h*m,F=c*g-u*m;return t*(M*P-_*D+S*b)-i*(E*P-_*N+S*L)+o*(E*D-M*N+S*F)-a*(E*b-M*L+_*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[1],c=e[5],u=e[9],h=e[2],d=e[6],m=e[10];return t*(c*m-u*d)-i*(a*m-u*h)+o*(a*d-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],m=e[8],g=e[9],p=e[10],y=e[11],E=e[12],M=e[13],_=e[14],S=e[15],P=t*u-i*c,D=t*h-o*c,b=t*d-a*c,N=i*h-o*u,L=i*d-a*u,F=o*d-a*h,T=m*M-g*E,I=m*_-p*E,V=m*S-y*E,z=g*_-p*M,X=g*S-y*M,de=p*S-y*_,le=P*de-D*X+b*z+N*V-L*I+F*T;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/le;return e[0]=(u*de-h*X+d*z)*j,e[1]=(o*X-i*de-a*z)*j,e[2]=(M*F-_*L+S*N)*j,e[3]=(p*L-g*F-y*N)*j,e[4]=(h*V-c*de-d*I)*j,e[5]=(t*de-o*V+a*I)*j,e[6]=(_*b-E*F-S*D)*j,e[7]=(m*F-p*b+y*D)*j,e[8]=(c*X-u*V+d*T)*j,e[9]=(i*V-t*X-a*T)*j,e[10]=(E*L-M*b+S*P)*j,e[11]=(g*b-m*L-y*P)*j,e[12]=(u*I-c*z-h*T)*j,e[13]=(t*z-i*I+o*T)*j,e[14]=(M*D-E*N-_*P)*j,e[15]=(m*N-g*D+p*P)*j,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,h=e.z,d=a*c,m=a*u;return this.set(d*c+i,d*u-o*h,d*h+o*u,0,d*u+o*h,m*u+i,m*h-o*c,0,d*h-o*u,m*h+o*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,d=a+a,m=c+c,g=u+u,p=a*d,y=a*m,E=a*g,M=c*m,_=c*g,S=u*g,P=h*d,D=h*m,b=h*g,N=i.x,L=i.y,F=i.z;return o[0]=(1-(M+S))*N,o[1]=(y+b)*N,o[2]=(E-D)*N,o[3]=0,o[4]=(y-b)*L,o[5]=(1-(p+S))*L,o[6]=(_+P)*L,o[7]=0,o[8]=(E+D)*F,o[9]=(_-P)*F,o[10]=(1-(p+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let c=Ro.set(o[0],o[1],o[2]).length();const u=Ro.set(o[4],o[5],o[6]).length(),h=Ro.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ci.copy(this);const d=1/c,m=1/u,g=1/h;return Ci.elements[0]*=d,Ci.elements[1]*=d,Ci.elements[2]*=d,Ci.elements[4]*=m,Ci.elements[5]*=m,Ci.elements[6]*=m,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,t.setFromRotationMatrix(Ci),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,o,a,c,u=Qi,h=!1){const d=this.elements,m=2*a/(t-e),g=2*a/(i-o),p=(t+e)/(t-e),y=(i+o)/(i-o);let E,M;if(h)E=a/(c-a),M=c*a/(c-a);else if(u===Qi)E=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Gu)E=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Qi,h=!1){const d=this.elements,m=2/(t-e),g=2/(i-o),p=-(t+e)/(t-e),y=-(i+o)/(i-o);let E,M;if(h)E=1/(c-a),M=c/(c-a);else if(u===Qi)E=-2/(c-a),M=-(c+a)/(c-a);else if(u===Gu)E=-1/(c-a),M=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=m,d[4]=0,d[8]=0,d[12]=p,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ju.prototype.isMatrix4=!0;let rn=ju;const Ro=new ae,Ci=new rn,m3=new ae(0,0,0),g3=new ae(1,1,1),Kr=new ae,kc=new ae,ri=new ae,B_=new rn,V_=new ra;class Ks{constructor(e=0,t=0,i=0,o=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],h=o[1],d=o[5],m=o[9],g=o[2],p=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return B_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return V_.setFromEuler(this),this.setFromQuaternion(V_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class gM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v3=0;const z_=new ae,Po=new ra,pr=new rn,Bc=new ae,Wa=new ae,x3=new ae,_3=new ra,H_=new ae(1,0,0),G_=new ae(0,1,0),W_=new ae(0,0,1),X_={type:"added"},y3={type:"removed"},Do={type:"childadded",child:null},bh={type:"childremoved",child:null};class Jn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v3++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new ae,t=new Ks,i=new ra,o=new ae(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new pt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Po.setFromAxisAngle(e,t),this.quaternion.multiply(Po),this}rotateOnWorldAxis(e,t){return Po.setFromAxisAngle(e,t),this.quaternion.premultiply(Po),this}rotateX(e){return this.rotateOnAxis(H_,e)}rotateY(e){return this.rotateOnAxis(G_,e)}rotateZ(e){return this.rotateOnAxis(W_,e)}translateOnAxis(e,t){return z_.copy(e).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(H_,e)}translateY(e){return this.translateOnAxis(G_,e)}translateZ(e){return this.translateOnAxis(W_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bc.copy(e):Bc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Wa,Bc,this.up):pr.lookAt(Bc,Wa,this.up),this.quaternion.setFromRotationMatrix(pr),o&&(pr.extractRotation(o.matrixWorld),Po.setFromRotationMatrix(pr),this.quaternion.premultiply(Po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X_),Do.child=e,this.dispatchEvent(Do),Do.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y3),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X_),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,x3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,_3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const g=h[d];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(e.materials,this.material[h]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),m=c(e.images),g=c(e.shapes),p=c(e.skeletons),y=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),p.length>0&&(i.skeletons=p),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Jn.DEFAULT_UP=new ae(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vc extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S3={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,i),S=this._getHandJoint(d,M);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],p=m.position.distanceTo(g.position),y=.02,E=.005;d.inputState.pinching&&p>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(S3)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},zc={h:0,s:0,l:0};function Rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=_t.workingColorSpace){if(e=l3(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Rh(c,a,e+1/3),this.g=Rh(c,a,e),this.b=Rh(c,a,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,t=mi){function i(a){a!==void 0&&parseFloat(a)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const i=vM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return _t.workingToColorSpace(Nn.copy(this),e),Math.round(yt(Nn.r*255,0,255))*65536+Math.round(yt(Nn.g*255,0,255))*256+Math.round(yt(Nn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,o=Nn.g,a=Nn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let h,d;const m=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=m<=.5?g/(c+u):g/(2-c-u),c){case i:h=(o-a)/g+(o<a?6:0);break;case o:h=(a-i)/g+2;break;case a:h=(i-o)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=mi){_t.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,i=Nn.g,o=Nn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(zc);const i=Eh(Zr.h,zc.h,t),o=Eh(Zr.s,zc.s,t),a=Eh(Zr.l,zc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new bt;bt.NAMES=vM;class E3 extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ks,this.environmentIntensity=1,this.environmentRotation=new Ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new ae,mr=new ae,Ph=new ae,gr=new ae,No=new ae,Lo=new ae,j_=new ae,Dh=new ae,Nh=new ae,Lh=new ae,Ih=new tn,Fh=new tn,Uh=new tn;class Li{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ri.subVectors(e,t),o.cross(Ri);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Ri.subVectors(o,t),mr.subVectors(i,t),Ph.subVectors(e,t);const c=Ri.dot(Ri),u=Ri.dot(mr),h=Ri.dot(Ph),d=mr.dot(mr),m=mr.dot(Ph),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const p=1/g,y=(d*h-u*m)*p,E=(c*m-u*h)*p;return a.set(1-y-E,E,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,i,o,a,c,u,h){return this.getBarycoord(e,t,i,o,gr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,gr.x),h.addScaledVector(c,gr.y),h.addScaledVector(u,gr.z),h)}static getInterpolatedAttribute(e,t,i,o,a,c){return Ih.setScalar(0),Fh.setScalar(0),Uh.setScalar(0),Ih.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Ih,a.x),c.addScaledVector(Fh,a.y),c.addScaledVector(Uh,a.z),c}static isFrontFacing(e,t,i,o){return Ri.subVectors(i,t),mr.subVectors(e,t),Ri.cross(mr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Ri.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Li.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;No.subVectors(o,i),Lo.subVectors(a,i),Dh.subVectors(e,i);const h=No.dot(Dh),d=Lo.dot(Dh);if(h<=0&&d<=0)return t.copy(i);Nh.subVectors(e,o);const m=No.dot(Nh),g=Lo.dot(Nh);if(m>=0&&g<=m)return t.copy(o);const p=h*g-m*d;if(p<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(i).addScaledVector(No,c);Lh.subVectors(e,a);const y=No.dot(Lh),E=Lo.dot(Lh);if(E>=0&&y<=E)return t.copy(a);const M=y*d-h*E;if(M<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(i).addScaledVector(Lo,u);const _=m*E-y*g;if(_<=0&&g-m>=0&&y-E>=0)return j_.subVectors(a,o),u=(g-m)/(g-m+(y-E)),t.copy(o).addScaledVector(j_,u);const S=1/(_+M+p);return c=M*S,u=p*S,t.copy(i).addScaledVector(No,c).addScaledVector(Lo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Pi):Pi.fromBufferAttribute(a,c),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hc.copy(i.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),Gc.subVectors(this.max,Xa),Io.subVectors(e.a,Xa),Fo.subVectors(e.b,Xa),Uo.subVectors(e.c,Xa),Qr.subVectors(Fo,Io),Jr.subVectors(Uo,Fo),Ds.subVectors(Io,Uo);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-Ds.z,Ds.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,Ds.z,0,-Ds.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-Ds.y,Ds.x,0];return!Oh(t,Io,Fo,Uo,Gc)||(t=[1,0,0,0,1,0,0,0,1],!Oh(t,Io,Fo,Uo,Gc))?!1:(Wc.crossVectors(Qr,Jr),t=[Wc.x,Wc.y,Wc.z],Oh(t,Io,Fo,Uo,Gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Pi=new ae,Hc=new _l,Io=new ae,Fo=new ae,Uo=new ae,Qr=new ae,Jr=new ae,Ds=new ae,Xa=new ae,Gc=new ae,Wc=new ae,Ns=new ae;function Oh(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){Ns.fromArray(n,a);const u=o.x*Math.abs(Ns.x)+o.y*Math.abs(Ns.y)+o.z*Math.abs(Ns.z),h=e.dot(Ns),d=t.dot(Ns),m=i.dot(Ns);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>u)return!1}return!0}const an=new ae,Xc=new Ct;let M3=0;class Ui extends Qs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M3++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=N_,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xc.fromBufferAttribute(this,t),Xc.applyMatrix3(e),this.setXY(t,Xc.x,Xc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ga(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),o=Kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),o=Kn(o,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==N_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class xM extends Ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _M extends Ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wr extends Ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}const T3=new _l,ja=new ae,kh=new ae;class rf{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T3.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ja,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(kh)),this.expandByPoint(ja.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let w3=0;const pi=new rn,Bh=new Jn,Oo=new ae,si=new _l,Ya=new _l,_n=new ae;class Bi extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w3++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r3(e)?_M:xM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new wr(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];si.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ya.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(si.min,Ya.min),si.expandByPoint(_n),_n.addVectors(si.max,Ya.max),si.expandByPoint(_n)):(si.expandByPoint(Ya.min),si.expandByPoint(Ya.max))}si.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)_n.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(_n));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)_n.fromBufferAttribute(u,d),h&&(Oo.fromBufferAttribute(e,d),_n.add(Oo)),o=Math.max(o,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new ae,h[T]=new ae;const d=new ae,m=new ae,g=new ae,p=new Ct,y=new Ct,E=new Ct,M=new ae,_=new ae;function S(T,I,V){d.fromBufferAttribute(i,T),m.fromBufferAttribute(i,I),g.fromBufferAttribute(i,V),p.fromBufferAttribute(a,T),y.fromBufferAttribute(a,I),E.fromBufferAttribute(a,V),m.sub(d),g.sub(d),y.sub(p),E.sub(p);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(z),_.copy(g).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(z),u[T].add(M),u[I].add(M),u[V].add(M),h[T].add(_),h[I].add(_),h[V].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,I=P.length;T<I;++T){const V=P[T],z=V.start,X=V.count;for(let de=z,le=z+X;de<le;de+=3)S(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const D=new ae,b=new ae,N=new ae,L=new ae;function F(T){N.fromBufferAttribute(o,T),L.copy(N);const I=u[T];D.copy(I),D.sub(N.multiplyScalar(N.dot(I))).normalize(),b.crossVectors(L,I);const z=b.dot(h[T])<0?-1:1;c.setXYZW(T,D.x,D.y,D.z,z)}for(let T=0,I=P.length;T<I;++T){const V=P[T],z=V.start,X=V.count;for(let de=z,le=z+X;de<le;de+=3)F(e.getX(de+0)),F(e.getX(de+1)),F(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,y=i.count;p<y;p++)i.setXYZ(p,0,0,0);const o=new ae,a=new ae,c=new ae,u=new ae,h=new ae,d=new ae,m=new ae,g=new ae;if(e)for(let p=0,y=e.count;p<y;p+=3){const E=e.getX(p+0),M=e.getX(p+1),_=e.getX(p+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,_),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,_),u.add(m),h.add(m),d.add(m),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(_,d.x,d.y,d.z)}else for(let p=0,y=t.count;p<y;p+=3)o.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),c.fromBufferAttribute(t,p+2),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),i.setXYZ(p+0,m.x,m.y,m.z),i.setXYZ(p+1,m.x,m.y,m.z),i.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,h){const d=u.array,m=u.itemSize,g=u.normalized,p=new d.constructor(h.length*m);let y=0,E=0;for(let M=0,_=h.length;M<_;M++){u.isInterleavedBufferAttribute?y=h[M]*u.data.stride+u.offset:y=h[M]*m;for(let S=0;S<m;S++)p[E++]=d[y++]}return new Ui(p,m,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bi,i=this.index.array,o=this.attributes;for(const u in o){const h=o[u],d=e(h,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let m=0,g=d.length;m<g;m++){const p=d[m],y=e(p,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let g=0,p=d.length;g<p;g++){const y=d[g];m.push(y.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],g=a[d];for(let p=0,y=g.length;p<y;p++)m.push(g[p].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let A3=0;class yl extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A3++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=Yo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cp,this.blendDst=Rp,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector2&&i&&i.isVector2||o&&o.isEuler&&i&&i.isEuler||o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cp&&(i.blendSrc=this.blendSrc),this.blendDst!==Rp&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new ae,Vh=new ae,jc=new ae,es=new ae,zh=new ae,Yc=new ae,Hh=new ae;class yM{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Vh.copy(e).add(t).multiplyScalar(.5),jc.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Vh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(jc),u=es.dot(this.direction),h=-es.dot(jc),d=es.lengthSq(),m=Math.abs(1-c*c);let g,p,y,E;if(m>0)if(g=c*h-u,p=c*u-h,E=a*m,g>=0)if(p>=-E)if(p<=E){const M=1/m;g*=M,p*=M,y=g*(g+c*p+2*u)+p*(c*g+p+2*h)+d}else p=a,g=Math.max(0,-(c*p+u)),y=-g*g+p*(p+2*h)+d;else p=-a,g=Math.max(0,-(c*p+u)),y=-g*g+p*(p+2*h)+d;else p<=-E?(g=Math.max(0,-(-c*a+u)),p=g>0?-a:Math.min(Math.max(-a,-h),a),y=-g*g+p*(p+2*h)+d):p<=E?(g=0,p=Math.min(Math.max(-a,-h),a),y=p*(p+2*h)+d):(g=Math.max(0,-(c*a+u)),p=g>0?a:Math.min(Math.max(-a,-h),a),y=-g*g+p*(p+2*h)+d);else p=c>0?-a:a,g=Math.max(0,-(c*p+u)),y=-g*g+p*(p+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Vh).addScaledVector(jc,p),y}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const i=xr.dot(this.direction),o=xr.dot(xr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,h;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,p=this.origin;return d>=0?(i=(e.min.x-p.x)*d,o=(e.max.x-p.x)*d):(i=(e.max.x-p.x)*d,o=(e.min.x-p.x)*d),m>=0?(a=(e.min.y-p.y)*m,c=(e.max.y-p.y)*m):(a=(e.max.y-p.y)*m,c=(e.min.y-p.y)*m),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-p.z)*g,h=(e.max.z-p.z)*g):(u=(e.max.z-p.z)*g,h=(e.min.z-p.z)*g),i>h||u>o)||((u>i||i!==i)&&(i=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,o,a){zh.subVectors(t,e),Yc.subVectors(i,e),Hh.crossVectors(zh,Yc);let c=this.direction.dot(Hh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;es.subVectors(this.origin,e);const h=u*this.direction.dot(Yc.crossVectors(es,Yc));if(h<0)return null;const d=u*this.direction.dot(zh.cross(es));if(d<0||h+d>c)return null;const m=-u*es.dot(Hh);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class SM extends yl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ks,this.combine=QE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Y_=new rn,Ls=new yM,$c=new rf,$_=new ae,qc=new ae,Kc=new ae,Zc=new ae,Gh=new ae,Qc=new ae,q_=new ae,Jc=new ae;class Rr extends Jn{constructor(e=new Bi,t=new SM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Qc.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const m=u[h],g=a[h];m!==0&&(Gh.fromBufferAttribute(g,e),c?Qc.addScaledVector(Gh,m):Qc.addScaledVector(Gh.sub(t),m))}t.add(Qc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(a),Ls.copy(e.ray).recast(e.near),!($c.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere($c,$_)===null||Ls.origin.distanceToSquared($_)>(e.far-e.near)**2))&&(Y_.copy(a).invert(),Ls.copy(e.ray).applyMatrix4(Y_),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,p=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=p.length;E<M;E++){const _=p[E],S=c[_.materialIndex],P=Math.max(_.start,y.start),D=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let b=P,N=D;b<N;b+=3){const L=u.getX(b),F=u.getX(b+1),T=u.getX(b+2);o=eu(this,S,e,i,d,m,g,L,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(u.count,y.start+y.count);for(let _=E,S=M;_<S;_+=3){const P=u.getX(_),D=u.getX(_+1),b=u.getX(_+2);o=eu(this,c,e,i,d,m,g,P,D,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=p.length;E<M;E++){const _=p[E],S=c[_.materialIndex],P=Math.max(_.start,y.start),D=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let b=P,N=D;b<N;b+=3){const L=b,F=b+1,T=b+2;o=eu(this,S,e,i,d,m,g,L,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let _=E,S=M;_<S;_+=3){const P=_,D=_+1,b=_+2;o=eu(this,c,e,i,d,m,g,P,D,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function b3(n,e,t,i,o,a,c,u){let h;if(e.side===Qn?h=i.intersectTriangle(c,a,o,!0,u):h=i.intersectTriangle(o,a,c,e.side===us,u),h===null)return null;Jc.copy(u),Jc.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Jc);return d<t.near||d>t.far?null:{distance:d,point:Jc.clone(),object:n}}function eu(n,e,t,i,o,a,c,u,h,d){n.getVertexPosition(u,qc),n.getVertexPosition(h,Kc),n.getVertexPosition(d,Zc);const m=b3(n,e,t,i,qc,Kc,Zc,q_);if(m){const g=new ae;Li.getBarycoord(q_,qc,Kc,Zc,g),o&&(m.uv=Li.getInterpolatedAttribute(o,u,h,d,g,new Ct)),a&&(m.uv1=Li.getInterpolatedAttribute(a,u,h,d,g,new Ct)),c&&(m.normal=Li.getInterpolatedAttribute(c,u,h,d,g,new ae),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const p={a:u,b:h,c:d,normal:new ae,materialIndex:0};Li.getNormal(qc,Kc,Zc,p.normal),m.face=p,m.barycoord=g}return m}class C3 extends zn{constructor(e=null,t=1,i=1,o,a,c,u,h,d=wn,m=wn,g,p){super(null,c,u,h,d,m,o,a,g,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new ae,R3=new ae,P3=new pt;class Us{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Wh.subVectors(i,t).cross(R3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(Wh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||P3.getNormalMatrix(e),o=this.coplanarPoint(Wh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new rf,D3=new Ct(.5,.5),tu=new ae;class EM{constructor(e=new Us,t=new Us,i=new Us,o=new Us,a=new Us,c=new Us){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],h=a[2],d=a[3],m=a[4],g=a[5],p=a[6],y=a[7],E=a[8],M=a[9],_=a[10],S=a[11],P=a[12],D=a[13],b=a[14],N=a[15];if(o[0].setComponents(d-c,y-m,S-E,N-P).normalize(),o[1].setComponents(d+c,y+m,S+E,N+P).normalize(),o[2].setComponents(d+u,y+g,S+M,N+D).normalize(),o[3].setComponents(d-u,y-g,S-M,N-D).normalize(),i)o[4].setComponents(h,p,_,b).normalize(),o[5].setComponents(d-h,y-p,S-_,N-b).normalize();else if(o[4].setComponents(d-h,y-p,S-_,N-b).normalize(),t===Qi)o[5].setComponents(d+h,y+p,S+_,N+b).normalize();else if(t===Gu)o[5].setComponents(h,p,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=D3.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(tu.x=o.normal.x>0?e.max.x:e.min.x,tu.y=o.normal.y>0?e.max.y:e.min.y,tu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class MM extends yl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K_=new rn,gm=new yM,nu=new rf,iu=new ae;class N3 extends Jn{constructor(e=new Bi,t=new MM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nu.copy(i.boundingSphere),nu.applyMatrix4(o),nu.radius+=a,e.ray.intersectsSphere(nu)===!1)return;K_.copy(o).invert(),gm.copy(e.ray).applyMatrix4(K_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=i.index,g=i.attributes.position;if(d!==null){const p=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let E=p,M=y;E<M;E++){const _=d.getX(E);iu.fromBufferAttribute(g,_),Z_(iu,_,h,o,e,t,this)}}else{const p=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let E=p,M=y;E<M;E++)iu.fromBufferAttribute(g,E),Z_(iu,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Z_(n,e,t,i,o,a,c){const u=gm.distanceSqToPoint(n);if(u<t){const h=new ae;gm.closestPointToPoint(n,h),h.applyMatrix4(i);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class TM extends zn{constructor(e=[],t=$s,i,o,a,c,u,h,d,m){super(e,t,i,o,a,c,u,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jo extends zn{constructor(e,t,i=ir,o,a,c,u=wn,h=wn,d,m=Cr,g=1){if(m!==Cr&&m!==Hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:g};super(p,o,a,c,u,h,m,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ag(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class L3 extends Jo{constructor(e,t=ir,i=$s,o,a,c=wn,u=wn,h,d=Cr){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,i,o,a,c,u,h,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wM extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sl extends Bi{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],m=[],g=[];let p=0,y=0;E("z","y","x",-1,-1,i,t,e,c,a,0),E("z","y","x",1,-1,i,t,-e,c,a,1),E("x","z","y",1,1,e,i,t,o,c,2),E("x","z","y",1,-1,e,i,-t,o,c,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(h),this.setAttribute("position",new wr(d,3)),this.setAttribute("normal",new wr(m,3)),this.setAttribute("uv",new wr(g,2));function E(M,_,S,P,D,b,N,L,F,T,I){const V=b/F,z=N/T,X=b/2,de=N/2,le=L/2,j=F+1,re=T+1;let Z=0,G=0;const te=new ae;for(let ce=0;ce<re;ce++){const k=ce*z-de;for(let Q=0;Q<j;Q++){const Fe=Q*V-X;te[M]=Fe*P,te[_]=k*D,te[S]=le,d.push(te.x,te.y,te.z),te[M]=0,te[_]=0,te[S]=L>0?1:-1,m.push(te.x,te.y,te.z),g.push(Q/F),g.push(1-ce/T),Z+=1}}for(let ce=0;ce<T;ce++)for(let k=0;k<F;k++){const Q=p+k+j*ce,Fe=p+k+j*(ce+1),He=p+(k+1)+j*(ce+1),Be=p+(k+1)+j*ce;h.push(Q,Fe,Be),h.push(Fe,He,Be),G+=6}u.addGroup(y,G,I),y+=G,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sf extends Bi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),h=Math.floor(o),d=u+1,m=h+1,g=e/u,p=t/h,y=[],E=[],M=[],_=[];for(let S=0;S<m;S++){const P=S*p-c;for(let D=0;D<d;D++){const b=D*g-a;E.push(b,-P,0),M.push(0,0,1),_.push(D/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let P=0;P<u;P++){const D=P+d*S,b=P+d*(S+1),N=P+1+d*(S+1),L=P+1+d*S;y.push(D,b,L),y.push(b,N,L)}this.setIndex(y),this.setAttribute("position",new wr(E,3)),this.setAttribute("normal",new wr(M,3)),this.setAttribute("uv",new wr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.width,e.height,e.widthSegments,e.heightSegments)}}function ea(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];if(Q_(o))o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(Q_(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function kn(n){const e={};for(let t=0;t<n.length;t++){const i=ea(n[t]);for(const o in i)e[o]=i[o]}return e}function Q_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function I3(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function AM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const F3={clone:ea,merge:kn};var U3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends yl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U3,this.fragmentShader=O3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=I3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const o=e.uniforms[i];switch(this.uniforms[i]={},o.type){case"t":this.uniforms[i].value=t[o.value]||null;break;case"c":this.uniforms[i].value=new bt().setHex(o.value);break;case"v2":this.uniforms[i].value=new Ct().fromArray(o.value);break;case"v3":this.uniforms[i].value=new ae().fromArray(o.value);break;case"v4":this.uniforms[i].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[i].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[i].value=new rn().fromArray(o.value);break;default:this.uniforms[i].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class k3 extends rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class B3 extends yl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V3 extends yl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ru=new ae,su=new ra,Xi=new ae;class bM extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ru,su,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ru,su,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new ae,J_=new Ct,ey=new Ct;class Ni extends bM{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mm*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,J_,ey),t.subVectors(ey,J_)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sh*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*i/d,o*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lg extends bM{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ko=-90,Bo=1;class z3 extends Jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ni(ko,Bo,e,t);o.layers=this.layers,this.add(o);const a=new Ni(ko,Bo,e,t);a.layers=this.layers,this.add(a);const c=new Ni(ko,Bo,e,t);c.layers=this.layers,this.add(c);const u=new Ni(ko,Bo,e,t);u.layers=this.layers,this.add(u);const h=new Ni(ko,Bo,e,t);h.layers=this.layers,this.add(h);const d=new Ni(ko,Bo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,h]=t;for(const d of t)this.remove(d);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,d,m]=this.children,g=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,p,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class H3 extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hg=class hg{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};hg.prototype.isMatrix2=!0;let ty=hg;function ny(n,e,t,i){const o=G3(i);switch(t){case fM:return n*e;case hM:return n*e/o.components*o.byteLength;case ng:return n*e/o.components*o.byteLength;case qs:return n*e*2/o.components*o.byteLength;case ig:return n*e*2/o.components*o.byteLength;case dM:return n*e*3/o.components*o.byteLength;case Ii:return n*e*4/o.components*o.byteLength;case rg:return n*e*4/o.components*o.byteLength;case Su:case Eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mu:case Tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vp:case Hp:return Math.max(n,16)*Math.max(e,8)/4;case Bp:case zp:return Math.max(n,8)*Math.max(e,8)/2;case Gp:case Wp:case jp:case Yp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xp:case Bu:case $p:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case em:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case im:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case om:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case am:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cm:case um:case fm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dm:case hm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vu:case pm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G3(n){switch(n){case gi:case aM:return{byteLength:1,components:1};case ul:case lM:case br:return{byteLength:2,components:1};case eg:case tg:return{byteLength:2,components:4};case ir:case Jm:case Zi:return{byteLength:4,components:1};case cM:case uM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qm}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CM(){let n=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function W3(n){const e=new WeakMap;function t(u,h){const d=u.array,m=u.usage,g=d.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,d,m),u.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,d){const m=h.array,g=h.updateRanges;if(n.bindBuffer(d,u),g.length===0)n.bufferSubData(d,0,m);else{g.sort((y,E)=>y.start-E.start);let p=0;for(let y=1;y<g.length;y++){const E=g[p],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++p,g[p]=M)}g.length=p+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];n.bufferSubData(d,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(n.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:o,remove:a,update:c}}var X3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j3=`#ifdef USE_ALPHAHASH
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
#endif`,Y3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z3=`#ifdef USE_AOMAP
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
#endif`,Q3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J3=`#ifdef USE_BATCHING
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
#endif`,eD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rD=`#ifdef USE_IRIDESCENCE
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
#endif`,sD=`#ifdef USE_BUMPMAP
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
#endif`,oD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pD=`#define PI 3.141592653589793
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
} // validated`,mD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gD=`vec3 transformedNormal = objectNormal;
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
#endif`,vD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_D=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SD="gl_FragColor = linearToOutputTexel( gl_FragColor );",ED=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MD=`#ifdef USE_ENVMAP
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
#endif`,TD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wD=`#ifdef USE_ENVMAP
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
#endif`,AD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bD=`#ifdef USE_ENVMAP
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
#endif`,CD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ND=`#ifdef USE_GRADIENTMAP
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
}`,LD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ID=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UD=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,OD=`#ifdef USE_ENVMAP
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
#endif`,kD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HD=`PhysicalMaterial material;
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
#endif`,GD=`uniform sampler2D dfgLUT;
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
}`,WD=`
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
#endif`,XD=`#if defined( RE_IndirectDiffuse )
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
#endif`,jD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YD=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$D=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tN=`#if defined( USE_POINTS_UV )
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
#endif`,nN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aN=`#ifdef USE_MORPHTARGETS
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
#endif`,lN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pN=`#ifdef USE_NORMALMAP
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
#endif`,mN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_N=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PN=`float getShadowMask() {
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
}`,DN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NN=`#ifdef USE_SKINNING
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
#endif`,LN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IN=`#ifdef USE_SKINNING
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
#endif`,FN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ON=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BN=`#ifdef USE_TRANSMISSION
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
#endif`,VN=`#ifdef USE_TRANSMISSION
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
#endif`,zN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jN=`uniform sampler2D t2D;
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
}`,YN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$N=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZN=`#include <common>
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
}`,QN=`#if DEPTH_PACKING == 3200
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
}`,JN=`#define DISTANCE
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
}`,eL=`#define DISTANCE
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
}`,tL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iL=`uniform float scale;
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
}`,rL=`uniform vec3 diffuse;
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
}`,sL=`#include <common>
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
}`,oL=`uniform vec3 diffuse;
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
}`,aL=`#define LAMBERT
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
}`,lL=`#define LAMBERT
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
}`,cL=`#define MATCAP
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
}`,uL=`#define MATCAP
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
}`,fL=`#define NORMAL
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
}`,dL=`#define NORMAL
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
}`,hL=`#define PHONG
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
}`,pL=`#define PHONG
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
}`,mL=`#define STANDARD
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
}`,gL=`#define STANDARD
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
}`,vL=`#define TOON
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
}`,xL=`#define TOON
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
}`,_L=`uniform float size;
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
}`,yL=`uniform vec3 diffuse;
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
}`,SL=`#include <common>
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
}`,EL=`uniform vec3 color;
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
}`,ML=`uniform float rotation;
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
}`,TL=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:X3,alphahash_pars_fragment:j3,alphamap_fragment:Y3,alphamap_pars_fragment:$3,alphatest_fragment:q3,alphatest_pars_fragment:K3,aomap_fragment:Z3,aomap_pars_fragment:Q3,batching_pars_vertex:J3,batching_vertex:eD,begin_vertex:tD,beginnormal_vertex:nD,bsdfs:iD,iridescence_fragment:rD,bumpmap_pars_fragment:sD,clipping_planes_fragment:oD,clipping_planes_pars_fragment:aD,clipping_planes_pars_vertex:lD,clipping_planes_vertex:cD,color_fragment:uD,color_pars_fragment:fD,color_pars_vertex:dD,color_vertex:hD,common:pD,cube_uv_reflection_fragment:mD,defaultnormal_vertex:gD,displacementmap_pars_vertex:vD,displacementmap_vertex:xD,emissivemap_fragment:_D,emissivemap_pars_fragment:yD,colorspace_fragment:SD,colorspace_pars_fragment:ED,envmap_fragment:MD,envmap_common_pars_fragment:TD,envmap_pars_fragment:wD,envmap_pars_vertex:AD,envmap_physical_pars_fragment:OD,envmap_vertex:bD,fog_vertex:CD,fog_pars_vertex:RD,fog_fragment:PD,fog_pars_fragment:DD,gradientmap_pars_fragment:ND,lightmap_pars_fragment:LD,lights_lambert_fragment:ID,lights_lambert_pars_fragment:FD,lights_pars_begin:UD,lights_toon_fragment:kD,lights_toon_pars_fragment:BD,lights_phong_fragment:VD,lights_phong_pars_fragment:zD,lights_physical_fragment:HD,lights_physical_pars_fragment:GD,lights_fragment_begin:WD,lights_fragment_maps:XD,lights_fragment_end:jD,lightprobes_pars_fragment:YD,logdepthbuf_fragment:$D,logdepthbuf_pars_fragment:qD,logdepthbuf_pars_vertex:KD,logdepthbuf_vertex:ZD,map_fragment:QD,map_pars_fragment:JD,map_particle_fragment:eN,map_particle_pars_fragment:tN,metalnessmap_fragment:nN,metalnessmap_pars_fragment:iN,morphinstance_vertex:rN,morphcolor_vertex:sN,morphnormal_vertex:oN,morphtarget_pars_vertex:aN,morphtarget_vertex:lN,normal_fragment_begin:cN,normal_fragment_maps:uN,normal_pars_fragment:fN,normal_pars_vertex:dN,normal_vertex:hN,normalmap_pars_fragment:pN,clearcoat_normal_fragment_begin:mN,clearcoat_normal_fragment_maps:gN,clearcoat_pars_fragment:vN,iridescence_pars_fragment:xN,opaque_fragment:_N,packing:yN,premultiplied_alpha_fragment:SN,project_vertex:EN,dithering_fragment:MN,dithering_pars_fragment:TN,roughnessmap_fragment:wN,roughnessmap_pars_fragment:AN,shadowmap_pars_fragment:bN,shadowmap_pars_vertex:CN,shadowmap_vertex:RN,shadowmask_pars_fragment:PN,skinbase_vertex:DN,skinning_pars_vertex:NN,skinning_vertex:LN,skinnormal_vertex:IN,specularmap_fragment:FN,specularmap_pars_fragment:UN,tonemapping_fragment:ON,tonemapping_pars_fragment:kN,transmission_fragment:BN,transmission_pars_fragment:VN,uv_pars_fragment:zN,uv_pars_vertex:HN,uv_vertex:GN,worldpos_vertex:WN,background_vert:XN,background_frag:jN,backgroundCube_vert:YN,backgroundCube_frag:$N,cube_vert:qN,cube_frag:KN,depth_vert:ZN,depth_frag:QN,distance_vert:JN,distance_frag:eL,equirect_vert:tL,equirect_frag:nL,linedashed_vert:iL,linedashed_frag:rL,meshbasic_vert:sL,meshbasic_frag:oL,meshlambert_vert:aL,meshlambert_frag:lL,meshmatcap_vert:cL,meshmatcap_frag:uL,meshnormal_vert:fL,meshnormal_frag:dL,meshphong_vert:hL,meshphong_frag:pL,meshphysical_vert:mL,meshphysical_frag:gL,meshtoon_vert:vL,meshtoon_frag:xL,points_vert:_L,points_frag:yL,shadow_vert:SL,shadow_frag:EL,sprite_vert:ML,sprite_frag:TL},ke={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},qi={basic:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:kn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:kn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:kn([ke.points,ke.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:kn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:kn([ke.common,ke.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:kn([ke.sprite,ke.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:kn([ke.common,ke.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:kn([ke.lights,ke.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};qi.physical={uniforms:kn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const ou={r:0,b:0,g:0},wL=new rn,RM=new pt;RM.set(-1,0,0,0,1,0,0,0,1);function AL(n,e,t,i,o,a){const c=new bt(0);let u=o===!0?0:1,h,d,m=null,g=0,p=null;function y(P){let D=P.isScene===!0?P.background:null;if(D&&D.isTexture){const b=P.backgroundBlurriness>0;D=e.get(D,b)}return D}function E(P){let D=!1;const b=y(P);b===null?_(c,u):b&&b.isColor&&(_(b,1),D=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(P,D){const b=y(D);b&&(b.isCubeTexture||b.mapping===nf)?(d===void 0&&(d=new Rr(new Sl(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:ea(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(wL.makeRotationFromEuler(D.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(RM),d.material.toneMapped=_t.getTransfer(b.colorSpace)!==Ft,(m!==b||g!==b.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,m=b,g=b.version,p=n.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Rr(new sf(2,2),new rr({name:"BackgroundMaterial",uniforms:ea(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=_t.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||g!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,m=b,g=b.version,p=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function _(P,D){P.getRGB(ou,AM(n)),t.buffers.color.setClear(ou.r,ou.g,ou.b,D,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,D=1){c.set(P),u=D,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,_(c,u)},render:E,addToRenderList:M,dispose:S}}function bL(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=p(null);let a=o,c=!1;function u(z,X,de,le,j){let re=!1;const Z=g(z,le,de,X);a!==Z&&(a=Z,d(a.object)),re=y(z,le,de,j),re&&E(z,le,de,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,b(z,X,de,le),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return n.createVertexArray()}function d(z){return n.bindVertexArray(z)}function m(z){return n.deleteVertexArray(z)}function g(z,X,de,le){const j=le.wireframe===!0;let re=i[X.id];re===void 0&&(re={},i[X.id]=re);const Z=z.isInstancedMesh===!0?z.id:0;let G=re[Z];G===void 0&&(G={},re[Z]=G);let te=G[de.id];te===void 0&&(te={},G[de.id]=te);let ce=te[j];return ce===void 0&&(ce=p(h()),te[j]=ce),ce}function p(z){const X=[],de=[],le=[];for(let j=0;j<t;j++)X[j]=0,de[j]=0,le[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:de,attributeDivisors:le,object:z,attributes:{},index:null}}function y(z,X,de,le){const j=a.attributes,re=X.attributes;let Z=0;const G=de.getAttributes();for(const te in G)if(G[te].location>=0){const k=j[te];let Q=re[te];if(Q===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),k===void 0||k.attribute!==Q||Q&&k.data!==Q.data)return!0;Z++}return a.attributesNum!==Z||a.index!==le}function E(z,X,de,le){const j={},re=X.attributes;let Z=0;const G=de.getAttributes();for(const te in G)if(G[te].location>=0){let k=re[te];k===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(k=z.instanceColor));const Q={};Q.attribute=k,k&&k.data&&(Q.data=k.data),j[te]=Q,Z++}a.attributes=j,a.attributesNum=Z,a.index=le}function M(){const z=a.newAttributes;for(let X=0,de=z.length;X<de;X++)z[X]=0}function _(z){S(z,0)}function S(z,X){const de=a.newAttributes,le=a.enabledAttributes,j=a.attributeDivisors;de[z]=1,le[z]===0&&(n.enableVertexAttribArray(z),le[z]=1),j[z]!==X&&(n.vertexAttribDivisor(z,X),j[z]=X)}function P(){const z=a.newAttributes,X=a.enabledAttributes;for(let de=0,le=X.length;de<le;de++)X[de]!==z[de]&&(n.disableVertexAttribArray(de),X[de]=0)}function D(z,X,de,le,j,re,Z){Z===!0?n.vertexAttribIPointer(z,X,de,j,re):n.vertexAttribPointer(z,X,de,le,j,re)}function b(z,X,de,le){M();const j=le.attributes,re=de.getAttributes(),Z=X.defaultAttributeValues;for(const G in re){const te=re[G];if(te.location>=0){let ce=j[G];if(ce===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){const k=ce.normalized,Q=ce.itemSize,Fe=e.get(ce);if(Fe===void 0)continue;const He=Fe.buffer,Be=Fe.type,K=Fe.bytesPerElement,ge=Be===n.INT||Be===n.UNSIGNED_INT||ce.gpuType===Jm;if(ce.isInterleavedBufferAttribute){const ve=ce.data,Ue=ve.stride,Xe=ce.offset;if(ve.isInstancedInterleavedBuffer){for(let je=0;je<te.locationSize;je++)S(te.location+je,ve.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let je=0;je<te.locationSize;je++)_(te.location+je);n.bindBuffer(n.ARRAY_BUFFER,He);for(let je=0;je<te.locationSize;je++)D(te.location+je,Q/te.locationSize,Be,k,Ue*K,(Xe+Q/te.locationSize*je)*K,ge)}else{if(ce.isInstancedBufferAttribute){for(let ve=0;ve<te.locationSize;ve++)S(te.location+ve,ce.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<te.locationSize;ve++)_(te.location+ve);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ve=0;ve<te.locationSize;ve++)D(te.location+ve,Q/te.locationSize,Be,k,Q*K,Q/te.locationSize*ve*K,ge)}}else if(Z!==void 0){const k=Z[G];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(te.location,k);break;case 3:n.vertexAttrib3fv(te.location,k);break;case 4:n.vertexAttrib4fv(te.location,k);break;default:n.vertexAttrib1fv(te.location,k)}}}}P()}function N(){I();for(const z in i){const X=i[z];for(const de in X){const le=X[de];for(const j in le){const re=le[j];for(const Z in re)m(re[Z].object),delete re[Z];delete le[j]}}delete i[z]}}function L(z){if(i[z.id]===void 0)return;const X=i[z.id];for(const de in X){const le=X[de];for(const j in le){const re=le[j];for(const Z in re)m(re[Z].object),delete re[Z];delete le[j]}}delete i[z.id]}function F(z){for(const X in i){const de=i[X];for(const le in de){const j=de[le];if(j[z.id]===void 0)continue;const re=j[z.id];for(const Z in re)m(re[Z].object),delete re[Z];delete j[z.id]}}}function T(z){for(const X in i){const de=i[X],le=z.isInstancedMesh===!0?z.id:0,j=de[le];if(j!==void 0){for(const re in j){const Z=j[re];for(const G in Z)m(Z[G].object),delete Z[G];delete j[re]}delete de[le],Object.keys(de).length===0&&delete i[X]}}}function I(){V(),c=!0,a!==o&&(a=o,d(a.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:I,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:_,disableUnusedAttributes:P}}function CL(n,e,t){let i;function o(h){i=h}function a(h,d){n.drawArrays(i,h,d),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawArraysInstanced(i,h,d,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y];t.update(p,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function RL(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Ii&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const T=F===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Zi&&!T)}function h(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(ut("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:b,maxSamples:N,samples:L}}function PL(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Us,u=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const y=g.length!==0||p||i!==0||o;return o=p,i=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,p){t=m(g,p,0)},this.setState=function(g,p,y){const E=g.clippingPlanes,M=g.clipIntersection,_=g.clipShadows,S=n.get(g);if(!o||E===null||E.length===0||a&&!_)a?m(null):d();else{const P=a?0:i,D=P*4;let b=S.clippingState||null;h.value=b,b=m(E,p,D,y);for(let N=0;N!==D;++N)b[N]=t[N];S.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,p,y,E){const M=g!==null?g.length:0;let _=null;if(M!==0){if(_=h.value,E!==!0||_===null){const S=y+M*4,P=p.matrixWorldInverse;u.getNormalMatrix(P),(_===null||_.length<S)&&(_=new Float32Array(S));for(let D=0,b=y;D!==M;++D,b+=4)c.copy(g[D]).applyMatrix4(P,u),c.normal.toArray(_,b),_[b+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}const os=4,iy=[.125,.215,.35,.446,.526,.582],ks=20,DL=256,$a=new lg,ry=new bt;let Xh=null,jh=0,Yh=0,$h=!1;const NL=new ae;class sy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=NL}=a;Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,o,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ly(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ay(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,jh,Yh),this._renderer.xr.enabled=$h,e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:br,format:Ii,colorSpace:zu,depthBuffer:!1},o=oy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oy(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LL(a)),this._blurMaterial=FL(a,e,t),this._ggxMaterial=IL(a,e,t)}return o}_compileMaterial(e){const t=new Rr(new Bi,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,o,a){const h=new Ni(90,1,t,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,y=g.toneMapping;g.getClearColor(ry),g.toneMapping=er,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rr(new Sl,new SM({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let S=!1;const P=e.background;P?P.isColor&&(_.color.copy(P),e.background=null,S=!0):(_.color.copy(ry),S=!0);for(let D=0;D<6;D++){const b=D%3;b===0?(h.up.set(0,d[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[D],a.y,a.z)):b===1?(h.up.set(0,0,d[D]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[D],a.z)):(h.up.set(0,d[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[D]));const N=this._cubeSize;Vo(o,b*N,D>2?N:0,N,N),g.setRenderTarget(o),S&&g.render(M,h),g.render(e,h)}g.toneMapping=y,g.autoClear=p,e.background=P}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===$s||e.mapping===Qo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ly()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ay());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;Vo(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,$a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(d*d-m*m),p=0+d*1.25,y=g*p,{_lodMax:E}=this,M=this._sizeLods[i],_=3*M*(i>E-os?i-E+os:0),S=4*(this._cubeSize-M);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=E-t,Vo(a,_,S,3*M,2*M),o.setRenderTarget(a),o.render(u,$a),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=E-i,Vo(e,_,S,3*M,2*M),o.setRenderTarget(e),o.render(u,$a)}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[o];g.material=d;const p=d.uniforms,y=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ks-1),M=a/E,_=isFinite(a)?1+Math.floor(m*M):ks;_>ks&&ut(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ks}`);const S=[];let P=0;for(let F=0;F<ks;++F){const T=F/M,I=Math.exp(-T*T/2);S.push(I),F===0?P+=I:F<_&&(P+=2*I)}for(let F=0;F<S.length;F++)S[F]=S[F]/P;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=S,p.latitudinal.value=c==="latitudinal",u&&(p.poleAxis.value=u);const{_lodMax:D}=this;p.dTheta.value=E,p.mipInt.value=D-i;const b=this._sizeLods[o],N=3*b*(o>D-os?o-D+os:0),L=4*(this._cubeSize-b);Vo(t,N,L,3*b,2*b),h.setRenderTarget(t),h.render(g,$a)}}function LL(n){const e=[],t=[],i=[];let o=n;const a=n-os+1+iy.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let h=1/u;c>n-os?h=iy[c-n+os-1]:c===0&&(h=0),t.push(h);const d=1/(u-2),m=-d,g=1+d,p=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,E=6,M=3,_=2,S=1,P=new Float32Array(M*E*y),D=new Float32Array(_*E*y),b=new Float32Array(S*E*y);for(let L=0;L<y;L++){const F=L%3*2/3-1,T=L>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];P.set(I,M*E*L),D.set(p,_*E*L);const V=[L,L,L,L,L,L];b.set(V,S*E*L)}const N=new Bi;N.setAttribute("position",new Ui(P,M)),N.setAttribute("uv",new Ui(D,_)),N.setAttribute("faceIndex",new Ui(b,S)),i.push(new Rr(N,null)),o>os&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function oy(n,e,t){const i=new tr(n,e,t);return i.texture.mapping=nf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function IL(n,e,t){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:of(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function FL(n,e,t){const i=new Float32Array(ks),o=new ae(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:of(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function ay(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function ly(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}class PM extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new TM(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Sl(5,5,5),a=new rr({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:Mr});a.uniforms.tEquirect.value=t;const c=new Rr(o,a),u=t.minFilter;return t.minFilter===zs&&(t.minFilter=Ln),new z3(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function UL(n){let e=new WeakMap,t=new WeakMap,i=null;function o(p,y=!1){return p==null?null:y?c(p):a(p)}function a(p){if(p&&p.isTexture){const y=p.mapping;if(y===xh||y===_h)if(e.has(p)){const E=e.get(p).texture;return u(E,p.mapping)}else{const E=p.image;if(E&&E.height>0){const M=new PM(E.height);return M.fromEquirectangularTexture(n,p),e.set(p,M),p.addEventListener("dispose",d),u(M.texture,p.mapping)}else return null}}return p}function c(p){if(p&&p.isTexture){const y=p.mapping,E=y===xh||y===_h,M=y===$s||y===Qo;if(E||M){let _=t.get(p);const S=_!==void 0?_.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new sy(n)),_=E?i.fromEquirectangular(p,_):i.fromCubemap(p,_),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),_.texture;if(_!==void 0)return _.texture;{const P=p.image;return E&&P&&P.height>0||M&&P&&h(P)?(i===null&&(i=new sy(n)),_=E?i.fromEquirectangular(p):i.fromCubemap(p),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),p.addEventListener("dispose",m),_.texture):null}}}return p}function u(p,y){return y===xh?p.mapping=$s:y===_h&&(p.mapping=Qo),p}function h(p){let y=0;const E=6;for(let M=0;M<E;M++)p[M]!==void 0&&y++;return y===E}function d(p){const y=p.target;y.removeEventListener("dispose",d);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function m(p){const y=p.target;y.removeEventListener("dispose",m);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:g}}function OL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&$o("WebGLRenderer: "+i+" extension not supported."),o}}}function kL(n,e,t,i){const o={},a=new WeakMap;function c(g){const p=g.target;p.index!==null&&e.remove(p.index);for(const E in p.attributes)e.remove(p.attributes[E]);p.removeEventListener("dispose",c),delete o[p.id];const y=a.get(p);y&&(e.remove(y),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(g,p){return o[p.id]===!0||(p.addEventListener("dispose",c),o[p.id]=!0,t.memory.geometries++),p}function h(g){const p=g.attributes;for(const y in p)e.update(p[y],n.ARRAY_BUFFER)}function d(g){const p=[],y=g.index,E=g.attributes.position;let M=0;if(E===void 0)return;if(y!==null){const P=y.array;M=y.version;for(let D=0,b=P.length;D<b;D+=3){const N=P[D+0],L=P[D+1],F=P[D+2];p.push(N,L,L,F,F,N)}}else{const P=E.array;M=E.version;for(let D=0,b=P.length/3-1;D<b;D+=3){const N=D+0,L=D+1,F=D+2;p.push(N,L,L,F,F,N)}}const _=new(E.count>=65535?_M:xM)(p,1);_.version=M;const S=a.get(g);S&&e.remove(S),a.set(g,_)}function m(g){const p=a.get(g);if(p){const y=g.index;y!==null&&p.version<y.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:h,getWireframeAttribute:m}}function BL(n,e,t){let i;function o(g){i=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function h(g,p){n.drawElements(i,p,a,g*c),t.update(p,i,1)}function d(g,p,y){y!==0&&(n.drawElementsInstanced(i,p,a,g*c,y),t.update(p,i,y))}function m(g,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,g,0,y);let M=0;for(let _=0;_<y;_++)M+=p[_];t.update(M,i,1)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function VL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Mt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function zL(n,e,t){const i=new WeakMap,o=new tn;function a(c,u,h){const d=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let p=i.get(u);if(p===void 0||p.count!==g){let V=function(){T.dispose(),i.delete(u),u.removeEventListener("dispose",V)};var y=V;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),_===!0&&(b=3);let N=u.attributes.position.count*b,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*L*4*g),T=new mM(F,N,L,g);T.type=Zi,T.needsUpdate=!0;const I=b*4;for(let z=0;z<g;z++){const X=S[z],de=P[z],le=D[z],j=N*L*4*z;for(let re=0;re<X.count;re++){const Z=re*I;E===!0&&(o.fromBufferAttribute(X,re),F[j+Z+0]=o.x,F[j+Z+1]=o.y,F[j+Z+2]=o.z,F[j+Z+3]=0),M===!0&&(o.fromBufferAttribute(de,re),F[j+Z+4]=o.x,F[j+Z+5]=o.y,F[j+Z+6]=o.z,F[j+Z+7]=0),_===!0&&(o.fromBufferAttribute(le,re),F[j+Z+8]=o.x,F[j+Z+9]=o.y,F[j+Z+10]=o.z,F[j+Z+11]=le.itemSize===4?o.w:1)}}p={count:g,texture:T,size:new Ct(N,L)},i.set(u,p),u.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let E=0;for(let _=0;_<d.length;_++)E+=d[_];const M=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function HL(n,e,t,i,o){let a=new WeakMap;function c(d){const m=o.render.frame,g=d.geometry,p=e.get(d,g);if(a.get(p)!==m&&(e.update(p),a.set(p,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),a.get(d)!==m&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,m))),d.isSkinnedMesh){const y=d.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return p}function u(){a=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:u}}const GL={[JE]:"LINEAR_TONE_MAPPING",[eM]:"REINHARD_TONE_MAPPING",[tM]:"CINEON_TONE_MAPPING",[nM]:"ACES_FILMIC_TONE_MAPPING",[rM]:"AGX_TONE_MAPPING",[sM]:"NEUTRAL_TONE_MAPPING",[iM]:"CUSTOM_TONE_MAPPING"};function WL(n,e,t,i,o,a){const c=new tr(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:i?4:0,depthTexture:o?new Jo(e,t):void 0}),u=new tr(e,t,{type:br,depthBuffer:!1,stencilBuffer:!1}),h=new Bi;h.setAttribute("position",new wr([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wr([0,2,0,0,2,0],2));const d=new k3({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Rr(h,d),g=new lg(-1,1,1,-1,0,1);let p=null,y=null,E=!1,M,_=null,S=[],P=!1;this.setSize=function(D,b){c.setSize(D,b),u.setSize(D,b);for(let N=0;N<S.length;N++){const L=S[N];L.setSize&&L.setSize(D,b)}},this.setEffects=function(D){S=D,P=S.length>0&&S[0].isRenderPass===!0;const b=c.width,N=c.height;for(let L=0;L<S.length;L++){const F=S[L];F.setSize&&F.setSize(b,N)}},this.begin=function(D,b){if(E||D.toneMapping===er&&S.length===0)return!1;if(_=b,b!==null){const N=b.width,L=b.height;(c.width!==N||c.height!==L)&&this.setSize(N,L)}return P===!1&&D.setRenderTarget(c),M=D.toneMapping,D.toneMapping=er,!0},this.hasRenderPass=function(){return P},this.end=function(D,b){D.toneMapping=M,E=!0;let N=c,L=u;for(let F=0;F<S.length;F++){const T=S[F];if(T.enabled!==!1&&(T.render(D,L,N,b),T.needsSwap!==!1)){const I=N;N=L,L=I}}if(p!==D.outputColorSpace||y!==D.toneMapping){p=D.outputColorSpace,y=D.toneMapping,d.defines={},_t.getTransfer(p)===Ft&&(d.defines.SRGB_TRANSFER="");const F=GL[y];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(_),D.render(m,g),_=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),d.dispose()}}const DM=new zn,vm=new Jo(1,1),NM=new mM,LM=new p3,IM=new TM,cy=[],uy=[],fy=new Float32Array(16),dy=new Float32Array(9),hy=new Float32Array(4);function sa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=cy[o];if(a===void 0&&(a=new Float32Array(o),cy[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function af(n,e){let t=uy[e];t===void 0&&(t=new Int32Array(e),uy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function XL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function YL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function $L(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function qL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;hy.set(i),n.uniformMatrix2fv(this.addr,!1,hy),mn(t,i)}}function KL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;dy.set(i),n.uniformMatrix3fv(this.addr,!1,dy),mn(t,i)}}function ZL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;fy.set(i),n.uniformMatrix4fv(this.addr,!1,fy),mn(t,i)}}function QL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function JL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function eI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function tI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function nI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function rI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function sI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function oI(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(vm.compareFunction=t.isReversedDepthBuffer()?og:sg,a=vm):a=DM,t.setTexture2D(e||a,o)}function aI(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||LM,o)}function lI(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||IM,o)}function cI(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||NM,o)}function uI(n){switch(n){case 5126:return XL;case 35664:return jL;case 35665:return YL;case 35666:return $L;case 35674:return qL;case 35675:return KL;case 35676:return ZL;case 5124:case 35670:return QL;case 35667:case 35671:return JL;case 35668:case 35672:return eI;case 35669:case 35673:return tI;case 5125:return nI;case 36294:return iI;case 36295:return rI;case 36296:return sI;case 35678:case 36198:case 36298:case 36306:case 35682:return oI;case 35679:case 36299:case 36307:return aI;case 35680:case 36300:case 36308:case 36293:return lI;case 36289:case 36303:case 36311:case 36292:return cI}}function fI(n,e){n.uniform1fv(this.addr,e)}function dI(n,e){const t=sa(e,this.size,2);n.uniform2fv(this.addr,t)}function hI(n,e){const t=sa(e,this.size,3);n.uniform3fv(this.addr,t)}function pI(n,e){const t=sa(e,this.size,4);n.uniform4fv(this.addr,t)}function mI(n,e){const t=sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gI(n,e){const t=sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vI(n,e){const t=sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xI(n,e){n.uniform1iv(this.addr,e)}function _I(n,e){n.uniform2iv(this.addr,e)}function yI(n,e){n.uniform3iv(this.addr,e)}function SI(n,e){n.uniform4iv(this.addr,e)}function EI(n,e){n.uniform1uiv(this.addr,e)}function MI(n,e){n.uniform2uiv(this.addr,e)}function TI(n,e){n.uniform3uiv(this.addr,e)}function wI(n,e){n.uniform4uiv(this.addr,e)}function AI(n,e,t){const i=this.cache,o=e.length,a=af(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=vm:c=DM;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function bI(n,e,t){const i=this.cache,o=e.length,a=af(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||LM,a[c])}function CI(n,e,t){const i=this.cache,o=e.length,a=af(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||IM,a[c])}function RI(n,e,t){const i=this.cache,o=e.length,a=af(t,o);pn(i,a)||(n.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||NM,a[c])}function PI(n){switch(n){case 5126:return fI;case 35664:return dI;case 35665:return hI;case 35666:return pI;case 35674:return mI;case 35675:return gI;case 35676:return vI;case 5124:case 35670:return xI;case 35667:case 35671:return _I;case 35668:case 35672:return yI;case 35669:case 35673:return SI;case 5125:return EI;case 36294:return MI;case 36295:return TI;case 36296:return wI;case 35678:case 36198:case 36298:case 36306:case 35682:return AI;case 35679:case 36299:case 36307:return bI;case 35680:case 36300:case 36308:case 36293:return CI;case 36289:case 36303:case 36311:case 36292:return RI}}class DI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uI(t.type)}}class NI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PI(t.type)}}class LI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function py(n,e){n.seq.push(e),n.map[e.id]=e}function II(n,e,t){const i=n.name,o=i.length;for(qh.lastIndex=0;;){const a=qh.exec(i),c=qh.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===o){py(t,d===void 0?new DI(u,n,e):new NI(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new LI(u),py(t,g)),t=g}}}class wu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);II(u,h,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function my(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FI=37297;let UI=0;function OI(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const gy=new pt;function kI(n){_t._getMatrix(gy,_t.workingColorSpace,n);const e=`mat3( ${gy.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case Hu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+OI(n.getShaderSource(e),u)}else return a}function BI(n,e){const t=kI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const VI={[JE]:"Linear",[eM]:"Reinhard",[tM]:"Cineon",[nM]:"ACESFilmic",[rM]:"AgX",[sM]:"Neutral",[iM]:"Custom"};function zI(n,e){const t=VI[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const au=new ae;function HI(){_t.getLuminanceCoefficients(au);const n=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function WI(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XI(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Ja(n){return n!==""}function xy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _y(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jI=/^[ \t]*#include +<([\w\d./]+)>/gm;function xm(n){return n.replace(jI,$I)}const YI=new Map;function $I(n,e){let t=mt[e];if(t===void 0){const i=YI.get(e);if(i!==void 0)t=mt[i],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xm(t)}const qI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yy(n){return n.replace(qI,KI)}function KI(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Sy(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const ZI={[yu]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function QI(n){return ZI[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JI={[$s]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE",[nf]:"ENVMAP_TYPE_CUBE_UV"};function eF(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":JI[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const tF={[Qo]:"ENVMAP_MODE_REFRACTION"};function nF(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tF[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iF={[QE]:"ENVMAP_BLENDING_MULTIPLY",[Y2]:"ENVMAP_BLENDING_MIX",[$2]:"ENVMAP_BLENDING_ADD"};function rF(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iF[n.combine]||"ENVMAP_BLENDING_NONE"}function sF(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function oF(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=QI(t),d=eF(t),m=nF(t),g=rF(t),p=sF(t),y=GI(t),E=WI(a),M=o.createProgram();let _,S,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ja).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ja).join(`
`),S.length>0&&(S+=`
`)):(_=[Sy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),S=[Sy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?mt.tonemapping_pars_fragment:"",t.toneMapping!==er?zI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,BI("linearToOutputTexel",t.outputColorSpace),HI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),c=xm(c),c=xy(c,t),c=_y(c,t),u=xm(u),u=xy(u,t),u=_y(u,t),c=yy(c),u=yy(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=P+_+c,b=P+S+u,N=my(o,o.VERTEX_SHADER,D),L=my(o,o.FRAGMENT_SHADER,b);o.attachShader(M,N),o.attachShader(M,L),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(z){if(n.debug.checkShaderErrors){const X=o.getProgramInfoLog(M)||"",de=o.getShaderInfoLog(N)||"",le=o.getShaderInfoLog(L)||"",j=X.trim(),re=de.trim(),Z=le.trim();let G=!0,te=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,N,L);else{const ce=vy(o,N,"vertex"),k=vy(o,L,"fragment");Mt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+ce+`
`+k)}else j!==""?ut("WebGLProgram: Program Info Log:",j):(re===""||Z==="")&&(te=!1);te&&(z.diagnostics={runnable:G,programLog:j,vertexShader:{log:re,prefix:_},fragmentShader:{log:Z,prefix:S}})}o.deleteShader(N),o.deleteShader(L),T=new wu(o,M),I=XI(o,M)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(M,FI)),V},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UI++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=L,this}let aF=0;class lF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cF(e),t.set(e,i)),i}}class cF{constructor(e){this.id=aF++,this.code=e,this.usedTimes=0}}function uF(n){return n===qs||n===Bu||n===Vu}function fF(n,e,t,i,o,a){const c=new gM,u=new lF,h=new Set,d=[],m=new Map,g=i.logarithmicDepthBuffer;let p=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return h.add(T),T===0?"uv":`uv${T}`}function M(T,I,V,z,X,de){const le=z.fog,j=X.geometry,re=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=e.get(T.envMap||re,Z),te=G&&G.mapping===nf?G.image.height:null,ce=y[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const k=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Q=k!==void 0?k.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let He,Be,K,ge;if(ce){const Ye=qi[ce];He=Ye.vertexShader,Be=Ye.fragmentShader}else{He=T.vertexShader,Be=T.fragmentShader;const Ye=u.getVertexShaderStage(T),Ot=u.getFragmentShaderStage(T);u.update(T,Ye,Ot),K=Ye.id,ge=Ot.id}const ve=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Xe=X.isInstancedMesh===!0,je=X.isBatchedMesh===!0,At=!!T.map,me=!!T.matcap,Ce=!!G,rt=!!T.aoMap,ft=!!T.lightMap,Dt=!!T.bumpMap&&T.wireframe===!1,Ht=!!T.normalMap,jt=!!T.displacementMap,Bt=!!T.emissiveMap,Nt=!!T.metalnessMap,Yt=!!T.roughnessMap,$=T.anisotropy>0,yn=T.clearcoat>0,Tt=T.dispersion>0,U=T.iridescence>0,w=T.sheen>0,J=T.transmission>0,oe=$&&!!T.anisotropyMap,he=yn&&!!T.clearcoatMap,Te=yn&&!!T.clearcoatNormalMap,De=yn&&!!T.clearcoatRoughnessMap,pe=U&&!!T.iridescenceMap,_e=U&&!!T.iridescenceThicknessMap,Le=w&&!!T.sheenColorMap,Je=w&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Pe=!!T.specularColorMap,it=!!T.specularIntensityMap,st=J&&!!T.transmissionMap,lt=J&&!!T.thicknessMap,W=!!T.gradientMap,Re=!!T.alphaMap,xe=T.alphaTest>0,Ne=!!T.alphaHash,Oe=!!T.extensions;let ye=er;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ye=n.toneMapping);const Ke={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:Be,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:je,batchingColor:je&&X._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&X.instanceColor!==null,instancingMorph:Xe&&X.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:At,matcap:me,envMap:Ce,envMapMode:Ce&&G.mapping,envMapCubeUVHeight:te,aoMap:rt,lightMap:ft,bumpMap:Dt,normalMap:Ht,displacementMap:jt,emissiveMap:Bt,normalMapObjectSpace:Ht&&T.normalMapType===Z2,normalMapTangentSpace:Ht&&T.normalMapType===P_,packedNormalMap:Ht&&T.normalMapType===P_&&uF(T.normalMap.format),metalnessMap:Nt,roughnessMap:Yt,anisotropy:$,anisotropyMap:oe,clearcoat:yn,clearcoatMap:he,clearcoatNormalMap:Te,clearcoatRoughnessMap:De,dispersion:Tt,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:_e,sheen:w,sheenColorMap:Le,sheenRoughnessMap:Je,specularMap:Ie,specularColorMap:Pe,specularIntensityMap:it,transmission:J,transmissionMap:st,thicknessMap:lt,gradientMap:W,opaque:T.transparent===!1&&T.blending===Yo&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:xe,alphaHash:Ne,combine:T.combine,mapUv:At&&E(T.map.channel),aoMapUv:rt&&E(T.aoMap.channel),lightMapUv:ft&&E(T.lightMap.channel),bumpMapUv:Dt&&E(T.bumpMap.channel),normalMapUv:Ht&&E(T.normalMap.channel),displacementMapUv:jt&&E(T.displacementMap.channel),emissiveMapUv:Bt&&E(T.emissiveMap.channel),metalnessMapUv:Nt&&E(T.metalnessMap.channel),roughnessMapUv:Yt&&E(T.roughnessMap.channel),anisotropyMapUv:oe&&E(T.anisotropyMap.channel),clearcoatMapUv:he&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Je&&E(T.sheenRoughnessMap.channel),specularMapUv:Ie&&E(T.specularMap.channel),specularColorMapUv:Pe&&E(T.specularColorMap.channel),specularIntensityMapUv:it&&E(T.specularIntensityMap.channel),transmissionMapUv:st&&E(T.transmissionMap.channel),thicknessMapUv:lt&&E(T.thicknessMap.channel),alphaMapUv:Re&&E(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ht||$),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!j.attributes.uv&&(At||Re),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&Ht===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ue,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Fe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:At&&T.map.isVideoTexture===!0&&_t.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&_t.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yr,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function _(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)I.push(V),I.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(S(I,T),P(I,T),I.push(n.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function S(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function P(T,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),I.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function D(T){const I=y[T.type];let V;if(I){const z=qi[I];V=F3.clone(z.uniforms)}else V=T.uniforms;return V}function b(T,I){let V=m.get(I);return V!==void 0?++V.usedTimes:(V=new oF(n,I,T,o),d.push(V),m.set(I,V)),V}function N(T){if(--T.usedTimes===0){const I=d.indexOf(T);d[I]=d[d.length-1],d.pop(),m.delete(T.cacheKey),T.destroy()}}function L(T){u.remove(T)}function F(){u.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:b,releaseProgram:N,releaseShaderCache:L,programs:d,dispose:F}}function dF(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,h){n.get(c)[u]=h}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function hF(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function My(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function u(p,y,E,M,_,S){let P=n[e];return P===void 0?(P={id:p.id,object:p,geometry:y,material:E,materialVariant:c(p),groupOrder:M,renderOrder:p.renderOrder,z:_,group:S},n[e]=P):(P.id=p.id,P.object=p,P.geometry=y,P.material=E,P.materialVariant=c(p),P.groupOrder=M,P.renderOrder=p.renderOrder,P.z=_,P.group=S),e++,P}function h(p,y,E,M,_,S){const P=u(p,y,E,M,_,S);E.transmission>0?i.push(P):E.transparent===!0?o.push(P):t.push(P)}function d(p,y,E,M,_,S){const P=u(p,y,E,M,_,S);E.transmission>0?i.unshift(P):E.transparent===!0?o.unshift(P):t.unshift(P)}function m(p,y,E){t.length>1&&t.sort(p||hF),i.length>1&&i.sort(y||Ey),o.length>1&&o.sort(y||Ey),E&&(t.reverse(),i.reverse(),o.reverse())}function g(){for(let p=e,y=n.length;p<y;p++){const E=n[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:h,unshift:d,finish:g,sort:m}}function pF(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new My,n.set(i,[c])):o>=a.length?(c=new My,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function mF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new bt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function gF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vF=0;function xF(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _F(n){const e=new mF,t=gF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ae);const o=new ae,a=new rn,c=new rn;function u(d){let m=0,g=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let y=0,E=0,M=0,_=0,S=0,P=0,D=0,b=0,N=0,L=0,F=0;d.sort(xF);for(let I=0,V=d.length;I<V;I++){const z=d[I],X=z.color,de=z.intensity,le=z.distance;let j=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===qs?j=z.shadow.map.texture:j=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=X.r*de,g+=X.g*de,p+=X.b*de;else if(z.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(z.sh.coefficients[re],de);F++}else if(z.isDirectionalLight){const re=e.get(z);if(re.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,G=t.get(z);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[y]=G,i.directionalShadowMap[y]=j,i.directionalShadowMatrix[y]=z.shadow.matrix,P++}i.directional[y]=re,y++}else if(z.isSpotLight){const re=e.get(z);re.position.setFromMatrixPosition(z.matrixWorld),re.color.copy(X).multiplyScalar(de),re.distance=le,re.coneCos=Math.cos(z.angle),re.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),re.decay=z.decay,i.spot[M]=re;const Z=z.shadow;if(z.map&&(i.spotLightMap[N]=z.map,N++,Z.updateMatrices(z),z.castShadow&&L++),i.spotLightMatrix[M]=Z.matrix,z.castShadow){const G=t.get(z);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=j,b++}M++}else if(z.isRectAreaLight){const re=e.get(z);re.color.copy(X).multiplyScalar(de),re.halfWidth.set(z.width*.5,0,0),re.halfHeight.set(0,z.height*.5,0),i.rectArea[_]=re,_++}else if(z.isPointLight){const re=e.get(z);if(re.color.copy(z.color).multiplyScalar(z.intensity),re.distance=z.distance,re.decay=z.decay,z.castShadow){const Z=z.shadow,G=t.get(z);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[E]=G,i.pointShadowMap[E]=j,i.pointShadowMatrix[E]=z.shadow.matrix,D++}i.point[E]=re,E++}else if(z.isHemisphereLight){const re=e.get(z);re.skyColor.copy(z.color).multiplyScalar(de),re.groundColor.copy(z.groundColor).multiplyScalar(de),i.hemi[S]=re,S++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=p;const T=i.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==M||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==P||T.numPointShadows!==D||T.numSpotShadows!==b||T.numSpotMaps!==N||T.numLightProbes!==F)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=_,i.point.length=E,i.hemi.length=S,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=b+N-L,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=F,T.directionalLength=y,T.pointLength=E,T.spotLength=M,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=P,T.numPointShadows=D,T.numSpotShadows=b,T.numSpotMaps=N,T.numLightProbes=F,i.version=vF++)}function h(d,m){let g=0,p=0,y=0,E=0,M=0;const _=m.matrixWorldInverse;for(let S=0,P=d.length;S<P;S++){const D=d[S];if(D.isDirectionalLight){const b=i.directional[g];b.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),g++}else if(D.isSpotLight){const b=i.spot[y];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),y++}else if(D.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(_),c.identity(),a.copy(D.matrixWorld),a.premultiply(_),c.extractRotation(a),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(_),p++}else if(D.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(_),M++}}}return{setup:u,setupView:h,state:i}}function Ty(n){const e=new _F(n),t=[],i=[],o=[];function a(p){g.camera=p,t.length=0,i.length=0,o.length=0}function c(p){t.push(p)}function u(p){i.push(p)}function h(p){o.push(p)}function d(){e.setup(t)}function m(p){e.setupView(t,p)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function yF(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new Ty(n),e.set(o,[u])):a>=c.length?(u=new Ty(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const SF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EF=`uniform sampler2D shadow_pass;
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
}`,MF=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],TF=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],wy=new rn,qa=new ae,Kh=new ae;function wF(n,e,t){let i=new EM;const o=new Ct,a=new Ct,c=new tn,u=new B3,h=new V3,d={},m=t.maxTextureSize,g={[us]:Qn,[Qn]:us,[yr]:yr},p=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:SF,fragmentShader:EF}),y=p.clone();y.defines.HORIZONTAL_PASS=1;const E=new Bi;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Rr(E,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let S=this.type;this.render=function(L,F,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;this.type===C2&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yu);const I=n.getRenderTarget(),V=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Mr),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const de=S!==this.type;de&&F.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(j=>j.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,j=L.length;le<j;le++){const re=L[le],Z=re.shadow;if(Z===void 0){ut("WebGLShadowMap:",re,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const G=Z.getFrameExtents();o.multiply(G),a.copy(Z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/G.x),o.x=a.x*G.x,Z.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/G.y),o.y=a.y*G.y,Z.mapSize.y=a.y));const te=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=te,Z.map===null||de===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Qa){if(re.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new tr(o.x,o.y,{format:qs,type:br,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),Z.map.texture.name=re.name+".shadowMap",Z.map.depthTexture=new Jo(o.x,o.y,Zi),Z.map.depthTexture.name=re.name+".shadowMapDepth",Z.map.depthTexture.format=Cr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=wn,Z.map.depthTexture.magFilter=wn}else re.isPointLight?(Z.map=new PM(o.x),Z.map.depthTexture=new L3(o.x,ir)):(Z.map=new tr(o.x,o.y),Z.map.depthTexture=new Jo(o.x,o.y,ir)),Z.map.depthTexture.name=re.name+".shadowMap",Z.map.depthTexture.format=Cr,this.type===yu?(Z.map.depthTexture.compareFunction=te?og:sg,Z.map.depthTexture.minFilter=Ln,Z.map.depthTexture.magFilter=Ln):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=wn,Z.map.depthTexture.magFilter=wn);Z.camera.updateProjectionMatrix()}const ce=Z.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ce;k++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,k),n.clear();else{k===0&&(n.setRenderTarget(Z.map),n.clear());const Q=Z.getViewport(k);c.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),X.viewport(c)}if(re.isPointLight){const Q=Z.camera,Fe=Z.matrix,He=re.distance||Q.far;He!==Q.far&&(Q.far=He,Q.updateProjectionMatrix()),qa.setFromMatrixPosition(re.matrixWorld),Q.position.copy(qa),Kh.copy(Q.position),Kh.add(MF[k]),Q.up.copy(TF[k]),Q.lookAt(Kh),Q.updateMatrixWorld(),Fe.makeTranslation(-qa.x,-qa.y,-qa.z),wy.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(wy,Q.coordinateSystem,Q.reversedDepth)}else Z.updateMatrices(re);i=Z.getFrustum(),b(F,T,Z.camera,re,this.type)}Z.isPointLightShadow!==!0&&this.type===Qa&&P(Z,T),Z.needsUpdate=!1}S=this.type,_.needsUpdate=!1,n.setRenderTarget(I,V,z)};function P(L,F){const T=e.update(M);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new tr(o.x,o.y,{format:qs,type:br})),p.uniforms.shadow_pass.value=L.map.depthTexture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,T,p,M,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,T,y,M,null)}function D(L,F,T,I){let V=null;const z=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)V=z;else if(V=T.isPointLight===!0?h:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const X=V.uuid,de=F.uuid;let le=d[X];le===void 0&&(le={},d[X]=le);let j=le[de];j===void 0&&(j=V.clone(),le[de]=j,F.addEventListener("dispose",N)),V=j}if(V.visible=F.visible,V.wireframe=F.wireframe,I===Qa?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:g[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const X=n.properties.get(V);X.light=T}return V}function b(L,F,T,I,V){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Qa)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const de=e.update(L),le=L.material;if(Array.isArray(le)){const j=de.groups;for(let re=0,Z=j.length;re<Z;re++){const G=j[re],te=le[G.materialIndex];if(te&&te.visible){const ce=D(L,te,I,V);L.onBeforeShadow(n,L,F,T,de,ce,G),n.renderBufferDirect(T,null,de,ce,L,G),L.onAfterShadow(n,L,F,T,de,ce,G)}}}else if(le.visible){const j=D(L,le,I,V);L.onBeforeShadow(n,L,F,T,de,j,null),n.renderBufferDirect(T,null,de,j,L,null),L.onAfterShadow(n,L,F,T,de,j,null)}}const X=L.children;for(let de=0,le=X.length;de<le;de++)b(X[de],F,T,I,V)}function N(L){L.target.removeEventListener("dispose",N);for(const T in d){const I=d[T],V=L.target.uuid;V in I&&(I[V].dispose(),delete I[V])}}}function AF(n,e){function t(){let W=!1;const Re=new tn;let xe=null;const Ne=new tn(0,0,0,0);return{setMask:function(Oe){xe!==Oe&&!W&&(n.colorMask(Oe,Oe,Oe,Oe),xe=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,ye,Ke,Ye,Ot){Ot===!0&&(Oe*=Ye,ye*=Ye,Ke*=Ye),Re.set(Oe,ye,Ke,Ye),Ne.equals(Re)===!1&&(n.clearColor(Oe,ye,Ke,Ye),Ne.copy(Re))},reset:function(){W=!1,xe=null,Ne.set(-1,0,0,0)}}}function i(){let W=!1,Re=!1,xe=null,Ne=null,Oe=null;return{setReversed:function(ye){if(Re!==ye){const Ke=e.get("EXT_clip_control");ye?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Re=ye;const Ye=Oe;Oe=null,this.setClear(Ye)}},getReversed:function(){return Re},setTest:function(ye){ye?ve(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(ye){xe!==ye&&!W&&(n.depthMask(ye),xe=ye)},setFunc:function(ye){if(Re&&(ye=a3[ye]),Ne!==ye){switch(ye){case Pp:n.depthFunc(n.NEVER);break;case Dp:n.depthFunc(n.ALWAYS);break;case Np:n.depthFunc(n.LESS);break;case Zo:n.depthFunc(n.LEQUAL);break;case Lp:n.depthFunc(n.EQUAL);break;case Ip:n.depthFunc(n.GEQUAL);break;case Fp:n.depthFunc(n.GREATER);break;case Up:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Oe!==ye&&(Oe=ye,Re&&(ye=1-ye),n.clearDepth(ye))},reset:function(){W=!1,xe=null,Ne=null,Oe=null,Re=!1}}}function o(){let W=!1,Re=null,xe=null,Ne=null,Oe=null,ye=null,Ke=null,Ye=null,Ot=null;return{setTest:function(Rt){W||(Rt?ve(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Rt){Re!==Rt&&!W&&(n.stencilMask(Rt),Re=Rt)},setFunc:function(Rt,An,ai){(xe!==Rt||Ne!==An||Oe!==ai)&&(n.stencilFunc(Rt,An,ai),xe=Rt,Ne=An,Oe=ai)},setOp:function(Rt,An,ai){(ye!==Rt||Ke!==An||Ye!==ai)&&(n.stencilOp(Rt,An,ai),ye=Rt,Ke=An,Ye=ai)},setLocked:function(Rt){W=Rt},setClear:function(Rt){Ot!==Rt&&(n.clearStencil(Rt),Ot=Rt)},reset:function(){W=!1,Re=null,xe=null,Ne=null,Oe=null,ye=null,Ke=null,Ye=null,Ot=null}}}const a=new t,c=new i,u=new o,h=new WeakMap,d=new WeakMap;let m={},g={},p={},y=new WeakMap,E=[],M=null,_=!1,S=null,P=null,D=null,b=null,N=null,L=null,F=null,T=new bt(0,0,0),I=0,V=!1,z=null,X=null,de=null,le=null,j=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),Z=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Z=G>=2);let ce=null,k={};const Q=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),He=new tn().fromArray(Q),Be=new tn().fromArray(Fe);function K(W,Re,xe,Ne){const Oe=new Uint8Array(4),ye=n.createTexture();n.bindTexture(W,ye),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<xe;Ke++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(Re+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return ye}const ge={};ge[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(n.DEPTH_TEST),c.setFunc(Zo),Dt(!1),Ht(A_),ve(n.CULL_FACE),rt(Mr);function ve(W){m[W]!==!0&&(n.enable(W),m[W]=!0)}function Ue(W){m[W]!==!1&&(n.disable(W),m[W]=!1)}function Xe(W,Re){return p[W]!==Re?(n.bindFramebuffer(W,Re),p[W]=Re,W===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Re),W===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function je(W,Re){let xe=E,Ne=!1;if(W){xe=y.get(Re),xe===void 0&&(xe=[],y.set(Re,xe));const Oe=W.textures;if(xe.length!==Oe.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Ke=Oe.length;ye<Ke;ye++)xe[ye]=n.COLOR_ATTACHMENT0+ye;xe.length=Oe.length,Ne=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(xe)}function At(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const me={[Os]:n.FUNC_ADD,[P2]:n.FUNC_SUBTRACT,[D2]:n.FUNC_REVERSE_SUBTRACT};me[N2]=n.MIN,me[L2]=n.MAX;const Ce={[I2]:n.ZERO,[F2]:n.ONE,[U2]:n.SRC_COLOR,[Cp]:n.SRC_ALPHA,[H2]:n.SRC_ALPHA_SATURATE,[V2]:n.DST_COLOR,[k2]:n.DST_ALPHA,[O2]:n.ONE_MINUS_SRC_COLOR,[Rp]:n.ONE_MINUS_SRC_ALPHA,[z2]:n.ONE_MINUS_DST_COLOR,[B2]:n.ONE_MINUS_DST_ALPHA,[G2]:n.CONSTANT_COLOR,[W2]:n.ONE_MINUS_CONSTANT_COLOR,[X2]:n.CONSTANT_ALPHA,[j2]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(W,Re,xe,Ne,Oe,ye,Ke,Ye,Ot,Rt){if(W===Mr){_===!0&&(Ue(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),W!==R2){if(W!==S||Rt!==V){if((P!==Os||N!==Os)&&(n.blendEquation(n.FUNC_ADD),P=Os,N=Os),Rt)switch(W){case Yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case b_:n.blendFunc(n.ONE,n.ONE);break;case C_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",W);break}else switch(W){case Yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case b_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case C_:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",W);break}D=null,b=null,L=null,F=null,T.set(0,0,0),I=0,S=W,V=Rt}return}Oe=Oe||Re,ye=ye||xe,Ke=Ke||Ne,(Re!==P||Oe!==N)&&(n.blendEquationSeparate(me[Re],me[Oe]),P=Re,N=Oe),(xe!==D||Ne!==b||ye!==L||Ke!==F)&&(n.blendFuncSeparate(Ce[xe],Ce[Ne],Ce[ye],Ce[Ke]),D=xe,b=Ne,L=ye,F=Ke),(Ye.equals(T)===!1||Ot!==I)&&(n.blendColor(Ye.r,Ye.g,Ye.b,Ot),T.copy(Ye),I=Ot),S=W,V=!1}function ft(W,Re){W.side===yr?Ue(n.CULL_FACE):ve(n.CULL_FACE);let xe=W.side===Qn;Re&&(xe=!xe),Dt(xe),W.blending===Yo&&W.transparent===!1?rt(Mr):rt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ne=W.stencilWrite;u.setTest(Ne),Ne&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Bt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(W){z!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),z=W)}function Ht(W){W!==A2?(ve(n.CULL_FACE),W!==X&&(W===A_?n.cullFace(n.BACK):W===b2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),X=W}function jt(W){W!==de&&(Z&&n.lineWidth(W),de=W)}function Bt(W,Re,xe){W?(ve(n.POLYGON_OFFSET_FILL),(le!==Re||j!==xe)&&(le=Re,j=xe,c.getReversed()&&(Re=-Re),n.polygonOffset(Re,xe))):Ue(n.POLYGON_OFFSET_FILL)}function Nt(W){W?ve(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function Yt(W){W===void 0&&(W=n.TEXTURE0+re-1),ce!==W&&(n.activeTexture(W),ce=W)}function $(W,Re,xe){xe===void 0&&(ce===null?xe=n.TEXTURE0+re-1:xe=ce);let Ne=k[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},k[xe]=Ne),(Ne.type!==W||Ne.texture!==Re)&&(ce!==xe&&(n.activeTexture(xe),ce=xe),n.bindTexture(W,Re||ge[W]),Ne.type=W,Ne.texture=Re)}function yn(){const W=k[ce];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function w(){try{n.texSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function J(){try{n.texSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Te(){try{n.texStorage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function De(){try{n.texStorage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function pe(){try{n.texImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function _e(){try{n.texImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Le(W){return g[W]!==void 0?g[W]:n.getParameter(W)}function Je(W,Re){g[W]!==Re&&(n.pixelStorei(W,Re),g[W]=Re)}function Ie(W){He.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),He.copy(W))}function Pe(W){Be.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Be.copy(W))}function it(W,Re){let xe=d.get(Re);xe===void 0&&(xe=new WeakMap,d.set(Re,xe));let Ne=xe.get(W);Ne===void 0&&(Ne=n.getUniformBlockIndex(Re,W.name),xe.set(W,Ne))}function st(W,Re){const Ne=d.get(Re).get(W);h.get(Re)!==Ne&&(n.uniformBlockBinding(Re,Ne,W.__bindingPointIndex),h.set(Re,Ne))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},g={},ce=null,k={},p={},y=new WeakMap,E=[],M=null,_=!1,S=null,P=null,D=null,b=null,N=null,L=null,F=null,T=new bt(0,0,0),I=0,V=!1,z=null,X=null,de=null,le=null,j=null,He.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Ue,bindFramebuffer:Xe,drawBuffers:je,useProgram:At,setBlending:rt,setMaterial:ft,setFlipSided:Dt,setCullFace:Ht,setLineWidth:jt,setPolygonOffset:Bt,setScissorTest:Nt,activeTexture:Yt,bindTexture:$,unbindTexture:yn,compressedTexImage2D:Tt,compressedTexImage3D:U,texImage2D:pe,texImage3D:_e,pixelStorei:Je,getParameter:Le,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Te,texStorage3D:De,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Ie,viewport:Pe,reset:lt}}function bF(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ct,m=new WeakMap,g=new Set;let p;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,w){return E?new OffscreenCanvas(U,w):Wu("canvas")}function _(U,w,J){let oe=1;const he=Tt(U);if((he.width>J||he.height>J)&&(oe=J/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Te=Math.floor(oe*he.width),De=Math.floor(oe*he.height);p===void 0&&(p=M(Te,De));const pe=w?M(Te,De):p;return pe.width=Te,pe.height=De,pe.getContext("2d").drawImage(U,0,0,Te,De),ut("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+De+")."),pe}else return"data"in U&&ut("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function S(U){return U.generateMipmaps}function P(U){n.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(U,w,J,oe,he,Te=!1){if(U!==null){if(n[U]!==void 0)return n[U];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let De;oe&&(De=e.get("EXT_texture_norm16"),De||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===n.RED&&(J===n.FLOAT&&(pe=n.R32F),J===n.HALF_FLOAT&&(pe=n.R16F),J===n.UNSIGNED_BYTE&&(pe=n.R8),J===n.UNSIGNED_SHORT&&De&&(pe=De.R16_EXT),J===n.SHORT&&De&&(pe=De.R16_SNORM_EXT)),w===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.R8UI),J===n.UNSIGNED_SHORT&&(pe=n.R16UI),J===n.UNSIGNED_INT&&(pe=n.R32UI),J===n.BYTE&&(pe=n.R8I),J===n.SHORT&&(pe=n.R16I),J===n.INT&&(pe=n.R32I)),w===n.RG&&(J===n.FLOAT&&(pe=n.RG32F),J===n.HALF_FLOAT&&(pe=n.RG16F),J===n.UNSIGNED_BYTE&&(pe=n.RG8),J===n.UNSIGNED_SHORT&&De&&(pe=De.RG16_EXT),J===n.SHORT&&De&&(pe=De.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RG8UI),J===n.UNSIGNED_SHORT&&(pe=n.RG16UI),J===n.UNSIGNED_INT&&(pe=n.RG32UI),J===n.BYTE&&(pe=n.RG8I),J===n.SHORT&&(pe=n.RG16I),J===n.INT&&(pe=n.RG32I)),w===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),J===n.UNSIGNED_INT&&(pe=n.RGB32UI),J===n.BYTE&&(pe=n.RGB8I),J===n.SHORT&&(pe=n.RGB16I),J===n.INT&&(pe=n.RGB32I)),w===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),J===n.UNSIGNED_INT&&(pe=n.RGBA32UI),J===n.BYTE&&(pe=n.RGBA8I),J===n.SHORT&&(pe=n.RGBA16I),J===n.INT&&(pe=n.RGBA32I)),w===n.RGB&&(J===n.UNSIGNED_SHORT&&De&&(pe=De.RGB16_EXT),J===n.SHORT&&De&&(pe=De.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),w===n.RGBA){const _e=Te?Hu:_t.getTransfer(he);J===n.FLOAT&&(pe=n.RGBA32F),J===n.HALF_FLOAT&&(pe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(pe=_e===Ft?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&De&&(pe=De.RGBA16_EXT),J===n.SHORT&&De&&(pe=De.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(U,w){let J;return U?w===null||w===ir||w===fl?J=n.DEPTH24_STENCIL8:w===Zi?J=n.DEPTH32F_STENCIL8:w===ul&&(J=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ir||w===fl?J=n.DEPTH_COMPONENT24:w===Zi?J=n.DEPTH_COMPONENT32F:w===ul&&(J=n.DEPTH_COMPONENT16),J}function L(U,w){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==Ln?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function F(U){const w=U.target;w.removeEventListener("dispose",F),I(w),w.isVideoTexture&&m.delete(w),w.isHTMLTexture&&g.delete(w)}function T(U){const w=U.target;w.removeEventListener("dispose",T),z(w)}function I(U){const w=i.get(U);if(w.__webglInit===void 0)return;const J=U.source,oe=y.get(J);if(oe){const he=oe[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&V(U),Object.keys(oe).length===0&&y.delete(J)}i.remove(U)}function V(U){const w=i.get(U);n.deleteTexture(w.__webglTexture);const J=U.source,oe=y.get(J);delete oe[w.__cacheKey],c.memory.textures--}function z(U){const w=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let he=0;he<w.__webglFramebuffer[oe].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[oe][he]);else n.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)n.deleteFramebuffer(w.__webglFramebuffer[oe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=U.textures;for(let oe=0,he=J.length;oe<he;oe++){const Te=i.get(J[oe]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),c.memory.textures--),i.remove(J[oe])}i.remove(U)}let X=0;function de(){X=0}function le(){return X}function j(U){X=U}function re(){const U=X;return U>=o.maxTextures&&ut("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),X+=1,U}function Z(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function G(U,w){const J=i.get(U);if(U.isVideoTexture&&$(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const oe=U.image;if(oe===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(J,U,w);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+w)}function te(U,w){const J=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ue(J,U,w);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+w)}function ce(U,w){const J=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ue(J,U,w);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+w)}function k(U,w){const J=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){Xe(J,U,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+w)}const Q={[Op]:n.REPEAT,[Sr]:n.CLAMP_TO_EDGE,[kp]:n.MIRRORED_REPEAT},Fe={[wn]:n.NEAREST,[q2]:n.NEAREST_MIPMAP_NEAREST,[Oc]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[yh]:n.LINEAR_MIPMAP_NEAREST,[zs]:n.LINEAR_MIPMAP_LINEAR},He={[Q2]:n.NEVER,[i3]:n.ALWAYS,[J2]:n.LESS,[sg]:n.LEQUAL,[e3]:n.EQUAL,[og]:n.GEQUAL,[t3]:n.GREATER,[n3]:n.NOTEQUAL};function Be(U,w){if(w.type===Zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ln||w.magFilter===yh||w.magFilter===Oc||w.magFilter===zs||w.minFilter===Ln||w.minFilter===yh||w.minFilter===Oc||w.minFilter===zs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Q[w.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Q[w.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Q[w.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Fe[w.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Fe[w.minFilter]),w.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,He[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==Oc&&w.minFilter!==zs||w.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function K(U,w){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",F));const oe=w.source;let he=y.get(oe);he===void 0&&(he={},y.set(oe,he));const Te=Z(w);if(Te!==U.__cacheKey){he[Te]===void 0&&(he[Te]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,J=!0),he[Te].usedTimes++;const De=he[U.__cacheKey];De!==void 0&&(he[U.__cacheKey].usedTimes--,De.usedTimes===0&&V(w)),U.__cacheKey=Te,U.__webglTexture=he[Te].texture}return J}function ge(U,w,J){return Math.floor(Math.floor(U/J)/w)}function ve(U,w,J,oe){const Te=U.updateRanges;if(Te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,J,oe,w.data);else{Te.sort((Je,Ie)=>Je.start-Ie.start);let De=0;for(let Je=1;Je<Te.length;Je++){const Ie=Te[De],Pe=Te[Je],it=Ie.start+Ie.count,st=ge(Pe.start,w.width,4),lt=ge(Ie.start,w.width,4);Pe.start<=it+1&&st===lt&&ge(Pe.start+Pe.count-1,w.width,4)===st?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++De,Te[De]=Pe)}Te.length=De+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Je=0,Ie=Te.length;Je<Ie;Je++){const Pe=Te[Je],it=Math.floor(Pe.start/4),st=Math.ceil(Pe.count/4),lt=it%w.width,W=Math.floor(it/w.width),Re=st,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,lt,W,Re,xe,J,oe,w.data)}U.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function Ue(U,w,J){let oe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=n.TEXTURE_3D);const he=K(U,w),Te=w.source;t.bindTexture(oe,U.__webglTexture,n.TEXTURE0+J);const De=i.get(Te);if(Te.version!==De.__version||he===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const xe=_t.getPrimaries(_t.workingColorSpace),Ne=w.colorSpace===rs?null:_t.getPrimaries(w.colorSpace),Oe=w.colorSpace===rs||xe===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let _e=_(w.image,!1,o.maxTextureSize);_e=yn(w,_e);const Le=a.convert(w.format,w.colorSpace),Je=a.convert(w.type);let Ie=b(w.internalFormat,Le,Je,w.normalized,w.colorSpace,w.isVideoTexture);Be(oe,w);let Pe;const it=w.mipmaps,st=w.isVideoTexture!==!0,lt=De.__version===void 0||he===!0,W=Te.dataReady,Re=L(w,_e);if(w.isDepthTexture)Ie=N(w.format===Hs,w.type),lt&&(st?t.texStorage2D(n.TEXTURE_2D,1,Ie,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Le,Je,null));else if(w.isDataTexture)if(it.length>0){st&&lt&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,it[0].width,it[0].height);for(let xe=0,Ne=it.length;xe<Ne;xe++)Pe=it[xe],st?W&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Je,Pe.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Pe.width,Pe.height,0,Le,Je,Pe.data);w.generateMipmaps=!1}else st?(lt&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,_e.width,_e.height),W&&ve(w,_e,Le,Je)):t.texImage2D(n.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Le,Je,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,it[0].width,it[0].height,_e.depth);for(let xe=0,Ne=it.length;xe<Ne;xe++)if(Pe=it[xe],w.format!==Ii)if(Le!==null)if(st){if(W)if(w.layerUpdates.size>0){const Oe=ny(Pe.width,Pe.height,w.format,w.type);for(const ye of w.layerUpdates){const Ke=Pe.data.subarray(ye*Oe/Pe.data.BYTES_PER_ELEMENT,(ye+1)*Oe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,ye,Pe.width,Pe.height,1,Le,Ke)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,_e.depth,Le,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,_e.depth,Le,Je,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Pe.width,Pe.height,_e.depth,0,Le,Je,Pe.data)}else{st&&lt&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,it[0].width,it[0].height);for(let xe=0,Ne=it.length;xe<Ne;xe++)Pe=it[xe],w.format!==Ii?Le!==null?st?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ie,Pe.width,Pe.height,0,Pe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Je,Pe.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Pe.width,Pe.height,0,Le,Je,Pe.data)}else if(w.isDataArrayTexture)if(st){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,_e.width,_e.height,_e.depth),W)if(w.layerUpdates.size>0){const xe=ny(_e.width,_e.height,w.format,w.type);for(const Ne of w.layerUpdates){const Oe=_e.data.subarray(Ne*xe/_e.data.BYTES_PER_ELEMENT,(Ne+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,_e.width,_e.height,1,Le,Je,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Je,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,_e.width,_e.height,_e.depth,0,Le,Je,_e.data);else if(w.isData3DTexture)st?(lt&&t.texStorage3D(n.TEXTURE_3D,Re,Ie,_e.width,_e.height,_e.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Je,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,_e.width,_e.height,_e.depth,0,Le,Je,_e.data);else if(w.isFramebufferTexture){if(lt)if(st)t.texStorage2D(n.TEXTURE_2D,Re,Ie,_e.width,_e.height);else{let xe=_e.width,Ne=_e.height;for(let Oe=0;Oe<Re;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,Ie,xe,Ne,0,Le,Je,null),xe>>=1,Ne>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),g.add(w),xe.onpaint=Ne=>{const Oe=Ne.changedElements;for(const ye of g)Oe.includes(ye.image)&&(ye.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const Oe=n.RGBA,ye=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Oe,ye,Ke,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(it.length>0){if(st&&lt){const xe=Tt(it[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ie,xe.width,xe.height)}for(let xe=0,Ne=it.length;xe<Ne;xe++)Pe=it[xe],st?W&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Le,Je,Pe):t.texImage2D(n.TEXTURE_2D,xe,Ie,Le,Je,Pe);w.generateMipmaps=!1}else if(st){if(lt){const xe=Tt(_e);t.texStorage2D(n.TEXTURE_2D,Re,Ie,xe.width,xe.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Je,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Le,Je,_e);S(w)&&P(oe),De.__version=Te.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Xe(U,w,J){if(w.image.length!==6)return;const oe=K(U,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+J);const Te=i.get(he);if(he.version!==Te.__version||oe===!0){t.activeTexture(n.TEXTURE0+J);const De=_t.getPrimaries(_t.workingColorSpace),pe=w.colorSpace===rs?null:_t.getPrimaries(w.colorSpace),_e=w.colorSpace===rs||De===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Je=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let ye=0;ye<6;ye++)!Le&&!Je?Ie[ye]=_(w.image[ye],!0,o.maxCubemapSize):Ie[ye]=Je?w.image[ye].image:w.image[ye],Ie[ye]=yn(w,Ie[ye]);const Pe=Ie[0],it=a.convert(w.format,w.colorSpace),st=a.convert(w.type),lt=b(w.internalFormat,it,st,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,Re=Te.__version===void 0||oe===!0,xe=he.dataReady;let Ne=L(w,Pe);Be(n.TEXTURE_CUBE_MAP,w);let Oe;if(Le){W&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,lt,Pe.width,Pe.height);for(let ye=0;ye<6;ye++){Oe=Ie[ye].mipmaps;for(let Ke=0;Ke<Oe.length;Ke++){const Ye=Oe[Ke];w.format!==Ii?it!==null?W?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ye.width,Ye.height,it,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,lt,Ye.width,Ye.height,0,Ye.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ye.width,Ye.height,it,st,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,lt,Ye.width,Ye.height,0,it,st,Ye.data)}}}else{if(Oe=w.mipmaps,W&&Re){Oe.length>0&&Ne++;const ye=Tt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,lt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Je){W?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ie[ye].width,Ie[ye].height,it,st,Ie[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,lt,Ie[ye].width,Ie[ye].height,0,it,st,Ie[ye].data);for(let Ke=0;Ke<Oe.length;Ke++){const Ot=Oe[Ke].image[ye].image;W?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,Ot.width,Ot.height,it,st,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,lt,Ot.width,Ot.height,0,it,st,Ot.data)}}else{W?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,it,st,Ie[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,lt,it,st,Ie[ye]);for(let Ke=0;Ke<Oe.length;Ke++){const Ye=Oe[Ke];W?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,it,st,Ye.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,lt,it,st,Ye.image[ye])}}}S(w)&&P(n.TEXTURE_CUBE_MAP),Te.__version=he.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function je(U,w,J,oe,he,Te){const De=a.convert(J.format,J.colorSpace),pe=a.convert(J.type),_e=b(J.internalFormat,De,pe,J.normalized,J.colorSpace),Le=i.get(w),Je=i.get(J);if(Je.__renderTarget=w,!Le.__hasExternalTextures){const Ie=Math.max(1,w.width>>Te),Pe=Math.max(1,w.height>>Te);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Te,_e,Ie,Pe,w.depth,0,De,pe,null):t.texImage2D(he,Te,_e,Ie,Pe,0,De,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Yt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,he,Je.__webglTexture,0,Nt(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,he,Je.__webglTexture,Te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function At(U,w,J){if(n.bindRenderbuffer(n.RENDERBUFFER,U),w.depthBuffer){const oe=w.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Te=N(w.stencilBuffer,he),De=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Yt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),Te,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),Te,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,U)}else{const oe=w.textures;for(let he=0;he<oe.length;he++){const Te=oe[he],De=a.convert(Te.format,Te.colorSpace),pe=a.convert(Te.type),_e=b(Te.internalFormat,De,pe,Te.normalized,Te.colorSpace);Yt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(w),_e,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(w),_e,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,_e,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(U,w,J){const oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Be(n.TEXTURE_CUBE_MAP,w.depthTexture);const Le=a.convert(w.depthTexture.format),Je=a.convert(w.depthTexture.type);let Ie;w.depthTexture.format===Cr?Ie=n.DEPTH_COMPONENT24:w.depthTexture.format===Hs&&(Ie=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,w.width,w.height,0,Le,Je,null)}}else G(w.depthTexture,0);const Te=he.__webglTexture,De=Nt(w),pe=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,_e=w.depthTexture.format===Hs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Cr)Yt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,Te,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,Te,0);else if(w.depthTexture.format===Hs)Yt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,Te,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ce(U){const w=i.get(U),J=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=oe}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let oe=0;oe<6;oe++)me(w.__webglFramebuffer[oe],U,oe);else{const oe=U.texture.mipmaps;oe&&oe.length>0?me(w.__webglFramebuffer[0],U,0):me(w.__webglFramebuffer,U,0)}else if(J){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=n.createRenderbuffer(),At(w.__webglDepthbuffer[oe],U,!1);else{const he=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Te)}}else{const oe=U.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),At(w.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(U,w,J){const oe=i.get(U);w!==void 0&&je(oe.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&Ce(U)}function ft(U){const w=U.texture,J=i.get(U),oe=i.get(w);U.addEventListener("dispose",T);const he=U.textures,Te=U.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=w.version,c.memory.textures++),Te){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let _e=0;_e<w.mipmaps.length;_e++)J.__webglFramebuffer[pe][_e]=n.createFramebuffer()}else J.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)J.__webglFramebuffer[pe]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(De)for(let pe=0,_e=he.length;pe<_e;pe++){const Le=i.get(he[pe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),c.memory.textures++)}if(U.samples>0&&Yt(U)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const _e=he[pe];J.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const Le=a.convert(_e.format,_e.colorSpace),Je=a.convert(_e.type),Ie=b(_e.internalFormat,Le,Je,_e.normalized,_e.colorSpace,U.isXRRenderTarget===!0),Pe=Nt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ie,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),At(J.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Te){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Be(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)je(J.__webglFramebuffer[pe][_e],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else je(J.__webglFramebuffer[pe],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(w)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,_e=he.length;pe<_e;pe++){const Le=he[pe],Je=i.get(Le);let Ie=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Je.__webglTexture),Be(Ie,Le),je(J.__webglFramebuffer,U,Le,n.COLOR_ATTACHMENT0+pe,Ie,0),S(Le)&&P(Ie)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),Be(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)je(J.__webglFramebuffer[_e],U,w,n.COLOR_ATTACHMENT0,pe,_e);else je(J.__webglFramebuffer,U,w,n.COLOR_ATTACHMENT0,pe,0);S(w)&&P(pe),t.unbindTexture()}U.depthBuffer&&Ce(U)}function Dt(U){const w=U.textures;for(let J=0,oe=w.length;J<oe;J++){const he=w[J];if(S(he)){const Te=D(U),De=i.get(he).__webglTexture;t.bindTexture(Te,De),P(Te),t.unbindTexture()}}}const Ht=[],jt=[];function Bt(U){if(U.samples>0){if(Yt(U)===!1){const w=U.textures,J=U.width,oe=U.height;let he=n.COLOR_BUFFER_BIT;const Te=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(U),pe=w.length>1;if(pe)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const _e=U.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const Je=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,J,oe,0,0,J,oe,he,n.NEAREST),h===!0&&(Ht.length=0,jt.length=0,Ht.push(n.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ht.push(Te),jt.push(Te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const Je=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Nt(U){return Math.min(o.maxSamples,U.samples)}function Yt(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $(U){const w=c.render.frame;m.get(U)!==w&&(m.set(U,w),U.update())}function yn(U,w){const J=U.colorSpace,oe=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==zu&&J!==rs&&(_t.getTransfer(J)===Ft?(oe!==Ii||he!==gi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",J)),w}function Tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=re,this.resetTextureUnits=de,this.getTextureUnits=le,this.setTextureUnits=j,this.setTexture2D=G,this.setTexture2DArray=te,this.setTexture3D=ce,this.setTextureCube=k,this.rebindTextures=rt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=je,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function CF(n,e){function t(i,o=rs){let a;const c=_t.getTransfer(o);if(i===gi)return n.UNSIGNED_BYTE;if(i===eg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===aM)return n.BYTE;if(i===lM)return n.SHORT;if(i===ul)return n.UNSIGNED_SHORT;if(i===Jm)return n.INT;if(i===ir)return n.UNSIGNED_INT;if(i===Zi)return n.FLOAT;if(i===br)return n.HALF_FLOAT;if(i===fM)return n.ALPHA;if(i===dM)return n.RGB;if(i===Ii)return n.RGBA;if(i===Cr)return n.DEPTH_COMPONENT;if(i===Hs)return n.DEPTH_STENCIL;if(i===hM)return n.RED;if(i===ng)return n.RED_INTEGER;if(i===qs)return n.RG;if(i===ig)return n.RG_INTEGER;if(i===rg)return n.RGBA_INTEGER;if(i===Su||i===Eu||i===Mu||i===Tu)if(c===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Su)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Su)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Eu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bp||i===Vp||i===zp||i===Hp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Bp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gp||i===Wp||i===Xp||i===jp||i===Yp||i===Bu||i===$p)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Gp||i===Wp)return c===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Xp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===jp)return a.COMPRESSED_R11_EAC;if(i===Yp)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Bu)return a.COMPRESSED_RG11_EAC;if(i===$p)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qp||i===Kp||i===Zp||i===Qp||i===Jp||i===em||i===tm||i===nm||i===im||i===rm||i===sm||i===om||i===am||i===lm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===qp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jp)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===em)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tm)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nm)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===im)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rm)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sm)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===om)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===am)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lm)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cm||i===um||i===fm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===cm)return c===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===um)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dm||i===hm||i===Vu||i===pm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===dm)return a.COMPRESSED_RED_RGTC1_EXT;if(i===hm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const RF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PF=`
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

}`;class DF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rr({vertexShader:RF,fragmentShader:PF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rr(new sf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NF extends Qs{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",h=1,d=null,m=null,g=null,p=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",_=new DF,S={},P=t.getContextAttributes();let D=null,b=null;const N=[],L=[],F=new Ct;let T=null;const I=new Ni;I.viewport=new tn;const V=new Ni;V.viewport=new tn;const z=[I,V],X=new H3;let de=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ge=N[K];return ge===void 0&&(ge=new Ch,N[K]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(K){let ge=N[K];return ge===void 0&&(ge=new Ch,N[K]=ge),ge.getGripSpace()},this.getHand=function(K){let ge=N[K];return ge===void 0&&(ge=new Ch,N[K]=ge),ge.getHandSpace()};function j(K){const ge=L.indexOf(K.inputSource);if(ge===-1)return;const ve=N[ge];ve!==void 0&&(ve.update(K.inputSource,K.frame,d||c),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function re(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",Z);for(let K=0;K<N.length;K++){const ge=L[K];ge!==null&&(L[K]=null,N[K].disconnect(ge))}de=null,le=null,_.reset();for(const K in S)delete S[K];e.setRenderTarget(D),y=null,p=null,g=null,o=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){u=K,i.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",re),o.addEventListener("inputsourceschange",Z),P.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ue=null,Xe=null;P.depth&&(Xe=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=P.stencil?Hs:Cr,Ue=P.stencil?fl:ir);const je={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:a};g=this.getBinding(),p=g.createProjectionLayer(je),o.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new tr(p.textureWidth,p.textureHeight,{format:Ii,type:gi,depthTexture:new Jo(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ve={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new tr(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await o.requestReferenceSpace(u),Be.setContext(o),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(K){for(let ge=0;ge<K.removed.length;ge++){const ve=K.removed[ge],Ue=L.indexOf(ve);Ue>=0&&(L[Ue]=null,N[Ue].disconnect(ve))}for(let ge=0;ge<K.added.length;ge++){const ve=K.added[ge];let Ue=L.indexOf(ve);if(Ue===-1){for(let je=0;je<N.length;je++)if(je>=L.length){L.push(ve),Ue=je;break}else if(L[je]===null){L[je]=ve,Ue=je;break}if(Ue===-1)break}const Xe=N[Ue];Xe&&Xe.connect(ve)}}const G=new ae,te=new ae;function ce(K,ge,ve){G.setFromMatrixPosition(ge.matrixWorld),te.setFromMatrixPosition(ve.matrixWorld);const Ue=G.distanceTo(te),Xe=ge.projectionMatrix.elements,je=ve.projectionMatrix.elements,At=Xe[14]/(Xe[10]-1),me=Xe[14]/(Xe[10]+1),Ce=(Xe[9]+1)/Xe[5],rt=(Xe[9]-1)/Xe[5],ft=(Xe[8]-1)/Xe[0],Dt=(je[8]+1)/je[0],Ht=At*ft,jt=At*Dt,Bt=Ue/(-ft+Dt),Nt=Bt*-ft;if(ge.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Nt),K.translateZ(Bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Xe[10]===-1)K.projectionMatrix.copy(ge.projectionMatrix),K.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Yt=At+Bt,$=me+Bt,yn=Ht-Nt,Tt=jt+(Ue-Nt),U=Ce*me/$*Yt,w=rt*me/$*Yt;K.projectionMatrix.makePerspective(yn,Tt,U,w,Yt,$),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function k(K,ge){ge===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ge.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let ge=K.near,ve=K.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),X.near=V.near=I.near=ge,X.far=V.far=I.far=ve,(de!==X.near||le!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),de=X.near,le=X.far),X.layers.mask=K.layers.mask|6,I.layers.mask=X.layers.mask&-5,V.layers.mask=X.layers.mask&-3;const Ue=K.parent,Xe=X.cameras;k(X,Ue);for(let je=0;je<Xe.length;je++)k(Xe[je],Ue);Xe.length===2?ce(X,I,V):X.projectionMatrix.copy(I.projectionMatrix),Q(K,X,Ue)};function Q(K,ge,ve){ve===null?K.matrix.copy(ge.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(ge.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ge.projectionMatrix),K.projectionMatrixInverse.copy(ge.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=mm*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(p===null&&y===null))return h},this.setFoveation=function(K){h=K,p!==null&&(p.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(X)},this.getCameraTexture=function(K){return S[K]};let Fe=null;function He(K,ge){if(m=ge.getViewerPose(d||c),E=ge,m!==null){const ve=m.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let Ue=!1;ve.length!==X.cameras.length&&(X.cameras.length=0,Ue=!0);for(let me=0;me<ve.length;me++){const Ce=ve[me];let rt=null;if(y!==null)rt=y.getViewport(Ce);else{const Dt=g.getViewSubImage(p,Ce);rt=Dt.viewport,me===0&&(e.setRenderTargetTextures(b,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(b))}let ft=z[me];ft===void 0&&(ft=new Ni,ft.layers.enable(me),ft.viewport=new tn,z[me]=ft),ft.matrix.fromArray(Ce.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ce.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(rt.x,rt.y,rt.width,rt.height),me===0&&(X.matrix.copy(ft.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ue===!0&&X.cameras.push(ft)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){g=i.getBinding();const me=g.getDepthInformation(ve[0]);me&&me.isValid&&me.texture&&_.init(me,o.renderState)}if(Xe&&Xe.includes("camera-access")&&M){e.state.unbindTexture(),g=i.getBinding();for(let me=0;me<ve.length;me++){const Ce=ve[me].camera;if(Ce){let rt=S[Ce];rt||(rt=new wM,S[Ce]=rt);const ft=g.getCameraImage(Ce);rt.sourceTexture=ft}}}}for(let ve=0;ve<N.length;ve++){const Ue=L[ve],Xe=N[ve];Ue!==null&&Xe!==void 0&&Xe.update(Ue,ge,d||c)}Fe&&Fe(K,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Be=new CM;Be.setAnimationLoop(He),this.setAnimationLoop=function(K){Fe=K},this.dispose=function(){}}}const LF=new rn,FM=new pt;FM.set(-1,0,0,0,1,0,0,0,1);function IF(n,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,AM(n)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function o(_,S,P,D,b){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(_,S):S.isMeshLambertMaterial?(a(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(_,S),g(_,S)):S.isMeshPhongMaterial?(a(_,S),m(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(_,S),p(_,S),S.isMeshPhysicalMaterial&&y(_,S,b)):S.isMeshMatcapMaterial?(a(_,S),E(_,S)):S.isMeshDepthMaterial?a(_,S):S.isMeshDistanceMaterial?(a(_,S),M(_,S)):S.isMeshNormalMaterial?a(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,P,D):S.isSpriteMaterial?d(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===Qn&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===Qn&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const P=e.get(S),D=P.envMap,b=P.envMapRotation;D&&(_.envMap.value=D,_.envMapRotation.value.setFromMatrix4(LF.makeRotationFromEuler(b)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(FM),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,P,D){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*P,_.scale.value=D*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function d(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function m(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function p(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,P){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,S){S.matcap&&(_.matcap.value=S.matcap)}function M(_,S){const P=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function FF(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,N){const L=N.program;i.uniformBlockBinding(b,L)}function d(b,N){let L=o[b.id];L===void 0&&(_(b),L=m(b),o[b.id]=L,b.addEventListener("dispose",P));const F=N.program;i.updateUBOMapping(b,F);const T=e.render.frame;a[b.id]!==T&&(p(b),a[b.id]=T)}function m(b){const N=g();b.__bindingPointIndex=N;const L=n.createBuffer(),F=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,F,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,L),L}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const N=o[b.id],L=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let T=0,I=L.length;T<I;T++){const V=L[T];if(Array.isArray(V))for(let z=0,X=V.length;z<X;z++)y(V[z],T,z,F);else y(V,T,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(b,N,L,F){if(M(b,N,L,F)===!0){const T=b.__offset,I=b.value;if(Array.isArray(I)){let V=0;for(let z=0;z<I.length;z++){const X=I[z],de=S(X);E(X,b.__data,V),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(V+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,b.__data)}}function E(b,N,L){typeof b=="number"||typeof b=="boolean"?N[0]=b:b.isMatrix3?(N[0]=b.elements[0],N[1]=b.elements[1],N[2]=b.elements[2],N[3]=0,N[4]=b.elements[3],N[5]=b.elements[4],N[6]=b.elements[5],N[7]=0,N[8]=b.elements[6],N[9]=b.elements[7],N[10]=b.elements[8],N[11]=0):ArrayBuffer.isView(b)?N.set(new b.constructor(b.buffer,b.byteOffset,N.length)):b.toArray(N,L)}function M(b,N,L,F){const T=b.value,I=N+"_"+L;if(F[I]===void 0)return typeof T=="number"||typeof T=="boolean"?F[I]=T:ArrayBuffer.isView(T)?F[I]=T.slice():F[I]=T.clone(),!0;{const V=F[I];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return F[I]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function _(b){const N=b.uniforms;let L=0;const F=16;for(let I=0,V=N.length;I<V;I++){const z=Array.isArray(N[I])?N[I]:[N[I]];for(let X=0,de=z.length;X<de;X++){const le=z[X],j=Array.isArray(le.value)?le.value:[le.value];for(let re=0,Z=j.length;re<Z;re++){const G=j[re],te=S(G),ce=L%F,k=ce%te.boundary,Q=ce+k;L+=k,Q!==0&&F-Q<te.storage&&(L+=F-Q),le.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=L,L+=te.storage}}}const T=L%F;return T>0&&(L+=F-T),b.__size=L,b.__cache={},this}function S(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(N.boundary=16,N.storage=b.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",b),N}function P(b){const N=b.target;N.removeEventListener("dispose",P);const L=c.indexOf(N.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(o[N.id]),delete o[N.id],delete a[N.id]}function D(){for(const b in o)n.deleteBuffer(o[b]);c=[],o={},a={}}return{bind:h,update:d,dispose:D}}const UF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function OF(){return ji===null&&(ji=new C3(UF,16,16,qs,br),ji.name="DFG_LUT",ji.minFilter=Ln,ji.magFilter=Ln,ji.wrapS=Sr,ji.wrapT=Sr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class kF{constructor(e={}){const{canvas:t=s3(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:y=gi}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;const M=y,_=new Set([rg,ig,ng]),S=new Set([gi,ir,ul,fl,eg,tg]),P=new Uint32Array(4),D=new Int32Array(4),b=new ae;let N=null,L=null;const F=[],T=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,X=null,de=null,le=null,j=null;this._outputColorSpace=mi;let re=0,Z=0,G=null,te=-1,ce=null;const k=new tn,Q=new tn;let Fe=null;const He=new bt(0);let Be=0,K=t.width,ge=t.height,ve=1,Ue=null,Xe=null;const je=new tn(0,0,K,ge),At=new tn(0,0,K,ge);let me=!1;const Ce=new EM;let rt=!1,ft=!1;const Dt=new rn,Ht=new ae,jt=new tn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Yt(){return G===null?ve:1}let $=i;function yn(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qm}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",An,!1),$===null){const q="webgl2";if($=yn(q,R),$===null)throw yn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Mt("WebGLRenderer: "+R.message),R}let Tt,U,w,J,oe,he,Te,De,pe,_e,Le,Je,Ie,Pe,it,st,lt,W,Re,xe,Ne,Oe,ye;function Ke(){Tt=new OL($),Tt.init(),Ne=new CF($,Tt),U=new RL($,Tt,e,Ne),w=new AF($,Tt),U.reversedDepthBuffer&&p&&w.buffers.depth.setReversed(!0),de=$.createFramebuffer(),le=$.createFramebuffer(),j=$.createFramebuffer(),J=new VL($),oe=new dF,he=new bF($,Tt,w,oe,U,Ne,J),Te=new UL(V),De=new W3($),Oe=new bL($,De),pe=new kL($,De,J,Oe),_e=new HL($,pe,De,Oe,J),W=new zL($,U,he),it=new PL(oe),Le=new fF(V,Te,Tt,U,Oe,it),Je=new IF(V,oe),Ie=new pF,Pe=new yF(Tt),lt=new AL(V,Te,w,_e,E,h),st=new wF(V,_e,U),ye=new FF($,J,U,w),Re=new CL($,Tt,J),xe=new BL($,Tt,J),J.programs=Le.programs,V.capabilities=U,V.extensions=Tt,V.properties=oe,V.renderLists=Ie,V.shadowMap=st,V.state=w,V.info=J}Ke(),M!==gi&&(I=new WL(M,t.width,t.height,u,o,a));const Ye=new NF(V,$);this.xr=Ye,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(K,ge,!1))},this.getSize=function(R){return R.set(K,ge)},this.setSize=function(R,q,ue=!0){if(Ye.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,ge=q,t.width=Math.floor(R*ve),t.height=Math.floor(q*ve),ue===!0&&(t.style.width=R+"px",t.style.height=q+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(K*ve,ge*ve).floor()},this.setDrawingBufferSize=function(R,q,ue){K=R,ge=q,ve=ue,t.width=Math.floor(R*ue),t.height=Math.floor(q*ue),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(M===gi){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(je)},this.setViewport=function(R,q,ue,ie){R.isVector4?je.set(R.x,R.y,R.z,R.w):je.set(R,q,ue,ie),w.viewport(k.copy(je).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(At)},this.setScissor=function(R,q,ue,ie){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,q,ue,ie),w.scissor(Q.copy(At).multiplyScalar(ve).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(R){w.setScissorTest(me=R)},this.setOpaqueSort=function(R){Ue=R},this.setTransparentSort=function(R){Xe=R},this.getClearColor=function(R){return R.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ue=!0){let ie=0;if(R){let ne=!1;if(G!==null){const be=G.texture.format;ne=_.has(be)}if(ne){const be=G.texture.type,Ge=S.has(be),Ae=lt.getClearColor(),Ze=lt.getClearAlpha(),nt=Ae.r,dt=Ae.g,ht=Ae.b;Ge?(P[0]=nt,P[1]=dt,P[2]=ht,P[3]=Ze,$.clearBufferuiv($.COLOR,0,P)):(D[0]=nt,D[1]=dt,D[2]=ht,D[3]=Ze,$.clearBufferiv($.COLOR,0,D))}else ie|=$.COLOR_BUFFER_BIT}q&&(ie|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ie|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&$.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),X=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",An,!1),lt.dispose(),Ie.dispose(),Pe.dispose(),oe.dispose(),Te.dispose(),_e.dispose(),Oe.dispose(),ye.dispose(),Le.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",El),Ye.removeEventListener("sessionend",Ml),In.stop()};function Ot(R){R.preventDefault(),F_("WebGLRenderer: Context Lost."),z=!0}function Rt(){F_("WebGLRenderer: Context Restored."),z=!1;const R=J.autoReset,q=st.enabled,ue=st.autoUpdate,ie=st.needsUpdate,ne=st.type;Ke(),J.autoReset=R,st.enabled=q,st.autoUpdate=ue,st.needsUpdate=ie,st.type=ne}function An(R){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const q=R.target;q.removeEventListener("dispose",ai),ds(q)}function ds(R){Js(R),oe.remove(R)}function Js(R){const q=oe.get(R).programs;q!==void 0&&(q.forEach(function(ue){Le.releaseProgram(ue)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ue,ie,ne,be){q===null&&(q=Bt);const Ge=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ae=Kt(R,q,ue,ie,ne);w.setMaterial(ie,Ge);let Ze=ue.index,nt=1;if(ie.wireframe===!0){if(Ze=pe.getWireframeAttribute(ue),Ze===void 0)return;nt=2}const dt=ue.drawRange,ht=ue.attributes.position;let et=dt.start*nt,St=(dt.start+dt.count)*nt;be!==null&&(et=Math.max(et,be.start*nt),St=Math.min(St,(be.start+be.count)*nt)),Ze!==null?(et=Math.max(et,0),St=Math.min(St,Ze.count)):ht!=null&&(et=Math.max(et,0),St=Math.min(St,ht.count));const Vt=St-et;if(Vt<0||Vt===1/0)return;Oe.setup(ne,ie,Ae,ue,Ze);let $t,Lt=Re;if(Ze!==null&&($t=De.get(Ze),Lt=xe,Lt.setIndex($t)),ne.isMesh)ie.wireframe===!0?(w.setLineWidth(ie.wireframeLinewidth*Yt()),Lt.setMode($.LINES)):Lt.setMode($.TRIANGLES);else if(ne.isLine){let sn=ie.linewidth;sn===void 0&&(sn=1),w.setLineWidth(sn*Yt()),ne.isLineSegments?Lt.setMode($.LINES):ne.isLineLoop?Lt.setMode($.LINE_LOOP):Lt.setMode($.LINE_STRIP)}else ne.isPoints?Lt.setMode($.POINTS):ne.isSprite&&Lt.setMode($.TRIANGLES);if(ne.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const sn=ne._multiDrawStarts,Ve=ne._multiDrawCounts,Sn=ne._multiDrawCount,gt=Ze?De.get(Ze).bytesPerElement:1,Hn=oe.get(ie).currentProgram.getUniforms();for(let Gn=0;Gn<Sn;Gn++)Hn.setValue($,"_gl_DrawID",Gn),Lt.render(sn[Gn]/gt,Ve[Gn])}else if(ne.isInstancedMesh)Lt.renderInstances(et,Vt,ne.count);else if(ue.isInstancedBufferGeometry){const sn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ve=Math.min(ue.instanceCount,sn);Lt.renderInstances(et,Vt,Ve)}else Lt.render(et,Vt)};function hs(R,q,ue){R.transparent===!0&&R.side===yr&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,gs(R,q,ue),R.side=us,R.needsUpdate=!0,gs(R,q,ue),R.side=yr):gs(R,q,ue)}this.compile=function(R,q,ue=null){ue===null&&(ue=R),L=Pe.get(ue),L.init(q),T.push(L),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),R!==ue&&R.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const ie=new Set;return R.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const be=ne.material;if(be)if(Array.isArray(be))for(let Ge=0;Ge<be.length;Ge++){const Ae=be[Ge];hs(Ae,ue,ne),ie.add(Ae)}else hs(be,ue,ne),ie.add(be)}),L=T.pop(),ie},this.compileAsync=function(R,q,ue=null){const ie=this.compile(R,q,ue);return new Promise(ne=>{function be(){if(ie.forEach(function(Ge){oe.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){ne(R);return}setTimeout(be,10)}Tt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ps=null;function lf(R){ps&&ps(R)}function El(){In.stop()}function Ml(){In.start()}const In=new CM;In.setAnimationLoop(lf),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(R){ps=R,Ye.setAnimationLoop(R),R===null?In.stop():In.start()},Ye.addEventListener("sessionstart",El),Ye.addEventListener("sessionend",Ml),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;X!==null&&X.renderStart(R,q);const ue=Ye.enabled===!0&&Ye.isPresenting===!0,ie=I!==null&&(G===null||ue)&&I.begin(V,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(q),q=Ye.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,q,G),L=Pe.get(R,T.length),L.init(q),L.state.textureUnits=he.getTextureUnits(),T.push(L),Dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ce.setFromProjectionMatrix(Dt,Qi,q.reversedDepth),ft=this.localClippingEnabled,rt=it.init(this.clippingPlanes,ft),N=Ie.get(R,F.length),N.init(),F.push(N),Ye.enabled===!0&&Ye.isPresenting===!0){const Ge=V.xr.getDepthSensingMesh();Ge!==null&&eo(Ge,q,-1/0,V.sortObjects)}eo(R,q,0,V.sortObjects),N.finish(),V.sortObjects===!0&&N.sort(Ue,Xe,q.reversedDepth),Nt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Nt&&lt.addToRenderList(N,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&it.beginShadows();const ne=L.state.shadowsArray;if(st.render(ne,R,q),rt===!0&&it.endShadows(),(ie&&I.hasRenderPass())===!1){const Ge=N.opaque,Ae=N.transmissive;if(L.setupLights(),q.isArrayCamera){const Ze=q.cameras;if(Ae.length>0)for(let nt=0,dt=Ze.length;nt<dt;nt++){const ht=Ze[nt];Tl(Ge,Ae,R,ht)}Nt&&lt.render(R);for(let nt=0,dt=Ze.length;nt<dt;nt++){const ht=Ze[nt];oa(N,R,ht,ht.viewport)}}else Ae.length>0&&Tl(Ge,Ae,R,q),Nt&&lt.render(R),oa(N,R,q)}G!==null&&Z===0&&(he.updateMultisampleRenderTarget(G),he.updateRenderTargetMipmap(G)),ie&&I.end(V),R.isScene===!0&&R.onAfterRender(V,R,q),Oe.resetDefaultState(),te=-1,ce=null,T.pop(),T.length>0?(L=T[T.length-1],he.setTextureUnits(L.state.textureUnits),rt===!0&&it.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,X!==null&&X.renderEnd()};function eo(R,q,ue,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ce.intersectsSprite(R)){ie&&jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Ge=_e.update(R),Ae=R.material;Ae.visible&&N.push(R,Ge,Ae,ue,jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ce.intersectsObject(R))){const Ge=_e.update(R),Ae=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),jt.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),jt.copy(Ge.boundingSphere.center)),jt.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ae)){const Ze=Ge.groups;for(let nt=0,dt=Ze.length;nt<dt;nt++){const ht=Ze[nt],et=Ae[ht.materialIndex];et&&et.visible&&N.push(R,Ge,et,ue,jt.z,ht)}}else Ae.visible&&N.push(R,Ge,Ae,ue,jt.z,null)}}const be=R.children;for(let Ge=0,Ae=be.length;Ge<Ae;Ge++)eo(be[Ge],q,ue,ie)}function oa(R,q,ue,ie){const{opaque:ne,transmissive:be,transparent:Ge}=R;L.setupLightsView(ue),rt===!0&&it.setGlobalState(V.clippingPlanes,ue),ie&&w.viewport(k.copy(ie)),ne.length>0&&ms(ne,q,ue),be.length>0&&ms(be,q,ue),Ge.length>0&&ms(Ge,q,ue),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Tl(R,q,ue,ie){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const et=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new tr(1,1,{generateMipmaps:!0,type:et?br:gi,minFilter:zs,samples:Math.max(4,U.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const be=L.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||k;be.setSize(Ge.z*V.transmissionResolutionScale,Ge.w*V.transmissionResolutionScale);const Ae=V.getRenderTarget(),Ze=V.getActiveCubeFace(),nt=V.getActiveMipmapLevel();V.setRenderTarget(be),V.getClearColor(He),Be=V.getClearAlpha(),Be<1&&V.setClearColor(16777215,.5),V.clear(),Nt&&lt.render(ue);const dt=V.toneMapping;V.toneMapping=er;const ht=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),rt===!0&&it.setGlobalState(V.clippingPlanes,ie),ms(R,ue,ie),he.updateMultisampleRenderTarget(be),he.updateRenderTargetMipmap(be),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let St=0,Vt=q.length;St<Vt;St++){const $t=q[St],{object:Lt,geometry:sn,material:Ve,group:Sn}=$t;if(Ve.side===yr&&Lt.layers.test(ie.layers)){const gt=Ve.side;Ve.side=Qn,Ve.needsUpdate=!0,aa(Lt,ue,ie,sn,Ve,Sn),Ve.side=gt,Ve.needsUpdate=!0,et=!0}}et===!0&&(he.updateMultisampleRenderTarget(be),he.updateRenderTargetMipmap(be))}V.setRenderTarget(Ae,Ze,nt),V.setClearColor(He,Be),ht!==void 0&&(ie.viewport=ht),V.toneMapping=dt}function ms(R,q,ue){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,be=R.length;ne<be;ne++){const Ge=R[ne],{object:Ae,geometry:Ze,group:nt}=Ge;let dt=Ge.material;dt.allowOverride===!0&&ie!==null&&(dt=ie),Ae.layers.test(ue.layers)&&aa(Ae,q,ue,Ze,dt,nt)}}function aa(R,q,ue,ie,ne,be){R.onBeforeRender(V,q,ue,ie,ne,be),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(V,q,ue,ie,R,be),ne.transparent===!0&&ne.side===yr&&ne.forceSinglePass===!1?(ne.side=Qn,ne.needsUpdate=!0,V.renderBufferDirect(ue,q,ie,ne,R,be),ne.side=us,ne.needsUpdate=!0,V.renderBufferDirect(ue,q,ie,ne,R,be),ne.side=yr):V.renderBufferDirect(ue,q,ie,ne,R,be),R.onAfterRender(V,q,ue,ie,ne,be)}function gs(R,q,ue){q.isScene!==!0&&(q=Bt);const ie=oe.get(R),ne=L.state.lights,be=L.state.shadowsArray,Ge=ne.state.version,Ae=Le.getParameters(R,ne.state,be,q,ue,L.state.lightProbeGridArray),Ze=Le.getProgramCacheKey(Ae);let nt=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const dt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Te.get(R.envMap||ie.environment,dt),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",ai),nt=new Map,ie.programs=nt);let ht=nt.get(Ze);if(ht!==void 0){if(ie.currentProgram===ht&&ie.lightsStateVersion===Ge)return wl(R,Ae),ht}else Ae.uniforms=Le.getUniforms(R),X!==null&&R.isNodeMaterial&&X.build(R,ue,Ae),R.onBeforeCompile(Ae,V),ht=Le.acquireProgram(Ae,Ze),nt.set(Ze,ht),ie.uniforms=Ae.uniforms;const et=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=it.uniform),wl(R,Ae),ie.needsLights=ca(R),ie.lightsStateVersion=Ge,ie.needsLights&&(et.ambientLightColor.value=ne.state.ambient,et.lightProbe.value=ne.state.probe,et.directionalLights.value=ne.state.directional,et.directionalLightShadows.value=ne.state.directionalShadow,et.spotLights.value=ne.state.spot,et.spotLightShadows.value=ne.state.spotShadow,et.rectAreaLights.value=ne.state.rectArea,et.ltc_1.value=ne.state.rectAreaLTC1,et.ltc_2.value=ne.state.rectAreaLTC2,et.pointLights.value=ne.state.point,et.pointLightShadows.value=ne.state.pointShadow,et.hemisphereLights.value=ne.state.hemi,et.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,et.spotLightMatrix.value=ne.state.spotLightMatrix,et.spotLightMap.value=ne.state.spotLightMap,et.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=ht,ie.uniformsList=null,ht}function la(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=wu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function wl(R,q){const ue=oe.get(R);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function cf(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(q.matrixWorld);for(let ue=0,ie=R.length;ue<ie;ue++){const ne=R[ue];if(ne.texture!==null&&ne.boundingBox.containsPoint(b))return ne}return null}function Kt(R,q,ue,ie,ne){q.isScene!==!0&&(q=Bt),he.resetTextureUnits();const be=q.fog,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Ae=G===null?V.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:_t.workingColorSpace,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,nt=Te.get(ie.envMap||Ge,Ze),dt=ie.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ht=!!ue.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),et=!!ue.morphAttributes.position,St=!!ue.morphAttributes.normal,Vt=!!ue.morphAttributes.color;let $t=er;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=V.toneMapping);const Lt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,sn=Lt!==void 0?Lt.length:0,Ve=oe.get(ie),Sn=L.state.lights;if(rt===!0&&(ft===!0||R!==ce)){const It=R===ce&&ie.id===te;it.setState(ie,R,It)}let gt=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Sn.state.version||Ve.outputColorSpace!==Ae||ne.isBatchedMesh&&Ve.batching===!1||!ne.isBatchedMesh&&Ve.batching===!0||ne.isBatchedMesh&&Ve.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ve.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||ne.isInstancedMesh&&Ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ve.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ve.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ve.instancingMorph===!1&&ne.morphTexture!==null||Ve.envMap!==nt||ie.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==it.numPlanes||Ve.numIntersection!==it.numIntersection)||Ve.vertexAlphas!==dt||Ve.vertexTangents!==ht||Ve.morphTargets!==et||Ve.morphNormals!==St||Ve.morphColors!==Vt||Ve.toneMapping!==$t||Ve.morphTargetsCount!==sn||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ve.__version=ie.version);let Hn=Ve.currentProgram;gt===!0&&(Hn=gs(ie,q,ne),X&&ie.isNodeMaterial&&X.onUpdateProgram(ie,Hn,Ve));let Gn=!1,vt=!1,sr=!1;const Pt=Hn.getUniforms(),Gt=Ve.uniforms;if(w.useProgram(Hn.program)&&(Gn=!0,vt=!0,sr=!0),ie.id!==te&&(te=ie.id,vt=!0),Ve.needsLights){const It=cf(L.state.lightProbeGridArray,ne);Ve.lightProbeGrid!==It&&(Ve.lightProbeGrid=It,vt=!0)}if(Gn||ce!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue($,"projectionMatrix",R.projectionMatrix),Pt.setValue($,"viewMatrix",R.matrixWorldInverse);const yi=Pt.map.cameraPosition;yi!==void 0&&yi.setValue($,Ht.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Pt.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue($,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,vt=!0,sr=!0)}if(Ve.needsLights&&(Sn.state.directionalShadowMap.length>0&&Pt.setValue($,"directionalShadowMap",Sn.state.directionalShadowMap,he),Sn.state.spotShadowMap.length>0&&Pt.setValue($,"spotShadowMap",Sn.state.spotShadowMap,he),Sn.state.pointShadowMap.length>0&&Pt.setValue($,"pointShadowMap",Sn.state.pointShadowMap,he)),ne.isSkinnedMesh){Pt.setOptional($,ne,"bindMatrix"),Pt.setOptional($,ne,"bindMatrixInverse");const It=ne.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Pt.setValue($,"boneTexture",It.boneTexture,he))}ne.isBatchedMesh&&(Pt.setOptional($,ne,"batchingTexture"),Pt.setValue($,"batchingTexture",ne._matricesTexture,he),Pt.setOptional($,ne,"batchingIdTexture"),Pt.setValue($,"batchingIdTexture",ne._indirectTexture,he),Pt.setOptional($,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Pt.setValue($,"batchingColorTexture",ne._colorsTexture,he));const _i=ue.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&W.update(ne,ue,Hn),(vt||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,Pt.setValue($,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Gt.envMapIntensity.value=q.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=OF()),vt){if(Pt.setValue($,"toneMappingExposure",V.toneMappingExposure),Ve.needsLights&&uf(Gt,sr),be&&ie.fog===!0&&Je.refreshFogUniforms(Gt,be),Je.refreshMaterialUniforms(Gt,ie,ve,ge,L.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.lightProbeGrid){const It=Ve.lightProbeGrid;Gt.probesSH.value=It.texture,Gt.probesMin.value.copy(It.boundingBox.min),Gt.probesMax.value.copy(It.boundingBox.max),Gt.probesResolution.value.copy(It.resolution)}wu.upload($,la(Ve),Gt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(wu.upload($,la(Ve),Gt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue($,"center",ne.center),Pt.setValue($,"modelViewMatrix",ne.modelViewMatrix),Pt.setValue($,"normalMatrix",ne.normalMatrix),Pt.setValue($,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const It=ie.uniformsGroups;for(let yi=0,Vi=It.length;yi<Vi;yi++){const vs=It[yi];ye.update(vs,Hn),ye.bind(vs,Hn)}}return Hn}function uf(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ca(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,q,ue){const ie=oe.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),oe.get(R.texture).__webglTexture=q,oe.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ue,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ue=oe.get(R);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ue=0){G=R,re=q,Z=ue;let ie=null,ne=!1,be=!1;if(R){const Ae=oe.get(R);if(Ae.__useDefaultFramebuffer!==void 0){w.bindFramebuffer($.FRAMEBUFFER,Ae.__webglFramebuffer),k.copy(R.viewport),Q.copy(R.scissor),Fe=R.scissorTest,w.viewport(k),w.scissor(Q),w.setScissorTest(Fe),te=-1;return}else if(Ae.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Ae.__hasExternalTextures)he.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const dt=R.depthTexture;if(Ae.__boundDepthTexture!==dt){if(dt!==null&&oe.has(dt)&&(R.width!==dt.image.width||R.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(be=!0);const nt=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?ie=nt[q][ue]:ie=nt[q],ne=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?ie=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[ue]:ie=nt,k.copy(R.viewport),Q.copy(R.scissor),Fe=R.scissorTest}else k.copy(je).multiplyScalar(ve).floor(),Q.copy(At).multiplyScalar(ve).floor(),Fe=me;if(ue!==0&&(ie=de),w.bindFramebuffer($.FRAMEBUFFER,ie)&&w.drawBuffers(R,ie),w.viewport(k),w.scissor(Q),w.setScissorTest(Fe),ne){const Ae=oe.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ae.__webglTexture,ue)}else if(be){const Ae=q;for(let Ze=0;Ze<R.textures.length;Ze++){const nt=oe.get(R.textures[Ze]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ze,nt.__webglTexture,ue,Ae)}}else if(R!==null&&ue!==0){const Ae=oe.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ae.__webglTexture,ue)}te=-1},this.readRenderTargetPixels=function(R,q,ue,ie,ne,be,Ge,Ae=0){if(!(R&&R.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){w.bindFramebuffer($.FRAMEBUFFER,Ze);try{const nt=R.textures[Ae],dt=nt.format,ht=nt.type;if(R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ae),!U.textureFormatReadable(dt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ht)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&ue>=0&&ue<=R.height-ne&&$.readPixels(q,ue,ie,ne,Ne.convert(dt),Ne.convert(ht),be)}finally{const nt=G!==null?oe.get(G).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,q,ue,ie,ne,be,Ge,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze)if(q>=0&&q<=R.width-ie&&ue>=0&&ue<=R.height-ne){w.bindFramebuffer($.FRAMEBUFFER,Ze);const nt=R.textures[Ae],dt=nt.format,ht=nt.type;if(R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ae),!U.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,et),$.bufferData($.PIXEL_PACK_BUFFER,be.byteLength,$.STREAM_READ),$.readPixels(q,ue,ie,ne,Ne.convert(dt),Ne.convert(ht),0);const St=G!==null?oe.get(G).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,St);const Vt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await o3($,Vt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,et),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,be),$.deleteBuffer(et),$.deleteSync(Vt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ue=0){const ie=Math.pow(2,-ue),ne=Math.floor(R.image.width*ie),be=Math.floor(R.image.height*ie),Ge=q!==null?q.x:0,Ae=q!==null?q.y:0;he.setTexture2D(R,0),$.copyTexSubImage2D($.TEXTURE_2D,ue,0,0,Ge,Ae,ne,be),w.unbindTexture()},this.copyTextureToTexture=function(R,q,ue=null,ie=null,ne=0,be=0){let Ge,Ae,Ze,nt,dt,ht,et,St,Vt;const $t=R.isCompressedTexture?R.mipmaps[be]:R.image;if(ue!==null)Ge=ue.max.x-ue.min.x,Ae=ue.max.y-ue.min.y,Ze=ue.isBox3?ue.max.z-ue.min.z:1,nt=ue.min.x,dt=ue.min.y,ht=ue.isBox3?ue.min.z:0;else{const Gt=Math.pow(2,-ne);Ge=Math.floor($t.width*Gt),Ae=Math.floor($t.height*Gt),R.isDataArrayTexture?Ze=$t.depth:R.isData3DTexture?Ze=Math.floor($t.depth*Gt):Ze=1,nt=0,dt=0,ht=0}ie!==null?(et=ie.x,St=ie.y,Vt=ie.z):(et=0,St=0,Vt=0);const Lt=Ne.convert(q.format),sn=Ne.convert(q.type);let Ve;q.isData3DTexture?(he.setTexture3D(q,0),Ve=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Ve=$.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Ve=$.TEXTURE_2D),w.activeTexture($.TEXTURE0),w.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const Sn=w.getParameter($.UNPACK_ROW_LENGTH),gt=w.getParameter($.UNPACK_IMAGE_HEIGHT),Hn=w.getParameter($.UNPACK_SKIP_PIXELS),Gn=w.getParameter($.UNPACK_SKIP_ROWS),vt=w.getParameter($.UNPACK_SKIP_IMAGES);w.pixelStorei($.UNPACK_ROW_LENGTH,$t.width),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,$t.height),w.pixelStorei($.UNPACK_SKIP_PIXELS,nt),w.pixelStorei($.UNPACK_SKIP_ROWS,dt),w.pixelStorei($.UNPACK_SKIP_IMAGES,ht);const sr=R.isDataArrayTexture||R.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Gt=oe.get(R),_i=oe.get(q),It=oe.get(Gt.__renderTarget),yi=oe.get(_i.__renderTarget);w.bindFramebuffer($.READ_FRAMEBUFFER,It.__webglFramebuffer),w.bindFramebuffer($.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Vi=0;Vi<Ze;Vi++)sr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(R).__webglTexture,ne,ht+Vi),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(q).__webglTexture,be,Vt+Vi)),$.blitFramebuffer(nt,dt,Ge,Ae,et,St,Ge,Ae,$.DEPTH_BUFFER_BIT,$.NEAREST);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ne!==0||R.isRenderTargetTexture||oe.has(R)){const Gt=oe.get(R),_i=oe.get(q);w.bindFramebuffer($.READ_FRAMEBUFFER,le),w.bindFramebuffer($.DRAW_FRAMEBUFFER,j);for(let It=0;It<Ze;It++)sr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Gt.__webglTexture,ne,ht+It):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Gt.__webglTexture,ne),Pt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,_i.__webglTexture,be,Vt+It):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,_i.__webglTexture,be),ne!==0?$.blitFramebuffer(nt,dt,Ge,Ae,et,St,Ge,Ae,$.COLOR_BUFFER_BIT,$.NEAREST):Pt?$.copyTexSubImage3D(Ve,be,et,St,Vt+It,nt,dt,Ge,Ae):$.copyTexSubImage2D(Ve,be,et,St,nt,dt,Ge,Ae);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?$.texSubImage3D(Ve,be,et,St,Vt,Ge,Ae,Ze,Lt,sn,$t.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(Ve,be,et,St,Vt,Ge,Ae,Ze,Lt,$t.data):$.texSubImage3D(Ve,be,et,St,Vt,Ge,Ae,Ze,Lt,sn,$t):R.isDataTexture?$.texSubImage2D($.TEXTURE_2D,be,et,St,Ge,Ae,Lt,sn,$t.data):R.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,be,et,St,$t.width,$t.height,Lt,$t.data):$.texSubImage2D($.TEXTURE_2D,be,et,St,Ge,Ae,Lt,sn,$t);w.pixelStorei($.UNPACK_ROW_LENGTH,Sn),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,gt),w.pixelStorei($.UNPACK_SKIP_PIXELS,Hn),w.pixelStorei($.UNPACK_SKIP_ROWS,Gn),w.pixelStorei($.UNPACK_SKIP_IMAGES,vt),be===0&&q.generateMipmaps&&$.generateMipmap(Ve),w.unbindTexture()},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){re=0,Z=0,G=null,w.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const BF=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,Ay=({dark:n=!1,themeIdx:e=0,scrollVelocity:t=0,scrollProgress:i=0})=>{const o=O.useRef(null),a=O.useRef({scrollVelocity:t,scrollProgress:i,dark:n,themeIdx:e});return O.useEffect(()=>{a.current={scrollVelocity:t,scrollProgress:i,dark:n,themeIdx:e}},[t,i,n,e]),O.useEffect(()=>{const c=o.current;if(!c)return;const u=new kF({alpha:!0,antialias:!1});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(c.clientWidth||window.innerWidth,c.clientHeight||300),u.setClearColor(0,0),c.appendChild(u.domElement);const h=new E3,d=new lg(-1,1,1,-1,.1,10);d.position.z=1;const m=window.innerWidth<768,g=m?45:80,p=m?25:45,y=g*p,E=new Float32Array(y*3),M=new Float32Array(y*3),_=new Float32Array(y);for(let le=0;le<p;le++)for(let j=0;j<g;j++){const re=(le*g+j)*3,Z=j/(g-1)*2-1,G=le/(p-1)*2-1;E[re]=Z,E[re+1]=G,E[re+2]=0,M[re]=Z,M[re+1]=G,M[re+2]=0,_[le*g+j]=Math.random()*Math.PI*2}const S=new Bi;S.setAttribute("position",new Ui(E,3));const P=()=>a.current.dark?16777215:0,D=new MM({color:P(),size:m?2:2.5,sizeAttenuation:!1,transparent:!0,opacity:n?.1:.065}),b=new N3(S,D);h.add(b);const N={x:-9999,y:-9999,t:0},L=le=>{const j=c.getBoundingClientRect();N.x=(le.clientX-j.left)/j.width*2-1,N.y=-((le.clientY-j.top)/j.height)*2+1,N.t=performance.now()};window.addEventListener("mousemove",L,{passive:!0});let F=!0;const T=new IntersectionObserver(([le])=>{F=le.isIntersecting},{threshold:.01});T.observe(c);const I=new ResizeObserver(()=>{c&&u.setSize(c.clientWidth,c.clientHeight)});if(I.observe(c),BF)return u.render(h,d),()=>{u.dispose(),S.dispose(),D.dispose(),c.removeChild(u.domElement),I.disconnect(),T.disconnect(),window.removeEventListener("mousemove",L)};let V=0;const z=performance.now();let X=0;const de=()=>{if(V=requestAnimationFrame(de),!F)return;const le=performance.now(),j=(le-z)/1e3,{scrollVelocity:re,scrollProgress:Z}=a.current;X=X*.88+re*.12;const G=Math.min(X*.007,.095),te=Z>.88?1-(Z-.88)/.12:1,k=(.028*te+G)*te,Q=(le-N.t)/1e3,Fe=S.attributes.position;for(let He=0;He<p;He++)for(let Be=0;Be<g;Be++){const K=(He*g+Be)*3,ge=M[K],ve=M[K+1],Ue=_[He*g+Be],Xe=Math.sin(Be*.38+He*.22+j*.45+Ue)*k*.7+Math.sin(Be*.15-He*.35+j*.28+Ue*.5)*k*.4,je=ge-N.x,At=ve-N.y,me=Math.sqrt(je*je+At*At),Ce=me<.45&&Q<2.5?(1-me/.45)*(1-Q/2.5)*.07:0,rt=me<.45&&Q<2.5?At/(me+.001)*(1-me/.45)*(1-Q/2.5)*.012:0;Fe.array[K]=ge+rt,Fe.array[K+1]=ve+Xe+Ce}Fe.needsUpdate=!0,D.size=Math.max(1.2,(m?2:2.5)+X*.05),D.opacity=n?Math.min(.22,.1+X*.003):Math.min(.16,.065+X*.002),D.color.set(P()),u.render(h,d)};return de(),()=>{cancelAnimationFrame(V),u.dispose(),S.dispose(),D.dispose(),c.contains(u.domElement)&&c.removeChild(u.domElement),I.disconnect(),T.disconnect(),window.removeEventListener("mousemove",L)}},[n]),A.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full pointer-events-none","aria-hidden":"true"})},by=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,Cy=typeof window<"u"?window.matchMedia("(pointer: coarse), (hover: none)").matches||"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0:!1,VF=()=>{const n=Uu(-100),e=Uu(-100),[t,i]=O.useState(!1),[o,a]=O.useState(!1),[c,u]=O.useState(!1),h=Dc(n,{stiffness:450,damping:24,mass:.2}),d=Dc(e,{stiffness:450,damping:24,mass:.2}),m=Dc(n,{stiffness:1200,damping:35}),g=Dc(e,{stiffness:1200,damping:35});return O.useEffect(()=>{if(by||Cy)return;const p=D=>{n.set(D.clientX),e.set(D.clientY),u(!1)},y=()=>a(!0),E=()=>a(!1),M=()=>u(!0),_=()=>u(!1);document.addEventListener("mousemove",p,{passive:!0}),document.addEventListener("mousedown",y),document.addEventListener("mouseup",E),document.addEventListener("mouseleave",M),document.addEventListener("mouseenter",_);const S="a, button, [role=button], input, select, textarea, label, [data-cursor-hover]",P=D=>{var b;(b=D.target)!=null&&b.closest(S)?i(!0):i(!1)};return document.addEventListener("mouseover",P,{passive:!0}),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mousedown",y),document.removeEventListener("mouseup",E),document.removeEventListener("mouseleave",M),document.removeEventListener("mouseenter",_),document.removeEventListener("mouseover",P)}},[]),by||Cy?null:A.jsxs(A.Fragment,{children:[A.jsx(Er.div,{style:{x:h,y:d,translateX:"-50%",translateY:"-50%",position:"fixed",top:0,left:0,borderRadius:"9999px",border:"1.5px dashed var(--accent)",pointerEvents:"none",zIndex:9999,opacity:c?0:.9,boxShadow:"0 0 12px var(--accent)40"},animate:{width:o?18:t?48:34,height:o?18:t?48:34,rotate:[0,360]},transition:{width:{type:"spring",stiffness:500,damping:25},height:{type:"spring",stiffness:500,damping:25},rotate:{repeat:1/0,duration:t?3:8,ease:"linear"}}}),t&&A.jsxs(Er.div,{style:{x:h,y:d,translateX:"-50%",translateY:"-50%",position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999,width:56,height:56},initial:{scale:0,opacity:0},animate:{scale:1,opacity:.8},exit:{scale:0,opacity:0},children:[A.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-2.5 bg-accent"}),A.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-2.5 bg-accent"}),A.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-2.5 bg-accent"}),A.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 h-[2px] w-2.5 bg-accent"})]}),A.jsx(Er.div,{style:{x:m,y:g,translateX:"-50%",translateY:"-50%",position:"fixed",top:0,left:0,borderRadius:"9999px",pointerEvents:"none",zIndex:9999,opacity:c?0:1,width:o?6:t?8:4,height:o?6:t?8:4,backgroundColor:"var(--accent)",boxShadow:"0 0 10px var(--accent)"},transition:{type:"spring",stiffness:600,damping:30}})]})},zF=({progress:n,accentColor:e})=>A.jsx("div",{className:"fixed top-0 left-0 right-0 z-[9998] h-[2px] pointer-events-none",style:{backgroundColor:"transparent"},children:A.jsx("div",{style:{width:`${n*100}%`,height:"100%",backgroundColor:e||"var(--accent)",transition:"width 0.05s linear",boxShadow:`0 0 8px ${e||"var(--accent)"}66`}})}),Zh=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,Ka=({children:n,className:e="",as:t="h2",delay:i=0,stagger:o=55,threshold:a=.15,once:c=!0})=>{const u=O.useRef(null),[h,d]=O.useState(Zh),m=n.split(" ");return O.useEffect(()=>{if(Zh)return;const g=u.current;if(!g)return;const p=new IntersectionObserver(([y])=>{y.isIntersecting?(d(!0),c&&p.disconnect()):c||d(!1)},{threshold:a});return p.observe(g),()=>p.disconnect()},[c,a]),A.jsx(t,{ref:u,className:`${e} overflow-hidden`,"aria-label":n,children:m.map((g,p)=>A.jsx("span",{className:"inline-block overflow-hidden","aria-hidden":"true",style:{marginRight:"0.28em"},children:A.jsx("span",{style:{display:"inline-block",transform:h?"translateY(0)":"translateY(110%)",opacity:h?1:0,transition:Zh?"none":`transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${i+p*o}ms, opacity 600ms ease ${i+p*o}ms`},children:g})},p))})},lu=["/profile1.png","/profile2.png","/profile3.png","/profile4.png"],HF=({className:n="",heroDitherProgress:e=0})=>{const[t,i]=O.useState(0),[o,a]=O.useState(0),[c,u]=O.useState(!1);O.useEffect(()=>{const m=setInterval(()=>{h()},4500);return()=>clearInterval(m)},[t]);const h=()=>{c||(u(!0),a(t),i(m=>(m+1)%lu.length),setTimeout(()=>{u(!1)},900))},d=e>.15?`url(#dither) contrast(${1+e*.25}) brightness(${1-e*.12})`:void 0;return A.jsxs("div",{className:`relative overflow-hidden group cursor-pointer bg-neutral-900 aspect-[4/5] ${n}`,onClick:h,title:"Click to cycle profile photo",children:[A.jsx("img",{src:lu[o],alt:"Profile photo background base",style:{filter:d},className:"absolute inset-0 w-full h-full object-cover grayscale contrast-110 block"}),A.jsx(Er.img,{src:lu[t],alt:"Profile photo active",initial:{opacity:0},animate:{opacity:1},transition:{duration:.9,ease:"easeInOut"},style:{filter:d},className:"absolute inset-0 w-full h-full object-cover grayscale contrast-110 group-hover:contrast-125 transition-all duration-300 block z-10"},lu[t]),A.jsxs("div",{className:"absolute top-3 right-3 bg-background/90 backdrop-blur border border-border px-2 py-1 font-pixel text-[8px] tracking-widest text-foreground uppercase rounded-sm shadow-md pointer-events-none flex items-center gap-1.5 z-20",children:[A.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent animate-pulse"}),"PHOTO [",t+1,"/4]"]})]})},as=[{bg:"#FFFFFF",fg:"#212121",accent:"#0066FF",name:"Professional Blue"},{bg:"#F5F5F5",fg:"#1A1A1A",accent:"#FF3B30",name:"Minimal Crimson"},{bg:"#FAFAFA",fg:"#2C2C2C",accent:"#00A896",name:"Clean Teal"},{bg:"#EAEAEA",fg:"#121212",accent:"#D90429",name:"Nordic Red"},{bg:"#F0F0F0",fg:"#333333",accent:"#7209B7",name:"Deep Indigo"},{bg:"#FFFFFF",fg:"#0A0A0A",accent:"#FFB800",name:"Monochrome Amber"},{bg:"#121212",fg:"#E0E0E0",accent:"#BB86FC",name:"Neon Lavender"},{bg:"#1E1E2E",fg:"#CDD6F4",accent:"#F38BA8",name:"Catppuccin Rose"},{bg:"#0F0F1B",fg:"#F0F0F0",accent:"#39FF14",name:"Matrix Lime"},{bg:"#1A1A2E",fg:"#EAEAEA",accent:"#E94560",name:"Midnight Rose"},{bg:"#0D1117",fg:"#C9D1D9",accent:"#58A6FF",name:"Github Marine"},{bg:"#181818",fg:"#F5F5F5",accent:"#FFD60A",name:"Contrast Yellow"},{bg:"#FFF8F0",fg:"#432818",accent:"#BB4430",name:"Sienna Warmth"},{bg:"#F4F1DE",fg:"#3D405B",accent:"#81B29A",name:"Desert Sage"},{bg:"#FAF3E0",fg:"#4A4E69",accent:"#C9ADA7",name:"Tuscan Sunset"},{bg:"#F5E6CA",fg:"#2C3639",accent:"#A27B5C",name:"Warm Walnut"},{bg:"#FCF6E3",fg:"#3A3A3A",accent:"#D68C45",name:"Solarized Light"},{bg:"#EDE0D4",fg:"#463F3A",accent:"#BC6C25",name:"Almond Ochre"},{bg:"#F7F9FB",fg:"#1B1F3B",accent:"#4361EE",name:"Ice Blue"},{bg:"#EEF1F5",fg:"#2B2D42",accent:"#8D99AE",name:"Corporate Steel"},{bg:"#F0F4F8",fg:"#03045E",accent:"#0077B6",name:"Oceanic Navy"},{bg:"#E8EEF1",fg:"#14213D",accent:"#FCA311",name:"Slate Gold"},{bg:"#F5F7FA",fg:"#1E293B",accent:"#3B82F6",name:"Clean Office"},{bg:"#FFFFFF",fg:"#1A1A1A",accent:"#FF5A5F",name:"Radical Red"},{bg:"#F9F9F9",fg:"#232323",accent:"#6C5CE7",name:"Modern Purple"},{bg:"#FFFFFF",fg:"#111111",accent:"#00D9FF",name:"Electric Cyan"},{bg:"#F2F2F2",fg:"#212529",accent:"#FF006E",name:"Neon Magenta"},{bg:"#FDFDFD",fg:"#1D1D1D",accent:"#8338EC",name:"Royal Purple"},{bg:"#FDF0F4",fg:"#4A4A4A",accent:"#F8A5C2",name:"Blush Pink"},{bg:"#F0F7F4",fg:"#2F3E46",accent:"#84A98C",name:"Sage Mint"},{bg:"#FBF3F9",fg:"#3A3335",accent:"#B8A1CC",name:"Lilac Mist"},{bg:"#EFF6F5",fg:"#264653",accent:"#2A9D8F",name:"Soft Teal"},{bg:"#0D1B2A",fg:"#E0E1DD",accent:"#00F5D4",name:"Cyber Teal"},{bg:"#0A0E27",fg:"#E6E6FA",accent:"#FF3864",name:"Retro Cyberpunk"},{bg:"#0F0F0F",fg:"#EDEDED",accent:"#00FFAB",name:"Green Terminal"}],GF=M2,On=n=>n.trim().split(`
`).flatMap(e=>e.trim().split(/\s+/).map(t=>t==="#"?1:0)),Xu={"001":[On(`
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
    `)]},WF=()=>A.jsx("svg",{className:"absolute w-0 h-0 overflow-hidden","aria-hidden":"true",children:A.jsx("defs",{children:A.jsxs("filter",{id:"dither",colorInterpolationFilters:"sRGB",children:[A.jsx("feColorMatrix",{type:"saturate",values:"0",result:"gray"}),A.jsxs("feComponentTransfer",{in:"gray",children:[A.jsx("feFuncR",{type:"discrete",tableValues:"0 0.33 0.66 1"}),A.jsx("feFuncG",{type:"discrete",tableValues:"0 0.33 0.66 1"}),A.jsx("feFuncB",{type:"discrete",tableValues:"0 0.33 0.66 1"})]})]})})}),zo=({sectionId:n="001",externalFrame:e})=>{const t=Xu[n]??Xu["001"],[i,o]=O.useState(0);O.useEffect(()=>{if(e!==void 0)return;const c=setInterval(()=>o(u=>(u+1)%t.length),900);return()=>clearInterval(c)},[t.length,e]);const a=e!==void 0?Math.min(e,t.length-1):i;return A.jsxs("div",{className:"flex flex-col items-center gap-1 opacity-40 hover:opacity-75 transition-opacity duration-500 cursor-default shrink-0","aria-hidden":"true",children:[A.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 3px)",gap:"1px"},children:t[a].map((c,u)=>A.jsx("div",{style:{width:3,height:3,backgroundColor:c?"currentColor":"transparent"}},u))}),A.jsxs("span",{className:"font-pixel text-[8px] tracking-widest text-muted-foreground leading-none",children:["FM/",n]})]})},ln=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,Zn=({children:n,delay:e=0,className:t="",direction:i="up",distance:o=40})=>{const a=O.useRef(null),[c,u]=O.useState(ln),h=()=>{if(ln)return{};switch(i){case"down":return{opacity:0,transform:`translateY(-${o}px)`};case"left":return{opacity:0,transform:`translateX(${o}px)`};case"right":return{opacity:0,transform:`translateX(-${o}px)`};default:return{opacity:0,transform:`translateY(${o}px)`}}};O.useEffect(()=>{if(ln)return;const m=a.current;if(!m)return;if(m.getBoundingClientRect().top<window.innerHeight*.98){u(!0);return}const p=new IntersectionObserver(([y])=>{y.isIntersecting&&(u(!0),p.disconnect())},{threshold:.04,rootMargin:"0px 0px -8px 0px"});return p.observe(m),()=>p.disconnect()},[]);const d=h();return A.jsx("div",{ref:a,style:{opacity:ln||c?1:d.opacity,transform:ln||c?"none":d.transform,transition:ln?"none":`opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${e}ms,
             transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${e}ms`,willChange:c?"auto":"opacity, transform"},className:t,children:n})},_m={"FIELD-NOTE/001":{label:"FIELD NOTE / 001",n:1},"RECORDS/002":{label:"RECORDS / 002",n:2},BUILT:{label:"BUILT / 003",n:3},LAB:{label:"LAB / 005",n:5},"FIELD-HISTORY":{label:"FIELD HISTORY / 007",n:7},CONTACT:{label:"CONTACT / 009",n:9}},XF=Object.keys(_m),Ry=24,jF=({active:n,themeIdx:e,setThemeIdx:t})=>{const i=_m[n]??_m["FIELD-NOTE/001"];return A.jsxs(A.Fragment,{children:[A.jsxs("aside",{className:"fixed bottom-4 right-4 z-50 hidden md:flex items-end gap-2 pointer-events-none select-none",children:[A.jsx("div",{className:"relative mb-1 pointer-events-none opacity-85",children:A.jsxs("svg",{width:"150",height:"55",viewBox:"0 0 150 55",fill:"none",className:"text-accent",children:[A.jsxs("g",{transform:"rotate(-6 45 20)",children:[A.jsx("text",{x:"5",y:"16",fill:"currentColor",className:"font-doodle text-[12px] font-bold tracking-wide",children:"click this to"}),A.jsx("text",{x:"5",y:"28",fill:"currentColor",className:"font-doodle text-[12px] font-bold tracking-wide",children:"change color!"})]}),A.jsx("path",{d:"M 75,10 C 85,12 90,8 95,12 C 100,16 95,25 90,26 C 85,27 82,18 90,15 C 105,12 118,22 135,32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),A.jsx("path",{d:"M 135,32 L 126,27 M 135,32 L 130,41 M 134,31 L 128,34",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),A.jsxs("div",{className:"pointer-events-auto bg-background/90 backdrop-blur border border-border px-3 py-2.5 flex flex-col items-end gap-0.5 font-pixel text-[9px] tracking-widest uppercase shadow-md rounded-md",children:[A.jsx("span",{className:"text-muted-foreground/60",children:"LEDGER"}),A.jsx(Ep,{mode:"wait",children:A.jsx(Er.span,{initial:{y:-5,opacity:0},animate:{y:0,opacity:.8},exit:{y:5,opacity:0},transition:{duration:.2,ease:[.25,0,0,1]},className:"text-foreground font-bold",children:i.label},i.label)}),A.jsxs("span",{className:"text-muted-foreground",children:[A.jsx(Ep,{mode:"wait",children:A.jsx(Er.span,{initial:{y:-5,opacity:0},animate:{y:0,opacity:1},exit:{y:5,opacity:0},transition:{duration:.2,ease:[.25,0,0,1]},className:"inline-block tabular-nums",children:i.n},i.n)}),` OF ${Ry} ENTRIES`]}),A.jsx("span",{className:"text-muted-foreground/50 text-[8px] mb-2",children:"LAST UPDATED — AUG 2026"}),A.jsxs("button",{onClick:()=>t(o=>(o+1)%as.length),className:"w-full text-center border border-dashed border-accent hover:bg-accent hover:text-primary-foreground py-1.5 px-3 text-[9px] font-pixel text-accent transition-all duration-200 cursor-pointer rounded-sm bg-accent/5",title:"Cycle display theme",children:["DISPLAY — ",as[e].name.toUpperCase()]})]})]}),A.jsx("div",{className:"fixed bottom-4 right-4 z-50 flex md:hidden items-center gap-2 pointer-events-auto select-none",children:A.jsxs("button",{onClick:()=>t(o=>(o+1)%as.length),className:"bg-background/95 backdrop-blur-md border border-accent/80 text-foreground px-3 py-2 text-[9px] font-pixel rounded-full shadow-lg flex items-center gap-2 active:scale-95 transition-transform",title:"Cycle display theme",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-accent animate-pulse shrink-0"}),A.jsx("span",{className:"text-accent font-bold uppercase tracking-wider max-w-[120px] truncate",children:as[e].name}),A.jsxs("span",{className:"text-muted-foreground/80 font-mono text-[8px]",children:["[",i.n,"/",Ry,"]"]})]})})]})},Py=({id:n,label:e,onClick:t})=>A.jsxs("button",{onClick:()=>t(n),className:"inline-flex items-center gap-1 border-b border-dashed border-muted-foreground/50 hover:border-accent hover:text-accent font-pixel text-[10px] transition-colors",children:[e," ",A.jsx(Au,{className:"w-2.5 h-2.5"})]}),cu=({from:n,to:e})=>A.jsxs("div",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground/50 border-t border-border pt-3 flex items-center gap-2 uppercase",children:[A.jsx("span",{children:n}),A.jsx(Au,{className:"w-2.5 h-2.5 opacity-40"}),A.jsx("span",{className:"text-foreground/60",children:e})]}),Qh=T2;function YF(){var At;const[n,e]=O.useState(null),[t,i]=O.useState("FIELD-NOTE/001"),[o,a]=O.useState(0),[c,u]=O.useState(0),[h,d]=O.useState({x:0,y:0}),[m,g]=O.useState(!1),p=O.useRef(null),[y,E]=O.useState(0),M=O.useRef(0),[_,S]=O.useState(0),P=O.useRef(null),D=O.useRef(null),b=O.useRef(0),[N,L]=O.useState(null),[F,T]=O.useState(["SYS_INIT: Telemetry engine online.","EXP_014: Standard evaluation matrix active."]),I=(me,Ce)=>{L(me),T(rt=>[`EXEC [${me}]: Running test pipeline for ${Ce}...`,"STREAM: Analyzing tensor confidence levels...",...rt.slice(0,4)]),setTimeout(()=>{T(rt=>[`STATUS [${me}]: Test completed. Confidence 99.4% [PASS].`,...rt.slice(0,4)]),L(null)},1200)},[V,z]=O.useState(1e3),[X,de]=O.useState(!1);O.useEffect(()=>{const me=()=>{de(window.innerWidth<768||"ontouchstart"in window),D.current&&z(D.current.clientWidth)};return me(),window.addEventListener("resize",me),()=>window.removeEventListener("resize",me)},[]);const{scrollY:le,totalProgress:j,velocity:re,sectionProgress:Z}=w2(),G=X?300:340,te=32,ce=vh.length*G+Math.max(0,vh.length-1)*te,k=Math.max(0,ce-V);O.useEffect(()=>{const me=le-b.current;b.current=le,Math.abs(me)>.2&&S(Ce=>Math.max(-k,Math.min(0,Ce-me*.95)))},[le,k]);const Q=me=>{const Ce=G+te;S(me==="right"?rt=>Math.max(-k,rt-Ce):rt=>Math.min(0,rt+Ce))},Fe=O.useCallback(me=>{var Ce;e(me),(Ce=document.getElementById(me))==null||Ce.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>e(null),2400)},[]);O.useEffect(()=>{const me=[];return XF.forEach(Ce=>{const rt=document.getElementById(Ce);if(!rt)return;const ft=new IntersectionObserver(([Dt])=>{Dt.isIntersecting&&i(Ce)},{threshold:.2});ft.observe(rt),me.push(ft)}),()=>me.forEach(Ce=>Ce.disconnect())},[]);const He=O.useCallback(me=>{if(ln||!p.current)return;const Ce=p.current.getBoundingClientRect();d({x:(me.clientX-Ce.left-Ce.width/2)/Ce.width*6,y:(me.clientY-Ce.top-Ce.height/2)/Ce.height*6})},[]);O.useEffect(()=>{if(ln)return;const me=Math.min(re*.018,1.2)*(le>(M.current||0)?-1:1);M.current=le,E(Ce=>Ce*.7+me*.3)},[re,le]);const Be=me=>{u(me),ln||(g(!0),setTimeout(()=>g(!1),380))},K=Qh&&Qh[c]||{id:"",name:"",type:"",year:"",status:"",img:"",github:"",live:"",challenge:"",solution:"",stack:[],origins:[]},ge=as[o],ve=((At=p.current)==null?void 0:At.offsetHeight)??600,Ue=Math.min(1,le/(ve*.6)),Xe=me=>{const Ce=Xu[me]??Xu["001"];return Math.floor(j*(Ce.length*3))%Ce.length};Z("FIELD-HISTORY");const je=Math.min(1,Math.max(0,(j-.82)/.18));return Z("RECORDS/002"),A.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background",children:[A.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-doodle {
          font-family: 'Caveat', cursive;
        }
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
        :root {
          --background: ${ge.bg} !important;
          --foreground: ${ge.fg} !important;
          --accent: ${ge.accent} !important;
          --primary: ${ge.fg} !important;
          --primary-foreground: ${ge.bg} !important;
          --border: ${ge.fg}24 !important;
          --muted-foreground: ${ge.fg}80 !important;
          --muted: ${ge.fg}0a !important;
        }
        .dark {
          --background: ${ge.fg} !important;
          --foreground: ${ge.bg} !important;
          --accent: ${ge.accent} !important;
          --primary: ${ge.bg} !important;
          --primary-foreground: ${ge.fg} !important;
          --border: ${ge.bg}24 !important;
          --muted-foreground: ${ge.bg}80 !important;
          --muted: ${ge.bg}0a !important;
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
      `}),A.jsx(WF,{}),A.jsx(VF,{}),A.jsx(zF,{progress:j,accentColor:ge.accent}),A.jsx("div",{className:"grain-overlay fixed inset-0 pointer-events-none z-[9989]","aria-hidden":"true"}),A.jsx(jF,{active:t,themeIdx:o,setThemeIdx:a}),A.jsxs("main",{className:"flex flex-col w-full overflow-x-hidden",children:[A.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 pt-16 md:pt-20",children:A.jsx(Zn,{children:A.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4",children:[A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-6 w-auto"}),A.jsx("span",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground uppercase hidden sm:inline-block",children:"[ QUICK VIEW ] — ROLE · STACK · BEST PROJECTS · RÉSUMÉ · CONTACT"})]}),A.jsxs("a",{href:"/resume.pdf",download:"Resume.pdf",className:"flex items-center gap-1.5 font-pixel text-[9px] text-muted-foreground hover:text-accent transition-colors uppercase whitespace-nowrap",children:[A.jsx(Fw,{className:"w-3 h-3"})," RÉSUMÉ PDF"]})]})})}),A.jsx("section",{className:"w-full bg-background text-foreground py-8 md:py-16",children:A.jsxs("div",{ref:p,id:"FIELD-NOTE/001",className:`max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-start transition-all duration-500 ${n==="FIELD-NOTE/001"?"outline outline-2 outline-accent outline-offset-8":""}`,onMouseMove:He,onMouseLeave:()=>d({x:0,y:0}),children:[A.jsxs("div",{className:"flex flex-col gap-8",children:[A.jsx(Zn,{children:A.jsx(zo,{sectionId:"001",externalFrame:Xe("001")})}),A.jsxs("div",{className:"flex flex-col gap-4",children:[A.jsx(Zn,{delay:60,children:A.jsx("div",{className:"inline-flex items-center bg-accent text-primary-foreground font-pixel text-[9px] tracking-widest px-2 py-0.5 uppercase rounded-sm font-bold shadow-sm",children:"[ FIELD NOTE / 001 ]"})}),A.jsx("div",{style:{opacity:1,transform:"none",transition:"none"},children:A.jsx(Ka,{as:"h1",delay:140,stagger:80,className:"text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter leading-none -ml-1 text-foreground",children:"TAN."})}),A.jsx(Zn,{delay:220,children:A.jsx("h2",{className:"text-xl md:text-2xl text-foreground font-bold tracking-tight uppercase mt-2",children:"Software Engineer & Game Developer"})}),A.jsx(Zn,{delay:240,children:A.jsx("p",{className:"text-base md:text-lg leading-relaxed text-foreground/80 max-w-md mt-2 font-medium",children:"I build high-performance digital products, scalable systems, and data-driven experiments to solve complex real-world problems."})})]}),A.jsx(Zn,{delay:300,children:A.jsx("div",{className:"font-pixel text-[9px] tracking-widest text-muted-foreground pt-5 border-t border-border",children:"PHILIPPINES — 2026 — SOFTWARE / WEB / SYSTEMS"})})]}),A.jsx(Zn,{delay:100,children:A.jsxs("div",{className:"relative group cursor-crosshair",children:[A.jsxs("div",{style:{transform:`translate(${h.x}px, ${h.y}px)`,transition:ln?"none":"transform 0.12s ease-out"},className:"relative aspect-[4/5]",children:[A.jsx("div",{className:"absolute translate-x-3 translate-y-3 inset-0 bg-muted -z-10"}),A.jsx(HF,{heroDitherProgress:Ue,className:"w-full h-full object-cover"}),A.jsxs("div",{className:"hidden lg:flex items-center gap-1.5 text-accent font-doodle text-sm font-bold absolute -bottom-9 -left-12 pointer-events-none select-none z-30",children:[A.jsxs("svg",{width:"55",height:"35",viewBox:"0 0 55 35",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[A.jsx("path",{d:"M 5,30 Q 25,5 48,15"}),A.jsx("path",{d:"M 40,10 L 48,15 L 44,24"})]}),A.jsx("span",{children:"click photo to cycle!"})]})]}),A.jsx("div",{className:"absolute inset-0 border border-foreground/15 pointer-events-none",style:{transform:`translate(${-h.x*.45}px, ${-h.y*.45}px)`,transition:ln?"none":"transform 0.18s ease-out"}}),A.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex justify-between items-end",children:[A.jsxs("div",{className:"font-pixel text-[8px] tracking-widest flex flex-col gap-0.5 text-foreground bg-background/85 px-2 py-1",children:[A.jsx("span",{className:"opacity-55",children:"PORTRAIT / 01"}),A.jsx("span",{className:"opacity-55",children:"SUBJECT: TAN"}),A.jsx("span",{className:"opacity-40",children:"FIELD: SOFTWARE DEV"})]}),A.jsxs(y_,{children:[A.jsx(S_,{asChild:!0,children:A.jsxs("button",{className:"flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 font-pixel text-[8px] uppercase hover:bg-accent transition-colors cursor-pointer",children:[A.jsx(Xd,{className:"w-2.5 h-2.5 fill-current"})," PLAY FIELD NOTE"]})}),A.jsxs(E_,{children:[A.jsx(M_,{className:"fixed inset-0 bg-background/85 backdrop-blur-md z-50"}),A.jsxs(T_,{className:"fixed left-[50%] top-[50%] z-50 grid w-[92vw] max-w-2xl max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-2xl rounded-lg",children:[A.jsxs("div",{className:"flex justify-between items-center border-b border-border pb-3",children:[A.jsxs("div",{className:"flex items-center gap-2 font-pixel text-[9px] text-accent tracking-widest uppercase font-bold",children:[A.jsx(Xd,{className:"w-3 h-3 fill-accent"}),A.jsx("span",{children:"[ FIELD NOTE / VIDEO INTRODUCTION ]"})]}),A.jsxs(w_,{className:"rounded-sm opacity-70 hover:opacity-100 transition-opacity",children:[A.jsx(Hv,{className:"h-4 w-4"}),A.jsx("span",{className:"sr-only",children:"Close"})]})]}),A.jsxs("div",{className:"relative aspect-video bg-neutral-900 rounded-md overflow-hidden border border-border group flex items-center justify-center",children:[A.jsxs("video",{controls:!0,poster:"/profile1.png",className:"w-full h-full object-cover",children:[A.jsx("source",{src:"/video-intro.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),A.jsxs("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center text-white pointer-events-none group-hover:bg-black/40 transition-all",children:[A.jsx("div",{className:"w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform",children:A.jsx(Xd,{className:"w-6 h-6 fill-white text-white ml-0.5"})}),A.jsx("p",{className:"font-pixel text-[10px] tracking-widest uppercase font-bold text-white mb-1",children:"VIDEO INTRO PLACEHOLDER"}),A.jsxs("p",{className:"text-xs text-neutral-300 max-w-md",children:["To attach your introduction video, place your video file at ",A.jsx("code",{className:"bg-neutral-800 text-accent px-1.5 py-0.5 rounded text-[11px]",children:"public/video-intro.mp4"}),"."]})]})]}),A.jsxs("div",{className:"flex justify-between items-center font-pixel text-[9px] text-muted-foreground pt-2",children:[A.jsx("span",{children:"STATUS: READY FOR VIDEO ATTACHMENT"}),A.jsx("span",{children:"FORMAT: MP4 / WEBM"})]})]})]})]})]})]})})]})}),A.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 pb-10",children:A.jsx(cu,{from:"FIELD NOTE / 001",to:"RECORDS / 002"})}),A.jsx("section",{className:"w-full dark bg-background text-foreground py-16 md:py-24 overflow-hidden",children:A.jsxs("div",{id:"RECORDS/002",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10",children:[A.jsxs("div",{className:"flex items-center justify-between gap-4",children:[A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx(zo,{sectionId:"002",externalFrame:Xe("002")}),A.jsx(Ka,{as:"h2",delay:0,stagger:60,className:"text-5xl md:text-6xl font-pixel tracking-widest uppercase",children:"RECORDS"})]}),A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-accent font-doodle text-sm font-bold pointer-events-none select-none mr-2",children:[A.jsx("span",{children:"swipe or drag cards!"}),A.jsxs("svg",{width:"45",height:"28",viewBox:"0 0 45 28",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[A.jsx("path",{d:"M 5,14 Q 22,2 38,14"}),A.jsx("path",{d:"M 30,10 L 38,14 L 34,22"})]})]}),A.jsx("button",{onClick:()=>Q("left"),disabled:_>=0,className:"p-2 border border-border hover:border-accent hover:text-accent disabled:opacity-30 transition-colors rounded-sm",title:"Slide left",children:A.jsx(Dw,{className:"w-4 h-4"})}),A.jsx("button",{onClick:()=>Q("right"),disabled:Math.abs(_)>=k,className:"p-2 border border-border hover:border-accent hover:text-accent disabled:opacity-30 transition-colors rounded-sm",title:"Slide right",children:A.jsx(Lw,{className:"w-4 h-4"})})]})]}),A.jsx("div",{ref:D,className:"w-full overflow-hidden pt-2 pb-6 cursor-grab active:cursor-grabbing",children:A.jsx(Er.div,{ref:P,drag:"x",dragConstraints:{left:-k,right:0},className:"flex gap-8 w-max transition-transform duration-100 ease-out",animate:{x:_},onDragEnd:(me,Ce)=>S(rt=>Math.max(-k,Math.min(0,rt+Ce.offset.x))),children:vh.map((me,Ce)=>{const rt=me.n||String(Ce+1).padStart(2,"0"),ft=me.name||"CERTIFICATE",Dt=me.issuer||"ISSUER",Ht=me.year||"2026",jt=me.desc||"Verified certificate record.",Bt=me.img||`https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${me.sig||Ce+1}`;return A.jsx("div",{className:"w-[300px] sm:w-[340px] shrink-0 select-none",children:A.jsxs(y_,{children:[A.jsx(S_,{asChild:!0,children:A.jsxs("div",{className:"flex flex-col gap-3 group cursor-pointer border border-border/60 bg-muted/10 p-4 rounded-md hover:border-accent transition-all duration-300",children:[A.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground flex justify-between items-center",children:[A.jsxs("span",{children:["[",rt,"]"]}),A.jsx("span",{className:"text-[8px] text-accent font-bold tracking-widest uppercase",children:"DRAG / CLICK"})]}),A.jsx("div",{className:"relative aspect-video border border-border bg-muted overflow-hidden rounded-sm",children:A.jsx("img",{src:Bt,alt:ft,draggable:!1,className:"w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none"})}),A.jsxs("div",{children:[A.jsx("div",{className:"font-medium text-sm leading-snug group-hover:text-accent transition-colors",children:ft}),A.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground mt-1",children:["ISSUED BY — ",Dt]}),A.jsxs("div",{className:"flex items-center gap-2 font-pixel text-[9px] mt-2",children:[A.jsx("span",{children:Ht}),A.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold",children:"VERIFIED"})]})]})]})}),A.jsxs(E_,{children:[A.jsx(M_,{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-50"}),A.jsxs(T_,{className:"fixed left-[50%] top-[50%] z-50 grid w-[90vw] max-w-lg max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] gap-6 border border-border bg-background p-6 shadow-xl rounded-md",children:[A.jsx("div",{className:"relative aspect-video border border-border bg-muted overflow-hidden rounded-sm",children:A.jsx("img",{src:Bt,alt:ft,className:"w-full h-full object-cover grayscale"})}),A.jsxs("div",{className:"flex flex-col gap-2",children:[A.jsx(S2,{className:"text-lg font-medium tracking-tight",children:ft}),A.jsx(E2,{className:"text-sm text-foreground/75 leading-relaxed",children:jt}),A.jsxs("div",{className:"flex items-center gap-4 mt-2 font-pixel text-[9px] text-muted-foreground",children:[A.jsxs("span",{children:["ISSUER: ",Dt]}),A.jsxs("span",{children:["YEAR: ",Ht]}),A.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold",children:"STATUS: VERIFIED"})]})]}),A.jsxs(w_,{className:"absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity",children:[A.jsx(Hv,{className:"h-4 w-4"}),A.jsx("span",{className:"sr-only",children:"Close"})]})]})]})]})},rt||Ce)})})})]})}),A.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:A.jsx(cu,{from:"ARCHIVE ENTRY / 003",to:"BUILT"})}),A.jsx("section",{className:"w-full bg-background text-foreground py-16 md:py-24 overflow-hidden",children:A.jsx(Zn,{direction:"left",distance:90,delay:60,children:A.jsxs("div",{id:"BUILT",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10 relative",children:[A.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:A.jsx(Ay,{themeIdx:o,scrollVelocity:re,scrollProgress:j})}),A.jsxs("div",{className:"relative flex flex-row-reverse items-start gap-4 text-right border-b border-border pb-8 mb-8",children:[A.jsx(zo,{sectionId:"003",externalFrame:Xe("003")}),A.jsxs("div",{className:"flex-1",children:[A.jsx(Ka,{as:"h2",delay:0,stagger:55,className:"text-5xl md:text-6xl font-medium tracking-tight",children:"BUILT / SELECTED WORK"}),A.jsx(Zn,{delay:280,children:A.jsx("p",{className:"text-muted-foreground text-sm mt-1",children:'"Things that started as problems, ideas, or experiments and became software."'})})]})]}),A.jsxs("div",{className:"relative grid md:grid-cols-[160px_1fr] gap-8 border-t border-border pt-8",children:[A.jsxs("div",{className:"flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 relative",children:[A.jsxs("div",{className:"hidden md:flex items-center gap-1 text-accent font-doodle text-xs font-bold mb-1 pointer-events-none select-none",children:[A.jsx("span",{children:"select project to view!"}),A.jsxs("svg",{width:"35",height:"20",viewBox:"0 0 35 20",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[A.jsx("path",{d:"M 4,14 Q 18,2 28,12"}),A.jsx("path",{d:"M 22,8 L 28,12 L 24,18"})]})]}),A.jsx("div",{className:"font-pixel text-[8px] text-muted-foreground mb-2 hidden md:block tracking-widest",children:"INDEX"}),Qh.map((me,Ce)=>A.jsx(Zn,{delay:Ce*50,children:A.jsxs("button",{onClick:()=>Be(Ce),className:`font-pixel text-[11px] whitespace-nowrap text-left py-0.5 w-full flex items-center gap-2 hover:text-foreground transition-colors ${Ce===c?"text-foreground":"text-muted-foreground"}`,children:[String(Ce+1).padStart(2,"0")," ",me.name,Ce===c&&A.jsx("span",{className:"text-accent text-[8px]",children:"← selected"})]})},me.id))]}),A.jsx(Ep,{mode:"wait",children:A.jsxs(Er.div,{id:K.id,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.28,ease:[.25,0,0,1]},className:`flex flex-col gap-7 transition-all duration-300 ${n===K.id?"outline outline-2 outline-accent outline-offset-4":""}`,children:[K.github?A.jsxs("a",{href:K.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4 hover:text-foreground transition-colors",children:[A.jsx(Wd,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:K.github.replace(/^https?:\/\/(www\.)?github\.com\//,"").replace(/\/$/,"")}),A.jsx("span",{className:"border border-border rounded-full px-2 py-0.5 text-[8px]",children:"Public"})]}):A.jsxs("div",{className:"flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4",children:[A.jsx(Wd,{className:"w-3.5 h-3.5"}),A.jsxs("span",{children:["mrtnztan / ",K.name.toLowerCase().replace(/\s+/g,"-")]}),A.jsx("span",{className:"border border-border rounded-full px-2 py-0.5 text-[8px]",children:"Public"})]}),A.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[A.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-6",children:[A.jsxs("div",{className:"border border-border rounded-md overflow-hidden bg-background",children:[A.jsxs("div",{className:"bg-muted/30 border-b border-border px-4 py-2.5 flex items-center gap-2 font-pixel text-[9px] text-muted-foreground",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500/80"}),A.jsx("span",{className:"w-2 h-2 rounded-full bg-yellow-500/80"}),A.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500/80"}),A.jsxs("span",{className:"ml-2 font-mono text-[10px] lowercase",children:[K.name.replace(/\s+/g,"-"),".png"]})]}),A.jsx("div",{className:"relative aspect-video bg-muted overflow-hidden group cursor-crosshair",children:A.jsx("img",{src:K.img,alt:K.name,className:`w-full h-full object-cover grayscale opacity-90 transition-all duration-500 ${m?"[filter:url(#dither)]":"group-hover:[filter:url(#dither)]"}`})})]}),A.jsxs("div",{className:"border border-border rounded-md bg-background",children:[A.jsx("div",{className:"bg-muted/30 border-b border-border px-4 py-2.5",children:A.jsx("span",{className:"font-pixel text-[9px] font-medium uppercase tracking-widest text-foreground",children:"README.md"})}),A.jsxs("div",{className:"p-6 md:p-8",children:[A.jsx("h1",{className:"text-2xl font-medium mb-4 pb-2 border-b border-border",children:K.name}),A.jsxs("p",{className:"text-muted-foreground text-sm leading-relaxed mb-6",children:[K.type," built in ",K.year,"."]}),K.challenge&&A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"text-sm font-medium mb-2",children:"Challenge"}),A.jsx("p",{className:"text-sm text-foreground/80 leading-relaxed",children:K.challenge})]}),K.solution&&A.jsxs("div",{children:[A.jsx("h2",{className:"text-sm font-medium mb-2",children:"Solution"}),A.jsx("p",{className:"text-sm text-foreground/80 leading-relaxed",children:K.solution})]})]})]})]})]}),A.jsxs("div",{className:"w-full lg:w-[250px] shrink-0 flex flex-col gap-6",children:[A.jsxs("div",{children:[A.jsx("h3",{className:"font-medium text-sm mb-3",children:"About"}),A.jsxs("p",{className:"text-sm text-muted-foreground mb-4",children:[K.type," — ",K.year]}),A.jsx("div",{className:"flex items-center gap-2 font-pixel text-[9px] mb-6",children:A.jsxs("span",{className:"border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold shadow-sm",children:["STATUS: ",K.status]})}),A.jsxs("div",{className:"flex flex-col gap-2",children:[K.github&&A.jsxs("a",{href:K.github,target:"_blank",rel:"noopener noreferrer",className:"font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md",children:[A.jsx("span",{children:"[ SOURCE ]"})," ",A.jsx(Au,{className:"w-3 h-3"})]}),K.live&&A.jsxs("a",{href:K.live,target:"_blank",rel:"noopener noreferrer",className:"font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md",children:[A.jsx("span",{children:"[ LIVE ]"})," ",A.jsx(Au,{className:"w-3 h-3"})]})]})]}),K.stack&&K.stack.length>0&&A.jsxs("div",{className:"border-t border-border pt-6",children:[A.jsx("h3",{className:"font-medium text-sm mb-4",children:"Role & Stack"}),A.jsx("ul",{className:"space-y-3 text-sm text-foreground/80",children:K.stack.map((me,Ce)=>A.jsxs("li",{className:"flex items-center gap-2",children:[A.jsx("span",{className:`w-2 h-2 rounded-full ${me.color||"bg-accent"}`}),me.name]},Ce))})]}),K.origins&&K.origins.length>0&&A.jsxs("div",{className:"border-t border-border pt-6",children:[A.jsx("h3",{className:"font-medium text-sm mb-4",children:"Origins"}),A.jsx("div",{className:"flex flex-col gap-2 items-start",children:K.origins.map(me=>A.jsx(Py,{id:me.id,label:me.label,onClick:Fe},me.id))})]})]})]})]},c)})]})]})})}),A.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:A.jsx(cu,{from:"RECORD / 004",to:"LAB"})}),A.jsx("section",{className:"w-full dark bg-background text-foreground py-16 md:py-24",children:A.jsxs("div",{id:"LAB",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10",children:[A.jsxs("div",{className:"flex justify-between items-start",children:[A.jsxs("div",{className:"flex items-start gap-4",children:[A.jsx(zo,{sectionId:"005",externalFrame:Xe("005")}),A.jsxs("div",{children:[A.jsx(Ka,{as:"h2",delay:0,stagger:65,className:"text-4xl md:text-5xl font-mono font-medium tracking-tight uppercase",children:"LAB / EXPERIMENTS"}),A.jsx(Zn,{delay:320,children:A.jsx("p",{className:"font-mono text-sm opacity-70 mt-1",children:'"Interactive sandbox & live diagnostic telemetry."'})})]})]}),A.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[A.jsxs("div",{className:"flex items-center gap-1 text-accent font-doodle text-sm font-bold pointer-events-none select-none mr-2",children:[A.jsx("span",{children:"click to test simulation!"}),A.jsxs("svg",{width:"40",height:"24",viewBox:"0 0 40 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[A.jsx("path",{d:"M 4,4 Q 20,20 32,12"}),A.jsx("path",{d:"M 25,10 L 32,12 L 30,4"})]})]}),A.jsxs("div",{className:"font-pixel text-[9px] border border-border px-3 py-1.5 rounded-sm text-accent bg-accent/5 hidden md:flex items-center gap-2",children:[A.jsx(zv,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:"LAB ENGINE ONLINE"})]})]})]}),A.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:[{id:"LAB/001",num:"001",name:"ANTI-SMOKE BELCHING DETECTION",cat:"COMPUTER VISION / IOT",status:"RESEARCHING",accent:!0,note:"Can low-cost edge AI flag high-emission vehicles on local roads in real-time?",label:"Hypothesis"},{id:"LAB/003",num:"003",name:"LOCAL FIRST SCHEDULING",cat:"CRDTs / OFFLINE ARCHITECTURE",status:"PROTOTYPING",accent:!1,note:"Exploring CRDT implementations for calendar events. Led directly to the architecture in BUILT / 001.",label:"Concept"}].map((me,Ce)=>A.jsx(Zn,{delay:Ce*80,children:A.jsxs("div",{id:me.id,className:`border border-border p-6 hover:border-accent transition-all duration-300 group rounded-md bg-muted/10 flex flex-col justify-between ${n===me.id?"border-accent bg-muted/30":""}`,children:[A.jsxs("div",{children:[A.jsxs("div",{className:"flex justify-between items-start mb-4",children:[A.jsxs("div",{className:"font-pixel text-[9px] text-muted-foreground",children:["LAB / ",me.num]}),A.jsxs("div",{className:`font-pixel text-[8px] px-2 py-0.5 border border-dashed rounded-sm ${me.accent?"border-accent bg-accent/5 text-accent font-bold":"text-foreground/70 border-border"}`,children:["STATUS: ",N===me.id?"TESTING...":me.status]})]}),A.jsx("h3",{className:"text-lg font-medium mb-1 group-hover:text-accent transition-colors",children:me.name}),A.jsx("p",{className:"font-pixel text-[9px] text-muted-foreground mb-4",children:me.cat}),A.jsxs("div",{className:"text-sm border-t border-border pt-4 text-foreground/75 mb-6",children:[A.jsxs("span",{className:"font-pixel text-[8px] text-muted-foreground uppercase mr-2",children:[me.label," —"]}),me.note]})]}),A.jsxs("button",{onClick:()=>I(me.id,me.name),disabled:N===me.id,className:"w-full flex items-center justify-center gap-2 border border-border hover:bg-accent hover:text-primary-foreground py-2 font-pixel text-[9px] uppercase tracking-widest transition-all rounded-sm disabled:opacity-50",children:[A.jsx(Gw,{className:`w-3 h-3 ${N===me.id?"animate-spin text-accent":""}`}),A.jsx("span",{children:N===me.id?"RUNNING SIMULATION...":"RUN TEST SIMULATION"})]})]})},me.id))}),A.jsx(Zn,{delay:150,children:A.jsxs("div",{className:"border border-border bg-muted/20 p-6 rounded-md font-mono",children:[A.jsxs("div",{className:"font-pixel text-[8px] text-muted-foreground mb-4 tracking-widest flex items-center justify-between border-b border-border pb-3",children:[A.jsxs("span",{className:"flex items-center gap-2",children:[A.jsx(zv,{className:"w-3 h-3 text-accent"}),A.jsx("span",{children:"EXPERIMENT LOG & LIVE TELEMETRY"})]}),A.jsx("span",{className:"text-accent",children:"ID: EXP/014"})]}),A.jsx("div",{className:"space-y-2 text-xs",children:F.map((me,Ce)=>A.jsxs("div",{className:"flex items-start gap-2",children:[A.jsx("span",{className:"text-accent select-none",children:">"}),A.jsx("span",{className:Ce===0?"text-foreground font-semibold":"text-muted-foreground",children:me})]},Ce))})]})})]})}),A.jsx("div",{className:"max-w-6xl w-full mx-auto px-4 md:px-8 py-10",children:A.jsx(cu,{from:"RECORD / 006",to:"FIELD HISTORY"})}),A.jsx("section",{className:"w-full bg-background text-foreground py-16 md:py-24",children:A.jsxs("div",{id:"FIELD-HISTORY",className:"max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-10",children:[A.jsxs("div",{className:"flex flex-col items-center gap-3",children:[A.jsx(zo,{sectionId:"007",externalFrame:Xe("007")}),A.jsx(Ka,{as:"h2",delay:0,stagger:70,className:"text-5xl md:text-6xl font-medium tracking-tight uppercase",children:"FIELD HISTORY"}),A.jsxs("div",{className:"flex items-center gap-2 text-accent font-doodle text-base font-bold pointer-events-none select-none mt-1",children:[A.jsx("span",{children:"grab & toss cards around!"}),A.jsxs("svg",{width:"45",height:"24",viewBox:"0 0 45 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[A.jsx("path",{d:"M 4,6 C 18,20 30,2 38,14"}),A.jsx("path",{d:"M 30,11 L 38,14 L 35,20"})]})]})]}),A.jsx("div",{className:"grid md:grid-cols-3 gap-6 w-full text-left",children:GF.map((me,Ce)=>A.jsx(Zn,{delay:Ce*80,children:A.jsxs(Er.div,{id:me.id,drag:!X,dragElastic:.15,dragSnapToOrigin:!0,dragTransition:{bounceStiffness:600,bounceDamping:20},whileDrag:{scale:1.06,cursor:"grabbing",zIndex:50,boxShadow:"0 25px 35px rgba(0,0,0,0.3)"},transition:{type:"spring",stiffness:450,damping:20},className:`border border-border p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:border-accent ${X?"cursor-default":"cursor-grab active:cursor-grabbing"} bg-background rounded-md shadow-sm select-none ${n===me.id?"border-accent bg-muted/20":""}`,children:[A.jsxs("div",{className:"font-pixel text-[10px] tracking-widest text-muted-foreground flex justify-between items-center",children:[A.jsx("span",{children:me.year}),A.jsx("span",{className:"text-[8px] border border-border px-1.5 py-0.5 rounded-sm",children:"MAGNETIC SLOT"})]}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-sm font-medium uppercase tracking-wide mb-1",children:me.role}),A.jsxs("div",{className:"font-pixel text-[8px] text-muted-foreground mb-3 border-b border-border/50 pb-3 flex items-center gap-2 flex-wrap",children:[A.jsx("span",{children:me.comp}),A.jsx("span",{className:"border border-dashed border-accent bg-accent/5 text-accent px-1.5 py-0.5 rounded-sm font-bold",children:me.type})]}),A.jsx("p",{className:"text-xs leading-relaxed text-foreground/80",children:me.desc})]}),me.refs.length>0&&A.jsxs("div",{className:"mt-auto pt-4 flex items-center gap-2 flex-wrap border-t border-border/40",children:[A.jsx("span",{className:"font-pixel text-[8px] text-muted-foreground",children:"SEE ALSO —"}),me.refs.map(rt=>A.jsx(Py,{id:rt.id,label:rt.label,onClick:Fe},rt.id))]})]})},me.year))})]})})]}),A.jsxs("section",{id:"CONTACT",className:"bg-primary text-primary-foreground relative overflow-hidden mt-10",children:[A.jsx("div",{className:"absolute inset-0",children:A.jsx(Ay,{dark:!0,themeIdx:o,scrollVelocity:re,scrollProgress:j})}),A.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col items-start gap-6",children:[A.jsx(zo,{sectionId:"009",externalFrame:Xe("009")}),A.jsxs("div",{children:[A.jsx("div",{className:"font-pixel text-[9px] tracking-widest mb-2",style:{opacity:ln?.4:Math.max(.08,je*.5),transform:ln?"none":`translateY(${(1-je)*16}px)`,transition:ln?"none":"opacity 0.06s, transform 0.06s"},children:"CONTACT / 009"}),A.jsx("div",{className:"text-2xl md:text-4xl font-black tracking-tight leading-tight mb-2 overflow-hidden",style:{transform:ln?"none":`translateY(${(1-Math.min(1,je*1.4))*30}px)`,opacity:ln?1:Math.min(1,je*2),transition:ln?"none":"transform 0.08s cubic-bezier(0.16,1,0.3,1), opacity 0.07s ease"},children:"START A NEW FIELD NOTE."}),A.jsx("p",{className:"text-xs md:text-sm text-primary-foreground/75",style:{opacity:ln?.55:Math.max(0,(je-.45)*1.2),transform:ln?"none":`translateY(${(1-Math.min(1,Math.max(0,(je-.45)/.55)))*10}px)`,transition:ln?"none":"opacity 0.06s, transform 0.06s"},children:'"Have a problem worth exploring?"'})]}),A.jsxs("div",{className:"flex gap-4 mt-1",children:[A.jsx("a",{href:"mailto:cmkbuena@gmail.com",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-12 h-12 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 rounded-md",children:A.jsx(Vw,{className:"w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"})}),A.jsx("a",{href:"https://github.com/ChristianBuena",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-12 h-12 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 rounded-md",children:A.jsx(Wd,{className:"w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"})}),A.jsx("a",{href:"https://www.linkedin.com/in/mrtnztan/",target:"_blank",rel:"noreferrer",className:"group flex items-center justify-center border-2 border-primary-foreground/30 w-12 h-12 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 rounded-md",children:A.jsx(kw,{className:"w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"})})]})]})]}),A.jsxs("footer",{className:"max-w-6xl mx-auto px-4 md:px-8 py-8 font-pixel text-[8px] text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border",children:[A.jsxs("div",{className:"flex items-center gap-3 tracking-widest uppercase",children:[A.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"}),A.jsx("span",{children:"TAN / FIELD NOTES — SOFTWARE DEVELOPER — PHILIPPINES — 2026"})]}),A.jsx("nav",{className:"flex gap-4 uppercase tracking-widest",children:[["BUILT","#BUILT"],["LAB","#LAB"],["FIELD HISTORY","#FIELD-HISTORY"],["RECORDS","#RECORDS/002"]].map(([me,Ce])=>A.jsx("a",{href:Ce,className:"hover:text-foreground transition-colors",children:me},me))}),A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsxs("button",{onClick:()=>a(me=>(me+1)%as.length),className:"font-pixel text-[8px] tracking-widest border border-dashed px-2 py-0.5 transition-colors uppercase border-border/60 hover:border-foreground/50 text-foreground",title:"Cycle display theme",children:["DISPLAY — ",as[o].name.toUpperCase()," (",o+1,"/",as.length,")"]}),A.jsx("span",{className:"tracking-widest",children:"© 2026 TAN"})]})]})]})}Ew.createRoot(document.getElementById("root")).render(A.jsx(YF,{}));
