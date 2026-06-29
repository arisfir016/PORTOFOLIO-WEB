(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function py(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fd={exports:{}},Pa={},dd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function C1(){if(B0)return _t;B0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=p&&U[p]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(U,q,Se){this.props=U,this.context=q,this.refs=b,this.updater=Se||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,q,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function C(U,q,Se){this.props=U,this.context=q,this.refs=b,this.updater=Se||S}var P=C.prototype=new _;P.constructor=C,M(P,y.prototype),P.isPureReactComponent=!0;var T=Array.isArray,L=Object.prototype.hasOwnProperty,D={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function E(U,q,Se){var Oe,Ee={},j=null,ge=null;if(q!=null)for(Oe in q.ref!==void 0&&(ge=q.ref),q.key!==void 0&&(j=""+q.key),q)L.call(q,Oe)&&!I.hasOwnProperty(Oe)&&(Ee[Oe]=q[Oe]);var de=arguments.length-2;if(de===1)Ee.children=Se;else if(1<de){for(var Ne=Array(de),Ge=0;Ge<de;Ge++)Ne[Ge]=arguments[Ge+2];Ee.children=Ne}if(U&&U.defaultProps)for(Oe in de=U.defaultProps,de)Ee[Oe]===void 0&&(Ee[Oe]=de[Oe]);return{$$typeof:n,type:U,key:j,ref:ge,props:Ee,_owner:D.current}}function N(U,q){return{$$typeof:n,type:U.type,key:q,ref:U.ref,props:U.props,_owner:U._owner}}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function B(U){var q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Se){return q[Se]})}var W=/\/+/g;function ce(U,q){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):q.toString(36)}function pe(U,q,Se,Oe,Ee){var j=typeof U;(j==="undefined"||j==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(j){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case n:case e:ge=!0}}if(ge)return ge=U,Ee=Ee(ge),U=Oe===""?"."+ce(ge,0):Oe,T(Ee)?(Se="",U!=null&&(Se=U.replace(W,"$&/")+"/"),pe(Ee,q,Se,"",function(Ge){return Ge})):Ee!=null&&(k(Ee)&&(Ee=N(Ee,Se+(!Ee.key||ge&&ge.key===Ee.key?"":(""+Ee.key).replace(W,"$&/")+"/")+U)),q.push(Ee)),1;if(ge=0,Oe=Oe===""?".":Oe+":",T(U))for(var de=0;de<U.length;de++){j=U[de];var Ne=Oe+ce(j,de);ge+=pe(j,q,Se,Ne,Ee)}else if(Ne=v(U),typeof Ne=="function")for(U=Ne.call(U),de=0;!(j=U.next()).done;)j=j.value,Ne=Oe+ce(j,de++),ge+=pe(j,q,Se,Ne,Ee);else if(j==="object")throw q=String(U),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ge}function $(U,q,Se){if(U==null)return U;var Oe=[],Ee=0;return pe(U,Oe,"","",function(j){return q.call(Se,j,Ee++)}),Oe}function J(U){if(U._status===-1){var q=U._result;q=q(),q.then(function(Se){(U._status===0||U._status===-1)&&(U._status=1,U._result=Se)},function(Se){(U._status===0||U._status===-1)&&(U._status=2,U._result=Se)}),U._status===-1&&(U._status=0,U._result=q)}if(U._status===1)return U._result.default;throw U._result}var Z={current:null},z={transition:null},te={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:z,ReactCurrentOwner:D};function re(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:$,forEach:function(U,q,Se){$(U,function(){q.apply(this,arguments)},Se)},count:function(U){var q=0;return $(U,function(){q++}),q},toArray:function(U){return $(U,function(q){return q})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=y,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=C,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,_t.act=re,_t.cloneElement=function(U,q,Se){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Oe=M({},U.props),Ee=U.key,j=U.ref,ge=U._owner;if(q!=null){if(q.ref!==void 0&&(j=q.ref,ge=D.current),q.key!==void 0&&(Ee=""+q.key),U.type&&U.type.defaultProps)var de=U.type.defaultProps;for(Ne in q)L.call(q,Ne)&&!I.hasOwnProperty(Ne)&&(Oe[Ne]=q[Ne]===void 0&&de!==void 0?de[Ne]:q[Ne])}var Ne=arguments.length-2;if(Ne===1)Oe.children=Se;else if(1<Ne){de=Array(Ne);for(var Ge=0;Ge<Ne;Ge++)de[Ge]=arguments[Ge+2];Oe.children=de}return{$$typeof:n,type:U.type,key:Ee,ref:j,props:Oe,_owner:ge}},_t.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},_t.createElement=E,_t.createFactory=function(U){var q=E.bind(null,U);return q.type=U,q},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:f,render:U}},_t.isValidElement=k,_t.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:J}},_t.memo=function(U,q){return{$$typeof:d,type:U,compare:q===void 0?null:q}},_t.startTransition=function(U){var q=z.transition;z.transition={};try{U()}finally{z.transition=q}},_t.unstable_act=re,_t.useCallback=function(U,q){return Z.current.useCallback(U,q)},_t.useContext=function(U){return Z.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return Z.current.useDeferredValue(U)},_t.useEffect=function(U,q){return Z.current.useEffect(U,q)},_t.useId=function(){return Z.current.useId()},_t.useImperativeHandle=function(U,q,Se){return Z.current.useImperativeHandle(U,q,Se)},_t.useInsertionEffect=function(U,q){return Z.current.useInsertionEffect(U,q)},_t.useLayoutEffect=function(U,q){return Z.current.useLayoutEffect(U,q)},_t.useMemo=function(U,q){return Z.current.useMemo(U,q)},_t.useReducer=function(U,q,Se){return Z.current.useReducer(U,q,Se)},_t.useRef=function(U){return Z.current.useRef(U)},_t.useState=function(U){return Z.current.useState(U)},_t.useSyncExternalStore=function(U,q,Se){return Z.current.useSyncExternalStore(U,q,Se)},_t.useTransition=function(){return Z.current.useTransition()},_t.version="18.3.1",_t}var V0;function Dp(){return V0||(V0=1,dd.exports=C1()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function R1(){if(z0)return Pa;z0=1;var n=Dp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,d){var m,p={},v=null,S=null;d!==void 0&&(v=""+d),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)r.call(h,m)&&!a.hasOwnProperty(m)&&(p[m]=h[m]);if(f&&f.defaultProps)for(m in h=f.defaultProps,h)p[m]===void 0&&(p[m]=h[m]);return{$$typeof:e,type:f,key:v,ref:S,props:p,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=c,Pa.jsxs=c,Pa}var H0;function P1(){return H0||(H0=1,fd.exports=R1()),fd.exports}var O=P1(),dc={},hd={exports:{}},ti={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function D1(){return G0||(G0=1,(function(n){function e(z,te){var re=z.length;z.push(te);e:for(;0<re;){var U=re-1>>>1,q=z[U];if(0<o(q,te))z[U]=te,z[re]=q,re=U;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var te=z[0],re=z.pop();if(re!==te){z[0]=re;e:for(var U=0,q=z.length,Se=q>>>1;U<Se;){var Oe=2*(U+1)-1,Ee=z[Oe],j=Oe+1,ge=z[j];if(0>o(Ee,re))j<q&&0>o(ge,Ee)?(z[U]=ge,z[j]=re,U=j):(z[U]=Ee,z[Oe]=re,U=Oe);else if(j<q&&0>o(ge,re))z[U]=ge,z[j]=re,U=j;else break e}}return te}function o(z,te){var re=z.sortIndex-te.sortIndex;return re!==0?re:z.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var h=[],d=[],m=1,p=null,v=3,S=!1,M=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var te=t(d);te!==null;){if(te.callback===null)r(d);else if(te.startTime<=z)r(d),te.sortIndex=te.expirationTime,e(h,te);else break;te=t(d)}}function T(z){if(b=!1,P(z),!M)if(t(h)!==null)M=!0,J(L);else{var te=t(d);te!==null&&Z(T,te.startTime-z)}}function L(z,te){M=!1,b&&(b=!1,_(E),E=-1),S=!0;var re=v;try{for(P(te),p=t(h);p!==null&&(!(p.expirationTime>te)||z&&!B());){var U=p.callback;if(typeof U=="function"){p.callback=null,v=p.priorityLevel;var q=U(p.expirationTime<=te);te=n.unstable_now(),typeof q=="function"?p.callback=q:p===t(h)&&r(h),P(te)}else r(h);p=t(h)}if(p!==null)var Se=!0;else{var Oe=t(d);Oe!==null&&Z(T,Oe.startTime-te),Se=!1}return Se}finally{p=null,v=re,S=!1}}var D=!1,I=null,E=-1,N=5,k=-1;function B(){return!(n.unstable_now()-k<N)}function W(){if(I!==null){var z=n.unstable_now();k=z;var te=!0;try{te=I(!0,z)}finally{te?ce():(D=!1,I=null)}}else D=!1}var ce;if(typeof C=="function")ce=function(){C(W)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,$=pe.port2;pe.port1.onmessage=W,ce=function(){$.postMessage(null)}}else ce=function(){y(W,0)};function J(z){I=z,D||(D=!0,ce())}function Z(z,te){E=y(function(){z(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){M||S||(M=!0,J(L))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(z){switch(v){case 1:case 2:case 3:var te=3;break;default:te=v}var re=v;v=te;try{return z()}finally{v=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,te){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=v;v=z;try{return te()}finally{v=re}},n.unstable_scheduleCallback=function(z,te,re){var U=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,z={id:m++,callback:te,priorityLevel:z,startTime:re,expirationTime:q,sortIndex:-1},re>U?(z.sortIndex=re,e(d,z),t(h)===null&&z===t(d)&&(b?(_(E),E=-1):b=!0,Z(T,re-U))):(z.sortIndex=q,e(h,z),M||S||(M=!0,J(L))),z},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(z){var te=v;return function(){var re=v;v=te;try{return z.apply(this,arguments)}finally{v=re}}}})(md)),md}var W0;function L1(){return W0||(W0=1,pd.exports=D1()),pd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function N1(){if(X0)return ti;X0=1;var n=Dp(),e=L1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},p={};function v(i){return h.call(p,i)?!0:h.call(m,i)?!1:d.test(i)?p[i]=!0:(m[i]=!0,!1)}function S(i,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,u){if(s===null||typeof s>"u"||S(i,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function b(i,s,l,u,g,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new b(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new b(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new b(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new b(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new b(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new b(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new b(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new b(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new b(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(_,C);y[s]=new b(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(_,C);y[s]=new b(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(_,C);y[s]=new b(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new b(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new b(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,u){var g=y.hasOwnProperty(s)?y[s]:null;(g!==null?g.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,u)&&(l=null),u||g===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,u=g.attributeNamespace,l===null?i.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,u?i.setAttributeNS(u,s,l):i.setAttribute(s,l))))}var T=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),B=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),z=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,U;function q(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Se=!1;function Oe(i,s){if(!i||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var u=fe}Reflect.construct(i,[],s)}else{try{s.call()}catch(fe){u=fe}i.call(s.prototype)}else{try{throw Error()}catch(fe){u=fe}i()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var g=fe.stack.split(`
`),x=u.stack.split(`
`),A=g.length-1,V=x.length-1;1<=A&&0<=V&&g[A]!==x[V];)V--;for(;1<=A&&0<=V;A--,V--)if(g[A]!==x[V]){if(A!==1||V!==1)do if(A--,V--,0>V||g[A]!==x[V]){var H=`
`+g[A].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=A&&0<=V);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function Ee(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Oe(i.type,!1),i;case 11:return i=Oe(i.type.render,!1),i;case 1:return i=Oe(i.type,!0),i;default:return""}}function j(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case D:return"Portal";case N:return"Profiler";case E:return"StrictMode";case ce:return"Suspense";case pe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case k:return(i._context.displayName||"Context")+".Provider";case W:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case $:return s=i.displayName||null,s!==null?s:j(i.type)||"Memo";case J:s=i._payload,i=i._init;try{return j(i(s))}catch{}}return null}function ge(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function de(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ge(i){var s=Ne(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(A){u=""+A,x.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ze(i){i._valueTracker||(i._valueTracker=Ge(i))}function Rt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return i&&(u=Ne(i)?i.checked?"true":"false":i.value),i=u,i!==l?(s.setValue(i),!0):!1}function ct(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Mt(i,s){var l=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function St(i,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=de(s.value!=null?s.value:l),i._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function gt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function Ft(i,s){gt(i,s);var l=de(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Lt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Lt(i,s.type,de(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function jt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Lt(i,s,l){(s!=="number"||ct(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Yt=Array.isArray;function It(i,s,l,u){if(i=i.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=s.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&u&&(i[l].defaultSelected=!0)}else{for(l=""+de(l),s=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,u&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function xt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function X(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Yt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:de(l)}}function pn(i,s){var l=de(s.value),u=de(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),u!=null&&(i.defaultValue=""+u)}function bt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function F(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?F(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Q,ae=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,g){MSApp.execUnsafeLocalFunction(function(){return i(s,l,u,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Q.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function he(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(i){Ce.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Te[s]=Te[i]})});function me(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Te.hasOwnProperty(i)&&Te[i]?(""+s).trim():s+"px"}function ve(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,g=me(l,s[l],u);l==="float"&&(l="cssFloat"),u?i.setProperty(l,g):i[l]=g}}var Ie=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(i,s){if(s){if(Ie[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Fe(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function We(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var it=null,ot=null,G=null;function De(i){if(i=ma(i)){if(typeof it!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Al(s),it(i.stateNode,i.type,s))}}function ie(i){ot?G?G.push(i):G=[i]:ot=i}function Me(){if(ot){var i=ot,s=G;if(G=ot=null,De(i),s)for(i=0;i<s.length;i++)De(s[i])}}function be(i,s){return i(s)}function xe(){}var Xe=!1;function Ue(i,s,l){if(Xe)return i(s,l);Xe=!0;try{return be(i,s,l)}finally{Xe=!1,(ot!==null||G!==null)&&(xe(),Me())}}function pt(i,s){var l=i.stateNode;if(l===null)return null;var u=Al(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Et=!1;if(f)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){Et=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{Et=!1}function Zt(i,s,l,u,g,x,A,V,H){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(l,fe)}catch(_e){this.onError(_e)}}var Gi=!1,Yn=null,Pr=!1,us=null,Nu={onError:function(i){Gi=!0,Yn=i}};function cl(i,s,l,u,g,x,A,V,H){Gi=!1,Yn=null,Zt.apply(Nu,arguments)}function ul(i,s,l,u,g,x,A,V,H){if(cl.apply(this,arguments),Gi){if(Gi){var fe=Yn;Gi=!1,Yn=null}else throw Error(t(198));Pr||(Pr=!0,us=fe)}}function Bn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function js(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function $o(i){if(Bn(i)!==i)throw Error(t(188))}function fl(i){var s=i.alternate;if(!s){if(s=Bn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,u=s;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(u=g.return,u!==null){l=u;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return $o(g),i;if(x===u)return $o(g),s;x=x.sibling}throw Error(t(188))}if(l.return!==u.return)l=g,u=x;else{for(var A=!1,V=g.child;V;){if(V===l){A=!0,l=g,u=x;break}if(V===u){A=!0,u=g,l=x;break}V=V.sibling}if(!A){for(V=x.child;V;){if(V===l){A=!0,l=x,u=g;break}if(V===u){A=!0,u=x,l=g;break}V=V.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function fs(i){return i=fl(i),i!==null?Ko(i):null}function Ko(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Ko(i);if(s!==null)return s;i=i.sibling}return null}var ds=e.unstable_scheduleCallback,Zo=e.unstable_cancelCallback,dl=e.unstable_shouldYield,Iu=e.unstable_requestPaint,en=e.unstable_now,Uu=e.unstable_getCurrentPriorityLevel,Jo=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,ue=e.unstable_LowPriority,oe=e.unstable_IdlePriority,se=null,Le=null;function He(i){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(se,i,void 0,(i.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:ut,Je=Math.log,nt=Math.LN2;function ut(i){return i>>>=0,i===0?32:31-(Je(i)/nt|0)|0}var ft=64,et=4194304;function At(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Wt(i,s){var l=i.pendingLanes;if(l===0)return 0;var u=0,g=i.suspendedLanes,x=i.pingedLanes,A=l&268435455;if(A!==0){var V=A&~g;V!==0?u=At(V):(x&=A,x!==0&&(u=At(x)))}else A=l&~g,A!==0?u=At(A):x!==0&&(u=At(x));if(u===0)return 0;if(s!==0&&s!==u&&(s&g)===0&&(g=u&-u,x=s&-s,g>=x||g===16&&(x&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)l=31-Re(s),g=1<<l,u|=i[l],s&=~g;return u}function Jt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(i,s){for(var l=i.suspendedLanes,u=i.pingedLanes,g=i.expirationTimes,x=i.pendingLanes;0<x;){var A=31-Re(x),V=1<<A,H=g[A];H===-1?((V&l)===0||(V&u)!==0)&&(g[A]=Jt(V,s)):H<=s&&(i.expiredLanes|=V),x&=~V}}function un(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ve(){var i=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),i}function Tn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function vt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Re(s),i[s]=l}function qn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-Re(l),x=1<<g;s[g]=0,u[g]=-1,i[g]=-1,l&=~x}}function $n(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var u=31-Re(l),g=1<<u;g&s|i[u]&s&&(i[u]|=s),l&=~g}}var yt=0;function cr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var kt,qt,Ti,Bt,bi,Wi=!1,hs=[],Dr=null,Lr=null,Nr=null,Qo=new Map,ea=new Map,Ir=[],KS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(i,s){switch(i){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Qo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(s.pointerId)}}function ta(i,s,l,u,g,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[g]},s!==null&&(s=ma(s),s!==null&&qt(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function ZS(i,s,l,u,g){switch(s){case"focusin":return Dr=ta(Dr,i,s,l,u,g),!0;case"dragenter":return Lr=ta(Lr,i,s,l,u,g),!0;case"mouseover":return Nr=ta(Nr,i,s,l,u,g),!0;case"pointerover":var x=g.pointerId;return Qo.set(x,ta(Qo.get(x)||null,i,s,l,u,g)),!0;case"gotpointercapture":return x=g.pointerId,ea.set(x,ta(ea.get(x)||null,i,s,l,u,g)),!0}return!1}function Em(i){var s=ps(i.target);if(s!==null){var l=Bn(s);if(l!==null){if(s=l.tag,s===13){if(s=js(l),s!==null){i.blockedOn=s,bi(i.priority,function(){Ti(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function hl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=ku(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var u=new l.constructor(l.type,l);Pe=u,l.target.dispatchEvent(u),Pe=null}else return s=ma(l),s!==null&&qt(s),i.blockedOn=l,!1;s.shift()}return!0}function wm(i,s,l){hl(i)&&l.delete(s)}function JS(){Wi=!1,Dr!==null&&hl(Dr)&&(Dr=null),Lr!==null&&hl(Lr)&&(Lr=null),Nr!==null&&hl(Nr)&&(Nr=null),Qo.forEach(wm),ea.forEach(wm)}function na(i,s){i.blockedOn===s&&(i.blockedOn=null,Wi||(Wi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,JS)))}function ia(i){function s(g){return na(g,i)}if(0<hs.length){na(hs[0],i);for(var l=1;l<hs.length;l++){var u=hs[l];u.blockedOn===i&&(u.blockedOn=null)}}for(Dr!==null&&na(Dr,i),Lr!==null&&na(Lr,i),Nr!==null&&na(Nr,i),Qo.forEach(s),ea.forEach(s),l=0;l<Ir.length;l++)u=Ir[l],u.blockedOn===i&&(u.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)Em(l),l.blockedOn===null&&Ir.shift()}var Ys=T.ReactCurrentBatchConfig,pl=!0;function QS(i,s,l,u){var g=yt,x=Ys.transition;Ys.transition=null;try{yt=1,Fu(i,s,l,u)}finally{yt=g,Ys.transition=x}}function eM(i,s,l,u){var g=yt,x=Ys.transition;Ys.transition=null;try{yt=4,Fu(i,s,l,u)}finally{yt=g,Ys.transition=x}}function Fu(i,s,l,u){if(pl){var g=ku(i,s,l,u);if(g===null)ef(i,s,u,ml,l),Mm(i,u);else if(ZS(g,i,s,l,u))u.stopPropagation();else if(Mm(i,u),s&4&&-1<KS.indexOf(i)){for(;g!==null;){var x=ma(g);if(x!==null&&kt(x),x=ku(i,s,l,u),x===null&&ef(i,s,u,ml,l),x===g)break;g=x}g!==null&&u.stopPropagation()}else ef(i,s,u,null,l)}}var ml=null;function ku(i,s,l,u){if(ml=null,i=We(u),i=ps(i),i!==null)if(s=Bn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=js(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ml=i,null}function Tm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uu()){case Jo:return 1;case R:return 4;case K:case ue:return 16;case oe:return 536870912;default:return 16}default:return 16}}var Ur=null,Ou=null,gl=null;function bm(){if(gl)return gl;var i,s=Ou,l=s.length,u,g="value"in Ur?Ur.value:Ur.textContent,x=g.length;for(i=0;i<l&&s[i]===g[i];i++);var A=l-i;for(u=1;u<=A&&s[l-u]===g[x-u];u++);return gl=g.slice(i,1<u?1-u:void 0)}function vl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function xl(){return!0}function Am(){return!1}function oi(i){function s(l,u,g,x,A){this._reactName=l,this._targetInst=g,this.type=u,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var V in i)i.hasOwnProperty(V)&&(l=i[V],this[V]=l?l(x):x[V]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?xl:Am,this.isPropagationStopped=Am,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),s}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=oi(qs),ra=re({},qs,{view:0,detail:0}),tM=oi(ra),Vu,zu,sa,yl=re({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==sa&&(sa&&i.type==="mousemove"?(Vu=i.screenX-sa.screenX,zu=i.screenY-sa.screenY):zu=Vu=0,sa=i),Vu)},movementY:function(i){return"movementY"in i?i.movementY:zu}}),Cm=oi(yl),nM=re({},yl,{dataTransfer:0}),iM=oi(nM),rM=re({},ra,{relatedTarget:0}),Hu=oi(rM),sM=re({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),oM=oi(sM),aM=re({},qs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),lM=oi(aM),cM=re({},qs,{data:0}),Rm=oi(cM),uM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=dM[i])?!!s[i]:!1}function Gu(){return hM}var pM=re({},ra,{key:function(i){if(i.key){var s=uM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=vl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?fM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(i){return i.type==="keypress"?vl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?vl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),mM=oi(pM),gM=re({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=oi(gM),vM=re({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),xM=oi(vM),yM=re({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_M=oi(yM),SM=re({},yl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),MM=oi(SM),EM=[9,13,27,32],Wu=f&&"CompositionEvent"in window,oa=null;f&&"documentMode"in document&&(oa=document.documentMode);var wM=f&&"TextEvent"in window&&!oa,Dm=f&&(!Wu||oa&&8<oa&&11>=oa),Lm=" ",Nm=!1;function Im(i,s){switch(i){case"keyup":return EM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var $s=!1;function TM(i,s){switch(i){case"compositionend":return Um(s);case"keypress":return s.which!==32?null:(Nm=!0,Lm);case"textInput":return i=s.data,i===Lm&&Nm?null:i;default:return null}}function bM(i,s){if($s)return i==="compositionend"||!Wu&&Im(i,s)?(i=bm(),gl=Ou=Ur=null,$s=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Dm&&s.locale!=="ko"?null:s.data;default:return null}}var AM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!AM[i.type]:s==="textarea"}function km(i,s,l,u){ie(u),s=wl(s,"onChange"),0<s.length&&(l=new Bu("onChange","change",null,l,u),i.push({event:l,listeners:s}))}var aa=null,la=null;function CM(i){tg(i,0)}function _l(i){var s=eo(i);if(Rt(s))return i}function RM(i,s){if(i==="change")return s}var Om=!1;if(f){var Xu;if(f){var ju="oninput"in document;if(!ju){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),ju=typeof Bm.oninput=="function"}Xu=ju}else Xu=!1;Om=Xu&&(!document.documentMode||9<document.documentMode)}function Vm(){aa&&(aa.detachEvent("onpropertychange",zm),la=aa=null)}function zm(i){if(i.propertyName==="value"&&_l(la)){var s=[];km(s,la,i,We(i)),Ue(CM,s)}}function PM(i,s,l){i==="focusin"?(Vm(),aa=s,la=l,aa.attachEvent("onpropertychange",zm)):i==="focusout"&&Vm()}function DM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return _l(la)}function LM(i,s){if(i==="click")return _l(s)}function NM(i,s){if(i==="input"||i==="change")return _l(s)}function IM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ai=typeof Object.is=="function"?Object.is:IM;function ca(i,s){if(Ai(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var g=l[u];if(!h.call(s,g)||!Ai(i[g],s[g]))return!1}return!0}function Hm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Gm(i,s){var l=Hm(i);i=0;for(var u;l;){if(l.nodeType===3){if(u=i+l.textContent.length,i<=s&&u>=s)return{node:l,offset:s-i};i=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Hm(l)}}function Wm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Wm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Xm(){for(var i=window,s=ct();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ct(i.document)}return s}function Yu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function UM(i){var s=Xm(),l=i.focusedElem,u=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Wm(l.ownerDocument.documentElement,l)){if(u!==null&&Yu(l)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,x=Math.min(u.start,g);u=u.end===void 0?x:Math.min(u.end,g),!i.extend&&x>u&&(g=u,u=x,x=g),g=Gm(l,x);var A=Gm(l,u);g&&A&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),x>u?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var FM=f&&"documentMode"in document&&11>=document.documentMode,Ks=null,qu=null,ua=null,$u=!1;function jm(i,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;$u||Ks==null||Ks!==ct(u)||(u=Ks,"selectionStart"in u&&Yu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ua&&ca(ua,u)||(ua=u,u=wl(qu,"onSelect"),0<u.length&&(s=new Bu("onSelect","select",null,s,l),i.push({event:s,listeners:u}),s.target=Ks)))}function Sl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Zs={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Ku={},Ym={};f&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Ml(i){if(Ku[i])return Ku[i];if(!Zs[i])return i;var s=Zs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Ym)return Ku[i]=s[l];return i}var qm=Ml("animationend"),$m=Ml("animationiteration"),Km=Ml("animationstart"),Zm=Ml("transitionend"),Jm=new Map,Qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(i,s){Jm.set(i,s),a(s,[i])}for(var Zu=0;Zu<Qm.length;Zu++){var Ju=Qm[Zu],kM=Ju.toLowerCase(),OM=Ju[0].toUpperCase()+Ju.slice(1);Fr(kM,"on"+OM)}Fr(qm,"onAnimationEnd"),Fr($m,"onAnimationIteration"),Fr(Km,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Zm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BM=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function eg(i,s,l){var u=i.type||"unknown-event";i.currentTarget=l,ul(u,s,void 0,i),i.currentTarget=null}function tg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var u=i[l],g=u.event;u=u.listeners;e:{var x=void 0;if(s)for(var A=u.length-1;0<=A;A--){var V=u[A],H=V.instance,fe=V.currentTarget;if(V=V.listener,H!==x&&g.isPropagationStopped())break e;eg(g,V,fe),x=H}else for(A=0;A<u.length;A++){if(V=u[A],H=V.instance,fe=V.currentTarget,V=V.listener,H!==x&&g.isPropagationStopped())break e;eg(g,V,fe),x=H}}}if(Pr)throw i=us,Pr=!1,us=null,i}function $t(i,s){var l=s[af];l===void 0&&(l=s[af]=new Set);var u=i+"__bubble";l.has(u)||(ng(s,i,2,!1),l.add(u))}function Qu(i,s,l){var u=0;s&&(u|=4),ng(l,i,u,s)}var El="_reactListening"+Math.random().toString(36).slice(2);function da(i){if(!i[El]){i[El]=!0,r.forEach(function(l){l!=="selectionchange"&&(BM.has(l)||Qu(l,!1,i),Qu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[El]||(s[El]=!0,Qu("selectionchange",!1,s))}}function ng(i,s,l,u){switch(Tm(s)){case 1:var g=QS;break;case 4:g=eM;break;default:g=Fu}l=g.bind(null,s,l,i),g=void 0,!Et||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),u?g!==void 0?i.addEventListener(s,l,{capture:!0,passive:g}):i.addEventListener(s,l,!0):g!==void 0?i.addEventListener(s,l,{passive:g}):i.addEventListener(s,l,!1)}function ef(i,s,l,u,g){var x=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var V=u.stateNode.containerInfo;if(V===g||V.nodeType===8&&V.parentNode===g)break;if(A===4)for(A=u.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===g||H.nodeType===8&&H.parentNode===g))return;A=A.return}for(;V!==null;){if(A=ps(V),A===null)return;if(H=A.tag,H===5||H===6){u=x=A;continue e}V=V.parentNode}}u=u.return}Ue(function(){var fe=x,_e=We(l),we=[];e:{var ye=Jm.get(i);if(ye!==void 0){var ze=Bu,$e=i;switch(i){case"keypress":if(vl(l)===0)break e;case"keydown":case"keyup":ze=mM;break;case"focusin":$e="focus",ze=Hu;break;case"focusout":$e="blur",ze=Hu;break;case"beforeblur":case"afterblur":ze=Hu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=iM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=xM;break;case qm:case $m:case Km:ze=oM;break;case Zm:ze=_M;break;case"scroll":ze=tM;break;case"wheel":ze=MM;break;case"copy":case"cut":case"paste":ze=lM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Pm}var Qe=(s&4)!==0,an=!Qe&&i==="scroll",ne=Qe?ye!==null?ye+"Capture":null:ye;Qe=[];for(var Y=fe,le;Y!==null;){le=Y;var Ae=le.stateNode;if(le.tag===5&&Ae!==null&&(le=Ae,ne!==null&&(Ae=pt(Y,ne),Ae!=null&&Qe.push(ha(Y,Ae,le)))),an)break;Y=Y.return}0<Qe.length&&(ye=new ze(ye,$e,null,l,_e),we.push({event:ye,listeners:Qe}))}}if((s&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",ze=i==="mouseout"||i==="pointerout",ye&&l!==Pe&&($e=l.relatedTarget||l.fromElement)&&(ps($e)||$e[ur]))break e;if((ze||ye)&&(ye=_e.window===_e?_e:(ye=_e.ownerDocument)?ye.defaultView||ye.parentWindow:window,ze?($e=l.relatedTarget||l.toElement,ze=fe,$e=$e?ps($e):null,$e!==null&&(an=Bn($e),$e!==an||$e.tag!==5&&$e.tag!==6)&&($e=null)):(ze=null,$e=fe),ze!==$e)){if(Qe=Cm,Ae="onMouseLeave",ne="onMouseEnter",Y="mouse",(i==="pointerout"||i==="pointerover")&&(Qe=Pm,Ae="onPointerLeave",ne="onPointerEnter",Y="pointer"),an=ze==null?ye:eo(ze),le=$e==null?ye:eo($e),ye=new Qe(Ae,Y+"leave",ze,l,_e),ye.target=an,ye.relatedTarget=le,Ae=null,ps(_e)===fe&&(Qe=new Qe(ne,Y+"enter",$e,l,_e),Qe.target=le,Qe.relatedTarget=an,Ae=Qe),an=Ae,ze&&$e)t:{for(Qe=ze,ne=$e,Y=0,le=Qe;le;le=Js(le))Y++;for(le=0,Ae=ne;Ae;Ae=Js(Ae))le++;for(;0<Y-le;)Qe=Js(Qe),Y--;for(;0<le-Y;)ne=Js(ne),le--;for(;Y--;){if(Qe===ne||ne!==null&&Qe===ne.alternate)break t;Qe=Js(Qe),ne=Js(ne)}Qe=null}else Qe=null;ze!==null&&ig(we,ye,ze,Qe,!1),$e!==null&&an!==null&&ig(we,an,$e,Qe,!0)}}e:{if(ye=fe?eo(fe):window,ze=ye.nodeName&&ye.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ye.type==="file")var tt=RM;else if(Fm(ye))if(Om)tt=NM;else{tt=DM;var rt=PM}else(ze=ye.nodeName)&&ze.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(tt=LM);if(tt&&(tt=tt(i,fe))){km(we,tt,l,_e);break e}rt&&rt(i,ye,fe),i==="focusout"&&(rt=ye._wrapperState)&&rt.controlled&&ye.type==="number"&&Lt(ye,"number",ye.value)}switch(rt=fe?eo(fe):window,i){case"focusin":(Fm(rt)||rt.contentEditable==="true")&&(Ks=rt,qu=fe,ua=null);break;case"focusout":ua=qu=Ks=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,jm(we,l,_e);break;case"selectionchange":if(FM)break;case"keydown":case"keyup":jm(we,l,_e)}var st;if(Wu)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else $s?Im(i,l)&&(lt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(Dm&&l.locale!=="ko"&&($s||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&$s&&(st=bm()):(Ur=_e,Ou="value"in Ur?Ur.value:Ur.textContent,$s=!0)),rt=wl(fe,lt),0<rt.length&&(lt=new Rm(lt,i,null,l,_e),we.push({event:lt,listeners:rt}),st?lt.data=st:(st=Um(l),st!==null&&(lt.data=st)))),(st=wM?TM(i,l):bM(i,l))&&(fe=wl(fe,"onBeforeInput"),0<fe.length&&(_e=new Rm("onBeforeInput","beforeinput",null,l,_e),we.push({event:_e,listeners:fe}),_e.data=st))}tg(we,s)})}function ha(i,s,l){return{instance:i,listener:s,currentTarget:l}}function wl(i,s){for(var l=s+"Capture",u=[];i!==null;){var g=i,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=pt(i,l),x!=null&&u.unshift(ha(i,x,g)),x=pt(i,s),x!=null&&u.push(ha(i,x,g))),i=i.return}return u}function Js(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ig(i,s,l,u,g){for(var x=s._reactName,A=[];l!==null&&l!==u;){var V=l,H=V.alternate,fe=V.stateNode;if(H!==null&&H===u)break;V.tag===5&&fe!==null&&(V=fe,g?(H=pt(l,x),H!=null&&A.unshift(ha(l,H,V))):g||(H=pt(l,x),H!=null&&A.push(ha(l,H,V)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var VM=/\r\n?/g,zM=/\u0000|\uFFFD/g;function rg(i){return(typeof i=="string"?i:""+i).replace(VM,`
`).replace(zM,"")}function Tl(i,s,l){if(s=rg(s),rg(i)!==s&&l)throw Error(t(425))}function bl(){}var tf=null,nf=null;function rf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,HM=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,GM=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(i){return sg.resolve(null).then(i).catch(WM)}:sf;function WM(i){setTimeout(function(){throw i})}function of(i,s){var l=s,u=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(u===0){i.removeChild(g),ia(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=g}while(l);ia(s)}function kr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function og(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Xi="__reactFiber$"+Qs,pa="__reactProps$"+Qs,ur="__reactContainer$"+Qs,af="__reactEvents$"+Qs,XM="__reactListeners$"+Qs,jM="__reactHandles$"+Qs;function ps(i){var s=i[Xi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ur]||l[Xi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=og(i);i!==null;){if(l=i[Xi])return l;i=og(i)}return s}i=l,l=i.parentNode}return null}function ma(i){return i=i[Xi]||i[ur],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function eo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Al(i){return i[pa]||null}var lf=[],to=-1;function Or(i){return{current:i}}function Kt(i){0>to||(i.current=lf[to],lf[to]=null,to--)}function Xt(i,s){to++,lf[to]=i.current,i.current=s}var Br={},Ln=Or(Br),Kn=Or(!1),ms=Br;function no(i,s){var l=i.type.contextTypes;if(!l)return Br;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=s[x];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Zn(i){return i=i.childContextTypes,i!=null}function Cl(){Kt(Kn),Kt(Ln)}function ag(i,s,l){if(Ln.current!==Br)throw Error(t(168));Xt(Ln,s),Xt(Kn,l)}function lg(i,s,l){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var g in u)if(!(g in s))throw Error(t(108,ge(i)||"Unknown",g));return re({},l,u)}function Rl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Br,ms=Ln.current,Xt(Ln,i),Xt(Kn,Kn.current),!0}function cg(i,s,l){var u=i.stateNode;if(!u)throw Error(t(169));l?(i=lg(i,s,ms),u.__reactInternalMemoizedMergedChildContext=i,Kt(Kn),Kt(Ln),Xt(Ln,i)):Kt(Kn),Xt(Kn,l)}var fr=null,Pl=!1,cf=!1;function ug(i){fr===null?fr=[i]:fr.push(i)}function YM(i){Pl=!0,ug(i)}function Vr(){if(!cf&&fr!==null){cf=!0;var i=0,s=yt;try{var l=fr;for(yt=1;i<l.length;i++){var u=l[i];do u=u(!0);while(u!==null)}fr=null,Pl=!1}catch(g){throw fr!==null&&(fr=fr.slice(i+1)),ds(Jo,Vr),g}finally{yt=s,cf=!1}}return null}var io=[],ro=0,Dl=null,Ll=0,hi=[],pi=0,gs=null,dr=1,hr="";function vs(i,s){io[ro++]=Ll,io[ro++]=Dl,Dl=i,Ll=s}function fg(i,s,l){hi[pi++]=dr,hi[pi++]=hr,hi[pi++]=gs,gs=i;var u=dr;i=hr;var g=32-Re(u)-1;u&=~(1<<g),l+=1;var x=32-Re(s)+g;if(30<x){var A=g-g%5;x=(u&(1<<A)-1).toString(32),u>>=A,g-=A,dr=1<<32-Re(s)+g|l<<g|u,hr=x+i}else dr=1<<x|l<<g|u,hr=i}function uf(i){i.return!==null&&(vs(i,1),fg(i,1,0))}function ff(i){for(;i===Dl;)Dl=io[--ro],io[ro]=null,Ll=io[--ro],io[ro]=null;for(;i===gs;)gs=hi[--pi],hi[pi]=null,hr=hi[--pi],hi[pi]=null,dr=hi[--pi],hi[pi]=null}var ai=null,li=null,Qt=!1,Ci=null;function dg(i,s){var l=xi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function hg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ai=i,li=kr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ai=i,li=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=gs!==null?{id:dr,overflow:hr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=xi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ai=i,li=null,!0):!1;default:return!1}}function df(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hf(i){if(Qt){var s=li;if(s){var l=s;if(!hg(i,s)){if(df(i))throw Error(t(418));s=kr(l.nextSibling);var u=ai;s&&hg(i,s)?dg(u,l):(i.flags=i.flags&-4097|2,Qt=!1,ai=i)}}else{if(df(i))throw Error(t(418));i.flags=i.flags&-4097|2,Qt=!1,ai=i}}}function pg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ai=i}function Nl(i){if(i!==ai)return!1;if(!Qt)return pg(i),Qt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!rf(i.type,i.memoizedProps)),s&&(s=li)){if(df(i))throw mg(),Error(t(418));for(;s;)dg(i,s),s=kr(s.nextSibling)}if(pg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){li=kr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}li=null}}else li=ai?kr(i.stateNode.nextSibling):null;return!0}function mg(){for(var i=li;i;)i=kr(i.nextSibling)}function so(){li=ai=null,Qt=!1}function pf(i){Ci===null?Ci=[i]:Ci.push(i)}var qM=T.ReactCurrentBatchConfig;function ga(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,i));var g=u,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var V=g.refs;A===null?delete V[x]:V[x]=A},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Il(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function gg(i){var s=i._init;return s(i._payload)}function vg(i){function s(ne,Y){if(i){var le=ne.deletions;le===null?(ne.deletions=[Y],ne.flags|=16):le.push(Y)}}function l(ne,Y){if(!i)return null;for(;Y!==null;)s(ne,Y),Y=Y.sibling;return null}function u(ne,Y){for(ne=new Map;Y!==null;)Y.key!==null?ne.set(Y.key,Y):ne.set(Y.index,Y),Y=Y.sibling;return ne}function g(ne,Y){return ne=qr(ne,Y),ne.index=0,ne.sibling=null,ne}function x(ne,Y,le){return ne.index=le,i?(le=ne.alternate,le!==null?(le=le.index,le<Y?(ne.flags|=2,Y):le):(ne.flags|=2,Y)):(ne.flags|=1048576,Y)}function A(ne){return i&&ne.alternate===null&&(ne.flags|=2),ne}function V(ne,Y,le,Ae){return Y===null||Y.tag!==6?(Y=sd(le,ne.mode,Ae),Y.return=ne,Y):(Y=g(Y,le),Y.return=ne,Y)}function H(ne,Y,le,Ae){var tt=le.type;return tt===I?_e(ne,Y,le.props.children,Ae,le.key):Y!==null&&(Y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&gg(tt)===Y.type)?(Ae=g(Y,le.props),Ae.ref=ga(ne,Y,le),Ae.return=ne,Ae):(Ae=rc(le.type,le.key,le.props,null,ne.mode,Ae),Ae.ref=ga(ne,Y,le),Ae.return=ne,Ae)}function fe(ne,Y,le,Ae){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==le.containerInfo||Y.stateNode.implementation!==le.implementation?(Y=od(le,ne.mode,Ae),Y.return=ne,Y):(Y=g(Y,le.children||[]),Y.return=ne,Y)}function _e(ne,Y,le,Ae,tt){return Y===null||Y.tag!==7?(Y=Ts(le,ne.mode,Ae,tt),Y.return=ne,Y):(Y=g(Y,le),Y.return=ne,Y)}function we(ne,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=sd(""+Y,ne.mode,le),Y.return=ne,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return le=rc(Y.type,Y.key,Y.props,null,ne.mode,le),le.ref=ga(ne,null,Y),le.return=ne,le;case D:return Y=od(Y,ne.mode,le),Y.return=ne,Y;case J:var Ae=Y._init;return we(ne,Ae(Y._payload),le)}if(Yt(Y)||te(Y))return Y=Ts(Y,ne.mode,le,null),Y.return=ne,Y;Il(ne,Y)}return null}function ye(ne,Y,le,Ae){var tt=Y!==null?Y.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return tt!==null?null:V(ne,Y,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case L:return le.key===tt?H(ne,Y,le,Ae):null;case D:return le.key===tt?fe(ne,Y,le,Ae):null;case J:return tt=le._init,ye(ne,Y,tt(le._payload),Ae)}if(Yt(le)||te(le))return tt!==null?null:_e(ne,Y,le,Ae,null);Il(ne,le)}return null}function ze(ne,Y,le,Ae,tt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ne=ne.get(le)||null,V(Y,ne,""+Ae,tt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case L:return ne=ne.get(Ae.key===null?le:Ae.key)||null,H(Y,ne,Ae,tt);case D:return ne=ne.get(Ae.key===null?le:Ae.key)||null,fe(Y,ne,Ae,tt);case J:var rt=Ae._init;return ze(ne,Y,le,rt(Ae._payload),tt)}if(Yt(Ae)||te(Ae))return ne=ne.get(le)||null,_e(Y,ne,Ae,tt,null);Il(Y,Ae)}return null}function $e(ne,Y,le,Ae){for(var tt=null,rt=null,st=Y,lt=Y=0,En=null;st!==null&&lt<le.length;lt++){st.index>lt?(En=st,st=null):En=st.sibling;var Nt=ye(ne,st,le[lt],Ae);if(Nt===null){st===null&&(st=En);break}i&&st&&Nt.alternate===null&&s(ne,st),Y=x(Nt,Y,lt),rt===null?tt=Nt:rt.sibling=Nt,rt=Nt,st=En}if(lt===le.length)return l(ne,st),Qt&&vs(ne,lt),tt;if(st===null){for(;lt<le.length;lt++)st=we(ne,le[lt],Ae),st!==null&&(Y=x(st,Y,lt),rt===null?tt=st:rt.sibling=st,rt=st);return Qt&&vs(ne,lt),tt}for(st=u(ne,st);lt<le.length;lt++)En=ze(st,ne,lt,le[lt],Ae),En!==null&&(i&&En.alternate!==null&&st.delete(En.key===null?lt:En.key),Y=x(En,Y,lt),rt===null?tt=En:rt.sibling=En,rt=En);return i&&st.forEach(function($r){return s(ne,$r)}),Qt&&vs(ne,lt),tt}function Qe(ne,Y,le,Ae){var tt=te(le);if(typeof tt!="function")throw Error(t(150));if(le=tt.call(le),le==null)throw Error(t(151));for(var rt=tt=null,st=Y,lt=Y=0,En=null,Nt=le.next();st!==null&&!Nt.done;lt++,Nt=le.next()){st.index>lt?(En=st,st=null):En=st.sibling;var $r=ye(ne,st,Nt.value,Ae);if($r===null){st===null&&(st=En);break}i&&st&&$r.alternate===null&&s(ne,st),Y=x($r,Y,lt),rt===null?tt=$r:rt.sibling=$r,rt=$r,st=En}if(Nt.done)return l(ne,st),Qt&&vs(ne,lt),tt;if(st===null){for(;!Nt.done;lt++,Nt=le.next())Nt=we(ne,Nt.value,Ae),Nt!==null&&(Y=x(Nt,Y,lt),rt===null?tt=Nt:rt.sibling=Nt,rt=Nt);return Qt&&vs(ne,lt),tt}for(st=u(ne,st);!Nt.done;lt++,Nt=le.next())Nt=ze(st,ne,lt,Nt.value,Ae),Nt!==null&&(i&&Nt.alternate!==null&&st.delete(Nt.key===null?lt:Nt.key),Y=x(Nt,Y,lt),rt===null?tt=Nt:rt.sibling=Nt,rt=Nt);return i&&st.forEach(function(A1){return s(ne,A1)}),Qt&&vs(ne,lt),tt}function an(ne,Y,le,Ae){if(typeof le=="object"&&le!==null&&le.type===I&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case L:e:{for(var tt=le.key,rt=Y;rt!==null;){if(rt.key===tt){if(tt=le.type,tt===I){if(rt.tag===7){l(ne,rt.sibling),Y=g(rt,le.props.children),Y.return=ne,ne=Y;break e}}else if(rt.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&gg(tt)===rt.type){l(ne,rt.sibling),Y=g(rt,le.props),Y.ref=ga(ne,rt,le),Y.return=ne,ne=Y;break e}l(ne,rt);break}else s(ne,rt);rt=rt.sibling}le.type===I?(Y=Ts(le.props.children,ne.mode,Ae,le.key),Y.return=ne,ne=Y):(Ae=rc(le.type,le.key,le.props,null,ne.mode,Ae),Ae.ref=ga(ne,Y,le),Ae.return=ne,ne=Ae)}return A(ne);case D:e:{for(rt=le.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===le.containerInfo&&Y.stateNode.implementation===le.implementation){l(ne,Y.sibling),Y=g(Y,le.children||[]),Y.return=ne,ne=Y;break e}else{l(ne,Y);break}else s(ne,Y);Y=Y.sibling}Y=od(le,ne.mode,Ae),Y.return=ne,ne=Y}return A(ne);case J:return rt=le._init,an(ne,Y,rt(le._payload),Ae)}if(Yt(le))return $e(ne,Y,le,Ae);if(te(le))return Qe(ne,Y,le,Ae);Il(ne,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,Y!==null&&Y.tag===6?(l(ne,Y.sibling),Y=g(Y,le),Y.return=ne,ne=Y):(l(ne,Y),Y=sd(le,ne.mode,Ae),Y.return=ne,ne=Y),A(ne)):l(ne,Y)}return an}var oo=vg(!0),xg=vg(!1),Ul=Or(null),Fl=null,ao=null,mf=null;function gf(){mf=ao=Fl=null}function vf(i){var s=Ul.current;Kt(Ul),i._currentValue=s}function xf(i,s,l){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===l)break;i=i.return}}function lo(i,s){Fl=i,mf=ao=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Jn=!0),i.firstContext=null)}function mi(i){var s=i._currentValue;if(mf!==i)if(i={context:i,memoizedValue:s,next:null},ao===null){if(Fl===null)throw Error(t(308));ao=i,Fl.dependencies={lanes:0,firstContext:i}}else ao=ao.next=i;return s}var xs=null;function yf(i){xs===null?xs=[i]:xs.push(i)}function yg(i,s,l,u){var g=s.interleaved;return g===null?(l.next=l,yf(s)):(l.next=g.next,g.next=l),s.interleaved=l,pr(i,u)}function pr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var zr=!1;function _f(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _g(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function mr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Hr(i,s,l){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Pt&2)!==0){var g=u.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s,pr(i,l)}return g=u.interleaved,g===null?(s.next=s,yf(u)):(s.next=g.next,g.next=s),u.interleaved=s,pr(i,l)}function kl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,$n(i,l)}}function Sg(i,s){var l=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?g=x=s:x=x.next=s}else g=x=s;l={baseState:u.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:u.shared,effects:u.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ol(i,s,l,u){var g=i.updateQueue;zr=!1;var x=g.firstBaseUpdate,A=g.lastBaseUpdate,V=g.shared.pending;if(V!==null){g.shared.pending=null;var H=V,fe=H.next;H.next=null,A===null?x=fe:A.next=fe,A=H;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,V=_e.lastBaseUpdate,V!==A&&(V===null?_e.firstBaseUpdate=fe:V.next=fe,_e.lastBaseUpdate=H))}if(x!==null){var we=g.baseState;A=0,_e=fe=H=null,V=x;do{var ye=V.lane,ze=V.eventTime;if((u&ye)===ye){_e!==null&&(_e=_e.next={eventTime:ze,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var $e=i,Qe=V;switch(ye=s,ze=l,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){we=$e.call(ze,we,ye);break e}we=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,ye=typeof $e=="function"?$e.call(ze,we,ye):$e,ye==null)break e;we=re({},we,ye);break e;case 2:zr=!0}}V.callback!==null&&V.lane!==0&&(i.flags|=64,ye=g.effects,ye===null?g.effects=[V]:ye.push(V))}else ze={eventTime:ze,lane:ye,tag:V.tag,payload:V.payload,callback:V.callback,next:null},_e===null?(fe=_e=ze,H=we):_e=_e.next=ze,A|=ye;if(V=V.next,V===null){if(V=g.shared.pending,V===null)break;ye=V,V=ye.next,ye.next=null,g.lastBaseUpdate=ye,g.shared.pending=null}}while(!0);if(_e===null&&(H=we),g.baseState=H,g.firstBaseUpdate=fe,g.lastBaseUpdate=_e,s=g.shared.interleaved,s!==null){g=s;do A|=g.lane,g=g.next;while(g!==s)}else x===null&&(g.shared.lanes=0);Ss|=A,i.lanes=A,i.memoizedState=we}}function Mg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],g=u.callback;if(g!==null){if(u.callback=null,u=l,typeof g!="function")throw Error(t(191,g));g.call(u)}}}var va={},ji=Or(va),xa=Or(va),ya=Or(va);function ys(i){if(i===va)throw Error(t(174));return i}function Sf(i,s){switch(Xt(ya,s),Xt(xa,i),Xt(ji,va),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=w(s,i)}Kt(ji),Xt(ji,s)}function co(){Kt(ji),Kt(xa),Kt(ya)}function Eg(i){ys(ya.current);var s=ys(ji.current),l=w(s,i.type);s!==l&&(Xt(xa,i),Xt(ji,l))}function Mf(i){xa.current===i&&(Kt(ji),Kt(xa))}var tn=Or(0);function Bl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ef=[];function wf(){for(var i=0;i<Ef.length;i++)Ef[i]._workInProgressVersionPrimary=null;Ef.length=0}var Vl=T.ReactCurrentDispatcher,Tf=T.ReactCurrentBatchConfig,_s=0,nn=null,mn=null,Sn=null,zl=!1,_a=!1,Sa=0,$M=0;function Nn(){throw Error(t(321))}function bf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ai(i[l],s[l]))return!1;return!0}function Af(i,s,l,u,g,x){if(_s=x,nn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Vl.current=i===null||i.memoizedState===null?QM:e1,i=l(u,g),_a){x=0;do{if(_a=!1,Sa=0,25<=x)throw Error(t(301));x+=1,Sn=mn=null,s.updateQueue=null,Vl.current=t1,i=l(u,g)}while(_a)}if(Vl.current=Wl,s=mn!==null&&mn.next!==null,_s=0,Sn=mn=nn=null,zl=!1,s)throw Error(t(300));return i}function Cf(){var i=Sa!==0;return Sa=0,i}function Yi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?nn.memoizedState=Sn=i:Sn=Sn.next=i,Sn}function gi(){if(mn===null){var i=nn.alternate;i=i!==null?i.memoizedState:null}else i=mn.next;var s=Sn===null?nn.memoizedState:Sn.next;if(s!==null)Sn=s,mn=i;else{if(i===null)throw Error(t(310));mn=i,i={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},Sn===null?nn.memoizedState=Sn=i:Sn=Sn.next=i}return Sn}function Ma(i,s){return typeof s=="function"?s(i):s}function Rf(i){var s=gi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=mn,g=u.baseQueue,x=l.pending;if(x!==null){if(g!==null){var A=g.next;g.next=x.next,x.next=A}u.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,u=u.baseState;var V=A=null,H=null,fe=x;do{var _e=fe.lane;if((_s&_e)===_e)H!==null&&(H=H.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:i(u,fe.action);else{var we={lane:_e,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};H===null?(V=H=we,A=u):H=H.next=we,nn.lanes|=_e,Ss|=_e}fe=fe.next}while(fe!==null&&fe!==x);H===null?A=u:H.next=V,Ai(u,s.memoizedState)||(Jn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=H,l.lastRenderedState=u}if(i=l.interleaved,i!==null){g=i;do x=g.lane,nn.lanes|=x,Ss|=x,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Pf(i){var s=gi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=l.dispatch,g=l.pending,x=s.memoizedState;if(g!==null){l.pending=null;var A=g=g.next;do x=i(x,A.action),A=A.next;while(A!==g);Ai(x,s.memoizedState)||(Jn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,u]}function wg(){}function Tg(i,s){var l=nn,u=gi(),g=s(),x=!Ai(u.memoizedState,g);if(x&&(u.memoizedState=g,Jn=!0),u=u.queue,Df(Cg.bind(null,l,u,i),[i]),u.getSnapshot!==s||x||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,Ea(9,Ag.bind(null,l,u,g,s),void 0,null),Mn===null)throw Error(t(349));(_s&30)!==0||bg(l,s,g)}return g}function bg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=nn.updateQueue,s===null?(s={lastEffect:null,stores:null},nn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Ag(i,s,l,u){s.value=l,s.getSnapshot=u,Rg(s)&&Pg(i)}function Cg(i,s,l){return l(function(){Rg(s)&&Pg(i)})}function Rg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ai(i,l)}catch{return!0}}function Pg(i){var s=pr(i,1);s!==null&&Li(s,i,1,-1)}function Dg(i){var s=Yi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:i},s.queue=i,i=i.dispatch=JM.bind(null,nn,i),[s.memoizedState,i]}function Ea(i,s,l,u){return i={tag:i,create:s,destroy:l,deps:u,next:null},s=nn.updateQueue,s===null?(s={lastEffect:null,stores:null},nn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(u=l.next,l.next=i,i.next=u,s.lastEffect=i)),i}function Lg(){return gi().memoizedState}function Hl(i,s,l,u){var g=Yi();nn.flags|=i,g.memoizedState=Ea(1|s,l,void 0,u===void 0?null:u)}function Gl(i,s,l,u){var g=gi();u=u===void 0?null:u;var x=void 0;if(mn!==null){var A=mn.memoizedState;if(x=A.destroy,u!==null&&bf(u,A.deps)){g.memoizedState=Ea(s,l,x,u);return}}nn.flags|=i,g.memoizedState=Ea(1|s,l,x,u)}function Ng(i,s){return Hl(8390656,8,i,s)}function Df(i,s){return Gl(2048,8,i,s)}function Ig(i,s){return Gl(4,2,i,s)}function Ug(i,s){return Gl(4,4,i,s)}function Fg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function kg(i,s,l){return l=l!=null?l.concat([i]):null,Gl(4,4,Fg.bind(null,s,i),l)}function Lf(){}function Og(i,s){var l=gi();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&bf(s,u[1])?u[0]:(l.memoizedState=[i,s],i)}function Bg(i,s){var l=gi();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&bf(s,u[1])?u[0]:(i=i(),l.memoizedState=[i,s],i)}function Vg(i,s,l){return(_s&21)===0?(i.baseState&&(i.baseState=!1,Jn=!0),i.memoizedState=l):(Ai(l,s)||(l=Ve(),nn.lanes|=l,Ss|=l,i.baseState=!0),s)}function KM(i,s){var l=yt;yt=l!==0&&4>l?l:4,i(!0);var u=Tf.transition;Tf.transition={};try{i(!1),s()}finally{yt=l,Tf.transition=u}}function zg(){return gi().memoizedState}function ZM(i,s,l){var u=jr(i);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Hg(i))Gg(s,l);else if(l=yg(i,s,l,u),l!==null){var g=zn();Li(l,i,u,g),Wg(l,s,u)}}function JM(i,s,l){var u=jr(i),g={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hg(i))Gg(s,g);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,V=x(A,l);if(g.hasEagerState=!0,g.eagerState=V,Ai(V,A)){var H=s.interleaved;H===null?(g.next=g,yf(s)):(g.next=H.next,H.next=g),s.interleaved=g;return}}catch{}finally{}l=yg(i,s,g,u),l!==null&&(g=zn(),Li(l,i,u,g),Wg(l,s,u))}}function Hg(i){var s=i.alternate;return i===nn||s!==null&&s===nn}function Gg(i,s){_a=zl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Wg(i,s,l){if((l&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,$n(i,l)}}var Wl={readContext:mi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},QM={readContext:mi,useCallback:function(i,s){return Yi().memoizedState=[i,s===void 0?null:s],i},useContext:mi,useEffect:Ng,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Hl(4194308,4,Fg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Hl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Hl(4,2,i,s)},useMemo:function(i,s){var l=Yi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var u=Yi();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=ZM.bind(null,nn,i),[u.memoizedState,i]},useRef:function(i){var s=Yi();return i={current:i},s.memoizedState=i},useState:Dg,useDebugValue:Lf,useDeferredValue:function(i){return Yi().memoizedState=i},useTransition:function(){var i=Dg(!1),s=i[0];return i=KM.bind(null,i[1]),Yi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var u=nn,g=Yi();if(Qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Mn===null)throw Error(t(349));(_s&30)!==0||bg(u,s,l)}g.memoizedState=l;var x={value:l,getSnapshot:s};return g.queue=x,Ng(Cg.bind(null,u,x,i),[i]),u.flags|=2048,Ea(9,Ag.bind(null,u,x,l,s),void 0,null),l},useId:function(){var i=Yi(),s=Mn.identifierPrefix;if(Qt){var l=hr,u=dr;l=(u&~(1<<32-Re(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=Sa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=$M++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},e1={readContext:mi,useCallback:Og,useContext:mi,useEffect:Df,useImperativeHandle:kg,useInsertionEffect:Ig,useLayoutEffect:Ug,useMemo:Bg,useReducer:Rf,useRef:Lg,useState:function(){return Rf(Ma)},useDebugValue:Lf,useDeferredValue:function(i){var s=gi();return Vg(s,mn.memoizedState,i)},useTransition:function(){var i=Rf(Ma)[0],s=gi().memoizedState;return[i,s]},useMutableSource:wg,useSyncExternalStore:Tg,useId:zg,unstable_isNewReconciler:!1},t1={readContext:mi,useCallback:Og,useContext:mi,useEffect:Df,useImperativeHandle:kg,useInsertionEffect:Ig,useLayoutEffect:Ug,useMemo:Bg,useReducer:Pf,useRef:Lg,useState:function(){return Pf(Ma)},useDebugValue:Lf,useDeferredValue:function(i){var s=gi();return mn===null?s.memoizedState=i:Vg(s,mn.memoizedState,i)},useTransition:function(){var i=Pf(Ma)[0],s=gi().memoizedState;return[i,s]},useMutableSource:wg,useSyncExternalStore:Tg,useId:zg,unstable_isNewReconciler:!1};function Ri(i,s){if(i&&i.defaultProps){s=re({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Nf(i,s,l,u){s=i.memoizedState,l=l(u,s),l=l==null?s:re({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Xl={isMounted:function(i){return(i=i._reactInternals)?Bn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var u=zn(),g=jr(i),x=mr(u,g);x.payload=s,l!=null&&(x.callback=l),s=Hr(i,x,g),s!==null&&(Li(s,i,g,u),kl(s,i,g))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var u=zn(),g=jr(i),x=mr(u,g);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Hr(i,x,g),s!==null&&(Li(s,i,g,u),kl(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=zn(),u=jr(i),g=mr(l,u);g.tag=2,s!=null&&(g.callback=s),s=Hr(i,g,u),s!==null&&(Li(s,i,u,l),kl(s,i,u))}};function Xg(i,s,l,u,g,x,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,x,A):s.prototype&&s.prototype.isPureReactComponent?!ca(l,u)||!ca(g,x):!0}function jg(i,s,l){var u=!1,g=Br,x=s.contextType;return typeof x=="object"&&x!==null?x=mi(x):(g=Zn(s)?ms:Ln.current,u=s.contextTypes,x=(u=u!=null)?no(i,g):Br),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Xl,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=x),s}function Yg(i,s,l,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==i&&Xl.enqueueReplaceState(s,s.state,null)}function If(i,s,l,u){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},_f(i);var x=s.contextType;typeof x=="object"&&x!==null?g.context=mi(x):(x=Zn(s)?ms:Ln.current,g.context=no(i,x)),g.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Nf(i,s,x,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Xl.enqueueReplaceState(g,g.state,null),Ol(i,l,g,u),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function uo(i,s){try{var l="",u=s;do l+=Ee(u),u=u.return;while(u);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:g,digest:null}}function Uf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Ff(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var n1=typeof WeakMap=="function"?WeakMap:Map;function qg(i,s,l){l=mr(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){Jl||(Jl=!0,Zf=u),Ff(i,s)},l}function $g(i,s,l){l=mr(-1,l),l.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var g=s.value;l.payload=function(){return u(g)},l.callback=function(){Ff(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Ff(i,s),typeof u!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Kg(i,s,l){var u=i.pingCache;if(u===null){u=i.pingCache=new n1;var g=new Set;u.set(s,g)}else g=u.get(s),g===void 0&&(g=new Set,u.set(s,g));g.has(l)||(g.add(l),i=g1.bind(null,i,s,l),s.then(i,i))}function Zg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Jg(i,s,l,u,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=mr(-1,1),s.tag=2,Hr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var i1=T.ReactCurrentOwner,Jn=!1;function Vn(i,s,l,u){s.child=i===null?xg(s,null,l,u):oo(s,i.child,l,u)}function Qg(i,s,l,u,g){l=l.render;var x=s.ref;return lo(s,g),u=Af(i,s,l,u,x,g),l=Cf(),i!==null&&!Jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,gr(i,s,g)):(Qt&&l&&uf(s),s.flags|=1,Vn(i,s,u,g),s.child)}function e0(i,s,l,u,g){if(i===null){var x=l.type;return typeof x=="function"&&!rd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,t0(i,s,x,u,g)):(i=rc(l.type,null,u,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&g)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:ca,l(A,u)&&i.ref===s.ref)return gr(i,s,g)}return s.flags|=1,i=qr(x,u),i.ref=s.ref,i.return=s,s.child=i}function t0(i,s,l,u,g){if(i!==null){var x=i.memoizedProps;if(ca(x,u)&&i.ref===s.ref)if(Jn=!1,s.pendingProps=u=x,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Jn=!0);else return s.lanes=i.lanes,gr(i,s,g)}return kf(i,s,l,u,g)}function n0(i,s,l){var u=s.pendingProps,g=u.children,x=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(ho,ci),ci|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Xt(ho,ci),ci|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,Xt(ho,ci),ci|=u}else x!==null?(u=x.baseLanes|l,s.memoizedState=null):u=l,Xt(ho,ci),ci|=u;return Vn(i,s,g,l),s.child}function i0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function kf(i,s,l,u,g){var x=Zn(l)?ms:Ln.current;return x=no(s,x),lo(s,g),l=Af(i,s,l,u,x,g),u=Cf(),i!==null&&!Jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,gr(i,s,g)):(Qt&&u&&uf(s),s.flags|=1,Vn(i,s,l,g),s.child)}function r0(i,s,l,u,g){if(Zn(l)){var x=!0;Rl(s)}else x=!1;if(lo(s,g),s.stateNode===null)Yl(i,s),jg(s,l,u),If(s,l,u,g),u=!0;else if(i===null){var A=s.stateNode,V=s.memoizedProps;A.props=V;var H=A.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=mi(fe):(fe=Zn(l)?ms:Ln.current,fe=no(s,fe));var _e=l.getDerivedStateFromProps,we=typeof _e=="function"||typeof A.getSnapshotBeforeUpdate=="function";we||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(V!==u||H!==fe)&&Yg(s,A,u,fe),zr=!1;var ye=s.memoizedState;A.state=ye,Ol(s,u,A,g),H=s.memoizedState,V!==u||ye!==H||Kn.current||zr?(typeof _e=="function"&&(Nf(s,l,_e,u),H=s.memoizedState),(V=zr||Xg(s,l,V,u,ye,H,fe))?(we||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=H),A.props=u,A.state=H,A.context=fe,u=V):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,_g(i,s),V=s.memoizedProps,fe=s.type===s.elementType?V:Ri(s.type,V),A.props=fe,we=s.pendingProps,ye=A.context,H=l.contextType,typeof H=="object"&&H!==null?H=mi(H):(H=Zn(l)?ms:Ln.current,H=no(s,H));var ze=l.getDerivedStateFromProps;(_e=typeof ze=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(V!==we||ye!==H)&&Yg(s,A,u,H),zr=!1,ye=s.memoizedState,A.state=ye,Ol(s,u,A,g);var $e=s.memoizedState;V!==we||ye!==$e||Kn.current||zr?(typeof ze=="function"&&(Nf(s,l,ze,u),$e=s.memoizedState),(fe=zr||Xg(s,l,fe,u,ye,$e,H)||!1)?(_e||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,$e,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,$e,H)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||V===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=$e),A.props=u,A.state=$e,A.context=H,u=fe):(typeof A.componentDidUpdate!="function"||V===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),u=!1)}return Of(i,s,l,u,x,g)}function Of(i,s,l,u,g,x){i0(i,s);var A=(s.flags&128)!==0;if(!u&&!A)return g&&cg(s,l,!1),gr(i,s,x);u=s.stateNode,i1.current=s;var V=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&A?(s.child=oo(s,i.child,null,x),s.child=oo(s,null,V,x)):Vn(i,s,V,x),s.memoizedState=u.state,g&&cg(s,l,!0),s.child}function s0(i){var s=i.stateNode;s.pendingContext?ag(i,s.pendingContext,s.pendingContext!==s.context):s.context&&ag(i,s.context,!1),Sf(i,s.containerInfo)}function o0(i,s,l,u,g){return so(),pf(g),s.flags|=256,Vn(i,s,l,u),s.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function Vf(i){return{baseLanes:i,cachePool:null,transitions:null}}function a0(i,s,l){var u=s.pendingProps,g=tn.current,x=!1,A=(s.flags&128)!==0,V;if((V=A)||(V=i!==null&&i.memoizedState===null?!1:(g&2)!==0),V?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Xt(tn,g&1),i===null)return hf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,i=u.fallback,x?(u=s.mode,x=s.child,A={mode:"hidden",children:A},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=sc(A,u,0,null),i=Ts(i,u,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Vf(l),s.memoizedState=Bf,i):zf(s,A));if(g=i.memoizedState,g!==null&&(V=g.dehydrated,V!==null))return r1(i,s,A,u,V,g,l);if(x){x=u.fallback,A=s.mode,g=i.child,V=g.sibling;var H={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==g?(u=s.child,u.childLanes=0,u.pendingProps=H,s.deletions=null):(u=qr(g,H),u.subtreeFlags=g.subtreeFlags&14680064),V!==null?x=qr(V,x):(x=Ts(x,A,l,null),x.flags|=2),x.return=s,u.return=s,u.sibling=x,s.child=u,u=x,x=s.child,A=i.child.memoizedState,A=A===null?Vf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=i.childLanes&~l,s.memoizedState=Bf,u}return x=i.child,i=x.sibling,u=qr(x,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=u,s.memoizedState=null,u}function zf(i,s){return s=sc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function jl(i,s,l,u){return u!==null&&pf(u),oo(s,i.child,null,l),i=zf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function r1(i,s,l,u,g,x,A){if(l)return s.flags&256?(s.flags&=-257,u=Uf(Error(t(422))),jl(i,s,A,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=u.fallback,g=s.mode,u=sc({mode:"visible",children:u.children},g,0,null),x=Ts(x,g,A,null),x.flags|=2,u.return=s,x.return=s,u.sibling=x,s.child=u,(s.mode&1)!==0&&oo(s,i.child,null,A),s.child.memoizedState=Vf(A),s.memoizedState=Bf,x);if((s.mode&1)===0)return jl(i,s,A,null);if(g.data==="$!"){if(u=g.nextSibling&&g.nextSibling.dataset,u)var V=u.dgst;return u=V,x=Error(t(419)),u=Uf(x,u,void 0),jl(i,s,A,u)}if(V=(A&i.childLanes)!==0,Jn||V){if(u=Mn,u!==null){switch(A&-A){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(u.suspendedLanes|A))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,pr(i,g),Li(u,i,g,-1))}return id(),u=Uf(Error(t(421))),jl(i,s,A,u)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=v1.bind(null,i),g._reactRetry=s,null):(i=x.treeContext,li=kr(g.nextSibling),ai=s,Qt=!0,Ci=null,i!==null&&(hi[pi++]=dr,hi[pi++]=hr,hi[pi++]=gs,dr=i.id,hr=i.overflow,gs=s),s=zf(s,u.children),s.flags|=4096,s)}function l0(i,s,l){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),xf(i.return,s,l)}function Hf(i,s,l,u,g){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:g}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=g)}function c0(i,s,l){var u=s.pendingProps,g=u.revealOrder,x=u.tail;if(Vn(i,s,u.children,l),u=tn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&l0(i,l,s);else if(i.tag===19)l0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(Xt(tn,u),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)i=l.alternate,i!==null&&Bl(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),Hf(s,!1,g,l,x);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Bl(i)===null){s.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}Hf(s,!0,l,null,x);break;case"together":Hf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Yl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function gr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ss|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=qr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=qr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function s1(i,s,l){switch(s.tag){case 3:s0(s),so();break;case 5:Eg(s);break;case 1:Zn(s.type)&&Rl(s);break;case 4:Sf(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,g=s.memoizedProps.value;Xt(Ul,u._currentValue),u._currentValue=g;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Xt(tn,tn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?a0(i,s,l):(Xt(tn,tn.current&1),i=gr(i,s,l),i!==null?i.sibling:null);Xt(tn,tn.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(i.flags&128)!==0){if(u)return c0(i,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Xt(tn,tn.current),u)break;return null;case 22:case 23:return s.lanes=0,n0(i,s,l)}return gr(i,s,l)}var u0,Gf,f0,d0;u0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Gf=function(){},f0=function(i,s,l,u){var g=i.memoizedProps;if(g!==u){i=s.stateNode,ys(ji.current);var x=null;switch(l){case"input":g=Mt(i,g),u=Mt(i,u),x=[];break;case"select":g=re({},g,{value:void 0}),u=re({},u,{value:void 0}),x=[];break;case"textarea":g=xt(i,g),u=xt(i,u),x=[];break;default:typeof g.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=bl)}qe(l,u);var A;l=null;for(fe in g)if(!u.hasOwnProperty(fe)&&g.hasOwnProperty(fe)&&g[fe]!=null)if(fe==="style"){var V=g[fe];for(A in V)V.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?x||(x=[]):(x=x||[]).push(fe,null));for(fe in u){var H=u[fe];if(V=g!=null?g[fe]:void 0,u.hasOwnProperty(fe)&&H!==V&&(H!=null||V!=null))if(fe==="style")if(V){for(A in V)!V.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in H)H.hasOwnProperty(A)&&V[A]!==H[A]&&(l||(l={}),l[A]=H[A])}else l||(x||(x=[]),x.push(fe,l)),l=H;else fe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,V=V?V.__html:void 0,H!=null&&V!==H&&(x=x||[]).push(fe,H)):fe==="children"?typeof H!="string"&&typeof H!="number"||(x=x||[]).push(fe,""+H):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(H!=null&&fe==="onScroll"&&$t("scroll",i),x||V===H||(x=[])):(x=x||[]).push(fe,H))}l&&(x=x||[]).push("style",l);var fe=x;(s.updateQueue=fe)&&(s.flags|=4)}},d0=function(i,s,l,u){l!==u&&(s.flags|=4)};function wa(i,s){if(!Qt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function In(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,u=0;if(s)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,u|=g.subtreeFlags&14680064,u|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,u|=g.subtreeFlags,u|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=u,i.childLanes=l,s}function o1(i,s,l){var u=s.pendingProps;switch(ff(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(s),null;case 1:return Zn(s.type)&&Cl(),In(s),null;case 3:return u=s.stateNode,co(),Kt(Kn),Kt(Ln),wf(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(Nl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ci!==null&&(ed(Ci),Ci=null))),Gf(i,s),In(s),null;case 5:Mf(s);var g=ys(ya.current);if(l=s.type,i!==null&&s.stateNode!=null)f0(i,s,l,u,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return In(s),null}if(i=ys(ji.current),Nl(s)){u=s.stateNode,l=s.type;var x=s.memoizedProps;switch(u[Xi]=s,u[pa]=x,i=(s.mode&1)!==0,l){case"dialog":$t("cancel",u),$t("close",u);break;case"iframe":case"object":case"embed":$t("load",u);break;case"video":case"audio":for(g=0;g<fa.length;g++)$t(fa[g],u);break;case"source":$t("error",u);break;case"img":case"image":case"link":$t("error",u),$t("load",u);break;case"details":$t("toggle",u);break;case"input":St(u,x),$t("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},$t("invalid",u);break;case"textarea":X(u,x),$t("invalid",u)}qe(l,x),g=null;for(var A in x)if(x.hasOwnProperty(A)){var V=x[A];A==="children"?typeof V=="string"?u.textContent!==V&&(x.suppressHydrationWarning!==!0&&Tl(u.textContent,V,i),g=["children",V]):typeof V=="number"&&u.textContent!==""+V&&(x.suppressHydrationWarning!==!0&&Tl(u.textContent,V,i),g=["children",""+V]):o.hasOwnProperty(A)&&V!=null&&A==="onScroll"&&$t("scroll",u)}switch(l){case"input":Ze(u),jt(u,x,!0);break;case"textarea":Ze(u),bt(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=bl)}u=g,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=F(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=A.createElement(l,{is:u.is}):(i=A.createElement(l),l==="select"&&(A=i,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):i=A.createElementNS(i,l),i[Xi]=s,i[pa]=u,u0(i,s,!1,!1),s.stateNode=i;e:{switch(A=Fe(l,u),l){case"dialog":$t("cancel",i),$t("close",i),g=u;break;case"iframe":case"object":case"embed":$t("load",i),g=u;break;case"video":case"audio":for(g=0;g<fa.length;g++)$t(fa[g],i);g=u;break;case"source":$t("error",i),g=u;break;case"img":case"image":case"link":$t("error",i),$t("load",i),g=u;break;case"details":$t("toggle",i),g=u;break;case"input":St(i,u),g=Mt(i,u),$t("invalid",i);break;case"option":g=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},g=re({},u,{value:void 0}),$t("invalid",i);break;case"textarea":X(i,u),g=xt(i,u),$t("invalid",i);break;default:g=u}qe(l,g),V=g;for(x in V)if(V.hasOwnProperty(x)){var H=V[x];x==="style"?ve(i,H):x==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ae(i,H)):x==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&he(i,H):typeof H=="number"&&he(i,""+H):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?H!=null&&x==="onScroll"&&$t("scroll",i):H!=null&&P(i,x,H,A))}switch(l){case"input":Ze(i),jt(i,u,!1);break;case"textarea":Ze(i),bt(i);break;case"option":u.value!=null&&i.setAttribute("value",""+de(u.value));break;case"select":i.multiple=!!u.multiple,x=u.value,x!=null?It(i,!!u.multiple,x,!1):u.defaultValue!=null&&It(i,!!u.multiple,u.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=bl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return In(s),null;case 6:if(i&&s.stateNode!=null)d0(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=ys(ya.current),ys(ji.current),Nl(s)){if(u=s.stateNode,l=s.memoizedProps,u[Xi]=s,(x=u.nodeValue!==l)&&(i=ai,i!==null))switch(i.tag){case 3:Tl(u.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Tl(u.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Xi]=s,s.stateNode=u}return In(s),null;case 13:if(Kt(tn),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Qt&&li!==null&&(s.mode&1)!==0&&(s.flags&128)===0)mg(),so(),s.flags|=98560,x=!1;else if(x=Nl(s),u!==null&&u.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Xi]=s}else so(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;In(s),x=!1}else Ci!==null&&(ed(Ci),Ci=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(tn.current&1)!==0?gn===0&&(gn=3):id())),s.updateQueue!==null&&(s.flags|=4),In(s),null);case 4:return co(),Gf(i,s),i===null&&da(s.stateNode.containerInfo),In(s),null;case 10:return vf(s.type._context),In(s),null;case 17:return Zn(s.type)&&Cl(),In(s),null;case 19:if(Kt(tn),x=s.memoizedState,x===null)return In(s),null;if(u=(s.flags&128)!==0,A=x.rendering,A===null)if(u)wa(x,!1);else{if(gn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Bl(i),A!==null){for(s.flags|=128,wa(x,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)x=l,i=u,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,i=A.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Xt(tn,tn.current&1|2),s.child}i=i.sibling}x.tail!==null&&en()>po&&(s.flags|=128,u=!0,wa(x,!1),s.lanes=4194304)}else{if(!u)if(i=Bl(A),i!==null){if(s.flags|=128,u=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),wa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Qt)return In(s),null}else 2*en()-x.renderingStartTime>po&&l!==1073741824&&(s.flags|=128,u=!0,wa(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=en(),s.sibling=null,l=tn.current,Xt(tn,u?l&1|2:l&1),s):(In(s),null);case 22:case 23:return nd(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(ci&1073741824)!==0&&(In(s),s.subtreeFlags&6&&(s.flags|=8192)):In(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function a1(i,s){switch(ff(s),s.tag){case 1:return Zn(s.type)&&Cl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return co(),Kt(Kn),Kt(Ln),wf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Mf(s),null;case 13:if(Kt(tn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));so()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Kt(tn),null;case 4:return co(),null;case 10:return vf(s.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var ql=!1,Un=!1,l1=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function fo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){rn(i,s,u)}else l.current=null}function Wf(i,s,l){try{l()}catch(u){rn(i,s,u)}}var h0=!1;function c1(i,s){if(tf=pl,i=Xm(),Yu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var g=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,V=-1,H=-1,fe=0,_e=0,we=i,ye=null;t:for(;;){for(var ze;we!==l||g!==0&&we.nodeType!==3||(V=A+g),we!==x||u!==0&&we.nodeType!==3||(H=A+u),we.nodeType===3&&(A+=we.nodeValue.length),(ze=we.firstChild)!==null;)ye=we,we=ze;for(;;){if(we===i)break t;if(ye===l&&++fe===g&&(V=A),ye===x&&++_e===u&&(H=A),(ze=we.nextSibling)!==null)break;we=ye,ye=we.parentNode}we=ze}l=V===-1||H===-1?null:{start:V,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(nf={focusedElem:i,selectionRange:l},pl=!1,Ye=s;Ye!==null;)if(s=Ye,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ye=i;else for(;Ye!==null;){s=Ye;try{var $e=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,an=$e.memoizedState,ne=s.stateNode,Y=ne.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:Ri(s.type,Qe),an);ne.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var le=s.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){rn(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,Ye=i;break}Ye=s.return}return $e=h0,h0=!1,$e}function Ta(i,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var g=u=u.next;do{if((g.tag&i)===i){var x=g.destroy;g.destroy=void 0,x!==void 0&&Wf(s,l,x)}g=g.next}while(g!==u)}}function $l(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function Xf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function p0(i){var s=i.alternate;s!==null&&(i.alternate=null,p0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Xi],delete s[pa],delete s[af],delete s[XM],delete s[jM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function m0(i){return i.tag===5||i.tag===3||i.tag===4}function g0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||m0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function jf(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=bl));else if(u!==4&&(i=i.child,i!==null))for(jf(i,s,l),i=i.sibling;i!==null;)jf(i,s,l),i=i.sibling}function Yf(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(Yf(i,s,l),i=i.sibling;i!==null;)Yf(i,s,l),i=i.sibling}var bn=null,Pi=!1;function Gr(i,s,l){for(l=l.child;l!==null;)v0(i,s,l),l=l.sibling}function v0(i,s,l){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(se,l)}catch{}switch(l.tag){case 5:Un||fo(l,s);case 6:var u=bn,g=Pi;bn=null,Gr(i,s,l),bn=u,Pi=g,bn!==null&&(Pi?(i=bn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):bn.removeChild(l.stateNode));break;case 18:bn!==null&&(Pi?(i=bn,l=l.stateNode,i.nodeType===8?of(i.parentNode,l):i.nodeType===1&&of(i,l),ia(i)):of(bn,l.stateNode));break;case 4:u=bn,g=Pi,bn=l.stateNode.containerInfo,Pi=!0,Gr(i,s,l),bn=u,Pi=g;break;case 0:case 11:case 14:case 15:if(!Un&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){g=u=u.next;do{var x=g,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Wf(l,s,A),g=g.next}while(g!==u)}Gr(i,s,l);break;case 1:if(!Un&&(fo(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(V){rn(l,s,V)}Gr(i,s,l);break;case 21:Gr(i,s,l);break;case 22:l.mode&1?(Un=(u=Un)||l.memoizedState!==null,Gr(i,s,l),Un=u):Gr(i,s,l);break;default:Gr(i,s,l)}}function x0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new l1),s.forEach(function(u){var g=x1.bind(null,i,u);l.has(u)||(l.add(u),u.then(g,g))})}}function Di(i,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var g=l[u];try{var x=i,A=s,V=A;e:for(;V!==null;){switch(V.tag){case 5:bn=V.stateNode,Pi=!1;break e;case 3:bn=V.stateNode.containerInfo,Pi=!0;break e;case 4:bn=V.stateNode.containerInfo,Pi=!0;break e}V=V.return}if(bn===null)throw Error(t(160));v0(x,A,g),bn=null,Pi=!1;var H=g.alternate;H!==null&&(H.return=null),g.return=null}catch(fe){rn(g,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)y0(s,i),s=s.sibling}function y0(i,s){var l=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Di(s,i),qi(i),u&4){try{Ta(3,i,i.return),$l(3,i)}catch(Qe){rn(i,i.return,Qe)}try{Ta(5,i,i.return)}catch(Qe){rn(i,i.return,Qe)}}break;case 1:Di(s,i),qi(i),u&512&&l!==null&&fo(l,l.return);break;case 5:if(Di(s,i),qi(i),u&512&&l!==null&&fo(l,l.return),i.flags&32){var g=i.stateNode;try{he(g,"")}catch(Qe){rn(i,i.return,Qe)}}if(u&4&&(g=i.stateNode,g!=null)){var x=i.memoizedProps,A=l!==null?l.memoizedProps:x,V=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{V==="input"&&x.type==="radio"&&x.name!=null&&gt(g,x),Fe(V,A);var fe=Fe(V,x);for(A=0;A<H.length;A+=2){var _e=H[A],we=H[A+1];_e==="style"?ve(g,we):_e==="dangerouslySetInnerHTML"?ae(g,we):_e==="children"?he(g,we):P(g,_e,we,fe)}switch(V){case"input":Ft(g,x);break;case"textarea":pn(g,x);break;case"select":var ye=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var ze=x.value;ze!=null?It(g,!!x.multiple,ze,!1):ye!==!!x.multiple&&(x.defaultValue!=null?It(g,!!x.multiple,x.defaultValue,!0):It(g,!!x.multiple,x.multiple?[]:"",!1))}g[pa]=x}catch(Qe){rn(i,i.return,Qe)}}break;case 6:if(Di(s,i),qi(i),u&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,x=i.memoizedProps;try{g.nodeValue=x}catch(Qe){rn(i,i.return,Qe)}}break;case 3:if(Di(s,i),qi(i),u&4&&l!==null&&l.memoizedState.isDehydrated)try{ia(s.containerInfo)}catch(Qe){rn(i,i.return,Qe)}break;case 4:Di(s,i),qi(i);break;case 13:Di(s,i),qi(i),g=i.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Kf=en())),u&4&&x0(i);break;case 22:if(_e=l!==null&&l.memoizedState!==null,i.mode&1?(Un=(fe=Un)||_e,Di(s,i),Un=fe):Di(s,i),qi(i),u&8192){if(fe=i.memoizedState!==null,(i.stateNode.isHidden=fe)&&!_e&&(i.mode&1)!==0)for(Ye=i,_e=i.child;_e!==null;){for(we=Ye=_e;Ye!==null;){switch(ye=Ye,ze=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ta(4,ye,ye.return);break;case 1:fo(ye,ye.return);var $e=ye.stateNode;if(typeof $e.componentWillUnmount=="function"){u=ye,l=ye.return;try{s=u,$e.props=s.memoizedProps,$e.state=s.memoizedState,$e.componentWillUnmount()}catch(Qe){rn(u,l,Qe)}}break;case 5:fo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){M0(we);continue}}ze!==null?(ze.return=ye,Ye=ze):M0(we)}_e=_e.sibling}e:for(_e=null,we=i;;){if(we.tag===5){if(_e===null){_e=we;try{g=we.stateNode,fe?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(V=we.stateNode,H=we.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,V.style.display=me("display",A))}catch(Qe){rn(i,i.return,Qe)}}}else if(we.tag===6){if(_e===null)try{we.stateNode.nodeValue=fe?"":we.memoizedProps}catch(Qe){rn(i,i.return,Qe)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===i)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===i)break e;for(;we.sibling===null;){if(we.return===null||we.return===i)break e;_e===we&&(_e=null),we=we.return}_e===we&&(_e=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Di(s,i),qi(i),u&4&&x0(i);break;case 21:break;default:Di(s,i),qi(i)}}function qi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(m0(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var g=u.stateNode;u.flags&32&&(he(g,""),u.flags&=-33);var x=g0(i);Yf(i,x,g);break;case 3:case 4:var A=u.stateNode.containerInfo,V=g0(i);jf(i,V,A);break;default:throw Error(t(161))}}catch(H){rn(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function u1(i,s,l){Ye=i,_0(i)}function _0(i,s,l){for(var u=(i.mode&1)!==0;Ye!==null;){var g=Ye,x=g.child;if(g.tag===22&&u){var A=g.memoizedState!==null||ql;if(!A){var V=g.alternate,H=V!==null&&V.memoizedState!==null||Un;V=ql;var fe=Un;if(ql=A,(Un=H)&&!fe)for(Ye=g;Ye!==null;)A=Ye,H=A.child,A.tag===22&&A.memoizedState!==null?E0(g):H!==null?(H.return=A,Ye=H):E0(g);for(;x!==null;)Ye=x,_0(x),x=x.sibling;Ye=g,ql=V,Un=fe}S0(i)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,Ye=x):S0(i)}}function S0(i){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Un||$l(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Un)if(l===null)u.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Ri(s.type,l.memoizedProps);u.componentDidUpdate(g,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Mg(s,x,u);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Mg(s,A,l)}break;case 5:var V=s.stateNode;if(l===null&&s.flags&4){l=V;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var _e=fe.memoizedState;if(_e!==null){var we=_e.dehydrated;we!==null&&ia(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||s.flags&512&&Xf(s)}catch(ye){rn(s,s.return,ye)}}if(s===i){Ye=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function M0(i){for(;Ye!==null;){var s=Ye;if(s===i){Ye=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function E0(i){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{$l(4,s)}catch(H){rn(s,l,H)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var g=s.return;try{u.componentDidMount()}catch(H){rn(s,g,H)}}var x=s.return;try{Xf(s)}catch(H){rn(s,x,H)}break;case 5:var A=s.return;try{Xf(s)}catch(H){rn(s,A,H)}}}catch(H){rn(s,s.return,H)}if(s===i){Ye=null;break}var V=s.sibling;if(V!==null){V.return=s.return,Ye=V;break}Ye=s.return}}var f1=Math.ceil,Kl=T.ReactCurrentDispatcher,qf=T.ReactCurrentOwner,vi=T.ReactCurrentBatchConfig,Pt=0,Mn=null,fn=null,An=0,ci=0,ho=Or(0),gn=0,ba=null,Ss=0,Zl=0,$f=0,Aa=null,Qn=null,Kf=0,po=1/0,vr=null,Jl=!1,Zf=null,Wr=null,Ql=!1,Xr=null,ec=0,Ca=0,Jf=null,tc=-1,nc=0;function zn(){return(Pt&6)!==0?en():tc!==-1?tc:tc=en()}function jr(i){return(i.mode&1)===0?1:(Pt&2)!==0&&An!==0?An&-An:qM.transition!==null?(nc===0&&(nc=Ve()),nc):(i=yt,i!==0||(i=window.event,i=i===void 0?16:Tm(i.type)),i)}function Li(i,s,l,u){if(50<Ca)throw Ca=0,Jf=null,Error(t(185));vt(i,l,u),((Pt&2)===0||i!==Mn)&&(i===Mn&&((Pt&2)===0&&(Zl|=l),gn===4&&Yr(i,An)),ei(i,u),l===1&&Pt===0&&(s.mode&1)===0&&(po=en()+500,Pl&&Vr()))}function ei(i,s){var l=i.callbackNode;Ot(i,s);var u=Wt(i,i===Mn?An:0);if(u===0)l!==null&&Zo(l),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(l!=null&&Zo(l),s===1)i.tag===0?YM(T0.bind(null,i)):ug(T0.bind(null,i)),GM(function(){(Pt&6)===0&&Vr()}),l=null;else{switch(cr(u)){case 1:l=Jo;break;case 4:l=R;break;case 16:l=K;break;case 536870912:l=oe;break;default:l=K}l=N0(l,w0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function w0(i,s){if(tc=-1,nc=0,(Pt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(mo()&&i.callbackNode!==l)return null;var u=Wt(i,i===Mn?An:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=ic(i,u);else{s=u;var g=Pt;Pt|=2;var x=A0();(Mn!==i||An!==s)&&(vr=null,po=en()+500,Es(i,s));do try{p1();break}catch(V){b0(i,V)}while(!0);gf(),Kl.current=x,Pt=g,fn!==null?s=0:(Mn=null,An=0,s=gn)}if(s!==0){if(s===2&&(g=un(i),g!==0&&(u=g,s=Qf(i,g))),s===1)throw l=ba,Es(i,0),Yr(i,u),ei(i,en()),l;if(s===6)Yr(i,u);else{if(g=i.current.alternate,(u&30)===0&&!d1(g)&&(s=ic(i,u),s===2&&(x=un(i),x!==0&&(u=x,s=Qf(i,x))),s===1))throw l=ba,Es(i,0),Yr(i,u),ei(i,en()),l;switch(i.finishedWork=g,i.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:ws(i,Qn,vr);break;case 3:if(Yr(i,u),(u&130023424)===u&&(s=Kf+500-en(),10<s)){if(Wt(i,0)!==0)break;if(g=i.suspendedLanes,(g&u)!==u){zn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=sf(ws.bind(null,i,Qn,vr),s);break}ws(i,Qn,vr);break;case 4:if(Yr(i,u),(u&4194240)===u)break;for(s=i.eventTimes,g=-1;0<u;){var A=31-Re(u);x=1<<A,A=s[A],A>g&&(g=A),u&=~x}if(u=g,u=en()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*f1(u/1960))-u,10<u){i.timeoutHandle=sf(ws.bind(null,i,Qn,vr),u);break}ws(i,Qn,vr);break;case 5:ws(i,Qn,vr);break;default:throw Error(t(329))}}}return ei(i,en()),i.callbackNode===l?w0.bind(null,i):null}function Qf(i,s){var l=Aa;return i.current.memoizedState.isDehydrated&&(Es(i,s).flags|=256),i=ic(i,s),i!==2&&(s=Qn,Qn=l,s!==null&&ed(s)),i}function ed(i){Qn===null?Qn=i:Qn.push.apply(Qn,i)}function d1(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var g=l[u],x=g.getSnapshot;g=g.value;try{if(!Ai(x(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Yr(i,s){for(s&=~$f,s&=~Zl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Re(s),u=1<<l;i[l]=-1,s&=~u}}function T0(i){if((Pt&6)!==0)throw Error(t(327));mo();var s=Wt(i,0);if((s&1)===0)return ei(i,en()),null;var l=ic(i,s);if(i.tag!==0&&l===2){var u=un(i);u!==0&&(s=u,l=Qf(i,u))}if(l===1)throw l=ba,Es(i,0),Yr(i,s),ei(i,en()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ws(i,Qn,vr),ei(i,en()),null}function td(i,s){var l=Pt;Pt|=1;try{return i(s)}finally{Pt=l,Pt===0&&(po=en()+500,Pl&&Vr())}}function Ms(i){Xr!==null&&Xr.tag===0&&(Pt&6)===0&&mo();var s=Pt;Pt|=1;var l=vi.transition,u=yt;try{if(vi.transition=null,yt=1,i)return i()}finally{yt=u,vi.transition=l,Pt=s,(Pt&6)===0&&Vr()}}function nd(){ci=ho.current,Kt(ho)}function Es(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,HM(l)),fn!==null)for(l=fn.return;l!==null;){var u=l;switch(ff(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Cl();break;case 3:co(),Kt(Kn),Kt(Ln),wf();break;case 5:Mf(u);break;case 4:co();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:vf(u.type._context);break;case 22:case 23:nd()}l=l.return}if(Mn=i,fn=i=qr(i.current,null),An=ci=s,gn=0,ba=null,$f=Zl=Ss=0,Qn=Aa=null,xs!==null){for(s=0;s<xs.length;s++)if(l=xs[s],u=l.interleaved,u!==null){l.interleaved=null;var g=u.next,x=l.pending;if(x!==null){var A=x.next;x.next=g,u.next=A}l.pending=u}xs=null}return i}function b0(i,s){do{var l=fn;try{if(gf(),Vl.current=Wl,zl){for(var u=nn.memoizedState;u!==null;){var g=u.queue;g!==null&&(g.pending=null),u=u.next}zl=!1}if(_s=0,Sn=mn=nn=null,_a=!1,Sa=0,qf.current=null,l===null||l.return===null){gn=1,ba=s,fn=null;break}e:{var x=i,A=l.return,V=l,H=s;if(s=An,V.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var fe=H,_e=V,we=_e.tag;if((_e.mode&1)===0&&(we===0||we===11||we===15)){var ye=_e.alternate;ye?(_e.updateQueue=ye.updateQueue,_e.memoizedState=ye.memoizedState,_e.lanes=ye.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ze=Zg(A);if(ze!==null){ze.flags&=-257,Jg(ze,A,V,x,s),ze.mode&1&&Kg(x,fe,s),s=ze,H=fe;var $e=s.updateQueue;if($e===null){var Qe=new Set;Qe.add(H),s.updateQueue=Qe}else $e.add(H);break e}else{if((s&1)===0){Kg(x,fe,s),id();break e}H=Error(t(426))}}else if(Qt&&V.mode&1){var an=Zg(A);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Jg(an,A,V,x,s),pf(uo(H,V));break e}}x=H=uo(H,V),gn!==4&&(gn=2),Aa===null?Aa=[x]:Aa.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ne=qg(x,H,s);Sg(x,ne);break e;case 1:V=H;var Y=x.type,le=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Wr===null||!Wr.has(le)))){x.flags|=65536,s&=-s,x.lanes|=s;var Ae=$g(x,V,s);Sg(x,Ae);break e}}x=x.return}while(x!==null)}R0(l)}catch(tt){s=tt,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function A0(){var i=Kl.current;return Kl.current=Wl,i===null?Wl:i}function id(){(gn===0||gn===3||gn===2)&&(gn=4),Mn===null||(Ss&268435455)===0&&(Zl&268435455)===0||Yr(Mn,An)}function ic(i,s){var l=Pt;Pt|=2;var u=A0();(Mn!==i||An!==s)&&(vr=null,Es(i,s));do try{h1();break}catch(g){b0(i,g)}while(!0);if(gf(),Pt=l,Kl.current=u,fn!==null)throw Error(t(261));return Mn=null,An=0,gn}function h1(){for(;fn!==null;)C0(fn)}function p1(){for(;fn!==null&&!dl();)C0(fn)}function C0(i){var s=L0(i.alternate,i,ci);i.memoizedProps=i.pendingProps,s===null?R0(i):fn=s,qf.current=null}function R0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=o1(l,s,ci),l!==null){fn=l;return}}else{if(l=a1(l,s),l!==null){l.flags&=32767,fn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{gn=6,fn=null;return}}if(s=s.sibling,s!==null){fn=s;return}fn=s=i}while(s!==null);gn===0&&(gn=5)}function ws(i,s,l){var u=yt,g=vi.transition;try{vi.transition=null,yt=1,m1(i,s,l,u)}finally{vi.transition=g,yt=u}return null}function m1(i,s,l,u){do mo();while(Xr!==null);if((Pt&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(qn(i,x),i===Mn&&(fn=Mn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ql||(Ql=!0,N0(K,function(){return mo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=vi.transition,vi.transition=null;var A=yt;yt=1;var V=Pt;Pt|=4,qf.current=null,c1(i,l),y0(l,i),UM(nf),pl=!!tf,nf=tf=null,i.current=l,u1(l),Iu(),Pt=V,yt=A,vi.transition=x}else i.current=l;if(Ql&&(Ql=!1,Xr=i,ec=g),x=i.pendingLanes,x===0&&(Wr=null),He(l.stateNode),ei(i,en()),s!==null)for(u=i.onRecoverableError,l=0;l<s.length;l++)g=s[l],u(g.value,{componentStack:g.stack,digest:g.digest});if(Jl)throw Jl=!1,i=Zf,Zf=null,i;return(ec&1)!==0&&i.tag!==0&&mo(),x=i.pendingLanes,(x&1)!==0?i===Jf?Ca++:(Ca=0,Jf=i):Ca=0,Vr(),null}function mo(){if(Xr!==null){var i=cr(ec),s=vi.transition,l=yt;try{if(vi.transition=null,yt=16>i?16:i,Xr===null)var u=!1;else{if(i=Xr,Xr=null,ec=0,(Pt&6)!==0)throw Error(t(331));var g=Pt;for(Pt|=4,Ye=i.current;Ye!==null;){var x=Ye,A=x.child;if((Ye.flags&16)!==0){var V=x.deletions;if(V!==null){for(var H=0;H<V.length;H++){var fe=V[H];for(Ye=fe;Ye!==null;){var _e=Ye;switch(_e.tag){case 0:case 11:case 15:Ta(8,_e,x)}var we=_e.child;if(we!==null)we.return=_e,Ye=we;else for(;Ye!==null;){_e=Ye;var ye=_e.sibling,ze=_e.return;if(p0(_e),_e===fe){Ye=null;break}if(ye!==null){ye.return=ze,Ye=ye;break}Ye=ze}}}var $e=x.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var an=Qe.sibling;Qe.sibling=null,Qe=an}while(Qe!==null)}}Ye=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,Ye=A;else e:for(;Ye!==null;){if(x=Ye,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Ta(9,x,x.return)}var ne=x.sibling;if(ne!==null){ne.return=x.return,Ye=ne;break e}Ye=x.return}}var Y=i.current;for(Ye=Y;Ye!==null;){A=Ye;var le=A.child;if((A.subtreeFlags&2064)!==0&&le!==null)le.return=A,Ye=le;else e:for(A=Y;Ye!==null;){if(V=Ye,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:$l(9,V)}}catch(tt){rn(V,V.return,tt)}if(V===A){Ye=null;break e}var Ae=V.sibling;if(Ae!==null){Ae.return=V.return,Ye=Ae;break e}Ye=V.return}}if(Pt=g,Vr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(se,i)}catch{}u=!0}return u}finally{yt=l,vi.transition=s}}return!1}function P0(i,s,l){s=uo(l,s),s=qg(i,s,1),i=Hr(i,s,1),s=zn(),i!==null&&(vt(i,1,s),ei(i,s))}function rn(i,s,l){if(i.tag===3)P0(i,i,l);else for(;s!==null;){if(s.tag===3){P0(s,i,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Wr===null||!Wr.has(u))){i=uo(l,i),i=$g(s,i,1),s=Hr(s,i,1),i=zn(),s!==null&&(vt(s,1,i),ei(s,i));break}}s=s.return}}function g1(i,s,l){var u=i.pingCache;u!==null&&u.delete(s),s=zn(),i.pingedLanes|=i.suspendedLanes&l,Mn===i&&(An&l)===l&&(gn===4||gn===3&&(An&130023424)===An&&500>en()-Kf?Es(i,0):$f|=l),ei(i,s)}function D0(i,s){s===0&&((i.mode&1)===0?s=1:(s=et,et<<=1,(et&130023424)===0&&(et=4194304)));var l=zn();i=pr(i,s),i!==null&&(vt(i,s,l),ei(i,l))}function v1(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),D0(i,l)}function x1(i,s){var l=0;switch(i.tag){case 13:var u=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),D0(i,l)}var L0;L0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Kn.current)Jn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Jn=!1,s1(i,s,l);Jn=(i.flags&131072)!==0}else Jn=!1,Qt&&(s.flags&1048576)!==0&&fg(s,Ll,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Yl(i,s),i=s.pendingProps;var g=no(s,Ln.current);lo(s,l),g=Af(null,s,u,i,g,l);var x=Cf();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zn(u)?(x=!0,Rl(s)):x=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,_f(s),g.updater=Xl,s.stateNode=g,g._reactInternals=s,If(s,u,i,l),s=Of(null,s,u,!0,x,l)):(s.tag=0,Qt&&x&&uf(s),Vn(null,s,g,l),s=s.child),s;case 16:u=s.elementType;e:{switch(Yl(i,s),i=s.pendingProps,g=u._init,u=g(u._payload),s.type=u,g=s.tag=_1(u),i=Ri(u,i),g){case 0:s=kf(null,s,u,i,l);break e;case 1:s=r0(null,s,u,i,l);break e;case 11:s=Qg(null,s,u,i,l);break e;case 14:s=e0(null,s,u,Ri(u.type,i),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Ri(u,g),kf(i,s,u,g,l);case 1:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Ri(u,g),r0(i,s,u,g,l);case 3:e:{if(s0(s),i===null)throw Error(t(387));u=s.pendingProps,x=s.memoizedState,g=x.element,_g(i,s),Ol(s,u,null,l);var A=s.memoizedState;if(u=A.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){g=uo(Error(t(423)),s),s=o0(i,s,u,l,g);break e}else if(u!==g){g=uo(Error(t(424)),s),s=o0(i,s,u,l,g);break e}else for(li=kr(s.stateNode.containerInfo.firstChild),ai=s,Qt=!0,Ci=null,l=xg(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(so(),u===g){s=gr(i,s,l);break e}Vn(i,s,u,l)}s=s.child}return s;case 5:return Eg(s),i===null&&hf(s),u=s.type,g=s.pendingProps,x=i!==null?i.memoizedProps:null,A=g.children,rf(u,g)?A=null:x!==null&&rf(u,x)&&(s.flags|=32),i0(i,s),Vn(i,s,A,l),s.child;case 6:return i===null&&hf(s),null;case 13:return a0(i,s,l);case 4:return Sf(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=oo(s,null,u,l):Vn(i,s,u,l),s.child;case 11:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Ri(u,g),Qg(i,s,u,g,l);case 7:return Vn(i,s,s.pendingProps,l),s.child;case 8:return Vn(i,s,s.pendingProps.children,l),s.child;case 12:return Vn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,g=s.pendingProps,x=s.memoizedProps,A=g.value,Xt(Ul,u._currentValue),u._currentValue=A,x!==null)if(Ai(x.value,A)){if(x.children===g.children&&!Kn.current){s=gr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var V=x.dependencies;if(V!==null){A=x.child;for(var H=V.firstContext;H!==null;){if(H.context===u){if(x.tag===1){H=mr(-1,l&-l),H.tag=2;var fe=x.updateQueue;if(fe!==null){fe=fe.shared;var _e=fe.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),fe.pending=H}}x.lanes|=l,H=x.alternate,H!==null&&(H.lanes|=l),xf(x.return,l,s),V.lanes|=l;break}H=H.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,V=A.alternate,V!==null&&(V.lanes|=l),xf(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Vn(i,s,g.children,l),s=s.child}return s;case 9:return g=s.type,u=s.pendingProps.children,lo(s,l),g=mi(g),u=u(g),s.flags|=1,Vn(i,s,u,l),s.child;case 14:return u=s.type,g=Ri(u,s.pendingProps),g=Ri(u.type,g),e0(i,s,u,g,l);case 15:return t0(i,s,s.type,s.pendingProps,l);case 17:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Ri(u,g),Yl(i,s),s.tag=1,Zn(u)?(i=!0,Rl(s)):i=!1,lo(s,l),jg(s,u,g),If(s,u,g,l),Of(null,s,u,!0,i,l);case 19:return c0(i,s,l);case 22:return n0(i,s,l)}throw Error(t(156,s.tag))};function N0(i,s){return ds(i,s)}function y1(i,s,l,u){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(i,s,l,u){return new y1(i,s,l,u)}function rd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function _1(i){if(typeof i=="function")return rd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===W)return 11;if(i===$)return 14}return 2}function qr(i,s){var l=i.alternate;return l===null?(l=xi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function rc(i,s,l,u,g,x){var A=2;if(u=i,typeof i=="function")rd(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case I:return Ts(l.children,g,x,s);case E:A=8,g|=8;break;case N:return i=xi(12,l,s,g|2),i.elementType=N,i.lanes=x,i;case ce:return i=xi(13,l,s,g),i.elementType=ce,i.lanes=x,i;case pe:return i=xi(19,l,s,g),i.elementType=pe,i.lanes=x,i;case Z:return sc(l,g,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case k:A=10;break e;case B:A=9;break e;case W:A=11;break e;case $:A=14;break e;case J:A=16,u=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=xi(A,l,s,g),s.elementType=i,s.type=u,s.lanes=x,s}function Ts(i,s,l,u){return i=xi(7,i,u,s),i.lanes=l,i}function sc(i,s,l,u){return i=xi(22,i,u,s),i.elementType=Z,i.lanes=l,i.stateNode={isHidden:!1},i}function sd(i,s,l){return i=xi(6,i,null,s),i.lanes=l,i}function od(i,s,l){return s=xi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function S1(i,s,l,u,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=u,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function ad(i,s,l,u,g,x,A,V,H){return i=new S1(i,s,l,V,H),s===1?(s=1,x===!0&&(s|=8)):s=0,x=xi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(x),i}function M1(i,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:i,containerInfo:s,implementation:l}}function I0(i){if(!i)return Br;i=i._reactInternals;e:{if(Bn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Zn(l))return lg(i,l,s)}return s}function U0(i,s,l,u,g,x,A,V,H){return i=ad(l,u,!0,i,g,x,A,V,H),i.context=I0(null),l=i.current,u=zn(),g=jr(l),x=mr(u,g),x.callback=s??null,Hr(l,x,g),i.current.lanes=g,vt(i,g,u),ei(i,u),i}function oc(i,s,l,u){var g=s.current,x=zn(),A=jr(g);return l=I0(l),s.context===null?s.context=l:s.pendingContext=l,s=mr(x,A),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Hr(g,s,A),i!==null&&(Li(i,g,A,x),kl(i,g,A)),A}function ac(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function F0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ld(i,s){F0(i,s),(i=i.alternate)&&F0(i,s)}function E1(){return null}var k0=typeof reportError=="function"?reportError:function(i){console.error(i)};function cd(i){this._internalRoot=i}lc.prototype.render=cd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));oc(i,s,null,null)},lc.prototype.unmount=cd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ms(function(){oc(null,i,null,null)}),s[ur]=null}};function lc(i){this._internalRoot=i}lc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Bt();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ir.length&&s!==0&&s<Ir[l].priority;l++);Ir.splice(l,0,i),l===0&&Em(i)}};function ud(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function cc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function O0(){}function w1(i,s,l,u,g){if(g){if(typeof u=="function"){var x=u;u=function(){var fe=ac(A);x.call(fe)}}var A=U0(s,u,i,0,null,!1,!1,"",O0);return i._reactRootContainer=A,i[ur]=A.current,da(i.nodeType===8?i.parentNode:i),Ms(),A}for(;g=i.lastChild;)i.removeChild(g);if(typeof u=="function"){var V=u;u=function(){var fe=ac(H);V.call(fe)}}var H=ad(i,0,!1,null,null,!1,!1,"",O0);return i._reactRootContainer=H,i[ur]=H.current,da(i.nodeType===8?i.parentNode:i),Ms(function(){oc(s,H,l,u)}),H}function uc(i,s,l,u,g){var x=l._reactRootContainer;if(x){var A=x;if(typeof g=="function"){var V=g;g=function(){var H=ac(A);V.call(H)}}oc(s,A,i,g)}else A=w1(l,s,i,g,u);return ac(A)}kt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=At(s.pendingLanes);l!==0&&($n(s,l|1),ei(s,en()),(Pt&6)===0&&(po=en()+500,Vr()))}break;case 13:Ms(function(){var u=pr(i,1);if(u!==null){var g=zn();Li(u,i,1,g)}}),ld(i,1)}},qt=function(i){if(i.tag===13){var s=pr(i,134217728);if(s!==null){var l=zn();Li(s,i,134217728,l)}ld(i,134217728)}},Ti=function(i){if(i.tag===13){var s=jr(i),l=pr(i,s);if(l!==null){var u=zn();Li(l,i,s,u)}ld(i,s)}},Bt=function(){return yt},bi=function(i,s){var l=yt;try{return yt=i,s()}finally{yt=l}},it=function(i,s,l){switch(s){case"input":if(Ft(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==i&&u.form===i.form){var g=Al(u);if(!g)throw Error(t(90));Rt(u),Ft(u,g)}}}break;case"textarea":pn(i,l);break;case"select":s=l.value,s!=null&&It(i,!!l.multiple,s,!1)}},be=td,xe=Ms;var T1={usingClientEntryPoint:!1,Events:[ma,eo,Al,ie,Me,td]},Ra={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b1={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=fs(i),i===null?null:i.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||E1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{se=fc.inject(b1),Le=fc}catch{}}return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1,ti.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(s))throw Error(t(200));return M1(i,s,null,l)},ti.createRoot=function(i,s){if(!ud(i))throw Error(t(299));var l=!1,u="",g=k0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=ad(i,1,!1,null,null,l,!1,u,g),i[ur]=s.current,da(i.nodeType===8?i.parentNode:i),new cd(s)},ti.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=fs(s),i=i===null?null:i.stateNode,i},ti.flushSync=function(i){return Ms(i)},ti.hydrate=function(i,s,l){if(!cc(s))throw Error(t(200));return uc(null,i,s,!0,l)},ti.hydrateRoot=function(i,s,l){if(!ud(i))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,g=!1,x="",A=k0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=U0(s,null,i,1,l??null,g,!1,x,A),i[ur]=s.current,da(i),u)for(i=0;i<u.length;i++)l=u[i],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new lc(s)},ti.render=function(i,s,l){if(!cc(s))throw Error(t(200));return uc(null,i,s,!1,l)},ti.unmountComponentAtNode=function(i){if(!cc(i))throw Error(t(40));return i._reactRootContainer?(Ms(function(){uc(null,null,i,!1,function(){i._reactRootContainer=null,i[ur]=null})}),!0):!1},ti.unstable_batchedUpdates=td,ti.unstable_renderSubtreeIntoContainer=function(i,s,l,u){if(!cc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return uc(i,s,l,!1,u)},ti.version="18.3.1-next-f1338f8080-20240426",ti}var j0;function my(){if(j0)return hd.exports;j0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),hd.exports=N1(),hd.exports}var Y0;function I1(){if(Y0)return dc;Y0=1;var n=my();return dc.createRoot=n.createRoot,dc.hydrateRoot=n.hydrateRoot,dc}var U1=I1(),je=Dp();const ke=py(je),gy=je.createContext({});function F1(n){const e=je.useRef(null);return e.current===null&&(e.current=n()),e.current}const k1=typeof window<"u",O1=k1?je.useLayoutEffect:je.useEffect,Lp=je.createContext(null);function Np(n,e){n.indexOf(e)===-1&&n.push(e)}function nu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const or=(n,e,t)=>t>e?e:t<n?n:t;let Ip=()=>{};const os={},vy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),xy=n=>typeof n=="object"&&n!==null,yy=n=>/^0[^.\s]+$/u.test(n);function _y(n){let e;return()=>(e===void 0&&(e=n()),e)}const wi=n=>n,Qa=(...n)=>n.reduce((e,t)=>r=>t(e(r))),Ya=(n,e,t)=>{const r=e-n;return r?(t-n)/r:1};class Up{constructor(){this.subscriptions=[]}add(e){return Np(this.subscriptions,e),()=>nu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const di=n=>n*1e3,Ei=n=>n/1e3,Sy=(n,e)=>e?n*(1e3/e):0,My=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,B1=1e-7,V1=12;function z1(n,e,t,r,o){let a,c,f=0;do c=e+(t-e)/2,a=My(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>B1&&++f<V1);return c}function el(n,e,t,r){if(n===e&&t===r)return wi;const o=a=>z1(a,0,1,n,t);return a=>a===0||a===1?a:My(o(a),e,r)}const Ey=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,wy=n=>e=>1-n(1-e),Ty=el(.33,1.53,.69,.99),Fp=wy(Ty),by=Ey(Fp),Ay=n=>n>=1?1:(n*=2)<1?.5*Fp(n):.5*(2-Math.pow(2,-10*(n-1))),kp=n=>1-Math.sin(Math.acos(n)),Cy=wy(kp),Ry=Ey(kp),H1=el(.42,0,1,1),G1=el(0,0,.58,1),Py=el(.42,0,.58,1),W1=n=>Array.isArray(n)&&typeof n[0]!="number",Dy=n=>Array.isArray(n)&&typeof n[0]=="number",X1={linear:wi,easeIn:H1,easeInOut:Py,easeOut:G1,circIn:kp,circInOut:Ry,circOut:Cy,backIn:Fp,backInOut:by,backOut:Ty,anticipate:Ay},j1=n=>typeof n=="string",q0=n=>{if(Dy(n)){Ip(n.length===4);const[e,t,r,o]=n;return el(e,t,r,o)}else if(j1(n))return X1[n];return n},hc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Y1(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function f(d){a.has(d)&&(h.schedule(d),n()),d(c)}const h={schedule:(d,m=!1,p=!1)=>{const S=p&&r?e:t;return m&&a.add(d),S.add(d),d},cancel:d=>{t.delete(d),a.delete(d)},process:d=>{if(c=d,r){o=!0;return}r=!0;const m=e;e=t,t=m,e.forEach(f),e.clear(),r=!1,o&&(o=!1,h.process(d))}};return h}const q1=40;function Ly(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=hc.reduce((P,T)=>(P[T]=Y1(a),P),{}),{setup:f,read:h,resolveKeyframes:d,preUpdate:m,update:p,preRender:v,render:S,postRender:M}=c,b=()=>{const P=os.useManualTiming,T=P?o.timestamp:performance.now();t=!1,P||(o.delta=r?1e3/60:Math.max(Math.min(T-o.timestamp,q1),1)),o.timestamp=T,o.isProcessing=!0,f.process(o),h.process(o),d.process(o),m.process(o),p.process(o),v.process(o),S.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(b))},y=()=>{t=!0,r=!0,o.isProcessing||n(b)};return{schedule:hc.reduce((P,T)=>{const L=c[T];return P[T]=(D,I=!1,E=!1)=>(t||y(),L.schedule(D,I,E)),P},{}),cancel:P=>{for(let T=0;T<hc.length;T++)c[hc[T]].cancel(P)},state:o,steps:c}}const{schedule:Gt,cancel:as,state:Cn,steps:gd}=Ly(typeof requestAnimationFrame<"u"?requestAnimationFrame:wi,!0);let Gc;function $1(){Gc=void 0}const Gn={now:()=>(Gc===void 0&&Gn.set(Cn.isProcessing||os.useManualTiming?Cn.timestamp:performance.now()),Gc),set:n=>{Gc=n,queueMicrotask($1)}},Ny=n=>e=>typeof e=="string"&&e.startsWith(n),Iy=Ny("--"),K1=Ny("var(--"),Op=n=>K1(n)?Z1.test(n.split("/*")[0].trim()):!1,Z1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $0(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Go={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},qa={...Go,transform:n=>or(0,1,n)},pc={...Go,default:1},Ga=n=>Math.round(n*1e5)/1e5,Bp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function J1(n){return n==null}const Q1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Vp=(n,e)=>t=>!!(typeof t=="string"&&Q1.test(t)&&t.startsWith(n)||e&&!J1(t)&&Object.prototype.hasOwnProperty.call(t,e)),Uy=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,f]=r.match(Bp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},eE=n=>or(0,255,n),vd={...Go,transform:n=>Math.round(eE(n))},Us={test:Vp("rgb","red"),parse:Uy("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+vd.transform(n)+", "+vd.transform(e)+", "+vd.transform(t)+", "+Ga(qa.transform(r))+")"};function tE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const dh={test:Vp("#"),parse:tE,transform:Us.transform},tl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Er=tl("deg"),ir=tl("%"),Ke=tl("px"),nE=tl("vh"),iE=tl("vw"),K0={...ir,parse:n=>ir.parse(n)/100,transform:n=>ir.transform(n*100)},Do={test:Vp("hsl","hue"),parse:Uy("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+ir.transform(Ga(e))+", "+ir.transform(Ga(t))+", "+Ga(qa.transform(r))+")"},hn={test:n=>Us.test(n)||dh.test(n)||Do.test(n),parse:n=>Us.test(n)?Us.parse(n):Do.test(n)?Do.parse(n):dh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Us.transform(n):Do.transform(n),getAnimatableNone:n=>{const e=hn.parse(n);return e.alpha=0,hn.transform(e)}},rE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Bp))==null?void 0:e.length)||0)+(((t=n.match(rE))==null?void 0:t.length)||0)>0}const Fy="number",ky="color",oE="var",aE="var(",Z0="${}",lE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ko(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const f=e.replace(lE,h=>(hn.test(h)?(r.color.push(a),o.push(ky),t.push(hn.parse(h))):h.startsWith(aE)?(r.var.push(a),o.push(oE),t.push(h)):(r.number.push(a),o.push(Fy),t.push(parseFloat(h))),++a,Z0)).split(Z0);return{values:t,split:f,indexes:r,types:o}}function cE(n){return ko(n).values}function Oy({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===Fy?o+=Ga(r[a]):c===ky?o+=hn.transform(r[a]):o+=r[a]}return o}}function uE(n){return Oy(ko(n))}const fE=n=>typeof n=="number"?0:hn.test(n)?hn.getAnimatableNone(n):n,dE=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:fE(n);function hE(n){const e=ko(n);return Oy(e)(e.values.map((r,o)=>dE(r,e.split[o])))}const Vi={test:sE,parse:cE,createTransformer:uE,getAnimatableNone:hE};function xd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function pE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const f=t<.5?t*(1+e):t+e-t*e,h=2*t-f;o=xd(h,f,n+1/3),a=xd(h,f,n),c=xd(h,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function iu(n,e){return t=>t>0?e:n}const Ht=(n,e,t)=>n+(e-n)*t,yd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},mE=[dh,Us,Do],gE=n=>mE.find(e=>e.test(n));function J0(n){const e=gE(n);if(!e)return!1;let t=e.parse(n);return e===Do&&(t=pE(t)),t}const Q0=(n,e)=>{const t=J0(n),r=J0(e);if(!t||!r)return iu(n,e);const o={...t};return a=>(o.red=yd(t.red,r.red,a),o.green=yd(t.green,r.green,a),o.blue=yd(t.blue,r.blue,a),o.alpha=Ht(t.alpha,r.alpha,a),Us.transform(o))},hh=new Set(["none","hidden"]);function vE(n,e){return hh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function xE(n,e){return t=>Ht(n,e,t)}function zp(n){return typeof n=="number"?xE:typeof n=="string"?Op(n)?iu:hn.test(n)?Q0:SE:Array.isArray(n)?By:typeof n=="object"?hn.test(n)?Q0:yE:iu}function By(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>zp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function yE(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=zp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function _E(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],f=n.values[c]??0;t[o]=f,r[a]++}return t}const SE=(n,e)=>{const t=Vi.createTransformer(e),r=ko(n),o=ko(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?hh.has(n)&&!o.values.length||hh.has(e)&&!r.values.length?vE(n,e):Qa(By(_E(r,o),o.values),t):iu(n,e)};function Vy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Ht(n,e,t):zp(n)(n,e)}const ME=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Gt.update(e,t),stop:()=>as(e),now:()=>Cn.isProcessing?Cn.timestamp:Gn.now()}},zy=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ru=2e4;function Hp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<ru;)e+=t,r=n.next(e);return e>=ru?1/0:e}function EE(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Hp(r),ru);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:Ei(o)}}const sn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function ph(n,e){return n*Math.sqrt(1-e*e)}const wE=12;function TE(n,e,t){let r=t;for(let o=1;o<wE;o++)r=r-n(r)/e(r);return r}const _d=.001;function bE({duration:n=sn.duration,bounce:e=sn.bounce,velocity:t=sn.velocity,mass:r=sn.mass}){let o,a,c=1-e;c=or(sn.minDamping,sn.maxDamping,c),n=or(sn.minDuration,sn.maxDuration,Ei(n)),c<1?(o=d=>{const m=d*c,p=m*n,v=m-t,S=ph(d,c),M=Math.exp(-p);return _d-v/S*M},a=d=>{const p=d*c*n,v=p*t+t,S=Math.pow(c,2)*Math.pow(d,2)*n,M=Math.exp(-p),b=ph(Math.pow(d,2),c);return(-o(d)+_d>0?-1:1)*((v-S)*M)/b}):(o=d=>{const m=Math.exp(-d*n),p=(d-t)*n+1;return-_d+m*p},a=d=>{const m=Math.exp(-d*n),p=(t-d)*(n*n);return m*p});const f=5/n,h=TE(o,a,f);if(n=di(n),isNaN(h))return{stiffness:sn.stiffness,damping:sn.damping,duration:n};{const d=Math.pow(h,2)*r;return{stiffness:d,damping:c*2*Math.sqrt(r*d),duration:n}}}const AE=["duration","bounce"],CE=["stiffness","damping","mass"];function ev(n,e){return e.some(t=>n[t]!==void 0)}function RE(n){let e={velocity:sn.velocity,stiffness:sn.stiffness,damping:sn.damping,mass:sn.mass,isResolvedFromDuration:!1,...n};if(!ev(n,CE)&&ev(n,AE))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*or(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:sn.mass,stiffness:o,damping:a}}else{const t=bE({...n,velocity:0});e={...e,...t,mass:sn.mass},e.isResolvedFromDuration=!0}return e}function su(n=sn.visualDuration,e=sn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],f={done:!1,value:a},{stiffness:h,damping:d,mass:m,duration:p,velocity:v,isResolvedFromDuration:S}=RE({...t,velocity:-Ei(t.velocity||0)}),M=v||0,b=d/(2*Math.sqrt(h*m)),y=c-a,_=Ei(Math.sqrt(h/m)),C=Math.abs(y)<5;r||(r=C?sn.restSpeed.granular:sn.restSpeed.default),o||(o=C?sn.restDelta.granular:sn.restDelta.default);let P,T,L,D,I,E;if(b<1)L=ph(_,b),D=(M+b*_*y)/L,P=k=>{const B=Math.exp(-b*_*k);return c-B*(D*Math.sin(L*k)+y*Math.cos(L*k))},I=b*_*D+y*L,E=b*_*y-D*L,T=k=>Math.exp(-b*_*k)*(I*Math.sin(L*k)+E*Math.cos(L*k));else if(b===1){P=B=>c-Math.exp(-_*B)*(y+(M+_*y)*B);const k=M+_*y;T=B=>Math.exp(-_*B)*(_*k*B-M)}else{const k=_*Math.sqrt(b*b-1);P=pe=>{const $=Math.exp(-b*_*pe),J=Math.min(k*pe,300);return c-$*((M+b*_*y)*Math.sinh(J)+k*y*Math.cosh(J))/k};const B=(M+b*_*y)/k,W=b*_*B-y*k,ce=b*_*y-B*k;T=pe=>{const $=Math.exp(-b*_*pe),J=Math.min(k*pe,300);return $*(W*Math.sinh(J)+ce*Math.cosh(J))}}const N={calculatedDuration:S&&p||null,velocity:k=>di(T(k)),next:k=>{if(!S&&b<1){const W=Math.exp(-b*_*k),ce=Math.sin(L*k),pe=Math.cos(L*k),$=c-W*(D*ce+y*pe),J=di(W*(I*ce+E*pe));return f.done=Math.abs(J)<=r&&Math.abs(c-$)<=o,f.value=f.done?c:$,f}const B=P(k);if(S)f.done=k>=p;else{const W=di(T(k));f.done=Math.abs(W)<=r&&Math.abs(c-B)<=o}return f.value=f.done?c:B,f},toString:()=>{const k=Math.min(Hp(N),ru),B=zy(W=>N.next(k*W).value,k,30);return k+"ms "+B},toTransition:()=>{}};return N}su.applyToOptions=n=>{const e=EE(n,100,su);return n.ease=e.ease,n.duration=di(e.duration),n.type="keyframes",n};const PE=5;function Hy(n,e,t){const r=Math.max(e-PE,0);return Sy(t-n(r),e-r)}function mh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:f,max:h,restDelta:d=.5,restSpeed:m}){const p=n[0],v={done:!1,value:p},S=E=>f!==void 0&&E<f||h!==void 0&&E>h,M=E=>f===void 0?h:h===void 0||Math.abs(f-E)<Math.abs(h-E)?f:h;let b=t*e;const y=p+b,_=c===void 0?y:c(y);_!==y&&(b=_-p);const C=E=>-b*Math.exp(-E/r),P=E=>_+C(E),T=E=>{const N=C(E),k=P(E);v.done=Math.abs(N)<=d,v.value=v.done?_:k};let L,D;const I=E=>{S(v.value)&&(L=E,D=su({keyframes:[v.value,M(v.value)],velocity:Hy(P,E,v.value),damping:o,stiffness:a,restDelta:d,restSpeed:m}))};return I(0),{calculatedDuration:null,next:E=>{let N=!1;return!D&&L===void 0&&(N=!0,T(E),I(E)),L!==void 0&&E>=L?D.next(E-L):(!N&&T(E),v)}}}function DE(n,e,t){const r=[],o=t||os.mix||Vy,a=n.length-1;for(let c=0;c<a;c++){let f=o(n[c],n[c+1]);if(e){const h=Array.isArray(e)?e[c]||wi:e;f=Qa(h,f)}r.push(f)}return r}function LE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Ip(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=DE(e,r,o),h=f.length,d=m=>{if(c&&m<n[0])return e[0];let p=0;if(h>1)for(;p<n.length-2&&!(m<n[p+1]);p++);const v=Ya(n[p],n[p+1],m);return f[p](v)};return t?m=>d(or(n[0],n[a-1],m)):d}function NE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ya(0,e,r);n.push(Ht(t,1,o))}}function IE(n){const e=[0];return NE(e,n.length-1),e}function UE(n,e){return n.map(t=>t*e)}function FE(n,e){return n.map(()=>e||Py).splice(0,n.length-1)}function Wa({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=W1(r)?r.map(q0):q0(r),a={done:!1,value:e[0]},c=UE(t&&t.length===e.length?t:IE(e),n),f=LE(c,e,{ease:Array.isArray(o)?o:FE(e,o)});return{calculatedDuration:n,next:h=>(a.value=f(h),a.done=h>=n,a)}}const kE=n=>n!==null;function _u(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(kE),f=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!f||r===void 0?a[f]:r}const OE={decay:mh,inertia:mh,tween:Wa,keyframes:Wa,spring:su};function Gy(n){typeof n.type=="string"&&(n.type=OE[n.type])}class Gp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const BE=n=>n/100;class ou extends Gp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Gn.now()&&this.tick(Gn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Gy(e);const{type:t=Wa,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:f}=e;const h=t||Wa;h!==Wa&&typeof f[0]!="number"&&(this.mixKeyframes=Qa(BE,Vy(f[0],f[1])),f=[0,100]);const d=h({...e,keyframes:f});a==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...f].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=Hp(d));const{calculatedDuration:m}=d;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=d}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:d=0,keyframes:m,repeat:p,repeatType:v,repeatDelay:S,type:M,onUpdate:b,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const _=this.currentTime-d*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?_<0:_>o;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let P=this.currentTime,T=r;if(p){const E=Math.min(this.currentTime,o)/f;let N=Math.floor(E),k=E%1;!k&&E>=1&&(k=1),k===1&&N--,N=Math.min(N,p+1),!!(N%2)&&(v==="reverse"?(k=1-k,S&&(k-=S/f)):v==="mirror"&&(T=c)),P=or(0,1,k)*f}let L;C?(this.delayState.value=m[0],L=this.delayState):L=T.next(P),a&&!C&&(L.value=a(L.value));let{done:D}=L;!C&&h!==null&&(D=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&D);return I&&M!==mh&&(L.value=_u(m,this.options,y,this.speed)),b&&b(L.value),I&&this.finish(),L}then(e,t){return this.finished.then(e,t)}get duration(){return Ei(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ei(e)}get time(){return Ei(this.currentTime)}set time(e){e=di(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return Hy(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Gn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Ei(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=ME,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Gn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function VE(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Fs=n=>n*180/Math.PI,gh=n=>{const e=Fs(Math.atan2(n[1],n[0]));return vh(e)},zE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:gh,rotateZ:gh,skewX:n=>Fs(Math.atan(n[1])),skewY:n=>Fs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},vh=n=>(n=n%360,n<0&&(n+=360),n),tv=gh,nv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),iv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),HE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:nv,scaleY:iv,scale:n=>(nv(n)+iv(n))/2,rotateX:n=>vh(Fs(Math.atan2(n[6],n[5]))),rotateY:n=>vh(Fs(Math.atan2(-n[2],n[0]))),rotateZ:tv,rotate:tv,skewX:n=>Fs(Math.atan(n[4])),skewY:n=>Fs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function xh(n){return n.includes("scale")?1:0}function yh(n,e){if(!n||n==="none")return xh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=HE,o=t;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=zE,o=f}if(!o)return xh(e);const a=r[e],c=o[1].split(",").map(WE);return typeof a=="function"?a(c):c[a]}const GE=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return yh(t,e)};function WE(n){return parseFloat(n.trim())}const Wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xo=new Set([...Wo,"pathRotation"]),rv=n=>n===Go||n===Ke,XE=new Set(["x","y","z"]),jE=Wo.filter(n=>!XE.has(n));function YE(n){const e=[];return jE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const rs={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>yh(e,"x"),y:(n,{transform:e})=>yh(e,"y")};rs.translateX=rs.x;rs.translateY=rs.y;const Bs=new Set;let _h=!1,Sh=!1,Mh=!1;function Wy(){if(Sh){const n=Array.from(Bs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=YE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var f;(f=r.getValue(a))==null||f.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Sh=!1,_h=!1,Bs.forEach(n=>n.complete(Mh)),Bs.clear()}function Xy(){Bs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Sh=!0)})}function qE(){Mh=!0,Xy(),Wy(),Mh=!1}class Wp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Bs.add(this),_h||(_h=!0,Gt.read(Xy),Gt.resolveKeyframes(Wy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const f=r.readValue(t,c);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}VE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Bs.delete(this)}cancel(){this.state==="scheduled"&&(Bs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const $E=n=>n.startsWith("--");function jy(n,e,t){$E(e)?n.style.setProperty(e,t):n.style[e]=t}const KE={};function Yy(n,e){const t=_y(n);return()=>KE[e]??t()}const ZE=Yy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),qy=Yy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ba=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,sv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ba([0,.65,.55,1]),circOut:Ba([.55,0,1,.45]),backIn:Ba([.31,.01,.66,-.59]),backOut:Ba([.33,1.53,.69,.99])};function $y(n,e){if(n)return typeof n=="function"?qy()?zy(n,e):"ease-out":Dy(n)?Ba(n):Array.isArray(n)?n.map(t=>$y(t,e)||sv.easeOut):sv[n]}function JE(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:f="easeOut",times:h}={},d=void 0){const m={[e]:t};h&&(m.offset=h);const p=$y(f,o);Array.isArray(p)&&(m.easing=p);const v={delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return d&&(v.pseudoElement=d),n.animate(m,v)}function Ky(n){return typeof n=="function"&&"applyToOptions"in n}function QE({type:n,...e}){return Ky(n)&&qy()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Zy extends Gp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:f,onComplete:h}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Ip(typeof e.type!="string");const d=QE(e);this.animation=JE(t,r,o,d,a),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=_u(o,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(m),jy(t,r,m),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return Ei(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ei(e)}get time(){return Ei(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=di(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&ZE()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),wi):o(this)}}const Jy={anticipate:Ay,backInOut:by,circInOut:Ry};function ew(n){return n in Jy}function tw(n){typeof n.ease=="string"&&ew(n.ease)&&(n.ease=Jy[n.ease])}const Sd=10;class nw extends Zy{constructor(e){tw(e),Gy(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const f=new ou({...c,autoplay:!1}),h=Math.max(Sd,Gn.now()-this.startTime),d=or(0,Sd,h-Sd),m=f.sample(h).value,{name:p}=this.options;a&&p&&jy(a,p,m),t.setWithVelocity(f.sample(Math.max(0,h-d)).value,m,d),f.stop()}}const ov=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Vi.test(n)||n==="0")&&!n.startsWith("url("));function iw(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function rw(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=ov(o,e),f=ov(a,e);return!c||!f?!1:iw(n)||(t==="spring"||Ky(t))&&r}function Eh(n){n.duration=0,n.type="keyframes"}const Qy=new Set(["opacity","clipPath","filter","transform"]),sw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ow(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&sw.test(n[e]))return!0;return!1}const aw=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),lw=_y(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function cw(n){var p;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:f}=n;if(!(((p=e==null?void 0:e.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:m}=e.owner.getProps();return lw()&&t&&(Qy.has(t)||aw.has(t)&&ow(f))&&(t!=="transform"||!m)&&!d&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const uw=40;class fw extends Gp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:f,name:h,motionValue:d,element:m,...p}){var M;super(),this.stop=()=>{var b,y;this._animation&&(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Gn.now();const v={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:h,motionValue:d,element:m,...p},S=(m==null?void 0:m.KeyframeResolver)||Wp;this.keyframeResolver=new S(f,(b,y,_)=>this.onKeyframesResolved(b,y,v,!_),h,d,m),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var _,C;this.keyframeResolver=void 0;const{name:a,type:c,velocity:f,delay:h,isHandoff:d,onUpdate:m}=r;this.resolvedAt=Gn.now();let p=!0;rw(e,a,c,f)||(p=!1,(os.instantAnimations||!h)&&(m==null||m(_u(e,r,t))),e[0]=e[e.length-1],Eh(r),r.repeat=0);const S={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>uw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=p&&!d&&cw(S),b=(C=(_=S.motionValue)==null?void 0:_.owner)==null?void 0:C.current;let y;if(M)try{y=new nw({...S,element:b})}catch{y=new ou(S)}else y=new ou(S);y.finished.then(()=>{this.notifyFinished()}).catch(wi),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),qE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function e_(n,e,t,r=0,o=1){const a=Array.from(n).sort((d,m)=>d.sortNodePosition(m)).indexOf(e),c=n.size,f=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:f-a*r}const av=30,dw=n=>!isNaN(parseFloat(n));class hw{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=Gn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Gn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=dw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Up);const r=this.events[e].add(t);return e==="change"?()=>{r(),Gt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Gn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>av)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,av);return Sy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Oo(n,e){return new hw(n,e)}function t_(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function Xp(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?t_(t,n):t}const pw={type:"spring",stiffness:500,damping:25,restSpeed:10},mw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),gw={type:"keyframes",duration:.8},vw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xw=(n,{keyframes:e})=>e.length>2?gw:Xo.has(n)?n.startsWith("scale")?mw(e[1]):pw:vw,yw=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function _w(n){for(const e in n)if(!yw.has(e))return!0;return!1}const jp=(n,e,t,r={},o,a)=>c=>{const f=Xp(r,n)||{},h=f.delay||r.delay||0;let{elapsed:d=0}=r;d=d-di(h);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-d,onUpdate:v=>{e.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:a?void 0:o};_w(f)||Object.assign(m,xw(n,m)),m.duration&&(m.duration=di(m.duration)),m.repeatDelay&&(m.repeatDelay=di(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let p=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Eh(m),m.delay===0&&(p=!0)),(os.instantAnimations||os.skipAnimations||o!=null&&o.shouldSkipAnimations||f.skipAnimations)&&(p=!0,Eh(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,p&&!a&&e.get()!==void 0){const v=_u(m.keyframes,f);if(v!==void 0){Gt.update(()=>{m.onUpdate(v),m.onComplete()});return}}return f.isSync?new ou(m):new fw(m)},Sw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Mw(n){const e=Sw.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function n_(n,e,t=1){const[r,o]=Mw(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return vy(c)?parseFloat(c):c}return Op(o)?n_(o,e,t+1):o}function lv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Yp(n,e,t,r){if(typeof e=="function"){const[o,a]=lv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=lv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Vs(n,e,t){const r=n.getProps();return Yp(r,e,t!==void 0?t:r.custom,n)}const i_=new Set(["width","height","top","left","right","bottom",...Wo]),wh=n=>Array.isArray(n);function Ew(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Oo(t))}function ww(n){return wh(n)?n[n.length-1]||0:n}function Tw(n,e){const t=Vs(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const f=ww(a[c]);Ew(n,c,f)}}const Pn=n=>!!(n&&n.getVelocity);function bw(n){return!!(Pn(n)&&n.add)}function Th(n,e){const t=n.getValue("willChange");if(bw(t))return t.add(e);if(!t&&os.WillChange){const r=new os.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function qp(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Aw="framerAppearId",r_="data-"+qp(Aw);function s_(n){return n.props[r_]}function Cw({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function o_(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...f}=e;const h=n.getDefaultTransition();a=a?t_(a,h):h;const d=a==null?void 0:a.reduceMotion,m=a==null?void 0:a.skipAnimations;r&&(a=r);const p=[],v=o&&n.animationState&&n.animationState.getState()[o],S=a==null?void 0:a.path;S&&S.animateVisualElement(n,f,a,t,p);for(const M in f){const b=n.getValue(M,n.latestValues[M]??null),y=f[M];if(y===void 0||v&&Cw(v,M))continue;const _={delay:t,...Xp(a||{},M)};m&&(_.skipAnimations=!0);const C=b.get();if(C!==void 0&&!b.isAnimating()&&!Array.isArray(y)&&y===C&&!_.velocity){Gt.update(()=>b.set(y));continue}let P=!1;if(window.MotionHandoffAnimation){const D=s_(n);if(D){const I=window.MotionHandoffAnimation(D,M,Gt);I!==null&&(_.startTime=I,P=!0)}}Th(n,M);const T=d??n.shouldReduceMotion;b.start(jp(M,b,y,T&&i_.has(M)?{type:!1}:_,n,P));const L=b.animation;L&&p.push(L)}if(c){const M=()=>Gt.update(()=>{c&&Tw(n,c)});p.length?Promise.all(p).then(M):M()}return p}function bh(n,e,t={}){var h;const r=Vs(n,e,t.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(o_(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:m=0,staggerChildren:p,staggerDirection:v}=o;return Rw(n,e,d,m,p,v,t)}:()=>Promise.resolve(),{when:f}=o;if(f){const[d,m]=f==="beforeChildren"?[a,c]:[c,a];return d().then(()=>m())}else return Promise.all([a(),c(t.delay)])}function Rw(n,e,t=0,r=0,o=0,a=1,c){const f=[];for(const h of n.variantChildren)h.notify("AnimationStart",e),f.push(bh(h,e,{...c,delay:t+(typeof r=="function"?0:r)+e_(n.variantChildren,h,r,o,a)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(f)}function Pw(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>bh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=bh(n,e,t);else{const o=typeof e=="function"?Vs(n,e,t.custom):e;r=Promise.all(o_(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const Dw={test:n=>n==="auto",parse:n=>n},a_=n=>e=>e.test(n),l_=[Go,Ke,ir,Er,iE,nE,Dw],cv=n=>l_.find(a_(n));function Lw(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||yy(n):!0}const Nw=new Set(["brightness","contrast","saturate","opacity"]);function Iw(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Bp)||[];if(!r)return n;const o=t.replace(r,"");let a=Nw.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const Uw=/\b([a-z-]*)\(.*?\)/gu,Ah={...Vi,getAnimatableNone:n=>{const e=n.match(Uw);return e?e.map(Iw).join(" "):n}},Ch={...Vi,getAnimatableNone:n=>{const e=Vi.parse(n);return Vi.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},uv={...Go,transform:Math.round},Fw={rotate:Er,pathRotation:Er,rotateX:Er,rotateY:Er,rotateZ:Er,scale:pc,scaleX:pc,scaleY:pc,scaleZ:pc,skew:Er,skewX:Er,skewY:Er,distance:Ke,translateX:Ke,translateY:Ke,translateZ:Ke,x:Ke,y:Ke,z:Ke,perspective:Ke,transformPerspective:Ke,opacity:qa,originX:K0,originY:K0,originZ:Ke},au={borderWidth:Ke,borderTopWidth:Ke,borderRightWidth:Ke,borderBottomWidth:Ke,borderLeftWidth:Ke,borderRadius:Ke,borderTopLeftRadius:Ke,borderTopRightRadius:Ke,borderBottomRightRadius:Ke,borderBottomLeftRadius:Ke,width:Ke,maxWidth:Ke,height:Ke,maxHeight:Ke,top:Ke,right:Ke,bottom:Ke,left:Ke,inset:Ke,insetBlock:Ke,insetBlockStart:Ke,insetBlockEnd:Ke,insetInline:Ke,insetInlineStart:Ke,insetInlineEnd:Ke,padding:Ke,paddingTop:Ke,paddingRight:Ke,paddingBottom:Ke,paddingLeft:Ke,paddingBlock:Ke,paddingBlockStart:Ke,paddingBlockEnd:Ke,paddingInline:Ke,paddingInlineStart:Ke,paddingInlineEnd:Ke,margin:Ke,marginTop:Ke,marginRight:Ke,marginBottom:Ke,marginLeft:Ke,marginBlock:Ke,marginBlockStart:Ke,marginBlockEnd:Ke,marginInline:Ke,marginInlineStart:Ke,marginInlineEnd:Ke,fontSize:Ke,backgroundPositionX:Ke,backgroundPositionY:Ke,...Fw,zIndex:uv,fillOpacity:qa,strokeOpacity:qa,numOctaves:uv},kw={...au,color:hn,backgroundColor:hn,outlineColor:hn,fill:hn,stroke:hn,borderColor:hn,borderTopColor:hn,borderRightColor:hn,borderBottomColor:hn,borderLeftColor:hn,filter:Ah,WebkitFilter:Ah,mask:Ch,WebkitMask:Ch},c_=n=>kw[n],Ow=new Set([Ah,Ch]);function u_(n,e){let t=c_(n);return Ow.has(t)||(t=Vi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const Bw=new Set(["auto","none","0"]);function Vw(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!Bw.has(a)&&ko(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=u_(t,o)}class zw extends Wp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let p=e[m];if(typeof p=="string"&&(p=p.trim(),Op(p))){const v=n_(p,t.current);v!==void 0&&(e[m]=v),m===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!i_.has(r)||e.length!==2)return;const[o,a]=e,c=cv(o),f=cv(a),h=$0(o),d=$0(a);if(h!==d&&rs[r]){this.needsMeasurement=!0;return}if(c!==f)if(rv(c)&&rv(f))for(let m=0;m<e.length;m++){const p=e[m];typeof p=="string"&&(e[m]=parseFloat(p))}else rs[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||Lw(e[o]))&&r.push(o);r.length&&Vw(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=rs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=rs[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([h,d])=>{e.getValue(h).set(d)}),this.resolveNoneKeyframes()}}function f_(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=(t==null?void 0:t[n])??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Rh=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Hw(n){return xy(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:$p}=Ly(queueMicrotask,!1),ki={x:!1,y:!1};function d_(){return ki.x||ki.y}function Gw(n){return n==="x"||n==="y"?ki[n]?null:(ki[n]=!0,()=>{ki[n]=!1}):ki.x||ki.y?null:(ki.x=ki.y=!0,()=>{ki.x=ki.y=!1})}function h_(n,e){const t=f_(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Ww(n){return!(n.pointerType==="touch"||d_())}function Xw(n,e,t={}){const[r,o,a]=h_(n,t);return r.forEach(c=>{let f=!1,h=!1,d;const m=()=>{c.removeEventListener("pointerleave",M)},p=y=>{d&&(d(y),d=void 0),m()},v=y=>{f=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),h&&(h=!1,p(y))},S=()=>{f=!0,window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",v,o)},M=y=>{if(y.pointerType!=="touch"){if(f){h=!0;return}p(y)}},b=y=>{if(!Ww(y))return;h=!1;const _=e(c,y);typeof _=="function"&&(d=_,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",b,o),c.addEventListener("pointerdown",S,o)}),a}const p_=(n,e)=>e?n===e?!0:p_(n,e.parentElement):!1,Kp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,jw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Yw(n){return jw.has(n.tagName)||n.isContentEditable===!0}const qw=new Set(["INPUT","SELECT","TEXTAREA"]);function $w(n){return qw.has(n.tagName)||n.isContentEditable===!0}const Wc=new WeakSet;function fv(n){return e=>{e.key==="Enter"&&n(e)}}function Md(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Kw=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=fv(()=>{if(Wc.has(t))return;Md(t,"down");const o=fv(()=>{Md(t,"up")}),a=()=>Md(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function dv(n){return Kp(n)&&!d_()}const hv=new WeakSet;function Zw(n,e,t={}){const[r,o,a]=h_(n,t),c=f=>{const h=f.currentTarget;if(!dv(f)||hv.has(f))return;Wc.add(h),t.stopPropagation&&hv.add(f);const d=e(h,f),m={...o,capture:!0},p=(M,b)=>{window.removeEventListener("pointerup",v,m),window.removeEventListener("pointercancel",S,m),Wc.has(h)&&Wc.delete(h),dv(M)&&typeof d=="function"&&d(M,{success:b})},v=M=>{p(M,h===window||h===document||t.useGlobalTarget||p_(h,M.target))},S=M=>{p(M,!1)};window.addEventListener("pointerup",v,m),window.addEventListener("pointercancel",S,m)};return r.forEach(f=>{(t.useGlobalTarget?window:f).addEventListener("pointerdown",c,o),Hw(f)&&(f.addEventListener("focus",d=>Kw(d,o)),!Yw(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),a}function Zp(n){return xy(n)&&"ownerSVGElement"in n}const Xc=new WeakMap;let ns;const m_=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:Zp(r)&&"getBBox"in r?r.getBBox()[e]:r[t],Jw=m_("inline","width","offsetWidth"),Qw=m_("block","height","offsetHeight");function eT({target:n,borderBoxSize:e}){var t;(t=Xc.get(n))==null||t.forEach(r=>{r(n,{get width(){return Jw(n,e)},get height(){return Qw(n,e)}})})}function tT(n){n.forEach(eT)}function nT(){typeof ResizeObserver>"u"||(ns=new ResizeObserver(tT))}function iT(n,e){ns||nT();const t=f_(n);return t.forEach(r=>{let o=Xc.get(r);o||(o=new Set,Xc.set(r,o)),o.add(e),ns==null||ns.observe(r)}),()=>{t.forEach(r=>{const o=Xc.get(r);o==null||o.delete(e),o!=null&&o.size||ns==null||ns.unobserve(r)})}}const jc=new Set;let Lo;function rT(){Lo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};jc.forEach(e=>e(n))},window.addEventListener("resize",Lo)}function sT(n){return jc.add(n),Lo||rT(),()=>{jc.delete(n),!jc.size&&typeof Lo=="function"&&(window.removeEventListener("resize",Lo),Lo=void 0)}}function pv(n,e){return typeof n=="function"?sT(n):iT(n,e)}function oT(n){return Zp(n)&&n.tagName==="svg"}const aT=[...l_,hn,Vi],lT=n=>aT.find(a_(n)),mv=()=>({translate:0,scale:1,origin:0,originPoint:0}),No=()=>({x:mv(),y:mv()}),gv=()=>({min:0,max:0}),vn=()=>({x:gv(),y:gv()}),cT=new WeakMap;function Su(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function $a(n){return typeof n=="string"||Array.isArray(n)}const Jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qp=["initial",...Jp];function Mu(n){return Su(n.animate)||Qp.some(e=>$a(n[e]))}function g_(n){return!!(Mu(n)||n.variants)}function uT(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Pn(o))n.addValue(r,o);else if(Pn(a))n.addValue(r,Oo(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Oo(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Ph={current:null},v_={current:!1},fT=typeof window<"u";function dT(){if(v_.current=!0,!!fT)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ph.current=n.matches;n.addEventListener("change",e),e()}else Ph.current=!1}const vv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let lu={};function x_(n){lu=n}function hT(){return lu}class pT{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Wp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Gn.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Gt.render(this.render,!1,!0))};const{latestValues:d,renderState:m}=f;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=Mu(t),this.isVariantNode=g_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const S in v){const M=v[S];d[S]!==void 0&&Pn(M)&&M.set(d[S])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,cT.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(v_.current||dT(),this.shouldReduceMotion=Ph.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),as(this.notifyUpdate),as(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Qy.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:f,times:h,ease:d,duration:m}=t.accelerate,p=new Zy({element:this.current,name:e,keyframes:f,times:h,ease:d,duration:di(m)}),v=c(p);this.valueSubscriptions.set(e,()=>{v(),p.cancel()});return}const r=Xo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Gt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in lu){const t=lu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<vv.length;r++){const o=vv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=uT(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Oo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(vy(r)||yy(r))?r=parseFloat(r):!lT(r)&&Vi.test(t)&&(r=u_(e,t)),this.setBaseTarget(e,Pn(r)?r.get():r)),Pn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=Yp(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Pn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Up),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){$p.render(this.render)}}class y_ extends pT{constructor(){super(...arguments),this.KeyframeResolver=zw}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Pn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class cs{constructor(e){this.isMounted=!1,this.node=e}update(){}}function __({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function mT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function gT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Ed(n){return n===void 0||n===1}function Dh({scale:n,scaleX:e,scaleY:t}){return!Ed(n)||!Ed(e)||!Ed(t)}function Ds(n){return Dh(n)||S_(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function S_(n){return xv(n.x)||xv(n.y)}function xv(n){return n&&n!=="0%"}function cu(n,e,t){const r=n-t,o=e*r;return t+o}function yv(n,e,t,r,o){return o!==void 0&&(n=cu(n,o,r)),cu(n,t,r)+e}function Lh(n,e=0,t=1,r,o){n.min=yv(n.min,e,t,r,o),n.max=yv(n.max,e,t,r,o)}function M_(n,{x:e,y:t}){Lh(n.x,e.translate,e.scale,e.originPoint),Lh(n.y,t.translate,t.scale,t.originPoint)}const _v=.999999999999,Sv=1.0000000000001;function vT(n,e,t,r=!1){var f;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let h=0;h<o;h++){a=t[h],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Qi(n.x,-a.scroll.offset.x),Qi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,M_(n,c)),r&&Ds(a.latestValues)&&Yc(n,a.latestValues,(f=a.layout)==null?void 0:f.layoutBox))}e.x<Sv&&e.x>_v&&(e.x=1),e.y<Sv&&e.y>_v&&(e.y=1)}function Qi(n,e){n.min+=e,n.max+=e}function Mv(n,e,t,r,o=.5){const a=Ht(n.min,n.max,o);Lh(n,e,t,a,r)}function Ev(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Yc(n,e,t){const r=t??n;Mv(n.x,Ev(e.x,r.x),e.scaleX,e.scale,e.originX),Mv(n.y,Ev(e.y,r.y),e.scaleY,e.scale,e.originY)}function E_(n,e){return __(gT(n.getBoundingClientRect(),e))}function xT(n,e,t){const r=E_(n,t),{scroll:o}=e;return o&&(Qi(r.x,o.offset.x),Qi(r.y,o.offset.y)),r}const yT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_T=Wo.length;function ST(n,e,t){let r="",o=!0;for(let c=0;c<_T;c++){const f=Wo[c],h=n[f];if(h===void 0)continue;let d=!0;if(typeof h=="number")d=h===(f.startsWith("scale")?1:0);else{const m=parseFloat(h);d=f.startsWith("scale")?m===1:m===0}if(!d||t){const m=Rh(h,au[f]);if(!d){o=!1;const p=yT[f]||f;r+=`${p}(${m}) `}t&&(e[f]=m)}}const a=n.pathRotation;return a&&(o=!1,r+=`rotate(${Rh(a,au.pathRotation)}) `),r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function em(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,f=!1;for(const h in e){const d=e[h];if(Xo.has(h)){c=!0;continue}else if(Iy(h)){o[h]=d;continue}else{const m=Rh(d,au[h]);h.startsWith("origin")?(f=!0,a[h]=m):r[h]=m}}if(e.transform||(c||t?r.transform=ST(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:h="50%",originY:d="50%",originZ:m=0}=a;r.transformOrigin=`${h} ${d} ${m}`}}function w_(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function wv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Da={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ke.test(n))n=parseFloat(n);else return n;const t=wv(n,e.target.x),r=wv(n,e.target.y);return`${t}% ${r}%`}},MT={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Vi.parse(n);if(o.length>5)return r;const a=Vi.createTransformer(n),c=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,h=t.y.scale*e.y;o[0+c]/=f,o[1+c]/=h;const d=Ht(f,h,.5);return typeof o[2+c]=="number"&&(o[2+c]/=d),typeof o[3+c]=="number"&&(o[3+c]/=d),a(o)}},Nh={borderRadius:{...Da,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Da,borderTopRightRadius:Da,borderBottomLeftRadius:Da,borderBottomRightRadius:Da,boxShadow:MT};function T_(n,{layout:e,layoutId:t}){return Xo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Nh[n]||n==="opacity")}function tm(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const f in r)(Pn(r[f])||o&&Pn(o[f])||T_(f,n)||((c=t==null?void 0:t.getValue(f))==null?void 0:c.liveStyle)!==void 0)&&(a[f]=r[f]);return a}function ET(n){return window.getComputedStyle(n)}class wT extends y_{constructor(){super(...arguments),this.type="html",this.renderInstance=w_}readValueFromInstance(e,t){var r;if(Xo.has(t))return(r=this.projection)!=null&&r.isProjecting?xh(t):GE(e,t);{const o=ET(e),a=(Iy(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return E_(e,t)}build(e,t,r){em(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return tm(e,t,r)}}const TT={offset:"stroke-dashoffset",array:"stroke-dasharray"},bT={offset:"strokeDashoffset",array:"strokeDasharray"};function AT(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?TT:bT;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const CT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function b_(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...f},h,d,m){if(em(n,f,d),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:p,style:v}=n;p.transform&&(v.transform=p.transform,delete p.transform),(v.transform||p.transformOrigin)&&(v.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),v.transform&&(v.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete p.transformBox);for(const S of CT)p[S]!==void 0&&(v[S]=p[S],delete p[S]);e!==void 0&&(p.x=e),t!==void 0&&(p.y=t),r!==void 0&&(p.scale=r),o!==void 0&&AT(p,o,a,c,!1)}const A_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),C_=n=>typeof n=="string"&&n.toLowerCase()==="svg";function RT(n,e,t,r){w_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(A_.has(o)?o:qp(o),e.attrs[o])}function R_(n,e,t){const r=tm(n,e,t);for(const o in n)if(Pn(n[o])||Pn(e[o])){const a=Wo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class PT extends y_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Xo.has(t)){const r=c_(t);return r&&r.default||0}return t=A_.has(t)?t:qp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return R_(e,t,r)}build(e,t,r){b_(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){RT(e,t,r,o)}mount(e){this.isSVGTag=C_(e.tagName),super.mount(e)}}const DT=Qp.length;function P_(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?P_(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<DT;t++){const r=Qp[t],o=n.props[r];($a(o)||o===!1)&&(e[r]=o)}return e}function D_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const LT=[...Jp].reverse(),NT=Jp.length;function IT(n){return e=>Promise.all(e.map(({animation:t,options:r})=>Pw(n,t,r)))}function UT(n){let e=IT(n),t=Tv(),r=!0,o=!1;const a=d=>(m,p)=>{var S;const v=Vs(n,p,d==="exit"?(S=n.presenceContext)==null?void 0:S.custom:void 0);if(v){const{transition:M,transitionEnd:b,...y}=v;m={...m,...y,...b}}return m};function c(d){e=d(n)}function f(d){const{props:m}=n,p=P_(n.parent)||{},v=[],S=new Set;let M={},b=1/0;for(let _=0;_<NT;_++){const C=LT[_],P=t[C],T=m[C]!==void 0?m[C]:p[C],L=$a(T),D=C===d?P.isActive:null;D===!1&&(b=_);let I=T===p[C]&&T!==m[C]&&L;if(I&&(r||o)&&n.manuallyAnimateOnMount&&(I=!1),P.protectedKeys={...M},!P.isActive&&D===null||!T&&!P.prevProp||Su(T)||typeof T=="boolean")continue;if(C==="exit"&&P.isActive&&D!==!0){P.prevResolvedValues&&(M={...M,...P.prevResolvedValues});continue}const E=FT(P.prevProp,T);let N=E||C===d&&P.isActive&&!I&&L||_>b&&L,k=!1;const B=Array.isArray(T)?T:[T];let W=B.reduce(a(C),{});D===!1&&(W={});const{prevResolvedValues:ce={}}=P,pe={...ce,...W},$=z=>{N=!0,S.has(z)&&(k=!0,S.delete(z)),P.needsAnimating[z]=!0;const te=n.getValue(z);te&&(te.liveStyle=!1)};for(const z in pe){const te=W[z],re=ce[z];if(M.hasOwnProperty(z))continue;let U=!1;wh(te)&&wh(re)?U=!D_(te,re)||E:U=te!==re,U?te!=null?$(z):S.add(z):te!==void 0&&S.has(z)?$(z):P.protectedKeys[z]=!0}P.prevProp=T,P.prevResolvedValues=W,P.isActive&&(M={...M,...W}),(r||o)&&n.blockInitialAnimation&&(N=!1);const J=I&&E;N&&(!J||k)&&v.push(...B.map(z=>{const te={type:C};if(typeof z=="string"&&(r||o)&&!J&&n.manuallyAnimateOnMount&&n.parent){const{parent:re}=n,U=Vs(re,z);if(re.enteringChildren&&U){const{delayChildren:q}=U.transition||{};te.delay=e_(re.enteringChildren,n,q)}}return{animation:z,options:te}}))}if(S.size){const _={};if(typeof m.initial!="boolean"){const C=Vs(n,Array.isArray(m.initial)?m.initial[0]:m.initial);C&&C.transition&&(_.transition=C.transition)}S.forEach(C=>{const P=n.getBaseTarget(C),T=n.getValue(C);T&&(T.liveStyle=!0),_[C]=P??null}),v.push({animation:_})}let y=!!v.length;return r&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(v):Promise.resolve()}function h(d,m){var v;if(t[d].isActive===m)return Promise.resolve();(v=n.variantChildren)==null||v.forEach(S=>{var M;return(M=S.animationState)==null?void 0:M.setActive(d,m)}),t[d].isActive=m;const p=f(d);for(const S in t)t[S].protectedKeys={};return p}return{animateChanges:f,setActive:h,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Tv(),o=!0}}}function FT(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!D_(e,n):!1}function bs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tv(){return{animate:bs(!0),whileInView:bs(),whileHover:bs(),whileTap:bs(),whileDrag:bs(),whileFocus:bs(),exit:bs()}}function Ih(n,e){n.min=e.min,n.max=e.max}function Ni(n,e){Ih(n.x,e.x),Ih(n.y,e.y)}function bv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const L_=1e-4,kT=1-L_,OT=1+L_,N_=.01,BT=0-N_,VT=0+N_;function Wn(n){return n.max-n.min}function zT(n,e,t){return Math.abs(n-e)<=t}function Av(n,e,t,r=.5){n.origin=r,n.originPoint=Ht(e.min,e.max,n.origin),n.scale=Wn(t)/Wn(e),n.translate=Ht(t.min,t.max,n.origin)-n.originPoint,(n.scale>=kT&&n.scale<=OT||isNaN(n.scale))&&(n.scale=1),(n.translate>=BT&&n.translate<=VT||isNaN(n.translate))&&(n.translate=0)}function Xa(n,e,t,r){Av(n.x,e.x,t.x,r?r.originX:void 0),Av(n.y,e.y,t.y,r?r.originY:void 0)}function Cv(n,e,t,r=0){const o=r?Ht(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+Wn(e)}function HT(n,e,t,r){Cv(n.x,e.x,t.x,r==null?void 0:r.x),Cv(n.y,e.y,t.y,r==null?void 0:r.y)}function Rv(n,e,t,r=0){const o=r?Ht(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+Wn(e)}function uu(n,e,t,r){Rv(n.x,e.x,t.x,r==null?void 0:r.x),Rv(n.y,e.y,t.y,r==null?void 0:r.y)}function Pv(n,e,t,r,o){return n-=e,n=cu(n,1/t,r),o!==void 0&&(n=cu(n,1/o,r)),n}function GT(n,e=0,t=1,r=.5,o,a=n,c=n){if(ir.test(e)&&(e=parseFloat(e),e=Ht(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=Ht(a.min,a.max,r);n===a&&(f-=e),n.min=Pv(n.min,e,t,f,o),n.max=Pv(n.max,e,t,f,o)}function Dv(n,e,[t,r,o],a,c){GT(n,e[t],e[r],e[o],e.scale,a,c)}const WT=["x","scaleX","originX"],XT=["y","scaleY","originY"];function Lv(n,e,t,r){Dv(n.x,e,WT,t?t.x:void 0,r?r.x:void 0),Dv(n.y,e,XT,t?t.y:void 0,r?r.y:void 0)}function Nv(n){return n.translate===0&&n.scale===1}function I_(n){return Nv(n.x)&&Nv(n.y)}function Iv(n,e){return n.min===e.min&&n.max===e.max}function jT(n,e){return Iv(n.x,e.x)&&Iv(n.y,e.y)}function Uv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function U_(n,e){return Uv(n.x,e.x)&&Uv(n.y,e.y)}function Fv(n){return Wn(n.x)/Wn(n.y)}function kv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Ji(n){return[n("x"),n("y")]}function YT(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:d,rotate:m,pathRotation:p,rotateX:v,rotateY:S,skewX:M,skewY:b}=t;d&&(r=`perspective(${d}px) ${r}`),m&&(r+=`rotate(${m}deg) `),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotateX(${v}deg) `),S&&(r+=`rotateY(${S}deg) `),M&&(r+=`skewX(${M}deg) `),b&&(r+=`skewY(${b}deg) `)}const f=n.x.scale*e.x,h=n.y.scale*e.y;return(f!==1||h!==1)&&(r+=`scale(${f}, ${h})`),r||"none"}const F_=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],qT=F_.length,Ov=n=>typeof n=="string"?parseFloat(n):n,Bv=n=>typeof n=="number"||Ke.test(n);function $T(n,e,t,r,o,a){o?(n.opacity=Ht(0,t.opacity??1,KT(r)),n.opacityExit=Ht(e.opacity??1,0,ZT(r))):a&&(n.opacity=Ht(e.opacity??1,t.opacity??1,r));for(let c=0;c<qT;c++){const f=F_[c];let h=Vv(e,f),d=Vv(t,f);if(h===void 0&&d===void 0)continue;h||(h=0),d||(d=0),h===0||d===0||Bv(h)===Bv(d)?(n[f]=Math.max(Ht(Ov(h),Ov(d),r),0),(ir.test(d)||ir.test(h))&&(n[f]+="%")):n[f]=d}(e.rotate||t.rotate)&&(n.rotate=Ht(e.rotate||0,t.rotate||0,r))}function Vv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const KT=k_(0,.5,Cy),ZT=k_(.5,.95,wi);function k_(n,e,t){return r=>r<n?0:r>e?1:t(Ya(n,e,r))}function JT(n,e,t){const r=Pn(n)?n:Oo(n);return r.start(jp("",r,e,t)),r.animation}function Ka(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}const QT=(n,e)=>n.depth-e.depth;class eb{constructor(){this.children=[],this.isDirty=!1}add(e){Np(this.children,e),this.isDirty=!0}remove(e){nu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(QT),this.isDirty=!1,this.children.forEach(e)}}function tb(n,e){const t=Gn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(as(r),n(a-e))};return Gt.setup(r,!0),()=>as(r)}function qc(n){return Pn(n)?n.get():n}class nb{constructor(){this.members=[]}add(e){Np(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(nu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(nu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const $c={hasAnimatedSinceResize:!0,hasEverUpdated:!1},wd=["","X","Y","Z"],ib=1e3;let rb=0;function Td(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function O_(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=s_(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Gt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&O_(r)}function B_({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},f=e==null?void 0:e()){this.id=rb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ab),this.nodes.forEach(hb),this.nodes.forEach(pb),this.nodes.forEach(lb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new eb)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Up),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const h=this.eventHandlers.get(c);h&&h.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Zp(c)&&!oT(c),this.instance=c;const{layoutId:f,layout:h,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||f)&&(this.isLayoutDirty=!0),n){let m,p=0;const v=()=>this.root.updateBlockedByResize=!1;Gt.read(()=>{p=window.innerWidth}),n(c,()=>{const S=window.innerWidth;S!==p&&(p=S,this.root.updateBlockedByResize=!0,m&&m(),m=tb(v,250),$c.hasAnimatedSinceResize&&($c.hasAnimatedSinceResize=!1,this.nodes.forEach(Gv)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&d&&(f||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||d.getDefaultTransition()||yb,{onLayoutAnimationStart:b,onLayoutAnimationComplete:y}=d.getProps(),_=!this.targetLayout||!U_(this.targetLayout,S),C=!p&&v;if(this.options.layoutRoot||this.resumeFrom||C||p&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const P={...Xp(M,"layout"),onPlay:b,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P),this.setAnimationOrigin(m,C,P.path)}else p||Gv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),as(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mb),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&O_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const p=this.path[m];p.shouldResetTransform=!0,(typeof p.latestValues.x=="string"||typeof p.latestValues.y=="string")&&(p.isLayoutDirty=!0),p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:f,layout:h}=this.options;if(f===void 0&&!h)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const h=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),h&&this.nodes.forEach(ub),this.nodes.forEach(zv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Hv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(fb),this.nodes.forEach(db),this.nodes.forEach(sb),this.nodes.forEach(ob)):this.nodes.forEach(Hv),this.clearAllSnapshots();const f=Gn.now();Cn.delta=or(0,1e3/60,f-Cn.timestamp),Cn.timestamp=f,Cn.isProcessing=!0,gd.update.process(Cn),gd.preRender.process(Cn),gd.render.process(Cn),Cn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cb),this.sharedNodes.forEach(gb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Wn(this.snapshot.measuredBox.x)&&!Wn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=vn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!I_(this.projectionDelta),h=this.getTransformTemplate(),d=h?h(this.latestValues,""):void 0,m=d!==this.prevTransformTemplateValue;c&&this.instance&&(f||Ds(this.latestValues)||m)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let h=this.removeElementScroll(f);return c&&(h=this.removeTransform(h)),_b(h),{animationId:this.root.animationId,measuredBox:f,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:c}=this.options;if(!c)return vn();const f=c.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(Sb))){const{scroll:m}=this.root;m&&(Qi(f.x,m.offset.x),Qi(f.y,m.offset.y))}return f}removeElementScroll(c){var h;const f=vn();if(Ni(f,c),(h=this.scroll)!=null&&h.wasRoot)return f;for(let d=0;d<this.path.length;d++){const m=this.path[d],{scroll:p,options:v}=m;m!==this.root&&p&&v.layoutScroll&&(p.wasRoot&&Ni(f,c),Qi(f.x,p.offset.x),Qi(f.y,p.offset.y))}return f}applyTransform(c,f=!1,h){var m,p;const d=h||vn();Ni(d,c);for(let v=0;v<this.path.length;v++){const S=this.path[v];!f&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(Qi(d.x,-S.scroll.offset.x),Qi(d.y,-S.scroll.offset.y)),Ds(S.latestValues)&&Yc(d,S.latestValues,(m=S.layout)==null?void 0:m.layoutBox)}return Ds(this.latestValues)&&Yc(d,this.latestValues,(p=this.layout)==null?void 0:p.layoutBox),d}removeTransform(c){var h;const f=vn();Ni(f,c);for(let d=0;d<this.path.length;d++){const m=this.path[d];if(!Ds(m.latestValues))continue;let p;m.instance&&(Dh(m.latestValues)&&m.updateSnapshot(),p=vn(),Ni(p,m.measurePageBox())),Lv(f,m.latestValues,(h=m.snapshot)==null?void 0:h.layoutBox,p)}return Ds(this.latestValues)&&Lv(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Cn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var S;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:p}=this.options;if(!this.layout||!(m||p))return;this.resolvedRelativeTargetAt=Cn.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=vn(),this.targetWithTransforms=vn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ni(this.target,this.layout.layoutBox),M_(this.target,this.targetDelta)):Ni(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Dh(this.parent.latestValues)||S_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,f,h){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),uu(this.relativeTargetOrigin,f,h,this.options.layoutAnchor||void 0),Ni(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Cn.timestamp&&(h=!1),h)return;const{layout:d,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||m))return;Ni(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;vT(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=vn());const{target:S}=c;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(bv(this.prevProjectionDelta.x,this.projectionDelta.x),bv(this.prevProjectionDelta.y,this.projectionDelta.y)),Xa(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!kv(this.projectionDelta.x,this.prevProjectionDelta.x)||!kv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=No(),this.projectionDelta=No(),this.projectionDeltaWithTransform=No()}setAnimationOrigin(c,f=!1,h){const d=this.snapshot,m=d?d.latestValues:{},p={...this.latestValues},v=No();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const S=vn(),M=d?d.source:void 0,b=this.layout?this.layout.source:void 0,y=M!==b,_=this.getStack(),C=!_||_.members.length<=1,P=!!(y&&!C&&this.options.crossfade===!0&&!this.path.some(xb));this.animationProgress=0;let T;const L=h==null?void 0:h.interpolateProjection(c);this.mixTargetDelta=D=>{const I=D/1e3,E=L==null?void 0:L(I);E?(v.x.translate=E.x,v.x.scale=Ht(c.x.scale,1,I),v.x.origin=c.x.origin,v.x.originPoint=c.x.originPoint,v.y.translate=E.y,v.y.scale=Ht(c.y.scale,1,I),v.y.origin=c.y.origin,v.y.originPoint=c.y.originPoint):(Wv(v.x,c.x,I),Wv(v.y,c.y,I)),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(uu(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),vb(this.relativeTarget,this.relativeTargetOrigin,S,I),T&&jT(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=vn()),Ni(T,this.relativeTarget)),y&&(this.animationValues=p,$T(p,m,this.latestValues,I,P,C)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=p),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var f,h,d;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(d=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||d.stop(),this.pendingAnimation&&(as(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Gt.update(()=>{$c.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Oo(0)),this.motionValue.jump(0,!1),this.currentAnimation=JT(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),c.onUpdate&&c.onUpdate(m)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ib),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:h,layout:d,latestValues:m}=c;if(!(!f||!h||!d)){if(this!==c&&this.layout&&d&&V_(this.options.animationType,this.layout.layoutBox,d.layoutBox)){h=this.target||vn();const p=Wn(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+p;const v=Wn(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+v}Ni(f,h),Yc(f,m),Xa(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new nb),this.sharedNodes.get(c).add(f);const d=f.options.initialPromotionConfig;f.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:h}={}){const d=this.getStack();d&&d.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(f=!0),!f)return;const d={};h.z&&Td("z",c,d,this.animationValues);for(let m=0;m<wd.length;m++)Td(`rotate${wd[m]}`,c,d,this.animationValues),Td(`skew${wd[m]}`,c,d,this.animationValues);c.render();for(const m in d)c.setStaticValue(m,d[m]),this.animationValues&&(this.animationValues[m]=d[m]);c.scheduleRender()}applyProjectionStyles(c,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=qc(f==null?void 0:f.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=qc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Ds(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=d.animationValues||d.latestValues;this.applyTransformsToTarget();let p=YT(this.projectionDeltaWithTransform,this.treeScale,m);h&&(p=h(m,p)),c.transform=p;const{x:v,y:S}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,d.animationValues?c.opacity=d===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=d===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in Nh){if(m[M]===void 0)continue;const{correct:b,applyTo:y,isCSSVariable:_}=Nh[M],C=p==="none"?m[M]:b(m[M],d);if(y){const P=y.length;for(let T=0;T<P;T++)c[y[T]]=C}else _?this.options.visualElement.renderState.vars[M]=C:c[M]=C}this.options.layoutId&&(c.pointerEvents=d===this?qc(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(zv),this.root.sharedNodes.clear()}}}function sb(n){n.updateLayout()}function ob(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Ji(p=>{const v=c?e.measuredBox[p]:e.layoutBox[p],S=Wn(v);v.min=r[p].min,v.max=v.min+S});else if(a==="x"||a==="y"){const p=a==="x"?"y":"x";Ih(c?e.measuredBox[p]:e.layoutBox[p],r[p])}else V_(a,e.layoutBox,r)&&Ji(p=>{const v=c?e.measuredBox[p]:e.layoutBox[p],S=Wn(r[p]);v.max=v.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[p].max=n.relativeTarget[p].min+S)});const f=No();Xa(f,r,e.layoutBox);const h=No();c?Xa(h,n.applyTransform(o,!0),e.measuredBox):Xa(h,r,e.layoutBox);const d=!I_(f);let m=!1;if(!n.resumeFrom){const p=n.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:v,layout:S}=p;if(v&&S){const M=n.options.layoutAnchor||void 0,b=vn();uu(b,e.layoutBox,v.layoutBox,M);const y=vn();uu(y,r,S.layoutBox,M),U_(b,y)||(m=!0),p.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=b,n.relativeParent=p)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:h,layoutDelta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function ab(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function lb(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function cb(n){n.clearSnapshot()}function zv(n){n.clearMeasurements()}function ub(n){n.isLayoutDirty=!0,n.updateLayout()}function Hv(n){n.isLayoutDirty=!1}function fb(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function db(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Gv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function hb(n){n.resolveTargetDelta()}function pb(n){n.calcProjection()}function mb(n){n.resetSkewAndRotation()}function gb(n){n.removeLeadSnapshot()}function Wv(n,e,t){n.translate=Ht(e.translate,0,t),n.scale=Ht(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Xv(n,e,t,r){n.min=Ht(e.min,t.min,r),n.max=Ht(e.max,t.max,r)}function vb(n,e,t,r){Xv(n.x,e.x,t.x,r),Xv(n.y,e.y,t.y,r)}function xb(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const yb={duration:.45,ease:[.4,0,.1,1]},jv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Yv=jv("applewebkit/")&&!jv("chrome/")?Math.round:wi;function qv(n){n.min=Yv(n.min),n.max=Yv(n.max)}function _b(n){qv(n.x),qv(n.y)}function V_(n,e,t){return n==="position"||n==="preserve-aspect"&&!zT(Fv(e),Fv(t),.2)}function Sb(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const Mb=B_({attachResizeListener:(n,e)=>Ka(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bd={current:void 0},z_=B_({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!bd.current){const n=new Mb({});n.mount(window),n.setOptions({layoutScroll:!0}),bd.current=n}return bd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),H_=je.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Eb(n=!0){const e=je.useContext(Lp);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=je.useId();je.useEffect(()=>{if(n)return o(a)},[n]);const c=je.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const G_=je.createContext({strict:!1}),$v={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Kv=!1;function wb(){if(Kv)return;const n={};for(const e in $v)n[e]={isEnabled:t=>$v[e].some(r=>!!t[r])};x_(n),Kv=!0}function W_(){return wb(),hT()}function Tb(n){const e=W_();for(const t in n)e[t]={...e[t],...n[t]};x_(e)}const bb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function fu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||bb.has(n)}let X_=n=>!fu(n);function Ab(n){typeof n=="function"&&(X_=e=>e.startsWith("on")?!fu(e):n(e))}try{Ab(require("@emotion/is-prop-valid").default)}catch{}function Cb(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||Pn(n[o])||(X_(o)||t===!0&&fu(o)||!e&&!fu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Eu=je.createContext({});function Rb(n,e){if(Mu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||$a(t)?t:void 0,animate:$a(r)?r:void 0}}return n.inherit!==!1?e:{}}function Pb(n){const{initial:e,animate:t}=Rb(n,je.useContext(Eu));return je.useMemo(()=>({initial:e,animate:t}),[Zv(e),Zv(t)])}function Zv(n){return Array.isArray(n)?n.join(" "):n}const nm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function j_(n,e,t){for(const r in e)!Pn(e[r])&&!T_(r,t)&&(n[r]=e[r])}function Db({transformTemplate:n},e){return je.useMemo(()=>{const t=nm();return em(t,e,n),Object.assign({},t.vars,t.style)},[e])}function Lb(n,e){const t=n.style||{},r={};return j_(r,t,n),Object.assign(r,Db(n,e)),r}function Nb(n,e){const t={},r=Lb(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const Y_=()=>({...nm(),attrs:{}});function Ib(n,e,t,r){const o=je.useMemo(()=>{const a=Y_();return b_(a,e,C_(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};j_(a,n.style,n),o.style={...a,...o.style}}return o}const Ub=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function im(n){return typeof n!="string"||n.includes("-")?!1:!!(Ub.indexOf(n)>-1||/[A-Z]/u.test(n))}function Fb(n,e,t,{latestValues:r},o,a=!1,c){const h=(c??im(n)?Ib:Nb)(e,r,o,n),d=Cb(e,typeof n=="string",a),m=n!==je.Fragment?{...d,...h,ref:t}:{},{children:p}=e,v=je.useMemo(()=>Pn(p)?p.get():p,[p]);return je.createElement(n,{...m,children:v})}function kb({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:Ob(t,r,o,n),renderState:e()}}function Ob(n,e,t,r){const o={},a=r(n,{});for(const v in a)o[v]=qc(a[v]);let{initial:c,animate:f}=n;const h=Mu(n),d=g_(n);e&&d&&!h&&n.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||c===!1;const p=m?f:c;if(p&&typeof p!="boolean"&&!Su(p)){const v=Array.isArray(p)?p:[p];for(let S=0;S<v.length;S++){const M=Yp(n,v[S]);if(M){const{transitionEnd:b,transition:y,..._}=M;for(const C in _){let P=_[C];if(Array.isArray(P)){const T=m?P.length-1:0;P=P[T]}P!==null&&(o[C]=P)}for(const C in b)o[C]=b[C]}}}return o}const q_=n=>(e,t)=>{const r=je.useContext(Eu),o=je.useContext(Lp),a=()=>kb(n,e,r,o);return t?a():F1(a)},Bb=q_({scrapeMotionValuesFromProps:tm,createRenderState:nm}),Vb=q_({scrapeMotionValuesFromProps:R_,createRenderState:Y_}),zb=Symbol.for("motionComponentSymbol");function Hb(n,e,t){const r=je.useRef(t);je.useInsertionEffect(()=>{r.current=t});const o=je.useRef(null);return je.useCallback(a=>{var f;a&&((f=n.onMount)==null||f.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=r.current;if(typeof c=="function")if(a){const h=c(a);typeof h=="function"&&(o.current=h)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const $_=je.createContext({});function Po(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Gb(n,e,t,r,o,a){var P,T;const{visualElement:c}=je.useContext(Eu),f=je.useContext(G_),h=je.useContext(Lp),d=je.useContext(H_),m=d.reducedMotion,p=d.skipAnimations,v=je.useRef(null),S=je.useRef(!1);r=r||f.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m,skipAnimations:p,isSVG:a}),S.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const M=v.current,b=je.useContext($_);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&Wb(v.current,t,o,b);const y=je.useRef(!1);je.useInsertionEffect(()=>{M&&y.current&&M.update(t,h)});const _=t[r_],C=je.useRef(!!_&&typeof window<"u"&&!((P=window.MotionHandoffIsComplete)!=null&&P.call(window,_))&&((T=window.MotionHasOptimisedAnimation)==null?void 0:T.call(window,_)));return O1(()=>{S.current=!0,M&&(y.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),C.current&&M.animationState&&M.animationState.animateChanges())}),je.useEffect(()=>{M&&(!C.current&&M.animationState&&M.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var L;(L=window.MotionHandoffMarkAsComplete)==null||L.call(window,_)}),C.current=!1),M.enteringChildren=void 0)}),M}function Wb(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:f,layoutScroll:h,layoutRoot:d,layoutAnchor:m,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:K_(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||f&&Po(f),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:h,layoutRoot:d,layoutAnchor:m})}function K_(n){if(n)return n.options.allowProjection!==!1?n.projection:K_(n.parent)}function Ad(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&Tb(r);const a=t?t==="svg":im(n),c=a?Vb:Bb;function f(d,m){let p;const v={...je.useContext(H_),...d,layoutId:Xb(d)},{isStatic:S}=v,M=Pb(d),b=c(d,S);if(!S&&typeof window<"u"){jb();const y=Yb(v);p=y.MeasureLayout,M.visualElement=Gb(n,b,v,o,y.ProjectionNode,a)}return O.jsxs(Eu.Provider,{value:M,children:[p&&M.visualElement?O.jsx(p,{visualElement:M.visualElement,...v}):null,Fb(n,d,Hb(b,M.visualElement,m),b,S,e,a)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=je.forwardRef(f);return h[zb]=n,h}function Xb({layoutId:n}){const e=je.useContext(gy).id;return e&&n!==void 0?e+"-"+n:n}function jb(n,e){je.useContext(G_).strict}function Yb(n){const e=W_(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function qb(n,e){if(typeof Proxy>"u")return Ad;const t=new Map,r=(a,c)=>Ad(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Ad(c,void 0,n,e)),t.get(c))})}const $b=(n,e)=>e.isSVG??im(n)?new PT(e):new wT(e,{allowProjection:n!==je.Fragment});class Kb extends cs{constructor(e){super(e),e.animationState||(e.animationState=UT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Su(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Zb=0;class Jb extends cs{constructor(){super(...arguments),this.id=Zb++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:f}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const h=Vs(this.node,c,f);if(h){const{transition:d,transitionEnd:m,...p}=h;for(const v in p)(a=this.node.getValue(v))==null||a.jump(p[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const Qb={animation:{Feature:Kb},exit:{Feature:Jb}};function nl(n){return{point:{x:n.pageX,y:n.pageY}}}const eA=n=>e=>Kp(e)&&n(e,nl(e));function ja(n,e,t,r){return Ka(n,e,eA(t),r)}const Z_=({current:n})=>n?n.ownerDocument.defaultView:null,Jv=(n,e)=>Math.abs(n-e);function tA(n,e){const t=Jv(n.x,e.x),r=Jv(n.y,e.y);return Math.sqrt(t**2+r**2)}const Qv=new Set(["auto","scroll"]);class J_{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=mc(this.lastRawMoveEventInfo,this.transformPagePoint));const M=Cd(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,y=tA(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!y)return;const{point:_}=M,{timestamp:C}=Cn;this.history.push({..._,timestamp:C});const{onStart:P,onMove:T}=this.handlers;b||(P&&P(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,M)},this.handlePointerMove=(M,b)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=b,this.lastMoveEventInfo=mc(b,this.transformPagePoint),Gt.update(this.updatePoint,!0)},this.handlePointerUp=(M,b)=>{this.end();const{onEnd:y,onSessionEnd:_,resumeAnimation:C}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=Cd(M.type==="pointercancel"?this.lastMoveEventInfo:mc(b,this.transformPagePoint),this.history);this.startEvent&&y&&y(M,P),_&&_(M,P)},!Kp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const h=nl(e),d=mc(h,this.transformPagePoint),{point:m}=d,{timestamp:p}=Cn;this.history=[{...m,timestamp:p}];const{onSessionStart:v}=t;v&&v(e,Cd(d,this.history));const S={passive:!0,capture:!0};this.removeListeners=Qa(ja(this.contextWindow,"pointermove",this.handlePointerMove,S),ja(this.contextWindow,"pointerup",this.handlePointerUp,S),ja(this.contextWindow,"pointercancel",this.handlePointerUp,S)),f&&this.startScrollTracking(f)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(Qv.has(r.overflowX)||Qv.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Gt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),as(this.updatePoint)}}function mc(n,e){return e?{point:e(n.point)}:n}function ex(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Cd({point:n},e){return{point:n,delta:ex(n,Q_(e)),offset:ex(n,nA(e)),velocity:iA(e,.1)}}function nA(n){return n[0]}function Q_(n){return n[n.length-1]}function iA(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Q_(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>di(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>di(e)*2&&(r=n[1]);const a=Ei(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function rA(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Ht(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Ht(t,n,r.max):Math.min(n,t)),n}function tx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function sA(n,{top:e,left:t,bottom:r,right:o}){return{x:tx(n.x,t,o),y:tx(n.y,e,r)}}function nx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function oA(n,e){return{x:nx(n.x,e.x),y:nx(n.y,e.y)}}function aA(n,e){let t=.5;const r=Wn(n),o=Wn(e);return o>r?t=Ya(e.min,e.max-r,n.min):r>o&&(t=Ya(n.min,n.max-o,e.min)),or(0,1,t)}function lA(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Uh=.35;function cA(n=Uh){return n===!1?n=0:n===!0&&(n=Uh),{x:ix(n,"left","right"),y:ix(n,"top","bottom")}}function ix(n,e,t){return{min:rx(n,e),max:rx(n,t)}}function rx(n,e){return typeof n=="number"?n:n[e]||0}const uA=new WeakMap;class fA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=p=>{t&&this.snapToCursor(nl(p).point),this.stopAnimation()},c=(p,v)=>{const{drag:S,dragPropagation:M,onDragStart:b}=this.getProps();if(S&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Gw(S),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ji(_=>{let C=this.getAxisMotionValue(_).get()||0;if(ir.test(C)){const{projection:P}=this.visualElement;if(P&&P.layout){const T=P.layout.layoutBox[_];T&&(C=Wn(T)*(parseFloat(C)/100))}}this.originPoint[_]=C}),b&&Gt.update(()=>b(p,v),!1,!0),Th(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},f=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:M,onDirectionLock:b,onDrag:y}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:_}=v;if(M&&this.currentDirection===null){this.currentDirection=hA(_),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",v.point,_),this.updateAxis("y",v.point,_),this.visualElement.render(),y&&Gt.update(()=>y(p,v),!1,!0)},h=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v,this.stop(p,v),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:p}=this.getProps();(p||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new J_(e,{onSessionStart:a,onStart:c,onMove:f,onSessionEnd:h,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Z_(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:f}=this.getProps();f&&Gt.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!gc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=rA(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Po(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=sA(r.layoutBox,e):this.constraints=!1,this.elastic=cA(t),o!==this.constraints&&!Po(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Ji(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=lA(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Po(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=xT(r,o.root,this.visualElement.getTransformPagePoint());let c=oA(o.layout.layoutBox,a);if(t){const f=t(mT(c));this.hasMutatedConstraints=!!f,f&&(c=__(f))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),h=this.constraints||{},d=Ji(m=>{if(!gc(m,t,this.currentDirection))return;let p=h&&h[m]||{};(c===!0||c===m)&&(p={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...a,...p};return this.startAxisValueAnimation(m,M)});return Promise.all(d).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Th(this.visualElement,e),r.start(jp(e,r,0,t,this.visualElement,!1))}stopAnimation(){Ji(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ji(t=>{const{drag:r}=this.getProps();if(!gc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:f}=o.layout.layoutBox[t],h=a.get()||0;a.set(e[t]-Ht(c,f,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Po(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ji(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const h=f.get();o[c]=aA({min:h,max:h},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ji(c=>{if(!gc(c,e,null))return;const f=this.getAxisMotionValue(c),{min:h,max:d}=this.constraints[c];f.set(Ht(h,d,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;uA.set(this.visualElement,this);const e=this.visualElement.current,t=ja(e,"pointerdown",d=>{const{drag:m,dragListener:p=!0}=this.getProps(),v=d.target,S=v!==e&&$w(v);m&&p&&!S&&this.start(d)});let r;const o=()=>{const{dragConstraints:d}=this.getProps();Po(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),r||(r=dA(e,d.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Gt.read(o);const f=Ka(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:m})=>{this.isDragging&&m&&(Ji(p=>{const v=this.getAxisMotionValue(p);v&&(this.originPoint[p]+=d[p].translate,v.set(v.get()+d[p].translate))}),this.visualElement.render())}));return()=>{f(),t(),c(),h&&h(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Uh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:f}}}function sx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function dA(n,e,t){const r=pv(n,sx(t)),o=pv(e,sx(t));return()=>{r(),o()}}function gc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function hA(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class pA extends cs{constructor(e){super(e),this.removeGroupControls=wi,this.removeListeners=wi,this.controls=new fA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||wi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Rd=n=>(e,t)=>{n&&Gt.update(()=>n(e,t),!1,!0)};class mA extends cs{constructor(){super(...arguments),this.removePointerDownListener=wi}onPointerDown(e){this.session=new J_(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Z_(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Rd(e),onStart:Rd(t),onMove:Rd(r),onEnd:(a,c)=>{delete this.session,o&&Gt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=ja(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Pd=!1;class gA extends je.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),Pd&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),$c.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Pd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Gt.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),$p.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Pd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function eS(n){const[e,t]=Eb(),r=je.useContext(gy);return O.jsx(gA,{...n,layoutGroup:r,switchLayoutGroup:je.useContext($_),isPresent:e,safeToRemove:t})}const vA={pan:{Feature:mA},drag:{Feature:pA,ProjectionNode:z_,MeasureLayout:eS}};function ox(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Gt.postRender(()=>a(e,nl(e)))}class xA extends cs{mount(){const{current:e}=this.node;e&&(this.unmount=Xw(e,(t,r)=>(ox(this.node,r,"Start"),o=>ox(this.node,o,"End"))))}unmount(){}}class yA extends cs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qa(Ka(this.node.current,"focus",()=>this.onFocus()),Ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ax(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Gt.postRender(()=>a(e,nl(e)))}class _A extends cs{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=Zw(e,(o,a)=>(ax(this.node,a,"Start"),(c,{success:f})=>ax(this.node,c,f?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Fh=new WeakMap,Dd=new WeakMap,SA=n=>{const e=Fh.get(n.target);e&&e(n)},MA=n=>{n.forEach(SA)};function EA({root:n,...e}){const t=n||document;Dd.has(t)||Dd.set(t,{});const r=Dd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(MA,{root:n,...e})),r[o]}function wA(n,e,t){const r=EA(e);return Fh.set(n,t),r.observe(n),()=>{Fh.delete(n),r.unobserve(n)}}const TA={some:0,all:1};class bA extends cs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var h;(h=this.stopObserver)==null||h.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:TA[o]},f=d=>{const{isIntersecting:m}=d;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:p,onViewportLeave:v}=this.node.getProps(),S=m?p:v;S&&S(d)};this.stopObserver=wA(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(AA(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function AA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const CA={inView:{Feature:bA},tap:{Feature:_A},focus:{Feature:yA},hover:{Feature:xA}},RA={layout:{ProjectionNode:z_,MeasureLayout:eS}},PA={...Qb,...CA,...vA,...RA},ht=qb(PA,$b);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),lx=n=>{const e=LA(n);return e.charAt(0).toUpperCase()+e.slice(1)},tS=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=je.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...f},h)=>je.createElement("svg",{ref:h,...NA,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:tS("lucide",o),...f},[...c.map(([d,m])=>je.createElement(d,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=(n,e)=>{const t=je.forwardRef(({className:r,...o},a)=>je.createElement(IA,{ref:a,iconNode:e,className:tS(`lucide-${DA(lx(n))}`,`lucide-${n}`,r),...o}));return t.displayName=lx(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],FA=_n("arrow-right",UA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],OA=_n("chevron-down",kA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],kh=_n("code-xml",BA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],zA=_n("cpu",VA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],GA=_n("download",HA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],XA=_n("external-link",WA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],nS=_n("github",jA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],qA=_n("globe",YA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],KA=_n("layers",$A);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],JA=_n("lightbulb",ZA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],eC=_n("linkedin",QA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],nC=_n("mail",tC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],rC=_n("map-pin",iC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],oC=_n("menu",sC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],iS=_n("rocket",aC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],cC=_n("terminal",lC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],fC=_n("twitter",uC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hC=_n("x",dC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],cx=_n("zap",pC);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rm="185",mC=0,ux=1,gC=2,Kc=1,vC=2,Va=3,ls=0,ri=1,wr=2,br=0,Io=1,Oh=2,fx=3,dx=4,xC=5,Ns=100,yC=101,_C=102,SC=103,MC=104,EC=200,wC=201,TC=202,bC=203,Bh=204,Vh=205,AC=206,CC=207,RC=208,PC=209,DC=210,LC=211,NC=212,IC=213,UC=214,zh=0,Hh=1,Gh=2,Bo=3,Wh=4,Xh=5,jh=6,Yh=7,rS=0,FC=1,kC=2,rr=0,sS=1,oS=2,aS=3,lS=4,cS=5,uS=6,fS=7,dS=300,zs=301,Vo=302,Ld=303,Nd=304,wu=306,qh=1e3,Tr=1001,$h=1002,Dn=1003,OC=1004,vc=1005,On=1006,Id=1007,ks=1008,Mi=1009,hS=1010,pS=1011,Za=1012,sm=1013,ar=1014,tr=1015,Cr=1016,om=1017,am=1018,Ja=1020,mS=35902,gS=35899,vS=1021,xS=1022,Bi=1023,Rr=1026,Os=1027,yS=1028,lm=1029,Hs=1030,cm=1031,um=1033,Zc=33776,Jc=33777,Qc=33778,eu=33779,Kh=35840,Zh=35841,Jh=35842,Qh=35843,ep=36196,tp=37492,np=37496,ip=37488,rp=37489,du=37490,sp=37491,op=37808,ap=37809,lp=37810,cp=37811,up=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,vp=37819,xp=37820,yp=37821,_p=36492,Sp=36494,Mp=36495,Ep=36283,wp=36284,hu=36285,Tp=36286,BC=3200,hx=0,VC=1,is="",_i="srgb",pu="srgb-linear",mu="linear",Vt="srgb",go=7680,px=519,zC=512,HC=513,GC=514,fm=515,WC=516,XC=517,dm=518,jC=519,mx=35044,gx="300 es",nr=2e3,gu=2001;function YC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qC(){const n=vu("canvas");return n.style.display="block",n}const vx={};function xx(...n){const e="THREE."+n.shift();console.log(e,...n)}function _S(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=_S(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Dt(...n){n=_S(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Uo(...n){const e=n.join(" ");e in vx||(vx[e]=!0,at(...n))}function $C(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const KC={[zh]:Hh,[Gh]:jh,[Wh]:Yh,[Bo]:Xh,[Hh]:zh,[jh]:Gh,[Yh]:Wh,[Xh]:Bo};class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,bp=180/Math.PI;function il(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function ZC(n,e){return(n%e+e)%e}function Fd(n,e,t){return(1-t)*n+t*e}function La(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vm=class vm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vm.prototype.isVector2=!0;let Ct=vm;class jo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,f){let h=r[o+0],d=r[o+1],m=r[o+2],p=r[o+3],v=a[c+0],S=a[c+1],M=a[c+2],b=a[c+3];if(p!==b||h!==v||d!==S||m!==M){let y=h*v+d*S+m*M+p*b;y<0&&(v=-v,S=-S,M=-M,b=-b,y=-y);let _=1-f;if(y<.9995){const C=Math.acos(y),P=Math.sin(C);_=Math.sin(_*C)/P,f=Math.sin(f*C)/P,h=h*_+v*f,d=d*_+S*f,m=m*_+M*f,p=p*_+b*f}else{h=h*_+v*f,d=d*_+S*f,m=m*_+M*f,p=p*_+b*f;const C=1/Math.sqrt(h*h+d*d+m*m+p*p);h*=C,d*=C,m*=C,p*=C}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,r,o,a,c){const f=r[o],h=r[o+1],d=r[o+2],m=r[o+3],p=a[c],v=a[c+1],S=a[c+2],M=a[c+3];return e[t]=f*M+m*p+h*S-d*v,e[t+1]=h*M+m*v+d*p-f*S,e[t+2]=d*M+m*S+f*v-h*p,e[t+3]=m*M-f*p-h*v-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(r/2),m=f(o/2),p=f(a/2),v=h(r/2),S=h(o/2),M=h(a/2);switch(c){case"XYZ":this._x=v*m*p+d*S*M,this._y=d*S*p-v*m*M,this._z=d*m*M+v*S*p,this._w=d*m*p-v*S*M;break;case"YXZ":this._x=v*m*p+d*S*M,this._y=d*S*p-v*m*M,this._z=d*m*M-v*S*p,this._w=d*m*p+v*S*M;break;case"ZXY":this._x=v*m*p-d*S*M,this._y=d*S*p+v*m*M,this._z=d*m*M+v*S*p,this._w=d*m*p-v*S*M;break;case"ZYX":this._x=v*m*p-d*S*M,this._y=d*S*p+v*m*M,this._z=d*m*M-v*S*p,this._w=d*m*p+v*S*M;break;case"YZX":this._x=v*m*p+d*S*M,this._y=d*S*p+v*m*M,this._z=d*m*M-v*S*p,this._w=d*m*p-v*S*M;break;case"XZY":this._x=v*m*p-d*S*M,this._y=d*S*p-v*m*M,this._z=d*m*M+v*S*p,this._w=d*m*p+v*S*M;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],f=t[5],h=t[9],d=t[2],m=t[6],p=t[10],v=r+f+p;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-h)*S,this._y=(a-d)*S,this._z=(c-o)*S}else if(r>f&&r>p){const S=2*Math.sqrt(1+r-f-p);this._w=(m-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(a+d)/S}else if(f>p){const S=2*Math.sqrt(1+f-r-p);this._w=(a-d)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+p-r-f);this._w=(c-o)/S,this._x=(a+d)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,f=t._x,h=t._y,d=t._z,m=t._w;return this._x=r*m+c*f+o*d-a*h,this._y=o*m+c*h+a*f-r*d,this._z=a*m+c*d+r*h-o*f,this._w=c*m-r*f-o*h-a*d,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,c=-c,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),m=Math.sin(d);h=Math.sin(h*d)/m,t=Math.sin(t*d)/m,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xm=class xm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*o-f*r),m=2*(f*t-a*o),p=2*(a*r-c*t);return this.x=t+h*d+c*p-f*m,this.y=r+h*m+f*d-a*p,this.z=o+h*p+a*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-a*f,this.y=a*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kd.copy(this).projectOnVector(e),this.sub(kd)}reflect(e){return this.sub(kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xm.prototype.isVector3=!0;let ee=xm;const kd=new ee,yx=new jo,ym=class ym{constructor(e,t,r,o,a,c,f,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,h,d)}set(e,t,r,o,a,c,f,h,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=a,m[5]=h,m[6]=r,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[3],h=r[6],d=r[1],m=r[4],p=r[7],v=r[2],S=r[5],M=r[8],b=o[0],y=o[3],_=o[6],C=o[1],P=o[4],T=o[7],L=o[2],D=o[5],I=o[8];return a[0]=c*b+f*C+h*L,a[3]=c*y+f*P+h*D,a[6]=c*_+f*T+h*I,a[1]=d*b+m*C+p*L,a[4]=d*y+m*P+p*D,a[7]=d*_+m*T+p*I,a[2]=v*b+S*C+M*L,a[5]=v*y+S*P+M*D,a[8]=v*_+S*T+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8];return t*c*m-t*f*d-r*a*m+r*f*h+o*a*d-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],p=m*c-f*d,v=f*h-m*a,S=d*a-c*h,M=t*p+r*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=p*b,e[1]=(o*d-m*r)*b,e[2]=(f*r-o*c)*b,e[3]=v*b,e[4]=(m*t-o*h)*b,e[5]=(o*a-f*t)*b,e[6]=S*b,e[7]=(r*h-d*t)*b,e[8]=(c*t-r*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,f){const h=Math.cos(a),d=Math.sin(a);return this.set(r*h,r*d,-r*(h*c+d*f)+c+e,-o*d,o*h,-o*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return Uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Od.makeScale(e,t)),this}rotate(e){return Uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Od.makeRotation(-e)),this}translate(e,t){return Uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Od.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ym.prototype.isMatrix3=!0;let dt=ym;const Od=new dt,_x=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sx=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JC(){const n={enabled:!0,workingColorSpace:pu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Vt&&(o.r=Ar(o.r),o.g=Ar(o.g),o.b=Ar(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(o.r=Fo(o.r),o.g=Fo(o.g),o.b=Fo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===is?mu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[pu]:{primaries:e,whitePoint:r,transfer:mu,toXYZ:_x,fromXYZ:Sx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:_x,fromXYZ:Sx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),n}const wt=JC();function Ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vo;class QC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vo===void 0&&(vo=vu("canvas")),vo.width=e.width,vo.height=e.height;const o=vo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=vo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Ar(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ar(t[r]/255)*255):t[r]=Ar(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eR=0;class hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?a.push(Bd(o[c].image)):a.push(Bd(o[c]))}else a=Bd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Bd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?QC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let tR=0;const Vd=new ee;class Xn extends Xs{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=Tr,o=Tr,a=On,c=ks,f=Bi,h=Mi,d=Xn.DEFAULT_ANISOTROPY,m=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=il(),this.name="",this.source=new hm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case $h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case $h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=dS;Xn.DEFAULT_ANISOTROPY=1;const _m=class _m{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const h=e.elements,d=h[0],m=h[4],p=h[8],v=h[1],S=h[5],M=h[9],b=h[2],y=h[6],_=h[10];if(Math.abs(m-v)<.01&&Math.abs(p-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(p+b)<.1&&Math.abs(M+y)<.1&&Math.abs(d+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,T=(S+1)/2,L=(_+1)/2,D=(m+v)/4,I=(p+b)/4,E=(M+y)/4;return P>T&&P>L?P<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(P),o=D/r,a=I/r):T>L?T<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),r=D/o,a=E/o):L<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(L),r=I/a,o=E/a),this.set(r,o,a,t),this}let C=Math.sqrt((y-M)*(y-M)+(p-b)*(p-b)+(v-m)*(v-m));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(p-b)/C,this.z=(v-m)/C,this.w=Math.acos((d+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_m.prototype.isVector4=!0;let on=_m;class nR extends Xs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Xn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new hm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends nR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class SS extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iR extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=class yu{constructor(e,t,r,o,a,c,f,h,d,m,p,v,S,M,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,h,d,m,p,v,S,M,b,y)}set(e,t,r,o,a,c,f,h,d,m,p,v,S,M,b,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=a,_[5]=c,_[9]=f,_[13]=h,_[2]=d,_[6]=m,_[10]=p,_[14]=v,_[3]=S,_[7]=M,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/xo.setFromMatrixColumn(e,0).length(),a=1/xo.setFromMatrixColumn(e,1).length(),c=1/xo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),d=Math.sin(o),m=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const v=c*m,S=c*p,M=f*m,b=f*p;t[0]=h*m,t[4]=-h*p,t[8]=d,t[1]=S+M*d,t[5]=v-b*d,t[9]=-f*h,t[2]=b-v*d,t[6]=M+S*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*m,S=h*p,M=d*m,b=d*p;t[0]=v+b*f,t[4]=M*f-S,t[8]=c*d,t[1]=c*p,t[5]=c*m,t[9]=-f,t[2]=S*f-M,t[6]=b+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*m,S=h*p,M=d*m,b=d*p;t[0]=v-b*f,t[4]=-c*p,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*m,t[9]=b-v*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*m,S=c*p,M=f*m,b=f*p;t[0]=h*m,t[4]=M*d-S,t[8]=v*d+b,t[1]=h*p,t[5]=b*d+v,t[9]=S*d-M,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,S=c*d,M=f*h,b=f*d;t[0]=h*m,t[4]=b-v*p,t[8]=M*p+S,t[1]=p,t[5]=c*m,t[9]=-f*m,t[2]=-d*m,t[6]=S*p+M,t[10]=v-b*p}else if(e.order==="XZY"){const v=c*h,S=c*d,M=f*h,b=f*d;t[0]=h*m,t[4]=-p,t[8]=d*m,t[1]=v*p+b,t[5]=c*m,t[9]=S*p-M,t[2]=M*p-S,t[6]=f*m,t[10]=b*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rR,e,sR)}lookAt(e,t,r){const o=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Kr.crossVectors(r,ui),Kr.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Kr.crossVectors(r,ui)),Kr.normalize(),xc.crossVectors(ui,Kr),o[0]=Kr.x,o[4]=xc.x,o[8]=ui.x,o[1]=Kr.y,o[5]=xc.y,o[9]=ui.y,o[2]=Kr.z,o[6]=xc.z,o[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[4],h=r[8],d=r[12],m=r[1],p=r[5],v=r[9],S=r[13],M=r[2],b=r[6],y=r[10],_=r[14],C=r[3],P=r[7],T=r[11],L=r[15],D=o[0],I=o[4],E=o[8],N=o[12],k=o[1],B=o[5],W=o[9],ce=o[13],pe=o[2],$=o[6],J=o[10],Z=o[14],z=o[3],te=o[7],re=o[11],U=o[15];return a[0]=c*D+f*k+h*pe+d*z,a[4]=c*I+f*B+h*$+d*te,a[8]=c*E+f*W+h*J+d*re,a[12]=c*N+f*ce+h*Z+d*U,a[1]=m*D+p*k+v*pe+S*z,a[5]=m*I+p*B+v*$+S*te,a[9]=m*E+p*W+v*J+S*re,a[13]=m*N+p*ce+v*Z+S*U,a[2]=M*D+b*k+y*pe+_*z,a[6]=M*I+b*B+y*$+_*te,a[10]=M*E+b*W+y*J+_*re,a[14]=M*N+b*ce+y*Z+_*U,a[3]=C*D+P*k+T*pe+L*z,a[7]=C*I+P*B+T*$+L*te,a[11]=C*E+P*W+T*J+L*re,a[15]=C*N+P*ce+T*Z+L*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],f=e[5],h=e[9],d=e[13],m=e[2],p=e[6],v=e[10],S=e[14],M=e[3],b=e[7],y=e[11],_=e[15],C=h*S-d*v,P=f*S-d*p,T=f*v-h*p,L=c*S-d*m,D=c*v-h*m,I=c*p-f*m;return t*(b*C-y*P+_*T)-r*(M*C-y*L+_*D)+o*(M*P-b*L+_*I)-a*(M*T-b*D+y*I)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],f=e[9],h=e[2],d=e[6],m=e[10];return t*(c*m-f*d)-r*(a*m-f*h)+o*(a*d-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],p=e[9],v=e[10],S=e[11],M=e[12],b=e[13],y=e[14],_=e[15],C=t*f-r*c,P=t*h-o*c,T=t*d-a*c,L=r*h-o*f,D=r*d-a*f,I=o*d-a*h,E=m*b-p*M,N=m*y-v*M,k=m*_-S*M,B=p*y-v*b,W=p*_-S*b,ce=v*_-S*y,pe=C*ce-P*W+T*B+L*k-D*N+I*E;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/pe;return e[0]=(f*ce-h*W+d*B)*$,e[1]=(o*W-r*ce-a*B)*$,e[2]=(b*I-y*D+_*L)*$,e[3]=(v*D-p*I-S*L)*$,e[4]=(h*k-c*ce-d*N)*$,e[5]=(t*ce-o*k+a*N)*$,e[6]=(y*T-M*I-_*P)*$,e[7]=(m*I-v*T+S*P)*$,e[8]=(c*W-f*k+d*E)*$,e[9]=(r*k-t*W-a*E)*$,e[10]=(M*D-b*T+_*C)*$,e[11]=(p*T-m*D-S*C)*$,e[12]=(f*N-c*B-h*E)*$,e[13]=(t*B-r*N+o*E)*$,e[14]=(b*P-M*L-y*C)*$,e[15]=(m*L-p*P+v*C)*$,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,f=e.y,h=e.z,d=a*c,m=a*f;return this.set(d*c+r,d*f-o*h,d*h+o*f,0,d*f+o*h,m*f+r,m*h-o*c,0,d*h-o*f,m*h+o*c,a*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,f=t._z,h=t._w,d=a+a,m=c+c,p=f+f,v=a*d,S=a*m,M=a*p,b=c*m,y=c*p,_=f*p,C=h*d,P=h*m,T=h*p,L=r.x,D=r.y,I=r.z;return o[0]=(1-(b+_))*L,o[1]=(S+T)*L,o[2]=(M-P)*L,o[3]=0,o[4]=(S-T)*D,o[5]=(1-(v+_))*D,o[6]=(y+C)*D,o[7]=0,o[8]=(M+P)*I,o[9]=(y-C)*I,o[10]=(1-(v+b))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=xo.set(o[0],o[1],o[2]).length();const f=xo.set(o[4],o[5],o[6]).length(),h=xo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ii.copy(this);const d=1/c,m=1/f,p=1/h;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=m,Ii.elements[5]*=m,Ii.elements[6]*=m,Ii.elements[8]*=p,Ii.elements[9]*=p,Ii.elements[10]*=p,t.setFromRotationMatrix(Ii),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,o,a,c,f=nr,h=!1){const d=this.elements,m=2*a/(t-e),p=2*a/(r-o),v=(t+e)/(t-e),S=(r+o)/(r-o);let M,b;if(h)M=a/(c-a),b=c*a/(c-a);else if(f===nr)M=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(f===gu)M=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=p,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,a,c,f=nr,h=!1){const d=this.elements,m=2/(t-e),p=2/(r-o),v=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,b;if(h)M=1/(c-a),b=c/(c-a);else if(f===nr)M=-2/(c-a),b=-(c+a)/(c-a);else if(f===gu)M=-1/(c-a),b=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=p,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};yu.prototype.isMatrix4=!0;let ln=yu;const xo=new ee,Ii=new ln,rR=new ee(0,0,0),sR=new ee(1,1,1),Kr=new ee,xc=new ee,ui=new ee,Mx=new ln,Ex=new jo;class Gs{constructor(e=0,t=0,r=0,o=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],f=o[8],h=o[1],d=o[5],m=o[9],p=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-m,S),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ex.setFromEuler(this),this.setFromQuaternion(Ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class MS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oR=0;const wx=new ee,yo=new jo,xr=new ln,yc=new ee,Na=new ee,aR=new ee,lR=new jo,Tx=new ee(1,0,0),bx=new ee(0,1,0),Ax=new ee(0,0,1),Cx={type:"added"},cR={type:"removed"},_o={type:"childadded",child:null},zd={type:"childremoved",child:null};class si extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new ee,t=new Gs,r=new jo,o=new ee(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new dt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new MS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Tx,e)}rotateY(e){return this.rotateOnAxis(bx,e)}rotateZ(e){return this.rotateOnAxis(Ax,e)}translateOnAxis(e,t){return wx.copy(e).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tx,e)}translateY(e){return this.translateOnAxis(bx,e)}translateZ(e){return this.translateOnAxis(Ax,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yc.copy(e):yc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Na,yc,this.up):xr.lookAt(yc,Na,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),yo.setFromRotationMatrix(xr),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cx),_o.child=e,this.dispatchEvent(_o),_o.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cR),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cx),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,aR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,lR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const p=h[d];a(e.shapes,p)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(a(e.materials,this.material[h]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(a(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),m=c(e.images),p=c(e.shapes),v=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),d.length>0&&(r.textures=d),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}si.DEFAULT_UP=new ee(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class za extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uR={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,r),_=this._getHandJoint(d,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const m=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],v=m.position.distanceTo(p.position),S=.02,M=.005;d.inputState.pinching&&v>S+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=S-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(uR)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new za;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ES={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Gd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=ZC(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Gd(c,a,e+1/3),this.g=Gd(c,a,e),this.b=Gd(c,a,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(a){a!==void 0&&parseFloat(a)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=ES[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return wt.workingToColorSpace(kn.copy(this),e),Math.round(Tt(kn.r*255,0,255))*65536+Math.round(Tt(kn.g*255,0,255))*256+Math.round(Tt(kn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(kn.copy(this),t);const r=kn.r,o=kn.g,a=kn.b,c=Math.max(r,o,a),f=Math.min(r,o,a);let h,d;const m=(f+c)/2;if(f===c)h=0,d=0;else{const p=c-f;switch(d=m<=.5?p/(c+f):p/(2-c-f),c){case r:h=(o-a)/p+(o<a?6:0);break;case o:h=(a-r)/p+2;break;case a:h=(r-o)/p+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=_i){wt.workingToColorSpace(kn.copy(this),e);const t=kn.r,r=kn.g,o=kn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(_c);const r=Fd(Zr.h,_c.h,t),o=Fd(Zr.s,_c.s,t),a=Fd(Zr.l,_c.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Ut;Ut.NAMES=ES;class fR extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new ee,yr=new ee,Wd=new ee,_r=new ee,So=new ee,Mo=new ee,Rx=new ee,Xd=new ee,jd=new ee,Yd=new ee,qd=new on,$d=new on,Kd=new on;class Oi{constructor(e=new ee,t=new ee,r=new ee){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ui.subVectors(e,t),o.cross(Ui);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ui.subVectors(o,t),yr.subVectors(r,t),Wd.subVectors(e,t);const c=Ui.dot(Ui),f=Ui.dot(yr),h=Ui.dot(Wd),d=yr.dot(yr),m=yr.dot(Wd),p=c*d-f*f;if(p===0)return a.set(0,0,0),null;const v=1/p,S=(d*h-f*m)*v,M=(c*m-f*h)*v;return a.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,a,c,f,h){return this.getBarycoord(e,t,r,o,_r)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,_r.x),h.addScaledVector(c,_r.y),h.addScaledVector(f,_r.z),h)}static getInterpolatedAttribute(e,t,r,o,a,c){return qd.setScalar(0),$d.setScalar(0),Kd.setScalar(0),qd.fromBufferAttribute(e,t),$d.fromBufferAttribute(e,r),Kd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(qd,a.x),c.addScaledVector($d,a.y),c.addScaledVector(Kd,a.z),c}static isFrontFacing(e,t,r,o){return Ui.subVectors(r,t),yr.subVectors(e,t),Ui.cross(yr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Ui.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,f;So.subVectors(o,r),Mo.subVectors(a,r),Xd.subVectors(e,r);const h=So.dot(Xd),d=Mo.dot(Xd);if(h<=0&&d<=0)return t.copy(r);jd.subVectors(e,o);const m=So.dot(jd),p=Mo.dot(jd);if(m>=0&&p<=m)return t.copy(o);const v=h*p-m*d;if(v<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(r).addScaledVector(So,c);Yd.subVectors(e,a);const S=So.dot(Yd),M=Mo.dot(Yd);if(M>=0&&S<=M)return t.copy(a);const b=S*d-h*M;if(b<=0&&d>=0&&M<=0)return f=d/(d-M),t.copy(r).addScaledVector(Mo,f);const y=m*M-S*p;if(y<=0&&p-m>=0&&S-M>=0)return Rx.subVectors(a,o),f=(p-m)/(p-m+(S-M)),t.copy(o).addScaledVector(Rx,f);const _=1/(y+b+v);return c=b*_,f=v*_,t.copy(r).addScaledVector(So,c).addScaledVector(Mo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Fi):Fi.fromBufferAttribute(a,c),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Mc.subVectors(this.max,Ia),Eo.subVectors(e.a,Ia),wo.subVectors(e.b,Ia),To.subVectors(e.c,Ia),Jr.subVectors(wo,Eo),Qr.subVectors(To,wo),As.subVectors(Eo,To);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-As.z,As.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,As.z,0,-As.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-As.y,As.x,0];return!Zd(t,Eo,wo,To,Mc)||(t=[1,0,0,0,1,0,0,0,1],!Zd(t,Eo,wo,To,Mc))?!1:(Ec.crossVectors(Jr,Qr),t=[Ec.x,Ec.y,Ec.z],Zd(t,Eo,wo,To,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Fi=new ee,Sc=new rl,Eo=new ee,wo=new ee,To=new ee,Jr=new ee,Qr=new ee,As=new ee,Ia=new ee,Mc=new ee,Ec=new ee,Cs=new ee;function Zd(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){Cs.fromArray(n,a);const f=o.x*Math.abs(Cs.x)+o.y*Math.abs(Cs.y)+o.z*Math.abs(Cs.z),h=e.dot(Cs),d=t.dot(Cs),m=r.dot(Cs);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>f)return!1}return!0}const dn=new ee,wc=new Ct;let dR=0;class zi extends Xs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mx,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=La(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=La(t,this.array)),t}setX(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=La(t,this.array)),t}setY(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=La(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=La(t,this.array)),t}setW(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),r=ni(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),r=ni(r,this.array),o=ni(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),r=ni(r,this.array),o=ni(o,this.array),a=ni(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wS extends zi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class TS extends zi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class cn extends zi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const hR=new rl,Ua=new ee,Jd=new ee;class Tu{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):hR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Jd)),this.expandByPoint(Ua.copy(e.center).sub(Jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pR=0;const yi=new ln,Qd=new si,bo=new ee,fi=new rl,Fa=new rl,wn=new ee;class jn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YC(e)?TS:wS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new dt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,r){return yi.makeTranslation(e,t,r),this.applyMatrix4(yi),this}scale(e,t,r){return yi.makeScale(e,t,r),this.applyMatrix4(yi),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new cn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];Fa.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(fi.min,Fa.min),fi.expandByPoint(wn),wn.addVectors(fi.max,Fa.max),fi.expandByPoint(wn)):(fi.expandByPoint(Fa.min),fi.expandByPoint(Fa.max))}fi.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)wn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(wn));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],h=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)wn.fromBufferAttribute(f,d),h&&(bo.fromBufferAttribute(e,d),wn.add(bo)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new zi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const f=[],h=[];for(let E=0;E<r.count;E++)f[E]=new ee,h[E]=new ee;const d=new ee,m=new ee,p=new ee,v=new Ct,S=new Ct,M=new Ct,b=new ee,y=new ee;function _(E,N,k){d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,N),p.fromBufferAttribute(r,k),v.fromBufferAttribute(a,E),S.fromBufferAttribute(a,N),M.fromBufferAttribute(a,k),m.sub(d),p.sub(d),S.sub(v),M.sub(v);const B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(b.copy(m).multiplyScalar(M.y).addScaledVector(p,-S.y).multiplyScalar(B),y.copy(p).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(B),f[E].add(b),f[N].add(b),f[k].add(b),h[E].add(y),h[N].add(y),h[k].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,N=C.length;E<N;++E){const k=C[E],B=k.start,W=k.count;for(let ce=B,pe=B+W;ce<pe;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new ee,T=new ee,L=new ee,D=new ee;function I(E){L.fromBufferAttribute(o,E),D.copy(L);const N=f[E];P.copy(N),P.sub(L.multiplyScalar(L.dot(N))).normalize(),T.crossVectors(D,N);const B=T.dot(h[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,B)}for(let E=0,N=C.length;E<N;++E){const k=C[E],B=k.start,W=k.count;for(let ce=B,pe=B+W;ce<pe;ce+=3)I(e.getX(ce+0)),I(e.getX(ce+1)),I(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new zi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ee,a=new ee,c=new ee,f=new ee,h=new ee,d=new ee,m=new ee,p=new ee;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,b),c.fromBufferAttribute(t,y),m.subVectors(c,a),p.subVectors(o,a),m.cross(p),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,y),f.add(m),h.add(m),d.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,a),p.subVectors(o,a),m.cross(p),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(f,h){const d=f.array,m=f.itemSize,p=f.normalized,v=new d.constructor(h.length*m);let S=0,M=0;for(let b=0,y=h.length;b<y;b++){f.isInterleavedBufferAttribute?S=h[b]*f.data.stride+f.offset:S=h[b]*m;for(let _=0;_<m;_++)v[M++]=d[S++]}return new zi(v,m,p)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],d=e(h,r);t.setAttribute(f,d)}const a=this.morphAttributes;for(const f in a){const h=[],d=a[f];for(let m=0,p=d.length;m<p;m++){const v=d[m],S=e(v,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const d=r[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let p=0,v=d.length;p<v;p++){const S=d[p];m.push(S.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],p=a[d];for(let v=0,S=p.length;v<S;v++)m.push(p[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const p=c[d];this.addGroup(p.start,p.count,p.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mR=0;class sl extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Io,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Vh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(r.blending=this.blending),this.side!==ls&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Vh&&(r.blendDst=this.blendDst),this.blendEquation!==Ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==px&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(r.stencilFail=this.stencilFail),this.stencilZFail!==go&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const f in a){const h=a[f];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ct().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mr=new ee,eh=new ee,Tc=new ee,es=new ee,th=new ee,bc=new ee,nh=new ee;class bS{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){eh.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),es.copy(this.origin).sub(eh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Tc),f=es.dot(this.direction),h=-es.dot(Tc),d=es.lengthSq(),m=Math.abs(1-c*c);let p,v,S,M;if(m>0)if(p=c*h-f,v=c*f-h,M=a*m,p>=0)if(v>=-M)if(v<=M){const b=1/m;p*=b,v*=b,S=p*(p+c*v+2*f)+v*(c*p+v+2*h)+d}else v=a,p=Math.max(0,-(c*v+f)),S=-p*p+v*(v+2*h)+d;else v=-a,p=Math.max(0,-(c*v+f)),S=-p*p+v*(v+2*h)+d;else v<=-M?(p=Math.max(0,-(-c*a+f)),v=p>0?-a:Math.min(Math.max(-a,-h),a),S=-p*p+v*(v+2*h)+d):v<=M?(p=0,v=Math.min(Math.max(-a,-h),a),S=v*(v+2*h)+d):(p=Math.max(0,-(c*a+f)),v=p>0?a:Math.min(Math.max(-a,-h),a),S=-p*p+v*(v+2*h)+d);else v=c>0?-a:a,p=Math.max(0,-(c*v+f)),S=-p*p+v*(v+2*h)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(eh).addScaledVector(Tc,v),S}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),o=Mr.dot(Mr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,f,h;const d=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),m>=0?(a=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),p>=0?(f=(e.min.z-v.z)*p,h=(e.max.z-v.z)*p):(f=(e.max.z-v.z)*p,h=(e.min.z-v.z)*p),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,r,o,a){th.subVectors(t,e),bc.subVectors(r,e),nh.crossVectors(th,bc);let c=this.direction.dot(nh),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;es.subVectors(this.origin,e);const h=f*this.direction.dot(bc.crossVectors(es,bc));if(h<0)return null;const d=f*this.direction.dot(th.cross(es));if(d<0||h+d>c)return null;const m=-f*es.dot(nh);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xu extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=rS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Px=new ln,Rs=new bS,Ac=new Tu,Dx=new ee,Cc=new ee,Rc=new ee,Pc=new ee,ih=new ee,Dc=new ee,Lx=new ee,Lc=new ee;class Hi extends si{constructor(e=new jn,t=new xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Dc.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const m=f[h],p=a[h];m!==0&&(ih.fromBufferAttribute(p,e),c?Dc.addScaledVector(ih,m):Dc.addScaledVector(ih.sub(t),m))}t.add(Dc)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(a),Rs.copy(e.ray).recast(e.near),!(Ac.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ac,Dx)===null||Rs.origin.distanceToSquared(Dx)>(e.far-e.near)**2))&&(Px.copy(a).invert(),Rs.copy(e.ray).applyMatrix4(Px),!(r.boundingBox!==null&&Rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,f=a.index,h=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,p=a.attributes.normal,v=a.groups,S=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,b=v.length;M<b;M++){const y=v[M],_=c[y.materialIndex],C=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let T=C,L=P;T<L;T+=3){const D=f.getX(T),I=f.getX(T+1),E=f.getX(T+2);o=Nc(this,_,e,r,d,m,p,D,I,E),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let y=M,_=b;y<_;y+=3){const C=f.getX(y),P=f.getX(y+1),T=f.getX(y+2);o=Nc(this,c,e,r,d,m,p,C,P,T),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,b=v.length;M<b;M++){const y=v[M],_=c[y.materialIndex],C=Math.max(y.start,S.start),P=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let T=C,L=P;T<L;T+=3){const D=T,I=T+1,E=T+2;o=Nc(this,_,e,r,d,m,p,D,I,E),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let y=M,_=b;y<_;y+=3){const C=y,P=y+1,T=y+2;o=Nc(this,c,e,r,d,m,p,C,P,T),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function gR(n,e,t,r,o,a,c,f){let h;if(e.side===ri?h=r.intersectTriangle(c,a,o,!0,f):h=r.intersectTriangle(o,a,c,e.side===ls,f),h===null)return null;Lc.copy(f),Lc.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Lc);return d<t.near||d>t.far?null:{distance:d,point:Lc.clone(),object:n}}function Nc(n,e,t,r,o,a,c,f,h,d){n.getVertexPosition(f,Cc),n.getVertexPosition(h,Rc),n.getVertexPosition(d,Pc);const m=gR(n,e,t,r,Cc,Rc,Pc,Lx);if(m){const p=new ee;Oi.getBarycoord(Lx,Cc,Rc,Pc,p),o&&(m.uv=Oi.getInterpolatedAttribute(o,f,h,d,p,new Ct)),a&&(m.uv1=Oi.getInterpolatedAttribute(a,f,h,d,p,new Ct)),c&&(m.normal=Oi.getInterpolatedAttribute(c,f,h,d,p,new ee),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:h,c:d,normal:new ee,materialIndex:0};Oi.getNormal(Cc,Rc,Pc,v.normal),m.face=v,m.barycoord=p}return m}class vR extends Xn{constructor(e=null,t=1,r=1,o,a,c,f,h,d=Dn,m=Dn,p,v){super(null,c,f,h,d,m,o,a,p,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new ee,xR=new ee,yR=new dt;class Ls{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=rh.subVectors(r,t).cross(xR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(rh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||yR.getNormalMatrix(e),o=this.coplanarPoint(rh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Tu,_R=new Ct(.5,.5),Ic=new ee;class AS{constructor(e=new Ls,t=new Ls,r=new Ls,o=new Ls,a=new Ls,c=new Ls){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,a=e.elements,c=a[0],f=a[1],h=a[2],d=a[3],m=a[4],p=a[5],v=a[6],S=a[7],M=a[8],b=a[9],y=a[10],_=a[11],C=a[12],P=a[13],T=a[14],L=a[15];if(o[0].setComponents(d-c,S-m,_-M,L-C).normalize(),o[1].setComponents(d+c,S+m,_+M,L+C).normalize(),o[2].setComponents(d+f,S+p,_+b,L+P).normalize(),o[3].setComponents(d-f,S-p,_-b,L-P).normalize(),r)o[4].setComponents(h,v,y,T).normalize(),o[5].setComponents(d-h,S-v,_-y,L-T).normalize();else if(o[4].setComponents(d-h,S-v,_-y,L-T).normalize(),t===nr)o[5].setComponents(d+h,S+v,_+y,L+T).normalize();else if(t===gu)o[5].setComponents(h,v,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=_R.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ic.x=o.normal.x>0?e.max.x:e.min.x,Ic.y=o.normal.y>0?e.max.y:e.min.y,Ic.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CS extends sl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nx=new ln,Ap=new bS,Uc=new Tu,Fc=new ee;class SR extends si{constructor(e=new jn,t=new CS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(o),Uc.radius+=a,e.ray.intersectsSphere(Uc)===!1)return;Nx.copy(o).invert(),Ap.copy(e.ray).applyMatrix4(Nx);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=r.index,p=r.attributes.position;if(d!==null){const v=Math.max(0,c.start),S=Math.min(d.count,c.start+c.count);for(let M=v,b=S;M<b;M++){const y=d.getX(M);Fc.fromBufferAttribute(p,y),Ix(Fc,y,h,o,e,t,this)}}else{const v=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let M=v,b=S;M<b;M++)Fc.fromBufferAttribute(p,M),Ix(Fc,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function Ix(n,e,t,r,o,a,c){const f=Ap.distanceSqToPoint(n);if(f<t){const h=new ee;Ap.closestPointToPoint(n,h),h.applyMatrix4(r);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;a.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class RS extends Xn{constructor(e=[],t=zs,r,o,a,c,f,h,d,m){super(e,t,r,o,a,c,f,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zo extends Xn{constructor(e,t,r=ar,o,a,c,f=Dn,h=Dn,d,m=Rr,p=1){if(m!==Rr&&m!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:p};super(v,o,a,c,f,h,m,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class MR extends zo{constructor(e,t=ar,r=zs,o,a,c=Dn,f=Dn,h,d=Rr){const m={width:e,height:e,depth:1},p=[m,m,m,m,m,m];super(e,e,t,r,o,a,c,f,h,d),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class PS extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ol extends jn{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const f=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],m=[],p=[];let v=0,S=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(h),this.setAttribute("position",new cn(d,3)),this.setAttribute("normal",new cn(m,3)),this.setAttribute("uv",new cn(p,2));function M(b,y,_,C,P,T,L,D,I,E,N){const k=T/I,B=L/E,W=T/2,ce=L/2,pe=D/2,$=I+1,J=E+1;let Z=0,z=0;const te=new ee;for(let re=0;re<J;re++){const U=re*B-ce;for(let q=0;q<$;q++){const Se=q*k-W;te[b]=Se*C,te[y]=U*P,te[_]=pe,d.push(te.x,te.y,te.z),te[b]=0,te[y]=0,te[_]=D>0?1:-1,m.push(te.x,te.y,te.z),p.push(q/I),p.push(1-re/E),Z+=1}}for(let re=0;re<E;re++)for(let U=0;U<I;U++){const q=v+U+$*re,Se=v+U+$*(re+1),Oe=v+(U+1)+$*(re+1),Ee=v+(U+1)+$*re;h.push(q,Se,Ee),h.push(Se,Oe,Ee),z+=6}f.addGroup(S,z,N),S+=z,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class al extends jn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const a=[],c=[];f(o),d(r),m(),this.setAttribute("position",new cn(a,3)),this.setAttribute("normal",new cn(a.slice(),3)),this.setAttribute("uv",new cn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const P=new ee,T=new ee,L=new ee;for(let D=0;D<t.length;D+=3)S(t[D+0],P),S(t[D+1],T),S(t[D+2],L),h(P,T,L,C)}function h(C,P,T,L){const D=L+1,I=[];for(let E=0;E<=D;E++){I[E]=[];const N=C.clone().lerp(T,E/D),k=P.clone().lerp(T,E/D),B=D-E;for(let W=0;W<=B;W++)W===0&&E===D?I[E][W]=N:I[E][W]=N.clone().lerp(k,W/B)}for(let E=0;E<D;E++)for(let N=0;N<2*(D-E)-1;N++){const k=Math.floor(N/2);N%2===0?(v(I[E][k+1]),v(I[E+1][k]),v(I[E][k])):(v(I[E][k+1]),v(I[E+1][k+1]),v(I[E+1][k]))}}function d(C){const P=new ee;for(let T=0;T<a.length;T+=3)P.x=a[T+0],P.y=a[T+1],P.z=a[T+2],P.normalize().multiplyScalar(C),a[T+0]=P.x,a[T+1]=P.y,a[T+2]=P.z}function m(){const C=new ee;for(let P=0;P<a.length;P+=3){C.x=a[P+0],C.y=a[P+1],C.z=a[P+2];const T=y(C)/2/Math.PI+.5,L=_(C)/Math.PI+.5;c.push(T,1-L)}M(),p()}function p(){for(let C=0;C<c.length;C+=6){const P=c[C+0],T=c[C+2],L=c[C+4],D=Math.max(P,T,L),I=Math.min(P,T,L);D>.9&&I<.1&&(P<.2&&(c[C+0]+=1),T<.2&&(c[C+2]+=1),L<.2&&(c[C+4]+=1))}}function v(C){a.push(C.x,C.y,C.z)}function S(C,P){const T=C*3;P.x=e[T+0],P.y=e[T+1],P.z=e[T+2]}function M(){const C=new ee,P=new ee,T=new ee,L=new ee,D=new Ct,I=new Ct,E=new Ct;for(let N=0,k=0;N<a.length;N+=9,k+=6){C.set(a[N+0],a[N+1],a[N+2]),P.set(a[N+3],a[N+4],a[N+5]),T.set(a[N+6],a[N+7],a[N+8]),D.set(c[k+0],c[k+1]),I.set(c[k+2],c[k+3]),E.set(c[k+4],c[k+5]),L.copy(C).add(P).add(T).divideScalar(3);const B=y(L);b(D,k+0,C,B),b(I,k+2,P,B),b(E,k+4,T,B)}}function b(C,P,T,L){L<0&&C.x===1&&(c[P]=C.x-1),T.x===0&&T.z===0&&(c[P]=L/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.vertices,e.indices,e.radius,e.detail)}}class pm extends al{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pm(e.radius,e.detail)}}class bu extends al{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bu(e.radius,e.detail)}}class Au extends al{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Au(e.radius,e.detail)}}class Cu extends jn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),d=f+1,m=h+1,p=e/f,v=t/h,S=[],M=[],b=[],y=[];for(let _=0;_<m;_++){const C=_*v-c;for(let P=0;P<d;P++){const T=P*p-a;M.push(T,-C,0),b.push(0,0,1),y.push(P/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let C=0;C<f;C++){const P=C+d*_,T=C+d*(_+1),L=C+1+d*(_+1),D=C+1+d*_;S.push(P,T,D),S.push(T,L,D)}this.setIndex(S),this.setAttribute("position",new cn(M,3)),this.setAttribute("normal",new cn(b,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class mm extends jn{constructor(e=1,t=32,r=16,o=0,a=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:a,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let d=0;const m=[],p=new ee,v=new ee,S=[],M=[],b=[],y=[];for(let _=0;_<=r;_++){const C=[],P=_/r,T=c+P*f,L=e*Math.cos(T),D=Math.sqrt(e*e-L*L);let I=0;_===0&&c===0?I=.5/t:_===r&&h===Math.PI&&(I=-.5/t);for(let E=0;E<=t;E++){const N=E/t,k=o+N*a;p.x=-D*Math.cos(k),p.y=L,p.z=D*Math.sin(k),M.push(p.x,p.y,p.z),v.copy(p).normalize(),b.push(v.x,v.y,v.z),y.push(N+I,1-P),C.push(d++)}m.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const P=m[_][C+1],T=m[_][C],L=m[_+1][C],D=m[_+1][C+1];(_!==0||c>0)&&S.push(P,T,D),(_!==r-1||h<Math.PI)&&S.push(T,L,D)}this.setIndex(S),this.setAttribute("position",new cn(M,3)),this.setAttribute("normal",new cn(b,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ru extends jn{constructor(e=1,t=.4,r=12,o=48,a=Math.PI*2,c=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:a,thetaStart:c,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],d=[],m=[],p=[],v=new ee,S=new ee,M=new ee;for(let b=0;b<=r;b++){const y=c+b/r*f;for(let _=0;_<=o;_++){const C=_/o*a;S.x=(e+t*Math.cos(y))*Math.cos(C),S.y=(e+t*Math.cos(y))*Math.sin(C),S.z=t*Math.sin(y),d.push(S.x,S.y,S.z),v.x=e*Math.cos(C),v.y=e*Math.sin(C),M.subVectors(S,v).normalize(),m.push(M.x,M.y,M.z),p.push(_/o),p.push(b/r)}}for(let b=1;b<=r;b++)for(let y=1;y<=o;y++){const _=(o+1)*b+y-1,C=(o+1)*(b-1)+y-1,P=(o+1)*(b-1)+y,T=(o+1)*b+y;h.push(_,C,T),h.push(C,P,T)}this.setIndex(h),this.setAttribute("position",new cn(d,3)),this.setAttribute("normal",new cn(m,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pu extends jn{constructor(e=1,t=.4,r=64,o=8,a=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:r,radialSegments:o,p:a,q:c},r=Math.floor(r),o=Math.floor(o);const f=[],h=[],d=[],m=[],p=new ee,v=new ee,S=new ee,M=new ee,b=new ee,y=new ee,_=new ee;for(let P=0;P<=r;++P){const T=P/r*a*Math.PI*2;C(T,a,c,e,S),C(T+.01,a,c,e,M),y.subVectors(M,S),_.addVectors(M,S),b.crossVectors(y,_),_.crossVectors(b,y),b.normalize(),_.normalize();for(let L=0;L<=o;++L){const D=L/o*Math.PI*2,I=-t*Math.cos(D),E=t*Math.sin(D);p.x=S.x+(I*_.x+E*b.x),p.y=S.y+(I*_.y+E*b.y),p.z=S.z+(I*_.z+E*b.z),h.push(p.x,p.y,p.z),v.subVectors(p,S).normalize(),d.push(v.x,v.y,v.z),m.push(P/r),m.push(L/o)}}for(let P=1;P<=r;P++)for(let T=1;T<=o;T++){const L=(o+1)*(P-1)+(T-1),D=(o+1)*P+(T-1),I=(o+1)*P+T,E=(o+1)*(P-1)+T;f.push(L,D,E),f.push(D,I,E)}this.setIndex(f),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(m,2));function C(P,T,L,D,I){const E=Math.cos(P),N=Math.sin(P),k=L/T*P,B=Math.cos(k);I.x=D*(2+B)*.5*E,I.y=D*(2+B)*N*.5,I.z=D*Math.sin(k)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Ho(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(Ux(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Ux(o[0])){const a=[];for(let c=0,f=o.length;c<f;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Hn(n){const e={};for(let t=0;t<n.length;t++){const r=Ho(n[t]);for(const o in r)e[o]=r[o]}return e}function Ux(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ER(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function DS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const wR={clone:Ho,merge:Hn};var TR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TR,this.fragmentShader=bR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=ER(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ct().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new on().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new ln().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class AR extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CR extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RR extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kc=new ee,Oc=new jo,$i=new ee;class LS extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,Oc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Oc,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(kc,Oc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Oc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new ee,Fx=new Ct,kx=new Ct;class Si extends LS{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bp*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Fx,kx),t.subVectors(kx,Fx)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ud*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*r/d,o*=c.width/h,r*=c.height/d}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class NS extends LS{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ao=-90,Co=1;class PR extends si{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Si(Ao,Co,e,t);o.layers=this.layers,this.add(o);const a=new Si(Ao,Co,e,t);a.layers=this.layers,this.add(a);const c=new Si(Ao,Co,e,t);c.layers=this.layers,this.add(c);const f=new Si(Ao,Co,e,t);f.layers=this.layers,this.add(f);const h=new Si(Ao,Co,e,t);h.layers=this.layers,this.add(h);const d=new Si(Ao,Co,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,f,h]=t;for(const d of t)this.remove(d);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,h,d,m]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(p,v,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class DR extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class LR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Sm=class Sm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};Sm.prototype.isMatrix2=!0;let Ox=Sm;function Bx(n,e,t,r){const o=NR(r);switch(t){case vS:return n*e;case yS:return n*e/o.components*o.byteLength;case lm:return n*e/o.components*o.byteLength;case Hs:return n*e*2/o.components*o.byteLength;case cm:return n*e*2/o.components*o.byteLength;case xS:return n*e*3/o.components*o.byteLength;case Bi:return n*e*4/o.components*o.byteLength;case um:return n*e*4/o.components*o.byteLength;case Zc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(n,16)*Math.max(e,8)/4;case Kh:case Jh:return Math.max(n,8)*Math.max(e,8)/2;case ep:case tp:case ip:case rp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case np:case du:case sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _p:case Sp:case Mp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ep:case wp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hu:case Tp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function NR(n){switch(n){case Mi:case hS:return{byteLength:1,components:1};case Za:case pS:case Cr:return{byteLength:2,components:1};case om:case am:return{byteLength:2,components:4};case ar:case sm:case tr:return{byteLength:4,components:1};case mS:case gS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rm}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function IS(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function IR(n){const e=new WeakMap;function t(f,h){const d=f.array,m=f.usage,p=d.byteLength,v=n.createBuffer();n.bindBuffer(h,v),n.bufferData(h,d,m),f.onUploadCallback();let S;if(d instanceof Float32Array)S=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=n.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=n.SHORT;else if(d instanceof Uint32Array)S=n.UNSIGNED_INT;else if(d instanceof Int32Array)S=n.INT;else if(d instanceof Int8Array)S=n.BYTE;else if(d instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:p}}function r(f,h,d){const m=h.array,p=h.updateRanges;if(n.bindBuffer(d,f),p.length===0)n.bufferSubData(d,0,m);else{p.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<p.length;S++){const M=p[v],b=p[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,p[v]=b)}p.length=v+1;for(let S=0,M=p.length;S<M;S++){const b=p[S];n.bufferSubData(d,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(n.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,f,h),d.version=f.version}}return{get:o,remove:a,update:c}}var UR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FR=`#ifdef USE_ALPHAHASH
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
#endif`,kR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zR=`#ifdef USE_AOMAP
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
#endif`,HR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GR=`#ifdef USE_BATCHING
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
#endif`,WR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qR=`#ifdef USE_IRIDESCENCE
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
#endif`,$R=`#ifdef USE_BUMPMAP
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
#endif`,KR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r2=`#define PI 3.141592653589793
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
} // validated`,s2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o2=`vec3 transformedNormal = objectNormal;
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
#endif`,a2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f2="gl_FragColor = linearToOutputTexel( gl_FragColor );",d2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h2=`#ifdef USE_ENVMAP
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
#endif`,p2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
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
#endif`,x2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M2=`#ifdef USE_GRADIENTMAP
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
}`,E2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,A2=`#ifdef USE_ENVMAP
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
#endif`,C2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L2=`PhysicalMaterial material;
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
#endif`,N2=`uniform sampler2D dfgLUT;
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
}`,I2=`
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
#endif`,U2=`#if defined( RE_IndirectDiffuse )
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
#endif`,F2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,O2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X2=`#if defined( USE_POINTS_UV )
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
#endif`,j2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z2=`#ifdef USE_MORPHTARGETS
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
#endif`,J2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rP=`#ifdef USE_NORMALMAP
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
#endif`,sP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_P=`float getShadowMask() {
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
}`,SP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MP=`#ifdef USE_SKINNING
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
#endif`,EP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wP=`#ifdef USE_SKINNING
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
#endif`,TP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RP=`#ifdef USE_TRANSMISSION
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
#endif`,PP=`#ifdef USE_TRANSMISSION
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
#endif`,DP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FP=`uniform sampler2D t2D;
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
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`#include <common>
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
}`,HP=`#if DEPTH_PACKING == 3200
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
}`,GP=`#define DISTANCE
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
}`,WP=`#define DISTANCE
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
}`,XP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YP=`uniform float scale;
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
}`,qP=`uniform vec3 diffuse;
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
}`,$P=`#include <common>
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
}`,KP=`uniform vec3 diffuse;
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
}`,ZP=`#define LAMBERT
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
}`,JP=`#define LAMBERT
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
}`,QP=`#define MATCAP
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
}`,e3=`#define MATCAP
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
}`,t3=`#define NORMAL
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
}`,n3=`#define NORMAL
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
}`,i3=`#define PHONG
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
}`,r3=`#define PHONG
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
}`,s3=`#define STANDARD
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
}`,o3=`#define STANDARD
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
}`,a3=`#define TOON
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
}`,l3=`#define TOON
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
}`,c3=`uniform float size;
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
}`,u3=`uniform vec3 diffuse;
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
}`,f3=`#include <common>
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
}`,d3=`uniform vec3 color;
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
}`,h3=`uniform float rotation;
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
}`,p3=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:UR,alphahash_pars_fragment:FR,alphamap_fragment:kR,alphamap_pars_fragment:OR,alphatest_fragment:BR,alphatest_pars_fragment:VR,aomap_fragment:zR,aomap_pars_fragment:HR,batching_pars_vertex:GR,batching_vertex:WR,begin_vertex:XR,beginnormal_vertex:jR,bsdfs:YR,iridescence_fragment:qR,bumpmap_pars_fragment:$R,clipping_planes_fragment:KR,clipping_planes_pars_fragment:ZR,clipping_planes_pars_vertex:JR,clipping_planes_vertex:QR,color_fragment:e2,color_pars_fragment:t2,color_pars_vertex:n2,color_vertex:i2,common:r2,cube_uv_reflection_fragment:s2,defaultnormal_vertex:o2,displacementmap_pars_vertex:a2,displacementmap_vertex:l2,emissivemap_fragment:c2,emissivemap_pars_fragment:u2,colorspace_fragment:f2,colorspace_pars_fragment:d2,envmap_fragment:h2,envmap_common_pars_fragment:p2,envmap_pars_fragment:m2,envmap_pars_vertex:g2,envmap_physical_pars_fragment:A2,envmap_vertex:v2,fog_vertex:x2,fog_pars_vertex:y2,fog_fragment:_2,fog_pars_fragment:S2,gradientmap_pars_fragment:M2,lightmap_pars_fragment:E2,lights_lambert_fragment:w2,lights_lambert_pars_fragment:T2,lights_pars_begin:b2,lights_toon_fragment:C2,lights_toon_pars_fragment:R2,lights_phong_fragment:P2,lights_phong_pars_fragment:D2,lights_physical_fragment:L2,lights_physical_pars_fragment:N2,lights_fragment_begin:I2,lights_fragment_maps:U2,lights_fragment_end:F2,lightprobes_pars_fragment:k2,logdepthbuf_fragment:O2,logdepthbuf_pars_fragment:B2,logdepthbuf_pars_vertex:V2,logdepthbuf_vertex:z2,map_fragment:H2,map_pars_fragment:G2,map_particle_fragment:W2,map_particle_pars_fragment:X2,metalnessmap_fragment:j2,metalnessmap_pars_fragment:Y2,morphinstance_vertex:q2,morphcolor_vertex:$2,morphnormal_vertex:K2,morphtarget_pars_vertex:Z2,morphtarget_vertex:J2,normal_fragment_begin:Q2,normal_fragment_maps:eP,normal_pars_fragment:tP,normal_pars_vertex:nP,normal_vertex:iP,normalmap_pars_fragment:rP,clearcoat_normal_fragment_begin:sP,clearcoat_normal_fragment_maps:oP,clearcoat_pars_fragment:aP,iridescence_pars_fragment:lP,opaque_fragment:cP,packing:uP,premultiplied_alpha_fragment:fP,project_vertex:dP,dithering_fragment:hP,dithering_pars_fragment:pP,roughnessmap_fragment:mP,roughnessmap_pars_fragment:gP,shadowmap_pars_fragment:vP,shadowmap_pars_vertex:xP,shadowmap_vertex:yP,shadowmask_pars_fragment:_P,skinbase_vertex:SP,skinning_pars_vertex:MP,skinning_vertex:EP,skinnormal_vertex:wP,specularmap_fragment:TP,specularmap_pars_fragment:bP,tonemapping_fragment:AP,tonemapping_pars_fragment:CP,transmission_fragment:RP,transmission_pars_fragment:PP,uv_pars_fragment:DP,uv_pars_vertex:LP,uv_vertex:NP,worldpos_vertex:IP,background_vert:UP,background_frag:FP,backgroundCube_vert:kP,backgroundCube_frag:OP,cube_vert:BP,cube_frag:VP,depth_vert:zP,depth_frag:HP,distance_vert:GP,distance_frag:WP,equirect_vert:XP,equirect_frag:jP,linedashed_vert:YP,linedashed_frag:qP,meshbasic_vert:$P,meshbasic_frag:KP,meshlambert_vert:ZP,meshlambert_frag:JP,meshmatcap_vert:QP,meshmatcap_frag:e3,meshnormal_vert:t3,meshnormal_frag:n3,meshphong_vert:i3,meshphong_frag:r3,meshphysical_vert:s3,meshphysical_frag:o3,meshtoon_vert:a3,meshtoon_frag:l3,points_vert:c3,points_frag:u3,shadow_vert:f3,shadow_frag:d3,sprite_vert:h3,sprite_frag:p3},Be={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},er={basic:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Hn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Hn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Hn([Be.points,Be.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Hn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Hn([Be.common,Be.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Hn([Be.sprite,Be.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Hn([Be.common,Be.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Hn([Be.lights,Be.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};er.physical={uniforms:Hn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Bc={r:0,b:0,g:0},m3=new ln,US=new dt;US.set(-1,0,0,0,1,0,0,0,1);function g3(n,e,t,r,o,a){const c=new Ut(0);let f=o===!0?0:1,h,d,m=null,p=0,v=null;function S(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const T=C.backgroundBlurriness>0;P=e.get(P,T)}return P}function M(C){let P=!1;const T=S(C);T===null?y(c,f):T&&T.isColor&&(y(T,1),P=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(C,P){const T=S(P);T&&(T.isCubeTexture||T.mapping===wu)?(d===void 0&&(d=new Hi(new ol(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Ho(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=T,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(m3.makeRotationFromEuler(P.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(US),d.material.toneMapped=wt.getTransfer(T.colorSpace)!==Vt,(m!==T||p!==T.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,m=T,p=T.version,v=n.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Hi(new Cu(2,2),new lr({name:"BackgroundMaterial",uniforms:Ho(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=wt.getTransfer(T.colorSpace)!==Vt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(m!==T||p!==T.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,m=T,p=T.version,v=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function y(C,P){C.getRGB(Bc,DS(n)),t.buffers.color.setClear(Bc.r,Bc.g,Bc.b,P,a)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,P=1){c.set(C),f=P,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,y(c,f)},render:M,addToRenderList:b,dispose:_}}function v3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let a=o,c=!1;function f(B,W,ce,pe,$){let J=!1;const Z=p(B,pe,ce,W);a!==Z&&(a=Z,d(a.object)),J=S(B,pe,ce,$),J&&M(B,pe,ce,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,T(B,W,ce,pe),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function h(){return n.createVertexArray()}function d(B){return n.bindVertexArray(B)}function m(B){return n.deleteVertexArray(B)}function p(B,W,ce,pe){const $=pe.wireframe===!0;let J=r[W.id];J===void 0&&(J={},r[W.id]=J);const Z=B.isInstancedMesh===!0?B.id:0;let z=J[Z];z===void 0&&(z={},J[Z]=z);let te=z[ce.id];te===void 0&&(te={},z[ce.id]=te);let re=te[$];return re===void 0&&(re=v(h()),te[$]=re),re}function v(B){const W=[],ce=[],pe=[];for(let $=0;$<t;$++)W[$]=0,ce[$]=0,pe[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ce,attributeDivisors:pe,object:B,attributes:{},index:null}}function S(B,W,ce,pe){const $=a.attributes,J=W.attributes;let Z=0;const z=ce.getAttributes();for(const te in z)if(z[te].location>=0){const U=$[te];let q=J[te];if(q===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(q=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(q=B.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;Z++}return a.attributesNum!==Z||a.index!==pe}function M(B,W,ce,pe){const $={},J=W.attributes;let Z=0;const z=ce.getAttributes();for(const te in z)if(z[te].location>=0){let U=J[te];U===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(U=B.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),$[te]=q,Z++}a.attributes=$,a.attributesNum=Z,a.index=pe}function b(){const B=a.newAttributes;for(let W=0,ce=B.length;W<ce;W++)B[W]=0}function y(B){_(B,0)}function _(B,W){const ce=a.newAttributes,pe=a.enabledAttributes,$=a.attributeDivisors;ce[B]=1,pe[B]===0&&(n.enableVertexAttribArray(B),pe[B]=1),$[B]!==W&&(n.vertexAttribDivisor(B,W),$[B]=W)}function C(){const B=a.newAttributes,W=a.enabledAttributes;for(let ce=0,pe=W.length;ce<pe;ce++)W[ce]!==B[ce]&&(n.disableVertexAttribArray(ce),W[ce]=0)}function P(B,W,ce,pe,$,J,Z){Z===!0?n.vertexAttribIPointer(B,W,ce,$,J):n.vertexAttribPointer(B,W,ce,pe,$,J)}function T(B,W,ce,pe){b();const $=pe.attributes,J=ce.getAttributes(),Z=W.defaultAttributeValues;for(const z in J){const te=J[z];if(te.location>=0){let re=$[z];if(re===void 0&&(z==="instanceMatrix"&&B.instanceMatrix&&(re=B.instanceMatrix),z==="instanceColor"&&B.instanceColor&&(re=B.instanceColor)),re!==void 0){const U=re.normalized,q=re.itemSize,Se=e.get(re);if(Se===void 0)continue;const Oe=Se.buffer,Ee=Se.type,j=Se.bytesPerElement,ge=Ee===n.INT||Ee===n.UNSIGNED_INT||re.gpuType===sm;if(re.isInterleavedBufferAttribute){const de=re.data,Ne=de.stride,Ge=re.offset;if(de.isInstancedInterleavedBuffer){for(let Ze=0;Ze<te.locationSize;Ze++)_(te.location+Ze,de.meshPerAttribute);B.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ze=0;Ze<te.locationSize;Ze++)y(te.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Ze=0;Ze<te.locationSize;Ze++)P(te.location+Ze,q/te.locationSize,Ee,U,Ne*j,(Ge+q/te.locationSize*Ze)*j,ge)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<te.locationSize;de++)_(te.location+de,re.meshPerAttribute);B.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<te.locationSize;de++)y(te.location+de);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let de=0;de<te.locationSize;de++)P(te.location+de,q/te.locationSize,Ee,U,q*j,q/te.locationSize*de*j,ge)}}else if(Z!==void 0){const U=Z[z];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(te.location,U);break;case 3:n.vertexAttrib3fv(te.location,U);break;case 4:n.vertexAttrib4fv(te.location,U);break;default:n.vertexAttrib1fv(te.location,U)}}}}C()}function L(){N();for(const B in r){const W=r[B];for(const ce in W){const pe=W[ce];for(const $ in pe){const J=pe[$];for(const Z in J)m(J[Z].object),delete J[Z];delete pe[$]}}delete r[B]}}function D(B){if(r[B.id]===void 0)return;const W=r[B.id];for(const ce in W){const pe=W[ce];for(const $ in pe){const J=pe[$];for(const Z in J)m(J[Z].object),delete J[Z];delete pe[$]}}delete r[B.id]}function I(B){for(const W in r){const ce=r[W];for(const pe in ce){const $=ce[pe];if($[B.id]===void 0)continue;const J=$[B.id];for(const Z in J)m(J[Z].object),delete J[Z];delete $[B.id]}}}function E(B){for(const W in r){const ce=r[W],pe=B.isInstancedMesh===!0?B.id:0,$=ce[pe];if($!==void 0){for(const J in $){const Z=$[J];for(const z in Z)m(Z[z].object),delete Z[z];delete $[J]}delete ce[pe],Object.keys(ce).length===0&&delete r[W]}}}function N(){k(),c=!0,a!==o&&(a=o,d(a.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:y,disableUnusedAttributes:C}}function x3(n,e,t){let r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,m){m!==0&&(n.drawArraysInstanced(r,h,d,m),t.update(d,r,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,d,0,m);let v=0;for(let S=0;S<m;S++)v+=d[S];t.update(v,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=f}function y3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(I){return!(I!==Bi&&r.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const E=I===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Mi&&r.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==tr&&!E)}function h(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(at("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const p=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:T,maxSamples:L,samples:D}}function _3(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Ls,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const S=p.length!==0||v||r!==0||o;return o=v,r=p.length,S},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,v){t=m(p,v,0)},this.setState=function(p,v,S){const M=p.clippingPlanes,b=p.clipIntersection,y=p.clipShadows,_=n.get(p);if(!o||M===null||M.length===0||a&&!y)a?m(null):d();else{const C=a?0:r,P=C*4;let T=_.clippingState||null;h.value=T,T=m(M,v,P,S);for(let L=0;L!==P;++L)T[L]=t[L];_.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,v,S,M){const b=p!==null?p.length:0;let y=null;if(b!==0){if(y=h.value,M!==!0||y===null){const _=S+b*4,C=v.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let P=0,T=S;P!==b;++P,T+=4)c.copy(p[P]).applyMatrix4(C,f),c.normal.toArray(y,T),y[T+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const ss=4,Vx=[.125,.215,.35,.446,.526,.582],Is=20,S3=256,ka=new NS,zx=new Ut;let sh=null,oh=0,ah=0,lh=!1;const M3=new ee;class Hx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:f=M3}=a;sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,oh,ah),this._renderer.xr.enabled=lh,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:Cr,format:Bi,colorSpace:pu,depthBuffer:!1},o=Gx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gx(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E3(a)),this._blurMaterial=T3(a,e,t),this._ggxMaterial=w3(a,e,t)}return o}_compileMaterial(e){const t=new Hi(new jn,e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,r,o,a){const h=new Si(90,1,t,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,S=p.toneMapping;p.getClearColor(zx),p.toneMapping=rr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new ol,new xu({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let _=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,_=!0):(y.color.copy(zx),_=!0);for(let P=0;P<6;P++){const T=P%3;T===0?(h.up.set(0,d[P],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[P],a.y,a.z)):T===1?(h.up.set(0,0,d[P]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[P],a.z)):(h.up.set(0,d[P],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[P]));const L=this._cubeSize;Ro(o,T*L,P>2?L:0,L,L),p.setRenderTarget(o),_&&p.render(b,h),p.render(e,h)}p.toneMapping=S,p.autoClear=v,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===zs||e.mapping===Vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wx());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const h=this._cubeSize;Ro(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,ka)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),p=Math.sqrt(d*d-m*m),v=0+d*1.25,S=p*v,{_lodMax:M}=this,b=this._sizeLods[r],y=3*b*(r>M-ss?r-M+ss:0),_=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=M-t,Ro(a,y,_,3*b,2*b),o.setRenderTarget(a),o.render(f,ka),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=M-r,Ro(e,y,_,3*b,2*b),o.setRenderTarget(e),o.render(f,ka)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const m=3,p=this._lodMeshes[o];p.material=d;const v=d.uniforms,S=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Is-1),b=a/M,y=isFinite(a)?1+Math.floor(m*b):Is;y>Is&&at(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Is}`);const _=[];let C=0;for(let I=0;I<Is;++I){const E=I/b,N=Math.exp(-E*E/2);_.push(N),I===0?C+=N:I<y&&(C+=2*N)}for(let I=0;I<_.length;I++)_[I]=_[I]/C;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const T=this._sizeLods[o],L=3*T*(o>P-ss?o-P+ss:0),D=4*(this._cubeSize-T);Ro(t,L,D,3*T,2*T),h.setRenderTarget(t),h.render(p,ka)}}function E3(n){const e=[],t=[],r=[];let o=n;const a=n-ss+1+Vx.length;for(let c=0;c<a;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>n-ss?h=Vx[c-n+ss-1]:c===0&&(h=0),t.push(h);const d=1/(f-2),m=-d,p=1+d,v=[m,m,p,m,p,p,m,m,p,p,m,p],S=6,M=6,b=3,y=2,_=1,C=new Float32Array(b*M*S),P=new Float32Array(y*M*S),T=new Float32Array(_*M*S);for(let D=0;D<S;D++){const I=D%3*2/3-1,E=D>2?0:-1,N=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];C.set(N,b*M*D),P.set(v,y*M*D);const k=[D,D,D,D,D,D];T.set(k,_*M*D)}const L=new jn;L.setAttribute("position",new zi(C,b)),L.setAttribute("uv",new zi(P,y)),L.setAttribute("faceIndex",new zi(T,_)),r.push(new Hi(L,null)),o>ss&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Gx(n,e,t){const r=new sr(n,e,t);return r.texture.mapping=wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ro(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function w3(n,e,t){return new lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function T3(n,e,t){const r=new Float32Array(Is),o=new ee(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Du(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Wx(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Xx(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}class FS extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new RS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ol(5,5,5),a=new lr({name:"CubemapFromEquirect",uniforms:Ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:br});a.uniforms.tEquirect.value=t;const c=new Hi(o,a),f=t.minFilter;return t.minFilter===ks&&(t.minFilter=On),new PR(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function b3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?c(v):a(v)}function a(v){if(v&&v.isTexture){const S=v.mapping;if(S===Ld||S===Nd)if(e.has(v)){const M=e.get(v).texture;return f(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const b=new FS(M.height);return b.fromEquirectangularTexture(n,v),e.set(v,b),v.addEventListener("dispose",d),f(b.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const S=v.mapping,M=S===Ld||S===Nd,b=S===zs||S===Vo;if(M||b){let y=t.get(v);const _=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==_)return r===null&&(r=new Hx(n)),y=M?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const C=v.image;return M&&C&&C.height>0||b&&C&&h(C)?(r===null&&(r=new Hx(n)),y=M?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",m),y.texture):null}}}return v}function f(v,S){return S===Ld?v.mapping=zs:S===Nd&&(v.mapping=Vo),v}function h(v){let S=0;const M=6;for(let b=0;b<M;b++)v[b]!==void 0&&S++;return S===M}function d(v){const S=v.target;S.removeEventListener("dispose",d);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function m(v){const S=v.target;S.removeEventListener("dispose",m);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function p(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:p}}function A3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Uo("WebGLRenderer: "+r+" extension not supported."),o}}}function C3(n,e,t,r){const o={},a=new WeakMap;function c(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete o[v.id];const S=a.get(v);S&&(e.remove(S),a.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(p,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function h(p){const v=p.attributes;for(const S in v)e.update(v[S],n.ARRAY_BUFFER)}function d(p){const v=[],S=p.index,M=p.attributes.position;let b=0;if(M===void 0)return;if(S!==null){const C=S.array;b=S.version;for(let P=0,T=C.length;P<T;P+=3){const L=C[P+0],D=C[P+1],I=C[P+2];v.push(L,D,D,I,I,L)}}else{const C=M.array;b=M.version;for(let P=0,T=C.length/3-1;P<T;P+=3){const L=P+0,D=P+1,I=P+2;v.push(L,D,D,I,I,L)}}const y=new(M.count>=65535?TS:wS)(v,1);y.version=b;const _=a.get(p);_&&e.remove(_),a.set(p,y)}function m(p){const v=a.get(p);if(v){const S=p.index;S!==null&&v.version<S.version&&d(p)}else d(p);return a.get(p)}return{get:f,update:h,getWireframeAttribute:m}}function R3(n,e,t){let r;function o(p){r=p}let a,c;function f(p){a=p.type,c=p.bytesPerElement}function h(p,v){n.drawElements(r,v,a,p*c),t.update(v,r,1)}function d(p,v,S){S!==0&&(n.drawElementsInstanced(r,v,a,p*c,S),t.update(v,r,S))}function m(p,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,a,p,0,S);let b=0;for(let y=0;y<S;y++)b+=v[y];t.update(b,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function P3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,f){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=f*(a/3);break;case n.LINES:t.lines+=f*(a/2);break;case n.LINE_STRIP:t.lines+=f*(a-1);break;case n.LINE_LOOP:t.lines+=f*a;break;case n.POINTS:t.points+=f*a;break;default:Dt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function D3(n,e,t){const r=new WeakMap,o=new on;function a(c,f,h){const d=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=m!==void 0?m.length:0;let v=r.get(f);if(v===void 0||v.count!==p){let k=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",k)};var S=k;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let T=0;M===!0&&(T=1),b===!0&&(T=2),y===!0&&(T=3);let L=f.attributes.position.count*T,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*D*4*p),E=new SS(I,L,D,p);E.type=tr,E.needsUpdate=!0;const N=T*4;for(let B=0;B<p;B++){const W=_[B],ce=C[B],pe=P[B],$=L*D*4*B;for(let J=0;J<W.count;J++){const Z=J*N;M===!0&&(o.fromBufferAttribute(W,J),I[$+Z+0]=o.x,I[$+Z+1]=o.y,I[$+Z+2]=o.z,I[$+Z+3]=0),b===!0&&(o.fromBufferAttribute(ce,J),I[$+Z+4]=o.x,I[$+Z+5]=o.y,I[$+Z+6]=o.z,I[$+Z+7]=0),y===!0&&(o.fromBufferAttribute(pe,J),I[$+Z+8]=o.x,I[$+Z+9]=o.y,I[$+Z+10]=o.z,I[$+Z+11]=pe.itemSize===4?o.w:1)}}v={count:p,texture:E,size:new Ct(L,D)},r.set(f,v),f.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<d.length;y++)M+=d[y];const b=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:a}}function L3(n,e,t,r,o){let a=new WeakMap;function c(d){const m=o.render.frame,p=d.geometry,v=e.get(d,p);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),a.get(d)!==m&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,m))),d.isSkinnedMesh){const S=d.skeleton;a.get(S)!==m&&(S.update(),a.set(S,m))}return v}function f(){a=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}const N3={[sS]:"LINEAR_TONE_MAPPING",[oS]:"REINHARD_TONE_MAPPING",[aS]:"CINEON_TONE_MAPPING",[lS]:"ACES_FILMIC_TONE_MAPPING",[uS]:"AGX_TONE_MAPPING",[fS]:"NEUTRAL_TONE_MAPPING",[cS]:"CUSTOM_TONE_MAPPING"};function I3(n,e,t,r,o,a){const c=new sr(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,depthTexture:o?new zo(e,t):void 0}),f=new sr(e,t,{type:Cr,depthBuffer:!1,stencilBuffer:!1}),h=new jn;h.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new cn([0,2,0,0,2,0],2));const d=new AR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Hi(h,d),p=new NS(-1,1,1,-1,0,1);let v=null,S=null,M=!1,b,y=null,_=[],C=!1;this.setSize=function(P,T){c.setSize(P,T),f.setSize(P,T);for(let L=0;L<_.length;L++){const D=_[L];D.setSize&&D.setSize(P,T)}},this.setEffects=function(P){_=P,C=_.length>0&&_[0].isRenderPass===!0;const T=c.width,L=c.height;for(let D=0;D<_.length;D++){const I=_[D];I.setSize&&I.setSize(T,L)}},this.begin=function(P,T){if(M||P.toneMapping===rr&&_.length===0)return!1;if(y=T,T!==null){const L=T.width,D=T.height;(c.width!==L||c.height!==D)&&this.setSize(L,D)}return C===!1&&P.setRenderTarget(c),b=P.toneMapping,P.toneMapping=rr,!0},this.hasRenderPass=function(){return C},this.end=function(P,T){P.toneMapping=b,M=!0;let L=c,D=f;for(let I=0;I<_.length;I++){const E=_[I];if(E.enabled!==!1&&(E.render(P,D,L,T),E.needsSwap!==!1)){const N=L;L=D,D=N}}if(v!==P.outputColorSpace||S!==P.toneMapping){v=P.outputColorSpace,S=P.toneMapping,d.defines={},wt.getTransfer(v)===Vt&&(d.defines.SRGB_TRANSFER="");const I=N3[S];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(y),P.render(m,p),y=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),d.dispose()}}const kS=new Xn,Cp=new zo(1,1),OS=new SS,BS=new iR,VS=new RS,jx=[],Yx=[],qx=new Float32Array(16),$x=new Float32Array(9),Kx=new Float32Array(4);function Yo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=jx[o];if(a===void 0&&(a=new Float32Array(o),jx[o]=a),e!==0){r.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,n[c].toArray(a,f)}return a}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Lu(n,e){let t=Yx[e];t===void 0&&(t=new Int32Array(e),Yx[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function U3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function k3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function O3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function B3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,r))return;Kx.set(r),n.uniformMatrix2fv(this.addr,!1,Kx),yn(t,r)}}function V3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,r))return;$x.set(r),n.uniformMatrix3fv(this.addr,!1,$x),yn(t,r)}}function z3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,r))return;qx.set(r),n.uniformMatrix4fv(this.addr,!1,qx),yn(t,r)}}function H3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function G3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function j3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function $3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function K3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Cp.compareFunction=t.isReversedDepthBuffer()?dm:fm,a=Cp):a=kS,t.setTexture2D(e||a,o)}function Z3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||BS,o)}function J3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||VS,o)}function Q3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||OS,o)}function eD(n){switch(n){case 5126:return U3;case 35664:return F3;case 35665:return k3;case 35666:return O3;case 35674:return B3;case 35675:return V3;case 35676:return z3;case 5124:case 35670:return H3;case 35667:case 35671:return G3;case 35668:case 35672:return W3;case 35669:case 35673:return X3;case 5125:return j3;case 36294:return Y3;case 36295:return q3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return K3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return J3;case 36289:case 36303:case 36311:case 36292:return Q3}}function tD(n,e){n.uniform1fv(this.addr,e)}function nD(n,e){const t=Yo(e,this.size,2);n.uniform2fv(this.addr,t)}function iD(n,e){const t=Yo(e,this.size,3);n.uniform3fv(this.addr,t)}function rD(n,e){const t=Yo(e,this.size,4);n.uniform4fv(this.addr,t)}function sD(n,e){const t=Yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oD(n,e){const t=Yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aD(n,e){const t=Yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lD(n,e){n.uniform1iv(this.addr,e)}function cD(n,e){n.uniform2iv(this.addr,e)}function uD(n,e){n.uniform3iv(this.addr,e)}function fD(n,e){n.uniform4iv(this.addr,e)}function dD(n,e){n.uniform1uiv(this.addr,e)}function hD(n,e){n.uniform2uiv(this.addr,e)}function pD(n,e){n.uniform3uiv(this.addr,e)}function mD(n,e){n.uniform4uiv(this.addr,e)}function gD(n,e,t){const r=this.cache,o=e.length,a=Lu(t,o);xn(r,a)||(n.uniform1iv(this.addr,a),yn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Cp:c=kS;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,a[f])}function vD(n,e,t){const r=this.cache,o=e.length,a=Lu(t,o);xn(r,a)||(n.uniform1iv(this.addr,a),yn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||BS,a[c])}function xD(n,e,t){const r=this.cache,o=e.length,a=Lu(t,o);xn(r,a)||(n.uniform1iv(this.addr,a),yn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||VS,a[c])}function yD(n,e,t){const r=this.cache,o=e.length,a=Lu(t,o);xn(r,a)||(n.uniform1iv(this.addr,a),yn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||OS,a[c])}function _D(n){switch(n){case 5126:return tD;case 35664:return nD;case 35665:return iD;case 35666:return rD;case 35674:return sD;case 35675:return oD;case 35676:return aD;case 5124:case 35670:return lD;case 35667:case 35671:return cD;case 35668:case 35672:return uD;case 35669:case 35673:return fD;case 5125:return dD;case 36294:return hD;case 36295:return pD;case 36296:return mD;case 35678:case 36198:case 36298:case 36306:case 35682:return gD;case 35679:case 36299:case 36307:return vD;case 35680:case 36300:case 36308:case 36293:return xD;case 36289:case 36303:case 36311:case 36292:return yD}}class SD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=eD(t.type)}}class MD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_D(t.type)}}class ED{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function Zx(n,e){n.seq.push(e),n.map[e.id]=e}function wD(n,e,t){const r=n.name,o=r.length;for(ch.lastIndex=0;;){const a=ch.exec(r),c=ch.lastIndex;let f=a[1];const h=a[2]==="]",d=a[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===o){Zx(t,d===void 0?new SD(f,n,e):new MD(f,n,e));break}else{let p=t.map[f];p===void 0&&(p=new ED(f),Zx(t,p)),t=p}}}class tu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);wD(f,h,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const f=t[a],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Jx(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const TD=37297;let bD=0;function AD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Qx=new dt;function CD(n){wt._getMatrix(Qx,wt.workingColorSpace,n);const e=`mat3( ${Qx.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case mu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ey(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+AD(n.getShaderSource(e),f)}else return a}function RD(n,e){const t=CD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const PD={[sS]:"Linear",[oS]:"Reinhard",[aS]:"Cineon",[lS]:"ACESFilmic",[uS]:"AgX",[fS]:"Neutral",[cS]:"Custom"};function DD(n,e){const t=PD[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vc=new ee;function LD(){wt.getLuminanceCoefficients(Vc);const n=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ND(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function ID(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function UD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let f=1;a.type===n.FLOAT_MAT2&&(f=2),a.type===n.FLOAT_MAT3&&(f=3),a.type===n.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:f}}return t}function Ha(n){return n!==""}function ty(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ny(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rp(n){return n.replace(FD,OD)}const kD=new Map;function OD(n,e){let t=mt[e];if(t===void 0){const r=kD.get(e);if(r!==void 0)t=mt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rp(t)}const BD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iy(n){return n.replace(BD,VD)}function VD(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function ry(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const zD={[Kc]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function HD(n){return zD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GD={[zs]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[wu]:"ENVMAP_TYPE_CUBE_UV"};function WD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":GD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const XD={[Vo]:"ENVMAP_MODE_REFRACTION"};function jD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":XD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YD={[rS]:"ENVMAP_BLENDING_MULTIPLY",[FC]:"ENVMAP_BLENDING_MIX",[kC]:"ENVMAP_BLENDING_ADD"};function qD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":YD[n.combine]||"ENVMAP_BLENDING_NONE"}function $D(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function KD(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=HD(t),d=WD(t),m=jD(t),p=qD(t),v=$D(t),S=ND(t),M=ID(a),b=o.createProgram();let y,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),_.length>0&&(_+=`
`)):(y=[ry(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),_=[ry(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?mt.tonemapping_pars_fragment:"",t.toneMapping!==rr?DD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,RD("linearToOutputTexel",t.outputColorSpace),LD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),c=Rp(c),c=ty(c,t),c=ny(c,t),f=Rp(f),f=ty(f,t),f=ny(f,t),c=iy(c),f=iy(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===gx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=C+y+c,T=C+_+f,L=Jx(o,o.VERTEX_SHADER,P),D=Jx(o,o.FRAGMENT_SHADER,T);o.attachShader(b,L),o.attachShader(b,D),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function I(B){if(n.debug.checkShaderErrors){const W=o.getProgramInfoLog(b)||"",ce=o.getShaderInfoLog(L)||"",pe=o.getShaderInfoLog(D)||"",$=W.trim(),J=ce.trim(),Z=pe.trim();let z=!0,te=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,b,L,D);else{const re=ey(o,L,"vertex"),U=ey(o,D,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+re+`
`+U)}else $!==""?at("WebGLProgram: Program Info Log:",$):(J===""||Z==="")&&(te=!1);te&&(B.diagnostics={runnable:z,programLog:$,vertexShader:{log:J,prefix:y},fragmentShader:{log:Z,prefix:_}})}o.deleteShader(L),o.deleteShader(D),E=new tu(o,b),N=UD(o,b)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(b,TD)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bD++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=D,this}let ZD=0;class JD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new QD(e),t.set(e,r)),r}}class QD{constructor(e){this.id=ZD++,this.code=e,this.usedTimes=0}}function eL(n){return n===Hs||n===du||n===hu}function tL(n,e,t,r,o,a){const c=new MS,f=new JD,h=new Set,d=[],m=new Map,p=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return h.add(E),E===0?"uv":`uv${E}`}function b(E,N,k,B,W,ce){const pe=B.fog,$=W.geometry,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,Z=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,z=e.get(E.envMap||J,Z),te=z&&z.mapping===wu?z.image.height:null,re=S[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const U=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,q=U!==void 0?U.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Oe,Ee,j,ge;if(re){const Ue=er[re];Oe=Ue.vertexShader,Ee=Ue.fragmentShader}else{Oe=E.vertexShader,Ee=E.fragmentShader;const Ue=f.getVertexShaderStage(E),pt=f.getFragmentShaderStage(E);f.update(E,Ue,pt),j=Ue.id,ge=pt.id}const de=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Ge=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,Rt=!!E.map,ct=!!E.matcap,Mt=!!z,St=!!E.aoMap,gt=!!E.lightMap,Ft=!!E.bumpMap&&E.wireframe===!1,jt=!!E.normalMap,Lt=!!E.displacementMap,Yt=!!E.emissiveMap,It=!!E.metalnessMap,xt=!!E.roughnessMap,X=E.anisotropy>0,pn=E.clearcoat>0,bt=E.dispersion>0,F=E.iridescence>0,w=E.sheen>0,Q=E.transmission>0,ae=X&&!!E.anisotropyMap,he=pn&&!!E.clearcoatMap,Te=pn&&!!E.clearcoatNormalMap,Ce=pn&&!!E.clearcoatRoughnessMap,me=F&&!!E.iridescenceMap,ve=F&&!!E.iridescenceThicknessMap,Ie=w&&!!E.sheenColorMap,qe=w&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,Pe=!!E.specularColorMap,We=!!E.specularIntensityMap,it=Q&&!!E.transmissionMap,ot=Q&&!!E.thicknessMap,G=!!E.gradientMap,De=!!E.alphaMap,ie=E.alphaTest>0,Me=!!E.alphaHash,be=!!E.extensions;let xe=rr;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Xe={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:Oe,fragmentShader:Ee,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,instancingMorph:Ge&&W.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:ct,envMap:Mt,envMapMode:Mt&&z.mapping,envMapCubeUVHeight:te,aoMap:St,lightMap:gt,bumpMap:Ft,normalMap:jt,displacementMap:Lt,emissiveMap:Yt,normalMapObjectSpace:jt&&E.normalMapType===VC,normalMapTangentSpace:jt&&E.normalMapType===hx,packedNormalMap:jt&&E.normalMapType===hx&&eL(E.normalMap.format),metalnessMap:It,roughnessMap:xt,anisotropy:X,anisotropyMap:ae,clearcoat:pn,clearcoatMap:he,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ce,dispersion:bt,iridescence:F,iridescenceMap:me,iridescenceThicknessMap:ve,sheen:w,sheenColorMap:Ie,sheenRoughnessMap:qe,specularMap:Fe,specularColorMap:Pe,specularIntensityMap:We,transmission:Q,transmissionMap:it,thicknessMap:ot,gradientMap:G,opaque:E.transparent===!1&&E.blending===Io&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:ie,alphaHash:Me,combine:E.combine,mapUv:Rt&&M(E.map.channel),aoMapUv:St&&M(E.aoMap.channel),lightMapUv:gt&&M(E.lightMap.channel),bumpMapUv:Ft&&M(E.bumpMap.channel),normalMapUv:jt&&M(E.normalMap.channel),displacementMapUv:Lt&&M(E.displacementMap.channel),emissiveMapUv:Yt&&M(E.emissiveMap.channel),metalnessMapUv:It&&M(E.metalnessMap.channel),roughnessMapUv:xt&&M(E.roughnessMap.channel),anisotropyMapUv:ae&&M(E.anisotropyMap.channel),clearcoatMapUv:he&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(E.sheenRoughnessMap.channel),specularMapUv:Fe&&M(E.specularMap.channel),specularColorMapUv:Pe&&M(E.specularColorMap.channel),specularIntensityMapUv:We&&M(E.specularIntensityMap.channel),transmissionMapUv:it&&M(E.transmissionMap.channel),thicknessMapUv:ot&&M(E.thicknessMap.channel),alphaMapUv:De&&M(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(jt||X),vertexNormals:!!$.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(Rt||De),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||$.attributes.normal===void 0&&jt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ne,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&wt.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:Yt&&E.emissiveMap.isVideoTexture===!0&&wt.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wr,flipSided:E.side===ri,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&E.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xe.vertexUv1s=h.has(1),Xe.vertexUv2s=h.has(2),Xe.vertexUv3s=h.has(3),h.clear(),Xe}function y(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)N.push(k),N.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(_(N,E),C(N,E),N.push(n.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function _(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function C(E,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function P(E){const N=S[E.type];let k;if(N){const B=er[N];k=wR.clone(B.uniforms)}else k=E.uniforms;return k}function T(E,N){let k=m.get(N);return k!==void 0?++k.usedTimes:(k=new KD(n,N,E,o),d.push(k),m.set(N,k)),k}function L(E){if(--E.usedTimes===0){const N=d.indexOf(E);d[N]=d[d.length-1],d.pop(),m.delete(E.cacheKey),E.destroy()}}function D(E){f.remove(E)}function I(){f.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:P,acquireProgram:T,releaseProgram:L,releaseShaderCache:D,programs:d,dispose:I}}function nL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let f=n.get(c);return f===void 0&&(f={},n.set(c,f)),f}function r(c){n.delete(c)}function o(c,f,h){n.get(c)[f]=h}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function iL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function sy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function oy(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function f(v,S,M,b,y,_){let C=n[e];return C===void 0?(C={id:v.id,object:v,geometry:S,material:M,materialVariant:c(v),groupOrder:b,renderOrder:v.renderOrder,z:y,group:_},n[e]=C):(C.id=v.id,C.object=v,C.geometry=S,C.material=M,C.materialVariant=c(v),C.groupOrder=b,C.renderOrder=v.renderOrder,C.z=y,C.group=_),e++,C}function h(v,S,M,b,y,_){const C=f(v,S,M,b,y,_);M.transmission>0?r.push(C):M.transparent===!0?o.push(C):t.push(C)}function d(v,S,M,b,y,_){const C=f(v,S,M,b,y,_);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function m(v,S,M){t.length>1&&t.sort(v||iL),r.length>1&&r.sort(S||sy),o.length>1&&o.sort(S||sy),M&&(t.reverse(),r.reverse(),o.reverse())}function p(){for(let v=e,S=n.length;v<S;v++){const M=n[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:h,unshift:d,finish:p,sort:m}}function rL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new oy,n.set(r,[c])):o>=a.length?(c=new oy,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function sL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Ut};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function oL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aL=0;function lL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cL(n){const e=new sL,t=oL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ee);const o=new ee,a=new ln,c=new ln;function f(d){let m=0,p=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,M=0,b=0,y=0,_=0,C=0,P=0,T=0,L=0,D=0,I=0;d.sort(lL);for(let N=0,k=d.length;N<k;N++){const B=d[N],W=B.color,ce=B.intensity,pe=B.distance;let $=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Hs?$=B.shadow.map.texture:$=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)m+=W.r*ce,p+=W.g*ce,v+=W.b*ce;else if(B.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(B.sh.coefficients[J],ce);I++}else if(B.isDirectionalLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,z=t.get(B);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=$,r.directionalShadowMatrix[S]=B.shadow.matrix,C++}r.directional[S]=J,S++}else if(B.isSpotLight){const J=e.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(W).multiplyScalar(ce),J.distance=pe,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,r.spot[b]=J;const Z=B.shadow;if(B.map&&(r.spotLightMap[L]=B.map,L++,Z.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[b]=Z.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,r.spotShadow[b]=z,r.spotShadowMap[b]=$,T++}b++}else if(B.isRectAreaLight){const J=e.get(B);J.color.copy(W).multiplyScalar(ce),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=J,y++}else if(B.isPointLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),J.distance=B.distance,J.decay=B.decay,B.castShadow){const Z=B.shadow,z=t.get(B);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,r.pointShadow[M]=z,r.pointShadowMap[M]=$,r.pointShadowMatrix[M]=B.shadow.matrix,P++}r.point[M]=J,M++}else if(B.isHemisphereLight){const J=e.get(B);J.skyColor.copy(B.color).multiplyScalar(ce),J.groundColor.copy(B.groundColor).multiplyScalar(ce),r.hemi[_]=J,_++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=v;const E=r.hash;(E.directionalLength!==S||E.pointLength!==M||E.spotLength!==b||E.rectAreaLength!==y||E.hemiLength!==_||E.numDirectionalShadows!==C||E.numPointShadows!==P||E.numSpotShadows!==T||E.numSpotMaps!==L||E.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=y,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=T+L-D,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=I,E.directionalLength=S,E.pointLength=M,E.spotLength=b,E.rectAreaLength=y,E.hemiLength=_,E.numDirectionalShadows=C,E.numPointShadows=P,E.numSpotShadows=T,E.numSpotMaps=L,E.numLightProbes=I,r.version=aL++)}function h(d,m){let p=0,v=0,S=0,M=0,b=0;const y=m.matrixWorldInverse;for(let _=0,C=d.length;_<C;_++){const P=d[_];if(P.isDirectionalLight){const T=r.directional[p];T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(y),p++}else if(P.isSpotLight){const T=r.spot[S];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const T=r.rectArea[M];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(y),c.identity(),a.copy(P.matrixWorld),a.premultiply(y),c.extractRotation(a),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const T=r.point[v];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const T=r.hemi[b];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(y),b++}}}return{setup:f,setupView:h,state:r}}function ay(n){const e=new cL(n),t=[],r=[],o=[];function a(v){p.camera=v,t.length=0,r.length=0,o.length=0}function c(v){t.push(v)}function f(v){r.push(v)}function h(v){o.push(v)}function d(){e.setup(t)}function m(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f,pushLightProbeGrid:h}}function uL(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let f;return c===void 0?(f=new ay(n),e.set(o,[f])):a>=c.length?(f=new ay(n),c.push(f)):f=c[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const fL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dL=`uniform sampler2D shadow_pass;
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
}`,hL=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],pL=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],ly=new ln,Oa=new ee,uh=new ee;function mL(n,e,t){let r=new AS;const o=new Ct,a=new Ct,c=new on,f=new CR,h=new RR,d={},m=t.maxTextureSize,p={[ls]:ri,[ri]:ls,[wr]:wr},v=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:fL,fragmentShader:dL}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new jn;M.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Hi(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let _=this.type;this.render=function(D,I,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===vC&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const N=n.getRenderTarget(),k=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),W=n.state;W.setBlending(br),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ce=_!==this.type;ce&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach($=>$.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,$=D.length;pe<$;pe++){const J=D[pe],Z=J.shadow;if(Z===void 0){at("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const z=Z.getFrameExtents();o.multiply(z),a.copy(Z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/z.x),o.x=a.x*z.x,Z.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/z.y),o.y=a.y*z.y,Z.mapSize.y=a.y));const te=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=te,Z.map===null||ce===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Va){if(J.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new sr(o.x,o.y,{format:Hs,type:Cr,minFilter:On,magFilter:On,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new zo(o.x,o.y,tr),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Rr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Dn,Z.map.depthTexture.magFilter=Dn}else J.isPointLight?(Z.map=new FS(o.x),Z.map.depthTexture=new MR(o.x,ar)):(Z.map=new sr(o.x,o.y),Z.map.depthTexture=new zo(o.x,o.y,ar)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Rr,this.type===Kc?(Z.map.depthTexture.compareFunction=te?dm:fm,Z.map.depthTexture.minFilter=On,Z.map.depthTexture.magFilter=On):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Dn,Z.map.depthTexture.magFilter=Dn);Z.camera.updateProjectionMatrix()}const re=Z.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<re;U++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,U),n.clear();else{U===0&&(n.setRenderTarget(Z.map),n.clear());const q=Z.getViewport(U);c.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),W.viewport(c)}if(J.isPointLight){const q=Z.camera,Se=Z.matrix,Oe=J.distance||q.far;Oe!==q.far&&(q.far=Oe,q.updateProjectionMatrix()),Oa.setFromMatrixPosition(J.matrixWorld),q.position.copy(Oa),uh.copy(q.position),uh.add(hL[U]),q.up.copy(pL[U]),q.lookAt(uh),q.updateMatrixWorld(),Se.makeTranslation(-Oa.x,-Oa.y,-Oa.z),ly.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(ly,q.coordinateSystem,q.reversedDepth)}else Z.updateMatrices(J);r=Z.getFrustum(),T(I,E,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Va&&C(Z,E),Z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(N,k,B)};function C(D,I){const E=e.update(b);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new sr(o.x,o.y,{format:Hs,type:Cr})),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,E,v,b,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,E,S,b,null)}function P(D,I,E,N){let k=null;const B=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)k=B;else if(k=E.isPointLight===!0?h:f,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=k.uuid,ce=I.uuid;let pe=d[W];pe===void 0&&(pe={},d[W]=pe);let $=pe[ce];$===void 0&&($=k.clone(),pe[ce]=$,I.addEventListener("dispose",L)),k=$}if(k.visible=I.visible,k.wireframe=I.wireframe,N===Va?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:p[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const W=n.properties.get(k);W.light=E}return k}function T(D,I,E,N,k){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Va)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),pe=D.material;if(Array.isArray(pe)){const $=ce.groups;for(let J=0,Z=$.length;J<Z;J++){const z=$[J],te=pe[z.materialIndex];if(te&&te.visible){const re=P(D,te,N,k);D.onBeforeShadow(n,D,I,E,ce,re,z),n.renderBufferDirect(E,null,ce,re,D,z),D.onAfterShadow(n,D,I,E,ce,re,z)}}}else if(pe.visible){const $=P(D,pe,N,k);D.onBeforeShadow(n,D,I,E,ce,$,null),n.renderBufferDirect(E,null,ce,$,D,null),D.onAfterShadow(n,D,I,E,ce,$,null)}}const W=D.children;for(let ce=0,pe=W.length;ce<pe;ce++)T(W[ce],I,E,N,k)}function L(D){D.target.removeEventListener("dispose",L);for(const E in d){const N=d[E],k=D.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function gL(n,e){function t(){let G=!1;const De=new on;let ie=null;const Me=new on(0,0,0,0);return{setMask:function(be){ie!==be&&!G&&(n.colorMask(be,be,be,be),ie=be)},setLocked:function(be){G=be},setClear:function(be,xe,Xe,Ue,pt){pt===!0&&(be*=Ue,xe*=Ue,Xe*=Ue),De.set(be,xe,Xe,Ue),Me.equals(De)===!1&&(n.clearColor(be,xe,Xe,Ue),Me.copy(De))},reset:function(){G=!1,ie=null,Me.set(-1,0,0,0)}}}function r(){let G=!1,De=!1,ie=null,Me=null,be=null;return{setReversed:function(xe){if(De!==xe){const Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const Ue=be;be=null,this.setClear(Ue)}},getReversed:function(){return De},setTest:function(xe){xe?de(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(xe){ie!==xe&&!G&&(n.depthMask(xe),ie=xe)},setFunc:function(xe){if(De&&(xe=KC[xe]),Me!==xe){switch(xe){case zh:n.depthFunc(n.NEVER);break;case Hh:n.depthFunc(n.ALWAYS);break;case Gh:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case Wh:n.depthFunc(n.EQUAL);break;case Xh:n.depthFunc(n.GEQUAL);break;case jh:n.depthFunc(n.GREATER);break;case Yh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=xe}},setLocked:function(xe){G=xe},setClear:function(xe){be!==xe&&(be=xe,De&&(xe=1-xe),n.clearDepth(xe))},reset:function(){G=!1,ie=null,Me=null,be=null,De=!1}}}function o(){let G=!1,De=null,ie=null,Me=null,be=null,xe=null,Xe=null,Ue=null,pt=null;return{setTest:function(Et){G||(Et?de(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(Et){De!==Et&&!G&&(n.stencilMask(Et),De=Et)},setFunc:function(Et,zt,Zt){(ie!==Et||Me!==zt||be!==Zt)&&(n.stencilFunc(Et,zt,Zt),ie=Et,Me=zt,be=Zt)},setOp:function(Et,zt,Zt){(xe!==Et||Xe!==zt||Ue!==Zt)&&(n.stencilOp(Et,zt,Zt),xe=Et,Xe=zt,Ue=Zt)},setLocked:function(Et){G=Et},setClear:function(Et){pt!==Et&&(n.clearStencil(Et),pt=Et)},reset:function(){G=!1,De=null,ie=null,Me=null,be=null,xe=null,Xe=null,Ue=null,pt=null}}}const a=new t,c=new r,f=new o,h=new WeakMap,d=new WeakMap;let m={},p={},v={},S=new WeakMap,M=[],b=null,y=!1,_=null,C=null,P=null,T=null,L=null,D=null,I=null,E=new Ut(0,0,0),N=0,k=!1,B=null,W=null,ce=null,pe=null,$=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,z=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),Z=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Z=z>=2);let re=null,U={};const q=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Oe=new on().fromArray(q),Ee=new on().fromArray(Se);function j(G,De,ie,Me){const be=new Uint8Array(4),xe=n.createTexture();n.bindTexture(G,xe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ie;Xe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(De+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return xe}const ge={};ge[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),de(n.DEPTH_TEST),c.setFunc(Bo),Ft(!1),jt(ux),de(n.CULL_FACE),St(br);function de(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function Ne(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function Ge(G,De){return v[G]!==De?(n.bindFramebuffer(G,De),v[G]=De,G===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=De),G===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=De),!0):!1}function Ze(G,De){let ie=M,Me=!1;if(G){ie=S.get(De),ie===void 0&&(ie=[],S.set(De,ie));const be=G.textures;if(ie.length!==be.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Xe=be.length;xe<Xe;xe++)ie[xe]=n.COLOR_ATTACHMENT0+xe;ie.length=be.length,Me=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ie)}function Rt(G){return b!==G?(n.useProgram(G),b=G,!0):!1}const ct={[Ns]:n.FUNC_ADD,[yC]:n.FUNC_SUBTRACT,[_C]:n.FUNC_REVERSE_SUBTRACT};ct[SC]=n.MIN,ct[MC]=n.MAX;const Mt={[EC]:n.ZERO,[wC]:n.ONE,[TC]:n.SRC_COLOR,[Bh]:n.SRC_ALPHA,[DC]:n.SRC_ALPHA_SATURATE,[RC]:n.DST_COLOR,[AC]:n.DST_ALPHA,[bC]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[PC]:n.ONE_MINUS_DST_COLOR,[CC]:n.ONE_MINUS_DST_ALPHA,[LC]:n.CONSTANT_COLOR,[NC]:n.ONE_MINUS_CONSTANT_COLOR,[IC]:n.CONSTANT_ALPHA,[UC]:n.ONE_MINUS_CONSTANT_ALPHA};function St(G,De,ie,Me,be,xe,Xe,Ue,pt,Et){if(G===br){y===!0&&(Ne(n.BLEND),y=!1);return}if(y===!1&&(de(n.BLEND),y=!0),G!==xC){if(G!==_||Et!==k){if((C!==Ns||L!==Ns)&&(n.blendEquation(n.FUNC_ADD),C=Ns,L=Ns),Et)switch(G){case Io:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFunc(n.ONE,n.ONE);break;case fx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",G);break}else switch(G){case Io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dx:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",G);break}P=null,T=null,D=null,I=null,E.set(0,0,0),N=0,_=G,k=Et}return}be=be||De,xe=xe||ie,Xe=Xe||Me,(De!==C||be!==L)&&(n.blendEquationSeparate(ct[De],ct[be]),C=De,L=be),(ie!==P||Me!==T||xe!==D||Xe!==I)&&(n.blendFuncSeparate(Mt[ie],Mt[Me],Mt[xe],Mt[Xe]),P=ie,T=Me,D=xe,I=Xe),(Ue.equals(E)===!1||pt!==N)&&(n.blendColor(Ue.r,Ue.g,Ue.b,pt),E.copy(Ue),N=pt),_=G,k=!1}function gt(G,De){G.side===wr?Ne(n.CULL_FACE):de(n.CULL_FACE);let ie=G.side===ri;De&&(ie=!ie),Ft(ie),G.blending===Io&&G.transparent===!1?St(br):St(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Me=G.stencilWrite;f.setTest(Me),Me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Yt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(G){B!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),B=G)}function jt(G){G!==mC?(de(n.CULL_FACE),G!==W&&(G===ux?n.cullFace(n.BACK):G===gC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),W=G}function Lt(G){G!==ce&&(Z&&n.lineWidth(G),ce=G)}function Yt(G,De,ie){G?(de(n.POLYGON_OFFSET_FILL),(pe!==De||$!==ie)&&(pe=De,$=ie,c.getReversed()&&(De=-De),n.polygonOffset(De,ie))):Ne(n.POLYGON_OFFSET_FILL)}function It(G){G?de(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function xt(G){G===void 0&&(G=n.TEXTURE0+J-1),re!==G&&(n.activeTexture(G),re=G)}function X(G,De,ie){ie===void 0&&(re===null?ie=n.TEXTURE0+J-1:ie=re);let Me=U[ie];Me===void 0&&(Me={type:void 0,texture:void 0},U[ie]=Me),(Me.type!==G||Me.texture!==De)&&(re!==ie&&(n.activeTexture(ie),re=ie),n.bindTexture(G,De||ge[G]),Me.type=G,Me.texture=De)}function pn(){const G=U[re];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function bt(){try{n.compressedTexImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function w(){try{n.texSubImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function Q(){try{n.texSubImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function Te(){try{n.texStorage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function Ce(){try{n.texStorage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function me(){try{n.texImage2D(...arguments)}catch(G){Dt("WebGLState:",G)}}function ve(){try{n.texImage3D(...arguments)}catch(G){Dt("WebGLState:",G)}}function Ie(G){return p[G]!==void 0?p[G]:n.getParameter(G)}function qe(G,De){p[G]!==De&&(n.pixelStorei(G,De),p[G]=De)}function Fe(G){Oe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function Pe(G){Ee.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ee.copy(G))}function We(G,De){let ie=d.get(De);ie===void 0&&(ie=new WeakMap,d.set(De,ie));let Me=ie.get(G);Me===void 0&&(Me=n.getUniformBlockIndex(De,G.name),ie.set(G,Me))}function it(G,De){const Me=d.get(De).get(G);h.get(De)!==Me&&(n.uniformBlockBinding(De,Me,G.__bindingPointIndex),h.set(De,Me))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},p={},re=null,U={},v={},S=new WeakMap,M=[],b=null,y=!1,_=null,C=null,P=null,T=null,L=null,D=null,I=null,E=new Ut(0,0,0),N=0,k=!1,B=null,W=null,ce=null,pe=null,$=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:de,disable:Ne,bindFramebuffer:Ge,drawBuffers:Ze,useProgram:Rt,setBlending:St,setMaterial:gt,setFlipSided:Ft,setCullFace:jt,setLineWidth:Lt,setPolygonOffset:Yt,setScissorTest:It,activeTexture:xt,bindTexture:X,unbindTexture:pn,compressedTexImage2D:bt,compressedTexImage3D:F,texImage2D:me,texImage3D:ve,pixelStorei:qe,getParameter:Ie,updateUBOMapping:We,uniformBlockBinding:it,texStorage2D:Te,texStorage3D:Ce,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Fe,viewport:Pe,reset:ot}}function vL(n,e,t,r,o,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ct,m=new WeakMap,p=new Set;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,w){return M?new OffscreenCanvas(F,w):vu("canvas")}function y(F,w,Q){let ae=1;const he=bt(F);if((he.width>Q||he.height>Q)&&(ae=Q/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Te=Math.floor(ae*he.width),Ce=Math.floor(ae*he.height);v===void 0&&(v=b(Te,Ce));const me=w?b(Te,Ce):v;return me.width=Te,me.height=Ce,me.getContext("2d").drawImage(F,0,0,Te,Ce),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+Ce+")."),me}else return"data"in F&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function _(F){return F.generateMipmaps}function C(F){n.generateMipmap(F)}function P(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(F,w,Q,ae,he,Te=!1){if(F!==null){if(n[F]!==void 0)return n[F];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ce;ae&&(Ce=e.get("EXT_texture_norm16"),Ce||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=w;if(w===n.RED&&(Q===n.FLOAT&&(me=n.R32F),Q===n.HALF_FLOAT&&(me=n.R16F),Q===n.UNSIGNED_BYTE&&(me=n.R8),Q===n.UNSIGNED_SHORT&&Ce&&(me=Ce.R16_EXT),Q===n.SHORT&&Ce&&(me=Ce.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(me=n.R8UI),Q===n.UNSIGNED_SHORT&&(me=n.R16UI),Q===n.UNSIGNED_INT&&(me=n.R32UI),Q===n.BYTE&&(me=n.R8I),Q===n.SHORT&&(me=n.R16I),Q===n.INT&&(me=n.R32I)),w===n.RG&&(Q===n.FLOAT&&(me=n.RG32F),Q===n.HALF_FLOAT&&(me=n.RG16F),Q===n.UNSIGNED_BYTE&&(me=n.RG8),Q===n.UNSIGNED_SHORT&&Ce&&(me=Ce.RG16_EXT),Q===n.SHORT&&Ce&&(me=Ce.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(me=n.RG8UI),Q===n.UNSIGNED_SHORT&&(me=n.RG16UI),Q===n.UNSIGNED_INT&&(me=n.RG32UI),Q===n.BYTE&&(me=n.RG8I),Q===n.SHORT&&(me=n.RG16I),Q===n.INT&&(me=n.RG32I)),w===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(me=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(me=n.RGB16UI),Q===n.UNSIGNED_INT&&(me=n.RGB32UI),Q===n.BYTE&&(me=n.RGB8I),Q===n.SHORT&&(me=n.RGB16I),Q===n.INT&&(me=n.RGB32I)),w===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),Q===n.UNSIGNED_INT&&(me=n.RGBA32UI),Q===n.BYTE&&(me=n.RGBA8I),Q===n.SHORT&&(me=n.RGBA16I),Q===n.INT&&(me=n.RGBA32I)),w===n.RGB&&(Q===n.UNSIGNED_SHORT&&Ce&&(me=Ce.RGB16_EXT),Q===n.SHORT&&Ce&&(me=Ce.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(me=n.R11F_G11F_B10F)),w===n.RGBA){const ve=Te?mu:wt.getTransfer(he);Q===n.FLOAT&&(me=n.RGBA32F),Q===n.HALF_FLOAT&&(me=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(me=ve===Vt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&Ce&&(me=Ce.RGBA16_EXT),Q===n.SHORT&&Ce&&(me=Ce.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function L(F,w){let Q;return F?w===null||w===ar||w===Ja?Q=n.DEPTH24_STENCIL8:w===tr?Q=n.DEPTH32F_STENCIL8:w===Za&&(Q=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ar||w===Ja?Q=n.DEPTH_COMPONENT24:w===tr?Q=n.DEPTH_COMPONENT32F:w===Za&&(Q=n.DEPTH_COMPONENT16),Q}function D(F,w){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==Dn&&F.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function I(F){const w=F.target;w.removeEventListener("dispose",I),N(w),w.isVideoTexture&&m.delete(w),w.isHTMLTexture&&p.delete(w)}function E(F){const w=F.target;w.removeEventListener("dispose",E),B(w)}function N(F){const w=r.get(F);if(w.__webglInit===void 0)return;const Q=F.source,ae=S.get(Q);if(ae){const he=ae[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(F),Object.keys(ae).length===0&&S.delete(Q)}r.remove(F)}function k(F){const w=r.get(F);n.deleteTexture(w.__webglTexture);const Q=F.source,ae=S.get(Q);delete ae[w.__cacheKey],c.memory.textures--}function B(F){const w=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let he=0;he<w.__webglFramebuffer[ae].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[ae][he]);else n.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ae]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=F.textures;for(let ae=0,he=Q.length;ae<he;ae++){const Te=r.get(Q[ae]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),c.memory.textures--),r.remove(Q[ae])}r.remove(F)}let W=0;function ce(){W=0}function pe(){return W}function $(F){W=F}function J(){const F=W;return F>=o.maxTextures&&at("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),W+=1,F}function Z(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function z(F,w){const Q=r.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Q.__version!==F.version){const ae=F.image;if(ae===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(Q,F,w);return}}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+w)}function te(F,w){const Q=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){Ne(Q,F,w);return}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+w)}function re(F,w){const Q=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){Ne(Q,F,w);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+w)}function U(F,w){const Q=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Q.__version!==F.version){Ge(Q,F,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+w)}const q={[qh]:n.REPEAT,[Tr]:n.CLAMP_TO_EDGE,[$h]:n.MIRRORED_REPEAT},Se={[Dn]:n.NEAREST,[OC]:n.NEAREST_MIPMAP_NEAREST,[vc]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[Id]:n.LINEAR_MIPMAP_NEAREST,[ks]:n.LINEAR_MIPMAP_LINEAR},Oe={[zC]:n.NEVER,[jC]:n.ALWAYS,[HC]:n.LESS,[fm]:n.LEQUAL,[GC]:n.EQUAL,[dm]:n.GEQUAL,[WC]:n.GREATER,[XC]:n.NOTEQUAL};function Ee(F,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===On||w.magFilter===Id||w.magFilter===vc||w.magFilter===ks||w.minFilter===On||w.minFilter===Id||w.minFilter===vc||w.minFilter===ks)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,q[w.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,q[w.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,q[w.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,Se[w.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,Oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dn||w.minFilter!==vc&&w.minFilter!==ks||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function j(F,w){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",I));const ae=w.source;let he=S.get(ae);he===void 0&&(he={},S.set(ae,he));const Te=Z(w);if(Te!==F.__cacheKey){he[Te]===void 0&&(he[Te]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),he[Te].usedTimes++;const Ce=he[F.__cacheKey];Ce!==void 0&&(he[F.__cacheKey].usedTimes--,Ce.usedTimes===0&&k(w)),F.__cacheKey=Te,F.__webglTexture=he[Te].texture}return Q}function ge(F,w,Q){return Math.floor(Math.floor(F/Q)/w)}function de(F,w,Q,ae){const Te=F.updateRanges;if(Te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Q,ae,w.data);else{Te.sort((qe,Fe)=>qe.start-Fe.start);let Ce=0;for(let qe=1;qe<Te.length;qe++){const Fe=Te[Ce],Pe=Te[qe],We=Fe.start+Fe.count,it=ge(Pe.start,w.width,4),ot=ge(Fe.start,w.width,4);Pe.start<=We+1&&it===ot&&ge(Pe.start+Pe.count-1,w.width,4)===it?Fe.count=Math.max(Fe.count,Pe.start+Pe.count-Fe.start):(++Ce,Te[Ce]=Pe)}Te.length=Ce+1;const me=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Ie=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let qe=0,Fe=Te.length;qe<Fe;qe++){const Pe=Te[qe],We=Math.floor(Pe.start/4),it=Math.ceil(Pe.count/4),ot=We%w.width,G=Math.floor(We/w.width),De=it,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ot,G,De,ie,Q,ae,w.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,me),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function Ne(F,w,Q){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);const he=j(F,w),Te=w.source;t.bindTexture(ae,F.__webglTexture,n.TEXTURE0+Q);const Ce=r.get(Te);if(Te.version!==Ce.__version||he===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ie=wt.getPrimaries(wt.workingColorSpace),Me=w.colorSpace===is?null:wt.getPrimaries(w.colorSpace),be=w.colorSpace===is||ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=y(w.image,!1,o.maxTextureSize);ve=pn(w,ve);const Ie=a.convert(w.format,w.colorSpace),qe=a.convert(w.type);let Fe=T(w.internalFormat,Ie,qe,w.normalized,w.colorSpace,w.isVideoTexture);Ee(ae,w);let Pe;const We=w.mipmaps,it=w.isVideoTexture!==!0,ot=Ce.__version===void 0||he===!0,G=Te.dataReady,De=D(w,ve);if(w.isDepthTexture)Fe=L(w.format===Os,w.type),ot&&(it?t.texStorage2D(n.TEXTURE_2D,1,Fe,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ve.width,ve.height,0,Ie,qe,null));else if(w.isDataTexture)if(We.length>0){it&&ot&&t.texStorage2D(n.TEXTURE_2D,De,Fe,We[0].width,We[0].height);for(let ie=0,Me=We.length;ie<Me;ie++)Pe=We[ie],it?G&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Ie,qe,Pe.data):t.texImage2D(n.TEXTURE_2D,ie,Fe,Pe.width,Pe.height,0,Ie,qe,Pe.data);w.generateMipmaps=!1}else it?(ot&&t.texStorage2D(n.TEXTURE_2D,De,Fe,ve.width,ve.height),G&&de(w,ve,Ie,qe)):t.texImage2D(n.TEXTURE_2D,0,Fe,ve.width,ve.height,0,Ie,qe,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Fe,We[0].width,We[0].height,ve.depth);for(let ie=0,Me=We.length;ie<Me;ie++)if(Pe=We[ie],w.format!==Bi)if(Ie!==null)if(it){if(G)if(w.layerUpdates.size>0){const be=Bx(Pe.width,Pe.height,w.format,w.type);for(const xe of w.layerUpdates){const Xe=Pe.data.subarray(xe*be/Pe.data.BYTES_PER_ELEMENT,(xe+1)*be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,xe,Pe.width,Pe.height,1,Ie,Xe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,ve.depth,Ie,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Fe,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,ve.depth,Ie,qe,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Fe,Pe.width,Pe.height,ve.depth,0,Ie,qe,Pe.data)}else{it&&ot&&t.texStorage2D(n.TEXTURE_2D,De,Fe,We[0].width,We[0].height);for(let ie=0,Me=We.length;ie<Me;ie++)Pe=We[ie],w.format!==Bi?Ie!==null?it?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Fe,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Ie,qe,Pe.data):t.texImage2D(n.TEXTURE_2D,ie,Fe,Pe.width,Pe.height,0,Ie,qe,Pe.data)}else if(w.isDataArrayTexture)if(it){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Fe,ve.width,ve.height,ve.depth),G)if(w.layerUpdates.size>0){const ie=Bx(ve.width,ve.height,w.format,w.type);for(const Me of w.layerUpdates){const be=ve.data.subarray(Me*ie/ve.data.BYTES_PER_ELEMENT,(Me+1)*ie/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,ve.width,ve.height,1,Ie,qe,be)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ie,qe,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ve.width,ve.height,ve.depth,0,Ie,qe,ve.data);else if(w.isData3DTexture)it?(ot&&t.texStorage3D(n.TEXTURE_3D,De,Fe,ve.width,ve.height,ve.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ie,qe,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ve.width,ve.height,ve.depth,0,Ie,qe,ve.data);else if(w.isFramebufferTexture){if(ot)if(it)t.texStorage2D(n.TEXTURE_2D,De,Fe,ve.width,ve.height);else{let ie=ve.width,Me=ve.height;for(let be=0;be<De;be++)t.texImage2D(n.TEXTURE_2D,be,Fe,ie,Me,0,Ie,qe,null),ie>>=1,Me>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ve.parentNode!==ie){ie.appendChild(ve),p.add(w),ie.onpaint=Me=>{const be=Me.changedElements;for(const xe of p)be.includes(xe.image)&&(xe.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const be=n.RGBA,xe=n.RGBA,Xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,be,xe,Xe,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(it&&ot){const ie=bt(We[0]);t.texStorage2D(n.TEXTURE_2D,De,Fe,ie.width,ie.height)}for(let ie=0,Me=We.length;ie<Me;ie++)Pe=We[ie],it?G&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ie,qe,Pe):t.texImage2D(n.TEXTURE_2D,ie,Fe,Ie,qe,Pe);w.generateMipmaps=!1}else if(it){if(ot){const ie=bt(ve);t.texStorage2D(n.TEXTURE_2D,De,Fe,ie.width,ie.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,qe,ve)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Ie,qe,ve);_(w)&&C(ae),Ce.__version=Te.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Ge(F,w,Q){if(w.image.length!==6)return;const ae=j(F,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Q);const Te=r.get(he);if(he.version!==Te.__version||ae===!0){t.activeTexture(n.TEXTURE0+Q);const Ce=wt.getPrimaries(wt.workingColorSpace),me=w.colorSpace===is?null:wt.getPrimaries(w.colorSpace),ve=w.colorSpace===is||Ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,qe=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let xe=0;xe<6;xe++)!Ie&&!qe?Fe[xe]=y(w.image[xe],!0,o.maxCubemapSize):Fe[xe]=qe?w.image[xe].image:w.image[xe],Fe[xe]=pn(w,Fe[xe]);const Pe=Fe[0],We=a.convert(w.format,w.colorSpace),it=a.convert(w.type),ot=T(w.internalFormat,We,it,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,De=Te.__version===void 0||ae===!0,ie=he.dataReady;let Me=D(w,Pe);Ee(n.TEXTURE_CUBE_MAP,w);let be;if(Ie){G&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,ot,Pe.width,Pe.height);for(let xe=0;xe<6;xe++){be=Fe[xe].mipmaps;for(let Xe=0;Xe<be.length;Xe++){const Ue=be[Xe];w.format!==Bi?We!==null?G?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Ue.width,Ue.height,We,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,ot,Ue.width,Ue.height,0,Ue.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Ue.width,Ue.height,We,it,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,ot,Ue.width,Ue.height,0,We,it,Ue.data)}}}else{if(be=w.mipmaps,G&&De){be.length>0&&Me++;const xe=bt(Fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,ot,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(qe){G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe[xe].width,Fe[xe].height,We,it,Fe[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,Fe[xe].width,Fe[xe].height,0,We,it,Fe[xe].data);for(let Xe=0;Xe<be.length;Xe++){const pt=be[Xe].image[xe].image;G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,pt.width,pt.height,We,it,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,ot,pt.width,pt.height,0,We,it,pt.data)}}else{G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,We,it,Fe[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,We,it,Fe[xe]);for(let Xe=0;Xe<be.length;Xe++){const Ue=be[Xe];G?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,We,it,Ue.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,ot,We,it,Ue.image[xe])}}}_(w)&&C(n.TEXTURE_CUBE_MAP),Te.__version=he.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Ze(F,w,Q,ae,he,Te){const Ce=a.convert(Q.format,Q.colorSpace),me=a.convert(Q.type),ve=T(Q.internalFormat,Ce,me,Q.normalized,Q.colorSpace),Ie=r.get(w),qe=r.get(Q);if(qe.__renderTarget=w,!Ie.__hasExternalTextures){const Fe=Math.max(1,w.width>>Te),Pe=Math.max(1,w.height>>Te);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Te,ve,Fe,Pe,w.depth,0,Ce,me,null):t.texImage2D(he,Te,ve,Fe,Pe,0,Ce,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),xt(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,he,qe.__webglTexture,0,It(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,he,qe.__webglTexture,Te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(F,w,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,F),w.depthBuffer){const ae=w.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Te=L(w.stencilBuffer,he),Ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xt(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(w),Te,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(w),Te,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,F)}else{const ae=w.textures;for(let he=0;he<ae.length;he++){const Te=ae[he],Ce=a.convert(Te.format,Te.colorSpace),me=a.convert(Te.type),ve=T(Te.internalFormat,Ce,me,Te.normalized,Te.colorSpace);xt(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(w),ve,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(w),ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(F,w,Q){const ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",I)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,w.depthTexture);const Ie=a.convert(w.depthTexture.format),qe=a.convert(w.depthTexture.type);let Fe;w.depthTexture.format===Rr?Fe=n.DEPTH_COMPONENT24:w.depthTexture.format===Os&&(Fe=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Fe,w.width,w.height,0,Ie,qe,null)}}else z(w.depthTexture,0);const Te=he.__webglTexture,Ce=It(w),me=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,ve=w.depthTexture.format===Os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Rr)xt(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,me,Te,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ve,me,Te,0);else if(w.depthTexture.format===Os)xt(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,me,Te,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ve,me,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(F){const w=r.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const ae=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ae}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)ct(w.__webglFramebuffer[ae],F,ae);else{const ae=F.texture.mipmaps;ae&&ae.length>0?ct(w.__webglFramebuffer[0],F,0):ct(w.__webglFramebuffer,F,0)}else if(Q){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=n.createRenderbuffer(),Rt(w.__webglDepthbuffer[ae],F,!1);else{const he=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Te)}}else{const ae=F.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Rt(w.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(F,w,Q){const ae=r.get(F);w!==void 0&&Ze(ae.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&Mt(F)}function gt(F){const w=F.texture,Q=r.get(F),ae=r.get(w);F.addEventListener("dispose",E);const he=F.textures,Te=F.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,c.memory.textures++),Te){Q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[me]=[];for(let ve=0;ve<w.mipmaps.length;ve++)Q.__webglFramebuffer[me][ve]=n.createFramebuffer()}else Q.__webglFramebuffer[me]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)Q.__webglFramebuffer[me]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let me=0,ve=he.length;me<ve;me++){const Ie=r.get(he[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),c.memory.textures++)}if(F.samples>0&&xt(F)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const ve=he[me];Q.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[me]);const Ie=a.convert(ve.format,ve.colorSpace),qe=a.convert(ve.type),Fe=T(ve.internalFormat,Ie,qe,ve.normalized,ve.colorSpace,F.isXRRenderTarget===!0),Pe=It(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Fe,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Q.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Rt(Q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Te){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ze(Q.__webglFramebuffer[me][ve],F,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else Ze(Q.__webglFramebuffer[me],F,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(w)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let me=0,ve=he.length;me<ve;me++){const Ie=he[me],qe=r.get(Ie);let Fe=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Fe=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Fe,qe.__webglTexture),Ee(Fe,Ie),Ze(Q.__webglFramebuffer,F,Ie,n.COLOR_ATTACHMENT0+me,Fe,0),_(Ie)&&C(Fe)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(me=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,ae.__webglTexture),Ee(me,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ze(Q.__webglFramebuffer[ve],F,w,n.COLOR_ATTACHMENT0,me,ve);else Ze(Q.__webglFramebuffer,F,w,n.COLOR_ATTACHMENT0,me,0);_(w)&&C(me),t.unbindTexture()}F.depthBuffer&&Mt(F)}function Ft(F){const w=F.textures;for(let Q=0,ae=w.length;Q<ae;Q++){const he=w[Q];if(_(he)){const Te=P(F),Ce=r.get(he).__webglTexture;t.bindTexture(Te,Ce),C(Te),t.unbindTexture()}}}const jt=[],Lt=[];function Yt(F){if(F.samples>0){if(xt(F)===!1){const w=F.textures,Q=F.width,ae=F.height;let he=n.COLOR_BUFFER_BIT;const Te=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=r.get(F),me=w.length>1;if(me)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ve=F.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const qe=r.get(w[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,he,n.NEAREST),h===!0&&(jt.length=0,Lt.length=0,jt.push(n.COLOR_ATTACHMENT0+Ie),F.depthBuffer&&F.resolveDepthBuffer===!1&&(jt.push(Te),Lt.push(Te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const qe=r.get(w[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const w=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function It(F){return Math.min(o.maxSamples,F.samples)}function xt(F){const w=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(F){const w=c.render.frame;m.get(F)!==w&&(m.set(F,w),F.update())}function pn(F,w){const Q=F.colorSpace,ae=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==pu&&Q!==is&&(wt.getTransfer(Q)===Vt?(ae!==Bi||he!==Mi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",Q)),w}function bt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=ce,this.getTextureUnits=pe,this.setTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=U,this.rebindTextures=St,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xL(n,e){function t(r,o=is){let a;const c=wt.getTransfer(o);if(r===Mi)return n.UNSIGNED_BYTE;if(r===om)return n.UNSIGNED_SHORT_4_4_4_4;if(r===am)return n.UNSIGNED_SHORT_5_5_5_1;if(r===mS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===gS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===hS)return n.BYTE;if(r===pS)return n.SHORT;if(r===Za)return n.UNSIGNED_SHORT;if(r===sm)return n.INT;if(r===ar)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===Cr)return n.HALF_FLOAT;if(r===vS)return n.ALPHA;if(r===xS)return n.RGB;if(r===Bi)return n.RGBA;if(r===Rr)return n.DEPTH_COMPONENT;if(r===Os)return n.DEPTH_STENCIL;if(r===yS)return n.RED;if(r===lm)return n.RED_INTEGER;if(r===Hs)return n.RG;if(r===cm)return n.RG_INTEGER;if(r===um)return n.RGBA_INTEGER;if(r===Zc||r===Jc||r===Qc||r===eu)if(c===Vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kh||r===Zh||r===Jh||r===Qh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ep||r===tp||r===np||r===ip||r===rp||r===du||r===sp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ep||r===tp)return c===Vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===np)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===ip)return a.COMPRESSED_R11_EAC;if(r===rp)return a.COMPRESSED_SIGNED_R11_EAC;if(r===du)return a.COMPRESSED_RG11_EAC;if(r===sp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===op||r===ap||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===vp||r===xp||r===yp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===op)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ap)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===up)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yp)return c===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_p||r===Sp||r===Mp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===_p)return c===Vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ep||r===wp||r===hu||r===Tp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ep)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ja?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const yL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_L=`
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

}`;class SL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new PS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new lr({vertexShader:yL,fragmentShader:_L,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hi(new Cu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ML extends Xs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,f="local-floor",h=1,d=null,m=null,p=null,v=null,S=null,M=null;const b=typeof XRWebGLBinding<"u",y=new SL,_={},C=t.getContextAttributes();let P=null,T=null;const L=[],D=[],I=new Ct;let E=null;const N=new Si;N.viewport=new on;const k=new Si;k.viewport=new on;const B=[N,k],W=new DR;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ge=L[j];return ge===void 0&&(ge=new Hd,L[j]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(j){let ge=L[j];return ge===void 0&&(ge=new Hd,L[j]=ge),ge.getGripSpace()},this.getHand=function(j){let ge=L[j];return ge===void 0&&(ge=new Hd,L[j]=ge),ge.getHandSpace()};function $(j){const ge=D.indexOf(j.inputSource);if(ge===-1)return;const de=L[ge];de!==void 0&&(de.update(j.inputSource,j.frame,d||c),de.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",Z);for(let j=0;j<L.length;j++){const ge=D[j];ge!==null&&(D[j]=null,L[j].disconnect(ge))}ce=null,pe=null,y.reset();for(const j in _)delete _[j];e.setRenderTarget(P),S=null,v=null,p=null,o=null,T=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(o,t)),p},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",J),o.addEventListener("inputsourceschange",Z),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ne=null,Ge=null;C.depth&&(Ge=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=C.stencil?Os:Rr,Ne=C.stencil?Ja:ar);const Ze={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:a};p=this.getBinding(),v=p.createProjectionLayer(Ze),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),T=new sr(v.textureWidth,v.textureHeight,{format:Bi,type:Mi,depthTexture:new zo(v.textureWidth,v.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const de={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new sr(S.framebufferWidth,S.framebufferHeight,{format:Bi,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await o.requestReferenceSpace(f),Ee.setContext(o),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(j){for(let ge=0;ge<j.removed.length;ge++){const de=j.removed[ge],Ne=D.indexOf(de);Ne>=0&&(D[Ne]=null,L[Ne].disconnect(de))}for(let ge=0;ge<j.added.length;ge++){const de=j.added[ge];let Ne=D.indexOf(de);if(Ne===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=D.length){D.push(de),Ne=Ze;break}else if(D[Ze]===null){D[Ze]=de,Ne=Ze;break}if(Ne===-1)break}const Ge=L[Ne];Ge&&Ge.connect(de)}}const z=new ee,te=new ee;function re(j,ge,de){z.setFromMatrixPosition(ge.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const Ne=z.distanceTo(te),Ge=ge.projectionMatrix.elements,Ze=de.projectionMatrix.elements,Rt=Ge[14]/(Ge[10]-1),ct=Ge[14]/(Ge[10]+1),Mt=(Ge[9]+1)/Ge[5],St=(Ge[9]-1)/Ge[5],gt=(Ge[8]-1)/Ge[0],Ft=(Ze[8]+1)/Ze[0],jt=Rt*gt,Lt=Rt*Ft,Yt=Ne/(-gt+Ft),It=Yt*-gt;if(ge.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(It),j.translateZ(Yt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ge[10]===-1)j.projectionMatrix.copy(ge.projectionMatrix),j.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const xt=Rt+Yt,X=ct+Yt,pn=jt-It,bt=Lt+(Ne-It),F=Mt*ct/X*xt,w=St*ct/X*xt;j.projectionMatrix.makePerspective(pn,bt,F,w,xt,X),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function U(j,ge){ge===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ge.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let ge=j.near,de=j.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(de=y.depthFar)),W.near=k.near=N.near=ge,W.far=k.far=N.far=de,(ce!==W.near||pe!==W.far)&&(o.updateRenderState({depthNear:W.near,depthFar:W.far}),ce=W.near,pe=W.far),W.layers.mask=j.layers.mask|6,N.layers.mask=W.layers.mask&-5,k.layers.mask=W.layers.mask&-3;const Ne=j.parent,Ge=W.cameras;U(W,Ne);for(let Ze=0;Ze<Ge.length;Ze++)U(Ge[Ze],Ne);Ge.length===2?re(W,N,k):W.projectionMatrix.copy(N.projectionMatrix),q(j,W,Ne)};function q(j,ge,de){de===null?j.matrix.copy(ge.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ge.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ge.projectionMatrix),j.projectionMatrixInverse.copy(ge.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=bp*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(j){h=j,v!==null&&(v.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(j){return _[j]};let Se=null;function Oe(j,ge){if(m=ge.getViewerPose(d||c),M=ge,m!==null){const de=m.views;S!==null&&(e.setRenderTargetFramebuffer(T,S.framebuffer),e.setRenderTarget(T));let Ne=!1;de.length!==W.cameras.length&&(W.cameras.length=0,Ne=!0);for(let ct=0;ct<de.length;ct++){const Mt=de[ct];let St=null;if(S!==null)St=S.getViewport(Mt);else{const Ft=p.getViewSubImage(v,Mt);St=Ft.viewport,ct===0&&(e.setRenderTargetTextures(T,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(T))}let gt=B[ct];gt===void 0&&(gt=new Si,gt.layers.enable(ct),gt.viewport=new on,B[ct]=gt),gt.matrix.fromArray(Mt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Mt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(St.x,St.y,St.width,St.height),ct===0&&(W.matrix.copy(gt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ne===!0&&W.cameras.push(gt)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){p=r.getBinding();const ct=p.getDepthInformation(de[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,o.renderState)}if(Ge&&Ge.includes("camera-access")&&b){e.state.unbindTexture(),p=r.getBinding();for(let ct=0;ct<de.length;ct++){const Mt=de[ct].camera;if(Mt){let St=_[Mt];St||(St=new PS,_[Mt]=St);const gt=p.getCameraImage(Mt);St.sourceTexture=gt}}}}for(let de=0;de<L.length;de++){const Ne=D[de],Ge=L[de];Ne!==null&&Ge!==void 0&&Ge.update(Ne,ge,d||c)}Se&&Se(j,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),M=null}const Ee=new IS;Ee.setAnimationLoop(Oe),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const EL=new ln,zS=new dt;zS.set(-1,0,0,0,1,0,0,0,1);function wL(n,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,DS(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,C,P,T){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(y,_):_.isMeshLambertMaterial?(a(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(y,_),p(y,_)):_.isMeshPhongMaterial?(a(y,_),m(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,T)):_.isMeshMatcapMaterial?(a(y,_),M(y,_)):_.isMeshDepthMaterial?a(y,_):_.isMeshDistanceMaterial?(a(y,_),b(y,_)):_.isMeshNormalMaterial?a(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,C,P):_.isSpriteMaterial?d(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ri&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ri&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),P=C.envMap,T=C.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(EL.makeRotationFromEuler(T)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(zS),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,C,P){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=P*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function p(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ri&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function TL(n,e,t,r){let o={},a={},c=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,L){const D=L.program;r.uniformBlockBinding(T,D)}function d(T,L){let D=o[T.id];D===void 0&&(y(T),D=m(T),o[T.id]=D,T.addEventListener("dispose",C));const I=L.program;r.updateUBOMapping(T,I);const E=e.render.frame;a[T.id]!==E&&(v(T),a[T.id]=E)}function m(T){const L=p();T.__bindingPointIndex=L;const D=n.createBuffer(),I=T.__size,E=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,I,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,D),D}function p(){for(let T=0;T<f;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const L=o[T.id],D=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let E=0,N=D.length;E<N;E++){const k=D[E];if(Array.isArray(k))for(let B=0,W=k.length;B<W;B++)S(k[B],E,B,I);else S(k,E,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(T,L,D,I){if(b(T,L,D,I)===!0){const E=T.__offset,N=T.value;if(Array.isArray(N)){let k=0;for(let B=0;B<N.length;B++){const W=N[B],ce=_(W);M(W,T.__data,k),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,T.__data)}}function M(T,L,D){typeof T=="number"||typeof T=="boolean"?L[0]=T:T.isMatrix3?(L[0]=T.elements[0],L[1]=T.elements[1],L[2]=T.elements[2],L[3]=0,L[4]=T.elements[3],L[5]=T.elements[4],L[6]=T.elements[5],L[7]=0,L[8]=T.elements[6],L[9]=T.elements[7],L[10]=T.elements[8],L[11]=0):ArrayBuffer.isView(T)?L.set(new T.constructor(T.buffer,T.byteOffset,L.length)):T.toArray(L,D)}function b(T,L,D,I){const E=T.value,N=L+"_"+D;if(I[N]===void 0)return typeof E=="number"||typeof E=="boolean"?I[N]=E:ArrayBuffer.isView(E)?I[N]=E.slice():I[N]=E.clone(),!0;{const k=I[N];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return I[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(k.equals(E)===!1)return k.copy(E),!0}}return!1}function y(T){const L=T.uniforms;let D=0;const I=16;for(let N=0,k=L.length;N<k;N++){const B=Array.isArray(L[N])?L[N]:[L[N]];for(let W=0,ce=B.length;W<ce;W++){const pe=B[W],$=Array.isArray(pe.value)?pe.value:[pe.value];for(let J=0,Z=$.length;J<Z;J++){const z=$[J],te=_(z),re=D%I,U=re%te.boundary,q=re+U;D+=U,q!==0&&I-q<te.storage&&(D+=I-q),pe.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=D,D+=te.storage}}}const E=D%I;return E>0&&(D+=I-E),T.__size=D,T.__cache={},this}function _(T){const L={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(L.boundary=4,L.storage=4):T.isVector2?(L.boundary=8,L.storage=8):T.isVector3||T.isColor?(L.boundary=16,L.storage=12):T.isVector4?(L.boundary=16,L.storage=16):T.isMatrix3?(L.boundary=48,L.storage=48):T.isMatrix4?(L.boundary=64,L.storage=64):T.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(L.boundary=16,L.storage=T.byteLength):at("WebGLRenderer: Unsupported uniform value type.",T),L}function C(T){const L=T.target;L.removeEventListener("dispose",C);const D=c.indexOf(L.__bindingPointIndex);c.splice(D,1),n.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function P(){for(const T in o)n.deleteBuffer(o[T]);c=[],o={},a={}}return{bind:h,update:d,dispose:P}}const bL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function AL(){return Ki===null&&(Ki=new vR(bL,16,16,Hs,Cr),Ki.name="DFG_LUT",Ki.minFilter=On,Ki.magFilter=On,Ki.wrapS=Tr,Ki.wrapT=Tr,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class CL{constructor(e={}){const{canvas:t=qC(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Mi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const b=S,y=new Set([um,cm,lm]),_=new Set([Mi,ar,Za,Ja,om,am]),C=new Uint32Array(4),P=new Int32Array(4),T=new ee;let L=null,D=null;const I=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let B=!1,W=null,ce=null,pe=null,$=null;this._outputColorSpace=_i;let J=0,Z=0,z=null,te=-1,re=null;const U=new on,q=new on;let Se=null;const Oe=new Ut(0);let Ee=0,j=t.width,ge=t.height,de=1,Ne=null,Ge=null;const Ze=new on(0,0,j,ge),Rt=new on(0,0,j,ge);let ct=!1;const Mt=new AS;let St=!1,gt=!1;const Ft=new ln,jt=new ee,Lt=new on,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function xt(){return z===null?de:1}let X=r;function pn(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rm}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",zt,!1),X===null){const K="webgl2";if(X=pn(K,R),X===null)throw pn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let bt,F,w,Q,ae,he,Te,Ce,me,ve,Ie,qe,Fe,Pe,We,it,ot,G,De,ie,Me,be,xe;function Xe(){bt=new A3(X),bt.init(),Me=new xL(X,bt),F=new y3(X,bt,e,Me),w=new gL(X,bt),F.reversedDepthBuffer&&v&&w.buffers.depth.setReversed(!0),ce=X.createFramebuffer(),pe=X.createFramebuffer(),$=X.createFramebuffer(),Q=new P3(X),ae=new nL,he=new vL(X,bt,w,ae,F,Me,Q),Te=new b3(k),Ce=new IR(X),be=new v3(X,Ce),me=new C3(X,Ce,Q,be),ve=new L3(X,me,Ce,be,Q),G=new D3(X,F,he),We=new _3(ae),Ie=new tL(k,Te,bt,F,be,We),qe=new wL(k,ae),Fe=new rL,Pe=new uL(bt),ot=new g3(k,Te,w,ve,M,h),it=new mL(k,ve,F),xe=new TL(X,Q,F,w),De=new x3(X,bt,Q),ie=new R3(X,bt,Q),Q.programs=Ie.programs,k.capabilities=F,k.extensions=bt,k.properties=ae,k.renderLists=Fe,k.shadowMap=it,k.state=w,k.info=Q}Xe(),b!==Mi&&(N=new I3(b,t.width,t.height,f,o,a));const Ue=new ML(k,X);this.xr=Ue,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(R){R!==void 0&&(de=R,this.setSize(j,ge,!1))},this.getSize=function(R){return R.set(j,ge)},this.setSize=function(R,K,ue=!0){if(Ue.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,ge=K,t.width=Math.floor(R*de),t.height=Math.floor(K*de),ue===!0&&(t.style.width=R+"px",t.style.height=K+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(j*de,ge*de).floor()},this.setDrawingBufferSize=function(R,K,ue){j=R,ge=K,de=ue,t.width=Math.floor(R*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(b===Mi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Ze)},this.setViewport=function(R,K,ue,oe){R.isVector4?Ze.set(R.x,R.y,R.z,R.w):Ze.set(R,K,ue,oe),w.viewport(U.copy(Ze).multiplyScalar(de).round())},this.getScissor=function(R){return R.copy(Rt)},this.setScissor=function(R,K,ue,oe){R.isVector4?Rt.set(R.x,R.y,R.z,R.w):Rt.set(R,K,ue,oe),w.scissor(q.copy(Rt).multiplyScalar(de).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(R){w.setScissorTest(ct=R)},this.setOpaqueSort=function(R){Ne=R},this.setTransparentSort=function(R){Ge=R},this.getClearColor=function(R){return R.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ue=!0){let oe=0;if(R){let se=!1;if(z!==null){const Le=z.texture.format;se=y.has(Le)}if(se){const Le=z.texture.type,He=_.has(Le),Re=ot.getClearColor(),Je=ot.getClearAlpha(),nt=Re.r,ut=Re.g,ft=Re.b;He?(C[0]=nt,C[1]=ut,C[2]=ft,C[3]=Je,X.clearBufferuiv(X.COLOR,0,C)):(P[0]=nt,P[1]=ut,P[2]=ft,P[3]=Je,X.clearBufferiv(X.COLOR,0,P))}else oe|=X.COLOR_BUFFER_BIT}K&&(oe|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",zt,!1),ot.dispose(),Fe.dispose(),Pe.dispose(),ae.dispose(),Te.dispose(),ve.dispose(),be.dispose(),xe.dispose(),Ie.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",cl),Ue.removeEventListener("sessionend",ul),Bn.stop()};function pt(R){R.preventDefault(),xx("WebGLRenderer: Context Lost."),B=!0}function Et(){xx("WebGLRenderer: Context Restored."),B=!1;const R=Q.autoReset,K=it.enabled,ue=it.autoUpdate,oe=it.needsUpdate,se=it.type;Xe(),Q.autoReset=R,it.enabled=K,it.autoUpdate=ue,it.needsUpdate=oe,it.type=se}function zt(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Zt(R){const K=R.target;K.removeEventListener("dispose",Zt),Gi(K)}function Gi(R){Yn(R),ae.remove(R)}function Yn(R){const K=ae.get(R).programs;K!==void 0&&(K.forEach(function(ue){Ie.releaseProgram(ue)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ue,oe,se,Le){K===null&&(K=Yt);const He=se.isMesh&&se.matrixWorld.determinantAffine()<0,Re=en(R,K,ue,oe,se);w.setMaterial(oe,He);let Je=ue.index,nt=1;if(oe.wireframe===!0){if(Je=me.getWireframeAttribute(ue),Je===void 0)return;nt=2}const ut=ue.drawRange,ft=ue.attributes.position;let et=ut.start*nt,At=(ut.start+ut.count)*nt;Le!==null&&(et=Math.max(et,Le.start*nt),At=Math.min(At,(Le.start+Le.count)*nt)),Je!==null?(et=Math.max(et,0),At=Math.min(At,Je.count)):ft!=null&&(et=Math.max(et,0),At=Math.min(At,ft.count));const Wt=At-et;if(Wt<0||Wt===1/0)return;be.setup(se,oe,Re,ue,Je);let Jt,Ot=De;if(Je!==null&&(Jt=Ce.get(Je),Ot=ie,Ot.setIndex(Jt)),se.isMesh)oe.wireframe===!0?(w.setLineWidth(oe.wireframeLinewidth*xt()),Ot.setMode(X.LINES)):Ot.setMode(X.TRIANGLES);else if(se.isLine){let un=oe.linewidth;un===void 0&&(un=1),w.setLineWidth(un*xt()),se.isLineSegments?Ot.setMode(X.LINES):se.isLineLoop?Ot.setMode(X.LINE_LOOP):Ot.setMode(X.LINE_STRIP)}else se.isPoints?Ot.setMode(X.POINTS):se.isSprite&&Ot.setMode(X.TRIANGLES);if(se.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const un=se._multiDrawStarts,Ve=se._multiDrawCounts,Tn=se._multiDrawCount,vt=Je?Ce.get(Je).bytesPerElement:1,qn=ae.get(oe).currentProgram.getUniforms();for(let $n=0;$n<Tn;$n++)qn.setValue(X,"_gl_DrawID",$n),Ot.render(un[$n]/vt,Ve[$n])}else if(se.isInstancedMesh)Ot.renderInstances(et,Wt,se.count);else if(ue.isInstancedBufferGeometry){const un=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ve=Math.min(ue.instanceCount,un);Ot.renderInstances(et,Wt,Ve)}else Ot.render(et,Wt)};function Pr(R,K,ue){R.transparent===!0&&R.side===wr&&R.forceSinglePass===!1?(R.side=ri,R.needsUpdate=!0,ds(R,K,ue),R.side=ls,R.needsUpdate=!0,ds(R,K,ue),R.side=wr):ds(R,K,ue)}this.compile=function(R,K,ue=null){ue===null&&(ue=R),D=Pe.get(ue),D.init(K),E.push(D),ue.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),R!==ue&&R.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),D.setupLights();const oe=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Le=se.material;if(Le)if(Array.isArray(Le))for(let He=0;He<Le.length;He++){const Re=Le[He];Pr(Re,ue,se),oe.add(Re)}else Pr(Le,ue,se),oe.add(Le)}),D=E.pop(),oe},this.compileAsync=function(R,K,ue=null){const oe=this.compile(R,K,ue);return new Promise(se=>{function Le(){if(oe.forEach(function(He){ae.get(He).currentProgram.isReady()&&oe.delete(He)}),oe.size===0){se(R);return}setTimeout(Le,10)}bt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let us=null;function Nu(R){us&&us(R)}function cl(){Bn.stop()}function ul(){Bn.start()}const Bn=new IS;Bn.setAnimationLoop(Nu),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){us=R,Ue.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},Ue.addEventListener("sessionstart",cl),Ue.addEventListener("sessionend",ul),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(R,K);const ue=Ue.enabled===!0&&Ue.isPresenting===!0,oe=N!==null&&(z===null||ue)&&N.begin(k,z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(K),K=Ue.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,K,z),D=Pe.get(R,E.length),D.init(K),D.state.textureUnits=he.getTextureUnits(),E.push(D),Ft.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Mt.setFromProjectionMatrix(Ft,nr,K.reversedDepth),gt=this.localClippingEnabled,St=We.init(this.clippingPlanes,gt),L=Fe.get(R,I.length),L.init(),I.push(L),Ue.enabled===!0&&Ue.isPresenting===!0){const He=k.xr.getDepthSensingMesh();He!==null&&js(He,K,-1/0,k.sortObjects)}js(R,K,0,k.sortObjects),L.finish(),k.sortObjects===!0&&L.sort(Ne,Ge,K.reversedDepth),It=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,It&&ot.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&We.beginShadows();const se=D.state.shadowsArray;if(it.render(se,R,K),St===!0&&We.endShadows(),(oe&&N.hasRenderPass())===!1){const He=L.opaque,Re=L.transmissive;if(D.setupLights(),K.isArrayCamera){const Je=K.cameras;if(Re.length>0)for(let nt=0,ut=Je.length;nt<ut;nt++){const ft=Je[nt];fl(He,Re,R,ft)}It&&ot.render(R);for(let nt=0,ut=Je.length;nt<ut;nt++){const ft=Je[nt];$o(L,R,ft,ft.viewport)}}else Re.length>0&&fl(He,Re,R,K),It&&ot.render(R),$o(L,R,K)}z!==null&&Z===0&&(he.updateMultisampleRenderTarget(z),he.updateRenderTargetMipmap(z)),oe&&N.end(k),R.isScene===!0&&R.onAfterRender(k,R,K),be.resetDefaultState(),te=-1,re=null,E.pop(),E.length>0?(D=E[E.length-1],he.setTextureUnits(D.state.textureUnits),St===!0&&We.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,W!==null&&W.renderEnd()};function js(R,K,ue,oe){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Mt.intersectsSprite(R)){oe&&Lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);const He=ve.update(R),Re=R.material;Re.visible&&L.push(R,He,Re,ue,Lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Mt.intersectsObject(R))){const He=ve.update(R),Re=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Lt.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Lt.copy(He.boundingSphere.center)),Lt.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(Re)){const Je=He.groups;for(let nt=0,ut=Je.length;nt<ut;nt++){const ft=Je[nt],et=Re[ft.materialIndex];et&&et.visible&&L.push(R,He,et,ue,Lt.z,ft)}}else Re.visible&&L.push(R,He,Re,ue,Lt.z,null)}}const Le=R.children;for(let He=0,Re=Le.length;He<Re;He++)js(Le[He],K,ue,oe)}function $o(R,K,ue,oe){const{opaque:se,transmissive:Le,transparent:He}=R;D.setupLightsView(ue),St===!0&&We.setGlobalState(k.clippingPlanes,ue),oe&&w.viewport(U.copy(oe)),se.length>0&&fs(se,K,ue),Le.length>0&&fs(Le,K,ue),He.length>0&&fs(He,K,ue),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function fl(R,K,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[oe.id]===void 0){const et=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[oe.id]=new sr(1,1,{generateMipmaps:!0,type:et?Cr:Mi,minFilter:ks,samples:Math.max(4,F.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Le=D.state.transmissionRenderTarget[oe.id],He=oe.viewport||U;Le.setSize(He.z*k.transmissionResolutionScale,He.w*k.transmissionResolutionScale);const Re=k.getRenderTarget(),Je=k.getActiveCubeFace(),nt=k.getActiveMipmapLevel();k.setRenderTarget(Le),k.getClearColor(Oe),Ee=k.getClearAlpha(),Ee<1&&k.setClearColor(16777215,.5),k.clear(),It&&ot.render(ue);const ut=k.toneMapping;k.toneMapping=rr;const ft=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),D.setupLightsView(oe),St===!0&&We.setGlobalState(k.clippingPlanes,oe),fs(R,ue,oe),he.updateMultisampleRenderTarget(Le),he.updateRenderTargetMipmap(Le),bt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let At=0,Wt=K.length;At<Wt;At++){const Jt=K[At],{object:Ot,geometry:un,material:Ve,group:Tn}=Jt;if(Ve.side===wr&&Ot.layers.test(oe.layers)){const vt=Ve.side;Ve.side=ri,Ve.needsUpdate=!0,Ko(Ot,ue,oe,un,Ve,Tn),Ve.side=vt,Ve.needsUpdate=!0,et=!0}}et===!0&&(he.updateMultisampleRenderTarget(Le),he.updateRenderTargetMipmap(Le))}k.setRenderTarget(Re,Je,nt),k.setClearColor(Oe,Ee),ft!==void 0&&(oe.viewport=ft),k.toneMapping=ut}function fs(R,K,ue){const oe=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Le=R.length;se<Le;se++){const He=R[se],{object:Re,geometry:Je,group:nt}=He;let ut=He.material;ut.allowOverride===!0&&oe!==null&&(ut=oe),Re.layers.test(ue.layers)&&Ko(Re,K,ue,Je,ut,nt)}}function Ko(R,K,ue,oe,se,Le){R.onBeforeRender(k,K,ue,oe,se,Le),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(k,K,ue,oe,R,Le),se.transparent===!0&&se.side===wr&&se.forceSinglePass===!1?(se.side=ri,se.needsUpdate=!0,k.renderBufferDirect(ue,K,oe,se,R,Le),se.side=ls,se.needsUpdate=!0,k.renderBufferDirect(ue,K,oe,se,R,Le),se.side=wr):k.renderBufferDirect(ue,K,oe,se,R,Le),R.onAfterRender(k,K,ue,oe,se,Le)}function ds(R,K,ue){K.isScene!==!0&&(K=Yt);const oe=ae.get(R),se=D.state.lights,Le=D.state.shadowsArray,He=se.state.version,Re=Ie.getParameters(R,se.state,Le,K,ue,D.state.lightProbeGridArray),Je=Ie.getProgramCacheKey(Re);let nt=oe.programs;oe.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,oe.fog=K.fog;const ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;oe.envMap=Te.get(R.envMap||oe.environment,ut),oe.envMapRotation=oe.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",Zt),nt=new Map,oe.programs=nt);let ft=nt.get(Je);if(ft!==void 0){if(oe.currentProgram===ft&&oe.lightsStateVersion===He)return dl(R,Re),ft}else Re.uniforms=Ie.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,ue,Re),R.onBeforeCompile(Re,k),ft=Ie.acquireProgram(Re,Je),nt.set(Je,ft),oe.uniforms=Re.uniforms;const et=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=We.uniform),dl(R,Re),oe.needsLights=Jo(R),oe.lightsStateVersion=He,oe.needsLights&&(et.ambientLightColor.value=se.state.ambient,et.lightProbe.value=se.state.probe,et.directionalLights.value=se.state.directional,et.directionalLightShadows.value=se.state.directionalShadow,et.spotLights.value=se.state.spot,et.spotLightShadows.value=se.state.spotShadow,et.rectAreaLights.value=se.state.rectArea,et.ltc_1.value=se.state.rectAreaLTC1,et.ltc_2.value=se.state.rectAreaLTC2,et.pointLights.value=se.state.point,et.pointLightShadows.value=se.state.pointShadow,et.hemisphereLights.value=se.state.hemi,et.directionalShadowMatrix.value=se.state.directionalShadowMatrix,et.spotLightMatrix.value=se.state.spotLightMatrix,et.spotLightMap.value=se.state.spotLightMap,et.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.lightProbeGrid=D.state.lightProbeGridArray.length>0,oe.currentProgram=ft,oe.uniformsList=null,ft}function Zo(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=tu.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function dl(R,K){const ue=ae.get(R);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function Iu(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;T.setFromMatrixPosition(K.matrixWorld);for(let ue=0,oe=R.length;ue<oe;ue++){const se=R[ue];if(se.texture!==null&&se.boundingBox.containsPoint(T))return se}return null}function en(R,K,ue,oe,se){K.isScene!==!0&&(K=Yt),he.resetTextureUnits();const Le=K.fog,He=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?K.environment:null,Re=z===null?k.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:wt.workingColorSpace,Je=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,nt=Te.get(oe.envMap||He,Je),ut=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!ue.morphAttributes.position,At=!!ue.morphAttributes.normal,Wt=!!ue.morphAttributes.color;let Jt=rr;oe.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Jt=k.toneMapping);const Ot=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,un=Ot!==void 0?Ot.length:0,Ve=ae.get(oe),Tn=D.state.lights;if(St===!0&&(gt===!0||R!==re)){const Bt=R===re&&oe.id===te;We.setState(oe,R,Bt)}let vt=!1;oe.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Tn.state.version||Ve.outputColorSpace!==Re||se.isBatchedMesh&&Ve.batching===!1||!se.isBatchedMesh&&Ve.batching===!0||se.isBatchedMesh&&Ve.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ve.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ve.instancing===!1||!se.isInstancedMesh&&Ve.instancing===!0||se.isSkinnedMesh&&Ve.skinning===!1||!se.isSkinnedMesh&&Ve.skinning===!0||se.isInstancedMesh&&Ve.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ve.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ve.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ve.instancingMorph===!1&&se.morphTexture!==null||Ve.envMap!==nt||oe.fog===!0&&Ve.fog!==Le||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==We.numPlanes||Ve.numIntersection!==We.numIntersection)||Ve.vertexAlphas!==ut||Ve.vertexTangents!==ft||Ve.morphTargets!==et||Ve.morphNormals!==At||Ve.morphColors!==Wt||Ve.toneMapping!==Jt||Ve.morphTargetsCount!==un||!!Ve.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ve.__version=oe.version);let qn=Ve.currentProgram;vt===!0&&(qn=ds(oe,K,se),W&&oe.isNodeMaterial&&W.onUpdateProgram(oe,qn,Ve));let $n=!1,yt=!1,cr=!1;const kt=qn.getUniforms(),qt=Ve.uniforms;if(w.useProgram(qn.program)&&($n=!0,yt=!0,cr=!0),oe.id!==te&&(te=oe.id,yt=!0),Ve.needsLights){const Bt=Iu(D.state.lightProbeGridArray,se);Ve.lightProbeGrid!==Bt&&(Ve.lightProbeGrid=Bt,yt=!0)}if($n||re!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(X,"projectionMatrix",R.projectionMatrix),kt.setValue(X,"viewMatrix",R.matrixWorldInverse);const bi=kt.map.cameraPosition;bi!==void 0&&bi.setValue(X,jt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&kt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&kt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),re!==R&&(re=R,yt=!0,cr=!0)}if(Ve.needsLights&&(Tn.state.directionalShadowMap.length>0&&kt.setValue(X,"directionalShadowMap",Tn.state.directionalShadowMap,he),Tn.state.spotShadowMap.length>0&&kt.setValue(X,"spotShadowMap",Tn.state.spotShadowMap,he),Tn.state.pointShadowMap.length>0&&kt.setValue(X,"pointShadowMap",Tn.state.pointShadowMap,he)),se.isSkinnedMesh){kt.setOptional(X,se,"bindMatrix"),kt.setOptional(X,se,"bindMatrixInverse");const Bt=se.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),kt.setValue(X,"boneTexture",Bt.boneTexture,he))}se.isBatchedMesh&&(kt.setOptional(X,se,"batchingTexture"),kt.setValue(X,"batchingTexture",se._matricesTexture,he),kt.setOptional(X,se,"batchingIdTexture"),kt.setValue(X,"batchingIdTexture",se._indirectTexture,he),kt.setOptional(X,se,"batchingColorTexture"),se._colorsTexture!==null&&kt.setValue(X,"batchingColorTexture",se._colorsTexture,he));const Ti=ue.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&G.update(se,ue,qn),(yt||Ve.receiveShadow!==se.receiveShadow)&&(Ve.receiveShadow=se.receiveShadow,kt.setValue(X,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&K.environment!==null&&(qt.envMapIntensity.value=K.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=AL()),yt){if(kt.setValue(X,"toneMappingExposure",k.toneMappingExposure),Ve.needsLights&&Uu(qt,cr),Le&&oe.fog===!0&&qe.refreshFogUniforms(qt,Le),qe.refreshMaterialUniforms(qt,oe,de,ge,D.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.lightProbeGrid){const Bt=Ve.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}tu.upload(X,Zo(Ve),qt,he)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(tu.upload(X,Zo(Ve),qt,he),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&kt.setValue(X,"center",se.center),kt.setValue(X,"modelViewMatrix",se.modelViewMatrix),kt.setValue(X,"normalMatrix",se.normalMatrix),kt.setValue(X,"modelMatrix",se.matrixWorld),oe.uniformsGroups!==void 0){const Bt=oe.uniformsGroups;for(let bi=0,Wi=Bt.length;bi<Wi;bi++){const hs=Bt[bi];xe.update(hs,qn),xe.bind(hs,qn)}}return qn}function Uu(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Jo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,K,ue){const oe=ae.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ae.get(R.texture).__webglTexture=K,ae.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ue=ae.get(R);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ue=0){z=R,J=K,Z=ue;let oe=null,se=!1,Le=!1;if(R){const Re=ae.get(R);if(Re.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,Re.__webglFramebuffer),U.copy(R.viewport),q.copy(R.scissor),Se=R.scissorTest,w.viewport(U),w.scissor(q),w.setScissorTest(Se),te=-1;return}else if(Re.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Re.__hasExternalTextures)he.rebindTextures(R,ae.get(R.texture).__webglTexture,ae.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ut=R.depthTexture;if(Re.__boundDepthTexture!==ut){if(ut!==null&&ae.has(ut)&&(R.width!==ut.image.width||R.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Le=!0);const nt=ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[K])?oe=nt[K][ue]:oe=nt[K],se=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?oe=ae.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?oe=nt[ue]:oe=nt,U.copy(R.viewport),q.copy(R.scissor),Se=R.scissorTest}else U.copy(Ze).multiplyScalar(de).floor(),q.copy(Rt).multiplyScalar(de).floor(),Se=ct;if(ue!==0&&(oe=ce),w.bindFramebuffer(X.FRAMEBUFFER,oe)&&w.drawBuffers(R,oe),w.viewport(U),w.scissor(q),w.setScissorTest(Se),se){const Re=ae.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Re.__webglTexture,ue)}else if(Le){const Re=K;for(let Je=0;Je<R.textures.length;Je++){const nt=ae.get(R.textures[Je]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Je,nt.__webglTexture,ue,Re)}}else if(R!==null&&ue!==0){const Re=ae.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Re.__webglTexture,ue)}te=-1},this.readRenderTargetPixels=function(R,K,ue,oe,se,Le,He,Re=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Je=Je[He]),Je){w.bindFramebuffer(X.FRAMEBUFFER,Je);try{const nt=R.textures[Re],ut=nt.format,ft=nt.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Re),!F.textureFormatReadable(ut)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(ft)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-oe&&ue>=0&&ue<=R.height-se&&X.readPixels(K,ue,oe,se,Me.convert(ut),Me.convert(ft),Le)}finally{const nt=z!==null?ae.get(z).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,K,ue,oe,se,Le,He,Re=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Je=Je[He]),Je)if(K>=0&&K<=R.width-oe&&ue>=0&&ue<=R.height-se){w.bindFramebuffer(X.FRAMEBUFFER,Je);const nt=R.textures[Re],ut=nt.format,ft=nt.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Re),!F.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.bufferData(X.PIXEL_PACK_BUFFER,Le.byteLength,X.STREAM_READ),X.readPixels(K,ue,oe,se,Me.convert(ut),Me.convert(ft),0);const At=z!==null?ae.get(z).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,At);const Wt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await $C(X,Wt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Le),X.deleteBuffer(et),X.deleteSync(Wt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ue=0){const oe=Math.pow(2,-ue),se=Math.floor(R.image.width*oe),Le=Math.floor(R.image.height*oe),He=K!==null?K.x:0,Re=K!==null?K.y:0;he.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,He,Re,se,Le),w.unbindTexture()},this.copyTextureToTexture=function(R,K,ue=null,oe=null,se=0,Le=0){let He,Re,Je,nt,ut,ft,et,At,Wt;const Jt=R.isCompressedTexture?R.mipmaps[Le]:R.image;if(ue!==null)He=ue.max.x-ue.min.x,Re=ue.max.y-ue.min.y,Je=ue.isBox3?ue.max.z-ue.min.z:1,nt=ue.min.x,ut=ue.min.y,ft=ue.isBox3?ue.min.z:0;else{const qt=Math.pow(2,-se);He=Math.floor(Jt.width*qt),Re=Math.floor(Jt.height*qt),R.isDataArrayTexture?Je=Jt.depth:R.isData3DTexture?Je=Math.floor(Jt.depth*qt):Je=1,nt=0,ut=0,ft=0}oe!==null?(et=oe.x,At=oe.y,Wt=oe.z):(et=0,At=0,Wt=0);const Ot=Me.convert(K.format),un=Me.convert(K.type);let Ve;K.isData3DTexture?(he.setTexture3D(K,0),Ve=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(he.setTexture2DArray(K,0),Ve=X.TEXTURE_2D_ARRAY):(he.setTexture2D(K,0),Ve=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const Tn=w.getParameter(X.UNPACK_ROW_LENGTH),vt=w.getParameter(X.UNPACK_IMAGE_HEIGHT),qn=w.getParameter(X.UNPACK_SKIP_PIXELS),$n=w.getParameter(X.UNPACK_SKIP_ROWS),yt=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Jt.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Jt.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,nt),w.pixelStorei(X.UNPACK_SKIP_ROWS,ut),w.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const cr=R.isDataArrayTexture||R.isData3DTexture,kt=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const qt=ae.get(R),Ti=ae.get(K),Bt=ae.get(qt.__renderTarget),bi=ae.get(Ti.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,Bt.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Wi=0;Wi<Je;Wi++)cr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ae.get(R).__webglTexture,se,ft+Wi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ae.get(K).__webglTexture,Le,Wt+Wi)),X.blitFramebuffer(nt,ut,He,Re,et,At,He,Re,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||ae.has(R)){const qt=ae.get(R),Ti=ae.get(K);w.bindFramebuffer(X.READ_FRAMEBUFFER,pe),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,$);for(let Bt=0;Bt<Je;Bt++)cr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qt.__webglTexture,se,ft+Bt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qt.__webglTexture,se),kt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ti.__webglTexture,Le,Wt+Bt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ti.__webglTexture,Le),se!==0?X.blitFramebuffer(nt,ut,He,Re,et,At,He,Re,X.COLOR_BUFFER_BIT,X.NEAREST):kt?X.copyTexSubImage3D(Ve,Le,et,At,Wt+Bt,nt,ut,He,Re):X.copyTexSubImage2D(Ve,Le,et,At,nt,ut,He,Re);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Ve,Le,et,At,Wt,He,Re,Je,Ot,un,Jt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Ve,Le,et,At,Wt,He,Re,Je,Ot,Jt.data):X.texSubImage3D(Ve,Le,et,At,Wt,He,Re,Je,Ot,un,Jt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Le,et,At,He,Re,Ot,un,Jt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Le,et,At,Jt.width,Jt.height,Ot,Jt.data):X.texSubImage2D(X.TEXTURE_2D,Le,et,At,He,Re,Ot,un,Jt);w.pixelStorei(X.UNPACK_ROW_LENGTH,Tn),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt),w.pixelStorei(X.UNPACK_SKIP_PIXELS,qn),w.pixelStorei(X.UNPACK_SKIP_ROWS,$n),w.pixelStorei(X.UNPACK_SKIP_IMAGES,yt),Le===0&&K.generateMipmaps&&X.generateMipmap(Ve),w.unbindTexture()},this.initRenderTarget=function(R){ae.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){J=0,Z=0,z=null,w.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const RL={torus:()=>new Ru(1.2,.35,16,40),icosahedron:()=>new bu(1.1,0),octahedron:()=>new Au(1.8),torusKnot:()=>new Pu(.9,.3,48,6),dodecahedron:()=>new pm(.9)};function qo({variant:n,particleCount:e=400,lowQuality:t}){const r=je.useRef(null);return je.useEffect(()=>{const o=r.current;if(!o)return;const a=window.innerWidth<768,c=t||a?Math.min(e,60):e,f=t||a?Math.min(window.devicePixelRatio,1.2):Math.min(window.devicePixelRatio,2),h=new fR,d=new Si(60,o.clientWidth/o.clientHeight,.1,1e3);d.position.z=8;const m=new CL({alpha:!0,antialias:!t});m.setSize(o.clientWidth,o.clientHeight),m.setPixelRatio(f),o.appendChild(m.domElement);const p=!n,v=new za;p&&!a&&(v.position.x=-2.5),h.add(v);const S=n?[{make:RL[n],color:[62975,11032055,3900150,62975][Math.floor(Math.random()*4)],opacity:.08}]:[{make:()=>new Ru(1.4,.4,18,52),color:62975,opacity:.06},{make:()=>new bu(1.2,0),color:11032055,opacity:.09},{make:()=>new Au(1.1),color:3900150,opacity:.12},{make:()=>new Pu(1,.35,64,8),color:62975,opacity:.15}],M=[],b=[];S.forEach((Ee,j)=>{const ge=new xu({color:Ee.color,wireframe:!0,transparent:!0,opacity:Ee.opacity}),de=new Hi(Ee.make(),ge);if(n)de.position.set(0,0,0),M.push({x:0,y:0,z:0}),de.scale.setScalar(1.1);else{const Ne=j/S.length*Math.PI*2,Ge=Math.cos(Ne)*3.2,Ze=Math.sin(Ne)*2.5-.3,Rt=j*.5-1;de.position.set(Ge,Ze,Rt),M.push({x:Ge,y:Ze,z:Rt});const ct=j===3?.95:.9+j*.15;de.scale.setScalar(ct)}v.add(de),b.push({mesh:de,speed:.15+j*.08,rotX:Math.random()*.008,rotY:Math.random()*.008,floatOffset:Math.random()*Math.PI*2})});const y=n?Math.min(c,100):c,_=n?8:16,C=new jn,P=new Float32Array(y*3),T=new Float32Array(y*3);for(let Ee=0;Ee<y*3;Ee++){const j=(Math.random()-.5)*_;P[Ee]=j,T[Ee]=j}C.setAttribute("position",new zi(P,3));const L=new CS({color:62975,size:n?.02:.03,transparent:!0,opacity:n?.08:.12,blending:Oh}),D=new SR(C,L);h.add(D);const I=new mm(.15,8,8),E=new xu({color:62975,transparent:!0,opacity:t?.1:.25}),N=new Hi(I,E);N.position.set(0,0,2),h.add(N);let k=0,B=0,W=0,ce=0;const pe=(Ee,j)=>{W=Ee/window.innerWidth*2-1,ce=-(j/window.innerHeight)*2+1},$=Ee=>pe(Ee.clientX,Ee.clientY),J=Ee=>{const j=Ee.touches[0];j&&pe(j.clientX,j.clientY)};window.addEventListener("mousemove",$),window.addEventListener("touchmove",J,{passive:!0});const Z=()=>{const Ee=o.clientWidth,j=o.clientHeight;d.aspect=Ee/j,d.updateProjectionMatrix(),m.setSize(Ee,j)};window.addEventListener("resize",Z);let z=!0;const te=new IntersectionObserver(([Ee])=>{z=Ee.isIntersecting},{threshold:.05});te.observe(o);let re=0,U=0;const q=new LR,Se=C.attributes.position,Oe=()=>{if(U=requestAnimationFrame(Oe),!z)return;const Ee=q.getDelta();re+=Ee,k+=(W-k)*.05,B+=(ce-B)*.05,b.forEach((ge,de)=>{ge.mesh.rotation.x+=ge.rotX+Ee*.15+B*.002,ge.mesh.rotation.y+=ge.rotY+Ee*.25+k*.004,ge.mesh.position.y+=Math.sin(re*ge.speed+ge.floatOffset)*.001;const Ne=Math.sqrt(k*k+B*B),Ge=1+(1-Ne)*.04*Math.max(0,1-Ne),Ze=n?1.1:de===3?.95:.9+de*.15;ge.mesh.scale.setScalar(Ze+Ge*.03);const Rt=M[de];ge.mesh.position.x=Rt.x+k*(n?.15:.25),ge.mesh.position.y=Rt.y+B*(n?.12:.2)}),p&&(v.rotation.x+=(B*.15-v.rotation.x)*.015,v.rotation.y+=(k*.25-v.rotation.y)*.015),N.position.x=k*4,N.position.y=B*3,N.position.z=1.5,N.material.opacity=.15+(1-Math.sqrt(k*k+B*B)/1.5)*.2;const j=Se.array;for(let ge=0;ge<y;ge++){const de=ge*3;j[de]=T[de]+k*.3+Math.sin(re*.2+ge)*.05,j[de+1]=T[de+1]+B*.2+Math.cos(re*.15+ge*1.3)*.05,j[de+2]=T[de+2]+Math.sin(re*.1+ge*.7)*.05}Se.needsUpdate=!0,m.render(h,d)};return Oe(),()=>{for(cancelAnimationFrame(U),te.disconnect(),window.removeEventListener("mousemove",$),window.removeEventListener("touchmove",J),window.removeEventListener("resize",Z),m.dispose();o.firstChild;)o.removeChild(o.firstChild)}},[n,e,t]),O.jsx("div",{ref:r,className:"absolute inset-0 pointer-events-none",style:{zIndex:1}})}class ll{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const PL=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Rn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:PL()},gm=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},DL=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=gm(n);Rn.publicKey=t.publicKey,Rn.blockHeadless=t.blockHeadless,Rn.storageProvider=t.storageProvider,Rn.blockList=t.blockList,Rn.limitRate=t.limitRate,Rn.origin=t.origin||e},HS=async(n,e,t={})=>{const r=await fetch(Rn.origin+n,{method:"POST",headers:t,body:e}),o=await r.text(),a=new ll(r.status,o);if(r.ok)return a;throw a},GS=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},LL=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},WS=n=>n.webdriver||!n.languages||n.languages.length===0,XS=()=>new ll(451,"Unavailable For Headless Browser"),NL=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},IL=n=>{var e;return!((e=n.list)!=null&&e.length)||!n.watchVariable},UL=(n,e)=>n instanceof FormData?n.get(e):n[e],jS=(n,e)=>{if(IL(n))return!1;NL(n.list,n.watchVariable);const t=UL(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},YS=()=>new ll(403,"Forbidden"),FL=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},kL=async(n,e,t)=>{const r=Number(await t.get(n)||0);return e-Date.now()+r},qS=async(n,e,t)=>{if(!e.throttle||!t)return!1;FL(e.throttle,e.id);const r=e.id||n;return await kL(r,e.throttle,t)>0?!0:(await t.set(r,Date.now().toString()),!1)},$S=()=>new ll(429,"Too Many Requests"),OL=async(n,e,t,r)=>{const o=gm(r),a=o.publicKey||Rn.publicKey,c=o.blockHeadless||Rn.blockHeadless,f=o.storageProvider||Rn.storageProvider,h={...Rn.blockList,...o.blockList},d={...Rn.limitRate,...o.limitRate};return c&&WS(navigator)?Promise.reject(XS()):(GS(a,n,e),LL(t),t&&jS(h,t)?Promise.reject(YS()):await qS(location.pathname,d,f)?Promise.reject($S()):HS("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},BL=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},VL=n=>typeof n=="string"?document.querySelector(n):n,zL=async(n,e,t,r)=>{const o=gm(r),a=o.publicKey||Rn.publicKey,c=o.blockHeadless||Rn.blockHeadless,f=Rn.storageProvider||o.storageProvider,h={...Rn.blockList,...o.blockList},d={...Rn.limitRate,...o.limitRate};if(c&&WS(navigator))return Promise.reject(XS());const m=VL(t);GS(a,n,e),BL(m);const p=new FormData(m);return jS(h,p)?Promise.reject(YS()):await qS(location.pathname,d,f)?Promise.reject($S()):(p.append("lib_version","4.4.1"),p.append("service_id",n),p.append("template_id",e),p.append("user_id",a),HS("/api/v1.0/email/send-form",p))},HL={init:DL,send:OL,sendForm:zL,EmailJSResponseStatus:ll};var GL=my();const WL=py(GL);function XL(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}const jL=n=>{switch(n){case"success":return $L;case"info":return ZL;case"warning":return KL;case"error":return JL;default:return null}},YL=Array(12).fill(0),qL=({visible:n,className:e})=>ke.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},ke.createElement("div",{className:"sonner-spinner"},YL.map((t,r)=>ke.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),$L=ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ke.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),KL=ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},ke.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),ZL=ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ke.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),JL=ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ke.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),QL=ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},ke.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ke.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),eN=()=>{const[n,e]=ke.useState(document.hidden);return ke.useEffect(()=>{const t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};let Pp=1;class tN{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;const{message:r,...o}=e,a=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Pp++,c=this.toasts.find(h=>h.id===a),f=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(a)&&this.dismissedToasts.delete(a),c?this.toasts=this.toasts.map(h=>h.id===a?(this.publish({...h,...e,id:a,title:r}),{...h,...e,id:a,dismissible:f,title:r}):h):this.addToast({title:r,...o,dismissible:f,id:a}),a},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0})))):this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const o=Promise.resolve(e instanceof Function?e():e);let a=r!==void 0,c;const f=o.then(async d=>{if(c=["resolve",d],ke.isValidElement(d))a=!1,this.create({id:r,type:"default",message:d});else if(iN(d)&&!d.ok){a=!1;const p=typeof t.error=="function"?await t.error(`HTTP error! status: ${d.status}`):t.error,v=typeof t.description=="function"?await t.description(`HTTP error! status: ${d.status}`):t.description,M=typeof p=="object"&&!ke.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...M})}else if(d instanceof Error){a=!1;const p=typeof t.error=="function"?await t.error(d):t.error,v=typeof t.description=="function"?await t.description(d):t.description,M=typeof p=="object"&&!ke.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...M})}else if(t.success!==void 0){a=!1;const p=typeof t.success=="function"?await t.success(d):t.success,v=typeof t.description=="function"?await t.description(d):t.description,M=typeof p=="object"&&!ke.isValidElement(p)?p:{message:p};this.create({id:r,type:"success",description:v,...M})}}).catch(async d=>{if(c=["reject",d],t.error!==void 0){a=!1;const m=typeof t.error=="function"?await t.error(d):t.error,p=typeof t.description=="function"?await t.description(d):t.description,S=typeof m=="object"&&!ke.isValidElement(m)?m:{message:m};this.create({id:r,type:"error",description:p,...S})}}).finally(()=>{a&&(this.dismiss(r),r=void 0),t.finally==null||t.finally.call(t)}),h=()=>new Promise((d,m)=>f.then(()=>c[0]==="reject"?m(c[1]):d(c[1])).catch(m));return typeof r!="string"&&typeof r!="number"?{unwrap:h}:Object.assign(r,{unwrap:h})},this.custom=(e,t)=>{const r=(t==null?void 0:t.id)||Pp++;return this.create({jsx:e(r),id:r,...t}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const ii=new tN,nN=(n,e)=>{const t=(e==null?void 0:e.id)||Pp++;return ii.addToast({title:n,...e,id:t}),t},iN=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",rN=nN,sN=()=>ii.toasts,oN=()=>ii.getActiveToasts(),cy=Object.assign(rN,{success:ii.success,info:ii.info,warning:ii.warning,error:ii.error,custom:ii.custom,message:ii.message,promise:ii.promise,dismiss:ii.dismiss,loading:ii.loading},{getHistory:sN,getToasts:oN});XL("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function zc(n){return n.label!==void 0}const aN=3,lN="24px",cN="16px",uy=4e3,uN=356,fN=14,dN=45,hN=200;function Zi(...n){return n.filter(Boolean).join(" ")}function pN(n){const[e,t]=n.split("-"),r=[];return e&&r.push(e),t&&r.push(t),r}const mN=n=>{var e,t,r,o,a,c,f,h,d;const{invert:m,toast:p,unstyled:v,interacting:S,setHeights:M,visibleToasts:b,heights:y,index:_,toasts:C,expanded:P,removeToast:T,defaultRichColors:L,closeButton:D,style:I,cancelButtonStyle:E,actionButtonStyle:N,className:k="",descriptionClassName:B="",duration:W,position:ce,gap:pe,expandByDefault:$,classNames:J,icons:Z,closeButtonAriaLabel:z="Close toast"}=n,[te,re]=ke.useState(null),[U,q]=ke.useState(null),[Se,Oe]=ke.useState(!1),[Ee,j]=ke.useState(!1),[ge,de]=ke.useState(!1),[Ne,Ge]=ke.useState(!1),[Ze,Rt]=ke.useState(!1),[ct,Mt]=ke.useState(0),[St,gt]=ke.useState(0),Ft=ke.useRef(p.duration||W||uy),jt=ke.useRef(null),Lt=ke.useRef(null),Yt=_===0,It=_+1<=b,xt=p.type,X=p.dismissible!==!1,pn=p.className||"",bt=p.descriptionClassName||"",F=ke.useMemo(()=>y.findIndex(ie=>ie.toastId===p.id)||0,[y,p.id]),w=ke.useMemo(()=>{var ie;return(ie=p.closeButton)!=null?ie:D},[p.closeButton,D]),Q=ke.useMemo(()=>p.duration||W||uy,[p.duration,W]),ae=ke.useRef(0),he=ke.useRef(0),Te=ke.useRef(0),Ce=ke.useRef(null),[me,ve]=ce.split("-"),Ie=ke.useMemo(()=>y.reduce((ie,Me,be)=>be>=F?ie:ie+Me.height,0),[y,F]),qe=eN(),Fe=p.invert||m,Pe=xt==="loading";he.current=ke.useMemo(()=>F*pe+Ie,[F,Ie]),ke.useEffect(()=>{Ft.current=Q},[Q]),ke.useEffect(()=>{Oe(!0)},[]),ke.useEffect(()=>{const ie=Lt.current;if(ie){const Me=ie.getBoundingClientRect().height;return gt(Me),M(be=>[{toastId:p.id,height:Me,position:p.position},...be]),()=>M(be=>be.filter(xe=>xe.toastId!==p.id))}},[M,p.id]),ke.useLayoutEffect(()=>{if(!Se)return;const ie=Lt.current,Me=ie.style.height;ie.style.height="auto";const be=ie.getBoundingClientRect().height;ie.style.height=Me,gt(be),M(xe=>xe.find(Ue=>Ue.toastId===p.id)?xe.map(Ue=>Ue.toastId===p.id?{...Ue,height:be}:Ue):[{toastId:p.id,height:be,position:p.position},...xe])},[Se,p.title,p.description,M,p.id]);const We=ke.useCallback(()=>{j(!0),Mt(he.current),M(ie=>ie.filter(Me=>Me.toastId!==p.id)),setTimeout(()=>{T(p)},hN)},[p,T,M,he]);ke.useEffect(()=>{if(p.promise&&xt==="loading"||p.duration===1/0||p.type==="loading")return;let ie;return P||S||qe?(()=>{if(Te.current<ae.current){const xe=new Date().getTime()-ae.current;Ft.current=Ft.current-xe}Te.current=new Date().getTime()})():(()=>{Ft.current!==1/0&&(ae.current=new Date().getTime(),ie=setTimeout(()=>{p.onAutoClose==null||p.onAutoClose.call(p,p),We()},Ft.current))})(),()=>clearTimeout(ie)},[P,S,p,xt,qe,We]),ke.useEffect(()=>{p.delete&&We()},[We,p.delete]);function it(){var ie;if(Z!=null&&Z.loading){var Me;return ke.createElement("div",{className:Zi(J==null?void 0:J.loader,p==null||(Me=p.classNames)==null?void 0:Me.loader,"sonner-loader"),"data-visible":xt==="loading"},Z.loading)}return ke.createElement(qL,{className:Zi(J==null?void 0:J.loader,p==null||(ie=p.classNames)==null?void 0:ie.loader),visible:xt==="loading"})}const ot=p.icon||(Z==null?void 0:Z[xt])||jL(xt);var G,De;return ke.createElement("li",{tabIndex:0,ref:Lt,className:Zi(k,pn,J==null?void 0:J.toast,p==null||(e=p.classNames)==null?void 0:e.toast,J==null?void 0:J.default,J==null?void 0:J[xt],p==null||(t=p.classNames)==null?void 0:t[xt]),"data-sonner-toast":"","data-rich-colors":(G=p.richColors)!=null?G:L,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":Se,"data-promise":!!p.promise,"data-swiped":Ze,"data-removed":Ee,"data-visible":It,"data-y-position":me,"data-x-position":ve,"data-index":_,"data-front":Yt,"data-swiping":ge,"data-dismissible":X,"data-type":xt,"data-invert":Fe,"data-swipe-out":Ne,"data-swipe-direction":U,"data-expanded":!!(P||$&&Se),style:{"--index":_,"--toasts-before":_,"--z-index":C.length-_,"--offset":`${Ee?ct:he.current}px`,"--initial-height":$?"auto":`${St}px`,...I,...p.style},onDragEnd:()=>{de(!1),re(null),Ce.current=null},onPointerDown:ie=>{Pe||!X||(jt.current=new Date,Mt(he.current),ie.target.setPointerCapture(ie.pointerId),ie.target.tagName!=="BUTTON"&&(de(!0),Ce.current={x:ie.clientX,y:ie.clientY}))},onPointerUp:()=>{var ie,Me,be;if(Ne||!X)return;Ce.current=null;const xe=Number(((ie=Lt.current)==null?void 0:ie.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Xe=Number(((Me=Lt.current)==null?void 0:Me.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ue=new Date().getTime()-((be=jt.current)==null?void 0:be.getTime()),pt=te==="x"?xe:Xe,Et=Math.abs(pt)/Ue;if(Math.abs(pt)>=dN||Et>.11){Mt(he.current),p.onDismiss==null||p.onDismiss.call(p,p),q(te==="x"?xe>0?"right":"left":Xe>0?"down":"up"),We(),Ge(!0);return}else{var zt,Zt;(zt=Lt.current)==null||zt.style.setProperty("--swipe-amount-x","0px"),(Zt=Lt.current)==null||Zt.style.setProperty("--swipe-amount-y","0px")}Rt(!1),de(!1),re(null)},onPointerMove:ie=>{var Me,be,xe;if(!Ce.current||!X||((Me=window.getSelection())==null?void 0:Me.toString().length)>0)return;const Ue=ie.clientY-Ce.current.y,pt=ie.clientX-Ce.current.x;var Et;const zt=(Et=n.swipeDirections)!=null?Et:pN(ce);!te&&(Math.abs(pt)>1||Math.abs(Ue)>1)&&re(Math.abs(pt)>Math.abs(Ue)?"x":"y");let Zt={x:0,y:0};const Gi=Yn=>1/(1.5+Math.abs(Yn)/20);if(te==="y"){if(zt.includes("top")||zt.includes("bottom"))if(zt.includes("top")&&Ue<0||zt.includes("bottom")&&Ue>0)Zt.y=Ue;else{const Yn=Ue*Gi(Ue);Zt.y=Math.abs(Yn)<Math.abs(Ue)?Yn:Ue}}else if(te==="x"&&(zt.includes("left")||zt.includes("right")))if(zt.includes("left")&&pt<0||zt.includes("right")&&pt>0)Zt.x=pt;else{const Yn=pt*Gi(pt);Zt.x=Math.abs(Yn)<Math.abs(pt)?Yn:pt}(Math.abs(Zt.x)>0||Math.abs(Zt.y)>0)&&Rt(!0),(be=Lt.current)==null||be.style.setProperty("--swipe-amount-x",`${Zt.x}px`),(xe=Lt.current)==null||xe.style.setProperty("--swipe-amount-y",`${Zt.y}px`)}},w&&!p.jsx&&xt!=="loading"?ke.createElement("button",{"aria-label":z,"data-disabled":Pe,"data-close-button":!0,onClick:Pe||!X?()=>{}:()=>{We(),p.onDismiss==null||p.onDismiss.call(p,p)},className:Zi(J==null?void 0:J.closeButton,p==null||(r=p.classNames)==null?void 0:r.closeButton)},(De=Z==null?void 0:Z.close)!=null?De:QL):null,(xt||p.icon||p.promise)&&p.icon!==null&&((Z==null?void 0:Z[xt])!==null||p.icon)?ke.createElement("div",{"data-icon":"",className:Zi(J==null?void 0:J.icon,p==null||(o=p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||it():null,p.type!=="loading"?ot:null):null,ke.createElement("div",{"data-content":"",className:Zi(J==null?void 0:J.content,p==null||(a=p.classNames)==null?void 0:a.content)},ke.createElement("div",{"data-title":"",className:Zi(J==null?void 0:J.title,p==null||(c=p.classNames)==null?void 0:c.title)},p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title),p.description?ke.createElement("div",{"data-description":"",className:Zi(B,bt,J==null?void 0:J.description,p==null||(f=p.classNames)==null?void 0:f.description)},typeof p.description=="function"?p.description():p.description):null),ke.isValidElement(p.cancel)?p.cancel:p.cancel&&zc(p.cancel)?ke.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||E,onClick:ie=>{zc(p.cancel)&&X&&(p.cancel.onClick==null||p.cancel.onClick.call(p.cancel,ie),We())},className:Zi(J==null?void 0:J.cancelButton,p==null||(h=p.classNames)==null?void 0:h.cancelButton)},p.cancel.label):null,ke.isValidElement(p.action)?p.action:p.action&&zc(p.action)?ke.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||N,onClick:ie=>{zc(p.action)&&(p.action.onClick==null||p.action.onClick.call(p.action,ie),!ie.defaultPrevented&&We())},className:Zi(J==null?void 0:J.actionButton,p==null||(d=p.classNames)==null?void 0:d.actionButton)},p.action.label):null)};function fy(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function gN(n,e){const t={};return[n,e].forEach((r,o)=>{const a=o===1,c=a?"--mobile-offset":"--offset",f=a?cN:lN;function h(d){["top","right","bottom","left"].forEach(m=>{t[`${c}-${m}`]=typeof d=="number"?`${d}px`:d})}typeof r=="number"||typeof r=="string"?h(r):typeof r=="object"?["top","right","bottom","left"].forEach(d=>{r[d]===void 0?t[`${c}-${d}`]=f:t[`${c}-${d}`]=typeof r[d]=="number"?`${r[d]}px`:r[d]}):h(f)}),t}const vN=ke.forwardRef(function(e,t){const{invert:r,position:o="bottom-right",hotkey:a=["altKey","KeyT"],expand:c,closeButton:f,className:h,offset:d,mobileOffset:m,theme:p="light",richColors:v,duration:S,style:M,visibleToasts:b=aN,toastOptions:y,dir:_=fy(),gap:C=fN,icons:P,containerAriaLabel:T="Notifications"}=e,[L,D]=ke.useState([]),I=ke.useMemo(()=>Array.from(new Set([o].concat(L.filter(U=>U.position).map(U=>U.position)))),[L,o]),[E,N]=ke.useState([]),[k,B]=ke.useState(!1),[W,ce]=ke.useState(!1),[pe,$]=ke.useState(p!=="system"?p:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),J=ke.useRef(null),Z=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),z=ke.useRef(null),te=ke.useRef(!1),re=ke.useCallback(U=>{D(q=>{var Se;return(Se=q.find(Oe=>Oe.id===U.id))!=null&&Se.delete||ii.dismiss(U.id),q.filter(({id:Oe})=>Oe!==U.id)})},[]);return ke.useEffect(()=>ii.subscribe(U=>{if(U.dismiss){requestAnimationFrame(()=>{D(q=>q.map(Se=>Se.id===U.id?{...Se,delete:!0}:Se))});return}setTimeout(()=>{WL.flushSync(()=>{D(q=>{const Se=q.findIndex(Oe=>Oe.id===U.id);return Se!==-1?[...q.slice(0,Se),{...q[Se],...U},...q.slice(Se+1)]:[U,...q]})})})}),[L]),ke.useEffect(()=>{if(p!=="system"){$(p);return}if(p==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;const U=window.matchMedia("(prefers-color-scheme: dark)");try{U.addEventListener("change",({matches:q})=>{$(q?"dark":"light")})}catch{U.addListener(({matches:Se})=>{try{$(Se?"dark":"light")}catch(Oe){console.error(Oe)}})}},[p]),ke.useEffect(()=>{L.length<=1&&B(!1)},[L]),ke.useEffect(()=>{const U=q=>{var Se;if(a.every(j=>q[j]||q.code===j)){var Ee;B(!0),(Ee=J.current)==null||Ee.focus()}q.code==="Escape"&&(document.activeElement===J.current||(Se=J.current)!=null&&Se.contains(document.activeElement))&&B(!1)};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[a]),ke.useEffect(()=>{if(J.current)return()=>{z.current&&(z.current.focus({preventScroll:!0}),z.current=null,te.current=!1)}},[J.current]),ke.createElement("section",{ref:t,"aria-label":`${T} ${Z}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},I.map((U,q)=>{var Se;const[Oe,Ee]=U.split("-");return L.length?ke.createElement("ol",{key:U,dir:_==="auto"?fy():_,tabIndex:-1,ref:J,className:h,"data-sonner-toaster":!0,"data-sonner-theme":pe,"data-y-position":Oe,"data-lifted":k&&L.length>1&&!c,"data-x-position":Ee,style:{"--front-toast-height":`${((Se=E[0])==null?void 0:Se.height)||0}px`,"--width":`${uN}px`,"--gap":`${C}px`,...M,...gN(d,m)},onBlur:j=>{te.current&&!j.currentTarget.contains(j.relatedTarget)&&(te.current=!1,z.current&&(z.current.focus({preventScroll:!0}),z.current=null))},onFocus:j=>{j.target instanceof HTMLElement&&j.target.dataset.dismissible==="false"||te.current||(te.current=!0,z.current=j.relatedTarget)},onMouseEnter:()=>B(!0),onMouseMove:()=>B(!0),onMouseLeave:()=>{W||B(!1)},onDragEnd:()=>B(!1),onPointerDown:j=>{j.target instanceof HTMLElement&&j.target.dataset.dismissible==="false"||ce(!0)},onPointerUp:()=>ce(!1)},L.filter(j=>!j.position&&q===0||j.position===U).map((j,ge)=>{var de,Ne;return ke.createElement(mN,{key:j.id,icons:P,index:ge,toast:j,defaultRichColors:v,duration:(de=y==null?void 0:y.duration)!=null?de:S,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:r,visibleToasts:b,closeButton:(Ne=y==null?void 0:y.closeButton)!=null?Ne:f,interacting:W,position:U,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,closeButtonAriaLabel:y==null?void 0:y.closeButtonAriaLabel,removeToast:re,toasts:L.filter(Ge=>Ge.position==j.position),heights:E.filter(Ge=>Ge.position==j.position),setHeights:N,expandByDefault:c,gap:C,expanded:k,swipeDirections:e.swipeDirections})})):null}))}),xN=`
  @keyframes glitch-before {
    0%,100%  { clip-path: inset(50% 0 30% 0); transform: translate(-3px,  2px); }
    20%      { clip-path: inset(10% 0 70% 0); transform: translate( 3px, -2px); color:#00f5ff; }
    40%      { clip-path: inset(70% 0 10% 0); transform: translate(-2px,  3px); color:#a855f7; }
    60%      { clip-path: inset(30% 0 50% 0); transform: translate( 2px, -1px); }
    80%      { clip-path: inset(0%  0 90% 0); transform: translate(-1px,  2px); }
  }
  @keyframes glitch-after {
    0%,100%  { clip-path: inset(20% 0 60% 0); transform: translate( 3px, -2px); }
    25%      { clip-path: inset(60% 0 20% 0); transform: translate(-3px,  2px); color:#a855f7; }
    50%      { clip-path: inset(10% 0 80% 0); transform: translate( 2px,  3px); color:#00f5ff; }
    75%      { clip-path: inset(80% 0  5% 0); transform: translate(-2px, -2px); }
  }
  @keyframes float-y {
    0%,100% { transform: translateY(0px) rotate(var(--rot,0deg)); }
    50%     { transform: translateY(-18px) rotate(calc(var(--rot,0deg) + 5deg)); }
  }
  @keyframes pulse-glow {
    0%,100% { box-shadow: 0 0 12px #00f5ff30, 0 0 40px #00f5ff10; }
    50%     { box-shadow: 0 0 24px #00f5ff70, 0 0 80px #00f5ff25, 0 0 140px #00f5ff0a; }
  }
  @keyframes spin-slow {
    to { transform: rotate(360deg); }
  }
  @keyframes blink-cursor {
    0%,100% { opacity: 1; }
    50%     { opacity: 0; }
  }
  @keyframes wobble {
    0%,100% { transform: rotate(0deg) scale(1); }
    25%     { transform: rotate(0.8deg) scale(1.01); }
    75%     { transform: rotate(-0.8deg) scale(1.01); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes pop-in {
    0%   { transform: scale(0.6); opacity: 0; }
    70%  { transform: scale(1.08); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes icon-float {
    0%,100% { transform: translateY(0px) scale(1); }
    50%     { transform: translateY(-4px) scale(1.05); }
  }
  @keyframes breathe {
    0%,100% { opacity: var(--breathe-from, 0.5); }
    50%     { opacity: var(--breathe-to, 0.7); }
  }
  @keyframes glow-pulse {
    0%,100% { filter: brightness(0.5) drop-shadow(0 0 4px rgba(0,245,255,0.1)); }
    50%     { filter: brightness(0.55) drop-shadow(0 0 12px rgba(0,245,255,0.2)); }
  }
  @keyframes tilt-shake {
    0%,100% { transform: rotate(0deg); }
    20%     { transform: rotate(1deg); }
    40%     { transform: rotate(-1deg); }
    60%     { transform: rotate(0.5deg); }
    80%     { transform: rotate(-0.5deg); }
  }

  .glitch-wrap { position: relative; display: inline-block; }
  .glitch-wrap::before,
  .glitch-wrap::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    width: 100%;
  }
  .glitch-wrap::before {
    animation: glitch-before 4s infinite;
    opacity: 0.7;
    z-index: -1;
  }
  .glitch-wrap::after {
    animation: glitch-after 4s infinite 0.15s;
    opacity: 0.5;
    z-index: -2;
  }


  .float-anim { animation: float-y var(--dur,7s) ease-in-out infinite var(--delay,0s); }
  .pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
  .spin-slow  { animation: spin-slow var(--dur,18s) linear infinite; }
  .neon-logo img { filter: drop-shadow(0 0 8px #00f5ff) drop-shadow(0 0 20px #00f5ff60); }
  .nav-link:hover { text-shadow: 0 0 8px #00f5ff, 0 0 20px #00f5ff80, 0 0 40px #00f5ff40; }
  .hire-btn:hover { box-shadow: 0 0 20px #00f5ff40, 0 0 40px #00f5ff20, inset 0 0 20px #00f5ff10; }
  .cursor-blink { animation: blink-cursor 1s step-end infinite; }
  .wobble-hover:hover { animation: wobble 0.4s ease; }
  .shimmer-text {
    background: linear-gradient(90deg, transparent 0%, rgba(0,245,255,0.15) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  .pop-in-view { animation: pop-in 0.5s ease forwards; }
  .icon-bounce { animation: icon-float 4s ease-in-out infinite; }
  .breathe-glow { animation: breathe 4s ease-in-out infinite; }
  .tilt-shake-hover:hover { animation: tilt-shake 0.3s ease; }
  .stat-card:hover .stat-icon { animation: icon-float 0.6s ease infinite; }
  .stat-card:hover .stat-value { animation: pop-in 0.3s ease; }

  .grid-dots {
    background-image:
      linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .glass {
    background: rgba(255,255,255,0.025);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.07);
    transition: box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .glass:hover {
    border-color: rgba(0,245,255,0.35);
    box-shadow: 0 0 14px rgba(0,245,255,0.5), 0 0 40px rgba(0,245,255,0.15), 0 0 80px rgba(0,245,255,0.06);
  }
  .glass-md {
    background: rgba(255,255,255,0.045);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.10);
    transition: box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .glass-md:hover {
    border-color: rgba(168,85,247,0.5);
    box-shadow: 0 0 14px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.15), 0 0 80px rgba(168,85,247,0.06);
  }
  html { scroll-behavior: smooth; font-family: 'Inter', sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace !important; }

  ::-webkit-scrollbar { width: 3px; height: 3px; }
  ::-webkit-scrollbar-track { background: #050505; }
  ::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.25); border-radius: 2px; }

  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes pill-glow {
    0%,100% { box-shadow: 0 0 15px #00f5ff25, 0 0 40px #00f5ff08; }
    50%     { box-shadow: 0 0 30px #00f5ff50, 0 0 80px #00f5ff15; }
  }
  @keyframes welcome-reveal {
    0%   { opacity: 0; transform: scale(0.85); letter-spacing: 12px; }
    100% { opacity: 1; transform: scale(1);   letter-spacing: 6px; }
  }

  .marquee-scroll { animation: marquee-scroll 40s linear infinite; }
  .marquee-pause:hover { animation-play-state: paused !important; }
  .mask-edges {
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }
  .scrollbar-thin { scrollbar-width: thin; scrollbar-color: rgba(0,245,255,0.2) transparent; }
  .scrollbar-thin::-webkit-scrollbar { height: 3px; }
  .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
  .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.2); border-radius: 2px; }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(0,245,255,0.4); }
  .pill-glow     { animation: pill-glow 2.5s ease-in-out infinite; }
  .welcome-reveal { animation: welcome-reveal 0.6s ease-out forwards; }
`,dy=[{id:1,name:"Smart Driving AI",category:"backend",description:"A backend system designed to process sensor data from vehicle cameras. It focuses on object detection logic and logging driving events efficiently.",tech:["Go","Python","OpenCV","PostgreSQL"],grad:"from-blue-500/20 to-indigo-700/20",accent:"#3b82f6"},{id:2,name:"Task Management Hub",category:"fullstack",description:"A collaborative task management tool that handles real time updates. Built to manage team workflows with a focus on data synchronization.",tech:["Next.js","Node.js","WebSockets","MongoDB"],grad:"from-cyan-500/20 to-blue-700/20",accent:"#00f5ff"},{id:3,name:"Portfolio Website",category:"frontend",description:"A custom personal portfolio built to showcase my technical projects. Focuses on interactive animations and clean, responsive UI.",tech:["React","Tailwind CSS","Framer Motion"],grad:"from-purple-500/20 to-pink-700/20",accent:"#a855f7"}],fh={frontend:[{name:"React",level:95},{name:"Next.js",level:92},{name:"TypeScript",level:93},{name:"Tailwind CSS",level:96},{name:"Vue.js",level:80},{name:"Three.js",level:73}],backend:[{name:"Node.js",level:91},{name:"Python",level:88},{name:"Go",level:84},{name:"Java",level:78},{name:"C# / .NET",level:75},{name:"PHP",level:72}],database:[{name:"PostgreSQL",level:89},{name:"MongoDB",level:86},{name:"Redis",level:83},{name:"MySQL",level:84},{name:"Prisma",level:87},{name:"GraphQL",level:81}],devops:[{name:"Docker",level:86},{name:"Kubernetes",level:75},{name:"AWS",level:79},{name:"CI / CD",level:83},{name:"Terraform",level:71},{name:"Nginx",level:77}]},Hc=["#00f5ff","#a855f7","#3b82f6","#10b981","#f97316","#6366f1"],yN=[{year:"2024",title:"The Beginning",side:"left",body:"Started my coding journey by learning the fundamentals of web development. Focused on HTML, CSS, and basic JavaScript to build simple, functional projects."},{year:"2025",title:"Expanding Skills",side:"right",body:"Shifted to building more complex applications. Started learning React and Node.js while understanding how to connect frontends to backend services."},{year:"2026",title:"Present Day",side:"left",body:"Currently focused on building fullstack applications, improving code quality, and exploring modern tools to create efficient web solutions."}];function Ws({children:n,className:e="",style:t}){const r=je.useRef(null),o=c=>{const f=r.current;if(!f)return;const h=f.getBoundingClientRect(),d=(c.clientX-h.left)/h.width-.5,m=(c.clientY-h.top)/h.height-.5;f.style.transition="transform 0.08s ease",f.style.transform=`perspective(900px) rotateY(${d*14}deg) rotateX(${-m*14}deg) translateZ(8px)`},a=()=>{const c=r.current;c&&(c.style.transition="transform 0.45s ease",c.style.transform="perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)")};return O.jsx("div",{ref:r,onMouseMove:o,onMouseLeave:a,className:e,style:{transformStyle:"preserve-3d",...t},children:n})}function hy({level:n,color:e}){const r=2*Math.PI*36,o=r-n/100*r;return O.jsxs("svg",{width:"88",height:"88",className:"-rotate-90","aria-hidden":"true",children:[O.jsx("circle",{cx:"44",cy:"44",r:36,stroke:"rgba(255,255,255,0.07)",strokeWidth:"5",fill:"none"}),O.jsx(ht.circle,{cx:"44",cy:"44",r:36,stroke:e,strokeWidth:"5",fill:"none",strokeLinecap:"round",strokeDasharray:r,initial:{strokeDashoffset:r},whileInView:{strokeDashoffset:o},viewport:{once:!0},transition:{duration:1.4,ease:"easeOut",delay:.15},style:{filter:`drop-shadow(0 0 5px ${e}90)`}})]})}function _N(n,e=55){const[t,r]=je.useState("");return je.useEffect(()=>{let o=0;const a=setInterval(()=>{o++,r(n.slice(0,o)),o>=n.length&&clearInterval(a)},e);return()=>clearInterval(a)},[n,e]),t}function SN({open:n,setOpen:e}){const t=["About","Skills","Projects","Journey"];return O.jsxs("nav",{className:"fixed top-0 inset-x-0 z-50 border-b border-white/5",style:{background:"rgba(5,5,5,0.85)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"},children:[O.jsxs("div",{className:"max-w-7xl mx-auto px-5 py-4 flex items-center justify-between",children:[O.jsx(ht.span,{initial:{opacity:0,x:-16},animate:{opacity:1,x:0},className:"neon-logo select-none flex items-center",children:O.jsx("img",{src:"/logo-aris.png",alt:"Logo",className:"h-8 w-auto"})}),O.jsxs(ht.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"hidden md:flex items-center gap-7",children:[t.map((r,o)=>O.jsx(ht.a,{href:`#${r.toLowerCase()}`,initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.1*o+.2},className:"font-mono text-xs text-white/50 hover:text-[#00f5ff] transition-all tracking-widest uppercase nav-link",children:r},r)),O.jsx(ht.a,{href:"#contact",initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},className:"font-mono text-xs px-4 py-2 border border-[#00f5ff]/35 text-[#00f5ff] rounded-lg hover:bg-[#00f5ff]/10 hover:border-[#00f5ff]/70 transition-all tracking-widest uppercase hire-btn",children:"Contact"})]}),O.jsx("button",{className:"md:hidden text-white/50 hover:text-white transition-colors",onClick:()=>e(!n),"aria-label":"Toggle menu",children:n?O.jsx(hC,{size:20}):O.jsx(oC,{size:20})})]}),n&&O.jsx(ht.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},className:"md:hidden border-t border-white/5 px-5 pb-5 flex flex-col gap-3 pt-3",style:{background:"rgba(10,10,10,0.95)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"},children:t.map(r=>O.jsx("a",{href:`#${r.toLowerCase()}`,onClick:()=>e(!1),className:"text-white/50 hover:text-[#00f5ff] transition-all font-mono text-sm py-1.5 nav-link",children:r},r))})]})}function MN(){const n=_N("Fullstack Engineer • Mastering Modern Technology",55);return O.jsxs("section",{id:"hero",className:"relative min-h-screen flex flex-col pt-20 overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 pointer-events-none grid-dots"}),O.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[O.jsx("div",{className:"absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00f5ff]/4 blur-3xl"}),O.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#a855f7]/5 blur-3xl"})]}),O.jsx(qo,{}),O.jsxs("div",{className:"relative flex-1 flex flex-col lg:flex-row w-full",children:[O.jsxs("div",{className:"relative z-10 w-full lg:w-1/2 px-5 lg:pl-40 lg:pr-12 py-16 lg:py-0 flex flex-col justify-center order-1",children:[O.jsxs(ht.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.2},className:"flex items-center gap-2 mb-5",children:[O.jsx("span",{className:"w-8 h-px bg-[#00f5ff]"}),O.jsx("span",{className:"font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase",children:"Hello, I'm"})]}),O.jsxs(ht.h1,{initial:{opacity:0,y:28},animate:{opacity:1,y:0},transition:{delay:.3},className:"text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-3",children:[O.jsx("span",{className:"glitch-wrap text-white","data-text":"ARIS",children:"ARIS"}),O.jsx("br",{}),O.jsx("span",{className:"glitch-wrap text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#3b82f6] to-[#a855f7]","data-text":"FIRMANSYAH",children:"FIRMANSYAH"})]}),O.jsxs(ht.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.55},className:"font-mono text-[#00f5ff]/75 text-base mb-8 min-h-[26px]",children:[n,O.jsx("span",{className:"cursor-blink text-[#00f5ff]",children:"|"})]}),O.jsx(ht.p,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.7},className:"text-white/45 text-lg max-w-md leading-relaxed mb-10",children:"A Fullstack Engineer focused on execution and constant learning. I chose to skip traditional paths to focus on what actually matters: writing clean code and building solid digital products from frontend to backend."}),O.jsxs(ht.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.85},className:"flex flex-wrap gap-4",children:[O.jsxs("a",{href:"#projects",className:"group flex items-center gap-2 px-6 py-3 bg-[#00f5ff] text-[#050505] font-bold rounded-xl text-sm hover:bg-[#00f5ff]/90 hover:shadow-[0_0_36px_#00f5ff50] hover:-translate-y-0.5 transition-all duration-200",children:["View Projects",O.jsx(FA,{size:15,className:"group-hover:translate-x-1 transition-transform"})]}),O.jsxs("a",{href:"#contact",className:"flex items-center gap-2 px-6 py-3 border border-white/15 text-white/70 font-medium rounded-xl text-sm hover:border-[#a855f7]/60 hover:text-[#a855f7] hover:shadow-[0_0_24px_#a855f720] hover:-translate-y-0.5 transition-all duration-200",children:[O.jsx(GA,{size:15}),"Download CV"]})]}),O.jsxs(ht.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.1},className:"mt-14 flex items-center gap-1.5 text-white/25 font-mono text-xs",children:[O.jsx(OA,{size:13,className:"animate-bounce"}),"scroll to explore"]})]}),O.jsx("div",{className:"relative w-full lg:w-1/2 order-1 lg:order-2 flex-shrink-0 overflow-hidden h-[50vh] lg:h-screen group",children:O.jsx(ht.div,{initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:1,ease:[.25,.46,.45,.94],delay:.2},className:"absolute inset-0 bottom-0",children:O.jsx("img",{src:"/foto-profil.png",alt:"Profile",className:"w-full h-full object-cover object-[center_45%] pointer-events-none brightness-[0.5] contrast-[0.95] saturate-[0.85] transition-[filter] duration-300 group-hover:brightness-[1.0] group-hover:contrast-[1.0] group-hover:saturate-[1.0] breathe-glow"})})})]})]})}function EN(){const n=[{icon:cx,label:"Fast Learner",desc:"Learning and adapting to new tools through documentation",color:"#00f5ff"},{icon:kh,label:"Clean Code",desc:"Writing structured and easy to read code",color:"#a855f7"},{icon:qA,label:"Full Stack Capable",desc:"Comfortable handling both frontend and backend logic",color:"#3b82f6"},{icon:JA,label:"Problem Solver",desc:"Focused on debugging and finding efficient solutions",color:"#10b981"}],e=[{value:"4+",label:"Core Languages",icon:kh,color:"#00f5ff"},{value:"10+",label:"Projects Built",icon:KA,color:"#a855f7"},{value:"2+",label:"Years Coding",icon:cC,color:"#3b82f6"},{value:"8+",label:"Technologies Used",icon:zA,color:"#10b981"},{value:"100%",label:"Hands-on Developer",icon:iS,color:"#f97316"},{value:"Active",label:"Learner",icon:cx,color:"#6366f1"}];return O.jsxs("section",{id:"about",className:"py-32 relative overflow-hidden",children:[O.jsx(qo,{variant:"torus",particleCount:200}),O.jsx("div",{className:"absolute inset-0 pointer-events-none grid-dots"}),O.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[O.jsx("div",{className:"absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-[#a855f7]/4 blur-3xl"}),O.jsx("div",{className:"absolute bottom-1/4 right-1/5 w-[450px] h-[450px] rounded-full bg-[#3b82f6]/5 blur-3xl"})]}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#a855f7]/3 to-transparent pointer-events-none"}),O.jsxs("div",{className:"max-w-7xl mx-auto px-5",children:[O.jsxs(ht.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-16",children:[O.jsx("span",{className:"font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase shimmer-text",children:"01 / About"}),O.jsxs("h2",{className:"text-4xl sm:text-5xl font-black text-white mt-2",children:["Building with"," ",O.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#3b82f6]",children:"the Modern Stack"})]})]}),O.jsxs("div",{className:"grid lg:grid-cols-2 gap-14 items-start",children:[O.jsxs(ht.div,{initial:{opacity:0,x:-28},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[O.jsx("p",{className:"text-white/55 text-lg leading-relaxed mb-5",children:"I am a self taught full stack developer who learns by doing. I focus on writing clean code and creating practical web applications that work smoothly for users without overcomplicating the structure."}),O.jsx("p",{className:"text-white/55 text-lg leading-relaxed mb-10",children:"I handle both frontend and backend development, from designing responsive layouts to setting up reliable database structures and APIs. My journey is driven by hands-on experience, hard work, and a commitment to continuous growth."}),O.jsx("div",{className:"grid grid-cols-2 gap-4",children:n.map((t,r)=>O.jsx(ht.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:r*.1},children:O.jsxs(Ws,{className:"glass p-4 rounded-xl cursor-default wobble-hover h-full min-h-[140px]",children:[O.jsx(t.icon,{size:18,style:{color:t.color},className:"mb-2.5 icon-bounce"}),O.jsx("p",{className:"text-white text-sm font-semibold",children:t.label}),O.jsx("p",{className:"text-white/38 text-xs mt-0.5 min-h-[2.5rem] leading-tight",children:t.desc})]})},t.label))})]}),O.jsx(ht.div,{initial:{opacity:0,x:28},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"grid grid-cols-2 gap-4",children:e.map((t,r)=>O.jsx(ht.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:r*.08},children:O.jsxs(Ws,{className:"glass-md p-6 rounded-2xl cursor-default h-full stat-card",style:{boxShadow:`0 0 28px ${t.color}08`},children:[O.jsx(t.icon,{size:16,style:{color:t.color},className:"mb-3 opacity-65 stat-icon"}),O.jsx("p",{className:"text-3xl font-black mb-1 stat-value",style:{color:t.color,textShadow:`0 0 18px ${t.color}40`},children:t.value}),O.jsx("p",{className:"text-white/38 text-xs leading-snug",children:t.label})]})},t.label))})]})]})]})}function wN(){const[n,e]=je.useState("frontend"),t=Object.keys(fh);return O.jsxs("section",{id:"skills",className:"py-32 relative overflow-hidden",children:[O.jsx(qo,{variant:"icosahedron",particleCount:200}),O.jsx("div",{className:"absolute inset-0 grid-dots pointer-events-none"}),O.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[O.jsx("div",{className:"absolute top-1/3 right-1/4 w-[550px] h-[550px] rounded-full bg-[#00f5ff]/4 blur-3xl"}),O.jsx("div",{className:"absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#3b82f6]/5 blur-3xl"})]}),O.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/25 to-transparent"}),O.jsx("div",{className:"absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/25 to-transparent"}),O.jsxs("div",{className:"max-w-7xl mx-auto px-5",children:[O.jsxs(ht.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[O.jsx("span",{className:"font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase",children:"02 / Skills"}),O.jsxs("h2",{className:"text-4xl sm:text-5xl font-black text-white mt-2",children:["Technology"," ",O.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#3b82f6]",children:"Arsenal"})]})]}),O.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:t.map(r=>O.jsx("button",{onClick:()=>e(r),className:`font-mono text-xs px-5 py-2 rounded-full capitalize tracking-wider transition-all duration-200 ${n===r?"bg-[#00f5ff] text-[#050505] font-bold shadow-[0_0_22px_#00f5ff45]":"glass border border-white/10 text-white/45 hover:text-white/75 hover:border-white/20"}`,children:r},r))}),O.jsx("div",{className:"overflow-hidden mask-edges py-8",children:O.jsxs("div",{className:"flex w-max marquee-scroll marquee-pause",children:[O.jsx("div",{className:"flex flex-shrink-0",children:fh[n].map((r,o)=>{const a=Hc[o%Hc.length],c=r.level>=90?"Expert":r.level>=80?"Advanced":"Proficient";return O.jsx("div",{className:"flex-shrink-0 mr-8","data-card":!0,children:O.jsxs(Ws,{className:"glass py-10 px-6 rounded-2xl cursor-default flex flex-col items-center text-center hover:border-white/15 transition-colors w-[180px]",children:[O.jsxs("div",{className:"relative mb-5",children:[O.jsx(hy,{level:r.level,color:a}),O.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:O.jsxs("span",{className:"font-mono text-sm font-bold",style:{color:a},children:[r.level,"%"]})})]}),O.jsx("p",{className:"text-white text-sm font-semibold leading-snug mb-3",children:r.name}),O.jsx("span",{className:"font-mono text-[10px] px-3 py-1 rounded-full",style:{color:a,background:`${a}15`,border:`1px solid ${a}30`},children:c})]})},r.name)})}),O.jsx("div",{className:"flex flex-shrink-0",children:fh[n].map((r,o)=>{const a=Hc[o%Hc.length],c=r.level>=90?"Expert":r.level>=80?"Advanced":"Proficient";return O.jsx("div",{className:"flex-shrink-0 mr-8","data-card":!0,children:O.jsxs(Ws,{className:"glass py-10 px-6 rounded-2xl cursor-default flex flex-col items-center text-center hover:border-white/15 transition-colors w-[180px]",children:[O.jsxs("div",{className:"relative mb-5",children:[O.jsx(hy,{level:r.level,color:a}),O.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:O.jsxs("span",{className:"font-mono text-sm font-bold",style:{color:a},children:[r.level,"%"]})})]}),O.jsx("p",{className:"text-white text-sm font-semibold leading-snug mb-3",children:r.name}),O.jsx("span",{className:"font-mono text-[10px] px-3 py-1 rounded-full",style:{color:a,background:`${a}15`,border:`1px solid ${a}30`},children:c})]})},`dup-${r.name}`)})})]})}),O.jsx(ht.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-12 flex flex-wrap gap-2.5 justify-center",children:["JavaScript","TypeScript","Python","Go","Java","C#","PHP","Rust","SQL","GraphQL","Bash","YAML"].map((r,o)=>O.jsx(ht.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:o*.04},className:"font-mono text-[11px] px-3 py-1.5 rounded-full border border-white/10 text-white/40 hover:text-white/70 hover:border-[#00f5ff]/35 transition-all cursor-default",children:r},r))})]})]})}function TN(){const[n,e]=je.useState("all"),t=n==="all"?dy:dy.filter(r=>r.category===n);return O.jsxs("section",{id:"projects",className:"py-32 relative overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 translate-y-[-60px]",children:O.jsx(qo,{variant:"octahedron",particleCount:200})}),O.jsx("div",{className:"absolute inset-0 pointer-events-none grid-dots"}),O.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[O.jsx("div",{className:"absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#a855f7]/4 blur-3xl"}),O.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00f5ff]/4 blur-3xl"})]}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#3b82f6]/3 to-transparent pointer-events-none"}),O.jsxs("div",{className:"max-w-7xl mx-auto px-5",children:[O.jsxs(ht.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[O.jsx("span",{className:"font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase",children:"03 / Projects"}),O.jsxs("h2",{className:"text-4xl sm:text-5xl font-black text-white mt-2",children:["Selected"," ",O.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00f5ff]",children:"Work"})]})]}),O.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:["all","frontend","backend","fullstack"].map(r=>O.jsx("button",{onClick:()=>e(r),className:`text-sm px-5 py-2 rounded-full capitalize transition-all duration-200 ${n===r?"bg-[#a855f7] text-white font-semibold shadow-[0_0_22px_#a855f745]":"glass border border-white/10 text-white/45 hover:text-white hover:border-white/22"}`,children:r},r))}),O.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((r,o)=>O.jsx(ht.div,{initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:o*.09},children:O.jsxs(Ws,{className:"glass rounded-2xl overflow-hidden group hover:border-white/15 transition-colors h-full flex flex-col",children:[O.jsxs("div",{className:`relative h-44 bg-gradient-to-br ${r.grad} flex items-center justify-center overflow-hidden`,children:[O.jsx("span",{className:"text-[5rem] font-black opacity-12 select-none leading-none",style:{color:r.accent},children:r.name[0]}),O.jsxs("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3",style:{background:`${r.accent}10`},children:[O.jsxs("a",{href:"#",onClick:a=>a.preventDefault(),className:"flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm",children:[O.jsx(XA,{size:12})," Live Demo"]}),O.jsxs("a",{href:"#",onClick:a=>a.preventDefault(),className:"flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm",children:[O.jsx(nS,{size:12})," Source"]})]}),O.jsx("div",{className:"absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full capitalize backdrop-blur-sm",style:{color:r.accent,background:`${r.accent}20`,border:`1px solid ${r.accent}40`},children:r.category})]}),O.jsxs("div",{className:"p-5 flex flex-col flex-1",children:[O.jsx("h3",{className:"text-base font-bold mb-2",style:{color:r.accent},children:r.name}),O.jsx("p",{className:"text-white/48 text-sm leading-relaxed mb-4 flex-1",children:r.description}),O.jsx("div",{className:"flex flex-wrap gap-1.5",children:r.tech.map(a=>O.jsx("span",{className:"font-mono text-[10px] px-2 py-0.5 rounded-md border border-white/10 text-white/38",children:a},a))})]})]})},r.id))})]})]})}function bN(){return O.jsxs("section",{id:"journey",className:"py-32 relative overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 translate-y-[-60px]",children:O.jsx(qo,{variant:"torusKnot",particleCount:200})}),O.jsx("div",{className:"absolute inset-0 grid-dots pointer-events-none"}),O.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[O.jsx("div",{className:"absolute top-1/4 right-1/5 w-[500px] h-[500px] rounded-full bg-[#00f5ff]/4 blur-3xl"}),O.jsx("div",{className:"absolute bottom-1/4 left-1/5 w-[450px] h-[450px] rounded-full bg-[#a855f7]/5 blur-3xl"})]}),O.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/28 to-transparent"}),O.jsxs("div",{className:"max-w-5xl mx-auto px-5",children:[O.jsxs(ht.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-16 text-center",children:[O.jsx("span",{className:"font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase",children:"04 / Journey"}),O.jsxs("h2",{className:"text-4xl sm:text-5xl font-black text-white mt-2",children:["The"," ",O.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a855f7]",children:"Path"})]})]}),O.jsxs("div",{className:"relative",children:[O.jsx("div",{className:"absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff]/45 via-[#a855f7]/30 to-transparent hidden md:block"}),O.jsx("div",{className:"space-y-10",children:yN.map((n,e)=>O.jsxs(ht.div,{initial:{opacity:0,x:n.side==="left"?-36:36},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:e*.08},className:`relative flex flex-col md:flex-row items-center gap-6 ${n.side==="right"?"md:flex-row-reverse":""}`,children:[O.jsx("div",{className:"md:w-[calc(50%-2.5rem)] w-full",children:O.jsxs(Ws,{className:"glass p-5 rounded-2xl cursor-default",children:[O.jsx("p",{className:"font-mono text-[#00f5ff] text-xs mb-2 md:hidden",children:n.year}),O.jsx("h3",{className:"text-white font-bold text-base mb-1.5",children:n.title}),O.jsx("p",{className:"text-white/48 text-sm leading-relaxed",children:n.body})]})}),O.jsx("div",{className:"hidden md:block relative z-10 flex-shrink-0",children:O.jsx("div",{className:"w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-[#00f5ff]",style:{boxShadow:"0 0 14px #00f5ff70"}})}),O.jsx("div",{className:`hidden md:flex md:w-[calc(50%-2.5rem)] ${n.side==="right"?"justify-start":"justify-end"}`,children:O.jsx("span",{className:"font-mono text-2xl font-black",style:{color:"#00f5ff",textShadow:"0 0 8px #00f5ff, 0 0 20px #00f5ff80, 0 0 40px #00f5ff40, 0 0 80px #00f5ff20"},children:n.year})})]},n.year))})]})]})]})}function AN(){const[n,e]=je.useState({name:"",email:"",message:""}),[t,r]=je.useState(!1),[o,a]=je.useState(!1),c=je.useRef(null),f=m=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m),h=async m=>{if(m.preventDefault(),!f(n.email)){cy.error("Please enter a valid email address.",{style:{background:"#1a1a2e",border:"1px solid #ef444480",color:"#f87171"}});return}r(!0);try{await HL.send("service_donudbj","template_45w1gxj",{from_name:n.name,from_email:n.email,message:n.message},"vvbKVjVVkq_zwROe8"),e({name:"",email:"",message:""}),a(!0)}catch{cy.error("Failed to send message. Please try again later.",{style:{background:"#1a1a2e",border:"1px solid #ef444480",color:"#f87171"}})}finally{r(!1)}},d=[{icon:nS,label:"GitHub",color:"#e2e8f0",url:"https://github.com/arisfir016"},{icon:eC,label:"LinkedIn",color:"#0a91d1",url:"https://www.linkedin.com/in/arisfir016"},{icon:fC,label:"Twitter",color:"#1d9bf0",url:"#"}];return O.jsxs("section",{id:"contact",className:"py-32 relative overflow-hidden",children:[O.jsx(qo,{variant:"dodecahedron",particleCount:200}),O.jsx("div",{className:"absolute inset-0 pointer-events-none grid-dots"}),O.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[O.jsx("div",{className:"absolute top-1/3 left-1/4 w-[550px] h-[550px] rounded-full bg-[#00f5ff]/4 blur-3xl"}),O.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#a855f7]/5 blur-3xl"})]}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#00f5ff]/3 to-transparent pointer-events-none"}),O.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/28 to-transparent"}),O.jsxs("div",{className:"max-w-7xl mx-auto px-5",children:[O.jsxs(ht.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-16",children:[O.jsx("span",{className:"font-mono text-[#00f5ff] text-xs tracking-[0.2em] uppercase",children:"05 / Contact"}),O.jsxs("h2",{className:"text-4xl sm:text-5xl font-black text-white mt-2",children:["Let's"," ",O.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a855f7]",children:"Connect"})]})]}),O.jsxs("div",{className:"grid lg:grid-cols-2 gap-14",children:[O.jsxs(ht.div,{initial:{opacity:0,x:-28},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[O.jsx("p",{className:"text-white/52 text-lg leading-relaxed mb-10",children:"If you have a project in mind, need help with a development task, or just want to chat about tech, feel free to drop me a message. I'm always happy to discuss new opportunities or exchange ideas."}),O.jsx("div",{className:"space-y-4 mb-10",children:[{icon:nC,label:"Email",value:"arisfir016@gmail.com",color:"#00f5ff"},{icon:rC,label:"Location",value:"Sragen, Jawa Tengah, Indonesia",color:"#a855f7"},{icon:kh,label:"Available for",value:"Open for freelance projects and full-time roles",color:"#3b82f6"}].map(m=>O.jsxs("div",{className:"flex items-center gap-4",children:[O.jsx("div",{className:"w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center",style:{background:`${m.color}14`,border:`1px solid ${m.color}28`},children:O.jsx(m.icon,{size:15,style:{color:m.color}})}),O.jsxs("div",{children:[O.jsx("p",{className:"font-mono text-white/28 text-[10px] tracking-[0.2em] uppercase",children:m.label}),O.jsx("p",{className:"text-white/72 text-sm",children:m.value})]})]},m.label))}),O.jsx("div",{className:"flex gap-3",children:d.map(m=>O.jsx(Ws,{children:O.jsx(ht.a,{href:m.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.06},className:"w-11 h-11 glass rounded-xl flex items-center justify-center border border-white/10 hover:border-white/28 transition-colors","aria-label":m.label,children:O.jsx(m.icon,{size:17,style:{color:m.color}})})},m.label))})]}),O.jsx(ht.div,{initial:{opacity:0,x:28},whileInView:{opacity:1,x:0},viewport:{once:!0},children:O.jsxs("form",{ref:c,onSubmit:h,className:"glass-md p-8 rounded-2xl",children:[O.jsx("div",{className:"grid sm:grid-cols-2 gap-4 mb-4",children:[{key:"name",label:"Name",ph:"Aris Firmansyah",type:"text"},{key:"email",label:"Email",ph:"alex@company.com",type:"email"}].map(m=>O.jsxs("div",{children:[O.jsx("label",{className:"block font-mono text-white/38 text-[10px] uppercase tracking-[0.2em] mb-2",children:m.label}),O.jsx("input",{type:m.type,required:!0,value:n[m.key],onChange:p=>e({...n,[m.key]:p.target.value}),placeholder:m.ph,className:"w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#00f5ff]/50 transition-colors"})]},m.key))}),O.jsxs("div",{className:"mb-6",children:[O.jsx("label",{className:"block font-mono text-white/38 text-[10px] uppercase tracking-[0.2em] mb-2",children:"Message"}),O.jsx("textarea",{required:!0,rows:5,value:n.message,onChange:m=>e({...n,message:m.target.value}),placeholder:"Tell me about your project...",className:"w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#00f5ff]/50 transition-colors resize-none"})]}),O.jsx("button",{type:"submit",className:"w-full py-3 bg-gradient-to-r from-[#00f5ff] to-[#3b82f6] text-[#050505] font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_36px_#00f5ff40] hover:-translate-y-0.5 transition-all duration-200",children:t?O.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[O.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),O.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}):O.jsxs(O.Fragment,{children:[O.jsx(iS,{size:15})," Send Message"]})})]})})]})]}),o&&O.jsx(ht.div,{initial:{opacity:0},animate:{opacity:1},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",onClick:()=>a(!1),children:O.jsxs(ht.div,{initial:{opacity:0,scale:.85,y:20},animate:{opacity:1,scale:1,y:0},transition:{type:"spring",damping:22,stiffness:260},className:"relative w-[90%] max-w-sm p-10 rounded-2xl text-center",style:{background:"linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(15,15,30,0.95) 100%)",border:"1px solid rgba(0,245,255,0.15)",boxShadow:"0 0 60px rgba(0,245,255,0.08), 0 0 120px rgba(168,85,247,0.04)"},onClick:m=>m.stopPropagation(),children:[O.jsx(ht.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:14,stiffness:260,delay:.15},className:"mx-auto mb-5 w-16 h-16 rounded-full flex items-center justify-center",style:{background:"rgba(34,197,94,0.12)",border:"2px solid rgba(34,197,94,0.3)"},children:O.jsx(ht.svg,{initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.4,delay:.35},viewBox:"0 0 24 24",className:"w-8 h-8",fill:"none",stroke:"#22c55e",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:O.jsx(ht.path,{d:"M5 13l4 4L19 7",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.4,delay:.35}})})}),O.jsx(ht.p,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.3},className:"font-mono text-sm tracking-[0.3em] mb-2",style:{color:"#22c55e"},children:"SUCCESS"}),O.jsx(ht.p,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-white/55 text-sm leading-relaxed mb-7",children:"Your message has been sent! I'll get back to you as soon as possible."}),O.jsx(ht.button,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.5},whileHover:{scale:1.03},whileTap:{scale:.97},onClick:()=>a(!1),className:"font-mono text-xs tracking-widest uppercase px-8 py-2.5 rounded-xl transition-all",style:{background:"linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))",border:"1px solid rgba(34,197,94,0.3)",color:"#22c55e"},children:"Close"})]})})]})}function CN(){const n=["About","Skills","Projects","Journey","Contact"];return O.jsx("footer",{className:"border-t border-white/5 py-10",children:O.jsxs("div",{className:"max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-5",children:[O.jsx("span",{className:"neon-logo flex items-center",children:O.jsx("img",{src:"/logo-aris.png",alt:"Logo",className:"h-6 w-auto"})}),O.jsx("p",{className:"font-mono text-white/20 text-xs",children:"© 2026 Aris Firmansyah · React + TypeScript + Tailwind"}),O.jsx("div",{className:"flex gap-5",children:n.map(e=>O.jsx("a",{href:`#${e.toLowerCase()}`,className:"font-mono text-white/22 text-xs hover:text-white/55 transition-colors",children:e},e))})]})})}function RN({onComplete:n}){const[e,t]=je.useState(0),[r,o]=je.useState("loading");return je.useEffect(()=>{let h=0;const d=setInterval(()=>{h++;const m=Math.min(Math.round(h/68.75*100),100);t(m),m>=100&&(clearInterval(d),o("welcome"),setTimeout(()=>{o("exit"),setTimeout(n,400)},500))},16);return()=>clearInterval(d)},[n]),O.jsxs(ht.div,{className:"fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden",animate:r==="exit"?{opacity:0,y:-40}:{},transition:{duration:.9,ease:[.25,.46,.45,.94]},children:[O.jsx("div",{className:"absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none",children:O.jsxs("div",{className:"marquee-scroll flex text-[clamp(4rem,16vw,12rem)] font-black text-white/[0.035] whitespace-nowrap leading-none tracking-tight",children:[O.jsx("span",{children:"FULLSTACK ENGINEER • MASTERING MODERN TECHNOLOGY   "}),O.jsx("span",{children:"FULLSTACK ENGINEER • MASTERING MODERN TECHNOLOGY   "})]})}),O.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none select-none",children:O.jsx("img",{src:"/logo-aris.png",alt:"",className:"w-[clamp(200px,60vw,500px)] h-auto opacity-[0.04]",style:{filter:"blur(4px)"}})}),O.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-6",children:[O.jsx("div",{className:"pill-glow flex items-center justify-center min-w-[200px] px-10 py-4 rounded-full border",style:{background:"linear-gradient(135deg, rgba(0,245,255,0.06) 0%, rgba(168,85,247,0.06) 100%)",borderColor:"rgba(0,245,255,0.15)",backdropFilter:"blur(6px)"},children:r==="welcome"?O.jsx(ht.span,{initial:{opacity:0,scale:.85,letterSpacing:"12px"},animate:{opacity:1,scale:1,letterSpacing:"6px"},transition:{duration:.6,ease:"easeOut"},className:"text-2xl sm:text-3xl font-black tracking-wider",style:{background:"linear-gradient(135deg, #00f5ff, #a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"WELCOME"}):O.jsxs("span",{className:"font-mono text-2xl sm:text-3xl font-bold text-white/80 tabular-nums",children:[e,"%"]})}),r==="loading"&&O.jsx("div",{className:"w-48 h-px bg-white/5 rounded-full overflow-hidden",children:O.jsx(ht.div,{className:"h-full rounded-full",style:{background:"linear-gradient(90deg, #00f5ff, #a855f7)",width:`${e}%`},transition:{duration:.1}})})]}),O.jsx(ht.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"absolute bottom-10 font-mono text-[10px] text-white/15 tracking-[0.25em] uppercase",children:r==="welcome"?"— ready —":"initializing..."})]})}function PN(){const[n,e]=je.useState(!1),[t,r]=je.useState(!1);return O.jsxs(O.Fragment,{children:[!t&&O.jsx(RN,{onComplete:()=>r(!0)}),O.jsxs(ht.div,{initial:{opacity:0},animate:t?{opacity:1}:{},transition:{duration:.8,ease:"easeOut"},className:"bg-[#050505] text-foreground min-h-screen overflow-x-hidden",children:[O.jsx("style",{children:xN}),O.jsx(SN,{open:n,setOpen:e}),O.jsx(MN,{}),O.jsx(EN,{}),O.jsx(wN,{}),O.jsx(TN,{}),O.jsx(bN,{}),O.jsx(AN,{}),O.jsx(CN,{}),O.jsx(vN,{position:"bottom-right",toastOptions:{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"13px"}}})]})]})}U1.createRoot(document.getElementById("root")).render(O.jsx(PN,{}));
