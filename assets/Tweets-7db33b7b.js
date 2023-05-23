import{n as g,r as T,C as Se,j as w,g as $e,G as Xe,L as Ge}from"./index-2f5b3694.js";const Qe=g.select`
width: 200px;
padding: 10px;
outline: none;
border-color: #5CD3A8;
border-radius: 10px;

`,Ye=()=>{const{select:e,setSelect:t}=T.useContext(Se),n=r=>{t(r.target.value)};return w.jsx(w.Fragment,{children:w.jsx("div",{children:w.jsxs(Qe,{value:e,onChange:n,children:[w.jsx("option",{value:"all",children:"All"}),w.jsx("option",{value:"following",children:"Following"})]})})})};var Re={exports:{}},Ze="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",et=Ze,tt=et;function Oe(){}function Te(){}Te.resetWarningCache=Oe;var nt=function(){function e(r,o,s,i,l,d){if(d!==tt){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Te,resetWarningCache:Oe};return n.PropTypes=n,n};Re.exports=nt();var rt=Re.exports;const $=$e(rt),ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgB7VixbhNBEB0jjHQURsKRSBEkoEjhJi5o3FCk5psjQUNDkSYULqDISYTCSKawJTjJvOebjcabPe86kHiQeNLo9vZm93bfzbxZXW+1Wr2V/WMJe9fr9ZouB6xzjMuR7BkPxAcq2Fj+AXghjDhEFB2Lc3gijDgGac/EMbwRRoxB2mNxCo+E9WETkPZQHKJ0Ub9gX2AzaStapfYcNkz4z2E17LuOpe+R+pcgFIGPcjtcwT5p+wXslbY/SLv+be+dbHleRNiCL0LJX0Z9RK1CbcV6Ct9pYo4ZfKe6oJKUWxeBxFwlaDBuvUbMYY8qy9CfAnwlh1xKbpCFCfuwQaQxT0z70m5Q/a99dR5+5UbKwCJQGpUl4NqHatfBEvrQfJqbIBdhM0MWN/4mjME9U5TpZquaJYtpMNL2mih+Xc6H+8+yGZXbMIL/TP4OXpv2GazRfU1KJ8hFWG3aJ9KSRVLOpdWphbYZMfOI3JEZW+n4gF0IWBcBKdfbO0VuEVa3Kr0y6jY2rDrWJHylo2+b8KZAcemLA+QiLLXJihFEfYp8B6b9Q27qVIr8EjDtc9Xt3pAjzB4ZmHpMQZb7U7kpkH0VToo7N3lhnoXUDdhFyC+iCr1X5FLyJUiog1jj/kz16WfHnwWmJqOBpF3C9yuaj2wp1/GHUgYeUWpxhFyEhVO3PRosLFmqX+E5y/NJKNn0S5BVKuBXtzyD3SlKFk69OWWk4cqIaXTcgbSpFc/BvgM9dszNe7r8U4hTeFcM9f8ZMejwGemhdqdi0nPyA9GC+vc+1q3/PxC7ce5J5GN4I4wi/00cwxNhLkU+hhfC/lTk7w2/AbK0DT3l4b3DAAAAAElFTkSuQmCC",st="/tweets/assets/decorate-ad6b2e07.png",it=g.li`
position: relative;
width: 380px;
height: 500px;
background: url(${ot}) no-repeat 20px 20px, url(${st}) no-repeat 36px 28px, linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
border-radius: 20px;
margin: 13px;
display: flex;
align-items: flex-end;
`,at=g.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 0 36px 0;
::before {
    content: '';
    width: 100%;
    height: 8px;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
  }
`,ct=g.div`
position: absolute;
display: flex;
justify-content: center;
top: -40px;
left: 150px;
box-sizing: border-box;
width: 80px;
height: 80px;
border-radius: 50%;
border: 9px solid #EBD8FF;
overflow: hidden;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`,lt=g.img`
display: block;
width: 80px;
max-height: 100%;
`,X=g.p`
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`,fe=g.button`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 28px;
width: 196px;
height: 50px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: none;
cursor: pointer;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
margin-top: 26px;
background: ${e=>e.status?"#5CD3A8":"#EBD8FF"};
color: ${e=>e.status?"#fff":"#373737"};


&:hover{
background-color: #75B79F;
color: #fff;
}
`,ut=e=>{const t=e.toString().split("");return t.splice(3,0,","),t.join("")},Fe=({hero:e,onClick:t,isFollowing:n})=>{const[r,o]=T.useState(e.followers),{tweets:s,avatar:i,user:l}=e;return w.jsx(it,{children:w.jsxs(at,{children:[w.jsx(ct,{children:w.jsx(lt,{src:i,alt:"user avatar"})}),w.jsx(X,{style:{marginBottom:12,marginTop:62,fontWeight:600},children:l}),w.jsxs(X,{style:{marginBottom:12},children:[s," tweets"]}),w.jsxs(X,{children:[ut(r)," followers"]}),n?w.jsx(fe,{onClick:()=>{t(e),o(r-1)},status:!0,children:"Following"}):w.jsx(fe,{onClick:()=>{t(e),o(r+1)},status:!1,children:"Follow"})]})})};Fe.propTypes={hero:$.object,onClick:$.func,isFollowing:$.bool};const ft=g.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 1220px;
margin: 0 auto;
margin: 20px -20px 20px -20px;
`,dt=g.button`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 28px;
width: 196px;
height: 50px;
background-color: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: none;
cursor: pointer;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
margin: 0 auto;
&:hover{
background-color: #75B79F;
color: #fff;
}

`;function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:pt}=Object.prototype,{getPrototypeOf:se}=Object,J=(e=>t=>{const n=pt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>J(t)===e),z=e=>t=>typeof t===e,{isArray:P}=Array,U=z("undefined");function ht(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=R("ArrayBuffer");function mt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const wt=z("string"),E=z("function"),Be=z("number"),v=e=>e!==null&&typeof e=="object",yt=e=>e===!0||e===!1,_=e=>{if(J(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},xt=R("Date"),bt=R("File"),Et=R("Blob"),gt=R("FileList"),At=e=>v(e)&&E(e.pipe),St=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=J(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Rt=R("URLSearchParams"),Ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Pe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const je=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ue=e=>!U(e)&&e!==je;function te(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,o)=>{const s=e&&Pe(t,o)||o;_(t[s])&&_(r)?t[s]=te(t[s],r):_(r)?t[s]=te({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&L(arguments[r],n);return t}const Tt=(e,t,n,{allOwnKeys:r}={})=>(L(t,(o,s)=>{n&&E(o)?e[s]=Ce(o,n):e[s]=o},{allOwnKeys:r}),e),Ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ct=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Nt=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Bt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Pt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),Ut=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Dt=R("HTMLFormElement"),kt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=R("RegExp"),Le=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},It=e=>{Le(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ht=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Mt=()=>{},qt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),G="abcdefghijklmnopqrstuvwxyz",pe="0123456789",De={DIGIT:pe,ALPHA:G,ALPHA_DIGIT:G+G.toUpperCase()+pe},Jt=(e=16,t=De.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function zt(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vt=e=>{const t=new Array(10),n=(r,o)=>{if(v(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return L(r,(i,l)=>{const d=n(i,o+1);!U(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},Wt=R("AsyncFunction"),Vt=e=>e&&(v(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:P,isArrayBuffer:Ne,isBuffer:ht,isFormData:St,isArrayBufferView:mt,isString:wt,isNumber:Be,isBoolean:yt,isObject:v,isPlainObject:_,isUndefined:U,isDate:xt,isFile:bt,isBlob:Et,isRegExp:_t,isFunction:E,isStream:At,isURLSearchParams:Rt,isTypedArray:jt,isFileList:gt,forEach:L,merge:te,extend:Tt,trim:Ot,stripBOM:Ft,inherits:Ct,toFlatObject:Nt,kindOf:J,kindOfTest:R,endsWith:Bt,toArray:Pt,forEachEntry:Ut,matchAll:Lt,isHTMLForm:Dt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Le,freezeMethods:It,toObjectSet:Ht,toCamelCase:kt,noop:Mt,toFiniteNumber:qt,findKey:Pe,global:je,isContextDefined:Ue,ALPHABET:De,generateString:Jt,isSpecCompliantForm:zt,toJSONObject:vt,isAsyncFn:Wt,isThenable:Vt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=m.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(m,_e);Object.defineProperty(ke,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(ke);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Kt=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Ie(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(o,s){return o=Ie(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function $t(e){return a.isArray(e)&&!e.some(ne)}const Xt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,O){let A=f;if(f&&!O&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&$t(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(A=a.toArray(f)))return h=Ie(h),A.forEach(function(k,Ke){!(a.isUndefined(k)||k===null)&&t.append(i===!0?he([h],Ke,s):i===null?h:h+"[]",c(k))}),!1}return ne(f)?!0:(t.append(he(O,h,s),c(f)),!1)}const p=[],b=Object.assign(Xt,{defaultVisitor:u,convertValue:c,isVisitable:ne});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(A,N){(!(a.isUndefined(A)||A===null)&&o.call(t,A,a.isString(N)?N.trim():N,h,b))===!0&&y(A,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&W(e,this,t)}const He=ie.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Gt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||Gt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Qt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const we=Qt,qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Yt=typeof URLSearchParams<"u"?URLSearchParams:ie,Zt=typeof FormData<"u"?FormData:null,en=typeof Blob<"u"?Blob:null,tn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),nn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Yt,FormData:Zt,Blob:en},isStandardBrowserEnv:tn,isStandardBrowserWebWorkerEnv:nn,protocols:["http","https","file","blob","url","data"]};function rn(e,t){return W(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function on(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sn(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Je(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=sn(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(on(r),o,n,0)}),n}return null}const an={"Content-Type":void 0};function cn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const V={transitional:qe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return W(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),cn(t)):t}],transformResponse:[function(t){const n=this.transitional||V.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){V.headers[t]={}});a.forEach(["post","put","patch"],function(t){V.headers[t]=a.merge(an)});const ae=V,ln=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),un=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&ln[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function fn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const dn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function pn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,c){const u=j(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=I(l))}const i=(l,d)=>a.forEach(l,(c,u)=>s(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!dn(t)?i(un(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=j(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return fn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=j(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=j(i),i){const l=a.findKey(r,i);l&&(!n||Q(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||Q(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=I(o),delete n[s];return}const l=t?pn(s):String(s).trim();l!==s&&delete n[s],n[l]=I(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=j(i);r[l]||(hn(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(K.prototype);a.freezeMethods(K);const F=K;function Y(e,t){const n=this||ae,r=t||n,o=F.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function ze(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});function mn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const wn=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function yn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!yn(t)?xn(e,t):t}const bn=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function En(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function gn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function xe(e,t){let n=0;const r=gn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const An=typeof XMLHttpRequest<"u",Sn=An&&function(e){return new Promise(function(n,r){let o=e.data;const s=F.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const u=ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),Me(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=F.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};mn(function(A){n(A),d()},function(A){r(A),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||qe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||bn(u))&&e.xsrfCookieName&&wn.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",xe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",xe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new D(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=En(u);if(b&&S.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},H={http:Kt,xhr:Sn};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Rn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?H[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function be(e){return Z(e),e.headers=F.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Rn.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return Z(e),r.data=Y.call(e,e.transformResponse,r),r.headers=F.from(r.headers),r},function(r){return ze(r)||(Z(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=F.from(r.response.headers))),Promise.reject(r)})}const Ee=e=>e instanceof F?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(Ee(c),Ee(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||o,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(n[u]=b)}),n}const We="1.4.0",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};ce.transitional=function(t,n,r){function o(s,i){return"[Axios v"+We+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function On(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const re={assertOptions:On,validators:ce},C=re.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:re.assertOptions(o,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=F.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,b;if(!d){const f=[be.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(n);p<b;)u=u.then(f[p++],f[p++]);return u}b=l.length;let y=n;for(p=0;p<b;){const f=l[p++],h=l[p++];try{y=f(y)}catch(O){h.call(this,O);break}}try{u=be.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=B(this.defaults,t);const n=ve(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(B(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const M=q;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new D(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(o){t=o}),cancel:t}}}const Tn=le;function Fn(e){return function(n){return e.apply(null,n)}}function Cn(e){return a.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});const Nn=oe;function Ve(e){const t=new M(e),n=Ce(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ve(B(e,o))},n}const x=Ve(ae);x.Axios=M;x.CanceledError=D;x.CancelToken=Tn;x.isCancel=ze;x.VERSION=We;x.toFormData=W;x.AxiosError=m;x.Cancel=x.CanceledError;x.all=function(t){return Promise.all(t)};x.spread=Fn;x.isAxiosError=Cn;x.mergeConfig=B;x.AxiosHeaders=F;x.formToJSON=e=>Je(a.isHTMLForm(e)?new FormData(e):e);x.HttpStatusCode=Nn;x.default=x;const ue=x;ue.defaults.baseURL="https://645422f3e9ac46cedf383d70.mockapi.io";async function ee(e=1){try{const{data:t}=await ue.get(`/users?page=${e}&limit=3`);return t}catch(t){console.log(t)}}async function Ae(e){try{const{data:t}=await ue.put(`/users/${e.id}`,{...e});return t}catch(t){console.log(t)}}const Bn=()=>{const[e,t]=T.useState([]),[n,r]=T.useState(2),[o,s]=T.useState([]),{select:i}=T.useContext(Se);T.useEffect(()=>{ee().then(t);const c=JSON.parse(window.localStorage.getItem("FollowedUsers"))??[];s(c)},[]),T.useEffect(()=>{if(i==="following"){const c=JSON.parse(window.localStorage.getItem("FollowedUsers"))??[];t(c)}i==="all"&&ee().then(t)},[i]),T.useEffect(()=>{o.length&&window.localStorage.setItem("FollowedUsers",JSON.stringify(o))},[o]);const l=c=>{if(o.some(u=>u.id===c.id)){Ae({...c,followers:c.followers-1});const u=o.filter(p=>p.id!==c.id);u.length===0?(window.localStorage.removeItem("FollowedUsers"),s([])):s(u)}else{Ae({...c,followers:c.followers+1});const u=[...o,c];s(u)}},d=()=>{r(n+1),ee(n).then(c=>t([...e,...c]))};return w.jsxs(w.Fragment,{children:[w.jsx(ft,{children:e?e.map(c=>w.jsx(Fe,{hero:c,onClick:l,isFollowing:o.some(u=>u.id===c.id)},c.id)):null}),n<6&&i==="all"?w.jsx(dt,{onClick:d,children:"Load More"}):null]})};function Pn(e){return Xe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}const jn=g.div`
display: flex;
justify-content: space-between;
align-item: center;
width: 1200px;
margin: 0 auto;
margin-top: 30px;
`,Un=g(Ge)`
font-size: 18px;
display: flex;
align-items: center;
text-decoration: none;
color: #fff;
&:hover{
  color: #5432A0
}
`,Ln=g(Pn)`
width: 20px;
height: 20px;
margin-right: 10px;
fill: currentColor;
`,kn=()=>w.jsxs(w.Fragment,{children:[w.jsxs(jn,{children:[w.jsxs(Un,{to:"/",children:[w.jsx(Ln,{})," Go back"]}),w.jsx(Ye,{})]}),w.jsx(Bn,{})]});export{kn as default};