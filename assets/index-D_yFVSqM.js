(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))p(h);new MutationObserver(h=>{for(const w of h)if(w.type==="childList")for(const j of w.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&p(j)}).observe(document,{childList:!0,subtree:!0});function c(h){const w={};return h.integrity&&(w.integrity=h.integrity),h.referrerPolicy&&(w.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?w.credentials="include":h.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function p(h){if(h.ep)return;h.ep=!0;const w=c(h);fetch(h.href,w)}})();function Xf(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ss={exports:{}},Ur={},js={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function qf(){if(Uc)return ne;Uc=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),j=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),R=Symbol.iterator;function H(g){return g===null||typeof g!="object"?null:(g=R&&g[R]||g["@@iterator"],typeof g=="function"?g:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,V={};function X(g,k,U){this.props=g,this.context=k,this.refs=V,this.updater=U||ee}X.prototype.isReactComponent={},X.prototype.setState=function(g,k){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,k,"setState")},X.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function oe(){}oe.prototype=X.prototype;function F(g,k,U){this.props=g,this.context=k,this.refs=V,this.updater=U||ee}var fe=F.prototype=new oe;fe.constructor=F,Y(fe,X.prototype),fe.isPureReactComponent=!0;var de=Array.isArray,le=Object.prototype.hasOwnProperty,re={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function $(g,k,U){var G,K={},te=null,se=null;if(k!=null)for(G in k.ref!==void 0&&(se=k.ref),k.key!==void 0&&(te=""+k.key),k)le.call(k,G)&&!_.hasOwnProperty(G)&&(K[G]=k[G]);var ue=arguments.length-2;if(ue===1)K.children=U;else if(1<ue){for(var me=Array(ue),ze=0;ze<ue;ze++)me[ze]=arguments[ze+2];K.children=me}if(g&&g.defaultProps)for(G in ue=g.defaultProps,ue)K[G]===void 0&&(K[G]=ue[G]);return{$$typeof:o,type:g,key:te,ref:se,props:K,_owner:re.current}}function je(g,k){return{$$typeof:o,type:g.type,key:k,ref:g.ref,props:g.props,_owner:g._owner}}function Re(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function be(g){var k={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(U){return k[U]})}var Ie=/\/+/g;function ie(g,k){return typeof g=="object"&&g!==null&&g.key!=null?be(""+g.key):k.toString(36)}function Ee(g,k,U,G,K){var te=typeof g;(te==="undefined"||te==="boolean")&&(g=null);var se=!1;if(g===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(g.$$typeof){case o:case u:se=!0}}if(se)return se=g,K=K(se),g=G===""?"."+ie(se,0):G,de(K)?(U="",g!=null&&(U=g.replace(Ie,"$&/")+"/"),Ee(K,k,U,"",function(ze){return ze})):K!=null&&(Re(K)&&(K=je(K,U+(!K.key||se&&se.key===K.key?"":(""+K.key).replace(Ie,"$&/")+"/")+g)),k.push(K)),1;if(se=0,G=G===""?".":G+":",de(g))for(var ue=0;ue<g.length;ue++){te=g[ue];var me=G+ie(te,ue);se+=Ee(te,k,U,me,K)}else if(me=H(g),typeof me=="function")for(g=me.call(g),ue=0;!(te=g.next()).done;)te=te.value,me=G+ie(te,ue++),se+=Ee(te,k,U,me,K);else if(te==="object")throw k=String(g),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return se}function Ge(g,k,U){if(g==null)return g;var G=[],K=0;return Ee(g,G,"","",function(te){return k.call(U,te,K++)}),G}function Me(g){if(g._status===-1){var k=g._result;k=k(),k.then(function(U){(g._status===0||g._status===-1)&&(g._status=1,g._result=U)},function(U){(g._status===0||g._status===-1)&&(g._status=2,g._result=U)}),g._status===-1&&(g._status=0,g._result=k)}if(g._status===1)return g._result.default;throw g._result}var xe={current:null},I={transition:null},W={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:I,ReactCurrentOwner:re};function L(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Ge,forEach:function(g,k,U){Ge(g,function(){k.apply(this,arguments)},U)},count:function(g){var k=0;return Ge(g,function(){k++}),k},toArray:function(g){return Ge(g,function(k){return k})||[]},only:function(g){if(!Re(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ne.Component=X,ne.Fragment=c,ne.Profiler=h,ne.PureComponent=F,ne.StrictMode=p,ne.Suspense=S,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,ne.act=L,ne.cloneElement=function(g,k,U){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var G=Y({},g.props),K=g.key,te=g.ref,se=g._owner;if(k!=null){if(k.ref!==void 0&&(te=k.ref,se=re.current),k.key!==void 0&&(K=""+k.key),g.type&&g.type.defaultProps)var ue=g.type.defaultProps;for(me in k)le.call(k,me)&&!_.hasOwnProperty(me)&&(G[me]=k[me]===void 0&&ue!==void 0?ue[me]:k[me])}var me=arguments.length-2;if(me===1)G.children=U;else if(1<me){ue=Array(me);for(var ze=0;ze<me;ze++)ue[ze]=arguments[ze+2];G.children=ue}return{$$typeof:o,type:g.type,key:K,ref:te,props:G,_owner:se}},ne.createContext=function(g){return g={$$typeof:j,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ne.createElement=$,ne.createFactory=function(g){var k=$.bind(null,g);return k.type=g,k},ne.createRef=function(){return{current:null}},ne.forwardRef=function(g){return{$$typeof:N,render:g}},ne.isValidElement=Re,ne.lazy=function(g){return{$$typeof:B,_payload:{_status:-1,_result:g},_init:Me}},ne.memo=function(g,k){return{$$typeof:P,type:g,compare:k===void 0?null:k}},ne.startTransition=function(g){var k=I.transition;I.transition={};try{g()}finally{I.transition=k}},ne.unstable_act=L,ne.useCallback=function(g,k){return xe.current.useCallback(g,k)},ne.useContext=function(g){return xe.current.useContext(g)},ne.useDebugValue=function(){},ne.useDeferredValue=function(g){return xe.current.useDeferredValue(g)},ne.useEffect=function(g,k){return xe.current.useEffect(g,k)},ne.useId=function(){return xe.current.useId()},ne.useImperativeHandle=function(g,k,U){return xe.current.useImperativeHandle(g,k,U)},ne.useInsertionEffect=function(g,k){return xe.current.useInsertionEffect(g,k)},ne.useLayoutEffect=function(g,k){return xe.current.useLayoutEffect(g,k)},ne.useMemo=function(g,k){return xe.current.useMemo(g,k)},ne.useReducer=function(g,k,U){return xe.current.useReducer(g,k,U)},ne.useRef=function(g){return xe.current.useRef(g)},ne.useState=function(g){return xe.current.useState(g)},ne.useSyncExternalStore=function(g,k,U){return xe.current.useSyncExternalStore(g,k,U)},ne.useTransition=function(){return xe.current.useTransition()},ne.version="18.3.1",ne}var Vc;function Hs(){return Vc||(Vc=1,js.exports=qf()),js.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function Jf(){if(Gc)return Ur;Gc=1;var o=Hs(),u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function j(N,S,P){var B,R={},H=null,ee=null;P!==void 0&&(H=""+P),S.key!==void 0&&(H=""+S.key),S.ref!==void 0&&(ee=S.ref);for(B in S)p.call(S,B)&&!w.hasOwnProperty(B)&&(R[B]=S[B]);if(N&&N.defaultProps)for(B in S=N.defaultProps,S)R[B]===void 0&&(R[B]=S[B]);return{$$typeof:u,type:N,key:H,ref:ee,props:R,_owner:h.current}}return Ur.Fragment=c,Ur.jsx=j,Ur.jsxs=j,Ur}var Qc;function e0(){return Qc||(Qc=1,Ss.exports=Jf()),Ss.exports}var s=e0(),ao={},bs={exports:{}},it={},Cs={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function t0(){return Zc||(Zc=1,(function(o){function u(I,W){var L=I.length;I.push(W);e:for(;0<L;){var g=L-1>>>1,k=I[g];if(0<h(k,W))I[g]=W,I[L]=k,L=g;else break e}}function c(I){return I.length===0?null:I[0]}function p(I){if(I.length===0)return null;var W=I[0],L=I.pop();if(L!==W){I[0]=L;e:for(var g=0,k=I.length,U=k>>>1;g<U;){var G=2*(g+1)-1,K=I[G],te=G+1,se=I[te];if(0>h(K,L))te<k&&0>h(se,K)?(I[g]=se,I[te]=L,g=te):(I[g]=K,I[G]=L,g=G);else if(te<k&&0>h(se,L))I[g]=se,I[te]=L,g=te;else break e}}return W}function h(I,W){var L=I.sortIndex-W.sortIndex;return L!==0?L:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var j=Date,N=j.now();o.unstable_now=function(){return j.now()-N}}var S=[],P=[],B=1,R=null,H=3,ee=!1,Y=!1,V=!1,X=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(I){for(var W=c(P);W!==null;){if(W.callback===null)p(P);else if(W.startTime<=I)p(P),W.sortIndex=W.expirationTime,u(S,W);else break;W=c(P)}}function de(I){if(V=!1,fe(I),!Y)if(c(S)!==null)Y=!0,Me(le);else{var W=c(P);W!==null&&xe(de,W.startTime-I)}}function le(I,W){Y=!1,V&&(V=!1,oe($),$=-1),ee=!0;var L=H;try{for(fe(W),R=c(S);R!==null&&(!(R.expirationTime>W)||I&&!be());){var g=R.callback;if(typeof g=="function"){R.callback=null,H=R.priorityLevel;var k=g(R.expirationTime<=W);W=o.unstable_now(),typeof k=="function"?R.callback=k:R===c(S)&&p(S),fe(W)}else p(S);R=c(S)}if(R!==null)var U=!0;else{var G=c(P);G!==null&&xe(de,G.startTime-W),U=!1}return U}finally{R=null,H=L,ee=!1}}var re=!1,_=null,$=-1,je=5,Re=-1;function be(){return!(o.unstable_now()-Re<je)}function Ie(){if(_!==null){var I=o.unstable_now();Re=I;var W=!0;try{W=_(!0,I)}finally{W?ie():(re=!1,_=null)}}else re=!1}var ie;if(typeof F=="function")ie=function(){F(Ie)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Ge=Ee.port2;Ee.port1.onmessage=Ie,ie=function(){Ge.postMessage(null)}}else ie=function(){X(Ie,0)};function Me(I){_=I,re||(re=!0,ie())}function xe(I,W){$=X(function(){I(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_continueExecution=function(){Y||ee||(Y=!0,Me(le))},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return H},o.unstable_getFirstCallbackNode=function(){return c(S)},o.unstable_next=function(I){switch(H){case 1:case 2:case 3:var W=3;break;default:W=H}var L=H;H=W;try{return I()}finally{H=L}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=H;H=I;try{return W()}finally{H=L}},o.unstable_scheduleCallback=function(I,W,L){var g=o.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?g+L:g):L=g,I){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=L+k,I={id:B++,callback:W,priorityLevel:I,startTime:L,expirationTime:k,sortIndex:-1},L>g?(I.sortIndex=L,u(P,I),c(S)===null&&I===c(P)&&(V?(oe($),$=-1):V=!0,xe(de,L-g))):(I.sortIndex=k,u(S,I),Y||ee||(Y=!0,Me(le))),I},o.unstable_shouldYield=be,o.unstable_wrapCallback=function(I){var W=H;return function(){var L=H;H=W;try{return I.apply(this,arguments)}finally{H=L}}}})(Ns)),Ns}var Yc;function n0(){return Yc||(Yc=1,Cs.exports=t0()),Cs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc;function r0(){if(Kc)return it;Kc=1;var o=Hs(),u=n0();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,h={};function w(e,t){j(e,t),j(e+"Capture",t)}function j(e,t){for(h[e]=t,e=0;e<t.length;e++)p.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B={},R={};function H(e){return S.call(R,e)?!0:S.call(B,e)?!1:P.test(e)?R[e]=!0:(B[e]=!0,!1)}function ee(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,t,n,r){if(t===null||typeof t>"u"||ee(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function V(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new V(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oe,F);X[t]=new V(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oe,F);X[t]=new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oe,F);X[t]=new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function fe(e,t,n,r){var i=X.hasOwnProperty(t)?X[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y(t,n,i,r)&&(n=null),r||i===null?H(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var de=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),re=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Re=Symbol.for("react.provider"),be=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),I=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,g;function k(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var U=!1;function G(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,d=l.length-1;1<=a&&0<=d&&i[a]!==l[d];)d--;for(;1<=a&&0<=d;a--,d--)if(i[a]!==l[d]){if(a!==1||d!==1)do if(a--,d--,0>d||i[a]!==l[d]){var f=`
`+i[a].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=a&&0<=d);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?k(e):""}function K(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case re:return"Portal";case je:return"Profiler";case $:return"StrictMode";case ie:return"Suspense";case Ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case be:return(e.displayName||"Context")+".Consumer";case Re:return(e._context.displayName||"Context")+".Provider";case Ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ge:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ze(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=ze(e))}function Ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Po(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qs(e,t){t=t.checked,t!=null&&fe(e,"checked",t,!1)}function Lo(e,t){qs(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Io(e,t.type,n):t.hasOwnProperty("defaultValue")&&Io(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Js(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Io(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _o(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(or(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function ta(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function na(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ra(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function To(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ra(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ei,ia=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function oa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function la(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=oa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var tp=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fo=null,Pn=null,Ln=null;function sa(e){if(e=Pr(e)){if(typeof Fo!="function")throw Error(c(280));var t=e.stateNode;t&&(t=ji(t),Fo(e.stateNode,e.type,t))}}function aa(e){Pn?Ln?Ln.push(e):Ln=[e]:Pn=e}function ua(){if(Pn){var e=Pn,t=Ln;if(Ln=Pn=null,sa(e),t)for(e=0;e<t.length;e++)sa(t[e])}}function ca(e,t){return e(t)}function da(){}var Do=!1;function pa(e,t,n){if(Do)return e(t,n);Do=!0;try{return ca(e,t,n)}finally{Do=!1,(Pn!==null||Ln!==null)&&(da(),ua())}}function ar(e,t){var n=e.stateNode;if(n===null)return null;var r=ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Bo=!1;if(N)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Bo=!1}function np(e,t,n,r,i,l,a,d,f){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(C){this.onError(C)}}var cr=!1,ti=null,ni=!1,Wo=null,rp={onError:function(e){cr=!0,ti=e}};function ip(e,t,n,r,i,l,a,d,f){cr=!1,ti=null,np.apply(rp,arguments)}function op(e,t,n,r,i,l,a,d,f){if(ip.apply(this,arguments),cr){if(cr){var y=ti;cr=!1,ti=null}else throw Error(c(198));ni||(ni=!0,Wo=y)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(cn(e)!==e)throw Error(c(188))}function lp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ha(i),e;if(l===r)return ha(i),t;l=l.sibling}throw Error(c(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,d=i.child;d;){if(d===n){a=!0,n=i,r=l;break}if(d===r){a=!0,r=i,n=l;break}d=d.sibling}if(!a){for(d=l.child;d;){if(d===n){a=!0,n=l,r=i;break}if(d===r){a=!0,r=l,n=i;break}d=d.sibling}if(!a)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function ma(e){return e=lp(e),e!==null?ga(e):null}function ga(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ga(e);if(t!==null)return t;e=e.sibling}return null}var xa=u.unstable_scheduleCallback,va=u.unstable_cancelCallback,sp=u.unstable_shouldYield,ap=u.unstable_requestPaint,_e=u.unstable_now,up=u.unstable_getCurrentPriorityLevel,Ho=u.unstable_ImmediatePriority,ya=u.unstable_UserBlockingPriority,ri=u.unstable_NormalPriority,cp=u.unstable_LowPriority,wa=u.unstable_IdlePriority,ii=null,Et=null;function dp(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:hp,pp=Math.log,fp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(pp(e)/fp|0)|0}var oi=64,li=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var d=a&~i;d!==0?r=dr(d):(l&=a,l!==0&&(r=dr(l)))}else a=n&~i,a!==0?r=dr(a):l!==0&&(r=dr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-vt(l),d=1<<a,f=i[a];f===-1?((d&n)===0||(d&r)!==0)&&(i[a]=mp(d,t)):f<=t&&(e.expiredLanes|=d),l&=~d}}function $o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ka(){var e=oi;return oi<<=1,(oi&4194240)===0&&(oi=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function xp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Sa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ja,Go,ba,Ca,Na,Qo=!1,ai=[],Ht=null,$t=null,Ut=null,fr=new Map,hr=new Map,Vt=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ea(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function mr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Pr(t),t!==null&&Go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yp(e,t,n,r,i){switch(t){case"focusin":return Ht=mr(Ht,e,t,n,r,i),!0;case"dragenter":return $t=mr($t,e,t,n,r,i),!0;case"mouseover":return Ut=mr(Ut,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return fr.set(l,mr(fr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,hr.set(l,mr(hr.get(l)||null,e,t,n,r,i)),!0}return!1}function za(e){var t=dn(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=fa(n),t!==null){e.blockedOn=t,Na(e.priority,function(){ba(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ro=r,n.target.dispatchEvent(r),Ro=null}else return t=Pr(n),t!==null&&Go(t),e.blockedOn=n,!1;t.shift()}return!0}function Pa(e,t,n){ui(e)&&n.delete(t)}function wp(){Qo=!1,Ht!==null&&ui(Ht)&&(Ht=null),$t!==null&&ui($t)&&($t=null),Ut!==null&&ui(Ut)&&(Ut=null),fr.forEach(Pa),hr.forEach(Pa)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,wp)))}function xr(e){function t(i){return gr(i,e)}if(0<ai.length){gr(ai[0],e);for(var n=1;n<ai.length;n++){var r=ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&gr(Ht,e),$t!==null&&gr($t,e),Ut!==null&&gr(Ut,e),fr.forEach(t),hr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)za(n),n.blockedOn===null&&Vt.shift()}var In=de.ReactCurrentBatchConfig,ci=!0;function kp(e,t,n,r){var i=ge,l=In.transition;In.transition=null;try{ge=1,Zo(e,t,n,r)}finally{ge=i,In.transition=l}}function Sp(e,t,n,r){var i=ge,l=In.transition;In.transition=null;try{ge=4,Zo(e,t,n,r)}finally{ge=i,In.transition=l}}function Zo(e,t,n,r){if(ci){var i=Yo(e,t,n,r);if(i===null)pl(e,t,r,di,n),Ea(e,r);else if(yp(i,e,t,n,r))r.stopPropagation();else if(Ea(e,r),t&4&&-1<vp.indexOf(e)){for(;i!==null;){var l=Pr(i);if(l!==null&&ja(l),l=Yo(e,t,n,r),l===null&&pl(e,t,r,di,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var di=null;function Yo(e,t,n,r){if(di=null,e=Mo(r),e=dn(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function La(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case Ho:return 1;case ya:return 4;case ri:case cp:return 16;case wa:return 536870912;default:return 16}default:return 16}}var Gt=null,Ko=null,pi=null;function Ia(){if(pi)return pi;var e,t=Ko,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return pi=i.slice(e,1<r?1-r:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function _a(){return!1}function ot(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?hi:_a,this.isPropagationStopped=_a,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=ot(_n),vr=L({},_n,{view:0,detail:0}),jp=ot(vr),qo,Jo,yr,mi=L({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(qo=e.screenX-yr.screenX,Jo=e.screenY-yr.screenY):Jo=qo=0,yr=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),Ta=ot(mi),bp=L({},mi,{dataTransfer:0}),Cp=ot(bp),Np=L({},vr,{relatedTarget:0}),el=ot(Np),Ep=L({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=ot(Ep),Pp=L({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=ot(Pp),Ip=L({},_n,{data:0}),Aa=ot(Ip),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function tl(){return Op}var Rp=L({},vr,{key:function(e){if(e.key){var t=_p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mp=ot(Rp),Fp=L({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oa=ot(Fp),Dp=L({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Bp=ot(Dp),Wp=L({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hp=ot(Wp),$p=L({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=ot($p),Vp=[9,13,27,32],nl=N&&"CompositionEvent"in window,wr=null;N&&"documentMode"in document&&(wr=document.documentMode);var Gp=N&&"TextEvent"in window&&!wr,Ra=N&&(!nl||wr&&8<wr&&11>=wr),Ma=" ",Fa=!1;function Da(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function Qp(e,t){switch(e){case"compositionend":return Ba(t);case"keypress":return t.which!==32?null:(Fa=!0,Ma);case"textInput":return e=t.data,e===Ma&&Fa?null:e;default:return null}}function Zp(e,t){if(Tn)return e==="compositionend"||!nl&&Da(e,t)?(e=Ia(),pi=Ko=Gt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ra&&t.locale!=="ko"?null:t.data;default:return null}}var Yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yp[e.type]:t==="textarea"}function Ha(e,t,n,r){aa(r),t=wi(t,"onChange"),0<t.length&&(n=new Xo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kr=null,Sr=null;function Kp(e){lu(e,0)}function gi(e){var t=Fn(e);if(Ks(t))return e}function Xp(e,t){if(e==="change")return t}var $a=!1;if(N){var rl;if(N){var il="oninput"in document;if(!il){var Ua=document.createElement("div");Ua.setAttribute("oninput","return;"),il=typeof Ua.oninput=="function"}rl=il}else rl=!1;$a=rl&&(!document.documentMode||9<document.documentMode)}function Va(){kr&&(kr.detachEvent("onpropertychange",Ga),Sr=kr=null)}function Ga(e){if(e.propertyName==="value"&&gi(Sr)){var t=[];Ha(t,Sr,e,Mo(e)),pa(Kp,t)}}function qp(e,t,n){e==="focusin"?(Va(),kr=t,Sr=n,kr.attachEvent("onpropertychange",Ga)):e==="focusout"&&Va()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(Sr)}function ef(e,t){if(e==="click")return gi(t)}function tf(e,t){if(e==="input"||e==="change")return gi(t)}function nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:nf;function jr(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!S.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function Qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Za(e,t){var n=Qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qa(n)}}function Ya(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ya(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ka(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rf(e){var t=Ka(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ya(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Za(n,l);var a=Za(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=N&&"documentMode"in document&&11>=document.documentMode,An=null,ll=null,br=null,sl=!1;function Xa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sl||An==null||An!==Jr(r)||(r=An,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&jr(br,r)||(br=r,r=wi(ll,"onSelect"),0<r.length&&(t=new Xo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},al={},qa={};N&&(qa=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function vi(e){if(al[e])return al[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qa)return al[e]=t[n];return e}var Ja=vi("animationend"),eu=vi("animationiteration"),tu=vi("animationstart"),nu=vi("transitionend"),ru=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){ru.set(e,t),w(t,[e])}for(var ul=0;ul<iu.length;ul++){var cl=iu[ul],lf=cl.toLowerCase(),sf=cl[0].toUpperCase()+cl.slice(1);Qt(lf,"on"+sf)}Qt(Ja,"onAnimationEnd"),Qt(eu,"onAnimationIteration"),Qt(tu,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(nu,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),af=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,op(r,t,void 0,e),e.currentTarget=null}function lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var d=r[a],f=d.instance,y=d.currentTarget;if(d=d.listener,f!==l&&i.isPropagationStopped())break e;ou(i,d,y),l=f}else for(a=0;a<r.length;a++){if(d=r[a],f=d.instance,y=d.currentTarget,d=d.listener,f!==l&&i.isPropagationStopped())break e;ou(i,d,y),l=f}}}if(ni)throw e=Wo,ni=!1,Wo=null,e}function ye(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(su(t,e,2,!1),n.add(r))}function dl(e,t,n){var r=0;t&&(r|=4),su(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[yi]){e[yi]=!0,p.forEach(function(n){n!=="selectionchange"&&(af.has(n)||dl(n,!1,e),dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,dl("selectionchange",!1,t))}}function su(e,t,n,r){switch(La(t)){case 1:var i=kp;break;case 4:i=Sp;break;default:i=Zo}n=i.bind(null,t,n,e),i=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;a=a.return}for(;d!==null;){if(a=dn(d),a===null)return;if(f=a.tag,f===5||f===6){r=l=a;continue e}d=d.parentNode}}r=r.return}pa(function(){var y=l,C=Mo(n),E=[];e:{var b=ru.get(e);if(b!==void 0){var T=Xo,O=e;switch(e){case"keypress":if(fi(n)===0)break e;case"keydown":case"keyup":T=Mp;break;case"focusin":O="focus",T=el;break;case"focusout":O="blur",T=el;break;case"beforeblur":case"afterblur":T=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Bp;break;case Ja:case eu:case tu:T=zp;break;case nu:T=Hp;break;case"scroll":T=jp;break;case"wheel":T=Up;break;case"copy":case"cut":case"paste":T=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Oa}var M=(t&4)!==0,Te=!M&&e==="scroll",x=M?b!==null?b+"Capture":null:b;M=[];for(var m=y,v;m!==null;){v=m;var z=v.stateNode;if(v.tag===5&&z!==null&&(v=z,x!==null&&(z=ar(m,x),z!=null&&M.push(Er(m,z,v)))),Te)break;m=m.return}0<M.length&&(b=new T(b,O,null,n,C),E.push({event:b,listeners:M}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",b&&n!==Ro&&(O=n.relatedTarget||n.fromElement)&&(dn(O)||O[Tt]))break e;if((T||b)&&(b=C.window===C?C:(b=C.ownerDocument)?b.defaultView||b.parentWindow:window,T?(O=n.relatedTarget||n.toElement,T=y,O=O?dn(O):null,O!==null&&(Te=cn(O),O!==Te||O.tag!==5&&O.tag!==6)&&(O=null)):(T=null,O=y),T!==O)){if(M=Ta,z="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=Oa,z="onPointerLeave",x="onPointerEnter",m="pointer"),Te=T==null?b:Fn(T),v=O==null?b:Fn(O),b=new M(z,m+"leave",T,n,C),b.target=Te,b.relatedTarget=v,z=null,dn(C)===y&&(M=new M(x,m+"enter",O,n,C),M.target=v,M.relatedTarget=Te,z=M),Te=z,T&&O)t:{for(M=T,x=O,m=0,v=M;v;v=Rn(v))m++;for(v=0,z=x;z;z=Rn(z))v++;for(;0<m-v;)M=Rn(M),m--;for(;0<v-m;)x=Rn(x),v--;for(;m--;){if(M===x||x!==null&&M===x.alternate)break t;M=Rn(M),x=Rn(x)}M=null}else M=null;T!==null&&au(E,b,T,M,!1),O!==null&&Te!==null&&au(E,Te,O,M,!0)}}e:{if(b=y?Fn(y):window,T=b.nodeName&&b.nodeName.toLowerCase(),T==="select"||T==="input"&&b.type==="file")var D=Xp;else if(Wa(b))if($a)D=tf;else{D=Jp;var Q=qp}else(T=b.nodeName)&&T.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(D=ef);if(D&&(D=D(e,y))){Ha(E,D,n,C);break e}Q&&Q(e,b,y),e==="focusout"&&(Q=b._wrapperState)&&Q.controlled&&b.type==="number"&&Io(b,"number",b.value)}switch(Q=y?Fn(y):window,e){case"focusin":(Wa(Q)||Q.contentEditable==="true")&&(An=Q,ll=y,br=null);break;case"focusout":br=ll=An=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,Xa(E,n,C);break;case"selectionchange":if(of)break;case"keydown":case"keyup":Xa(E,n,C)}var Z;if(nl)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Tn?Da(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(Ra&&n.locale!=="ko"&&(Tn||q!=="onCompositionStart"?q==="onCompositionEnd"&&Tn&&(Z=Ia()):(Gt=C,Ko="value"in Gt?Gt.value:Gt.textContent,Tn=!0)),Q=wi(y,q),0<Q.length&&(q=new Aa(q,e,null,n,C),E.push({event:q,listeners:Q}),Z?q.data=Z:(Z=Ba(n),Z!==null&&(q.data=Z)))),(Z=Gp?Qp(e,n):Zp(e,n))&&(y=wi(y,"onBeforeInput"),0<y.length&&(C=new Aa("onBeforeInput","beforeinput",null,n,C),E.push({event:C,listeners:y}),C.data=Z))}lu(E,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ar(e,n),l!=null&&r.unshift(Er(e,l,i)),l=ar(e,t),l!=null&&r.push(Er(e,l,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var d=n,f=d.alternate,y=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&y!==null&&(d=y,i?(f=ar(n,l),f!=null&&a.unshift(Er(n,f,d))):i||(f=ar(n,l),f!=null&&a.push(Er(n,f,d)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var uf=/\r\n?/g,cf=/\u0000|\uFFFD/g;function uu(e){return(typeof e=="string"?e:""+e).replace(uf,`
`).replace(cf,"")}function ki(e,t,n){if(t=uu(t),uu(e)!==t&&n)throw Error(c(425))}function Si(){}var fl=null,hl=null;function ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,pf=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(ff)}:gl;function ff(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),zt="__reactFiber$"+Mn,zr="__reactProps$"+Mn,Tt="__reactContainer$"+Mn,vl="__reactEvents$"+Mn,hf="__reactListeners$"+Mn,mf="__reactHandles$"+Mn;function dn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=du(e);e!==null;){if(n=e[zt])return n;e=du(e)}return t}e=n,n=e.parentNode}return null}function Pr(e){return e=e[zt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ji(e){return e[zr]||null}var yl=[],Dn=-1;function Yt(e){return{current:e}}function we(e){0>Dn||(e.current=yl[Dn],yl[Dn]=null,Dn--)}function ve(e,t){Dn++,yl[Dn]=e.current,e.current=t}var Kt={},Qe=Yt(Kt),Je=Yt(!1),pn=Kt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function bi(){we(Je),we(Qe)}function pu(e,t,n){if(Qe.current!==Kt)throw Error(c(168));ve(Qe,t),ve(Je,n)}function fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(c(108,se(e)||"Unknown",i));return L({},n,r)}function Ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,pn=Qe.current,ve(Qe,e),ve(Je,Je.current),!0}function hu(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=fu(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,we(Je),we(Qe),ve(Qe,e)):we(Je),ve(Je,n)}var At=null,Ni=!1,wl=!1;function mu(e){At===null?At=[e]:At.push(e)}function gf(e){Ni=!0,mu(e)}function Xt(){if(!wl&&At!==null){wl=!0;var e=0,t=ge;try{var n=At;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Ni=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),xa(Ho,Xt),i}finally{ge=t,wl=!1}}return null}var Wn=[],Hn=0,Ei=null,zi=0,ct=[],dt=0,fn=null,Ot=1,Rt="";function hn(e,t){Wn[Hn++]=zi,Wn[Hn++]=Ei,Ei=e,zi=t}function gu(e,t,n){ct[dt++]=Ot,ct[dt++]=Rt,ct[dt++]=fn,fn=e;var r=Ot;e=Rt;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var l=32-vt(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ot=1<<32-vt(t)+i|n<<i|r,Rt=l+e}else Ot=1<<l|n<<i|r,Rt=e}function kl(e){e.return!==null&&(hn(e,1),gu(e,1,0))}function Sl(e){for(;e===Ei;)Ei=Wn[--Hn],Wn[Hn]=null,zi=Wn[--Hn],Wn[Hn]=null;for(;e===fn;)fn=ct[--dt],ct[dt]=null,Rt=ct[--dt],ct[dt]=null,Ot=ct[--dt],ct[dt]=null}var lt=null,st=null,Se=!1,wt=null;function xu(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,st=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:Ot,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,st=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(Se){var t=st;if(t){var n=t;if(!vu(e,t)){if(jl(e))throw Error(c(418));t=Zt(n.nextSibling);var r=lt;t&&vu(e,t)?xu(r,n):(e.flags=e.flags&-4097|2,Se=!1,lt=e)}}else{if(jl(e))throw Error(c(418));e.flags=e.flags&-4097|2,Se=!1,lt=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function Pi(e){if(e!==lt)return!1;if(!Se)return yu(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ml(e.type,e.memoizedProps)),t&&(t=st)){if(jl(e))throw wu(),Error(c(418));for(;t;)xu(e,t),t=Zt(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=lt?Zt(e.stateNode.nextSibling):null;return!0}function wu(){for(var e=st;e;)e=Zt(e.nextSibling)}function $n(){st=lt=null,Se=!1}function Cl(e){wt===null?wt=[e]:wt.push(e)}var xf=de.ReactCurrentBatchConfig;function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var d=i.refs;a===null?delete d[l]:d[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function Su(e){function t(x,m){if(e){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=ln(x,m),x.index=0,x.sibling=null,x}function l(x,m,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function d(x,m,v,z){return m===null||m.tag!==6?(m=gs(v,x.mode,z),m.return=x,m):(m=i(m,v),m.return=x,m)}function f(x,m,v,z){var D=v.type;return D===_?C(x,m,v.props.children,z,v.key):m!==null&&(m.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Me&&ku(D)===m.type)?(z=i(m,v.props),z.ref=Lr(x,m,v),z.return=x,z):(z=eo(v.type,v.key,v.props,null,x.mode,z),z.ref=Lr(x,m,v),z.return=x,z)}function y(x,m,v,z){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=xs(v,x.mode,z),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function C(x,m,v,z,D){return m===null||m.tag!==7?(m=Sn(v,x.mode,z,D),m.return=x,m):(m=i(m,v),m.return=x,m)}function E(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=gs(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case le:return v=eo(m.type,m.key,m.props,null,x.mode,v),v.ref=Lr(x,null,m),v.return=x,v;case re:return m=xs(m,x.mode,v),m.return=x,m;case Me:var z=m._init;return E(x,z(m._payload),v)}if(or(m)||W(m))return m=Sn(m,x.mode,v,null),m.return=x,m;Li(x,m)}return null}function b(x,m,v,z){var D=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:d(x,m,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case le:return v.key===D?f(x,m,v,z):null;case re:return v.key===D?y(x,m,v,z):null;case Me:return D=v._init,b(x,m,D(v._payload),z)}if(or(v)||W(v))return D!==null?null:C(x,m,v,z,null);Li(x,v)}return null}function T(x,m,v,z,D){if(typeof z=="string"&&z!==""||typeof z=="number")return x=x.get(v)||null,d(m,x,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case le:return x=x.get(z.key===null?v:z.key)||null,f(m,x,z,D);case re:return x=x.get(z.key===null?v:z.key)||null,y(m,x,z,D);case Me:var Q=z._init;return T(x,m,v,Q(z._payload),D)}if(or(z)||W(z))return x=x.get(v)||null,C(m,x,z,D,null);Li(m,z)}return null}function O(x,m,v,z){for(var D=null,Q=null,Z=m,q=m=0,$e=null;Z!==null&&q<v.length;q++){Z.index>q?($e=Z,Z=null):$e=Z.sibling;var pe=b(x,Z,v[q],z);if(pe===null){Z===null&&(Z=$e);break}e&&Z&&pe.alternate===null&&t(x,Z),m=l(pe,m,q),Q===null?D=pe:Q.sibling=pe,Q=pe,Z=$e}if(q===v.length)return n(x,Z),Se&&hn(x,q),D;if(Z===null){for(;q<v.length;q++)Z=E(x,v[q],z),Z!==null&&(m=l(Z,m,q),Q===null?D=Z:Q.sibling=Z,Q=Z);return Se&&hn(x,q),D}for(Z=r(x,Z);q<v.length;q++)$e=T(Z,x,q,v[q],z),$e!==null&&(e&&$e.alternate!==null&&Z.delete($e.key===null?q:$e.key),m=l($e,m,q),Q===null?D=$e:Q.sibling=$e,Q=$e);return e&&Z.forEach(function(sn){return t(x,sn)}),Se&&hn(x,q),D}function M(x,m,v,z){var D=W(v);if(typeof D!="function")throw Error(c(150));if(v=D.call(v),v==null)throw Error(c(151));for(var Q=D=null,Z=m,q=m=0,$e=null,pe=v.next();Z!==null&&!pe.done;q++,pe=v.next()){Z.index>q?($e=Z,Z=null):$e=Z.sibling;var sn=b(x,Z,pe.value,z);if(sn===null){Z===null&&(Z=$e);break}e&&Z&&sn.alternate===null&&t(x,Z),m=l(sn,m,q),Q===null?D=sn:Q.sibling=sn,Q=sn,Z=$e}if(pe.done)return n(x,Z),Se&&hn(x,q),D;if(Z===null){for(;!pe.done;q++,pe=v.next())pe=E(x,pe.value,z),pe!==null&&(m=l(pe,m,q),Q===null?D=pe:Q.sibling=pe,Q=pe);return Se&&hn(x,q),D}for(Z=r(x,Z);!pe.done;q++,pe=v.next())pe=T(Z,x,q,pe.value,z),pe!==null&&(e&&pe.alternate!==null&&Z.delete(pe.key===null?q:pe.key),m=l(pe,m,q),Q===null?D=pe:Q.sibling=pe,Q=pe);return e&&Z.forEach(function(Kf){return t(x,Kf)}),Se&&hn(x,q),D}function Te(x,m,v,z){if(typeof v=="object"&&v!==null&&v.type===_&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case le:e:{for(var D=v.key,Q=m;Q!==null;){if(Q.key===D){if(D=v.type,D===_){if(Q.tag===7){n(x,Q.sibling),m=i(Q,v.props.children),m.return=x,x=m;break e}}else if(Q.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Me&&ku(D)===Q.type){n(x,Q.sibling),m=i(Q,v.props),m.ref=Lr(x,Q,v),m.return=x,x=m;break e}n(x,Q);break}else t(x,Q);Q=Q.sibling}v.type===_?(m=Sn(v.props.children,x.mode,z,v.key),m.return=x,x=m):(z=eo(v.type,v.key,v.props,null,x.mode,z),z.ref=Lr(x,m,v),z.return=x,x=z)}return a(x);case re:e:{for(Q=v.key;m!==null;){if(m.key===Q)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=xs(v,x.mode,z),m.return=x,x=m}return a(x);case Me:return Q=v._init,Te(x,m,Q(v._payload),z)}if(or(v))return O(x,m,v,z);if(W(v))return M(x,m,v,z);Li(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,v),m.return=x,x=m):(n(x,m),m=gs(v,x.mode,z),m.return=x,x=m),a(x)):n(x,m)}return Te}var Un=Su(!0),ju=Su(!1),Ii=Yt(null),_i=null,Vn=null,Nl=null;function El(){Nl=Vn=_i=null}function zl(e){var t=Ii.current;we(Ii),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){_i=e,Nl=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(_i===null)throw Error(c(308));Vn=e,_i.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var mn=null;function Ll(e){mn===null?mn=[e]:mn.push(e)}function bu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ll(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ce&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ll(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vo(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ai(e,t,n,r){var i=e.updateQueue;qt=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var f=d,y=f.next;f.next=null,a===null?l=y:a.next=y,a=f;var C=e.alternate;C!==null&&(C=C.updateQueue,d=C.lastBaseUpdate,d!==a&&(d===null?C.firstBaseUpdate=y:d.next=y,C.lastBaseUpdate=f))}if(l!==null){var E=i.baseState;a=0,C=y=f=null,d=l;do{var b=d.lane,T=d.eventTime;if((r&b)===b){C!==null&&(C=C.next={eventTime:T,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var O=e,M=d;switch(b=t,T=n,M.tag){case 1:if(O=M.payload,typeof O=="function"){E=O.call(T,E,b);break e}E=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=M.payload,b=typeof O=="function"?O.call(T,E,b):O,b==null)break e;E=L({},E,b);break e;case 2:qt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[d]:b.push(d))}else T={eventTime:T,lane:b,tag:d.tag,payload:d.payload,callback:d.callback,next:null},C===null?(y=C=T,f=E):C=C.next=T,a|=b;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;b=d,d=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(C===null&&(f=E),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);vn|=a,e.lanes=a,e.memoizedState=E}}function Eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(c(191,i));i.call(r)}}}var Ir={},Pt=Yt(Ir),_r=Yt(Ir),Tr=Yt(Ir);function gn(e){if(e===Ir)throw Error(c(174));return e}function _l(e,t){switch(ve(Tr,t),ve(_r,e),ve(Pt,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:To(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=To(t,e)}we(Pt),ve(Pt,t)}function Qn(){we(Pt),we(_r),we(Tr)}function zu(e){gn(Tr.current);var t=gn(Pt.current),n=To(t,e.type);t!==n&&(ve(_r,e),ve(Pt,n))}function Tl(e){_r.current===e&&(we(Pt),we(_r))}var Ce=Yt(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function Ol(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Ri=de.ReactCurrentDispatcher,Rl=de.ReactCurrentBatchConfig,xn=0,Ne=null,Fe=null,We=null,Mi=!1,Ar=!1,Or=0,vf=0;function Ze(){throw Error(c(321))}function Ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,i,l){if(xn=l,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Sf:jf,e=n(r,i),Ar){l=0;do{if(Ar=!1,Or=0,25<=l)throw Error(c(301));l+=1,We=Fe=null,t.updateQueue=null,Ri.current=bf,e=n(r,i)}while(Ar)}if(Ri.current=Bi,t=Fe!==null&&Fe.next!==null,xn=0,We=Fe=Ne=null,Mi=!1,t)throw Error(c(300));return e}function Dl(){var e=Or!==0;return Or=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ne.memoizedState=We=e:We=We.next=e,We}function ft(){if(Fe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ne.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(c(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ne.memoizedState=We=e:We=We.next=e}return We}function Rr(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ft(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var d=a=null,f=null,y=l;do{var C=y.lane;if((xn&C)===C)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var E={lane:C,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(d=f=E,a=r):f=f.next=E,Ne.lanes|=C,vn|=C}y=y.next}while(y!==null&&y!==l);f===null?a=r:f.next=d,yt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Ne.lanes|=l,vn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=ft(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);yt(l,t.memoizedState)||(tt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Pu(){}function Lu(e,t){var n=Ne,r=ft(),i=t(),l=!yt(r.memoizedState,i);if(l&&(r.memoizedState=i,tt=!0),r=r.queue,Hl(Tu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Mr(9,_u.bind(null,n,r,i,t),void 0,null),He===null)throw Error(c(349));(xn&30)!==0||Iu(n,t,i)}return i}function Iu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _u(e,t,n,r){t.value=n,t.getSnapshot=r,Au(t)&&Ou(e)}function Tu(e,t,n){return n(function(){Au(t)&&Ou(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Ou(e){var t=Mt(e,1);t!==null&&bt(t,e,1,-1)}function Ru(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=kf.bind(null,Ne,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mu(){return ft().memoizedState}function Fi(e,t,n,r){var i=Lt();Ne.flags|=e,i.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function Di(e,t,n,r){var i=ft();r=r===void 0?null:r;var l=void 0;if(Fe!==null){var a=Fe.memoizedState;if(l=a.destroy,r!==null&&Ml(r,a.deps)){i.memoizedState=Mr(t,n,l,r);return}}Ne.flags|=e,i.memoizedState=Mr(1|t,n,l,r)}function Fu(e,t){return Fi(8390656,8,e,t)}function Hl(e,t){return Di(2048,8,e,t)}function Du(e,t){return Di(4,2,e,t)}function Bu(e,t){return Di(4,4,e,t)}function Wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hu(e,t,n){return n=n!=null?n.concat([e]):null,Di(4,4,Wu.bind(null,t,e),n)}function $l(){}function $u(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uu(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vu(e,t,n){return(xn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(yt(n,t)||(n=ka(),Ne.lanes|=n,vn|=n,e.baseState=!0),t)}function yf(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),t()}finally{ge=n,Rl.transition=r}}function Gu(){return ft().memoizedState}function wf(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qu(e))Zu(t,n);else if(n=bu(e,t,n,r),n!==null){var i=qe();bt(n,e,r,i),Yu(n,t,r)}}function kf(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))Zu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,d=l(a,n);if(i.hasEagerState=!0,i.eagerState=d,yt(d,a)){var f=t.interleaved;f===null?(i.next=i,Ll(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}n=bu(e,t,i,r),n!==null&&(i=qe(),bt(n,e,r,i),Yu(n,t,r))}}function Qu(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Zu(e,t){Ar=Mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vo(e,n)}}var Bi={readContext:pt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Sf={readContext:pt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4194308,4,Wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fi(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wf.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:$l,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=yf.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=Lt();if(Se){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),He===null)throw Error(c(349));(xn&30)!==0||Iu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Fu(Tu.bind(null,r,l,e),[e]),r.flags|=2048,Mr(9,_u.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Lt(),t=He.identifierPrefix;if(Se){var n=Rt,r=Ot;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jf={readContext:pt,useCallback:$u,useContext:pt,useEffect:Hl,useImperativeHandle:Hu,useInsertionEffect:Du,useLayoutEffect:Bu,useMemo:Uu,useReducer:Bl,useRef:Mu,useState:function(){return Bl(Rr)},useDebugValue:$l,useDeferredValue:function(e){var t=ft();return Vu(t,Fe.memoizedState,e)},useTransition:function(){var e=Bl(Rr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Lu,useId:Gu,unstable_isNewReconciler:!1},bf={readContext:pt,useCallback:$u,useContext:pt,useEffect:Hl,useImperativeHandle:Hu,useInsertionEffect:Du,useLayoutEffect:Bu,useMemo:Uu,useReducer:Wl,useRef:Mu,useState:function(){return Wl(Rr)},useDebugValue:$l,useDeferredValue:function(e){var t=ft();return Fe===null?t.memoizedState=e:Vu(t,Fe.memoizedState,e)},useTransition:function(){var e=Wl(Rr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Lu,useId:Gu,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wi={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=rn(e),l=Ft(r,i);l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,i),t!==null&&(bt(t,e,i,r),Ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=rn(e),l=Ft(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,i),t!==null&&(bt(t,e,i,r),Ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=rn(e),i=Ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(bt(t,e,r,n),Ti(t,e,r))}};function Ku(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,l):!0}function Xu(e,t,n){var r=!1,i=Kt,l=t.contextType;return typeof l=="object"&&l!==null?l=pt(l):(i=et(t)?pn:Qe.current,r=t.contextTypes,l=(r=r!=null)?Bn(e,i):Kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function qu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Il(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=pt(l):(l=et(t)?pn:Qe.current,i.context=Bn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ul(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wi.enqueueReplaceState(i,i.state,null),Ai(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=K(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function Ju(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,as=r),Ql(e,t)},n}function ec(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Df.bind(null,e,t,n),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Nf=de.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?ju(t,null,n,r):Un(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var l=t.ref;return Gn(t,i),r=Fl(e,t,n,r,l,i),n=Dl(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(Se&&n&&kl(t),t.flags|=1,Xe(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ms(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,lc(e,t,l,r,i)):(e=eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(a,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=ln(l,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(jr(l,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return Zl(e,t,n,r,i)}function sc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Kn,at),at|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Kn,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ve(Kn,at),at|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ve(Kn,at),at|=r;return Xe(e,t,i,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,n,r,i){var l=et(n)?pn:Qe.current;return l=Bn(t,l),Gn(t,i),n=Fl(e,t,n,r,l,i),r=Dl(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(Se&&r&&kl(t),t.flags|=1,Xe(e,t,n,i),t.child)}function uc(e,t,n,r,i){if(et(n)){var l=!0;Ci(t)}else l=!1;if(Gn(t,i),t.stateNode===null)$i(e,t),Xu(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,d=t.memoizedProps;a.props=d;var f=a.context,y=n.contextType;typeof y=="object"&&y!==null?y=pt(y):(y=et(n)?pn:Qe.current,y=Bn(t,y));var C=n.getDerivedStateFromProps,E=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function";E||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==r||f!==y)&&qu(t,a,r,y),qt=!1;var b=t.memoizedState;a.state=b,Ai(t,r,a,i),f=t.memoizedState,d!==r||b!==f||Je.current||qt?(typeof C=="function"&&(Ul(t,n,C,r),f=t.memoizedState),(d=qt||Ku(t,n,d,r,b,f,y))?(E||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=y,r=d):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cu(e,t),d=t.memoizedProps,y=t.type===t.elementType?d:kt(t.type,d),a.props=y,E=t.pendingProps,b=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=pt(f):(f=et(n)?pn:Qe.current,f=Bn(t,f));var T=n.getDerivedStateFromProps;(C=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==E||b!==f)&&qu(t,a,r,f),qt=!1,b=t.memoizedState,a.state=b,Ai(t,r,a,i);var O=t.memoizedState;d!==E||b!==O||Je.current||qt?(typeof T=="function"&&(Ul(t,n,T,r),O=t.memoizedState),(y=qt||Ku(t,n,y,r,b,O,f)||!1)?(C||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,O,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,O,f)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=O),a.props=r,a.state=O,a.context=f,r=y):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,l,i)}function Yl(e,t,n,r,i,l){ac(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&hu(t,n,!1),Dt(e,t,l);r=t.stateNode,Nf.current=t;var d=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Un(t,e.child,null,l),t.child=Un(t,null,d,l)):Xe(e,t,d,l),t.memoizedState=r.state,i&&hu(t,n,!0),t.child}function cc(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),_l(e,t.containerInfo)}function dc(e,t,n,r,i){return $n(),Cl(i),t.flags|=256,Xe(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pc(e,t,n){var r=t.pendingProps,i=Ce.current,l=!1,a=(t.flags&128)!==0,d;if((d=a)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ce,i&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=a):l=to(a,r,0,null),e=Sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Xl(n),t.memoizedState=Kl,e):ql(t,a));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Ef(e,t,a,r,d,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,d=i.sibling;var f={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=ln(i,f),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=ln(d,l):(l=Sn(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Xl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return l=e.child,e=l.sibling,r=ln(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ql(e,t){return t=to({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hi(e,t,n,r){return r!==null&&Cl(r),Un(t,e.child,null,n),e=ql(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ef(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(c(422))),Hi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=to({mode:"visible",children:r.children},i,0,null),l=Sn(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Un(t,e.child,null,a),t.child.memoizedState=Xl(a),t.memoizedState=Kl,l);if((t.mode&1)===0)return Hi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(c(419)),r=Gl(l,r,void 0),Hi(e,t,a,r)}if(d=(a&e.childLanes)!==0,tt||d){if(r=He,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Mt(e,i),bt(r,e,i,-1))}return hs(),r=Gl(Error(c(421))),Hi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Bf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,st=Zt(i.nextSibling),lt=t,Se=!0,wt=null,e!==null&&(ct[dt++]=Ot,ct[dt++]=Rt,ct[dt++]=fn,Ot=e.id,Rt=e.overflow,fn=t),t=ql(t,r.children),t.flags|=4096,t)}function fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function Jl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function hc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Xe(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fc(e,n,t);else if(e.tag===19)fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jl(t,!0,n,null,l);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zf(e,t,n){switch(t.tag){case 3:cc(t),$n();break;case 5:zu(t);break;case 1:et(t.type)&&Ci(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Ii,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?pc(e,t,n):(ve(Ce,Ce.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return hc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,sc(e,t,n)}return Dt(e,t,n)}var mc,es,gc,xc;mc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},es=function(){},gc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(Pt.current);var l=null;switch(n){case"input":i=Po(e,i),r=Po(e,r),l=[];break;case"select":i=L({},i,{value:void 0}),r=L({},r,{value:void 0}),l=[];break;case"textarea":i=_o(e,i),r=_o(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}Ao(n,r);var a;n=null;for(y in i)if(!r.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var d=i[y];for(a in d)d.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(h.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in r){var f=r[y];if(d=i!=null?i[y]:void 0,r.hasOwnProperty(y)&&f!==d&&(f!=null||d!=null))if(y==="style")if(d){for(a in d)!d.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&d[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(l||(l=[]),l.push(y,n)),n=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(l=l||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(h.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&ye("scroll",e),l||d===f||(l=[])):(l=l||[]).push(y,f))}n&&(l=l||[]).push("style",n);var y=l;(t.updateQueue=y)&&(t.flags|=4)}},xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pf(e,t,n){var r=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return et(t.type)&&bi(),Ye(t),null;case 3:return r=t.stateNode,Qn(),we(Je),we(Qe),Ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(ds(wt),wt=null))),es(e,t),Ye(t),null;case 5:Tl(t);var i=gn(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)gc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Ye(t),null}if(e=gn(Pt.current),Pi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[zt]=t,r[zr]=l,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Cr.length;i++)ye(Cr[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Xs(r,l),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ye("invalid",r);break;case"textarea":ea(r,l),ye("invalid",r)}Ao(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&ki(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&ki(r.textContent,d,e),i=["children",""+d]):h.hasOwnProperty(a)&&d!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":qr(r),Js(r,l,!0);break;case"textarea":qr(r),na(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Si)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ra(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[zr]=r,mc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Oo(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cr.length;i++)ye(Cr[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":Xs(e,r),i=Po(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=L({},r,{value:void 0}),ye("invalid",e);break;case"textarea":ea(e,r),i=_o(e,r),ye("invalid",e);break;default:i=r}Ao(n,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var f=d[l];l==="style"?la(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&ia(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&lr(e,f):typeof f=="number"&&lr(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(h.hasOwnProperty(l)?f!=null&&l==="onScroll"&&ye("scroll",e):f!=null&&fe(e,l,f,a))}switch(n){case"input":qr(e),Js(e,r,!1);break;case"textarea":qr(e),na(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?zn(e,!!r.multiple,l,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=gn(Tr.current),gn(Pt.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(l=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ye(t),null;case 13:if(we(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)wu(),$n(),t.flags|=98560,l=!1;else if(l=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[zt]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),l=!1}else wt!==null&&(ds(wt),wt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?De===0&&(De=3):hs())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Qn(),es(e,t),e===null&&Nr(t.stateNode.containerInfo),Ye(t),null;case 10:return zl(t.type._context),Ye(t),null;case 17:return et(t.type)&&bi(),Ye(t),null;case 19:if(we(Ce),l=t.memoizedState,l===null)return Ye(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Fr(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Oi(e),a!==null){for(t.flags|=128,Fr(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&_e()>Xn&&(t.flags|=128,r=!0,Fr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!Se)return Ye(t),null}else 2*_e()-l.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,Fr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=_e(),t.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Lf(e,t){switch(Sl(t),t.tag){case 1:return et(t.type)&&bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),we(Je),we(Qe),Ol(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if(we(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ce),null;case 4:return Qn(),null;case 10:return zl(t.type._context),null;case 22:case 23:return fs(),null;case 24:return null;default:return null}}var Ui=!1,Ke=!1,If=typeof WeakSet=="function"?WeakSet:Set,A=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function ts(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var vc=!1;function _f(e,t){if(fl=ci,e=Ka(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,d=-1,f=-1,y=0,C=0,E=e,b=null;t:for(;;){for(var T;E!==n||i!==0&&E.nodeType!==3||(d=a+i),E!==l||r!==0&&E.nodeType!==3||(f=a+r),E.nodeType===3&&(a+=E.nodeValue.length),(T=E.firstChild)!==null;)b=E,E=T;for(;;){if(E===e)break t;if(b===n&&++y===i&&(d=a),b===l&&++C===r&&(f=a),(T=E.nextSibling)!==null)break;E=b,b=E.parentNode}E=T}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},ci=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var M=O.memoizedProps,Te=O.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?M:kt(t.type,M),Te);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(z){Pe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return O=vc,vc=!1,O}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ts(t,n,l)}i=i.next}while(i!==r)}}function Vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ns(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[zr],delete t[vl],delete t[hf],delete t[mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wc(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(rs(e,t,n),e=e.sibling;e!==null;)rs(e,t,n),e=e.sibling}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}var Ue=null,St=!1;function en(e,t,n){for(n=n.child;n!==null;)Sc(e,t,n),n=n.sibling}function Sc(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:Ke||Yn(n,t);case 6:var r=Ue,i=St;Ue=null,en(e,t,n),Ue=r,St=i,Ue!==null&&(St?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(St?(e=Ue,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),xr(e)):xl(Ue,n.stateNode));break;case 4:r=Ue,i=St,Ue=n.stateNode.containerInfo,St=!0,en(e,t,n),Ue=r,St=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&((l&2)!==0||(l&4)!==0)&&ts(n,t,a),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!Ke&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Pe(n,t,d)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,en(e,t,n),Ke=r):en(e,t,n);break;default:en(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new If),t.forEach(function(r){var i=Wf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,d=a;e:for(;d!==null;){switch(d.tag){case 5:Ue=d.stateNode,St=!1;break e;case 3:Ue=d.stateNode.containerInfo,St=!0;break e;case 4:Ue=d.stateNode.containerInfo,St=!0;break e}d=d.return}if(Ue===null)throw Error(c(160));Sc(l,a,i),Ue=null,St=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(y){Pe(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),It(e),r&4){try{Dr(3,e,e.return),Vi(3,e)}catch(M){Pe(e,e.return,M)}try{Dr(5,e,e.return)}catch(M){Pe(e,e.return,M)}}break;case 1:jt(t,e),It(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(jt(t,e),It(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{lr(i,"")}catch(M){Pe(e,e.return,M)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&qs(i,l),Oo(d,a);var y=Oo(d,l);for(a=0;a<f.length;a+=2){var C=f[a],E=f[a+1];C==="style"?la(i,E):C==="dangerouslySetInnerHTML"?ia(i,E):C==="children"?lr(i,E):fe(i,C,E,y)}switch(d){case"input":Lo(i,l);break;case"textarea":ta(i,l);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var T=l.value;T!=null?zn(i,!!l.multiple,T,!1):b!==!!l.multiple&&(l.defaultValue!=null?zn(i,!!l.multiple,l.defaultValue,!0):zn(i,!!l.multiple,l.multiple?[]:"",!1))}i[zr]=l}catch(M){Pe(e,e.return,M)}}break;case 6:if(jt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(M){Pe(e,e.return,M)}}break;case 3:if(jt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(M){Pe(e,e.return,M)}break;case 4:jt(t,e),It(e);break;case 13:jt(t,e),It(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ss=_e())),r&4&&jc(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(y=Ke)||C,jt(t,e),Ke=y):jt(t,e),It(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!C&&(e.mode&1)!==0)for(A=e,C=e.child;C!==null;){for(E=A=C;A!==null;){switch(b=A,T=b.child,b.tag){case 0:case 11:case 14:case 15:Dr(4,b,b.return);break;case 1:Yn(b,b.return);var O=b.stateNode;if(typeof O.componentWillUnmount=="function"){r=b,n=b.return;try{t=r,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(M){Pe(r,n,M)}}break;case 5:Yn(b,b.return);break;case 22:if(b.memoizedState!==null){Ec(E);continue}}T!==null?(T.return=b,A=T):Ec(E)}C=C.sibling}e:for(C=null,E=e;;){if(E.tag===5){if(C===null){C=E;try{i=E.stateNode,y?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=E.stateNode,f=E.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=oa("display",a))}catch(M){Pe(e,e.return,M)}}}else if(E.tag===6){if(C===null)try{E.stateNode.nodeValue=y?"":E.memoizedProps}catch(M){Pe(e,e.return,M)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;C===E&&(C=null),E=E.return}C===E&&(C=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:jt(t,e),It(e),r&4&&jc(e);break;case 21:break;default:jt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wc(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lr(i,""),r.flags&=-33);var l=kc(e);is(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,d=kc(e);rs(e,d,a);break;default:throw Error(c(161))}}catch(f){Pe(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tf(e,t,n){A=e,Cc(e)}function Cc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ui;if(!a){var d=i.alternate,f=d!==null&&d.memoizedState!==null||Ke;d=Ui;var y=Ke;if(Ui=a,(Ke=f)&&!y)for(A=i;A!==null;)a=A,f=a.child,a.tag===22&&a.memoizedState!==null?zc(i):f!==null?(f.return=a,A=f):zc(i);for(;l!==null;)A=l,Cc(l),l=l.sibling;A=i,Ui=d,Ke=y}Nc(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,A=l):Nc(e)}}function Nc(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||Vi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Eu(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Eu(t,a,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var C=y.memoizedState;if(C!==null){var E=C.dehydrated;E!==null&&xr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ke||t.flags&512&&ns(t)}catch(b){Pe(t,t.return,b)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Ec(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function zc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vi(4,t)}catch(f){Pe(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(f){Pe(t,i,f)}}var l=t.return;try{ns(t)}catch(f){Pe(t,l,f)}break;case 5:var a=t.return;try{ns(t)}catch(f){Pe(t,a,f)}}}catch(f){Pe(t,t.return,f)}if(t===e){A=null;break}var d=t.sibling;if(d!==null){d.return=t.return,A=d;break}A=t.return}}var Af=Math.ceil,Gi=de.ReactCurrentDispatcher,os=de.ReactCurrentOwner,ht=de.ReactCurrentBatchConfig,ce=0,He=null,Ae=null,Ve=0,at=0,Kn=Yt(0),De=0,Br=null,vn=0,Qi=0,ls=0,Wr=null,nt=null,ss=0,Xn=1/0,Bt=null,Zi=!1,as=null,tn=null,Yi=!1,nn=null,Ki=0,Hr=0,us=null,Xi=-1,qi=0;function qe(){return(ce&6)!==0?_e():Xi!==-1?Xi:Xi=_e()}function rn(e){return(e.mode&1)===0?1:(ce&2)!==0&&Ve!==0?Ve&-Ve:xf.transition!==null?(qi===0&&(qi=ka()),qi):(e=ge,e!==0||(e=window.event,e=e===void 0?16:La(e.type)),e)}function bt(e,t,n,r){if(50<Hr)throw Hr=0,us=null,Error(c(185));pr(e,n,r),((ce&2)===0||e!==He)&&(e===He&&((ce&2)===0&&(Qi|=n),De===4&&on(e,Ve)),rt(e,r),n===1&&ce===0&&(t.mode&1)===0&&(Xn=_e()+500,Ni&&Xt()))}function rt(e,t){var n=e.callbackNode;gp(e,t);var r=si(e,e===He?Ve:0);if(r===0)n!==null&&va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&va(n),t===1)e.tag===0?gf(Lc.bind(null,e)):mu(Lc.bind(null,e)),pf(function(){(ce&6)===0&&Xt()}),n=null;else{switch(Sa(r)){case 1:n=Ho;break;case 4:n=ya;break;case 16:n=ri;break;case 536870912:n=wa;break;default:n=ri}n=Fc(n,Pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pc(e,t){if(Xi=-1,qi=0,(ce&6)!==0)throw Error(c(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=si(e,e===He?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ji(e,r);else{t=r;var i=ce;ce|=2;var l=_c();(He!==e||Ve!==t)&&(Bt=null,Xn=_e()+500,wn(e,t));do try{Mf();break}catch(d){Ic(e,d)}while(!0);El(),Gi.current=l,ce=i,Ae!==null?t=0:(He=null,Ve=0,t=De)}if(t!==0){if(t===2&&(i=$o(e),i!==0&&(r=i,t=cs(e,i))),t===1)throw n=Br,wn(e,0),on(e,r),rt(e,_e()),n;if(t===6)on(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Of(i)&&(t=Ji(e,r),t===2&&(l=$o(e),l!==0&&(r=l,t=cs(e,l))),t===1))throw n=Br,wn(e,0),on(e,r),rt(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:kn(e,nt,Bt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=ss+500-_e(),10<t)){if(si(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gl(kn.bind(null,e,nt,Bt),t);break}kn(e,nt,Bt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-vt(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Af(r/1960))-r,10<r){e.timeoutHandle=gl(kn.bind(null,e,nt,Bt),r);break}kn(e,nt,Bt);break;case 5:kn(e,nt,Bt);break;default:throw Error(c(329))}}}return rt(e,_e()),e.callbackNode===n?Pc.bind(null,e):null}function cs(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Ji(e,t),e!==2&&(t=nt,nt=n,t!==null&&ds(t)),e}function ds(e){nt===null?nt=e:nt.push.apply(nt,e)}function Of(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!yt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~ls,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Lc(e){if((ce&6)!==0)throw Error(c(327));qn();var t=si(e,0);if((t&1)===0)return rt(e,_e()),null;var n=Ji(e,t);if(e.tag!==0&&n===2){var r=$o(e);r!==0&&(t=r,n=cs(e,r))}if(n===1)throw n=Br,wn(e,0),on(e,t),rt(e,_e()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,nt,Bt),rt(e,_e()),null}function ps(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Xn=_e()+500,Ni&&Xt())}}function yn(e){nn!==null&&nn.tag===0&&(ce&6)===0&&qn();var t=ce;ce|=1;var n=ht.transition,r=ge;try{if(ht.transition=null,ge=1,e)return e()}finally{ge=r,ht.transition=n,ce=t,(ce&6)===0&&Xt()}}function fs(){at=Kn.current,we(Kn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,df(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:Qn(),we(Je),we(Qe),Ol();break;case 5:Tl(r);break;case 4:Qn();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:zl(r.type._context);break;case 22:case 23:fs()}n=n.return}if(He=e,Ae=e=ln(e.current,null),Ve=at=t,De=0,Br=null,ls=Qi=vn=0,nt=Wr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}mn=null}return e}function Ic(e,t){do{var n=Ae;try{if(El(),Ri.current=Bi,Mi){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mi=!1}if(xn=0,We=Fe=Ne=null,Ar=!1,Or=0,os.current=null,n===null||n.return===null){De=1,Br=t,Ae=null;break}e:{var l=e,a=n.return,d=n,f=t;if(t=Ve,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,C=d,E=C.tag;if((C.mode&1)===0&&(E===0||E===11||E===15)){var b=C.alternate;b?(C.updateQueue=b.updateQueue,C.memoizedState=b.memoizedState,C.lanes=b.lanes):(C.updateQueue=null,C.memoizedState=null)}var T=nc(a);if(T!==null){T.flags&=-257,rc(T,a,d,l,t),T.mode&1&&tc(l,y,t),t=T,f=y;var O=t.updateQueue;if(O===null){var M=new Set;M.add(f),t.updateQueue=M}else O.add(f);break e}else{if((t&1)===0){tc(l,y,t),hs();break e}f=Error(c(426))}}else if(Se&&d.mode&1){var Te=nc(a);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),rc(Te,a,d,l,t),Cl(Zn(f,d));break e}}l=f=Zn(f,d),De!==4&&(De=2),Wr===null?Wr=[l]:Wr.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var x=Ju(l,f,t);Nu(l,x);break e;case 1:d=f;var m=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tn===null||!tn.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var z=ec(l,d,t);Nu(l,z);break e}}l=l.return}while(l!==null)}Ac(n)}catch(D){t=D,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function _c(){var e=Gi.current;return Gi.current=Bi,e===null?Bi:e}function hs(){(De===0||De===3||De===2)&&(De=4),He===null||(vn&268435455)===0&&(Qi&268435455)===0||on(He,Ve)}function Ji(e,t){var n=ce;ce|=2;var r=_c();(He!==e||Ve!==t)&&(Bt=null,wn(e,t));do try{Rf();break}catch(i){Ic(e,i)}while(!0);if(El(),ce=n,Gi.current=r,Ae!==null)throw Error(c(261));return He=null,Ve=0,De}function Rf(){for(;Ae!==null;)Tc(Ae)}function Mf(){for(;Ae!==null&&!sp();)Tc(Ae)}function Tc(e){var t=Mc(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?Ac(e):Ae=t,os.current=null}function Ac(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Pf(n,t,at),n!==null){Ae=n;return}}else{if(n=Lf(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);De===0&&(De=5)}function kn(e,t,n){var r=ge,i=ht.transition;try{ht.transition=null,ge=1,Ff(e,t,n,r)}finally{ht.transition=i,ge=r}return null}function Ff(e,t,n,r){do qn();while(nn!==null);if((ce&6)!==0)throw Error(c(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(xp(e,l),e===He&&(Ae=He=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yi||(Yi=!0,Fc(ri,function(){return qn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=ht.transition,ht.transition=null;var a=ge;ge=1;var d=ce;ce|=4,os.current=null,_f(e,n),bc(n,e),rf(hl),ci=!!fl,hl=fl=null,e.current=n,Tf(n),ap(),ce=d,ge=a,ht.transition=l}else e.current=n;if(Yi&&(Yi=!1,nn=e,Ki=i),l=e.pendingLanes,l===0&&(tn=null),dp(n.stateNode),rt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zi)throw Zi=!1,e=as,as=null,e;return(Ki&1)!==0&&e.tag!==0&&qn(),l=e.pendingLanes,(l&1)!==0?e===us?Hr++:(Hr=0,us=e):Hr=0,Xt(),null}function qn(){if(nn!==null){var e=Sa(Ki),t=ht.transition,n=ge;try{if(ht.transition=null,ge=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Ki=0,(ce&6)!==0)throw Error(c(331));var i=ce;for(ce|=4,A=e.current;A!==null;){var l=A,a=l.child;if((A.flags&16)!==0){var d=l.deletions;if(d!==null){for(var f=0;f<d.length;f++){var y=d[f];for(A=y;A!==null;){var C=A;switch(C.tag){case 0:case 11:case 15:Dr(8,C,l)}var E=C.child;if(E!==null)E.return=C,A=E;else for(;A!==null;){C=A;var b=C.sibling,T=C.return;if(yc(C),C===y){A=null;break}if(b!==null){b.return=T,A=b;break}A=T}}}var O=l.alternate;if(O!==null){var M=O.child;if(M!==null){O.child=null;do{var Te=M.sibling;M.sibling=null,M=Te}while(M!==null)}}A=l}}if((l.subtreeFlags&2064)!==0&&a!==null)a.return=l,A=a;else e:for(;A!==null;){if(l=A,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Dr(9,l,l.return)}var x=l.sibling;if(x!==null){x.return=l.return,A=x;break e}A=l.return}}var m=e.current;for(A=m;A!==null;){a=A;var v=a.child;if((a.subtreeFlags&2064)!==0&&v!==null)v.return=a,A=v;else e:for(a=m;A!==null;){if(d=A,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Vi(9,d)}}catch(D){Pe(d,d.return,D)}if(d===a){A=null;break e}var z=d.sibling;if(z!==null){z.return=d.return,A=z;break e}A=d.return}}if(ce=i,Xt(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ii,e)}catch{}r=!0}return r}finally{ge=n,ht.transition=t}}return!1}function Oc(e,t,n){t=Zn(n,t),t=Ju(e,t,1),e=Jt(e,t,1),t=qe(),e!==null&&(pr(e,1,t),rt(e,t))}function Pe(e,t,n){if(e.tag===3)Oc(e,e,n);else for(;t!==null;){if(t.tag===3){Oc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Zn(n,e),e=ec(t,e,1),t=Jt(t,e,1),e=qe(),t!==null&&(pr(t,1,e),rt(t,e));break}}t=t.return}}function Df(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ve&n)===n&&(De===4||De===3&&(Ve&130023424)===Ve&&500>_e()-ss?wn(e,0):ls|=n),rt(e,t)}function Rc(e,t){t===0&&((e.mode&1)===0?t=1:(t=li,li<<=1,(li&130023424)===0&&(li=4194304)));var n=qe();e=Mt(e,t),e!==null&&(pr(e,t,n),rt(e,n))}function Bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rc(e,n)}function Wf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),Rc(e,n)}var Mc;Mc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,zf(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Se&&(t.flags&1048576)!==0&&gu(t,zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$i(e,t),e=t.pendingProps;var i=Bn(t,Qe.current);Gn(t,n),i=Fl(null,t,r,e,i,n);var l=Dl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(l=!0,Ci(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Il(t),i.updater=Wi,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Yl(null,t,r,!0,l,n)):(t.tag=0,Se&&l&&kl(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$f(r),e=kt(r,e),i){case 0:t=Zl(null,t,r,e,n);break e;case 1:t=uc(null,t,r,e,n);break e;case 11:t=ic(null,t,r,e,n);break e;case 14:t=oc(null,t,r,kt(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Zl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),uc(e,t,r,i,n);case 3:e:{if(cc(t),e===null)throw Error(c(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Cu(e,t),Ai(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Zn(Error(c(423)),t),t=dc(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(c(424)),t),t=dc(e,t,r,n,i);break e}else for(st=Zt(t.stateNode.containerInfo.firstChild),lt=t,Se=!0,wt=null,n=ju(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=Dt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return zu(t),e===null&&bl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,ml(r,i)?a=null:l!==null&&ml(r,l)&&(t.flags|=32),ac(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&bl(t),null;case 13:return pc(e,t,n);case 4:return _l(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),ic(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,ve(Ii,r._currentValue),r._currentValue=a,l!==null)if(yt(l.value,a)){if(l.children===i.children&&!Je.current){t=Dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){a=l.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(l.tag===1){f=Ft(-1,n&-n),f.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var C=y.pending;C===null?f.next=f:(f.next=C.next,C.next=f),y.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),Pl(l.return,n,t),d.lanes|=n;break}f=f.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(c(341));a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Pl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gn(t,n),i=pt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),oc(e,t,r,i,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),$i(e,t),t.tag=1,et(r)?(e=!0,Ci(t)):e=!1,Gn(t,n),Xu(t,r,i),Vl(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return hc(e,t,n);case 22:return sc(e,t,n)}throw Error(c(156,t.tag))};function Fc(e,t){return xa(e,t)}function Hf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Hf(e,t,n,r)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===Ge)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")ms(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _:return Sn(n.children,i,l,t);case $:a=8,i|=8;break;case je:return e=mt(12,n,t,i|2),e.elementType=je,e.lanes=l,e;case ie:return e=mt(13,n,t,i),e.elementType=ie,e.lanes=l,e;case Ee:return e=mt(19,n,t,i),e.elementType=Ee,e.lanes=l,e;case xe:return to(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:a=10;break e;case be:a=9;break e;case Ie:a=11;break e;case Ge:a=14;break e;case Me:a=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=mt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Sn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function to(e,t,n,r){return e=mt(22,e,r,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function gs(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function xs(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vs(e,t,n,r,i,l,a,d,f){return e=new Uf(e,t,n,d,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=mt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(l),e}function Vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dc(e){if(!e)return Kt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(et(n))return fu(e,n,t)}return t}function Bc(e,t,n,r,i,l,a,d,f){return e=vs(n,r,!0,e,i,l,a,d,f),e.context=Dc(null),n=e.current,r=qe(),i=rn(n),l=Ft(r,i),l.callback=t??null,Jt(n,l,i),e.current.lanes=i,pr(e,i,r),rt(e,r),e}function no(e,t,n,r){var i=t.current,l=qe(),a=rn(i);return n=Dc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,a),e!==null&&(bt(e,i,a,l),Ti(e,i,a)),a}function ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ys(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}function Gf(){return null}var Hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}io.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));no(e,t,null,null)},io.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){no(null,e,null,null)}),t[Tt]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ca();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&za(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function Qf(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var y=ro(a);l.call(y)}}var a=Bc(t,r,e,0,null,!1,!1,"",$c);return e._reactRootContainer=a,e[Tt]=a.current,Nr(e.nodeType===8?e.parentNode:e),yn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var y=ro(f);d.call(y)}}var f=vs(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=f,e[Tt]=f.current,Nr(e.nodeType===8?e.parentNode:e),yn(function(){no(t,f,n,r)}),f}function lo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var d=i;i=function(){var f=ro(a);d.call(f)}}no(t,a,e,i)}else a=Qf(n,t,e,i,r);return ro(a)}ja=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Vo(t,n|1),rt(t,_e()),(ce&6)===0&&(Xn=_e()+500,Xt()))}break;case 13:yn(function(){var r=Mt(e,1);if(r!==null){var i=qe();bt(r,e,1,i)}}),ys(e,1)}},Go=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=qe();bt(t,e,134217728,n)}ys(e,134217728)}},ba=function(e){if(e.tag===13){var t=rn(e),n=Mt(e,t);if(n!==null){var r=qe();bt(n,e,t,r)}ys(e,t)}},Ca=function(){return ge},Na=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},Fo=function(e,t,n){switch(t){case"input":if(Lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ji(r);if(!i)throw Error(c(90));Ks(r),Lo(r,i)}}}break;case"textarea":ta(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}},ca=ps,da=yn;var Zf={usingClientEntryPoint:!1,Events:[Pr,Fn,ji,aa,ua,ps]},$r={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yf={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ma(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||Gf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{ii=so.inject(Yf),Et=so}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf,it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(c(200));return Vf(e,t,null,n)},it.createRoot=function(e,t){if(!ks(e))throw Error(c(299));var n=!1,r="",i=Hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vs(e,1,!1,null,null,n,!1,r,i),e[Tt]=t.current,Nr(e.nodeType===8?e.parentNode:e),new ws(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ma(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return yn(e)},it.hydrate=function(e,t,n){if(!oo(t))throw Error(c(200));return lo(null,e,t,!0,n)},it.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=Hc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bc(t,null,e,1,n??null,i,!1,l,a),e[Tt]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new io(t)},it.render=function(e,t,n){if(!oo(t))throw Error(c(200));return lo(null,e,t,!1,n)},it.unmountComponentAtNode=function(e){if(!oo(e))throw Error(c(40));return e._reactRootContainer?(yn(function(){lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1},it.unstable_batchedUpdates=ps,it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oo(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return lo(e,t,n,!1,r)},it.version="18.3.1-next-f1338f8080-20240426",it}var Xc;function i0(){if(Xc)return bs.exports;Xc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),bs.exports=r0(),bs.exports}var qc;function o0(){if(qc)return ao;qc=1;var o=i0();return ao.createRoot=o.createRoot,ao.hydrateRoot=o.hydrateRoot,ao}var l0=o0(),Le=Hs();const ut=Xf(Le);var xd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jc=ut.createContext&&ut.createContext(xd),s0=["attr","size","title"];function a0(o,u){if(o==null)return{};var c,p,h=u0(o,u);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(o);for(p=0;p<w.length;p++)c=w[p],u.indexOf(c)===-1&&{}.propertyIsEnumerable.call(o,c)&&(h[c]=o[c])}return h}function u0(o,u){if(o==null)return{};var c={};for(var p in o)if({}.hasOwnProperty.call(o,p)){if(u.indexOf(p)!==-1)continue;c[p]=o[p]}return c}function go(){return go=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},go.apply(null,arguments)}function ed(o,u){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);u&&(p=p.filter(function(h){return Object.getOwnPropertyDescriptor(o,h).enumerable})),c.push.apply(c,p)}return c}function xo(o){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?ed(Object(c),!0).forEach(function(p){c0(o,p,c[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):ed(Object(c)).forEach(function(p){Object.defineProperty(o,p,Object.getOwnPropertyDescriptor(c,p))})}return o}function c0(o,u,c){return(u=d0(u))in o?Object.defineProperty(o,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[u]=c,o}function d0(o){var u=p0(o,"string");return typeof u=="symbol"?u:u+""}function p0(o,u){if(typeof o!="object"||!o)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var p=c.call(o,u);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)}function vd(o){return o&&o.map((u,c)=>ut.createElement(u.tag,xo({key:c},u.attr),vd(u.child)))}function ae(o){return u=>ut.createElement(f0,go({attr:xo({},o.attr)},u),vd(o.child))}function f0(o){var u=c=>{var{attr:p,size:h,title:w}=o,j=a0(o,s0),N=h||c.size||"1em",S;return c.className&&(S=c.className),o.className&&(S=(S?S+" ":"")+o.className),ut.createElement("svg",go({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,p,j,{className:S,style:xo(xo({color:o.color||c.color},c.style),o.style),height:N,width:N,xmlns:"http://www.w3.org/2000/svg"}),w&&ut.createElement("title",null,w),o.children)};return Jc!==void 0?ut.createElement(Jc.Consumer,null,c=>u(c)):u(xd)}function yd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}function h0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(o)}function wd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(o)}function Ts(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function kd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(o)}function Sd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(o)}function jd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function m0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(o)}function g0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]},{tag:"path",attr:{d:"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"},child:[]}]})(o)}function $s(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"3 11 22 2 13 21 11 13 3 11"},child:[]}]})(o)}function x0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(o)}function Us(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function _t(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(o)}function bd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function v0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(o)}function y0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function Cd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(o)}function Nd(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(o)}function w0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"22",y1:"12",x2:"18",y2:"12"},child:[]},{tag:"line",attr:{x1:"6",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"6",x2:"12",y2:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"18"},child:[]}]})(o)}function k0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function wo(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function S0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(o)}function bn(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function j0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(o)}function b0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function As(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(o)}function C0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(o)}function td(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(o)}function N0(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function Vs(o){return ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}var ke="-ms-",Zr="-moz-",he="-webkit-",Ed="comm",ko="rule",Gs="decl",E0="@import",z0="@namespace",zd="@keyframes",P0="@layer",Pd=Math.abs,Qs=String.fromCharCode,Os=Object.assign;function L0(o,u){return Be(o,0)^45?(((u<<2^Be(o,0))<<2^Be(o,1))<<2^Be(o,2))<<2^Be(o,3):0}function Ld(o){return o.trim()}function Wt(o,u){return(o=u.exec(o))?o[0]:o}function J(o,u,c){return o.replace(u,c)}function co(o,u,c){return o.indexOf(u,c)}function Be(o,u){return o.charCodeAt(u)|0}function En(o,u,c){return o.slice(u,c)}function Ct(o){return o.length}function Id(o){return o.length}function Gr(o,u){return u.push(o),o}function I0(o,u){return o.map(u).join("")}function nd(o,u){return o.filter(function(c){return!Wt(c,u)})}var So=1,tr=1,_d=0,gt=0,Oe=0,ir="";function jo(o,u,c,p,h,w,j,N){return{value:o,root:u,parent:c,type:p,props:h,children:w,line:So,column:tr,length:j,return:"",siblings:N}}function an(o,u){return Os(jo("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},u)}function Jn(o){for(;o.root;)o=an(o.root,{children:[o]});Gr(o,o.siblings)}function _0(){return Oe}function T0(){return Oe=gt>0?Be(ir,--gt):0,tr--,Oe===10&&(tr=1,So--),Oe}function Nt(){return Oe=gt<_d?Be(ir,gt++):0,tr++,Oe===10&&(tr=1,So++),Oe}function un(){return Be(ir,gt)}function po(){return gt}function bo(o,u){return En(ir,o,u)}function Kr(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A0(o){return So=tr=1,_d=Ct(ir=o),gt=0,[]}function O0(o){return ir="",o}function Es(o){return Ld(bo(gt-1,Rs(o===91?o+2:o===40?o+1:o)))}function R0(o){for(;(Oe=un())&&Oe<33;)Nt();return Kr(o)>2||Kr(Oe)>3?"":" "}function M0(o,u){for(;--u&&Nt()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return bo(o,po()+(u<6&&un()==32&&Nt()==32))}function Rs(o){for(;Nt();)switch(Oe){case o:return gt;case 34:case 39:o!==34&&o!==39&&Rs(Oe);break;case 40:o===41&&Rs(o);break;case 92:Nt();break}return gt}function F0(o,u){for(;Nt()&&o+Oe!==57;)if(o+Oe===84&&un()===47)break;return"/*"+bo(u,gt-1)+"*"+Qs(o===47?o:Nt())}function D0(o){for(;!Kr(un());)Nt();return bo(o,gt)}function B0(o){return O0(fo("",null,null,null,[""],o=A0(o),0,[0],o))}function fo(o,u,c,p,h,w,j,N,S){for(var P=0,B=0,R=j,H=0,ee=0,Y=0,V=1,X=1,oe=1,F=0,fe="",de=h,le=w,re=p,_=fe;X;)switch(Y=F,F=Nt()){case 40:if(Y!=108&&Be(_,R-1)==58){co(_+=J(Es(F),"&","&\f"),"&\f",Pd(P?N[P-1]:0))!=-1&&(oe=-1);break}case 34:case 39:case 91:_+=Es(F);break;case 9:case 10:case 13:case 32:_+=R0(Y);break;case 92:_+=M0(po()-1,7);continue;case 47:switch(un()){case 42:case 47:Gr(W0(F0(Nt(),po()),u,c,S),S),(Kr(Y||1)==5||Kr(un()||1)==5)&&Ct(_)&&En(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*V:N[P++]=Ct(_)*oe;case 125*V:case 59:case 0:switch(F){case 0:case 125:X=0;case 59+B:oe==-1&&(_=J(_,/\f/g,"")),ee>0&&(Ct(_)-R||V===0&&Y===47)&&Gr(ee>32?id(_+";",p,c,R-1,S):id(J(_," ","")+";",p,c,R-2,S),S);break;case 59:_+=";";default:if(Gr(re=rd(_,u,c,P,B,h,N,fe,de=[],le=[],R,w),w),F===123)if(B===0)fo(_,u,re,re,de,w,R,N,le);else{switch(H){case 99:if(Be(_,3)===110)break;case 108:if(Be(_,2)===97)break;default:B=0;case 100:case 109:case 115:}B?fo(o,re,re,p&&Gr(rd(o,re,re,0,0,h,N,fe,h,de=[],R,le),le),h,le,R,N,p?de:le):fo(_,re,re,re,[""],le,0,N,le)}}P=B=ee=0,V=oe=1,fe=_="",R=j;break;case 58:R=1+Ct(_),ee=Y;default:if(V<1){if(F==123)--V;else if(F==125&&V++==0&&T0()==125)continue}switch(_+=Qs(F),F*V){case 38:oe=B>0?1:(_+="\f",-1);break;case 44:N[P++]=(Ct(_)-1)*oe,oe=1;break;case 64:un()===45&&(_+=Es(Nt())),H=un(),B=R=Ct(fe=_+=D0(po())),F++;break;case 45:Y===45&&Ct(_)==2&&(V=0)}}return w}function rd(o,u,c,p,h,w,j,N,S,P,B,R){for(var H=h-1,ee=h===0?w:[""],Y=Id(ee),V=0,X=0,oe=0;V<p;++V)for(var F=0,fe=En(o,H+1,H=Pd(X=j[V])),de=o;F<Y;++F)(de=Ld(X>0?ee[F]+" "+fe:J(fe,/&\f/g,ee[F])))&&(S[oe++]=de);return jo(o,u,c,h===0?ko:N,S,P,B,R)}function W0(o,u,c,p){return jo(o,u,c,Ed,Qs(_0()),En(o,2,-2),0,p)}function id(o,u,c,p,h){return jo(o,u,c,Gs,En(o,0,p),En(o,p+1,-1),p,h)}function Td(o,u,c){switch(L0(o,u)){case 5103:return he+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+o+o;case 4855:return he+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return Zr+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return he+o+Zr+o+ke+o+o;case 5936:switch(Be(o,u+11)){case 114:return he+o+ke+J(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return he+o+ke+J(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return he+o+ke+J(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return he+o+ke+o+o;case 6165:return he+o+ke+"flex-"+o+o;case 5187:return he+o+J(o,/(\w+).+(:[^]+)/,he+"box-$1$2"+ke+"flex-$1$2")+o;case 5443:return he+o+ke+"flex-item-"+J(o,/flex-|-self/g,"")+(Wt(o,/flex-|baseline/)?"":ke+"grid-row-"+J(o,/flex-|-self/g,""))+o;case 4675:return he+o+ke+"flex-line-pack"+J(o,/align-content|flex-|-self/g,"")+o;case 5548:return he+o+ke+J(o,"shrink","negative")+o;case 5292:return he+o+ke+J(o,"basis","preferred-size")+o;case 6060:return he+"box-"+J(o,"-grow","")+he+o+ke+J(o,"grow","positive")+o;case 4554:return he+J(o,/([^-])(transform)/g,"$1"+he+"$2")+o;case 6187:return J(J(J(o,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),o,"")+o;case 5495:case 3959:return J(o,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return J(J(o,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+he+o+o;case 4200:if(!Wt(o,/flex-|baseline/))return ke+"grid-column-align"+En(o,u)+o;break;case 2592:case 3360:return ke+J(o,"template-","")+o;case 4384:case 3616:return c&&c.some(function(p,h){return u=h,Wt(p.props,/grid-\w+-end/)})?~co(o+(c=c[u].value),"span",0)?o:ke+J(o,"-start","")+o+ke+"grid-row-span:"+(~co(c,"span",0)?Wt(c,/\d+/):+Wt(c,/\d+/)-+Wt(o,/\d+/))+";":ke+J(o,"-start","")+o;case 4896:case 4128:return c&&c.some(function(p){return Wt(p.props,/grid-\w+-start/)})?o:ke+J(J(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return J(o,/(.+)-inline(.+)/,he+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(o)-1-u>6)switch(Be(o,u+1)){case 109:if(Be(o,u+4)!==45)break;case 102:return J(o,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Zr+(Be(o,u+3)==108?"$3":"$2-$3"))+o;case 115:return~co(o,"stretch",0)?Td(J(o,"stretch","fill-available"),u,c)+o:o}break;case 5152:case 5920:return J(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,h,w,j,N,S,P){return ke+h+":"+w+P+(j?ke+h+"-span:"+(N?S:+S-+w)+P:"")+o});case 4949:if(Be(o,u+6)===121)return J(o,":",":"+he)+o;break;case 6444:switch(Be(o,Be(o,14)===45?18:11)){case 120:return J(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Be(o,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+ke+"$2box$3")+o;case 100:return J(o,":",":"+ke)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(o,"scroll-","scroll-snap-")+o}return o}function vo(o,u){for(var c="",p=0;p<o.length;p++)c+=u(o[p],p,o,u)||"";return c}function H0(o,u,c,p){switch(o.type){case P0:if(o.children.length)break;case E0:case z0:case Gs:return o.return=o.return||o.value;case Ed:return"";case zd:return o.return=o.value+"{"+vo(o.children,p)+"}";case ko:if(!Ct(o.value=o.props.join(",")))return""}return Ct(c=vo(o.children,p))?o.return=o.value+"{"+c+"}":""}function $0(o){var u=Id(o);return function(c,p,h,w){for(var j="",N=0;N<u;N++)j+=o[N](c,p,h,w)||"";return j}}function U0(o){return function(u){u.root||(u=u.return)&&o(u)}}function V0(o,u,c,p){if(o.length>-1&&!o.return)switch(o.type){case Gs:o.return=Td(o.value,o.length,c);return;case zd:return vo([an(o,{value:J(o.value,"@","@"+he)})],p);case ko:if(o.length)return I0(c=o.props,function(h){switch(Wt(h,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jn(an(o,{props:[J(h,/:(read-\w+)/,":"+Zr+"$1")]})),Jn(an(o,{props:[h]})),Os(o,{props:nd(c,p)});break;case"::placeholder":Jn(an(o,{props:[J(h,/:(plac\w+)/,":"+he+"input-$1")]})),Jn(an(o,{props:[J(h,/:(plac\w+)/,":"+Zr+"$1")]})),Jn(an(o,{props:[J(h,/:(plac\w+)/,ke+"input-$1")]})),Jn(an(o,{props:[h]})),Os(o,{props:nd(c,p)});break}return""})}}var er={},zs,Ps;const nr=typeof process<"u"&&er!==void 0&&(er.REACT_APP_SC_ATTR||er.SC_ATTR)||"data-styled",Ad="active",Od="data-styled-version",Co="6.4.1",Zs=`/*!sc*/
`,Yr=typeof window<"u"&&typeof document<"u";function od(o){if(typeof process<"u"&&er!==void 0){const u=er[o];if(u!==void 0&&u!=="")return u!=="false"}}const G0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ps=(zs=od("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&zs!==void 0?zs:od("SC_DISABLE_SPEEDY"))!==null&&Ps!==void 0?Ps:typeof process>"u"||er===void 0),Q0="sc-keyframes-";function No(o,...u){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${o} for more information.${u.length>0?` Args: ${u.join(", ")}`:""}`)}let ho=new Map,yo=new Map,mo=1;const uo=o=>{if(ho.has(o))return ho.get(o);for(;yo.has(mo);)mo++;const u=mo++;return ho.set(o,u),yo.set(u,o),u},Z0=o=>yo.get(o),Y0=(o,u)=>{mo=u+1,ho.set(o,u),yo.set(u,o)},Ys=Object.freeze([]),rr=Object.freeze({});function K0(o,u,c=rr){return o.theme!==c.theme&&o.theme||u||c.theme}const X0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q0=/(^-|-$)/g;function Rd(o){return o.replace(X0,"-").replace(q0,"")}const J0=/(a)(d)/gi,ld=o=>String.fromCharCode(o+(o>25?39:97));function Md(o){let u,c="";for(u=Math.abs(o);u>52;u=u/52|0)c=ld(u%52)+c;return(ld(u%52)+c).replace(J0,"$1-$2")}const Ms=5381,Cn=(o,u)=>{let c=u.length;for(;c;)o=33*o^u.charCodeAt(--c);return o},Fd=o=>Cn(Ms,o);function eh(o){return Md(Fd(o)>>>0)}function th(o){return o.displayName||o.name||"Component"}function Fs(o){return typeof o=="string"&&!0}function nh(o){return Fs(o)?`styled.${o}`:`Styled(${th(o)})`}const Dd=Symbol.for("react.memo"),rh=Symbol.for("react.forward_ref"),ih={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},oh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lh={[rh]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Dd]:Bd};function sd(o){return("type"in(u=o)&&u.type.$$typeof)===Dd?Bd:"$$typeof"in o?lh[o.$$typeof]:ih;var u}const sh=Object.defineProperty,ah=Object.getOwnPropertyNames,uh=Object.getOwnPropertySymbols,ch=Object.getOwnPropertyDescriptor,dh=Object.getPrototypeOf,ph=Object.prototype;function Wd(o,u,c){if(typeof u!="string"){const p=dh(u);p&&p!==ph&&Wd(o,p,c);const h=ah(u).concat(uh(u)),w=sd(o),j=sd(u);for(let N=0;N<h.length;++N){const S=h[N];if(!(S in oh||c&&c[S]||j&&S in j||w&&S in w)){const P=ch(u,S);try{sh(o,S,P)}catch{}}}}return o}function Eo(o){return typeof o=="function"}function Hd(o){return typeof o=="object"&&"styledComponentId"in o}function Qr(o,u){return o&&u?o+" "+u:o||u||""}function ad(o,u){return o.join("")}function Xr(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Ds(o,u,c=!1){if(!c&&!Xr(o)&&!Array.isArray(o))return u;if(Array.isArray(u))for(let p=0;p<u.length;p++)o[p]=Ds(o[p],u[p]);else if(Xr(u))for(const p in u)o[p]=Ds(o[p],u[p]);return o}function $d(o,u){Object.defineProperty(o,"toString",{value:u})}const fh=class{constructor(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o,this._cGroup=0,this._cIndex=0}indexOfGroup(o){if(o===this._cGroup)return this._cIndex;let u=this._cIndex;if(o>this._cGroup)for(let c=this._cGroup;c<o;c++)u+=this.groupSizes[c];else for(let c=this._cGroup-1;c>=o;c--)u-=this.groupSizes[c];return this._cGroup=o,this._cIndex=u,u}insertRules(o,u){if(o>=this.groupSizes.length){const h=this.groupSizes,w=h.length;let j=w;for(;o>=j;)if(j<<=1,j<0)throw No(16,`${o}`);this.groupSizes=new Uint32Array(j),this.groupSizes.set(h),this.length=j;for(let N=w;N<j;N++)this.groupSizes[N]=0}let c=this.indexOfGroup(o+1),p=0;for(let h=0,w=u.length;h<w;h++)this.tag.insertRule(c,u[h])&&(this.groupSizes[o]++,c++,p++);p>0&&this._cGroup>o&&(this._cIndex+=p)}clearGroup(o){if(o<this.length){const u=this.groupSizes[o],c=this.indexOfGroup(o),p=c+u;this.groupSizes[o]=0;for(let h=c;h<p;h++)this.tag.deleteRule(c);u>0&&this._cGroup>o&&(this._cIndex-=u)}}getGroup(o){let u="";if(o>=this.length||this.groupSizes[o]===0)return u;const c=this.groupSizes[o],p=this.indexOfGroup(o),h=p+c;for(let w=p;w<h;w++)u+=this.tag.getRule(w)+Zs;return u}},hh=`style[${nr}][${Od}="${Co}"]`,mh=new RegExp(`^${nr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ud=o=>typeof ShadowRoot<"u"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11,Bs=o=>{if(!o)return document;if(ud(o))return o;if("getRootNode"in o){const u=o.getRootNode();if(ud(u))return u}return document},gh=(o,u,c)=>{const p=c.split(",");let h;for(let w=0,j=p.length;w<j;w++)(h=p[w])&&o.registerName(u,h)},xh=(o,u)=>{var c;const p=((c=u.textContent)!==null&&c!==void 0?c:"").split(Zs),h=[];for(let w=0,j=p.length;w<j;w++){const N=p[w].trim();if(!N)continue;const S=N.match(mh);if(S){const P=0|parseInt(S[1],10),B=S[2];P!==0&&(Y0(B,P),gh(o,B,S[3]),o.getTag().insertRules(P,h)),h.length=0}else h.push(N)}},Ls=o=>{const u=Bs(o.options.target).querySelectorAll(hh);for(let c=0,p=u.length;c<p;c++){const h=u[c];h&&h.getAttribute(nr)!==Ad&&(xh(o,h),h.parentNode&&h.parentNode.removeChild(h))}};let Vr=!1;function vh(){if(Vr!==!1)return Vr;if(typeof document<"u"){const o=document.head.querySelector('meta[property="csp-nonce"]');if(o)return Vr=o.nonce||o.getAttribute("content")||void 0;const u=document.head.querySelector('meta[name="sc-nonce"]');if(u)return Vr=u.getAttribute("content")||void 0}return Vr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Ud=(o,u)=>{const c=document.head,p=o||c,h=document.createElement("style"),w=(S=>{const P=Array.from(S.querySelectorAll(`style[${nr}]`));return P[P.length-1]})(p),j=w!==void 0?w.nextSibling:null;h.setAttribute(nr,Ad),h.setAttribute(Od,Co);const N=u||vh();return N&&h.setAttribute("nonce",N),p.insertBefore(h,j),h},yh=class{constructor(o,u){this.element=Ud(o,u),this.element.appendChild(document.createTextNode("")),this.sheet=(c=>{var p;if(c.sheet)return c.sheet;const h=(p=c.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets;for(let w=0,j=h.length;w<j;w++){const N=h[w];if(N.ownerNode===c)return N}throw No(17)})(this.element),this.length=0}insertRule(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}}deleteRule(o){this.sheet.deleteRule(o),this.length--}getRule(o){const u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""}},wh=class{constructor(o,u){this.element=Ud(o,u),this.nodes=this.element.childNodes,this.length=0}insertRule(o,u){if(o<=this.length&&o>=0){const c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1}deleteRule(o){this.element.removeChild(this.nodes[o]),this.length--}getRule(o){return o<this.length?this.nodes[o].textContent:""}};let cd=Yr;const kh={isServer:!Yr,useCSSOMInjection:!G0};class zo{static registerId(u){return uo(u)}constructor(u=rr,c={},p){this.options=Object.assign(Object.assign({},kh),u),this.gs=c,this.keyframeIds=new Set,this.names=new Map(p),this.server=!!u.isServer,!this.server&&Yr&&cd&&(cd=!1,Ls(this)),$d(this,()=>(h=>{const w=h.getTag(),{length:j}=w;let N="";for(let S=0;S<j;S++){const P=Z0(S);if(P===void 0)continue;const B=h.names.get(P);if(B===void 0||!B.size)continue;const R=w.getGroup(S);if(R.length===0)continue;const H=nr+".g"+S+'[id="'+P+'"]';let ee="";for(const Y of B)Y.length>0&&(ee+=Y+",");N+=R+H+'{content:"'+ee+'"}'+Zs}return N})(this))}rehydrate(){!this.server&&Yr&&Ls(this)}reconstructWithOptions(u,c=!0){const p=new zo(Object.assign(Object.assign({},this.options),u),this.gs,c&&this.names||void 0);return p.keyframeIds=new Set(this.keyframeIds),!this.server&&Yr&&u.target!==this.options.target&&Bs(this.options.target)!==Bs(u.target)&&Ls(p),p}allocateGSInstance(u){return this.gs[u]=(this.gs[u]||0)+1}getTag(){return this.tag||(this.tag=(u=(({useCSSOMInjection:c,target:p,nonce:h})=>c?new yh(p,h):new wh(p,h))(this.options),new fh(u)));var u}hasNameForId(u,c){var p,h;return(h=(p=this.names.get(u))===null||p===void 0?void 0:p.has(c))!==null&&h!==void 0&&h}registerName(u,c){uo(u),u.startsWith(Q0)&&this.keyframeIds.add(u);const p=this.names.get(u);p?p.add(c):this.names.set(u,new Set([c]))}insertRules(u,c,p){this.registerName(u,c),this.getTag().insertRules(uo(u),p)}clearNames(u){this.names.has(u)&&this.names.get(u).clear()}clearRules(u){this.getTag().clearGroup(uo(u)),this.clearNames(u)}clearTag(){this.tag=void 0}}const Vd=new WeakSet,Sh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jh(o,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in Sh||o.startsWith("--")?String(u).trim():u+"px"}const jn=47;function dd(o){if(o.charCodeAt(0)===45&&o.charCodeAt(1)===45)return o;let u="";for(let c=0;c<o.length;c++){const p=o.charCodeAt(c);u+=p>=65&&p<=90?"-"+String.fromCharCode(p+32):o[c]}return u.startsWith("ms-")?"-"+u:u}const bh=Symbol.for("sc-keyframes");function Ch(o){return typeof o=="object"&&o!==null&&bh in o}function Gd(o){return Eo(o)&&!(o.prototype&&o.prototype.isReactComponent)}const Qd=o=>o==null||o===!1||o==="",Nh=Symbol.for("react.client.reference");function pd(o){return o.$$typeof===Nh}function Zd(o,u){for(const c in o){const p=o[c];o.hasOwnProperty(c)&&!Qd(p)&&(Array.isArray(p)&&Vd.has(p)||Eo(p)?u.push(dd(c)+":",p,";"):Xr(p)?(u.push(c+" {"),Zd(p,u),u.push("}")):u.push(dd(c)+": "+jh(c,p)+";"))}}function Nn(o,u,c,p,h=[]){if(Qd(o))return h;const w=typeof o;if(w==="string")return h.push(o),h;if(w==="function"){if(pd(o))return h;if(Gd(o)&&u){const j=o(u);return Nn(j,u,c,p,h)}return h.push(o),h}if(Array.isArray(o)){for(let j=0;j<o.length;j++)Nn(o[j],u,c,p,h);return h}return Hd(o)?(h.push(`.${o.styledComponentId}`),h):Ch(o)?(c?(o.inject(c,p),h.push(o.getName(p))):h.push(o),h):pd(o)?h:Xr(o)?(Zd(o,h),h):(h.push(o.toString()),h)}const Eh=Fd(Co);class zh{constructor(u,c,p){this.rules=u,this.componentId=c,this.baseHash=Cn(Eh,c),this.baseStyle=p,zo.registerId(c)}generateAndInjectStyles(u,c,p){let h=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,p):"";{let w="";for(let j=0;j<this.rules.length;j++){const N=this.rules[j];if(typeof N=="string")w+=N;else if(N)if(Gd(N)){const S=N(u);typeof S=="string"?w+=S:S!=null&&S!==!1&&(w+=ad(Nn(S,u,c,p)))}else w+=ad(Nn(N,u,c,p))}if(w){this.dynamicNameCache||(this.dynamicNameCache=new Map);const j=p.hash?p.hash+w:w;let N=this.dynamicNameCache.get(j);if(!N){if(N=Md(Cn(Cn(this.baseHash,p.hash),w)>>>0),this.dynamicNameCache.size>=200){const S=this.dynamicNameCache.keys().next().value;S!==void 0&&this.dynamicNameCache.delete(S)}this.dynamicNameCache.set(j,N)}if(!c.hasNameForId(this.componentId,N)){const S=p(w,"."+N,void 0,this.componentId);c.insertRules(this.componentId,N,S)}h=Qr(h,N)}}return h}}const Ph=/&/g;function Yd(o,u){let c=0;for(;--u>=0&&o.charCodeAt(u)===92;)c++;return!(1&~c)}function Is(o){const u=o.length;let c="",p=0,h=0,w=0,j=!1,N=!1;for(let S=0;S<u;S++){const P=o.charCodeAt(S);if(w!==0||j||P!==jn||o.charCodeAt(S+1)!==42)if(j)P===42&&o.charCodeAt(S+1)===jn&&(j=!1,S++);else if(P!==34&&P!==39||Yd(o,S)){if(w===0)if(P===123)h++;else if(P===125){if(h--,h<0){N=!0;let B=S+1;for(;B<u;){const R=o.charCodeAt(B);if(R===59||R===10)break;B++}B<u&&o.charCodeAt(B)===59&&B++,h=0,S=B-1,p=B;continue}h===0&&(c+=o.substring(p,S+1),p=S+1)}else P===59&&h===0&&(c+=o.substring(p,S+1),p=S+1)}else w===0?w=P:w===P&&(w=0);else j=!0,S++}return N||h!==0||w!==0?(p<u&&h===0&&w===0&&(c+=o.substring(p)),c):o}function Kd(o,u){const c=u+" ",p=","+c;for(let h=0;h<o.length;h++){const w=o[h];if(w.type==="rule"){w.value=(c+w.value).replaceAll(",",p);const j=w.props,N=[];for(let S=0;S<j.length;S++)N[S]=c+j[S];w.props=N}Array.isArray(w.children)&&w.type!=="@keyframes"&&Kd(w.children,u)}return o}function Lh({options:o=rr,plugins:u=Ys}=rr){let c,p,h;const w=(H,ee,Y)=>Y.startsWith(p)&&Y.endsWith(p)&&Y.replaceAll(p,"").length>0?`.${c}`:H,j=u.slice();j.push(H=>{H.type===ko&&H.value.includes("&")&&(h||(h=new RegExp(`\\${p}\\b`,"g")),H.props[0]=H.props[0].replace(Ph,p).replace(h,w))}),o.prefix&&j.push(V0),j.push(H0);let N=[];const S=$0(j.concat(U0(H=>N.push(H)))),P=(H,ee="",Y="",V="&")=>{c=V,p=ee,h=void 0;const X=(function(F){const fe=F.indexOf("//")!==-1,de=F.indexOf("}")!==-1;if(!fe&&!de)return F;if(!fe)return Is(F);const le=F.length;let re="",_=0,$=0,je=0,Re=0,be=0,Ie=!1;for(;$<le;){const ie=F.charCodeAt($);if(ie!==34&&ie!==39||Yd(F,$))if(je===0)if(ie===jn&&$+1<le&&F.charCodeAt($+1)===42){for($+=2;$+1<le&&(F.charCodeAt($)!==42||F.charCodeAt($+1)!==jn);)$++;$+=2}else if(ie!==40)if(ie!==41)if(Re>0)$++;else if(ie===42&&$+1<le&&F.charCodeAt($+1)===jn)re+=F.substring(_,$),$+=2,_=$,Ie=!0;else if(ie===jn&&$+1<le&&F.charCodeAt($+1)===jn){for(re+=F.substring(_,$);$<le&&F.charCodeAt($)!==10;)$++;_=$,Ie=!0}else ie===123?be++:ie===125&&be--,$++;else Re>0&&Re--,$++;else Re++,$++;else $++;else je===0?je=ie:je===ie&&(je=0),$++}return Ie?(_<le&&(re+=F.substring(_)),be===0?re:Is(re)):be===0?F:Is(F)})(H);let oe=B0(Y||ee?Y+" "+ee+" { "+X+" }":X);return o.namespace&&(oe=Kd(oe,o.namespace)),N=[],vo(oe,S),N},B=o;let R=Ms;for(let H=0;H<u.length;H++)u[H].name||No(15),R=Cn(R,u[H].name);return B!=null&&B.namespace&&(R=Cn(R,B.namespace)),B!=null&&B.prefix&&(R=Cn(R,"p")),P.hash=R!==Ms?R.toString():"",P}const Ih=new zo,_h=Lh(),Xd=ut.createContext({shouldForwardProp:void 0,styleSheet:Ih,stylis:_h,stylisPlugins:void 0});Xd.Consumer;function Th(){return ut.useContext(Xd)}const qd=ut.createContext(void 0);qd.Consumer;const fd=Object.prototype.hasOwnProperty,_s={};function Ah(o,u){const c=typeof o!="string"?"sc":Rd(o);_s[c]=(_s[c]||0)+1;const p=c+"-"+eh(Co+c+_s[c]);return u?u+"-"+p:p}function Oh(o,u,c){const p=Hd(o),h=o,w=!Fs(o),{attrs:j=Ys,componentId:N=Ah(u.displayName,u.parentComponentId),displayName:S=nh(o)}=u,P=u.displayName&&u.componentId?Rd(u.displayName)+"-"+u.componentId:u.componentId||N,B=p&&h.attrs?h.attrs.concat(j).filter(Boolean):j;let{shouldForwardProp:R}=u;if(p&&h.shouldForwardProp){const V=h.shouldForwardProp;if(u.shouldForwardProp){const X=u.shouldForwardProp;R=(oe,F)=>V(oe,F)&&X(oe,F)}else R=V}const H=new zh(c,P,p?h.componentStyle:void 0);function ee(V,X){return(function(oe,F,fe){const{attrs:de,componentStyle:le,defaultProps:re,foldedComponentIds:_,styledComponentId:$,target:je}=oe,Re=ut.useContext(qd),be=Th(),Ie=oe.shouldForwardProp||be.shouldForwardProp,ie=K0(F,Re,re)||rr;let Ee,Ge;{const W=ut.useRef(null),L=W.current;if(L!==null&&L[1]===ie&&L[2]===be.styleSheet&&L[3]===be.stylis&&L[7]===le&&(function(g,k,U){const G=g,K=k;let te=0;for(const se in K)if(fd.call(K,se)&&(te++,G[se]!==K[se]))return!1;return te===U})(L[0],F,L[4]))Ee=L[5],Ge=L[6];else{Ee=(function(k,U,G){const K=Object.assign(Object.assign({},U),{className:void 0,theme:G}),te=k.length>1;for(let se=0;se<k.length;se++){const ue=k[se],me=Eo(ue)?ue(te?Object.assign({},K):K):ue;for(const ze in me)ze==="className"?K.className=Qr(K.className,me[ze]):ze==="style"?K.style=Object.assign(Object.assign({},K.style),me[ze]):ze in U&&U[ze]===void 0||(K[ze]=me[ze])}return"className"in U&&typeof U.className=="string"&&(K.className=Qr(K.className,U.className)),K})(de,F,ie),Ge=(function(k,U,G,K){return k.generateAndInjectStyles(U,G,K)})(le,Ee,be.styleSheet,be.stylis);let g=0;for(const k in F)fd.call(F,k)&&g++;W.current=[F,ie,be.styleSheet,be.stylis,g,Ee,Ge,le]}}const Me=Ee.as||je,xe=(function(W,L,g,k){const U={};for(const G in W)W[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&W.theme===g||(G==="forwardedAs"?U.as=W.forwardedAs:k&&!k(G,L)||(U[G]=W[G]));return U})(Ee,Me,ie,Ie);let I=Qr(_,$);return Ge&&(I+=" "+Ge),Ee.className&&(I+=" "+Ee.className),xe[Fs(Me)&&Me.includes("-")?"class":"className"]=I,fe&&(xe.ref=fe),Le.createElement(Me,xe)})(Y,V,X)}ee.displayName=S;let Y=ut.forwardRef(ee);return Y.attrs=B,Y.componentStyle=H,Y.displayName=S,Y.shouldForwardProp=R,Y.foldedComponentIds=p?Qr(h.foldedComponentIds,h.styledComponentId):"",Y.styledComponentId=P,Y.target=p?h.target:o,Object.defineProperty(Y,"defaultProps",{get(){return this._foldedDefaultProps},set(V){this._foldedDefaultProps=p?(function(X,...oe){for(const F of oe)Ds(X,F,!0);return X})({},h.defaultProps,V):V}}),$d(Y,()=>`.${Y.styledComponentId}`),w&&Wd(Y,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}var Rh=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function hd(o,u){const c=[o[0]];for(let p=0,h=u.length;p<h;p+=1)c.push(u[p],o[p+1]);return c}const md=o=>(Vd.add(o),o);function Mh(o,...u){if(Eo(o)||Xr(o))return md(Nn(hd(Ys,[o,...u])));const c=o;return u.length===0&&c.length===1&&typeof c[0]=="string"?Nn(c):md(Nn(hd(c,u)))}function Ws(o,u,c=rr){if(!u)throw No(1,u);const p=(h,...w)=>o(u,c,Mh(h,...w));return p.attrs=h=>Ws(o,u,Object.assign(Object.assign({},c),{attrs:Array.prototype.concat(c.attrs,h).filter(Boolean)})),p.withConfig=h=>Ws(o,u,Object.assign(Object.assign({},c),h)),p}const Jd=o=>Ws(Oh,o),xt=Jd;Rh.forEach(o=>{xt[o]=Jd(o)});const Fh={Wrapper:xt.header`
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 100%;
        background: rgba(8, 12, 10, 0.82);
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        backdrop-filter: blur(20px);
        transition:
            background 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &.scrolled {
            background: rgba(6, 9, 7, 0.96);
            border-color: rgba(118, 255, 157, 0.1);
            box-shadow: 0 14px 40px rgba(0, 0, 0, 0.2);
        }

        .headerInner {
            width: min(1440px, calc(100% - 48px));
            min-height: 88px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 40px;
        }

        .brand {
            padding: 0;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            border: 0;
            background: transparent;
            color: #f6f8f6;
            cursor: pointer;
            text-align: left;
        }

        .brandIcon {
            width: 42px;
            height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.3);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.07);
            color: #76ff9d;
            transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .brand:hover .brandIcon,
        .brand.active .brandIcon {
            background: rgba(118, 255, 157, 0.12);
            box-shadow: 0 0 20px rgba(118, 255, 157, 0.12);
        }

        .brandIcon svg {
            width: 18px;
            height: 18px;
        }

        .brandText {
            display: flex;
            flex-direction: column;
            font-family: "Antonio", sans-serif;
            line-height: 0.92;
            text-transform: uppercase;
        }

        .brandText strong {
            font-size: 1.15rem;
            font-weight: 700;
            letter-spacing: 0.03em;
        }

        .brandText span {
            margin-top: 5px;
            color: #76ff9d;
            font-size: 0.67rem;
            font-weight: 600;
            letter-spacing: 0.2em;
        }

        .desktopNav {
            height: 88px;
            display: flex;
            align-items: stretch;
            justify-content: center;
        }

        .desktopNav button {
            position: relative;
            min-width: 112px;
            padding: 0 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            border: 0;
            background: transparent;
            color: #7e8a82;
            cursor: pointer;
            transition:
                color 0.2s ease,
                background 0.2s ease;
        }

        .desktopNav button::after {
            content: "";
            position: absolute;
            right: 18px;
            bottom: 0;
            left: 18px;
            height: 2px;
            background: #76ff9d;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.2s ease;
        }

        .desktopNav button:hover,
        .desktopNav button.active {
            background: rgba(255, 255, 255, 0.025);
            color: #f6f8f6;
        }

        .desktopNav button.active::after,
        .desktopNav button:hover::after {
            transform: scaleX(1);
        }

        .desktopNav button.active > span {
            color: #76ff9d;
        }

        .desktopNav button > span {
            font-family: "Antonio", sans-serif;
            font-size: 0.74rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            transition: color 0.2s ease;
        }

        .desktopNav small {
            color: #536058;
            font-family: "Antonio", sans-serif;
            font-size: 0.42rem;
            font-weight: 600;
            letter-spacing: 0.1em;
        }

        .headerActions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .githubLink {
            min-height: 44px;
            padding: 0 16px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 999px;
            color: #f6f8f6;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            transition: background 0.2s ease, border-color 0.2s ease;        }

        .githubLink:hover {
            border-color: rgba(118, 255, 157, 0.38);
            background: rgba(118, 255, 157, 0.07);
        }

        .githubLink svg:last-child {
            color: #76ff9d;
        }

        .menuButton {
            width: 44px;
            height: 44px;
            padding: 0;
            display: none;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            background: transparent;
            color: #f6f8f6;
            cursor: pointer;
        }

        .mobileMenu {
            max-height: 0;
            overflow: hidden;
            border-top: 1px solid transparent;
            background: #080c0a;
            transition:
                max-height 0.3s ease,
                border-color 0.3s ease;
        }

        .mobileMenu.open {
            max-height: 430px;
            border-color: rgba(255, 255, 255, 0.07);
        }

        .mobileMenu nav {
            width: min(100% - 36px, 720px);
            margin: 0 auto;
            padding: 14px 0 24px;
        }

        .mobileMenu button {
            width: 100%;
            min-height: 70px;
            padding: 0;
            display: grid;
            grid-template-columns: 40px 1fr auto;
            gap: 14px;
            align-items: center;
            border: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
            background: transparent;
            color: #f6f8f6;
            cursor: pointer;
            text-align: left;
            transition: color 0.2s ease;        }

        .mobileMenu button.active {
            color: #76ff9d;
        }

        .mobileMenu button:hover {
        }

        .menuNumber {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .menuContent {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .menuContent strong {
            font-family: "Antonio", sans-serif;
            font-size: 1.35rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .menuContent small {
            color: #606c64;
            font-family: "Antonio", sans-serif;
            font-size: 0.5rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .mobileMenu button > svg {
            color: #76ff9d;
        }

        @media (max-width: 1050px) {
            .desktopNav button {
                min-width: auto;
                padding: 0 12px;
            }

            .desktopNav button::after {
                right: 12px;
                left: 12px;
            }

            .githubLink span {
                display: none;
            }
        }

        @media (max-width: 900px) {
            .headerInner {
                width: min(100% - 36px, 1440px);
                min-height: 76px;
                grid-template-columns: auto auto;
                justify-content: space-between;
            }

            .desktopNav,
            .githubLink {
                display: none;
            }

            .menuButton {
                display: inline-flex;
            }
        }

        @media (max-width: 480px) {
            .headerInner {
                width: calc(100% - 28px);
            }

            .brandText strong {
                font-size: 1rem;
            }
        }
    `},Dh=({hasSearched:o,activeSection:u,onNavigate:c})=>{const[p,h]=Le.useState(!1),[w,j]=Le.useState(!1),N=[{label:"Checker",target:"checker"},{label:"Services",target:"services",requiresSearch:!0},{label:"Coverage",target:"coverage",requiresSearch:!0},{label:"How It Works",target:"howItWorks"}];Le.useEffect(()=>{const P=()=>{j(window.scrollY>20)};return P(),window.addEventListener("scroll",P,{passive:!0}),()=>{window.removeEventListener("scroll",P)}},[]);const S=P=>{h(!1),c(P)};return s.jsxs(Fh.Wrapper,{className:`siteHeader ${w?"scrolled":""}`,children:[s.jsxs("div",{className:"headerInner",children:[s.jsxs("button",{className:`brand ${u==="top"?"active":""}`,type:"button",onClick:()=>S("top"),"aria-label":"Go to top",children:[s.jsx("span",{className:"brandIcon",children:s.jsx(_t,{})}),s.jsxs("span",{className:"brandText",children:[s.jsx("strong",{children:"Service Area"}),s.jsx("span",{children:"Checker"})]})]}),s.jsx("nav",{className:"desktopNav","aria-label":"Primary navigation",children:N.map(P=>{const B=u===P.target;return s.jsxs("button",{className:B?"active":"",type:"button",onClick:()=>S(P.target),children:[s.jsx("span",{children:P.label}),P.requiresSearch&&!o&&s.jsx("small",{children:"CHECK ZIP FIRST"})]},P.target)})}),s.jsxs("div",{className:"headerActions",children:[s.jsxs("a",{className:"githubLink",href:"https://github.com/a2rp/service-area-checker-ui",target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Nd,{}),s.jsx("span",{children:"Repository"}),s.jsx(As,{})]}),s.jsx("button",{className:"menuButton",type:"button",onClick:()=>h(P=>!P),"aria-label":p?"Close navigation menu":"Open navigation menu","aria-expanded":p,children:p?s.jsx(h0,{}):s.jsx(x0,{})})]})]}),s.jsx("div",{className:`mobileMenu ${p?"open":""}`,children:s.jsx("nav",{"aria-label":"Mobile navigation",children:N.map((P,B)=>{const R=u===P.target;return s.jsxs("button",{className:R?"active":"",type:"button",onClick:()=>S(P.target),children:[s.jsx("span",{className:"menuNumber",children:String(B+1).padStart(2,"0")}),s.jsxs("span",{className:"menuContent",children:[s.jsx("strong",{children:P.label}),P.requiresSearch&&!o&&s.jsx("small",{children:"Check ZIP first"})]}),s.jsx(As,{})]},P.target)})})})]})},Bh={Wrapper:xt.section`
        position: relative;
        min-height: calc(100vh - 88px);
        padding: 80px 24px 28px;
        overflow: hidden;
        background: #080c0a;
        color: #f6f8f6;

        .heroGrid {
            position: absolute;
            inset: 0;
            opacity: 0.18;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.05) 1px,
                    transparent 1px
                );
            background-size: 72px 72px;
            pointer-events: none;
        }

        .heroGlow {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
        }

        .heroGlowOne {
            top: -120px;
            right: 8%;
            width: 380px;
            height: 380px;
            background: rgba(118, 255, 157, 0.13);
        }

        .heroGlowTwo {
            left: -140px;
            bottom: -120px;
            width: 360px;
            height: 360px;
            background: rgba(52, 196, 114, 0.08);
        }

        .heroInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
            gap: clamp(50px, 7vw, 110px);
            align-items: center;
        }

        .heroContent {
            max-width: 820px;
        }

        .eyebrow {
            width: fit-content;
            min-height: 34px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border: 1px solid rgba(118, 255, 157, 0.22);
            border-radius: 999px;
            background: rgba(118, 255, 157, 0.06);
            color: #a8b4ac;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .statusDot {
            position: relative;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 18px rgba(118, 255, 157, 0.8);
        }

        .statusDot::after {
            content: "";
            position: absolute;
            inset: -5px;
            border: 1px solid rgba(118, 255, 157, 0.25);
            border-radius: 50%;
        }

        h1 {
            max-width: 900px;
            margin-top: 28px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(4.2rem, 7vw, 8rem);
            font-weight: 700;
            line-height: 0.88;
            text-transform: uppercase;
            letter-spacing: -0.045em;
        }

        h1 span {
            display: block;
            color: #76ff9d;
        }

        .heroDescription {
            max-width: 660px;
            margin-top: 28px;
            color: #97a39c;
            font-size: 0.96rem;
            line-height: 1.85;
        }

        .heroActions {
            margin-top: 34px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .heroActions button {
            min-height: 54px;
            padding: 0 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 999px;
            font-family: "Antonio", sans-serif;
            font-size: 0.76rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        .heroActions button:hover {
            transform: translateY(-2px);
        }

        .primaryAction {
            border: 1px solid #76ff9d;
            background: #76ff9d;
            color: #08100b;
        }

        .primaryAction:hover {
            background: #94ffb3;
            border-color: #94ffb3;
        }

        .secondaryAction {
            border: 1px solid rgba(255, 255, 255, 0.13);
            background: transparent;
            color: #f6f8f6;
        }

        .secondaryAction:hover {
            border-color: rgba(118, 255, 157, 0.4);
            background: rgba(118, 255, 157, 0.06);
        }

        .trustRow {
            margin-top: 32px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px 24px;
        }

        .trustRow span {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #77827b;
            font-size: 0.72rem;
        }

        .trustRow svg {
            color: #76ff9d;
        }

        .heroPanel {
            position: relative;
            padding: 22px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 28px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.055),
                rgba(255, 255, 255, 0.018)
            );
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.36);
            backdrop-filter: blur(18px);
        }

        .panelHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
        }

        .panelHeader > div {
            display: grid;
            gap: 5px;
        }

        .panelHeader span {
            color: #6f7973;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .panelHeader strong {
            font-family: "Antonio", sans-serif;
            font-size: 1.7rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .liveStatus {
            min-height: 30px;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 999px;
            color: #76ff9d !important;
            background: rgba(118, 255, 157, 0.06);
        }

        .liveStatus i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 10px rgba(118, 255, 157, 0.7);
        }

        .mapPreview {
            position: relative;
            height: 310px;
            margin-top: 22px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 20px;
            background:
                radial-gradient(
                    circle at center,
                    rgba(118, 255, 157, 0.1),
                    transparent 48%
                ),
                #0b110e;
        }

        .mapGrid {
            position: absolute;
            inset: 0;
            opacity: 0.38;
            background-image:
                linear-gradient(rgba(118, 255, 157, 0.1) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(118, 255, 157, 0.1) 1px,
                    transparent 1px
                );
            background-size: 38px 38px;
        }

        .mapCenter {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.3);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.08);
            color: #76ff9d;
            transform: translate(-50%, -50%);
            box-shadow:
                0 0 0 16px rgba(118, 255, 157, 0.025),
                0 0 0 34px rgba(118, 255, 157, 0.018);
        }

        .mapCenter svg {
            width: 25px;
            height: 25px;
        }

        .mapPoint {
            position: absolute;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #87938b;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .mapPoint i {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 12px rgba(118, 255, 157, 0.6);
        }

        .pointOne {
            top: 22%;
            left: 20%;
        }

        .pointTwo {
            top: 34%;
            right: 14%;
        }

        .pointThree {
            left: 27%;
            bottom: 18%;
        }

        .panelStats {
            margin-top: 16px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .panelStats article {
            min-height: 118px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.025);
        }

        .panelStats article > span {
            color: #59645d;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .panelStats strong {
            margin-top: auto;
            display: flex;
            align-items: center;
            gap: 7px;
            color: #f6f8f6;
            font-family: "Antonio", sans-serif;
            font-size: 1.65rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .panelStats strong svg {
            color: #76ff9d;
        }

        .panelStats p {
            margin-top: 3px;
            color: #707b74;
            font-size: 0.68rem;
        }

        .heroFooter {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 55px auto 0;
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            color: #566159;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .heroFooter button {
            width: 40px;
            height: 40px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            background: transparent;
            color: #76ff9d;
            cursor: pointer;
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
        }

        .heroFooter button:hover {
            transform: translateY(3px);
            border-color: rgba(118, 255, 157, 0.4);
        }

        @media (max-width: 1050px) {
            min-height: auto;

            .heroInner {
                grid-template-columns: 1fr;
            }

            .heroContent {
                max-width: 900px;
            }

            .heroPanel {
                max-width: 720px;
            }
        }

        @media (max-width: 700px) {
            padding: 60px 18px 24px;

            h1 {
                font-size: clamp(3.7rem, 18vw, 6rem);
            }

            .heroDescription {
                font-size: 0.9rem;
            }

            .heroActions {
                flex-direction: column;
            }

            .heroActions button {
                width: 100%;
            }

            .trustRow {
                flex-direction: column;
            }

            .heroPanel {
                padding: 14px;
                border-radius: 22px;
            }

            .mapPreview {
                height: 260px;
            }

            .panelStats {
                grid-template-columns: 1fr 1fr;
            }

            .heroFooter {
                margin-top: 38px;
            }
        }

        @media (max-width: 460px) {
            .panelStats {
                grid-template-columns: 1fr;
            }

            .panelStats article {
                min-height: 105px;
            }
        }
    `},Wh=({onGoChecker:o,onGoCoverage:u})=>s.jsxs(Bh.Wrapper,{className:"heroSection",children:[s.jsx("div",{className:"heroGrid"}),s.jsx("div",{className:"heroGlow heroGlowOne"}),s.jsx("div",{className:"heroGlow heroGlowTwo"}),s.jsxs("div",{className:"heroInner",children:[s.jsxs("div",{className:"heroContent",children:[s.jsxs("div",{className:"eyebrow",children:[s.jsx("span",{className:"statusDot"}),s.jsx("span",{children:"Service Network Online"})]}),s.jsxs("h1",{children:["Know what's available",s.jsx("span",{children:"before you book."})]}),s.jsx("p",{className:"heroDescription",children:"Check your ZIP code to instantly see service availability, regional coverage, dispatch status, and supported home services in your area."}),s.jsxs("div",{className:"heroActions",children:[s.jsxs("button",{className:"primaryAction",type:"button",onClick:o,children:["Check my ZIP code",s.jsx(td,{})]}),s.jsxs("button",{className:"secondaryAction",type:"button",onClick:u,children:[s.jsx(Us,{}),"Explore coverage"]})]}),s.jsxs("div",{className:"trustRow",children:[s.jsxs("span",{children:[s.jsx(bn,{}),"Instant availability check"]}),s.jsxs("span",{children:[s.jsx(kd,{}),"No signup required"]}),s.jsxs("span",{children:[s.jsx(wo,{}),"24/7 status visibility"]})]})]}),s.jsxs("div",{className:"heroPanel",children:[s.jsxs("div",{className:"panelHeader",children:[s.jsxs("div",{children:[s.jsx("span",{children:"NETWORK OVERVIEW"}),s.jsx("strong",{children:"Coverage Status"})]}),s.jsxs("span",{className:"liveStatus",children:[s.jsx("i",{}),"Live"]})]}),s.jsxs("div",{className:"mapPreview",children:[s.jsx("div",{className:"mapGrid"}),s.jsxs("span",{className:"mapPoint pointOne",children:[s.jsx("i",{}),"North"]}),s.jsxs("span",{className:"mapPoint pointTwo",children:[s.jsx("i",{}),"Central"]}),s.jsxs("span",{className:"mapPoint pointThree",children:[s.jsx("i",{}),"South"]}),s.jsx("div",{className:"mapCenter",children:s.jsx(_t,{})})]}),s.jsxs("div",{className:"panelStats",children:[s.jsxs("article",{children:[s.jsx("span",{children:"01"}),s.jsx("strong",{children:"8"}),s.jsx("p",{children:"Core services"})]}),s.jsxs("article",{children:[s.jsx("span",{children:"02"}),s.jsx("strong",{children:"3"}),s.jsx("p",{children:"Regional hubs"})]}),s.jsxs("article",{children:[s.jsx("span",{children:"03"}),s.jsx("strong",{children:"24/7"}),s.jsx("p",{children:"Emergency support"})]}),s.jsxs("article",{children:[s.jsx("span",{children:"04"}),s.jsxs("strong",{children:[s.jsx(yd,{}),"Fast"]}),s.jsx("p",{children:"Dispatch response"})]})]})]})]}),s.jsxs("div",{className:"heroFooter",children:[s.jsx("span",{children:"SCROLL TO CHECK AVAILABILITY"}),s.jsx("button",{type:"button",onClick:o,"aria-label":"Go to ZIP checker",children:s.jsx(td,{})})]})]}),Hh={Wrapper:xt.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #f4f6f4;
        color: #101510;
        scroll-margin-top: 88px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: min(1440px, calc(100% - 48px));
            height: 1px;
            background: #d9ded9;
            transform: translateX(-50%);
        }

        .checkerInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 0.85fr) minmax(460px, 1.15fr);
            gap: clamp(60px, 8vw, 130px);
            align-items: center;
        }

        .checkerIntro {
            max-width: 590px;
        }

        .sectionLabel {
            display: flex;
            align-items: center;
            gap: 11px;
            color: #5b685f;
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .labelIcon {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #cad2cc;
            border-radius: 50%;
            color: #126532;
            background: #ffffff;
        }

        .labelIcon svg {
            width: 14px;
            height: 14px;
        }

        h2 {
            margin-top: 27px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.91;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #18743c;
        }

        .checkerIntro > p {
            max-width: 540px;
            margin-top: 28px;
            color: #626c65;
            font-size: 0.94rem;
            line-height: 1.85;
        }

        .introPoints {
            margin-top: 32px;
            display: grid;
            gap: 13px;
        }

        .introPoints span {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #384239;
            font-size: 0.78rem;
        }

        .introPoints svg {
            flex: 0 0 auto;
            color: #18743c;
        }

        .checkerCard {
            position: relative;
            padding: 34px;
            border: 1px solid #d8ded9;
            border-radius: 28px;
            background: #ffffff;
            box-shadow:
                0 28px 80px rgba(25, 49, 33, 0.09),
                0 3px 12px rgba(25, 49, 33, 0.04);
        }

        .checkerCard::after {
            content: "";
            position: absolute;
            right: -1px;
            bottom: -1px;
            width: 90px;
            height: 90px;
            border-right: 2px solid #76ff9d;
            border-bottom: 2px solid #76ff9d;
            border-bottom-right-radius: 28px;
            pointer-events: none;
        }

        .cardTop {
            display: flex;
            justify-content: space-between;
            gap: 24px;
            align-items: flex-start;
        }

        .cardTop > div {
            display: grid;
            gap: 6px;
        }

        .cardEyebrow {
            color: #7d8880;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .cardTop h3 {
            font-family: "Antonio", sans-serif;
            font-size: clamp(1.8rem, 2.7vw, 2.7rem);
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .secureBadge {
            min-height: 34px;
            padding: 0 11px;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            border: 1px solid #d8ded9;
            border-radius: 999px;
            background: #f7f9f7;
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.09em;
        }

        form {
            margin-top: 34px;
        }

        form > label {
            display: block;
            margin-bottom: 10px;
            color: #616c64;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .inputShell {
            min-height: 72px;
            padding: 0 18px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 13px;
            align-items: center;
            border: 1px solid #cfd6d0;
            border-radius: 17px;
            background: #fafbfa;
            transition:
                border-color 0.2s ease,
                box-shadow 0.2s ease,
                background 0.2s ease;
        }

        .inputShell:focus-within {
            border-color: #18743c;
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(24, 116, 60, 0.08);
        }

        .inputShell.hasError {
            border-color: #c84545;
            box-shadow: 0 0 0 4px rgba(200, 69, 69, 0.06);
        }

        .inputIcon {
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #edf3ee;
            color: #18743c;
        }

        .inputShell input {
            width: 100%;
            min-width: 0;
            border: 0;
            outline: 0;
            background: transparent;
            color: #101510;
            font-family: "Antonio", sans-serif;
            font-size: 1.18rem;
            font-weight: 600;
            letter-spacing: 0.08em;
        }

        .inputShell input::placeholder {
            color: #a0aaa3;
            font-family: inherit;
            font-size: 0.96rem;
            font-weight: 400;
            letter-spacing: 0.03em;
        }

        .digitCount {
            color: #88928b;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.08em;
        }

        .errorMessage {
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 7px;
            color: #b63838;
            font-size: 0.72rem;
        }

        .submitButton {
            width: 100%;
            min-height: 58px;
            margin-top: 14px;
            padding: 0 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border: 1px solid #0d2d1b;
            border-radius: 16px;
            background: #0d2d1b;
            color: #ffffff;
            font-family: "Antonio", sans-serif;
            font-size: 0.76rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        .submitButton:hover {
            border-color: #18743c;
            background: #18743c;
            transform: translateY(-1px);
        }

        .submitButton svg {
            transition: transform 0.2s ease;
        }

        .submitButton:hover svg {
            transform: translateX(3px);
        }

        .sampleSection {
            margin-top: 30px;
            padding-top: 25px;
            border-top: 1px solid #e3e7e4;
        }

        .sampleHeading {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #838d86;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .sampleHeading .divider {
            flex: 1;
            height: 1px;
            background: #e2e6e3;
        }

        .sampleList {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }

        .sampleList button {
            min-height: 44px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            border: 1px solid #dde2de;
            border-radius: 12px;
            background: #f7f9f7;
            color: #525e55;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition:
                color 0.2s ease,
                border-color 0.2s ease,
                background 0.2s ease;
        }

        .sampleList button:hover,
        .sampleList button.active {
            border-color: rgba(24, 116, 60, 0.35);
            background: rgba(24, 116, 60, 0.08);
            color: #18743c;
        }

        .sampleList svg {
            width: 12px;
            height: 12px;
        }

        .cardFooter {
            margin-top: 28px;
            padding-top: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            border-top: 1px solid #e6eae7;
            color: #919a94;
            font-size: 0.62rem;
        }

        .statusIndicator {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #657168;
        }

        .statusIndicator i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 10px rgba(36, 167, 85, 0.35);
        }

        @media (max-width: 1050px) {
            .checkerInner {
                grid-template-columns: 1fr;
            }

            .checkerIntro {
                max-width: 760px;
            }

            .checkerCard {
                max-width: 760px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            h2 {
                font-size: clamp(3.7rem, 17vw, 5.5rem);
            }

            .checkerCard {
                padding: 24px;
                border-radius: 22px;
            }

            .checkerCard::after {
                border-bottom-right-radius: 22px;
            }

            .sampleList {
                grid-template-columns: repeat(2, 1fr);
            }

            .cardFooter {
                align-items: flex-start;
                flex-direction: column;
            }
        }

        @media (max-width: 440px) {
            .cardTop {
                flex-direction: column;
            }

            .secureBadge {
                align-self: flex-start;
            }

            .inputShell {
                min-height: 64px;
                padding: 0 13px;
            }

            .inputIcon {
                width: 30px;
                height: 30px;
            }
        }
    `},$h=["110001","400001","560001","700001"],Uh=({zipCode:o,setZipCode:u,handleCheckZip:c,error:p})=>{const h=j=>{j.preventDefault(),c()},w=j=>{u(j)};return s.jsx(Hh.Wrapper,{className:"zipCheckerForm",children:s.jsxs("div",{className:"checkerInner",children:[s.jsxs("div",{className:"checkerIntro",children:[s.jsxs("div",{className:"sectionLabel",children:[s.jsx("span",{className:"labelIcon",children:s.jsx(w0,{})}),s.jsx("span",{children:"01 / Availability Checker"})]}),s.jsxs("h2",{children:["Check service",s.jsx("span",{children:"availability."})]}),s.jsx("p",{children:"Enter your 6-digit ZIP code to see whether our service network is available in your area and which services can be scheduled."}),s.jsxs("div",{className:"introPoints",children:[s.jsxs("span",{children:[s.jsx(bn,{}),"Instant coverage status"]}),s.jsxs("span",{children:[s.jsx(bn,{}),"Service-by-service availability"]}),s.jsxs("span",{children:[s.jsx(bn,{}),"No account required"]})]})]}),s.jsxs("div",{className:"checkerCard",children:[s.jsxs("div",{className:"cardTop",children:[s.jsxs("div",{children:[s.jsx("span",{className:"cardEyebrow",children:"LOCATION SEARCH"}),s.jsx("h3",{children:"Enter your ZIP code"})]}),s.jsxs("span",{className:"secureBadge",children:[s.jsx(_t,{}),"Coverage"]})]}),s.jsxs("form",{onSubmit:h,children:[s.jsx("label",{htmlFor:"serviceZip",children:"ZIP CODE"}),s.jsxs("div",{className:`inputShell ${p?"hasError":""}`,children:[s.jsx("span",{className:"inputIcon",children:s.jsx(jd,{})}),s.jsx("input",{id:"serviceZip",type:"text",inputMode:"numeric",autoComplete:"postal-code",placeholder:"Enter 6-digit ZIP code",value:o,maxLength:6,onChange:j=>{const N=j.target.value.replace(/\D/g,"").slice(0,6);u(N)}}),s.jsxs("span",{className:"digitCount",children:[o.length,"/6"]})]}),p&&s.jsxs("div",{className:"errorMessage",role:"alert",children:[s.jsx(v0,{}),s.jsx("span",{children:p})]}),s.jsxs("button",{className:"submitButton",type:"submit",children:["Check availability",s.jsx(C0,{})]})]}),s.jsxs("div",{className:"sampleSection",children:[s.jsxs("div",{className:"sampleHeading",children:[s.jsx("span",{children:"TRY A SAMPLE ZIP"}),s.jsx("span",{className:"divider"})]}),s.jsx("div",{className:"sampleList",children:$h.map(j=>s.jsxs("button",{type:"button",onClick:()=>w(j),className:o===j?"active":"",children:[s.jsx(_t,{}),j]},j))})]}),s.jsxs("div",{className:"cardFooter",children:[s.jsxs("span",{className:"statusIndicator",children:[s.jsx("i",{}),"Search service operational"]}),s.jsx("span",{children:"6-digit ZIP required"})]})]})]})})},Vh={Wrapper:xt.section`
        position: relative;
        padding: 0 24px 120px;
        background: #f4f6f4;
        color: #101510;
        scroll-margin-top: 88px;

        .resultInner {
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .resultCard {
            position: relative;
            display: grid;
            grid-template-columns: 260px 1fr;
            overflow: hidden;
            border: 1px solid #d8ded9;
            border-radius: 30px;
            background: #ffffff;
            box-shadow: 0 28px 80px rgba(25, 49, 33, 0.08);
        }

        .resultCard::before {
            content: "";
            position: absolute;
            inset: 0 auto 0 0;
            width: 4px;
            background: #18743c;
        }

        .resultCard.limited::before {
            background: #d6a11d;
        }

        .resultCard.unavailable::before {
            background: #c94b4b;
        }

        .statusColumn {
            position: relative;
            padding: 34px 28px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-right: 1px solid #e0e5e1;
            background: linear-gradient(
                145deg,
                rgba(24, 116, 60, 0.08),
                rgba(24, 116, 60, 0.02)
            );
        }

        .resultCard.limited .statusColumn {
            background: linear-gradient(
                145deg,
                rgba(214, 161, 29, 0.1),
                rgba(214, 161, 29, 0.02)
            );
        }

        .resultCard.unavailable .statusColumn {
            background: linear-gradient(
                145deg,
                rgba(201, 75, 75, 0.09),
                rgba(201, 75, 75, 0.02)
            );
        }

        .statusIcon {
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(24, 116, 60, 0.2);
            border-radius: 50%;
            background: rgba(24, 116, 60, 0.08);
            color: #18743c;
        }

        .resultCard.limited .statusIcon {
            border-color: rgba(214, 161, 29, 0.28);
            background: rgba(214, 161, 29, 0.09);
            color: #9a710d;
        }

        .resultCard.unavailable .statusIcon {
            border-color: rgba(201, 75, 75, 0.24);
            background: rgba(201, 75, 75, 0.08);
            color: #b73f3f;
        }

        .statusIcon svg {
            width: 24px;
            height: 24px;
        }

        .statusLabel {
            margin-top: 24px;
            color: #78837b;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .statusValue {
            margin-top: 7px;
            font-family: "Antonio", sans-serif;
            font-size: 2rem;
            font-weight: 700;
            line-height: 1;
            text-transform: uppercase;
        }

        .statusZip {
            margin-top: 13px;
            color: #667169;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.1em;
        }

        .resultContent {
            padding: 36px;
        }

        .resultHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 30px;
        }

        .eyebrow {
            color: #7b867e;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .resultHeader h2 {
            margin-top: 10px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2rem, 3.2vw, 3.4rem);
            font-weight: 700;
            line-height: 0.98;
            text-transform: uppercase;
            letter-spacing: -0.03em;
        }

        .coverageBadge {
            flex: 0 0 auto;
            min-height: 36px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(24, 116, 60, 0.2);
            border-radius: 999px;
            background: rgba(24, 116, 60, 0.07);
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .coverageBadge i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: currentColor;
        }

        .coverageBadge.limited {
            border-color: rgba(214, 161, 29, 0.25);
            background: rgba(214, 161, 29, 0.08);
            color: #956d0c;
        }

        .coverageBadge.unavailable {
            border-color: rgba(201, 75, 75, 0.22);
            background: rgba(201, 75, 75, 0.07);
            color: #b63e3e;
        }

        .resultDescription {
            max-width: 820px;
            margin-top: 18px;
            color: #657068;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .resultGrid {
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border: 1px solid #e0e5e1;
            border-radius: 18px;
            overflow: hidden;
        }

        .resultGrid article {
            min-height: 118px;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 13px;
            border-right: 1px solid #e0e5e1;
            background: #fafbfa;
        }

        .resultGrid article:last-child {
            border-right: 0;
        }

        .infoIcon {
            flex: 0 0 auto;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dce2dd;
            border-radius: 50%;
            background: #ffffff;
            color: #18743c;
        }

        .infoIcon svg {
            width: 15px;
            height: 15px;
        }

        .infoLabel {
            display: block;
            color: #858f88;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .resultGrid strong {
            display: block;
            margin-top: 6px;
            color: #172018;
            font-size: 0.82rem;
            font-weight: 700;
            line-height: 1.45;
            word-break: break-word;
        }

        .resultFooter {
            margin-top: 24px;
            padding-top: 18px;
            display: flex;
            justify-content: space-between;
            gap: 20px;
            border-top: 1px solid #e5e9e6;
            color: #8b948e;
            font-size: 0.62rem;
        }

        .resultFooter span:first-child {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #647068;
        }

        .resultFooter i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 10px rgba(36, 167, 85, 0.35);
        }

        @media (max-width: 1100px) {
            .resultCard {
                grid-template-columns: 220px 1fr;
            }

            .resultGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .resultGrid article:nth-child(2) {
                border-right: 0;
            }

            .resultGrid article:nth-child(-n + 2) {
                border-bottom: 1px solid #e0e5e1;
            }
        }

        @media (max-width: 760px) {
            padding: 0 18px 90px;

            .resultCard {
                grid-template-columns: 1fr;
                border-radius: 22px;
            }

            .statusColumn {
                border-right: 0;
                border-bottom: 1px solid #e0e5e1;
            }

            .resultContent {
                padding: 26px 22px;
            }

            .resultHeader {
                flex-direction: column;
            }

            .resultGrid {
                grid-template-columns: 1fr;
            }

            .resultGrid article {
                min-height: 100px;
                border-right: 0;
                border-bottom: 1px solid #e0e5e1;
            }

            .resultGrid article:last-child {
                border-bottom: 0;
            }

            .resultFooter {
                flex-direction: column;
            }
        }
    `},Gh={full:"Full Coverage",partial:"Partial Coverage",unavailable:"Out of Service Area"},Qh={full:"available",partial:"limited",unavailable:"unavailable"},Zh=({submittedZip:o,matchedRegion:u,hasSearched:c})=>{if(!c)return null;const p=!u,h=p?"unavailable":u.coverageStatus,w=Gh[h]||"Coverage Available",j=Qh[h]||"available",N=h==="unavailable"?N0:bn;return s.jsx(Vh.Wrapper,{className:"resultSummary",children:s.jsx("div",{className:"resultInner",children:s.jsxs("div",{className:`resultCard ${j}`,children:[s.jsxs("div",{className:"statusColumn",children:[s.jsx("div",{className:"statusIcon",children:s.jsx(N,{})}),s.jsx("span",{className:"statusLabel",children:"Coverage result"}),s.jsx("strong",{className:"statusValue",children:w}),s.jsxs("span",{className:"statusZip",children:["ZIP ",o||"-"]})]}),s.jsxs("div",{className:"resultContent",children:[s.jsxs("div",{className:"resultHeader",children:[s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"SERVICE NETWORK RESPONSE"}),s.jsx("h2",{children:p?"This area is not active yet.":"Your area is covered."})]}),s.jsxs("span",{className:`coverageBadge ${j}`,children:[s.jsx("i",{}),w]})]}),s.jsx("p",{className:"resultDescription",children:p?"We could not match this ZIP code with an active regional service hub. You can try another nearby ZIP code or check back later as coverage expands.":"We matched your ZIP code with an active service region. Review the assigned hub, estimated response window, and service availability below."}),s.jsxs("div",{className:"resultGrid",children:[s.jsxs("article",{children:[s.jsx("span",{className:"infoIcon",children:s.jsx(_t,{})}),s.jsxs("div",{children:[s.jsx("span",{className:"infoLabel",children:"ZIP Code"}),s.jsx("strong",{children:o||"-"})]})]}),s.jsxs("article",{children:[s.jsx("span",{className:"infoIcon",children:s.jsx($s,{})}),s.jsxs("div",{children:[s.jsx("span",{className:"infoLabel",children:"Region"}),s.jsx("strong",{children:(u==null?void 0:u.name)||"Not Available"})]})]}),s.jsxs("article",{children:[s.jsx("span",{className:"infoIcon",children:s.jsx(_t,{})}),s.jsxs("div",{children:[s.jsx("span",{className:"infoLabel",children:"Nearest Hub"}),s.jsx("strong",{children:(u==null?void 0:u.hub)||"Not Assigned"})]})]}),s.jsxs("article",{children:[s.jsx("span",{className:"infoIcon",children:s.jsx(wo,{})}),s.jsxs("div",{children:[s.jsx("span",{className:"infoLabel",children:"Estimated Response"}),s.jsx("strong",{children:(u==null?void 0:u.eta)||"Unavailable"})]})]})]}),s.jsxs("div",{className:"resultFooter",children:[s.jsxs("span",{children:[s.jsx("i",{}),"Live coverage lookup completed"]}),s.jsxs("span",{children:["Result generated for ",o]})]})]})]})})})},Yh={Wrapper:xt.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #0a100c;
        color: #f5f7f5;
        scroll-margin-top: 88px;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.2;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.04) 1px,
                    transparent 1px
                );
            background-size: 68px 68px;
            pointer-events: none;
        }

        .servicesInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(300px, 500px);
            gap: 60px;
            align-items: end;
        }

        .eyebrow {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.64rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        h2 {
            margin-top: 18px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.9;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #76ff9d;
        }

        .sectionHeader > p {
            color: #818c84;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .servicesList {
            margin-top: 64px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
        }

        .serviceCard {
            position: relative;
            min-height: 330px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 22px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.045),
                rgba(255, 255, 255, 0.015)
            );
            transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                background 0.25s ease;
        }

        .serviceCard:hover {
            transform: translateY(-5px);
            border-color: rgba(118, 255, 157, 0.25);
            background: linear-gradient(
                145deg,
                rgba(118, 255, 157, 0.07),
                rgba(255, 255, 255, 0.015)
            );
        }

        .serviceCard::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            background: #76ff9d;
        }

        .serviceCard.limited::after {
            background: #f0bf48;
        }

        .serviceCard.unavailable::after {
            background: #de6868;
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }

        .serviceNumber {
            color: #4f5a53;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .serviceStatus {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.57rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .serviceStatus i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: currentColor;
            box-shadow: 0 0 10px currentColor;
        }

        .limited .serviceStatus {
            color: #f0bf48;
        }

        .unavailable .serviceStatus {
            color: #de6868;
        }

        .serviceIcon {
            width: 52px;
            height: 52px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.07);
            color: #76ff9d;
        }

        .limited .serviceIcon {
            border-color: rgba(240, 191, 72, 0.2);
            background: rgba(240, 191, 72, 0.07);
            color: #f0bf48;
        }

        .unavailable .serviceIcon {
            border-color: rgba(222, 104, 104, 0.2);
            background: rgba(222, 104, 104, 0.07);
            color: #de6868;
        }

        .serviceIcon svg {
            width: 20px;
            height: 20px;
        }

        .serviceCard h3 {
            margin-top: 24px;
            font-family: "Antonio", sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .serviceCard p {
            margin-top: 13px;
            color: #7f8982;
            font-size: 0.78rem;
            line-height: 1.7;
        }

        .cardFooter {
            margin-top: auto;
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
            color: #657068;
            font-size: 0.62rem;
        }

        .cardFooter svg {
            color: #76ff9d;
        }

        .limited .cardFooter svg {
            color: #f0bf48;
        }

        .unavailable .cardFooter svg {
            color: #de6868;
        }

        .emptyState {
            margin-top: 60px;
            padding: 38px;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 24px;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.025);
        }

        .emptyIcon {
            width: 62px;
            height: 62px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(222, 104, 104, 0.2);
            border-radius: 50%;
            background: rgba(222, 104, 104, 0.07);
            color: #de6868;
        }

        .emptyState span {
            color: #de6868;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        .emptyState h3 {
            margin-top: 7px;
            font-family: "Antonio", sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .emptyState p {
            max-width: 700px;
            margin-top: 8px;
            color: #7d8780;
            font-size: 0.78rem;
            line-height: 1.7;
        }

        @media (max-width: 1150px) {
            .servicesList {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 800px) {
            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 24px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .servicesList {
                grid-template-columns: 1fr;
            }

            .serviceCard {
                min-height: 290px;
            }

            .emptyState {
                grid-template-columns: 1fr;
                padding: 26px;
            }
        }
    `},Kh=({matchedRegion:o,hasSearched:u})=>{if(!u)return null;const c=(o==null?void 0:o.services)||[];return s.jsx(Yh.Wrapper,{className:"servicesGrid",children:s.jsxs("div",{className:"servicesInner",children:[s.jsxs("div",{className:"sectionHeader",children:[s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"02 / SERVICE AVAILABILITY"}),s.jsxs("h2",{children:["Services in",s.jsx("span",{children:"your area."})]})]}),s.jsx("p",{children:"Availability may vary by location, operating window, technician capacity, and regional support coverage."})]}),c.length>0?s.jsx("div",{className:"servicesList",children:c.map((p,h)=>{const w=p.status==="available"?"available":p.status==="limited"?"limited":"unavailable";return s.jsxs("article",{className:`serviceCard ${w}`,children:[s.jsxs("div",{className:"cardTop",children:[s.jsx("span",{className:"serviceNumber",children:String(h+1).padStart(2,"0")}),s.jsxs("span",{className:"serviceStatus",children:[s.jsx("i",{}),p.status]})]}),s.jsx("div",{className:"serviceIcon",children:p.status==="available"?s.jsx(S0,{}):p.status==="limited"?s.jsx(wo,{}):s.jsx(Ts,{})}),s.jsx("h3",{children:p.name}),s.jsx("p",{children:p.description||"Service availability is determined by current regional coverage and local operational capacity."}),s.jsxs("div",{className:"cardFooter",children:[s.jsx("span",{children:p.status==="available"?"Ready to schedule":p.status==="limited"?"Limited scheduling":"Not currently available"}),s.jsx(yd,{})]})]},`${p.name}-${h}`)})}):s.jsxs("div",{className:"emptyState",children:[s.jsx("div",{className:"emptyIcon",children:s.jsx(Ts,{})}),s.jsxs("div",{children:[s.jsx("span",{children:"NO ACTIVE SERVICES"}),s.jsx("h3",{children:"Service coverage is not available for this ZIP."}),s.jsx("p",{children:"Try another nearby ZIP code or check again later as the service network expands."})]})]})]})})},Xh={Wrapper:xt.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #f4f6f4;
        color: #101510;
        scroll-margin-top: 88px;

        .coverageInner {
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(300px, 500px);
            gap: 60px;
            align-items: end;
        }

        .eyebrow {
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.64rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        h2 {
            margin-top: 18px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.9;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #18743c;
        }

        .sectionHeader > p {
            color: #657068;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .coverageLayout {
            margin-top: 64px;
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
            gap: 16px;
        }

        .networkCard,
        .detailsPanel {
            border: 1px solid #d9dfda;
            border-radius: 26px;
            background: #ffffff;
            box-shadow: 0 24px 70px rgba(21, 47, 29, 0.06);
        }

        .networkCard {
            padding: 26px;
        }

        .networkTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 24px;
        }

        .panelLabel,
        .panelHeading > span {
            color: #7a857d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        .networkTop h3,
        .panelHeading h3 {
            margin-top: 7px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .networkStatus {
            min-height: 34px;
            padding: 0 11px;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            border: 1px solid rgba(24, 116, 60, 0.2);
            border-radius: 999px;
            background: rgba(24, 116, 60, 0.07);
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .networkStatus i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 10px rgba(36, 167, 85, 0.4);
        }

        .networkMap {
            position: relative;
            height: 390px;
            margin-top: 24px;
            overflow: hidden;
            border: 1px solid #dfe4e0;
            border-radius: 20px;
            background:
                radial-gradient(
                    circle at center,
                    rgba(24, 116, 60, 0.11),
                    transparent 45%
                ),
                #eef3ef;
        }

        .mapGrid {
            position: absolute;
            inset: 0;
            opacity: 0.8;
            background-image:
                linear-gradient(rgba(24, 116, 60, 0.08) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(24, 116, 60, 0.08) 1px,
                    transparent 1px
                );
            background-size: 42px 42px;
        }

        .signalRing {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid rgba(24, 116, 60, 0.18);
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }

        .ringOne {
            width: 190px;
            height: 190px;
        }

        .ringTwo {
            width: 310px;
            height: 310px;
            border-color: rgba(24, 116, 60, 0.09);
        }

        .hubPoint {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 12px;
            transform: translate(-50%, -50%);
        }

        .hubPoint > span {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(24, 116, 60, 0.25);
            border-radius: 50%;
            background: #ffffff;
            color: #18743c;
            box-shadow: 0 12px 35px rgba(24, 116, 60, 0.12);
        }

        .hubPoint > span svg {
            width: 21px;
            height: 21px;
        }

        .hubPoint div {
            min-width: 150px;
            padding: 10px 12px;
            border: 1px solid #d8ded9;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.95);
        }

        .hubPoint small {
            display: block;
            color: #89928c;
            font-family: "Antonio", sans-serif;
            font-size: 0.5rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .hubPoint strong {
            display: block;
            margin-top: 4px;
            font-family: "Antonio", sans-serif;
            font-size: 0.82rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .zoneTag {
            position: absolute;
            padding: 7px 10px;
            border: 1px solid #d7ddd8;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.9);
            color: #68736b;
            font-family: "Antonio", sans-serif;
            font-size: 0.54rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .zoneOne {
            top: 20%;
            left: 12%;
        }

        .zoneTwo {
            right: 10%;
            bottom: 20%;
        }

        .networkMeta {
            margin-top: 16px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .networkMeta div {
            min-height: 94px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            border: 1px solid #e0e5e1;
            border-radius: 14px;
            background: #fafbfa;
        }

        .networkMeta span {
            color: #879089;
            font-family: "Antonio", sans-serif;
            font-size: 0.55rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .networkMeta strong {
            margin-top: 7px;
            font-size: 0.8rem;
            line-height: 1.4;
        }

        .detailsPanel {
            padding: 28px;
        }

        .detailsList {
            margin-top: 28px;
            display: grid;
        }

        .detailsList article {
            min-height: 76px;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 14px;
            align-items: center;
            border-bottom: 1px solid #e4e8e5;
        }

        .detailsList article:last-child {
            border-bottom: 0;
        }

        .detailIcon {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dbe1dc;
            border-radius: 50%;
            background: #f6f8f6;
            color: #18743c;
        }

        .detailIcon svg {
            width: 15px;
            height: 15px;
        }

        .detailLabel {
            display: block;
            color: #8a938d;
            font-family: "Antonio", sans-serif;
            font-size: 0.55rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .detailsList strong {
            display: block;
            margin-top: 5px;
            color: #172018;
            font-size: 0.8rem;
            line-height: 1.45;
        }

        .logicSection {
            margin-top: 88px;
        }

        .logicHeader {
            max-width: 780px;
        }

        .logicHeader > span {
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        .logicHeader h3 {
            margin-top: 12px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2.2rem, 4vw, 4rem);
            font-weight: 700;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: -0.03em;
        }

        .logicGrid {
            margin-top: 38px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .logicGrid article {
            min-height: 270px;
            padding: 22px;
            display: flex;
            flex-direction: column;
            border: 1px solid #dce2dd;
            border-radius: 18px;
            background: #ffffff;
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;
        }

        .logicGrid article:hover {
            transform: translateY(-4px);
            border-color: rgba(24, 116, 60, 0.3);
            box-shadow: 0 16px 40px rgba(21, 47, 29, 0.06);
        }

        .reasonTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .reasonNumber {
            color: #9aa39d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .reasonIcon {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dbe1dc;
            border-radius: 50%;
            background: #f6f8f6;
            color: #18743c;
        }

        .reasonIcon svg {
            width: 15px;
            height: 15px;
        }

        .logicGrid h4 {
            margin-top: auto;
            font-family: "Antonio", sans-serif;
            font-size: 1.45rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .logicGrid p {
            margin-top: 12px;
            color: #6d776f;
            font-size: 0.75rem;
            line-height: 1.7;
        }

        @media (max-width: 1100px) {
            .coverageLayout {
                grid-template-columns: 1fr;
            }

            .logicGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 800px) {
            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 24px;
            }

            .networkMeta {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .networkCard,
            .detailsPanel {
                border-radius: 22px;
            }

            .networkCard {
                padding: 18px;
            }

            .detailsPanel {
                padding: 22px;
            }

            .networkTop {
                flex-direction: column;
            }

            .networkMap {
                height: 320px;
            }

            .hubPoint {
                flex-direction: column;
                text-align: center;
            }

            .hubPoint div {
                min-width: 140px;
            }

            .zoneOne {
                top: 12%;
                left: 6%;
            }

            .zoneTwo {
                right: 6%;
                bottom: 12%;
            }

            .logicGrid {
                grid-template-columns: 1fr;
            }

            .logicGrid article {
                min-height: 230px;
            }
        }
    `},qh=[{icon:wd,title:"Technician Coverage",description:"Certain services require specialized technicians and are only enabled where those teams are actively assigned."},{icon:$s,title:"Branch Reach",description:"Service hubs operate within dispatch radius limits to keep travel time practical and response consistent."},{icon:Ts,title:"Equipment Availability",description:"Specialized tools and service vehicles may only be available in selected regions or higher-priority zones."},{icon:Vs,title:"Dispatch Load",description:"Capacity can vary by area based on route load, scheduling demand, and emergency prioritization."}],Jh=({matchedRegion:o,hasSearched:u})=>{if(!u||!o)return null;const c=[{icon:Us,label:"Service Region",value:o.name},{icon:g0,label:"Coverage Tier",value:o.tierLabel},{icon:$s,label:"Dispatch Radius",value:o.dispatchRadius},{icon:_t,label:"Nearest Hub",value:o.hub},{icon:wd,label:"Weekend Support",value:o.weekendSupport},{icon:Vs,label:"Emergency Routing",value:o.emergencyRouting},{icon:Sd,label:"Branch Capacity",value:o.branchCapacity}];return s.jsx(Xh.Wrapper,{className:"coverageDetails",children:s.jsxs("div",{className:"coverageInner",children:[s.jsxs("div",{className:"sectionHeader",children:[s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"03 / COVERAGE DETAILS"}),s.jsxs("h2",{children:["Regional service",s.jsx("span",{children:"coverage."})]})]}),s.jsx("p",{children:"Your ZIP code falls within an active service region. These operational details determine routing, response availability, and service capacity."})]}),s.jsxs("div",{className:"coverageLayout",children:[s.jsxs("div",{className:"networkCard",children:[s.jsxs("div",{className:"networkTop",children:[s.jsxs("div",{children:[s.jsx("span",{className:"panelLabel",children:"ACTIVE REGION"}),s.jsx("h3",{children:o.name})]}),s.jsxs("span",{className:"networkStatus",children:[s.jsx("i",{}),"Connected"]})]}),s.jsxs("div",{className:"networkMap",children:[s.jsx("div",{className:"mapGrid"}),s.jsx("div",{className:"signalRing ringOne"}),s.jsx("div",{className:"signalRing ringTwo"}),s.jsxs("div",{className:"hubPoint",children:[s.jsx("span",{children:s.jsx(_t,{})}),s.jsxs("div",{children:[s.jsx("small",{children:"PRIMARY HUB"}),s.jsx("strong",{children:o.hub})]})]}),s.jsx("span",{className:"zoneTag zoneOne",children:"Coverage Zone"}),s.jsx("span",{className:"zoneTag zoneTwo",children:"Dispatch Network"})]}),s.jsxs("div",{className:"networkMeta",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Coverage Tier"}),s.jsx("strong",{children:o.tierLabel})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Dispatch Radius"}),s.jsx("strong",{children:o.dispatchRadius})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Branch Capacity"}),s.jsx("strong",{children:o.branchCapacity})]})]})]}),s.jsxs("div",{className:"detailsPanel",children:[s.jsxs("div",{className:"panelHeading",children:[s.jsx("span",{children:"REGIONAL OPERATIONS"}),s.jsx("h3",{children:"Coverage information"})]}),s.jsx("div",{className:"detailsList",children:c.map(p=>{const h=p.icon;return s.jsxs("article",{children:[s.jsx("span",{className:"detailIcon",children:s.jsx(h,{})}),s.jsxs("div",{children:[s.jsx("span",{className:"detailLabel",children:p.label}),s.jsx("strong",{children:p.value})]})]},p.label)})})]})]}),s.jsxs("div",{className:"logicSection",children:[s.jsxs("div",{className:"logicHeader",children:[s.jsx("span",{children:"AVAILABILITY LOGIC"}),s.jsx("h3",{children:"Why service availability can vary by ZIP code."})]}),s.jsx("div",{className:"logicGrid",children:qh.map((p,h)=>{const w=p.icon;return s.jsxs("article",{children:[s.jsxs("div",{className:"reasonTop",children:[s.jsx("span",{className:"reasonNumber",children:String(h+1).padStart(2,"0")}),s.jsx("span",{className:"reasonIcon",children:s.jsx(w,{})})]}),s.jsx("h4",{children:p.title}),s.jsx("p",{children:p.description})]},p.title)})})]})]})})},em={Wrapper:xt.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #080c0a;
        color: #f5f7f5;
        scroll-margin-top: 88px;

        .sectionGrid {
            position: absolute;
            inset: 0;
            opacity: 0.2;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.04) 1px,
                    transparent 1px
                );
            background-size: 70px 70px;
            pointer-events: none;
        }

        .howInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(320px, 460px);
            gap: 70px;
            align-items: end;
        }

        .eyebrow {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.64rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        h2 {
            margin-top: 18px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.9;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #76ff9d;
        }

        .headerInfo {
            display: grid;
            gap: 18px;
        }

        .headerInfo p {
            color: #7f8a82;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .liveBadge {
            width: fit-content;
            min-height: 34px;
            padding: 0 11px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 999px;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .liveBadge i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 12px rgba(118, 255, 157, 0.6);
        }

        .processGrid {
            position: relative;
            margin-top: 70px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
        }

        .processCard {
            position: relative;
            min-height: 360px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 22px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.045),
                rgba(255, 255, 255, 0.015)
            );
            transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                background 0.25s ease;
        }

        .processCard:hover {
            transform: translateY(-5px);
            border-color: rgba(118, 255, 157, 0.25);
            background: linear-gradient(
                145deg,
                rgba(118, 255, 157, 0.07),
                rgba(255, 255, 255, 0.015)
            );
        }

        .cardHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
        }

        .stepNumber {
            color: #4f5a53;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .stepIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
        }

        .stepIcon svg {
            width: 17px;
            height: 17px;
        }

        .connector {
            position: relative;
            width: 100%;
            height: 1px;
            margin-top: 34px;
            background: rgba(255, 255, 255, 0.08);
        }

        .connector span {
            position: absolute;
            top: 50%;
            left: 0;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #76ff9d;
            transform: translateY(-50%);
            box-shadow: 0 0 14px rgba(118, 255, 157, 0.6);
        }

        .cardContent {
            margin-top: auto;
            padding-top: 52px;
        }

        .stepLabel {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .cardContent h3 {
            margin-top: 10px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(1.6rem, 2vw, 2.1rem);
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .cardContent p {
            margin-top: 14px;
            color: #7b867f;
            font-size: 0.76rem;
            line-height: 1.75;
        }

        .processFooter {
            margin-top: 16px;
            padding: 24px;
            display: grid;
            grid-template-columns: minmax(260px, 0.8fr) 1.2fr;
            gap: 40px;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.025);
        }

        .processStatus {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .statusIcon {
            flex: 0 0 auto;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
        }

        .processStatus div {
            display: grid;
            gap: 4px;
        }

        .processStatus div > span {
            color: #5f6a63;
            font-family: "Antonio", sans-serif;
            font-size: 0.54rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .processStatus strong {
            font-family: "Antonio", sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .processMeta {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .processMeta span {
            min-height: 68px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            color: #647068;
            font-size: 0.6rem;
        }

        .processMeta strong {
            margin-bottom: 5px;
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.1em;
        }

        @media (max-width: 1100px) {
            .processGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .processFooter {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 800px) {
            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 28px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .processGrid {
                grid-template-columns: 1fr;
                margin-top: 48px;
            }

            .processCard {
                min-height: 310px;
            }

            .processFooter {
                padding: 20px;
            }

            .processMeta {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 440px) {
            .processMeta {
                grid-template-columns: 1fr;
            }

            .processMeta span {
                border-left: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            .processMeta span:last-child {
                border-bottom: 0;
            }
        }
    `},tm=[{number:"01",icon:jd,title:"Enter ZIP Code",description:"Start with your 6-digit ZIP code so the checker can identify the correct regional coverage zone."},{number:"02",icon:Sd,title:"Match Service Region",description:"The system compares your location with active service hubs, regional rules, and operational coverage data."},{number:"03",icon:_t,title:"Review Local Coverage",description:"See the matched region, nearest hub, dispatch radius, support status, and service-specific availability."},{number:"04",icon:bn,title:"Know Before Booking",description:"Use the result to understand whether services are available, limited, or currently outside the service area."}],nm=()=>s.jsxs(em.Wrapper,{className:"howItWorks",children:[s.jsx("div",{className:"sectionGrid"}),s.jsxs("div",{className:"howInner",children:[s.jsxs("div",{className:"sectionHeader",children:[s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"04 / HOW IT WORKS"}),s.jsxs("h2",{children:["From ZIP code",s.jsx("span",{children:"to coverage."})]})]}),s.jsxs("div",{className:"headerInfo",children:[s.jsxs("span",{className:"liveBadge",children:[s.jsx("i",{}),"Coverage engine online"]}),s.jsx("p",{children:"A simple four-step lookup turns a ZIP code into a clear service availability result."})]})]}),s.jsx("div",{className:"processGrid",children:tm.map(o=>{const u=o.icon;return s.jsxs("article",{className:"processCard",children:[s.jsxs("div",{className:"cardHeader",children:[s.jsx("span",{className:"stepNumber",children:o.number}),s.jsx("span",{className:"stepIcon",children:s.jsx(u,{})})]}),s.jsx("div",{className:"connector",children:s.jsx("span",{})}),s.jsxs("div",{className:"cardContent",children:[s.jsxs("span",{className:"stepLabel",children:["STEP ",o.number]}),s.jsx("h3",{children:o.title}),s.jsx("p",{children:o.description})]})]},o.number)})}),s.jsxs("div",{className:"processFooter",children:[s.jsxs("div",{className:"processStatus",children:[s.jsx("span",{className:"statusIcon",children:s.jsx(bn,{})}),s.jsxs("div",{children:[s.jsx("span",{children:"LOOKUP PROCESS"}),s.jsx("strong",{children:"Fast, clear, location-based availability"})]})]}),s.jsxs("div",{className:"processMeta",children:[s.jsxs("span",{children:[s.jsx("strong",{children:"01"}),"ZIP input"]}),s.jsxs("span",{children:[s.jsx("strong",{children:"02"}),"Region match"]}),s.jsxs("span",{children:[s.jsx("strong",{children:"03"}),"Coverage data"]}),s.jsxs("span",{children:[s.jsx("strong",{children:"04"}),"Service result"]})]})]})]})]}),rm={Wrapper:xt.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #edf1ed;
        color: #101510;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            right: -180px;
            width: 520px;
            height: 520px;
            border-radius: 50%;
            background: rgba(24, 116, 60, 0.06);
            filter: blur(120px);
            pointer-events: none;
        }

        .trustInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .trustIntro {
            max-width: 760px;
        }

        .eyebrow {
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        h2 {
            margin-top: 18px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.9;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #18743c;
        }

        .trustIntro > p {
            max-width: 590px;
            margin-top: 25px;
            color: #667168;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .trustGrid {
            margin-top: 62px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-top: 1px solid #cfd6d0;
            border-bottom: 1px solid #cfd6d0;
        }

        .trustGrid article {
            position: relative;
            min-height: 340px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid #cfd6d0;
            transition:
                background 0.25s ease,
                transform 0.25s ease;
        }

        .trustGrid article:last-child {
            border-right: 0;
        }

        .trustGrid article:hover {
            background: rgba(255, 255, 255, 0.5);
            transform: translateY(-4px);
        }

        .itemTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
        }

        .itemNumber {
            color: #89938c;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .itemIcon {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #cad2cb;
            border-radius: 50%;
            background: #f7f9f7;
            color: #18743c;
        }

        .itemIcon svg {
            width: 17px;
            height: 17px;
        }

        .itemValue {
            margin-top: auto;
            padding-top: 70px;
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2.5rem, 4vw, 4rem);
            font-weight: 700;
            line-height: 0.9;
            text-transform: uppercase;
            letter-spacing: -0.03em;
        }

        .trustGrid h3 {
            margin-top: 14px;
            font-family: "Antonio", sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .trustGrid p {
            margin-top: 12px;
            color: #6f7972;
            font-size: 0.74rem;
            line-height: 1.7;
        }

        .networkFooter {
            min-height: 84px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 26px;
            align-items: center;
        }

        .networkState {
            display: flex;
            align-items: center;
            gap: 11px;
        }

        .liveDot {
            position: relative;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 14px rgba(36, 167, 85, 0.4);
        }

        .liveDot::after {
            content: "";
            position: absolute;
            inset: -5px;
            border: 1px solid rgba(36, 167, 85, 0.18);
            border-radius: 50%;
        }

        .networkState div {
            display: grid;
            gap: 3px;
        }

        .networkState div > span {
            color: #8b958e;
            font-family: "Antonio", sans-serif;
            font-size: 0.52rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .networkState strong {
            color: #263028;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .networkLine {
            height: 1px;
            background: #cfd6d0;
        }

        .networkLine span {
            display: block;
            width: 24%;
            height: 100%;
            background: #18743c;
        }

        .networkMessage {
            color: #7d8780;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        @media (max-width: 1100px) {
            .trustGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .trustGrid article:nth-child(2) {
                border-right: 0;
            }

            .trustGrid article:nth-child(-n + 2) {
                border-bottom: 1px solid #cfd6d0;
            }
        }

        @media (max-width: 760px) {
            padding: 90px 18px;

            .trustGrid {
                grid-template-columns: 1fr;
            }

            .trustGrid article {
                min-height: 280px;
                border-right: 0;
                border-bottom: 1px solid #cfd6d0;
            }

            .trustGrid article:nth-child(2) {
                border-bottom: 1px solid #cfd6d0;
            }

            .trustGrid article:last-child {
                border-bottom: 0;
            }

            .itemValue {
                padding-top: 55px;
            }

            .networkFooter {
                padding: 22px 0;
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .networkLine {
                width: 100%;
            }
        }
    `},im=[{icon:Us,value:"Regional",label:"Coverage Mapping",description:"ZIP-based lookup helps identify active service regions and nearby operational hubs."},{icon:wo,value:"24/7",label:"Status Visibility",description:"Coverage information remains available whenever you need to check service reach."},{icon:kd,value:"No Signup",label:"Simple Lookup",description:"Check availability directly without creating an account or sharing unnecessary details."},{icon:Vs,value:"Instant",label:"Service Response",description:"Coverage results are generated immediately from the configured regional service data."}],om=()=>s.jsx(rm.Wrapper,{className:"trustStrip",children:s.jsxs("div",{className:"trustInner",children:[s.jsxs("div",{className:"trustIntro",children:[s.jsx("span",{className:"eyebrow",children:"NETWORK CONFIDENCE"}),s.jsxs("h2",{children:["Clear coverage.",s.jsx("span",{children:"Better decisions."})]}),s.jsx("p",{children:"The checker is designed to make service availability easier to understand before scheduling or contacting support."})]}),s.jsx("div",{className:"trustGrid",children:im.map((o,u)=>{const c=o.icon;return s.jsxs("article",{children:[s.jsxs("div",{className:"itemTop",children:[s.jsx("span",{className:"itemNumber",children:String(u+1).padStart(2,"0")}),s.jsx("span",{className:"itemIcon",children:s.jsx(c,{})})]}),s.jsx("strong",{className:"itemValue",children:o.value}),s.jsx("h3",{children:o.label}),s.jsx("p",{children:o.description})]},o.label)})}),s.jsxs("div",{className:"networkFooter",children:[s.jsxs("div",{className:"networkState",children:[s.jsx("span",{className:"liveDot"}),s.jsxs("div",{children:[s.jsx("span",{children:"SYSTEM STATUS"}),s.jsx("strong",{children:"Service checker operational"})]})]}),s.jsx("div",{className:"networkLine",children:s.jsx("span",{})}),s.jsx("span",{className:"networkMessage",children:"Built for fast service-area discovery"})]})]})}),lm={Wrapper:xt.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #0d2d1b;
        color: #f6f8f6;

        .ctaGrid {
            position: absolute;
            inset: 0;
            opacity: 0.16;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.05) 1px,
                    transparent 1px
                );
            background-size: 68px 68px;
            pointer-events: none;
        }

        &::before {
            content: "";
            position: absolute;
            top: -120px;
            right: -80px;
            width: 420px;
            height: 420px;
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.1);
            filter: blur(120px);
            pointer-events: none;
        }

        .ctaInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
            gap: clamp(50px, 8vw, 120px);
            align-items: center;
        }

        .ctaContent {
            max-width: 820px;
        }

        .eyebrow {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        h2 {
            margin-top: 18px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(4rem, 6.5vw, 7.4rem);
            font-weight: 700;
            line-height: 0.89;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #76ff9d;
        }

        .ctaContent > p {
            max-width: 620px;
            margin-top: 26px;
            color: #a0ada4;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .ctaActions {
            margin-top: 34px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .ctaActions button,
        .ctaActions a {
            min-height: 54px;
            padding: 0 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 999px;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        .ctaActions button:hover,
        .ctaActions a:hover {
            transform: translateY(-2px);
        }

        .primaryAction {
            border: 1px solid #76ff9d;
            background: #76ff9d;
            color: #08100b;
        }

        .primaryAction:hover {
            border-color: #96ffb5;
            background: #96ffb5;
        }

        .secondaryAction {
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: transparent;
            color: #f6f8f6;
        }

        .secondaryAction:hover {
            border-color: rgba(118, 255, 157, 0.4);
            background: rgba(118, 255, 157, 0.06);
        }

        .ctaPanel {
            padding: 28px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 26px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.055),
                rgba(255, 255, 255, 0.015)
            );
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
        }

        .panelIcon {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.2);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.07);
            color: #76ff9d;
        }

        .panelIcon svg {
            width: 21px;
            height: 21px;
        }

        .panelContent {
            margin-top: 40px;
        }

        .panelContent > span {
            color: #728078;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .panelContent strong {
            display: block;
            margin-top: 10px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2rem, 3vw, 3.1rem);
            font-weight: 600;
            line-height: 0.98;
            text-transform: uppercase;
        }

        .panelContent p {
            margin-top: 16px;
            color: #859188;
            font-size: 0.76rem;
            line-height: 1.7;
        }

        .panelFooter {
            margin-top: 34px;
            padding-top: 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            color: #748178;
            font-size: 0.6rem;
        }

        .panelFooter span:first-child {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #8e9b92;
        }

        .panelFooter i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 12px rgba(118, 255, 157, 0.55);
        }

        @media (max-width: 1000px) {
            .ctaInner {
                grid-template-columns: 1fr;
            }

            .ctaPanel {
                max-width: 620px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .ctaActions {
                flex-direction: column;
            }

            .ctaActions button,
            .ctaActions a {
                width: 100%;
            }

            .ctaPanel {
                padding: 22px;
                border-radius: 22px;
            }
        }
    `},sm=({handleReset:o})=>s.jsxs(lm.Wrapper,{className:"bottomCta",children:[s.jsx("div",{className:"ctaGrid"}),s.jsxs("div",{className:"ctaInner",children:[s.jsxs("div",{className:"ctaContent",children:[s.jsx("span",{className:"eyebrow",children:"READY TO CHECK AGAIN?"}),s.jsxs("h2",{children:["Find service",s.jsx("span",{children:"availability fast."})]}),s.jsx("p",{children:"Run another ZIP lookup to compare coverage areas, regional hubs, service status, and local operational availability."}),s.jsxs("div",{className:"ctaActions",children:[s.jsxs("button",{className:"primaryAction",type:"button",onClick:o,children:[s.jsx(m0,{}),"Check another ZIP"]}),s.jsxs("a",{className:"secondaryAction",href:"https://github.com/a2rp/service-area-checker-ui",target:"_blank",rel:"noreferrer",children:["View repository",s.jsx(As,{})]})]})]}),s.jsxs("div",{className:"ctaPanel",children:[s.jsx("div",{className:"panelIcon",children:s.jsx(_t,{})}),s.jsxs("div",{className:"panelContent",children:[s.jsx("span",{children:"LOCATION LOOKUP"}),s.jsxs("strong",{children:["One ZIP code.",s.jsx("br",{}),"Clear coverage."]}),s.jsx("p",{children:"No account required. Just enter a valid ZIP code and review the available service network."})]}),s.jsxs("div",{className:"panelFooter",children:[s.jsxs("span",{children:[s.jsx("i",{}),"Checker ready"]}),s.jsx("span",{children:"6-digit ZIP"})]})]})]})]});function am(o){return ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(o)}function um(o){return ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(o)}function cm(o){return ae({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(o)}function dm(o){return ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z"},child:[]}]})(o)}const pm={Wrapper:xt.footer`
        position: relative;
        padding: 76px 24px 28px;
        overflow: hidden;
        background: #060906;
        color: #f4f7f4;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: min(1440px, calc(100% - 48px));
            height: 1px;
            background: rgba(255, 255, 255, 0.08);
            transform: translateX(-50%);
        }

        .footerInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .footerTop {
            display: grid;
            grid-template-columns: minmax(300px, 1.2fr) 0.7fr 1fr;
            gap: clamp(50px, 7vw, 110px);
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 13px;
        }

        .brandIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.24);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
        }

        .brandIcon svg {
            width: 19px;
            height: 19px;
        }

        .brandText {
            display: flex;
            flex-direction: column;
            font-family: "Antonio", sans-serif;
            line-height: 0.95;
            text-transform: uppercase;
        }

        .brandText strong {
            font-size: 1.35rem;
            font-weight: 700;
            letter-spacing: 0.02em;
        }

        .brandText span {
            margin-top: 5px;
            color: #76ff9d;
            font-size: 0.66rem;
            font-weight: 600;
            letter-spacing: 0.18em;
        }

        .brandColumn > p {
            max-width: 470px;
            margin-top: 24px;
            color: #737e76;
            font-size: 0.78rem;
            line-height: 1.75;
        }

        .emailLink {
            width: fit-content;
            margin-top: 22px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #9ca79f;
            font-size: 0.72rem;
            transition: color 0.2s ease;
        }

        .emailLink:hover {
            color: #76ff9d;
        }

        .emailLink svg {
            color: #76ff9d;
        }

        .columnLabel {
            display: block;
            margin-bottom: 20px;
            color: #515b54;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.16em;
        }

        .footerLinks {
            display: grid;
        }

        .footerLinks a {
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
            color: #a0aaa3;
            font-family: "Antonio", sans-serif;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            transition:
                color 0.2s ease,
                padding-left 0.2s ease;
        }

        .footerLinks a:hover {
            padding-left: 5px;
            color: #76ff9d;
        }

        .footerLinks svg {
            width: 14px;
            height: 14px;
        }

        .socialGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }

        .socialGrid a {
            min-height: 58px;
            padding: 0 14px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 13px;
            background: rgba(255, 255, 255, 0.02);
            color: #8f9a92;
            font-size: 0.68rem;
            transition:
                border-color 0.2s ease,
                background 0.2s ease,
                color 0.2s ease,
                transform 0.2s ease;
        }

        .socialGrid a:hover {
            border-color: rgba(118, 255, 157, 0.2);
            background: rgba(118, 255, 157, 0.05);
            color: #f4f7f4;
            transform: translateY(-2px);
        }

        .socialGrid a > svg:first-child {
            color: #76ff9d;
        }

        .socialGrid a > svg:last-child {
            width: 12px;
            height: 12px;
            color: #59645c;
        }

        .footerDivider {
            height: 1px;
            margin-top: 64px;
            background: rgba(255, 255, 255, 0.08);
        }

        .footerBottom {
            min-height: 72px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }

        .copyright {
            display: flex;
            gap: 12px;
            color: #59635c;
            font-size: 0.62rem;
        }

        .buildMeta {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #59635c;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.09em;
        }

        .buildMeta span:first-child {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #7d8980;
        }

        .buildMeta i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 10px rgba(118, 255, 157, 0.45);
        }

        .iconOnlyGrid { grid-template-columns: repeat(3, minmax(48px, 1fr)); }
        .iconOnlyGrid a { min-height: 48px; padding: 0; display: grid; place-items: center; grid-template-columns: 1fr; }
        .iconOnlyGrid a > svg { width: 18px; height: 18px; }

        @media (max-width: 1050px) {
            .footerTop {
                grid-template-columns: 1fr 1fr;
            }

            .brandColumn {
                grid-column: 1 / -1;
                max-width: 640px;
            }
        }

        @media (max-width: 700px) {
            padding: 62px 18px 22px;

            .footerTop {
                grid-template-columns: 1fr;
                gap: 44px;
            }

            .brandColumn {
                grid-column: auto;
            }

            .socialGrid {
                grid-template-columns: 1fr;
            }

            .footerDivider {
                margin-top: 48px;
            }

            .footerBottom {
                padding: 22px 0;
                flex-direction: column;
                align-items: flex-start;
            }

            .copyright {
                flex-direction: column;
                gap: 5px;
            }

            .buildMeta {
                flex-wrap: wrap;
            }
        }
    `},fm=[["Portfolio","https://www.ashishranjan.net/",Cd],["GitHub","https://github.com/a2rp",Nd],["CodePen","https://codepen.io/ash1198",dm],["LinkedIn","https://www.linkedin.com/in/aashishranjan",um],["Facebook","https://www.facebook.com/theash.ashish/",cm],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",am],["Email","mailto:ash.ranjan09@gmail.com",bd]],hm=[["Support","https://a2rp-donation-page.netlify.app/",y0],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",k0],["Patreon","https://patreon.com/a2rp",j0]];function gd({items:o}){return s.jsx("div",{className:"socialGrid iconOnlyGrid",children:o.map(([u,c,p])=>s.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":u,title:u,children:Le.createElement(p,{"aria-hidden":!0})},u))})}const mm=()=>s.jsx(pm.Wrapper,{className:"footer",children:s.jsxs("div",{className:"footerInner",children:[s.jsxs("div",{className:"footerTop",children:[s.jsxs("div",{className:"brandColumn",children:[s.jsxs("div",{className:"brand",children:[s.jsx("span",{className:"brandIcon",children:s.jsx(Cd,{})}),s.jsxs("span",{className:"brandText",children:[s.jsx("strong",{children:"Service Area"}),s.jsx("span",{children:"Checker UI"})]})]}),s.jsx("p",{children:"A modern service-area availability interface for checking ZIP-based regional coverage and supported services."}),s.jsxs("a",{className:"emailLink",href:"mailto:ash.ranjan09@gmail.com",children:[s.jsx(bd,{})," ash.ranjan09@gmail.com"]})]}),s.jsxs("div",{className:"linkColumn",children:[s.jsx("span",{className:"columnLabel",children:"CONNECT"}),s.jsx(gd,{items:fm})]}),s.jsxs("div",{className:"linkColumn",children:[s.jsx("span",{className:"columnLabel",children:"SUPPORT"}),s.jsx(gd,{items:hm})]})]}),s.jsx("div",{className:"footerDivider"}),s.jsxs("div",{className:"footerBottom",children:[s.jsxs("div",{className:"copyright",children:[s.jsxs("span",{children:["Copyright © ",new Date().getFullYear()," ",s.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),s.jsx("span",{children:"All rights reserved."})]}),s.jsxs("div",{className:"buildMeta",children:[s.jsxs("span",{children:[s.jsx("i",{}),"Interface operational"]}),s.jsx("span",{children:"React + Vite"})]})]})]})}),gm={Wrapper:xt.div`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 1200;

        button {
            width: 48px;
            height: 48px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.28);
            border-radius: 50%;
            background: #0d2d1b;
            color: #76ff9d;
            cursor: pointer;
            box-shadow:
                0 16px 36px rgba(0, 0, 0, 0.24),
                0 0 0 1px rgba(255, 255, 255, 0.03);
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        button:hover {
            transform: translateY(-4px);
            border-color: rgba(118, 255, 157, 0.55);
            background: #143d25;
        }

        button:focus-visible {
            outline: 2px solid #76ff9d;
            outline-offset: 3px;
        }

        button svg {
            width: 18px;
            height: 18px;
        }

        @media (max-width: 700px) {
            right: 16px;
            bottom: 16px;

            button {
                width: 44px;
                height: 44px;
            }
        }
    `},xm=()=>{const[o,u]=Le.useState(!1);Le.useEffect(()=>{const p=()=>{u(window.scrollY>320)};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>{window.removeEventListener("scroll",p)}},[]);const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o?s.jsx(gm.Wrapper,{children:s.jsx("button",{type:"button",onClick:c,"aria-label":"Go to top",title:"Go to top",children:s.jsx(b0,{})})}):null},vm=[{id:"east-bangalore",name:"East Bangalore",zipCodes:["560037","560048","560066","560067"],hub:"Whitefield Service Center",coverageStatus:"full",eta:"2 to 4 hours",dispatchRadius:"Up to 18 km",weekendSupport:"Available",emergencyRouting:"Enabled",branchCapacity:"High",tierLabel:"Tier A Coverage Zone",services:{plumbing:{status:"available",note:"Same-day support available"},drainCleaning:{status:"available",note:"Available in all active zones"},waterHeaterRepair:{status:"available",note:"Technician assignment required"},leakDetection:{status:"limited",note:"Available in selected ZIP clusters"},electricalRepairs:{status:"limited",note:"Only covered by selected hubs"},sewerLineService:{status:"unavailable",note:"Not supported in this ZIP code"},emergencyVisit:{status:"available",note:"24/7 only in high-priority zones"},installationService:{status:"available",note:"Appointment slot may apply"}}},{id:"central-bangalore",name:"Central Bangalore",zipCodes:["560001","560002","560027","560030"],hub:"Richmond Town Hub",coverageStatus:"full",eta:"1 to 3 hours",dispatchRadius:"Up to 14 km",weekendSupport:"Available",emergencyRouting:"Enabled",branchCapacity:"High",tierLabel:"Tier A Coverage Zone",services:{plumbing:{status:"available",note:"Fast routing available"},drainCleaning:{status:"available",note:"Available across central zones"},waterHeaterRepair:{status:"limited",note:"Based on technician schedule"},leakDetection:{status:"available",note:"Inspection support available"},electricalRepairs:{status:"available",note:"Covered by partner technicians"},sewerLineService:{status:"limited",note:"Depends on equipment availability"},emergencyVisit:{status:"available",note:"Priority dispatch supported"},installationService:{status:"available",note:"Advance slot may be required"}}},{id:"north-bangalore",name:"North Bangalore",zipCodes:["560063","560064","560092","560097"],hub:"Hebbal Service Hub",coverageStatus:"partial",eta:"4 to 8 hours",dispatchRadius:"Up to 22 km",weekendSupport:"Limited",emergencyRouting:"Selected areas only",branchCapacity:"Medium",tierLabel:"Tier B Coverage Zone",services:{plumbing:{status:"available",note:"Core support available"},drainCleaning:{status:"available",note:"Available in active routes"},waterHeaterRepair:{status:"limited",note:"Subject to technician availability"},leakDetection:{status:"limited",note:"Coverage is cluster-based"},electricalRepairs:{status:"unavailable",note:"Currently not served in this zone"},sewerLineService:{status:"unavailable",note:"Specialized support not assigned"},emergencyVisit:{status:"limited",note:"Emergency support in selected pockets"},installationService:{status:"available",note:"Booking slot required"}}}],ym=o=>{if(!o)return null;const u=String(o).trim();for(const c of vm)if(c.zipCodes.includes(u))return c;return null},wm=()=>{const[o,u]=Le.useState(""),[c,p]=Le.useState(""),[h,w]=Le.useState(null),[j,N]=Le.useState(!1),[S,P]=Le.useState(""),[B,R]=Le.useState("top"),H=Le.useRef(null),ee=Le.useRef(null),Y=Le.useRef(null),V=Le.useRef(null),X=Le.useRef(null),oe=Le.useRef(null),F=Le.useMemo(()=>o.replace(/\D/g,"").slice(0,6),[o]),fe=_=>{if(!(_!=null&&_.current))return;const $=document.querySelector(".siteHeader"),je=$?$.getBoundingClientRect().height:0,Re=_.current.getBoundingClientRect().top+window.scrollY-je-12;window.scrollTo({top:Math.max(Re,0),behavior:"smooth"})},de=_=>{const $={top:H,checker:ee,services:V,coverage:X,howItWorks:oe};if(!j&&(_==="services"||_==="coverage")){R("checker"),fe(ee);return}R(_),fe($[_])},le=()=>{const _=F.trim();if(!_){P("Please enter a ZIP code."),N(!1),w(null),p("");return}if(!/^\d{6}$/.test(_)){P("Please enter a valid 6-digit ZIP code."),N(!1),w(null),p("");return}const $=ym(_);P(""),p(_),w($),N(!0),u(_),requestAnimationFrame(()=>{requestAnimationFrame(()=>{fe(Y)})})},re=()=>{u(""),p(""),w(null),N(!1),P(""),R("checker"),requestAnimationFrame(()=>{fe(ee)})};return Le.useEffect(()=>{const _=[{name:"top",ref:H},{name:"checker",ref:ee},{name:"services",ref:V},{name:"coverage",ref:X},{name:"howItWorks",ref:oe}],$=new IntersectionObserver(je=>{const be=je.filter(ie=>ie.isIntersecting).sort((ie,Ee)=>Ee.intersectionRatio-ie.intersectionRatio)[0];if(!be)return;const Ie=_.find(ie=>ie.ref.current===be.target);Ie&&(!j&&(Ie.name==="services"||Ie.name==="coverage")||R(Ie.name))},{root:null,rootMargin:"-90px 0px -45% 0px",threshold:[.1,.25,.5,.75]});return _.forEach(je=>{je.ref.current&&$.observe(je.ref.current)}),()=>{$.disconnect()}},[j]),s.jsxs(s.Fragment,{children:[s.jsx(Dh,{hasSearched:j,activeSection:B,onNavigate:de}),s.jsxs("main",{className:"appMain",children:[s.jsx("div",{ref:H,className:"topSection",children:s.jsx(Wh,{onGoChecker:()=>de("checker"),onGoCoverage:()=>de("coverage")})}),s.jsx("div",{ref:ee,className:"checkerSection",children:s.jsx(Uh,{zipCode:o,setZipCode:u,handleCheckZip:le,error:S})}),s.jsx("div",{ref:Y,className:"resultSection",children:s.jsx(Zh,{submittedZip:c,matchedRegion:h,hasSearched:j})}),s.jsx("div",{ref:V,className:"servicesSection",children:s.jsx(Kh,{matchedRegion:h,hasSearched:j})}),s.jsx("div",{ref:X,className:"coverageSection",children:s.jsx(Jh,{matchedRegion:h,hasSearched:j})}),s.jsx("div",{ref:oe,className:"howItWorksSection",children:s.jsx(nm,{})}),s.jsx("div",{className:"trustSection",children:s.jsx(om,{})}),s.jsx("div",{className:"bottomCtaSection",children:s.jsx(sm,{handleReset:re})})]}),s.jsx(mm,{}),s.jsx(xm,{})]})};l0.createRoot(document.getElementById("root")).render(s.jsx(s.Fragment,{children:s.jsx(wm,{})}));
